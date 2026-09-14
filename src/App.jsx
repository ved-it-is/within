import AccountProvider from "./components/AccountProvider";
import PeopleCarousel from "./components/PeopleCarousel";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import GlobeSection from "./components/GlobeSection";
import JourneyExperience from "./components/JourneyExperience";
import ExplorePage from "./components/ExplorePage";
import ArcadePage from "./components/ArcadePage";
import EmotionalIntelligencePage from "./components/EmotionalIntelligencePage";
import EmotionTrackerPage from "./components/EmotionTrackerPage";
import DiagnosticPage from "./components/DiagnosticPage";
import ProfilePage from "./components/ProfilePage";
import AppOnboardingModal from "./components/AppOnboardingModal";
import {
  readProgress,
  saveProgress,
  introductionComplete,
} from "./data/progress";

function getRoute() {
  const hash = window.location.hash;
  if (hash === "#profile" || hash === "#account") {
    return { page: "profile", chapterId: null };
  }
  if (hash === "#diagnostic" || hash === "#assessment") {
    return { page: "diagnostic", chapterId: null };
  }
  if (hash === "#tracker" || hash === "#mood") {
    return { page: "tracker", chapterId: null };
  }
  if (hash === "#emotional-intelligence" || hash === "#eq") {
    return { page: "emotional-intelligence", chapterId: null };
  }
  if (hash === "#arcade") return { page: "arcade", setId: null };
  if (hash.startsWith("#arcade/")) {
    const match = /^#arcade\/set\/(\d+)$/.exec(hash);
    return { page: "arcade", setId: match ? Number(match[1]) : -1 };
  }
  if (hash === "#explore") return { page: "explore", chapterId: null };
  if (hash.startsWith("#explore/")) {
    const match = /^#explore\/chapter\/(\d+)$/.exec(hash);
    return { page: "explore", chapterId: match ? Number(match[1]) : -1 };
  }
  return { page: "home", chapterId: null };
}

function WithinApp() {
  const [collapsed, setCollapsed] = useState(() => {
    if (window.matchMedia("(max-width: 820px)").matches) return true;
    try {
      return localStorage.getItem("within-sidebar-collapsed") === "true";
    } catch {
      return false;
    }
  });
  function toggleSidebar() {
    setCollapsed((value) => {
      try {
        localStorage.setItem("within-sidebar-collapsed", String(!value));
      } catch {
        /* Optional preference. */
      }
      return !value;
    });
  }
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") setCollapsed(true);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    if (!collapsed && window.matchMedia("(max-width: 820px)").matches) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [collapsed]);
  const [progress, setProgress] = useState(readProgress);
  const [storageAvailable, setStorageAvailable] = useState(true);
  const [route, setRoute] = useState(getRoute);
  const [introductionRun, setIntroductionRun] = useState(0);
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const unlocked = introductionComplete(progress.introduction);

  // Automatic first-time app opening detection
  useEffect(() => {
    try {
      const seen = localStorage.getItem("within_onboarding_seen");
      if (!seen) {
        const timer = setTimeout(() => setOnboardingOpen(true), 600);
        return () => clearTimeout(timer);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (window.location.hash === "#tour" || window.location.hash === "#onboarding") {
      setOnboardingOpen(true);
    }
  }, [route]);
  function restartIntroduction() {
    setProgress((current) => ({
      ...current,
      introduction: {},
      unlocked: false,
    }));
    setIntroductionRun((current) => current + 1);
    window.location.hash = "journey";
  }

  useEffect(() => {
    setStorageAvailable(saveProgress(progress));
  }, [progress]);
  useEffect(() => {
    const handleRoute = () => setRoute(getRoute());
    window.addEventListener("hashchange", handleRoute);
    return () => window.removeEventListener("hashchange", handleRoute);
  }, []);
  useEffect(() => {
    if (route.page !== "home") window.scrollTo({ top: 0, behavior: "instant" });
    else
      document
        .getElementById(window.location.hash.slice(1) || "home")
        ?.scrollIntoView({ behavior: "instant" });
  }, [route]);

  function updateChapter(id, update) {
    setProgress((current) => {
      const previous = current.chapters[id] || {
        completed: false,
        session: null,
      };
      const changes = typeof update === "function" ? update(previous) : update;
      return {
        ...current,
        chapters: { ...current.chapters, [id]: { ...previous, ...changes } },
      };
    });
  }

  return (
    <div
      className={`app ${collapsed ? "sidebar-collapsed" : "sidebar-expanded"}`}
    >
      <header className="mobile-top-bar">
        <button
          className="mobile-menu-btn"
          onClick={() => setCollapsed(false)}
          aria-label="Open navigation menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
        <a className="mobile-brand" href="#home">
          <span className="mobile-brand-badge" aria-hidden="true">✦</span>
          <span>with<b>in</b></span>
        </a>
        <div className="mobile-top-spacer" aria-hidden="true" />
      </header>
      <Sidebar
        unlocked={unlocked}
        page={route.page}
        collapsed={collapsed}
        onToggle={toggleSidebar}
        onNavigate={() => {
          setCollapsed(true);
        }}
      />
      {!collapsed && (
        <button
          className="sidebar-backdrop"
          aria-label="Minimize sidebar"
          onClick={() => setCollapsed(true)}
        />
      )}
      <main
        onClick={() => {
          if (!collapsed && window.matchMedia("(max-width: 820px)").matches) {
            setCollapsed(true);
          }
        }}
      >
        {route.page === "profile" ? (
          <ProfilePage />
        ) : route.page === "diagnostic" ? (
          <DiagnosticPage unlocked={unlocked} />
        ) : route.page === "tracker" ? (
          <EmotionTrackerPage unlocked={unlocked} />
        ) : route.page === "emotional-intelligence" ? (
          <EmotionalIntelligencePage unlocked={unlocked} />
        ) : route.page !== "home" ? (
          unlocked ? (
            route.page === "arcade" ? (
              <ArcadePage setId={route.setId} />
            ) : (
              <ExplorePage
                chapterId={route.chapterId}
                progress={progress.chapters}
                onUpdate={updateChapter}
                storageAvailable={storageAvailable}
              />
            )
          ) : (
            <section className="explore-page">
              <div className="learning-wrap locked-page">
                <span className="kicker">Your starting point</span>
                <h1>A little introduction first.</h1>
                <p>
                  Complete the five introductory situations to open your
                  learning journey and Arcade. There is no score you need to
                  reach.
                </p>
                <a className="primary" href="#journey">
                  Begin the introduction →
                </a>
              </div>
            </section>
          )
        ) : (
          <>
            <section className="hero" id="home">
              <div className="wrap hero-wrap">
                <span className="kicker">
                  Emotional intelligence through practice
                </span>
                <h1 className="hero-title">
                  Understand what you feel.
                  <br />
                  <strong>Choose how you respond.</strong>
                </h1>
                <p className="lead hero-lead">
                  Explore real-life moments, uncover your emotional baseline,
                  and strengthen the practical reflexes that shape your choices.
                </p>

                <div className="hero-quote-chip">
                  <span className="quote-spark" aria-hidden="true">✦</span>
                  <span>“One emotion can change a moment. One thoughtful response can change what follows.”</span>
                </div>

                <div className="hero-cta-group">
                  <a className="primary hero-primary-btn" href="#diagnostic">
                    🧭 Take 3-Min EQ Baseline →
                  </a>
                  <div className="hero-secondary-row">
                    <a className="hero-pill-link" href="#tracker">
                      📊 Daily Tracker
                    </a>
                    <a className="hero-pill-link" href="#emotional-intelligence">
                      💡 What is EQ?
                    </a>
                    <a className="hero-pill-link text-subtle" href="#world">
                      World View ↓
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <GlobeSection />
            <PeopleCarousel />
            <JourneyExperience
              key={introductionRun}
              completed={unlocked}
              onRestart={restartIntroduction}
              onUnlock={(answers) =>
                setProgress((current) => ({
                  ...current,
                  introduction: answers,
                  unlocked: introductionComplete(answers),
                }))
              }
            />
          </>
        )}
      </main>

      {/* First-time App Onboarding Walkthrough */}
      <AppOnboardingModal
        isOpen={onboardingOpen}
        onClose={() => {
          setOnboardingOpen(false);
          if (window.location.hash === "#tour" || window.location.hash === "#onboarding") {
            window.location.hash = "home";
          }
        }}
        onComplete={() => {
          setOnboardingOpen(false);
          window.location.hash = "diagnostic";
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <AccountProvider>
      <WithinApp />
    </AccountProvider>
  );
}
