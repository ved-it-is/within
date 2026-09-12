// Stage 1: Self-Awareness (Chapters 1 - 5)
// Themes: Noticing Feeling, Emotional Granularity, Somatic Signals, Mixed Emotions, Core Values

function q(id, chapterId, situation, prompt, choices, correctIndex, explanation, skillIds = ["awareness"]) {
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

export const stage1Questions = [
  // ==========================================
  // CHAPTER 1: What am I feeling?
  // ==========================================
  q(
    "1-action-1", 1,
    "Someone asks how you are. You feel a knot of tension in your stomach.",
    "What would you do next?",
    [
      "Pause, notice the feeling, and acknowledge it privately to yourself.",
      "Say 'Fine!' and throw yourself into work to avoid it.",
      "Snap at them for asking personal questions.",
      "Vent about everything that's gone wrong today.",
    ],
    0,
    "Naming your inner state breaks automatic suppression and starts real self-awareness."
  ),
  q(
    "1-understanding-1", 1,
    "You've been saying 'I'm fine' for weeks. Something feels off but you can't name it.",
    "What is most likely happening?",
    [
      "Suppressed feelings are building up beneath the surface unaddressed.",
      "Staying positive is working — the feelings will fade on their own.",
      "Saying you're fine is enough to reset your emotional state.",
      "You're probably just tired and need more sleep.",
    ],
    0,
    "Emotions not named don't disappear — they build tension until they find a way out."
  ),
  q(
    "1-action-2", 1,
    "After a tense meeting you think: 'Everyone here is so incompetent.'",
    "What would you do next?",
    [
      "Notice the judgment is a thought — look beneath it for the actual feeling.",
      "Draft a message telling the team exactly what you think.",
      "Treat the judgment as objective fact and act on it.",
      "Stew on it quietly for the rest of the day.",
    ],
    0,
    "Separating judgments from feelings lets you address what you actually need."
  ),
  q(
    "1-understanding-2", 1,
    "You feel angry after a meeting but aren't sure if it's the situation or your reaction.",
    "What's the most useful thing to do?",
    [
      "Separate the thought ('they were unfair') from the feeling (frustration).",
      "Trust the thought — if it feels true, it is true.",
      "Wait until the feeling passes before doing anything.",
      "Look for evidence to confirm your interpretation.",
    ],
    0,
    "Thoughts tell stories; feelings report your inner state. Untangling them brings clarity."
  ),
  q(
    "1-action-3", 1,
    "You pull into the driveway after a rough commute. Your family is inside.",
    "What would you do next?",
    [
      "Sit in the car two minutes, breathe, and check in before walking in.",
      "Go straight in and vent about the commute.",
      "Open the laptop and clear emails while dinner's ready.",
      "Force a cheerful mood and crash twenty minutes later.",
    ],
    0,
    "A transition pause prevents stress from bleeding into the people who didn't cause it."
  ),
  q(
    "1-understanding-3", 1,
    "You notice you're irritable at home even though nothing bad happened there.",
    "What's likely going on?",
    [
      "Residual stress from earlier is bleeding into a new environment.",
      "Home is the real source of stress and work was just a distraction.",
      "Irritability at home is unrelated to how your day went.",
      "You probably need to express more at work instead.",
    ],
    0,
    "Emotional residue from one setting easily contaminates the next without a conscious reset."
  ),
  q(
    "1-action-4", 1,
    "You feel a pang of jealousy when a close friend announces an exciting book deal.",
    "What would you do next?",
    [
      "Observe it with curiosity: 'This shows how much I care about my own writing.'",
      "Criticize yourself for being a bad friend.",
      "Pull back from the friendship without explaining why.",
      "Make a dismissive comment about their news.",
    ],
    0,
    "Curious observation of uncomfortable feelings reveals the desire beneath without self-blame."
  ),
  q(
    "1-understanding-4", 1,
    "You notice a flaw in yourself that you've been avoiding. It makes you feel defensive.",
    "What's the most useful first move?",
    [
      "Accept that the flaw is there before trying to change it.",
      "Ignore it — dwelling on flaws makes them worse.",
      "Challenge the feeling of defensiveness directly.",
      "Ask someone else to point out your strengths instead.",
    ],
    0,
    "Defensiveness locks growth. Acceptance of what's present creates the safety needed to change."
  ),
  q(
    "1-action-5", 1,
    "Three Sundays in a row, a heavy dread hits you at 6 PM.",
    "What would you do next?",
    [
      "Notice the pattern and investigate what specifically triggers the dread.",
      "Distract yourself with a show and hope it passes.",
      "Assume Sundays are just naturally harder and do nothing.",
      "Call in sick Monday so you can avoid the feeling.",
    ],
    0,
    "Recurring emotions are data — tracking the pattern lets you address the real cause."
  ),
  q(
    "1-understanding-5", 1,
    "You keep noticing a low mood every Tuesday but can't explain it.",
    "What's the most effective approach?",
    [
      "Track what's happening on Mondays and Tuesdays to find the pattern.",
      "Push through — moods like this are random and don't mean anything.",
      "Change your entire routine on Tuesdays and see what happens.",
      "Rely on memory to figure out when it started.",
    ],
    0,
    "Memory distorts; tracking over time reveals triggers that daily recall misses."
  ),

  // ==========================================
  // CHAPTER 2: Find the word that fits
  // ==========================================
  q(
    "2-action-1", 2,
    "You tell a friend 'I feel bad' after your project idea was sidelined.",
    "What would you do next?",
    [
      "Refine it: 'I feel unappreciated and overlooked, not just bad.'",
      "Stick with 'bad' — overanalyzing feelings is exhausting.",
      "Conclude you're just bad at your job.",
      "Change the subject so you don't dwell on it.",
    ],
    0,
    "Precise emotion words point to specific needs — 'bad' points to nothing."
  ),
  q(
    "2-understanding-1", 2,
    "Two colleagues both got critical feedback. One brushes it off; the other spirals.",
    "What most likely explains the difference?",
    [
      "The second person lacks words to distinguish disappointment from shame.",
      "The second person cares more about their work.",
      "Critical feedback just affects some people more genetically.",
      "The first person is suppressing their reaction.",
    ],
    0,
    "Emotional vocabulary gives the brain options — vague labels collapse everything into one crisis."
  ),
  q(
    "2-action-2", 2,
    "Your renovation is delayed two months. You feel burning agitation in your chest.",
    "What would you do next?",
    [
      "Name what's under the anger: 'This feels like powerlessness, not rage.'",
      "Call the contractor and express exactly how angry you are.",
      "Tell yourself you're overreacting and move on.",
      "Distract yourself until the feeling fades.",
    ],
    0,
    "Naming the real emotion — powerlessness — releases the urge to fight what can't be changed."
  ),
  q(
    "2-understanding-2", 2,
    "You snap at a friend, then realize you weren't actually angry at them.",
    "What most likely happened?",
    [
      "Anger masked a deeper feeling like hurt or shame.",
      "You're just short-tempered and need to manage that.",
      "The snap was proportional — you must have been genuinely annoyed.",
      "Anger never hides anything — it always means anger.",
    ],
    0,
    "Anger often surfaces to protect softer, more vulnerable feelings underneath."
  ),
  q(
    "2-action-3", 2,
    "Your hands are shaky and your stomach flutters before a first date you care about.",
    "What would you do next?",
    [
      "Label it as excited anticipation — your body is mobilizing for something meaningful.",
      "Cancel the date because anxiety this strong means something's wrong.",
      "Have a drink to calm down before you arrive.",
      "Convince yourself you don't really want to go.",
    ],
    0,
    "The same body signals that create fear can power excitement — the label decides which."
  ),
  q(
    "2-understanding-3", 2,
    "Two friends take the same rollercoaster ride. One is terrified; the other is thrilled.",
    "What best explains the difference?",
    [
      "The cognitive label each person applies to the same physical arousal.",
      "One of them has a stronger nervous system.",
      "Thrill and fear are completely different physical experiences.",
      "The thrilled person wasn't paying attention to their body.",
    ],
    0,
    "Our mind's label — danger or adventure — determines what we feel, not just the body's signal."
  ),
  q(
    "2-action-4", 2,
    "You forgot your sibling's birthday and find yourself thinking 'I'm such a terrible person.'",
    "What would you do next?",
    [
      "Shift from shame to guilt: 'I made a mistake — I'll call now and apologize.'",
      "Agree with the thought and withdraw from the relationship.",
      "Blame the busy week and decide birthdays are arbitrary anyway.",
      "Avoid your sibling until the discomfort fades.",
    ],
    0,
    "Guilt focuses on the behavior and motivates repair; shame attacks identity and leads to hiding."
  ),
  q(
    "2-understanding-4", 2,
    "After a mistake at work, you think 'I'm a failure' rather than 'I made an error.'",
    "What's the key difference between those two thoughts?",
    [
      "One targets your behavior; the other attacks your entire worth as a person.",
      "They mean the same thing — both are honest self-reflection.",
      "Thinking 'I'm a failure' is more honest and leads to better improvement.",
      "The second thought is healthier because it's more specific.",
    ],
    0,
    "Guilt over a mistake drives repair. Shame over identity drives withdrawal and self-protection."
  ),
  q(
    "2-action-5", 2,
    "A colleague's presentation gets a standing ovation. You feel a bitter sting inside.",
    "What would you do next?",
    [
      "Transform it: 'That was great delivery. I want to learn that technique.'",
      "Mention to someone nearby that the content wasn't as strong as it looked.",
      "Avoid presenting in front of leadership from now on.",
      "Tell yourself you're just not a naturally good presenter.",
    ],
    0,
    "Envy transformed into admiration turns comparison into a roadmap for your own growth."
  ),
  q(
    "2-understanding-5", 2,
    "You envy a friend's creative success but don't want to pull them down.",
    "What's the most useful thing to do with that feeling?",
    [
      "Ask what the envy tells you about your own unexpressed desires.",
      "Ignore it — envy is always destructive and should be suppressed.",
      "Tell your friend about it so they understand how you feel.",
      "Stop following their work so you're not reminded of it.",
    ],
    0,
    "You only envy what you care about — it maps your unlived aspirations when you're honest about it."
  ),

  // ==========================================
  // CHAPTER 3: Notice your body's signals
  // ==========================================
  q(
    "3-action-1", 3,
    "Before opening a difficult email, your shoulders rise and your breathing gets shallow.",
    "What would you do next?",
    [
      "Drop your shoulders, take two slow breaths, then open the email.",
      "Click it immediately — waiting makes anxiety worse.",
      "Close the laptop and avoid the email for the day.",
      "Assume the email is bad news before reading it.",
    ],
    0,
    "Releasing physical bracing before reading down-regulates the threat response."
  ),
  q(
    "3-understanding-1", 3,
    "You feel uneasy about a decision but can't explain why logically.",
    "What is your body most likely doing?",
    [
      "Processing patterns and signals below conscious awareness.",
      "Malfunctioning — unease without a clear reason should be ignored.",
      "Telling you that you're not smart enough to make the decision.",
      "Reacting to blood sugar or tiredness, not the situation itself.",
    ],
    0,
    "The body processes thousands of cues before the conscious mind catches up — unease is data."
  ),
  q(
    "3-action-2", 3,
    "A business deal looks great on paper but every time you speak to them, your gut tightens.",
    "What would you do next?",
    [
      "Pause and do deeper due diligence on their background before committing.",
      "Trust the paperwork — gut feelings aren't reliable business tools.",
      "Confront them about your suspicion directly.",
      "Sign the deal before overthinking it.",
    ],
    0,
    "Somatic unease is subconscious pattern detection — it warrants investigation, not dismissal."
  ),
  q(
    "3-understanding-2", 3,
    "You make a snap decision that turns out to be right, but you can't explain how.",
    "What most likely happened?",
    [
      "Your gut processed experience-based patterns faster than rational thought.",
      "You got lucky — gut feelings are random and unreliable.",
      "Your subconscious made up a story and got fortunate.",
      "Intuition only works when you've studied the topic formally.",
    ],
    0,
    "The enteric nervous system processes millions of signals — intuition is often compressed intelligence."
  ),
  q(
    "3-action-3", 3,
    "At the end of a long day you notice your jaw is clenched and aching.",
    "What would you do next?",
    [
      "Unclench, massage the jaw, and ask what you held back saying today.",
      "Take a painkiller and ignore it.",
      "Chew gum to loosen the muscles up.",
      "Clench harder — tension means you're working hard.",
    ],
    0,
    "Jaw tension often stores unexpressed 'no's — releasing it opens space to voice the boundary."
  ),
  q(
    "3-understanding-3", 3,
    "You leave a conversation feeling fine, but your shoulders ache and your stomach is tight.",
    "What is your body most likely communicating?",
    [
      "Something in the conversation bothered you that your mind glossed over.",
      "You sat in a bad posture during the conversation.",
      "Physical symptoms after a conversation are always unrelated to it.",
      "You're coming down with something — it's not emotional.",
    ],
    0,
    "The body often registers what the mind edits out — tension is a message worth reading."
  ),
  q(
    "3-action-4", 3,
    "You're in a waiting room before an interview, slumped forward scrolling your phone.",
    "What would you do next?",
    [
      "Put the phone down, sit upright, open your chest, and breathe slowly.",
      "Keep scrolling — it's a useful distraction from nerves.",
      "Pace the room to burn off the energy.",
      "Rehearse your answers silently while staying slumped.",
    ],
    0,
    "An upright, open posture sends confidence signals to the brain before a word is spoken."
  ),
  q(
    "3-understanding-4", 3,
    "You straighten up and take a slow breath before a hard conversation. It actually helps.",
    "Why does changing your posture affect how you feel?",
    [
      "The body and mind are a two-way system — posture shapes emotional state.",
      "It's placebo — posture has no real effect on emotions.",
      "Breathing only affects feelings when paired with formal meditation.",
      "Good posture only matters for external impression, not inner state.",
    ],
    0,
    "Posture is not just output — it's input. Physical shifts directly change emotional chemistry."
  ),
  q(
    "3-action-5", 3,
    "You're lying in bed, mind racing through tomorrow's to-do list.",
    "What would you do next?",
    [
      "Do a slow body scan from head to toes, softening each area as you breathe out.",
      "Get up and start working through the list until you feel ready to sleep.",
      "Scroll your phone until you feel tired enough to stop thinking.",
      "Drink coffee so at least you're productive if you can't sleep.",
    ],
    0,
    "Attention brought to the body pulls focus from cognitive loops and enables real rest."
  ),
  q(
    "3-understanding-5", 3,
    "A friend says 'when I focus on my breathing, my worrying just stops.' Why does this work?",
    "What's the most accurate explanation?",
    [
      "Focused attention on the body leaves less bandwidth for mental rumination.",
      "Breathing changes blood oxygen, which neutralizes anxious thoughts chemically.",
      "It doesn't actually work — it's just distraction.",
      "It only works if you're trained in formal mindfulness techniques.",
    ],
    0,
    "Attention is finite — fully anchoring in sensation breaks the loop of anxious thinking."
  ),

  // ==========================================
  // CHAPTER 4: Two feelings can be true
  // ==========================================
  q(
    "4-action-1", 4,
    "You hand in your notice for a dream job and feel thrilled — and unexpectedly sad.",
    "What would you do next?",
    [
      "Hold both: 'I'm excited about what's next AND sad to leave people I care about.'",
      "Cancel the new job — sadness must mean you made the wrong choice.",
      "Force yourself to feel purely happy and push the sadness away.",
      "Feel guilty for being emotional on what should be a good day.",
    ],
    0,
    "Big transitions naturally carry both excitement and grief — holding both is mature, not confused."
  ),
  q(
    "4-understanding-1", 4,
    "You feel proud of finishing a project and relieved it's over at the same time.",
    "What does holding both feelings at once tell you?",
    [
      "You're responding to a genuinely complex situation — both things are true.",
      "You're ambivalent, which means you didn't really want the project.",
      "Mixed feelings are a sign of emotional immaturity.",
      "One of the feelings must be wrong — you need to choose.",
    ],
    0,
    "Mixed emotions signal a nuanced read on reality — they're a feature of emotional depth, not weakness."
  ),
  q(
    "4-action-2", 4,
    "Your team is celebrating a product launch. You feel proud — and hollow from months of overtime.",
    "What would you do next?",
    [
      "Celebrate the win AND schedule real rest to honor your body's depletion.",
      "Push through — this is the moment, recovery can wait.",
      "Tell the team the launch feels hollow because you're exhausted.",
      "Skip the celebration and go straight home.",
    ],
    0,
    "Honoring both the achievement and the cost keeps success from becoming resentment."
  ),
  q(
    "4-understanding-2", 4,
    "After a big win you feel empty instead of happy. It catches you off guard.",
    "What's most likely happening?",
    [
      "Exhaustion and relief are also present — success doesn't erase the cost.",
      "The win wasn't as meaningful as you thought.",
      "You're ungrateful and need to focus on positive feelings.",
      "Post-achievement emptiness always signals depression.",
    ],
    0,
    "Ignoring the cost of achievement builds resentment underneath a hollow surface."
  ),
  q(
    "4-action-3", 4,
    "You love your partner but tonight their loud chewing is driving you crazy.",
    "What would you do next?",
    [
      "Allow both: 'I love them AND I'm irritated right now — these coexist.'",
      "Conclude that irritation means the relationship is in trouble.",
      "Suppress the irritation completely so you don't seem petty.",
      "Snap at them — the annoyance is real and they should know.",
    ],
    0,
    "Replacing 'either/or' with 'both/and' saves relationships from overreactions to small moments."
  ),
  q(
    "4-understanding-3", 4,
    "Someone says 'I love you BUT you're messy.' Why does the 'but' cause problems?",
    "What would the word 'and' do differently?",
    [
      "'But' erases whatever came before it — 'and' lets both truths coexist.",
      "'But' is simply more honest than 'and.'",
      "The words are interchangeable — what matters is tone.",
      "'And' softens the criticism too much to be useful.",
    ],
    0,
    "'And' expands the container; 'but' collapses it — love and frustration can both be real."
  ),
  q(
    "4-action-4", 4,
    "You have a good life, but you're grieving the loss of a pet. It hits harder than expected.",
    "What would you do next?",
    [
      "Let yourself grieve fully without using your good fortune to dismiss the pain.",
      "Remind yourself that others have bigger problems and try to feel grateful.",
      "Apologize to others for being sad about 'just a pet.'",
      "Push through the grief so you don't burden anyone around you.",
    ],
    0,
    "Gratitude and grief are not opposites — a full heart holds both without one canceling the other."
  ),
  q(
    "4-understanding-4", 4,
    "A friend says 'I shouldn't be sad — others have it so much worse.'",
    "What's wrong with that reasoning?",
    [
      "Pain isn't a competition — dismissing yours doesn't help anyone else.",
      "They're right — perspective is the best cure for sadness.",
      "Comparing suffering is the first step toward empathy.",
      "Feeling sad when others struggle more shows a lack of gratitude.",
    ],
    0,
    "Suppressing pain with comparison traps it inside — your feelings don't take someone else's spot."
  ),
  q(
    "4-action-5", 4,
    "You're packing for a dream trip and feeling excited — and anxious about the logistics.",
    "What would you do next?",
    [
      "Welcome both: 'Excitement about the destination AND nerves about getting there is normal.'",
      "Cancel if you're too anxious — vacations should feel purely joyful.",
      "Suppress the anxiety so it doesn't spoil the excitement.",
      "Overprepare until all anxiety is gone before allowing any excitement.",
    ],
    0,
    "Normalizing anxiety alongside excitement prevents self-judgment from ruining the anticipation."
  ),
  q(
    "4-understanding-5", 4,
    "You expect a celebration to be purely happy, but it comes with stress and small letdowns.",
    "What would help most in that moment?",
    [
      "Release the expectation of pure happiness and let the real experience be enough.",
      "Push harder to make everything go right so you can enjoy it.",
      "Conclude that celebrations are overrated and set lower expectations next time.",
      "Focus only on the positive parts and ignore the rest.",
    ],
    0,
    "When you drop the demand for flawless happiness, authentic joy has room to breathe."
  ),

  // ==========================================
  // CHAPTER 5: What matters to me here?
  // ==========================================
  q(
    "5-action-1", 5,
    "A colleague takes a safety shortcut on a job site. You feel a hot flash of anger.",
    "What would you do next?",
    [
      "Recognize the anger signals a value is at stake — intervene clearly and firmly.",
      "Let it go to keep the peace — one shortcut isn't worth a conflict.",
      "Confront them aggressively in front of the team.",
      "Report it immediately without speaking to them first.",
    ],
    0,
    "Anger that protects a value is useful energy — channeled well, it becomes principled action."
  ),
  q(
    "5-understanding-1", 5,
    "You feel surprisingly angry when someone makes a joke about a cause you care about.",
    "What is the anger most likely telling you?",
    [
      "This touches a value you hold deeply — the anger is protecting something real.",
      "You're being too sensitive and need to lighten up.",
      "The person was genuinely disrespectful and deserves a strong response.",
      "Your anger is disproportionate and probably about something else.",
    ],
    0,
    "Healthy anger is a boundary alarm — where you feel most protective, your values are standing guard."
  ),
  q(
    "5-action-2", 5,
    "You feel a bitter pang when an acquaintance publishes a poetry collection.",
    "What would you do next?",
    [
      "Ask what the envy is pointing to — maybe you want to start writing yourself.",
      "Leave a critical review online to even the score.",
      "Tell yourself you're not talented enough to write anyway.",
      "Unfollow them so the feeling doesn't keep coming up.",
    ],
    0,
    "Envy maps what you secretly want — deconstructing it turns bitterness into creative momentum."
  ),
  q(
    "5-understanding-2", 5,
    "You feel no envy toward athletes but intense envy toward writers. What does that tell you?",
    "What does envy reveal?",
    [
      "Writing is something you care about deeply but haven't pursued.",
      "You dislike athletes and should examine that bias.",
      "Envy toward writers means you're competitive by nature.",
      "It's random — envy doesn't point to anything meaningful.",
    ],
    0,
    "You only envy what matters to you — it's a map of your unlived potential."
  ),
  q(
    "5-action-3", 5,
    "Walking past your childhood school, a sudden wave of grief hits you.",
    "What would you do next?",
    [
      "Honor the feeling — it shows how much those years meant to you.",
      "Tell yourself it's silly to feel emotional about a building.",
      "Distract yourself immediately so you don't cry in public.",
      "Avoid that route in future so it doesn't happen again.",
    ],
    0,
    "Grief is love with nowhere to go — honoring it honors the depth of what mattered."
  ),
  q(
    "5-understanding-3", 5,
    "You grieve a loss that others seem to have moved on from quickly. You still feel it.",
    "What does that most likely mean?",
    [
      "It meant more to you — grief is proportional to how deeply you loved.",
      "You're processing it incorrectly and should seek help.",
      "You're stuck and need to force yourself to move on.",
      "Your grief is selfishly holding up people around you.",
    ],
    0,
    "The depth of grief reflects the depth of love — there's no grief without real meaning."
  ),
  q(
    "5-action-4", 5,
    "Holding your newborn, you feel joy — and a sharp, acute fear that something could go wrong.",
    "What would you do next?",
    [
      "Recognize the fear is proportional to how precious this is — channel it into care.",
      "Conclude that the fear means you aren't ready for this responsibility.",
      "Try to eliminate the fear through positive thinking.",
      "Avoid thinking about risks so the fear doesn't grow.",
    ],
    0,
    "Fear is the shadow of what matters most — turning toward it reveals the depth of your care."
  ),
  q(
    "5-understanding-4", 5,
    "The more a project means to you, the more fear you feel about it. Why?",
    "What explains this?",
    [
      "Greater meaning creates greater vulnerability — the stakes feel higher.",
      "Fear proves the project isn't right for you.",
      "Meaningful projects should inspire confidence, not fear.",
      "Fear and meaning are unrelated — it's probably just self-doubt.",
    ],
    0,
    "Fear amplifies with meaning — where you're most scared is often where you care the most."
  ),
  q(
    "5-action-5", 5,
    "You're offered a lucrative promotion that would mean 80-hour weeks away from family.",
    "What would you do next?",
    [
      "Use your core values as the compass and decline if it conflicts with what matters most.",
      "Accept it — the money will let you make it up to your family later.",
      "Accept it and blame the company when the life balance breaks down.",
      "Flip between options indefinitely because both feel valid.",
    ],
    0,
    "Choices aligned with core values create integrity; choices that betray them create slow erosion."
  ),
  q(
    "5-understanding-5", 5,
    "You made a choice that looked great on paper but left you feeling hollow inside.",
    "What does that hollow feeling most likely mean?",
    [
      "The choice didn't align with what you actually value, despite looking right.",
      "You're ungrateful — good decisions should feel good immediately.",
      "It means the choice was genuinely wrong and should be reversed.",
      "Hollow feelings after a decision are always temporary — ignore them.",
    ],
    0,
    "Emotional integrity is the quiet peace that comes when your choices match your values."
  ),
];
