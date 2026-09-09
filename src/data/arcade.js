import { progressStorage } from "../lib/progressStorage.js";
import { database } from "./database.js";
export const ARCADE_KEY = "within-arcade-v2";
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
export const emptyArcade = () => ({
  version: 2,
  firstAnswers: {},
  queue: shuffle(arcadeIds),
  retired: [],
  feedback: null,
  cycle: 1,
});
export function readArcade() {
  try {
    const saved = JSON.parse(
      progressStorage().getItem(ARCADE_KEY) ||
        progressStorage().getItem("within-arcade-v1") ||
        "null",
    );
    const result = emptyArcade();
    if (!saved) return result;
    for (const id of arcadeIds) {
      const c = saved.firstAnswers?.[id];
      if (c === "unknown" || [0, 1, 2, 3].includes(c))
        result.firstAnswers[id] = c;
    }
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
    const validQueue =
      saved.version === 2 &&
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
export function submitArcadeAnswer(progress, choice) {
  const id = progress.queue[0];
  if (!id || progress.feedback || ![0, 1, 2, 3, "unknown"].includes(choice))
    return progress;
  return {
    ...progress,
    firstAnswers: Object.hasOwn(progress.firstAnswers, id)
      ? progress.firstAnswers
      : { ...progress.firstAnswers, [id]: choice },
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
  let queue = progress.queue.slice(1),
    retired = progress.retired,
    cycle = progress.cycle;
  if (outcome === "retry") queue.splice(Math.min(3, queue.length), 0, id);
  if (outcome === "revealed") retired = [...new Set([...retired, id])];
  if (!queue.length) {
    queue = shuffle(
      [...arcadeIds].filter((q) => !retired.includes(q)),
      random,
    );
    cycle++;
  }
  return { ...progress, queue, retired, cycle, feedback: null };
}
