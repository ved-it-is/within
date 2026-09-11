import { useEffect, useState } from "react";
import { useAccount } from "./AccountContext";
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
  return (
    <aside className={`side ${scrolled ? "is-scrolled" : ""}`}>
      <button
        className="sidebar-toggle"
        onClick={onToggle}
        aria-expanded={!collapsed}
        aria-controls="sidebar-navigation"
        aria-label={collapsed ? "Expand sidebar" : "Minimize sidebar"}
      >
        <span className="menu-lines" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </span>
      </button>
      <a className="brand" href="#home" onClick={onNavigate}>
        w
        <span className="sidebar-label">
          ith<b>in</b>
        </span>
      </a>
      <nav id="sidebar-navigation" aria-label="Main navigation">
        <a
          className={`nav-link ${page === "home" ? "active" : ""}`}
          href="#home"
          onClick={onNavigate}
          title="Home"
          aria-current={page === "home" ? "page" : undefined}
        >
          <span aria-hidden="true">⌂</span>
          <span className="sidebar-label">Home</span>
        </a>
        <a
          className={`nav-link ${page === "emotional-intelligence" ? "active" : ""}`}
          href="#emotional-intelligence"
          onClick={onNavigate}
          title="Emotional Intelligence"
          aria-current={page === "emotional-intelligence" ? "page" : undefined}
        >
          <span aria-hidden="true">💡</span>
          <span className="sidebar-label">Emotional Intelligence</span>
        </a>
        <a
          className={`nav-link ${page === "tracker" ? "active" : ""}`}
          href="#tracker"
          onClick={onNavigate}
          title="Emotion Tracker"
          aria-current={page === "tracker" ? "page" : undefined}
        >
          <span aria-hidden="true">📊</span>
          <span className="sidebar-label">Emotion Tracker</span>
        </a>
        {unlocked ? (
          <a
            className={`nav-link ${page === "explore" ? "active" : ""}`}
            href="#explore"
            onClick={onNavigate}
            title="Explore"
            aria-current={page === "explore" ? "page" : undefined}
          >
            <span aria-hidden="true">↗</span>
            <span className="sidebar-label">Explore</span>
          </a>
        ) : (
          <button
            className="nav-link locked"
            disabled
            aria-describedby="explore-lock-note"
          >
            <span aria-hidden="true">🔒</span>
            <span className="sidebar-label">Explore</span>
          </button>
        )}
        {unlocked ? (
          <a
            className={`nav-link ${page === "arcade" ? "active" : ""}`}
            href="#arcade"
            onClick={onNavigate}
            title="Arcade"
            aria-current={page === "arcade" ? "page" : undefined}
          >
            <span aria-hidden="true">✧</span>
            <span className="sidebar-label">Arcade</span>
          </a>
        ) : (
          <button
            className="nav-link locked"
            disabled
            aria-describedby="explore-lock-note"
          >
            <span aria-hidden="true">🔒</span>
            <span className="sidebar-label">Arcade</span>
          </button>
        )}
      </nav>
      <div className="sidebar-footer">
        <p id="explore-lock-note">
          {unlocked
            ? "Your pace. Your journey."
            : "Complete five situations to unlock Explore and Arcade."}
        </p>
        {session ? (
          <div className="sidebar-account">
            <span className="sidebar-account-label">My account</span>
            <small>{session.user.email}</small>
            <a href="#password" onClick={onNavigate}>
              Set password
            </a>
            <button disabled={sending} onClick={signOut}>
              {sending ? "Signing out…" : "Sign out"}
            </button>
            {status === "pending" && (
              <small role="status">
                Recent progress is waiting to be saved. We’ll retry
                automatically.
              </small>
            )}
          </div>
        ) : (
          <div className="sidebar-account">
            <a href="#login" onClick={onNavigate}>
              Sign in
            </a>
            <a href="#signup" onClick={onNavigate}>
              Create account
            </a>
          </div>
        )}
      </div>
    </aside>
  );
}
