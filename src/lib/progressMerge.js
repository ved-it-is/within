// JSONB does not preserve object key order. Compare content, not serialization.
export function sameProgress(a, b) {
  if (a === b) return true;
  if (!a || !b || typeof a !== "object" || typeof b !== "object") return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  const keys = Object.keys(a);
  return (
    keys.length === Object.keys(b).length &&
    keys.every((key) => Object.hasOwn(b, key) && sameProgress(a[key], b[key]))
  );
}

// Preserve independent edits. When both sessions changed the same value,
// retain the server value; a local recovery copy is kept by the store.
export function mergeProgress(base, local, remote) {
  if (sameProgress(local, base)) return remote;
  if (sameProgress(remote, base) || sameProgress(local, remote)) return local;
  const object = (value) =>
    value && typeof value === "object" && !Array.isArray(value);
  if (object(local) && object(remote) && (base == null || object(base))) {
    const result = {};
    for (const key of new Set([
      ...Object.keys(local),
      ...Object.keys(remote),
    ])) {
      // A practice session is an atomic state machine: never combine its queue
      // with another session's feedback or answer selection.
      const value =
        key === "session"
          ? sameProgress(remote[key], base?.[key])
            ? local[key]
            : remote[key]
          : mergeProgress(base?.[key], local[key], remote[key]);
      if (value !== undefined) result[key] = value;
    }
    // Arcade's queue/feedback/cycle also belong to a single session.
    if ("queue" in local && "firstAnswers" in local) {
      const owner = sameProgress(remote, base) ? local : remote;
      for (const key of ["queue", "feedback", "cycle"])
        result[key] = owner[key];
      result.retired = [
        ...new Set([...(local.retired || []), ...(remote.retired || [])]),
      ];
      result.queue = (result.queue || []).filter(
        (id) => !result.retired.includes(id),
      );
      if (result.feedback && result.queue[0] !== owner.queue?.[0])
        result.feedback = null;
    }
    return result;
  }
  return remote;
}
