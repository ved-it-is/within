// Stage 3: Perspective (Chapters 11 - 15)
// Themes: Facts vs Assumptions, Alternative Explanations, Inquiring, Intent vs Impact, Respecting Differences

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
  // Point 1: Separating facts from assumptions prevents unnecessary defensiveness.
  q(
    "11-action-1", 11,
    "Your supervisor walked past your desk in the hallway this morning without looking up or greeting you.",
    "What would you do next?",
    [
      "Note the observable fact (they walked past without greeting) and recognize that assuming they are angry at you is an unverified mental story.",
      "Assume you are about to be fired and spend the morning frantically updating your resume.",
      "Confront them in the breakroom: 'What did I do to make you hate me?'",
      "Give them the cold shoulder in the afternoon team meeting.",
    ],
    0,
    "Separating the neutral physical fact from your catastrophic narrative prevents self-inflicted anxiety."
  ),
  q(
    "11-understanding-1", 11,
    "In cognitive psychology, what is the 'Camera Test' when analyzing a stressful interaction?",
    "What does the Camera Test ask you to do?",
    [
      "Filter the event down to only what a video camera would record (sights and sounds), stripping out subjective interpretations of motive.",
      "Record your coworkers with a hidden camera to catch them making mistakes.",
      "Analyze your own facial expressions in the mirror every morning.",
      "Assume that cameras are always watching you.",
    ],
    0,
    "The camera test strips away subjective cognitive overlays, leaving clean, objective behavioral data to assess."
  ),

  // Point 2: Our emotional state shapes the stories we tell ourselves.
  q(
    "11-action-2", 11,
    "You are feeling exhausted and insecure, and you receive an email from a client saying: 'We need to discuss the budget tomorrow.'",
    "What would you do next?",
    [
      "Notice that your current fatigue is amplifying fear, take three grounding breaths, and prepare a clear budget summary without doom-spiraling.",
      "Reply with a defensive multi-page essay justifying every penny spent.",
      "Cancel tomorrow's meeting out of fear.",
      "Stay awake all night imagining your company going bankrupt.",
    ],
    0,
    "Recognizing that low physical energy primes the brain for threat detection prevents panic reactions."
  ),
  q(
    "11-understanding-2", 11,
    "How does low sleep or high physiological stress distort our narrative-generating brain?",
    "What is the biological link between fatigue and negative storytelling?",
    [
      "Fatigue weakens the prefrontal cortex's ability to regulate the amygdala, making the brain default to threat-oriented, worst-case interpretations.",
      "Fatigue makes your psychic powers stronger and your guesses 100% accurate.",
      "Sleep deprivation has zero effect on cognitive interpretation.",
      "Fatigue makes people excessively optimistic about budgets.",
    ],
    0,
    "When biological reserves are low, the brain treats neutral ambiguity as an immediate survival threat."
  ),

  // Point 3: Verification breaks the assumption loop.
  q(
    "11-action-3", 11,
    "A friend has not replied to your invitation to a birthday dinner sent two days ago.",
    "What would you do next?",
    [
      "Send a light, low-pressure follow-up: 'Hey! Just finalizing headcounts for Saturday—no pressure, but let me know if you can make it!'",
      "Post a quote on Instagram about fake friends who never show up.",
      "Delete them from your contacts and resolve never to invite them again.",
      "Call all your mutual friends to ask if they are boycotting you.",
    ],
    0,
    "A simple, friendly ping checks the status objectively without manufacturing dramatic interpersonal rifts."
  ),
  q(
    "11-understanding-3", 11,
    "Why does the human brain instinctively prefer inventing a negative certainty over enduring neutral ambiguity?",
    "Why is ambiguity uncomfortable for the brain?",
    [
      "Evolutionary survival prioritized anticipating danger; a perceived negative outcome feels 'predictable', whereas uncertainty feels unsafe to the nervous system.",
      "The brain is designed to seek misery and unhappiness.",
      "Ambiguity is comfortable and enjoyable for all humans.",
      "Negative thoughts always protect you from harm.",
    ],
    0,
    "The brain seeks closure at all costs, frequently creating painful fiction just to escape the suspense of not knowing."
  ),

  // Point 4: Emotional projection distorts intent.
  q(
    "11-action-4", 11,
    "You feel guilty about having been quiet during a meeting, and someone later asks: 'Are you feeling okay today?'",
    "What would you do next?",
    [
      "Hear it as a genuine expression of care, rather than a hidden critique that you didn't contribute enough.",
      "Snap defensively: 'Why? Do you think I did a terrible job in the meeting?'",
      "Apologize profusely for being boring and quiet.",
      "Complain that they are micromanaging your moods.",
    ],
    0,
    "Interpreting caring inquiries through the lens of generosity prevents your own internal guilt from distorting their intent."
  ),
  q(
    "11-understanding-4", 11,
    "What is 'psychological projection' in everyday communication?",
    "How does projection warp our perceptions of others?",
    [
      "We project our own unacknowledged insecurities, guilt, or irritation onto another person, mistakenly believing they are feeling it toward us.",
      "It is a cinematic technique for workplace presentations.",
      "It is the ability to read someone else's mind from across a room.",
      "It means you are always completely objective.",
    ],
    0,
    "We do not see the world as it is; we see the world through the colored lens of our current internal preoccupations."
  ),

  // Point 5: Replacing assumptions with curiosity leads to connection.
  q(
    "11-action-5", 11,
    "A partner brings home a different grocery brand than the one you specifically asked for on the shared list.",
    "What would you do next?",
    [
      "Ask with curiosity: 'Hey, did the store run out of the usual brand?' instead of assuming they ignored your preference.",
      "Slam the groceries on the counter and accuse them of never listening to you.",
      "Throw the item in the trash to prove a point.",
      "Give them the silent treatment throughout dinner.",
    ],
    0,
    "Leading with curiosity about external circumstances preserves domestic harmony and easily resolves the mix-up."
  ),
  q(
    "11-understanding-5", 11,
    "Why is Hanlon's Razor ('Never attribute to malice that which is adequately explained by oversight or busyness') a foundation of emotional intelligence?",
    "What is the power of generous attribution?",
    [
      "Most human mistakes stem from distraction, fatigue, or misunderstanding—not malicious conspiracies to harm you.",
      "It teaches that everyone in the world is incompetent and foolish.",
      "It proves that people are always trying to trick you.",
      "It means you should never hold anyone accountable for anything.",
    ],
    0,
    "Generous attribution defuses unnecessary outrage, allowing issues to be handled with calm practicality."
  ),

  // ==========================================
  // CHAPTER 12: What else could explain this?
  // ==========================================
  // Point 1: Generating alternative explanations widens perspective.
  q(
    "12-action-1", 12,
    "A driver cuts abruptly in front of you in traffic without using their turn signal.",
    "What would you do next?",
    [
      "Take a breath, maintain safe following distance, and consider: 'Maybe they are rushing to a hospital emergency or simply made a panicked error.'",
      "Tailgate them aggressively with your high beams on while honking your horn.",
      "Speed up, cut them off in revenge, and brake check them.",
      "Let road rage ruin your entire morning commute.",
    ],
    0,
    "Holding plausible alternative explanations cools road rage instantly and keeps you driving safely."
  ),
  q(
    "12-understanding-1", 12,
    "What is the 'Fundamental Attribution Error' in social psychology?",
    "How does this cognitive bias distort our judgments of others?",
    [
      "We attribute others' mistakes to their flawed character ('They are an idiot'), while attributing our own mistakes to external situational stress ('I was in a rush').",
      "It is an accounting error made by financial auditors.",
      "It means other people never make mistakes.",
      "It proves that people's personalities are 100% predictable.",
    ],
    0,
    "Overcoming the fundamental attribution error means granting others the same situational grace you grant yourself."
  ),

  // Point 2: Pausing before concluding protects relationships.
  q(
    "12-action-2", 12,
    "Your coworker didn't review your pull request or draft document before the promised afternoon cutoff.",
    "What would you do next?",
    [
      "Consider that an urgent client emergency may have hijacked their afternoon, and send a polite reminder before judging their reliability.",
      "Post in the team public channel that this coworker is holding up the entire company.",
      "Complain to the CTO that you are working with an uncooperative team.",
      "Delete your document in frustration.",
    ],
    0,
    "Pausing before jumping to condemnation gives teammates room to explain legitimate emergency disruptions."
  ),
  q(
    "12-understanding-2", 12,
    "Why does cognitive flexibility (the ability to generate multiple interpretations) predict high resilience and low depression?",
    "What does cognitive flexibility do for mental health?",
    [
      "It prevents the brain from getting trapped in rigid, catastrophic conclusions, allowing adaptive problem-solving when reality changes.",
      "It means you never have to make a firm decision in life.",
      "It guarantees you will always be happy 24/7.",
      "Flexible people never experience any stress.",
    ],
    0,
    "Flexibility is the antidote to cognitive despair; when one interpretation falls, a flexible mind discovers five other viable paths."
  ),

  // Point 3: Stress narrows vision; curiosity expands it.
  q(
    "12-action-3", 12,
    "A normally chatty neighbor walks past you on the sidewalk with their head down and gives only a tight nod.",
    "What would you do next?",
    [
      "Think: 'They might be dealing with terrible personal news or physical pain today,' and send them a gentle mental wish for well-being.",
      "Assume they think they are better than you and decide to ignore them forever.",
      "Walk up to their face and demand to know why they didn't say hello.",
      "Complain to other neighbors that they are snobby and rude.",
    ],
    0,
    "Allowing neighbors their private bad days without personalizing it fosters a mature, peaceful community."
  ),
  q(
    "12-understanding-3", 12,
    "Why does the brain's 'Spotlight Effect' make us assume everyone's behavior revolves around us?",
    "What is the Spotlight Effect?",
    [
      "Because we experience life from behind our own eyes, we egocentrically overestimate how much others are thinking about and judging us.",
      "It is a lighting technique used in theatre productions.",
      "It means that you are the main character of the universe.",
      "Everyone is constantly evaluating your every breath.",
    ],
    0,
    "Remembering that other people are the main characters in their own busy, stressful movies frees you from self-centered paranoia."
  ),

  // Point 4: Searching for missing data prevents hasty conclusions.
  q(
    "12-action-4", 12,
    "A project budget shows a sudden 15% discrepancy that you didn't expect.",
    "What would you do next?",
    [
      "Audit the ledger entries calmly, check for recent currency exchange adjustments or software fee changes, and consult the finance lead.",
      "Accuse the project accountant of fraud and embezzlement on Slack.",
      "Hide the spreadsheet so leadership doesn't see the discrepancy.",
      "Panic and resign before anyone notices.",
    ],
    0,
    "Looking for missing technical variables with calm analytical rigor resolves anomalies without unnecessary workplace panic."
  ),
  q(
    "12-understanding-4", 12,
    "What is the danger of 'Confirmation Bias' when investigating a workplace puzzle?",
    "How does confirmation bias blind investigators?",
    [
      "Once you form an initial suspicion, your brain actively hunts only for clues that prove your suspicion right while ignoring contradictory facts.",
      "It ensures you will always find the correct thief.",
      "It makes your memory photographic.",
      "Confirmation bias is the hallmark of unbiased science.",
    ],
    0,
    "Confirmation bias creates dangerous tunnel vision; mature thinkers actively search for evidence that disproves their first guess."
  ),

  // Point 5: Embracing multiple truths fosters wisdom.
  q(
    "12-action-5", 12,
    "A customer review gives your product 3 stars, praising the core utility but criticizing the onboarding complexity.",
    "What would you do next?",
    [
      "Celebrate the validation of the core utility while taking the onboarding critique as a clear product improvement roadmap.",
      "Report the review as malicious and try to get it deleted.",
      "Despair that your product is a complete failure because it wasn't 5 stars.",
      "Publicly attack the customer in the comments for being technically illiterate.",
    ],
    0,
    "Holding both the positive value and the constructive critique allows for continuous product excellence."
  ),
  q(
    "12-understanding-5", 12,
    "Why is nuance the ultimate hallmark of high emotional intelligence?",
    "Why is binary black-and-white thinking a developmental trap?",
    [
      "Real human life and relationships rarely exist in binary absolutes (all good vs all bad); wisdom lives in tolerating complex, mixed truths.",
      "Binary thinking is much simpler and faster, so it is always superior.",
      "Nuance is an excuse for weak, indecisive people.",
      "Everything in the world is strictly black or white.",
    ],
    0,
    "Embracing nuance liberates you from childish emotional splits, enabling mature, grounded engagement with a complex world."
  ),

  // ==========================================
  // CHAPTER 13: Ask instead of guessing
  // ==========================================
  // Point 1: A clarifying question saves hours of anxiety.
  q(
    "13-action-1", 13,
    "Your manager sends an email saying: 'We need to talk about your role on Monday morning.'",
    "What would you do next?",
    [
      "Reply calmly: 'Sounds good! Could you let me know the main topics so I can come prepared with any helpful materials?'",
      "Spend the entire weekend crying, convinced you are being demoted or terminated.",
      "Send a panicked 10-page email listing all your accomplishments over the past three years.",
      "Call in sick on Monday to avoid the conversation.",
    ],
    0,
    "A concise, professional question clarifies the agenda and protects your weekend peace of mind."
  ),
  q(
    "13-understanding-1", 13,
    "Why do people suffer from weeks of agonizing anxiety over things that could be clarified in a 30-second question?",
    "What fear prevents people from asking clarifying questions?",
    [
      "People fear that asking will reveal ignorance, seem confrontational, or confirm their worst dread, so they prefer silent agonizing.",
      "People enjoy being anxious and terrified.",
      "Clarifying questions are prohibited in modern companies.",
      "Agonizing in silence always produces better results.",
    ],
    0,
    "Overcoming the micro-fear of asking a question eliminates the macro-agony of weeks of unfounded dread."
  ),

  // Point 2: Open questions invite deeper context.
  q(
    "13-action-2", 13,
    "A client suddenly rejects a proposal they previously expressed enthusiasm for.",
    "What would you do next?",
    [
      "Ask: 'We'd love to understand what shifted on your side so we can adapt our approach—what priorities changed?'",
      "Accuse them of wasting your time and being deceitful.",
      "Lower your prices by 70% in a desperate panic.",
      "Ghost them immediately and never do business with them again.",
    ],
    0,
    "Inquiring into shifting organizational priorities uncovers vital business intelligence without burning bridges."
  ),
  q(
    "13-understanding-2", 13,
    "What is the strategic difference between a closed 'Why did you do that?' and an open 'What shifted on your side?'",
    "How does wording affect psychological safety in inquiry?",
    [
      "'Why did you...' sounds accusatory and invites defensive excuses; 'What shifted...' invites collaborative analysis of external circumstances.",
      "'Why did you...' is much more aggressive and therefore superior in negotiations.",
      "There is no difference; all questions sound identical to the listener.",
      "Closed questions make people feel loved and cherished.",
    ],
    0,
    "Phrasing questions to explore circumstances rather than cross-examine character unlocks honest, non-defensive answers."
  ),

  // Point 3: Checking understanding before acting prevents costly rework.
  q(
    "13-action-3", 13,
    "Your supervisor gives you verbal instructions for an analysis that sound slightly contradictory.",
    "What would you do next?",
    [
      "Say: 'Just to make sure we're aligned: should I prioritize comparing Q1 versus Q2, or comparing this year against last year?'",
      "Guess what they meant, spend 40 hours building the wrong report, and get frustrated when they reject it.",
      "Complain to coworkers that the boss has lost their mind.",
      "Refuse to work on the analysis until they send a 10-page certified document.",
    ],
    0,
    "A 10-second alignment check saves 40 hours of wasted effort and demonstrates proactive diligence."
  ),
  q(
    "13-understanding-3", 13,
    "Why is 'assuming everyone understood' the single most expensive error in team collaboration?",
    "What does organizational research reveal about assumed alignment?",
    [
      "Assumed alignment masks divergent assumptions until the final deliverable, causing massive rework, delayed launches, and mutual frustration.",
      "Assumed alignment saves time and makes teams 100% efficient.",
      "Verification is an insult to professional intelligence.",
      "Alignment checks are only for children in elementary school.",
    ],
    0,
    "Verifying shared understanding up front is the cheapest, highest-return investment a team can make."
  ),

  // Point 4: Inquiring with humility builds respect.
  q(
    "13-action-4", 13,
    "A junior colleague challenges your proposed technical architecture during a design review.",
    "What would you do next?",
    [
      "Say with genuine curiosity: 'Walk me through that concern—what bottlenecks are you anticipating with that approach?'",
      "Remind them that you have ten years more experience than they do and dismiss their comment.",
      "Get defensive and lecture them on technical history.",
      "Feel humiliated and cancel the review.",
    ],
    0,
    "Welcoming technical pushback with intellectual curiosity sharpens system design and builds a culture of psychological safety."
  ),
  q(
    "13-understanding-4", 13,
    "What distinguishes intellectual arrogance from intellectual humility in high-stakes environments?",
    "Why is intellectual humility a superpower in leadership?",
    [
      "Intellectual humility is fiercely committed to discovering the best truth, regardless of who points it out, while arrogance defends ego at all costs.",
      "Humility means pretending you know nothing and letting everyone walk over you.",
      "Arrogance is required to convince people that you are a genius.",
      "Humility is a sign of executive weakness.",
    ],
    0,
    "Leaders with intellectual humility prioritize getting it right over being right, which makes their teams invincible."
  ),

  // Point 5: Inquire about feelings, not just facts.
  q(
    "13-action-5", 13,
    "Your partner has been unusually quiet and pensive throughout your Sunday evening walk.",
    "What would you do next?",
    [
      "Gently ask: 'You seem a little quiet and reflective tonight—how is your heart feeling about the week ahead?'",
      "Ignore them and scroll on your phone the entire walk.",
      "Say: 'If you're going to be in a bad mood, we should have stayed home.'",
      "Demand: 'Tell me right now what is wrong with you.'",
    ],
    0,
    "A gentle, warm inquiry creates an open door for connection without pressure or annoyance."
  ),
  q(
    "13-understanding-5", 13,
    "Why does asking about someone's emotional state build deeper intimacy than merely asking logistical questions?",
    "What does emotional attunement do for relationships?",
    [
      "It signals: 'I see you as a complete human being, not just a task manager or logistical roommate,' deepening bonding.",
      "It is a manipulative trick to get people to do your chores.",
      "Emotional questions are dangerous and should be avoided in marriage.",
      "Logistics are all that matter in mature adult partnerships.",
    ],
    0,
    "Emotional inquiries bridge the gap between living together and truly connecting together."
  ),

  // ==========================================
  // CHAPTER 14: Intention and impact
  // ==========================================
  // Point 1: Good intentions do not erase painful impact.
  q(
    "14-action-1", 14,
    "You meant to tease a friend affectionately about their singing voice, but they suddenly look hurt and look away.",
    "What would you do next?",
    [
      "Immediately step in: 'I'm so sorry, that was unkind of me. I was trying to joke, but it came out rude and hurtful. Are you okay?'",
      "Say: 'Relax, it was just a joke! Why can't you take a joke?'",
      "Pretend you didn't see them get hurt and keep making more singing jokes.",
      "Get angry at them for being too sensitive and ruining the vibe.",
    ],
    0,
    "Acknowledging that your joke caused real pain and apologizing promptly proves that you care more about your friend than defending your joke."
  ),
  q(
    "14-understanding-1", 14,
    "Why is 'I didn't mean to hurt you' an incomplete and dismissive response to someone who has been hurt?",
    "What is the flaw in focusing solely on intention?",
    [
      "Focusing solely on intention demands that the hurt person comfort you for your good motives, while leaving their actual pain ignored and unaddressed.",
      "Intention is the only thing that matters in ethics; if you didn't mean it, no harm occurred.",
      "It proves you are an innocent victim of their hypersensitivity.",
      "Saying you didn't mean it magically repairs all broken bones and feelings.",
    ],
    0,
    "If you accidentally step on someone's foot, you don't argue that your foot had good intentions; you say sorry and step off."
  ),

  // Point 2: Holding intention and impact simultaneously enables repair.
  q(
    "14-action-2", 14,
    "A colleague was trying to help you by reorganizing your shared filing system, but now you cannot find critical client files.",
    "What would you do next?",
    [
      "Say: 'I appreciate that you were trying to make the system cleaner, but because the layout changed, I can't locate the Acme files for today's deadline. Can you help me find them?'",
      "Scream that they are an incompetent saboteur who ruined your life.",
      "Quietly complain to HR without ever speaking to the colleague.",
      "Delete all their personal folders in retaliation.",
    ],
    0,
    "Acknowledging their helpful motive while clearly addressing the disruptive practical impact resolves the issue constructively."
  ),
  q(
    "14-understanding-2", 14,
    "How does holding BOTH intention and impact simultaneously prevent toxic blame games?",
    "What is the superpower of dual-awareness?",
    [
      "It avoids painting the person as an evil villain (respecting their intent) while ensuring the concrete damage is acknowledged and repaired (respecting the impact).",
      "It allows you to blame everyone for everything simultaneously.",
      "It makes conversations take five times longer with zero benefit.",
      "Dual-awareness is impossible for human beings to achieve.",
    ],
    0,
    "Dual-awareness bridges the chasm between defensiveness ('I meant well!') and resentment ('You hurt me!')."
  ),

  // Point 3: Feedback about impact is an opportunity to calibrate.
  q(
    "14-action-3", 14,
    "A team member tells you: 'When you check in multiple times a day on my progress, it makes me feel micromanaged and distrusted.'",
    "What would you do next?",
    [
      "Say: 'Thank you for telling me. My intent was just to stay on top of launch deadlines, but I see how checking so often feels suffocating. Let's agree on one daily check-in instead.'",
      "Say: 'I'm the manager, so I will check in every five minutes if I want to.'",
      "Stop speaking to them completely and never check in again, hoping their project fails.",
      "Tell them they clearly lack professional stamina.",
    ],
    0,
    "Validating their experience of micromanagement and establishing an agreed check-in cadence builds mutual trust."
  ),
  q(
    "14-understanding-3", 14,
    "Why is impact feedback from teammates the most valuable mirror a leader can receive?",
    "What does impact feedback provide to leaders?",
    [
      "We cannot see our own shadow or how our habits land on others; feedback allows us to calibrate our behavior to match our highest intentions.",
      "It allows leaders to identify which employees need to be fired immediately.",
      "It proves that subordinates have too much power.",
      "Impact feedback is a sign of organizational breakdown.",
    ],
    0,
    "Without feedback on impact, leaders operate blind, convinced of their own benevolence while leaving unintentional wreckage behind."
  ),

  // Point 4: Distinguishing malicious intent from clumsy execution.
  q(
    "14-action-4", 14,
    "An older relative tries to compliment your appearance by saying: 'You look so much healthier now that you've put on a little weight.'",
    "What would you do next?",
    [
      "Recognize that in their generation 'healthy' was a compliment for vitality, take a breath, and say gently: 'I appreciate the love, but I prefer not talking about my body weight.'",
      "Scream that they are body-shaming you and throw your drink at them.",
      "Storm out of the family holiday dinner crying.",
      "Make an insulting comment about their wrinkles.",
    ],
    0,
    "Discerning the clumsy generational affection behind the remark allows you to set a boundary with calm dignity rather than fury."
  ),
  q(
    "14-understanding-4", 14,
    "Why does attributing clumsy comments to malice cause unnecessary relational destruction?",
    "What happens when we mistake clumsiness for malice?",
    [
      "It treats well-meaning but socially awkward people as dangerous enemies, destroying family and community bonds that could be healed with gentle boundaries.",
      "It ensures that only perfect, polished communicators are allowed in your life.",
      "It protects you from ever hearing an awkward phrase again.",
      "Everyone who makes a clumsy remark is secretly evil.",
    ],
    0,
    "Giving grace for social clumsiness while gently clarifying boundaries keeps loving connections alive across differences."
  ),

  // Point 5: Sincere amends requires prioritizing the recipient's experience.
  q(
    "14-action-5", 14,
    "You accidentally broke your friend's favorite coffee mug that they brought back from a memorable trip to Japan.",
    "What would you do next?",
    [
      "Apologize sincerely, acknowledge the sentimental value that cannot easily be replaced, and offer to research an authentic replacement or treat them to a special dinner.",
      "Say: 'It's just a piece of cheap ceramic, why are you making a big deal out of it?'",
      "Hide the broken pieces under the couch and pretend you never saw it.",
      "Blame them for leaving the mug so close to the edge of the counter.",
    ],
    0,
    "Honoring the sentimental impact and taking active responsibility demonstrates authentic respect for what they cherish."
  ),
  q(
    "14-understanding-5", 14,
    "Why does minimizing someone else's loss ('It's just a cheap mug') feel like a double violation?",
    "What does minimization do to the injured party?",
    [
      "First they suffered the loss of an item they loved; then they suffered the erasure of their right to feel sad about it, compounding the pain.",
      "It helps them realize that material possessions are illusions of the ego.",
      "It saves you money on replacement costs.",
      "It cures their sadness in five seconds.",
    ],
    0,
    "Minimizing another's pain adds the insult of emotional invalidation on top of the original injury."
  ),

  // ==========================================
  // CHAPTER 15: Different doesn't mean unreasonable
  // ==========================================
  // Point 1: Recognizing diverse communication styles avoids false conflict.
  q(
    "15-action-1", 15,
    "Your new project partner is highly analytical and sends bulleted lists, while you prefer warm, conversational storytelling.",
    "What would you do next?",
    [
      "Appreciate that their bulleted precision keeps logistics crisp, and adapt to use clear summaries while bringing your warm storytelling to team meetings.",
      "Send an email accusing them of being a cold, soulless robot.",
      "Refuse to read their bullet points until they write in complete, poetic paragraphs.",
      "Complain to management that your communication styles are fundamentally incompatible.",
    ],
    0,
    "Valuing diverse cognitive and communication styles leverages complementary strengths rather than manufacturing cultural friction."
  ),
  q(
    "15-understanding-1", 15,
    "Why do people fall into the trap of thinking 'My way of communicating is the normal, objective standard'?",
    "What is the bias of cultural egocentrism?",
    [
      "We grow up immersed in our personal cultural and family communication norms, unconsciously mistaking our familiarity for universal human propriety.",
      "Our personal communication style was ordained by evolutionary science as the absolute best.",
      "Anyone who communicates differently is suffering from a personality disorder.",
      "All humans are born with the exact same communication preferences.",
    ],
    0,
    "True emotional sophistication realizes that your personal style is merely one dialect among a rich global tapestry of expression."
  ),

  // Point 2: Respecting introversion and extroversion rhythms.
  q(
    "15-action-2", 15,
    "After an intense 8-hour strategy workshop, your extroverted colleagues want to go to a loud bar, while an introverted teammate wants to go straight to their hotel room to read.",
    "What would you do next?",
    [
      "Warmly say to the introverted teammate: 'Enjoy your quiet evening to recharge!' and let everyone celebrate in their preferred way without guilt.",
      "Drag the introverted teammate by the arm to the bar, yelling: 'Don't be a party pooper, you have to come!'",
      "Mock the introverted teammate for having no social skills.",
      "Cancel the bar outing for everyone to force group uniformity.",
    ],
    0,
    "Validating different neurological recharge needs (solitude vs social stimulation) creates an inclusive, pressure-free team culture."
  ),
  q(
    "15-understanding-2", 15,
    "What is the biological difference between introverted and extroverted nervous systems regarding dopamine and stimulation?",
    "What does neuroscience teach about social energy?",
    [
      "Introverted nervous systems are more sensitive to dopamine and easily overwhelmed by intense external stimulation; extroverts require higher stimulation to feel energized.",
      "Introversion is a psychological illness that needs medication.",
      "Extroverts are selfish people who hate reading books.",
      "There is zero biological difference; it is purely a matter of willpower.",
    ],
    0,
    "Honoring biological variations in stimulation sensitivity removes the toxic moral judgment often cast on social preferences."
  ),

  // Point 3: Pacing differences are operational, not moral.
  q(
    "15-action-3", 15,
    "You prefer making rapid decisions in five minutes, while your business partner insists on sleeping on every major contract overnight.",
    "What would you do next?",
    [
      "Recognize that their overnight reflection protects the partnership from impulsive errors, and agree on a standard 24-hour decision buffer.",
      "Call them indecisive and cowardly, and sign contracts without their approval.",
      "Slow your work down to a complete halt out of spite.",
      "Dissolve the business because you have different processing tempos.",
    ],
    0,
    "Pairing fast visionary drive with deliberate reflective scrutiny creates a resilient, high-performing leadership partnership."
  ),
  q(
    "15-understanding-3", 15,
    "Why is equating speed of response with intelligence or commitment a dangerous cognitive fallacy?",
    "What is the risk of speed bias?",
    [
      "Rapid responders often react on instinct, whereas reflective thinkers process systemic second-order consequences; both tempos offer vital, balanced value.",
      "Fast responders are always 100% smarter than reflective thinkers.",
      "Slow responders are lazy and don't care about the company.",
      "True intelligence is measured solely with a stopwatch.",
    ],
    0,
    "High-functioning organizations deliberately balance the agility of fast responders with the depth of reflective synthesizers."
  ),

  // Point 4: Direct vs indirect communication cultures.
  q(
    "15-action-4", 15,
    "A colleague from a high-context cultural background says 'That might be a little challenging' to signal that an idea is completely unworkable.",
    "What would you do next?",
    [
      "Pick up on the polite diplomatic cue, and explore: 'What specific hurdles do you foresee so we can rethink the direction?'",
      "Ignore the polite cue and push the bad idea forward, saying: 'Well, you said it's only a little challenging, so let's do it!'",
      "Loudly demand that they stop speaking in riddles and yell at them.",
      "Tell them that American bluntness is the only acceptable language in business.",
    ],
    0,
    "Understanding high-context diplomatic communication allows you to hear the underlying dissent without demanding blunt confrontation."
  ),
  q(
    "15-understanding-4", 15,
    "What is the distinction between 'High-Context' (indirect) and 'Low-Context' (direct) communication cultures?",
    "What is the key cross-cultural communication framework?",
    [
      "Low-context cultures place all meaning directly into explicit words; high-context cultures weave meaning into relationships, nonverbal cues, and social hierarchy.",
      "Low-context cultures are barbaric, while high-context cultures are weak.",
      "High-context communication is an obsolete relic that should be abolished.",
      "There is only one universal communication culture on Earth.",
    ],
    0,
    "Cross-cultural fluency recognizes that direct bluntness and diplomatic indirectness are both coherent, sophisticated systems of human harmony."
  ),

  // Point 5: Celebrating complementary differences builds formidable teams.
  q(
    "15-action-5", 15,
    "You are an optimistic, big-picture visionary paired with a pragmatic, detail-obsessed risk manager who constantly questions your assumptions.",
    "What would you do next?",
    [
      "Embrace them as your greatest asset: 'Your eye for risk protects my vision from blowing up. Let's stress-test this concept together.'",
      "Try to get them removed from the team because they crush your enthusiasm.",
      "Surround yourself exclusively with people who always say yes to all your ideas.",
      "Give up on all big-picture visions and become cynical.",
    ],
    0,
    "Welcoming your cognitive opposite as a co-pilot creates bulletproof strategies that neither could achieve alone."
  ),
  q(
    "15-understanding-5", 15,
    "Why does assembling a team of identical clones who think and communicate exactly like you lead to catastrophic failure?",
    "What is the fatal flaw of intellectual monoculture?",
    [
      "Homogeneous teams share the exact same blind spots, resulting in groupthink, unvetted risks, and sudden blind-sided collapse.",
      "Monocultures are celebrated for their incredible creativity and innovation.",
      "Clones are always more fun at office holiday parties.",
      "Diversity in thinking is only a marketing slogan with no operational value.",
    ],
    0,
    "Resilient teams thrive on cognitive friction; diverse perspectives illuminate blind spots before reality delivers a painful lesson."
  ),
];
