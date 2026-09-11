import { useEffect, useState } from "react";
import { useAccount } from "./AccountContext";
import { readDiagnosticResult, getUserEqTitle } from "../data/diagnostic";
import { readTrackerEntries } from "../data/tracker";

function HomeIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9.5L12 3l9 6.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function TrackerIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function DiagnosticIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

function EqIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
    </svg>
  );
}

function ExploreIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M8 7h8" />
      <path d="M8 11h6" />
    </svg>
  );
}

function ArcadeIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="6" width="20" height="12" rx="6" />
      <line x1="6" y1="12" x2="10" y2="12" />
      <line x1="8" y1="10" x2="8" y2="14" />
      <circle cx="15" cy="13" r="1" fill="currentColor" />
      <circle cx="18" cy="11" r="1" fill="currentColor" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function CollapseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18" />
      <path d="M16 15l-3-3 3-3" />
    </svg>
  );
}

export default function Sidebar({
  unlocked,
  page,
  collapsed,
  onToggle,
  onNavigate,
}) {
  const { session, sending, signOut, status } = useAccount();
  const [scrolled, setScrolled] = useState(() => window.scrollY > 40);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const userInitial = session?.user?.email
    ? session.user.email.charAt(0).toUpperCase()
    : "U";
  const eqTitle = getUserEqTitle(readDiagnosticResult(), readTrackerEntries());

  return (
    <aside className={`side ${scrolled ? "is-scrolled" : ""}`}>
      {/* Brand & Collapse Header Row */}
      <div className="sidebar-brand-row">
        <a className="brand" href="#home" onClick={onNavigate}>
          <span className="brand-badge" aria-hidden="true">✦</span>
          <span className="brand-text">
            with<b>in</b>
          </span>
        </a>
        <button
          className="sidebar-toggle-btn"
          onClick={onToggle}
          aria-expanded={!collapsed}
          aria-controls="sidebar-navigation"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <CollapseIcon />
        </button>
      </div>

      {/* Categorized Navigation */}
      <nav id="sidebar-navigation" aria-label="Main navigation" className="sidebar-nav">
        {/* SECTION 1: OVERVIEW */}
        <div className="sidebar-section">
          <span className="sidebar-section-title">Overview</span>
          <a
            className={`nav-link ${page === "home" ? "active" : ""}`}
            href="#home"
            onClick={onNavigate}
            title="Home"
            aria-current={page === "home" ? "page" : undefined}
          >
            <span className="nav-icon-wrap"><HomeIcon /></span>
            <span className="sidebar-label">Home</span>
          </a>
        </div>

        {/* SECTION 2: DAILY PRACTICE */}
        <div className="sidebar-section">
          <span className="sidebar-section-title">Daily Practice</span>
          <a
            className={`nav-link ${page === "tracker" ? "active" : ""}`}
            href="#tracker"
            onClick={onNavigate}
            title="Daily Emotion Tracker"
            aria-current={page === "tracker" ? "page" : undefined}
          >
            <span className="nav-icon-wrap"><TrackerIcon /></span>
            <span className="sidebar-label">Daily Tracker</span>
          </a>
          <a
            className={`nav-link ${page === "diagnostic" ? "active" : ""}`}
            href="#diagnostic"
            onClick={onNavigate}
            title="EQ Baseline Diagnostic"
            aria-current={page === "diagnostic" ? "page" : undefined}
          >
            <span className="nav-icon-wrap"><DiagnosticIcon /></span>
            <span className="sidebar-label">EQ Diagnostic</span>
          </a>
        </div>

        {/* SECTION 3: CURRICULUM */}
        <div className="sidebar-section">
          <span className="sidebar-section-title">Curriculum</span>
          <a
            className={`nav-link ${page === "emotional-intelligence" ? "active" : ""}`}
            href="#emotional-intelligence"
            onClick={onNavigate}
            title="Principles of Emotional Intelligence"
            aria-current={page === "emotional-intelligence" ? "page" : undefined}
          >
            <span className="nav-icon-wrap"><EqIcon /></span>
            <span className="sidebar-label">Emotional Intelligence</span>
          </a>

          {unlocked ? (
            <a
              className={`nav-link ${page === "explore" ? "active" : ""}`}
              href="#explore"
              onClick={onNavigate}
              title="Explore Chapters"
              aria-current={page === "explore" ? "page" : undefined}
            >
              <span className="nav-icon-wrap"><ExploreIcon /></span>
              <span className="sidebar-label">Explore Chapters</span>
            </a>
          ) : (
            <button
              className="nav-link locked"
              disabled
              aria-describedby="explore-lock-note"
              title="Complete 5 introductory situations to unlock Explore"
            >
              <span className="nav-icon-wrap"><LockIcon /></span>
              <span className="sidebar-label">Explore Chapters</span>
            </button>
          )}

          {unlocked ? (
            <a
              className={`nav-link ${page === "arcade" ? "active" : ""}`}
              href="#arcade"
              onClick={onNavigate}
              title="EQ Arcade Drills"
              aria-current={page === "arcade" ? "page" : undefined}
            >
              <span className="nav-icon-wrap"><ArcadeIcon /></span>
              <span className="sidebar-label">EQ Arcade</span>
            </a>
          ) : (
            <button
              className="nav-link locked"
              disabled
              aria-describedby="explore-lock-note"
              title="Complete 5 introductory situations to unlock Arcade"
            >
              <span className="nav-icon-wrap"><LockIcon /></span>
              <span className="sidebar-label">EQ Arcade</span>
            </button>
          )}
        </div>
      </nav>

      {/* Footer & User Profile Card */}
      <div className="sidebar-footer">
        <div className="sidebar-motto" id="explore-lock-note">
          <span className="motto-spark" aria-hidden="true">✦</span>
          <span>
            {unlocked
              ? "Your pace. Your journey."
              : "5 intro lessons unlock full curriculum."}
          </span>
        </div>

        {session ? (
          <div className="user-profile-card">
            <a
              className="profile-user-row profile-link-btn"
              href="#profile"
              onClick={onNavigate}
              aria-label="View Profile"
            >
              <div className="profile-avatar" aria-hidden="true">
                {userInitial}
              </div>
              <div className="profile-details">
                <span className="profile-role">
                  {eqTitle.badge} {eqTitle.title}
                </span>
                <span className="profile-email">
                  {session.user.email}
                </span>
              </div>
            </a>

            <div className="profile-actions-row">
              <a
                className="profile-action-btn primary-subtle"
                href="#profile"
                onClick={onNavigate}
              >
                👤 Profile
              </a>
              <button
                className="profile-action-btn btn-danger-subtle"
                disabled={sending}
                onClick={signOut}
              >
                {sending ? "…" : "Sign out"}
              </button>
            </div>

            {status === "pending" && (
              <small className="profile-sync-note" role="status">
                Saving offline progress…
              </small>
            )}
          </div>
        ) : (
          <div className="user-profile-card logged-out">
            <div className="profile-welcome">
              <span>Track your emotional journey</span>
            </div>
            <div className="profile-actions-row">
              <a className="profile-action-btn primary-action" href="#login" onClick={onNavigate}>
                Sign in
              </a>
              <a className="profile-action-btn" href="#signup" onClick={onNavigate}>
                Sign up
              </a>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
