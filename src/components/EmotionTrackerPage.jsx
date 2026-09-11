import { useState, useEffect } from "react";
import {
  EMOTIONS,
  BODY_LOCATIONS,
  CONTEXT_TRIGGERS,
  readTrackerEntries,
  addTrackerEntry,
  deleteTrackerEntry,
  getTrackerStats,
  getSmartRecommendation,
} from "../data/tracker.js";

export default function EmotionTrackerPage({ unlocked }) {
  const [entries, setEntries] = useState(readTrackerEntries);
  const [selectedEmotion, setSelectedEmotion] = useState(EMOTIONS[0].id);
  const [selectedNuance, setSelectedNuance] = useState(EMOTIONS[0].nuances[0]);
  const [intensity, setIntensity] = useState(3);
  const [selectedBody, setSelectedBody] = useState(BODY_LOCATIONS[0].id);
  const [selectedTrigger, setSelectedTrigger] = useState(CONTEXT_TRIGGERS[0]);
  const [reflection, setReflection] = useState("");
  const [activeInsight, setActiveInsight] = useState(null);

  const stats = getTrackerStats(entries);
  const currentEmotionObj = EMOTIONS.find((e) => e.id === selectedEmotion) || EMOTIONS[0];

  // Update default nuance when emotion changes
  useEffect(() => {
    if (currentEmotionObj?.nuances?.length) {
      setSelectedNuance(currentEmotionObj.nuances[0]);
    }
  }, [selectedEmotion]);

  function handleSubmit(e) {
    e.preventDefault();

    const recommendation = getSmartRecommendation(
      selectedEmotion,
      selectedTrigger,
      selectedNuance,
    );

    const bodyObj = BODY_LOCATIONS.find((b) => b.id === selectedBody);

    const entryData = {
      emotion: {
        id: currentEmotionObj.id,
        label: currentEmotionObj.label,
        icon: currentEmotionObj.icon,
        color: currentEmotionObj.color,
      },
      nuance: selectedNuance,
      intensity: Number(intensity),
      bodyLocation: bodyObj?.label || "Unspecified",
      trigger: selectedTrigger,
      reflection: reflection.trim(),
      recommendation,
    };

    const { updated, newEntry } = addTrackerEntry(entryData);
    setEntries(updated);
    setActiveInsight(newEntry);
    setReflection("");

    // Smooth scroll to insight
    requestAnimationFrame(() => {
      document.getElementById("tracker-insight-banner")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }

  function handleDelete(id) {
    const updated = deleteTrackerEntry(id);
    setEntries(updated);
    if (activeInsight?.id === id) {
      setActiveInsight(null);
    }
  }

  return (
    <section className="lesson-page tracker-page">
      <div className="learning-wrap">
        {/* Navigation Breadcrumb */}
        <nav className="tracker-nav-back" aria-label="Breadcrumb">
          <a className="text-link" href="#home">
            ← Return to Home
          </a>
        </nav>

        {/* Header */}
        <header className="tracker-header">
          <span className="kicker">Daily Awareness · Pattern Radar</span>
          <h1>Emotional Check-In & Tracker</h1>
          <p className="tracker-lead">
            Emotions are biological data, not character flaws. By naming your current
            feeling with precision and locating it in your body, you shift from
            being swept by the wave to observing it clearly.
          </p>
        </header>

        {/* Summary Stats Overview */}
        <div className="tracker-stats-grid">
          <div className="tracker-stat-card">
            <span className="stat-label">Total Check-Ins</span>
            <strong className="stat-value">{stats.total}</strong>
            <small className="stat-hint">
              {stats.total === 0 ? "First check-in starts today" : "Logged reflections"}
            </small>
          </div>

          <div className="tracker-stat-card">
            <span className="stat-label">Most Frequent State</span>
            <strong className="stat-value">
              {stats.topEmotion ? `${stats.topEmotion.icon} ${stats.topEmotion.label.split("&")[0]}` : "—"}
            </strong>
            <small className="stat-hint">
              {stats.topEmotion ? "Dominant recent baseline" : "Awaiting data"}
            </small>
          </div>

          <div className="tracker-stat-card">
            <span className="stat-label">Primary Context</span>
            <strong className="stat-value truncate">{stats.topTrigger || "—"}</strong>
            <small className="stat-hint">Most frequent recurring trigger</small>
          </div>
        </div>

        {/* Active Insight Banner after Logging */}
        {activeInsight && (
          <div
            id="tracker-insight-banner"
            className="tracker-insight-card"
            role="status"
          >
            <div className="insight-header">
              <span className="kicker">💡 Smart EQ Recommendation</span>
              <button
                className="close-insight"
                aria-label="Dismiss recommendation"
                onClick={() => setActiveInsight(null)}
              >
                ✕
              </button>
            </div>
            <h3>
              {activeInsight.emotion.icon} Logged: “{activeInsight.nuance}” ({activeInsight.emotion.label})
            </h3>
            <p className="insight-reason">
              {activeInsight.recommendation.reason}
            </p>
            <div className="insight-actions">
              <span className="insight-rec-label">
                Suggested Chapter: <b>{activeInsight.recommendation.chapterTitle}</b>
              </span>
              {unlocked ? (
                <a
                  className="primary"
                  href={`#explore/chapter/${activeInsight.recommendation.chapterId}`}
                >
                  Practice Chapter {activeInsight.recommendation.chapterId} →
                </a>
              ) : (
                <a className="primary" href="#journey">
                  Start Introduction to Practice →
                </a>
              )}
              <a className="secondary" href="#arcade">
                Explore in Arcade ✧
              </a>
            </div>
          </div>
        )}

        {/* Main Check-In Form */}
        <section className="tracker-form-card">
          <header className="form-card-header">
            <h2>Log Your Current Moment</h2>
            <p>Take 60 seconds to tune into what is actually here right now.</p>
          </header>

          <form onSubmit={handleSubmit} className="tracker-form">
            {/* Step 1: Select Primary Emotion */}
            <fieldset className="form-group">
              <legend>1. What is the overarching feeling right now?</legend>
              <div className="emotion-picker-grid">
                {EMOTIONS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`emotion-button ${selectedEmotion === item.id ? "selected" : ""}`}
                    style={{
                      "--emotion-color": item.color,
                      "--emotion-tint": item.tint,
                    }}
                    onClick={() => setSelectedEmotion(item.id)}
                  >
                    <span className="emotion-icon" aria-hidden="true">{item.icon}</span>
                    <span className="emotion-name">{item.label}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Step 2: Nuance Selector */}
            <fieldset className="form-group">
              <legend>2. Give it more detail (Granular Word):</legend>
              <div className="nuance-chips">
                {currentEmotionObj.nuances.map((nuance) => (
                  <button
                    key={nuance}
                    type="button"
                    className={`nuance-chip ${selectedNuance === nuance ? "selected" : ""}`}
                    onClick={() => setSelectedNuance(nuance)}
                  >
                    {nuance}
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Step 3: Somatic Location */}
            <div className="form-row">
              <div className="form-group half-width">
                <label htmlFor="body-location-select">
                  3. Where do you feel it in your body? (Somatic awareness)
                </label>
                <select
                  id="body-location-select"
                  value={selectedBody}
                  onChange={(e) => setSelectedBody(e.target.value)}
                >
                  {BODY_LOCATIONS.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 4: Intensity */}
              <div className="form-group half-width">
                <label htmlFor="intensity-slider">
                  4. Intensity Level: <strong>{intensity} / 5</strong>
                  <span className="intensity-hint">
                    {intensity <= 2
                      ? " (Subtle background signal)"
                      : intensity === 3
                        ? " (Noticeable presence)"
                        : " (Strong emotional surge)"}
                  </span>
                </label>
                <input
                  id="intensity-slider"
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={intensity}
                  onChange={(e) => setIntensity(e.target.value)}
                />
              </div>
            </div>

            {/* Step 5: Context Trigger */}
            <div className="form-group">
              <label htmlFor="trigger-select">
                5. What context or situation is currently influencing this?
              </label>
              <div className="trigger-chips">
                {CONTEXT_TRIGGERS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`trigger-chip ${selectedTrigger === tag ? "selected" : ""}`}
                    onClick={() => setSelectedTrigger(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 6: Micro-Reflection */}
            <div className="form-group">
              <label htmlFor="micro-reflection">
                6. One-Sentence Reflection (Optional):
                <small className="label-subtext">
                  What is this emotion telling you about what you need or value?
                </small>
              </label>
              <textarea
                id="micro-reflection"
                rows="2"
                placeholder="e.g., I'm realizing that I need clearer expectations before accepting more work."
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
              />
            </div>

            <button type="submit" className="primary submit-checkin-btn">
              Record Check-In & View Practice Recommendation →
            </button>
          </form>
        </section>

        {/* Check-in History Timeline */}
        <section className="tracker-history-section">
          <header className="chapter-browser-heading">
            <span className="kicker">Your Timeline</span>
            <h2>Recent Check-Ins ({entries.length})</h2>
            <p>
              Observing your emotional trajectory over time reveals recurring patterns
              and triggers that logic alone often misses.
            </p>
          </header>

          {entries.length === 0 ? (
            <div className="empty-history-card">
              <span className="empty-icon" aria-hidden="true">🌱</span>
              <h3>Your timeline is clean.</h3>
              <p>
                Fill out your first check-in above to begin mapping your emotional
                patterns and receiving tailored practice recommendations.
              </p>
            </div>
          ) : (
            <div className="history-timeline">
              {entries.map((item) => (
                <article key={item.id} className="history-card">
                  <div className="history-top">
                    <div className="history-emotion-badge">
                      <span className="history-icon" aria-hidden="true">
                        {item.emotion?.icon || "🌿"}
                      </span>
                      <div>
                        <strong>{item.nuance || item.emotion?.label}</strong>
                        <span className="history-category">
                          {item.emotion?.label} · Intensity {item.intensity}/5
                        </span>
                      </div>
                    </div>
                    <div className="history-meta">
                      <time className="history-date">
                        {item.date} {item.timeString && `· ${item.timeString}`}
                      </time>
                      <button
                        className="delete-entry-btn"
                        title="Delete entry"
                        aria-label="Delete entry"
                        onClick={() => handleDelete(item.id)}
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  <div className="history-details">
                    <div className="history-detail-item">
                      <span className="detail-tag">Somatic sensation:</span>
                      <span>{item.bodyLocation}</span>
                    </div>
                    <div className="history-detail-item">
                      <span className="detail-tag">Context:</span>
                      <span>{item.trigger}</span>
                    </div>
                  </div>

                  {item.reflection && (
                    <div className="history-reflection-box">
                      <em>“{item.reflection}”</em>
                    </div>
                  )}

                  {item.recommendation && (
                    <div className="history-rec-footer">
                      <small>Suggested practice:</small>
                      <a
                        href={
                          unlocked
                            ? `#explore/chapter/${item.recommendation.chapterId}`
                            : "#journey"
                        }
                      >
                        {item.recommendation.chapterTitle} →
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
