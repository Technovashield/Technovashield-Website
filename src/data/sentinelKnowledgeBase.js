/**
 * Elara Public Knowledge Directory
 * TechnovaShield Limited
 *
 * Version: 1.0
 * Status: Public Website Knowledge Layer
 * Last reviewed: 2026-08-15
 *
 * GOVERNANCE PRINCIPLES
 * ---------------------
 * - Public information only.
 * - No patient information.
 * - No medical advice, diagnosis, treatment or patient-specific interpretation.
 * - No confidential partner information.
 * - No unpublished commercial information.
 * - No internal technical IP.
 * - No unapproved pilot, regulatory or clinical outcome claims.
 * - Elara must use approved responses rather than inventing answers.
 */

export const sentinelConfig = {
  version: "1.0",
  lastReviewed: "2026-08-15",
  assistantName: "Elara",
  organisation: "TechnovaShield Limited",

  welcomeMessage:
    "Kia ora and hello, I’m Elara. I’m TechnovaShield’s digital assistant. I can help you explore CareSentinelAI, healthcare synthetic data, responsible AI, our collaboration ecosystem and ways to work with TechnovaShield. How can I help you today?",

  defaultFollowUps: [
    "What is CareSentinelAI?",
    "Explore synthetic healthcare data",
    "How can we work with TechnovaShield?",
    "Tell me about your collaborations",
  ],
};

export const sentinelAudiences = {
  clinician: "Clinicians",
  healthcareOrganisation: "Healthcare Organisations",
  patientPublic: "Patients and Public",
  researcher: "Researchers",
  dataTeam: "Data Teams",
  investorFunder: "Investors and Funders",
  accelerator: "Accelerators and Innovation Programmes",
  technologyPartner: "Technology Partners",
  strategicPartner: "Strategic Partners",
  general: "General Visitors",
};

export const sentinelActions = {
  bookMeeting: {
    id: "bookMeeting",
    label: "Book a Meeting",
  },

  contact: {
    id: "contact",
    label: "Contact Us",
    route: "/contact",
  },

  products: {
    id: "products",
    label: "View Products",
    route: "/products",
  },

  team: {
    id: "team",
    label: "Meet the Team",
    route: "/team",
  },

  advisory: {
    id: "advisory",
    label: "View Advisory",
    route: "/advisory",
  },

  support: {
    id: "support",
    label: "Explore Our Ecosystem",
    route: "/support",
  },

  news: {
    id: "news",
    label: "News & Research Updates",
    route: "/news",
  },
};

const normaliseText = (value = "") =>
  value
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[^\w\s'-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const containsAny = (text, terms = []) =>
  terms.some((term) => text.includes(normaliseText(term)));

const countMatches = (text, terms = []) =>
  terms.reduce(
    (count, term) =>
      text.includes(normaliseText(term)) ? count + 1 : count,
    0
  );

/**
 * SAFETY INTERCEPTORS
 *
 * These are checked before ordinary knowledge intents.
 * This prevents a broad product keyword from overriding a safety boundary.
 */
export const sentinelSafetyRules = [
  {
    id: "medical-emergency",
    priority: 1000,
    phrases: [
      "medical emergency",
      "health emergency",
      "emergency help",
      "can't breathe",
      "cannot breathe",
      "breathing problem",
      "breathing problems",
      "difficulty breathing",
      "trouble breathing",
      "shortness of breath",
      "hard to breathe",
      "struggling to breathe",
      "chest pain",
      "severe bleeding",
      "unconscious",
      "suicidal",
      "overdose",
    ],
    answer:
      "Elara cannot assess or manage a medical emergency. If you or someone else may be in immediate danger in New Zealand, call 111 or seek urgent medical assistance. Elara does not provide diagnosis, treatment or patient-specific clinical advice.",
    followUps: [
      "What can Elara help with?",
      "What is CareSentinelAI?",
      "How does CareSentinelAI support clinicians?",
      "Contact TechnovaShield",
    ],
  },

  {
    id: "patient-specific-medical-advice",
    priority: 990,
    phrases: [
      "do i have",
      "am i sick",
      "diagnose me",
      "diagnosis",
      "what treatment",
      "how should i treat",
      "what medication",
      "which medication",
      "should i take",
      "my blood result",
      "my test result",
      "my symptoms",
      "my heart rate",
      "my blood pressure",
      "my temperature",
      "my patient",
      "patient result",
      "interpret my",
      "interpret this result",
      "medical advice",
      "clinical advice",
    ],
    answer:
      "Elara does not provide medical advice, diagnosis, treatment recommendations, medication advice or interpretation of individual health information. Please do not enter patient information, health records or other sensitive clinical information. For personal medical concerns, contact an appropriate healthcare professional.",
    followUps: [
      "What can Elara help with?",
      "What is CareSentinelAI?",
      "Does CareSentinelAI make clinical decisions?",
      "How does TechnovaShield approach responsible AI?",
    ],
  },

  {
    id: "confidential-information",
    priority: 980,
    phrases: [
      "confidential",
      "secret",
      "source code",
      "password",
      "credential",
      "api key",
      "private key",
      "proprietary algorithm",
      "internal algorithm",
      "internal document",
      "technical ip",
      "trade secret",
      "unpublished pricing",
      "private pricing",
      "valuation",
      "revenue forecast",
      "financial forecast",
      "investor forecast",
      "partner confidential",
      "nda",
    ],
    answer:
      "That information is not available through Elara. Elara provides approved public information only and does not disclose confidential commercial information, private partner information, credentials, internal technical IP or unpublished materials. For an appropriate business enquiry, please contact TechnovaShield directly.",
    followUps: [
      "How can we contact TechnovaShield?",
      "What does TechnovaShield do?",
      "Tell me about your public collaborations",
      "Book a meeting",
    ],
  },

  {
    id: "sensitive-data-entry",
    priority: 970,
    phrases: [
      "patient name",
      "patient record",
      "health record",
      "nhi number",
      "medical record",
      "upload patient",
      "send patient",
      "personal health information",
    ],
    answer:
      "Please do not enter patient information, health records, identifying information or confidential material into Elara. This public website assistant is intended only for approved public information about TechnovaShield and its capabilities.",
    followUps: [
      "What can Elara help with?",
      "How does TechnovaShield approach privacy?",
      "Explore synthetic healthcare data",
      "Contact TechnovaShield",
    ],
  },
];

/**
 * PUBLIC KNOWLEDGE INTENTS
 *
 * Each intent contains:
 * - approved matching language
 * - approved answer
 * - audience metadata
 * - conversational follow-ups
 * - optional conversion/navigation actions
 */
export const sentinelKnowledgeIntents = [
  // ============================================================
  // SENTINELAI / GENERAL HELP
  // ============================================================

  {
    id: "sentinel-capabilities",
    audience: ["general"],
    category: "assistant",
    priority: 90,
    phrases: [
      "what can sentinel",
      "what can you help",
      "what can you do",
      "help me explore",
      "something else",
      "start again",
    ],
    keywords: ["sentinelai", "help"],
    answer:
      "I can help you explore TechnovaShield, CareSentinelAI, healthcare synthetic data, responsible AI, clinical and research collaboration, our public ecosystem, investor and funder enquiries, and ways to work with us. I provide approved public information only.",
    followUps: [
      "What is CareSentinelAI?",
      "Explore synthetic healthcare data",
      "Tell me about your collaborations",
      "How can we work with TechnovaShield?",
    ],
  },

  // ============================================================
  // CARESENTINELAI / CLINICIANS & HEALTHCARE ORGANISATIONS
  // ============================================================

  {
    id: "caresentinel-purpose",
    audience: ["clinician", "healthcareOrganisation", "general"],
    category: "CareSentinelAI",
    priority: 160,
    phrases: [
      "what is caresentinelai",
      "tell me about caresentinelai",
      "what does caresentinelai do",
      "clinical intelligence platform",
      "what is your clinical platform",
    ],
    keywords: ["caresentinelai", "clinical intelligence"],
    answer:
      "CareSentinelAI is TechnovaShield’s developing clinical intelligence platform. It is designed to help healthcare professionals identify patients who may require attention, understand meaningful changes, support prioritised clinical review and improve care-coordination workflows while keeping clinicians at the centre of decision-making.",
    followUps: [
      "What problem does CareSentinelAI solve?",
      "How does CareSentinelAI support clinicians?",
      "Does CareSentinelAI make clinical decisions?",
      "Can we discuss a clinical pilot?",
    ],
  },

  {
    id: "caresentinel-problem",
    audience: ["clinician", "healthcareOrganisation", "investorFunder"],
    category: "CareSentinelAI",
    priority: 150,
    phrases: [
      "what problem does caresentinelai solve",
      "what healthcare problem",
      "why is caresentinelai needed",
      "problem you are solving",
      "clinical problem",
    ],
    keywords: [
      "workload",
      "clinical prioritisation",
      "patient deterioration",
      "care coordination",
    ],
    answer:
      "CareSentinelAI is being developed around challenges such as growing clinical workload, fragmented patient information, difficulty identifying which patients may need timely attention, and the need for clearer prioritisation and follow-up. The aim is to improve clinical visibility without removing professional judgement or human oversight.",
    followUps: [
      "How does CareSentinelAI support clinicians?",
      "What makes CareSentinelAI different?",
      "How would it fit into clinical workflow?",
      "Tell me about clinical validation",
    ],
  },

  {
    id: "caresentinel-clinician-support",
    audience: ["clinician", "healthcareOrganisation"],
    category: "CareSentinelAI",
    priority: 155,
    phrases: [
      "how does caresentinelai support clinicians",
      "how does it help clinicians",
      "how does it help doctors",
      "how does it help gps",
      "support clinical decisions",
      "support clinicians",
    ],
    keywords: [
      "clinician",
      "doctor",
      "gp",
      "clinical review",
      "priority dashboard",
    ],
    answer:
      "CareSentinelAI is designed to support clinicians by helping surface patients who may require review, showing relevant changes and supporting information, and enabling more structured prioritisation and follow-up. The intended role is decision support: the clinician remains responsible for interpretation and care decisions.",
    followUps: [
      "How would it fit into clinical workflow?",
      "Does CareSentinelAI replace clinicians?",
      "How is explainable AI considered?",
      "Can we discuss a clinical pilot?",
    ],
  },

  {
    id: "caresentinel-clinical-workflow",
    audience: ["clinician", "healthcareOrganisation"],
    category: "CareSentinelAI",
    priority: 150,
    phrases: [
      "clinical workflow",
      "fit into workflow",
      "how would it fit",
      "workflow support",
      "gp workflow",
      "review workflow",
    ],
    keywords: ["workflow", "review", "follow-up"],
    answer:
      "CareSentinelAI is being designed around practical clinical workflow. Its direction includes helping clinicians identify patients requiring attention, understand relevant changes, review supporting information and coordinate appropriate follow-up through an action-oriented clinical experience.",
    followUps: [
      "What would clinicians see?",
      "Does CareSentinelAI make clinical decisions?",
      "Tell me about clinical validation",
      "Can it integrate with clinical systems?",
    ],
  },

  {
    id: "caresentinel-clinical-ui",
    audience: ["clinician", "healthcareOrganisation"],
    category: "CareSentinelAI",
    priority: 145,
    phrases: [
      "what would clinicians see",
      "clinical dashboard",
      "priority dashboard",
      "what does the dashboard show",
      "clinical interface",
    ],
    keywords: ["dashboard", "interface"],
    answer:
      "The CareSentinelAI clinical experience is being designed around one-screen awareness and prioritised review. The intended experience helps a clinician see which patients may need attention, what has changed, why a patient has been highlighted and what information should be reviewed next.",
    followUps: [
      "How does CareSentinelAI support clinicians?",
      "How is explainable AI considered?",
      "How would it fit into clinical workflow?",
      "Can we discuss a clinical pilot?",
    ],
  },

  {
    id: "caresentinel-decision-support",
    audience: ["clinician", "healthcareOrganisation", "patientPublic"],
    category: "CareSentinelAI",
    priority: 180,
    phrases: [
      "does caresentinelai make clinical decisions",
      "does ai make decisions",
      "autonomous clinical decisions",
      "who makes the final decision",
      "clinical decision support",
    ],
    keywords: ["decision", "autonomous"],
    answer:
      "No. CareSentinelAI is being designed as clinical decision support rather than autonomous clinical decision-making. Healthcare professionals retain responsibility for clinical interpretation, judgement and care decisions.",
    followUps: [
      "Does CareSentinelAI replace clinicians?",
      "How does CareSentinelAI support clinicians?",
      "How is responsible AI considered?",
      "What is CareSentinelAI?",
    ],
  },

  {
    id: "caresentinel-replace-clinicians",
    audience: ["clinician", "healthcareOrganisation", "patientPublic"],
    category: "CareSentinelAI",
    priority: 175,
    phrases: [
      "does caresentinelai replace clinicians",
      "replace doctors",
      "replace clinicians",
      "replace gps",
      "replace nurses",
      "ai replace doctor",
    ],
    keywords: ["replace"],
    answer:
      "No. CareSentinelAI is intended to augment clinical work, not replace healthcare professionals. Its purpose is to improve visibility, prioritisation and review support while maintaining human oversight and professional clinical judgement.",
    followUps: [
      "How does CareSentinelAI support clinicians?",
      "Does CareSentinelAI make clinical decisions?",
      "How is responsible AI considered?",
      "Tell me about clinical validation",
    ],
  },

  {
    id: "caresentinel-users",
    audience: ["clinician", "healthcareOrganisation", "general"],
    category: "CareSentinelAI",
    priority: 135,
    phrases: [
      "who is caresentinelai for",
      "who is it designed for",
      "who uses caresentinelai",
      "target users",
      "designed for",
    ],
    keywords: ["primary care", "healthcare professionals"],
    answer:
      "CareSentinelAI is currently being shaped primarily around healthcare professionals and real-world clinical workflows, with an initial emphasis on primary care and a platform direction that may support broader healthcare settings as development and validation progress.",
    followUps: [
      "How does it help clinicians?",
      "Tell me about clinical validation",
      "What conditions does CareSentinelAI focus on?",
      "Can we discuss a clinical pilot?",
    ],
  },

  {
    id: "caresentinel-clinical-focus",
    audience: ["clinician", "healthcareOrganisation", "investorFunder"],
    category: "CareSentinelAI",
    priority: 140,
    phrases: [
      "what conditions",
      "which conditions",
      "sepsis",
      "deterioration",
      "clinical focus",
      "disease areas",
    ],
    keywords: ["sepsis", "deterioration"],
    answer:
      "CareSentinelAI’s development direction includes early deterioration and sepsis-related clinical intelligence, with an architecture intended to support broader clinical risk and care-coordination use cases over time. Future capability remains subject to appropriate development, validation and governance.",
    followUps: [
      "How does CareSentinelAI support clinicians?",
      "Tell me about clinical validation",
      "How is responsible AI considered?",
      "What is the pathway to market?",
    ],
  },

  {
    id: "caresentinel-validation",
    audience: ["clinician", "healthcareOrganisation", "investorFunder"],
    category: "validation",
    priority: 165,
    phrases: [
      "clinical validation",
      "has caresentinelai been validated",
      "clinicians involved",
      "working with practices",
      "healthcare validation",
      "real world validation",
    ],
    keywords: ["validation", "clinician feedback"],
    answer:
      "CareSentinelAI is progressing through a validation-led development approach. Dominion Road Surgery is a Clinical Validation Collaboration within the public CareSentinelAI ecosystem, contributing primary-care workflow insight and clinician perspectives as the platform continues to evolve.",
    followUps: [
      "Tell me about Dominion Road Surgery",
      "Why does clinical validation matter?",
      "Can our clinic discuss a pilot?",
      "What stage is CareSentinelAI at?",
    ],
  },

  {
    id: "clinical-validation-importance",
    audience: ["clinician", "healthcareOrganisation", "investorFunder"],
    category: "validation",
    priority: 125,
    phrases: [
      "why does clinical validation matter",
      "why validate",
      "importance of clinical validation",
    ],
    keywords: ["validation"],
    answer:
      "Clinical validation helps ensure that healthcare technology is designed around real workflows, understandable information, appropriate clinical context and genuine user needs. It also helps identify usability, safety, governance and implementation considerations before broader adoption.",
    followUps: [
      "Tell me about clinical validation",
      "How does CareSentinelAI support clinicians?",
      "How is responsible AI considered?",
      "Can our clinic discuss a pilot?",
    ],
  },

  {
    id: "clinical-pilot",
    audience: ["clinician", "healthcareOrganisation"],
    category: "conversion",
    priority: 200,
    phrases: [
      "clinical pilot",
      "run a pilot",
      "trial caresentinelai",
      "our clinic",
      "our practice",
      "pilot opportunity",
      "healthcare pilot",
    ],
    keywords: ["pilot", "clinic", "practice"],
    answer:
      "TechnovaShield welcomes conversations with healthcare organisations interested in clinical validation and potential CareSentinelAI pilot opportunities. We would first seek to understand your clinical environment, workflow, objectives, governance requirements and appropriate scope.",
    followUps: [
      "Book a meeting",
      "How does CareSentinelAI support clinicians?",
      "Tell me about clinical validation",
      "How can we contact TechnovaShield?",
    ],
    actions: ["bookMeeting", "contact"],
  },

  {
    id: "clinical-integration",
    audience: ["clinician", "healthcareOrganisation", "technologyPartner"],
    category: "technology",
    priority: 145,
    phrases: [
      "integrate with clinical systems",
      "clinical integration",
      "pms integration",
      "practice management system",
      "ehr integration",
      "emr integration",
      "connect to our system",
      "interoperability",
    ],
    keywords: ["integration", "interoperability"],
    answer:
      "CareSentinelAI is being designed with healthcare-system interoperability and workflow integration in mind. Any specific integration depends on the organisation, existing systems, data access, security, privacy and governance requirements and would need to be assessed directly.",
    followUps: [
      "How would it fit into clinical workflow?",
      "Can we discuss a clinical pilot?",
      "How does TechnovaShield approach data governance?",
      "Book a meeting",
    ],
  },

  // ============================================================
  // PATIENTS & PUBLIC
  // ============================================================

  {
    id: "public-simple-caresentinel",
    audience: ["patientPublic"],
    category: "public",
    priority: 150,
    phrases: [
      "caresentinelai in simple terms",
      "explain caresentinelai simply",
      "simple explanation",
      "plain language",
    ],
    keywords: ["simple", "public"],
    answer:
      "In simple terms, CareSentinelAI is healthcare technology being developed to help clinicians notice important changes in patient information and identify people who may need review or follow-up. It is intended to support healthcare professionals rather than make treatment decisions for them.",
    followUps: [
      "Does AI decide my treatment?",
      "Can CareSentinelAI diagnose me?",
      "How does TechnovaShield approach privacy?",
      "What is synthetic healthcare data?",
    ],
  },

  {
    id: "public-treatment-decision",
    audience: ["patientPublic"],
    category: "public",
    priority: 170,
    phrases: [
      "does ai decide my treatment",
      "who decides treatment",
      "does it decide treatment",
      "ai treatment decision",
    ],
    keywords: ["treatment", "decision"],
    answer:
      "No. CareSentinelAI is intended to provide decision-support information to healthcare professionals. Clinical assessment, interpretation and treatment decisions remain with appropriately qualified healthcare professionals.",
    followUps: [
      "Can CareSentinelAI diagnose me?",
      "Who makes the final clinical decision?",
      "How is responsible AI considered?",
      "How does TechnovaShield approach privacy?",
    ],
  },

  {
    id: "public-diagnosis",
    audience: ["patientPublic"],
    category: "public",
    priority: 175,
    phrases: [
      "can caresentinelai diagnose",
      "does caresentinelai diagnose",
      "can the platform diagnose",
    ],
    keywords: ["diagnose"],
    answer:
      "CareSentinelAI is not being positioned as a replacement for professional diagnosis. It is being developed as clinical decision support, with healthcare professionals retaining responsibility for clinical assessment and decisions.",
    followUps: [
      "Does AI decide my treatment?",
      "Who makes the final clinical decision?",
      "What is CareSentinelAI in simple terms?",
      "How is responsible AI considered?",
    ],
  },

  {
    id: "public-privacy",
    audience: ["patientPublic", "healthcareOrganisation"],
    category: "privacy",
    priority: 155,
    phrases: [
      "patient privacy",
      "what happens to patient information",
      "how do you protect patient data",
      "health information privacy",
      "data privacy",
    ],
    keywords: ["privacy", "patient information"],
    answer:
      "TechnovaShield’s healthcare technology approach is designed around privacy, security, responsible data handling and governance. Any use of real-world healthcare information would require appropriate legal, privacy, security and governance arrangements for the specific environment and purpose.",
    followUps: [
      "What is synthetic healthcare data?",
      "Do you use real patient data?",
      "How does TechnovaShield approach data governance?",
      "How is responsible AI considered?",
    ],
  },

  {
    id: "public-ai-safety",
    audience: ["patientPublic", "clinician", "healthcareOrganisation"],
    category: "responsible-ai",
    priority: 150,
    phrases: [
      "is caresentinelai safe",
      "ai safety",
      "healthcare ai safety",
      "is the ai safe",
    ],
    keywords: ["safe", "safety"],
    answer:
      "CareSentinelAI is being developed with human oversight, explainability, privacy, governance and responsible AI principles incorporated into the engineering process. Healthcare AI also requires appropriate validation and governance before use in real clinical environments, so Elara does not make blanket claims of clinical safety or regulatory approval.",
    followUps: [
      "How is responsible AI considered?",
      "Does CareSentinelAI make clinical decisions?",
      "Tell me about clinical validation",
      "How does TechnovaShield approach privacy?",
    ],
  },

  // ============================================================
  // SYNTHETIC DATA / RESEARCHERS & DATA TEAMS
  // ============================================================

  {
    id: "synthetic-services",
    audience: ["researcher", "dataTeam", "technologyPartner"],
    category: "synthetic-data",
    priority: 165,
    phrases: [
      "synthetic data services",
      "synthetic healthcare data",
      "data generation services",
      "healthcare synthetic data",
      "synthetic dataset",
      "synthetic datasets",
      "explore synthetic healthcare data",
    ],
    keywords: ["synthetic", "dataset", "data generation"],
    answer:
      "TechnovaShield provides specialist healthcare synthetic-data engineering and generation capability. The focus is on privacy-conscious, healthcare-specific datasets and data-generation approaches that can support AI development, research, testing, validation and wider healthcare innovation programmes.",
    followUps: [
      "What is healthcare synthetic data?",
      "What can synthetic data be used for?",
      "How do you validate synthetic data?",
      "Can you build a custom healthcare dataset?",
    ],
  },

  {
    id: "synthetic-definition",
    audience: ["researcher", "dataTeam", "patientPublic", "general"],
    category: "synthetic-data",
    priority: 155,
    phrases: [
      "what is healthcare synthetic data",
      "what is synthetic data",
      "explain synthetic data",
      "synthetic data meaning",
    ],
    keywords: ["what is synthetic"],
    answer:
      "Healthcare synthetic data is artificially generated data designed to represent relevant structural, statistical or clinical characteristics needed for an agreed purpose without simply copying identifiable real patient records. Its suitability still depends on the use case, engineering method, validation and governance.",
    followUps: [
      "What can synthetic data be used for?",
      "How does synthetic data support privacy?",
      "How do you validate synthetic data?",
      "Can you build a custom healthcare dataset?",
    ],
  },

  {
    id: "synthetic-use-cases",
    audience: ["researcher", "dataTeam", "technologyPartner"],
    category: "synthetic-data",
    priority: 150,
    phrases: [
      "what can synthetic data be used for",
      "uses of synthetic data",
      "synthetic data use cases",
      "why use synthetic data",
      "benefits of synthetic data",
    ],
    keywords: ["use cases", "testing", "research"],
    answer:
      "Synthetic healthcare data can support activities such as AI and machine-learning development, software and workflow testing, prototyping, research, model evaluation, scenario testing and interoperability work. Appropriate validation and governance are still needed for the intended use.",
    followUps: [
      "Can synthetic data support AI development?",
      "How do you validate synthetic data?",
      "How does synthetic data support privacy?",
      "Discuss synthetic-data requirements",
    ],
  },

  {
    id: "synthetic-custom-dataset",
    audience: ["researcher", "dataTeam", "technologyPartner"],
    category: "conversion",
    priority: 195,
    phrases: [
      "custom synthetic dataset",
      "build a custom healthcare dataset",
      "create a healthcare dataset",
      "generate a dataset for us",
      "custom healthcare data",
      "synthetic data requirements",
      "create synthetic data",
      "generate synthetic data",
      "build synthetic data",
      "make synthetic data",
      "synthetic data for research",
      "dataset for research",
      "can you create synthetic data",
      "can you generate synthetic data",
      "can technovashield create synthetic data",
      "can technovashield generate synthetic data",
    ],
    keywords: ["custom", "dataset", "requirements"],
    answer:
      "TechnovaShield can discuss custom healthcare synthetic-data engineering where the required clinical context, data structure, intended use, validation approach and governance expectations can be clearly defined. The appropriate design depends on the specific programme and requirements.",
    followUps: [
      "How do you validate synthetic data?",
      "Can you generate healthcare-specific scenarios?",
      "Discuss synthetic-data requirements",
      "Book a meeting",
    ],
    actions: ["bookMeeting", "contact"],
  },

  {
    id: "synthetic-scenarios",
    audience: ["researcher", "dataTeam"],
    category: "synthetic-data",
    priority: 145,
    phrases: [
      "healthcare-specific scenarios",
      "clinical scenarios",
      "generate scenarios",
      "synthetic scenarios",
    ],
    keywords: ["scenario"],
    answer:
      "Yes. Healthcare synthetic-data programmes can be engineered around agreed clinical or operational scenarios where the scenario definitions, constraints, intended purpose and validation criteria are appropriately specified. Confidential partner scenarios and methodologies are not disclosed through Elara.",
    followUps: [
      "How do you validate synthetic data?",
      "Can you build a custom healthcare dataset?",
      "Is synthetic data reproducible?",
      "Discuss synthetic-data requirements",
    ],
  },

  {
    id: "synthetic-validation",
    audience: ["researcher", "dataTeam", "investorFunder"],
    category: "synthetic-data",
    priority: 160,
    phrases: [
      "how do you validate synthetic data",
      "synthetic data validation",
      "dataset validation",
      "data quality assurance",
      "clinical plausibility",
    ],
    keywords: ["validation", "quality"],
    answer:
      "TechnovaShield’s synthetic-data engineering approach can include structural validation, consistency checks, clinical plausibility assessment, reproducibility checks, quality assurance and documented testing appropriate to the programme. Detailed proprietary methods and confidential project evidence are not disclosed through the public assistant.",
    followUps: [
      "Is synthetic data reproducible?",
      "How does synthetic data support privacy?",
      "Can synthetic data support AI development?",
      "Discuss synthetic-data requirements",
    ],
  },

  {
    id: "synthetic-reproducibility",
    audience: ["researcher", "dataTeam"],
    category: "synthetic-data",
    priority: 145,
    phrases: [
      "is synthetic data reproducible",
      "reproducible synthetic data",
      "reproducibility",
      "repeatable dataset generation",
    ],
    keywords: ["reproducible", "reproducibility"],
    answer:
      "Reproducibility can be engineered into synthetic-data generation where the programme requires it. The exact implementation depends on the generation method, configuration, validation requirements and governance controls.",
    followUps: [
      "How do you validate synthetic data?",
      "Can you build a custom healthcare dataset?",
      "Can synthetic data support AI development?",
      "Discuss synthetic-data requirements",
    ],
  },

  {
    id: "synthetic-privacy",
    audience: ["researcher", "dataTeam", "patientPublic"],
    category: "privacy",
    priority: 160,
    phrases: [
      "synthetic data privacy",
      "privacy preserving",
      "privacy-preserving",
      "how does synthetic data support privacy",
      "privacy benefit",
    ],
    keywords: ["privacy", "synthetic"],
    answer:
      "Synthetic data can reduce reliance on directly identifiable patient information by creating artificial data for defined engineering or research purposes. It should not be treated as automatically risk-free: appropriate design, privacy assessment, validation and governance remain important.",
    followUps: [
      "Do you use real patient data?",
      "How do you validate synthetic data?",
      "What can synthetic data be used for?",
      "How does TechnovaShield approach data governance?",
    ],
  },

  {
    id: "real-patient-data",
    audience: ["researcher", "dataTeam", "patientPublic"],
    category: "privacy",
    priority: 175,
    phrases: [
      "do you use real patient data",
      "do you hold patient data",
      "real patient records",
      "identifiable patient data",
    ],
    keywords: ["real patient", "patient data"],
    answer:
      "TechnovaShield’s public synthetic-data capability does not imply that the company holds or uses identifiable patient information. Any engagement involving real-world healthcare information would require appropriate legal, privacy, security, access and governance arrangements for that specific purpose.",
    followUps: [
      "How does synthetic data support privacy?",
      "How does TechnovaShield approach data governance?",
      "What is healthcare synthetic data?",
      "Contact TechnovaShield",
    ],
  },

  {
    id: "synthetic-ai-development",
    audience: ["researcher", "dataTeam"],
    category: "synthetic-data",
    priority: 150,
    phrases: [
      "synthetic data support ai",
      "train ai with synthetic data",
      "machine learning synthetic data",
      "model development",
      "ai development",
    ],
    keywords: ["machine learning", "model"],
    answer:
      "Synthetic data can support AI and machine-learning development, experimentation and testing where it is suitable for the intended purpose. It does not remove the need for appropriate validation, and healthcare applications may still require real-world evaluation before clinical use.",
    followUps: [
      "How do you validate synthetic data?",
      "What can synthetic data be used for?",
      "Can you build a custom healthcare dataset?",
      "Discuss research collaboration",
    ],
  },

  {
    id: "enterprise-dataset",
    audience: ["researcher", "dataTeam", "investorFunder"],
    category: "synthetic-data",
    priority: 155,
    phrases: [
      "enterprise dataset",
      "caresentinelai enterprise dataset",
      "healthcare dataset programme",
      "dataset programme",
    ],
    keywords: ["enterprise dataset"],
    answer:
      "The CareSentinelAI Enterprise Dataset represents TechnovaShield’s healthcare synthetic-data programme capability for supporting responsible AI engineering, research, testing and validation. Detailed schemas, internal generation methods and confidential programme materials are not exposed through the public assistant.",
    followUps: [
      "What is healthcare synthetic data?",
      "How do you validate synthetic data?",
      "Can you build a custom healthcare dataset?",
      "Discuss synthetic-data requirements",
    ],
  },

  {
    id: "condition-specific-synthetic-research",
    audience: ["researcher", "dataTeam", "healthcareOrganisation"],
    category: "synthetic-data",
    priority: 198,
    phrases: [
      "synthetic data for a disease",
      "synthetic data for disease",
      "synthetic data for a condition",
      "synthetic data for condition",
      "synthetic data for research",
      "dataset for disease research",
      "dataset for condition research",
      "research dataset for a disease",
      "research dataset for a condition",
      "create data for research",
      "generate data for research",
      "healthcare data for research",
      "disease research",
      "condition-specific dataset",
      "condition specific dataset",
      "clinical research dataset",
    ],
    keywords: [
      "disease",
      "condition",
      "research",
      "synthetic data",
      "dataset",
    ],
    answer:
      "Yes. TechnovaShield can discuss specialist healthcare synthetic-data engineering for a defined disease, condition or clinical research use case. The appropriate dataset would need to be designed around the research purpose, required variables, clinical context, scenario definitions, validation criteria and governance requirements. Elara does not assume that a ready-made dataset already exists for a particular condition.",
    followUps: [
      "Can you build a custom healthcare dataset?",
      "How do you validate synthetic data?",
      "Can you generate healthcare-specific scenarios?",
      "Discuss synthetic-data requirements",
    ],
    actions: ["bookMeeting", "contact"],
  },
  {
    id: "research-collaboration",
    audience: ["researcher", "dataTeam"],
    category: "conversion",
    priority: 190,
    phrases: [
      "research collaboration",
      "research partnership",
      "university collaboration",
      "academic collaboration",
      "work with researchers",
      "research project",
    ],
    keywords: ["research", "university"],
    answer:
      "TechnovaShield welcomes conversations with researchers, universities, healthcare innovators and data teams where there is a well-defined opportunity around responsible healthcare AI, clinical intelligence, synthetic-data engineering, validation or related research.",
    followUps: [
      "Book a meeting",
      "Explore synthetic healthcare data",
      "What collaboration options are available?",
      "How can we contact TechnovaShield?",
    ],
    actions: ["bookMeeting", "contact"],
  },

  {
    id: "synthetic-differentiation",
    audience: ["researcher", "dataTeam", "investorFunder"],
    category: "synthetic-data",
    priority: 150,
    phrases: [
      "why technovashield for synthetic data",
      "different from synthetic data provider",
      "generic synthetic data",
      "what makes your synthetic data different",
    ],
    keywords: ["different", "synthetic"],
    answer:
      "TechnovaShield’s positioning is not as a generic synthetic-data vendor. The focus is specialist healthcare synthetic-data engineering that combines healthcare context, responsible AI, validation thinking, governance awareness and data-generation capability that can operate independently or as part of a larger programme.",
    followUps: [
      "Can TechnovaShield support a broader programme?",
      "How do you validate synthetic data?",
      "Can you build a custom healthcare dataset?",
      "Discuss synthetic-data requirements",
    ],
  },

  // ============================================================
  // RESPONSIBLE AI / GOVERNANCE
  // ============================================================

  {
    id: "responsible-ai",
    audience: [
      "clinician",
      "healthcareOrganisation",
      "patientPublic",
      "researcher",
      "investorFunder",
      "general",
    ],
    category: "responsible-ai",
    priority: 155,
    phrases: [
      "responsible ai",
      "how is responsible ai considered",
      "responsible healthcare ai",
      "ai governance",
      "ethical ai",
      "human oversight",
    ],
    keywords: ["responsible ai", "governance", "oversight"],
    answer:
      "TechnovaShield treats responsible AI as part of the development lifecycle rather than an afterthought. The approach includes attention to human oversight, explainability, privacy, accountability, validation, security and governance appropriate to the healthcare context.",
    followUps: [
      "How does this apply to CareSentinelAI?",
      "How does TechnovaShield approach data governance?",
      "How is explainable AI considered?",
      "Explore synthetic healthcare data",
    ],
  },

  {
    id: "explainable-ai",
    audience: ["clinician", "healthcareOrganisation", "patientPublic"],
    category: "responsible-ai",
    priority: 150,
    phrases: [
      "explainable ai",
      "explainability",
      "why was a patient flagged",
      "explain the ai",
      "understand the recommendation",
    ],
    keywords: ["explainable", "explainability"],
    answer:
      "Explainability is an important CareSentinelAI design principle. The intended clinical experience should help healthcare professionals understand why information has been highlighted and review the relevant supporting context rather than receiving an unexplained automated output.",
    followUps: [
      "Does CareSentinelAI make clinical decisions?",
      "What would clinicians see?",
      "How is responsible AI considered?",
      "Tell me about clinical validation",
    ],
  },

  {
    id: "data-governance",
    audience: ["healthcareOrganisation", "researcher", "dataTeam", "general"],
    category: "governance",
    priority: 155,
    phrases: [
      "data governance",
      "responsible data",
      "data practices",
      "governance approach",
      "healthcare data governance",
    ],
    keywords: ["governance", "responsible data"],
    answer:
      "TechnovaShield’s approach is to treat data governance as part of system and programme design. This includes considering purpose, access, privacy, security, accountability, data quality, validation and appropriate controls for the particular healthcare or research context.",
    followUps: [
      "How does synthetic data support privacy?",
      "How is responsible AI considered?",
      "Do you use real patient data?",
      "Discuss research collaboration",
    ],
  },

  // ============================================================
  // INVESTORS / FUNDERS / ACCELERATORS
  // ============================================================

  {
    id: "investor-differentiation",
    audience: ["investorFunder", "accelerator"],
    category: "commercial",
    priority: 165,
    phrases: [
      "what makes caresentinelai different",
      "what is the differentiation",
      "competitive advantage",
      "why is caresentinelai different",
      "what is unique",
    ],
    keywords: ["different", "competitive advantage"],
    answer:
      "CareSentinelAI combines clinician-centred workflow design, explainable decision support, healthcare-specific engineering, synthetic-data capability, responsible AI principles and validation-led development. The broader TechnovaShield model also allows these capabilities to support clinical, research and technology programmes rather than relying on a single product pathway.",
    followUps: [
      "Who are the target customers?",
      "What is the business model?",
      "What validation do you have?",
      "Discuss an investor or funder opportunity",
    ],
  },

  {
    id: "commercial-customers",
    audience: ["investorFunder", "accelerator"],
    category: "commercial",
    priority: 150,
    phrases: [
      "who are the customers",
      "target customers",
      "customer segments",
      "who will buy",
      "target market",
    ],
    keywords: ["customers", "market"],
    answer:
      "CareSentinelAI’s target customer direction includes healthcare organisations and clinical practices seeking better clinical visibility and decision support. TechnovaShield’s specialist synthetic-data capability can also serve healthcare, research, AI, technology and innovation programmes with defined data-engineering requirements.",
    followUps: [
      "What is the business model?",
      "What is the pathway to market?",
      "What makes CareSentinelAI different?",
      "Discuss an investor or funder opportunity",
    ],
  },

  {
    id: "commercial-business-model",
    audience: ["investorFunder", "accelerator"],
    category: "commercial",
    priority: 160,
    phrases: [
      "business model",
      "how will caresentinelai make money",
      "how do you make money",
      "revenue model",
      "commercial model",
    ],
    keywords: ["business model", "revenue model"],
    answer:
      "TechnovaShield is developing multiple complementary commercial pathways, including future CareSentinelAI platform licensing or SaaS models, paid pilot and validation engagements, specialist healthcare synthetic-data engineering, dataset programmes and appropriate technology or strategic collaboration. Specific pricing and unpublished financial projections are discussed privately.",
    followUps: [
      "Who are the target customers?",
      "What is the pathway to market?",
      "What makes CareSentinelAI different?",
      "Discuss an investor or funder opportunity",
    ],
  },

  {
    id: "commercial-traction",
    audience: ["investorFunder", "accelerator"],
    category: "commercial",
    priority: 160,
    phrases: [
      "what traction",
      "traction",
      "progress so far",
      "what have you achieved",
      "commercial traction",
    ],
    keywords: ["traction", "progress"],
    answer:
      "CareSentinelAI has progressed through platform development, clinical workflow design, validation-led engagement and ecosystem development, alongside TechnovaShield’s healthcare synthetic-data engineering programme. Public relationships include a Clinical Validation Collaboration with Dominion Road Surgery and a Strategic Technology Partner relationship with Niti Logic. Elara does not present unapproved adoption, revenue or clinical-outcome claims.",
    followUps: [
      "Tell me about clinical validation",
      "Tell me about Niti Logic",
      "What stage is CareSentinelAI at?",
      "Discuss an investor or funder opportunity",
    ],
  },

  {
    id: "commercial-status",
    audience: ["investorFunder", "accelerator", "general"],
    category: "commercial",
    priority: 150,
    phrases: [
      "is caresentinelai commercially available",
      "what stage is caresentinelai at",
      "development stage",
      "commercialisation stage",
      "is it launched",
    ],
    keywords: ["commercially available", "stage"],
    answer:
      "CareSentinelAI is progressing through development, validation and commercialisation preparation. It should not currently be interpreted as a fully mature or broadly deployed clinical product.",
    followUps: [
      "What is the pathway to market?",
      "Tell me about clinical validation",
      "What makes CareSentinelAI different?",
      "Discuss an investor or funder opportunity",
    ],
  },

  {
    id: "commercial-route-to-market",
    audience: ["investorFunder", "accelerator"],
    category: "commercial",
    priority: 155,
    phrases: [
      "pathway to market",
      "route to market",
      "go to market",
      "commercialisation pathway",
      "pilot to scale",
    ],
    keywords: ["market", "commercialisation"],
    answer:
      "The CareSentinelAI pathway is validation-led: develop around real clinical needs, refine workflow and evidence through targeted validation and pilot activity, address governance and implementation requirements, then progress toward broader healthcare adoption and scale.",
    followUps: [
      "Who are the target customers?",
      "What validation do you have?",
      "What is the business model?",
      "Discuss an investor or funder opportunity",
    ],
  },

  {
    id: "commercial-defensibility",
    audience: ["investorFunder", "accelerator"],
    category: "commercial",
    priority: 150,
    phrases: [
      "defensible",
      "defensibility",
      "competitive moat",
      "what protects the business",
      "barriers to entry",
    ],
    keywords: ["defensible", "moat"],
    answer:
      "TechnovaShield’s developing defensibility is based on the combination of healthcare-specific engineering, clinical workflow knowledge, validation experience, responsible AI and governance practices, synthetic-data engineering capability and accumulated ecosystem relationships. Elara does not disclose internal technical IP or proprietary implementation details.",
    followUps: [
      "What makes CareSentinelAI different?",
      "What is the business model?",
      "What validation do you have?",
      "Discuss an investor or funder opportunity",
    ],
  },

  {
    id: "investment-conversation",
    audience: ["investorFunder", "accelerator"],
    category: "conversion",
    priority: 205,
    phrases: [
      "are you raising",
      "investment opportunity",
      "invest in technovashield",
      "invest in caresentinelai",
      "funder opportunity",
      "investor meeting",
      "speak to investor",
      "pitch deck",
    ],
    keywords: ["investor", "funder", "investment"],
    answer:
      "TechnovaShield welcomes conversations with aligned investors, funders, accelerators and innovation partners. Current financing arrangements, unpublished forecasts and detailed investor materials are handled through an appropriate direct discussion rather than through the public website assistant.",
    followUps: [
      "Book a meeting",
      "What makes CareSentinelAI different?",
      "What is the business model?",
      "How can we contact TechnovaShield?",
    ],
    actions: ["bookMeeting", "contact"],
  },

  // ============================================================
  // TECHNOLOGY / STRATEGIC COLLABORATION
  // ============================================================

  {
    id: "collaboration-options",
    audience: [
      "technologyPartner",
      "strategicPartner",
      "researcher",
      "healthcareOrganisation",
      "general",
    ],
    category: "collaboration",
    priority: 155,
    phrases: [
      "work with technovashield",
      "collaboration opportunities",
      "collaboration options",
      "partner with technovashield",
      "how can we collaborate",
      "how can we work together",
    ],
    keywords: ["collaborate", "partner", "work with"],
    answer:
      "TechnovaShield welcomes appropriate clinical, research, technology, data, responsible-AI and strategic collaboration. Opportunities can include clinical validation, healthcare synthetic-data programmes, research, technology integration, responsible AI initiatives and broader innovation programmes.",
    followUps: [
      "Discuss a clinical pilot",
      "Discuss synthetic-data requirements",
      "Discuss research collaboration",
      "Discuss technology or strategic collaboration",
    ],
  },

  {
    id: "broader-programme-component",
    audience: ["technologyPartner", "strategicPartner", "researcher"],
    category: "collaboration",
    priority: 155,
    phrases: [
      "support a broader programme",
      "part of a broader programme",
      "component of another programme",
      "data programme",
      "innovation programme",
      "technology programme",
    ],
    keywords: ["programme", "component"],
    answer:
      "Yes. TechnovaShield can discuss specialist healthcare AI engineering and synthetic-data capability that operates as one component within a broader healthcare, AI, research, technology or innovation programme. The scope depends on the programme’s requirements, responsibilities and governance.",
    followUps: [
      "Explore synthetic healthcare data",
      "Discuss research collaboration",
      "Discuss technology or strategic collaboration",
      "Book a meeting",
    ],
  },

  {
    id: "nitilogic",
    audience: ["technologyPartner", "strategicPartner", "general"],
    category: "collaboration",
    priority: 190,
    phrases: [
      "niti logic",
      "nitilogic",
      "tell me about niti logic",
      "strategic technology partner",
    ],
    keywords: ["niti logic"],
    answer:
      "Niti Logic is a strategic technology partner within the TechnovaShield and CareSentinelAI ecosystem, bringing complementary expertise in AI governance architecture, technology strategy and commercial innovation. Together, Niti Logic and TechnovaShield/CareSentinelAI are exploring how complementary capabilities across governance, synthetic data, AI and technology can support responsible, privacy-preserving solutions for real-world applications.",
    followUps: [
      "What is the collaboration focused on?",
      "Tell me about Dominion Road Surgery",
      "How can we discuss collaboration?",
      "Explore synthetic healthcare data",
    ],
  },

  {
    id: "nitilogic-focus",
    audience: ["technologyPartner", "strategicPartner", "general"],
    category: "collaboration",
    priority: 195,
    phrases: [
      "what is the collaboration focused on",
      "niti logic collaboration",
      "niti logic partnership",
      "what do you do with niti logic",
    ],
    keywords: ["niti logic", "collaboration"],
    answer:
      "Niti Logic and TechnovaShield/CareSentinelAI collaborate as strategic technology partners, bringing complementary capabilities across AI governance, synthetic data, technology and commercial innovation to explore responsible AI solutions for real-world applications. More detailed project, methodology or outcome information may be confidential or subject to partner approval.",
    followUps: [
      "Tell me about other public collaborators",
      "How does TechnovaShield approach responsible AI?",
      "Explore synthetic healthcare data",
      "How can we discuss collaboration?",
    ],
  },

  {
    id: "dominion-road-surgery",
    audience: ["clinician", "healthcareOrganisation", "general"],
    category: "collaboration",
    priority: 185,
    phrases: [
      "dominion road surgery",
      "tell me about dominion",
      "clinical validation collaboration",
    ],
    keywords: ["dominion"],
    answer:
      "Dominion Road Surgery is a Clinical Validation Collaboration within the CareSentinelAI ecosystem, helping bring primary-care workflow and clinician perspectives into the platform’s ongoing validation-led development.",
    followUps: [
      "Why does clinical validation matter?",
      "How does CareSentinelAI support clinicians?",
      "Can our clinic discuss a pilot?",
      "Tell me about other public collaborators",
    ],
  },

  {
    id: "public-collaborators",
    audience: ["general", "technologyPartner", "strategicPartner"],
    category: "collaboration",
    priority: 145,
    phrases: [
      "public collaborators",
      "other public collaborators",
      "tell me about your collaborations",
      "your ecosystem",
      "collaboration ecosystem",
      "partners and collaborators",
    ],
    keywords: ["collaborations", "ecosystem"],
    answer:
      "TechnovaShield is building a collaborative ecosystem around healthcare innovation. Current public website relationships include Dominion Road Surgery as a Clinical Validation Collaboration and Niti Logic as a Strategic Technology Partner, alongside supporting professional and innovation networks. Elara only describes relationships approved for public use.",
    followUps: [
      "Tell me about Niti Logic",
      "Tell me about Dominion Road Surgery",
      "What collaboration options are available?",
      "How can we work with TechnovaShield?",
    ],
  },

  {
    id: "technology-strategic-conversion",
    audience: ["technologyPartner", "strategicPartner"],
    category: "conversion",
    priority: 200,
    phrases: [
      "technology collaboration",
      "strategic collaboration",
      "technology partner",
      "strategic partner",
      "discuss technology",
      "discuss strategic",
    ],
    keywords: ["technology", "strategic", "collaboration"],
    answer:
      "TechnovaShield welcomes discussions with organisations that may bring complementary healthcare, AI, technology, governance, research or commercial capability. We prefer to first understand the proposed opportunity and determine whether there is a genuine strategic fit.",
    followUps: [
      "Book a meeting",
      "What collaboration options are available?",
      "Can TechnovaShield support a broader programme?",
      "How can we contact TechnovaShield?",
    ],
    actions: ["bookMeeting", "contact"],
  },

  // ============================================================
  // TECHNOVASHIELD CORPORATE
  // ============================================================

  {
    id: "technovashield-overview",
    audience: ["general", "investorFunder", "technologyPartner"],
    category: "corporate",
    priority: 145,
    phrases: [
      "what is technovashield",
      "tell me about technovashield",
      "what does technovashield do",
      "about technovashield",
    ],
    keywords: ["technovashield"],
    answer:
      "TechnovaShield Limited is a New Zealand technology company focused on responsible healthcare AI engineering, clinical intelligence, healthcare synthetic-data capability, intelligent automation and secure digital solutions. CareSentinelAI is its flagship healthcare clinical-intelligence initiative.",
    followUps: [
      "What products do you offer?",
      "What is CareSentinelAI?",
      "Explore synthetic healthcare data",
      "How can we work with TechnovaShield?",
    ],
  },

  {
    id: "technovashield-products",
    audience: ["general"],
    category: "corporate",
    priority: 140,
    phrases: [
      "what products",
      "your products",
      "what solutions",
      "what do you offer",
      "view products",
    ],
    keywords: ["products", "solutions"],
    answer:
      "TechnovaShield’s current website solution areas include CareSentinelAI, the CareSentinelAI Enterprise Dataset, specialist healthcare synthetic-data generation services, intelligent automation and cybersecurity capability.",
    followUps: [
      "What is CareSentinelAI?",
      "Explore synthetic healthcare data",
      "Tell me about intelligent automation",
      "Tell me about cybersecurity",
    ],
    actions: ["products"],
  },

  {
    id: "technovashield-location",
    audience: ["general"],
    category: "corporate",
    priority: 130,
    phrases: [
      "where is technovashield",
      "where are you based",
      "location",
      "new zealand company",
      "auckland",
    ],
    keywords: ["based", "location"],
    answer:
      "TechnovaShield Limited is based in Auckland, Aotearoa New Zealand.",
    followUps: [
      "What does TechnovaShield do?",
      "Who is on the TechnovaShield team?",
      "How can we contact TechnovaShield?",
      "How can we work with TechnovaShield?",
    ],
  },

  {
    id: "technovashield-founder",
    audience: ["general"],
    category: "corporate",
    priority: 150,
    phrases: [
      "who founded technovashield",
      "founder",
      "roopa patel",
      "who is roopa",
    ],
    keywords: ["founder"],
    answer:
      "TechnovaShield was founded by Roopa Patel, who leads the development and product direction of CareSentinelAI and TechnovaShield’s healthcare technology initiatives.",
    followUps: [
      "Who is on the TechnovaShield team?",
      "What is CareSentinelAI?",
      "What does TechnovaShield do?",
      "How can we contact TechnovaShield?",
    ],
    actions: ["team"],
  },

  {
    id: "technovashield-team",
    audience: ["general"],
    category: "corporate",
    priority: 135,
    phrases: [
      "who is on the team",
      "technovashield team",
      "meet the team",
      "team members",
    ],
    keywords: ["team"],
    answer:
      "TechnovaShield brings together leadership, engineering, strategic and advisory capability around its healthcare technology work. The current public Team page provides the approved profiles and roles.",
    followUps: [
      "Who founded TechnovaShield?",
      "Tell me about your advisors",
      "What does TechnovaShield do?",
      "How can we contact TechnovaShield?",
    ],
    actions: ["team"],
  },

  {
    id: "technovashield-advisors",
    audience: ["general", "investorFunder"],
    category: "corporate",
    priority: 135,
    phrases: [
      "your advisors",
      "advisory board",
      "advisors",
      "strategic advisors",
    ],
    keywords: ["advisor", "advisory"],
    answer:
      "TechnovaShield’s public Advisory page outlines the advisors currently supporting areas such as AI and technology strategy, market validation and growth. Elara uses only approved public advisor information.",
    followUps: [
      "Who is on the TechnovaShield team?",
      "What does TechnovaShield do?",
      "What makes CareSentinelAI different?",
      "How can we contact TechnovaShield?",
    ],
    actions: ["advisory"],
  },

  {
    id: "intelligent-automation",
    audience: ["general", "technologyPartner"],
    category: "corporate",
    priority: 135,
    phrases: [
      "intelligent automation",
      "workflow automation",
      "automation services",
      "process automation",
    ],
    keywords: ["automation"],
    answer:
      "TechnovaShield’s intelligent-automation capability focuses on using automation and AI-supported workflows to reduce manual effort, improve consistency and support more efficient digital operations. Specific solutions are designed around the organisation’s process and governance requirements.",
    followUps: [
      "What products do you offer?",
      "How can we work with TechnovaShield?",
      "Discuss technology or strategic collaboration",
      "Book a meeting",
    ],
  },

  {
    id: "cybersecurity",
    audience: ["general", "technologyPartner"],
    category: "corporate",
    priority: 130,
    phrases: [
      "cybersecurity",
      "cyber security",
      "secure digital infrastructure",
      "ddos",
    ],
    keywords: ["cybersecurity", "security"],
    answer:
      "Cybersecurity is one of TechnovaShield’s broader capability areas, focused on secure digital infrastructure and responsible technology engineering. Specific cybersecurity products and future capabilities are presented only when they are ready and approved for public use.",
    followUps: [
      "What products do you offer?",
      "How does TechnovaShield approach responsible AI?",
      "Discuss technology or strategic collaboration",
      "How can we contact TechnovaShield?",
    ],
  },

  {
    id: "careers",
    audience: ["general"],
    category: "corporate",
    priority: 130,
    phrases: [
      "careers",
      "jobs",
      "job opportunities",
      "work for technovashield",
      "are you hiring",
      "employment",
    ],
    keywords: ["careers", "jobs", "hiring"],
    answer:
      "TechnovaShield does not use Elara to imply that a role is currently open. Current opportunities, when available, should be confirmed through TechnovaShield’s official channels. General enquiries can be submitted through the Contact page.",
    followUps: [
      "How can we contact TechnovaShield?",
      "What does TechnovaShield do?",
      "Who is on the TechnovaShield team?",
      "Explore something else",
    ],
    actions: ["contact"],
  },

  {
    id: "corporate-news",
    audience: ["general"],
    category: "corporate",
    priority: 125,
    phrases: [
      "news",
      "research updates",
      "latest updates",
      "articles",
      "news page",
    ],
    keywords: ["news", "updates"],
    answer:
      "TechnovaShield publishes company, innovation and research-related updates through its News & Research Updates section.",
    followUps: [
      "What is CareSentinelAI?",
      "Explore synthetic healthcare data",
      "Tell me about your collaborations",
      "How can we contact TechnovaShield?",
    ],
    actions: ["news"],
  },

  // ============================================================
  // CONTACT / CONVERSION
  // ============================================================

  {
    id: "book-meeting",
    audience: [
      "general",
      "clinician",
      "healthcareOrganisation",
      "researcher",
      "investorFunder",
      "technologyPartner",
      "strategicPartner",
    ],
    category: "conversion",
    priority: 220,
    phrases: [
      "book a meeting",
      "schedule a meeting",
      "make an appointment",
      "meet technovashield",
      "talk to the team",
      "speak to the team",
    ],
    keywords: ["meeting", "book"],
    answer:
      "Ready to discuss your requirements? Book a meeting with the TechnovaShield team to explore how we may be able to work together. You can also use the website Contact page for a general enquiry.",
    followUps: [
      "Discuss a clinical pilot",
      "Discuss synthetic-data requirements",
      "Discuss research collaboration",
      "Discuss an investor or funder opportunity",
    ],
    actions: ["bookMeeting", "contact"],
  },

  {
    id: "general-contact",
    audience: ["general"],
    category: "conversion",
    priority: 210,
    phrases: [
      "contact technovashield",
      "contact us",
      "how can we contact",
      "how do i contact",
      "get in touch",
      "reach technovashield",
      "general enquiry",
    ],
    keywords: ["contact", "get in touch"],
    answer:
      "You can contact TechnovaShield through the website Contact page for clinical, research, synthetic-data, technology, strategic, investor, funder or general enquiries.",
    followUps: [
      "Book a meeting",
      "What collaboration options are available?",
      "What is CareSentinelAI?",
      "Explore synthetic healthcare data",
    ],
    actions: ["contact"],
  },
];

/**
 * Controlled fallbacks.
 */
export const sentinelFallbacks = {
  unrecognised: {
    answer:
      "I don’t have an approved public answer for that question. Elara only confirms TechnovaShield capabilities and information that are approved for public use, so I won’t guess or imply that TechnovaShield offers a service that is not currently listed. I can help with CareSentinelAI, healthcare synthetic data, clinical and research collaboration, responsible AI, our public ecosystem and ways to work with us.",
    followUps: [
      "What is CareSentinelAI?",
      "Explore synthetic healthcare data",
      "Tell me about your collaborations",
      "How can we work with TechnovaShield?",
    ],
  },
};

/**
 * Find a safety response.
 */
const findSafetyResponse = (text) => {
  const orderedRules = [...sentinelSafetyRules].sort(
    (a, b) => b.priority - a.priority
  );

  return orderedRules.find((rule) => containsAny(text, rule.phrases));
};

/**
 * Score an approved knowledge intent.
 *
 * Strong phrase matches receive more weight than individual keywords.
 * More specific/higher-priority entries win ties.
 */
const scoreIntent = (text, intent) => {
  const phraseMatches = countMatches(text, intent.phrases || []);
  const keywordMatches = countMatches(text, intent.keywords || []);

  if (phraseMatches === 0 && keywordMatches === 0) {
    return 0;
  }

  return (
    phraseMatches * 100 +
    keywordMatches * 15 +
    (intent.priority || 0)
  );
};

/**
 * Main governed Elara response function.
 *
 * Processing order:
 * 1. Safety
 * 2. Approved knowledge intents
 * 3. Controlled fallback
 */
export const getSentinelResponse = (input = "") => {
  const text = normaliseText(input);

  if (!text) {
    return sentinelFallbacks.unrecognised;
  }

  const safetyResponse = findSafetyResponse(text);

  if (safetyResponse) {
    return {
      id: safetyResponse.id,
      category: "safety",
      answer: safetyResponse.answer,
      followUps: safetyResponse.followUps,
      actions: safetyResponse.actions || [],
    };
  }

  let bestIntent = null;
  let bestScore = 0;

  sentinelKnowledgeIntents.forEach((intent) => {
    const score = scoreIntent(text, intent);

    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  });

  if (!bestIntent) {
    return {
      id: "fallback-unrecognised",
      category: "fallback",
      ...sentinelFallbacks.unrecognised,
      actions: ["contact"],
    };
  }

  return {
    id: bestIntent.id,
    category: bestIntent.category,
    audience: bestIntent.audience,
    answer: bestIntent.answer,
    followUps: bestIntent.followUps || sentinelConfig.defaultFollowUps,
    actions: bestIntent.actions || [],
  };
};

export default sentinelKnowledgeIntents;
