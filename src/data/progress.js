import { progressStorage } from "../lib/progressStorage.js";
import { questions as introductionQuestions } from "./questions.js";
import { chapterQuestions } from "./chapterQuestions.js";
import { restoreSession } from "./practiceSession.js";

export const PROGRESS_KEY = "within-learning-v2";
const PREVIOUS_KEY = "within-learning-v1";

export function readProgress() {
  try {
    const current = progressStorage().getItem(PROGRESS_KEY);
    const saved = JSON.parse(
      current || progressStorage().getItem(PREVIOUS_KEY) || "{}",
    );
    const chapters = {};
    for (const [id, value] of Object.entries(saved?.chapters || {})) {
      if (
        !Object.hasOwn(chapterQuestions, id) ||
        !value ||
        typeof value !== "object"
      )
        continue;
      if (!current) {
        // Retain acknowledgement of the old reading format without treating
        // it as completion of the new ten-question session.
        if (value.completed)
          chapters[id] = {
            completed: false,
            legacyExplored: true,
            session: null,
          };
        continue;
      }
      const session = restoreSession(value.session, chapterQuestions[id]);
      chapters[id] = {
        completed: value.completed === true || session?.completed === true,
        legacyExplored: value.legacyExplored === true,
        session,
      };
    }
    return {
      unlocked: introductionComplete(saved?.introduction),
      introduction: saved?.introduction || {},
      chapters,
    };
  } catch {
    return { unlocked: false, introduction: {}, chapters: {} };
  }
}

export function saveProgress(progress) {
  try {
    progressStorage().setItem(PROGRESS_KEY, JSON.stringify(progress));
    return true;
  } catch {
    return false;
  }
}

export function introductionComplete(answers) {
  return (
    !!answers &&
    introductionQuestions.every(
      (q) =>
        Object.hasOwn(answers, q.id) &&
        (answers[q.id] === "unknown" || [0, 1, 2, 3].includes(answers[q.id])),
    )
  );
}
