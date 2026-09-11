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
  // Point 1: Moving past the automatic "I'm fine" reflex.
  q(
    "1-action-1", 1,
    "Someone asks 'How are you?' as you sit at your desk feeling a heavy, restless knot of tension in your stomach.",
    "What would you do next?",
    [
      "Pause for three seconds, tune inward, and acknowledge privately: 'I am actually feeling overwhelmed and anxious right now.'",
      "Say 'Fine, thanks!' and immediately plunge into busywork to drown out the internal knot.",
      "Snap at the person: 'Why are you asking so many personal questions?'",
      "Complain loudly for twenty minutes about every minor thing that went wrong this morning.",
    ],
    0,
    "Pausing to name your true internal state to yourself breaks the habit of automatic suppression and starts self-attunement."
  ),
  q(
    "1-understanding-1", 1,
    "Why does the default habit of saying 'I'm fine' become dangerous when we start believing it ourselves?",
    "What is the cost of chronic emotional suppression?",
    [
      "Ignoring emotional signals leaves their underlying causes unaddressed, allowing tension to build into sudden burnout or explosive outbursts.",
      "Saying 'I'm fine' cures all negative emotions automatically.",
      "It makes you 100% immune to biological stress.",
      "Emotions disappear forever if you pretend they don't exist.",
    ],
    0,
    "Emotions are biological feedback signals; ignoring them doesn't make them vanish, it simply forces them into the body as chronic stress."
  ),

  // Point 2: Distinguishing thoughts from actual feelings.
  q(
    "1-action-2", 1,
    "After a tense meeting, you find yourself thinking: 'Everyone here is so incompetent and unhelpful.'",
    "What would you do next?",
    [
      "Notice that this judgment is a thought, and look underneath it to find the feeling: 'I am feeling unsupported and exhausted.'",
      "Draft an all-staff email telling everyone they are incompetent.",
      "Convince yourself that your judgment is an absolute, objective scientific fact.",
      "Quit your job on the spot without talking to anyone.",
    ],
    0,
    "Separating external mental judgments from internal emotional reality allows you to address what you actually need."
  ),
  q(
    "1-understanding-2", 1,
    "In cognitive-behavioral science, why is it vital to distinguish between a 'thought' and a 'feeling'?",
    "What is the difference between thoughts and feelings?",
    [
      "Thoughts are cognitive interpretations and stories; feelings are physiological emotional states. Thoughts can be challenged, while feelings must be felt.",
      "Thoughts and feelings are 100% identical in all psychological frameworks.",
      "Thoughts are always completely true, while feelings are always completely false.",
      "Feelings are intellectual equations solved by the prefrontal cortex.",
    ],
    0,
    "Thoughts create stories about the world; feelings report the condition of our nervous system. Disentangling them brings instant clarity."
  ),

  // Point 3: Checking in during transitions throughout the day.
  q(
    "1-action-3", 1,
    "You just arrived home in your driveway after an exhausting, stressful 45-minute commute in traffic.",
    "What would you do next?",
    [
      "Sit in your parked car for two minutes, take five grounding breaths, and consciously check in with your energy before walking in the front door.",
      "Burst through the front door and start venting your road rage on your family or roommates.",
      "Immediately open your laptop and start sending urgent work emails while dinner is cooking.",
      "Pretend you are full of bubbly energy and collapse twenty minutes later.",
    ],
    0,
    "Using transition thresholds (like the parked car) to check in and reset prevents the toxic bleed of work stress into personal life."
  ),
  q(
    "1-understanding-3", 1,
    "Why are 'threshold moments' (between work and home, between meetings) critical for self-awareness?",
    "What do threshold check-ins accomplish?",
    [
      "They prevent emotional contagion—carrying residual adrenaline from an earlier conflict into an innocent new environment.",
      "They allow you to waste time without feeling guilty.",
      "Thresholds are the only time human beings have emotional reactions.",
      "They ensure you will never feel tired again.",
    ],
    0,
    "Conscious transition rituals cleanse the emotional palate, allowing you to show up with presence rather than carried baggage."
  ),

  // Point 4: Non-judgmental curiosity toward uncomfortable feelings.
  q(
    "1-action-4", 1,
    "You notice a sudden surge of jealousy when you see a close friend announce an exciting book deal.",
    "What would you do next?",
    [
      "Observe the feeling with gentle curiosity: 'I notice jealousy here. It shows how deeply I care about my own writing ambitions.'",
      "Berate yourself mentally: 'You are a terrible, selfish friend for feeling jealous.'",
      "Stop speaking to your friend to punish them for succeeding.",
      "Write a critical, dismissive comment under their announcement.",
    ],
    0,
    "Meeting uncomfortable emotions with gentle curiosity uncovers the healthy desire beneath the feeling without self-reproach."
  ),
  q(
    "1-understanding-4", 1,
    "What did Carl Rogers mean when he wrote: 'The curious paradox is that when I accept myself just as I am, then I can change'?",
    "Why is self-acceptance necessary before emotional growth?",
    [
      "Shame and self-condemnation lock the nervous system in defensiveness; accepting what is currently present creates the safety required for growth.",
      "It means you should never try to improve yourself and stay stagnant forever.",
      "Accepting yourself makes you 100% perfect instantly.",
      "Self-criticism is the only proven method for psychological healing.",
    ],
    0,
    "You cannot heal what you refuse to feel; compassionate acceptance provides the secure foundation from which growth blooms."
  ),

  // Point 5: Tracking patterns over time.
  q(
    "1-action-5", 1,
    "For the third Sunday evening in a row, you notice an intense dread and tension creeping over you around 6 PM.",
    "What would you do next?",
    [
      "Recognize the recurring pattern ('Sunday Scaries') and investigate what specific aspect of your Monday routine or workload is causing dread.",
      "Drown out the dread by drinking alcohol and watching television until 2 AM.",
      "Assume Sundays are cursed by the universe and do nothing.",
      "Call in sick every Monday morning permanently.",
    ],
    0,
    "Recognizing repeating emotional patterns allows you to treat them as data points to diagnose and resolve systemic life issues."
  ),
  q(
    "1-understanding-5", 1,
    "Why is an emotional pattern radar (like daily tracking) superior to relying on momentary memory?",
    "What does pattern tracking reveal?",
    [
      "Human memory is heavily biased by recent events; tracking reveals cyclical rhythms, triggers, and chronic drains that daily memory misses.",
      "It proves that your life is completely determined by astrology.",
      "Tracking is only useful for people with clinical illnesses.",
      "Memory is 100% photographic and never misses emotional data.",
    ],
    0,
    "Data over time illuminates the hidden emotional weather patterns of our lives, transforming reactive confusion into proactive design."
  ),

  // ==========================================
  // CHAPTER 2: Find the word that fits
  // ==========================================
  // Point 1: Moving beyond generic buckets like "bad" or "angry".
  q(
    "2-action-1", 2,
    "You tell a friend 'I'm feeling bad today' after your project proposal was sidelined.",
    "What would you do next?",
    [
      "Look deeper into that generic 'bad' feeling and refine it: 'Actually, what I'm feeling is unappreciated and invisible.'",
      "Stick with 'bad' because drilling down into emotions is a waste of time.",
      "Tell yourself that you are bad at everything and quit.",
      "Blame the weather for your bad mood.",
    ],
    0,
    "Moving from vague labels to precise emotional words ('unappreciated') clarifies the exact need that must be addressed."
  ),
  q(
    "2-understanding-1", 2,
    "In the neuroscience research of Dr. Lisa Feldman Barrett, what is 'Emotional Granularity'?",
    "Why does having a rich emotional vocabulary matter biologically?",
    [
      "People with high emotional granularity distinguish specific emotions (disappointed vs envious vs exhausted), allowing the brain to select targeted coping actions.",
      "It means using fancy words in poetry to impress teachers.",
      "Emotional vocabulary has zero connection to brain regulation.",
      "Granularity means feeling only one emotion your entire life.",
    ],
    0,
    "Granular naming is like high-resolution diagnostic imaging for the soul; it allows tailored, effective medicine rather than blunt hammers."
  ),

  // Point 2: Distinguishing frustration from helplessness.
  q(
    "2-action-2", 2,
    "Your home renovation project is delayed by two months due to supply chain shortages, and you feel a burning agitation in your chest.",
    "What would you do next?",
    [
      "Recognize that what feels like anger on the surface is actually powerlessness: 'I am not just mad, I am grieving my lack of control over the timeline.'",
      "Scream at the tile manufacturer on the phone every single morning.",
      "Break things in your house to feel powerful again.",
      "Tell everyone that you are completely relaxed and happy with the delay.",
    ],
    0,
    "Unmasking powerlessness beneath anger releases the exhausting urge to fight reality and allows for peaceful acceptance of delays."
  ),
  q(
    "2-understanding-2", 2,
    "Why is anger frequently referred to as a 'Secondary Emotion' in psychological frameworks?",
    "What does anger typically hide underneath?",
    [
      "Anger is an energizing, protective emotion that often rushes in to mask deeper, more vulnerable feelings like hurt, shame, grief, or powerlessness.",
      "Anger is always the primary, purest emotion in all mammals.",
      "Anger has no relationship to vulnerability or fear.",
      "Secondary emotions are illegal in cognitive therapy.",
    ],
    0,
    "Anger acts as a fierce bodyguard protecting our softest, most vulnerable emotional wounds from being exposed."
  ),

  // Point 3: Distinguishing nervous anticipation from genuine dread.
  q(
    "2-action-3", 2,
    "Your hands are tingling and your stomach has butterflies before your first date with someone you really admire.",
    "What would you do next?",
    [
      "Label the sensation as 'excited anticipation' rather than 'dread', realizing your body is mobilizing energy for something you care about.",
      "Cancel the date because butterflies must mean the date is a toxic catastrophe.",
      "Drink three martinis before arriving to numb all sensation.",
      "Convince yourself that you hate dating and prefer to be alone.",
    ],
    0,
    "Accurately labeling physiological butterflies as excitement rather than dread liberates you to enjoy meaningful life moments."
  ),
  q(
    "2-understanding-3", 2,
    "How does the cognitive label we assign to physiological sensations alter our subjective experience?",
    "What is the power of cognitive appraisal?",
    [
      "The body produces similar arousal (racing heart, adrenaline) for excitement and fear; our cognitive label determines whether we feel thrilled or terrified.",
      "Cognitive labels have zero impact on physical sensations.",
      "Excitement and fear feel 100% identical in every human context.",
      "The brain never interprets bodily signals.",
    ],
    0,
    "Our thoughts act as the caption underneath the physical photograph of our bodily sensations, deciding whether it is an adventure or a tragedy."
  ),

  // Point 4: Distinguishing guilt from shame.
  q(
    "2-action-4", 2,
    "You forgot your sibling's birthday and find yourself thinking: 'I am a rotten, selfish human being.'",
    "What would you do next?",
    [
      "Shift the label from shame to guilt: 'I made a mistake by forgetting (guilt), but I am not fundamentally rotten (shame). I will call now and apologize warmly.'",
      "Accept that you are a rotten person and avoid talking to your sibling for a year.",
      "Send an angry message blaming your sibling for having their birthday on a busy weekday.",
      "Invent a lie that your gift got lost in the mail.",
    ],
    0,
    "Separating the mistake from your core identity allows you to take swift, loving accountability without toxic self-loathing."
  ),
  q(
    "2-understanding-4", 2,
    "In the landmark shame research of Dr. Brené Brown, what is the critical difference between guilt and shame?",
    "Why is guilt adaptive while shame is destructive?",
    [
      "Guilt says 'I did something bad' (focus on behavior, motivates repair); shame says 'I am bad' (focus on self-worth, leads to hiding and defensiveness).",
      "Shame is the foundation of all moral virtue.",
      "Guilt leads directly to criminal behavior.",
      "There is zero difference between guilt and shame.",
    ],
    0,
    "Guilt holds our behavior against our core values, driving positive change; shame attacks the core self, driving withdrawal and addiction."
  ),

  // Point 5: Distinguishing envy from admiration.
  q(
    "2-action-5", 2,
    "You see a colleague deliver a masterclass presentation that receives a standing ovation from leadership.",
    "What would you do next?",
    [
      "Refine your feeling from bitter envy into clean admiration: 'That was an incredible delivery. I admire their pacing and want to learn that technique.'",
      "Whisper to your neighbor that the presentation was superficial and full of buzzwords.",
      "Decide that you will never present in front of leadership again.",
      "Steal their presentation slides and claim you helped write them.",
    ],
    0,
    "Transforming envy into admiration turns comparison into an inspirational masterclass for your own craft."
  ),
  q(
    "2-understanding-5", 2,
    "What is the functional difference between benign envy (admiration) and malicious envy?",
    "How does benign envy drive personal growth?",
    [
      "Benign envy focuses on leveling yourself up ('How can I learn to do that?'), while malicious envy focuses on pulling the other person down ('How can I diminish them?').",
      "Malicious envy is the secret to rapid corporate promotion.",
      "Admiration is a sign of submission and weakness.",
      "Envy can never be transformed into positive motivation.",
    ],
    0,
    "Admiration honors another's light and uses it to illuminate your own path to mastery."
  ),

  // ==========================================
  // CHAPTER 3: Notice your body’s signals
  // ==========================================
  // Point 1: The body registers emotions before the conscious mind.
  q(
    "3-action-1", 3,
    "Before opening an email from a difficult client, you notice your breath becomes shallow and your shoulders rise toward your ears.",
    "What would you do next?",
    [
      "Notice the physical brace, drop your shoulders away from your ears, take two belly breaths, and then open the email with a calm posture.",
      "Ignore your shoulders and click the email while holding your breath in panic.",
      "Slam your laptop shut and refuse to open it all week.",
      "Assume the email contains a lawsuit before reading the first line.",
    ],
    0,
    "Catching physical bracing and actively relaxing your posture down-regulates the threat response before you even read the text."
  ),
  q(
    "3-understanding-1", 3,
    "In neuroscience, what is 'Interoception' and why is it considered the 6th sense?",
    "What is interoception?",
    [
      "The brain's perception of internal physiological signals (heart rate, gut sensations, muscle tension, breath), which form the foundation of all feelings.",
      "The ability to communicate telepathically with pets.",
      "The sense of balance inside the inner ear.",
      "Interoception is an imaginary concept with no neural basis.",
    ],
    0,
    "Interoception is the brain's internal dashboard; tuning into bodily sensations provides the earliest warning system for emotional shifts."
  ),

  // Point 2: The gut-brain axis as an emotional radar.
  q(
    "3-action-2", 3,
    "A potential business partner offers a deal that looks incredible on paper, but you feel a tight, nauseating knot in your gut whenever you speak to them.",
    "What would you do next?",
    [
      "Pause, respect your gut sensation as subconscious pattern detection, and conduct deeper, independent due diligence on their track record.",
      "Ignore your gut completely and wire them money immediately.",
      "Accuse them of being a criminal without conducting any research.",
      "Assume you have food poisoning and sign the contract anyway.",
    ],
    0,
    "Respecting somatic intuition as non-conscious pattern recognition prompts prudent, objective investigation."
  ),
  q(
    "3-understanding-2", 3,
    "Why is the gastrointestinal system often referred to by neuroscientists as the 'Second Brain'?",
    "What is the biological truth of the gut-brain axis?",
    [
      "The enteric nervous system contains over 500 million neurons and produces 90% of the body's serotonin, constantly communicating with the emotional brain via the vagus nerve.",
      "The stomach can solve complex mathematical calculus equations.",
      "Gut feelings are purely supernatural and defy all biology.",
      "There are zero neurons outside of the human skull.",
    ],
    0,
    "The gut is a massive neurochemical processing center; listening to its sensations is listening to profound biological intelligence."
  ),

  // Point 3: Jaw clenching as a sign of suppressed boundaries.
  q(
    "3-action-3", 3,
    "At the end of a long workday, you realize your molars are clamped together and your jaw muscles ache painfully.",
    "What would you do next?",
    [
      "Gently massage your jaw, unclench your teeth, place your tongue on the roof of your mouth, and reflect on what unspoken boundary you suppressed today.",
      "Take painkillers and ignore the clenching.",
      "Chew hard gum to make the jaw muscles even tighter.",
      "Clench harder to show life that you are tough.",
    ],
    0,
    "Recognizing jaw clenching as somatic boundary suppression allows you to relax the physical muscle and identify what needs to be communicated."
  ),
  q(
    "3-understanding-3", 3,
    "Why does the human jaw clench instinctively when we suppress an urge to say 'no' or speak up?",
    "What is the somatic meaning of a clenched jaw?",
    [
      "Evolutionarily, the jaw bites down to hold back vocalizations or prepare for physical conflict; chronic clenching signals unexpressed emotional boundaries.",
      "Jaw clenching is purely caused by eating too much spinach.",
      "The jaw clenches when you are feeling joyful and loving.",
      "It has no connection to emotional expression.",
    ],
    0,
    "The body holds what the mouth refuses to speak; physical tension in the jaw is often an unsaid 'no' trapped in muscle tissue."
  ),

  // Point 4: Postural biofeedback influences emotional confidence.
  q(
    "3-action-4", 3,
    "You are sitting in an interview waiting room, slumped forward, scrolling on your phone with your chest collapsed and chin tucked down.",
    "What would you do next?",
    [
      "Put the phone away, sit upright with an open chest, align your spine, and breathe deeply to signal calm confidence to your nervous system.",
      "Slump further down into the chair and hide behind your jacket.",
      "Pace back and forth frantically while biting your nails.",
      "Stare intensely at the receptionist to intimidate them.",
    ],
    0,
    "Embodied cognition demonstrates that an upright, open posture sends bottom-up physiological signals of safety and confidence to the brain."
  ),
  q(
    "3-understanding-4", 3,
    "What does the principle of 'Embodied Cognition' teach about the two-way street between mind and body?",
    "How does body posture change brain chemistry?",
    [
      "The mind affects the body, but the body equally shapes the mind; physical posture, breathing, and facial expression directly modulate emotional states.",
      "The body is merely a meat carriage with zero influence on the brain.",
      "Posture only matters for military marching bands.",
      "Slumping increases cognitive brilliance by 200%.",
    ],
    0,
    "You cannot separate the mind from the physical instrument it inhabits; altering physical posture immediately shifts internal emotional climate."
  ),

  // Point 5: Body scans as a daily calibration ritual.
  q(
    "3-action-5", 3,
    "You find it difficult to fall asleep because your mind is racing with tomorrow's to-do list.",
    "What would you do next?",
    [
      "Perform a slow, sequential body scan from the crown of your head down to your toes, consciously softening each muscle group as you exhale.",
      "Get out of bed, turn on bright fluorescent lights, and start working on the to-do list at 1 AM.",
      "Scroll social media on your phone with maximum screen brightness.",
      "Drink three cups of coffee so you don't feel tired tomorrow.",
    ],
    0,
    "A progressive somatic body scan redirects attention away from cognitive loops into visceral sensations, enabling sleep."
  ),
  q(
    "3-understanding-5", 3,
    "Why does bringing conscious attention to physical sensations naturally quiet runaway mental chatter?",
    "What happens neurologically during a body scan?",
    [
      "Attention is finite; actively anchoring attention in sensory proprioception de-activates the default mode network responsible for endless rumination.",
      "Body scans cause spontaneous amnesia.",
      "The brain shuts down completely during body scans.",
      "Sensory attention makes mental chatter grow louder.",
    ],
    0,
    "You cannot simultaneously be fully attuned to the sensation of your toes relaxing and lost in a cognitive panic loop about tomorrow's presentation."
  ),

  // ==========================================
  // CHAPTER 4: Two feelings can be true
  // ==========================================
  // Point 1: Embracing mixed emotions during life milestones.
  q(
    "4-action-1", 4,
    "You just handed in your two-week notice to accept an exciting dream job, and you feel thrilled but also an unexpected wave of sorrow.",
    "What would you do next?",
    [
      "Hold both feelings with grace: 'It is completely natural to feel both thrilled about my new adventure and sad to leave cherished colleagues.'",
      "Panic and cancel your new job offer because feeling sad must mean you made a terrible mistake.",
      "Force yourself to feel 100% happy and pretend you hate your old colleagues.",
      "Feel ashamed of yourself for being emotional on a celebration day.",
    ],
    0,
    "Emotional maturity recognizes that major transitions naturally evoke both excitement for the future and grief for what is left behind."
  ),
  q(
    "4-understanding-1", 4,
    "What is 'Emotional Ambivalence' and why is it a sign of high psychological maturity rather than confusion?",
    "What is the superpower of holding mixed emotions?",
    [
      "The capacity to experience contrasting emotions simultaneously (e.g. pride and grief) reflects a nuanced, sophisticated appraisal of complex reality.",
      "Ambivalence is a sign of mental instability and weakness.",
      "Mature adults only feel exactly one pure emotion at a time.",
      "Feeling two things at once means you are lying about both.",
    ],
    0,
    "Only simplistic minds demand single, unmixed emotions; a rich life requires the capacity to hold joy and sorrow in the same palm."
  ),

  // Point 2: Feeling proud of an achievement while feeling exhausted by the cost.
  q(
    "4-action-2", 4,
    "You successfully launched a major company product, and your team is cheering, but your body feels shattered and hollow from months of overtime.",
    "What would you do next?",
    [
      "Acknowledge both realities: celebrate the genuine success with the team, while scheduling mandatory rest to honor your body's depletion.",
      "Ignore your exhaustion and volunteer to lead another massive project immediately.",
      "Complain to the team that the launch was a hollow failure because you are tired.",
      "Hide in the bathroom and refuse to attend the celebration.",
    ],
    0,
    "Validating both the external pride of accomplishment and the visceral need for recovery protects against cynical burnout."
  ),
  q(
    "4-understanding-2", 4,
    "Why does denying the physical toll of an achievement poison the satisfaction of success?",
    "What happens when we ignore the cost of accomplishment?",
    [
      "Pretending success didn't cost anything creates an unsustainable delusion, leading to deep resentment and emotional exhaustion.",
      "Denying the toll makes you feel refreshed and energized forever.",
      "Great achievers never feel tired.",
      "Success means you never have to sleep again.",
    ],
    0,
    "Honoring both the mountain you climbed and the blisters on your feet keeps achievement grounded in authentic humanity."
  ),

  // Point 3: Loving someone deeply while feeling intensely irritated by a specific habit.
  q(
    "4-action-3", 4,
    "You deeply love your partner, but you are feeling intensely annoyed by their loud chewing or messy kitchen habit tonight.",
    "What would you do next?",
    [
      "Allow both to be true: 'I love my partner deeply, AND I am feeling sensory overload and annoyance right now; the annoyance doesn't negate the love.'",
      "Conclude that because you feel annoyed, you must fall out of love and file for divorce.",
      "Suppress the annoyance completely and pretend everything is perfect.",
      "Yell at them that they are unlovable because they chew loudly.",
    ],
    0,
    "Replacing 'either/or' thinking with 'both/and' protects relationships from catastrophic over-reactions to momentary irritation."
  ),
  q(
    "4-understanding-3", 4,
    "In relationship psychology, why is the shift from 'BUT' to 'AND' so transformative?",
    "What is the power of the word 'AND' in emotional life?",
    [
      "'AND' creates an expansive container where love and frustration can coexist without one erasing the other.",
      "'AND' makes sentences sound grammatically confusing.",
      "'BUT' is superior because it deletes whatever came before it.",
      "Healthy couples never feel frustrated with each other.",
    ],
    0,
    "'AND' welcomes the full, messy complexity of human intimacy without forcing false, artificial polarities."
  ),

  // Point 4: Feeling grateful for your blessings while honoring genuine grief.
  q(
    "4-action-4", 4,
    "You have a secure job and a warm home, but you are experiencing deep grief after the death of a beloved family pet.",
    "What would you do next?",
    [
      "Give yourself full permission to mourn the pet deeply, without using your good fortune to invalidate your legitimate heartache.",
      "Tell yourself: 'You have a roof over your head, so you have no right to cry about a pet.'",
      "Give away all your possessions to match your grief.",
      "Mock yourself for being overly sentimental.",
    ],
    0,
    "True gratitude never demands the suppression of legitimate grief; a grateful heart has ample room to weep for love lost."
  ),
  q(
    "4-understanding-4", 4,
    "What is 'Comparative Suffering' and why is it emotionally toxic?",
    "Why shouldn't you compare your pain to others?",
    [
      "Believing you aren't allowed to feel pain because 'others have it worse' simply traps the pain inside, compounding suffering with shame.",
      "Comparative suffering is the best way to cure sadness.",
      "Pain is only valid if you are the single most unfortunate person on planet Earth.",
      "Suffering is a competitive sport with gold medals.",
    ],
    0,
    "Empathy is not a finite pie; acknowledging your own genuine sorrow expands your capacity to hold compassion for the wider world."
  ),

  // Point 5: Feeling excited about a vacation while feeling anxious about travel logistics.
  q(
    "4-action-5", 4,
    "You are packing for a dream vacation to Europe, and you feel thrilling joy alongside sharp anxiety about catching connecting trains.",
    "What would you do next?",
    [
      "Welcome both: 'It is completely normal to feel thrilled about the destination AND anxious about navigating foreign transport.'",
      "Cancel the European vacation because anxiety means danger.",
      "Scold yourself for not feeling 100% serene and joyful every second.",
      "Panic and pack eight suitcases for a five-day trip.",
    ],
    0,
    "Normalizing the coexistence of adventure and logistical stress prevents self-judgment and enables practical preparation."
  ),
  q(
    "4-understanding-5", 4,
    "Why does allowing mixed emotions reduce the pressure to feel 'perfect' during holidays and celebrations?",
    "How does emotional flexibility protect celebrations?",
    [
      "It eliminates the unrealistic expectation of pure bliss, allowing minor hiccups and fatigue to occur without ruining the entire experience.",
      "It ensures that every vacation will be miserable and depressing.",
      "It teaches that joy is an illusion.",
      "Celebrations should always be 100% perfect without a single tear.",
    ],
    0,
    "When you surrender the rigid demand for flawless happiness, you discover the resilient, authentic joy that thrives amid imperfect reality."
  ),

  // ==========================================
  // CHAPTER 5: What matters to me here?
  // ==========================================
  // Point 1: Anger reveals a boundary or value that has been violated.
  q(
    "5-action-1", 5,
    "You feel a hot blaze of anger when a colleague takes a shortcut that compromises safety standards on a construction site.",
    "What would you do next?",
    [
      "Recognize that your anger is an alarm protecting your deep value of human safety, and channel that energy into a firm, clear safety intervention.",
      "Swallow the anger and say nothing to keep the peace.",
      "Start a fistfight with the colleague in the parking lot.",
      "Quit your career because safety standards were breached.",
    ],
    0,
    "Using anger as an ethical compass points directly to your core values and provides the focused energy to take courageous, principled action."
  ),
  q(
    "5-understanding-1", 5,
    "In value-based psychology, what is the evolutionary and moral function of healthy anger?",
    "What does healthy anger protect?",
    [
      "Healthy anger acts as a boundary defender; it alerts us when an injustice has occurred or when something we deeply revere is being violated.",
      "Anger is a design flaw that should be surgically removed from all humans.",
      "Anger exists solely to destroy and terrorize others.",
      "Healthy anger never exists under any circumstances.",
    ],
    0,
    "Anger is passion in defense of a boundary; harnessed with emotional intelligence, it becomes the fuel for positive justice and protection."
  ),

  // Point 2: Envy reveals an unacknowledged personal aspiration.
  q(
    "5-action-2", 5,
    "You feel a bitter pang of envy when you see an acquaintance publish a collection of poetry.",
    "What would you do next?",
    [
      "Ask yourself: 'What value does this envy point to?' Recognize your own unexpressed desire to write, and set aside thirty minutes tonight to start writing.",
      "Write a scathing review online trashing their poetry.",
      "Tell yourself you are untalented and will never write a word.",
      "Unfollow all poets on social media out of spite.",
    ],
    0,
    "Deconstructing envy exposes your own dormant creative desires and transforms bitterness into creative momentum."
  ),
  q(
    "5-understanding-2", 5,
    "Why did author Julia Cameron describe envy as 'a map, not a character defect'?",
    "How does envy map your hidden desires?",
    [
      "Envy shows you what you secretly want for yourself; you never envy what you don't care about. It maps your genuine, unlived potential.",
      "Envy shows you who your mortal enemies are so you can eliminate them.",
      "Envy is a map that leads directly to buried treasure.",
      "Envy proves you are inherently evil.",
    ],
    0,
    "Envy is painful because it shows you what you yearn for in someone else; deciphering the map allows you to build it in your own life."
  ),

  // Point 3: Grief reveals the depth of love and significance.
  q(
    "5-action-3", 5,
    "You feel an overwhelming wave of grief when walking past your childhood home or school.",
    "What would you do next?",
    [
      "Honor the grief as a sacred testament to how deeply you loved those formative memories, allowing yourself to feel the tenderness.",
      "Tell yourself you are foolish for getting emotional over bricks and mortar.",
      "Bulldoze the building so you don't feel sad anymore.",
      "Distract yourself with loud music to avoid crying.",
    ],
    0,
    "Viewing grief as love with nowhere to go honors the significance of the past without turning it into a source of shame."
  ),
  q(
    "5-understanding-3", 5,
    "What is the profound relationship between grief and love in human emotional architecture?",
    "Why does grief exist?",
    [
      "Grief is the natural, inevitable tax we pay for the privilege of loving deeply; you cannot grieve what was not profoundly meaningful.",
      "Grief is an illness caused by a lack of positive thinking.",
      "Grief exists to punish people for caring too much.",
      "Grief only happens to weak people who refuse to move on.",
    ],
    0,
    "Grief is the final, tender expression of love; honoring it honors the depth of what made life so rich."
  ),

  // Point 4: Fear reveals what is intensely precious to your life.
  q(
    "5-action-4", 5,
    "Holding your newborn child or launching your first business, you feel an acute, terrifying flash of fear that something could go wrong.",
    "What would you do next?",
    [
      "Recognize that fear is proportional to how precious this life or mission is to you; take a breath and channel that vigilance into loving, practical care.",
      "Give up the business or child because fear means you aren't ready.",
      "Lock the doors and refuse to let anyone near your creation.",
      "Numb yourself with medications to stop feeling protective fear.",
    ],
    0,
    "Understanding that fear is a guardian of what is precious transforms panic into vigilant, devoted stewardship."
  ),
  q(
    "5-understanding-4", 5,
    "Why does fear naturally amplify whenever we step into something deeply meaningful?",
    "What is the relationship between vulnerability and meaning?",
    [
      "The more something matters to our core identity and values, the greater the perceived vulnerability; fear is the echo of immense caring.",
      "Fear means you are heading in the completely wrong direction.",
      "Meaningful things never cause any fear whatsoever.",
      "Fear proves you are an imposter who deserves to fail.",
    ],
    0,
    "Where your greatest fear lurks, your greatest values are standing guard; listening to the value dissolves the terror."
  ),

  // Point 5: Aligning daily choices with underlying values creates serenity.
  q(
    "5-action-5", 5,
    "You are offered a lucrative promotion that requires 80-hour work weeks and extensive travel, but your core value is family presence and creative writing.",
    "What would you do next?",
    [
      "Use your core values as a decision compass, decline the offer with gratitude, and choose a path that honors your chosen priorities.",
      "Accept the promotion for the status, and spend five years miserable, disconnected, and burnt out.",
      "Accept the promotion and blame the company for ruining your family life.",
      "Flip a coin because values are subjective and don't matter.",
    ],
    0,
    "Using self-awareness to align external decisions with authentic inner values produces lasting contentment and integrity."
  ),
  q(
    "5-understanding-5", 5,
    "What is the ultimate definition of 'Emotional Integrity' in self-awareness?",
    "What does it mean to live with emotional integrity?",
    [
      "When your conscious choices, words, and daily habits are in harmonious alignment with your deepest, felt core values.",
      "When you can deceive anyone without feeling guilty.",
      "When you never make a single mistake in life.",
      "Emotional integrity means forcing everyone else to follow your rules.",
    ],
    0,
    "Emotional integrity is the peace that comes when the person you are on the inside matches the person you present to the world."
  ),
];
