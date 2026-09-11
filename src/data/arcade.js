import { progressStorage } from "../lib/progressStorage.js";
import { database } from "./database.js";

export const ARCADE_KEY = "within-arcade-v3";
export const arcade = database.arcade;
export const questionById = Object.fromEntries(
  database.questions.map((q) => [q.id, q]),
);
export const arcadeIds = new Set(arcade.domains.flatMap((d) => d.questionIds));

export function shuffle(ids, random = Math.random) {
  const result = [...ids];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function scoreAnswers(answers, ids = [...arcadeIds]) {
  let correct = 0,
    answered = 0,
    unknown = 0;
  for (const id of new Set(ids)) {
    if (!arcadeIds.has(id) || !Object.hasOwn(answers, id)) continue;
    const c = answers[id];
    if (c === "unknown") unknown++;
    else if ([0, 1, 2, 3].includes(c)) {
      answered++;
      if (c === questionById[id].correctIndex) correct++;
    }
  }
  return {
    correct,
    answered,
    unknown,
    seen: answered + unknown,
    accuracy: answered ? Math.round((correct / answered) * 100) : null,
    points: correct * arcade.scoring.pointsPerCorrect,
  };
}

// Adaptive Spacing and Strategy Helpers
export function getRetrySpacing(retryCount) {
  const spacings = [3, 7, 15, 25];
  return spacings[Math.min(retryCount, spacings.length - 1)];
}

export function getRetryStrategy(retryCount) {
  if (retryCount >= 3) return "escalated";
  if (retryCount >= 2) return "hint_ready";
  return "normal";
}

export const emptyArcade = () => ({
  version: 3,
  firstAnswers: {},
  retryHistory: {},
  retryStrategies: {},
  queue: shuffle([...arcadeIds]),
  retired: [],
  feedback: null,
  cycle: 1,
});

export function readArcade() {
  try {
    const saved = JSON.parse(
      progressStorage().getItem(ARCADE_KEY) ||
        progressStorage().getItem("within-arcade-v2") ||
        progressStorage().getItem("within-arcade-v1") ||
        "null",
    );
    const result = emptyArcade();
    if (!saved) return result;

    // Load firstAnswers
    for (const id of arcadeIds) {
      const c = saved.firstAnswers?.[id];
      if (c === "unknown" || [0, 1, 2, 3].includes(c))
        result.firstAnswers[id] = c;
    }

    // Load v3 additions or initialize defaults
    result.retryHistory = saved.retryHistory || {};
    result.retryStrategies = saved.retryStrategies || {};

    // Load retired list with backward compatibility
    result.retired = [
      ...new Set([
        ...(Array.isArray(saved.retired) ? saved.retired : []),
        ...Object.keys(saved.version === 1 ? result.firstAnswers : {}).filter(
          (id) => result.firstAnswers[id] === "unknown",
        ),
        ...Object.values(saved.rounds || {}).flatMap((r) =>
          Object.entries(r.session?.outcomes || {})
            .filter(([, v]) => v === "revealed")
            .map(([id]) => id),
        ),
      ]),
    ].filter((id) => arcadeIds.has(id));

    // Validate Queue
    const validQueue =
      (saved.version === 2 || saved.version === 3) &&
      Array.isArray(saved.queue) &&
      new Set(saved.queue).size === saved.queue.length &&
      saved.queue.every(
        (id) => arcadeIds.has(id) && !result.retired.includes(id),
      );

    result.queue = validQueue
      ? saved.queue
      : shuffle([...arcadeIds].filter((id) => !result.retired.includes(id)));

    result.cycle =
      Number.isSafeInteger(saved.cycle) && saved.cycle > 0 ? saved.cycle : 1;

    // Validate Feedback
    const f = saved.feedback;
    if (
      validQueue &&
      f?.id === result.queue[0] &&
      [0, 1, 2, 3, "unknown"].includes(f.choice)
    )
      result.feedback = {
        id: f.id,
        choice: f.choice,
        outcome:
          f.choice === "unknown"
            ? "revealed"
            : f.choice === questionById[f.id].correctIndex
              ? "matched"
              : "retry",
      };

    return result;
  } catch {
    return emptyArcade();
  }
}

export function saveArcade(progress) {
  try {
    progressStorage().setItem(ARCADE_KEY, JSON.stringify(progress));
    return true;
  } catch {
    return false;
  }
}

function updateRetryHistory(history, questionId, choice, isFirstAttempt) {
  if (isFirstAttempt) {
    return history;
  }
  const question = questionById[questionId];
  const current = history[questionId] || {
    attempts: 0,
    lastAttempt: Date.now(),
    skill: question?.framework?.[0] || "unknown",
    answers: [],
    correct: false,
  };
  return {
    ...history,
    [questionId]: {
      ...current,
      attempts: current.attempts + 1,
      lastAttempt: Date.now(),
      answers: [...current.answers, choice],
      correct: choice === question?.correctIndex,
    },
  };
}

export function submitArcadeAnswer(progress, choice) {
  const id = progress.queue[0];
  if (!id || progress.feedback || ![0, 1, 2, 3, "unknown"].includes(choice))
    return progress;

  const isFirstAttempt = !Object.hasOwn(progress.firstAnswers, id);

  return {
    ...progress,
    firstAnswers: isFirstAttempt
      ? { ...progress.firstAnswers, [id]: choice }
      : progress.firstAnswers,
    retryHistory: updateRetryHistory(
      progress.retryHistory || {},
      id,
      choice,
      isFirstAttempt,
    ),
    feedback: {
      id,
      choice,
      outcome:
        choice === "unknown"
          ? "revealed"
          : choice === questionById[id].correctIndex
            ? "matched"
            : "retry",
    },
  };
}

export function advanceArcade(progress, random = Math.random) {
  if (!progress.feedback) return progress;

  const { id, outcome } = progress.feedback;
  let queue = progress.queue.slice(1);
  let retired = progress.retired;
  let cycle = progress.cycle;
  let retryStrategies = { ...(progress.retryStrategies || {}) };

  if (outcome === "retry") {
    const retryCount = progress.retryHistory?.[id]?.attempts || 0;
    const spacing = getRetrySpacing(retryCount);
    const strategy = getRetryStrategy(retryCount);

    retryStrategies[id] = strategy;
    queue.splice(Math.min(spacing, queue.length), 0, id);
  }

  if (outcome === "revealed") {
    retired = [...new Set([...retired, id])];
  }

  if (!queue.length) {
    queue = shuffle(
      [...arcadeIds].filter((q) => !retired.includes(q)),
      random,
    );
    cycle++;
  }

  return {
    ...progress,
    queue,
    retired,
    cycle,
    retryStrategies,
    feedback: null,
  };
}

export function detectSkillPatterns(progress) {
  const skillRetries = {};
  const skillAttempts = {};

  for (const [questionId, history] of Object.entries(progress.retryHistory || {})) {
    const question = questionById[questionId];
    const skill = question?.framework?.[0] || "unknown";

    if (!skillRetries[skill]) {
      skillRetries[skill] = 0;
      skillAttempts[skill] = 0;
    }
    skillRetries[skill] += history.attempts;
    skillAttempts[skill]++;
  }

  return Object.entries(skillRetries)
    .map(([skill, totalRetries]) => ({
      skill,
      totalRetries,
      questionsAttempted: skillAttempts[skill],
      avgRetriesPerQuestion: (totalRetries / skillAttempts[skill]).toFixed(2),
    }))
    .sort((a, b) => b.totalRetries - a.totalRetries);
}

export function countConsecutiveCorrect(attempts, questionsAnswered, correctAnswers) {
  if (!Array.isArray(questionsAnswered) || questionsAnswered.length === 0) {
    return 0;
  }

  let streak = 0;

  for (let i = questionsAnswered.length - 1; i >= 0; i--) {
    const item = questionsAnswered[i];
    if (!item) continue;

    let isCorrect = false;

    if (typeof item === "object") {
      const qId = item.questionId || item.id;
      const choice = item.choice;

      if (typeof item.isCorrect === "boolean") {
        isCorrect = item.isCorrect;
      } else if (correctAnswers) {
        if (typeof correctAnswers === "function") {
          isCorrect = Boolean(correctAnswers(qId, choice));
        } else if (correctAnswers instanceof Set) {
          isCorrect = correctAnswers.has(qId);
        } else if (typeof correctAnswers[qId] === "boolean") {
          isCorrect = correctAnswers[qId];
        } else if (choice !== undefined && correctAnswers[qId] !== undefined) {
          isCorrect = choice === correctAnswers[qId];
        } else if (choice !== undefined && questionById[qId]) {
          isCorrect = choice === questionById[qId].correctIndex;
        }
      } else if (choice !== undefined && questionById[qId]) {
        isCorrect = choice === questionById[qId].correctIndex;
      }
    } else {
      const qId = item;
      if (correctAnswers) {
        if (typeof correctAnswers === "function") {
          isCorrect = Boolean(correctAnswers(qId));
        } else if (correctAnswers instanceof Set) {
          isCorrect = correctAnswers.has(qId);
        } else if (typeof correctAnswers[qId] === "boolean") {
          isCorrect = correctAnswers[qId];
        } else if (attempts && attempts[qId] && typeof attempts[qId].isCorrect === "boolean") {
          isCorrect = attempts[qId].isCorrect;
        }
      }
    }

    if (isCorrect) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}