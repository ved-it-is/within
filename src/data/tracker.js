import { progressStorage } from "../lib/progressStorage.js";

export const TRACKER_STORAGE_KEY = "within-emotion-tracker-v1";

export const EMOTIONS = [
  {
    id: "calm",
    label: "Calm & Grounded",
    icon: "🌿",
    color: "#10b981",
    tint: "#ecfdf5",
    nuances: ["Centered", "Content", "Relieved", "At ease", "Peaceful"],
  },
  {
    id: "joy",
    label: "Joyful & Energized",
    icon: "✨",
    color: "#f59e0b",
    tint: "#fffbeb",
    nuances: ["Grateful", "Enthusiastic", "Inspired", "Proud", "Playful"],
  },
  {
    id: "anxious",
    label: "Anxious & Uncertain",
    icon: "⚡",
    color: "#6366f1",
    tint: "#eef2ff",
    nuances: ["Apprehensive", "Overwhelmed", "Restless", "Pressured", "Hesitant"],
  },
  {
    id: "frustrated",
    label: "Frustrated & Irritated",
    icon: "🔥",
    color: "#ef4444",
    tint: "#fef2f2",
    nuances: ["Impatient", "Defensive", "Overlooked", "Resentful", "Annoyed"],
  },
  {
    id: "sad",
    label: "Sad & Heavy",
    icon: "🌧️",
    color: "#3b82f6",
    tint: "#eff6ff",
    nuances: ["Disappointed", "Drained", "Lonely", "Vulnerable", "Discouraged"],
  },
  {
    id: "reflective",
    label: "Reflective & Inquiring",
    icon: "🧭",
    color: "#8b5cf6",
    tint: "#f5f3ff",
    nuances: ["Curious", "Pondering", "Receptive", "Contemplative", "Seeking"],
  },
];

export const BODY_LOCATIONS = [
  { id: "chest", label: "Chest / Heart (tightness, flutter, warmth)" },
  { id: "throat", label: "Throat (constriction, lump, voice holding back)" },
  { id: "stomach", label: "Stomach / Gut (knots, sinking feeling, churn)" },
  { id: "shoulders", label: "Shoulders / Neck (tension, heavy weight)" },
  { id: "head", label: "Head / Brow (pressure, racing thoughts, fog)" },
  { id: "open", label: "Whole body (open, relaxed, ease)" },
];

export const CONTEXT_TRIGGERS = [
  "Work & Deadlines",
  "Relationship & Partner",
  "Family & Home",
  "Friends & Social",
  "Health & Fatigue",
  "Self-Expectations",
  "Uncertainty & Future",
  "Finances",
  "Quiet & Solitude",
];

export function getSmartRecommendation(emotionId, trigger, nuance) {
  switch (emotionId) {
    case "anxious":
      if (trigger === "Uncertainty & Future" || nuance === "Uncertain") {
        return {
          chapterId: 29,
          chapterTitle: "Move through uncertainty",
          domain: "resilience",
          reason:
            "Uncertainty triggers an alarm when we try to solve the unseen future all at once. Chapter 29 focuses on taking one grounded step amidst fog.",
        };
      }
      return {
        chapterId: 8,
        chapterTitle: "Find what helps you settle",
        domain: "emotional-regulation",
        reason:
          "Anxiety is somatic energy in the nervous system. Chapter 8 explores practical ways to dial down physiological activation before deciding what to do next.",
      };

    case "frustrated":
      if (trigger?.includes("Relationship") || trigger?.includes("Work")) {
        return {
          chapterId: 24,
          chapterTitle: "Stay constructive in disagreement",
          domain: "communication",
          reason:
            "Frustration often tempts us to speak from accusation. Chapter 24 helps separate what happened from the narrative we attach to it.",
        };
      }
      return {
        chapterId: 7,
        chapterTitle: "Pause before you respond",
        domain: "emotional-regulation",
        reason:
          "The gap between feeling anger and choosing your words is where relationships are saved. Chapter 7 trains that vital split-second pause.",
      };

    case "sad":
      if (nuance === "Disappointed") {
        return {
          chapterId: 26,
          chapterTitle: "Meet disappointment with care",
          domain: "resilience",
          reason:
            "Disappointment is grief for an expectation that didn't happen. Chapter 26 shows how to treat yourself with diagnostic kindness rather than self-blame.",
        };
      }
      return {
        chapterId: 18,
        chapterTitle: "Acknowledge a feeling",
        domain: "empathy",
        reason:
          "Sadness softens when it is given space to exist without an urgent rush to 'fix' it. Chapter 18 explores the power of simply letting a feeling be heard.",
      };

    case "reflective":
      return {
        chapterId: 1,
        chapterTitle: "What am I feeling?",
        domain: "self-awareness",
        reason:
          "You are already in a curious, receptive mindset. Chapter 1 strengthens your inner radar to notice subtle emotional signals before they compound.",
      };

    case "joy":
    case "calm":
    default:
      return {
        chapterId: 5,
        chapterTitle: "What matters to me here?",
        domain: "self-awareness",
        reason:
          "When you are centered and calm, it is the best time to explore what truly matters to your values, boundary choices, and long-term peace.",
      };
  }
}

export function readTrackerEntries() {
  try {
    const raw = progressStorage().getItem(TRACKER_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveTrackerEntries(entries) {
  try {
    progressStorage().setItem(TRACKER_STORAGE_KEY, JSON.stringify(entries));
    return true;
  } catch {
    return false;
  }
}

export function addTrackerEntry(entry) {
  const current = readTrackerEntries();
  const newEntry = {
    id: `checkin-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    timestamp: Date.now(),
    date: new Date().toISOString().slice(0, 10),
    timeString: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    ...entry,
  };
  const updated = [newEntry, ...current];
  saveTrackerEntries(updated);
  return { updated, newEntry };
}

export function deleteTrackerEntry(id) {
  const current = readTrackerEntries();
  const updated = current.filter((item) => item.id !== id);
  saveTrackerEntries(updated);
  return updated;
}

export function getTrackerStats(entries = []) {
  if (!entries.length) {
    return {
      total: 0,
      topEmotion: null,
      topTrigger: null,
      avgIntensity: 0,
    };
  }

  const emotionCounts = {};
  const triggerCounts = {};
  let totalIntensity = 0;

  for (const item of entries) {
    const eId = item.emotionId || item.emotion?.id;
    if (eId) emotionCounts[eId] = (emotionCounts[eId] || 0) + 1;
    if (item.trigger) triggerCounts[item.trigger] = (triggerCounts[item.trigger] || 0) + 1;
    totalIntensity += item.intensity || 3;
  }

  const topEmotionId = Object.entries(emotionCounts).sort((a, b) => b[1] - a[1])[0]?.[0];
  const topTrigger = Object.entries(triggerCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
  const topEmotionObj = EMOTIONS.find((e) => e.id === topEmotionId) || null;

  return {
    total: entries.length,
    topEmotion: topEmotionObj,
    topTrigger,
    avgIntensity: (totalIntensity / entries.length).toFixed(1),
  };
}
