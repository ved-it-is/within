import test from "node:test";
import assert from "node:assert/strict";
import {
  EMOTIONS,
  BODY_LOCATIONS,
  CONTEXT_TRIGGERS,
  getSmartRecommendation,
  getTrackerStats,
  readTrackerEntries,
  saveTrackerEntries,
  addTrackerEntry,
  deleteTrackerEntry,
} from "../src/data/tracker.js";

test("emotions, somatic locations, and triggers are defined", () => {
  assert.ok(EMOTIONS.length >= 6);
  assert.ok(BODY_LOCATIONS.length >= 6);
  assert.ok(CONTEXT_TRIGGERS.length >= 8);

  for (const emotion of EMOTIONS) {
    assert.ok(emotion.id && emotion.label && emotion.icon);
    assert.ok(Array.isArray(emotion.nuances) && emotion.nuances.length > 0);
  }
});

test("smart recommendation engine maps emotional states to relevant curriculum chapters", () => {
  const recAnxiety = getSmartRecommendation("anxious", "Work & Deadlines", "Apprehensive");
  assert.equal(recAnxiety.chapterId, 8);
  assert.equal(recAnxiety.domain, "emotional-regulation");

  const recUncertainty = getSmartRecommendation("anxious", "Uncertainty & Future", "Uncertain");
  assert.equal(recUncertainty.chapterId, 29);
  assert.equal(recUncertainty.domain, "resilience");

  const recFrustration = getSmartRecommendation("frustrated", "Relationship & Partner", "Impatient");
  assert.equal(recFrustration.chapterId, 24);
  assert.equal(recFrustration.domain, "communication");

  const recSadness = getSmartRecommendation("sad", "Work", "Disappointed");
  assert.equal(recSadness.chapterId, 26);
  assert.equal(recSadness.domain, "resilience");
});

test("tracker entries can be added, retrieved, summarized in stats, and deleted", () => {
  const store = new Map();
  globalThis.localStorage = {
    getItem: (key) => store.get(key) ?? null,
    setItem: (key, val) => store.set(key, val),
  };

  assert.deepEqual(readTrackerEntries(), []);
  assert.deepEqual(getTrackerStats([]), {
    total: 0,
    topEmotion: null,
    topTrigger: null,
    avgIntensity: 0,
  });

  const { updated, newEntry } = addTrackerEntry({
    emotion: { id: "anxious", label: "Anxious", icon: "⚡" },
    nuance: "Restless",
    intensity: 4,
    bodyLocation: "Chest",
    trigger: "Work & Deadlines",
    reflection: "Deadline tomorrow.",
  });

  assert.equal(updated.length, 1);
  assert.equal(newEntry.intensity, 4);
  assert.equal(readTrackerEntries().length, 1);

  const stats = getTrackerStats(updated);
  assert.equal(stats.total, 1);
  assert.equal(stats.topEmotion.id, "anxious");
  assert.equal(stats.topTrigger, "Work & Deadlines");
  assert.equal(stats.avgIntensity, "4.0");

  const afterDelete = deleteTrackerEntry(newEntry.id);
  assert.equal(afterDelete.length, 0);
  assert.deepEqual(readTrackerEntries(), []);
});
