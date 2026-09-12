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
    "At a family dinner, a relative makes a provocative remark aimed at you.",
    "What would you do next?",
    [
      "Notice your heart rate, take a breath, and calmly redirect: 'I know you feel strongly — tonight let's focus on catching up.'",
      "Slam your utensils and argue back to make your point to the room.",
      "Smile tightly, say nothing, then complain bitterly to someone in the kitchen.",
      "Get up and leave without saying anything to your hosts.",
    ],
    0,
    "Noticing physical arousal and pausing lets you deflect provocation gracefully without passive aggression."
  ),
  q(
    "31-understanding-1", 31,
    "You've learned a lot of EQ frameworks, but in real moments they feel too rigid to follow step by step.",
    "What's the most useful way to think about these tools?",
    [
      "EQ is an adaptable orientation — awareness, pause, and care — not a script that fits every situation identically.",
      "You should memorize one fixed script and apply it to every conflict exactly.",
      "If you can't follow the steps in order, you've failed at emotional regulation.",
      "Emotions are too unpredictable for frameworks to help — rely on instinct instead.",
    ],
    0,
    "True emotional wisdom operates like a compass — adaptable and directional — rather than an unbending formula."
  ),

  // Point 2: Combining the skills leaves room for your needs and information about their circumstances.
  q(
    "31-action-2", 31,
    "Your project partner missed two check-ins and the deadline is 48 hours away.",
    "What would you do next?",
    [
      "Call them: 'We missed our last two check-ins and I'm feeling anxious about Friday — is everything okay? Can we split the remaining tasks?'",
      "Report them to leadership for negligence without asking what happened.",
      "Do all their work quietly while building intense resentment.",
      "Send a sarcastic message about teamwork in the group chat.",
    ],
    0,
    "Combining empathy with assertive accountability balances care for your partner with practical deadline ownership."
  ),
  q(
    "31-understanding-2", 31,
    "You need something but also want to stay curious about what's happening for the other person.",
    "Why does holding both at once lead to better outcomes?",
    [
      "It avoids both self-sacrificing people-pleasing and aggressive self-centeredness — sustainable solutions live in between.",
      "One person's needs must always completely give way to the other's.",
      "Curiosity about others signals weakness that can be taken advantage of.",
      "Clear boundaries mean you never have to consider someone else's perspective.",
    ],
    0,
    "Durable relationships flourish in the space where mutual respect and honest limits actually meet."
  ),

  // Point 3: Awareness and a pause can make a clarifying next step more deliberate.
  q(
    "31-action-3", 31,
    "You receive an email that feels dismissive of your contributions on a high-profile project.",
    "What would you do next?",
    [
      "Step away from the keyboard, take a short walk, then draft a concise response focused on documented facts.",
      "Fire back immediately copying their manager about their unprofessional tone.",
      "Forward it to three colleagues asking 'Can you believe this person?'",
      "Delete the email and disengage from the project out of hurt.",
    ],
    0,
    "A deliberate pause prevents emotional reactivity from hijacking your professional communication."
  ),
  q(
    "31-understanding-3", 31,
    "You feel a surge of anger during a heated debate. You pause instead of responding immediately.",
    "What does that pause actually give you?",
    [
      "It allows the thinking brain to re-engage so you can choose a response aligned with your values, not your temper.",
      "Time to calculate the most cutting thing you could possibly say.",
      "A chance to appear calm while still planning a sharp rebuttal.",
      "Proof to the other person that nothing they say can shake you.",
    ],
    0,
    "The pause is the foundation of emotional freedom — turning unconscious reaction into intentional choice."
  ),

  // Point 4: A toolkit can combine care for another person with an honest boundary.
  q(
    "31-action-4", 31,
    "A close friend calls in distress at 11:30 PM before your important early morning presentation.",
    "What would you do next?",
    [
      "Listen fully for 15 minutes, validate their pain, then say: 'I want to give you my full attention — can we talk at 5 PM tomorrow when I can really be there for you?'",
      "Stay on the phone until 3:30 AM feeling exhausted and resentful — then bomb the presentation.",
      "Ignore the call and send no message explaining why.",
      "Answer and snap at them for not considering your sleep schedule.",
    ],
    0,
    "Warm presence combined with an honest gentle limit protects both the friendship and your essential health."
  ),
  q(
    "31-understanding-4", 31,
    "You care deeply about people but lately you feel completely emptied out by it.",
    "What's the most accurate thing to recognize?",
    [
      "You can't pour from an empty cup — setting healthy limits on your care is what lets you show up genuinely long-term.",
      "Caring deeply requires burning yourself out for anyone who asks.",
      "Compassion fatigue only happens to people who don't genuinely care enough.",
      "The only way to protect yourself is to stop caring about others.",
    ],
    0,
    "Sustainable empathy treats your own well-being as part of the ecosystem of care — not a luxury after the fact."
  ),

  // Point 5: The skills can work together without requiring certainty.
  q(
    "31-action-5", 31,
    "Career, housing, and relationship are all in flux at the same time. You feel overwhelmed.",
    "What would you do next?",
    [
      "Identify one small daily anchor you can control (sleep, nutrition), reach out to one supportive person, and take one concrete next step today.",
      "Demand certainty in all three areas by making hasty, irreversible decisions tonight.",
      "Spend three days in bed scrolling and avoid opening mail or messages.",
      "Blame external circumstances entirely and adopt a waiting stance.",
    ],
    0,
    "Small controllable anchors, connection, and one focused step create stability amid larger storms."
  ),
  q(
    "31-understanding-5", 31,
    "After working through 31 chapters, you still feel anxious or sad sometimes. Does that mean it's not working?",
    "What's the most accurate thing to understand?",
    [
      "Emotional mastery isn't never feeling hard emotions — it's meeting them with self-compassion and choosing a constructive path.",
      "Emotional mastery means achieving permanent happiness and never feeling negative again.",
      "It means suppressing emotional reactions to operate as a purely logical person.",
      "It means knowing how to redirect other people's feelings to get what you want.",
    ],
    0,
    "True emotional intelligence welcomes the full spectrum of feeling and transforms it into understanding and resilience."
  ),
];
