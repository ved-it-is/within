import { useState, useEffect, useRef } from "react";
import BrainSection from "./BrainSection";
import SomaticEmotionTable from "./SomaticEmotionTable";

const PILLARS = [
  {
    id: "self-awareness",
    title: "Self-Awareness",
    tagline: "The ability to accurately perceive your emotions in real time.",
    icon: "🧭",
    color: "#6366f1",
    tint: "#eef2ff",
    coreQuestion: "What am I noticing in my body and mind right now?",
    overview:
      "Self-awareness is the foundation of emotional intelligence. Without knowing what you are experiencing, it is impossible to manage your reactions or choose a constructive direction.",
    realWorld: {
      unaware:
        "Snapping at a colleague over a minor detail, feeling baffled by your own frustration.",
      aware:
        "Noticing tightness in your chest before the meeting, recognizing: ‘I am anxious about my workload, not angry with them.’",
    },
    microHabit:
      "The 3-Second Name-It Check: Pause before opening an email or replying to a comment. Silently label your current state: ‘I notice tension’ or ‘I notice anticipation’.",
    chapterRecommendation: "Chapter 1 · Noticing the inner climate",
    chapterLink: "#explore/chapter/1",
  },
  {
    id: "self-regulation",
    title: "Emotional Regulation",
    tagline: "The choice of how to respond rather than being driven by an impulse.",
    icon: "⚖️",
    color: "#059669",
    tint: "#ecfdf5",
    coreQuestion: "Can I create a pause between what happened and what I do next?",
    overview:
      "Regulation is not about suppressing or denying feelings. It is the capacity to hold an uncomfortable emotional surge without immediately converting it into a destructive reaction.",
    realWorld: {
      unaware:
        "Sending an immediate defensive email response that escalates the dispute.",
      aware:
        "Feeling the adrenaline spike, standing up, taking three breaths, and deciding: ‘I will address the facts in 30 minutes once my pulse settles.’",
    },
    microHabit:
      "The 90-Second Rule: When angry or scared, the neurochemical wash in your bloodstream lasts ~90 seconds. Give yourself that buffer before speaking.",
    chapterRecommendation: "Chapter 11 · Creating the space to respond",
    chapterLink: "#explore/chapter/11",
  },
  {
    id: "empathy",
    title: "Empathy & Perspective",
    tagline: "Understanding the emotional context and viewpoint of another person.",
    icon: "👁️",
    color: "#d97706",
    tint: "#fffbeb",
    coreQuestion: "What might this moment feel like from where they stand?",
    overview:
      "Empathy is not agreeing with everything someone says—it is recognizing the emotions, pressures, and constraints driving their behavior without premature judgment.",
    realWorld: {
      unaware:
        "Assuming a quiet team member is disengaged or indifferent.",
      aware:
        "Recognizing that unexpected criticism often triggers shame or withdrawal, and gently asking: ‘How is this landing with you?’",
    },
    microHabit:
      "The Intent Check: When someone’s behavior irritates you, ask: ‘What generous assumption can I make about what they are dealing with right now?’",
    chapterRecommendation: "Chapter 6 · Seeing from another vantage",
    chapterLink: "#explore/chapter/6",
  },
  {
    id: "communication",
    title: "Mindful Communication",
    tagline: "Expressing needs, boundaries, and feedback without causing unnecessary defense.",
    icon: "💬",
    color: "#8b5cf6",
    tint: "#f5f3ff",
    coreQuestion: "How can I share my truth clearly while keeping connection open?",
    overview:
      "High-EQ communication separates observable facts from personal interpretations. It seeks mutual clarity and repair rather than proving the other person wrong.",
    realWorld: {
      unaware:
        "Using universal accusations: ‘You always ignore my input when deadlines are tight.’",
      aware:
        "Using specific observation + feeling + request: ‘In yesterday’s review, my question was skipped. I felt overlooked, and I’d like 5 minutes to walk through it.’",
    },
    microHabit:
      "The Observation Split: Separate ‘What actually happened’ (what a camera would record) from ‘The story I told myself about what happened’.",
    chapterRecommendation: "Chapter 16 · Speaking without accusation",
    chapterLink: "#explore/chapter/16",
  },
  {
    id: "resilience",
    title: "Resilience & Decision-Making",
    tagline: "Treating setbacks as diagnostic information rather than personal verdicts.",
    icon: "🌱",
    color: "#db2777",
    tint: "#fdf2f8",
    coreQuestion: "What is this outcome teaching me about my next choice?",
    overview:
      "Resilience in emotional intelligence is emotional agility: accepting that unwelcome outcomes happen, processing disappointment honestly, and deciding your next step with clear intention.",
    realWorld: {
      unaware:
        "Interpreting a rejected proposal as definitive proof that ‘I am not good at this.’",
      aware:
        "Grieving the rejection for an evening, then reviewing: ‘What information did I lack? What parts worked well? How do I refine the next pitch?’",
    },
    microHabit:
      "The Diagnostic Reframe: Swap ‘Why does this always happen to me?’ for ‘What does this specific result ask me to adjust next?’",
    chapterRecommendation: "Chapter 26 · Moving forward after a misstep",
    chapterLink: "#explore/chapter/26",
  },
];

export default function EmotionalIntelligencePage({ unlocked }) {
  const [selectedPillar, setSelectedPillar] = useState(0);
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState("Inhale");
  const [breathCount, setBreathCount] = useState(4);
  const timerRef = useRef(null);

  const pillar = PILLARS[selectedPillar];

  // Box Breathing cycle (4s inhale, 4s hold, 4s exhale, 4s hold)
  useEffect(() => {
    if (!breathingActive) {
      if (timerRef.current) clearInterval(timerRef.current);
      setBreathPhase("Inhale");
      setBreathCount(4);
      return;
    }

    const phases = ["Inhale", "Hold", "Exhale", "Rest"];
    let currentPhaseIndex = 0;
    let currentSeconds = 4;

    timerRef.current = setInterval(() => {
      currentSeconds -= 1;
      if (currentSeconds <= 0) {
        currentPhaseIndex = (currentPhaseIndex + 1) % phases.length;
        currentSeconds = 4;
        setBreathPhase(phases[currentPhaseIndex]);
      }
      setBreathCount(currentSeconds);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [breathingActive]);

  return (
    <section className="lesson-page eq-foundations-page">
      <div className="learning-wrap">
        {/* Sleek Top Navigation Bar */}
        <div className="page-top-bar">
          <a className="back-pill-btn" href="#home">
            <span className="back-pill-arrow" aria-hidden="true">←</span>
            <span>Home</span>
          </a>
          <span className="page-breadcrumb-current">Principles of EQ</span>
        </div>

        {/* Page Header */}
        <header className="eq-header">
          <span className="kicker">Core Principles & Foundations</span>
          <h1>What is Emotional Intelligence?</h1>
          <p className="eq-lead">
            Emotional intelligence (EQ) is the capacity to recognize, interpret,
            and navigate your own emotions—and the emotional cues of others—to
            guide healthy choices, clear communication, and resilient relationships.
          </p>
        </header>

        {/* Comparison Hero Card: IQ vs. EQ */}
        <div className="eq-contrast-card">
          <div className="contrast-col">
            <span className="contrast-badge iq">IQ · Cognitive Intelligence</span>
            <h3>How you process information</h3>
            <p>
              Measures logic, abstract reasoning, pattern recognition, and memory.
              Remains largely constant throughout adulthood.
            </p>
          </div>
          <div className="contrast-divider" aria-hidden="true" />
          <div className="contrast-col">
            <span className="contrast-badge eq">EQ · Emotional Intelligence</span>
            <h3>How you navigate moments</h3>
            <p>
              Governs self-regulation, empathy, conversational agility, and resilience.
              Can be continuously trained and strengthened through practice.
            </p>
          </div>
        </div>

        {/* Interactive 5 Pillars Explorer */}
        <section className="eq-pillars-section">
          <header className="chapter-browser-heading">
            <span className="kicker">The 5 Core Dimensions</span>
            <h2>Explore the Pillars of EQ</h2>
            <p>
              Select any pillar below to discover its core question, real-life
              dilemmas, and practical everyday habits.
            </p>
          </header>

          {/* Pillar Selector Pills */}
          <div className="eq-pillar-tabs" role="tablist" aria-label="EQ Pillars">
            {PILLARS.map((item, idx) => (
              <button
                key={item.id}
                role="tab"
                id={`tab-${item.id}`}
                aria-selected={selectedPillar === idx}
                aria-controls={`panel-${item.id}`}
                className={`eq-tab-button ${selectedPillar === idx ? "is-active" : ""}`}
                style={{
                  "--tab-accent": item.color,
                  "--tab-tint": item.tint,
                }}
                onClick={() => setSelectedPillar(idx)}
              >
                <span className="tab-icon" aria-hidden="true">{item.icon}</span>
                <span className="tab-title">{item.title}</span>
              </button>
            ))}
          </div>

          {/* Active Pillar Card */}
          <article
            className="eq-pillar-card"
            id={`panel-${pillar.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${pillar.id}`}
            style={{
              "--pillar-accent": pillar.color,
              "--pillar-tint": pillar.tint,
            }}
          >
            <div className="pillar-header-row">
              <span className="pillar-icon-badge" aria-hidden="true">
                {pillar.icon}
              </span>
              <div>
                <span className="kicker">Pillar {selectedPillar + 1} of 5</span>
                <h3>{pillar.title}</h3>
                <p className="pillar-tagline">{pillar.tagline}</p>
              </div>
            </div>

            <div className="pillar-core-question">
              <strong>The Guiding Question:</strong>
              <blockquote>“{pillar.coreQuestion}”</blockquote>
            </div>

            <p className="pillar-overview">{pillar.overview}</p>

            {/* Real World Before/After Comparison */}
            <div className="pillar-scenarios-grid">
              <div className="scenario-card unaware">
                <span className="scenario-label">⚠️ Reactive Reaction</span>
                <p>{pillar.realWorld.unaware}</p>
              </div>
              <div className="scenario-card aware">
                <span className="scenario-label">✨ Mindful Response</span>
                <p>{pillar.realWorld.aware}</p>
              </div>
            </div>

            {/* Micro-Habit Box */}
            <div className="pillar-microhabit">
              <strong>💡 Everyday Practice:</strong>
              <p>{pillar.microHabit}</p>
            </div>

            {/* Action link */}
            <div className="pillar-footer">
              <span className="rec-text">
                Recommended Practice: <b>{pillar.chapterRecommendation}</b>
              </span>
              {unlocked ? (
                <a className="primary" href={pillar.chapterLink}>
                  Open this chapter →
                </a>
              ) : (
                <a className="primary" href="#journey">
                  Start introduction to practice →
                </a>
              )}
            </div>
          </article>
        </section>

        {/* 3D Interactive Brain Explorer */}
        <BrainSection />

        {/* The Neuroscience & The 90-Second Rule */}
        <section className="eq-neuroscience-section">
          <div className="neuro-card">
            <span className="kicker">The Neuroscience of Emotions</span>
            <h2>Emotions are biological signals, not permanent truths.</h2>
            <p>
              Neuroscientist Dr. Jill Bolte Taylor discovered that the physiological
              lifespan of an emotional surge (adrenaline, cortisol, accelerated pulse)
              is approximately <b>90 seconds</b>.
            </p>
            <p>
              Everything that lingers after 90 seconds is driven by the internal
              narrative we continue to replay. When you cultivate emotional intelligence,
              you learn to let the initial 90-second wave pass before deciding your
              action.
            </p>

            {/* Interactive 30-second Somatic Breathing Widget */}
            <div className="breathing-widget">
              <h4>Interactive Somatic Reset: Box Breathing</h4>
              <p>
                A simple 4-4-4 breathing pause activates the parasympathetic nervous
                system, dialing down the stress response in under a minute.
              </p>

              <div className="breathing-circle-container">
                <div
                  className={`breathing-circle ${
                    breathingActive ? `phase-${breathPhase.toLowerCase()}` : ""
                  }`}
                >
                  <span className="phase-text">
                    {breathingActive ? breathPhase : "Ready"}
                  </span>
                  {breathingActive && (
                    <span className="phase-count">{breathCount}s</span>
                  )}
                </div>
              </div>

              <button
                className="secondary breathing-toggle"
                onClick={() => setBreathingActive((active) => !active)}
              >
                {breathingActive ? "Stop Reset" : "Begin 1-Minute Reset"}
              </button>
            </div>
          </div>
        </section>

        {/* Real Scientific Somatic Bodily Mapping Table */}
        <SomaticEmotionTable />

        {/* Why Practice Beats Reading */}
        <section className="eq-why-practice">
          <header className="chapter-browser-heading">
            <span className="kicker">The Within Methodology</span>
            <h2>Why Scenario Practice Builds Real EQ</h2>
            <p>
              Reading about emotional intelligence is like reading about swimming:
              understanding the theory doesn’t keep your head above water when the
              current picks up.
            </p>
          </header>

          <div className="practice-perks-grid">
            <article className="perk-card">
              <span className="perk-icon">⚡</span>
              <h4>Low-Stakes Muscle Memory</h4>
              <p>
                Practice making nuanced choices in hundreds of authored situations
                before encountering high-stakes conflicts in real life.
              </p>
            </article>

            <article className="perk-card">
              <span className="perk-icon">🔄</span>
              <h4>Immediate Feedback Loops</h4>
              <p>
                Discover why certain responses escalate tension while others open
                clarity and understanding, without real-world fallout.
              </p>
            </article>

            <article className="perk-card">
              <span className="perk-icon">🎯</span>
              <h4>Reflex Over Theory</h4>
              <p>
                Repetition turns thoughtful pause into a natural subconscious reflex
                when stress, fatigue, or frustration arise.
              </p>
            </article>
          </div>
        </section>

        {/* Bottom Call to Action */}
        <section className="eq-cta-card">
          <h2>Put Your Understanding into Practice</h2>
          <p>
            {unlocked
              ? "Explore the 31 guided chapters or jump into the Arcade for endless randomized situation practice."
              : "Complete the 5 introductory situations to unlock the full catalogue of chapters and Arcade practice."}
          </p>
          <div className="eq-cta-actions">
            {unlocked ? (
              <>
                <a className="primary" href="#explore">
                  Explore 31 Chapters →
                </a>
                <a className="secondary" href="#arcade">
                  Play Arcade Mode ✧
                </a>
              </>
            ) : (
              <a className="primary" href="#journey">
                Begin the 5 Introductory Moments →
              </a>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}
