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
  const questions = chapterQuestions[chapter.id];
  const session = record?.session || createSession(questions);
  const question = questions.find((item) => item.id === session.queue[0]);
  const stage = stages.find((item) => item.id === chapter.stageId);
  const counts = sessionCounts(session);
  const settled = counts.matched + counts.revealed;
  const heading = useRef(null);
  const feedback = session.feedback;
  const attempt = question
    ? (session.attempts[question.id] || 0) - (feedback ? 1 : 0)
    : 0;
  const questionNumber = question ? questions.indexOf(question) + 1 : 0;
  const optionOrder = [0, 1, 2, 3].map((index) => (index + attempt) % 4);

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
      className="lesson-page"
      style={{ "--stage-color": stage.color, "--stage-tint": stage.tint }}
    >
      <div className="learning-wrap">
        <a className="text-link" href="#explore">
          ← All chapters
        </a>
        <header className="lesson-header">
          <span className="kicker">
            Chapter {chapter.id} · {stage.skill}
          </span>
          <h1>{chapter.title}</h1>
          <p className="practice-intro">
            10 questions. Learn through your choices. Questions to practise
            again return after the others; “I don’t know” reveals the answer and
            removes that question from this session.
          </p>
        </header>
        {!storageAvailable && (
          <p className="notice" role="status">
            Progress can’t be saved in this browser. Keep this page open to
            continue this session.
          </p>
        )}
        <div className="practice-progress">
          <div>
            <strong>
              {settled} of {questions.length} questions finished
            </strong>
            <span>
              {counts.matched} matched · {counts.revealed} revealed
            </span>
          </div>
          <ol aria-label="Question progress">
            {questions.map((item, index) => (
              <li
                key={item.id}
                className={session.outcomes[item.id] || ""}
                aria-current={question?.id === item.id ? "step" : undefined}
                aria-label={`Question ${index + 1}: ${session.outcomes[item.id] === "matched" ? "answered correctly" : session.outcomes[item.id] === "revealed" ? "answer revealed; will not repeat" : session.outcomes[item.id] === "retry" ? "will return for practice" : "not answered"}`}
              >
                <span aria-hidden="true">{index + 1}</span>
              </li>
            ))}
          </ol>
        </div>
        {session.completed ? (
          <div className="lesson-card practice-summary">
            <span className="kicker">Session complete</span>
            <h2 ref={heading} tabIndex={-1}>
              You’ve worked through this set.
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
            <p>
              Revealed questions are not counted as correct answers. They did
              not repeat, and no replacement questions were added.
            </p>
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
            <p className="lesson-help">
              Starts a new session with all ten questions. Your chapter
              completion stays saved.
            </p>
          </div>
        ) : (
          <div className="lesson-card">
            <div className="practice-question-meta">
              <span className="kicker">
                Question {questionNumber} of {questions.length}
              </span>
              {attempt > 0 && (
                <span className="review-badge">↺ Back for another try</span>
              )}
            </div>
            <h2 ref={heading} tabIndex={-1}>
              {question.situation}
            </h2>
            <p className="practice-prompt">{question.prompt}</p>
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
                  className={
                    feedback && optionIndex === question.correctIndex
                      ? "practice-answer"
                      : ""
                  }
                  onClick={() => answer(optionIndex)}
                >
                  <span className="choice-letter" aria-hidden="true">
                    {"ABCD"[displayIndex]}
                  </span>
                  <span>{question.choices[optionIndex]}</span>
                  {feedback && optionIndex === question.correctIndex && (
                    <span className="answer-label">Best fit</span>
                  )}
                </button>
              ))}
              <button
                className="uncertain-choice"
                disabled={!!feedback}
                aria-pressed={feedback?.choice === "unknown"}
                onClick={() => answer("unknown")}
              >
                I don’t know
              </button>
            </div>
            {feedback && (
              <div
                className={`lesson-perspective practice-feedback ${feedback.outcome}`}
                role="status"
              >
                <strong>
                  {feedback.outcome === "matched"
                    ? "That fits this skill."
                    : feedback.outcome === "revealed"
                      ? "Here’s the answer to learn from."
                      : "Let’s revisit this one."}
                </strong>
                <p>
                  <b>Best fit:</b> {question.choices[question.correctIndex]}
                </p>
                {question.kind === "action" && <p>{question.explanation}</p>}
                <small>
                  {feedback.outcome === "matched"
                    ? "This question is finished for this session."
                    : feedback.outcome === "revealed"
                      ? "This question will not return in this session. No replacement will be added."
                      : "This choice doesn’t match the skill this question is practising. The same question will return after the other queued questions."}
                </small>
              </div>
            )}
            <div className="lesson-actions">
              <a className="text-link" href="#explore">
                Pause & return to chapters
              </a>
              {feedback && (
                <button className="primary" onClick={advance}>
                  {session.queue.length === 1
                    ? feedback.outcome === "retry"
                      ? "Try this question again →"
                      : "See session summary →"
                    : "Next question →"}
                </button>
              )}
            </div>
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
