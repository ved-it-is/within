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
  q(
    "26-action-1", 26,
    "After weeks of prep, your proposal was rejected in favor of another vendor.",
    "What would you do next?",
    [
      "Rewrite the entire pitch tonight while still feeling demoralized.",
      "Email the client expressing frustration about their decision.",
      "Give yourself the evening to process it, then request feedback tomorrow.",
      "Swear off high-stakes pitches to protect yourself from this feeling again.",
    ],
    2,
    "Processing disappointment first prevents emotionally reactive decisions and preserves clear thinking."
  ),
  q(
    "26-understanding-1", 26,
    "You missed a team award you wanted and feel a hollow heaviness in your chest.",
    "What perspective supports healthy recovery?",
    [
      "Recognize that feeling let down is a normal response to caring — not weakness.",
      "Tell yourself you never really cared about the award anyway.",
      "Convince yourself the process was rigged to feel better.",
      "Replay the announcement to analyze your own reaction.",
    ],
    0,
    "Validating your sadness acknowledges genuine effort without diminishing others or masking your vulnerability."
  ),
  q(
    "26-action-2", 26,
    "You fell just two points short of passing your professional licensing exam.",
    "What would you do next?",
    [
      "Tell colleagues you're dropping out — you're not cut out for this field.",
      "Review the specific areas where you lost points and make a targeted study plan for next time.",
      "Hide the results from everyone you know.",
      "Immediately start practice tests again without taking a break.",
    ],
    1,
    "Separating the result from your overall potential lets you focus on the specific gap constructively."
  ),
  q(
    "26-understanding-2", 26,
    "A piece you worked hard on got minimal engagement and you're thinking: 'I'm completely untalented.'",
    "What's the most useful thing to recognize?",
    [
      "Accept that voice as truth and stop creating for a while.",
      "Notice that your mind is turning one quiet outcome into a sweeping verdict about your worth.",
      "Delete past work so you can start fresh without the weight of your history.",
      "Blame the audience for not appreciating what you made.",
    ],
    1,
    "Catching overgeneralization prevents a single low-performing moment from defining your entire identity."
  ),
  q(
    "26-action-3", 26,
    "A dinner you spent hours cooking for friends turned out burnt and over-salted.",
    "What would you do next?",
    [
      "Laugh about it, order takeout with your guests, and make a note for next time.",
      "Lock yourself in the bathroom convinced you ruined everyone's evening.",
      "Insist they eat the burnt meal and feel hurt if they don't finish.",
      "Apologize so many times that your guests become uncomfortable.",
    ],
    0,
    "Meeting practical mishaps with humor and grace keeps connection warm and small failures in perspective."
  ),
  q(
    "26-understanding-3", 26,
    "You broke your morning workout streak during a demanding work week and feel a wave of shame.",
    "Which thought reflects compassionate resilience?",
    [
      "'A broken streak reflects a temporary surge in workload — not a collapse in character.'",
      "'I have zero willpower — there's no point in restarting.'",
      "'I'll wake up at 4 AM every day next week to make up for this.'",
      "'Healthy habits are impossible with my career demands.'",
    ],
    0,
    "Self-compassion recognizes that human capacity fluctuates with stress — making restarts far easier than self-punishment."
  ),
  q(
    "26-action-4", 26,
    "A trip you'd been planning for months was canceled due to sudden travel restrictions.",
    "What would you do next?",
    [
      "Acknowledge the frustration today, then look at rescheduling options once the sting settles.",
      "Rant online at airline workers who had no role in the restrictions.",
      "Refuse to take any time off and work double shifts out of spite.",
      "Spend the week obsessively checking news hoping the restrictions lift.",
    ],
    0,
    "Honoring disappointment first gives you the emotional reset needed to find viable alternative plans."
  ),
  q(
    "26-understanding-4", 26,
    "A community event you organized had to be postponed due to very low ticket registrations.",
    "What realization protects you from despair?",
    [
      "Low registration is data about timing or messaging — not proof that community work is pointless.",
      "The community clearly doesn't care and doesn't deserve your efforts.",
      "You shouldn't take on leadership roles if results can't be guaranteed.",
      "You need to immediately slash prices and beg people to show up.",
    ],
    0,
    "Viewing setbacks as diagnostic information rather than personal rejection protects your motivation."
  ),
  q(
    "26-action-5", 26,
    "You didn't get the lead role in an amateur theatre group — just a supporting part.",
    "What would you do next?",
    [
      "Turn down the supporting role loudly and leave the rehearsal.",
      "Take a breath, accept the supporting role, and throw your energy into making it memorable.",
      "Accept grudgingly while planning to skip rehearsals to show resentment.",
      "Constantly criticize the actor who got the lead behind their back.",
    ],
    1,
    "Stepping through disappointment lets you stay engaged in the craft and find joy in unexpected contributions."
  ),
  q(
    "26-understanding-5", 26,
    "Looking back, a year where several long-term plans fell apart leaves you with lingering grief.",
    "What perspective offers emotional balance?",
    [
      "Acknowledge the grief of lost expectations while recognizing the resilience you discovered in the process.",
      "Force yourself to find five silver linings immediately and forbid yourself from feeling sad.",
      "Conclude that making plans is foolish and decide to drift from now on.",
      "Dwell on what might have been if the disruptions hadn't happened.",
    ],
    0,
    "Holding both grief of what changed and strength you built enables authentic integration and steady forward steps."
  ),

  // ==========================================
  // CHAPTER 27: Learn from feedback
  // ==========================================
  q(
    "27-action-1", 27,
    "Your manager says your presentations 'feel a bit disjointed lately' without details.",
    "What would you do next?",
    [
      "Argue that your slides are logical and the team wasn't paying attention.",
      "Ask: 'Could you point to one recent slide or transition where the flow felt off?'",
      "Overhaul your entire slide template tonight and remove all text.",
      "Quietly decide never to volunteer for presentations again.",
    ],
    1,
    "Asking for a specific example grounds broad feedback in actionable reality without escalating defensiveness."
  ),
  q(
    "27-understanding-1", 27,
    "A colleague says you come across as abrupt on Slack and you feel defensive heat rising.",
    "What helps you respond constructively?",
    [
      "Ask for a specific message they found abrupt — text lacks vocal tone, which might explain the perception.",
      "Remind yourself they're overly sensitive and real professionals don't worry about tone.",
      "Stop replying on Slack and insist on phone calls only.",
      "Adopt an extremely cheerful persona to overcompensate.",
    ],
    0,
    "Understanding the medium's limits helps you evaluate feedback neutrally rather than defensively."
  ),
  q(
    "27-action-2", 27,
    "A senior peer marks multiple sections of your report with 'Confusing — needs rewrite.'",
    "What would you do next?",
    [
      "Schedule a 10-minute sync: 'Which part was hardest to follow so I can restructure it clearly?'",
      "Delete the entire section and start from scratch without understanding the issue.",
      "Submit it unchanged — you stand behind your logic.",
      "Send a passive-aggressive comment asking why they couldn't write it themselves.",
    ],
    0,
    "A short clarifying conversation saves hours of guesswork and turns curt notes into real improvements."
  ),
  q(
    "27-understanding-2", 27,
    "You receive critical feedback on your essay and think: 'They just hate my writing style.'",
    "What shift turns this into learning?",
    [
      "Move from defending your self-image to asking whether the reader's comprehension was hindered by structural choices.",
      "Assume the reviewer is jealous and ignore all the notes.",
      "Believe you have no talent for writing and discard the draft.",
      "Write a rebuttal disputing every single mark.",
    ],
    0,
    "Separating reading experience from personal identity lets you see feedback as structural insight."
  ),
  q(
    "27-action-3", 27,
    "A client loves your design concepts but worries the navigation will confuse older users.",
    "What would you do next?",
    [
      "Defend the modern design trends and assure them older users will adapt.",
      "Thank them, test larger text and simpler menus, and show them two adjusted prototypes.",
      "Scrap the modern concepts entirely and build a retro interface.",
      "Ignore the concern and proceed straight to final production.",
    ],
    1,
    "Honoring a concrete demographic concern through iterative testing demonstrates collaborative professionalism."
  ),
  q(
    "27-understanding-3", 27,
    "Your mentor points out that you apologize before asking questions in meetings.",
    "What's the most constructive way to reflect on this?",
    [
      "Observe that pre-emptive apologies stem from a desire to be polite but inadvertently signal low confidence.",
      "Feel embarrassed and stay silent in upcoming meetings.",
      "Dismiss it — saying sorry is just harmless manners.",
      "Overcompensate by interrupting others assertively.",
    ],
    0,
    "Reflecting on the psychological root of a speech habit lets you adjust delivery with real self-awareness."
  ),
  q(
    "27-action-4", 27,
    "Three colleagues give you conflicting suggestions on formatting your quarterly update.",
    "What would you do next?",
    [
      "Try to cram every conflicting recommendation into one chaotic document.",
      "Evaluate each suggestion against the primary goal of the update — adopt the clearest, discard the rest.",
      "Complain about how impossible your colleagues are and abandon the update.",
      "Throw out all suggestions and do the opposite of everything they said.",
    ],
    1,
    "Filtering feedback through the project's core objectives prevents analysis paralysis."
  ),
  q(
    "27-understanding-4", 27,
    "An acquaintance gives you unsolicited harsh advice about how you run your life.",
    "What mindset helps you process this without internal turbulence?",
    [
      "Remember you have the authority to filter advice through your own values — adopt what aligns, discard the rest.",
      "Change your behavior immediately to seek their approval.",
      "Get drawn into defending every personal choice you've ever made.",
      "Ruminate for days wondering why they think you're incompetent.",
    ],
    0,
    "Maintaining internal authority reminds you that unsolicited opinions don't obligate obedience or self-doubt."
  ),
  q(
    "27-action-5", 27,
    "A supervisor says: 'You missed the deadline because you're disorganized — but the analysis itself was solid.'",
    "What would you do next?",
    [
      "Absorb the insult quietly and spiral into believing you're fundamentally broken.",
      "Tell them they're being abusive and walk out.",
      "Acknowledge the missed deadline and share your fix, while calmly saying: 'I'd prefer we focus on scheduling rather than personal labels.'",
      "Deliberately miss the next deadline to make a point.",
    ],
    2,
    "Taking accountability for the deliverable while declining the personal label models mature emotional boundaries."
  ),
  q(
    "27-understanding-5", 27,
    "Someone gives you useful feedback wrapped in a condescending, sarcastic tone.",
    "What's the most resilient response?",
    [
      "Extract the useful operational insight while recognizing that their tone reflects their own stress — not your worth.",
      "Discard the insight entirely because of how it felt.",
      "Internalize their condescension as evidence that you deserve to be spoken to that way.",
      "Plan a sarcastic comeback for the next public meeting.",
    ],
    0,
    "Separating the useful signal from the toxic delivery lets you grow without taking on someone else's bad behavior."
  ),

  // ==========================================
  // CHAPTER 28: When comparison takes over
  // ==========================================
  q(
    "28-action-1", 28,
    "After scrolling social media you see a peer buy a luxury home and feel suddenly behind in life.",
    "What would you do next?",
    [
      "Close the app and review your own savings goals and the milestones you're genuinely working toward.",
      "Apply for credit cards to make extravagant purchases to look successful.",
      "Post a subtle brag about something expensive you did last year.",
      "Leave a bitter passive-aggressive comment on their celebration post.",
    ],
    0,
    "Disconnecting from the highlight reel and re-anchoring in your personal roadmap dissolves artificial panic."
  ),
  q(
    "28-understanding-1", 28,
    "A college friend just raised millions in funding and you feel a knot of envy in your chest.",
    "What reflection keeps you grounded?",
    [
      "Envy often points toward a value you care about — but their milestone doesn't subtract from your own capacity to build.",
      "Assume their startup will fail soon so you feel better about your steady job.",
      "Tell yourself you're a failure because you didn't launch a company in your twenties.",
      "Convince yourself you never really cared about success or money anyway.",
    ],
    0,
    "Viewing envy as an emotional compass rather than a verdict removes shame and guides healthy personal striving."
  ),
  q(
    "28-action-2", 28,
    "Coworkers who work 70-hour weeks make you feel guilty for leaving on time to be with family.",
    "What would you do next?",
    [
      "Stay late doing busywork just to maintain competitive appearances.",
      "Remind yourself that health and family presence are your core non-negotiables — deliver high quality within your workday.",
      "Loudly criticize coworkers for having no life outside the office.",
      "Slacken your work pace entirely since you don't care about hustle culture.",
    ],
    1,
    "Anchoring in your chosen life priorities protects you from unconsciously absorbing others' burnout culture."
  ),
  q(
    "28-understanding-2", 28,
    "A fitness influencer with full-time trainers posts a 3-hour daily workout routine and you feel bad about your 30-minute walk.",
    "What prevents unrealistic self-criticism?",
    [
      "Recognize that comparing your resources and time with a paid fitness creator is an apples-to-oranges comparison.",
      "Feel ashamed of your 30-minute walk and stop exercising altogether.",
      "Wake up at 3:30 AM to match their workout despite a demanding job and family.",
      "Leave critical comments on their fitness videos.",
    ],
    0,
    "Contextualizing vast differences in life circumstances prevents toxic self-expectations."
  ),
  q(
    "28-action-3", 28,
    "Your friend group is signing up for a marathon. You feel subtle pressure to join despite hating running.",
    "What would you do next?",
    [
      "Pay the registration fee and buy expensive gear while dreading every training day.",
      "Politely pass on the race, cheer them on from the sidelines, and invest energy in activities you love.",
      "Try to talk your friends out of running so you don't feel left out.",
      "Say you have a medical injury rather than simply admitting you don't want to run.",
    ],
    1,
    "Distinguishing authentic personal interest from group conformity preserves your time for what truly energizes you."
  ),
  q(
    "28-understanding-3", 28,
    "Two neighbors park brand-new SUVs in their driveways and you suddenly want a new car.",
    "What question clarifies whether this desire is genuine?",
    [
      "'Would I want this car if no one I knew would ever see me drive it?'",
      "'How can I get an even more expensive model to outdo them?'",
      "'Why do my neighbors always have to ruin my contentment?'",
      "'Does having an older car mean I'm falling behind in life?'",
    ],
    0,
    "The isolation test immediately reveals whether a desire is authentic or driven by social posturing."
  ),
  q(
    "28-action-4", 28,
    "A peer who started the same day as you is promoted to senior level before you.",
    "What would you do next?",
    [
      "Congratulate them genuinely, then schedule a conversation with your manager about your own path to the next level.",
      "Start rumors that they only got promoted through favoritism.",
      "Disengage from projects and do the bare minimum out of resentment.",
      "Resign impulsively without another job lined up.",
    ],
    0,
    "Honoring another's win while exploring your own trajectory channels competitive energy productively."
  ),
  q(
    "28-understanding-4", 28,
    "You compare your creative portfolio to veterans with twenty years of experience and feel demoralized.",
    "What mental shift fosters healthy patience?",
    [
      "Compare your current work to your own work from two years ago — not someone else's chapter twenty.",
      "Give up creative pursuits because you're not producing masterworks.",
      "Imitate their style and present it as your original voice.",
      "Tell yourself they only succeeded because of better luck and connections.",
    ],
    0,
    "Measuring your trajectory against your own past self provides honest feedback without demoralizing comparison."
  ),
  q(
    "28-action-5", 28,
    "At a reunion everyone is listing glamorous milestones. Your year was spent quietly healing from burnout.",
    "What would you do next?",
    [
      "Fabricate an exciting business project so you don't look unaccomplished.",
      "Own your truth with quiet dignity: 'This year I focused on restoring my health — it's been deeply restorative.'",
      "Make an excuse to leave early and sit with the discomfort alone.",
      "Interrogate others to find flaws in their successful-sounding stories.",
    ],
    1,
    "Valuing invisible internal progress anchors self-worth beyond external status markers."
  ),
  q(
    "28-understanding-5", 28,
    "Your daily efforts learning an instrument feel too quiet and unglamorous to share or celebrate.",
    "What perspective revalues quiet daily practice?",
    [
      "Deep mastery is built in unglamorous micro-repetitions — and that satisfaction belongs entirely to you.",
      "If an accomplishment can't be shared online for applause, it's not worth doing.",
      "Only practice songs that impress people at parties.",
      "Give up unless you can perform on a stage within six months.",
    ],
    0,
    "Finding fulfillment in the quiet process liberates learning from the exhausting demand for external validation."
  ),

  // ==========================================
  // CHAPTER 29: Move through uncertainty
  // ==========================================
  q(
    "29-action-1", 29,
    "You interviewed for a role you care about. They promised a response Friday — it's now Monday with no word.",
    "What would you do next?",
    [
      "Assume they picked someone else and start questioning where you went wrong.",
      "Keep refreshing your inbox every five minutes, unable to start anything else.",
      "Set a calm mid-week check-in date and focus your morning on tasks within your control.",
      "Send a sharp email right away asking why they missed their promised deadline.",
    ],
    2,
    "When external timelines slip, choosing a specific check-in date releases the urge to compulsively monitor."
  ),
  q(
    "29-understanding-1", 29,
    "You submitted a competitive fellowship application and feel your chest tighten every time your phone buzzes.",
    "What perspective steadies you?",
    [
      "Tell yourself you probably didn't get it so you won't be disappointed.",
      "Acknowledge that waiting triggers physical alertness — checking your phone won't change the committee's decision.",
      "Force yourself to feel completely relaxed and deny that the outcome matters.",
      "Ignore your phone and all daily obligations for the week to escape the anticipation.",
    ],
    1,
    "Recognizing the physical signs of suspense lets you ground yourself rather than feeding a checking loop."
  ),
  q(
    "29-action-2", 29,
    "You're planning a family gathering but the forecast is 50% thunderstorms — final word won't come until tomorrow.",
    "What would you do next?",
    [
      "Pick a rain-friendly backup venue now and set a clear cutoff tomorrow to make the final call.",
      "Cancel the whole gathering to eliminate the stress of uncertainty.",
      "Pretend it'll clear up and avoid preparing any indoor alternative.",
      "Spend the evening drafting plans for every possible weather scenario.",
    ],
    0,
    "A simple contingency plan brings peace of mind without requiring you to predict or control the forecast."
  ),
  q(
    "29-understanding-2", 29,
    "You want to pivot careers but can't predict how the industry will look in two years.",
    "What's the most resilient approach?",
    [
      "Stay in your current role until the target industry becomes fully predictable.",
      "Quit tomorrow to force yourself to adapt regardless of preparation.",
      "Spend months comparing conflicting economic predictions before any tangible step.",
      "Build transferable skills and test your interest with small weekend projects instead of waiting for guaranteed outcomes.",
    ],
    3,
    "Resilience thrives on building adaptable skills through small low-risk experiments — not waiting for certainty."
  ),
  q(
    "29-action-3", 29,
    "Your team is waiting for leadership to approve next quarter's budget before new initiatives can launch.",
    "What would you do next?",
    [
      "Treat the week as downtime since the project might get scrapped anyway.",
      "Focus on organizing documentation and research that will be useful regardless of the budget outcome.",
      "Message leadership multiple times daily for status updates.",
      "Start committing budget spend anyway so you don't fall behind schedule.",
    ],
    1,
    "Investing energy in foundational work keeps momentum alive without overstepping boundaries."
  ),
  q(
    "29-understanding-3", 29,
    "You're waiting on medical test results and can't concentrate on your usual daily routine.",
    "What's the most effective way to manage your energy while waiting?",
    [
      "Berate yourself for being distracted and force yourself to work at full capacity.",
      "Allow a lighter workload today, choose one grounding activity, and set a clear limit on health forums.",
      "Spend hours reading worst-case scenarios online to feel more prepared.",
      "Withdraw from friends and family until you have definitive answers.",
    ],
    1,
    "Honoring the emotional weight of waiting with gentleness and healthy limits protects your mental reserve."
  ),
  q(
    "29-action-4", 29,
    "A client brief has one vague, contradictory requirement that affects the project's final phase.",
    "What would you do next?",
    [
      "Halt all work until the client explains every single ambiguity.",
      "Assume your way is correct and proceed without flagging the issue.",
      "Map what's already clear so work can continue, and send one concise clarifying question about the specific unknown.",
      "Complain to colleagues about the messy brief before reviewing what is clear.",
    ],
    2,
    "Separating what's actionable from what's ambiguous keeps progress moving while you seek the missing answer."
  ),
  q(
    "29-understanding-4", 29,
    "A sudden company reorganization leaves team roles and project ownership unclear.",
    "What's the most constructive way to orient yourself?",
    [
      "Spend the afternoon speculating with coworkers on rumors and worst-case outcomes.",
      "Stop contributing to ongoing tasks until management issues an official written charter.",
      "Identify the core daily work your team is still responsible for, then schedule focused questions with your manager.",
      "Aggressively claim ownership of multiple projects before anyone else can step in.",
    ],
    2,
    "Anchoring in immediate responsibilities provides stability while navigating broader structural ambiguity."
  ),
  q(
    "29-action-5", 29,
    "You're starting to learn a new skill — public speaking or coding — with no idea how fast you'll progress.",
    "What would you do next?",
    [
      "Buy several textbooks and wait until you have weeks of free time before starting.",
      "Commit to mastering it in 30 days and feel defeated if early concepts are hard.",
      "Do one 20-minute practice session today, focusing on curiosity rather than measuring mastery.",
      "Tell yourself you're probably not naturally suited for it — better to know now.",
    ],
    2,
    "A modest, curiosity-led first step builds familiarity without demanding certainty about future speed."
  ),
  q(
    "29-understanding-5", 29,
    "You want to clear the air with a friend but can't predict how they'll react to the conversation.",
    "What mindset supports taking this step?",
    [
      "Wait until you can script something that guarantees they'll agree with you.",
      "Let the friendship drift away rather than risk an awkward conversation.",
      "Brace for an argument and assume they'll attack your intentions.",
      "Focus on expressing your feelings honestly and warmly — their reaction is theirs to manage.",
    ],
    3,
    "Courage in relationships means owning your sincerity without trying to control the other person's response."
  ),

  // ==========================================
  // CHAPTER 30: Let support be part of the plan
  // ==========================================
  q(
    "30-action-1", 30,
    "Household responsibilities and work deadlines are piling up and you're drowning in exhaustion.",
    "What would you do next?",
    [
      "Ask a partner or friend: 'Could you handle dinner and groceries Tuesday so I can finish this report?'",
      "Drop subtle hints and sigh loudly, hoping someone notices your stress.",
      "Tell yourself asking for help is incompetence and push through until you collapse.",
      "Message broadly: 'My life is a mess' without naming what would actually help.",
    ],
    0,
    "A specific practical request makes it easy for others to step in and offer real relief."
  ),
  q(
    "30-understanding-1", 30,
    "You hesitate to ask for help on a project because you believe strong people handle everything alone.",
    "What reframe turns this around?",
    [
      "Every significant human achievement relies on collaboration — seeking help is efficiency, not weakness.",
      "Accept that you're weaker than people who manage without help.",
      "Decide that needing help means you should scale back your ambitions.",
      "Only ask for help if you've already spent twice as long trying alone first.",
    ],
    0,
    "Reframing collaboration as maturity dismantles the toxic myth of solitary self-sufficiency."
  ),
  q(
    "30-action-2", 30,
    "You're experiencing intense imposter syndrome in a new leadership role and need guidance.",
    "What would you do next?",
    [
      "Vent your frustrations to a friend who works in a completely unrelated field.",
      "Reach out to an experienced manager you respect: 'Could I ask how you navigated your first year managing a team?'",
      "Post an anonymous online poll asking strangers if you should quit.",
      "Keep your doubts completely private so no one suspects you feel uncertain.",
    ],
    1,
    "Matching your specific need with someone who has walked that path provides relevant, actionable wisdom."
  ),
  q(
    "30-understanding-2", 30,
    "You asked a close friend for investing advice and their answer was dismissive and vague.",
    "How do you interpret that without taking it personally?",
    [
      "They may not have financial expertise or comfort with money topics — you mismatched the request to the person.",
      "Your friend clearly doesn't care about your financial success.",
      "End the friendship — they weren't willing to help when you needed it.",
      "Conclude that no one in your network can be trusted for advice.",
    ],
    0,
    "Different people offer different strengths — directing questions to the right sources eliminates unnecessary resentment."
  ),
  q(
    "30-action-3", 30,
    "After a terrible work day you want to tell your partner about it — but you don't want advice.",
    "What would you do next?",
    [
      "Say upfront: 'I had an exhausting day. I just need to vent and a hug — no problem-solving tonight.'",
      "Start ranting and snap at them when they offer a reasonable suggestion.",
      "Stay quiet and give them the cold shoulder because they didn't intuitively know what you needed.",
      "Ask for their advice and then argue with every suggestion they give.",
    ],
    0,
    "Stating your emotional need upfront prevents misunderstandings and invites exactly the right kind of presence."
  ),
  q(
    "30-understanding-3", 30,
    "You offered advice to a struggling friend and they reacted: 'You're just lecturing me!'",
    "What did this reveal about support?",
    [
      "When someone is emotionally flooded, unsolicited advice feels like criticism — they needed listening and validation first.",
      "Your friend is ungrateful and you should stop offering help.",
      "You were right and they're simply in denial.",
      "You should never speak up when someone is going through something hard.",
    ],
    0,
    "Emotional soothing must come before analytical advice — that order transforms how support lands."
  ),
  q(
    "30-action-4", 30,
    "You're moving apartments and feel guilty asking friends to spend their entire Saturday helping.",
    "What would you do next?",
    [
      "Hire movers for heavy items and ask friends to help for 2 hours with light boxes — then order pizza together.",
      "Expect three friends to move your entire apartment without any professional help.",
      "Refuse all help and injure your back carrying a couch alone.",
      "Post a guilt-tripping message online to see who your 'real friends' are.",
    ],
    0,
    "Keeping requests reasonable and respectful of people's limits preserves friendships and ensures willing help."
  ),
  q(
    "30-understanding-4", 30,
    "You offered to take one specific slide deck off an overwhelmed coworker's plate. They seemed relieved.",
    "Why was this more effective than saying 'Let me know if you need anything'?",
    [
      "Vague offers put the burden of delegating on the overwhelmed person — a bounded concrete offer makes saying yes effortless.",
      "It proves you're more skilled and capable than they are.",
      "It allows you to gain visibility on their project.",
      "Overwhelmed people are too proud to ask for help unless you force it.",
    ],
    0,
    "Low-friction, specific offers cut through cognitive overwhelm that prevents people from asking for help."
  ),
  q(
    "30-action-5", 30,
    "You've had persistent hopelessness and insomnia for two months that self-help exercises haven't resolved.",
    "What would you do next?",
    [
      "Schedule an appointment with a licensed mental health professional or physician for comprehensive support.",
      "Double down on self-help books and blame yourself for not thinking positively enough.",
      "Tell yourself seeking clinical care is a personal failure.",
      "Try to numb the feelings with excessive screen time or alcohol.",
    ],
    0,
    "Recognizing when symptoms exceed self-guided tools and seeking qualified help is an act of profound self-respect."
  ),
  q(
    "30-understanding-5", 30,
    "A friend confides they're experiencing severe depression and having thoughts of self-harm.",
    "What is the most responsible, caring role you can play?",
    [
      "Offer warm, non-judgmental presence while helping them connect immediately with a crisis helpline or therapist.",
      "Promise to be their sole counselor 24/7 and keep their crisis a secret from professionals.",
      "Tell them to exercise more and look on the bright side.",
      "Stop answering their calls because the topic makes you too uncomfortable.",
    ],
    0,
    "True emotional maturity honors friendship's limits by bridging loved ones to professional care when safety is involved."
  ),
];
