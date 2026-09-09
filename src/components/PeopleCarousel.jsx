import { useEffect, useRef, useState } from "react";
import { people, PEOPLE_INTERVAL_MS } from "../data/people";
export default function PeopleCarousel() {
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(
    () => matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const region = useRef(null);
  const playing = !reduced && !focused && visible && pageVisible;
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(region.current);
    const change = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", change);
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const motion = () => setReduced(preference.matches);
    preference.addEventListener("change", motion);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", change);
      preference.removeEventListener("change", motion);
    };
  }, []);
  useEffect(() => {
    if (!playing) return;
    const timer = setTimeout(
      () => setIndex((i) => (i + 1) % people.length),
      PEOPLE_INTERVAL_MS,
    );
    return () => clearTimeout(timer);
  }, [playing, index]);
  const person = people[index];
  return (
    <section
      id="people"
      className="people-carousel"
      ref={region}
      aria-label="Beyond the label"
      aria-roledescription="carousel"
      style={{ "--person-accent": person.accent }}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
    >
      <div className="wrap">
        <header className="people-heading">
          <span className="kicker">
            Five lives. More than first impressions.
          </span>
          <h2>
            Beyond the <em>label.</em>
          </h2>
          <p>There is always more to a person than the part we see.</p>
        </header>
        <div
          className="people-feature"
          key={person.id}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${people.length}: ${person.name}`}
        >
          <div className="people-portrait">
            <img src={person.image} alt={person.alt} />
            <span className="people-field">{person.field}</span>
            <div className="people-identity">
              <span>{String(index + 1).padStart(2, "0")} / 05</span>
              <h3>{person.name}</h3>
            </div>
          </div>
          <article className="people-copy">
            <span className="people-theme">{person.theme}</span>
            <h3>{person.headline}</h3>
            <p>{person.text}</p>
            <div className="people-takeaway">
              <span>A thought to take with you</span>
              <p>{person.reflection}</p>
            </div>
            <div className="people-sources">
              <a href={person.source} target="_blank" rel="noreferrer">
                Read the story ↗
              </a>
              {person.extraSource && (
                <a href={person.extraSource} target="_blank" rel="noreferrer">
                  Further reading ↗
                </a>
              )}
              <span>{person.sourceLabel}</span>
            </div>
            <div className="people-credit">
              {person.photoSource ? (
                <a href={person.photoSource} target="_blank" rel="noreferrer">
                  Photo: {person.credit}
                </a>
              ) : (
                person.credit
              )}
              {person.license ? (
                <>
                  <span> · </span>
                  <a href={person.license} target="_blank" rel="noreferrer">
                    {person.licenseLabel}
                  </a>
                </>
              ) : (
                person.licenseLabel && ` · ${person.licenseLabel}`
              )}
              {person.photoSource && " · Cropped to fit."}
            </div>
          </article>
        </div>
        <nav className="people-selector" aria-label="Choose a person">
          {people.map((p, i) => (
            <button
              key={p.id}
              aria-label={`Show ${p.name}`}
              aria-pressed={index === i}
              onClick={() => setIndex(i)}
            >
              <span className="people-track">
                <i
                  key={index === i ? index : "idle"}
                  className={index === i ? "active" : ""}
                  style={{
                    animationDuration: `${PEOPLE_INTERVAL_MS}ms`,
                    animationPlayState: playing ? "running" : "paused",
                  }}
                />
              </span>
              <span className="people-selector-label">
                <small>{String(i + 1).padStart(2, "0")}</small>
                {p.shortName}
                <span aria-hidden="true">↗</span>
              </span>
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}
