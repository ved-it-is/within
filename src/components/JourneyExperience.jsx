import { useEffect, useRef, useState } from "react";
import { abilities, questions } from "../data/questions";

const prompts = {
  awareness: "Which feelings were easiest to recognise?",
  perspective: "Where might another explanation help?",
  regulation: "When would a pause give you more choice?",
  communication: "What would you like to express more clearly?",
  empathy: "What might someone else need in those moments?",
  resilience: "What would help you find your next step?",
};

// Deliberate conversational pacing, not a claim of remote analysis.
const REPLY_DELAY = 1000;
const RESULTS_DELAY = 1400;

export default function JourneyExperience({ onUnlock, completed, onRestart }) {
  const [stage, setStage] = useState("hello");
  const [feeling, setFeeling] = useState("");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [picked, setPicked] = useState(null);
  const [feedbackReady, setFeedbackReady] = useState(false);
  const [pending, setPending] = useState("");
  const timer = useRef(null);
  const question = questions[index];

  useEffect(() => () => clearTimeout(timer.current), []);

  function replyAfter(callback, message, delay = REPLY_DELAY) {
    if (timer.current !== null) return;
    setPending(message);
    timer.current = setTimeout(() => {
      timer.current = null;
      setPending("");
      callback();
    }, delay);
  }

  function answer(choice) {
    if (picked !== null || timer.current !== null) return;
    setPicked(choice);
    setAnswers((current) => ({ ...current, [question.id]: choice }));
    replyAfter(() => setFeedbackReady(true), "Preparing a perspective…");
  }

  function next() {
    if (timer.current !== null) return;
    if (index === questions.length - 1) {
      replyAfter(
        () => {
          setStage("results");
          onUnlock(answers);
        },
        "Preparing your starting reflections…",
        RESULTS_DELAY,
      );
    } else {
      setIndex((current) => current + 1);
      setPicked(null);
      setFeedbackReady(false);
    }
  }

  return (
    <section className="journey" id="journey">
      <div className="wrap">
        <header>
          <span className="kicker">Your starting point</span>
          <h2>Begin with a simple conversation.</h2>
        </header>
        {completed && (
          <div className="intro-completion">
            <span>
              Introduction complete · Explore and Arcade are unlocked on this
              browser.
            </span>
            <button onClick={onRestart}>Restart introduction</button>
          </div>
        )}
        <div className="chat">
          <div className="chat-top">
            <b>Within</b>
            <span>A private starting experience</span>
          </div>
          <div className="chat-body">
            {stage === "hello" && (
              <>
                <div className="bubble bot">Hello. How are you today?</div>
                <form
                  className="composer"
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (!feeling.trim() || timer.current !== null) return;
                    setStage("replying");
                    replyAfter(() => setStage("intro"), "Within is replying…");
                  }}
                >
                  <input
                    aria-label="How are you feeling today?"
                    value={feeling}
                    maxLength={280}
                    onChange={(event) => setFeeling(event.target.value)}
                    placeholder="Write anything that feels true…"
                  />
                  <button type="submit" disabled={!feeling.trim() || !!pending}>
                    Send
                  </button>
                </form>
              </>
            )}
            {stage === "replying" && (
              <div className="bubble user">{feeling}</div>
            )}
            {stage === "intro" && (
              <>
                <div className="bubble user">{feeling}</div>
                <div className="bubble bot">
                  Thank you for sharing. Let’s explore five everyday situations
                  and notice what feels familiar to you.
                </div>
                <div className="notice">
                  <b>Before we begin:</b> This is educational practice, not
                  therapy or a diagnosis. There is no score to reach, and “I’m
                  not sure” is always welcome.
                </div>
                <button className="primary" onClick={() => setStage("quiz")}>
                  Begin the five situations →
                </button>
              </>
            )}
            {stage === "quiz" && (
              <div className="quiz">
                <div className="progress">
                  Situation {index + 1} of {questions.length}
                  <i
                    style={{
                      width: `${((index + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>
                <h3>{question.text}</h3>
                <div className="answers">
                  {question.choices.map((choice, choiceIndex) => (
                    <button
                      key={choice}
                      disabled={picked !== null || !!pending}
                      aria-pressed={picked === choiceIndex}
                      className={picked === choiceIndex ? "selected" : ""}
                      onClick={() => answer(choiceIndex)}
                    >
                      {choice}
                    </button>
                  ))}
                  <button
                    disabled={picked !== null || !!pending}
                    aria-pressed={picked === "unknown"}
                    className={picked === "unknown" ? "selected" : ""}
                    onClick={() => answer("unknown")}
                  >
                    I’m not sure
                  </button>
                </div>
                {feedbackReady && (
                  <>
                    <div className="feedback" role="status">
                      <b>A perspective worth noticing</b>
                      <br />
                      {picked === "unknown" &&
                        "Uncertainty is a starting point too. "}
                      {question.insight}
                    </div>
                    <button
                      className="next"
                      disabled={!!pending}
                      onClick={next}
                    >
                      {index === questions.length - 1
                        ? "See my starting reflections →"
                        : "Next situation →"}
                    </button>
                  </>
                )}
              </div>
            )}
            {!!pending && (
              <div className="reply-indicator" role="status">
                <span className="reply-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>{pending}</span>
              </div>
            )}
            {stage === "results" && (
              <div className="results">
                <span className="kicker">Your starting reflections</span>
                <h3>Six ways to keep getting to know yourself.</h3>
                <p>
                  These prompts are for reflection, not ratings of your
                  abilities. Five situations cannot define your emotional
                  intelligence.
                </p>
                <div className="result-grid">
                  {Object.entries(abilities).map(([key, label]) => (
                    <div className="result reflection-result" key={key}>
                      <b>{label}</b>
                      <span>{prompts[key]}</span>
                    </div>
                  ))}
                </div>
                <div className="unlocked">
                  <b>Your learning journey is open.</b>
                  <p>Choose from 31 chapters, at your own pace.</p>
                  <a className="primary" href="#explore">
                    Explore the chapters →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
