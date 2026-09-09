import test from "node:test";
import assert from "node:assert/strict";
import { createCloudStore } from "../src/lib/progressStorage.js";
const key = "within-learning-v2";
function memory() {
  const data = new Map();
  return {
    getItem: (k) => data.get(k) || null,
    setItem: (k, v) => data.set(k, v),
    data,
  };
}
test("account storage does not inherit guest or other-user progress", async () => {
  const local = memory();
  local.setItem(key, '{"unlocked":true}');
  local.setItem("within-account:other:" + key, "{}");
  const store = createCloudStore({
    userId: "me",
    local,
    onStatus: () => {},
    remote: { load: async () => [], save: async () => 1 },
  });
  await store.load();
  assert.equal(store.getItem(key), null);
});
test("cloud saves retain edits made during an in-flight write", async () => {
  let release;
  let revision = 0;
  const writes = [];
  const store = createCloudStore({
    userId: "me",
    local: memory(),
    onStatus: () => {},
    remote: {
      load: async () => [],
      save: async (k, data, expected) => {
        writes.push(data);
        assert.equal(expected, revision);
        if (!revision) await new Promise((r) => (release = r));
        return ++revision;
      },
    },
  });
  await store.load();
  store.setItem(key, '{"step":1}');
  store.setItem(key, '{"step":2}');
  release();
  await store.flush();
  assert.deepEqual(writes, [{ step: 1 }, { step: 2 }]);
});
test("failed saves remain retryable and preserve local data", async () => {
  let fail = true;
  const local = memory();
  const store = createCloudStore({
    userId: "me",
    local,
    onStatus: () => {},
    remote: {
      load: async () => [],
      save: async () => {
        if (fail) throw Error("offline");
        return 1;
      },
    },
  });
  await store.load();
  store.setItem(key, '{"step":1}');
  await store.flush();
  assert.equal(local.getItem("within-account:me:" + key), '{"step":1}');
  fail = false;
  await store.flush();
  assert.equal(store.getItem(key), '{"step":1}');
});
test("conflicts stop overwrites of a newer cloud record", async () => {
  let calls = 0;
  let status;
  const store = createCloudStore({
    userId: "me",
    local: memory(),
    onStatus: (s) => (status = s),
    remote: {
      load: async () => [],
      save: async () => {
        calls++;
        throw Error("progress_conflict");
      },
    },
  });
  await store.load();
  store.setItem(key, "{}");
  await store.flush();
  await store.flush();
  assert.equal(calls, 1);
  assert.match(status, /another device/);
});
