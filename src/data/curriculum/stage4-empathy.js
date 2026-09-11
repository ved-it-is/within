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
  // Point 1: Listening fully lets you hear the core concern rather than a surface detail.
  q(
    "16-action-1", 16,
    "A direct report comes to you visibly distressed, describing how overwhelming their project workload has become.",
    "What would you do next?",
    [
      "Give them your undivided attention, silence your phone, and let them finish speaking completely before offering any thoughts.",
      "Interrupt them thirty seconds in to tell them how much busier your own calendar is.",
      "Immediately open an Excel spreadsheet and start typing out new tasks while they are speaking.",
      "Tell them that feeling overwhelmed is just part of the corporate world and they should toughen up.",
    ],
    0,
    "Giving undivided presence allows you to understand the full scope of their distress before jumping to solutions."
  ),
  q(
    "16-understanding-1", 16,
    "While someone is speaking to you about an issue, you notice an internal voice furiously drafting counter-arguments.",
    "What does this internal drafting do to your listening capacity?",
    [
      "It filters out nuanced information and emotional tone because your working memory is consumed by preparing a defense.",
      "It proves that you are a sharper debater and three steps ahead of the speaker.",
      "It ensures you will never make a mistake in your response.",
      "It helps you listen twice as attentively.",
    ],
    0,
    "Rehearsing a rebuttal while someone is talking turns dialogue into competitive waiting-to-speak, shutting down true comprehension."
  ),

  // Point 2: Quieting your internal defense keeps the channel open.
  q(
    "16-action-2", 16,
    "A customer is passionately explaining how a software bug interrupted their business operations.",
    "What would you do next?",
    [
      "Listen patiently to the end of their story, acknowledge the business disruption, and then investigate the technical fix.",
      "Cut them off immediately to explain that the terms of service clearly disclaim all liability.",
      "Mute your microphone and browse social media until they run out of breath.",
      "Argue that thousands of other customers aren't having this problem so it must be user error.",
    ],
    0,
    "Allowing an upset customer to feel fully heard dissolves emotional tension and prepares them for technical problem-solving."
  ),
  q(
    "16-understanding-2", 16,
    "Why does summarizing the other person's core point in your own words before answering transform difficult conversations?",
    "What is the impact of reflective listening?",
    [
      "It proves you were paying attention and gives them a chance to clarify any misunderstandings before you respond.",
      "It stalls for time so you can think of a way to manipulate them.",
      "It shows you have no original thoughts of your own.",
      "It forces them to admit they were completely wrong.",
    ],
    0,
    "Reflective listening confirms mutual understanding and prevents two people from arguing past each other."
  ),

  // Point 3: Nonverbal engagement signals that the speaker is valued.
  q(
    "16-action-3", 16,
    "Your child or partner is sharing an emotional story from their day while you are reading news on your tablet.",
    "What would you do next?",
    [
      "Put the tablet face down on the table, turn your body toward them, and make warm eye contact.",
      "Keep scrolling through the news while muttering 'uh-huh, yeah' every few seconds.",
      "Say: 'I can multitask, my ears are working fine while I read.'",
      "Tell them to wait two hours until you finish all your online reading.",
    ],
    0,
    "Physically setting down screens and offering focused body language communicates respect and builds emotional safety."
  ),
  q(
    "16-understanding-3", 16,
    "What is the phenomenon of 'pseudo-listening' (nodding along while thinking about completely unrelated topics)?",
    "How does pseudo-listening harm relationships?",
    [
      "Speakers quickly detect the glaze in your eyes and delayed responses, eroding trust and creating a sense of invisible isolation.",
      "It is an efficient way to make everyone happy while doing your own thinking.",
      "It is a recommended meditation technique for busy professionals.",
      "It has no impact because nodding is all people actually care about.",
    ],
    0,
    "People possess an acute subconscious radar for inauthentic attention; true presence cannot be faked with mechanical nods."
  ),

  // Point 4: Resisting the urge to immediately solve problems creates emotional safety.
  q(
    "16-action-4", 16,
    "A friend is venting about their painful argument with a sibling.",
    "What would you do next?",
    [
      "Listen empathetically, validate how draining the conflict must feel, and ask: 'Do you want to talk through it, or just vent?'",
      "Immediately give them a 5-step checklist of text messages they must send their sibling tonight.",
      "Say: 'Here is what you did wrong in that argument.'",
      "Tell them sibling fights are childish and they need to get over it.",
    ],
    0,
    "Holding space for emotional decompression before jumping into advice-giving honors the friend's emotional needs."
  ),
  q(
    "16-understanding-4", 16,
    "Why is the impulse to 'fix' someone else's emotional pain often driven by our own discomfort rather than their need?",
    "What is the hidden motive behind premature fixing?",
    [
      "Witnessing distress activates our own anxiety; rushing to fix the problem is an attempt to stop feeling uncomfortable ourselves.",
      "Fixing things immediately is always what the other person desires most.",
      "People are unable to solve their own problems without our superior wisdom.",
      "Premature advice is the definition of true empathy.",
    ],
    0,
    "True empathy has the stamina to sit with discomfort without desperately rushing to put a superficial band-aid on it."
  ),

  // Point 5: Pausing after they finish speaking demonstrates depth and care.
  q(
    "16-action-5", 16,
    "A colleague reveals in confidence that they are struggling with grief after the loss of a parent.",
    "What would you do next?",
    [
      "Take a breath, hold gentle space in silence for a few seconds, and say: 'I'm so sorry. Thank you for trusting me with that. I am here for you.'",
      "Immediately launch into a story about a pet you lost five years ago.",
      "Say: 'At least they lived a long life, so you shouldn't be too sad.'",
      "Change the subject immediately to upcoming quarterly revenue targets to cheer them up.",
    ],
    0,
    "A compassionate pause and sincere acknowledgment honors grief far more than awkward platitudes or forced topic changes."
  ),
  q(
    "16-understanding-5", 16,
    "Why is comfortable silence often the most powerful form of listening in moments of deep vulnerability?",
    "What does silent presence communicate?",
    [
      "It communicates that the other person's grief or pain does not need to be hidden, rushed, or performed; it is safe to just be.",
      "It signals that you don't know the English language.",
      "It indicates to the speaker that you are bored and want them to stop talking.",
      "Silence is always a sign of coldness and indifference.",
    ],
    0,
    "Quiet, grounded presence offers a sanctuary where deep emotions can breathe without the pressure of words."
  ),

  // ==========================================
  // CHAPTER 17: Notice clues, then check
  // ==========================================
  // Point 1: Observing shifts in tone and posture provides valuable social data.
  q(
    "17-action-1", 17,
    "During a team sprint review, a normally outspoken engineer crosses their arms, looks at the floor, and goes silent.",
    "What would you do next?",
    [
      "After the meeting, check in privately: 'I noticed you were quieter than usual during the sprint review. Is everything okay, or did something feel off?'",
      "Call them out loudly in front of the team: 'Why are you pouting in the corner today?'",
      "Assume they are lazy and dock their performance rating.",
      "Ignore it completely and assume nonverbal cues mean nothing.",
    ],
    0,
    "Noticing the shift and following up privately with gentle curiosity creates psychological safety without public embarrassment."
  ),
  q(
    "17-understanding-1", 17,
    "Why should nonverbal observations (like crossed arms or downcast eyes) be treated as hypotheses to explore rather than verified facts?",
    "What is the danger of mind-reading body language?",
    [
      "Body language can stem from multiple causes (e.g. cold room, physical fatigue, toothache); treating clues as hypotheses keeps you open to their real reality.",
      "Body language is a universal code with exactly one fixed scientific meaning.",
      "Crossing arms always means a person is hiding a sinister secret.",
      "You should never pay attention to body language at all.",
    ],
    0,
    "Great emotional observers notice cues keenly, but hold their conclusions lightly until confirmed by the person."
  ),

  // Point 2: Checking gently prevents making assumptions.
  q(
    "17-action-2", 17,
    "Your friend responds to your cheerful text with a short, cold 'Fine.' instead of their usual expressive messages.",
    "What would you do next?",
    [
      "Text back with care: 'Hey, that sounded a bit short—no pressure, but are you having a rough day? Sending love if you need space.'",
      "Send back an angry paragraph accusing them of being passive-aggressive.",
      "Panic and wonder what terrible thing you did to make them hate you.",
      "Block their number so they can't be cold to you again.",
    ],
    0,
    "A low-pressure, caring inquiry acknowledges the tonal shift without jumping to accusations or self-centered panic."
  ),
  q(
    "17-understanding-2", 17,
    "How does asking 'I'm noticing X, how are you feeling?' differ from stating 'You are clearly mad at me'?",
    "What is the difference between an invitation and an accusation?",
    [
      "An invitation shares an observation and invites self-disclosure, whereas an accusation claims to read their mind and triggers defensiveness.",
      "There is no difference; both force the person to confess.",
      "Accusing them of being mad is much more direct and honest.",
      "Invitations are cowardly, while accusations show emotional strength.",
    ],
    0,
    "Tentative observations invite open conversation, while mind-reading declarations force people into defensive corners."
  ),

  // Point 3: Context informs nonverbal interpretation.
  q(
    "17-action-3", 17,
    "A colleague seems snappy and impatient with questions on a Friday afternoon right before a major product release.",
    "What would you do next?",
    [
      "Factor in the high-stakes deployment pressure, give them space, and keep your interactions concise and supportive.",
      "File an immediate formal complaint about their rude demeanor.",
      "Start an argument with them about workplace etiquette.",
      "Spread rumors that they are having an emotional breakdown.",
    ],
    0,
    "Contextualizing stress allows you to depersonalize temporary irritability and support team stability under pressure."
  ),
  q(
    "17-understanding-3", 17,
    "Why does high situational pressure temporarily degrade everyone's emotional regulation and social grace?",
    "What does cognitive load theory explain about stress?",
    [
      "When working memory is taxed by deadlines and crisis management, the brain has fewer cognitive resources for polite social filters.",
      "Only bad, unprofessional people get irritable under stress.",
      "Stress actually makes people much more patient and warm.",
      "Pressure reveals a person's true evil nature.",
    ],
    0,
    "Understanding that stress depletes self-regulation reserves fosters compassionate patience with teammates."
  ),

  // Point 4: Respecting boundaries when someone isn't ready to share.
  q(
    "17-action-4", 17,
    "You ask a coworker if they are okay, and they answer tightly: 'I'm fine, I just want to work right now.'",
    "What would you do next?",
    [
      "Say: 'Understood. I'll give you space, but I'm here if you want to chat later,' and step away.",
      "Keep pressing them: 'No, you're not fine, tell me what's wrong right now!'",
      "Hover over their desk staring at them until they break down in tears.",
      "Get offended that they didn't confide in you and give them the silent treatment.",
    ],
    0,
    "Respecting their boundary shows authentic care, ensuring that when they are ready to talk, you remain a safe harbor."
  ),
  q(
    "17-understanding-4", 17,
    "Why is forcing someone to open up before they are ready counter-productive to empathy?",
    "What happens when emotional vulnerability is forced?",
    [
      "Vulnerability requires perceived safety and personal control; forcing it feels intrusive and causes people to withdraw further.",
      "Forcing people to talk is the quickest way to solve psychological trauma.",
      "People only open up when they are pressured aggressively.",
      "Respecting someone's privacy means you don't actually care about them.",
    ],
    0,
    "Empathy never demands disclosure; it offers a gentle presence and waits patiently at the threshold."
  ),

  // Point 5: Micro-expressions provide early warning signals for de-escalation.
  q(
    "17-action-5", 17,
    "During a negotiation, you see the other party's jaw clench and their eyebrows knit tightly together after an offer.",
    "What would you do next?",
    [
      "Pause and say: 'I noticed a hesitation there. Let's explore how that term landed with you before we move forward.'",
      "Speed up the presentation and rush them into signing the contract before they can complain.",
      "Say smugly: 'I can tell you hate that number, but you have no choice.'",
      "Pretend you didn't see their reaction and pretend the deal is settled.",
    ],
    0,
    "Noticing the micro-cue and addressing the discomfort proactively builds trust and secures sustainable agreements."
  ),
  q(
    "17-understanding-5", 17,
    "What is the danger of ignoring nonverbal cues and charging ahead with an agenda?",
    "What is the relational consequence of agenda-blindness?",
    [
      "You build resentment and false compliance; people agree verbally while emotionally disconnecting, leading to later sabotage or breakdown.",
      "It makes meetings finish 50% faster with zero long-term problems.",
      "Ignoring cues is the hallmark of visionary leadership.",
      "People prefer leaders who completely ignore how they feel.",
    ],
    0,
    "Charging forward blind to social cues achieves only fragile, hollow compliance that collapses at the first pressure point."
  ),

  // ==========================================
  // CHAPTER 18: Acknowledge a feeling
  // ==========================================
  // Point 1: Validation makes space for their experience without needing to agree with every accusation.
  q(
    "18-action-1", 18,
    "Your friend says angrily: 'Everyone at work is out to sabotage my career!'",
    "What would you do next?",
    [
      "Say: 'You are feeling so alienated and targeted right now, and that must feel completely exhausting.'",
      "Argue: 'That's logically impossible, you're being completely paranoid.'",
      "Agree and feed their paranoia: 'Yes, they are all evil, you should slash their tires.'",
      "Laugh and tell them they are overreacting.",
    ],
    0,
    "Validating the core emotional experience (feeling alienated and exhausted) offers comfort without reinforcing an inaccurate narrative."
  ),
  q(
    "18-understanding-1", 18,
    "What is the difference between validating an emotion and validating a factual distortion?",
    "How do we validate feelings without endorsing distortions?",
    [
      "Validating the emotion honors their biological reality ('It makes sense you feel hurt'); validating the distortion means endorsing unverified accusations.",
      "There is no difference; if you validate an emotion, you are legally agreeing with every fact they claim.",
      "You must always tell people their emotions are completely irrational and wrong.",
      "Validation means agreeing with whatever crazy theory someone invents.",
    ],
    0,
    "Empathy validates the very real human pain without having to ratify inaccurate or conspiratorial narratives."
  ),

  // Point 2: Avoid dismissing feelings with cheerful platitudes.
  q(
    "18-action-2", 18,
    "A coworker confides that they are deeply anxious about company layoffs announced for next month.",
    "What would you do next?",
    [
      "Say: 'That uncertainty is really heavy, and it makes total sense you feel anxious. I'm right here with you.'",
      "Say: 'Cheer up! Everything happens for a reason, you might get a great severance package!'",
      "Say: 'Don't worry about things you can't control, just stay positive!'",
      "Say: 'Other people have it way worse than you, so don't complain.'",
    ],
    0,
    "Meeting anxiety with sincere presence and validation provides true comfort, whereas toxic positivity isolates the person."
  ),
  q(
    "18-understanding-2", 18,
    "Why does 'toxic positivity' (forcing cheerful silver linings onto someone in distress) feel like emotional abandonment?",
    "What is the psychological impact of toxic positivity?",
    [
      "It communicates that their honest pain is unwelcome and unacceptable, forcing them to either fake happiness or suffer alone.",
      "It is the fastest way to cure depression and grief.",
      "It helps people realize that life is always wonderful and perfect.",
      "It proves you are a deeply enlightened and superior person.",
    ],
    0,
    "Platitudes shut down authentic human connection by demanding that the suffering person manage the listener's comfort."
  ),

  // Point 3: Naming the emotion helps down-regulate intensity.
  q(
    "18-action-3", 18,
    "Your teenage family member slams their school bag down and screams that school is a prison.",
    "What would you do next?",
    [
      "Say with a calm voice: 'Sounds like you are completely overwhelmed and furious with how today went.'",
      "Scream back: 'Don't you dare throw your bag in my house, go to your room!'",
      "Lecture them on the importance of education for the future economy.",
      "Mock them for being dramatic.",
    ],
    0,
    "Naming the intense emotion ('overwhelmed and furious') de-escalates the nervous system far more effectively than matching their fury."
  ),
  q(
    "18-understanding-3", 18,
    "In neuroscience, what does the principle 'Name it to tame it' reveal about emotional processing?",
    "What happens in the brain when an emotion is accurately labeled?",
    [
      "Putting language to an emotional state activates the prefrontal cortex, which sends calming inhibitory signals to the over-activated amygdala.",
      "Naming an emotion makes it grow ten times larger until your brain explodes.",
      "Emotions can only be tamed with strict punishment.",
      "Language has zero effect on the human nervous system.",
    ],
    0,
    "Accurate linguistic labeling shifts neural activity from primitive threat circuits to higher regulatory centers, calming the body."
  ),

  // Point 4: Acknowledgment creates space before advice.
  q(
    "18-action-4", 18,
    "A colleague tells you they failed their driving test for the third time and feels like an idiot.",
    "What would you do next?",
    [
      "Say: 'Oh that hurts so much, especially after trying so hard. Take all the time you need today—you're definitely not an idiot.'",
      "Immediately pull out your phone and send them five links to driving instruction YouTube channels.",
      "Say: 'Driving is so easy, how did you fail three times?'",
      "Tell them they should probably just take the bus for the rest of their life.",
    ],
    0,
    "Acknowledging the emotional sting and defending their dignity paves the way for future practice when the pain settles."
  ),
  q(
    "18-understanding-4", 18,
    "Why does offering advice BEFORE validating feelings almost always trigger irritation in the listener?",
    "What is the psychological timing of advice?",
    [
      "When people are emotionally stung, their brain seeks relational safety and validation first; premature advice feels like a dismissive lecture.",
      "People hate good advice and prefer to suffer endlessly.",
      "Advice should only be given in writing via certified mail.",
      "Validation is a waste of time when an obvious fix exists.",
    ],
    0,
    "Validation is the key that opens the door to receptive problem-solving; without it, even brilliant advice bounces off."
  ),

  // Point 5: Experiences matter even when you would feel differently.
  q(
    "18-action-5", 18,
    "Your partner is terrified of flying on an airplane, whereas you fly weekly for work and feel zero fear.",
    "What would you do next?",
    [
      "Hold their hand during turbulence and validate: 'I know this feels terrifying for you. I'm right here with you.'",
      "Roll your eyes and recite statistical flight safety probabilities in an annoyed tone.",
      "Laugh at them and tell them they are being utterly irrational.",
      "Put on your headphones and tell them to wake you when the flight lands.",
    ],
    0,
    "Empathy does not require feeling the same fear; it means honoring that the other person's fear is intensely real to them."
  ),
  q(
    "18-understanding-5", 18,
    "Why is 'I wouldn't care if that happened to me' a destructive metric for empathy?",
    "What is the fundamental flaw of egocentric empathy?",
    [
      "True empathy steps into the other person's unique nervous system, history, and values—it is not measuring their pain by your personal thresholds.",
      "Everyone has the exact same nervous system, so measuring by your threshold is scientific.",
      "If you wouldn't care, then they shouldn't care either.",
      "Empathy means teaching other people to be exactly like you.",
    ],
    0,
    "Genuine empathy recognizes that different human instruments resonate with different frequencies of joy and pain."
  ),

  // ==========================================
  // CHAPTER 19: Support without taking over
  // ==========================================
  // Point 1: Offering options makes it easier for them to request the support they want.
  q(
    "19-action-1", 19,
    "A close friend was just laid off from their tech job and calls you in tears.",
    "What would you do next?",
    [
      "Say: 'I'm so sorry. I'm completely here for you. Would it help most to just vent, to brainstorm options, or to get dinner and not talk about work at all?'",
      "Immediately rewrite their resume tonight and send it out to twenty recruiters without asking them.",
      "Lecture them on why the tech industry is collapsing and tell them to learn plumbing.",
      "Avoid calling them for three weeks so they don't feel embarrassed.",
    ],
    0,
    "Offering distinct modes of support (venting, brainstorming, distraction) empowers the friend to choose what actually soothes them."
  ),
  q(
    "19-understanding-1", 19,
    "What is the interpersonal risk of the 'Savior Complex' (stepping in and fixing someone's life without their permission)?",
    "How does unsolicited rescuing disempower the other person?",
    [
      "It communicates an implicit message: 'You are incompetent and helpless, so I must take over your life,' stripping them of their agency.",
      "It proves you are a selfless saint who deserves universal adoration.",
      "It makes the other person's life 100% easier with zero emotional downsides.",
      "People are incapable of surviving without unsolicited saviors.",
    ],
    0,
    "Rescuing without permission often serves the helper's ego while subtly undermining the other person's dignity and self-efficacy."
  ),

  // Point 2: Asking lets them name the support that fits their current need.
  q(
    "19-action-2", 19,
    "Your coworker is struggling with a complex spreadsheet formulas error and sighing at their desk.",
    "What would you do next?",
    [
      "Lean over and ask: 'Hey, would you like an extra pair of eyes on that formula, or would you prefer to troubleshoot it solo?'",
      "Grab their mouse out of their hand and say: 'Move over, let me show you how to do it right.'",
      "Complain to the team that the coworker doesn't know how to use Excel.",
      "Stare at them in awkward silence for twenty minutes.",
    ],
    0,
    "Asking before intervening respects their autonomy while making supportive expertise warmly available."
  ),
  q(
    "19-understanding-2", 19,
    "Why does asking 'How can I best support you right now?' prevent well-intentioned blunders?",
    "What does this open question accomplish?",
    [
      "It stops you from projecting your own preferred coping strategies onto someone whose needs may be completely different in that moment.",
      "It lets you get away with doing zero work.",
      "It forces them to do all the emotional labor.",
      "It guarantees that they will ask for something you cannot provide.",
    ],
    0,
    "Inquiring directly replaces guesswork with precision, ensuring that care lands exactly where and how it is needed."
  ),

  // Point 3: The same frustration may call for different kinds of support at different times.
  q(
    "19-action-3", 19,
    "Your partner has been venting about the same micromanaging boss for three months, but today they seem exhausted rather than angry.",
    "What would you do next?",
    [
      "Recognize that today's emotional state is exhaustion, offer a quiet cup of tea and a foot rub, rather than giving another strategic career lecture.",
      "Yell: 'I'm sick of hearing about your boss, quit your job or shut up about it!'",
      "Draft an angry resignation letter and send it from their email account.",
      "Tell them that their boss is completely right to micromanage them.",
    ],
    0,
    "Attuning to the shifting emotional quality (from anger to exhaustion) allows you to adapt support from strategic debate to physical rest."
  ),
  q(
    "19-understanding-3", 19,
    "Why is support an evolving, dynamic dialogue rather than a one-time fixed formula?",
    "How does emotional support change over time?",
    [
      "Human emotional processing moves through phases (shock, grief, anger, problem-solving); what comforts someone in phase one may irritate them in phase four.",
      "Once you comfort someone once, you never have to do it again.",
      "Formulas are superior to dialogue in every psychological study.",
      "People should never change their emotional state during an ordeal.",
    ],
    0,
    "Effective supporters stay attuned to the evolving phases of grief and recovery, matching their presence to the moment."
  ),

  // Point 4: Permission keeps the person's agency central to the conversation.
  q(
    "19-action-4", 19,
    "You have a great idea for how your friend can resolve a dispute with their landlord.",
    "What would you do next?",
    [
      "Ask: 'I have a thought on how tenants have handled that kind of dispute in the past. Would you be open to hearing it, or would you rather not talk strategy right now?'",
      "Launch into an unsolicited 45-minute lecture on local municipal property codes.",
      "Call the landlord yourself pretending to be a lawyer.",
      "Tell your friend they are foolish for letting the landlord take advantage of them.",
    ],
    0,
    "Asking permission before offering advice respects their mental bandwidth and ensures that ideas are welcomed, not endured."
  ),
  q(
    "19-understanding-4", 19,
    "Why does asking permission before giving advice dramatically increase the likelihood that the advice will actually be implemented?",
    "What is the psychology of invited advice?",
    [
      "When someone invites advice, their brain shifts into active learning mode; when advice is pushed upon them, their brain treats it as an intrusive threat to autonomy.",
      "It makes the advice legally binding.",
      "It proves that you are a certified expert.",
      "Permission has zero effect on whether advice is taken.",
    ],
    0,
    "Invited wisdom enters through an open front door; uninvited advice attempts to break in through a locked window."
  ),

  // Point 5: A concrete, agreed offer helps without automatically taking over.
  q(
    "19-action-5", 19,
    "A family with a newborn baby in your neighborhood is exhausted and sleep-deprived.",
    "What would you do next?",
    [
      "Send a message: 'I made a tray of lasagna that you can freeze or heat tonight. I can drop it on your porch at 5 PM with no need to chat. Let me know if that sounds good!'",
      "Show up unannounced at 7 PM with six friends to see the baby and expect dinner.",
      "Tell them that sleep deprivation is what they signed up for so they shouldn't complain.",
      "Offer to move into their house for a month to raise the baby your way.",
    ],
    0,
    "A specific, low-friction offer (porch drop-off meal with no social obligation) delivers pure relief to overburdened parents."
  ),
  q(
    "19-understanding-5", 19,
    "Why is 'Drop-off on porch, no need to chat' the gold standard of practical support for people in crisis?",
    "Why is zero social obligation so precious during overwhelm?",
    [
      "It provides tangible practical relief without extracting a social tax of having to host, entertain, or look presentable when completely depleted.",
      "It proves that you don't actually like the people you are helping.",
      "It is illegal to enter someone's house with food.",
      "People in crisis prefer to host lavish parties for their helpers.",
    ],
    0,
    "Pure support removes burdens without imposing the hidden emotional obligation of social performance."
  ),

  // ==========================================
  // CHAPTER 20: Care while keeping your boundaries
  // ==========================================
  // Point 1: A specific limit can express care and protect your need for rest.
  q(
    "20-action-1", 20,
    "A friend going through a breakup calls you at 10 PM and starts repeating the same story for the third hour in a row.",
    "What would you do next?",
    [
      "Say gently: 'I love you and care so much about what you're going through. My brain is turning off and I need to sleep, but let's talk tomorrow at lunch.'",
      "Stay on the line until 3 AM feeling resentful and bitter, and show up exhausted to work.",
      "Fake a bad phone connection and hang up on them.",
      "Snap angrily: 'You are so selfish, you've been talking about your ex for three hours!'",
    ],
    0,
    "Pairing deep relational care with an explicit bedtime boundary preserves both your health and the friendship."
  ),
  q(
    "20-understanding-1", 20,
    "Why is setting a boundary when supporting others an act of preservation rather than selfishness?",
    "What happens when helpers have no boundaries?",
    [
      "Without boundaries, empathy inevitably curdles into resentment, bitterness, and eventual abandonment; limits keep your care clean and sustainable.",
      "Boundaries are selfish and only mean you don't truly care.",
      "Real love means having zero personal needs or sleep.",
      "Boundaries always destroy friendships.",
    ],
    0,
    "Boundaries are the distance at which I can love both you and me simultaneously."
  ),

  // Point 2: A specific offer makes your care and your capacity clear.
  q(
    "20-action-2", 20,
    "A relative asks if you can babysit their three young children for an entire four-day holiday weekend.",
    "What would you do next?",
    [
      "Say: 'I can't commit to the whole weekend, but I'd love to take them for Saturday afternoon from 1 to 5 PM so you two can get a nice dinner.'",
      "Agree to the whole weekend while secretly panicking, and cancel at the last minute.",
      "Tell them they are irresponsible parents for asking.",
      "Ignore the message and hide from them at the next family gathering.",
    ],
    0,
    "Defining the specific window you CAN happily offer provides real relief without overstepping your capacity."
  ),
  q(
    "20-understanding-2", 20,
    "How does offering a clear partial alternative protect you from the guilt of a flat 'no'?",
    "Why are bounded counter-offers so powerful?",
    [
      "They communicate that your relationship remains valued and supported, while clearly defining the perimeter of your realistic capacity.",
      "They manipulate the other person into doing what you want.",
      "They show that you are superior at managing schedules.",
      "Counter-offers are legally binding contracts.",
    ],
    0,
    "Bounded offers replace the sting of total rejection with a warm, realistic contribution."
  ),

  // Point 3: Honest timing makes support more realistic than agreeing without capacity.
  q(
    "20-action-3", 20,
    "A colleague asks you to review a lengthy 50-page proposal in the middle of your own sprint deadline.",
    "What would you do next?",
    [
      "Say: 'I'm heads-down on a deadline today, but I can dedicate an hour tomorrow at 10 AM. If that's too late for your timeline, let's see who else might be free today.'",
      "Say yes immediately, then rush through it blindly in five minutes without reading.",
      "Ignore their request and let their deadline fail.",
      "Complain to the team that they have terrible planning.",
    ],
    0,
    "Honest timing allows the requester to decide whether to wait for your quality feedback or seek an immediate alternative."
  ),
  q(
    "20-understanding-3", 20,
    "Why is an unfulfilled promise of help far more damaging than an immediate, polite decline?",
    "What is the true cost of false promises?",
    [
      "A false promise prevents the person from seeking other viable help, leaving them stranded when the deadline inevitably crashes.",
      "False promises are polite social lubricants that everyone understands are fake.",
      "It is always better to say yes and fail than to say no.",
      "Declining immediately is the worst insult possible.",
    ],
    0,
    "A prompt, honest 'no' gives the other person the gift of time to find other solutions; a delayed, failed 'yes' leaves them stranded."
  ),

  // Point 4: A sustainable limit can support a more reliable arrangement.
  q(
    "20-action-4", 20,
    "You are caring for an aging parent, and the daily demands are beginning to cause severe physical and emotional exhaustion.",
    "What would you do next?",
    [
      "Hold a family meeting or seek community eldercare resources to build a shared caregiving schedule with designated rest days.",
      "Push through the exhaustion in silence until you suffer a medical collapse.",
      "Abandon your parent completely because it is too hard.",
      "Take out your exhaustion by yelling at your own children or spouse.",
    ],
    0,
    "Building a structured, shared care ecosystem ensures that long-term caregiving remains compassionate and physically sustainable."
  ),
  q(
    "20-understanding-4", 20,
    "What is the distinction between clean empathy and 'enmeshment' in relationships?",
    "What does healthy differentiation look like in caregiving?",
    [
      "Clean empathy says 'I see your pain and I am walking alongside you'; enmeshment says 'Your pain is now my identity and I must drown with you.'",
      "Enmeshment is the highest form of spiritual love.",
      "Clean empathy means feeling zero emotion for anyone.",
      "There is no difference; love means losing your own self entirely.",
    ],
    0,
    "You cannot pull someone out of a ditch if you jump into the ditch with them; holding your ground on the rim is what makes rescue possible."
  ),

  // Point 5: Care does not require becoming another person's sole source of help.
  q(
    "20-action-5", 20,
    "A coworker expects you to listen to their personal relationship crises every single morning before work starts.",
    "What would you do next?",
    [
      "Set a loving, firm boundary: 'I value our friendship, but I need morning time to focus and get into work mode. Let's catch up at lunch on Fridays instead.'",
      "Listen every morning while feeling your stomach turn with anxiety and resentment.",
      "Complain to HR that your coworker is stalking you.",
      "Quit your job to get away from them.",
    ],
    0,
    "Shifting the venue and timing of personal sharing preserves your morning professional focus while keeping friendship intact."
  ),
  q(
    "20-understanding-5", 20,
    "Why is it unhealthy for any one human being to become another adult's sole emotional outlet?",
    "What is the danger of emotional monopoly in friendships?",
    [
      "It creates an unsustainable emotional monopoly that inevitably collapses under pressure; healthy adults need a diverse ecosystem of support.",
      "One person should always be your sole emotional source for everything.",
      "Having multiple friends is a form of betrayal.",
      "Emotional ecosystems are an excuse for not caring enough.",
    ],
    0,
    "A healthy life relies on a rich, diverse network of friends, mentors, family, and professionals—never a single overloaded individual."
  ),
];
