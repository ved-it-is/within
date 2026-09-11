import test from "node:test";
import assert from "node:assert/strict";
import {
  DIAGNOSTIC_QUESTIONS,
  PILLARS_CONFIG,
  ARCHETYPES,
  calculateDiagnosticScores,
  determineArchetype,
  readDiagnosticResult,
  saveDiagnosticResult,
  getUserEqTitle,
} from "../src/data/diagnostic.js";

test("diagnostic contains exactly 10 questions evenly divided among 5 pillars", () => {
  assert.equal(DIAGNOSTIC_QUESTIONS.length, 10);
  assert.equal(PILLARS_CONFIG.length, 5);

  for (const pillar of PILLARS_CONFIG) {
    const qs = DIAGNOSTIC_QUESTIONS.filter((q) => q.pillar === pillar.id);
    assert.equal(qs.length, 2);
  }

  for (const q of DIAGNOSTIC_QUESTIONS) {
    assert.equal(q.options.length, 4);
    assert.ok(q.prompt && q.prompt.length > 10);
  }
});

test("calculateDiagnosticScores normalizes scores between 15% and 100%", () => {
  // Lowest choices (score 1 for each)
  const minAnswers = Object.fromEntries(DIAGNOSTIC_QUESTIONS.map((q) => [q.id, 0]));
  const minScores = calculateDiagnosticScores(minAnswers);
  for (const val of Object.values(minScores)) {
    assert.ok(val >= 15 && val <= 30);
  }

  // Highest choices (score 4 for each)
  const maxAnswers = Object.fromEntries(DIAGNOSTIC_QUESTIONS.map((q) => [q.id, 3]));
  const maxScores = calculateDiagnosticScores(maxAnswers);
  for (const val of Object.values(maxScores)) {
    assert.equal(val, 100);
  }
});

test("determineArchetype maps high empathy to Empathetic Sensor with recommended chapters", () => {
  const scores = {
    awareness: 60,
    regulation: 30,
    empathy: 95,
    communication: 50,
    resilience: 40,
  };
  const archetype = determineArchetype(scores);
  assert.equal(archetype.id, "empathic-sensor");
  assert.ok(archetype.superpower.length > 0);
  assert.ok(archetype.growthEdge.length > 0);
  assert.equal(archetype.recommendedChapters.length, 3);
});

test("diagnostic persistence can save and read results safely", () => {
  const store = new Map();
  globalThis.localStorage = {
    getItem: (k) => store.get(k) ?? null,
    setItem: (k, v) => store.set(k, v),
  };

  assert.equal(readDiagnosticResult(), null);

  const mockResult = {
    scores: { awareness: 70, regulation: 80, empathy: 85, communication: 60, resilience: 75 },
    archetype: ARCHETYPES[0],
    completedAt: new Date().toISOString(),
  };

  assert.equal(saveDiagnosticResult(mockResult), true);
  assert.deepEqual(readDiagnosticResult(), mockResult);
});

test("getUserEqTitle assigns creative titles based on scores or logs", () => {
  // Untested user
  const defaultTitle = getUserEqTitle(null, []);
  assert.equal(defaultTitle.title, "Curious Seeker");

  // User with tracker logs
  const trackerTitle = getUserEqTitle(null, [{ id: 1 }, { id: 2 }, { id: 3 }]);
  assert.equal(trackerTitle.title, "Somatic Explorer");

  // High empathy diagnostic user
  const empathyTitle = getUserEqTitle({
    scores: { empathy: 95, awareness: 70, regulation: 60, communication: 50, resilience: 40 },
  });
  assert.equal(empathyTitle.title, "Empathy King");
  assert.equal(empathyTitle.badge, "👑");

  // High regulation user
  const regulationTitle = getUserEqTitle({
    scores: { regulation: 90, empathy: 50, awareness: 60, communication: 40, resilience: 55 },
  });
  assert.equal(regulationTitle.title, "Anchor of Calm");
  assert.equal(regulationTitle.badge, "⚓");
});
