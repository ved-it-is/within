// Stage 7: Toolkit (Chapter 31)
// Theme: Integrating Awareness, Regulation, Empathy, Communication, and Resilience

function q(id, chapterId, situation, prompt, choices, correctIndex, explanation, skillIds = ["toolkit"]) {
  return {
    id,
    kind: "action",
    situation,
    prompt,
    choices,
    correctIndex,
    explanation,
    mode: "practice",
    chapterId,
    skillIds,
    scoring: {
      eligible: true,
      maxPoints: 1,
      method: "editorial-answer-key",
      scope: "question-performance-only",
    },
    reviewStatus: "editorial-draft",
    sourceIds: ["framework-1", "framework-2"],
  };
}

export const stage7Questions = [
  // Point 1: Combine awareness, space to choose, care and a concrete next step.
  q(
    "31-action-1", 31,
    "You walk into a tense family dinner where an argumentative relative makes a provocative political remark directed at you.",
    "What would you do next?",
    [
      "Notice your heart rate spike, take a grounding exhale, and calmly pivot: 'I know you feel strongly about that, but tonight let's focus on catching up with everyone.'",
      "Slam your utensils on the table and shout down their argument to win the room.",
      "Smile tightly and suppress your irritation, then complain bitterly to someone else in the kitchen.",
      "Get up and leave the dinner immediately without saying a word to the hosts.",
    ],
    0,
    "Integrating physical self-awareness and a conscious pause allows you to deflect provocation gracefully without passive aggression."
  ),
  q(
    "31-understanding-1", 31,
    "When faced with a sudden crisis, why is following a rigid 4-step emotional script often less effective than fluid attunement?",
    "What perspective supports flexible mastery?",
    [
      "Emotional intelligence is an adaptable orientation of awareness, pause, and care—not a rigid checklist that fits every cultural or personal context.",
      "You should memorize a single script and apply it identically to every conflict.",
      "Scripts are useless because emotions are completely random and uncontrollable.",
      "If you cannot follow the exact steps in order, you have failed at emotional regulation.",
    ],
    0,
    "True emotional wisdom operates like an adaptable compass rather than an unbending formula."
  ),

  // Point 2: Combining the skills leaves room for your needs and information about their circumstances.
  q(
    "31-action-2", 31,
    "Your project partner has missed two check-ins and seems distracted, while your shared deadline is 48 hours away.",
    "What would you do next?",
    [
      "Call them and say: 'I noticed we missed our last two check-ins and I'm feeling anxious about Friday. Is everything okay on your end, and can we split the remaining tasks?'",
      "Report them immediately to leadership for negligence without asking what happened.",
      "Assume they don't care about the project and quietly do all their work for them while building intense resentment.",
      "Send a sarcastic meme about teamwork in the group chat.",
    ],
    0,
    "Synthesizing empathy with assertive boundary-setting balances care for the partner with practical accountability for the deadline."
  ),
  q(
    "31-understanding-2", 31,
    "Why does balancing personal needs with curiosity about another's circumstances produce more durable solutions?",
    "What is the key principle behind this balance?",
    [
      "Holding space for both your boundaries and their context prevents the twin traps of self-sacrificing people-pleasing and aggressive self-centeredness.",
      "One person's needs must always completely surrender to the other's.",
      "Curiosity about others makes you appear weak and easily manipulated.",
      "Focusing on your own boundaries means you never have to consider someone else's feelings.",
    ],
    0,
    "Sustainable relationships flourish in the space where mutual respect and clear boundaries meet."
  ),

  // Point 3: Awareness and a pause can make a clarifying next step more deliberate.
  q(
    "31-action-3", 31,
    "You receive an email from a coworker that feels dismissive of your contributions on a high-visibility initiative.",
    "What would you do next?",
    [
      "Step away from the keyboard, take a short walk to let the adrenaline subside, and draft a concise clarification focusing on the documented facts.",
      "Fire back an immediate reply copying their manager pointing out their unprofessional attitude.",
      "Forward the email to three other colleagues asking: 'Can you believe how toxic this person is?'",
      "Delete the email and disengage from the initiative entirely out of hurt.",
    ],
    0,
    "A deliberate pause prevents neurochemical reactivity from hijacking your professional communication."
  ),
  q(
    "31-understanding-3", 31,
    "You notice an intense surge of anger during a heated debate. What does the pause between impulse and response give you?",
    "What is the primary benefit of that pause?",
    [
      "It allows the logical prefrontal cortex to re-engage, enabling you to choose a response that aligns with your long-term values rather than your momentary temper.",
      "It gives you time to calculate the most hurtful insult possible.",
      "It allows you to pretend that you feel no anger whatsoever.",
      "It proves to the other person that they cannot shake your confidence.",
    ],
    0,
    "The pause is the foundation of emotional freedom, transforming unconscious reaction into intentional choice."
  ),

  // Point 4: A toolkit can combine care for another person with an honest boundary.
  q(
    "31-action-4", 31,
    "A close friend calls you in emotional distress at 11:30 PM on a weeknight when you have an important early morning presentation.",
    "What would you do next?",
    [
      "Listen with full presence for 15 minutes, validate their pain, and gently say: 'I love you and want to be fully present. Can I check in tomorrow at 5 PM when I can give you my undivided focus?'",
      "Stay on the phone until 3:30 AM listening while feeling exhausted and resentful, jeopardizing your presentation.",
      "Ignore the call completely and send no message explaining why.",
      "Answer the phone and angrily snap at them for having no consideration for your sleep schedule.",
    ],
    0,
    "Warm presence combined with an honest, gentle boundary protects both the friendship and your essential health."
  ),
  q(
    "31-understanding-4", 31,
    "How does understanding your personal emotional capacity protect you from compassion fatigue?",
    "What insight keeps empathy sustainable?",
    [
      "Recognizing that you cannot pour from an empty cup; setting healthy limits on your care preserves your ability to show up genuinely over the long term.",
      "Caring deeply requires burning yourself out for anyone who asks.",
      "Compassion fatigue only happens to selfish people who lack empathy.",
      "The only way to protect yourself is to stop caring about other people entirely.",
    ],
    0,
    "Sustainable empathy treats your own emotional and physical well-being as part of the ecosystem of care."
  ),

  // Point 5: The skills can work together to support a manageable response without requiring certainty.
  q(
    "31-action-5", 31,
    "You are facing an unexpected life transition where career, housing, and relationship dynamics are all in flux simultaneously.",
    "What would you do next?",
    [
      "Identify one small daily anchor you can control (like sleep and nutrition), connect with one supportive friend, and take one practical next step today.",
      "Demand immediate certainty in all three areas by making hasty, irreversible decisions tonight.",
      "Freeze in overwhelm, spend three days scrolling in bed, and avoid opening mail or messages.",
      "Blame external circumstances entirely and adopt a passive victim mentality.",
    ],
    0,
    "Integrating small controllable habits, community connection, and focused single steps creates stability amid life's larger storms."
  ),
  q(
    "31-understanding-5", 31,
    "As you integrate these 31 chapters into your life, what defines genuine emotional mastery?",
    "What is the ultimate reflection on emotional intelligence?",
    [
      "Emotional mastery is not never feeling angry, anxious, or sad—it is meeting whatever arises with self-compassion, curiosity, and the wisdom to choose a constructive path.",
      "Emotional mastery means achieving permanent happiness and never experiencing negative feelings again.",
      "It means knowing how to manipulate other people's emotions to achieve your personal goals.",
      "It means suppressing emotional reactions completely to operate like a purely logical machine.",
    ],
    0,
    "True emotional intelligence welcomes the full spectrum of human feeling and transforms it into understanding, connection, and resilience."
  ),
];
