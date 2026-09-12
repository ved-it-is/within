export const BRAIN_REGIONS = [
  {
    id: "pfc",
    name: "Prefrontal Cortex (PFC)",
    subtitle: "The Emotional Brakes & Conscious Choice",
    color: "#6366f1", // Indigo
    tint: "#eef2ff",
    coords: [0, 1.4, 1.7], // Frontal lobe (anterior)
    role: "Executive Regulation & Impulse Control",
    mechanism: "Downregulates amygdala hyperactivity via inhibitory GABAergic pathways. It enables you to pause between an emotional impulse and your physical reaction.",
    highEqMove: "The 90-Second Buffer: Wait out the initial neurochemical surge before sending that email or answering back.",
    stressResponse: "Under high stress, cortisol floods the PFC, impairing working memory and logic. This is why people 'lose their temper' when overwhelmed.",
    quote: "“Between stimulus and response there is a space. In that space is our power to choose our response.”"
  },
  {
    id: "amygdala",
    name: "The Amygdala",
    subtitle: "The Threat Alarm & 90-Second Surge",
    color: "#ef4444", // Red
    tint: "#fef2f2",
    coords: [0.9, -0.2, 0.4], // Deep temporal lobe (bilateral, showing right)
    role: "Threat Detection & Fight-or-Flight Trigger",
    mechanism: "Processes sensory input in milliseconds, triggering the sympathetic nervous system to dump adrenaline and cortisol before the conscious brain even realizes what happened.",
    highEqMove: "Name It to Tame It: Silently labeling 'I notice fear' or 'I notice anger' activates the PFC and immediately lowers amygdala firing by up to 40%.",
    stressResponse: "Prone to 'Amygdala Hijacking' — misinterpreting social criticism, awkward silence, or an email tone as a life-threatening predator.",
    quote: "“The amygdala doesn't know the difference between a charging lion and a critical text message.”"
  },
  {
    id: "insula",
    name: "Insular Cortex (The Insula)",
    subtitle: "The Somatic Sensor & Gut Instinct Hub",
    color: "#10b981", // Emerald
    tint: "#ecfdf5",
    coords: [-1.1, 0.2, 0.2], // Deep folded cortex (lateral sulcus)
    role: "Interoception & Bodily Emotion Awareness",
    mechanism: "Maps visceral signals from your heart, lungs, and gastrointestinal tract to create conscious bodily feelings (heart pounding, stomach dropping, lump in throat).",
    highEqMove: "The Body Scan: Noticing physical sensations (tight jaw, tight chest) before they erupt into reactive behavior.",
    stressResponse: "People with low insular awareness feel 'suddenly angry' because they miss the 5 minutes of mounting heart rate and body tension that preceded it.",
    quote: "“Your body knows how you feel long before your thoughts catch up.”"
  },
  {
    id: "acc",
    name: "Anterior Cingulate Cortex (ACC)",
    subtitle: "The Empathy & Conflict Monitoring Hub",
    color: "#f59e0b", // Amber
    tint: "#fffbeb",
    coords: [0, 0.9, 0.6], // Medial frontal cortex
    role: "Empathy, Conflict Resolution & Social Pain",
    mechanism: "Bridges the emotional limbic system and cognitive frontal lobes. Lights up during social rejection, moral dilemmas, and when witnessing someone else's pain.",
    highEqMove: "Compassionate Curiosity: Asking 'What might they be struggling with right now?' activates the dorsal ACC, reducing defensive anger.",
    stressResponse: "Registers social rejection and public embarrassment using the exact same neural circuitry as physical bodily injury.",
    quote: "“Social pain isn't just a metaphor — your brain processes a broken heart like a broken bone.”"
  },
  {
    id: "hippocampus",
    name: "The Hippocampus",
    subtitle: "The Emotional Context & Memory Anchor",
    color: "#8b5cf6", // Purple
    tint: "#f5f3ff",
    coords: [-0.9, -0.6, -0.3], // Medial temporal lobe
    role: "Contextual Memory & Trigger Association",
    mechanism: "Indexes past emotional experiences and pairs them with current triggers. Tells the amygdala: 'We have seen this person/situation before; here is what happened last time.'",
    highEqMove: "The Narrative Check: Ask 'Is this reaction about what is happening right now, or an old memory being triggered?'",
    stressResponse: "Chronic unresolved stress causes hippocampal dendrites to atrophy, making it harder to distinguish between past trauma and present safety.",
    quote: "“When you react disproportionately to a small moment, you are usually responding to a memory, not the room.”"
  }
];
