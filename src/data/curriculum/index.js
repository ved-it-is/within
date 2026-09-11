// Aggregator for all 31 Chapters of Curriculum Questions (310 total)
import { stage1Questions } from "./stage1-awareness.js";
import { stage2Questions } from "./stage2-regulation.js";
import { stage3Questions } from "./stage3-perspective.js";
import { stage4Questions } from "./stage4-empathy.js";
import { stage5Questions } from "./stage5-communication.js";
import { stage6Questions } from "./stage6-resilience.js";
import { stage7Questions } from "./stage7-toolkit.js";

export const curriculumQuestions = [
  ...stage1Questions,
  ...stage2Questions,
  ...stage3Questions,
  ...stage4Questions,
  ...stage5Questions,
  ...stage6Questions,
  ...stage7Questions,
];
