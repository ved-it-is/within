import { useState } from "react";

export const APP_SECTIONS = [
  {
    step: "1",
    id: "diagnostic",
    title: "EQ Archetype Test",
    badge: "Recommended First Step",
    time: "3 mins",
    icon: "🧭",
    color: "#4f46e5",
    tint: "#eef2ff",
    href: "#diagnostic",
    whatItIs: "A quick 10-question diagnostic that measures your emotional baseline across 5 psychological pillars.",
    whyUseIt: "Find out your unique emotional archetype (e.g. Empathetic Sensor, Calm Strategist) and discover which chapters will help you grow the fastest."
  },
  {
    step: "2",
    id: "explore",
    title: "31 Guided Chapters",
    badge: "Core Curriculum",
    time: "10 scenarios each",
    icon: "🗺️",
    color: "#059669",
    tint: "#ecfdf5",
    href: "#explore",
    whatItIs: "A structured, progressive journey through 31 real-life human dilemmas across 7 developmental stages.",
    whyUseIt: "Learn through choices rather than dry theory. Discover why certain responses escalate tension while others resolve conflict smoothly."
  },
  {
    step: "3",
    id: "arcade",
    title: "Arcade Practice",
    badge: "Daily Reflex Training",
    time: "Endless 60s rounds",
    icon: "⚡",
    color: "#d97706",
    tint: "#fffbeb",
    href: "#arcade",
    whatItIs: "An endless, randomized practice gym with 700 scenario variations, streak multipliers, and EQ levels.",
    whyUseIt: "Turn thoughtful pause into an unconscious reflex. Build streaks, earn XP, and practice the everyday moments most people skip."
  },
  {
    step: "4",
    id: "tracker",
    title: "Daily Somatic Tracker",
    badge: "Daily Check-in",
    time: "30 seconds",
    icon: "🫀",
    color: "#db2777",
    tint: "#fdf2f8",
    href: "#tracker",
    whatItIs: "A private journal where you log how you feel and where tension builds up in your body (jaw, throat, chest, gut).",
    whyUseIt: "Connect your physical body to your emotional state. Receive smart chapter recommendations based on the exact emotion you log."
  },
  {
    step: "5",
    id: "science",
    title: "3D Brain & Somatic Map",
    badge: "The Science",
    time: "Interactive Explorer",
    icon: "🧠",
    color: "#7c3aed",
    tint: "#f5f3ff",
    href: "#emotional-intelligence",
    whatItIs: "An interactive 3D model of the human brain and peer-reviewed somatic mapping of how emotions manifest physically.",
    whyUseIt: "Understand how the amygdala, prefrontal cortex, and vagus nerve dictate your stress reactions, and learn real physical reset techniques."
  }
];

export default function NewUserGuide({ isModal = false, onClose = null }) {
  const [activeTab, setActiveTab] = useState("path"); // "path" | "quick-match"
  const [userGoal, setUserGoal] = useState("baseline"); // "baseline" | "practice" | "stressed" | "learn"

  const goalRecommendations = {
    baseline: {
      action: "Take the 3-Minute EQ Archetype Test",
      href: "#diagnostic",
      icon: "🧭",
      text: "Start by uncovering your personal strengths, blind spots, and recommended curriculum chapters.",
      btnText: "Take the Test →"
    },
    practice: {
      action: "Jump into Arcade or Chapter 1",
      href: "#explore/chapter/1",
      icon: "⚡",
      text: "Start with Chapter 1: 'Noticing the Inner Climate' or play quick-fire rounds in the Arcade.",
      btnText: "Start Chapter 1 →"
    },
    stressed: {
      action: "Use the Somatic Tracker & Box Breathing",
      href: "#tracker",
      icon: "🫀",
      text: "Tune into where tension lives in your body right now and let the smart engine suggest relevant relief practices.",
      btnText: "Check In With Your Body →"
    },
    learn: {
      action: "Explore the 3D Brain & Somatic Map",
      href: "#emotional-intelligence",
      icon: "🧠",
      text: "Rotate the 3D brain and see how cortisol, adrenaline, and neural circuits shape your high-stress moments.",
      btnText: "Explore the Brain →"
    }
  };

  const rec = goalRecommendations[userGoal];

  const content = (
    <div className={`user-guide-wrapper ${isModal ? "is-modal-layout" : ""}`}>
      {/* Header */}
      <div className="user-guide-header">
        <div className="guide-kicker-row">
          <span className="kicker">ORIENTATION & ROADMAP</span>
          {isModal && onClose && (
            <button
              type="button"
              className="guide-modal-close-btn"
              onClick={onClose}
              aria-label="Close guide"
            >
              ✕
            </button>
          )}
        </div>
        <h2 className="guide-title">How to Use Within</h2>
        <p className="guide-lead">
          Within is designed like a gym for your mind and nervous system. Here is
          which tool does what and where to start based on what you need today.
        </p>

        {/* Mode Switcher */}
        <div className="guide-mode-switch" role="tablist" aria-label="Guide view mode">
          <button
            type="button"
            className={`guide-switch-btn ${activeTab === "path" ? "is-active" : ""}`}
            onClick={() => setActiveTab("path")}
          >
            🗺️ The 4-Step Journey
          </button>
          <button
            type="button"
            className={`guide-switch-btn ${activeTab === "quick-match" ? "is-active" : ""}`}
            onClick={() => setActiveTab("quick-match")}
          >
            🎯 What is your goal right now?
          </button>
        </div>
      </div>

      {activeTab === "path" ? (
        /* --- 4-STEP PATH VIEW --- */
        <div className="guide-path-grid">
          {APP_SECTIONS.map((section) => (
            <div
              key={section.id}
              className="guide-step-card"
              style={{
                "--step-color": section.color,
                "--step-tint": section.tint,
              }}
            >
              <div className="step-card-top">
                <div className="step-number-badge">Step {section.step}</div>
                <span className="step-time-tag">{section.time}</span>
              </div>

              <div className="step-card-title-row">
                <span className="step-icon">{section.icon}</span>
                <div>
                  <span className="step-badge">{section.badge}</span>
                  <h3 className="step-name">{section.title}</h3>
                </div>
              </div>

              <div className="step-card-body">
                <div className="step-desc-block">
                  <strong>What it is:</strong>
                  <p>{section.whatItIs}</p>
                </div>
                <div className="step-desc-block">
                  <strong>Why start here:</strong>
                  <p>{section.whyUseIt}</p>
                </div>
              </div>

              <div className="step-card-footer">
                <a
                  className="step-action-link"
                  href={section.href}
                  onClick={isModal && onClose ? onClose : undefined}
                >
                  Go to {section.title} →
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* --- GOAL-BASED QUICK MATCH --- */
        <div className="guide-goal-wrapper">
          <div className="goal-options-grid" role="radiogroup" aria-label="Select your immediate goal">
            {[
              { key: "baseline", label: "I want to know where I stand", icon: "🧭" },
              { key: "practice", label: "I want to practice real dilemmas", icon: "⚡" },
              { key: "stressed", label: "I feel stressed or overwhelmed right now", icon: "🫀" },
              { key: "learn", label: "I want to understand the neuroscience", icon: "🧠" },
            ].map((option) => (
              <button
                key={option.key}
                type="button"
                role="radio"
                aria-checked={userGoal === option.key}
                className={`goal-btn ${userGoal === option.key ? "is-selected" : ""}`}
                onClick={() => setUserGoal(option.key)}
              >
                <span className="goal-icon">{option.icon}</span>
                <span className="goal-label">{option.label}</span>
              </button>
            ))}
          </div>

          <div className="goal-result-card">
            <div className="goal-result-top">
              <span className="goal-rec-badge">YOUR RECOMMENDED NEXT STEP</span>
              <div className="goal-rec-action-row">
                <span className="goal-rec-icon">{rec.icon}</span>
                <h3 className="goal-rec-title">{rec.action}</h3>
              </div>
            </div>
            <p className="goal-rec-text">{rec.text}</p>
            <div className="goal-rec-cta">
              <a
                className="primary goal-cta-btn"
                href={rec.href}
                onClick={isModal && onClose ? onClose : undefined}
              >
                {rec.btnText}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  if (isModal) {
    return (
      <div className="guide-modal-overlay" onClick={onClose}>
        <div
          className="guide-modal-container"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="How to Use Within Guide"
        >
          {content}
        </div>
      </div>
    );
  }

  return (
    <section className="user-guide-section" id="guide">
      <div className="learning-wrap">{content}</div>
    </section>
  );
}
