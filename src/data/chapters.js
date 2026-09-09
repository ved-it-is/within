import { database } from "./database.js";

// Compatibility views keep existing UI imports and saved IDs stable.
export const chapters = database.chapters;
export const stages = database.stages;
export const learningSources = database.sources;
