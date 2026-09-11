import { sameProgress, mergeProgress } from "./progressMerge.js";

let activeStore = null;
export const setProgressStore = (store) => {
  activeStore = store;
};
export function progressStorage() {
  return activeStore || localStorage;
}

export function createCloudStore({
  userId,
  remote,
  local,
  onStatus,
  onReconcile = () => {},
}) {
  const keys = [
    "within-learning-v2",
    "within-arcade-v2",
    "within-emotion-tracker-v1",
    "within-eq-diagnostic-v1",
  ];
  const revisions = new Map(),
    bases = new Map(),
    values = new Map(),
    pending = new Map();
  let running = null,
    closed = false;
  const cacheKey = (key) => `within-account:${userId}:${key}`;
  const readCache = (key) => {
    try {
      return local.getItem(cacheKey(key));
    } catch {
      return null;
    }
  };
  const cache = (key, value) => {
    try {
      local.setItem(cacheKey(key), value);
      return true;
    } catch {
      return false;
    }
  };
  const draft = (key, value) =>
    cache(
      `${key}:pending`,
      JSON.stringify({
        value,
        base: bases.get(key),
        revision: revisions.get(key) || 0,
      }),
    );
  const parse = (value) => (value == null ? null : JSON.parse(value));
  async function flush() {
    if (running) return running;
    if (closed) return false;
    running = (async () => {
      let conflicts = 0,
        reconciled = false;
      while (pending.size && !closed) {
        const [key, value] = pending.entries().next().value;
        onStatus("saving");
        try {
          const revision = await remote.save(
            key,
            parse(value),
            revisions.get(key) || 0,
          );
          if (closed) return false;
          revisions.set(key, revision);
          bases.set(key, parse(value));
          if (pending.get(key) === value) {
            pending.delete(key);
            cache(`${key}:pending`, "null");
          } else draft(key, pending.get(key));
        } catch (error) {
          if (closed) return false;
          if (error.message?.includes("progress_conflict") && conflicts++ < 2) {
            try {
              const rows = await remote.load();
              if (closed) return false;
              const row = rows.find((item) => item.key === key);
              const latest = row?.data || null;
              const current = pending.get(key);
              cache(`${key}:recovery`, current);
              const merged = mergeProgress(
                bases.get(key),
                parse(current),
                latest,
              );
              const next = JSON.stringify(merged);
              bases.set(key, latest);
              revisions.set(key, row?.revision || 0);
              values.set(key, next);
              cache(key, next);
              if (sameProgress(merged, latest)) {
                pending.delete(key);
                cache(`${key}:pending`, "null");
              } else {
                pending.set(key, next);
                draft(key, next);
              }
              reconciled ||= !sameProgress(parse(current), merged);
              continue;
            } catch {
              /* Keep the draft and retry in the background. */
            }
          }
          onStatus("pending");
          if (reconciled) onReconcile();
          return false;
        }
      }
      if (!closed) {
        onStatus("saved");
        if (reconciled) onReconcile();
      }
      return !closed && pending.size === 0;
    })();
    try {
      return await running;
    } finally {
      running = null;
    }
  }
  return {
    async load() {
      const rows = await remote.load();
      for (const key of keys) {
        const row = rows.find((item) => item.key === key);
        const saved = row?.data || null;
        const previous = readCache(key);
        if (previous) {
          try {
            if (!sameProgress(parse(previous), saved))
              cache(`${key}:recovery`, previous);
          } catch {
            cache(`${key}:recovery`, previous);
          }
        }
        bases.set(key, saved);
        revisions.set(key, row?.revision || 0);
        let restored = saved;
        try {
          const unsaved = parse(readCache(`${key}:pending`));
          if (unsaved?.value)
            restored = mergeProgress(unsaved.base, parse(unsaved.value), saved);
        } catch {
          /* Ignore an incomplete browser cache. */
        }
        const value = restored == null ? null : JSON.stringify(restored);
        values.set(key, value);
        if (value) cache(key, value);
        if (!sameProgress(restored, saved)) {
          pending.set(key, value);
          draft(key, value);
        } else cache(`${key}:pending`, "null");
      }
      onStatus(pending.size ? "pending" : "saved");
    },
    getItem(key) {
      return values.get(key) || null;
    },
    setItem(key, value) {
      if (
        !keys.includes(key) ||
        closed ||
        sameProgress(parse(values.get(key)), parse(value))
      )
        return;
      values.set(key, value);
      cache(key, value);
      pending.set(key, value);
      draft(key, value);
      void flush();
    },
    flush,
    close() {
      closed = true;
    },
  };
}
