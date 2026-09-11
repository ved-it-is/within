import test from "node:test";
import assert from "node:assert/strict";
import { database } from "../src/data/database.js";
import { questions } from "../src/data/questions.js";
import { introductionComplete } from "../src/data/progress.js";
import {
  ARCADE_KEY,
  arcade,
  arcadeIds,
  questionById,
  shuffle,
  emptyArcade,
  scoreAnswers,
  submitArcadeAnswer,
  advanceArcade,
  readArcade,
  saveArcade,
  countConsecutiveCorrect,
} from "../src/data/arcade.js";
test("700 unique keyed questions across seven topics", () => {
  assert.equal(arcadeIds.size, 700);
  assert.equal(database.questions.length, 705);
  for (const d of arcade.domains) assert.equal(d.questionIds.length, 100);
  for (const id of arcadeIds) {
    const q = questionById[id];
    assert.equal(q.choices.length, 4);
    assert.ok([0, 1, 2, 3].includes(q.correctIndex));
    assert.ok(q.explanation);
  }
});
test("gate requires all five actual introduction responses", () => {
  assert.equal(introductionComplete({ unlocked: true }), false);
  const answers = Object.fromEntries(questions.map((q) => [q.id, "unknown"]));
  assert.equal(introductionComplete(answers), true);
  delete answers[questions[4].id];
  assert.equal(introductionComplete(answers), false);
  answers[questions[4].id] = 9;
  assert.equal(introductionComplete(answers), false);
});
test("shuffle has complete coverage and variable order", () => {
  const a = shuffle(arcadeIds, () => 0),
    b = shuffle(arcadeIds, () => 0.99);
  assert.equal(new Set(a).size, 700);
  assert.notDeepEqual(a, b);
});
test("retries are spaced; first score cannot be inflated", () => {
  let p = emptyArcade();
  const id = p.queue[0];
  p = submitArcadeAnswer(p, (questionById[id].correctIndex + 1) % 4);
  assert.equal(submitArcadeAnswer(p, 0), p);
  p = advanceArcade(p);
  assert.equal(p.queue[3], id);
  for (let i = 0; i < 3; i++)
    p = advanceArcade(
      submitArcadeAnswer(p, questionById[p.queue[0]].correctIndex),
    );
  p = advanceArcade(submitArcadeAnswer(p, questionById[id].correctIndex));
  assert.equal(scoreAnswers(p.firstAnswers, [id]).correct, 0);
});
test("full bank rolls into another cycle, reveals stay retired", () => {
  let p = emptyArcade();
  const retired = p.queue[0];
  p = advanceArcade(submitArcadeAnswer(p, "unknown"));
  for (let i = 0; i < 699; i++)
    p = advanceArcade(
      submitArcadeAnswer(p, questionById[p.queue[0]].correctIndex),
    );
  assert.equal(p.cycle, 2);
  assert.equal(p.queue.length, 699);
  assert.ok(!p.queue.includes(retired));
  const before = scoreAnswers(p.firstAnswers);
  p = advanceArcade(
    submitArcadeAnswer(p, questionById[p.queue[0]].correctIndex),
  );
  assert.deepEqual(scoreAnswers(p.firstAnswers), before);
});
test("all revealed bank finishes safely without replacing questions", () => {
  let p = emptyArcade();
  for (let i = 0; i < 700; i++)
    p = advanceArcade(submitArcadeAnswer(p, "unknown"));
  assert.equal(p.queue.length, 0);
  assert.equal(scoreAnswers(p.firstAnswers).accuracy, null);
  assert.equal(scoreAnswers(p.firstAnswers).points, 0);
});
test("save restores feedback and migrates prior scores", () => {
  const data = new Map();
  globalThis.localStorage = {
    getItem: (k) => data.get(k) || null,
    setItem: (k, v) => data.set(k, v),
  };
  let p = submitArcadeAnswer(emptyArcade(), 0);
  saveArcade(p);
  assert.deepEqual(readArcade(), p);
  data.delete(ARCADE_KEY);
  data.set(
    "within-arcade-v1",
    JSON.stringify({ version: 1, firstAnswers: p.firstAnswers, rounds: {} }),
  );
  assert.deepEqual(readArcade().firstAnswers, p.firstAnswers);
});

test("revealed feedback survives refresh before Next", () => {
  const data = new Map();
  globalThis.localStorage = {
    getItem: (k) => data.get(k) || null,
    setItem: (k, v) => data.set(k, v),
  };
  const p = submitArcadeAnswer(emptyArcade(), "unknown");
  saveArcade(p);
  assert.deepEqual(readArcade(), p);
});

test("countConsecutiveCorrect tracks consecutive matches and resets on wrong or unknown", () => {
  assert.equal(countConsecutiveCorrect({}, [], {}), 0);
  const answers = [
    { questionId: "q1", choice: 0, isCorrect: true },
    { questionId: "q2", choice: 1, isCorrect: true },
    { questionId: "q3", choice: 2, isCorrect: true },
    { questionId: "q4", choice: 3, isCorrect: true },
  ];
  assert.equal(countConsecutiveCorrect({}, answers, {}), 4);

  const broken = [...answers, { questionId: "q5", choice: 0, isCorrect: false }];
  assert.equal(countConsecutiveCorrect({}, broken, {}), 0);

  const restarted = [...broken, { questionId: "q6", choice: 2, isCorrect: true }];
  assert.equal(countConsecutiveCorrect({}, restarted, {}), 1);
});
