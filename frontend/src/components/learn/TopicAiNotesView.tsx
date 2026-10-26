import { useState, useEffect } from 'react';
import { 
  Sparkles, Copy, Check, Clock, Bookmark, 
  Lightbulb, BookOpen, AlertCircle, 
  HelpCircle
} from 'lucide-react';
import { toast } from 'sonner';
import { saveLockerItem, removeLockerItem, isItemSaved } from '../../lib/lockerStorage';
import { FORMULAS_DATA } from '../../data/formulaData';

export interface TimestampItem {
  timeStr: string;
  seconds: number;
  title: string;
  summary: string;
}

export interface SmartNotesData {
  topicTitle: string;
  estimatedReadTime: string;
  summary: string;
  timestamps: TimestampItem[];
  keyDefinitions: { term: string; definition: string; icon?: string }[];
  formulasAndLaws: { title: string; equation: string; explanation: string }[];
  examSureShot: { question: string; marks: string; modelAnswer: string }[];
  quickTips: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// CURATED HIGH-YIELD TOPIC KNOWLEDGE BASE
// ─────────────────────────────────────────────────────────────────────────────
const BUILTIN_NOTES_DATABASE: Record<string, SmartNotesData> = {
  // ─── Class 11 Physics: Units & Measurements ──────────────────────────────
  'international system of units': {
    topicTitle: 'The International System of Units (SI Units & Prefixes)',
    estimatedReadTime: '4 min read',
    summary: 'Measurement consists of comparing an unknown physical quantity with an internationally accepted reference standard called a unit. The SI system is built upon 7 fundamental base units (Length, Mass, Time, Electric Current, Temperature, Amount of Substance, Luminous Intensity) and 2 supplementary units (Radian & Steradian). Prefixes (micro, nano, mega, giga) denote standard decimal powers of ten.',
    timestamps: [
      { timeStr: '01:15', seconds: 75, title: 'Fundamental vs Derived Quantities & Units', summary: 'Fundamental units (kg, m, s, A, K, mol, cd) are mutually independent. Derived units are expressed as algebraic combinations of base units (e.g. Force N = kg·m/s², Energy J = kg·m²/s²).' },
      { timeStr: '06:40', seconds: 400, title: 'The 7 Base Units & 2 Supplementary Standards', summary: 'Metre (m), Kilogram (kg), Second (s), Ampere (A), Kelvin (K), Mole (mol), Candela (cd). Supplementary units include Radian (plane angle) and Steradian (solid angle).' },
      { timeStr: '13:20', seconds: 800, title: 'SI Prefixes & Power-of-Ten Multipliers', summary: 'Femto (10⁻¹⁵), Pico (10⁻¹²), Nano (10⁻⁹), Micro (10⁻⁶), Milli (10⁻³), Centi (10⁻²), Kilo (10³), Mega (10⁶), Giga (10⁹), Tera (10¹²).' },
      { timeStr: '21:00', seconds: 1260, title: 'Principle of Homogeneity & Dimensional Validity', summary: 'Dimensions of each term on both sides of a physical equation must be identical. If dimensions differ, the physical equation is definitely invalid.' },
      { timeStr: '28:15', seconds: 1695, title: 'Error Propagation Rules (Sum, Product, Powers)', summary: 'In addition/subtraction, absolute errors add up. In multiplication/division and powers, fractional (percentage) errors add up proportionally to their exponents.' }
    ],
    keyDefinitions: [
      { term: 'Base / Fundamental Unit', definition: 'A unit of measurement adopted for a base quantity that cannot be defined in terms of other base quantities (e.g., metre, kilogram, second).' },
      { term: 'Principle of Homogeneity', definition: 'The fundamental law stating that the dimensions of each and every individual term on both sides of a physical equation must be identical.' },
      { term: 'Supplementary Units', definition: 'Plane angle (Radian, rad = arc/radius) and Solid angle (Steradian, sr = area/radius²). They have units but are strictly DIMENSIONLESS ([M⁰L⁰T⁰]).' },
      { term: 'Significant Figures', definition: 'The digits in a measured value that are known with certainty plus the first uncertain/estimated digit.' }
    ],
    formulasAndLaws: [
      { title: 'General Dimensional Formula Format', equation: '[Q] = [Mᵃ Lᵇ Tᶜ Iᵈ θᵉ]', explanation: 'Powers a, b, c represent the dimensions to which base quantities must be raised.' },
      { title: 'Maximum Absolute Error in Addition / Subtraction', equation: 'If Z = A ± B  =>  ΔZ = ΔA + ΔB', explanation: 'Absolute errors always add up in both addition and subtraction. Errors never cancel out!' },
      { title: 'Relative Error in Product and Division', equation: 'If Z = A · B or A / B  =>  ΔZ / Z = (ΔA / A) + (ΔB / B)', explanation: 'Relative (fractional) errors add up directly for multiplication and division.' },
      { title: 'Power Law Fractional Error Formula', equation: 'If Z = (Aᵖ · Bᵠ) / Cʳ  =>  ΔZ / Z = p(ΔA / A) + q(ΔB / B) + r(ΔC / C)', explanation: 'Fractional error in a quantity raised to power p is p times the fractional error in that quantity.' }
    ],
    examSureShot: [
      { 
        question: 'What is the Principle of Homogeneity? Check the dimensional correctness of: v² = u² + 2as.', 
        marks: '3 Marks', 
        modelAnswer: 'Principle: Dimensions on both sides of each term in an equation must be equal.\nLHS: [v²] = [LT⁻¹]² = [L² T⁻²].\nRHS: [u²] = [LT⁻¹]² = [L² T⁻²]; [2as] = [LT⁻²][L] = [L² T⁻²] (2 is a dimensionless constant).\nSince dimensions of all terms are [L² T⁻²], the equation is dimensionally correct.' 
      },
      { 
        question: 'A physical quantity X is given by X = (a² · b³) / (c · √d). Percentage errors in a, b, c, d are 1%, 3%, 2%, and 4%. Calculate the percentage error in X.', 
        marks: '3 Marks', 
        modelAnswer: '% Error in X = 2(% error in a) + 3(% error in b) + 1(% error in c) + ½(% error in d)\n= 2(1%) + 3(3%) + 1(2%) + ½(4%)\n= 2% + 9% + 2% + 2% = 15%.' 
      }
    ],
    quickTips: [
      'Plane angle (radian) and Solid angle (steradian) have units but are DIMENSIONLESS ([M⁰L⁰T⁰]). This is a favourite 1-mark board exam question!',
      'Dimensionless constants (like pure numbers, π, e, trigonometric ratios, logarithms) cannot be determined using dimensional analysis.',
      'Never subtract errors in numericals! Fractional/percentage errors ALWAYS add up.'
    ]
  },

  // ─── Class 11 Physics: Kinematics ────────────────────────────────────────
  'motion in a straight line': {
    topicTitle: 'Motion in a Straight Line: High-Yield Revision Sheet',
    estimatedReadTime: '5 min read',
    summary: 'Motion in 1D involves particle displacement along a single coordinate axis. Kinematics describes motion without considering its causes. Acceleration represents rate of change of velocity, and kinematic equations apply when acceleration is constant.',
    timestamps: [
      { timeStr: '01:30', seconds: 90, title: 'Distance vs Displacement & Speed vs Velocity', summary: 'Distance is path length (scalar ≥ 0). Displacement is shortest distance between initial and final points (vector, can be negative, zero, or positive).' },
      { timeStr: '08:00', seconds: 480, title: 'Calculus Definitions of Instantaneous Quantities', summary: 'Velocity v = dx/dt, Acceleration a = dv/dt = v (dv/dx).' },
      { timeStr: '15:20', seconds: 920, title: 'Derivations of 3 Kinematic Equations', summary: 'v = u + at, s = ut + ½at², v² = u² + 2as, s_nth = u + ½a(2n - 1).' },
      { timeStr: '24:00', seconds: 1440, title: 'Free Fall under Gravity & Vertical Projections', summary: 'Body dropped from height: u = 0, a = +g. Body projected upward: v = 0 at top, time of ascent = time of descent = u/g.' }
    ],
    keyDefinitions: [
      { term: 'Instantaneous Velocity', definition: 'The velocity of an object at a specific instant of time, defined mathematically as the first derivative of position with respect to time: v = dx/dt.' },
      { term: 'Uniform Acceleration', definition: 'When the velocity of an object changes by equal amounts in equal intervals of time, however small these intervals may be.' },
      { term: 'Distance in nth Second (s_nth)', definition: 'The displacement covered solely within the single duration between (n-1) and n seconds: s_nth = u + ½a(2n - 1).' }
    ],
    formulasAndLaws: [
      { title: 'Three Kinematic Equations', equation: '1) v = u + at\n2) s = ut + ½at²\n3) v² = u² + 2as', explanation: 'Valid ONLY when acceleration (a) is constant throughout the motion.' },
      { title: 'Distance Travelled in nth Second', equation: 's_nth = u + ½a(2n - 1)', explanation: 'Used for solving single-second numericals (e.g. distance in 5th second).' },
      { title: 'Free Fall from Height h', equation: 'Time to hit ground: t = √(2h / g)\nStriking Velocity: v = √(2gh)', explanation: 'Derived by setting initial velocity u = 0 and acceleration a = g.' }
    ],
    examSureShot: [
      {
        question: 'A ball is thrown vertically upward with speed u. Show that the time of ascent equals the time of descent.',
        marks: '3 Marks',
        modelAnswer: 'At max height, v = 0. Using v = u - gt => 0 = u - gt_ascent => t_ascent = u/g.\nMax height H = u² / 2g. For descent from H with initial u=0: H = ½g(t_descent)² => u²/2g = ½g(t_descent)² => t_descent = u/g.\nHence, t_ascent = t_descent = u/g.'
      }
    ],
    quickTips: [
      'Area under v-t graph represents DISPLACEMENT. Slope of v-t graph represents ACCELERATION.',
      'Slope of x-t graph represents VELOCITY.',
      'If acceleration is variable (function of time or position), kinematic equations FAIL. You MUST integrate: v = ∫ a dt or ∫ v dv = ∫ a dx.'
    ]
  },

  // ─── Class 9 Science: Matter in Our Surroundings ──────────────────────────
  'matter in our surroundings': {
    topicTitle: 'Matter in Our Surroundings: Complete Revision Sheet',
    estimatedReadTime: '4 min read',
    summary: 'Matter is anything that has mass and occupies volume. It exists in three primary states: Solid, Liquid, and Gas (plus Plasma & BEC). State changes are driven by temperature and pressure, governed by the kinetic energy of particles and intermolecular forces.',
    timestamps: [
      { timeStr: '01:15', seconds: 75, title: 'Physical Nature & Characteristics of Particles', summary: 'Particles of matter have spaces between them, attract each other, and are continuously moving (Kinetic Energy).' },
      { timeStr: '06:40', seconds: 400, title: 'Three States of Matter & Comparison', summary: 'Rigidity, compressibility, shape, volume, and diffusion rates across solids, liquids, and gases.' },
      { timeStr: '14:20', seconds: 860, title: 'Change of State: Effect of Temperature', summary: 'Melting point, boiling point, latent heat of fusion, and latent heat of vaporization.' },
      { timeStr: '22:10', seconds: 1330, title: 'Effect of Pressure & Sublimation', summary: 'Liquefaction of gases, sublimation of camphor/ammonium chloride, and dry ice (Solid CO2).' },
      { timeStr: '28:50', seconds: 1730, title: 'Evaporation vs Boiling & Cooling Effect', summary: 'Surface phenomenon, factors affecting evaporation (temp, surface area, humidity, wind speed).' }
    ],
    keyDefinitions: [
      { term: 'Latent Heat of Fusion', definition: 'The amount of heat energy required to change 1 kg of a solid into liquid at atmospheric pressure at its melting point without temperature rise.' },
      { term: 'Sublimation', definition: 'A change of state directly from solid to gas without passing through the liquid state (e.g., Camphor, Naphthalene, Ammonium Chloride).' },
      { term: 'Evaporation', definition: 'A surface phenomenon in which liquid changes into vapor at any temperature below its boiling point, absorbing heat and causing cooling.' },
      { term: 'Diffusion', definition: 'The spontaneous intermixing of particles of two different types of matter on their own, increasing with temperature.' }
    ],
    formulasAndLaws: [
      { title: 'Temperature Conversion Formula', equation: 'T(K) = T(°C) + 273.15', explanation: 'Absolute Kelvin temperature scale. 0°C corresponds to 273 K; 100°C is 373 K.' },
      { title: 'Density Relation', equation: 'Density (ρ) = Mass (m) / Volume (V)', explanation: 'Solids have the highest density, while gases have the lowest density among states of matter.' },
      { title: 'Evaporation Rate Law', equation: 'Rate ∝ (Surface Area × Temp × Wind Speed) / Humidity', explanation: 'Higher humidity lowers evaporation; higher surface area and wind speed accelerate cooling.' }
    ],
    examSureShot: [
      { 
        question: 'Why does steam at 100°C cause more severe burns than boiling water at 100°C?', 
        marks: '3 Marks', 
        modelAnswer: 'Steam at 100°C has extra latent heat of vaporization (22.6 × 10⁵ J/kg) absorbed during phase transition. When steam touches the skin, it releases this extra energy upon condensation before cooling down.' 
      },
      { 
        question: 'Why do we wear cotton clothes in summer and why does water in an earthen pot (matka) remain cool?', 
        marks: '3 Marks', 
        modelAnswer: 'Cotton is a good absorber of sweat. Sweat evaporates through pores by absorbing latent heat of vaporization from the body, leaving a cooling sensation. In a matka, water oozes out through minute pores and evaporates, taking heat from the remaining water.' 
      }
    ],
    quickTips: [
      'Remember: Boiling is a BULK phenomenon (entire liquid participates), while Evaporation is a SURFACE phenomenon.',
      'Dry Ice is Solid Carbon Dioxide (stored under high pressure). On 1 atm pressure, it turns directly to gas without liquid phase.',
      'During phase change (melting/boiling), temperature remains CONSTANT because heat supplied is consumed as Latent Heat.'
    ]
  },

  // ─── Class 9 Science: Is Matter Around Us Pure ────────────────────────────
  'is matter around us pure': {
    topicTitle: 'Is Matter Around Us Pure: High-Yield Notes',
    estimatedReadTime: '5 min read',
    summary: 'Pure substances consist of a single type of particle (elements & compounds). Mixtures consist of two or more substances in any proportion. Mixtures are classified as homogeneous (solutions) or heterogeneous (suspensions & colloids).',
    timestamps: [
      { timeStr: '02:00', seconds: 120, title: 'Pure Substances vs Mixtures', summary: 'Elements, Compounds, Homogeneous and Heterogeneous mixtures.' },
      { timeStr: '08:30', seconds: 510, title: 'True Solutions & Concentration of Solution', summary: 'Solute, solvent, saturation, solubility, and mass by mass percentage.' },
      { timeStr: '16:15', seconds: 975, title: 'Suspensions vs Colloidal Solutions', summary: 'Tyndall effect, particle sizes, Brownian motion, and stability.' },
      { timeStr: '25:00', seconds: 1500, title: 'Separation of Mixtures Techniques', summary: 'Centrifugation, chromatography, fractional distillation, and crystallization.' }
    ],
    keyDefinitions: [
      { term: 'Tyndall Effect', definition: 'The scattering of a beam of light by colloidal particles, making the path of light visible (e.g., sunlight passing through a dense forest canopy).' },
      { term: 'Colloid', definition: 'A heterogeneous mixture where particle size (1–1000 nm) is intermediate between true solution and suspension. Particles do not settle down and show Tyndall effect.' },
      { term: 'Compound vs Mixture', definition: 'Compounds have fixed composition by mass and chemically distinct properties from constituents; mixtures retain original properties and can be physically separated.' }
    ],
    formulasAndLaws: [
      { title: 'Mass Percentage of Solution', equation: 'Mass % = (Mass of Solute / Mass of Solution) × 100', explanation: 'Note: Mass of solution = Mass of solute + Mass of solvent.' },
      { title: 'Volume Percentage', equation: 'Volume % = (Volume of Solute / Total Volume) × 100', explanation: 'Used for liquid-in-liquid solutions such as ethanol in water.' }
    ],
    examSureShot: [
      {
        question: 'Differentiate between True Solution, Colloid, and Suspension on particle size, stability, and Tyndall effect.',
        marks: '5 Marks',
        modelAnswer: 'True solution: <1 nm, stable, no Tyndall effect. Colloid: 1-1000 nm, stable, shows Tyndall effect. Suspension: >1000 nm, unstable (particles settle), opaque.'
      }
    ],
    quickTips: [
      'Alloys (like Brass = 70% Cu + 30% Zn) are homogeneous mixtures because they show variable composition and constituent properties.',
      'Crystallization is superior to simple evaporation because solids do not char or decompose upon drying.'
    ]
  },

  // ─── Class 9 Science: Atoms and Molecules ─────────────────────────────────
  'atoms and molecules': {
    topicTitle: 'Atoms and Molecules: Laws & Chemical Formulae',
    estimatedReadTime: '5 min read',
    summary: 'Matter is made of indivisible atoms. Chemical combinations obey the Law of Conservation of Mass and the Law of Definite Proportions. Atoms combine using valency to form neutral chemical formulae and follow the Mole Concept.',
    timestamps: [
      { timeStr: '01:30', seconds: 90, title: 'Laws of Chemical Combination', summary: 'Antoine Lavoisier (Conservation of Mass) & Joseph Proust (Constant Proportions).' },
      { timeStr: '09:20', seconds: 560, title: 'Dalton Atomic Theory Postulates', summary: 'Indivisible atoms, identical atoms of same element, whole number ratios.' },
      { timeStr: '18:40', seconds: 1120, title: 'Writing Chemical Formulae (Criss-Cross)', summary: 'Valencies, polyatomic ions (SO4 2-, NH4+, NO3-), and charge balancing.' },
      { timeStr: '28:10', seconds: 1690, title: 'Molecular Mass & Mole Concept', summary: 'Avogadro Number (6.022 × 10²³), molar mass calculations, and mole formulas.' }
    ],
    keyDefinitions: [
      { term: 'Law of Conservation of Mass', definition: 'Mass can neither be created nor destroyed in a chemical reaction. Total mass of reactants = Total mass of products.' },
      { term: 'Law of Definite Proportions', definition: 'In a chemical substance, the elements are always present in definite proportions by mass (e.g., Water H:O is always 1:8 by mass).' },
      { term: 'Polyatomic Ion', definition: 'A group of atoms carrying a net positive or negative charge (e.g., Carbonate CO3²⁻, Ammonium NH4⁺, Hydroxide OH⁻).' }
    ],
    formulasAndLaws: [
      { title: 'Number of Moles (n)', equation: 'n = Given Mass (m) / Molar Mass (M) = Number of Particles (N) / N_A', explanation: 'N_A = Avogadro constant = 6.022 × 10²³ particles/mol.' },
      { title: 'Molar Mass Calculation', equation: 'M(H₂SO₄) = 2(1) + 32 + 4(16) = 98 u = 98 g/mol', explanation: 'Sum of atomic masses of all constituent atoms in atomic mass units (u).' }
    ],
    examSureShot: [
      {
        question: 'Calculate the number of moles in 52 g of Helium (He).',
        marks: '2 Marks',
        modelAnswer: 'Atomic mass of He = 4 u. Molar mass = 4 g/mol. Number of moles = Given mass / Molar mass = 52 / 4 = 13 moles.'
      },
      {
        question: 'Write the chemical formula for: (a) Aluminium sulphate, (b) Calcium hydroxide.',
        marks: '3 Marks',
        modelAnswer: '(a) Al³⁺ and SO₄²⁻ criss-cross valencies: Al₂(SO₄)₃. (b) Ca²⁺ and OH⁻ criss-cross valencies: Ca(OH)₂.'
      }
    ],
    quickTips: [
      'Never write CaOH2 without parentheses! It must be Ca(OH)₂ to indicate 2 hydroxide ions.',
      '1 mole of ANY gas at STP occupies 22.4 Litres volume.'
    ]
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// INTELLIGENT DYNAMIC TOPIC NOTES GENERATOR (Zero Blind Fallback)
// ─────────────────────────────────────────────────────────────────────────────
function generateDynamicNotes(
  topicTitle: string, 
  chapterTitle: string, 
  subjectName: string
): SmartNotesData {
  // Find related formulas from FORMULAS_DATA
  const cleanTopic = topicTitle.toLowerCase();
  const cleanCh = chapterTitle.toLowerCase();
  
  const matchedFormulas = FORMULAS_DATA.filter(f => {
    const fTitle = f.title.toLowerCase();
    const fDomain = f.domain.toLowerCase();
    return cleanTopic.includes(fDomain) || fDomain.includes(cleanTopic) ||
           cleanCh.includes(fDomain) || fDomain.includes(cleanCh) ||
           cleanTopic.includes(fTitle) || fTitle.includes(cleanTopic);
  }).slice(0, 3);

  const formulasList = matchedFormulas.length > 0 ? matchedFormulas.map(f => ({
    title: f.title,
    equation: f.formula,
    explanation: f.variables + ' • ' + f.examTip
  })) : [
    {
      title: `Governing Equations of ${topicTitle}`,
      equation: `Standard Mathematical Model for ${chapterTitle}`,
      explanation: 'Follow standard step-marking procedure: Given Data -> Formula -> Substitution -> Final Answer with Units.'
    },
    {
      title: 'Units & Dimensional Consistency',
      equation: 'LHS Units == RHS Units',
      explanation: 'Verify that all substituted quantities are in the identical SI unit system before arithmetic operations.'
    }
  ];

  return {
    topicTitle: `${topicTitle}: High-Yield Revision Sheet`,
    estimatedReadTime: '4 min read',
    summary: `${topicTitle} is a core high-yield topic in "${chapterTitle}" (${subjectName}). This fast revision sheet highlights the fundamental principles, key definitions, mathematical relationships, and sure-shot examiner traps required for top marks in your board and entrance exams.`,
    timestamps: [
      {
        timeStr: 'Part 1',
        seconds: 60,
        title: `Core Fundamentals & Definitions of ${topicTitle}`,
        summary: `Grasp the primary theoretical foundation and essential scientific principles underlying ${topicTitle} within ${chapterTitle}.`
      },
      {
        timeStr: 'Part 2',
        seconds: 300,
        title: `Mathematical Formulations, Laws & Graphs`,
        summary: `Derivations, algebraic relationships, and standard graphical representations required for numerical accuracy.`
      },
      {
        timeStr: 'Part 3',
        seconds: 600,
        title: `High-Yield Applications & Numerical Problem Solving`,
        summary: `Common question frameworks, boundary conditions, and direct substitution formulas frequently tested by examiners.`
      },
      {
        timeStr: 'Part 4',
        seconds: 900,
        title: `Sure-Shot Board Questions & Examiner Pitfalls`,
        summary: `Common student misconceptions, unit conversion errors, and step-marking guidelines to maximize your exam score.`
      }
    ],
    keyDefinitions: [
      {
        term: `${topicTitle} (Fundamental Concept)`,
        definition: `The primary theoretical framework defining ${topicTitle} in the study of ${chapterTitle} under ${subjectName}.`
      },
      {
        term: 'Standard SI Units & Conventions',
        definition: `All quantitative calculations in ${topicTitle} must adhere to international SI units and dimensional homogeneity.`
      },
      {
        term: 'Boundary Conditions & Assumptions',
        definition: `The specific physical conditions and theoretical assumptions under which the principles of ${topicTitle} hold valid.`
      }
    ],
    formulasAndLaws: formulasList,
    examSureShot: [
      {
        question: `Explain the fundamental concept of "${topicTitle}" in ${chapterTitle} and state its key physical significance.`,
        marks: '3 Marks',
        modelAnswer: `Define the principle clearly with standard terminology, state the relevant mathematical expression, and define each symbol with its proper SI units to secure full step marks.`
      },
      {
        question: `What are the two most critical pitfalls students must avoid while solving questions on "${topicTitle}"?`,
        marks: '2 Marks',
        modelAnswer: `1) Inconsistent units: Always convert all variables into SI units before calculation.\n2) Missing sign conventions or boundary conditions specified in the problem statement.`
      }
    ],
    quickTips: [
      `Always write down the full formula and define all symbols before substituting numerical values to secure step marks.`,
      `Verify dimensional homogeneity: The units on the left-hand side must exactly match the right-hand side.`,
      `Highlight final answers with neat underlines and correct units (e.g. m/s, Joules, Newtons, mol/L).`
    ]
  };
}

export interface TopicAiNotesViewProps {
  topicTitle: string;
  chapterTitle?: string;
  subjectName?: string;
  classLevel?: string;
  videoUrl?: string;
  hasVideo?: boolean;
  customMarkdown?: string;
  onSeekVideo?: (seconds: number) => void;
  onClaimXp?: () => void;
}

export function getCuratedTopicNotes(
  topicTitle: string,
  chapterTitle = 'General Studies',
  subjectName = 'Science'
): SmartNotesData {
  const cleanTitle = (topicTitle || '').toLowerCase().trim();
  const cleanCh = (chapterTitle || '').toLowerCase().trim();

  const matchedKey = Object.keys(BUILTIN_NOTES_DATABASE).find(k => 
    cleanTitle.includes(k) || k.includes(cleanTitle) || cleanCh.includes(k)
  );

  return matchedKey 
    ? BUILTIN_NOTES_DATABASE[matchedKey]
    : generateDynamicNotes(topicTitle, chapterTitle, subjectName);
}

export function TopicAiNotesView({
  topicTitle,
  chapterTitle = 'General Studies',
  subjectName = 'Science',
}: TopicAiNotesViewProps) {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const notes = getCuratedTopicNotes(topicTitle, chapterTitle, subjectName);

  useEffect(() => {
    setBookmarked(isItemSaved(notes.topicTitle));
  }, [notes.topicTitle]);

  const handleCopyNotes = () => {
    const textToCopy = `
# ${notes.topicTitle}
Subject: ${subjectName} • Chapter: ${chapterTitle}

## Executive Summary
${notes.summary}

## Key Formulas & Laws
${notes.formulasAndLaws.map(f => `- ${f.title}: ${f.equation} (${f.explanation})`).join('\n')}

## High-Yield Definitions
${notes.keyDefinitions.map(d => `- **${d.term}**: ${d.definition}`).join('\n')}

## Sure-Shot Exam Questions
${notes.examSureShot.map(q => `Q [${q.marks}]: ${q.question}\nA: ${q.modelAnswer}`).join('\n\n')}

## Quick Exam Tips
${notes.quickTips.map(t => `- ${t}`).join('\n')}

— Generated by PrepLens AI Smart Study Engine
    `.trim();

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    toast.success('Complete Revision Notes copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBookmark = () => {
    if (!bookmarked) {
      saveLockerItem({
        type: 'NOTE',
        title: notes.topicTitle,
        subtitle: `${chapterTitle} • ${notes.estimatedReadTime}`,
        content: notes.summary,
        tags: [chapterTitle, 'AI Notes', subjectName],
        personalNote: 'Saved for quick exam revision!'
      });
      setBookmarked(true);
      toast.success('Saved to Personal Revision Locker!');
    } else {
      const items = JSON.parse(localStorage.getItem('preplens_personal_locker') || '[]');
      const item = items.find((i: any) => i.title === notes.topicTitle);
      if (item) removeLockerItem(item.id);
      setBookmarked(false);
      toast.info('Removed from revision locker.');
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-300">
      
      {/* ─── Hero Header & Quick Actions Bar ───────────────────────────────── */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-blue-500/20 text-blue-300 border border-blue-400/30">
                <Sparkles className="h-3.5 w-3.5 text-blue-400 animate-pulse" />
                AI Smart Revision Notes
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="h-3 w-3" /> {notes.estimatedReadTime}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              {notes.topicTitle}
            </h1>
            <p className="text-xs md:text-sm text-slate-300 mt-1 max-w-2xl">
              High-yield definitions, governing formulas, examiner pitfalls, and sure-shot answers for {chapterTitle}.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyNotes}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all shadow-xs backdrop-blur-md active:scale-95"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              <span>{copied ? 'Copied!' : 'Copy Notes'}</span>
            </button>

            <button
              onClick={handleBookmark}
              className={`p-2.5 rounded-xl border transition-all active:scale-95 ${
                bookmarked
                  ? 'bg-amber-500 text-slate-900 border-amber-400 shadow-md shadow-amber-500/20'
                  : 'bg-white/10 text-white border-white/15 hover:bg-white/20'
              }`}
              title="Save to My Locker"
            >
              <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* ─── 1. Executive Summary Card ─────────────────────────────────────── */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="h-5 w-5 text-blue-600" />
          <h3 className="text-base font-bold text-slate-900">2-Minute Executive Summary</h3>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed font-normal bg-slate-50/70 p-4 rounded-xl border border-slate-100">
          {notes.summary}
        </p>
      </div>

      {/* ─── 2. Formulas & Scientific Laws Highlight ───────────────────────── */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-6 w-6 rounded-lg bg-emerald-100 text-emerald-700 font-mono font-black text-xs flex items-center justify-center">
            fx
          </span>
          <h3 className="text-base font-bold text-slate-900">Formulas, Laws & Equations</h3>
        </div>

        <div className="grid gap-3.5 md:grid-cols-2">
          {notes.formulasAndLaws.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/60 to-slate-50 border border-emerald-100/80">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                {item.title}
              </span>
              <div className="mt-1.5 p-2.5 rounded-lg bg-white border border-emerald-200/60 font-mono text-sm font-extrabold text-slate-900 text-center shadow-2xs whitespace-pre-line leading-relaxed">
                {item.equation}
              </div>
              <p className="text-xs text-slate-600 mt-2 font-medium">
                {item.explanation}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 3. Key Definitions (Flashcard Style) ───────────────────────────── */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="h-5 w-5 text-amber-500" />
          <h3 className="text-base font-bold text-slate-900">Must-Remember Definitions</h3>
        </div>

        <div className="space-y-3">
          {notes.keyDefinitions.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-slate-300 transition-all">
              <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-bold bg-slate-900 text-white mb-2">
                {item.term}
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 4. Sure-Shot Exam Questions & Model Answers ───────────────────── */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-rose-500" />
            <h3 className="text-base font-bold text-slate-900">Sure-Shot Exam Questions</h3>
          </div>
          <span className="text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full">
            High Probability
          </span>
        </div>

        <div className="space-y-4">
          {notes.examSureShot.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50/70 border border-slate-200">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <h4 className="text-xs font-bold text-slate-900">
                  Q{idx + 1}. {item.question}
                </h4>
                <span className="text-[10px] font-black uppercase text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-md shrink-0">
                  {item.marks}
                </span>
              </div>
              <div className="mt-2.5 p-3 rounded-lg bg-white border border-slate-200/80 text-xs text-slate-700 leading-relaxed font-normal whitespace-pre-line">
                <span className="font-bold text-slate-900 block mb-1">Model Answer:</span>
                {item.modelAnswer}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 5. Examiner Pitfalls & Pro Tips ───────────────────────────────── */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200/80">
        <div className="flex items-center gap-2 mb-3">
          <AlertCircle className="h-5 w-5 text-amber-700" />
          <h3 className="text-sm font-bold text-amber-950">Examiner Tips & Avoidable Mistakes</h3>
        </div>
        <ul className="space-y-2">
          {notes.quickTips.map((tip, idx) => (
            <li key={idx} className="text-xs text-amber-900 font-medium flex items-start gap-2">
              <span className="text-amber-600 font-black">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
