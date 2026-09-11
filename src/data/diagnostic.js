import { progressStorage } from "../lib/progressStorage.js";

export const DIAGNOSTIC_STORAGE_KEY = "within-eq-diagnostic-v1";

export const PILLARS_CONFIG = [
  { id: "awareness", label: "Self-Awareness", color: "#6366f1", angle: -90 },
  { id: "regulation", label: "Self-Regulation", color: "#10b981", angle: -18 },
  { id: "empathy", label: "Empathy", color: "#d97706", angle: 54 },
  { id: "communication", label: "Communication", color: "#8b5cf6", angle: 126 },
  { id: "resilience", label: "Resilience", color: "#ec4899", angle: 198 },
];

export const DIAGNOSTIC_QUESTIONS = [
  {
    id: "sa-1",
    pillar: "awareness",
    prompt: "When you start getting stressed or upset, how quickly do you notice what is happening?",
    options: [
      { text: "I only notice long after I’ve already snapped or shut down.", score: 1 },
      { text: "I feel physical irritation, but I can’t tell what emotion it is.", score: 2 },
      { text: "I recognize the tension fairly quickly, though I sometimes miss the trigger.", score: 3 },
      { text: "I immediately catch the somatic cue (heart rate, gut, chest) and know what stirred it.", score: 4 },
    ],
  },
  {
    id: "sa-2",
    pillar: "awareness",
    prompt: "How specific is your emotional vocabulary when describing how you feel?",
    options: [
      { text: "I usually stick to ‘fine’, ‘tired’, ‘bad’, or ‘stressed’.", score: 1 },
      { text: "I know if I’m sad or angry, but nuanced words feel unnecessary.", score: 2 },
      { text: "I can identify feelings like ‘overlooked’, ‘hesitant’, or ‘apprehensive’ after a moment.", score: 3 },
      { text: "I easily separate mixed feelings (e.g. feeling both relieved and guilty at once).", score: 4 },
    ],
  },
  {
    id: "reg-1",
    pillar: "regulation",
    prompt: "When someone sends an unexpected email or message that feels unfair, what is your immediate reflex?",
    options: [
      { text: "I immediately fire back a reply defending my position while adrenaline is high.", score: 1 },
      { text: "I stew in resentment and withdraw, ignoring it for days.", score: 2 },
      { text: "I draft a heated response, but make myself wait an hour before deciding.", score: 3 },
      { text: "I step back, take three breaths, let the 90-second surge settle, and reply from facts.", score: 4 },
    ],
  },
  {
    id: "reg-2",
    pillar: "regulation",
    prompt: "How do you handle uncomfortable internal surges like jealousy, anxiety, or impatience?",
    options: [
      { text: "They take over the steering wheel and dictate my behavior.", score: 1 },
      { text: "I judge myself harshly for feeling them and try to suppress them completely.", score: 2 },
      { text: "I tolerate the discomfort, but it takes significant conscious effort not to vent.", score: 3 },
      { text: "I can observe the sensation without having to obey the impulse or condemn myself.", score: 4 },
    ],
  },
  {
    id: "emp-1",
    pillar: "empathy",
    prompt: "When someone shares a problem that seems minor to you, what is your initial response?",
    options: [
      { text: "I tell them they are overreacting or offer a quick fix right away.", score: 1 },
      { text: "I listen politely, but internally dismiss why they are making such a big deal.", score: 2 },
      { text: "I try to imagine why it matters to them, even if I wouldn’t react that way.", score: 3 },
      { text: "I validate their emotional reality before offering any opinion or advice.", score: 4 },
    ],
  },
  {
    id: "emp-2",
    pillar: "empathy",
    prompt: "When walking into a room or meeting, how quickly do you sense the emotional climate?",
    options: [
      { text: "I focus solely on the agenda or task; emotional subtexts rarely register.", score: 1 },
      { text: "I usually only notice if someone is openly shouting or in tears.", score: 2 },
      { text: "I pick up on quiet tension, hesitation, or disengagement in the room.", score: 3 },
      { text: "I immediately read subtle postural shifts, eye contact, and unspoken dynamics.", score: 4 },
    ],
  },
  {
    id: "comm-1",
    pillar: "communication",
    prompt: "When someone repeatedly steps on your boundaries or interrupts you, how do you communicate it?",
    options: [
      { text: "I say nothing until I boil over, then deliver an accusatory outburst.", score: 1 },
      { text: "I drop passive-aggressive hints and hope they get the message.", score: 2 },
      { text: "I state my boundary clearly, though I often feel lingering anxiety afterward.", score: 3 },
      { text: "I use clean observation + request (‘When X happens, I need Y’) calmly and firmly.", score: 4 },
    ],
  },
  {
    id: "comm-2",
    pillar: "communication",
    prompt: "In a tense disagreement, what is your primary focus during the conversation?",
    options: [
      { text: "Winning the argument and making sure they acknowledge where they were wrong.", score: 1 },
      { text: "Ending the conversation as quickly as possible, even by giving in falsely.", score: 2 },
      { text: "Making sure my side is understood while trying not to escalate tension.", score: 3 },
      { text: "Finding shared ground, checking my assumptions, and repairing connection.", score: 4 },
    ],
  },
  {
    id: "res-1",
    pillar: "resilience",
    prompt: "When an important plan or project unexpectedly falls apart, how do you interpret it?",
    options: [
      { text: "As personal proof that I am inadequate or fundamentally unlucky.", score: 1 },
      { text: "I get bitter and blame outside circumstances or unfair people.", score: 2 },
      { text: "I feel demoralized for a couple of days, then slowly pull myself back together.", score: 3 },
      { text: "I allow myself to feel disappointed, then treat the outcome as valuable diagnostic data.", score: 4 },
    ],
  },
  {
    id: "res-2",
    pillar: "resilience",
    prompt: "When facing a period of heavy uncertainty with no clear timeline or answers:",
    options: [
      { text: "I freeze or panic, feeling paralyzed until certainty returns.", score: 1 },
      { text: "I exhaust myself trying to control every micro-detail to feel safe.", score: 2 },
      { text: "I acknowledge the discomfort and focus on taking the next visible step.", score: 3 },
      { text: "I distinguish what is within my influence from what isn’t, and anchor in daily values.", score: 4 },
    ],
  },
];

export const ARCHETYPES = [
  {
    id: "empathic-sensor",
    title: "The Empathetic Sensor",
    tagline: "Deep emotional radar with a need for protective boundaries.",
    icon: "👁️",
    badgeColor: "#d97706",
    superpower:
      "You pick up subtle atmospheric shifts, unspoken grief, and relational dynamics before anyone else. People naturally feel safe and understood around you.",
    growthEdge:
      "You easily absorb other people’s emotional turbulence as your own. Your growth edge is setting boundaries without guilt and regulating internal overwhelm.",
    topPillars: ["empathy", "awareness"],
    growthPillars: ["regulation", "communication"],
    recommendedChapters: [
      { id: 20, title: "Care while keeping your boundaries" },
      { id: 8, title: "Find what helps you settle" },
      { id: 23, title: "Say no respectfully" },
    ],
  },
  {
    id: "steady-anchor",
    title: "The Steady Anchor",
    tagline: "Calm under pressure with a growth edge in emotional expression.",
    icon: "⚓",
    badgeColor: "#10b981",
    superpower:
      "When chaos strikes, you don’t panic. You bring stability, grounded composure, and a steady hand that keeps others from spinning out of control.",
    growthEdge:
      "You can sometimes under-communicate your own emotional needs or appear distant. Your growth edge is putting your inner experience into words before withdrawal sets in.",
    topPillars: ["regulation", "resilience"],
    growthPillars: ["communication", "awareness"],
    recommendedChapters: [
      { id: 21, title: "Put your experience into words" },
      { id: 2, title: "Find the word that fits" },
      { id: 18, title: "Acknowledge a feeling" },
    ],
  },
  {
    id: "swift-solver",
    title: "The Swift Problem-Solver",
    tagline: "Resilient and action-driven, learning to pause before solving.",
    icon: "⚡",
    badgeColor: "#ec4899",
    superpower:
      "You don’t drown in setbacks. You analyze, adapt, and move forward with decisive energy and pragmatic resilience.",
    growthEdge:
      "You may rush past the feeling phase—in yourself and others—treating emotions as problems to fix rather than human signals to understand first.",
    topPillars: ["resilience", "regulation"],
    growthPillars: ["empathy", "awareness"],
    recommendedChapters: [
      { id: 16, title: "Listen before preparing your reply" },
      { id: 1, title: "What am I feeling?" },
      { id: 19, title: "Support without taking over" },
    ],
  },
  {
    id: "intuitive-reflector",
    title: "The Intuitive Reflector",
    tagline: "Rich self-awareness with a growth edge in decisive action.",
    icon: "🧭",
    badgeColor: "#6366f1",
    superpower:
      "You have an honest, highly articulated relationship with your own mind. You understand your motives, flaws, and subtleties with rare clarity.",
    growthEdge:
      "You can become trapped in the maze of introspection and rumination. Your growth edge is stepping out of analysis and taking grounded, imperfect action.",
    topPillars: ["awareness", "empathy"],
    growthPillars: ["regulation", "resilience"],
    recommendedChapters: [
      { id: 10, title: "Choose your next step" },
      { id: 29, title: "Move through uncertainty" },
      { id: 7, title: "Pause before you respond" },
    ],
  },
  {
    id: "balanced-navigator",
    title: "The Balanced Navigator",
    tagline: "Harmonious emotional agility across diverse social landscapes.",
    icon: "🌿",
    badgeColor: "#8b5cf6",
    superpower:
      "You maintain balanced agility between feeling your emotions and making constructive choices. You can pivot between listening and speaking with clarity.",
    growthEdge:
      "Edge-case dilemmas where competing values collide (e.g. honoring personal truth vs. collective harmony).",
    topPillars: ["communication", "regulation"],
    growthPillars: ["resilience", "empathy"],
    recommendedChapters: [
      { id: 31, title: "Your emotional toolkit" },
      { id: 15, title: "Different doesn’t mean unreasonable" },
      { id: 25, title: "Repair after a difficult moment" },
    ],
  },
];

export function calculateDiagnosticScores(answers) {
  // answers is an object of { [questionId]: optionIndex (0-3) }
  const rawScores = {
    awareness: 0,
    regulation: 0,
    empathy: 0,
    communication: 0,
    resilience: 0,
  };

  for (const q of DIAGNOSTIC_QUESTIONS) {
    const selectedIndex = answers[q.id];
    const option = q.options[selectedIndex !== undefined ? selectedIndex : 0];
    const scoreVal = option ? option.score : 2;
    rawScores[q.pillar] += scoreVal;
  }

  // Max score per pillar is 8 (2 questions * 4 max score), Min is 2
  // Normalize each to 0 - 100%
  const normalizedScores = {};
  for (const [pillar, raw] of Object.entries(rawScores)) {
    // raw is between 2 and 8
    const pct = Math.round(((raw - 2) / 6) * 100);
    normalizedScores[pillar] = Math.max(15, Math.min(100, pct));
  }

  return normalizedScores;
}

export function determineArchetype(scores) {
  // Sort pillars by score descending
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const highest = sorted[0][0];
  const lowest = sorted[sorted.length - 1][0];

  // Map to matching archetype
  if (highest === "empathy" || (sorted[1] && sorted[1][0] === "empathy" && lowest === "regulation")) {
    return ARCHETYPES.find((a) => a.id === "empathic-sensor") || ARCHETYPES[0];
  }
  if (highest === "regulation" && (lowest === "communication" || lowest === "awareness")) {
    return ARCHETYPES.find((a) => a.id === "steady-anchor") || ARCHETYPES[1];
  }
  if (highest === "resilience" && (lowest === "empathy" || lowest === "awareness")) {
    return ARCHETYPES.find((a) => a.id === "swift-solver") || ARCHETYPES[2];
  }
  if (highest === "awareness" && (lowest === "regulation" || lowest === "resilience")) {
    return ARCHETYPES.find((a) => a.id === "intuitive-reflector") || ARCHETYPES[3];
  }
  return ARCHETYPES.find((a) => a.id === "balanced-navigator") || ARCHETYPES[4];
}

export function readDiagnosticResult() {
  try {
    const raw = progressStorage().getItem(DIAGNOSTIC_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && parsed.scores && parsed.archetype ? parsed : null;
  } catch {
    return null;
  }
}

export function saveDiagnosticResult(result) {
  try {
    progressStorage().setItem(DIAGNOSTIC_STORAGE_KEY, JSON.stringify(result));
    return true;
  } catch {
    return false;
  }
}

export function getUserEqTitle(diagnosticResult, trackerEntries = []) {
  if (!diagnosticResult || !diagnosticResult.scores) {
    if (trackerEntries && trackerEntries.length >= 3) {
      return {
        title: "Somatic Explorer",
        badge: "🌿",
        subtitle: "Mindful Observer",
        description: "Building daily somatic awareness and emotional clarity through consistent practice.",
        superpower: "Early bodily detection of feeling states",
        growthEdge: "Taking the 3-min baseline to unlock your complete EQ pillar breakdown",
      };
    }
    return {
      title: "Curious Seeker",
      badge: "✨",
      subtitle: "Inner Journey Begun",
      description: "Taking your first conscious steps into deeper emotional intelligence and self-mastery.",
      superpower: "Curiosity and openness to self-observation",
      growthEdge: "Take the 3-minute diagnostic to reveal your primary archetype",
    };
  }

  const scores = diagnosticResult.scores;
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [topPillar] = sorted[0];

  if (topPillar === "empathy") {
    return {
      title: "Empathy King",
      badge: "👑",
      subtitle: "Master of Emotional Resonance",
      description: "You sense subtle interpersonal currents and create deep psychological safety for others.",
      superpower: "Deep empathy and relational intuition",
      growthEdge: "Preserving your energy with kind, firm boundaries",
    };
  }
  if (topPillar === "awareness") {
    return {
      title: "Somatic Sage",
      badge: "🌿",
      subtitle: "Guardian of Inner Clarity",
      description: "You catch bodily cues and micro-shifts early, turning raw feelings into conscious insight.",
      superpower: "Acute self-awareness and somatic radar",
      growthEdge: "Translating inner reflection into decisive outward action",
    };
  }
  if (topPillar === "regulation") {
    return {
      title: "Anchor of Calm",
      badge: "⚓",
      subtitle: "Center in the Storm",
      description: "You pause before responding and prevent emotional contagion from throwing you off balance.",
      superpower: "Composure and grounded emotional regulation",
      growthEdge: "Expressing vulnerable feelings before retreating inward",
    };
  }
  if (topPillar === "resilience") {
    return {
      title: "Phoenix of Resilience",
      badge: "🔥",
      subtitle: "Unshakable Core",
      description: "You treat setbacks not as personal identity failures, but as valuable feedback and evolution.",
      superpower: "Pragmatic recovery and constructive grit",
      growthEdge: "Allowing yourself to feel sad or disappointed without rushing to fix it",
    };
  }
  if (topPillar === "communication") {
    return {
      title: "Connection Catalyst",
      badge: "💬",
      subtitle: "Bridge Builder",
      description: "You articulate hard truths with empathy, clarity, and constructive repair.",
      superpower: "Clear nonviolent communication and boundary setting",
      growthEdge: "Staying grounded when another person remains defensive",
    };
  }
  return {
    title: "Harmonious Navigator",
    badge: "🧭",
    subtitle: "Balanced Whole-Spectrum EQ",
    description: "You demonstrate balanced emotional awareness, regulation, and relational connection across moments.",
    superpower: "Versatile, well-rounded emotional response",
    growthEdge: "Continuing to deepen nuanced emotional vocabulary",
  };
}
