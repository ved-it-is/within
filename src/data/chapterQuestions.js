import { database } from "./database.js";

export const chapterQuestions = Object.fromEntries(
  database.chapters.map((chapter) => [
    chapter.id,
    database.questions.filter(
      (question) =>
        question.mode === "practice" && question.chapterId === chapter.id,
    ),
  ]),
);
