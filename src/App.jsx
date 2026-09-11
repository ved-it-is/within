import AccountProvider from "./components/AccountProvider";
import PeopleCarousel from "./components/PeopleCarousel";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import GlobeSection from "./components/GlobeSection";
import JourneyExperience from "./components/JourneyExperience";
import ExplorePage from "./components/ExplorePage";
import ArcadePage from "./components/ArcadePage";
import EmotionalIntelligencePage from "./components/EmotionalIntelligencePage";
import {
  readProgress,
  saveProgress,
  introductionComplete,
} from "./data/progress";

function getRoute() {
  const hash = window.location.hash;
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
  const [progress, setProgress] = useState(readProgress);
  const [storageAvailable, setStorageAvailable] = useState(true);
  const [route, setRoute] = useState(getRoute);
  const [introductionRun, setIntroductionRun] = useState(0);
  const unlocked = introductionComplete(progress.introduction);
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
      <Sidebar
        unlocked={unlocked}
        page={route.page}
        collapsed={collapsed}
        onToggle={toggleSidebar}
        onNavigate={() => {
          if (window.matchMedia("(max-width: 820px)").matches)
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
      <main>
        {route.page === "emotional-intelligence" ? (
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
              <div className="wrap">
                <span className="kicker">
                  Emotional intelligence through practice
                </span>
                <h1>
                  Understand what you feel.
                  <br />
                  <strong>Choose how you respond.</strong>
                </h1>
                <p className="lead">
                  Explore real-life situations, discover your emotional patterns
                  and strengthen the skills that shape your relationships,
                  decisions and everyday well-being.
                </p>
                <blockquote>
                  “One emotion can change a moment. One thoughtful response can
                  change what follows.”
                </blockquote>
                <div className="hero-actions">
                  <a className="primary" href="#world">
                    See the world beneath the numbers ↓
                  </a>
                  <a className="secondary hero-eq-btn" href="#emotional-intelligence">
                    💡 What is Emotional Intelligence?
                  </a>
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
