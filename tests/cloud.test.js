import test from "node:test";
import assert from "node:assert/strict";
import { createCloudStore } from "../src/lib/progressStorage.js";
import { introductionComplete } from "../src/data/progress.js";
import { questions } from "../src/data/questions.js";
const key = "within-learning-v2";
test("five completed situations survive account reload, but do not unlock a new account", async () => {
  const rows = new Map();
  const local = memory();
  const open = async (userId) => {
    const store = createCloudStore({
      userId,
      local,
      onStatus: () => {},
      remote: {
        load: async () => rows.get(userId) || [],
        save: async (key, data, revision) => {
          rows.set(userId, [{ key, data, revision: revision + 1 }]);
          return revision + 1;
        },
      },
    });
    await store.load();
    return store;
  };
  const first = await open("returning");
  const introduction = Object.fromEntries(
    questions.map((q) => [q.id, "unknown"]),
  );
  first.setItem(key, JSON.stringify({ introduction }));
  assert.equal(await first.flush(), true);
  first.close();
  const returning = await open("returning");
  assert.equal(
    introductionComplete(JSON.parse(returning.getItem(key)).introduction),
    true,
  );
  returning.close();
  const newcomer = await open("new");
  assert.equal(
    introductionComplete(
      JSON.parse(newcomer.getItem(key) || "{}").introduction,
    ),
    false,
  );
  newcomer.close();
});

test("flush reports unsuccessful writes so sign-out can protect unsynced progress", async () => {
  let online = false;
  const store = createCloudStore({
    userId: "me",
    local: memory(),
    onStatus: () => {},
    remote: {
      load: async () => [],
      save: async () => {
        if (!online) throw new Error("offline");
        return 1;
      },
    },
  });
  await store.load();
  store.setItem(key, '{"introduction":{}}');
  assert.equal(await store.flush(), false);
  online = true;
  assert.equal(await store.flush(), true);
  store.close();
});
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
test("persistent conflicts use bounded retries without overwriting the server", async () => {
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
  assert.equal(calls, 6);
  assert.equal(status, "pending");
});

test("JSONB key ordering does not create a write", async () => {
  let writes = 0;
  const store = createCloudStore({
    userId: "me",
    local: memory(),
    onStatus: () => {},
    remote: {
      load: async () => [
        {
          key,
          data: { chapters: {}, introduction: { a: 0, b: 1 } },
          revision: 1,
        },
      ],
      save: async () => {
        writes++;
        return 2;
      },
    },
  });
  await store.load();
  store.setItem(
    key,
    JSON.stringify({ introduction: { b: 1, a: 0 }, chapters: {} }),
  );
  await store.flush();
  assert.equal(writes, 0);
});

test("pending work survives closing the store and signing into the same account", async () => {
  const local = memory();
  let online = false;
  let saved = null;
  const remote = {
    load: async () => [],
    save: async (key, data) => {
      if (!online) throw Error("offline");
      saved = data;
      return 1;
    },
  };
  const first = createCloudStore({
    userId: "me",
    local,
    remote,
    onStatus: () => {},
  });
  await first.load();
  first.setItem(key, '{"introduction":{"one":0}}');
  await first.flush();
  first.close();
  online = true;
  const second = createCloudStore({
    userId: "me",
    local,
    remote,
    onStatus: () => {},
  });
  await second.load();
  assert.deepEqual(JSON.parse(second.getItem(key)), {
    introduction: { one: 0 },
  });
  assert.equal(await second.flush(), true);
  assert.deepEqual(saved, { introduction: { one: 0 } });
});

test("a conflict preserves independent responses and the server's existing answer", async () => {
  let row = { key, data: { introduction: { one: 0 } }, revision: 1 };
  let changes = 0;
  const store = createCloudStore({
    userId: "me",
    local: memory(),
    onStatus: () => {},
    onReconcile: () => changes++,
    remote: {
      load: async () => [row],
      save: async (key, data, revision) => {
        if (revision !== row.revision) throw Error("progress_conflict");
        row = { key, data, revision: revision + 1 };
        return row.revision;
      },
    },
  });
  await store.load();
  row = { key, data: { introduction: { one: 2, remote: 1 } }, revision: 2 };
  store.setItem(key, JSON.stringify({ introduction: { one: 3, local: 0 } }));
  assert.equal(await store.flush(), true);
  assert.deepEqual(row.data.introduction, { one: 2, remote: 1, local: 0 });
  assert.equal(changes, 1);
});
