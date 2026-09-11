import { useEffect, useRef, useState } from "react";
import {
  arcade,
  questionById,
  readArcade,
  saveArcade,
  scoreAnswers,
  submitArcadeAnswer,
  advanceArcade,
} from "../data/arcade";

/**
 * Counts consecutive correct answers in the current session looking from the most recent answers backwards.
 *
 * @param {Object} attempts - Map of questionId to attempt counts { [questionId]: number }
 * @param {Array} questionsAnswered - Chronological array of answered question objects or IDs
 * @param {Object|Set|Function} correctAnswers - Map of questionId -> correct choice/boolean, or Set of correct questionIds
 * @returns {number} The count of consecutive correct answers
 */
export function countConsecutiveCorrect(attempts, questionsAnswered, correctAnswers) {
  if (!Array.isArray(questionsAnswered) || questionsAnswered.length === 0) {
    return 0;
  }

  let streak = 0;

  // Traverse from the most recently answered question backwards
  for (let i = questionsAnswered.length - 1; i >= 0; i--) {
    const item = questionsAnswered[i];
    if (!item) continue;

    let isCorrect = false;

    if (typeof item === "object") {
      const qId = item.questionId || item.id;
      const choice = item.choice;

      if (typeof item.isCorrect === "boolean") {
        isCorrect = item.isCorrect;
      } else if (correctAnswers) {
        if (typeof correctAnswers === "function") {
          isCorrect = Boolean(correctAnswers(qId, choice));
        } else if (correctAnswers instanceof Set) {
          isCorrect = correctAnswers.has(qId);
        } else if (typeof correctAnswers[qId] === "boolean") {
          isCorrect = correctAnswers[qId];
        } else if (choice !== undefined && correctAnswers[qId] !== undefined) {
          isCorrect = choice === correctAnswers[qId];
        } else if (choice !== undefined && questionById[qId]) {
          isCorrect = choice === questionById[qId].correctIndex;
        }
      } else if (choice !== undefined && questionById[qId]) {
        isCorrect = choice === questionById[qId].correctIndex;
      }
    } else {
      // item is a primitive questionId string or number
      const qId = item;
      if (correctAnswers) {
        if (typeof correctAnswers === "function") {
          isCorrect = Boolean(correctAnswers(qId));
        } else if (correctAnswers instanceof Set) {
          isCorrect = correctAnswers.has(qId);
        } else if (typeof correctAnswers[qId] === "boolean") {
          isCorrect = correctAnswers[qId];
        } else if (attempts && attempts[qId] && typeof attempts[qId].isCorrect === "boolean") {
          isCorrect = attempts[qId].isCorrect;
        }
      }
    }

    if (isCorrect) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}

export default function ArcadePage() {
  const [progress, setProgress] = useState(readArcade);
  const [storageAvailable, setStorageAvailable] = useState(true);

  // Streak-specific state
  const [justAnsweredWrong, setJustAnsweredWrong] = useState(false);
  const [questionsAnswered, setQuestionsAnswered] = useState([]);
  const [attempts, setAttempts] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState({});

  const heading = useRef(null);

  useEffect(() => {
    setStorageAvailable(saveArcade(progress));
  }, [progress]);

  const question = questionById[progress.queue[0]];
  const feedback = progress.feedback;
  const score = scoreAnswers(progress.firstAnswers);

  // Session representation
  const session = {
    ...progress,
    attempts,
    queue: progress.queue,
  };

  // Reset streak and warning when session completes (all questions revealed or queue empty)
  useEffect(() => {
    if (!question || progress.queue.length === 0) {
      setQuestionsAnswered([]);
      setAttempts({});
      setJustAnsweredWrong(false);
    }
  }, [question, progress.queue.length]);

  // Calculate current streak in real-time
  const streak = countConsecutiveCorrect(session.attempts, questionsAnswered, correctAnswers);

  function handleAnswer(choice) {
    if (!question || feedback) return;

    const isCorrect = choice === question.correctIndex;
    const currentStreak = countConsecutiveCorrect(session.attempts, questionsAnswered, correctAnswers);

    // If user just got 1 wrong after a streak > 3, trigger the warning
    if (!isCorrect && currentStreak > 3) {
      setJustAnsweredWrong(true);
    } else {
      setJustAnsweredWrong(false);
    }

    const updatedAttempts = {
      ...attempts,
      [question.id]: (attempts[question.id] || 0) + 1,
    };
    const updatedAnswered = [
      ...questionsAnswered,
      { questionId: question.id, choice, isCorrect },
    ];
    const updatedCorrectAnswers = {
      ...correctAnswers,
      [question.id]: question.correctIndex,
    };

    setAttempts(updatedAttempts);
    setQuestionsAnswered(updatedAnswered);
    setCorrectAnswers(updatedCorrectAnswers);

    setProgress((current) => submitArcadeAnswer(current, choice));
  }

  function next() {
    setProgress((current) => advanceArcade(current));
    requestAnimationFrame(() => {
      heading.current?.focus();
      heading.current?.scrollIntoView({ block: "center", behavior: "smooth" });
    });
  }

  return (
    <section className="lesson-page arcade-endless">
      <div className="learning-wrap">
        <header className="chapter-browser-heading">
          <span className="kicker">Arcade · Endless practice</span>
          <h1>Small choices. Fresh perspectives.</h1>
          <p>
            Real-life moments, a little curiosity, and room to try again. Where
            will the next question take you?
          </p>
        </header>

        {/* Warning Card with Slide-in and Pulse animation */}
        {justAnsweredWrong && (
          <div className="arcade-streak-warning" role="alert">
            ⚠️ Streak टूट गई! अगले को सही करो
          </div>
        )}

        {/* Top Display Grid with Streak Card (Accent Background) */}
        <div className="arcade-display-grid">
          <article className="arcade-display-card streak-card accent-background">
            <div className="streak-top-row">
              <span className="streak-kicker">🔥 Streak</span>
              {streak >= 3 && <span className="streak-badge">On fire</span>}
            </div>
            <strong className="streak-number">{streak}</strong>
            <span className="streak-caption">
              {streak === 1 ? "consecutive correct answer" : "consecutive correct answers"}
            </span>
          </article>

          <article className="arcade-display-card">
            <div className="streak-top-row">
              <span className="stat-kicker">Lifetime Points</span>
            </div>
            <strong className="stat-number">{score.points}</strong>
            <span className="stat-caption">10 pts per first-attempt match</span>
          </article>

          <article className="arcade-display-card">
            <div className="streak-top-row">
              <span className="stat-kicker">First-Answer Accuracy</span>
            </div>
            <strong className="stat-number">
              {score.accuracy === null ? "—" : `${score.accuracy}%`}
            </strong>
            <span className="stat-caption">
              {score.seen} of 700 questions encountered
            </span>
          </article>
        </div>

        {question ? (
          <article className="lesson-card arcade-play">
            <span className="kicker">
              {
                arcade.domains.find((d) => d.questionIds.includes(question.id))
                  ?.label
              }
            </span>
            <div className="arcade-moment">
              <span aria-hidden="true">✦</span> A moment to explore{" "}
              <small>{score.seen} / 700 encountered</small>
            </div>
            <h2 ref={heading} tabIndex={-1}>
              {question.situation}
            </h2>
            <p>{question.prompt}</p>
            <div className="lesson-choices" aria-label="Choose a response">
              {question.choices.map((choice, index) => (
                <button
                  key={index}
                  disabled={!!feedback}
                  aria-pressed={feedback?.choice === index}
                  className={
                    feedback && index === question.correctIndex
                      ? "practice-answer"
                      : ""
                  }
                  onClick={() => handleAnswer(index)}
                >
                  <span className="arcade-letter" aria-hidden="true">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{choice}</span>
                </button>
              ))}
              <button
                className="uncertain-choice"
                disabled={!!feedback}
                onClick={() => handleAnswer("unknown")}
              >
                I don’t know · Show me a perspective
              </button>
            </div>
            {feedback && (
              <div className="practice-feedback" role="status">
                <h3>
                  {feedback.outcome === "matched"
                    ? "That fits this situation."
                    : feedback.outcome === "revealed"
                      ? "A perspective to take with you."
                      : "Let’s look at another approach."}
                </h3>
                <p>
                  <b>{question.choices[question.correctIndex]}</b>
                </p>
                <p>{question.explanation}</p>
                <p>
                  {feedback.outcome === "retry"
                    ? "This situation will return after a few others."
                    : feedback.outcome === "revealed"
                      ? "This question is now retired from your Arcade."
                      : ""}
                </p>
                <button className="primary" onClick={next}>
                  Another moment →
                </button>
              </div>
            )}
          </article>
        ) : (
          <article className="lesson-card">
            <h2>Every question has been revealed.</h2>
            <p>
              You’ve retired all 700 questions. Your scores and topic coverage
              are saved below.
            </p>
            <a className="primary" href="#explore">
              Explore the chapters →
            </a>
          </article>
        )}

        <section className="arcade-bank">
          <header className="chapter-browser-heading">
            <span className="kicker">Inside your question bank</span>
            <h2>700 questions. Seven topics.</h2>
            <p>
              {score.seen} of 700 unique questions encountered. Questions are
              shuffled across every topic. After a full pass, practice continues
              with another shuffle; revealed questions stay retired.
            </p>
          </header>
          <div className="arcade-stats">
            <article>
              <strong>{score.points}</strong>
              <span> points</span>
            </article>
            <article>
              <strong>
                {score.accuracy === null ? "—" : `${score.accuracy}%`}
              </strong>
              <span> first-answer accuracy</span>
            </article>
            <article>
              <strong>{score.seen}/700</strong>
              <span> encountered</span>
            </article>
          </div>
          <div className="arcade-skill-grid">
            {arcade.domains.map((domain, index) => {
              const result = scoreAnswers(
                progress.firstAnswers,
                domain.questionIds,
              );
              return (
                <article
                  className={`arcade-skill skill-tone-${index % 4}`}
                  key={domain.id}
                >
                  <h3>{domain.label}</h3>
                  <strong>
                    {result.accuracy === null ? "—" : `${result.accuracy}%`}
                  </strong>
                  <p>
                    {result.correct} / {result.answered} first answers match
                  </p>
                  <progress
                    value={result.seen}
                    max={domain.questionIds.length}
                    aria-label={`${domain.label} coverage`}
                  />
                  <small>
                    {result.seen}/{domain.questionIds.length} encountered ·{" "}
                    {result.unknown} initially revealed
                  </small>
                </article>
              );
            })}
          </div>
          <div className="notice">
            <b>How your score works</b>
            <p>
              Ten points for each unique question answered with the best-fit
              response on your first attempt. Accuracy is first-attempt matches
              divided by answered questions. “I don’t know” is shown separately
              and excluded from accuracy. Retries and repeat visits add no extra
              points.
            </p>
            <p>
              These are practice results based on editorial answer keys, not a
              validated EQ assessment or a measure of your worth. Some questions
              are shared with chapters.
            </p>
          </div>
          <p className="learning-footnote" role="status">
            {storageAvailable
              ? "Progress is saved on this device and synced when you are signed in."
              : "Browser storage is unavailable. Progress lasts while this page stays open."}
          </p>
        </section>
      </div>
    </section>
  );
}
