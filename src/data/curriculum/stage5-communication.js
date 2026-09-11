// Stage 5: Communication (Chapters 21 - 25)
// Themes: Expressing Experience, Clear Requests, Saying No, Constructive Disagreement, Repair

function q(id, chapterId, situation, prompt, choices, correctIndex, explanation, skillIds = ["communication"]) {
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

export const stage5Questions = [
  // ==========================================
  // CHAPTER 21: Put your experience into words
  // ==========================================
  // Point 1: A concrete observation and impact give the conversation a clearer starting point.
  q(
    "21-action-1", 21,
    "Your roommate repeatedly leaves clean laundry piled on the shared sofa for several days.",
    "What would you do next?",
    [
      "Say: 'When your laundry stays on the couch for a few days, I feel frustrated because I can't sit down to relax after work.'",
      "Yell: 'You are the most inconsiderate, messy person I have ever lived with!'",
      "Throw their laundry on the floor and slam your bedroom door.",
      "Say nothing, but sigh loudly every time you squeeze onto the corner of the sofa.",
    ],
    0,
    "Stating a concrete neutral observation paired with its personal impact opens problem-solving without provoking instant defense."
  ),
  q(
    "21-understanding-1", 21,
    "Why is beginning a conversation with a specific factual observation more effective than starting with an evaluation?",
    "What is the key communication insight?",
    [
      "Factual observations describe what a camera could record, making it harder to dispute, whereas evaluations sound like personal attacks.",
      "Starting with evaluations shows that you are dominant and authoritative.",
      "Observations are only useful if the other person is already calm.",
      "Starting with evaluations gets to the emotional truth faster.",
    ],
    0,
    "Observable facts provide a shared, neutral ground for discussion, whereas character judgments immediately trigger counter-attacks."
  ),

  // Point 2: A specific impact is easier to discuss than a claim about their character.
  q(
    "21-action-2", 21,
    "A team member arrived twenty minutes late to a client kickoff meeting you were co-hosting.",
    "What would you do next?",
    [
      "Say in private: 'When you arrived twenty minutes late, I had to scramble to cover the technical slides alone without preparation.'",
      "Tell the client in front of everyone: 'Sorry my colleague has terrible time management.'",
      "Say: 'You clearly don't care about this project or my career.'",
      "Pretend nothing happened and let it slide, hoping they won't repeat it.",
    ],
    0,
    "Describing the operational impact of their lateness keeps the issue professional and clearly understood."
  ),
  q(
    "21-understanding-2", 21,
    "Someone says to you: 'You never care about anyone else's schedule.' How does this character claim affect the dialogue?",
    "What happens when character claims are used?",
    [
      "Absolute words like 'never' and character accusations force you into defending your morality rather than discussing the specific schedule conflict.",
      "It helps you reflect on your lifelong flaws and become a better person immediately.",
      "It encourages a collaborative, win-win negotiation.",
      "It makes the conversation much shorter and more productive.",
    ],
    0,
    "Sweeping accusations derail conversations into debates about character rather than resolving the practical behavior."
  ),

  // Point 3: Observation and personal impact avoid assuming why they acted.
  q(
    "21-action-3", 21,
    "Your partner didn't reply to a text message you sent five hours ago about dinner plans.",
    "What would you do next?",
    [
      "When they get home, ask: 'I didn't hear back about dinner and felt stranded. Did your day get unexpectedly hectic?'",
      "Send a text: 'I guess I'm invisible to you now.'",
      "Order dinner only for yourself to teach them a lesson.",
      "Call ten times in a row leaving increasingly frantic voicemails.",
    ],
    0,
    "Expressing your stranded feeling while staying open to their context avoids assigning malicious motives."
  ),
  q(
    "21-understanding-3", 21,
    "You find yourself thinking: 'They didn't invite me to lunch because they want to exclude me.'",
    "How can you untangle fact from interpretation?",
    [
      "The fact is you were not invited; the idea that they deliberately sought to exclude you is an unverified mental interpretation.",
      "Your gut feeling is infallible proof of their secret motives.",
      "Assume everyone at the table spent the entire lunch gossiping about you.",
      "Conclude that you must immediately distance yourself from the whole group.",
    ],
    0,
    "Distinguishing what actually occurred from the story your brain constructed prevents self-inflicted interpersonal drama."
  ),

  // Point 4: Naming your experience gives the conversation a clear focus.
  q(
    "21-action-4", 21,
    "A colleague interrupts you three times during a technical briefing.",
    "What would you do next?",
    [
      "Calmly say: 'Hold on, let me finish this thought so the full context is clear, and then I'll hand it over to you.'",
      "Stop speaking, fold your arms, and glare at the table for the rest of the briefing.",
      "Loudly insult their lack of manners in front of the team.",
      "Interrupt them constantly for the remainder of the meeting in revenge.",
    ],
    0,
    "A calm, assertive boundary holds the floor constructively without turning the meeting into a battleground."
  ),
  q(
    "21-understanding-4", 21,
    "Why does using 'I feel [emotion]' communicate more cleanly than using 'I feel like you [accusation]'?",
    "What is the grammatical and emotional distinction?",
    [
      "'I feel like you...' is an accusation in disguise, whereas 'I feel...' actually communicates your internal emotional reality.",
      "There is no difference; both are equally effective 'I' statements.",
      "'I feel like you...' is much more honest because it focuses on what the other person did wrong.",
      "Using genuine feeling words makes you appear vulnerable and weak in negotiations.",
    ],
    0,
    "Disguising thoughts and blame as feelings sabotages communication, whereas authentic feeling words build bridgeheads."
  ),

  // Point 5: A concrete account communicates the effect without judging the whole person.
  q(
    "21-action-5", 21,
    "A friend made a joke at your expense during a dinner party that made you feel humiliated.",
    "What would you do next?",
    [
      "Pull them aside later and say: 'When you joked about my career struggles in front of the group, I felt embarrassed and hurt.'",
      "Roast them back viciously at the table targeting their deepest insecurity.",
      "Block their number on your phone the moment you get home without explaining why.",
      "Laugh along loudly at the table while secretly planning to cut them off forever.",
    ],
    0,
    "Addressing the specific joke in private separates the hurtful act from their character and allows for genuine accountability."
  ),
  q(
    "21-understanding-5", 21,
    "A close friend tells you: 'When you canceled our plans at the last minute yesterday, I felt let down.'",
    "What is the most emotionally intelligent way to hear this?",
    [
      "Hear it as a specific reflection of how your cancellation affected them, rather than an indictment of you as a terrible human being.",
      "Argue immediately that you had a very good excuse and that they have no right to feel let down.",
      "Spiral into self-hatred, believing you are incapable of being a loyal friend.",
      "Counter-attack by bringing up a time they canceled on you six months ago.",
    ],
    0,
    "Hearing feedback about impact without taking it as a death sentence for your self-worth enables gracious repair."
  ),

  // ==========================================
  // CHAPTER 22: Make a clear request
  // ==========================================
  // Point 1: The request names a specific action and when it matters.
  q(
    "22-action-1", 22,
    "You need your coworker to review a 10-page document before an upcoming board presentation.",
    "What would you do next?",
    [
      "Ask: 'Could you review pages 4 through 8 by Thursday at 2 PM, specifically checking the financial forecasts?'",
      "Say: 'Can you look over my stuff whenever you get a chance?'",
      "Leave the printout on their desk with no note and get angry if they don't read it.",
      "Demand: 'Drop whatever you're doing right now and read this immediately.'",
    ],
    0,
    "Specifying the section, focus area, and deadline turns a vague chore into a manageable, actionable task."
  ),
  q(
    "22-understanding-1", 22,
    "Why do vague complaints like 'Please be more considerate' rarely lead to lasting behavioral change?",
    "What makes vague complaints ineffective?",
    [
      "Consideration means different things to different people; without naming the concrete behavior desired, the other person must guess what you want.",
      "People are inherently selfish and will only respond to strict financial penalties.",
      "Complaints should always be broad to cover all future mistakes.",
      "Vague complaints are more polite than specific requests.",
    ],
    0,
    "Clarity is kindness; naming the exact action desired eliminates guesswork and reduces friction."
  ),

  // Point 2: An action and a time make the request concrete enough to discuss.
  q(
    "22-action-2", 22,
    "You want your partner to take a more active role in keeping the kitchen clean on weeknights.",
    "What would you do next?",
    [
      "Propose: 'Could we agree that whoever doesn't cook washes the dishes and wipes the counters before 9 PM?'",
      "Sigh and loudly slam pots in the sink every night while muttering: 'Nobody helps me in this house.'",
      "Demand that they hire a full-time cleaner out of their personal budget.",
      "Stop cooking dinner entirely and eat takeout in your car.",
    ],
    0,
    "Proposing a shared, concrete routine with clear roles and timing transforms resentment into practical agreement."
  ),
  q(
    "22-understanding-2", 22,
    "Someone responds to your request by saying: 'I can't do Thursday, but I could do Friday morning.'",
    "What does this response demonstrate about requests versus demands?",
    [
      "A genuine request allows room for negotiation and counter-offers, whereas a demand punishes any response other than instant compliance.",
      "It proves they don't respect your authority.",
      "You should reject their Friday offer to show that your initial deadline was non-negotiable.",
      "It shows they are deliberately testing your patience.",
    ],
    0,
    "True requests respect the other person's agency, treating counter-proposals as collaborative problem-solving."
  ),

  // Point 3: A clear timeframe explains when the action would be helpful.
  q(
    "22-action-3", 22,
    "You are asking a family member to pick you up from the airport after a delayed evening flight.",
    "What would you do next?",
    [
      "Text: 'My flight lands at 9:45 PM at Terminal 2. If you're free, could you pick me up outside baggage claim around 10:15 PM? If not, no worries at all—I will grab a cab.'",
      "Text: 'Pick me up tonight.'",
      "Call them from the curb at 10:15 PM demanding to know why they aren't waiting for you.",
      "Assume they don't want to help and pay for an expensive private car without asking.",
    ],
    0,
    "Providing flight details, estimated curb time, and an explicit low-pressure alternative respects their schedule."
  ),
  q(
    "22-understanding-3", 22,
    "Why does attaching an open exit clause (e.g., 'If not, no problem, I have a backup') strengthen relationships?",
    "What is the psychological effect of a low-pressure request?",
    [
      "It removes the fear of obligation, allowing the other person to say yes from authentic generosity rather than guilty compliance.",
      "It signals to the other person that you don't actually need their help.",
      "It makes you look indecisive and weak.",
      "It guarantees they will always say no.",
    ],
    0,
    "When people feel genuinely free to say no, their 'yes' becomes sincere, joyful, and free from underlying resentment."
  ),

  // Point 4: Naming the desired action is clearer than a general complaint about consideration.
  q(
    "22-action-4", 22,
    "Your supervisor regularly sends work emails after 9 PM that cause your phone to ping and disrupt your sleep.",
    "What would you do next?",
    [
      "Say in your 1-on-1: 'I've noticed emails coming in late; I turn notifications off at 8 PM to recharge, so I'll review and respond to evening messages first thing at 8:30 AM.'",
      "Reply at 11 PM with a furious email accusing them of violating your human rights.",
      "Ignore all emails throughout the workday to punish them for messaging late.",
      "Complain to HR before having a direct conversation with your supervisor.",
    ],
    0,
    "Proactively defining your communication rhythms and response commitments establishes professional boundaries smoothly."
  ),
  q(
    "22-understanding-4", 22,
    "Why is asking for what you DO want more productive than listing all the things you DON'T want?",
    "What is the power of positive action formulation?",
    [
      "Stating positive actions provides an immediate behavioral target, whereas listing negatives leaves countless other undesirable alternatives open.",
      "Listing negatives is more psychologically satisfying.",
      "People are incapable of understanding negative statements.",
      "Positive requests always guarantee 100% immediate obedience.",
    ],
    0,
    "Focusing on the desired target behavior gives people a clear roadmap for success instead of navigating a minefield of 'don'ts'."
  ),

  // Point 5: A specific, feasible request allows an informed yes, no, or alternative.
  q(
    "22-action-5", 22,
    "You are organizing a charity fundraiser and need volunteers to manage the registration desk.",
    "What would you do next?",
    [
      "Send a message: 'We need two people for a 90-minute shift from 9:00 to 10:30 AM to hand out badges. Let me know by Wednesday if you can take that slot.'",
      "Post: 'We need tons of help, please show up whenever you can on Saturday.'",
      "Guilt-trip your friends privately: 'If you really supported my values, you would spend your whole Saturday here.'",
      "Assign people to shifts without asking their availability.",
    ],
    0,
    "A bounded, clearly timed request makes volunteering easy to evaluate and commit to without anxiety."
  ),
  q(
    "22-understanding-5", 22,
    "When someone asks you for a massive favor that you cannot fully accommodate, what is the best collaborative approach?",
    "How can you negotiate a request you cannot fulfill completely?",
    [
      "Decline the parts you cannot do while offering a feasible alternative within your genuine capacity.",
      "Say yes anyway and resent them deeply the entire time you do it.",
      "Ignore their message completely and pretend you never received it.",
      "Lecture them on why their request was unreasonable and selfish.",
    ],
    0,
    "Offering a counter-proposal that reflects your true capacity maintains the connection while honoring your limits."
  ),

  // ==========================================
  // CHAPTER 23: Say no respectfully
  // ==========================================
  // Point 1: A brief, honest limit can be enough. You do not have to provide every personal detail.
  q(
    "23-action-1", 23,
    "A neighbor invites you to a Saturday afternoon barbecue, but you already planned a quiet weekend to rest after a grueling week.",
    "What would you do next?",
    [
      "Say warmly: 'Thanks so much for the invite! I won't be able to make it this Saturday, but I hope you all have a wonderful time.'",
      "Invent an elaborate lie about a sick relative and worry all weekend that they will catch you in the lie.",
      "Agree to go, show up in an exhausted bad mood, and leave after twenty minutes.",
      "Ignore the invitation and avoid making eye contact whenever you see them outside.",
    ],
    0,
    "A warm, gracious decline requires no fabricated excuses; an honest boundary delivered with kindness is complete in itself."
  ),
  q(
    "23-understanding-1", 23,
    "Why do people feel an overwhelming compulsion to over-explain and fabricate elaborate excuses when saying no?",
    "What emotional mechanism drives over-explaining?",
    [
      "Over-explaining is driven by anxiety and the desire to manage the other person's feelings, mistakenly believing a simple limit isn't valid on its own.",
      "It proves that you are an honest and transparent communicator.",
      "Elaborate excuses always make the other person happier.",
      "It is illegal to decline an invitation without a verifiable doctor's note.",
    ],
    0,
    "Recognizing that your personal capacity is a legitimate boundary on its own frees you from the trap of anxious over-explaining."
  ),

  // Point 2: A brief limit can be clear without judging the request or the person.
  q(
    "23-action-2", 23,
    "A friend asks to borrow your car for the weekend, but you are not comfortable lending your vehicle to anyone.",
    "What would you do next?",
    [
      "Say honestly: 'I'm not comfortable lending my car, but I'd be happy to help look up local rental deals or give you a ride to the station.'",
      "Say: 'What kind of irresponsible person asks to borrow someone's car?'",
      "Lend the car while biting your nails in panic all weekend.",
      "Lie and say the transmission is broken.",
    ],
    0,
    "Stating your personal comfort boundary clearly without shaming the request maintains self-respect and friendship."
  ),
  q(
    "23-understanding-2", 23,
    "Someone reacts to your clear 'no' by getting angry and asking: 'Why not? Give me one good reason!'",
    "How can you hold your ground without escalating?",
    [
      "Calmly repeat the boundary without getting drawn into a debate: 'I understand this is disappointing, but my answer is no.'",
      "Start yelling back and listing every time they wronged you in the past.",
      "Crumble immediately and apologize for having boundaries.",
      "Fabricate ten new excuses to justify your decision.",
    ],
    0,
    "Refusing to debate your boundary signals that your 'no' is firm and not a negotiation point."
  ),

  // Point 3: You can decline honestly without making a commitment you cannot sustain.
  q(
    "23-action-3", 23,
    "Your department head asks if you can take on managing the summer intern program in addition to your current full workload.",
    "What would you do next?",
    [
      "Say: 'I want the interns to have great mentorship, but with my current deliverables on the launch, I don't have the bandwidth to do it justice.'",
      "Say yes impulsively to impress the boss, then burn out and neglect both the interns and your deliverables.",
      "Roll your eyes and complain to coworkers that leadership is out of touch.",
      "Say yes, but deliberately ignore the interns so leadership reassigns them.",
    ],
    0,
    "Framing your decline around the quality of mentorship and current commitments demonstrates professional integrity."
  ),
  q(
    "23-understanding-3", 23,
    "What is the true interpersonal cost of saying 'yes' when you secretly mean 'no'?",
    "What is the hidden consequence of unauthentic compliance?",
    [
      "It breeds internal resentment, leads to substandard execution, and erodes trust because your word is no longer reliable.",
      "It guarantees you will be loved and admired by everyone forever.",
      "It prevents all workplace conflict permanently.",
      "It has zero cost as long as you pretend to be happy.",
    ],
    0,
    "A resentful, overburdened 'yes' damages relationships far more over time than an honest, prompt 'no'."
  ),

  // Point 4: A privacy boundary can be stated without providing the information itself.
  q(
    "23-action-4", 23,
    "An acquaintance at a networking event asks an intrusive, personal question about your divorce or medical history.",
    "What would you do next?",
    [
      "Smile gently and say: 'I prefer to keep those personal details private, but I'd love to hear more about the project you mentioned earlier.'",
      "Freeze in awkwardness and over-share your private medical trauma.",
      "Make a loud scene and accuse them of being a monster.",
      "Tell a bizarre lie to confuse them.",
    ],
    0,
    "A polite, smooth pivot protects your personal privacy without creating an awkward social standoff."
  ),
  q(
    "23-understanding-4", 23,
    "Why is stating a boundary around personal privacy an act of self-care rather than rudeness?",
    "What is the core distinction between rudeness and privacy?",
    [
      "You are the sole steward of your personal story; declining to disclose private matters to casual acquaintances is a healthy, dignified boundary.",
      "Declining to answer is always rude, so you must always answer any question you are asked.",
      "Privacy boundaries are only meant for celebrities.",
      "Being authentic means sharing all your secrets with every stranger.",
    ],
    0,
    "Healthy emotional boundaries recognize that intimacy is earned through trust, not surrendered on demand."
  ),

  // Point 5: A concrete limit makes your availability explicit.
  q(
    "23-action-5", 23,
    "A client asks you to perform an extra round of revisions that falls completely outside the agreed project scope.",
    "What would you do next?",
    [
      "Say: 'I'd be happy to handle these extra additions! Since they fall outside our original scope, I can send over an addendum with the estimated hours and cost.'",
      "Do the extra work for free while fuming with anger.",
      "Send a furious email threatening legal action for breach of contract.",
      "Ghost the client and abandon the project unfinished.",
    ],
    0,
    "Tying additional requests to scope addenda and fees turns boundary-setting into standard professional consulting."
  ),
  q(
    "23-understanding-5", 23,
    "How does having clear, predictable boundaries actually make you more trustworthy to clients and partners?",
    "Why do clear boundaries increase trust?",
    [
      "When people know you have the courage to say no to unreasonable demands, they can fully trust that your 'yes' is genuine and backed by capacity.",
      "Clients only trust vendors who work for free.",
      "Boundaries make you unpredictable and mysterious.",
      "It forces people to fear you, which is the root of trust.",
    ],
    0,
    "Clear limits eliminate ambiguity and second-guessing, creating a foundation of mutual professional respect."
  ),

  // ==========================================
  // CHAPTER 24: Stay constructive in disagreement
  // ==========================================
  // Point 1: Checking understanding can reduce confusion without requiring you to surrender your position.
  q(
    "24-action-1", 24,
    "You and a colleague strongly disagree on which database technology to adopt for an upcoming migration.",
    "What would you do next?",
    [
      "Say: 'Before I explain my recommendation again, let me see if I understand yours: you're prioritizing write speed and schema flexibility, right?'",
      "Interrupt them every time they mention their preferred database to list its technical flaws.",
      "Appeal to leadership behind their back to overrule them without their knowledge.",
      "Throw your hands in the air and say: 'Fine, do whatever you want, when it crashes don't blame me.'",
    ],
    0,
    "Reflecting their core technical priorities back to them demonstrates thorough comprehension and lowers defensive tension."
  ),
  q(
    "24-understanding-1", 24,
    "Why does summarizing someone else's argument accurately NOT mean you are agreeing with their conclusion?",
    "What is the difference between understanding and agreement?",
    [
      "Understanding demonstrates that you have accurately received their message; agreement is whether you share their verdict. You can understand 100% and still disagree.",
      "Summarizing someone's argument legally binds you to their position.",
      "If you understand someone's argument, you are obligated to surrender yours.",
      "Summarizing shows that you have no ideas of your own.",
    ],
    0,
    "Separating comprehension from consensus allows two people to feel deeply heard without abandoning differing perspectives."
  ),

  // Point 2: Understanding the needs behind positions may reveal workable options.
  q(
    "24-action-2", 24,
    "You want to work remotely full-time, but your manager insists on three days a week in the office.",
    "What would you do next?",
    [
      "Ask: 'What core outcomes are you hoping in-office days achieve? If it's collaborative brainstorming, could we cluster those on two set days?'",
      "Threaten to quit on the spot unless you get 100% remote work immediately.",
      "Complain about your manager on LinkedIn without names.",
      "Show up to the office, put on headphones, and refuse to speak to anyone.",
    ],
    0,
    "Inquiring into the underlying business need (collaboration) opens up creative structural compromises that satisfy both parties."
  ),
  q(
    "24-understanding-2", 24,
    "In negotiation theory, what is the distinction between a 'position' and an 'underlying need'?",
    "What is the key principle of interest-based negotiation?",
    [
      "A position is a rigid stance (e.g. '3 days in office'); an underlying need is the deeper motive (e.g. 'team connection'). Needs can often be satisfied in multiple creative ways.",
      "Positions are emotional, while needs are always financial.",
      "There is no difference; positions and needs are identical.",
      "Focusing on needs means you must give up all your positions.",
    ],
    0,
    "Moving conversations from fixed positions to underlying needs unlocks flexible, win-win solutions."
  ),

  // Point 3: A focused discussion makes the immediate arrangement easier to address.
  q(
    "24-action-3", 24,
    "During an argument about whose turn it is to do the dishes, your partner suddenly brings up a dispute from your holiday trip six months ago.",
    "What would you do next?",
    [
      "Say gently: 'That trip still feels unresolved, and I want to talk about it, but right now can we figure out the kitchen plan for tonight first?'",
      "Bring up something embarrassing they did two years ago to retaliate.",
      "Yell: 'Why do you always drag up ancient history?' and storm out.",
      "Deny that the holiday trip ever had any problems.",
    ],
    0,
    "Acknowledging the past issue while keeping the immediate focus on the present chore prevents kitchen-sink arguments."
  ),
  q(
    "24-understanding-3", 24,
    "What happens when a disagreement succumbs to 'kitchen-sinking' (bringing in every past grievance at once)?",
    "What is the destructive impact of kitchen-sinking?",
    [
      "The conversation becomes hopelessly overloaded with unresolved emotional baggage, making it impossible to solve the immediate issue at hand.",
      "It resolves all past conflicts in a single efficient sitting.",
      "It proves that you have an extraordinary memory.",
      "It forces the other person to concede on every point.",
    ],
    0,
    "Confining disagreements to a single, manageable topic protects the conversation from emotional collapse."
  ),

  // Point 4: A planned pause can protect the conversation when continuing is not productive.
  q(
    "24-action-4", 24,
    "You notice your voice rising, your fists clenching, and a strong urge to yell during a discussion with a family member.",
    "What would you do next?",
    [
      "Say: 'I'm feeling heated and I want to treat you with respect. Let's take a 20-minute break to cool down and resume at 4 PM.'",
      "Push through and shout louder so they understand how serious you are.",
      "Storm out of the house slamming every door without saying when you will return.",
      "Start breaking dishes to express your rage physically.",
    ],
    0,
    "Calling for a time-out with a specific return time halts emotional flooding while reassuring them that you are not abandoning the conversation."
  ),
  q(
    "24-understanding-4", 24,
    "What happens biologically when you enter 'emotional flooding' (heart rate > 100 bpm during conflict)?",
    "What does physiology teach us about heated arguments?",
    [
      "The prefrontal cortex loses control to the amygdala; creative problem solving and empathy shut down, making productive resolution biologically impossible until you settle.",
      "Adrenaline makes you 50% more logical and persuasive.",
      "Flooding is a myth invented by psychologists.",
      "You should never stop talking when your heart is racing.",
    ],
    0,
    "Respecting the biology of emotional flooding prevents the catastrophic words spoken in the heat of fight-or-flight."
  ),

  // Point 5: Accurate understanding can coexist with continued disagreement.
  q(
    "24-action-5", 24,
    "You and your business co-founder disagree on whether to raise venture capital or stay bootstrapped, and both have valid logic.",
    "What would you do next?",
    [
      "Write down the core risks and benefits of both paths together on a whiteboard, and define a clear milestone metric to trigger the final decision.",
      "Accuse your co-founder of lacking vision or courage.",
      "Secretly take meetings with investors behind their back.",
      "Dissolve the company immediately rather than exploring compromise.",
    ],
    0,
    "Collaborative risk mapping and objective milestone triggers turn ideological standoffs into empirical strategic choices."
  ),
  q(
    "24-understanding-5", 24,
    "Why is disagreement between passionate teammates not necessarily a sign of a toxic relationship?",
    "What is the true function of healthy conflict?",
    [
      "Healthy disagreement tests ideas from diverse angles, exposes blind spots, and produces far more robust solutions than artificial harmony.",
      "Any disagreement is proof that teammates do not respect each other.",
      "Great teams never experience disagreement.",
      "Conflict should be suppressed immediately to keep everyone comfortable.",
    ],
    0,
    "Vigorous, respectful debate around ideas is the engine of high-performing, innovative teams."
  ),

  // ==========================================
  // CHAPTER 25: Repair after a difficult moment
  // ==========================================
  // Point 1: A specific acknowledgement and an offer to change address both the moment and what happens next.
  q(
    "25-action-1", 25,
    "You snapped at your partner in the car after a long, stressful workday when they asked a simple logistical question.",
    "What would you do next?",
    [
      "Say: 'I'm sorry for snapping at you earlier. You were just asking a question, and I took out my work stress on you. Next time I will take a breath before answering.'",
      "Say: 'I'm sorry, but if you saw what my boss did to me today, you wouldn't blame me.'",
      "Buy them an expensive gift and pretend the car incident never occurred.",
      "Wait for them to apologize to you for asking questions when you were clearly tired.",
    ],
    0,
    "A clean apology acknowledges the specific hurtful behavior, validates the impact, takes ownership without excuses, and commits to change."
  ),
  q(
    "25-understanding-1", 25,
    "Why does adding the word 'BUT' in an apology (e.g. 'I'm sorry I yelled, but you made me angry') ruin the repair?",
    "What does 'but' do to an apology?",
    [
      "'But' immediately erases the apology and shifts the blame back onto the other person, turning an act of accountability into self-justification.",
      "'But' makes an apology much more comprehensive and detailed.",
      "'But' is required in all legal apologies.",
      "It proves that the other person was the primary culprit.",
    ],
    0,
    "A genuine apology stands on its own without conditional clauses or defensive justifications."
  ),

  // Point 2: A repair names the action and includes realistic follow-through.
  q(
    "25-action-2", 25,
    "You promised a friend you would attend their art exhibition, but forgot and double-booked yourself with dinner plans.",
    "What would you do next?",
    [
      "Call them directly, apologize sincerely for the oversight, and ask if you can visit the gallery together this Sunday and take them out for coffee.",
      "Send a text saying 'Something came up' and never mention the exhibition again.",
      "Show up for five minutes to their exhibition, take a photo for social media, and leave immediately.",
      "Blame your calendar app for failing to notify you.",
    ],
    0,
    "Direct accountability paired with a concrete, caring reschedule initiative demonstrates that you genuinely value their craft."
  ),
  q(
    "25-understanding-2", 25,
    "What transforms an apology from empty words into a meaningful relational repair?",
    "What is the anchor of genuine repair?",
    [
      "Consistent, observable change in behavior over time; words acknowledge the fracture, but consistent action rebuilds the trust.",
      "Saying the words 'I'm sorry' at least fifty times.",
      "Giving the other person lavish gifts.",
      "Demanding that they immediately forgive you so you stop feeling guilty.",
    ],
    0,
    "Trust is rebuilt in the consistent follow-through that proves the apology was an authentic commitment, not just damage control."
  ),

  // Point 3: Specific responsibility avoids making the other person carry your unrelated frustration.
  q(
    "25-action-3", 25,
    "You were irritable and short-tempered with your junior colleague all morning because your laptop crashed.",
    "What would you do next?",
    [
      "Approach them and say: 'I was irritable with you this morning while dealing with computer issues. That wasn't fair to you, and I appreciate your patience.'",
      "Assume they understood that you were having computer problems so no apology is needed.",
      "Avoid talking to them for the rest of the week so things blow over.",
      "Tell them that dealing with difficult mornings is good preparation for their career.",
    ],
    0,
    "Owning your misplaced frustration reassures junior colleagues that they were not at fault and strengthens psychological safety."
  ),
  q(
    "25-understanding-3", 25,
    "Why do people often hesitate to apologize, fearing it will make them look weak or incompetent?",
    "What does leadership research show about apologies?",
    [
      "Vulnerability and prompt accountability actually enhance perceived competence and integrity, whereas defensive dodging damages credibility.",
      "Apologizing legally confirms that you are incompetent.",
      "Strong leaders should never apologize under any circumstances.",
      "People only respect leaders who blame external factors.",
    ],
    0,
    "Taking swift, dignified responsibility is a hallmark of emotional strength and commands deep professional respect."
  ),

  // Point 4: Repair includes addressing the actual impact, not just expressing regret.
  q(
    "25-action-4", 25,
    "You accidentally leaked confidential news about a teammate's departure before they had a chance to tell the team themselves.",
    "What would you do next?",
    [
      "Immediately go to the teammate in private, apologize deeply for betraying their confidence, and ask how you can help manage the communication now.",
      "Pretend someone else leaked the news and act surprised in front of the team.",
      "Avoid the teammate until their last day at the company.",
      "Tell them they should be grateful the news is out so they don't have to announce it.",
    ],
    0,
    "Facing the impacted party immediately and offering to assist with the fallout demonstrates courage and authentic remorse."
  ),
  q(
    "25-understanding-4", 25,
    "When you have hurt someone, what is their emotional right regarding how quickly they forgive you?",
    "What is the principle of emotional timeline in forgiveness?",
    [
      "Forgiveness is a gift on the injured party's timeline; demanding immediate forgiveness or reassurance shifts the focus back to soothing your own guilt.",
      "They are obligated to forgive you the exact second you say sorry.",
      "If they don't forgive you within 24 hours, they are toxic.",
      "You should badger them continuously until they say 'it's okay.'",
    ],
    0,
    "Patiently giving others the space to heal without pressuring them for instant absolution proves your apology was selfless."
  ),

  // Point 5: An offer to change the behaviour gives the apology practical meaning.
  q(
    "25-action-5", 25,
    "You have repeatedly interrupted a quiet team member during brainstorming sessions over the past month.",
    "What would you do next?",
    [
      "Say privately: 'I noticed I've been talking over you in brainstorming. I value your ideas, and in our next meeting I'm going to intentionally make sure you have the floor.'",
      "Announce in the next meeting: 'Everyone listen to this person now because they complained I talk too much.'",
      "Stop speaking completely in all meetings to show how ridiculous the feedback is.",
      "Assume that because they are quiet, they don't have anything valuable to contribute anyway.",
    ],
    0,
    "Proactively recognizing a habitual pattern and changing how you hold space creates tangible inclusion and builds lasting trust."
  ),
  q(
    "25-understanding-5", 25,
    "What is the difference between guilt and shame when making a repair?",
    "How does distinguishing guilt from shame aid relational healing?",
    [
      "Guilt says 'I did something hurtful' and motivates constructive repair; shame says 'I am a bad person' and leads to defensive withdrawal or self-pity.",
      "Guilt is useless, while shame is the only emotion that makes people good.",
      "There is no difference between guilt and shame.",
      "Shame motivates healthy accountability, while guilt causes avoidance.",
    ],
    0,
    "Focusing on the behavior (healthy guilt) empowers repair, whereas collapsing into self-reproach (shame) forces others to comfort you."
  ),
];
