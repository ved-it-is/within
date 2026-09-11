// Stage 6: Resilience (Chapters 26 - 30)
// Themes: Disappointment, Feedback, Comparison, Uncertainty, and Support

function q(id, chapterId, situation, prompt, choices, correctIndex, explanation, skillIds = ["resilience"]) {
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

export const stage6Questions = [
  // ==========================================
  // CHAPTER 26: Meet disappointment with care
  // ==========================================
  // Point 1: Making room for disappointment can coexist with a later decision about feedback or another attempt.
  q(
    "26-action-1", 26,
    "After weeks of preparation, your proposal for an important client was turned down in favor of another vendor.",
    "What would you do next?",
    [
      "Immediately rewrite the entire pitch deck tonight while feeling exhausted and demoralized.",
      "Send an email expressing frustration and accusing the client of making a superficial choice.",
      "Give yourself the evening to process the sting of disappointment, and schedule time tomorrow to request constructive feedback.",
      "Vow never to pitch for that type of high-stakes project again to prevent feeling this way.",
    ],
    2,
    "Allowing yourself time to process disappointment prevents hasty, emotionally reactive decisions and preserves clear thinking."
  ),
  q(
    "26-understanding-1", 26,
    "You missed out on a team award you were hoping to win, and you notice a hollow heaviness in your stomach.",
    "What perspective supports healthy emotional recovery?",
    [
      "Recognize that feeling sad or let down is a normal human reaction to caring about an outcome, not a sign of weakness.",
      "Pretend you never cared about the award anyway so people think you are unaffected.",
      "Convince yourself that awards are completely rigged and everyone who won is untalented.",
      "Repeatedly replay the announcement in your head to analyze what facial expression you made.",
    ],
    0,
    "Validating your sadness acknowledges your genuine effort without needing to diminish others or mask your vulnerability."
  ),

  // Point 2: A specific event can hurt without becoming a total judgment of your ability.
  q(
    "26-action-2", 26,
    "You took a professional licensing exam and fell just two points short of the passing score.",
    "What would you do next?",
    [
      "Announce to your colleagues that you are dropping out of the profession because you aren't cut out for it.",
      "Review the specific subject areas where you missed points and create a targeted review plan for the next sitting.",
      "Hide the results from everyone you know and refuse to ever discuss licensing again.",
      "Retake practice tests immediately without a break to punish yourself for failing.",
    ],
    1,
    "Separating an exam result from your overall potential allows you to focus on the specific knowledge gap constructively."
  ),
  q(
    "26-understanding-2", 26,
    "A creative piece you poured your heart into received minimal engagement online, sparking thoughts like: 'I'm completely untalented.'",
    "How can you reframe this internal voice?",
    [
      "Accept the voice as absolute truth and stop creating anything new.",
      "Notice that your mind is turning one quiet outcome into a sweeping statement about your worth as an artist.",
      "Delete all your past work in an impulsive burst of frustration.",
      "Blame the audience for lacking the sophistication to appreciate your genius.",
    ],
    1,
    "Catching cognitive distortions like overgeneralization helps prevent a single low-performing moment from defining your identity."
  ),

  // Point 3: Separating the event from identity leaves room for learning or adjustment.
  q(
    "26-action-3", 26,
    "A dinner you spent hours cooking for close friends ended up burnt and over-salted.",
    "What would you do next?",
    [
      "Laugh about the kitchen mishap, order takeout with your guests, and take a mental note on cooking heat for next time.",
      "Lock yourself in the bathroom in tears, convinced you ruined everyone's evening.",
      "Insist that your friends eat the burnt meal and get upset if they don't finish their plates.",
      "Apologize profusely twenty times throughout the night until your guests feel uncomfortable.",
    ],
    0,
    "Meeting practical mishaps with humor and grace keeps connection warm and keeps small failures in perspective."
  ),
  q(
    "26-understanding-3", 26,
    "You failed to maintain your morning workout streak during a demanding week at work and feel an inner wave of shame.",
    "What thought reflects compassionate resilience?",
    [
      "'A broken streak reflects a temporary surge in workload, not a collapse in my discipline or character.'",
      "'I have zero willpower, so there is no point in trying to restart.'",
      "'I will wake up at 4 AM every day next week to make up for my laziness.'",
      "'Healthy habits are impossible for someone with my career.'",
    ],
    0,
    "Self-compassion recognizes that human capacity fluctuates with stress, making restarts much easier than self-flagellation."
  ),

  // Point 4: Acknowledging the feeling can coexist with choosing a later next step.
  q(
    "26-action-4", 26,
    "You received news that an exciting vacation trip was canceled due to sudden unforeseen travel restrictions.",
    "What would you do next?",
    [
      "Acknowledge the deep frustration of lost plans today, and look at rescheduling or staycation ideas once the sting settles.",
      "Rant on social media targeting airline workers who had no role in the restrictions.",
      "Refuse to take any time off at all and work double shifts out of spite.",
      "Spend the entire week checking news updates hoping the restrictions magically lift overnight.",
    ],
    0,
    "Honoring disappointment first gives you the emotional reset needed to discover viable alternative plans."
  ),
  q(
    "26-understanding-4", 26,
    "A community initiative you volunteered to organize had to be postponed due to low ticket registrations.",
    "What realization helps you avoid despair?",
    [
      "Low registration is data about timing, messaging, or interest—not proof that community work is pointless.",
      "The community does not care about anything good and does not deserve your efforts.",
      "You should never volunteer for a leadership position again.",
      "You must immediately slash ticket prices to zero and beg people to show up.",
    ],
    0,
    "Viewing setbacks as diagnostic information rather than personal rejection protects your motivation and stamina."
  ),

  // Point 5: Care for the disappointment does not require treating it as your whole story.
  q(
    "26-action-5", 26,
    "You didn't get selected for the leading role in an amateur theatre group, but were offered a supporting part.",
    "What would you do next?",
    [
      "Refuse the supporting part loudly and storm out of the rehearsal hall.",
      "Take a breath to acknowledge your disappointment, then accept the supporting role and throw your energy into making it memorable.",
      "Accept the role grudgingly while planning to skip rehearsals to show your resentment.",
      "Constantly critique the actor who got the lead behind their back.",
    ],
    1,
    "Stepping through disappointment allows you to remain engaged in the craft and find joy in unexpected contributions."
  ),
  q(
    "26-understanding-5", 26,
    "Looking back on a year where several long-term plans fell apart, you feel a deep sense of lingering grief.",
    "What perspective provides emotional balance?",
    [
      "Acknowledge the grief of lost expectations while reminding yourself of the resilience and adaptability you discovered.",
      "Force yourself to find five silver linings immediately and forbid yourself from feeling any sorrow.",
      "Conclude that making plans is foolish and resolve to drift aimlessly from now on.",
      "Dwell continuously on what might have been had none of the disruptions occurred.",
    ],
    0,
    "Holding both the grief of what changed and the strength you built enables authentic integration and steady forward steps."
  ),

  // ==========================================
  // CHAPTER 27: Learn from feedback
  // ==========================================
  // Point 1: A concrete example makes it easier to evaluate the feedback and choose a useful change.
  q(
    "27-action-1", 27,
    "Your manager comments: 'Your presentations feel a bit disjointed lately,' without offering details.",
    "What would you do next?",
    [
      "Argue immediately that your slides are completely logical and that the team wasn't paying attention.",
      "Politely ask: 'Could you point to one recent slide or transition where the flow felt off to you?'",
      "Overhaul your entire slide deck template tonight and remove all text.",
      "Quietly decide never to volunteer for another presentation.",
    ],
    1,
    "Asking for a specific example grounds broad feedback in actionable reality without escalating defensiveness."
  ),
  q(
    "27-understanding-1", 27,
    "A colleague tells you: 'You come across as abrupt on Slack,' triggering a surge of defensive heat.",
    "What perspective helps down-regulate the defensive reaction?",
    [
      "Recognize that written messages lack vocal tone, so asking for a specific message they found abrupt will clarify their perception.",
      "Tell yourself that your colleague is overly sensitive and that real professionals don't worry about tone.",
      "Stop replying to all messages on Slack and insist on phone calls only.",
      "Adopt an excessively cheerful persona full of exclamation marks and emojis to mock the feedback.",
    ],
    0,
    "Understanding the medium's limits (lack of vocal inflection) helps you evaluate feedback neutrally rather than defensively."
  ),

  // Point 2: Specific examples turn a broad comment into something you can assess.
  q(
    "27-action-2", 27,
    "A senior peer reviews your code or report and marks multiple sections with 'Confusing. Needs rewrite.'",
    "What would you do next?",
    [
      "Schedule a 10-minute sync asking: 'Which part of the logic was hardest to follow so I can restructure it clearly?'",
      "Delete the entire section and start from scratch without understanding what caused the confusion.",
      "Submit the work anyway without making any changes to prove your point.",
      "Send a passive-aggressive comment asking why they couldn't write it themselves.",
    ],
    0,
    "A short clarifying conversation saves hours of guesswork and turns curt notes into productive improvements."
  ),
  q(
    "27-understanding-2", 27,
    "You receive critical feedback on an essay and notice thoughts like: 'They just hate my writing style.'",
    "What mental shift turns this feedback into learning?",
    [
      "Shift focus from defending your self-image to analyzing whether the reader's comprehension was hindered by structural flaws.",
      "Assume the reviewer is jealous of your vocabulary and ignore all red pen marks.",
      "Believe you have no talent for writing and discard the draft.",
      "Write a lengthy rebuttal disputing every single mark on the page.",
    ],
    0,
    "Separating the reader's reading experience from your personal identity allows you to see feedback as structural insight."
  ),

  // Point 3: Clarifying the difficulty supports a focused improvement.
  q(
    "27-action-3", 27,
    "A client notes: 'We love the design concepts, but we worry the navigation is confusing for older users.'",
    "What would you do next?",
    [
      "Defend the modern design trends and insist that older users will easily learn it.",
      "Thank them for the specific observation, test larger text and simpler menus, and show them two adjusted prototypes.",
      "Scrap all the modern visual concepts and build a completely retro interface.",
      "Ignore the client's worry and proceed straight to final production.",
    ],
    1,
    "Honoring the client's concrete demographic concern through iterative testing demonstrates collaborative professionalism."
  ),
  q(
    "27-understanding-3", 27,
    "Your mentor points out that you frequently apologize before asking questions in meetings.",
    "What is the most constructive way to reflect on this observation?",
    [
      "Observe how pre-emptive apologies stem from a desire to be polite, but inadvertently diminish your perceived confidence.",
      "Feel embarrassed and decide to stay silent in upcoming meetings.",
      "Dismiss the observation because saying 'sorry' is just harmless manners.",
      "Overcompensate by interrupting others assertively without waiting for breaks.",
    ],
    0,
    "Reflecting on the psychological root of a speech habit allows you to adjust your delivery with self-awareness."
  ),

  // Point 4: Feedback is information to evaluate, not an obligation to follow every suggestion.
  q(
    "27-action-4", 27,
    "Three colleagues give you conflicting suggestions on how to format your quarterly project update.",
    "What would you do next?",
    [
      "Try to cram every single conflicting recommendation into one chaotic document.",
      "Evaluate each suggestion against the primary goal of the update, adopt the clearest ideas, and discard the rest.",
      "Complain about how impossible your colleagues are and abandon the update.",
      "Throw out all suggestions and do the exact opposite of what everyone suggested.",
    ],
    1,
    "Treating feedback as data points to filter through the project's core objectives prevents analysis paralysis."
  ),
  q(
    "27-understanding-4", 27,
    "An acquaintance gives you unsolicited, harsh advice on how you should raise your children or run your life.",
    "What mindset helps you process unsolicited advice without internal turbulence?",
    [
      "Remember that you have the authority to filter advice through your personal values, adopting what aligns and discarding what doesn't.",
      "Immediately change your lifestyle to seek their approval.",
      "Get drawn into an explosive argument defending every personal choice you have made.",
      "Ruminate for days wondering why they think you are incompetent.",
    ],
    0,
    "Maintaining internal boundaries reminds you that unsolicited opinions do not obligate obedience or self-doubt."
  ),

  // Point 5: You can use the specific suggestion and still set a boundary around the personal remark.
  q(
    "27-action-5", 27,
    "A supervisor says: 'You missed the deadline because you're disorganized, but the data analysis itself was solid.'",
    "What would you do next?",
    [
      "Absorb the insult quietly and spiral into believing you are fundamentally broken.",
      "Scream that they are abusive and storm out of the office.",
      "Acknowledge the missed deadline and share your timeline fix, while calmly saying: 'I'd appreciate focusing on the scheduling process rather than personal labels.'",
      "Deliberately miss the next deadline to demonstrate real disorganization.",
    ],
    2,
    "Taking accountability for practical deliverables while calmly rejecting personal insults models mature emotional boundaries."
  ),
  q(
    "27-understanding-5", 27,
    "Someone gives you constructive advice wrapped in a sarcastic, condescending tone.",
    "How can you separate the valid insight from the abrasive delivery?",
    [
      "Extract the useful operational insight for your work, while recognizing that their abrasive tone reflects their own stress or communication deficits.",
      "Discard the useful insight entirely solely because you hated how it felt.",
      "Internalize their condescension as proof that you deserve disrespectful treatment.",
      "Plot a sarcastic comeback to humiliate them in the next public meeting.",
    ],
    0,
    "Separating the objective signal from the toxic noise allows you to grow without taking on someone else's bad behavior."
  ),

  // ==========================================
  // CHAPTER 28: When comparison takes over
  // ==========================================
  // Point 1: Returning to a personally meaningful step can make the comparison less central.
  q(
    "28-action-1", 28,
    "After scrolling social media, you see a peer buy a luxury home and suddenly feel behind in your own financial life.",
    "What would you do next?",
    [
      "Close the app, step away from the screen, and review your own savings goals and the milestones you are genuinely working toward.",
      "Apply for credit cards to make extravagant purchases you cannot afford to look successful.",
      "Post a humble-brag photo highlighting something expensive you did last year.",
      "Leave a bitter, passive-aggressive comment on their celebration post.",
    ],
    0,
    "Disconnecting from the highlight reel and re-anchoring in your personal financial roadmap dissolves artificial panic."
  ),
  q(
    "28-understanding-1", 28,
    "You hear a college friend just raised millions in startup venture funding, sparking a knot of envy in your chest.",
    "What reflection grounds you in reality?",
    [
      "Envy often highlights a value you care about—like impact or ambition—but another person's milestone does not subtract from your own capacity to build.",
      "Assume their startup will fail soon so you feel better about your steady job.",
      "Tell yourself you are a failure because you didn't launch a tech company in your twenties.",
      "Convince yourself that you never care about success or money anyway.",
    ],
    0,
    "Viewing envy as an emotional compass pointing toward underlying desires removes shame and guides healthy personal striving."
  ),

  // Point 2: Your own values and circumstances provide a more useful basis for a next step.
  q(
    "28-action-2", 28,
    "Several coworkers work 70-hour weeks and brag about burnout, making you feel guilty for leaving on time to spend time with family.",
    "What would you do next?",
    [
      "Stay late every night doing busywork just to maintain competitive appearances.",
      "Remind yourself that your health and family presence are your core non-negotiables, and focus on delivering high quality within your workday.",
      "Loudly criticize your coworkers for having no life outside of the office.",
      "Slacken your work pace completely since you don't care about their hustle culture.",
    ],
    1,
    "Anchoring in your chosen life priorities protects you from unconsciously absorbing the burnout culture of those around you."
  ),
  q(
    "28-understanding-2", 28,
    "A fitness influencer with full-time trainers and personal chefs shares a grueling 3-hour daily workout routine.",
    "What perspective prevents unrealistic self-criticism?",
    [
      "Recognize that comparing your available time and resources with a paid fitness creator is an unfair, apples-to-oranges comparison.",
      "Feel ashamed of your 30-minute daily walk and stop exercising altogether.",
      "Commit to waking up at 3:30 AM to match their workout despite having a demanding job and family.",
      "Leave hateful comments under their fitness videos.",
    ],
    0,
    "Contextualizing the vast differences in life circumstances prevents toxic self-expectations."
  ),

  // Point 3: Comparison can introduce pressure that is different from a personally held goal.
  q(
    "28-action-3", 28,
    "Everyone in your friend group is enrolling in an expensive marathon, and you feel subtle peer pressure to join despite disliking running.",
    "What would you do next?",
    [
      "Pay the registration fee, buy expensive running gear, and secretly dread every training day.",
      "Politely pass on the race, cheer them on from the sidelines, and invest your energy in physical activities you genuinely love.",
      "Try to talk your friends out of running the marathon so you don't feel left out.",
      "Lie and say you have a medical injury rather than stating you simply don't want to run.",
    ],
    1,
    "Distinguishing between authentic personal interest and group conformity preserves your time for what truly energizes you."
  ),
  q(
    "28-understanding-3", 28,
    "You notice an intense urge to buy a new car after two neighbors park brand-new SUVs in their driveways.",
    "What internal question clarifies your true motive?",
    [
      "'Would I want this vehicle if no one I knew was ever going to see me drive it?'",
      "'How can I get an even more expensive model to show them up?'",
      "'Why do my neighbors always have to ruin my contentment?'",
      "'Does owning an older car mean I am falling behind in life?'",
    ],
    0,
    "The 'isolation test' immediately exposes whether a desire is authentic or driven by social posturing."
  ),

  // Point 4: A personal action shifts attention from ranking to what you can influence.
  q(
    "28-action-4", 28,
    "A peer who started at the company on the same day as you is promoted to senior level before you.",
    "What would you do next?",
    [
      "Celebrate their promotion sincerely, then schedule a development conversation with your manager to map your specific path to the next level.",
      "Start rumors that they only received the promotion because of favoritism.",
      "Disengage from your projects and do the bare minimum out of resentment.",
      "Hand in your resignation impulsively without another job lined up.",
    ],
    0,
    "Honoring another's win while proactively exploring your own career trajectory channels competitive energy into growth."
  ),
  q(
    "28-understanding-4", 28,
    "You find yourself constantly comparing your creative portfolio to established veterans with twenty years of industry experience.",
    "What mental adjustment fosters healthy patience?",
    [
      "Compare your current work to your own work from two years ago rather than someone else's chapter twenty.",
      "Give up creative pursuits because you aren't producing masterworks yet.",
      "Imitate their style exactly and pretend it is your original voice.",
      "Convince yourself that veteran creators only succeed because they had better luck.",
    ],
    0,
    "Measuring your trajectory against your own past self provides honest feedback without demoralizing comparison."
  ),

  // Point 5: Visible milestones are not the only form of personally meaningful progress.
  q(
    "28-action-5", 28,
    "At a reunion, everyone is listing glamorous milestones like promotions, weddings, and investments, while your year was spent quietly healing from burnout.",
    "What would you do next?",
    [
      "Fabricate an exciting business project so you don't look unaccomplished.",
      "Own your truth with quiet dignity: 'This year I focused on restoring my health and peace of mind, and it's been deeply restorative.'",
      "Make an excuse to leave the reunion early and cry in your car.",
      "Interrogate others aggressively to find flaws in their successful stories.",
    ],
    1,
    "Valuing invisible internal progress (like emotional healing) anchors your self-worth beyond external status markers."
  ),
  q(
    "28-understanding-5", 28,
    "You feel disheartened because your daily efforts to learn an instrument don't seem showy or dramatic enough to share.",
    "What perspective revalues quiet daily practice?",
    [
      "Deep mastery is built in invisible, unglamorous micro-repetitions that no camera captures, and the satisfaction belongs to you.",
      "If an accomplishment cannot be shared online for applause, it is not worth doing.",
      "You should practice only songs that impress other people at parties.",
      "Give up unless you can guarantee performing on a stage within six months.",
    ],
    0,
    "Finding fulfillment in the quiet process of practice liberates learning from the exhausting demand for external validation."
  ),

  // ==========================================
  // CHAPTER 29: Move through uncertainty
  // ==========================================
  // Point 1: A small controllable action can offer direction without pretending the uncertainty is gone.
  q(
    "29-action-1", 29,
    "You interviewed for a role you care deeply about. The hiring team said they would respond by Friday afternoon, but it is now Monday morning with no word.",
    "What would you do next?",
    [
      "Assume they picked someone else and start questioning where you went wrong in the interview.",
      "Keep refreshing your inbox every five minutes, finding it impossible to start anything else.",
      "Decide on a calm mid-week check-in date, and focus your morning on tasks within your control.",
      "Send a sharp email right away asking why they missed their promised deadline.",
    ],
    2,
    "When an external timeline slips, choosing a specific time to follow up helps release the urge to compulsively monitor."
  ),
  q(
    "29-understanding-1", 29,
    "You submitted an application for a competitive fellowship and notice tension in your chest every time your phone buzzes with a notification.",
    "What perspective would help steady you?",
    [
      "Tell yourself you probably didn't get it so you won't feel disappointed when the rejection comes.",
      "Acknowledge that waiting triggers physical alertness, and remind yourself that checking your phone will not alter the committee's decision.",
      "Force yourself to feel completely relaxed and deny that the outcome matters to you.",
      "Ignore your phone and all daily obligations for the rest of the week to escape the anticipation.",
    ],
    1,
    "Recognizing physical signs of suspense allows you to ground yourself rather than feeding a compulsive checking loop."
  ),

  // Point 2: A manageable plan can account for uncertainty without predicting everything.
  q(
    "29-action-2", 29,
    "You are planning a weekend family gathering, but there is a 50% chance of heavy thunderstorms and the forecast will not be reliable until tomorrow night.",
    "What would you do next?",
    [
      "Pick a rain-friendly backup spot now and set a clear cutoff time tomorrow to make the final call.",
      "Call off the whole gathering immediately so you do not have to stress about the weather.",
      "Pretend the forecast will clear up and avoid preparing any indoor alternative.",
      "Spend the evening drafting contingency plans for every possible weather scenario.",
    ],
    0,
    "A simple contingency plan gives you peace of mind without needing to predict or control the forecast."
  ),
  q(
    "29-understanding-2", 29,
    "You are considering a career pivot, but industry trends are shifting rapidly and no one can guarantee how the field will look in two years.",
    "What is the most resilient way to approach this uncertainty?",
    [
      "Stay in your current role indefinitely until the target industry reaches total predictability.",
      "Quit your current position tomorrow to force yourself to adapt, regardless of preparation.",
      "Spend months comparing conflicting economic predictions before taking any tangible action.",
      "Build transferable core capabilities and test your interest with small weekend projects rather than demanding a guaranteed 5-year outcome.",
    ],
    3,
    "Resilience thrives on building adaptable skills through small, low-risk experiments rather than waiting for nonexistent certainty."
  ),

  // Point 3: You can influence your day without controlling the external decision.
  q(
    "29-action-3", 29,
    "Your team is waiting for leadership to approve next quarter's budget before new initiatives can formally kick off.",
    "What would you do next?",
    [
      "Treat the week as unproductive downtime since the project might be scrapped anyway.",
      "Focus on organizing current documentation and research that will be useful regardless of the budget outcome.",
      "Message leadership multiple times throughout the day asking for status updates.",
      "Start committing budget spend anyway so you don't fall behind schedule.",
    ],
    1,
    "Investing energy into foundational work keeps momentum alive without overstepping boundaries."
  ),
  q(
    "29-understanding-3", 29,
    "You are waiting on medical test results and find yourself unable to concentrate on your usual daily routine.",
    "How can you best manage your energy while awaiting news?",
    [
      "Berate yourself for being distracted and force yourself to work at full capacity.",
      "Allow yourself a lighter workload today, choose one grounding activity, and set a specific boundary around health forums.",
      "Spend hours reading worst-case scenarios online in an attempt to feel prepared.",
      "Withdraw from friends and family because you do not have definitive answers yet.",
    ],
    1,
    "Honoring the emotional weight of waiting with gentleness and healthy boundaries protects your mental reserve."
  ),

  // Point 4: Separating known and unknown parts supports a limited next step.
  q(
    "29-action-4", 29,
    "A client gave you a complex brief with one vague, contradictory requirement that affects the project's final phase.",
    "What would you do next?",
    [
      "Halt work on all phases until the client explains every single ambiguity.",
      "Make an assumption about the unclear requirement without telling the client, hoping it passes unnoticed.",
      "Map out what is already clear so work can begin, while sending a concise clarifying question on the specific unknown.",
      "Complain to colleagues about the messy brief before taking time to review the parts that are clear.",
    ],
    2,
    "Separating what is actionable from what is ambiguous keeps progress moving while you seek clarification."
  ),
  q(
    "29-understanding-4", 29,
    "A sudden reorganization at your company leaves team roles and upcoming project ownership unclear.",
    "What is the most constructive way to orient yourself?",
    [
      "Spend your afternoon speculating with coworkers on rumors and worst-case outcomes.",
      "Stop contributing to ongoing tasks until management delivers an official written charter.",
      "Identify the core daily work your team remains responsible for today, while scheduling time with your manager to ask focused questions.",
      "Aggressively claim ownership of multiple projects before anyone else can step in.",
    ],
    2,
    "Anchoring in immediate responsibilities provides stability while navigating broader structural ambiguity."
  ),

  // Point 5: A small action does not require certainty about the eventual outcome.
  q(
    "29-action-5", 29,
    "You are starting to learn a new skill—such as public speaking or coding—without knowing how quickly you will learn or if you will be naturally good at it.",
    "What would you do next?",
    [
      "Buy several textbooks and wait until you have weeks of free time before attempting the first lesson.",
      "Commit to mastering the skill in 30 days and feel defeated if initial concepts feel difficult.",
      "Commit to one 20-minute practice session today, focusing on curiosity rather than measuring mastery.",
      "Convince yourself that you are naturally unsuited for it to protect against the fear of struggling.",
    ],
    2,
    "Taking a modest, curiosity-led first step builds familiarity without demanding certainty about future speed."
  ),
  q(
    "29-understanding-5", 29,
    "You want to initiate a difficult conversation to clear the air with a friend, but you cannot predict whether they will respond defensively or openly.",
    "What mindset supports taking this step?",
    [
      "Wait until you can script a speech that guarantees they will agree with your perspective.",
      "Decide it is safer to let the friendship slowly drift away rather than risk an awkward conversation.",
      "Enter the conversation bracing for an argument, assuming they will attack your intent.",
      "Focus on expressing your feelings with honesty and warmth, recognizing that their reaction is theirs to manage.",
    ],
    3,
    "Courage in relationships means taking responsibility for your own sincerity without trying to control the other person's response."
  ),

  // ==========================================
  // CHAPTER 30: Let support be part of the plan
  // ==========================================
  // Point 1: A concrete request can make support easier to offer and accept.
  q(
    "30-action-1", 30,
    "Several household responsibilities and work deadlines are piling up, leaving you drowning in exhaustion.",
    "What would you do next?",
    [
      "Ask a partner or friend: 'Could you help take care of dinner and groceries this Tuesday so I can finish this report?'",
      "Drop subtle hints and sigh loudly around the house, hoping someone notices your stress.",
      "Tell yourself that asking for help is a sign of incompetence and push through until you collapse.",
      "Send a broad message saying 'My life is a mess' without specifying what would actually help.",
    ],
    0,
    "Making a specific, practical request makes it easy for others to step in and offer tangible relief."
  ),
  q(
    "30-understanding-1", 30,
    "You feel hesitant to ask for help on a project because you believe 'strong people handle everything alone.'",
    "What perspective reframes interdependence as strength?",
    [
      "Recognize that every significant human achievement relies on collaboration, and seeking help is an act of efficiency, not weakness.",
      "Accept that you are indeed weaker than others who manage without assistance.",
      "Decide that needing help means you should scale down all your ambitions.",
      "Demand that others rescue you without doing your part of the work.",
    ],
    0,
    "Reframing collaboration as maturity dismantles the toxic myth of solitary self-sufficiency."
  ),

  // Point 2: Matching experience to the need makes the request more useful.
  q(
    "30-action-2", 30,
    "You are experiencing intense imposter syndrome in a new leadership role and need guidance.",
    "What would you do next?",
    [
      "Vent your technical frustrations to a friend who works in a completely unrelated creative field.",
      "Reach out to an experienced manager you respect and ask: 'Could I buy you coffee and ask how you navigated your first year managing a team?'",
      "Post an anonymous poll online asking strangers if you should quit your job.",
      "Keep your doubts completely private so no one ever suspects you feel uncertain.",
    ],
    1,
    "Matching your specific need (leadership guidance) with someone who has walked that path provides relevant, actionable wisdom."
  ),
  q(
    "30-understanding-2", 30,
    "You reached out to a close friend for advice on investing, but their answer was dismissive and vague.",
    "How can you interpret their reaction without taking it personally?",
    [
      "Realize that a good friend may not have financial expertise or comfort with money topics, and that you simply mismatched the request to the person.",
      "Conclude that your friend does not care about your financial success.",
      "End the friendship over their lack of helpful advice.",
      "Assume that no one in your network can ever be trusted for advice.",
    ],
    0,
    "Recognizing that different people offer different strengths helps you direct questions to the right sources without resentment."
  ),

  // Point 3: Naming the kind of support helps another person respond appropriately.
  q(
    "30-action-3", 30,
    "You had a terrible, upsetting day at work and want to share it with your partner, but you don't want solutions.",
    "What would you do next?",
    [
      "Say before starting: 'I had an exhausting day. I just need to vent and get a hug—I don't need problem-solving right now.'",
      "Start ranting about work and snap at them when they offer a reasonable suggestion.",
      "Stay silent and give them the cold shoulder because they didn't intuitively know how to comfort you.",
      "Ask for their advice and then argue with every suggestion they provide.",
    ],
    0,
    "Stating your emotional needs up front (venting vs fixing) prevents misunderstandings and invites comforting presence."
  ),
  q(
    "30-understanding-3", 30,
    "You offered advice to a struggling friend, and they reacted defensively, saying: 'You're just lecturing me!'",
    "What did this interaction reveal about support dynamics?",
    [
      "When someone is emotionally flooded, offering unsolicited advice feels like criticism; what they needed first was listening and validation.",
      "Your friend is ungrateful and you should never offer help to them again.",
      "You were 100% right and they are simply in denial.",
      "You should never speak up when someone is hurting.",
    ],
    0,
    "Understanding that emotional soothing must precede analytical advice transforms how you offer support."
  ),

  // Point 4: A manageable request can make it easier to offer and receive support.
  q(
    "30-action-4", 30,
    "You are moving apartments and feel guilty asking friends to spend their entire Saturday lifting heavy furniture.",
    "What would you do next?",
    [
      "Hire movers for the heavy large items, and ask friends to help for 2 hours with light boxes, followed by pizza.",
      "Expect three friends to move your entire 3-bedroom apartment without hiring any professional help.",
      "Refuse all help and injure your back carrying a couch down three flights of stairs alone.",
      "Post a guilt-tripping message on Facebook asking: 'Let's see who my real friends are.'",
    ],
    0,
    "Keeping requests reasonable and respectful of others' physical limits preserves friendships and ensures willing help."
  ),
  q(
    "30-understanding-4", 30,
    "You noticed a coworker looking overwhelmed and offered to take one specific slide deck off their plate.",
    "Why was this bounded offer more effective than asking 'Let me know if you need anything'?",
    [
      "Vague offers place the burden of delegating back on the overwhelmed person; a concrete, bounded offer makes saying yes effortless.",
      "It proves you are smarter and faster than your coworker.",
      "It allows you to take credit for their project.",
      "Coworkers are too proud to ask for help unless you force it.",
    ],
    0,
    "Low-friction, specific offers of help cut through the cognitive overwhelm that prevents people from asking."
  ),

  // Point 5: Different needs call for different support; an educational exercise cannot replace professional care.
  q(
    "30-action-5", 30,
    "You have been struggling with persistent feelings of hopelessness and insomnia for over two months that self-help exercises are not resolving.",
    "What would you do next?",
    [
      "Schedule an appointment with a licensed mental health professional or physician to get comprehensive medical and psychological support.",
      "Double down on self-help books and blame yourself for not thinking positively enough.",
      "Tell yourself that seeking clinical care is a personal failure.",
      "Try to numb the feelings with excessive alcohol or screen time.",
    ],
    0,
    "Recognizing when symptoms exceed self-guided tools and consulting qualified healthcare professionals is an act of profound self-respect."
  ),
  q(
    "30-understanding-5", 30,
    "A friend confides that they are experiencing severe clinical depression and having thoughts of self-harm.",
    "What is the most responsible, caring role you can play?",
    [
      "Offer warm, non-judgmental presence while encouraging and assisting them in connecting immediately with a crisis helpline or professional therapist.",
      "Promise to be their sole counselor 24/7 and keep their suicidal thoughts a complete secret from professionals.",
      "Tell them they just need to exercise more and look on the bright side of life.",
      "Panic and stop answering their calls because the topic makes you uncomfortable.",
    ],
    0,
    "True emotional maturity honors the boundary of personal friendship by bridging loved ones to professional care when safety is involved."
  ),
];
