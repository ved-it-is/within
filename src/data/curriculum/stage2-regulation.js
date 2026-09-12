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
  q(
    "6-action-1", 6,
    "In a budget meeting, your neck tightens and your fists start to clench.",
    "What would you do next?",
    [
      "Recognize the tightness as anger rising — drop your shoulders and breathe before speaking.",
      "Wait to see how bad it gets before doing anything.",
      "Slam the table to release the tension.",
      "Assume it's just a posture problem and ignore it.",
    ],
    0,
    "Catching early body signals lets you de-escalate before adrenaline overrides rational thinking."
  ),
  q(
    "6-understanding-1", 6,
    "You felt irritated in a meeting but caught it early and stayed calm. A week later you catch it even earlier.",
    "What does earlier detection mean for regulation?",
    [
      "You're building the skill — catching it at 20% intensity is far easier than at 80%.",
      "You're becoming more anxious and sensitive over time.",
      "Catching it earlier just means you'll have more feelings to manage.",
      "Early detection doesn't matter — what counts is what you do at peak intensity.",
    ],
    0,
    "Intervening at the first spark takes minimal effort; trying to manage a full blaze is nearly impossible."
  ),
  q(
    "6-action-2", 6,
    "Family inheritance talks always make you defensive. You have one in an hour.",
    "What would you do next?",
    [
      "Set an intention to stay grounded and plan a phrase to use if it heats up.",
      "Go in cold — overthinking it will make you more anxious.",
      "Start the call by addressing the tension immediately.",
      "Reschedule it indefinitely to avoid the discomfort.",
    ],
    0,
    "Knowing your triggers lets you deploy a strategy before the emotion hijacks your choices."
  ),
  q(
    "6-understanding-2", 6,
    "A specific colleague's tone instantly puts you on edge, even in casual conversations.",
    "What most likely explains this?",
    [
      "Their tone matches a past experience that felt threatening — it's a conditioned response.",
      "You're simply incompatible with them and should avoid them.",
      "You're being overly sensitive and need to toughen up.",
      "Tone of voice has no real emotional effect on people.",
    ],
    0,
    "Triggers are historical shortcuts — recognizing them separates the past from the present moment."
  ),
  q(
    "6-action-3", 6,
    "You're exhausted, hungry, and stuck on a noisy crowded train. You want to snap at a stranger.",
    "What would you do next?",
    [
      "Notice that depletion is driving the urge — put in headphones and focus on breathing.",
      "Say something to the stranger — you've earned the right to be honest.",
      "Move cars and hope the next one is quieter.",
      "Stew silently and let the irritation build.",
    ],
    0,
    "Recognizing depletion masquerading as irritation prevents you from misdirecting frustration at innocent people."
  ),
  q(
    "6-understanding-3", 6,
    "You snapped at someone you care about for a small thing after a brutal day.",
    "What was most likely really going on?",
    [
      "Hunger, exhaustion, and stress lowered your tolerance long before they said anything.",
      "They were genuinely more annoying than usual today.",
      "You have a short temper that needs to be managed with discipline.",
      "Snapping once means the relationship has a communication problem.",
    ],
    0,
    "Basic physical deficits — hunger, sleep, overload — masquerade as interpersonal grievances."
  ),
  q(
    "6-action-4", 6,
    "You're typing a reply with hard, aggressive keystrokes and your jaw is clenched.",
    "What would you do next?",
    [
      "Step away from the keyboard, get some water, and re-read the message in 10 minutes.",
      "Hit send while the clarity of anger gives you confidence.",
      "Capitalize key words to make your position unmistakable.",
      "Keep typing — getting it out will help you feel better.",
    ],
    0,
    "Hard keystrokes are a body alarm — stepping away prevents a message you'll regret."
  ),
  q(
    "6-understanding-4", 6,
    "You sent a sharp email in the heat of the moment. Hours later, you wish you hadn't.",
    "What would have helped most in the moment?",
    [
      "A deliberate pause before sending — even 10 minutes changes what feels urgent.",
      "Rereading it more carefully before sending.",
      "Writing it in a gentler tone while still angry.",
      "Asking a colleague to check it for you.",
    ],
    0,
    "Screens remove human cues that naturally de-escalate — distance from the keyboard restores judgment."
  ),
  q(
    "6-action-5", 6,
    "You got frustrated in a meeting — but you returned to calm in 3 minutes instead of stewing all day.",
    "What would you do next?",
    [
      "Notice the improvement — faster recovery is real evidence of growing regulation skill.",
      "Criticize yourself for getting frustrated at all.",
      "Wonder whether it means you no longer care enough.",
      "Assume it was a fluke and don't read into it.",
    ],
    0,
    "Emotional fitness is measured by how quickly you return to baseline, not by the absence of feelings."
  ),
  q(
    "6-understanding-5", 6,
    "Two people receive the same frustrating news. One is still upset the next day; the other moved on within hours.",
    "What most likely explains the difference?",
    [
      "One has practiced returning to baseline faster — it's a trainable skill.",
      "One cares more about the outcome than the other.",
      "Recovery speed is genetic and fixed at birth.",
      "The one who moved on was probably suppressing their feelings.",
    ],
    0,
    "Recovery time is trainable — the goal is not to stop feeling, but to return to calm more quickly."
  ),

  // ==========================================
  // CHAPTER 7: Pause before you respond
  // ==========================================
  q(
    "7-action-1", 7,
    "A colleague makes a snide remark right at the end of your team presentation.",
    "What would you do next?",
    [
      "Breathe slowly, count to ten, and let the first wave of anger pass before deciding what to say.",
      "Fire back with a quick, sharp reply before they expect it.",
      "Burst into tears and leave the room.",
      "Call them out loudly in front of the team.",
    ],
    0,
    "A 90-second pause flushes the initial adrenaline surge and lets rational thinking return."
  ),
  q(
    "7-understanding-1", 7,
    "You feel furious the moment something happens — but 90 seconds later it feels less urgent.",
    "Why does this happen?",
    [
      "The initial biochemical surge dissipates — what lingers after is mostly mental storytelling.",
      "You simply care less about the issue than you thought.",
      "Your anger was irrational and your body self-corrects.",
      "The 90 seconds proves the feeling wasn't real.",
    ],
    0,
    "If you breathe through the initial wave without feeding it new thoughts, the body naturally calms."
  ),
  q(
    "7-action-2", 7,
    "A difficult family member sends a message that instantly triggers defensiveness.",
    "What would you do next?",
    [
      "Put the phone down, give yourself two hours, and read it again with a steadier mind.",
      "Reply immediately — a fast response shows you won't be pushed around.",
      "Call them right away to address it before it festers.",
      "Send a short reply just to acknowledge you saw it.",
    ],
    0,
    "Physical distance from the stimulus restores your emotional sovereignty before you respond."
  ),
  q(
    "7-understanding-2", 7,
    "You're being pressured to respond immediately to a difficult situation.",
    "What's the most useful thing to remember?",
    [
      "Between the pressure and your response, there is a space — and that space is your power.",
      "Hesitation looks weak — fast responses signal that you're in control.",
      "The urgency is real — delays make conflict worse.",
      "Your first instinct is usually the most honest and should be trusted.",
    ],
    0,
    "Human freedom lives in that space between what happens to you and what you choose to do."
  ),
  q(
    "7-action-3", 7,
    "A salesperson presses you to sign a contract on the phone right now.",
    "What would you do next?",
    [
      "Say calmly: 'I review all agreements overnight. I'll get back to you by tomorrow at 2 PM.'",
      "Cave in to avoid the pressure and sign — you can cancel later.",
      "Hang up immediately without explaining.",
      "Ask them to email it and then avoid opening the email.",
    ],
    0,
    "A pre-decided delay policy removes the need to decide under emotional pressure in the moment."
  ),
  q(
    "7-understanding-3", 7,
    "You have a rule: never agree to anything significant in the same conversation it's proposed.",
    "Why does this kind of pre-commitment work so well?",
    [
      "It removes the cognitive load of resisting pressure in real-time by making it a neutral policy.",
      "It buys time to find reasons to say yes.",
      "It keeps others from making requests of you.",
      "It works because the other person will eventually give up.",
    ],
    0,
    "Pre-commitment shifts the boundary onto a neutral rule, removing the emotional pressure from the moment."
  ),
  q(
    "7-action-4", 7,
    "You're about to go on stage and your heart is hammering hard.",
    "What would you do next?",
    [
      "Plant your feet, lengthen your exhale, and reframe the pounding as energy for the performance.",
      "Drink something strong to take the edge off.",
      "Ask if someone else can go first while you compose yourself.",
      "Breathe faster to match the nervous energy and use it.",
    ],
    0,
    "Reframing physical arousal as performance energy works with the body instead of fighting it."
  ),
  q(
    "7-understanding-4", 7,
    "You've tried telling yourself 'calm down' before a performance — it never works.",
    "What approach actually works better?",
    [
      "Reframing it as excitement — both states feel similar, so the shift is small and real.",
      "Suppressing the physical sensations through controlled breathing.",
      "Accepting that you'll always be nervous and learning to live with it.",
      "Rehearsing more so you have nothing to be anxious about.",
    ],
    0,
    "Anxiety and excitement are physiologically similar — reframing is a smaller, more achievable shift."
  ),
  q(
    "7-action-5", 7,
    "You're on day 45 of a health goal and feel a strong urge to quit after a hard day.",
    "What would you do next?",
    [
      "Tell yourself: 'I don't have to decide forever — I'll wait 15 minutes and drink some water first.'",
      "Give yourself a break — you've come far enough to earn one.",
      "Reason through why the goal still matters to reset your motivation.",
      "Text a friend for accountability right now.",
    ],
    0,
    "A 15-minute delay lets the neurochemical peak of the craving pass without a permanent battle."
  ),
  q(
    "7-understanding-5", 7,
    "You know exercise is good for you but skip it whenever you feel tired or unmotivated.",
    "What's the most useful insight about this pattern?",
    [
      "The brain over-values immediate comfort and discounts future benefit — pausing interrupts that.",
      "You genuinely need rest more than exercise on those days.",
      "Motivation must come first — forcing exercise without it doesn't help.",
      "Tiredness is your body's way of protecting you from overexertion.",
    ],
    0,
    "A deliberate pause gives your future self an equal vote against the loud demands of the present moment."
  ),

  // ==========================================
  // CHAPTER 8: Find what helps you settle
  // ==========================================
  q(
    "8-action-1", 8,
    "Four urgent work pings arrive simultaneously. You feel scattered and panicky.",
    "What would you do next?",
    [
      "Two quick inhales through the nose, then a long slow exhale through the mouth — twice.",
      "Open all four messages at once and start replying rapidly.",
      "Close everything and come back to it later when it feels less urgent.",
      "Hold your breath until the anxious feeling passes.",
    ],
    0,
    "A double inhale followed by a long exhale rapidly offloads CO2 and triggers the calm response."
  ),
  q(
    "8-understanding-1", 8,
    "You notice a slow, long exhale calms you faster than a deep inhale.",
    "Why does the exhale specifically slow things down?",
    [
      "The exhale signals the vagus nerve to slow the heart — it's a built-in brake.",
      "Exhaling reduces oxygen, which naturally sedates the nervous system.",
      "The inhale energizes and the exhale cancels it out.",
      "Both directions of breathing have the same calming effect.",
    ],
    0,
    "Your breath is the only autonomic process you can consciously steer to slow your heart rate."
  ),
  q(
    "8-action-2", 8,
    "Your mind is looping through worst-case scenarios about a performance review tomorrow.",
    "What would you do next?",
    [
      "Ground yourself: name 5 things you can see, 4 you can touch, 3 you can hear, right now.",
      "Think the scenarios through fully to prepare for every possibility.",
      "Text a friend to talk through your worries.",
      "Distract yourself with something entertaining until you fall asleep.",
    ],
    0,
    "Sensory grounding pulls attention into the present, interrupting the abstract worry circuit."
  ),
  q(
    "8-understanding-2", 8,
    "You focus on the physical objects in the room and your spiraling thoughts slow down.",
    "Why does focusing on the physical world help?",
    [
      "Anxious spiraling needs abstract thinking — sensory focus uses a different brain circuit.",
      "Physical focus works because it distracts the mind from real concerns.",
      "Naming objects triggers a calming memory response.",
      "It's a form of positive thinking that reframes the situation.",
    ],
    0,
    "You can't simultaneously be lost in an imaginary future and fully present in your senses."
  ),
  q(
    "8-action-3", 8,
    "You're on the verge of tears and panic after an overwhelming conversation.",
    "What would you do next?",
    [
      "Splash cold water on your face — hold it there for a few seconds and breathe.",
      "Find somewhere private to cry until it passes naturally.",
      "Call the person back immediately to resolve it.",
      "Lie down and wait for the feeling to go away on its own.",
    ],
    0,
    "Cold water on the face activates the dive reflex — an ancient circuit that rapidly quiets acute panic."
  ),
  q(
    "8-understanding-3", 8,
    "A colleague splashes cold water on their face after a tense situation. They say it always helps.",
    "What's the most accurate explanation of why this works?",
    [
      "Cold water triggers a reflex that signals the vagus nerve to slow the heart immediately.",
      "The shock of cold distracts the mind from whatever caused the upset.",
      "Water on the face activates a calming memory from childhood.",
      "Physical sensations always override emotional ones — any sensation works.",
    ],
    0,
    "Cold facial stimulation activates a preserved mammalian reflex that physically brakes acute distress."
  ),
  q(
    "8-action-4", 8,
    "After a frustrating email, your legs are jittery and you can't sit still.",
    "What would you do next?",
    [
      "Walk briskly for 10–15 minutes, letting your arms swing and focusing on your stride.",
      "Channel the energy into a fast, decisive reply.",
      "Sit still and work through the frustration mentally.",
      "Do some deep breathing at your desk until the energy dissipates.",
    ],
    0,
    "Rhythmic movement metabolizes stress hormones and engages visual flow to quiet threat centers."
  ),
  q(
    "8-understanding-4", 8,
    "You always feel better after a walk — even when you didn't want to go.",
    "What best explains this?",
    [
      "Moving forward through space triggers eye movement that suppresses anxiety in the brain.",
      "Exercise releases endorphins that override whatever caused the stress.",
      "Physical exertion tires the body enough that stress feels less urgent.",
      "Walking gives you time to think through the problem and find a solution.",
    ],
    0,
    "Forward motion through space uses visual flow to naturally down-regulate fear circuits."
  ),
  q(
    "8-action-5", 8,
    "The breathing exercise that usually calms you isn't working today.",
    "What would you do next?",
    [
      "Switch tools — try movement, cold water, or music instead of forcing it.",
      "Do more rounds until it works — consistency is the point.",
      "Accept that today is a bad day and wait it out.",
      "Question whether you've been doing the breathing correctly all along.",
    ],
    0,
    "Different states have different needs — flexibility in your toolkit is the mark of real mastery."
  ),
  q(
    "8-understanding-5", 8,
    "You have one go-to calming technique but it fails you in certain situations.",
    "What's the most useful response to this?",
    [
      "Build a varied toolkit — some states need discharge through movement, others need stillness.",
      "Practice the technique more until it works in every situation.",
      "Recognize that some emotional states just can't be regulated.",
      "Find a better single technique that works universally.",
    ],
    0,
    "Emotional mastery meets the specific texture of the moment with the right tool, not always the same one."
  ),

  // ==========================================
  // CHAPTER 9: Feel it without acting on it
  // ==========================================
  q(
    "9-action-1", 9,
    "A peer gets the high-profile assignment you wanted. Jealousy hits immediately.",
    "What would you do next?",
    [
      "Sit with the feeling — observe it without acting on it and let it pass naturally.",
      "Post something dismissive about their qualifications online.",
      "Swallow it, pretend you're fine, and let the resentment build.",
      "Go to your manager immediately to advocate for yourself.",
    ],
    0,
    "Observing an emotion without converting it to action lets it pass cleanly without damage."
  ),
  q(
    "9-understanding-1", 9,
    "You feel a strong urge to react — but you wait, and the intensity fades on its own.",
    "What does this tell you about emotions?",
    [
      "Emotions are waves — they peak and subside if you don't act on them or suppress them.",
      "The urge fading means you didn't actually care that much.",
      "Waiting made the situation worse by letting it simmer.",
      "Emotions need to be expressed before they go away.",
    ],
    0,
    "Urges reach a peak and subside naturally when observed without resistance or impulsive feeding."
  ),
  q(
    "9-action-2", 9,
    "Your child spills juice on a clean carpet. You feel an instant flash of rage.",
    "What would you do next?",
    [
      "Acknowledge the flash internally, hold your voice steady, and step back five seconds.",
      "Express the frustration calmly so they learn that actions have consequences.",
      "Ask them to clean it up immediately — it helps channel the energy constructively.",
      "Take a long breath and remind yourself it's just juice.",
    ],
    0,
    "Feeling rage is involuntary — choosing your outward behavior is where self-mastery lives."
  ),
  q(
    "9-understanding-2", 9,
    "Someone tells you that expressing anger is always healthier than holding it in.",
    "How accurate is that?",
    [
      "Not very — research shows venting aggressively reinforces anger rather than releasing it.",
      "Completely accurate — suppressed emotions always cause physical harm.",
      "True in personal relationships, but not at work.",
      "Accurate for immediate anger, but not for long-term patterns.",
    ],
    0,
    "Aggressive venting rehearses rage — holding the feeling quietly while cooling down deconstructs the circuit."
  ),
  q(
    "9-action-3", 9,
    "You come home after a painful breakup to an empty apartment feeling crushed.",
    "What would you do next?",
    [
      "Let yourself feel it — wrap up, cry if you need to, and let the sorrow move through you.",
      "Open a dating app to start meeting people as soon as possible.",
      "Pour a drink and put on something distracting.",
      "Call a friend and talk through every detail of what happened.",
    ],
    0,
    "Letting sorrow move through without numbing it prevents compensatory habits from taking root."
  ),
  q(
    "9-understanding-3", 9,
    "You've been reaching for your phone every time you feel sad or anxious.",
    "What's the risk of this pattern over time?",
    [
      "Numbing one emotion dulls your sensitivity to all emotions — including joy and connection.",
      "The pattern is adaptive — emotional regulation through distraction is healthy.",
      "Phones only numb surface-level emotions, leaving deeper ones intact.",
      "The risk is only if you spend more than two hours a day on your phone.",
    ],
    0,
    "Numbing the dark also numbs the light — you can't selectively mute just the hard feelings."
  ),
  q(
    "9-action-4", 9,
    "A negotiator makes an insulting low offer, clearly designed to rattle you.",
    "What would you do next?",
    [
      "Feel the surge, stay calm, hold eye contact, and respond with your actual position.",
      "Match their aggression — show them you won't be intimidated.",
      "Accept a middle-ground number to end the discomfort.",
      "Ask for a break to compose yourself before continuing.",
    ],
    0,
    "Holding the insult without flinching neutralizes the tactic and keeps negotiating power with you."
  ),
  q(
    "9-understanding-4", 9,
    "You gave away more in a negotiation than you planned because the pressure felt unbearable.",
    "What would have helped most?",
    [
      "Sitting with the discomfort instead of acting on it — discomfort isn't an emergency.",
      "Preparing better arguments so you felt more confident.",
      "Walking away earlier before the pressure escalated.",
      "Bringing someone else to the negotiation for support.",
    ],
    0,
    "Emotional reactivity signals your pressure points — staying unreadable removes the other side's leverage."
  ),
  q(
    "9-action-5", 9,
    "You need to set a firm boundary with a dominant family member. Your knees are shaking.",
    "What would you do next?",
    [
      "Acknowledge the fear, take a breath, and say what needs to be said anyway.",
      "Wait until you feel calm and ready before addressing it.",
      "Send a text or email instead so you don't have to face the discomfort.",
      "Have someone else raise it on your behalf.",
    ],
    0,
    "Courage is not the absence of fear — it's acting in alignment with your values while fear is present."
  ),
  q(
    "9-understanding-5", 9,
    "You keep telling yourself 'I'll speak up when I feel ready.' But ready never comes.",
    "What's the most accurate insight about this?",
    [
      "Waiting for fear to disappear before acting creates permanent paralysis — fear doesn't leave first.",
      "You need more preparation before the conversation is safe to have.",
      "Ready will come — you just haven't waited long enough yet.",
      "You should question whether the boundary is truly necessary.",
    ],
    0,
    "Fear accompanies every meaningful expansion — it doesn't leave before you act, it leaves because you do."
  ),

  // ==========================================
  // CHAPTER 10: Choose your next step
  // ==========================================
  q(
    "10-action-1", 10,
    "A colleague presents an idea in the team meeting that you know you shared with them first.",
    "What would you do next?",
    [
      "Clarify your goal — credit and a good relationship — then say 'I'm glad you brought up what we discussed. Let's co-lead this.'",
      "Call them out publicly in the meeting right now.",
      "Say nothing but stop sharing ideas with them in future.",
      "Bring it up with your manager after the meeting.",
    ],
    0,
    "Knowing your desired outcome steers you away from impulse and toward what actually serves you."
  ),
  q(
    "10-understanding-1", 10,
    "Before you respond to a frustrating situation, you ask: 'What do I actually want here?'",
    "Why does this question matter so much?",
    [
      "It interrupts automated vindictive impulses and points behavior toward what you really need.",
      "It slows you down — by the time you've thought, the moment has passed.",
      "It helps you find the most persuasive argument.",
      "It's a technique to avoid conflict rather than engage with it.",
    ],
    0,
    "Reactive answers satisfy the ego in the moment; outcome-clarity secures long-term success and peace."
  ),
  q(
    "10-action-2", 10,
    "Your flight is delayed six hours. Nothing you do will change this.",
    "What would you do next?",
    [
      "Accept what you can't control and use the time productively — read, work, rest.",
      "Find the gate agent and explain the full impact of this delay on your plans.",
      "Call the airline and push hard for compensation or a rebooking.",
      "Sit by the gate so you're first to know of any change.",
    ],
    0,
    "Redirecting energy from the uncontrollable toward what you can use preserves your peace and time."
  ),
  q(
    "10-understanding-2", 10,
    "You're furious about something completely outside your control.",
    "What's the most useful thing to remember in that moment?",
    [
      "Energy spent on what you can't control leaves nothing for what you actually can.",
      "Your frustration is valid and the situation should be challenged.",
      "Strong reactions sometimes move situations that seem unmovable.",
      "Acceptance now means you're okay with the outcome.",
    ],
    0,
    "Suffering grows when you demand external reality obey your wishes — serenity comes from mastering your response."
  ),
  q(
    "10-action-3", 10,
    "You've procrastinated on a complex project for weeks and feel paralyzed by the size of it.",
    "What would you do next?",
    [
      "Do just one micro-step today — open the file, read one section, or write one sentence.",
      "Block a full day to get it all done at once and stop postponing.",
      "Make a detailed plan first so you know exactly where to start.",
      "Tell yourself you work better under pressure and wait until the deadline.",
    ],
    0,
    "A single micro-action dissolves paralysis — action generates motivation, not the other way around."
  ),
  q(
    "10-understanding-3", 10,
    "You don't feel motivated to start something important, so you wait until you do.",
    "What's wrong with this approach?",
    [
      "Motivation follows action, not the other way around — waiting for it first usually means never starting.",
      "Motivation-first is correct — forced action without motivation leads to burnout.",
      "Waiting shows self-awareness about your optimal working conditions.",
      "The approach is fine if you set a clear deadline for when you'll start.",
    ],
    0,
    "Completing even a tiny step releases dopamine — that energy creates the motivation to continue."
  ),
  q(
    "10-action-4", 10,
    "You want to post something sharp about your boss on social media to vent.",
    "What would you do next?",
    [
      "Pause and ask: 'How will this look in six months?' — then vent in a private journal instead.",
      "Post it — it's your personal account and your honest opinion.",
      "Post it anonymously so there's no professional risk.",
      "Ask a trusted friend to read it before you post.",
    ],
    0,
    "Second-order thinking — asking 'and then what?' — prevents five minutes of venting from causing years of regret."
  ),
  q(
    "10-understanding-4", 10,
    "You made a decision that felt right in the moment but created bigger problems a week later.",
    "What kind of thinking would have helped most?",
    [
      "Asking 'what happens next?' and 'what are the consequences of that?' before acting.",
      "Slowing down the decision-making process by involving more people.",
      "Trusting your gut less and using more data next time.",
      "Reviewing similar past decisions to see if they worked out.",
    ],
    0,
    "First-order thinking asks 'how does this feel?' — second-order asks 'what follows from that?'"
  ),
  q(
    "10-action-5", 10,
    "You handled a tense conversation without losing your temper or backing down on your values.",
    "What would you do next?",
    [
      "Acknowledge it — 'I stayed grounded under pressure. That's real growth.'",
      "Immediately look for where you could have done better.",
      "Move on quickly — dwelling on it might make you overconfident.",
      "Tell someone about it so the moment gets the recognition it deserves.",
    ],
    0,
    "Savoring moments of self-mastery wires the brain to repeat that regulated behavior next time."
  ),
  q(
    "10-understanding-5", 10,
    "You handled a hard situation well, but didn't stop to acknowledge it. It's already forgotten.",
    "What did you miss by moving on so quickly?",
    [
      "An opportunity to reinforce the neural pattern that made the success possible.",
      "Nothing — reflecting on past wins is just ego.",
      "The chance to thank others involved in the outcome.",
      "A moment to analyze what you could improve for next time.",
    ],
    0,
    "Acknowledging your own self-efficacy builds the internal confidence that no external chaos can shake."
  ),
];
