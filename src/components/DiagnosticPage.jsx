import { useState, useRef } from "react";
import {
  DIAGNOSTIC_QUESTIONS,
  PILLARS_CONFIG,
  calculateDiagnosticScores,
  determineArchetype,
  readDiagnosticResult,
  saveDiagnosticResult,
} from "../data/diagnostic.js";

function RadarChart({ scores }) {
  const size = 320;
  const center = size / 2;
  const radius = 105;

  const points = PILLARS_CONFIG.map((p) => {
    const angleRad = (p.angle * Math.PI) / 180;
    const val = (scores[p.id] || 50) / 100;
    const r = radius * val;
    const x = center + r * Math.cos(angleRad);
    const y = center + r * Math.sin(angleRad);
    return { x, y, ...p };
  });

  const polygonPath = points.map((pt) => `${pt.x},${pt.y}`).join(" ");

  // Grid levels (25%, 50%, 75%, 100%)
  const levels = [0.25, 0.5, 0.75, 1.0];

  return (
    <div className="radar-chart-wrap">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="eq-radar-svg"
        aria-label="EQ Radar Chart"
      >
        {/* Concentric Polygons */}
        {levels.map((lvl) => {
          const gridPts = PILLARS_CONFIG.map((p) => {
            const a = (p.angle * Math.PI) / 180;
            const r = radius * lvl;
            return `${center + r * Math.cos(a)},${center + r * Math.sin(a)}`;
          }).join(" ");
          return (
            <polygon
              key={lvl}
              points={gridPts}
              className="radar-grid-polygon"
              strokeDasharray={lvl < 1.0 ? "3 3" : undefined}
            />
          );
        })}

        {/* Axis Lines */}
        {PILLARS_CONFIG.map((p) => {
          const a = (p.angle * Math.PI) / 180;
          const x2 = center + radius * Math.cos(a);
          const y2 = center + radius * Math.sin(a);
          return (
            <line
              key={p.id}
              x1={center}
              y1={center}
              x2={x2}
              y2={y2}
              className="radar-axis-line"
            />
          );
        })}

        {/* User Score Filled Polygon */}
        <polygon points={polygonPath} className="radar-user-polygon" />

        {/* User Score Vertex Dots */}
        {points.map((pt) => (
          <circle
            key={pt.id}
            cx={pt.x}
            cy={pt.y}
            r={5}
            className="radar-vertex-dot"
            fill={pt.color}
          />
        ))}

        {/* Axis Labels */}
        {PILLARS_CONFIG.map((p) => {
          const a = (p.angle * Math.PI) / 180;
          const labelR = radius + 28;
          const lx = center + labelR * Math.cos(a);
          const ly = center + labelR * Math.sin(a);
          return (
            <text
              key={p.id}
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="central"
              className="radar-label"
            >
              {p.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

export default function DiagnosticPage({ unlocked }) {
  const existingResult = readDiagnosticResult();
  const [view, setView] = useState(() => (existingResult ? "results" : "intro"));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(existingResult);

  const cardRef = useRef(null);

  const currentQ = DIAGNOSTIC_QUESTIONS[currentIndex];
  const progressPercent = Math.round(((currentIndex + 1) / DIAGNOSTIC_QUESTIONS.length) * 100);

  function handleSelectOption(optionIndex) {
    const updatedAnswers = { ...answers, [currentQ.id]: optionIndex };
    setAnswers(updatedAnswers);

    if (currentIndex < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentIndex((idx) => idx + 1);
    } else {
      // Calculate and finalize results
      const scores = calculateDiagnosticScores(updatedAnswers);
      const archetype = determineArchetype(scores);
      const finalResult = {
        scores,
        archetype,
        completedAt: new Date().toISOString(),
      };
      saveDiagnosticResult(finalResult);
      setResult(finalResult);
      setView("results");
    }

    requestAnimationFrame(() => {
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex((idx) => idx - 1);
    }
  }

  function handleRetake() {
    setAnswers({});
    setCurrentIndex(0);
    setView("quiz");
  }

  return (
    <section className="lesson-page diagnostic-page">
      <div className="learning-wrap">
        {/* Sleek Top Navigation Bar */}
        <div className="page-top-bar">
          <a className="back-pill-btn" href="#home">
            <span className="back-pill-arrow" aria-hidden="true">←</span>
            <span>Home</span>
          </a>
          <span className="page-breadcrumb-current">EQ Baseline Diagnostic</span>
        </div>

        {/* STEP 1: INTRO */}
        {view === "intro" && (
          <article className="diagnostic-intro-card">
            <span className="kicker">Self-Discovery · 3-Minute Baseline</span>
            <h1>Discover Your Emotional Baseline & Archetype</h1>
            <p className="diag-lead">
              You cannot train emotional intelligence in the dark. This short 10-situation
              diagnostic gives you an honest mirror across the five core dimensions of EQ,
              uncovering your natural superpower and your highest-leverage growth edge.
            </p>

            <div className="diag-perks-row">
              <div className="diag-perk">
                <span className="perk-bullet" aria-hidden="true">🧭</span>
                <div>
                  <strong>No Judgment or Scorecards</strong>
                  <p>Every response reflects an authentic human coping reflex.</p>
                </div>
              </div>
              <div className="diag-perk">
                <span className="perk-bullet" aria-hidden="true">📊</span>
                <div>
                  <strong>Personal 5-Pillar Spider Chart</strong>
                  <p>Visual map of awareness, regulation, empathy, communication, and resilience.</p>
                </div>
              </div>
              <div className="diag-perk">
                <span className="perk-bullet" aria-hidden="true">🎯</span>
                <div>
                  <strong>Tailored Curriculum</strong>
                  <p>Direct prescription of 3 specific chapters suited to your edge.</p>
                </div>
              </div>
            </div>

            <button
              className="primary diag-start-btn"
              onClick={() => setView("quiz")}
            >
              Begin Diagnostic (10 Moments) →
            </button>
          </article>
        )}

        {/* STEP 2: QUIZ SCENARIOS */}
        {view === "quiz" && currentQ && (
          <article className="lesson-card diag-quiz-card" ref={cardRef}>
            <div className="quiz-header-row">
              <span className="kicker">
                Prompt {currentIndex + 1} of {DIAGNOSTIC_QUESTIONS.length} · {PILLARS_CONFIG.find((p) => p.id === currentQ.pillar)?.label}
              </span>
              <span className="quiz-progress-text">{progressPercent}%</span>
            </div>

            {/* Progress Bar */}
            <div className="quiz-progress-track">
              <div
                className="quiz-progress-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <h2 className="quiz-prompt-title">{currentQ.prompt}</h2>

            <div className="diag-choices-list" role="group" aria-label="Choose your typical response">
              {currentQ.options.map((opt, idx) => (
                <button
                  key={idx}
                  className={`diag-choice-btn ${answers[currentQ.id] === idx ? "is-selected" : ""}`}
                  onClick={() => handleSelectOption(idx)}
                >
                  <span className="diag-choice-letter" aria-hidden="true">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="diag-choice-text">{opt.text}</span>
                </button>
              ))}
            </div>

            {currentIndex > 0 && (
              <div className="quiz-nav-row">
                <button className="text-link" onClick={handlePrevious}>
                  ← Previous question
                </button>
              </div>
            )}
          </article>
        )}

        {/* STEP 3: RESULTS & ARCHETYPE PROFILE */}
        {view === "results" && result && (
          <div className="diag-results-wrap">
            <header className="chapter-browser-heading">
              <span className="kicker">Your Baseline Profile</span>
              <h1>Your Emotional Archetype & Radar</h1>
              <p>
                Based on your responses, here is your current emotional baseline,
                your dominant strength, and your recommended growth edge.
              </p>
            </header>

            {/* Archetype Hero Card */}
            <article className="archetype-hero-card">
              <div className="archetype-header">
                <span className="archetype-icon-circle" aria-hidden="true">
                  {result.archetype.icon}
                </span>
                <div>
                  <span
                    className="archetype-pill"
                    style={{ backgroundColor: result.archetype.badgeColor }}
                  >
                    Primary Archetype
                  </span>
                  <h2>{result.archetype.title}</h2>
                  <p className="archetype-tagline">{result.archetype.tagline}</p>
                </div>
              </div>

              <div className="archetype-dynamics-grid">
                <div className="dynamic-box superpower">
                  <span className="dynamic-label">🌟 Your Core Superpower</span>
                  <p>{result.archetype.superpower}</p>
                </div>

                <div className="dynamic-box growth-edge">
                  <span className="dynamic-label">🌱 Your Highest-Leverage Growth Edge</span>
                  <p>{result.archetype.growthEdge}</p>
                </div>
              </div>
            </article>

            {/* Radar Spider Chart & Score Breakdown Grid */}
            <div className="diag-charts-layout">
              <div className="radar-card">
                <h3>5-Dimension EQ Radar</h3>
                <RadarChart scores={result.scores} />
              </div>

              <div className="scores-breakdown-card">
                <h3>Pillar Balance</h3>
                <div className="pillar-bars-list">
                  {PILLARS_CONFIG.map((p) => {
                    const val = result.scores[p.id] || 50;
                    return (
                      <div key={p.id} className="pillar-score-row">
                        <div className="score-row-header">
                          <span className="pillar-name">{p.label}</span>
                          <span className="pillar-pct" style={{ color: p.color }}>
                            {val}%
                          </span>
                        </div>
                        <div className="pillar-bar-track">
                          <div
                            className="pillar-bar-fill"
                            style={{
                              width: `${val}%`,
                              backgroundColor: p.color,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Personalized Recommended 3-Chapter Curriculum */}
            <section className="tailored-curriculum-section">
              <header className="chapter-browser-heading">
                <span className="kicker">Prescribed Next Steps</span>
                <h2>Your Tailored Practice Pathway</h2>
                <p>
                  Rather than browsing all 31 chapters at random, start with these
                  three focused modules specifically designed for your growth edge:
                </p>
              </header>

              <div className="rec-chapters-grid">
                {result.archetype.recommendedChapters.map((ch, idx) => (
                  <article key={ch.id} className="rec-chapter-card">
                    <span className="rec-chapter-step">Step {idx + 1}</span>
                    <h4>
                      Chapter {ch.id}: {ch.title}
                    </h4>
                    {unlocked ? (
                      <a
                        className="primary rec-chapter-link"
                        href={`#explore/chapter/${ch.id}`}
                      >
                        Start Practice →
                      </a>
                    ) : (
                      <a className="primary rec-chapter-link" href="#journey">
                        Unlock Chapter →
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </section>

            {/* Bottom Actions */}
            <div className="diag-results-footer">
              <button className="secondary" onClick={handleRetake}>
                Retake Diagnostic ↺
              </button>
              <a className="secondary" href="#tracker">
                Log Today’s Check-In 📊
              </a>
              <a className="secondary" href="#arcade">
                Explore Arcade ✧
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
