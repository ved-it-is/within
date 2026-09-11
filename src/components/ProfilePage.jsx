import { useState } from "react";
import { useAccount } from "./AccountContext";
import { supabase } from "../lib/supabase";
import {
  readDiagnosticResult,
  getUserEqTitle,
  PILLARS_CONFIG,
} from "../data/diagnostic";
import { readTrackerEntries, getTrackerStats } from "../data/tracker";

export default function ProfilePage() {
  const { session, signOut, sending } = useAccount();
  const [diagnostic] = useState(() => readDiagnosticResult());
  const [trackerEntries] = useState(() => readTrackerEntries());
  const [trackerStats] = useState(() => getTrackerStats(trackerEntries));

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStatus, setPasswordStatus] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const eqTitle = getUserEqTitle(diagnostic, trackerEntries);
  const userInitial = session?.user?.email
    ? session.user.email.charAt(0).toUpperCase()
    : "U";

  async function handlePasswordChange(e) {
    e.preventDefault();
    if (!password || password.length < 8) {
      setPasswordStatus("error");
      setPasswordMsg("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setPasswordStatus("error");
      setPasswordMsg("Passwords do not match.");
      return;
    }
    if (!supabase) {
      setPasswordStatus("error");
      setPasswordMsg("Supabase client is not available.");
      return;
    }

    setPasswordStatus("loading");
    setPasswordMsg("");
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) {
        setPasswordStatus("error");
        setPasswordMsg(error.message || "Failed to update password.");
      } else {
        setPasswordStatus("success");
        setPasswordMsg("Password updated successfully!");
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => setShowPasswordForm(false), 2000);
      }
    } catch {
      setPasswordStatus("error");
      setPasswordMsg("Network error. Please try again.");
    }
  }

  return (
    <section className="lesson-page profile-page">
      <div className="learning-wrap">
        {/* Sleek Top Navigation Bar */}
        <div className="page-top-bar">
          <a className="back-pill-btn" href="#home">
            <span className="back-pill-arrow" aria-hidden="true">←</span>
            <span>Home</span>
          </a>
          <span className="page-breadcrumb-current">Learner Profile</span>
        </div>

        {/* HERO CARD */}
        <div className="profile-hero-card">
          <div className="profile-hero-top">
            <div className="profile-hero-avatar">
              <span className="avatar-letter">{userInitial}</span>
              <span className="avatar-aura" aria-hidden="true" />
            </div>
            <div className="profile-hero-main">
              <div className="profile-title-row">
                <span className="profile-role-badge">Learner</span>
                <span className="profile-cloud-badge">☁️ Cloud Synced</span>
              </div>
              <h1 className="profile-email-heading">
                {session?.user?.email || "Guest Explorer"}
              </h1>

              {/* Dynamic EQ Archetype Title Chip */}
              <div className="profile-eq-chip">
                <span className="eq-chip-badge">{eqTitle.badge}</span>
                <span className="eq-chip-title">{eqTitle.title}</span>
                {eqTitle.subtitle && (
                  <span className="eq-chip-sub">· {eqTitle.subtitle}</span>
                )}
              </div>
            </div>
          </div>
          <p className="profile-hero-desc">{eqTitle.description}</p>
        </div>

        {/* 2-COLUMN PROFILE CONTENT */}
        <div className="profile-grid">
          {/* COLUMN 1: EMOTIONAL FOOTPRINT (5 PILLARS) */}
          <div className="profile-card">
            <div className="profile-card-header">
              <span className="profile-card-kicker">Emotional Footprint</span>
              <h2>Your 5 Pillars of EQ</h2>
            </div>

            {diagnostic && diagnostic.scores ? (
              <div className="profile-pillars-list">
                {PILLARS_CONFIG.map((pillar) => {
                  const score = diagnostic.scores[pillar.id] || 50;
                  return (
                    <div key={pillar.id} className="profile-pillar-row">
                      <div className="pillar-row-labels">
                        <span className="pillar-name">{pillar.label}</span>
                        <span
                          className="pillar-score"
                          style={{ color: pillar.color }}
                        >
                          {score}%
                        </span>
                      </div>
                      <div className="pillar-bar-bg">
                        <div
                          className="pillar-bar-fill"
                          style={{
                            width: `${score}%`,
                            background: pillar.color,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}

                <div className="profile-archetype-box">
                  <div className="archetype-box-title">
                    <span>{diagnostic.archetype?.icon || "🧭"}</span>
                    <strong>{diagnostic.archetype?.title || "Primary Archetype"}</strong>
                  </div>
                  <p className="archetype-superpower">
                    <strong>Superpower:</strong> {eqTitle.superpower}
                  </p>
                  <p className="archetype-growth">
                    <strong>Growth Edge:</strong> {eqTitle.growthEdge}
                  </p>
                </div>
              </div>
            ) : (
              <div className="profile-empty-diagnostic">
                <p>
                  You haven’t taken the 3-minute diagnostic yet. Take it to
                  unlock your exact 5-pillar scores, personalized archetype, and
                  EQ title!
                </p>
                <a className="primary profile-cta-btn" href="#diagnostic">
                  🧭 Discover Your Baseline (3 Min) →
                </a>
              </div>
            )}
          </div>

          {/* COLUMN 2: REFLECTION STATS & CURIOSITY */}
          <div className="profile-col-right">
            {/* REFLECTION STATS CARD */}
            <div className="profile-card">
              <div className="profile-card-header">
                <span className="profile-card-kicker">Daily Practice</span>
                <h2>Reflection Journal</h2>
              </div>
              <div className="profile-stats-grid">
                <div className="profile-stat-box">
                  <span className="stat-number">{trackerStats.total}</span>
                  <span className="stat-label">Reflections Logged</span>
                </div>
                <div className="profile-stat-box">
                  <span className="stat-number">
                    {trackerStats.topEmotion?.icon || "🌿"}
                  </span>
                  <span className="stat-label">
                    {trackerStats.topEmotion?.label?.split("&")[0]?.trim() || "Grounding"}
                  </span>
                </div>
                <div className="profile-stat-box full-width">
                  <span className="stat-label-muted">Top Trigger Identified:</span>
                  <span className="stat-highlight">
                    {trackerStats.topTrigger
                      ? trackerStats.topTrigger.charAt(0).toUpperCase() +
                        trackerStats.topTrigger.slice(1)
                      : "Daily interactions"}
                  </span>
                </div>
              </div>
              <a className="hero-pill-link profile-tracker-btn" href="#tracker">
                📊 Open Emotion Tracker →
              </a>
            </div>

            {/* CURIOUS CONTEMPLATION CARD */}
            <div className="profile-card curious-card">
              <span className="curious-kicker">✦ Daily Contemplation</span>
              <blockquote className="curious-quote">
                “What is one subtle feeling you tried to out-think today instead
                of simply letting your body feel it?”
              </blockquote>
              <span className="curious-hint">
                Notice where the answer lands in your chest or shoulders.
              </span>
            </div>
          </div>
        </div>

        {/* ACCOUNT & SECURITY SECTION */}
        <div className="profile-card profile-security-card">
          <div className="profile-card-header">
            <span className="profile-card-kicker">Account & Security</span>
            <h2>Settings</h2>
          </div>

          <div className="security-controls-row">
            {!showPasswordForm ? (
              <button
                className="hero-pill-link"
                onClick={() => setShowPasswordForm(true)}
              >
                🔑 Change Password
              </button>
            ) : (
              <form
                className="profile-password-form"
                onSubmit={handlePasswordChange}
              >
                <div className="form-fields-row">
                  <input
                    type="password"
                    placeholder="New password (min 8 chars)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="primary"
                    disabled={passwordStatus === "loading"}
                  >
                    {passwordStatus === "loading" ? "Saving…" : "Update Password"}
                  </button>
                  <button
                    type="button"
                    className="hero-pill-link"
                    onClick={() => setShowPasswordForm(false)}
                  >
                    Cancel
                  </button>
                </div>
                {passwordMsg && (
                  <p
                    className={`form-feedback-msg ${passwordStatus}`}
                    role="alert"
                  >
                    {passwordMsg}
                  </p>
                )}
              </form>
            )}

            <button
              className="profile-action-btn btn-danger-subtle profile-logout-btn"
              disabled={sending}
              onClick={signOut}
            >
              {sending ? "Signing out…" : "🚪 Sign Out"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

