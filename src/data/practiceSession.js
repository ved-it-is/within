export function createSession(questions) {
  return {
    version: 2,
    queue: questions.map((question) => question.id),
    outcomes: {},
    attempts: {},
    firstChoices: {},
    feedback: null,
    completed: false,
  };
}

export function answerQuestion(session, questions, choice) {
  if (session.feedback || session.completed) return session;
  const question = questions.find((item) => item.id === session.queue[0]);
  if (!question || (choice !== "unknown" && ![0, 1, 2, 3].includes(choice)))
    return session;
  const outcome =
    choice === "unknown"
      ? "revealed"
      : choice === question.correctIndex
        ? "matched"
        : "retry";
  return {
    ...session,
    outcomes: { ...session.outcomes, [question.id]: outcome },
    attempts: {
      ...session.attempts,
      [question.id]: (session.attempts[question.id] || 0) + 1,
    },
    firstChoices: Object.hasOwn(session.firstChoices || {}, question.id)
      ? session.firstChoices
      : { ...session.firstChoices, [question.id]: choice },
    feedback: { questionId: question.id, choice, outcome },
  };
}

export function nextQuestion(session) {
  if (!session.feedback) return session;
  const queue = session.queue.slice(1);
  if (session.feedback.outcome === "retry")
    queue.push(session.feedback.questionId);
  return { ...session, queue, feedback: null, completed: queue.length === 0 };
}

export function sessionCounts(session) {
  const values = Object.values(session.outcomes);
  return {
    matched: values.filter((value) => value === "matched").length,
    revealed: values.filter((value) => value === "revealed").length,
    retry: values.filter((value) => value === "retry").length,
  };
}

// Reject malformed saves rather than accidentally restoring an incomplete or
// duplicate queue. Only ids, response indices, and practice state are retained.
export function restoreSession(saved, questions) {
  if (!saved || saved.version !== 2 || !Array.isArray(saved.queue)) return null;
  const ids = new Set(questions.map((question) => question.id));
  if (
    new Set(saved.queue).size !== saved.queue.length ||
    saved.queue.some((id) => !ids.has(id))
  )
    return null;
  const outcomes = {};
  const attempts = {};
  for (const id of ids) {
    const outcome = saved.outcomes?.[id];
    const count = saved.attempts?.[id];
    if (outcome !== undefined) {
      if (
        !["matched", "revealed", "retry"].includes(outcome) ||
        !Number.isSafeInteger(count) ||
        count < 1
      )
        return null;
      outcomes[id] = outcome;
      attempts[id] = count;
    }
  }
  let feedback = null;
  const firstChoices = {};
  for (const id of ids) {
    if (!Object.hasOwn(saved.firstChoices || {}, id)) continue;
    const choice = saved.firstChoices[id];
    if (
      !attempts[id] ||
      (choice !== "unknown" && ![0, 1, 2, 3].includes(choice))
    )
      return null;
    const question = questions.find((item) => item.id === id);
    if (choice === "unknown" && outcomes[id] !== "revealed") return null;
    if (choice === question.correctIndex && outcomes[id] !== "matched")
      return null;
    firstChoices[id] = choice;
  }
  if (saved.feedback) {
    const { questionId, choice, outcome } = saved.feedback;
    const question = questions.find((item) => item.id === questionId);
    if (
      !question ||
      questionId !== saved.queue[0] ||
      (choice !== "unknown" && ![0, 1, 2, 3].includes(choice))
    )
      return null;
    const expected =
      choice === "unknown"
        ? "revealed"
        : choice === question.correctIndex
          ? "matched"
          : "retry";
    if (outcome !== expected || outcomes[questionId] !== outcome) return null;
    feedback = { questionId, choice, outcome };
  }
  for (const id of ids) {
    const active = !["matched", "revealed"].includes(outcomes[id]);
    if (saved.queue.includes(id) !== (active || feedback?.questionId === id))
      return null;
  }
  return {
    version: 2,
    queue: [...saved.queue],
    outcomes,
    attempts,
    firstChoices,
    feedback,
    completed: saved.queue.length === 0 && !feedback,
  };
}
