// Stage 3: Perspective (Chapters 11 - 15)
// Themes: Facts vs. Assumptions, Alternative Explanations, Clarifying Questions, Intention vs. Impact, Different Doesn't Mean Wrong

function q(id, chapterId, situation, prompt, choices, correctIndex, explanation, skillIds = ["perspective"]) {
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

export const stage3Questions = [
  // ==========================================
  // CHAPTER 11: What happened—and what did I assume?
  // ==========================================
  q(
    "11-action-1", 11,
    "Your supervisor walked past without greeting you this morning.",
    "What would you do next?",
    [
      "Note the fact — they walked past — and recognize assuming anger is an unverified story.",
      "Assume something is wrong and spend the morning preparing for bad news.",
      "Ask a colleague if they noticed anything off about the supervisor today.",
      "Give your supervisor the cold shoulder in the afternoon meeting.",
    ],
    0,
    "Separating observable facts from the stories we add to them prevents self-inflicted anxiety."
  ),
  q(
    "11-understanding-1", 11,
    "You're upset about a colleague's behavior, but you realize you're guessing at their motive.",
    "What's the most useful thing to do?",
    [
      "Separate what you actually observed from the story you're adding about why they did it.",
      "Trust your instinct — you've known them long enough to read the situation accurately.",
      "Get a second opinion from someone who also knows them.",
      "Confront them while the feeling is still fresh.",
    ],
    0,
    "Stripping away subjective interpretation leaves clean, objective data to actually assess."
  ),
  q(
    "11-action-2", 11,
    "Exhausted and anxious, you get a client email: 'We need to discuss the budget tomorrow.'",
    "What would you do next?",
    [
      "Notice your tired state is amplifying fear — breathe, prepare a clear summary, and avoid doom-spiraling.",
      "Reply with a defensive essay explaining every budget decision you've made.",
      "Cancel the meeting — you need more time to prepare.",
      "Stay up all night imagining worst-case scenarios.",
    ],
    0,
    "Recognizing that exhaustion primes the brain for threat detection prevents unnecessary panic."
  ),
  q(
    "11-understanding-2", 11,
    "You interpret a neutral email as hostile right after a very rough day.",
    "What's most likely happening?",
    [
      "Low reserves weaken the brain's ability to regulate threat detection — neutral feels dangerous.",
      "You have good instincts and your read is probably accurate.",
      "The email is probably more hostile than you realize even rested.",
      "You're reading between the lines — which is usually correct.",
    ],
    0,
    "When biological reserves are low, the brain treats ambiguity as an immediate survival threat."
  ),
  q(
    "11-action-3", 11,
    "A friend hasn't replied to your birthday dinner invite in two days.",
    "What would you do next?",
    [
      "Send a light follow-up: 'Just finalizing numbers for Saturday — no pressure if plans changed!'",
      "Post something about unreliable friends on your social media story.",
      "Remove them from the guest list and don't bring it up.",
      "Ask mutual friends if they know what's going on.",
    ],
    0,
    "A friendly ping checks reality objectively without manufacturing a dramatic interpersonal rift."
  ),
  q(
    "11-understanding-3", 11,
    "You spend three days anxious about something that turns out to be completely fine.",
    "What would have helped most to do earlier?",
    [
      "Ask a simple, direct question instead of inventing answers in your head.",
      "Trust your anxiety — it's usually trying to protect you.",
      "Wait a bit longer before worrying — you jumped to conclusions too fast.",
      "Talk it through with someone to validate whether your concern was reasonable.",
    ],
    0,
    "The brain prefers painful fiction over uncertainty — a simple question breaks the loop."
  ),
  q(
    "11-action-4", 11,
    "You feel guilty about being quiet in a meeting. Later a colleague asks: 'Are you okay?'",
    "What would you do next?",
    [
      "Hear it as genuine care — not a hidden comment about your contribution.",
      "Apologize for not speaking up enough in the meeting.",
      "Ask them to clarify what they meant by the question.",
      "Deflect with 'all good' — you don't want to get into it.",
    ],
    0,
    "Interpreting a caring question through the lens of generosity prevents your guilt from distorting their intent."
  ),
  q(
    "11-understanding-4", 11,
    "You're convinced a colleague is annoyed at you, but you haven't verified it.",
    "What's most likely happening?",
    [
      "You may be projecting your own unease or guilt onto their behavior.",
      "Your instinct is reliable — you're picking up a real signal.",
      "You should ask them directly before assuming either way.",
      "You're probably right and should adjust how you interact with them.",
    ],
    0,
    "We don't see the world as it is — we see it through the colored lens of our current preoccupations."
  ),
  q(
    "11-action-5", 11,
    "Your partner bought a different grocery brand than the one you specifically listed.",
    "What would you do next?",
    [
      "Ask with curiosity: 'Did the store not have the usual one?'",
      "Point out that you were specific on the list and they didn't read it.",
      "Let it go — it's not worth the conversation.",
      "Make a note to do the shopping yourself next time.",
    ],
    0,
    "Curiosity about circumstances preserves harmony and usually resolves the 'problem' in ten seconds."
  ),
  q(
    "11-understanding-5", 11,
    "A friend forgets to mention your contribution during a group presentation.",
    "Before assuming they did it intentionally, what should you consider?",
    [
      "Most oversights stem from distraction or stress — not deliberate malice.",
      "If it happened, there's probably a pattern worth examining.",
      "They likely noticed but decided it wasn't worth mentioning.",
      "Your instinct about people is usually reliable — trust it.",
    ],
    0,
    "Generous attribution defuses unnecessary outrage and allows real issues to be handled practically."
  ),

  // ==========================================
  // CHAPTER 12: What else could explain this?
  // ==========================================
  q(
    "12-action-1", 12,
    "A driver cuts in front of you in traffic without signaling.",
    "What would you do next?",
    [
      "Breathe, maintain distance, and consider: maybe they're rushing to an emergency.",
      "Tailgate them until they realize you're unhappy about it.",
      "Cut them off in return — they need to learn.",
      "Let the anger simmer for the rest of the commute.",
    ],
    0,
    "Holding plausible alternative explanations cools road rage and keeps you driving safely."
  ),
  q(
    "12-understanding-1", 12,
    "A colleague is late to a meeting again. You immediately think: 'They don't respect my time.'",
    "What's a more accurate way to assess this?",
    [
      "Consider that their behavior might reflect circumstance — not character or disrespect.",
      "Trust your read — repeated behavior is a reliable indicator of attitude.",
      "Bring it up in the meeting so others are aware of the pattern.",
      "Address it privately and assume the worst until proven otherwise.",
    ],
    0,
    "Overcoming attribution bias means granting others the same situational grace you'd give yourself."
  ),
  q(
    "12-action-2", 12,
    "Your coworker didn't review your draft before the promised afternoon deadline.",
    "What would you do next?",
    [
      "Consider an urgent matter may have hijacked their afternoon — send a polite reminder first.",
      "Post in the team channel that the review is holding up the whole project.",
      "Tell your manager so they're aware of the reliability issue.",
      "Do the review yourself to avoid depending on them next time.",
    ],
    0,
    "Pausing before condemnation gives teammates room to explain legitimate disruptions."
  ),
  q(
    "12-understanding-2", 12,
    "You tend to reach firm conclusions quickly about why people do things.",
    "What's the risk of this thinking pattern?",
    [
      "Quick conclusions often lock you into one interpretation and blind you to better explanations.",
      "Fast conclusions signal good instincts — they're usually accurate.",
      "The risk is low if you're also open to being corrected later.",
      "Speed of judgment matters less than whether you act on it or not.",
    ],
    0,
    "Flexibility prevents the brain from getting trapped in rigid conclusions when reality is more complex."
  ),
  q(
    "12-action-3", 12,
    "A usually chatty neighbor walks past with their head down and barely acknowledges you.",
    "What would you do next?",
    [
      "Think: 'They might be dealing with something hard today.' and move on warmly.",
      "Assume they're unhappy with you and think about what you may have done.",
      "Wave more expressively next time to see if you get a warmer reaction.",
      "Mention it to another neighbor to check if they noticed too.",
    ],
    0,
    "Allowing people their private bad days without personalizing it fosters a mature, peaceful community."
  ),
  q(
    "12-understanding-3", 12,
    "A colleague seems distracted when you're talking. You start wondering if they like you.",
    "What's the most accurate thing to recognize here?",
    [
      "We dramatically overestimate how much others are focused on us in any given moment.",
      "Distraction during a conversation is usually a signal of how they feel about you.",
      "You should check in — asking is more reliable than assuming.",
      "Their distraction is likely about the topic, not about you personally.",
    ],
    0,
    "Other people are the main characters in their own busy inner world — most behavior isn't about you."
  ),
  q(
    "12-action-4", 12,
    "A project budget shows a sudden 15% discrepancy you didn't expect.",
    "What would you do next?",
    [
      "Audit entries calmly, check for recent fee changes or timing errors, then consult the finance lead.",
      "Flag it immediately in the team meeting so everyone's aware.",
      "Assume it's an accounting error and move on — it'll probably sort itself out.",
      "Ask the team if anyone made unauthorized changes.",
    ],
    0,
    "Looking for missing information with calm rigor resolves anomalies without unnecessary panic."
  ),
  q(
    "12-understanding-4", 12,
    "You suspect someone mishandled a budget. You start finding evidence that confirms it everywhere.",
    "What should make you pause?",
    [
      "Once you form a suspicion, the brain actively hunts for confirming evidence while ignoring contradictions.",
      "If you're finding evidence, your initial read was probably correct.",
      "Confirmation is normal — it means you should act on your suspicion.",
      "You should present the evidence you have and let others decide.",
    ],
    0,
    "Confirmation bias creates tunnel vision — mature investigators actively search for what disproves their first guess."
  ),
  q(
    "12-action-5", 12,
    "A customer gives your product 3 stars — praising the utility but criticizing the onboarding.",
    "What would you do next?",
    [
      "Celebrate the validation of the core product and take the onboarding critique as a roadmap.",
      "Report it as unhelpful — mixed feedback creates confusion.",
      "Focus on the positive and note the criticism separately for later review.",
      "Reach out to the customer to better understand what went wrong.",
    ],
    0,
    "Holding both the positive and critical truths simultaneously allows for real improvement."
  ),
  q(
    "12-understanding-5", 12,
    "You tend to judge situations as either great or terrible — rarely anything in between.",
    "What's the cost of this pattern?",
    [
      "Binary thinking misses the nuanced reality of most situations and amplifies unnecessary distress.",
      "Clear thinking requires clear categories — ambiguity leads to poor decisions.",
      "The cost is low if your assessments are usually accurate.",
      "Most situations genuinely are either positive or negative — nuance is often overthinking.",
    ],
    0,
    "Embracing nuance liberates you from emotional splits and enables grounded engagement with complexity."
  ),

  // ==========================================
  // CHAPTER 13: Ask instead of guessing
  // ==========================================
  q(
    "13-action-1", 13,
    "Your manager emails: 'We need to talk about your role on Monday morning.'",
    "What would you do next?",
    [
      "Reply calmly: 'Happy to chat. Could you share the main topics so I can come prepared?'",
      "Spend the weekend mentally preparing for every bad scenario.",
      "Send a long email listing your recent contributions preemptively.",
      "Call in sick on Monday to delay the conversation.",
    ],
    0,
    "A concise professional question clarifies the agenda and protects your weekend from dread."
  ),
  q(
    "13-understanding-1", 13,
    "You spent a week anxious about something your manager said — but never asked what they meant.",
    "What's the most honest explanation for why you didn't ask?",
    [
      "Asking felt risky — what if the answer confirmed your worst fear?",
      "You gave them space to bring it up in their own time.",
      "You were waiting for more context before asking.",
      "You assumed they'd clarify without being prompted.",
    ],
    0,
    "Overcoming the micro-fear of asking a single question eliminates weeks of unfounded dread."
  ),
  q(
    "13-action-2", 13,
    "A client suddenly rejects a proposal they seemed excited about last week.",
    "What would you do next?",
    [
      "Ask: 'We'd love to understand what shifted so we can adapt — what priorities changed?'",
      "Lower the price significantly and see if that resolves it.",
      "Let them cool off and follow up again in two weeks.",
      "Ask if there's anything about the proposal that could be adjusted.",
    ],
    0,
    "Inquiring into what shifted uncovers business intelligence without burning bridges."
  ),
  q(
    "13-understanding-2", 13,
    "You asked 'Why did you do that?' and your colleague got defensive. Why?",
    "What would have worked better?",
    [
      "'Why did you...' sounds like an accusation — 'What led you to...' invites explanation.",
      "They were probably feeling guilty and you just happened to ask.",
      "You should have given them more time before asking.",
      "The phrasing was fine — their reaction was just defensive personality.",
    ],
    0,
    "Phrasing questions around circumstances rather than character unlocks honest, non-defensive answers."
  ),
  q(
    "13-action-3", 13,
    "Your supervisor gives instructions for a report that sound slightly contradictory.",
    "What would you do next?",
    [
      "Clarify: 'Just to make sure we're aligned — should I compare Q1 vs Q2, or year over year?'",
      "Make your best guess — they're busy and you don't want to bother them.",
      "Start both versions and show them both at the review.",
      "Ask a colleague who's worked with them before how they usually want it.",
    ],
    0,
    "A 10-second alignment check saves hours of rework and shows proactive diligence."
  ),
  q(
    "13-understanding-3", 13,
    "A project went sideways because two team members had different ideas of what was agreed.",
    "What would have prevented this most effectively?",
    [
      "A clear check-in after the decision — 'So to confirm, we're all doing X, right?'",
      "Better documentation of the original meeting discussion.",
      "Assigning one person to own the decision fully.",
      "Following up individually with each team member after the meeting.",
    ],
    0,
    "Verifying shared understanding upfront is the cheapest, highest-return investment a team can make."
  ),
  q(
    "13-action-4", 13,
    "A junior colleague challenges your proposed architecture during a design review.",
    "What would you do next?",
    [
      "Ask with genuine curiosity: 'Walk me through that concern — what bottlenecks are you seeing?'",
      "Remind them you have more experience and move on.",
      "Thank them and note the feedback for after the meeting.",
      "Open it up to the room to see if others share the concern.",
    ],
    0,
    "Welcoming pushback with intellectual curiosity sharpens design and builds psychological safety."
  ),
  q(
    "13-understanding-4", 13,
    "You always felt the smartest person in the room should drive all the decisions.",
    "What's the problem with this approach?",
    [
      "It closes off information from people who might spot what the smartest person misses.",
      "It works well in high-stakes environments where speed matters.",
      "It's efficient — consensus takes too much time.",
      "It only becomes a problem if the smartest person lacks experience.",
    ],
    0,
    "Intellectual humility prioritizes getting it right over being right — making teams stronger."
  ),
  q(
    "13-action-5", 13,
    "Your partner has been unusually quiet on your Sunday evening walk.",
    "What would you do next?",
    [
      "Gently ask: 'You seem a bit reflective tonight — how are you feeling about the week ahead?'",
      "Give them space — they'll talk when they're ready.",
      "Ask if something happened or if you did something wrong.",
      "Fill the silence with conversation so it doesn't feel awkward.",
    ],
    0,
    "A gentle, warm inquiry creates an open door for connection without pressure."
  ),
  q(
    "13-understanding-5", 13,
    "You ask a friend about their feelings rather than just their plans. They open up more than usual.",
    "What made the difference?",
    [
      "Asking about feelings signals: 'I see you as a whole person, not just a logistics partner.'",
      "They were already ready to talk — the question was just the opener.",
      "You asked at the right moment — timing matters more than phrasing.",
      "They trust you more than they trust others — that's why they opened up.",
    ],
    0,
    "Emotional inquiry bridges the gap between living together and truly connecting with someone."
  ),

  // ==========================================
  // CHAPTER 14: Intention and impact
  // ==========================================
  q(
    "14-action-1", 14,
    "You tease a friend about their singing. They go quiet and look away.",
    "What would you do next?",
    [
      "Apologize immediately: 'That came out unkind — I'm sorry. Are you okay?'",
      "Say 'It was just a joke — don't take it so seriously.'",
      "Keep the energy light so the moment doesn't get heavier.",
      "Wait to see if they bring it up before doing anything.",
    ],
    0,
    "Acknowledging that your joke caused real pain shows you care more about them than defending your intent."
  ),
  q(
    "14-understanding-1", 14,
    "You said something hurtful by accident. Your first instinct is to explain that you didn't mean it.",
    "What's the problem with leading with that?",
    [
      "It asks the hurt person to comfort you, while their pain goes unacknowledged.",
      "It's the honest thing to do — intent is what matters most.",
      "It's only a problem if they're already upset before you explain.",
      "It works fine as long as you follow up with an apology afterward.",
    ],
    0,
    "If you step on someone's foot, you don't explain your foot's intentions — you step off and say sorry."
  ),
  q(
    "14-action-2", 14,
    "A colleague reorganized your shared file system helpfully — but now you can't find the Acme files.",
    "What would you do next?",
    [
      "Say: 'I appreciate you tidying it up — can you help me find the Acme files for today's deadline?'",
      "Undo everything they did and restore it yourself.",
      "Let them know via message that the reorganization caused a problem.",
      "Find the files yourself so you don't make them feel bad.",
    ],
    0,
    "Acknowledging their good motive while naming the real impact resolves the issue without blame."
  ),
  q(
    "14-understanding-2", 14,
    "A colleague insists they meant well. You're still frustrated by what happened.",
    "What's the most emotionally intelligent response?",
    [
      "Acknowledge their intent AND state the concrete impact — both are real at the same time.",
      "Accept that they meant well and let go of the frustration.",
      "Ask them to be more careful next time without getting into the details.",
      "Decide whether their intent or the impact matters more to you here.",
    ],
    0,
    "Dual-awareness bridges defensiveness ('I meant well!') and resentment ('But it hurt!') — both are true."
  ),
  q(
    "14-action-3", 14,
    "A team member says your daily check-ins make them feel micromanaged and distrusted.",
    "What would you do next?",
    [
      "Thank them for saying so and agree on one check-in per day instead of several.",
      "Explain your intention — you're trying to stay on top of deadlines, not micromanage.",
      "Ask them if they have a preferred cadence that would work better.",
      "Back off the check-ins but flag the risk to your manager.",
    ],
    0,
    "Validating their experience and agreeing on a new cadence builds trust without abandoning accountability."
  ),
  q(
    "14-understanding-3", 14,
    "You manage your team the way you'd want to be managed — but some team members are unhappy.",
    "What's most likely missing?",
    [
      "Feedback on how your approach lands on others — not everyone wants the same things you do.",
      "Clearer expectations about what good management looks like in your company.",
      "More frequent check-ins so you know sooner when someone's unhappy.",
      "Better alignment between your style and the company culture.",
    ],
    0,
    "Without impact feedback, leaders operate blind — convinced of their own benevolence while missing the effect."
  ),
  q(
    "14-action-4", 14,
    "A relative compliments you by saying you look 'so much healthier' now that you've gained weight.",
    "What would you do next?",
    [
      "Recognize the affectionate intent and gently say: 'I prefer not talking about my weight.'",
      "Tell them that comment is inappropriate and explain why.",
      "Laugh it off — it's not worth making it awkward.",
      "Change the subject immediately so everyone can move on.",
    ],
    0,
    "Discerning clumsy affection lets you set a boundary with dignity instead of fury."
  ),
  q(
    "14-understanding-4", 14,
    "A family member keeps making comments that feel hurtful but are probably well-intentioned.",
    "What's the most useful thing to recognize?",
    [
      "Attributing every clumsy comment to malice destroys bonds that could be healed with gentle boundaries.",
      "Well-intentioned comments don't cause real harm — only intentional ones do.",
      "If it keeps happening, the intent probably isn't as good as they claim.",
      "You can address it or not — the impact is the same either way.",
    ],
    0,
    "Giving grace for social clumsiness while gently clarifying limits keeps loving connections alive."
  ),
  q(
    "14-action-5", 14,
    "You accidentally broke a friend's favorite mug from a meaningful trip they took.",
    "What would you do next?",
    [
      "Apologize sincerely, acknowledge the sentimental value, and offer to find a replacement or treat them.",
      "Say 'I'll replace it' and move on quickly so it doesn't become a big moment.",
      "Apologize once and then let it go — dwelling on it makes it worse.",
      "Tell them it was an accident and you feel terrible — then see how they want to handle it.",
    ],
    0,
    "Honoring the sentimental value and taking active responsibility shows respect for what they cherish."
  ),
  q(
    "14-understanding-5", 14,
    "Someone breaks something of yours and says 'It's just a thing — you can replace it.'",
    "Why does that response feel worse than the loss itself?",
    [
      "First you lost something you loved. Then you lost your right to feel sad about it.",
      "It's dismissive of your attachment to material things.",
      "It shifts focus to the practical solution before you've processed the feeling.",
      "It shows they don't understand the sentimental value of what was lost.",
    ],
    0,
    "Minimizing pain adds the insult of invalidation on top of the original injury — that's the double violation."
  ),

  // ==========================================
  // CHAPTER 15: Different doesn't mean unreasonable
  // ==========================================
  q(
    "15-action-1", 15,
    "Your project partner communicates in crisp bullet lists; you prefer warm, flowing conversation.",
    "What would you do next?",
    [
      "Appreciate that their precision complements your warmth — use both styles intentionally.",
      "Ask them to write in a warmer, more conversational tone so you can relate to it better.",
      "Adjust to their style completely to make collaboration smoother.",
      "Bring up the difference directly and agree on a shared format.",
    ],
    0,
    "Different communication styles are complementary strengths, not incompatibilities to resolve."
  ),
  q(
    "15-understanding-1", 15,
    "You find yourself thinking 'Why can't they just communicate normally?' about a colleague.",
    "What's the most important thing to recognize?",
    [
      "Your normal is just the style you grew up with — not a universal standard.",
      "If their style creates friction, it's worth addressing directly.",
      "Different styles are fine unless they affect team output.",
      "Normal communication is actually well-defined — they may need coaching.",
    ],
    0,
    "Your personal style is one dialect among many — mistaking familiarity for universality creates false judgment."
  ),
  q(
    "15-action-2", 15,
    "After an intense workshop, colleagues want to go to a bar. An introverted teammate wants to rest.",
    "What would you do next?",
    [
      "Warmly tell them: 'Enjoy your quiet evening!' and let everyone recharge their own way.",
      "Encourage them to come for at least an hour — they might enjoy it.",
      "Ask if they'd prefer somewhere quieter so they can still join.",
      "Make it optional and keep the pressure off.",
    ],
    0,
    "Validating different recharge needs creates an inclusive culture without pressure or guilt."
  ),
  q(
    "15-understanding-2", 15,
    "An introverted colleague consistently skips social events. A teammate says they're antisocial.",
    "What's more accurate to say?",
    [
      "Their nervous system reaches capacity at a lower stimulation threshold — it's not antisocial.",
      "They probably just don't enjoy the team — that's worth watching.",
      "Introversion can become a problem if it limits team cohesion.",
      "Without more context, it's hard to say whether it's preference or avoidance.",
    ],
    0,
    "Honoring neurological variation removes the moral judgment often cast on social preferences."
  ),
  q(
    "15-action-3", 15,
    "You decide quickly. Your business partner always wants to sleep on major decisions.",
    "What would you do next?",
    [
      "Recognize their reflection protects the partnership — agree on a 24-hour decision buffer.",
      "Point out that slow decisions have a real cost in fast-moving situations.",
      "Take the lead on time-sensitive decisions and loop them in after.",
      "Find a middle ground — some decisions get more time, others less.",
    ],
    0,
    "Pairing fast drive with deliberate reflection creates a resilient, well-rounded leadership partnership."
  ),
  q(
    "15-understanding-3", 15,
    "A colleague takes three days to respond to messages. You see it as a sign they don't care.",
    "What's a more balanced interpretation?",
    [
      "Slow response speed often reflects a different processing style — not indifference.",
      "Three days is too long — response norms matter in team communication.",
      "If the pattern is consistent, it's worth raising as a team expectation.",
      "Speed of response genuinely signals level of commitment in most contexts.",
    ],
    0,
    "Rapid responders and reflective processors both offer vital value — neither is the better standard."
  ),
  q(
    "15-action-4", 15,
    "A colleague says 'That might be a little challenging' — but clearly means the idea won't work.",
    "What would you do next?",
    [
      "Hear the diplomatic signal and ask: 'What specific hurdles do you foresee?'",
      "Take them at their word — 'a little challenging' suggests it's worth pursuing.",
      "Ask them to be more direct so you can understand their concern.",
      "Flag the hesitation and revisit it after the meeting.",
    ],
    0,
    "Understanding indirect communication lets you hear real dissent without demanding bluntness."
  ),
  q(
    "15-understanding-4", 15,
    "A team member from another culture rarely disagrees directly in meetings.",
    "What's the most useful thing to know about this?",
    [
      "Many cultures express disagreement through indirectness — silence or hesitation can mean 'no.'",
      "Silence in a meeting usually signals agreement across most cultures.",
      "You should address it directly and explain that directness is expected here.",
      "Their culture's communication style may create problems in a fast-moving team.",
    ],
    0,
    "Direct bluntness and diplomatic indirectness are both coherent systems — neither is more professional."
  ),
  q(
    "15-action-5", 15,
    "You're an optimistic visionary. Your partner in the project constantly stress-tests your ideas.",
    "What would you do next?",
    [
      "Embrace them as a co-pilot: 'Your eye for risk protects my vision from blowing up.'",
      "Find a way to get more sign-off without their input first.",
      "Balance their skepticism by advocating more strongly for your ideas.",
      "Agree to a review step where they can raise concerns before you move forward.",
    ],
    0,
    "Welcoming your cognitive opposite creates bulletproof strategies neither could achieve alone."
  ),
  q(
    "15-understanding-5", 15,
    "Your team all share the same working style, background, and approach. Projects feel smooth.",
    "What's the hidden risk in this?",
    [
      "Homogeneous teams share the same blind spots — groupthink can lead to sudden collapse.",
      "Teams that work smoothly tend to perform better long-term.",
      "Shared style reduces friction, which actually improves problem-solving.",
      "The risk is low if the team is highly experienced and talented.",
    ],
    0,
    "Resilient teams thrive on cognitive friction — diverse perspectives illuminate blind spots before reality does."
  ),
];
