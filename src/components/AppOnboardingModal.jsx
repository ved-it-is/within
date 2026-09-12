import { useState, useEffect } from "react";

const ONBOARDING_SLIDES = [
  {
    id: "welcome",
    step: 1,
    total: 4,
    badge: "WELCOME TO WITHIN",
    icon: "✦",
    iconColor: "#6366f1",
    iconBg: "linear-gradient(135deg, #e0e7ff 0%, #ede9fe 100%)",
    title: "Understand what you feel. Choose how you respond.",
    lead: "Most people navigate high-stress moments on emotional autopilot. Within is your personal training gym for building calm, high-EQ reflexes.",
    highlight: "Real-world scenario practice — not dry theory.",
    nextText: "See How It Works →"
  },
  {
    id: "diagnostic",
    step: 2,
    total: 4,
    badge: "STEP 1 · DISCOVER YOUR BASELINE",
    icon: "🧭",
    iconColor: "#4f46e5",
    iconBg: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)",
    title: "Uncover your unique EQ Archetype in 3 minutes.",
    lead: "Answer 10 authored situational prompts across 5 core pillars to find out your natural style (Empathetic Sensor, Calm Strategist, etc.) and personal blind spots.",
    highlight: "10 questions · 3 minutes · Zero judgment.",
    nextText: "Next: The Curriculum →"
  },
  {
    id: "curriculum",
    step: 3,
    total: 4,
    badge: "STEP 2 · REAL-LIFE SCENARIO PRACTICE",
    icon: "⚡",
    iconColor: "#d97706",
    iconBg: "linear-gradient(135deg, #fef3c7 0%, #ffedd5 100%)",
    title: "31 Guided Chapters & Endless Arcade Drills.",
    lead: "Build muscle memory across 7 stages of emotional growth. Explore tough conversations, boundary violations, and workplace tension with instant feedback loops.",
    highlight: "31 Chapters + 700 randomized Arcade drills.",
    nextText: "Next: Daily Body Cues →"
  },
  {
    id: "somatic",
    step: 4,
    total: 4,
    badge: "STEP 3 · DAILY SOMATIC CHECK-IN",
    icon: "🫀",
    iconColor: "#db2777",
    iconBg: "linear-gradient(135deg, #fce7f3 0%, #fdf2f8 100%)",
    title: "Track where stress lives in your physical body.",
    lead: "Emotions hit the body before the mind: tight jaw, racing pulse, or a knot in the stomach. Log your daily cues and get smart practice recommendations.",
    highlight: "Peer-reviewed PNAS Bodily Maps of Emotions.",
    nextText: "Get Started →",
    isFinal: true
  }
];

export default function AppOnboardingModal({ isOpen, onClose, onComplete }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Keyboard navigation (Arrow keys & Escape)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleDismiss();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentSlideIndex]);

  if (!isOpen) return null;

  const slide = ONBOARDING_SLIDES[currentSlideIndex];

  function handleDismiss() {
    try {
      localStorage.setItem("within_onboarding_seen", "true");
    } catch {
      /* ignore */
    }
    onClose();
  }

  function handleNext() {
    if (currentSlideIndex < ONBOARDING_SLIDES.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    } else {
      handleComplete();
    }
  }

  function handlePrev() {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }

  function handleComplete() {
    try {
      localStorage.setItem("within_onboarding_seen", "true");
    } catch {
      /* ignore */
    }
    if (onComplete) {
      onComplete();
    } else {
      onClose();
    }
  }

  return (
    <div className="onboarding-overlay" onClick={handleDismiss} role="dialog" aria-modal="true">
      <div className="onboarding-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Top Header Bar */}
        <div className="onboarding-top-bar">
          <span className="onboarding-step-indicator">
            {slide.step} of {slide.total}
          </span>
          <button
            type="button"
            className="onboarding-skip-btn"
            onClick={handleDismiss}
            aria-label="Skip onboarding walkthrough"
          >
            Skip
          </button>
        </div>

        {/* Dynamic Hero Icon / Visual */}
        <div className="onboarding-icon-stage">
          <div
            className="onboarding-hero-icon"
            style={{
              background: slide.iconBg,
              color: slide.iconColor,
            }}
          >
            <span>{slide.icon}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="onboarding-content-body">
          <span
            className="onboarding-badge"
            style={{ color: slide.iconColor }}
          >
            {slide.badge}
          </span>
          <h2 className="onboarding-title">{slide.title}</h2>
          <p className="onboarding-lead">{slide.lead}</p>

          <div className="onboarding-highlight-chip">
            <span className="chip-sparkle">✨</span>
            <span>{slide.highlight}</span>
          </div>
        </div>

        {/* Footer with Stepper Dots & Navigation Actions */}
        <div className="onboarding-footer">
          {/* Progress Indicator Dots */}
          <div className="onboarding-dots-row" aria-label="Walkthrough progress">
            {ONBOARDING_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                className={`onboarding-dot ${idx === currentSlideIndex ? "is-active" : ""}`}
                onClick={() => setCurrentSlideIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Action Button Row */}
          <div className="onboarding-actions-row">
            {currentSlideIndex > 0 ? (
              <button
                type="button"
                className="onboarding-back-btn"
                onClick={handlePrev}
              >
                ← Back
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              className="primary onboarding-primary-btn"
              onClick={handleNext}
            >
              {slide.nextText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
