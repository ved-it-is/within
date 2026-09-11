// Stage 2: Emotional Regulation (Chapters 6 - 10)
// Themes: Early Detection, The Strategic Pause, Somatic Down-Regulation, Urge Surfing, Conscious Response

function q(id, chapterId, situation, prompt, choices, correctIndex, explanation, skillIds = ["regulation"]) {
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

export const stage2Questions = [
  // ==========================================
  // CHAPTER 6: Catch the moment earlier
  // ==========================================
  // Point 1: Noticing early warning signals prevents emotional hijacking.
  q(
    "6-action-1", 6,
    "During a budget meeting, you feel a familiar tightness spreading in your neck and your fingers clenching into fists.",
    "What would you do next?",
    [
      "Recognize the neck tightness as your body's early cue that anger is rising, drop your shoulders, and take a slow breath before speaking.",
      "Ignore your body's cues and wait until you are screaming to realize you are angry.",
      "Slam your hands on the table to release the tension immediately.",
      "Assume your neck pain is purely orthopedic and complain about the office chairs.",
    ],
    0,
    "Catching early physical markers of irritation allows you to de-escalate before adrenaline takes over your rational voice."
  ),
  q(
    "6-understanding-1", 6,
    "In physiological psychology, what is the 'Escalation Curve' of emotional reactivity?",
    "Why is early intervention 10x easier than late intervention?",
    [
      "At low arousal (10–30%), the prefrontal cortex can easily guide choices; once arousal spikes past 80%, adrenaline overwhelms executive reasoning.",
      "Emotions always stay at the exact same intensity for 24 hours.",
      "The best time to regulate an emotion is when you are at 100% peak rage.",
      "Escalation curves only exist in economics, not human biology.",
    ],
    0,
    "Intervening at the first spark of tension requires minimal effort; trying to regulate a full five-alarm blaze is nearly impossible."
  ),

  // Point 2: Knowing your signature trigger topics prepares you in advance.
  q(
    "6-action-2", 6,
    "You know that discussions about your family's inheritance always trigger feelings of defensive insecurity in you.",
    "What would you do next?",
    [
      "Anticipate the trigger before the family phone call, set an intention to stay grounded, and decide on a soothing boundary if talks get heated.",
      "Start the phone call by accusing everyone of being greedy to get ahead of the topic.",
      "Pretend you have amnesia and don't remember having any family.",
      "Drink five cups of espresso to make yourself hyper-vigilant.",
    ],
    0,
    "Knowing your emotional triggers in advance allows you to deploy intentional coping strategies rather than being blindsided."
  ),
  q(
    "6-understanding-2", 6,
    "What is an 'Emotional Trigger' from a neurological perspective?",
    "What happens in the brain when a trigger is activated?",
    [
      "A current sensory cue unconsciously matches a past painful memory, triggering an instantaneous, conditioned threat response.",
      "A trigger is an imaginary excuse invented by weak people.",
      "A trigger means the other person is a certified criminal.",
      "Triggers can be erased permanently by reading one motivational quote.",
    ],
    0,
    "Triggers are historical neurochemical shortcuts; awareness allows you to separate the memory of past pain from the reality of the present moment."
  ),

  // Point 3: Subtle environmental cues can amplify reactivity without conscious awareness.
  q(
    "6-action-3", 6,
    "You are stuck in a hot, noisy, crowded train after working a 10-hour shift and notice an intense urge to snap at a passenger listening to music.",
    "What would you do next?",
    [
      "Notice that heat, noise, hunger, and crowding have depleted your biological tolerance, put in earplugs, and focus on slow breathing.",
      "Rip the headphones off the passenger and scream at the train car.",
      "Decide that humanity is fundamentally corrupt and hopeless.",
      "Pick a physical fight with the nearest commuter.",
    ],
    0,
    "Recognizing that biological depletion and sensory overload are masquerading as righteous anger keeps you calm and safe."
  ),
  q(
    "6-understanding-3", 6,
    "What does the acronym HALT (Hungry, Angry, Lonely, Tired) teach us about emotional regulation?",
    "Why are physiological check-ins essential before difficult conversations?",
    [
      "Basic physical deficits (hunger, exhaustion, isolation) masquerade as complex emotional grievances, drastically lowering our patience threshold.",
      "HALT is a military term with no psychological value.",
      "If you are hungry, you are legally entitled to scream at coworkers.",
      "Physical health has zero connection to emotional regulation.",
    ],
    0,
    "Often the most profound 'emotional regulation' is simply drinking a glass of water, eating a healthy snack, or getting eight hours of sleep."
  ),

  // Point 4: Catching micro-behaviors before macro-outbursts.
  q(
    "6-action-4", 6,
    "You find yourself typing a chat reply with unusually hard, aggressive keystrokes and breathing rapidly through your teeth.",
    "What would you do next?",
    [
      "Take your hands off the keyboard immediately, stand up from your chair, and drink a glass of cold water before reading the message again.",
      "Hit send immediately while the anger is at peak intensity.",
      "Smash your keyboard on the desk to demonstrate passion.",
      "Add three exclamation marks to every sentence to make your point.",
    ],
    0,
    "Using hard keystrokes as an automatic biological alarm to step away stops regrettable digital fires before they ignite."
  ),
  q(
    "6-understanding-4", 6,
    "Why is the physical keyboard or smartphone screen the most dangerous amplifier of emotional dysregulation in modern life?",
    "What makes digital communication prone to toxic escalation?",
    [
      "The absence of real-time vocal tone, eye contact, and facial empathy removes natural human de-escalation instincts, allowing rapid impulsive venting.",
      "Keyboards emit electromagnetic waves that cause spontaneous rage.",
      "Digital messages can never be read by human eyes.",
      "Typing slowly cures all cognitive defects.",
    ],
    0,
    "Screens dehumanize communication; stepping away restores the visceral reminder that a real human being will read your words."
  ),

  // Point 5: Tracking your recovery time provides progress metrics.
  q(
    "6-action-5", 6,
    "You experienced a moment of sudden frustration during a meeting, but noticed you returned to baseline calm within five minutes instead of stewing for two days.",
    "What would you do next?",
    [
      "Acknowledge this noticeable shortening of recovery time as tangible evidence of strengthening emotional regulation muscle.",
      "Criticize yourself for having felt frustrated in the first place.",
      "Expect that you will never experience any frustration ever again.",
      "Tell everyone in the office that you have achieved complete zen enlightenment.",
    ],
    0,
    "Celebrating faster recovery time recognizes that emotional fitness is measured by resilience and return to baseline, not the impossible absence of emotion."
  ),
  q(
    "6-understanding-5", 6,
    "What is 'Refractory Period' in affective neuroscience?",
    "How does emotional regulation training change this period?",
    [
      "The duration during which an activated emotion controls your perception and resists contradictory facts; training dramatically shortens this duration.",
      "The time it takes to digest a heavy meal.",
      "The period during which you are legally required to be angry.",
      "It is a fixed genetic number that can never be altered.",
    ],
    0,
    "Emotional maturity does not prevent the initial emotional splash; it dramatically accelerates how swiftly your cognitive clarity returns."
  ),

  // ==========================================
  // CHAPTER 7: Pause before you respond
  // ==========================================
  // Point 1: The 90-second chemical buffer resets rational thinking.
  q(
    "7-action-1", 7,
    "A colleague makes a snide remark about your contribution right at the end of a team presentation.",
    "What would you do next?",
    [
      "Inhale slowly, count to ten, take a sip of water, and allow the 90-second chemical surge to pass before deciding whether a response is even necessary.",
      "Immediately fire back with an insult targeting their appearance.",
      "Burst into tears and run out of the room.",
      "Challenge them to a physical duel in the parking lot.",
    ],
    0,
    "Giving your bloodstream 90 seconds to flush the initial adrenaline surge prevents impulsive counter-attacks."
  ),
  q(
    "7-understanding-1", 7,
    "What did neuroanatomist Dr. Jill Bolte Taylor discover about the physiological lifespan of an emotional surge?",
    "What is the famous '90-Second Rule' in neurobiology?",
    [
      "The initial biochemical surge of adrenaline and cortisol in the bloodstream lasts approximately 90 seconds; after that, lingering anger is fueled by mental storytelling.",
      "Emotions chemically destroy the brain after 90 seconds.",
      "You must scream for 90 seconds straight to clear your lungs.",
      "Adrenaline remains in the blood for 40 consecutive days without stopping.",
    ],
    0,
    "If you can breathe through the initial 90-second chemical wave without feeding it new angry thoughts, the body naturally returns to calm."
  ),

  // Point 2: The pause creates the space for intentional agency.
  q(
    "7-action-2", 7,
    "You receive a text from an ex-partner or difficult family member that feels emotionally manipulative.",
    "What would you do next?",
    [
      "Put your phone on 'Do Not Disturb', set it in another room, and give yourself at least two hours before reading it with a steady mind.",
      "Reply within three seconds with a furious paragraph defending yourself.",
      "Send thirty question marks in a row.",
      "Call them repeatedly until they answer so you can yell at them.",
    ],
    0,
    "Creating intentional physical distance between the stimulus and your response restores your emotional sovereignty."
  ),
  q(
    "7-understanding-2", 7,
    "What did psychiatrist Viktor Frankl famously observe about the space between stimulus and response?",
    "What is the philosophical foundation of the pause?",
    [
      "'Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.'",
      "Stimulus and response are genetically wired and can never be separated.",
      "The fastest response is always the most virtuous.",
      "Pausing is a sign of hesitation and moral weakness.",
    ],
    0,
    "Human dignity and freedom reside in widening the pause between an external provocation and your chosen response."
  ),

  // Point 3: Using a tactical delay script when pressured.
  q(
    "7-action-3", 7,
    "A salesperson or vendor pressures you aggressively to sign a contract on the spot during a phone pitch.",
    "What would you do next?",
    [
      "Say calmly: 'I have a strict policy of reviewing all agreements overnight. I will get back to you by 2 PM tomorrow.'",
      "Cave in to the pressure and sign immediately while feeling sick to your stomach.",
      "Scream obscenities at the salesperson and slam down the phone.",
      "Agree verbally with no intention of paying.",
    ],
    0,
    "Deploying a pre-rehearsed delay policy neutralizes high-pressure sales tactics without requiring confrontation."
  ),
  q(
    "7-understanding-3", 7,
    "Why does having a pre-decided 'delay policy' protect your financial and emotional boundaries?",
    "How does pre-commitment support emotional regulation?",
    [
      "It removes the cognitive burden of deciding under high emotional pressure, shifting the boundary onto a neutral, non-negotiable rule.",
      "It allows you to blame invisible lawyers for your personal decisions.",
      "Delay policies are unethical business practices.",
      "Pre-commitment guarantees you will never buy anything again.",
    ],
    0,
    "Pre-commitment rules act as an external brake when smooth emotional manipulators attempt to rush your decision-making."
  ),

  // Point 4: Physical grounding anchors during the pause.
  q(
    "7-action-4", 7,
    "You are about to step onto a stage to give a keynote and your heart is hammering like a drum.",
    "What would you do next?",
    [
      "Plant your feet firmly into the floor, feel the solid earth beneath you, lengthen your exhale, and reframe the pounding heart as excitement.",
      "Drink three double shots of espresso to override the racing heart.",
      "Tell the event organizer that you have suddenly contracted the flu and run away.",
      "Hyperventilate in the dressing room mirror.",
    ],
    0,
    "Physical grounding combined with cognitive reappraisal (reframing anxiety as excitement) stabilizes the nervous system for peak performance."
  ),
  q(
    "7-understanding-4", 7,
    "Why is reframing somatic arousal from 'I am terrified' to 'My body is energized to perform' more effective than telling yourself 'Calm down'?",
    "What does arousal reappraisal research demonstrate?",
    [
      "Anxiety and excitement are both high-arousal states with nearly identical physiology; shifting from anxiety to excitement is a much smaller leap than forcing dead calm.",
      "Telling yourself to calm down instantly cures 100% of stage fright.",
      "Excitement and terror have completely different blood chemistry.",
      "Stage fright can only be eliminated by years of hypnosis.",
    ],
    0,
    "Riding high energy with a positive performance focus works with your body's adrenaline rather than fighting a futile war against it."
  ),

  // Point 5: Pausing protects your most cherished long-term goals from momentary moods.
  q(
    "7-action-5", 7,
    "You are on day 45 of a strict recovery or health program and experience an intense, sudden craving to indulge after a brutal day.",
    "What would you do next?",
    [
      "Tell yourself: 'I don't have to decide for the rest of my life, but I will wait 15 minutes and drink a cold seltzer before revisiting this urge.'",
      "Throw your hands up, declare the program a failure, and binge immediately.",
      "Beat yourself up mentally for having cravings in the first place.",
      "Lock yourself in a closet to escape your own thoughts.",
    ],
    0,
    "The '15-minute delay' surf allows the neurochemical peak of the craving to subside without forcing an agonizing permanent battle."
  ),
  q(
    "7-understanding-5", 7,
    "What is 'Temporal Discounting' and how does the pause protect against it?",
    "Why do momentary impulses destroy long-term goals?",
    [
      "The primitive brain irrationally discounts distant rewards (health, reputation) in favor of immediate dopamine hits; pausing restores long-term prefrontal valuation.",
      "Temporal discounting means watches run slower when you are angry.",
      "Immediate dopamine is always superior to long-term well-being.",
      "Temporal discounting only affects stock market traders.",
    ],
    0,
    "A deliberate pause acts as an equalizer, giving your future self an equal vote against the loud demands of your immediate impulses."
  ),

  // ==========================================
  // CHAPTER 8: Find what helps you settle
  // ==========================================
  // Point 1: The physiological sigh directly resets respiratory sinus arrhythmia.
  q(
    "8-action-1", 8,
    "You are feeling high, scattered anxiety after receiving four urgent work pings simultaneously.",
    "What would you do next?",
    [
      "Perform two quick inhales through the nose followed by a long, slow exhale through the mouth (the physiological sigh) two or three times.",
      "Hold your breath for two minutes until you feel dizzy.",
      "Drink a high-sugar energy drink to increase focus.",
      "Open all four pings simultaneously and type panicked replies in capital letters.",
    ],
    0,
    "The physiological sigh (double inhale followed by extended exhale) rapidly offloads carbon dioxide and triggers parasympathetic calming."
  ),
  q(
    "8-understanding-1", 8,
    "In respiratory neurobiology, why does extending the duration of the exhale slow your heart rate?",
    "How does breathing directly modulate cardiac rhythm?",
    [
      "Exhalation increases intrathoracic pressure, signaling the vagus nerve to release acetylcholine onto the heart's sinoatrial node, slowing the pulse.",
      "Exhaling makes your lungs stop working permanently.",
      "The heart only speeds up when you breathe out.",
      "Breathing has zero connection to the autonomic nervous system.",
    ],
    0,
    "Your breath is the single autonomic steering wheel you can consciously grab to physically slow your racing cardiac engine."
  ),

  // Point 2: Sensory grounding anchors attention in the physical present.
  q(
    "8-action-2", 8,
    "You are caught in a looping spiral of catastrophic thoughts about an upcoming performance review.",
    "What would you do next?",
    [
      "Use the 5-4-3-2-1 technique: name 5 things you can see, 4 you can touch, 3 you hear, 2 you smell, and 1 you taste around you right now.",
      "Follow the catastrophic thoughts into deeper worst-case scenarios for the next three hours.",
      "Call six different coworkers and ask them if they think you will be fired.",
      "Pinch yourself repeatedly until you bruise.",
    ],
    0,
    "Sensory grounding shifts electrical activity from the default mode network (overthinking) to the primary sensory cortex (present reality)."
  ),
  q(
    "8-understanding-2", 8,
    "Why does naming concrete physical objects in your immediate room dismantle an anxiety spiral?",
    "What does sensory processing do to catastrophic looping?",
    [
      "Catastrophic anxiety requires abstract mental forecasting; forcing the brain to process concrete sensory signals interrupts the abstract worry circuit.",
      "Naming objects casts a magical psychological barrier around the room.",
      "Concrete objects absorb negative psychic energy from the body.",
      "Sensory processing makes catastrophic thoughts come true faster.",
    ],
    0,
    "You cannot simultaneously be fully present in your immediate physical senses and lost in an imaginary future catastrophe."
  ),

  // Point 3: Temperature shifts stimulate the dive reflex.
  q(
    "8-action-3", 8,
    "You feel intensely overwhelmed, on the verge of tears and panic after an agonizing conversation.",
    "What would you do next?",
    [
      "Go to the restroom, fill the sink with cold water, and splash it over your eyes and cheeks, or hold a cold wet towel to your face.",
      "Lock yourself in a hot car with the heater running.",
      "Drink boiling hot tea as fast as possible.",
      "Scream into the office ventilation ducts.",
    ],
    0,
    "Cold water stimulation on the trigeminal facial nerve activates the mammalian dive reflex, rapidly down-regulating acute emotional agitation."
  ),
  q(
    "8-understanding-3", 8,
    "What is the 'Mammalian Dive Reflex' in human physiology?",
    "Why is cold water immersion an emergency down-regulator?",
    [
      "A preserved evolutionary reflex where facial cold stimulation signals the vagus nerve to instantly drop heart rate and divert oxygen to vital organs.",
      "It is a reflex that makes humans want to swim across the Atlantic ocean.",
      "It is only found in dolphins and whales, not humans.",
      "Cold water permanently shuts off all human emotional capacity.",
    ],
    0,
    "Splashing cold water on the face leverages an ancient mammalian survival circuit to physically slam the brakes on runaway panic."
  ),

  // Point 4: Rhythmic bilateral movement metabolizes adrenaline.
  q(
    "8-action-4", 8,
    "After receiving a frustrating email, your legs are jittery with restless, frustrated kinetic energy.",
    "What would you do next?",
    [
      "Go for a brisk 15-minute walk around the block, letting your arms swing rhythmically and focusing on your stride.",
      "Sit rigidly still in your chair and clench your teeth for an hour.",
      "Kick your office trash can across the room.",
      "Send an immediate aggressive reply to burn off the energy.",
    ],
    0,
    "Bilateral rhythmic movement (like walking) metabolizes circulating stress hormones and engages optic flow to quiet threat centers."
  ),
  q(
    "8-understanding-4", 8,
    "In neuroscience, what is 'Optic Flow' and why does walking forward reduce amygdala activation?",
    "How does moving forward visually soothe the brain?",
    [
      "As images pass across your retinas while walking forward, lateral eye movements suppress the neural activity of the amygdala, signaling safety.",
      "Optic flow makes you blind to danger.",
      "Walking backward is 500% better for brain health.",
      "Optic flow has no relationship to eye movement or stress.",
    ],
    0,
    "Forward physical motion through space literally down-regulates fear circuits in the mammalian brain."
  ),

  // Point 5: Developing a personalized, varied soothing menu.
  q(
    "8-action-5", 8,
    "You notice that a breathing exercise that usually calms you isn't working today during an acute wave of frustration.",
    "What would you do next?",
    [
      "Acknowledge that different states require different tools: switch from breathing to physical movement, stepping outside for fresh air or listening to music.",
      "Conclude that emotional regulation is a hoax and give up on all tools.",
      "Force the same breathing exercise harder until you hyperventilate.",
      "Blame yourself for being a defective human who cannot regulate.",
    ],
    0,
    "Having a diverse toolkit of soothing modalities prevents frustration when a single technique doesn't fit the specific neurochemical state."
  ),
  q(
    "8-understanding-5", 8,
    "Why does treating emotional regulation as an experimental toolkit work better than relying on a rigid single method?",
    "What is the power of a personalized regulation menu?",
    [
      "Emotional states have different biological signatures (some need discharge through movement; some need settling through breath); adaptability is mastery.",
      "A single rigid method is always superior if you have enough willpower.",
      "Experimental toolkits make people lazy and indecisive.",
      "Toolkits should only be used by licensed mechanics.",
    ],
    0,
    "True emotional wisdom meets the specific texture of the moment with the appropriate tool, rather than forcing a one-size-fits-all hammer."
  ),

  // ==========================================
  // CHAPTER 9: Feel it without acting on it
  // ==========================================
  // Point 1: Emotions are physiological waves that crest and subside.
  q(
    "9-action-1", 9,
    "You feel an intense wave of jealousy when a peer receives a high-profile assignment you wanted.",
    "What would you do next?",
    [
      "Sit with the uncomfortable feeling in your chest, observe the wave without judgment, and wait for it to crest and dissolve naturally.",
      "Immediately post a disparaging comment about the peer's project to tear them down.",
      "Swallow the jealousy, pretend you feel completely pure joy, and bury the resentment.",
      "Confront your boss and accuse them of personal favoritism.",
    ],
    0,
    "Observing the physical wave of jealousy without converting it into sabotage or shame allows it to pass cleanly."
  ),
  q(
    "9-understanding-1", 9,
    "In Acceptance and Commitment Therapy (ACT), what is 'Urge Surfing'?",
    "What is the metaphor of the emotional wave?",
    [
      "Viewing an emotional urge like an ocean wave: you don't fight it or drown in it; you balance on top of it and ride it until it naturally breaks on the shore.",
      "Surfing the internet whenever you feel uncomfortable.",
      "Suppressing all emotions until they vanish permanently.",
      "Acting on every single impulse immediately like a wild wave.",
    ],
    0,
    "Urges reach a peak intensity, plateau, and naturally subside if they are observed without resistance or reactive feeding."
  ),

  // Point 2: Distinguishing the feeling from the behavior.
  q(
    "9-action-2", 9,
    "Your child or pet spills juice all over a freshly cleaned white carpet, and you feel an instantaneous flash of volcanic rage.",
    "What would you do next?",
    [
      "Acknowledge the flash of rage internally ('I am feeling furious right now'), hold your voice steady, and step back for five seconds before cleaning up.",
      "Scream at the top of your lungs and terrify the household.",
      "Throw the juice jug against the wall to match the rage.",
      "Tell yourself you are an evil person for having felt a flash of anger.",
    ],
    0,
    "Recognizing that feeling anger is an involuntary human reflex, while choosing your outward behavior is your moral responsibility, enables self-mastery."
  ),
  q(
    "9-understanding-2", 9,
    "Why is the belief 'If I feel angry, I must express it aggressively' a dangerous psychological myth?",
    "What is the myth of emotional venting (catharsis)?",
    [
      "Research shows that aggressive venting (screaming, punching pillows) actually reinforces aggressive neural pathways rather than discharging them.",
      "Venting aggressively cures anger 100% of the time.",
      "Aggression is biologically mandatory whenever anger arises.",
      "Holding anger without yelling causes spontaneous combustion.",
    ],
    0,
    "Rehearsing aggression strengthens the habit of rage; holding the feeling quietly while letting the body cool deconstructs the circuit."
  ),

  // Point 3: Holding the discomfort of sadness without reaching for numbing agents.
  q(
    "9-action-3", 9,
    "You come home to an empty apartment after a painful breakup and feel a crushing, lonely sorrow in your chest.",
    "What would you do next?",
    [
      "Wrap yourself in a warm blanket, allow yourself to cry, listen to comforting music, and let the sorrow wash through you without numbing it.",
      "Order three bottles of wine and drink until you pass out.",
      "Spend $2,000 on impulsive online shopping to feel a dopamine rush.",
      "Download dating apps immediately to find anyone to distract you tonight.",
    ],
    0,
    "Allowing authentic sorrow to be felt with warmth and compassion prevents compensatory addictive loops and heals the heart."
  ),
  q(
    "9-understanding-3", 9,
    "What did Brené Brown mean when she wrote: 'We cannot selectively numb emotion. If we numb the dark, we also numb the light'?",
    "What is the systemic cost of chronic emotional numbing?",
    [
      "When we reach for alcohol, screens, or shopping to numb pain or sadness, we simultaneously dull our biological capacity to feel joy, love, and gratitude.",
      "Numbing only affects negative feelings while leaving joy 100% intact.",
      "Numbing is the most efficient way to achieve lasting enlightenment.",
      "You should never feel any pain under any circumstances.",
    ],
    0,
    "Facing the full range of human sorrow protects the sensitivity of your heart to experience authentic joy and deep love."
  ),

  // Point 4: Decoupling impulse from action in high-stakes negotiations.
  q(
    "9-action-4", 9,
    "The opposing counsel or negotiator makes an insultingly low counter-offer designed to rattle your composure.",
    "What would you do next?",
    [
      "Feel the surge of indignation, let it sit quietly in your chest, maintain calm eye contact, and reply: 'That proposal doesn't reflect the asset value. Here are our numbers.'",
      "Get up, flip the conference table over, and storm out shouting insults.",
      "Cave in and accept the low offer just to stop feeling the tension.",
      "Insult their professional credentials in front of their client.",
    ],
    0,
    "Holding the insult without flinching neutralizes their psychological tactic and keeps negotiation power firmly in your hands."
  ),
  q(
    "9-understanding-4", 9,
    "In game theory and tactical negotiation, why does showing emotional reactivity surrender leverage to the other side?",
    "What does emotional reactivity signal to an opponent?",
    [
      "It reveals your pressure points and triggers, signaling that you can be manipulated into making irrational, hasty concessions.",
      "It proves to the opponent that you are an intimidating genius.",
      "Reactivity makes opposing lawyers tremble in absolute terror.",
      "Leverage is only determined by whoever yells the loudest.",
    ],
    0,
    "Emotional unflappability is supreme tactical leverage; it renders provocative manipulation attempts completely impotent."
  ),

  // Point 5: Experiencing fear without letting it dictate your boundaries.
  q(
    "9-action-5", 9,
    "You need to set a boundary with a dominant, intimidating relative, and your knees are shaking with fear as you prepare to speak.",
    "What would you do next?",
    [
      "Acknowledge the fear ('My body is trembling and that is okay'), take a deep breath, and deliver your boundary clearly anyway.",
      "Let the fear convince you that speaking up is impossible, and remain silent and compliant.",
      "Attack them pre-emptively with screaming to compensate for your fear.",
      "Faint on purpose to escape the situation.",
    ],
    0,
    "True courage is not the absence of fear; it is recognizing fear fully and choosing to stand in your integrity regardless."
  ),
  q(
    "9-understanding-5", 9,
    "Why is waiting for fear to disappear before taking brave action a lifelong developmental trap?",
    "What is the paradox of courage and fear?",
    [
      "Fear naturally accompanies any meaningful expansion into unfamiliar territory; waiting for zero fear guarantees lifelong paralysis.",
      "Brave people have a genetic mutation that removes all fear from their DNA.",
      "If you feel fear, it is a cosmic sign that you must never proceed.",
      "Courage means you feel 100% fearless and invincible every second.",
    ],
    0,
    "Courage is taking fear along as a passenger on the journey, while refusing to let it grab the steering wheel."
  ),

  // ==========================================
  // CHAPTER 10: Choose your next step
  // ==========================================
  // Point 1: Shifting from reactive impulse to values-aligned outcome.
  q(
    "10-action-1", 10,
    "A colleague takes credit for an idea you shared during an informal coffee chat.",
    "What would you do next?",
    [
      "Clarify your desired outcome (credit for the idea and a good working relationship), and say in the next sync: 'I'm glad you liked the idea we discussed over coffee—let's co-lead the rollout.'",
      "Publicly call them a thief in the all-hands company meeting.",
      "Say nothing, but sabotage their project silently behind the scenes.",
      "Resign from the company in protest.",
    ],
    0,
    "Focusing on the desired outcome (claiming rightful credit collaboratively) secures your visibility without toxic warfare."
  ),
  q(
    "10-understanding-1", 10,
    "Before reacting to a provocation, why is asking 'What outcome do I actually want here?' the master question of emotional intelligence?",
    "How does outcome-clarity reorient behavior?",
    [
      "It interrupts automated vindictive impulses and forces your prefrontal cortex to select behaviors that actually advance your long-term goals.",
      "It guarantees you will always get revenge on your enemies.",
      "It is a question meant only for corporate CEOs.",
      "Asking questions delays revenge, which is the only true goal.",
    ],
    0,
    "Automated reactions satisfy momentary ego; outcome-clarity secures long-term strategic success and personal peace."
  ),

  // Point 2: Choosing an action that is 100% within your locus of control.
  q(
    "10-action-2", 10,
    "An airline announces your flight is delayed by six hours, disrupting your travel plans.",
    "What would you do next?",
    [
      "Accept that the flight mechanics are outside your control, re-book a quiet workspace lounge, and catch up on reading or a favorite project.",
      "Scream at the gate agent who has zero control over aircraft maintenance.",
      "Sit on the floor in protest blocking the boarding door.",
      "Refuse to eat or drink anything for six hours to punish the airline.",
    ],
    0,
    "Redirecting energy from raging at uncontrollable delays toward constructive, enjoyable use of time preserves your peace."
  ),
  q(
    "10-understanding-2", 10,
    "In Stoic philosophy, what is the 'Dichotomy of Control' and why is it essential for emotional stability?",
    "What does the Dichotomy of Control teach?",
    [
      "Distinguish between what is up to us (our beliefs, choices, responses) and what is not (external events, other people's actions), investing energy only in the former.",
      "It means you must control every single human being around you.",
      "It teaches that you have zero control over your own choices.",
      "Stoicism means feeling no emotion and acting like a stone statue.",
    ],
    0,
    "Suffering arises when we demand that external reality obey our wishes; serenity arrives when we master our internal response."
  ),

  // Point 3: Selecting small, low-friction micro-actions.
  q(
    "10-action-3", 10,
    "You have procrastinated on a complex tax filing or project for three weeks and feel paralyzed by guilt and overwhelm.",
    "What would you do next?",
    [
      "Break the paralyzing mountain into one micro-step: 'I will open the folder and download the bank statement today, nothing more.'",
      "Promise yourself that you will work for 16 consecutive hours tonight without bathroom breaks.",
      "Declare bankruptcy to avoid filing taxes.",
      "Pretend taxes don't exist and ignore all mail.",
    ],
    0,
    "Lowering the barrier to a single 2-minute micro-action dissolves paralysis and kickstarts effortless momentum."
  ),
  q(
    "10-understanding-3", 10,
    "Why does behavioral activation (taking one small action) cure emotional overwhelm faster than thinking about it?",
    "How does action generate motivation?",
    [
      "Action precedes motivation; completing a tiny micro-task releases dopamine, which neurologically generates the energy for the next step.",
      "Motivation must always strike like lightning before you can lift a finger.",
      "Thinking about a problem for 100 hours automatically solves it.",
      "Small actions are useless and only massive leaps matter.",
    ],
    0,
    "You don't need to feel like doing something to start; taking the first tiny step creates the motivation that follows."
  ),

  // Point 4: Evaluating the unintended secondary consequences of your response.
  q(
    "10-action-4", 10,
    "You want to vent your frustration about your boss on Twitter/X to get sympathy from peers.",
    "What would you do next?",
    [
      "Pause and assess second-order consequences: 'This might feel good for 5 minutes, but it could permanently damage my career and professional trust.'",
      "Post the rant with your company's full name tagged.",
      "Create five burner accounts to harass your boss online.",
      "Post screenshots of internal company emails.",
    ],
    0,
    "Evaluating second-order consequences prevents five minutes of emotional venting from creating years of professional regret."
  ),
  q(
    "10-understanding-4", 10,
    "What is 'Second-Order Thinking' in emotional decision-making?",
    "Why is second-order thinking the mark of mature character?",
    [
      "First-order thinking asks 'How does this feel right now?'; second-order thinking asks 'And then what happens? And what are the consequences of that?'",
      "It is a psychiatric illness characterized by thinking twice.",
      "It means you must let other people make all decisions for you.",
      "Second-order thinking is only used in quantum physics.",
    ],
    0,
    "Immature minds react to first-order impulses; mature minds calculate the ripple effects across the pond of time."
  ),

  // Point 5: Celebrating conscious choices reinforces self-efficacy.
  q(
    "10-action-5", 10,
    "You successfully navigated a tense conversation without losing your temper, raising your voice, or yielding your core boundaries.",
    "What would you do next?",
    [
      "Take a moment to savor your self-command: 'I stayed grounded and true to my values under pressure, and I am proud of my growth.'",
      "Worry that you weren't aggressive enough to win total dominance.",
      "Dwell on the one sentence that wasn't 100% grammatically perfect.",
      "Immediately look for another argument to test yourself again.",
    ],
    0,
    "Consciously savoring victories in self-mastery wires the brain to repeat constructive regulation in future high-stakes moments."
  ),
  q(
    "10-understanding-5", 10,
    "How does acknowledging your own emotional self-efficacy build long-term psychological resilience?",
    "What is the internal foundation of emotional self-efficacy?",
    [
      "It builds an unshakeable internal confidence that no matter what chaos or provocation external life throws at you, you have the capacity to handle yourself with dignity.",
      "It makes you arrogant and condescending toward everyone else.",
      "Self-efficacy means you will never face another difficult problem.",
      "It is an artificial self-esteem boost with no scientific backing.",
    ],
    0,
    "When you trust your own ability to regulate and choose, the world loses its power to terrorize you."
  ),
];
