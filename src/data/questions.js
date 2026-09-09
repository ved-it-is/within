import { database } from "./database.js";

export const abilities = Object.fromEntries(
  database.skills
    .filter((skill) => database.introductionSkillIds.includes(skill.id))
    .map((skill) => [skill.id, skill.label]),
);
export const questions = database.questions.filter(
  (question) => question.mode === "introduction",
);
