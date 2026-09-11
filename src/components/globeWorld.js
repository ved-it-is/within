import * as THREE from "three";

export const GLOBAL_CITIES = [
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    lat: 35.6762,
    lon: 139.6503,
    region: "East Asia",
    tag: "High Composure Hub",
    facade: {
      headline: "Unshakeable Diligence & Polished Composure",
      metric: "93%",
      metricLabel: "Projected Composure",
      socialExpectation: "Tireless dedication ('Gambaru' ethic), polite deference, and uninterrupted public poise.",
      quote: "“In packed rush-hour trains, nobody sighs. We put in earbuds, smile at our screens, and carry on. Showing emotional strain feels like burdening the group.”",
      tags: ["Smiling Exhaustion", "Unspoken Grief", "Harmony Tax"],
      summary: "93% display complete emotional regulation in public spaces, hiding anxiety behind spotless politeness."
    },
    within: {
      headline: "Suppressed Burnout & Isolated Longing",
      metric: "74%",
      metricLabel: "Somatic Fatigue",
      realStruggle: "Chronic cervical and shoulder tension from swallowing personal frustration. Constant fear of burdening coworkers or loved ones with vulnerability.",
      somaticCue: "Throat tightness, rigid jaw clenching, and shallow rib breathing in crowded stations.",
      eqInsight: "Harmonizing with others should never require disowning your own somatic reality.",
      recommendedChapterId: 17,
      tags: ["Throat Constriction", "Silent Burnout", "Relational Fear"],
      summary: "74% experience silent somatic burnout, feeling unable to speak about their grief or exhaustion."
    }
  },
  {
    id: "new-york",
    name: "New York",
    country: "United States",
    lat: 40.7128,
    lon: -74.006,
    region: "North America",
    tag: "High Ambition Hub",
    facade: {
      headline: "High-Octane Hustle & Bulletproof Ambition",
      metric: "89%",
      metricLabel: "Projected Confidence",
      socialExpectation: "Relentless career drive, unapologetic confidence, magnetic charisma, and an unstoppable winning aura.",
      quote: "“Everyone on feeds is 'crushing it' and building empires. If you admit you're exhausted or second-guessing your path, you feel instantly disposable.”",
      tags: ["Hustle Bravado", "Unstoppable Aura", "Status Defense"],
      summary: "89% project fearless confidence and career mastery during daily social and professional interactions."
    },
    within: {
      headline: "Imposter Dread & Somatic Depletion",
      metric: "69%",
      metricLabel: "Internal Panic",
      realStruggle: "Chronic sympathetic nervous system overdrive. Waking up at 3 AM with heart palpitations and the haunting terror that one misstep will expose inadequacy.",
      somaticCue: "Mid-chest constriction, elevated resting pulse, and inability to take a full diaphragmatic exhale.",
      eqInsight: "Confidence that demands constant performative dominance is fear in a sharp suit.",
      recommendedChapterId: 13,
      tags: ["Chest Tightness", "Imposter Dread", "Late-Night Panic"],
      summary: "69% battle imposter terror and sympathetic overdrive behind their dynamic, outgoing exterior."
    }
  },
  {
    id: "london",
    name: "London",
    country: "United Kingdom",
    lat: 51.5074,
    lon: -0.1278,
    region: "Western Europe",
    tag: "Stoic Poise Hub",
    facade: {
      headline: "The 'Stiff Upper Lip' & Unbothered Poise",
      metric: "86%",
      metricLabel: "Projected Independence",
      socialExpectation: "Ironclad emotional self-containment, dry self-deprecating wit, and casual 'I’m completely fine' independence.",
      quote: "“The unspoken rule is: whatever falls apart, make a dry joke about the rain, say 'could be worse', and keep walking.”",
      tags: ["Stoic Poise", "Detached Irony", "No Worries"],
      summary: "86% maintain effortless composure and humorous detachment when confronting personal upheaval."
    },
    within: {
      headline: "Internalized Numbness & Withheld Tenderness",
      metric: "64%",
      metricLabel: "Suppression Index",
      realStruggle: "Mistaking numbness for emotional strength. Profound hesitation to ask for warmth out of dread of seeming needy or overly dramatic.",
      somaticCue: "Locked upper spine, teeth grinding at night, and persistent emotional freeze responses.",
      eqInsight: "Containment is not regulation; it is merely holding an explosion inside the ribs.",
      recommendedChapterId: 21,
      tags: ["Jaw Clenching", "Masked Grief", "Isolation Behind Wit"],
      summary: "64% confuse emotional numbness with resilience, locking grief inside the chest and spine."
    }
  },
  {
    id: "mumbai",
    name: "Mumbai",
    country: "India",
    lat: 19.076,
    lon: 72.8777,
    region: "South Asia",
    tag: "Devoted Harmony Hub",
    facade: {
      headline: "Warm Family Duty & Resilient Stamina",
      metric: "91%",
      metricLabel: "Projected Solidarity",
      socialExpectation: "Boundless sacrifice for family, vibrant celebratory spirit, and overcoming any obstacle without complaint.",
      quote: "“Self-sacrifice is celebrated as the highest virtue. If you set a boundary or express individual hurt, it's mistaken for disrespect.”",
      tags: ["Filial Devotion", "Endless Stamina", "Joyful Duty"],
      summary: "91% project continuous warmth, family loyalty, and joyful accommodation under heavy demands."
    },
    within: {
      headline: "Guilt Burden & Relational Enmeshment",
      metric: "72%",
      metricLabel: "Boundary Exhaustion",
      realStruggle: "Intense visceral guilt whenever asserting self-care. Deep gut knot from carrying emotional responsibility for parents, relatives, and colleagues.",
      somaticCue: "Persistent gut anxiety, stomach churning, and fatigue from suppressing personal boundaries.",
      eqInsight: "Empathy without boundaries is self-destruction disguised as love.",
      recommendedChapterId: 25,
      tags: ["Gut Anxiety", "Guilt Reflex", "Boundary Erosion"],
      summary: "72% carry chronic somatic gut tension and guilt whenever needing to say 'no'."
    }
  },
  {
    id: "sao-paulo",
    name: "São Paulo",
    country: "Brazil",
    lat: -23.5505,
    lon: -46.6333,
    region: "South America",
    tag: "Radiant Warmth Hub",
    facade: {
      headline: "Vibrant Warmth & Irresistible Joy",
      metric: "94%",
      metricLabel: "Projected Joy",
      socialExpectation: "Continuous social warmth, open hugs, infectious cheer, effortless optimism, and rhythmic vibrancy.",
      quote: "“In a culture that celebrates pure joy, having a grey day feels almost rude to people around you. You put on music and dance through grief.”",
      tags: ["Radiant Warmth", "Festive Energy", "Total Openness"],
      summary: "94% feel compelled to project festive energy, humor, and open hugs regardless of internal state."
    },
    within: {
      headline: "Performative Cheer & Suppressed Grief",
      metric: "67%",
      metricLabel: "Exhaustion of Joy",
      realStruggle: "Solar plexus exhaustion from holding up everyone else's mood. Deep loneliness when sadness arrives because there is no social container for quiet sorrow.",
      somaticCue: "Solar plexus clenching, tired facial muscles from forced smiling, and heavy nervous fatigue.",
      eqInsight: "Allowing yourself to feel grief is the only way joy remains authentic rather than performative.",
      recommendedChapterId: 8,
      tags: ["Solar Plexus Ache", "Forced Smile Strain", "Unspoken Melancholy"],
      summary: "67% suffer performative smile fatigue and feel invisible during quiet, solemn seasons."
    }
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    lat: 48.8566,
    lon: 2.3522,
    region: "Western Europe",
    tag: "Intellectual Poise Hub",
    facade: {
      headline: "Intellectual Poise & Elegant Discernment",
      metric: "88%",
      metricLabel: "Projected Poise",
      socialExpectation: "Aesthetic composure, witty cynicism, intellectual detachment, and seamless cultural refinement.",
      quote: "“To be taken seriously, one must analyze everything with irony. Raw vulnerability sounds unsophisticated or clumsy.”",
      tags: ["Aesthetic Cool", "Intellectual Poise", "Ironclad Taste"],
      summary: "88% present polished analytical composure, dissecting ideas while hiding vulnerable feelings."
    },
    within: {
      headline: "Disconnection Through Analysis & Guarded Fear",
      metric: "65%",
      metricLabel: "Intellectual Distance",
      realStruggle: "Converting genuine emotional hurt into intellectual critique. Deep hunger for warm, uncritical acceptance while fiercely maintaining a defensive guard.",
      somaticCue: "Tight throat, high diaphragm tension, and subtle avoidance of deep emotional eye contact.",
      eqInsight: "You cannot think your way through an emotion that was meant to be felt.",
      recommendedChapterId: 3,
      tags: ["Throat Lock", "Intellectual Defense", "Hidden Loneliness"],
      summary: "65% experience profound relational loneliness by intellectualizing their tender emotions."
    }
  },
  {
    id: "sydney",
    name: "Sydney",
    country: "Australia",
    lat: -33.8688,
    lon: 151.2093,
    region: "Oceania",
    tag: "Casual Chill Hub",
    facade: {
      headline: "'No Worries' Casual Optimism",
      metric: "90%",
      metricLabel: "Projected Chill",
      socialExpectation: "Effortless casual breeze, athletic vigor, sunlit optimism, and refusing to take life too seriously.",
      quote: "“The motto is 'she'll be right mate'. But when your internal world is spiraling, saying anything sounds like whining.”",
      tags: ["No Worries", "Sunlit Optimism", "Laid-Back Ease"],
      summary: "90% project an easygoing, carefree attitude where nothing appears to ruffle their feathers."
    },
    within: {
      headline: "Silent Disconnect Behind the Mateship Smile",
      metric: "63%",
      metricLabel: "Masked Disconnection",
      realStruggle: "Feeling utterly isolated in social pubs and barbecues. Brushing off severe existential dread and anxiety under humor until burnout forces a collapse.",
      somaticCue: "Neck stiffness, clenched teeth behind casual banter, and a hollow chest feeling.",
      eqInsight: "True resilience acknowledges the storm instead of pretending the rain isn't wet.",
      recommendedChapterId: 19,
      tags: ["Clenched Teeth", "Masked Dread", "Mateship Isolation"],
      summary: "63% endure quiet internal isolation, fearful that opening up will violate the casual code."
    }
  },
  {
    id: "nairobi",
    name: "Nairobi",
    country: "Kenya",
    lat: -1.2921,
    lon: 36.8219,
    region: "East Africa",
    tag: "Communal Anchor Hub",
    facade: {
      headline: "Communal Solidarity & Unwavering Hope",
      metric: "87%",
      metricLabel: "Projected Fortitude",
      socialExpectation: "The communal anchor, spiritual perseverance, and uplifting everyone around you with steadfast hope.",
      quote: "“We are taught 'Harambee'—pulling together. But as the strong one, you have to be the pillar. Pillars aren't allowed to crack.”",
      tags: ["Communal Pillar", "Steadfast Hope", "Tireless Anchor"],
      summary: "87% represent steadfast community pillars who never let anyone see them falter or weep."
    },
    within: {
      headline: "Invisible Caregiver Depletion",
      metric: "66%",
      metricLabel: "Caregiver Burnout",
      realStruggle: "Holding the financial, emotional, and spiritual burdens of extended networks without ever having a sanctuary to receive care in return.",
      somaticCue: "Chronic lower back ache, systemic physical fatigue, and heavy heart weight.",
      eqInsight: "A tree that feeds an entire village still needs deep root water for itself.",
      recommendedChapterId: 23,
      tags: ["Lower Back Ache", "Chronic Fatigue", "Unreciprocated Anchor"],
      summary: "66% endure chronic caregiver depletion, holding up others with no one to hold them."
    }
  }
];

// Major urban light clusters across the world [lat, lon, radius, count]
export const URBAN_LIGHT_CENTERS = [
  // North America
  [40.7, -74.0, 18, 28], // NYC / BosWash
  [42.3, -71.0, 10, 14], // Boston
  [38.9, -77.0, 12, 18], // Washington / Baltimore
  [41.8, -87.6, 16, 22], // Chicago / Great Lakes
  [34.0, -118.2, 18, 26], // Los Angeles
  [37.7, -122.4, 14, 20], // SF Bay Area
  [47.6, -122.3, 10, 14], // Seattle
  [29.7, -95.3, 12, 16], // Houston
  [32.7, -96.8, 12, 16], // Dallas
  [25.7, -80.2, 10, 14], // Miami / Florida
  [19.4, -99.1, 16, 22], // Mexico City
  [43.6, -79.3, 12, 16], // Toronto
  [45.5, -73.5, 10, 12], // Montreal

  // Western & Central Europe
  [51.5, -0.1, 16, 26], // London
  [48.8, 2.3, 15, 24], // Paris
  [52.3, 4.9, 14, 20], // Benelux / Amsterdam
  [51.2, 6.8, 16, 22], // Rhine-Ruhr
  [50.1, 8.6, 10, 14], // Frankfurt
  [52.5, 13.4, 12, 16], // Berlin
  [48.1, 11.5, 10, 14], // Munich
  [45.4, 9.1, 14, 18], // Milan / Po Valley
  [41.9, 12.5, 12, 16], // Rome
  [40.4, -3.7, 12, 16], // Madrid
  [41.3, 2.1, 10, 14], // Barcelona
  [38.7, -9.1, 10, 12], // Lisbon
  [48.2, 16.3, 10, 12], // Vienna
  [52.2, 21.0, 10, 14], // Warsaw
  [59.3, 18.0, 10, 12], // Stockholm

  // East & South Asia
  [35.6, 139.7, 20, 32], // Tokyo / Kanto
  [34.6, 135.5, 16, 24], // Osaka / Kansai
  [37.5, 126.9, 16, 24], // Seoul
  [39.9, 116.4, 16, 24], // Beijing
  [31.2, 121.4, 18, 28], // Shanghai / Yangtze Delta
  [23.1, 113.2, 18, 26], // Guangzhou / Pearl River Delta
  [22.3, 114.1, 12, 18], // Hong Kong
  [25.0, 121.5, 12, 16], // Taipei
  [28.6, 77.2, 16, 24], // Delhi NCR
  [19.0, 72.8, 18, 28], // Mumbai
  [12.9, 77.5, 14, 20], // Bengaluru
  [13.0, 80.2, 12, 16], // Chennai
  [22.5, 88.3, 14, 18], // Kolkata
  [17.3, 78.4, 12, 16], // Hyderabad

  // Middle East & Africa
  [25.2, 55.2, 14, 20], // Dubai / UAE
  [24.7, 46.6, 12, 16], // Riyadh
  [30.0, 31.2, 16, 24], // Cairo / Nile Delta
  [32.0, 34.7, 12, 16], // Tel Aviv
  [41.0, 28.9, 14, 20], // Istanbul
  [6.5, 3.3, 14, 18], // Lagos
  [-26.2, 28.0, 14, 18], // Johannesburg
  [-33.9, 18.4, 10, 14], // Cape Town
  [-1.2, 36.8, 12, 16], // Nairobi

  // Southeast Asia & Oceania
  [1.3, 103.8, 12, 18], // Singapore
  [13.7, 100.5, 14, 20], // Bangkok
  [-6.2, 106.8, 16, 22], // Jakarta
  [14.5, 120.9, 14, 18], // Manila
  [10.8, 106.6, 12, 16], // Ho Chi Minh City
  [-33.8, 151.2, 14, 20], // Sydney
  [-37.8, 144.9, 14, 18], // Melbourne
  [-27.4, 153.0, 10, 14], // Brisbane
  [-31.9, 115.8, 10, 12], // Perth
  [-36.8, 174.7, 10, 12], // Auckland

  // Latin America
  [-23.5, -46.6, 18, 28], // São Paulo
  [-22.9, -43.1, 14, 20], // Rio de Janeiro
  [-34.6, -58.3, 16, 22], // Buenos Aires
  [-33.4, -70.6, 12, 16], // Santiago
  [4.7, -74.0, 12, 16], // Bogotá
  [-12.0, -77.0, 12, 16] // Lima
];

// Vectorized geographical continent outlines [lat, lon]
export const CONTINENT_POLYGONS = [
  // North America & Central America
  [
    [71, -156], [71, -135], [68, -125], [62, -120], [55, -120], [49, -123],
    [45, -124], [38, -123], [34, -119], [32, -117], [29, -113], [23, -110],
    [24, -107], [28, -105], [20, -105], [16, -97], [16, -93], [14, -87],
    [9, -79], [8, -82], [14, -88], [18, -91], [19, -96], [22, -97],
    [26, -97], [29, -94], [30, -88], [25, -80], [29, -81], [35, -75],
    [41, -70], [44, -66], [47, -53], [52, -56], [58, -63], [62, -75],
    [63, -92], [57, -89], [52, -80], [55, -82], [63, -80], [68, -85],
    [69, -100], [72, -125], [71, -156]
  ],
  // Alaska
  [
    [71, -156], [66, -168], [60, -166], [55, -162], [54, -164], [58, -154],
    [60, -145], [60, -140], [68, -141], [71, -156]
  ],
  // Greenland
  [
    [82, -40], [83, -25], [76, -18], [70, -22], [65, -35], [60, -44],
    [64, -52], [70, -54], [76, -68], [80, -60], [82, -40]
  ],
  // South America
  [
    [12, -72], [11, -64], [6, -58], [4, -51], [0, -50], [-4, -40],
    [-5, -35], [-12, -37], [-18, -39], [-23, -42], [-28, -48], [-34, -53],
    [-38, -57], [-45, -63], [-52, -68], [-55, -67], [-53, -71], [-45, -74],
    [-35, -72], [-25, -70], [-18, -71], [-15, -75], [-5, -81], [1, -80],
    [7, -77], [10, -75], [12, -72]
  ],
  // Europe
  [
    [36, -6], [43, -9], [44, -1], [48, -4], [50, 1], [53, 5],
    [54, 9], [57, 10], [55, 12], [54, 19], [59, 25], [60, 30],
    [66, 32], [70, 28], [71, 26], [65, 12], [58, 6], [53, 7],
    [48, -2], [44, -1], [43, 3], [42, 9], [44, 13], [40, 18],
    [38, 16], [38, 24], [41, 29], [46, 31], [46, 38], [42, 28],
    [40, 23], [37, 22], [36, -6]
  ],
  // British Isles & Ireland
  [
    [50, -5], [51, 1], [54, 0], [58, -3], [58, -6], [55, -5],
    [53, -3], [51, -4], [50, -5]
  ],
  [
    [51, -10], [55, -6], [54, -10], [52, -10], [51, -10]
  ],
  // Africa
  [
    [36, -5], [37, 10], [33, 11], [32, 25], [31, 32], [22, 37],
    [12, 44], [11, 51], [2, 45], [-4, 40], [-11, 40], [-17, 38],
    [-26, 33], [-34, 26], [-34, 18], [-28, 16], [-23, 14], [-13, 12],
    [-5, 12], [4, 9], [4, 2], [6, 2], [5, -4], [5, -10],
    [12, -16], [15, -17], [21, -17], [28, -13], [35, -6], [36, -5]
  ],
  // Madagascar
  [
    [-12, 49], [-16, 50], [-25, 47], [-25, 44], [-16, 44], [-12, 49]
  ],
  // Asia (Eurasia mainland)
  [
    [41, 29], [37, 36], [31, 35], [28, 34], [23, 38], [13, 44],
    [15, 52], [24, 57], [26, 56], [27, 51], [30, 48], [25, 62],
    [24, 68], [16, 73], [8, 77], [13, 80], [22, 89], [22, 92],
    [16, 96], [8, 98], [1, 104], [6, 102], [11, 107], [21, 108],
    [22, 114], [30, 122], [38, 119], [40, 124], [35, 129], [39, 128],
    [42, 131], [48, 140], [53, 141], [58, 162], [65, 170], [67, 179],
    [70, 180], [72, 140], [74, 100], [77, 105], [76, 95], [73, 80],
    [70, 60], [67, 45], [55, 38], [45, 36], [41, 29]
  ],
  // Japan (Honshu/Hokkaido/Kyushu)
  [
    [45, 142], [42, 141], [42, 144], [44, 145], [45, 142]
  ],
  [
    [41, 141], [36, 140], [35, 139], [34, 136], [34, 132], [36, 136],
    [39, 140], [41, 141]
  ],
  // Australia
  [
    [-12, 131], [-12, 136], [-15, 136], [-17, 141], [-11, 142], [-15, 145],
    [-24, 153], [-32, 153], [-38, 147], [-38, 141], [-32, 133], [-35, 118],
    [-34, 115], [-22, 114], [-20, 119], [-15, 124], [-12, 131]
  ],
  // New Zealand
  [
    [-35, 173], [-37, 175], [-41, 175], [-39, 174], [-35, 173]
  ],
  [
    [-41, 173], [-46, 167], [-46, 170], [-43, 172], [-41, 173]
  ],
  // Indonesia / Maritime SE Asia
  [
    [5, 96], [3, 98], [-4, 103], [-6, 106], [-3, 102], [2, 97], [5, 96]
  ],
  [
    [-6, 106], [-7, 108], [-7, 113], [-8, 114], [-8, 108], [-6, 106]
  ],
  [
    [7, 117], [4, 118], [-3, 116], [-4, 112], [2, 109], [5, 115], [7, 117]
  ],
  // Antarctica
  [
    [-64, -60], [-68, -68], [-74, -75], [-76, -20], [-68, 40], [-65, 80],
    [-66, 110], [-65, 140], [-72, 170], [-78, -170], [-74, -130], [-72, -90],
    [-64, -60]
  ]
];

/**
 * Converts geographical (latitude, longitude) into 3D Cartesian coordinates
 * on a sphere of specified radius matching Three.js equirectangular UV mapping.
 */
export function latLonToVector3(lat, lon, radius = 1) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.cos(theta) * Math.sin(phi),
    radius * Math.cos(phi),
    radius * Math.sin(theta) * Math.sin(phi)
  );
}

/**
 * Converts geographical (latitude, longitude) to canvas equirectangular (X, Y)
 */
export function latLonToCanvas(lat, lon, width, height) {
  const x = ((lon + 180) / 360) * width;
  const y = ((90 - lat) / 180) * height;
  return { x, y };
}

/**
 * Draws the high-resolution procedural Earth texture onto a canvas element.
 * @param {HTMLCanvasElement} canvas
 * @param {"reported" | "personal"} mode "reported" = Night Lights Façade; "personal" = Shadow Within Reality
 * @param {string | null} selectedCityId
 */
export function drawEarthCanvas(canvas, mode = "reported", selectedCityId = null) {
  const width = canvas.width;
  const height = canvas.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const isNightLights = mode === "reported";

  // 1. Base Ocean Fill
  if (isNightLights) {
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, height);
    oceanGrad.addColorStop(0, "#060914");
    oceanGrad.addColorStop(0.5, "#0b1224");
    oceanGrad.addColorStop(1, "#050811");
    ctx.fillStyle = oceanGrad;
  } else {
    // Introspective shadow void in "The Within Reality"
    const shadowGrad = ctx.createLinearGradient(0, 0, 0, height);
    shadowGrad.addColorStop(0, "#04050a");
    shadowGrad.addColorStop(0.5, "#080a13");
    shadowGrad.addColorStop(1, "#030408");
    ctx.fillStyle = shadowGrad;
  }
  ctx.fillRect(0, 0, width, height);

  // 2. Graticule Lines (Lat/Long Grid)
  ctx.save();
  ctx.strokeStyle = isNightLights ? "rgba(96, 165, 250, 0.05)" : "rgba(168, 85, 247, 0.04)";
  ctx.lineWidth = 1;
  // Parallels (every 30 degrees)
  for (let lat = -60; lat <= 60; lat += 30) {
    const y = ((90 - lat) / 180) * height;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  // Meridians (every 45 degrees)
  for (let lon = -180; lon <= 180; lon += 45) {
    const x = ((lon + 180) / 360) * width;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  ctx.restore();

  // 3. Draw Continents
  ctx.save();
  if (isNightLights) {
    ctx.fillStyle = "#121929"; // Dark obsidian land
    ctx.strokeStyle = "rgba(71, 85, 105, 0.4)";
    ctx.lineWidth = 1.5;
  } else {
    ctx.fillStyle = "#0a0e18"; // Deep shadow slate
    ctx.strokeStyle = "rgba(51, 65, 85, 0.35)";
    ctx.lineWidth = 1.2;
  }

  for (const polygon of CONTINENT_POLYGONS) {
    if (polygon.length < 3) continue;
    ctx.beginPath();
    const first = latLonToCanvas(polygon[0][0], polygon[0][1], width, height);
    ctx.moveTo(first.x, first.y);
    for (let i = 1; i < polygon.length; i++) {
      const pt = latLonToCanvas(polygon[i][0], polygon[i][1], width, height);
      ctx.lineTo(pt.x, pt.y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
  ctx.restore();

  // 4. Mode-Specific Features
  if (isNightLights) {
    // --- MODE 1: Night City Lights (Façade & Surface Glitz) ---
    // Render glittering urban light clusters across major global corridors
    for (const [lat, lon, radius, count] of URBAN_LIGHT_CENTERS) {
      const center = latLonToCanvas(lat, lon, width, height);
      
      // Radiant golden urban halo
      const radialGlow = ctx.createRadialGradient(
        center.x, center.y, 0,
        center.x, center.y, radius * 1.8
      );
      radialGlow.addColorStop(0, "rgba(251, 191, 36, 0.4)");
      radialGlow.addColorStop(0.4, "rgba(245, 158, 11, 0.15)");
      radialGlow.addColorStop(1, "rgba(245, 158, 11, 0)");
      ctx.fillStyle = radialGlow;
      ctx.beginPath();
      ctx.arc(center.x, center.y, radius * 1.8, 0, Math.PI * 2);
      ctx.fill();

      // Individual city light dots
      const seed = Math.abs(lat * 100 + lon);
      for (let i = 0; i < count; i++) {
        const angle = ((seed + i * 137.5) * Math.PI) / 180;
        const dist = Math.sqrt((i + 0.5) / count) * radius;
        const px = center.x + Math.cos(angle) * dist;
        const py = center.y + Math.sin(angle) * dist;

        const isCore = i < 4;
        ctx.fillStyle = isCore ? "#fffbeb" : i % 3 === 0 ? "#fef08a" : "#f59e0b";
        ctx.beginPath();
        ctx.arc(px, py, isCore ? 2.2 : 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  } else {
    // --- MODE 2: The Within Reality (Shadow Earth & Somatic Pulse Nodes) ---
    // Dims external lights, reveals quiet somatic resonance lines connecting humanity
    ctx.save();
    ctx.strokeStyle = "rgba(236, 72, 153, 0.14)";
    ctx.lineWidth = 1.2;
    ctx.setLineDash([4, 6]);

    // Connect global emotional centers with graceful curved somatic meridians
    for (let i = 0; i < GLOBAL_CITIES.length; i++) {
      const nextIdx = (i + 1) % GLOBAL_CITIES.length;
      const p1 = latLonToCanvas(GLOBAL_CITIES[i].lat, GLOBAL_CITIES[i].lon, width, height);
      const p2 = latLonToCanvas(GLOBAL_CITIES[nextIdx].lat, GLOBAL_CITIES[nextIdx].lon, width, height);

      // Only draw line if not wrapping across map boundary (> 180 deg)
      if (Math.abs(p1.x - p2.x) < width * 0.5) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        const midX = (p1.x + p2.x) / 2;
        const midY = Math.min(p1.y, p2.y) - 30;
        ctx.quadraticCurveTo(midX, midY, p2.x, p2.y);
        ctx.stroke();
      }
    }
    ctx.restore();

    // Soft somatic bioluminescent beacon halos on land
    for (const city of GLOBAL_CITIES) {
      const pt = latLonToCanvas(city.lat, city.lon, width, height);
      const aura = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, 24);
      aura.addColorStop(0, "rgba(236, 72, 153, 0.35)");
      aura.addColorStop(0.5, "rgba(168, 85, 247, 0.15)");
      aura.addColorStop(1, "rgba(168, 85, 247, 0)");
      ctx.fillStyle = aura;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 24, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}
