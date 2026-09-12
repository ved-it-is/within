import { useEffect, useRef, useState } from "react";
import {
  arcade,
  questionById,
  readArcade,
  saveArcade,
  scoreAnswers,
  submitArcadeAnswer,
  advanceArcade,
  getEqLevel,
  getStreakTier,
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

// Domain colors for topic badges
const DOMAIN_COLORS = {
  awareness:     { bg: "#f0eaff", text: "#6c4cff", border: "#d4c8f8" },
  regulation:    { bg: "#fff7ed", text: "#c2410c", border: "#fed7aa" },
  perspective:   { bg: "#eff6ff", text: "#1d4ed8", border: "#bfdbfe" },
  empathy:       { bg: "#fdf2f8", text: "#be185d", border: "#fbcfe8" },
  communication: { bg: "#f0fdf4", text: "#065f46", border: "#a7f3d0" },
  resilience:    { bg: "#fffbeb", text: "#b45309", border: "#fde68a" },
  decisions:     { bg: "#f8fafc", text: "#475569", border: "#cbd5e1" },
};

export default function ArcadePage() {
  const [progress, setProgress] = useState(readArcade);
  const [storageAvailable, setStorageAvailable] = useState(true);

  // Streak-specific state
  const [justAnsweredWrong, setJustAnsweredWrong] = useState(false);
  const [questionsAnswered, setQuestionsAnswered] = useState([]);
  const [attempts, setAttempts] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState({});

  // Core Gamification state
  const [floatingXp, setFloatingXp] = useState(null);
  const [levelUpModal, setLevelUpModal] = useState(null);
  // Card animation key — changes on each new question to retrigger CSS animation
  const [questionKey, setQuestionKey] = useState(0);
  // Track the last answered choice index for ✓/✗ visual
  const [answeredChoice, setAnsweredChoice] = useState(null);

  const heading = useRef(null);

  useEffect(() => {
    setStorageAvailable(saveArcade(progress));
  }, [progress]);

  const question = questionById[progress.queue[0]];
  const feedback = progress.feedback;
  const score = scoreAnswers(progress.firstAnswers);
  const eqLevel = getEqLevel(score.points);

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
  const streakTier = getStreakTier(streak);

  // Monitor level progression and trigger celebration modal when crossing thresholds
  const prevLevelRef = useRef(eqLevel.level);
  useEffect(() => {
    if (eqLevel.level > prevLevelRef.current) {
      setLevelUpModal(eqLevel);
      prevLevelRef.current = eqLevel.level;
    }
  }, [eqLevel.level]);

  function handleAnswer(choice) {
    if (!question || feedback) return;

    const isCorrect = choice === question.correctIndex;
    const currentStreak = countConsecutiveCorrect(session.attempts, questionsAnswered, correctAnswers);

    // Track which button was pressed for ✓/✗ visual
    setAnsweredChoice(choice);

    // If user just got 1 wrong after a streak > 3, trigger the warning
    if (!isCorrect && currentStreak > 3) {
      setJustAnsweredWrong(true);
    } else {
      setJustAnsweredWrong(false);
    }

    if (isCorrect) {
      // Calculate XP bonus preview for floating animation
      const isFirstAttempt = !progress.firstAnswers || !Object.hasOwn(progress.firstAnswers, question.id);
      const earnedXp = isFirstAttempt ? Math.round(10 * streakTier.multiplier) : 10;
      setFloatingXp({
        id: Date.now(),
        text: `+${earnedXp} XP`,
        bonus: streakTier.multiplier > 1.0 ? streakTier.sparkleText : null,
        choiceIndex: choice,
      });
    } else {
      setFloatingXp(null);
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
    setFloatingXp(null);
    setAnsweredChoice(null);
    setQuestionKey((k) => k + 1);
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

        {/* EQ Level Progression Bar */}
        <article className="arcade-level-card" aria-label="EQ Level Progression">
          <div className="arcade-level-header">
            <div className="arcade-level-title-group">
              <span
                className="arcade-level-badge"
                style={{
                  backgroundColor: `${eqLevel.color}18`,
                  color: eqLevel.color,
                  borderColor: `${eqLevel.color}45`,
                }}
              >
                Level {eqLevel.level}
              </span>
              <span className="arcade-level-name">
                {eqLevel.icon} {eqLevel.title}
              </span>
            </div>
            <div className="arcade-level-stats">
              <span className="arcade-level-pts">{score.points} XP total</span>
              {eqLevel.next ? (
                <span className="arcade-level-next">
                  {eqLevel.pointsNeeded} XP to {eqLevel.next.icon} {eqLevel.next.title}
                </span>
              ) : (
                <span className="arcade-level-next max-level">✨ Mastered All EQ Tiers</span>
              )}
            </div>
          </div>
          <div
            className="arcade-level-bar-bg"
            role="progressbar"
            aria-valuenow={eqLevel.percent}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label={`Progress to next level: ${eqLevel.percent}%`}
          >
            <div
              className="arcade-level-bar-fill"
              style={{
                width: `${eqLevel.percent}%`,
                background: `linear-gradient(90deg, ${eqLevel.color}, ${
                  eqLevel.next ? eqLevel.next.color : eqLevel.color
                })`,
              }}
            />
          </div>
        </article>

        {/* Warning Card with Slide-in and Pulse animation */}
        {justAnsweredWrong && (
          <div className="arcade-streak-warning" role="alert">
            ⚡ Streak reset! Take a breath — build a fresh streak on this one.
          </div>
        )}

        {/* Top Display Grid with Streak Card (Accent Background) */}
        <div className="arcade-display-grid">
          <article className={`arcade-display-card streak-card accent-background ${streakTier.glowClass}`}>
            <div className="streak-top-row">
              <span className="streak-kicker">{streakTier.icon} Streak</span>
              {streakTier.badge ? (
                <span className={`streak-badge streak-badge-${streakTier.tier}`}>
                  {streakTier.badge}
                </span>
              ) : streak >= 1 ? (
                <span className="streak-badge streak-badge-active">Active</span>
              ) : null}
            </div>
            <strong className="streak-number">{streak}</strong>
            <span className="streak-caption">
              {streak >= 10
                ? "2.0x Double XP active! Unstoppable flow!"
                : streak >= 5
                ? "1.5x Flow active! You're in the zone!"
                : streak >= 3
                ? "1.2x Flame active! Heat is building up!"
                : streak === 1
                ? "1 consecutive correct answer"
                : `${streak} consecutive correct answers`}
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

        {question ? (() => {
          const domain = arcade.domains.find((d) => d.questionIds.includes(question.id));
          const domainColor = DOMAIN_COLORS[domain?.id] || DOMAIN_COLORS.decisions;
          return (
            <article className="lesson-card arcade-play arcade-card-enter" key={questionKey}>
              {/* Color-coded domain pill */}
              <div className="arcade-domain-row">
                <span
                  className="arcade-domain-pill"
                  style={{
                    background: domainColor.bg,
                    color: domainColor.text,
                    borderColor: domainColor.border,
                  }}
                >
                  {domain?.label || "EQ Practice"}
                </span>
                <span className="arcade-encounter-count">
                  {score.seen} / 700
                </span>
              </div>

              <h2 ref={heading} tabIndex={-1} className="arcade-situation">
                {question.situation}
              </h2>
              <p className="arcade-prompt">{question.prompt}</p>

              <div className="lesson-choices" aria-label="Choose a response">
                {question.choices.map((choice, index) => {
                  const isAnswered = answeredChoice !== null || !!feedback;
                  const isCorrectChoice = index === question.correctIndex;
                  const isChosen = answeredChoice === index || (feedback && feedback.choice === index);
                  const wasWrong = isChosen && !isCorrectChoice && isAnswered;
                  const isRight = isCorrectChoice && isAnswered;

                  return (
                    <button
                      key={index}
                      disabled={isAnswered}
                      aria-pressed={isChosen}
                      className={`arcade-choice-btn${isRight ? " practice-answer" : ""}${wasWrong ? " arcade-choice-wrong" : ""}`}
                      onClick={() => handleAnswer(index)}
                    >
                      <span
                        className={`arcade-letter${isRight ? " arcade-letter-correct" : ""}${wasWrong ? " arcade-letter-wrong" : ""}`}
                        aria-hidden="true"
                      >
                        {isRight ? "✓" : wasWrong ? "✗" : String.fromCharCode(65 + index)}
                      </span>
                      <span>{choice}</span>
                      {floatingXp && floatingXp.choiceIndex === index && (
                        <span className="floating-xp-pill" key={floatingXp.id}>
                          <span className="floating-xp-text">{floatingXp.text}</span>
                          {floatingXp.bonus && (
                            <span className="floating-xp-bonus">{floatingXp.bonus}</span>
                          )}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {feedback && (
                <div className="practice-feedback arcade-feedback-reveal" role="status">
                  <div className="arcade-feedback-header">
                    <span className={`arcade-feedback-icon ${feedback.outcome === "matched" ? "correct" : "retry"}`}>
                      {feedback.outcome === "matched" ? "✓" : "↩"}
                    </span>
                    <h3>
                      {feedback.outcome === "matched"
                        ? "That fits this situation."
                        : "Let's look at another approach."}
                    </h3>
                  </div>
                  <p className="arcade-feedback-answer">
                    <b>{question.choices[question.correctIndex]}</b>
                  </p>
                  <p className="arcade-feedback-explanation">{question.explanation}</p>
                  <button className="primary arcade-next-btn" onClick={next}>
                    Another moment →
                  </button>
                </div>
              )}
            </article>
          );
        })() : (
          <article className="lesson-card">
            <h2>Every question has been revealed.</h2>
            <p>
              You've retired all 700 questions. Your scores and topic coverage
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

        {/* Level-Up Celebration Modal */}
        {levelUpModal && (
          <div
            className="level-up-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="level-up-title"
          >
            <div className="level-up-modal">
              <div className="level-up-sparkles" aria-hidden="true">
                ✨ ✦ 🌟 ✦ ✨
              </div>
              <span className="level-up-kicker">EQ LEVEL ACHIEVED!</span>
              <div
                className="level-up-icon-wrap"
                style={{
                  borderColor: levelUpModal.color,
                  background: `${levelUpModal.color}15`,
                }}
              >
                <span className="level-up-icon">{levelUpModal.icon}</span>
              </div>
              <h2 id="level-up-title" className="level-up-title">
                Level {levelUpModal.level}: {levelUpModal.title}
              </h2>
              <p className="level-up-description">
                You crossed <strong>{levelUpModal.minPoints} XP</strong> in emotional intelligence practice! Your ability to pause, reflect, and choose conscious responses is expanding.
              </p>
              <div className="level-up-actions">
                <button
                  className="primary level-up-btn"
                  onClick={() => setLevelUpModal(null)}
                  autoFocus
                >
                  Keep Practicing →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
