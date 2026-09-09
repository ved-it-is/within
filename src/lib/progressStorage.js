// Browser caches are scoped to the signed-in user. Guest progress is never
// silently attached to an account on a shared device.
let activeStore = null;
export const setProgressStore = (store) => {
  activeStore = store;
};
export function progressStorage() {
  return activeStore || localStorage;
}

export function createCloudStore({ userId, remote, local, onStatus }) {
  const keys = ["within-learning-v2", "within-arcade-v2"];
  const revisions = new Map();
  const values = new Map();
  const pending = new Map();
  let running = null;
  let closed = false;
  let conflict = false;
  const cacheKey = (key) => `within-account:${userId}:${key}`;
  const cache = (key, value) => {
    try {
      local.setItem(cacheKey(key), value);
    } catch {
      /* Remote save can still succeed. */
    }
  };
  async function flush() {
    if (running) return running;
    if (closed || conflict) return false;
    running = (async () => {
      while (pending.size && !closed) {
        const [key, value] = pending.entries().next().value;
        onStatus("Saving…");
        try {
          const revision = await remote.save(
            key,
            JSON.parse(value),
            revisions.get(key) || 0,
          );
          revisions.set(key, revision);
          if (pending.get(key) === value) pending.delete(key);
        } catch (error) {
          conflict = error.message?.includes("progress_conflict");
          onStatus(
            conflict
              ? "Progress changed on another device. Your local work is preserved; reload to use the cloud version."
              : "Unable to sync. Your work is saved on this device. Retry when connected.",
          );
          return false;
        }
      }
      if (!closed) onStatus("Progress synced");
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
        const saved = row ? JSON.stringify(row.data) : null;
        const previous = local.getItem(cacheKey(key));
        // Retain a recovery copy before replacing a stale or unsynced cache.
        if (previous && previous !== saved) cache(`${key}:recovery`, previous);
        values.set(key, saved);
        revisions.set(key, row?.revision || 0);
        if (saved) cache(key, saved);
      }
      onStatus("Progress synced");
    },
    getItem(key) {
      return values.get(key) || null;
    },
    setItem(key, value) {
      if (!keys.includes(key) || closed || values.get(key) === value) return;
      values.set(key, value);
      cache(key, value);
      pending.set(key, value);
      void flush();
    },
    flush,
    close() {
      closed = true;
    },
  };
}
