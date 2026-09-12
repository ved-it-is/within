import { useEffect, useRef } from "react";
import { chapters, stages } from "../data/chapters";
import { chapterQuestions } from "../data/chapterQuestions";
import {
  answerQuestion,
  createSession,
  nextQuestion,
  sessionCounts,
} from "../data/practiceSession";

export default function ChapterPractice({
  chapter,
  record,
  onUpdate,
  storageAvailable,
}) {
  const questions = chapterQuestions[chapter.id] || [];
  const session = record?.session || createSession(questions);
  const questionId = session.queue[0];
  const question = questions.find((item) => item.id === questionId);
  const stage = stages.find((item) => item.id === chapter.stageId);
  const counts = sessionCounts(session);
  const settled = counts.matched + counts.revealed;
  const heading = useRef(null);
  const feedback = session.feedback;

  const attempt = question
    ? (session.attempts?.[question.id] || 0) - (feedback ? 1 : 0)
    : 0;
  const questionNumber = question ? questions.indexOf(question) + 1 : 0;
  const optionOrder = [0, 1, 2, 3].map((index) => (index + Math.max(0, attempt)) % 4);

  useEffect(() => {
    heading.current?.focus();
  }, [question?.id, attempt, session.completed]);

  function answer(choice) {
    onUpdate(chapter.id, (current) => ({
      session: answerQuestion(
        current.session || createSession(questions),
        questions,
        choice,
      ),
    }));
  }

  function advance() {
    onUpdate(chapter.id, (current) => {
      const next = nextQuestion(current.session || createSession(questions));
      return { session: next, completed: current.completed || next.completed };
    });
  }

  return (
    <section
      className="lesson-page chapter-practice-page"
      style={{
        "--stage-color": stage?.color || "#000",
        "--stage-tint": stage?.tint || "#fff",
      }}
    >
      <div className="learning-wrap">

        {/* ── Slim top nav strip ── */}
        <div className="chapter-practice-nav">
          <a className="back-pill-btn" href="#explore">
            <span className="back-pill-arrow" aria-hidden="true">←</span>
            <span>Chapters</span>
          </a>
          <span className="chapter-practice-title">
            Ch. {chapter.id} · {stage?.skill}
          </span>
          <span className="chapter-practice-count">
            {settled} / {questions.length} done
          </span>
        </div>

        {/* ── Thin progress pip row ── */}
        <ol className="chapter-pip-row" aria-label="Question progress">
          {questions.map((item, index) => (
            <li
              key={item.id}
              className={`chapter-pip ${session.outcomes[item.id] || ""} ${question?.id === item.id ? "current" : ""}`}
              aria-label={`Q${index + 1}`}
            />
          ))}
        </ol>

        {!storageAvailable && (
          <p className="notice" role="status">
            Progress can't be saved in this browser.
          </p>
        )}

        {/* ── Main content ── */}
        {session.completed || !question ? (
          <div className="lesson-card practice-summary">
            <span className="kicker">Session complete</span>
            <h2 ref={heading} tabIndex={-1}>
              You've worked through this set.
            </h2>
            <div className="practice-totals">
              <div>
                <strong>{counts.matched}</strong>
                <span>answered correctly</span>
              </div>
              <div>
                <strong>{counts.revealed}</strong>
                <span>answers revealed</span>
              </div>
            </div>
            <p className="lesson-help">
              This is a record of this practice session, not an EQ score or a
              judgment of you.
            </p>
            <div className="lesson-actions">
              <a className="text-link" href="#explore">
                Back to your journey
              </a>
              {chapter.id < chapters.length && (
                <a
                  className="primary"
                  href={`#explore/chapter/${chapter.id + 1}`}
                >
                  Next chapter →
                </a>
              )}
            </div>
            <button
              className="text-button restart-practice"
              onClick={() =>
                onUpdate(chapter.id, { session: createSession(questions) })
              }
            >
              Practise this set again
            </button>
          </div>
        ) : (
          <div className="lesson-card chapter-question-card arcade-card-enter">
            {/* Question meta: number + retry badge */}
            <div className="practice-question-meta">
              <span className="kicker">
                Question {questionNumber} of {questions.length}
              </span>
              {attempt > 0 && (
                <span className="review-badge">↺ Back for another try</span>
              )}
            </div>

            {/* Situation — hero text */}
            <h2 ref={heading} tabIndex={-1} className="chapter-situation">
              {question.situation}
            </h2>
            <p className="practice-prompt">{question.prompt}</p>

            {/* Answer choices */}
            <div
              className="lesson-choices"
              role="group"
              aria-label="Choose the response that fits this skill"
            >
              {optionOrder.map((optionIndex, displayIndex) => (
                <button
                  key={optionIndex}
                  disabled={!!feedback}
                  aria-pressed={feedback?.choice === optionIndex}
                  className={[
                    "chapter-choice-btn",
                    feedback && optionIndex === question.correctIndex ? "practice-answer chapter-correct" : "",
                    feedback && feedback.choice === optionIndex && optionIndex !== question.correctIndex ? "chapter-wrong" : "",
                  ].filter(Boolean).join(" ")}
                  onClick={() => answer(optionIndex)}
                >
                  <span className="choice-letter" aria-hidden="true">
                    {"ABCD"[displayIndex]}
                  </span>
                  <span>{question.choices[optionIndex]}</span>
                </button>
              ))}
              <button
                className="uncertain-choice"
                disabled={!!feedback}
                aria-pressed={feedback?.choice === "unknown"}
                onClick={() => answer("unknown")}
              >
                I don't know
              </button>
            </div>

            {/* Feedback */}
            {feedback && (
              <div
                className={`chapter-feedback chapter-feedback-${feedback.outcome === "matched" ? "correct" : "retry"}`}
                role="status"
              >
                <strong>
                  {feedback.outcome === "matched"
                    ? "That fits this skill."
                    : "Let's look at another approach."}
                </strong>
                <p>
                  <b>Best fit:</b> {question.choices[question.correctIndex]}
                </p>
                {question.kind === "action" && <p>{question.explanation}</p>}
                <div className="chapter-feedback-actions">
                  <a className="text-link" href="#explore">
                    Pause
                  </a>
                  <button className="primary" onClick={advance}>
                    {session.queue.length === 1
                      ? feedback.outcome === "retry"
                        ? "Try again →"
                        : "See summary →"
                      : feedback.outcome === "matched"
                      ? "Keep going →"
                      : "Got it →"}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        <p className="learning-footnote">
          Choose the response that best fits the stated skill and situation.
          This is learning practice, not a rating of your feelings.
        </p>
      </div>
    </section>
  );
}