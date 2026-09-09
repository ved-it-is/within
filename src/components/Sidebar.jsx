export default function Sidebar({ unlocked, page }) {
  return (
    <aside className="side">
      <a className="brand" href="#home">
        with<b>in</b>
      </a>
      <nav aria-label="Main navigation">
        <a
          className={`nav-link ${page === "home" ? "active" : ""}`}
          href="#home"
          aria-current={page === "home" ? "page" : undefined}
        >
          <span aria-hidden="true">⌂</span>Home
        </a>
        {unlocked ? (
          <a
            className={`nav-link ${page === "explore" ? "active" : ""}`}
            href="#explore"
            aria-current={page === "explore" ? "page" : undefined}
          >
            <span aria-hidden="true">↗</span>Explore
          </a>
        ) : (
          <button
            className="nav-link locked"
            disabled
            aria-describedby="explore-lock-note"
          >
            <span aria-hidden="true">🔒</span>Explore
          </button>
        )}
        {unlocked ? (
          <a
            className={`nav-link ${page === "arcade" ? "active" : ""}`}
            href="#arcade"
            aria-current={page === "arcade" ? "page" : undefined}
          >
            <span aria-hidden="true">✧</span>Arcade
          </a>
        ) : (
          <button
            className="nav-link locked"
            disabled
            aria-describedby="explore-lock-note"
          >
            <span aria-hidden="true">🔒</span>Arcade
          </button>
        )}
      </nav>
      <p className="side-note" id="explore-lock-note">
        {unlocked
          ? "31 small chapters. Your own pace. A little more understanding."
          : "Complete five situations to unlock your emotional-intelligence journey."}
      </p>
    </aside>
  );
}
