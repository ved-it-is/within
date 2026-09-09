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
export default function ArcadePage() {
  const [progress, setProgress] = useState(readArcade);
  const [storageAvailable, setStorageAvailable] = useState(true);
  const heading = useRef(null);
  useEffect(() => {
    setStorageAvailable(saveArcade(progress));
  }, [progress]);
  const question = questionById[progress.queue[0]],
    feedback = progress.feedback,
    score = scoreAnswers(progress.firstAnswers);
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
          <h1>One moment at a time.</h1>
          <p>
            A random mix of all seven topics. Stay for one question or keep
            going.
          </p>
        </header>
        {question ? (
          <article className="lesson-card">
            <span className="kicker">
              {
                arcade.domains.find((d) => d.questionIds.includes(question.id))
                  ?.label
              }
            </span>
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
                  onClick={() =>
                    setProgress((current) => submitArcadeAnswer(current, index))
                  }
                >
                  {choice}
                </button>
              ))}
              <button
                className="uncertain-choice"
                disabled={!!feedback}
                onClick={() =>
                  setProgress((current) =>
                    submitArcadeAnswer(current, "unknown"),
                  )
                }
              >
                I don’t know
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
                  Next question →
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
