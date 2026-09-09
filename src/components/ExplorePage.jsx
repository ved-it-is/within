import { useEffect, useRef, useState } from "react";
import { chapters, learningSources, stages } from "../data/chapters";
import ChapterPractice from "./ChapterPractice";

export default function ExplorePage({
  chapterId,
  progress,
  onUpdate,
  storageAvailable,
}) {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const title = useRef(null);
  const completed = chapters.filter(
    (chapter) => progress[chapter.id]?.completed,
  ).length;
  const started = chapters.find(
    (chapter) =>
      progress[chapter.id]?.session && !progress[chapter.id].session.completed,
  );
  const suggested =
    started || chapters.find((chapter) => !progress[chapter.id]?.completed);
  const chapter = chapters.find((item) => item.id === chapterId);

  useEffect(() => {
    if (!chapterId) title.current?.focus();
  }, [chapterId]);

  if (chapter)
    return (
      <ChapterPractice
        key={chapter.id}
        chapter={chapter}
        record={progress[chapter.id]}
        storageAvailable={storageAvailable}
        onUpdate={onUpdate}
      />
    );
  if (chapterId !== null)
    return (
      <section className="explore-page">
        <div className="learning-wrap">
          <h1>Let’s find your next chapter.</h1>
          <p>This chapter isn’t part of the journey.</p>
          <a className="primary" href="#explore">
            See all 31 chapters →
          </a>
        </div>
      </section>
    );

  const visibleChapters = chapters.filter(
    (item) =>
      (filter === "all" || item.stageId === filter) &&
      `${item.title} ${item.description} ${stages.find((stage) => stage.id === item.stageId).skill}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );

  return (
    <section className="explore-page">
      <div className="learning-wrap">
        <header className="explore-header">
          <span className="kicker">Your learning journey</span>
          <h1 ref={title} tabIndex={-1}>
            A little practice.
            <br />
            <strong>More understanding.</strong>
          </h1>
          <p>
            31 chapters, ten questions each, to help you understand yourself and
            connect with others. Start where you are. Move at your own pace.
          </p>
        </header>
        <div className="journey-overview">
          <div className="recommended-chapter">
            <span className="kicker">
              {suggested
                ? started
                  ? "Pick up where you left off"
                  : "A suggested next step"
                : "Room to keep growing"}
            </span>
            <h2>
              {suggested ? suggested.title : "Your toolkit is yours to keep."}
            </h2>
            <p>
              {suggested
                ? suggested.description
                : "You have explored all 31 chapters. Return to any practice that feels useful today."}
            </p>
            <a
              className="primary"
              href={`#explore/chapter/${suggested?.id || 31}`}
            >
              {suggested
                ? started
                  ? "Continue chapter"
                  : "Start chapter"
                : "Revisit your toolkit"}{" "}
              →
            </a>
            <span className="overview-art" aria-hidden="true">
              ✳
            </span>
          </div>
          <div className="learning-progress">
            <span className="kicker">At your own pace</span>
            <p className="progress-count">
              <strong>{completed}</strong>
              <span> / 31</span>
            </p>
            <p>chapters practised</p>
            <progress
              value={completed}
              max={31}
              aria-label={`${completed} of 31 chapters practised`}
            />
            <small>
              {storageAvailable
                ? "Progress is saved in this browser. No account needed. Clearing browser data removes it."
                : "Browser storage is unavailable. Progress will last only while this page stays open."}
            </small>
          </div>
        </div>
        <div className="chapter-browser-heading">
          <div>
            <span className="kicker">Six stages, one personal toolkit</span>
            <h2>What would you like to practise today?</h2>
          </div>
          <p>Follow the order or choose any chapter. No daily deadlines.</p>
        </div>
        <label className="chapter-search" htmlFor="chapter-search">
          <span>Find a chapter</span>
          <input
            id="chapter-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try listen, boundaries, or uncertainty"
          />
        </label>
        <div
          className="stage-filters"
          role="group"
          aria-label="Filter chapters by skill"
        >
          <button
            aria-pressed={filter === "all"}
            onClick={() => setFilter("all")}
          >
            All chapters
          </button>
          {stages.map((stage) => (
            <button
              key={stage.id}
              aria-pressed={filter === stage.id}
              onClick={() => setFilter(stage.id)}
            >
              {stage.skill}
            </button>
          ))}
        </div>
        <p className="filter-count" role="status">
          {visibleChapters.length}{" "}
          {visibleChapters.length === 1 ? "chapter" : "chapters"} to explore
        </p>
        {stages.map((stage, stageIndex) => {
          const stageChapters = visibleChapters.filter(
            (item) => item.stageId === stage.id,
          );
          if (!stageChapters.length) return null;
          return (
            <section
              className="chapter-stage"
              key={stage.id}
              style={{
                "--stage-color": stage.color,
                "--stage-tint": stage.tint,
              }}
              aria-labelledby={`stage-${stage.id}`}
            >
              <header className="stage-heading">
                <span className="stage-symbol" aria-hidden="true">
                  {stage.symbol}
                </span>
                <div>
                  <span className="kicker">
                    {stageIndex < 6
                      ? `Stage ${stageIndex + 1} · ${stage.skill}`
                      : "Your personal toolkit"}
                  </span>
                  <h3 id={`stage-${stage.id}`}>{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>
              </header>
              <div className="chapter-grid">
                {stageChapters.map((item) => {
                  const status = progress[item.id];
                  return (
                    <a
                      className="chapter-card"
                      href={`#explore/chapter/${item.id}`}
                      key={item.id}
                    >
                      <div className="chapter-card-top">
                        <span className="chapter-number">
                          {String(item.id).padStart(2, "0")}
                        </span>
                        <span
                          className={`chapter-status ${status?.completed ? "is-complete" : ""}`}
                        >
                          {status?.completed
                            ? "✓ Practised"
                            : status?.session
                              ? "In progress"
                              : status?.legacyExplored
                                ? "Previously explored"
                                : "Ready when you are"}
                        </span>
                      </div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <div className="chapter-card-bottom">
                        <span>10 questions · Repeat practice</span>
                        <span aria-hidden="true">↗</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </section>
          );
        })}
        {!visibleChapters.length && (
          <div className="empty-chapters">
            <h3>No chapters match that search.</h3>
            <p>Try a different word or see the whole journey.</p>
            <button
              className="primary"
              onClick={() => {
                setFilter("all");
                setQuery("");
              }}
            >
              Show all chapters
            </button>
          </div>
        )}
        <details className="learning-sources">
          <summary>What informs this journey?</summary>
          <p>
            These original activities draw on emotional-skills frameworks and
            active learning principles. This 31-chapter course has not been
            independently validated or clinically reviewed. Research on other
            training programmes does not establish its effectiveness.
          </p>
          <ul>
            {learningSources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noreferrer">
                  {source.title} ↗
                </a>
              </li>
            ))}
          </ul>
        </details>
        <p className="learning-footnote">
          Educational practice for adults, not therapy. Your progress reflects
          chapters practised, not your worth or a permanent measure of emotional
          intelligence.
        </p>
      </div>
    </section>
  );
}
