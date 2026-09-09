import assert from "node:assert/strict";
import { test } from "node:test";
import { chapters, stages } from "../src/data/chapters.js";
import { chapterQuestions } from "../src/data/chapterQuestions.js";
import {
  PROGRESS_KEY,
  readProgress,
  saveProgress,
} from "../src/data/progress.js";
import {
  answerQuestion,
  createSession,
  nextQuestion,
  restoreSession,
  sessionCounts,
} from "../src/data/practiceSession.js";

const questions = chapterQuestions[1];
function answerCurrent(session, choice) {
  const question = questions.find((item) => item.id === session.queue[0]);
  return nextQuestion(
    answerQuestion(
      session,
      questions,
      choice === "correct"
        ? question.correctIndex
        : choice === "retry"
          ? (question.correctIndex + 1) % 4
          : choice,
    ),
  );
}

test("31 chapters each contain exactly ten complete questions with a single answer", () => {
  assert.equal(chapters.length, 31);
  const ids = new Set();
  for (const chapter of chapters) {
    const bank = chapterQuestions[chapter.id];
    assert.equal(bank.length, 10);
    assert.equal(
      bank.filter((question) => question.kind === "action").length,
      5,
    );
    assert.equal(new Set(bank.map((question) => question.situation)).size, 5);
    for (const question of bank) {
      assert.ok(!ids.has(question.id));
      ids.add(question.id);
      assert.equal(new Set(question.choices).size, 4);
      assert.ok([0, 1, 2, 3].includes(question.correctIndex));
      assert.ok(question.situation && question.prompt && question.explanation);
      question.choices.forEach((choice) => assert.ok(choice.trim()));
    }
  }
  assert.equal(ids.size, 310);
  assert.deepEqual(
    stages.map(
      (stage) =>
        chapters.filter((chapter) => chapter.stageId === stage.id).length,
    ),
    [5, 5, 5, 5, 5, 5, 1],
  );
});

test("eight correct plus two unknown finishes with eight matched and no replacements", () => {
  let session = createSession(questions);
  for (let index = 0; index < 10; index++)
    session = answerCurrent(session, index < 2 ? "unknown" : "correct");
  assert.equal(session.completed, true);
  assert.equal(session.queue.length, 0);
  assert.deepEqual(sessionCounts(session), {
    matched: 8,
    revealed: 2,
    retry: 0,
  });
  assert.equal(Object.keys(session.attempts).length, 10);
  assert.equal(
    Object.values(session.attempts).reduce((sum, count) => sum + count, 0),
    10,
  );
});

test("missed questions return after the initial set until corrected", () => {
  let session = answerCurrent(createSession(questions), "retry");
  assert.equal(session.queue.at(-1), questions[0].id);
  assert.equal(new Set(session.queue).size, 10);
  for (let index = 1; index < 10; index++)
    session = answerCurrent(session, "correct");
  assert.deepEqual(session.queue, [questions[0].id]);
  session = answerCurrent(session, "retry");
  assert.equal(session.completed, false);
  assert.deepEqual(session.queue, [questions[0].id]);
  session = answerCurrent(session, "correct");
  assert.equal(session.completed, true);
  assert.equal(session.attempts[questions[0].id], 3);
  assert.equal(sessionCounts(session).matched, 10);
});

test("unknown retires a previously missed question and all-unknown is not ten correct", () => {
  let session = answerCurrent(createSession(questions), "retry");
  for (let index = 1; index < 10; index++)
    session = answerCurrent(session, "unknown");
  session = answerCurrent(session, "unknown");
  assert.equal(session.completed, true);
  assert.deepEqual(sessionCounts(session), {
    matched: 0,
    revealed: 10,
    retry: 0,
  });
});

test("feedback survives refresh; duplicate answers and advance clicks do not skip questions", () => {
  const session = answerQuestion(
    createSession(questions),
    questions,
    "unknown",
  );
  assert.equal(
    answerQuestion(session, questions, questions[0].correctIndex),
    session,
  );
  const restored = restoreSession(
    JSON.parse(JSON.stringify(session)),
    questions,
  );
  assert.deepEqual(restored, session);
  const next = nextQuestion(restored);
  assert.ok(!next.queue.includes(questions[0].id));
  assert.equal(nextQuestion(next), next);
  assert.equal(restoreSession({ ...next, queue: [] }, questions), null);
  assert.equal(
    restoreSession(
      { ...next, queue: [...next.queue, next.queue[0]] },
      questions,
    ),
    null,
  );
});

test("every chapter can finish; retry and reveal behaviour is consistent across all banks", () => {
  for (const bank of Object.values(chapterQuestions)) {
    let session = createSession(bank);
    for (let i = 0; i < 10; i++) {
      const question = bank.find((item) => item.id === session.queue[0]);
      session = nextQuestion(
        answerQuestion(
          session,
          bank,
          i % 3 === 0 ? "unknown" : question.correctIndex,
        ),
      );
    }
    assert.equal(session.completed, true);
    assert.deepEqual(restoreSession(session, bank), session);
    assert.deepEqual(sessionCounts(session), {
      matched: 6,
      revealed: 4,
      retry: 0,
    });
  }
});

test("storage migrates the old format, validates saves, and tolerates unavailable storage", () => {
  const values = new Map();
  globalThis.localStorage = {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
  globalThis.sessionStorage = { getItem: () => null };
  assert.deepEqual(readProgress(), {
    unlocked: false,
    introduction: {},
    chapters: {},
  });
  values.set(
    "within-learning-v1",
    JSON.stringify({
      unlocked: false,
      introduction: {},
      chapters: { 1: { completed: true, step: 3 } },
    }),
  );
  assert.deepEqual(readProgress(), {
    unlocked: false,
    introduction: {},
    chapters: { 1: { completed: false, legacyExplored: true, session: null } },
  });
  const session = answerQuestion(
    createSession(questions),
    questions,
    "unknown",
  );
  const expected = {
    unlocked: false,
    introduction: {},
    chapters: { 1: { completed: false, legacyExplored: false, session } },
  };
  assert.equal(saveProgress(expected), true);
  assert.deepEqual(readProgress(), expected);
  values.set(
    PROGRESS_KEY,
    JSON.stringify({
      unlocked: false,
      introduction: {},
      chapters: {
        1: { session: { version: 2, queue: [] }, reflection: "not retained" },
        99: {},
      },
    }),
  );
  assert.deepEqual(readProgress(), {
    unlocked: false,
    introduction: {},
    chapters: { 1: { completed: false, legacyExplored: false, session: null } },
  });
  values.set(PROGRESS_KEY, "broken JSON");
  assert.deepEqual(readProgress(), {
    unlocked: false,
    introduction: {},
    chapters: {},
  });
  globalThis.sessionStorage = { getItem: () => "yes" };
  assert.equal(readProgress().unlocked, false);
  globalThis.localStorage = {
    getItem: () => {
      throw new Error("Unavailable");
    },
    setItem: () => {
      throw new Error("Unavailable");
    },
  };
  assert.equal(saveProgress(expected), false);
  assert.equal(readProgress().unlocked, false);
});
