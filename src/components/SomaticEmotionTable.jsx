import { useState } from "react";

export const SOMATIC_DATA = [
  {
    id: "anxiety",
    emotion: "Anxiety & Worry",
    icon: "⚡",
    color: "#f59e0b",
    tint: "#fffbeb",
    hotspots: ["Chest (constriction)", "Stomach (churning/butterflies)", "Hands & Feet (cold/sweaty)", "Throat (dryness)"],
    biologicalMechanism: "Sympathetic nervous system surge; peripheral vasoconstriction diverts blood away from fingers/toes to large core muscles. Cortisol decreases digestive blood flow.",
    whatItFeelsLike: "Shallow breathing high in the chest, heart fluttering or racing, restless urge to fidget, cold clammy hands.",
    whyItHappens: "The brain anticipates an invisible future threat. The body mobilizes for rapid movement, increasing oxygen intake and muscle readiness.",
    highEqReset: "The Physiological Sigh: Two quick inhales through the nose followed by one long, slow exhale through the mouth. Drops heart rate in under 30 seconds by activating the vagus nerve.",
    scienceRef: "Nummenmaa et al., PNAS Bodily Maps of Emotions"
  },
  {
    id: "anger",
    emotion: "Anger & Frustration",
    icon: "🔥",
    color: "#ef4444",
    tint: "#fef2f2",
    hotspots: ["Jaw & Teeth (clenching)", "Face & Neck (flushing/heat)", "Fists & Forearms (tension)", "Upper Chest (expansion)"],
    biologicalMechanism: "Noradrenaline and testosterone flood the bloodstream; blood pressure spikes and circulation surges upward toward the head and arms.",
    whatItFeelsLike: "Hot burning sensation in the neck and cheeks, teeth pressed tightly together, muscles primed for pushing or striking.",
    whyItHappens: "Evolutionary response to perceived boundary violations or unfair obstacles. The body concentrates energy in the upper limbs for physical defense.",
    highEqReset: "Progressive Muscle Drop: Consciously unclamp the jaw, lower the shoulders 2 inches, and open your hands completely flat. Physical release interrupts the motor cortex feedback loop.",
    scienceRef: "Harvard Medical School Autonomic Research"
  },
  {
    id: "fear",
    emotion: "Fear & Panic",
    icon: "👁️",
    color: "#8b5cf6",
    tint: "#f5f3ff",
    hotspots: ["Gut (sudden drop)", "Eyes (dilation)", "Spine (shiver/chill)", "Diaphragm (frozen breath)"],
    biologicalMechanism: "Massive acute adrenaline release from the adrenal medulla; pupils dilate to maximize visual field, bronchioles dilate, and non-essential visceral functions instantly freeze.",
    whatItFeelsLike: "A sudden drop in the stomach like an elevator falling, icy chill down the back, breath catching in the throat, total stillness.",
    whyItHappens: "The primitive 'freeze-or-flee' reflex. Stillness prevents detection by predators while the sensory system scans for escape routes.",
    highEqReset: "The Mammalian Dive Reflex / Cold Water: Splashing cold water on the face or holding an ice cube activates trigeminal nerve receptors, forcing an immediate cardiac deceleration.",
    scienceRef: "PNAS & Polyvagal Neurobiology (Porges)"
  },
  {
    id: "sadness",
    emotion: "Sadness & Grief",
    icon: "💧",
    color: "#3b82f6",
    tint: "#eff6ff",
    hotspots: ["Throat (lump / globus)", "Behind Sternum (heavy ache)", "Eyes (watery stinging)", "Limbs (lethargy/heaviness)"],
    biologicalMechanism: "Parasympathetic dorsal-vagal deceleration; metabolic output drops, the glottis muscles constrict against the autonomic urge to vocalize distress or weep.",
    whatItFeelsLike: "A physical ache or heaviness right in the center of the chest, feeling like your arms and legs weigh twice as much, difficulty speaking without voice cracking.",
    whyItHappens: "Forces behavioral deactivation to conserve metabolic energy after a loss and signals vulnerability so social peers offer support.",
    highEqReset: "Hand on Heart + Warmth: Placing a warm palm gently over the sternum releases oxytocin, countering the visceral ache of isolation with somatic self-comfort.",
    scienceRef: "Journal of Psychosomatic Research"
  },
  {
    id: "shame",
    emotion: "Shame & Embarrassment",
    icon: "🥀",
    color: "#ec4899",
    tint: "#fdf2f8",
    hotspots: ["Cheeks & Ears (burning blush)", "Posture (hunched shoulders)", "Eyes (inability to hold eye contact)", "Stomach (sinking nausea)"],
    biologicalMechanism: "Sudden facial vasodilation (blushing) combined with a rapid drop in serotonin and a dorsal-vagal submissive postural reflex.",
    whatItFeelsLike: "Intense heat in the face, desire to shrink physically or disappear into the floor, sinking nausea in the pit of the stomach.",
    whyItHappens: "An ancient appeasement signal that displays submission to the social group, communicating: 'I recognize the social norm; please do not cast me out.'",
    highEqReset: "Postural Realignment & Grounding: Roll shoulders back, gently lift the chin, and plant both feet firmly on the ground. Breaking the hunch signals safety to the brainstem.",
    scienceRef: "Nummenmaa et al., PNAS & Gilbert Social Mentality"
  },
  {
    id: "calm",
    emotion: "Calm & Deep Relief",
    icon: "🌱",
    color: "#10b981",
    tint: "#ecfdf5",
    hotspots: ["Whole Chest (warm expansion)", "Jaw & Brows (slack/unfurled)", "Abdomen (rhythmic rise & fall)", "Shoulders (dropped)"],
    biologicalMechanism: "Ventral vagal activation; acetylcholine released at the sinoatrial node maintains a steady, resting heart rate; immune and digestive functions operate optimally.",
    whatItFeelsLike: "Spaciousness in the chest, effortless slow breathing into the belly, comfortable warmth circulating through fingers and toes.",
    whyItHappens: "Homeostatic baseline of safety and social engagement where learning, empathy, and clear-headed decision making are biologically possible.",
    highEqReset: "Savoring the Baseline: Spend 20 intentional seconds noticing the absence of bodily threat. This installs positive neuroplastic memory into long-term circuits.",
    scienceRef: "Polyvagal Institute & PNAS Bodily Maps"
  }
];

export default function SomaticEmotionTable() {
  const [selectedEmotionId, setSelectedEmotionId] = useState("anxiety");
  const [viewMode, setViewMode] = useState("interactive"); // "interactive" | "table"

  const activeData =
    SOMATIC_DATA.find((e) => e.id === selectedEmotionId) || SOMATIC_DATA[0];

  return (
    <section className="somatic-table-section" id="somatic-map">
      <div className="learning-wrap">
        <header className="chapter-browser-heading">
          <div className="somatic-heading-badge-wrap">
            <span className="kicker">Real Somatic Physiology</span>
            <span className="pnas-badge">PNAS Research Benchmark</span>
          </div>
          <h2>Where Emotions Live in Your Body</h2>
          <p>
            Emotions are bodily states before they become thoughts. Based on landmark
            topographical mapping studies (Nummenmaa et al., <i>PNAS</i>), explore the exact
            physical hot-spots triggered by each emotion and how high-EQ habits regulate them.
          </p>

          {/* View Switcher: Interactive Card vs Complete Table */}
          <div className="somatic-view-switch" role="tablist" aria-label="View format">
            <button
              type="button"
              className={`somatic-switch-btn ${viewMode === "interactive" ? "is-active" : ""}`}
              onClick={() => setViewMode("interactive")}
            >
              Interactive Explorer
            </button>
            <button
              type="button"
              className={`somatic-switch-btn ${viewMode === "table" ? "is-active" : ""}`}
              onClick={() => setViewMode("table")}
            >
              Complete Scientific Table
            </button>
          </div>
        </header>

        {viewMode === "interactive" ? (
          <div className="somatic-interactive-wrap">
            {/* Emotion Selector Tabs */}
            <div className="somatic-emotion-tabs" role="tablist" aria-label="Emotions">
              {SOMATIC_DATA.map((item) => {
                const isSelected = item.id === selectedEmotionId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`somatic-tab-btn ${isSelected ? "is-active" : ""}`}
                    style={{
                      "--emotion-accent": item.color,
                      "--emotion-tint": item.tint,
                    }}
                    onClick={() => setSelectedEmotionId(item.id)}
                  >
                    <span className="somatic-tab-icon">{item.icon}</span>
                    <span className="somatic-tab-label">{item.emotion}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Emotion Card */}
            <div
              className="somatic-active-card"
              style={{
                "--emotion-accent": activeData.color,
                "--emotion-tint": activeData.tint,
              }}
            >
              <div className="somatic-card-top">
                <div className="somatic-title-group">
                  <span className="somatic-card-icon">{activeData.icon}</span>
                  <div>
                    <span className="somatic-source-tag">Peer-Reviewed Evidence</span>
                    <h3 className="somatic-card-title">{activeData.emotion}</h3>
                  </div>
                </div>
                <span className="somatic-study-cite">{activeData.scienceRef}</span>
              </div>

              {/* Physical Hotspots Row */}
              <div className="somatic-hotspots-panel">
                <span className="hotspot-header-label">📍 Primary Bodily Hotspots:</span>
                <div className="hotspot-tags-grid">
                  {activeData.hotspots.map((spot, i) => (
                    <span key={i} className="hotspot-tag">
                      {spot}
                    </span>
                  ))}
                </div>
              </div>

              {/* Biological Detail Columns */}
              <div className="somatic-detail-grid">
                <div className="somatic-detail-block">
                  <strong>🫀 Biological Mechanism</strong>
                  <p>{activeData.biologicalMechanism}</p>
                </div>
                <div className="somatic-detail-block">
                  <strong>🧠 Evolutionary Purpose</strong>
                  <p>{activeData.whyItHappens}</p>
                </div>
              </div>

              <div className="somatic-experience-block">
                <strong>⚡ What It Physically Feels Like:</strong>
                <p>{activeData.whatItFeelsLike}</p>
              </div>

              {/* High-EQ Reset Box */}
              <div className="somatic-reset-card">
                <div className="reset-card-header">
                  <span className="reset-sparkle">✨</span>
                  <strong>High-EQ Somatic Reset Move:</strong>
                </div>
                <p className="reset-card-body">{activeData.highEqReset}</p>
              </div>
            </div>
          </div>
        ) : (
          /* --- COMPLETE CONCRETE TABLE VIEW --- */
          <div className="somatic-full-table-card">
            <div className="somatic-table-scroller">
              <table className="somatic-concrete-table">
                <thead>
                  <tr>
                    <th>Emotion</th>
                    <th>Primary Body Hotspots</th>
                    <th>Autonomic Mechanism</th>
                    <th>High-EQ Somatic Reset</th>
                  </tr>
                </thead>
                <tbody>
                  {SOMATIC_DATA.map((row) => (
                    <tr key={row.id}>
                      <td className="table-emotion-cell">
                        <span className="table-emotion-icon">{row.icon}</span>
                        <strong>{row.emotion}</strong>
                      </td>
                      <td className="table-hotspots-cell">
                        <ul>
                          {row.hotspots.map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="table-mechanism-cell">
                        <p>{row.biologicalMechanism}</p>
                      </td>
                      <td className="table-reset-cell">
                        <p>{row.highEqReset}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <footer className="somatic-table-footer">
              <span>Data benchmark: Nummenmaa, Glerean, Hari & Hietanen (PNAS - Proceedings of the National Academy of Sciences)</span>
            </footer>
          </div>
        )}
      </div>
    </section>
  );
}
