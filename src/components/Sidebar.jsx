export default function Sidebar({
  unlocked,
  page,
  collapsed,
  onToggle,
  onNavigate,
}) {
  return (
    <aside className="side">
      <button
        className="sidebar-toggle"
        onClick={onToggle}
        aria-expanded={!collapsed}
        aria-controls="sidebar-navigation"
        aria-label={collapsed ? "Expand sidebar" : "Minimize sidebar"}
      >
        <span aria-hidden="true">{collapsed ? "☰" : "‹"}</span>
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
      <p className="side-note sidebar-label" id="explore-lock-note">
        {unlocked
          ? "31 small chapters. Your own pace. A little more understanding."
          : "Complete five situations to unlock your emotional-intelligence journey."}
      </p>
    </aside>
  );
}
