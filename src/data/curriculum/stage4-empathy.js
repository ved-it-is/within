// Stage 4: Empathy (Chapters 16 - 20)
// Themes: Active Listening, Emotional Cues, Validation, Supportive Agency, Empathetic Boundaries

function q(id, chapterId, situation, prompt, choices, correctIndex, explanation, skillIds = ["empathy"]) {
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

export const stage4Questions = [
  // ==========================================
  // CHAPTER 16: Listen before preparing your reply
  // ==========================================
  q(
    "16-action-1", 16,
    "A team member comes to you visibly stressed about their workload.",
    "What would you do next?",
    [
      "Put your phone face-down, give them full attention, and let them finish before responding.",
      "Interrupt to explain that your own calendar is even more packed right now.",
      "Start noting tasks while they speak so you can solve it faster.",
      "Tell them that feeling overwhelmed is part of any demanding job.",
    ],
    0,
    "Full presence lets you understand the whole picture before jumping to solutions."
  ),
  q(
    "16-understanding-1", 16,
    "While a colleague vents about a project, you're already composing your reply in your head.",
    "What's the cost of this?",
    [
      "You miss emotional tone and key details because your attention is elsewhere.",
      "It means you're a fast thinker — usually an advantage.",
      "You can listen and plan your response at the same time without losing much.",
      "It's unavoidable — everyone does this in conversations.",
    ],
    0,
    "Rehearsing a rebuttal while someone speaks turns dialogue into competitive waiting-to-speak."
  ),
  q(
    "16-action-2", 16,
    "A customer calls furious that a software bug disrupted their business operations.",
    "What would you do next?",
    [
      "Let them finish, acknowledge the disruption clearly, then investigate the fix.",
      "Interrupt to clarify that the terms of service limit your liability.",
      "Ask them to submit a ticket so you can handle it through proper channels.",
      "Point out that other customers aren't experiencing this issue.",
    ],
    0,
    "Letting an upset customer feel heard dissolves tension before moving into problem-solving."
  ),
  q(
    "16-understanding-2", 16,
    "You paraphrase what a colleague just said before giving your response. They visibly relax.",
    "Why did that help so much?",
    [
      "It showed you were actually listening — and gave them a chance to correct misunderstandings.",
      "Repeating things back always makes people feel complimented.",
      "It slowed the conversation down enough for you to think of a better answer.",
      "They were relieved you agreed with them.",
    ],
    0,
    "Reflective listening confirms understanding and prevents two people from arguing past each other."
  ),
  q(
    "16-action-3", 16,
    "Your partner is sharing an emotional story from their day while you're on your tablet.",
    "What would you do next?",
    [
      "Put the tablet face-down, turn toward them, and make eye contact.",
      "Keep reading — you can listen perfectly well while multitasking.",
      "Respond with 'mmhm' regularly so they know you're tracking.",
      "Ask them to tell you after you finish what you're reading.",
    ],
    0,
    "Setting down screens and orienting your body signals respect and builds emotional safety."
  ),
  q(
    "16-understanding-3", 16,
    "You nodded along during a friend's story but were thinking about your own day the whole time.",
    "What was the likely effect on them?",
    [
      "They probably sensed your absence — it erodes trust even when nothing's said.",
      "The nodding covered it — they would have felt heard.",
      "It's only a problem if they ask you questions you can't answer.",
      "Most people don't notice whether you're truly present or not.",
    ],
    0,
    "People have acute radar for inauthentic attention — true presence can't be faked with mechanical nods."
  ),
  q(
    "16-action-4", 16,
    "A friend is venting about a fight with their sibling — a difficult, emotional story.",
    "What would you do next?",
    [
      "Listen, validate how draining it must feel, then ask: 'Do you want to talk it through or just vent?'",
      "Give them a step-by-step plan for what to text their sibling tonight.",
      "Help them see where they went wrong so they can fix it.",
      "Tell them sibling conflicts are usually short-lived and not worth stressing over.",
    ],
    0,
    "Holding space for emotional decompression before advice honors what they actually need right now."
  ),
  q(
    "16-understanding-4", 16,
    "When a friend is upset, your instinct is to jump in with solutions immediately.",
    "What might be driving that instinct?",
    [
      "Their distress makes you uncomfortable — fixing it quickly relieves your own discomfort.",
      "You're a problem-solver and it's genuinely what most people want.",
      "Solutions are always more helpful than emotional validation.",
      "Acting fast shows you care more than just listening would.",
    ],
    0,
    "True empathy can sit with discomfort without rushing to put a superficial fix on it."
  ),
  q(
    "16-action-5", 16,
    "A colleague reveals they're struggling with grief after losing a parent.",
    "What would you do next?",
    [
      "Pause, hold space for a moment, and say: 'I'm so sorry. Thank you for trusting me with that.'",
      "Share a story about a pet loss you went through to show you understand.",
      "Say: 'At least they had a long life — that's something to hold on to.'",
      "Change the subject to something uplifting to help them feel better.",
    ],
    0,
    "A compassionate pause and sincere acknowledgment honors grief far more than forced comfort."
  ),
  q(
    "16-understanding-5", 16,
    "You sit quietly with a friend who's just received very hard news. No words feel right.",
    "What does your silent presence communicate?",
    [
      "That their pain doesn't need to be hidden or rushed — it's safe to just be here.",
      "That you're not sure what to say and probably should have spoken up.",
      "Very little — words are what actually comfort people in hard moments.",
      "That you're uncomfortable and would rather leave.",
    ],
    0,
    "Quiet, grounded presence offers a sanctuary where deep emotions can breathe without the pressure of words."
  ),

  // ==========================================
  // CHAPTER 17: Notice clues, then check
  // ==========================================
  q(
    "17-action-1", 17,
    "An outspoken engineer goes completely silent in a sprint review, arms crossed, eyes down.",
    "What would you do next?",
    [
      "Check in privately after: 'You seemed quieter than usual today — is everything okay?'",
      "Call them out in the meeting: 'Why are you so quiet right now?'",
      "Assume they're disengaged and note it in their performance feedback.",
      "Ignore it — body language doesn't reliably tell you much.",
    ],
    0,
    "Noticing the shift and following up privately creates safety without public embarrassment."
  ),
  q(
    "17-understanding-1", 17,
    "A colleague has their arms crossed and seems tense. You're certain they're upset with you.",
    "What's the most accurate way to respond to this?",
    [
      "Treat the body language as a clue to explore — not a fact that's already confirmed.",
      "Trust your read — crossed arms almost always signal defensiveness or upset.",
      "Ignore it since you can't know for sure what body language means.",
      "Address it directly: 'You're clearly frustrated with me right now.'",
    ],
    0,
    "Great emotional observers notice cues keenly but hold conclusions lightly until confirmed by the person."
  ),
  q(
    "17-action-2", 17,
    "Your friend replies to your cheerful text with a short, cold 'Fine.'",
    "What would you do next?",
    [
      "Text back: 'That sounded a bit short — rough day? No pressure, sending love either way.'",
      "Send back a frustrated message asking why they're being passive-aggressive.",
      "Panic and trace back through recent conversations for what you did wrong.",
      "Leave it alone — if something's wrong they'll bring it up.",
    ],
    0,
    "A low-pressure, caring check-in acknowledges the shift without assumptions or drama."
  ),
  q(
    "17-understanding-2", 17,
    "You say: 'You're clearly mad at me.' Your friend shuts down immediately.",
    "What would have worked better?",
    [
      "'I noticed you seemed a bit off earlier — how are you feeling?' invites sharing instead of defending.",
      "Being more direct — if they're upset, calling it out is more honest.",
      "Asking multiple times until they admit what's wrong.",
      "Nothing — if they're upset, they'll tell you when they're ready.",
    ],
    0,
    "Tentative observations invite open conversation; mind-reading declarations force people into corners."
  ),
  q(
    "17-action-3", 17,
    "A colleague is short and impatient with questions on the afternoon of a major product release.",
    "What would you do next?",
    [
      "Factor in the pressure they're under, keep interactions brief, and stay supportive.",
      "File a complaint about their tone — professional norms matter regardless of stress.",
      "Call it out publicly so they know their behavior was noticed.",
      "Match their energy and be short back — they'll adjust.",
    ],
    0,
    "Contextualizing stress helps you depersonalize temporary irritability and support team stability."
  ),
  q(
    "17-understanding-3", 17,
    "A usually patient friend is snappy during a week when everything in their life is going wrong.",
    "What's the most accurate way to understand this?",
    [
      "High stress depletes the brain's capacity for social grace — it's not a character flaw.",
      "Stress reveals a person's true personality — this is who they really are.",
      "Even in hard times, people can be patient if they choose to be.",
      "They're taking out their frustration on you, which is worth addressing.",
    ],
    0,
    "Stress depletes self-regulation reserves — compassionate patience with imperfect people matters most."
  ),
  q(
    "17-action-4", 17,
    "You ask a coworker if they're okay. They say: 'I'm fine, I just want to work right now.'",
    "What would you do next?",
    [
      "Say: 'Understood — I'm here if you want to chat later.' and step back.",
      "Press them: 'Come on, I can tell something's wrong — just tell me.'",
      "Check in again an hour later so they know you're thinking of them.",
      "Feel hurt they didn't open up — you were just trying to help.",
    ],
    0,
    "Respecting their boundary keeps you a safe person to turn to when they're actually ready."
  ),
  q(
    "17-understanding-4", 17,
    "You push a friend to open up about something painful and they pull away instead.",
    "What went wrong?",
    [
      "Vulnerability requires safety and control — forcing it makes people withdraw further.",
      "They weren't ready — you should try again later when the timing is better.",
      "You probably said something that offended them.",
      "Some people just don't like talking about their feelings.",
    ],
    0,
    "Empathy never demands disclosure — it offers a gentle presence and waits at the threshold."
  ),
  q(
    "17-action-5", 17,
    "During a negotiation, the other party's jaw tightens visibly after you name a price.",
    "What would you do next?",
    [
      "Pause: 'I noticed a hesitation there — let's explore how that landed before we move on.'",
      "Speed up and push toward a signature before they can voice objections.",
      "Tell them the price is non-negotiable and ask if they're in or out.",
      "Pretend you didn't notice and wait for them to raise any concerns.",
    ],
    0,
    "Catching and naming the micro-cue proactively builds trust and leads to sustainable agreements."
  ),
  q(
    "17-understanding-5", 17,
    "You ignored subtle signs of discomfort during a meeting and pushed ahead. The deal fell apart later.",
    "What most likely happened?",
    [
      "Unaddressed discomfort turned into false compliance that collapsed under later pressure.",
      "The deal fell apart for unrelated reasons — body language rarely predicts outcomes.",
      "They should have spoken up — you can't be responsible for what they didn't say.",
      "You moved too fast on timing, not on the emotional signals themselves.",
    ],
    0,
    "Ignoring social cues produces hollow compliance that breaks down at the first real pressure point."
  ),

  // ==========================================
  // CHAPTER 18: Acknowledge a feeling
  // ==========================================
  q(
    "18-action-1", 18,
    "Your friend says angrily: 'Everyone at work is out to get me!'",
    "What would you do next?",
    [
      "Say: 'You're feeling completely alienated right now — that must be exhausting.'",
      "Tell them that's not logical and they're probably reading it wrong.",
      "Agree and help them come up with a plan to fight back.",
      "Suggest they might be overreacting and need some perspective.",
    ],
    0,
    "Validating the emotional core offers real comfort without reinforcing an inaccurate narrative."
  ),
  q(
    "18-understanding-1", 18,
    "A friend claims their whole team hates them. You think that's an exaggeration.",
    "What's the most empathetic response?",
    [
      "Validate the feeling of alienation without agreeing that everyone actually hates them.",
      "Gently push back — validating a distorted view makes it worse.",
      "Ask questions to help them figure out where the belief is coming from.",
      "Agree with them for now and address the accuracy later when they're calmer.",
    ],
    0,
    "Empathy validates real human pain without ratifying inaccurate or conspiratorial narratives."
  ),
  q(
    "18-action-2", 18,
    "A coworker confides they're deeply anxious about upcoming company layoffs.",
    "What would you do next?",
    [
      "Say: 'That uncertainty is really heavy. It makes complete sense you feel anxious right now.'",
      "Say: 'Everything happens for a reason — you might get a great severance package!'",
      "Say: 'Try not to worry about things you can't control.'",
      "Say: 'Plenty of people have it worse — focus on what you have.'",
    ],
    0,
    "Sincere presence and validation provide real comfort; toxic positivity isolates the person."
  ),
  q(
    "18-understanding-2", 18,
    "You try to cheer up a grieving friend by pointing out silver linings. They go quiet.",
    "What likely happened?",
    [
      "Forced positivity communicated that their honest pain was unwelcome or too much to hold.",
      "They needed more time to process — the timing was just off.",
      "Silver linings are helpful long-term but not in the immediate moment.",
      "They weren't ready to feel better yet — your words were right but came too early.",
    ],
    0,
    "Platitudes shut down connection by demanding that the suffering person manage your discomfort."
  ),
  q(
    "18-action-3", 18,
    "Your teenager slams their bag down and screams that school is a prison.",
    "What would you do next?",
    [
      "Say calmly: 'Sounds like today was completely overwhelming and infuriating.'",
      "Tell them to lower their voice and not throw things in the house.",
      "Explain the importance of education and why they need to push through.",
      "Send them to their room until they can speak respectfully.",
    ],
    0,
    "Naming the emotion calmly de-escalates the nervous system far more effectively than matching their fury."
  ),
  q(
    "18-understanding-3", 18,
    "You say 'You seem really frustrated right now' to an upset colleague. They visibly relax.",
    "What happened there?",
    [
      "Naming an emotion activates the thinking brain, which helps regulate the emotional flood.",
      "They felt validated that someone finally agreed their situation was unfair.",
      "Labeling emotions tends to make people realize they're overreacting.",
      "You reflected their feeling accurately — which made them feel understood.",
    ],
    0,
    "Accurate emotional labeling shifts activity from threat circuits to higher regulatory centers."
  ),
  q(
    "18-action-4", 18,
    "A colleague tells you they failed their driving test for the third time and feel like an idiot.",
    "What would you do next?",
    [
      "Say: 'That really stings, especially after all that effort. You're definitely not an idiot.'",
      "Send them links to helpful driving instruction videos.",
      "Ask what they think they're getting wrong each time.",
      "Tell them it happens to lots of people and they'll pass next time.",
    ],
    0,
    "Acknowledging the sting and defending their dignity creates safety before any helpful next step."
  ),
  q(
    "18-understanding-4", 18,
    "You offer great advice to a friend who's upset. They seem annoyed rather than helped.",
    "What most likely went wrong?",
    [
      "They needed to feel heard first — advice before validation lands as a dismissive lecture.",
      "Your advice probably wasn't relevant to their actual situation.",
      "They weren't ready to problem-solve and needed more time before that conversation.",
      "Good advice sometimes takes time to land — they'll come back to it later.",
    ],
    0,
    "Validation is the key that opens the door to receptive problem-solving — without it, advice bounces off."
  ),
  q(
    "18-action-5", 18,
    "Your partner is terrified of turbulence. You fly every week and feel completely calm.",
    "What would you do next?",
    [
      "Hold their hand and say: 'I know this feels really scary. I'm right here with you.'",
      "Recite flight safety statistics to help them see the situation rationally.",
      "Remind them that statistically, planes are incredibly safe.",
      "Put on headphones — you can't fix their fear, so give them space.",
    ],
    0,
    "Empathy doesn't require sharing the fear — it means honoring that their fear is intensely real to them."
  ),
  q(
    "18-understanding-5", 18,
    "A colleague cries at work over something you personally wouldn't find upsetting.",
    "What's the most empathetic response to have?",
    [
      "Their nervous system and history are different from yours — their reaction makes sense for them.",
      "If you wouldn't react that way, the reaction is probably disproportionate.",
      "It's kind to help them see that their response doesn't match the situation.",
      "You can be empathetic while also letting them know they don't need to be so upset.",
    ],
    0,
    "Genuine empathy doesn't measure others' pain by your personal thresholds — different people resonate differently."
  ),

  // ==========================================
  // CHAPTER 19: Support without taking over
  // ==========================================
  q(
    "19-action-1", 19,
    "A close friend calls you in tears after being laid off from their job.",
    "What would you do next?",
    [
      "Say: 'I'm so sorry. I'm here. Do you want to vent, brainstorm, or just get dinner and not talk about it?'",
      "Rewrite their resume tonight and send it to recruiters without asking.",
      "Explain why the tech market is struggling so they have some context.",
      "Give them space for a few weeks so they don't feel embarrassed.",
    ],
    0,
    "Offering distinct modes of support empowers your friend to choose what actually helps them most."
  ),
  q(
    "19-understanding-1", 19,
    "You jump in to fix a friend's situation without being asked. They seem distant afterward.",
    "What likely happened?",
    [
      "Unsolicited rescuing can send a subtle message: 'I don't think you can handle this.'",
      "They appreciated the help but needed more time to process before engaging.",
      "They probably felt overwhelmed and weren't ready for solutions yet.",
      "Helping without being asked usually comes across well — they just need time.",
    ],
    0,
    "Rescuing without permission often serves the helper's ego while undermining the other person's dignity."
  ),
  q(
    "19-action-2", 19,
    "A coworker is sighing at their desk, visibly stuck on a spreadsheet problem.",
    "What would you do next?",
    [
      "Ask: 'Want a second pair of eyes on that, or would you prefer to troubleshoot it solo?'",
      "Grab their mouse and show them how to fix it.",
      "Mention to the team that they've been stuck for a while.",
      "Wait until they ask for help before doing anything.",
    ],
    0,
    "Asking before intervening respects autonomy while making your expertise warmly available."
  ),
  q(
    "19-understanding-2", 19,
    "You ask 'How can I best support you right now?' instead of jumping in to help.",
    "Why does that single question matter?",
    [
      "It stops you from projecting your own preferred solution onto someone with different needs.",
      "It gives them control — which usually makes people feel worse when they're already overwhelmed.",
      "It delays the help they need by making them think instead of just receiving.",
      "It shows you're willing to help but sets the expectation they need to lead.",
    ],
    0,
    "Inquiring directly replaces guesswork with precision — care lands where it's actually needed."
  ),
  q(
    "19-action-3", 19,
    "Your partner has vented about their boss for months. Today they seem exhausted, not angry.",
    "What would you do next?",
    [
      "Recognize the shift — offer quiet company and rest rather than another strategy session.",
      "Push for them to finally quit — they've been unhappy long enough.",
      "Tell them you've given this topic enough space and need a break from it.",
      "Ask what's different today and help them figure out why they're not as angry.",
    ],
    0,
    "Attuning to the shifting emotional quality lets you match your support to the actual moment."
  ),
  q(
    "19-understanding-3", 19,
    "A friend has been going through a hard time for weeks. Your support style hasn't changed.",
    "What might you be missing?",
    [
      "Emotional processing moves through phases — what helped in week one may not help in week four.",
      "If your support was helpful before, it's probably still right — keep at it.",
      "They may need professional support that you can't provide.",
      "Consistency in support is more important than adapting to each phase.",
    ],
    0,
    "Effective supporters stay attuned to evolving phases of grief and recovery, matching their presence to the moment."
  ),
  q(
    "19-action-4", 19,
    "You have a helpful idea for how a friend could handle a dispute with their landlord.",
    "What would you do next?",
    [
      "Ask: 'I have a thought about this — want to hear it, or would you rather not go into strategy?'",
      "Share the idea right away — you're trying to help and they'll appreciate it.",
      "Wait until they specifically ask before saying anything.",
      "Send them a message later with your thoughts so they can read it when they're ready.",
    ],
    0,
    "Asking permission before offering advice ensures ideas are welcomed rather than endured."
  ),
  q(
    "19-understanding-4", 19,
    "You asked if your friend wanted advice before giving it. They said yes and actually followed through.",
    "Why did asking permission make a difference?",
    [
      "When people invite advice, they're in active learning mode — not defensive mode.",
      "They trusted you more than they would a stranger, so the ask was less important than the relationship.",
      "Asking made them feel like the advice was more carefully chosen.",
      "It probably would have worked either way — they were already open to suggestions.",
    ],
    0,
    "Invited wisdom enters through an open front door — uninvited advice tries to break in through a locked window."
  ),
  q(
    "19-action-5", 19,
    "A neighbor with a newborn looks completely exhausted when you run into them.",
    "What would you do next?",
    [
      "Message them: 'Made extra lasagna — I can leave it on your porch at 5. No need to chat or answer the door.'",
      "Knock with food and a group of friends to meet the baby.",
      "Tell them sleep deprivation is temporary and they signed up for this.",
      "Offer to move in for a week to help them get organized.",
    ],
    0,
    "A specific, low-friction offer delivers real relief without adding a social obligation on top."
  ),
  q(
    "19-understanding-5", 19,
    "Why is 'porch drop-off, no need to chat' so appreciated during someone's crisis?",
    "What does this form of support get right?",
    [
      "It provides practical relief without requiring exhausted people to host or perform.",
      "It respects their privacy — they may not want anyone to see how they're coping.",
      "It removes the awkwardness of them feeling like they need to repay you.",
      "It shows you care without putting yourself in a position of getting too involved.",
    ],
    0,
    "Pure support removes burdens without adding the hidden cost of social performance."
  ),

  // ==========================================
  // CHAPTER 20: Care while keeping your boundaries
  // ==========================================
  q(
    "20-action-1", 20,
    "A friend going through a breakup calls you at 10 PM for the third hour in a row.",
    "What would you do next?",
    [
      "Say gently: 'I love you and I care. I need to sleep, but let's talk more tomorrow at lunch.'",
      "Stay on until 3 AM, resentful, and show up exhausted to work the next day.",
      "Pretend you're losing reception and quietly end the call.",
      "Tell them they've talked long enough about their ex and need to move on.",
    ],
    0,
    "Pairing deep care with an honest boundary preserves both your health and the friendship."
  ),
  q(
    "20-understanding-1", 20,
    "You always say yes to friends in need — and lately you've started resenting them.",
    "What's most likely happening?",
    [
      "Without limits, empathy curdles into resentment — boundaries keep your care sustainable.",
      "You're probably taking on too many friendships at once.",
      "Resentment means the friendship has run its natural course.",
      "You need to be more honest about whether you genuinely care about these people.",
    ],
    0,
    "Boundaries are the distance at which you can love both yourself and another person at the same time."
  ),
  q(
    "20-action-2", 20,
    "A relative asks you to babysit their three kids for an entire four-day holiday weekend.",
    "What would you do next?",
    [
      "Say: 'I can't do the full weekend, but I'd love to take them Saturday afternoon, 1–5 PM.'",
      "Agree to everything now — you'll figure out the details later.",
      "Explain that you need that time for yourself and decline.",
      "Ask what they'll do if you can't commit so you understand the stakes.",
    ],
    0,
    "Defining what you can genuinely offer provides real relief without overstepping your capacity."
  ),
  q(
    "20-understanding-2", 20,
    "You can't fulfill a big request but offer a smaller, specific alternative instead.",
    "Why is a partial offer better than just saying no?",
    [
      "It keeps the relationship warm while being honest about your real limits.",
      "It avoids the awkwardness of a flat refusal.",
      "It sets a precedent that they can always ask for part of what they need.",
      "It's easier to say than explaining why you can't do the full thing.",
    ],
    0,
    "Bounded offers replace the sting of total rejection with a warm, realistic contribution."
  ),
  q(
    "20-action-3", 20,
    "A colleague asks you to review their 50-page proposal while you're on a tight deadline.",
    "What would you do next?",
    [
      "Say: 'I'm heads-down today, but I can give it a focused hour tomorrow at 10. Does that work?'",
      "Say yes and rush through it in five minutes so they're not waiting.",
      "Ignore the request and hope they find someone else.",
      "Tell them their planning is poor and they should give people more notice.",
    ],
    0,
    "Honest timing lets the person decide whether to wait for quality help or find an immediate alternative."
  ),
  q(
    "20-understanding-3", 20,
    "You said yes to helping but couldn't deliver, and your colleague missed their deadline.",
    "What would have been better?",
    [
      "An honest 'no' upfront — it would have given them time to find another solution.",
      "A partial yes — at least you gave them something to work with.",
      "A clearer expectation about what you could actually commit to.",
      "Following up sooner when you knew you were falling behind.",
    ],
    0,
    "A prompt, honest no gives others time to find solutions — a delayed, failed yes leaves them stranded."
  ),
  q(
    "20-action-4", 20,
    "Caring for an aging parent daily is causing you serious physical and emotional exhaustion.",
    "What would you do next?",
    [
      "Organize a family meeting or explore eldercare resources to build a shared caregiving schedule.",
      "Push through quietly — complaining feels like letting the family down.",
      "Cut back your hours without telling anyone and manage the guilt later.",
      "Take out the exhaustion on the people closest to you at home.",
    ],
    0,
    "Building a shared support structure ensures long-term caregiving stays compassionate and sustainable."
  ),
  q(
    "20-understanding-4", 20,
    "A family caregiver insists on doing everything alone and eventually collapses from burnout.",
    "What was missing?",
    [
      "The ability to receive help — caring for others long-term requires your own support too.",
      "Better planning — burnout can be avoided if you're organized enough.",
      "The willingness to set limits with the person being cared for.",
      "External professional resources — this level of need requires paid support.",
    ],
    0,
    "You can't pull someone from a ditch if you jump in too — your footing on the rim is what makes rescue possible."
  ),
  q(
    "20-action-5", 20,
    "A coworker shares their personal relationship problems with you every single morning before work.",
    "What would you do next?",
    [
      "Say warmly: 'I care about you, and I need mornings to get into work mode. Let's catch up at lunch on Fridays.'",
      "Listen every morning while feeling your stress build up.",
      "Tell your manager so they're aware of the dynamic.",
      "Start arriving late to avoid the conversation.",
    ],
    0,
    "Shifting the timing preserves your morning focus while keeping the friendship genuinely intact."
  ),
  q(
    "20-understanding-5", 20,
    "A friend calls you for emotional support almost every day. You're starting to feel drained.",
    "What's the healthiest response to recognize?",
    [
      "One person can't be another adult's sole source of emotional support — that's an unsustainable burden.",
      "Real friendship means being available whenever someone needs you.",
      "You should be able to handle this if you genuinely care about them.",
      "The issue is your capacity, not the dynamic — work on being more emotionally available.",
    ],
    0,
    "Healthy lives rely on diverse support networks — never a single overloaded individual."
  ),
];
