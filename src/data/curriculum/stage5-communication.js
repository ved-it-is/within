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
  q(
    "21-action-1", 21,
    "Your roommate's laundry sits on the shared sofa for days every week.",
    "What would you do next?",
    [
      "Say: 'When laundry stays on the couch for days, I can't sit down after work to relax.'",
      "Tell them they're the most inconsiderate person you've ever lived with.",
      "Throw their laundry on the floor to make a point.",
      "Sigh loudly every time you squeeze into the corner of the sofa.",
    ],
    0,
    "Stating an observable fact paired with its personal impact opens problem-solving without triggering defense."
  ),
  q(
    "21-understanding-1", 21,
    "You tell a colleague: 'You always make me feel ignored in meetings.'",
    "Why does this approach tend to backfire?",
    [
      "Absolute words and character claims trigger defensiveness instead of addressing the real behavior.",
      "It's too direct — indirect hints often work better in professional settings.",
      "It's fine to start there if you soften it with a compliment first.",
      "The real issue is that you haven't given them enough feedback before.",
    ],
    0,
    "Observable facts create shared neutral ground — character judgments immediately trigger counter-attacks."
  ),
  q(
    "21-action-2", 21,
    "A team member arrived 20 minutes late to a client kickoff meeting you were co-hosting.",
    "What would you do next?",
    [
      "Tell them privately: 'When you arrived late, I had to cover the technical slides alone without prep.'",
      "Apologize to the client in front of everyone for your colleague's poor time management.",
      "Tell them they clearly don't care about this project.",
      "Let it go and hope they don't repeat it.",
    ],
    0,
    "Describing the operational impact keeps the issue professional and clearly understood."
  ),
  q(
    "21-understanding-2", 21,
    "Someone says to you: 'You never care about anyone else's schedule.'",
    "What makes this hard to respond to constructively?",
    [
      "Absolute words like 'never' force you to defend your whole character instead of discussing the specific event.",
      "It's a fair observation — 'never' is just used for emphasis.",
      "You need to agree with the feeling even if the 'never' isn't literally true.",
      "The best response is to give them a counterexample that disproves 'never.'",
    ],
    0,
    "Sweeping accusations derail conversations into character debates instead of resolving the real issue."
  ),
  q(
    "21-action-3", 21,
    "Your partner didn't reply to your text about dinner plans five hours ago.",
    "What would you do next?",
    [
      "When they get home, say: 'I felt stranded about dinner — did something come up today?'",
      "Text: 'I guess I'm invisible to you now.'",
      "Order dinner only for yourself to teach them a lesson.",
      "Call repeatedly until they pick up.",
    ],
    0,
    "Expressing your experience while staying open to their context avoids assigning malicious motives."
  ),
  q(
    "21-understanding-3", 21,
    "You weren't invited to a lunch your colleagues went to and you feel deliberately excluded.",
    "What's the most accurate way to look at this?",
    [
      "The fact is you weren't invited — the belief that it was deliberate exclusion is unverified.",
      "Your gut feeling about social dynamics is usually reliable.",
      "Even if it wasn't intentional, the pattern matters and is worth addressing.",
      "Bring it up with a trusted colleague to get their read on what happened.",
    ],
    0,
    "Distinguishing what actually happened from the story your brain added prevents self-inflicted drama."
  ),
  q(
    "21-action-4", 21,
    "A colleague interrupts you three times during your technical briefing.",
    "What would you do next?",
    [
      "Say calmly: 'Hold on — let me finish this thought, then it's yours.'",
      "Stop talking, cross your arms, and glare at the table.",
      "Call out their lack of manners in front of the team.",
      "Interrupt them right back for the rest of the meeting.",
    ],
    0,
    "A calm, assertive redirection holds the floor constructively without turning the meeting into a battleground."
  ),
  q(
    "21-understanding-4", 21,
    "You say 'I feel like you don't respect me.' Your colleague gets defensive.",
    "What's the core issue with that phrasing?",
    [
      "'I feel like you...' is a veiled accusation — 'I feel [emotion]' actually names your inner experience.",
      "The problem is the topic — respect is too charged to raise directly.",
      "It would have landed better in writing than spoken out loud.",
      "You should have asked a question first before stating how you feel.",
    ],
    0,
    "Disguising accusations as feelings sabotages communication — authentic feeling words build connection."
  ),
  q(
    "21-action-5", 21,
    "A friend made a joke about your career struggles at dinner in front of the group.",
    "What would you do next?",
    [
      "Pull them aside later: 'When you joked about my career in front of everyone, I felt humiliated.'",
      "Roast them back viciously, targeting their deepest insecurity.",
      "Block their number when you get home without saying why.",
      "Laugh along while privately planning to distance yourself.",
    ],
    0,
    "Addressing the specific moment in private separates the act from their character and allows real accountability."
  ),
  q(
    "21-understanding-5", 21,
    "A friend tells you: 'When you canceled yesterday, I felt let down.'",
    "What's the most emotionally intelligent way to hear that?",
    [
      "Hear it as feedback about a specific moment — not a verdict on who you are as a person.",
      "Apologize once and then explain why canceling was unavoidable.",
      "Point out a time they canceled on you so the context is fair.",
      "Ask if there are other things that have been bothering them too.",
    ],
    0,
    "Hearing impact feedback without treating it as a condemnation of your character enables gracious repair."
  ),

  // ==========================================
  // CHAPTER 22: Make a clear request
  // ==========================================
  q(
    "22-action-1", 22,
    "You need a coworker to review your 10-page document before a board presentation.",
    "What would you do next?",
    [
      "Ask: 'Can you review pages 4–8 by Thursday at 2 PM, focusing on the financial forecasts?'",
      "Say: 'Can you look over my stuff whenever you get a chance?'",
      "Leave the printout on their desk with no note and hope they read it.",
      "Drop by and say: 'Drop everything — I need your eyes on this now.'",
    ],
    0,
    "Specifying the section, focus, and deadline turns a vague chore into a clear, manageable task."
  ),
  q(
    "22-understanding-1", 22,
    "You ask a colleague to 'be more considerate' but nothing changes.",
    "What's most likely the issue?",
    [
      "Consideration means different things to different people — without naming the specific behavior, they're guessing.",
      "They don't take your feedback seriously — it's a relationship issue.",
      "Vague feedback sometimes needs to be repeated before it lands.",
      "You need to be more direct about the consequences if they don't change.",
    ],
    0,
    "Clarity is kindness — naming the exact behavior desired eliminates guesswork and reduces friction."
  ),
  q(
    "22-action-2", 22,
    "You want your partner to take a more active role in keeping the kitchen clean on weeknights.",
    "What would you do next?",
    [
      "Propose: 'Could whoever doesn't cook wash the dishes and wipe the counters before 9 PM?'",
      "Sigh and slam pots in the sink every night while muttering.",
      "Tell them you'll handle everything if they handle all grocery shopping.",
      "Stop cooking until they notice and bring it up themselves.",
    ],
    0,
    "Proposing a concrete, shared routine with clear roles turns silent resentment into workable agreement."
  ),
  q(
    "22-understanding-2", 22,
    "You make a request and they offer a different time than what you asked for.",
    "What does this tell you about requests vs. demands?",
    [
      "A genuine request makes room for negotiation — a demand punishes anything other than instant compliance.",
      "They're not taking your timeline seriously — it's worth pushing back.",
      "Counter-offers are a sign they want to help but need the terms adjusted.",
      "You should accept the counter-offer to keep the relationship smooth.",
    ],
    0,
    "Real requests respect the other person's agency — counter-proposals are collaborative problem-solving."
  ),
  q(
    "22-action-3", 22,
    "You need a family member to pick you up from the airport after a delayed evening flight.",
    "What would you do next?",
    [
      "Text: 'Flight lands at 9:45 PM, Terminal 2 — could you pick me up at 10:15? No worries if not, I'll grab a cab.'",
      "Text: 'Pick me up tonight.'",
      "Call from the curb demanding to know why they're not there.",
      "Book a private car without asking — you don't want to impose.",
    ],
    0,
    "Providing details, time, and a no-pressure alternative respects their schedule and invites genuine help."
  ),
  q(
    "22-understanding-3", 22,
    "You add 'No worries if not — I have a backup plan' to a request. The person says yes enthusiastically.",
    "Why does that exit clause matter?",
    [
      "It removes the fear of obligation — they say yes from genuine generosity, not guilty compliance.",
      "It signals you don't actually need their help, so they feel less pressured.",
      "It makes you seem more organized, which builds trust.",
      "It tells them their answer won't affect your relationship either way.",
    ],
    0,
    "When people feel truly free to say no, their yes becomes sincere — free from hidden resentment."
  ),
  q(
    "22-action-4", 22,
    "Your supervisor regularly emails after 9 PM and the pings disrupt your sleep.",
    "What would you do next?",
    [
      "Say in your 1-on-1: 'I turn off notifications at 8 PM to recharge — I'll respond to evening emails first thing at 8:30 AM.'",
      "Reply at 11 PM with a furious email about work-life balance.",
      "Start ignoring all emails during the workday to set a precedent.",
      "Complain to HR before having a conversation with your supervisor.",
    ],
    0,
    "Proactively defining your communication rhythm and response commitment sets boundaries professionally."
  ),
  q(
    "22-understanding-4", 22,
    "You tell a team member what you DON'T want them to do. The behavior keeps happening in different ways.",
    "What's the better approach?",
    [
      "Tell them exactly what you DO want — negatives leave too many alternatives open.",
      "Be more specific about what you don't want next time.",
      "Pair the 'don't' with an explanation of why it matters.",
      "Set a clear consequence so they understand the stakes.",
    ],
    0,
    "Stating the desired target behavior gives people a roadmap for success instead of a minefield of don'ts."
  ),
  q(
    "22-action-5", 22,
    "You need two volunteers for a 90-minute registration shift at a charity event.",
    "What would you do next?",
    [
      "Message: 'We need two people for 9:00–10:30 AM on Saturday to hand out badges. Let me know by Wednesday.'",
      "Post: 'We need tons of help — just show up whenever you can!'",
      "Message friends privately: 'If you really cared about this cause you'd spend your whole Saturday here.'",
      "Assign people to shifts without checking their availability.",
    ],
    0,
    "A bounded, clearly timed request makes volunteering easy to commit to without anxiety."
  ),
  q(
    "22-understanding-5", 22,
    "Someone asks you for a massive favor you can't fully accommodate.",
    "What's the most constructive response?",
    [
      "Decline what you can't do and offer a specific, smaller alternative within your real capacity.",
      "Say yes and do your best even if the result will be subpar.",
      "Explain why the request is too large and ask them to scale it down.",
      "Check whether anyone else could take on the parts you can't.",
    ],
    0,
    "Offering a counter-proposal that reflects your real capacity maintains the connection while honoring your limits."
  ),

  // ==========================================
  // CHAPTER 23: Say no respectfully
  // ==========================================
  q(
    "23-action-1", 23,
    "A neighbor invites you to a Saturday barbecue. You planned a quiet rest day.",
    "What would you do next?",
    [
      "Say warmly: 'Thanks so much for the invite! I won't make it this weekend, but hope you all have a great time.'",
      "Invent an elaborate excuse and worry all weekend about getting caught.",
      "Agree to go, show up exhausted, and leave after twenty minutes.",
      "Ignore the invitation and avoid eye contact when you see them outside.",
    ],
    0,
    "A warm, gracious decline needs no fabricated excuse — a kind boundary is complete in itself."
  ),
  q(
    "23-understanding-1", 23,
    "You find yourself inventing elaborate excuses whenever you have to say no.",
    "What's most likely driving that?",
    [
      "Anxiety that a simple 'I can't' won't feel valid enough — so you over-explain to manage their reaction.",
      "You genuinely need to give reasons for people to accept your decisions.",
      "You're protecting the relationship — reasons make a no feel less personal.",
      "It's a habit from childhood — most people do this unconsciously.",
    ],
    0,
    "Recognizing that your personal capacity is a legitimate boundary on its own frees you from anxious over-explaining."
  ),
  q(
    "23-action-2", 23,
    "A friend asks to borrow your car for the weekend. You're not comfortable lending it.",
    "What would you do next?",
    [
      "Say: 'I'm not comfortable lending the car, but I'd be happy to help find local rental deals or give you a lift to the station.'",
      "Ask why they need it before deciding — more context might change your answer.",
      "Lend it while biting your nails all weekend.",
      "Say the car is in the shop.",
    ],
    0,
    "Stating your comfort limit clearly without shaming the request maintains self-respect and friendship."
  ),
  q(
    "23-understanding-2", 23,
    "You say no clearly. The person asks: 'Why not? Give me one good reason!'",
    "What's the most constructive way to respond?",
    [
      "Calmly repeat the boundary without debating: 'I understand it's disappointing, but my answer is no.'",
      "Provide a reason — they deserve to know why you're declining.",
      "Apologize for being unable to help and suggest someone else.",
      "Ask what they'd need to hear to feel okay with your answer.",
    ],
    0,
    "Refusing to debate your boundary signals that your no is firm — not an opening for negotiation."
  ),
  q(
    "23-action-3", 23,
    "Your department head asks you to manage the intern program on top of your full workload.",
    "What would you do next?",
    [
      "Say: 'I want the interns to have great mentorship — with my current launch deliverables, I can't do it justice right now.'",
      "Say yes impulsively to impress the boss, then burn out and underdeliver on both.",
      "Roll your eyes and complain to coworkers that leadership is out of touch.",
      "Accept but deliberately give the interns minimal attention so they reassign someone else.",
    ],
    0,
    "Framing your decline around output quality and existing commitments shows professional integrity."
  ),
  q(
    "23-understanding-3", 23,
    "You said yes to something you didn't want to do. Two weeks later you're seething with resentment.",
    "What would have been better?",
    [
      "An honest no upfront — resentment is the hidden cost of inauthentic compliance.",
      "Setting better expectations at the start about what you could realistically give.",
      "Asking for support from others so the burden felt more manageable.",
      "Taking breaks during the commitment to protect your energy.",
    ],
    0,
    "A resentful yes damages relationships far more over time than an honest, prompt no."
  ),
  q(
    "23-action-4", 23,
    "A networking acquaintance asks a personal question about your divorce.",
    "What would you do next?",
    [
      "Smile and say: 'I keep those details private — tell me more about the project you mentioned.'",
      "Freeze and over-share your private history to fill the silence.",
      "Tell them the question is inappropriate and explain why.",
      "Make up a brief answer so the conversation can move on.",
    ],
    0,
    "A polite, smooth pivot protects your privacy without creating a social standoff."
  ),
  q(
    "23-understanding-4", 23,
    "You decline to answer a personal question from a casual acquaintance. They seem offended.",
    "What's the most accurate way to understand your choice?",
    [
      "You're the steward of your own story — private details aren't owed to casual connections.",
      "You were too abrupt — a softer decline would have avoided the offense.",
      "Declining personal questions is fine in personal settings, but trickier professionally.",
      "Their offense suggests the question wasn't as inappropriate as it felt to you.",
    ],
    0,
    "Healthy emotional boundaries recognize that intimacy is earned through trust — not surrendered on demand."
  ),
  q(
    "23-action-5", 23,
    "A client asks for an extra round of revisions outside your agreed project scope.",
    "What would you do next?",
    [
      "Say: 'Happy to handle those additions — I'll send an addendum with the estimated hours and cost.'",
      "Do the extra work for free while building resentment.",
      "Send a firm email citing the contract and refusing to proceed.",
      "Stop responding until they agree to pay first.",
    ],
    0,
    "Tying out-of-scope requests to addenda and fees turns boundary-setting into standard professional practice."
  ),
  q(
    "23-understanding-5", 23,
    "A client trusts you more after you declined an unreasonable request clearly.",
    "Why did that clear no actually build trust?",
    [
      "When people know you'll say no to what you can't deliver, they trust your yes is genuine and backed by real capacity.",
      "Clients respect assertiveness — it signals you're confident in your work.",
      "You showed them the contract matters to you, which is a good sign for future projects.",
      "Setting limits made you seem more in demand, which raised your perceived value.",
    ],
    0,
    "Clear limits eliminate ambiguity — knowing you can say no makes every yes more trustworthy."
  ),

  // ==========================================
  // CHAPTER 24: Stay constructive in disagreement
  // ==========================================
  q(
    "24-action-1", 24,
    "You and a colleague strongly disagree on which database to adopt for a migration.",
    "What would you do next?",
    [
      "Say: 'Let me make sure I understand your case — you're prioritizing write speed and schema flexibility, right?'",
      "Interrupt each time they mention their choice to list its flaws.",
      "Go to leadership behind their back to override the decision.",
      "Say: 'Fine, do whatever you want — when it crashes, don't come to me.'",
    ],
    0,
    "Reflecting their priorities back demonstrates comprehension and lowers defensive tension before you respond."
  ),
  q(
    "24-understanding-1", 24,
    "You accurately summarize your colleague's argument before disagreeing with it.",
    "Does understanding their argument mean you've agreed with it?",
    [
      "No — understanding means you received their message accurately; agreement is a separate question.",
      "Mostly yes — summarizing someone's argument means you've accepted its logic.",
      "It depends on how you phrase the summary — agreement can be implied.",
      "Yes — summarizing without pushing back signals acceptance.",
    ],
    0,
    "Separating comprehension from consensus lets both people feel heard without abandoning their views."
  ),
  q(
    "24-action-2", 24,
    "You want full remote work. Your manager insists on three days a week in office.",
    "What would you do next?",
    [
      "Ask: 'What outcomes do in-office days need to achieve? Could we cluster collaborative work on two set days?'",
      "Threaten to quit unless you get 100% remote immediately.",
      "Complain about your manager online without naming them.",
      "Show up to the office, put headphones on, and refuse to engage.",
    ],
    0,
    "Exploring the underlying need behind the policy opens up creative compromises that satisfy both parties."
  ),
  q(
    "24-understanding-2", 24,
    "Your manager says 'three days in office.' You want fully remote. You seem stuck.",
    "What would most help move the conversation forward?",
    [
      "Explore what outcome the three-day policy is meant to achieve — needs are more flexible than fixed positions.",
      "Propose a trial period to test whether two days achieves the same result.",
      "Ask what it would take for them to approve an exception in your case.",
      "Look for data showing remote teams perform as well as in-office ones.",
    ],
    0,
    "Moving from fixed positions to underlying needs unlocks flexible, win-win solutions."
  ),
  q(
    "24-action-3", 24,
    "During a dishes argument, your partner suddenly brings up a dispute from six months ago.",
    "What would you do next?",
    [
      "Say: 'That still feels unresolved and I want to talk about it — can we handle the kitchen plan first?'",
      "Bring up something embarrassing they did two years ago.",
      "Yell: 'Why do you always drag up the past?' and walk out.",
      "Tell them you don't remember what happened on that trip anyway.",
    ],
    0,
    "Acknowledging the past issue while refocusing on the present prevents kitchen-sink arguments."
  ),
  q(
    "24-understanding-3", 24,
    "An argument that started about scheduling has turned into a list of every grievance from the past year.",
    "What's the main risk of letting this continue?",
    [
      "The conversation becomes overloaded with unresolved baggage — the original issue never gets solved.",
      "It can actually be cathartic to get everything out at once.",
      "You're more likely to reach a deeper resolution by addressing everything together.",
      "Old grievances will keep surfacing until they're properly aired.",
    ],
    0,
    "Confining disagreements to a single manageable topic protects the conversation from emotional collapse."
  ),
  q(
    "24-action-4", 24,
    "You notice your voice rising and fists clenching mid-argument with a family member.",
    "What would you do next?",
    [
      "Say: 'I'm getting heated and want to treat you well — can we take 20 minutes and come back at 4 PM?'",
      "Push through — raising your voice shows how serious you are.",
      "Walk out without saying when you'll return.",
      "Keep talking but try harder to stay calm.",
    ],
    0,
    "Calling a time-out with a return time halts emotional flooding while reassuring them you're not abandoning the conversation."
  ),
  q(
    "24-understanding-4", 24,
    "You're in a heated argument and your brain feels completely foggy — you can't think clearly.",
    "What's most likely happening physiologically?",
    [
      "Emotional flooding has shifted control away from the thinking brain — clarity will return after you settle.",
      "You haven't slept enough — physical fatigue is distorting your reasoning.",
      "You're losing the argument and your brain is searching for a way out.",
      "You need to focus harder — the ability to think clearly is always a choice.",
    ],
    0,
    "Respecting the biology of emotional flooding prevents catastrophic words spoken in the heat of fight-or-flight."
  ),
  q(
    "24-action-5", 24,
    "You and your co-founder disagree on whether to raise funding or stay bootstrapped — both have valid logic.",
    "What would you do next?",
    [
      "Map the core risks and benefits of both paths together and define a milestone that will trigger a final decision.",
      "Accuse them of lacking vision or being too risk-averse.",
      "Quietly take investor meetings without telling them.",
      "Decide alone and present it as a done deal.",
    ],
    0,
    "Collaborative risk mapping and objective milestones turn ideological standoffs into empirical strategic choices."
  ),
  q(
    "24-understanding-5", 24,
    "Your team disagrees passionately during planning sessions. A new hire seems uncomfortable with the tension.",
    "What's most useful to explain to them?",
    [
      "Healthy disagreement tests ideas from different angles — it produces stronger outcomes than artificial harmony.",
      "The team has a difficult dynamic — they'll need to learn to work around it.",
      "Conflict in planning sessions usually signals misaligned values or goals.",
      "Some people thrive in conflict-heavy environments — it depends on personality.",
    ],
    0,
    "Vigorous, respectful debate around ideas is the engine of high-performing, innovative teams."
  ),

  // ==========================================
  // CHAPTER 25: Repair after a difficult moment
  // ==========================================
  q(
    "25-action-1", 25,
    "You snapped at your partner when they asked a simple question after your rough work day.",
    "What would you do next?",
    [
      "Say: 'I'm sorry for snapping — you were just asking a question and I took my stress out on you.'",
      "Say: 'I'm sorry, but if you saw what my boss did today you'd understand.'",
      "Buy them something as a gesture and move on without discussing it.",
      "Wait for them to bring it up — then apologize if they seem upset.",
    ],
    0,
    "A clean apology names the behavior, validates the impact, takes ownership, and commits to doing better."
  ),
  q(
    "25-understanding-1", 25,
    "You apologize: 'I'm sorry I yelled, but you made me really angry.'",
    "What's wrong with this apology?",
    [
      "'But' immediately shifts blame back to them — it turns accountability into self-justification.",
      "It's too brief — a real apology needs more detail about what you did wrong.",
      "It's fine — acknowledging your emotion makes the apology feel more honest.",
      "Starting with 'I'm sorry' is enough — the 'but' just adds context.",
    ],
    0,
    "A genuine apology stands on its own — without conditional clauses or defensive justifications."
  ),
  q(
    "25-action-2", 25,
    "You promised to attend a friend's art exhibition but double-booked yourself and forgot.",
    "What would you do next?",
    [
      "Call directly, apologize sincerely, and ask if you can visit the gallery together on Sunday.",
      "Text 'Something came up' and never mention the exhibition again.",
      "Drop by for five minutes, take a photo, and leave.",
      "Blame your calendar app for not reminding you.",
    ],
    0,
    "Direct accountability plus a concrete caring reschedule shows you genuinely value their work."
  ),
  q(
    "25-understanding-2", 25,
    "You said sorry to a friend but they're still distant weeks later.",
    "What most likely needs to happen?",
    [
      "Consistent behavior change over time — words acknowledge the fracture, but actions rebuild the trust.",
      "Another conversation where you explain your intention more clearly.",
      "Give them more time — distance after an apology is normal and will pass.",
      "Ask them directly if they've forgiven you so you both know where you stand.",
    ],
    0,
    "Trust is rebuilt in consistent follow-through that proves the apology was a real commitment — not damage control."
  ),
  q(
    "25-action-3", 25,
    "You were short and irritable with a junior colleague all morning while your laptop was crashing.",
    "What would you do next?",
    [
      "Tell them: 'I was irritable this morning while dealing with tech issues. That wasn't fair to you — I'm sorry.'",
      "Assume they understood what was happening, so no apology is needed.",
      "Avoid them for the rest of the week until the awkwardness fades.",
      "Tell them difficult mornings are good prep for their career.",
    ],
    0,
    "Owning your misplaced frustration reassures junior colleagues they weren't at fault and builds psychological safety."
  ),
  q(
    "25-understanding-3", 25,
    "A leader you respect quickly admits when they're wrong. You find yourself trusting them more.",
    "What's the reason behind that response?",
    [
      "Prompt accountability enhances perceived integrity — defensive dodging actually damages credibility.",
      "They seem human and relatable — you trust people you can identify with.",
      "Admitting mistakes shows they're self-aware, which is a sign of good judgment.",
      "You trust them because they've proven they'll correct course when something goes wrong.",
    ],
    0,
    "Swift, dignified accountability is a mark of emotional strength — and it commands deep professional respect."
  ),
  q(
    "25-action-4", 25,
    "You accidentally leaked a teammate's confidential departure news before they could tell the team.",
    "What would you do next?",
    [
      "Go to them privately immediately, apologize for betraying their confidence, and ask how you can help now.",
      "Pretend someone else leaked it and act surprised.",
      "Avoid them until their last day hoping it blows over.",
      "Tell them you did them a favor — now they don't have to announce it.",
    ],
    0,
    "Facing the impact directly and offering to help with the fallout demonstrates real courage and remorse."
  ),
  q(
    "25-understanding-4", 25,
    "You apologized sincerely, but your friend hasn't forgiven you yet and needs more time.",
    "What's the right thing to do?",
    [
      "Respect their timeline — demanding fast forgiveness shifts the focus to easing your guilt.",
      "Check in again — they may need reminding that you're still sorry.",
      "Give it a week, then have an honest conversation about where you stand.",
      "Accept that the relationship may not survive this and start adjusting your expectations.",
    ],
    0,
    "Patiently giving others space to heal — without pressuring them — proves your apology was genuinely selfless."
  ),
  q(
    "25-action-5", 25,
    "You've been regularly talking over a quiet team member in brainstorming meetings.",
    "What would you do next?",
    [
      "Tell them privately: 'I've been talking over you and I want to fix that — next session I'll make sure you have the floor.'",
      "Announce in the next meeting that everyone should listen to this person more.",
      "Stop speaking in all meetings to compensate.",
      "Decide they probably don't have much to add since they're so quiet anyway.",
    ],
    0,
    "Recognizing a habitual pattern and naming a specific change creates real inclusion and lasting trust."
  ),
  q(
    "25-understanding-5", 25,
    "After hurting someone, you feel crushed by shame and can't bring yourself to apologize.",
    "What's the difference between that feeling and guilt?",
    [
      "Shame says 'I'm a bad person' — which leads to paralysis. Guilt says 'I did something hurtful' — which motivates repair.",
      "Shame is more honest — it reflects the seriousness of what happened.",
      "There's no practical difference — both are uncomfortable and should be moved through quickly.",
      "Guilt is the healthier emotion, but shame is usually what people feel first.",
    ],
    0,
    "Focusing on the behavior (healthy guilt) empowers repair — shame spirals force others to comfort you instead."
  ),
];
