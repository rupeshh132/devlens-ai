import { 
  FlaskConical, Calculator, Globe, BookOpen, Atom, Dna, Brain, Landmark, type LucideIcon 
} from 'lucide-react';

export interface Topic {
  id: string;
  title: string;
}

export interface Chapter {
  id: string;
  title: string;
  topics?: Topic[];
}

export interface Subject {
  id: string;
  name: string;
  icon?: LucideIcon;
  badge?: string;
  accentBg?: string;
  color?: string;
}

export interface ChapterWeightage {
  tier: 'TIER_1' | 'TIER_2' | 'TIER_3';
  tierRank: number;
  marks: string;
  probability: string;
  tag: string;
  color: string;
  badgeBg: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// SUBJECT METADATA (ICONS, COLORS, GRADIENTS & BADGES)
// ─────────────────────────────────────────────────────────────────────────────
export const SUBJECT_METADATA: Record<string, { 
  icon: LucideIcon; 
  color: string; 
  badge: string; 
  accentBg: string; 
  gradient: string; 
}> = {
  // Class 11 & 12 Core Subjects
  phy: {
    icon: Atom,
    color: 'text-indigo-700',
    badge: 'Numericals & Derivations',
    accentBg: 'bg-indigo-50 border-indigo-200',
    gradient: 'from-indigo-600 to-violet-600'
  },
  chem: {
    icon: FlaskConical,
    color: 'text-amber-700',
    badge: 'Reactions & Mechanisms',
    accentBg: 'bg-amber-50 border-amber-200',
    gradient: 'from-amber-500 to-orange-600'
  },
  bio: {
    icon: Dna,
    color: 'text-emerald-700',
    badge: 'Diagrams & NCERT Lines',
    accentBg: 'bg-emerald-50 border-emerald-200',
    gradient: 'from-emerald-500 to-teal-600'
  },
  math: {
    icon: Calculator,
    color: 'text-blue-700',
    badge: 'Formulas & Step Marking',
    accentBg: 'bg-blue-50 border-blue-200',
    gradient: 'from-blue-600 to-indigo-600'
  },
  // Class 9 & 10 Core Subjects
  sci: {
    icon: FlaskConical,
    color: 'text-emerald-700',
    badge: 'Lab Practical & Concepts',
    accentBg: 'bg-emerald-50 border-emerald-200',
    gradient: 'from-emerald-500 to-teal-600'
  },
  sst: {
    icon: Globe,
    color: 'text-amber-700',
    badge: 'Maps & Analytical Theory',
    accentBg: 'bg-amber-50 border-amber-200',
    gradient: 'from-amber-500 to-orange-600'
  },
  eng: {
    icon: BookOpen,
    color: 'text-rose-700',
    badge: 'Extracts & Writing Skills',
    accentBg: 'bg-rose-50 border-rose-200',
    gradient: 'from-rose-500 to-pink-600'
  },
  // Competitive & Govt Exams (SSC CGL, UPSC CSE, Banking, State PCS)
  quant: {
    icon: Calculator,
    color: 'text-blue-700',
    badge: 'Arithmetic & Advance Maths',
    accentBg: 'bg-blue-50 border-blue-200',
    gradient: 'from-blue-600 to-indigo-600'
  },
  reasoning: {
    icon: Brain,
    color: 'text-purple-700',
    badge: 'Logic & Analytical Reasoning',
    accentBg: 'bg-purple-50 border-purple-200',
    gradient: 'from-purple-600 to-indigo-600'
  },
  ga: {
    icon: Landmark,
    color: 'text-amber-700',
    badge: 'Polity, History & Current Affairs',
    accentBg: 'bg-amber-50 border-amber-200',
    gradient: 'from-amber-500 to-orange-600'
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// ACCURATE CBSE CHAPTER WEIGHTAGE CALCULATOR
// ─────────────────────────────────────────────────────────────────────────────
export function getChapterWeightage(chapterTitle: string): ChapterWeightage {
  const t = chapterTitle.toLowerCase();
  
  // Tier 1: Highest marks & high repetition rate in Board Papers (8-10 Marks)
  if (
    t.includes('optic') || t.includes('calculus') || t.includes('integral') || 
    t.includes('different') || t.includes('electro') || t.includes('magnet') ||
    t.includes('organic') || t.includes('equilibrium') || t.includes('genetics') ||
    t.includes('inheritance') || t.includes('laws of motion') || t.includes('work') ||
    t.includes('thermodynamic') || t.includes('light') || t.includes('electricity') ||
    t.includes('life processes') || t.includes('triangle') || t.includes('trigonometr') ||
    t.includes('chemical reaction') || t.includes('atoms and molecule') || t.includes('force')
  ) {
    return {
      tier: 'TIER_1',
      tierRank: 1,
      marks: '8–10 Marks',
      probability: '95% Prob.',
      tag: 'Must-Master',
      color: 'text-rose-700 bg-rose-50 border-rose-200',
      badgeBg: 'bg-rose-500 text-white'
    };
  }

  // Tier 2: Moderate marks & conceptual questions (5-7 Marks)
  if (
    t.includes('solution') || t.includes('kinetics') || t.includes('structure') ||
    t.includes('matter') || t.includes('gravitat') || t.includes('acid') ||
    t.includes('metal') || t.includes('matrix') || t.includes('vector') ||
    t.includes('cell') || t.includes('reproduction') || t.includes('human eye') ||
    t.includes('magnetic effect') || t.includes('quadratic') || t.includes('polynomial') ||
    t.includes('coordinate') || t.includes('french') || t.includes('nationalism') ||
    t.includes('resources') || t.includes('power sharing')
  ) {
    return {
      tier: 'TIER_2',
      tierRank: 2,
      marks: '5–7 Marks',
      probability: '82% Prob.',
      tag: 'High Yield',
      color: 'text-blue-700 bg-blue-50 border-blue-200',
      badgeBg: 'bg-blue-500 text-white'
    };
  }

  // Tier 3: Foundation & short questions (3-4 Marks)
  return {
    tier: 'TIER_3',
    tierRank: 3,
    marks: '3–4 Marks',
    probability: '65% Prob.',
    tag: 'Foundation',
    color: 'text-slate-700 bg-slate-50 border-slate-200',
    badgeBg: 'bg-slate-500 text-white'
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// CLASS 11 CBSE NCERT CURRICULUM (SCIENCE STREAM & CORE)
// ─────────────────────────────────────────────────────────────────────────────
const CLASS_11_CURRICULUM: Record<string, Chapter[]> = {
  phy: [
    {
      id: 'c11-phy-ch1',
      title: 'Units and Measurements',
      topics: [
        { id: 'c11-p1-t1', title: 'The International System of Units (SI Units & Prefixes)' },
        { id: 'c11-p1-t2', title: 'Significant Figures, Rounding Off & Error Propagation' },
        { id: 'c11-p1-t3', title: 'Dimensions of Physical Quantities & Dimensional Analysis' },
        { id: 'c11-p1-t4', title: 'Applications of Dimensional Equations & Limitations' }
      ]
    },
    {
      id: 'c11-phy-ch2',
      title: 'Motion in a Straight Line',
      topics: [
        { id: 'c11-p2-t1', title: 'Frame of Reference, Position-Time Graphs & Displacement' },
        { id: 'c11-p2-t2', title: 'Average Velocity, Instantaneous Speed & Calculus Definition' },
        { id: 'c11-p2-t3', title: 'Kinematic Equations of Uniformly Accelerated Motion (Calculus Derivations)' },
        { id: 'c11-p2-t4', title: 'Relative Velocity in One Dimension & Free Fall Numericals' }
      ]
    },
    {
      id: 'c11-phy-ch3',
      title: 'Motion in a Plane (Vectors & Projectile)',
      topics: [
        { id: 'c11-p3-t1', title: 'Scalars, Vectors & Triangle and Parallelogram Laws of Addition' },
        { id: 'c11-p3-t2', title: 'Resolution of Vectors, Unit Vectors & Dot and Cross Products' },
        { id: 'c11-p3-t3', title: 'Projectile Motion: Trajectory, Time of Flight, Max Height & Range Derivations' },
        { id: 'c11-p3-t4', title: 'Uniform Circular Motion & Centripetal Acceleration' }
      ]
    },
    {
      id: 'c11-phy-ch4',
      title: 'Laws of Motion',
      topics: [
        { id: 'c11-p4-t1', title: 'Newton\'s First & Second Laws of Motion (dp/dt = F) & Impulse' },
        { id: 'c11-p4-t2', title: 'Newton\'s Third Law & Conservation of Linear Momentum' },
        { id: 'c11-p4-t3', title: 'Equilibrium of a Particle & Free Body Diagrams (Pulleys & Inclines)' },
        { id: 'c11-p4-t4', title: 'Static and Kinetic Friction, Laws of Friction & Banking of Roads' }
      ]
    },
    {
      id: 'c11-phy-ch5',
      title: 'Work, Energy and Power',
      topics: [
        { id: 'c11-p5-t1', title: 'Work Done by Constant and Variable Forces (Scalar Product)' },
        { id: 'c11-p5-t2', title: 'Work-Energy Theorem (Derivations for Variable Force)' },
        { id: 'c11-p5-t3', title: 'Potential Energy of a Spring & Conservation of Mechanical Energy' },
        { id: 'c11-p5-t4', title: 'Elastic and Inelastic Collisions in One and Two Dimensions' }
      ]
    },
    {
      id: 'c11-phy-ch6',
      title: 'System of Particles & Rotational Motion',
      topics: [
        { id: 'c11-p6-t1', title: 'Centre of Mass of Two-Particle System & Rigid Bodies' },
        { id: 'c11-p6-t2', title: 'Torque, Angular Momentum & Law of Conservation of Angular Momentum' },
        { id: 'c11-p6-t3', title: 'Moment of Inertia, Radius of Gyration & Common Body Formulas' },
        { id: 'c11-p6-t4', title: 'Kinematics and Dynamics of Rotational Motion & Rolling Motion' }
      ]
    },
    {
      id: 'c11-phy-ch7',
      title: 'Gravitation',
      topics: [
        { id: 'c11-p7-t1', title: 'Kepler\'s Laws of Planetary Motion & Universal Law of Gravitation' },
        { id: 'c11-p7-t2', title: 'Acceleration Due to Gravity (g) & Variation with Altitude and Depth' },
        { id: 'c11-p7-t3', title: 'Gravitational Potential Energy & Escape Velocity Formula' },
        { id: 'c11-p7-t4', title: 'Orbital Velocity of Earth Satellites & Weightlessness' }
      ]
    },
    {
      id: 'c11-phy-ch8',
      title: 'Thermodynamics & Kinetic Theory',
      topics: [
        { id: 'c11-p8-t1', title: 'Thermal Equilibrium, Zeroth Law & Concept of Temperature' },
        { id: 'c11-p8-t2', title: 'First Law of Thermodynamics: Internal Energy, Work & Heat' },
        { id: 'c11-p8-t3', title: 'Isothermal, Adiabatic, Isochoric and Isobaric Thermodynamic Processes' },
        { id: 'c11-p8-t4', title: 'Second Law of Thermodynamics, Heat Engines & Reversible Processes' }
      ]
    }
  ],

  chem: [
    {
      id: 'c11-chem-ch1',
      title: 'Some Basic Concepts of Chemistry',
      topics: [
        { id: 'c11-c1-t1', title: 'Nature of Matter, Laws of Chemical Combinations & Dalton\'s Atomic Theory' },
        { id: 'c11-c1-t2', title: 'Atomic and Molecular Masses, Mole Concept & Molar Mass' },
        { id: 'c11-c1-t3', title: 'Percentage Composition, Empirical and Molecular Formulas' },
        { id: 'c11-c1-t4', title: 'Chemical Reactions, Stoichiometry & Limiting Reagent Calculations' },
        { id: 'c11-c1-t5', title: 'Concentration of Solutions (Molarity, Molality, Mole Fraction, ppm)' }
      ]
    },
    {
      id: 'c11-chem-ch2',
      title: 'Structure of Atom',
      topics: [
        { id: 'c11-c2-t1', title: 'Discovery of Subatomic Particles & Rutherford Atomic Model' },
        { id: 'c11-c2-t2', title: 'Bohr\'s Model of Hydrogen Atom & Line Spectra of Hydrogen' },
        { id: 'c11-c2-t3', title: 'Dual Nature of Matter (de Broglie Relation) & Heisenberg Uncertainty Principle' },
        { id: 'c11-c2-t4', title: 'Quantum Numbers (n, l, m, s) & Shapes of s, p, d Orbitals' },
        { id: 'c11-c2-t5', title: 'Aufbau Principle, Pauli Exclusion Principle & Hund\'s Rule of Maximum Multiplicity' }
      ]
    },
    {
      id: 'c11-chem-ch3',
      title: 'Classification of Elements & Periodicity',
      topics: [
        { id: 'c11-c3-t1', title: 'Modern Periodic Law and Present Form of the Periodic Table' },
        { id: 'c11-c3-t2', title: 'Electronic Configurations of Elements and Periodic Trends in Properties' },
        { id: 'c11-c3-t3', title: 'Periodic Trends: Atomic Radii, Ionic Radii & Ionization Enthalpy' },
        { id: 'c11-c3-t4', title: 'Electron Gain Enthalpy, Electronegativity & Valence/Oxidation States' }
      ]
    },
    {
      id: 'c11-chem-ch4',
      title: 'Chemical Bonding and Molecular Structure',
      topics: [
        { id: 'c11-c4-t1', title: 'Kossel-Lewis Approach, Ionic Bond, Lattice Enthalpy & Born-Haber Cycle' },
        { id: 'c11-c4-t2', title: 'Covalent Bond, Lewis Dot Structures & Formal Charge' },
        { id: 'c11-c4-t3', title: 'VSEPR Theory & Prediction of Geometries of Simple Molecules' },
        { id: 'c11-c4-t4', title: 'Valence Bond Theory, Orbital Overlap & Hybridization (sp, sp², sp³, sp³d)' },
        { id: 'c11-c4-t5', title: 'Molecular Orbital Theory (MOT) of Homonuclear Diatomic Molecules & H-Bonding' }
      ]
    },
    {
      id: 'c11-chem-ch5',
      title: 'Chemical Thermodynamics',
      topics: [
        { id: 'c11-c5-t1', title: 'System, Surroundings, State Functions & Extensive vs Intensive Properties' },
        { id: 'c11-c5-t2', title: 'First Law of Thermodynamics (ΔU = q + w), Enthalpy (H) & Heat Capacities' },
        { id: 'c11-c5-t3', title: 'Hess\'s Law of Constant Heat Summation & Enthalpies of Reactions' },
        { id: 'c11-c5-t4', title: 'Entropy (S), Second Law of Thermodynamics & Gibbs Free Energy (ΔG = ΔH - TΔS)' }
      ]
    },
    {
      id: 'c11-chem-ch6',
      title: 'Equilibrium (Chemical & Ionic)',
      topics: [
        { id: 'c11-c6-t1', title: 'Law of Chemical Equilibrium, Equilibrium Constant (Kc, Kp) & Reaction Quotient' },
        { id: 'c11-c6-t2', title: 'Le Chatelier\'s Principle (Effect of Concentration, Pressure, Temperature)' },
        { id: 'c11-c6-t3', title: 'Ionic Equilibrium: Arrhenius, Bronsted-Lowry & Lewis Acid-Base Concepts' },
        { id: 'c11-c6-t4', title: 'Ionization of Water, pH Scale, Buffer Solutions & Solubility Product (Ksp)' }
      ]
    },
    {
      id: 'c11-chem-ch7',
      title: 'Redox Reactions',
      topics: [
        { id: 'c11-c7-t1', title: 'Classical and Electronic Concepts of Oxidation and Reduction' },
        { id: 'c11-c7-t2', title: 'Oxidation Number Rules & Fractional Oxidation Numbers' },
        { id: 'c11-c7-t3', title: 'Balancing Redox Reactions by Ion-Electron and Oxidation Number Methods' }
      ]
    },
    {
      id: 'c11-chem-ch8',
      title: 'Organic Chemistry: Basic Principles & Techniques',
      topics: [
        { id: 'c11-c8-t1', title: 'Classification and IUPAC Nomenclature of Organic Compounds' },
        { id: 'c11-c8-t2', title: 'Structural Isomerism, Stereoisomerism & Resonance Structures' },
        { id: 'c11-c8-t3', title: 'Electronic Displacements: Inductive Effect, Electromeric, Resonance & Hyperconjugation' },
        { id: 'c11-c8-t4', title: 'Types of Organic Reactions & Fission of Covalent Bonds (Carbocations & Free Radicals)' }
      ]
    }
  ],

  math: [
    {
      id: 'c11-math-ch1',
      title: 'Sets, Relations and Functions',
      topics: [
        { id: 'c11-m1-t1', title: 'Sets and their Representations (Roster and Set-Builder Forms)' },
        { id: 'c11-m1-t2', title: 'Subsets, Power Set, Universal Set, Venn Diagrams & Union/Intersection' },
        { id: 'c11-m1-t3', title: 'Cartesian Product of Sets & Definition of Relation' },
        { id: 'c11-m1-t4', title: 'Functions as Special Relations, Domain, Co-domain, Range & Real Valued Functions' }
      ]
    },
    {
      id: 'c11-math-ch2',
      title: 'Trigonometric Functions',
      topics: [
        { id: 'c11-m2-t1', title: 'Radian Measure of Angles & Conversion between Degrees and Radians' },
        { id: 'c11-m2-t2', title: 'Signs of Trigonometric Functions in Different Quadrants & Graphs' },
        { id: 'c11-m2-t3', title: 'Compound Angle Formulas: sin(x±y), cos(x±y), tan(x±y)' },
        { id: 'c11-m2-t4', title: 'Multiple Angle Formulas (2x, 3x) & Factorization Formulas' }
      ]
    },
    {
      id: 'c11-math-ch3',
      title: 'Complex Numbers & Quadratic Equations',
      topics: [
        { id: 'c11-m3-t1', title: 'Algebra of Complex Numbers (Addition, Multiplication & Modulus)' },
        { id: 'c11-m3-t2', title: 'Argand Plane and Representation of Complex Numbers' },
        { id: 'c11-m3-t3', title: 'Solutions of Quadratic Equations with Complex Roots (Negative Discriminant)' }
      ]
    },
    {
      id: 'c11-math-ch4',
      title: 'Linear Inequalities',
      topics: [
        { id: 'c11-m4-t1', title: 'Algebraic Solutions of Linear Inequalities in One Variable and Number Line' },
        { id: 'c11-m4-t2', title: 'Graphical Representation of Linear Inequalities in Two Variables' }
      ]
    },
    {
      id: 'c11-math-ch5',
      title: 'Permutations and Combinations',
      topics: [
        { id: 'c11-m5-t1', title: 'Fundamental Principle of Counting (Multiplication & Addition Principles)' },
        { id: 'c11-m5-t2', title: 'Factorial Notation (n!) & Derivation of Formula for nPr' },
        { id: 'c11-m5-t3', title: 'Combinations Formula nCr, Properties & Practical Word Problems' }
      ]
    },
    {
      id: 'c11-math-ch6',
      title: 'Sequences and Series',
      topics: [
        { id: 'c11-m6-t1', title: 'Arithmetic Progression (AP), nth Term & Sum of n Terms' },
        { id: 'c11-m6-t2', title: 'Geometric Progression (GP), General Term & Sum of n Terms of a GP' },
        { id: 'c11-m6-t3', title: 'Infinite GP & Arithmetic Mean (AM) and Geometric Mean (GM) Relation' }
      ]
    },
    {
      id: 'c11-math-ch7',
      title: 'Straight Lines & Conic Sections',
      topics: [
        { id: 'c11-m7-t1', title: 'Slope of a Line and Angle Between Two Lines' },
        { id: 'c11-m7-t2', title: 'Various Forms of Equations of a Line (Point-Slope, Slope-Intercept, Two-Point)' },
        { id: 'c11-m7-t3', title: 'Distance of a Point from a Line & Distance between Parallel Lines' },
        { id: 'c11-m7-t4', title: 'Standard Equations of Circle, Parabola, Ellipse and Hyperbola' }
      ]
    },
    {
      id: 'c11-math-ch8',
      title: 'Limits and Derivatives (Introduction to Calculus)',
      topics: [
        { id: 'c11-m8-t1', title: 'Intuitive Idea of Limit, Left Hand and Right Hand Limits' },
        { id: 'c11-m8-t2', title: 'Algebra of Limits & Standard Limits: lim(x→a) (xⁿ - aⁿ)/(x - a)' },
        { id: 'c11-m8-t3', title: 'Trigonometric Limits: lim(x→0) sin(x)/x = 1' },
        { id: 'c11-m8-t4', title: 'Derivative at a Point by First Principle & Product and Quotient Rules' }
      ]
    }
  ],

  bio: [
    {
      id: 'c11-bio-ch1',
      title: 'The Living World & Biological Classification',
      topics: [
        { id: 'c11-b1-t1', title: 'What is Living? Biodiversity & Need for Classification' },
        { id: 'c11-b1-t2', title: 'Binomial Nomenclature & Taxonomic Categories (Species to Kingdom)' },
        { id: 'c11-b1-t3', title: 'Five Kingdom Classification (Whittaker): Monera, Protista, Fungi' },
        { id: 'c11-b1-t4', title: 'Viruses, Viroids, Prions and Lichens' }
      ]
    },
    {
      id: 'c11-bio-ch2',
      title: 'Plant Kingdom & Animal Kingdom',
      topics: [
        { id: 'c11-b2-t1', title: 'Algae, Bryophytes, Pteridophytes & Gymnosperms Characteristics' },
        { id: 'c11-b2-t2', title: 'Angiosperms & Alternation of Generations (Haplontic, Diplontic)' },
        { id: 'c11-b2-t3', title: 'Basis of Animal Classification: Symmetry, Coelom & Germ Layers' },
        { id: 'c11-b2-t4', title: 'Non-Chordates (Porifera to Echinodermata) & Chordata Classes' }
      ]
    },
    {
      id: 'c11-bio-ch3',
      title: 'Cell: The Unit of Life & Cell Division',
      topics: [
        { id: 'c11-b3-t1', title: 'Cell Theory & Prokaryotic vs Eukaryotic Cell Structure' },
        { id: 'c11-b3-t2', title: 'Cell Membrane (Fluid Mosaic Model) & Endomembrane System' },
        { id: 'c11-b3-t3', title: 'Mitochondria, Chloroplasts, Ribosomes, Nucleus & Chromosomes' },
        { id: 'c11-b3-t4', title: 'Cell Cycle Phases (G1, S, G2, M Phase) & Stages of Mitosis and Meiosis' }
      ]
    },
    {
      id: 'c11-bio-ch4',
      title: 'Photosynthesis & Respiration in Plants',
      topics: [
        { id: 'c11-b4-t1', title: 'Site of Photosynthesis & Pigments Involved (Chlorophyll a, b, Carotenoids)' },
        { id: 'c11-b4-t2', title: 'Light Reactions: Cyclic and Non-Cyclic Photophosphorylation (Z-Scheme)' },
        { id: 'c11-b4-t3', title: 'Dark Reaction: Calvin Cycle (C3 Pathway) vs Hatch and Slack (C4 Pathway)' },
        { id: 'c11-b4-t4', title: 'Cellular Respiration: Glycolysis, Krebs Cycle & Electron Transport Chain (ETS)' }
      ]
    },
    {
      id: 'c11-bio-ch5',
      title: 'Human Physiology: Breathing & Circulation',
      topics: [
        { id: 'c11-b5-t1', title: 'Respiratory Organs in Humans & Mechanism of Breathing' },
        { id: 'c11-b5-t2', title: 'Exchange and Transport of Gases (Oxyhaemoglobin Dissociation Curve)' },
        { id: 'c11-b5-t3', title: 'Blood Composition, Blood Groups (ABO & Rh Factor) & Coagulation' },
        { id: 'c11-b5-t4', title: 'Human Heart Structure, Cardiac Cycle, ECG & Double Circulation' }
      ]
    }
  ],

  eng: [
    {
      id: 'c11-eng-ch1',
      title: 'The Portrait of a Lady & A Photograph',
      topics: [
        { id: 'c11-e1-t1', title: 'The Portrait of a Lady (Khushwant Singh) — Character & Grandmother\'s Love' },
        { id: 'c11-e1-t2', title: 'Poem: A Photograph (Shirley Toulson) — Poetic Devices & Nostalgia' }
      ]
    },
    {
      id: 'c11-eng-ch2',
      title: 'We\'re Not Afraid to Die & The Laburnum Top',
      topics: [
        { id: 'c11-e2-t1', title: 'Voyage on Wavewalker — Courage, Optimism and Maritime Adventure' },
        { id: 'c11-e2-t2', title: 'Poem: The Laburnum Top (Ted Hughes) — Symbolism & Goldfinch' }
      ]
    },
    {
      id: 'c11-eng-ch3',
      title: 'Discovering Tut: The Saga Continues',
      topics: [
        { id: 'c11-e3-t1', title: 'CT Scan of King Tutankhamun — Archaeology & Modern Science Insights' },
        { id: 'c11-e3-t2', title: 'Historical Context & Examination Questions' }
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// CLASS 12 CBSE NCERT CURRICULUM
// ─────────────────────────────────────────────────────────────────────────────
const CLASS_12_CURRICULUM: Record<string, Chapter[]> = {
  phy: [
    {
      id: 'c12-phy-ch1',
      title: 'Electric Charges and Fields',
      topics: [
        { id: 'c12-p1-t1', title: 'Coulomb\'s Law, Superposition Principle & Electric Field Lines' },
        { id: 'c12-p1-t2', title: 'Electric Dipole in Uniform Field & Dipole Moment' },
        { id: 'c12-p1-t3', title: 'Gauss\'s Law and Applications (Infinite Wire, Plane Sheet, Spherical Shell)' }
      ]
    },
    {
      id: 'c12-phy-ch2',
      title: 'Electrostatic Potential & Capacitance',
      topics: [
        { id: 'c12-p2-t1', title: 'Electric Potential Due to a Point Charge and Dipole' },
        { id: 'c12-p2-t2', title: 'Equipotential Surfaces & Potential Energy of System of Charges' },
        { id: 'c12-p2-t3', title: 'Parallel Plate Capacitor with Dielectric & Energy Stored (1/2 CV²)' }
      ]
    },
    {
      id: 'c12-phy-ch3',
      title: 'Current Electricity',
      topics: [
        { id: 'c12-p3-t1', title: 'Drift Velocity, Mobility & Ohm\'s Law Derivation' },
        { id: 'c12-p3-t2', title: 'Temperature Dependence of Resistivity & Electrical Power' },
        { id: 'c12-p3-t3', title: 'Kirchhoff\'s Rules & Wheatstone Bridge Principle' }
      ]
    },
    {
      id: 'c12-phy-ch4',
      title: 'Moving Charges & Magnetism',
      topics: [
        { id: 'c12-p4-t1', title: 'Biot-Savart Law and Application to Circular Loop' },
        { id: 'c12-p4-t2', title: 'Ampere\'s Circuital Law and Application to Solenoid' },
        { id: 'c12-p4-t3', title: 'Force Between Two Parallel Current-Carrying Conductors & Moving Coil Galvanometer' }
      ]
    },
    {
      id: 'c12-phy-ch5',
      title: 'Ray Optics and Optical Instruments',
      topics: [
        { id: 'c12-p5-t1', title: 'Refraction at Spherical Surfaces & Lens Maker\'s Formula' },
        { id: 'c12-p5-t2', title: 'Refraction Through a Prism & Angle of Minimum Deviation' },
        { id: 'c12-p5-t3', title: 'Compound Microscope and Astronomical Telescope Derivations' }
      ]
    },
    {
      id: 'c12-phy-ch6',
      title: 'Wave Optics (Huygens Principle)',
      topics: [
        { id: 'c12-p6-t1', title: 'Huygens Principle and Laws of Reflection and Refraction Proof' },
        { id: 'c12-p6-t2', title: 'Young\'s Double Slit Experiment (YDSE) & Fringe Width Formula' },
        { id: 'c12-p6-t3', title: 'Diffraction at a Single Slit & Central Maxima Width' }
      ]
    },
    {
      id: 'c12-phy-ch7',
      title: 'Semiconductor Electronics & Logic Gates',
      topics: [
        { id: 'c12-p7-t1', title: 'Energy Bands in Conductors, Semiconductors and Insulators' },
        { id: 'c12-p7-t2', title: 'Intrinsic & Extrinsic (p-type, n-type) Semiconductors' },
        { id: 'c12-p7-t3', title: 'p-n Junction Diode (Forward and Reverse Bias) & Rectifier Circuits' }
      ]
    }
  ],

  chem: [
    {
      id: 'c12-chem-ch1',
      title: 'Solutions',
      topics: [
        { id: 'c12-c1-t1', title: 'Raoult\'s Law for Volatile and Non-Volatile Solutes' },
        { id: 'c12-c1-t2', title: 'Ideal and Non-Ideal Solutions & Azeotropes' },
        { id: 'c12-c1-t3', title: 'Colligative Properties: Elevation in Boiling Point & Depression in Freezing Point' },
        { id: 'c12-c1-t4', title: 'Osmotic Pressure & Van\'t Hoff Factor (i)' }
      ]
    },
    {
      id: 'c12-chem-ch2',
      title: 'Electrochemistry',
      topics: [
        { id: 'c12-c2-t1', title: 'Galvanic Cells, Nernst Equation and Applications' },
        { id: 'c12-c2-t2', title: 'Conductance in Electrolytic Solutions & Kohlrausch\'s Law' },
        { id: 'c12-c2-t3', title: 'Faraday\'s Laws of Electrolysis & Batteries (Lead Storage Cell)' }
      ]
    },
    {
      id: 'c12-chem-ch3',
      title: 'Chemical Kinetics',
      topics: [
        { id: 'c12-c3-t1', title: 'Rate of Reaction, Rate Law and Order and Molecularity' },
        { id: 'c12-c3-t2', title: 'Integrated Rate Equations for Zero and First Order Reactions' },
        { id: 'c12-c3-t3', title: 'Half Life of a Reaction & Arrhenius Equation (Activation Energy)' }
      ]
    },
    {
      id: 'c12-chem-ch4',
      title: 'Coordination Compounds',
      topics: [
        { id: 'c12-c4-t1', title: 'Werner\'s Theory, Ligands, Coordination Number & IUPAC Naming' },
        { id: 'c12-c4-t2', title: 'Isomerism in Coordination Compounds (Geometrical and Optical)' },
        { id: 'c12-c4-t3', title: 'Valence Bond Theory and Crystal Field Theory (CFT) in Octahedral Complexes' }
      ]
    },
    {
      id: 'c12-chem-ch5',
      title: 'Aldehydes, Ketones & Carboxylic Acids',
      topics: [
        { id: 'c12-c5-t1', title: 'Nomenclature and Methods of Preparation of Aldehydes and Ketones' },
        { id: 'c12-c5-t2', title: 'Nucleophilic Addition Reactions & Aldol Condensation' },
        { id: 'c12-c5-t3', title: 'Cannizzaro Reaction, Clemmensen and Wolff-Kishner Reductions' },
        { id: 'c12-c5-t4', title: 'Carboxylic Acids: Acidity, Hell-Volhard-Zelinsky (HVZ) Reaction' }
      ]
    }
  ],

  math: [
    {
      id: 'c12-math-ch1',
      title: 'Relations and Functions & Inverse Trig',
      topics: [
        { id: 'c12-m1-t1', title: 'Types of Relations: Reflexive, Symmetric, Transitive & Equivalence Relations' },
        { id: 'c12-m1-t2', title: 'One-One (Injective) and Onto (Surjective) Functions & Bijective Proofs' },
        { id: 'c12-m1-t3', title: 'Inverse Trigonometric Functions: Principal Value Branches & Graphs' }
      ]
    },
    {
      id: 'c12-math-ch2',
      title: 'Matrices and Determinants',
      topics: [
        { id: 'c12-m2-t1', title: 'Matrix Multiplication, Transpose & Symmetric and Skew-Symmetric Matrices' },
        { id: 'c12-m2-t2', title: 'Properties of Determinants, Minors and Cofactors' },
        { id: 'c12-m2-t3', title: 'Adjoint and Inverse of a Matrix & Solving System of Linear Equations (Matrix Method)' }
      ]
    },
    {
      id: 'c12-math-ch3',
      title: 'Continuity & Differentiability',
      topics: [
        { id: 'c12-m3-t1', title: 'Continuity of Functions at a Point and in an Interval' },
        { id: 'c12-m3-t2', title: 'Derivative of Composite Functions (Chain Rule) & Implicit Functions' },
        { id: 'c12-m3-t3', title: 'Logarithmic Differentiation & Parametric Form Differentiation' },
        { id: 'c12-m3-t4', title: 'Second Order Derivatives' }
      ]
    },
    {
      id: 'c12-math-ch4',
      title: 'Integrals (Definite & Indefinite)',
      topics: [
        { id: 'c12-m4-t1', title: 'Integration by Substitution, Partial Fractions and Parts (ILATE)' },
        { id: 'c12-m4-t2', title: 'Fundamental Theorem of Calculus & Definite Integrals' },
        { id: 'c12-m4-t3', title: 'Properties of Definite Integrals (Sure-Shot Board Questions)' }
      ]
    },
    {
      id: 'c12-math-ch5',
      title: 'Differential Equations',
      topics: [
        { id: 'c12-m5-t1', title: 'Order and Degree of Differential Equations' },
        { id: 'c12-m5-t2', title: 'Method of Separation of Variables & Homogeneous Differential Equations' },
        { id: 'c12-m5-t3', title: 'Linear Differential Equations of First Order (dy/dx + Py = Q)' }
      ]
    },
    {
      id: 'c12-math-ch6',
      title: 'Vectors and Three-Dimensional Geometry',
      topics: [
        { id: 'c12-m6-t1', title: 'Dot and Cross Products of Vectors & Projection of a Vector' },
        { id: 'c12-m6-t2', title: 'Direction Cosines and Direction Ratios of a Line' },
        { id: 'c12-m6-t3', title: 'Equation of a Line in Space & Shortest Distance Between Two Skew Lines' }
      ]
    }
  ],

  bio: [
    {
      id: 'c12-bio-ch1',
      title: 'Human Reproduction & Reproductive Health',
      topics: [
        { id: 'c12-b1-t1', title: 'Male and Female Reproductive Systems Structure' },
        { id: 'c12-b1-t2', title: 'Gametogenesis (Spermatogenesis and Oogenesis) & Menstrual Cycle' },
        { id: 'c12-b1-t3', title: 'Fertilisation, Blastocyst Formation and Implantation' },
        { id: 'c12-b1-t4', title: 'Contraceptive Methods & Assisted Reproductive Technologies (IVF, ZIFT)' }
      ]
    },
    {
      id: 'c12-bio-ch2',
      title: 'Principles of Inheritance & Variation',
      topics: [
        { id: 'c12-b2-t1', title: 'Mendel\'s Laws of Inheritance: Monohybrid & Dihybrid Crosses' },
        { id: 'c12-b2-t2', title: 'Incomplete Dominance, Co-dominance & Multiple Alleles' },
        { id: 'c12-b2-t3', title: 'Sex Determination in Humans, Birds & Honeybee' },
        { id: 'c12-b2-t4', title: 'Mendelian and Chromosomal Disorders (Hemophilia, Down Syndrome, Turner\'s)' }
      ]
    },
    {
      id: 'c12-bio-ch3',
      title: 'Molecular Basis of Inheritance (DNA & RNA)',
      topics: [
        { id: 'c12-b3-t1', title: 'Structure of DNA and Packaging of DNA Helix' },
        { id: 'c12-b3-t2', title: 'DNA Replication (Meselson & Stahl Experiment)' },
        { id: 'c12-b3-t3', title: 'Transcription, Genetic Code & Translation Mechanism' },
        { id: 'c12-b3-t4', title: 'Regulation of Gene Expression (The Lac Operon) & Human Genome Project' }
      ]
    },
    {
      id: 'c12-bio-ch4',
      title: 'Biotechnology: Principles and Applications',
      topics: [
        { id: 'c12-b4-t1', title: 'Restriction Enzymes, DNA Ligase & Cloning Vectors (pBR322)' },
        { id: 'c12-b4-t2', title: 'Polymerase Chain Reaction (PCR) & Gel Electrophoresis' },
        { id: 'c12-b4-t3', title: 'Applications in Agriculture (Bt Cotton) and Medicine (Recombinant Insulin, Gene Therapy)' }
      ]
    }
  ],

  eng: [
    {
      id: 'c12-eng-ch1',
      title: 'The Last Lesson & Lost Spring',
      topics: [
        { id: 'c12-e1-t1', title: 'The Last Lesson (Alphonse Daudet) — Linguistic Chauvinism & Patriotism' },
        { id: 'c12-e1-t2', title: 'Lost Spring (Anees Jung) — Stories of Stolen Childhood (Saheb & Mukesh)' }
      ]
    },
    {
      id: 'c12-eng-ch2',
      title: 'Deep Water & The Rattrap',
      topics: [
        { id: 'c12-e2-t1', title: 'Deep Water (William Douglas) — Overcoming Phobia and Fear' },
        { id: 'c12-e2-t2', title: 'The Rattrap (Selma Lagerlof) — Human Loneliness & Compassion' }
      ]
    },
    {
      id: 'c12-eng-ch3',
      title: 'Indigo & My Mother at Sixty-Six',
      topics: [
        { id: 'c12-e3-t1', title: 'Indigo (Louis Fischer) — Champaran Satyagraha & Gandhi\'s Leadership' },
        { id: 'c12-e3-t2', title: 'Poem: My Mother at Sixty-Six (Kamala Das) — Aging & Fear of Loss' }
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// CLASS 10 CBSE NCERT CURRICULUM
// ─────────────────────────────────────────────────────────────────────────────
const CLASS_10_CURRICULUM: Record<string, Chapter[]> = {
  sci: [
    {
      id: 'c10-sci-ch1',
      title: 'Chemical Reactions and Equations',
      topics: [
        { id: 'c10-s1-t1', title: 'Chemical Equations, Balancing Equations by Hit & Trial' },
        { id: 'c10-s1-t2', title: 'Types of Chemical Reactions: Combination & Decomposition' },
        { id: 'c10-s1-t3', title: 'Displacement and Double Displacement Reactions' },
        { id: 'c10-s1-t4', title: 'Oxidation, Reduction, Corrosion and Rancidity' }
      ]
    },
    {
      id: 'c10-sci-ch2',
      title: 'Acids, Bases and Salts',
      topics: [
        { id: 'c10-s2-t1', title: 'Chemical Properties of Acids and Bases (Indicators & Reactions)' },
        { id: 'c10-s2-t2', title: 'Importance of pH in Everyday Life' },
        { id: 'c10-s2-t3', title: 'Salts: Bleaching Powder, Baking Soda, Washing Soda & Plaster of Paris' }
      ]
    },
    {
      id: 'c10-sci-ch3',
      title: 'Metals and Non-metals',
      topics: [
        { id: 'c10-s3-t1', title: 'Physical and Chemical Properties of Metals and Non-metals' },
        { id: 'c10-s3-t2', title: 'Reactivity Series & Formation of Ionic Compounds' },
        { id: 'c10-s3-t3', title: 'Basic Metallurgical Processes: Roasting, Calcination & Refining' }
      ]
    },
    {
      id: 'c10-sci-ch4',
      title: 'Carbon and its Compounds',
      topics: [
        { id: 'c10-s4-t1', title: 'Covalent Bonding in Carbon & Versatile Nature (Catenation)' },
        { id: 'c10-s4-t2', title: 'Homologous Series, Functional Groups and IUPAC Nomenclature' },
        { id: 'c10-s4-t3', title: 'Chemical Properties: Combustion, Oxidation, Addition & Substitution' },
        { id: 'c10-s4-t4', title: 'Ethanol and Ethanoic Acid & Soaps and Detergents Mechanism' }
      ]
    },
    {
      id: 'c10-sci-ch5',
      title: 'Life Processes',
      topics: [
        { id: 'c10-s5-t1', title: 'Nutrition: Autotrophic (Photosynthesis) and Heterotrophic (Human Digestion)' },
        { id: 'c10-s5-t2', title: 'Respiration: Aerobic vs Anaerobic & Human Respiratory System' },
        { id: 'c10-s5-t3', title: 'Transportation in Human Beings (Heart, Blood Vessels) and Plants (Xylem, Phloem)' },
        { id: 'c10-s5-t4', title: 'Excretion: Structure and Functioning of Nephron in Kidneys' }
      ]
    },
    {
      id: 'c10-sci-ch6',
      title: 'Light – Reflection and Refraction',
      topics: [
        { id: 'c10-s6-t1', title: 'Reflection of Light by Spherical Mirrors (Ray Diagrams for Concave & Convex)' },
        { id: 'c10-s6-t2', title: 'Mirror Formula and Linear Magnification Numericals' },
        { id: 'c10-s6-t3', title: 'Refraction, Snell\'s Law & Refractive Index' },
        { id: 'c10-s6-t4', title: 'Refraction by Spherical Lenses, Lens Formula & Power of a Lens' }
      ]
    },
    {
      id: 'c10-sci-ch7',
      title: 'Electricity',
      topics: [
        { id: 'c10-s7-t1', title: 'Electric Current, Potential Difference & Ohm\'s Law (V = IR)' },
        { id: 'c10-s7-t2', title: 'Factors on which Resistance Depends & Resistivity (ρ)' },
        { id: 'c10-s7-t3', title: 'Series and Parallel Combination of Resistors Numericals' },
        { id: 'c10-s7-t4', title: 'Heating Effect of Electric Current (Joule\'s Law) & Electric Power (P = VI)' }
      ]
    },
    {
      id: 'c10-sci-ch8',
      title: 'Magnetic Effects of Electric Current',
      topics: [
        { id: 'c10-s8-t1', title: 'Magnetic Field and Field Lines around Straight Wire and Solenoid' },
        { id: 'c10-s8-t2', title: 'Force on Current-Carrying Conductor & Fleming\'s Left-Hand Rule' },
        { id: 'c10-s8-t3', title: 'Domestic Electric Circuits, Fuse & Earthing' }
      ]
    }
  ],

  math: [
    {
      id: 'c10-math-ch1',
      title: 'Real Numbers',
      topics: [
        { id: 'c10-m1-t1', title: 'Fundamental Theorem of Arithmetic (Prime Factorization & HCF/LCM)' },
        { id: 'c10-m1-t2', title: 'Revisiting Irrational Numbers (Proof of √2, √3, √5 as Irrational)' }
      ]
    },
    {
      id: 'c10-math-ch2',
      title: 'Polynomials',
      topics: [
        { id: 'c10-m2-t1', title: 'Geometrical Meaning of the Zeroes of a Polynomial' },
        { id: 'c10-m2-t2', title: 'Relationship between Zeroes and Coefficients of Quadratic Polynomials' }
      ]
    },
    {
      id: 'c10-math-ch3',
      title: 'Pair of Linear Equations in Two Variables',
      topics: [
        { id: 'c10-m3-t1', title: 'Graphical Method of Solution & Consistency Conditions' },
        { id: 'c10-m3-t2', title: 'Algebraic Methods: Substitution and Elimination Methods' }
      ]
    },
    {
      id: 'c10-math-ch4',
      title: 'Quadratic Equations',
      topics: [
        { id: 'c10-m4-t1', title: 'Standard Form of Quadratic Equation & Solution by Factorisation' },
        { id: 'c10-m4-t2', title: 'Quadratic Formula (Discriminant D = b² - 4ac) & Nature of Roots' }
      ]
    },
    {
      id: 'c10-math-ch5',
      title: 'Arithmetic Progressions (AP)',
      topics: [
        { id: 'c10-m5-t1', title: 'Introduction to AP, First Term (a) and Common Difference (d)' },
        { id: 'c10-m5-t2', title: 'nth Term of an AP Formula (an = a + (n-1)d)' },
        { id: 'c10-m5-t3', title: 'Sum of First n Terms of an AP (Sn = n/2 [2a + (n-1)d])' }
      ]
    },
    {
      id: 'c10-math-ch6',
      title: 'Triangles',
      topics: [
        { id: 'c10-m6-t1', title: 'Basic Proportionality Theorem (Thales Theorem Proof and Converse)' },
        { id: 'c10-m6-t2', title: 'Criteria for Similarity of Triangles (AAA, SSS, SAS)' }
      ]
    },
    {
      id: 'c10-math-ch7',
      title: 'Introduction to Trigonometry & Applications',
      topics: [
        { id: 'c10-m7-t1', title: 'Trigonometric Ratios of an Acute Angle & Values at 0°, 30°, 45°, 60°, 90°' },
        { id: 'c10-m7-t2', title: 'Trigonometric Identities (sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ)' },
        { id: 'c10-m7-t3', title: 'Heights and Distances: Angles of Elevation and Depression' }
      ]
    },
    {
      id: 'c10-math-ch8',
      title: 'Surface Areas, Volumes & Statistics',
      topics: [
        { id: 'c10-m8-t1', title: 'Surface Area and Volume of Combinations of Solids (Cylinder, Cone, Sphere)' },
        { id: 'c10-m8-t2', title: 'Mean, Median and Mode of Grouped Data' }
      ]
    }
  ],

  sst: [
    {
      id: 'c10-sst-ch1',
      title: 'The Rise of Nationalism in Europe',
      topics: [
        { id: 'c10-ss1-t1', title: 'The French Revolution and the Idea of the Nation' },
        { id: 'c10-ss1-t2', title: 'The Making of Nationalism in Europe & Liberal Nationalism' },
        { id: 'c10-ss1-t3', title: 'The Age of Revolutions: 1830-1848 & Unification of Germany and Italy' }
      ]
    },
    {
      id: 'c10-sst-ch2',
      title: 'Nationalism in India',
      topics: [
        { id: 'c10-ss2-t1', title: 'The First World War, Khilafat and Non-Cooperation Movement' },
        { id: 'c10-ss2-t2', title: 'Differing Strands within the Movement (Towns, Countryside, Tribal Areas)' },
        { id: 'c10-ss2-t3', title: 'Towards Civil Disobedience: The Salt March and Round Table Conferences' }
      ]
    },
    {
      id: 'c10-sst-ch3',
      title: 'Power Sharing & Federalism',
      topics: [
        { id: 'c10-ss3-t1', title: 'Case Studies: Belgium and Sri Lanka Accommodation vs Majoritarianism' },
        { id: 'c10-ss3-t2', title: 'Forms of Power Sharing in Modern Democracies' },
        { id: 'c10-ss3-t3', title: 'What makes India a Federal Country? Decentralisation in India' }
      ]
    },
    {
      id: 'c10-sst-ch4',
      title: 'Resources, Development & Economy Sectors',
      topics: [
        { id: 'c10-ss4-t1', title: 'Resource Planning and Soil Types in India' },
        { id: 'c10-ss4-t2', title: 'Sectors of Economic Activities: Primary, Secondary, Tertiary' },
        { id: 'c10-ss4-t3', title: 'Money and Credit: Formal vs Informal Sources of Credit' }
      ]
    }
  ],

  eng: [
    {
      id: 'c10-eng-ch1',
      title: 'A Letter to God & Dust of Snow',
      topics: [
        { id: 'c10-e1-t1', title: 'Prose: A Letter to God (G.L. Fuentes) — Faith & Irony' },
        { id: 'c10-e1-t2', title: 'Poems: Dust of Snow & Fire and Ice (Robert Frost) — Metaphors & Meaning' }
      ]
    },
    {
      id: 'c10-eng-ch2',
      title: 'Nelson Mandela: Long Walk to Freedom',
      topics: [
        { id: 'c10-e2-t1', title: 'Inauguration Ceremony & Fight Against Apartheid' },
        { id: 'c10-e2-t2', title: 'Courage, Freedom and Moral Reflections' }
      ]
    },
    {
      id: 'c10-eng-ch3',
      title: 'A Triumph of Surgery & The Thief\'s Story',
      topics: [
        { id: 'c10-e3-t1', title: 'A Triumph of Surgery (James Herriot) — Tricki\'s Treatment' },
        { id: 'c10-e3-t2', title: 'The Thief\'s Story (Ruskin Bond) — Hari Singh & Anil\'s Transformation' }
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// CLASS 9 CBSE NCERT CURRICULUM
// ─────────────────────────────────────────────────────────────────────────────
const CLASS_9_CURRICULUM: Record<string, Chapter[]> = {
  sci: [
    {
      id: 'c9-sci-ch1',
      title: 'Matter in Our Surroundings',
      topics: [
        { id: 'c9-s1-t1', title: 'Physical Nature of Matter & Particle Characteristics' },
        { id: 'c9-s1-t2', title: 'States of Matter (Solid, Liquid, Gas)' },
        { id: 'c9-s1-t3', title: 'Can Matter Change Its State? (Melting, Boiling & Latent Heat)' },
        { id: 'c9-s1-t4', title: 'Evaporation & Factors Affecting Evaporation' }
      ]
    },
    {
      id: 'c9-sci-ch2',
      title: 'Is Matter Around Us Pure?',
      topics: [
        { id: 'c9-s2-t1', title: 'What is a Mixture? (Homogeneous vs Heterogeneous)' },
        { id: 'c9-s2-t2', title: 'Solutions, Suspensions and Colloidal Solutions' },
        { id: 'c9-s2-t3', title: 'Concentration of Solutions & Mass Percentage' },
        { id: 'c9-s2-t4', title: 'Physical vs Chemical Changes & Compounds' }
      ]
    },
    {
      id: 'c9-sci-ch3',
      title: 'Atoms and Molecules',
      topics: [
        { id: 'c9-s3-t1', title: 'Laws of Chemical Combination (Conservation of Mass & Definite Proportions)' },
        { id: 'c9-s3-t2', title: 'Dalton\'s Atomic Theory & Atomic Mass Unit' },
        { id: 'c9-s3-t3', title: 'Molecules, Ions and Writing Chemical Formulas' },
        { id: 'c9-s3-t4', title: 'Molecular Mass, Formula Unit Mass & Mole Concept' }
      ]
    },
    {
      id: 'c9-sci-ch4',
      title: 'Structure of the Atom',
      topics: [
        { id: 'c9-s4-t1', title: 'Charged Particles in Matter (Electrons and Protons)' },
        { id: 'c9-s4-t2', title: 'Thomson and Rutherford Atomic Models' },
        { id: 'c9-s4-t3', title: 'Bohr\'s Model of the Atom & Electronic Distribution' },
        { id: 'c9-s4-t4', title: 'Valency, Atomic Number, Mass Number & Isotopes' }
      ]
    },
    {
      id: 'c9-sci-ch5',
      title: 'The Fundamental Unit of Life (The Cell)',
      topics: [
        { id: 'c9-s5-t1', title: 'Discovery of the Cell & Plasma Membrane (Osmosis & Diffusion)' },
        { id: 'c9-s5-t2', title: 'Cell Wall, Nucleus & Prokaryotic vs Eukaryotic Cells' },
        { id: 'c9-s5-t3', title: 'Cytoplasm & Cell Organelles (Endoplasmic Reticulum, Golgi)' },
        { id: 'c9-s5-t4', title: 'Lysosomes, Mitochondria, Plastids & Vacuoles' }
      ]
    },
    {
      id: 'c9-sci-ch6',
      title: 'Tissues (Plant & Animal Tissues)',
      topics: [
        { id: 'c9-s6-t1', title: 'Plant Tissues: Meristematic Tissues' },
        { id: 'c9-s6-t2', title: 'Permanent Plant Tissues (Parenchyma, Collenchyma, Sclerenchyma)' },
        { id: 'c9-s6-t3', title: 'Complex Tissues: Xylem and Phloem' },
        { id: 'c9-s6-t4', title: 'Animal Tissues: Epithelial, Connective, Muscular & Nervous' }
      ]
    },
    {
      id: 'c9-sci-ch7',
      title: 'Motion',
      topics: [
        { id: 'c9-s7-t1', title: 'Describing Motion: Distance vs Displacement' },
        { id: 'c9-s7-t2', title: 'Uniform & Non-Uniform Motion, Speed & Velocity' },
        { id: 'c9-s7-t3', title: 'Acceleration & Velocity-Time Graphs' },
        { id: 'c9-s7-t4', title: 'Equations of Motion by Graphical Method & Circular Motion' }
      ]
    },
    {
      id: 'c9-sci-ch8',
      title: 'Force and Laws of Motion',
      topics: [
        { id: 'c9-s8-t1', title: 'Balanced and Unbalanced Forces' },
        { id: 'c9-s8-t2', title: 'First Law of Motion and Inertia' },
        { id: 'c9-s8-t3', title: 'Second Law of Motion (F = ma) & Mathematical Formulation' },
        { id: 'c9-s8-t4', title: 'Third Law of Motion & Conservation of Momentum' }
      ]
    },
    {
      id: 'c9-sci-ch9',
      title: 'Gravitation',
      topics: [
        { id: 'c9-s9-t1', title: 'Universal Law of Gravitation and Gravitational Constant G' },
        { id: 'c9-s9-t2', title: 'Free Fall, Acceleration due to Gravity (g) vs G' },
        { id: 'c9-s9-t3', title: 'Mass vs Weight on Earth and Moon' },
        { id: 'c9-s9-t4', title: 'Thrust and Pressure, Archimedes\' Principle & Buoyancy' }
      ]
    },
    {
      id: 'c9-sci-ch10',
      title: 'Work and Energy',
      topics: [
        { id: 'c9-s10-t1', title: 'Scientific Conception of Work & Mathematical Expression' },
        { id: 'c9-s10-t2', title: 'Kinetic Energy & Mathematical Derivation (1/2 mv²)' },
        { id: 'c9-s10-t3', title: 'Potential Energy (Gravitational P.E = mgh)' },
        { id: 'c9-s10-t4', title: 'Law of Conservation of Energy & Power (Watts)' }
      ]
    }
  ],

  math: [
    {
      id: 'c9-math-ch1',
      title: 'Number Systems',
      topics: [
        { id: 'c9-m1-t1', title: 'Review of Rational Numbers & Decimal Expansions' },
        { id: 'c9-m1-t2', title: 'Irrational Numbers and Plotting on Number Line' },
        { id: 'c9-m1-t3', title: 'Operations on Real Numbers & Rationalizing the Denominator' },
        { id: 'c9-m1-t4', title: 'Laws of Exponents for Real Numbers' }
      ]
    },
    {
      id: 'c9-math-ch2',
      title: 'Polynomials',
      topics: [
        { id: 'c9-m2-t1', title: 'Polynomials in One Variable, Degrees and Coefficients' },
        { id: 'c9-m2-t2', title: 'Zeroes of a Polynomial' },
        { id: 'c9-m2-t3', title: 'Remainder Theorem and Factor Theorem' },
        { id: 'c9-m2-t4', title: 'Algebraic Identities and Factorization' }
      ]
    },
    {
      id: 'c9-math-ch3',
      title: 'Coordinate Geometry',
      topics: [
        { id: 'c9-m3-t1', title: 'Cartesian System, Quadrants & Origin' },
        { id: 'c9-m3-t2', title: 'Plotting a Point in the Plane with Given Coordinates' }
      ]
    },
    {
      id: 'c9-math-ch4',
      title: 'Linear Equations in Two Variables',
      topics: [
        { id: 'c9-m4-t1', title: 'Standard Form ax + by + c = 0' },
        { id: 'c9-m4-t2', title: 'Solution of a Linear Equation' },
        { id: 'c9-m4-t3', title: 'Graph of a Linear Equation in Two Variables' }
      ]
    },
    {
      id: 'c9-math-ch5',
      title: 'Lines and Angles',
      topics: [
        { id: 'c9-m5-t1', title: 'Basic Terms, Intersecting and Non-Intersecting Lines' },
        { id: 'c9-m5-t2', title: 'Pairs of Angles (Linear Pair & Vertically Opposite Angles)' },
        { id: 'c9-m5-t3', title: 'Parallel Lines and Transversal (Alternate & Interior Angles)' }
      ]
    },
    {
      id: 'c9-math-ch6',
      title: 'Triangles',
      topics: [
        { id: 'c9-m6-t1', title: 'Congruence of Triangles Concept' },
        { id: 'c9-m6-t2', title: 'Criteria for Congruence: SAS and ASA Congruence' },
        { id: 'c9-m6-t3', title: 'Criteria for Congruence: SSS and RHS Rules' }
      ]
    },
    {
      id: 'c9-math-ch7',
      title: 'Heron\'s Formula & Surface Areas',
      topics: [
        { id: 'c9-m7-t1', title: 'Area of Triangle by Heron\'s Formula (s = (a+b+c)/2)' },
        { id: 'c9-m7-t2', title: 'Surface Area of a Sphere and Hemisphere' },
        { id: 'c9-m7-t3', title: 'Volume of a Cylinder and Cone' }
      ]
    },
    {
      id: 'c9-math-ch8',
      title: 'Statistics',
      topics: [
        { id: 'c9-m8-t1', title: 'Collection and Presentation of Data' },
        { id: 'c9-m8-t2', title: 'Graphical Representation: Bar Graphs & Histograms' }
      ]
    }
  ],

  sst: [
    {
      id: 'c9-sst-ch1',
      title: 'The French Revolution',
      topics: [
        { id: 'c9-ss1-t1', title: 'French Society during the Late 18th Century' },
        { id: 'c9-ss1-t2', title: 'The Outbreak of the Revolution & Storming of the Bastille' },
        { id: 'c9-ss1-t3', title: 'France Abolishes Monarchy and Becomes a Republic' },
        { id: 'c9-ss1-t4', title: 'The Reign of Terror & Rise of Napoleon' }
      ]
    },
    {
      id: 'c9-sst-ch2',
      title: 'Socialism in Europe & Russian Revolution',
      topics: [
        { id: 'c9-ss2-t1', title: 'The Age of Social Change: Liberals, Radicals and Conservatives' },
        { id: 'c9-ss2-t2', title: 'The Russian Revolution & The February Revolution in Petrograd' },
        { id: 'c9-ss2-t3', title: 'The October Revolution of 1917 & Lenin\'s Bolsheviks' }
      ]
    },
    {
      id: 'c9-sst-ch3',
      title: 'India – Size and Location & Drainage',
      topics: [
        { id: 'c9-ss3-t1', title: 'Location, Latitudes, Longitudes & Standard Meridian (82°30\' E)' },
        { id: 'c9-ss3-t2', title: 'The Himalayan Rivers: Indus, Ganga and Brahmaputra River Systems' },
        { id: 'c9-ss3-t3', title: 'The Peninsular Rivers: Narmada, Tapi, Godavari, Krishna, Kaveri' }
      ]
    },
    {
      id: 'c9-sst-ch4',
      title: 'What is Democracy? Why Democracy?',
      topics: [
        { id: 'c9-ss4-t1', title: 'Simple Definition of Democracy & Major Features' },
        { id: 'c9-ss4-t2', title: 'One Person, One Vote, One Value & Rule of Law' },
        { id: 'c9-ss4-t3', title: 'Arguments For and Against Democracy' }
      ]
    }
  ],

  eng: [
    {
      id: 'c9-eng-ch1',
      title: 'The Fun They Had & The Road Not Taken',
      topics: [
        { id: 'c9-e1-t1', title: 'Prose: The Fun They Had (Isaac Asimov) — Future Classrooms' },
        { id: 'c9-e1-t2', title: 'Poem: The Road Not Taken (Robert Frost) — Metaphors & Choices' }
      ]
    },
    {
      id: 'c9-eng-ch2',
      title: 'The Sound of Music & Wind',
      topics: [
        { id: 'c9-e2-t1', title: 'Evelyn Glennie Listens to Sound Without Hearing It' },
        { id: 'c9-e2-t2', title: 'The Shehnai of Bismillah Khan' },
        { id: 'c9-e2-t3', title: 'Poem: Wind (Subramania Bharati) — Message & Courage' }
      ]
    },
    {
      id: 'c9-eng-ch3',
      title: 'The Little Girl & Rain on the Roof',
      topics: [
        { id: 'c9-e3-t1', title: 'Prose: The Little Girl (Katherine Mansfield) — Kezia & Her Father' },
        { id: 'c9-e3-t2', title: 'Poem: Rain on the Roof (Coates Kinney) — Imagery & Memory' }
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPETITIVE & GOVERNMENT EXAMS CURRICULUM (SSC CGL, UPSC CSE, BANKING, STATE PCS)
// ─────────────────────────────────────────────────────────────────────────────
const GOVT_CURRICULUM: Record<string, Chapter[]> = {
  quant: [
    {
      id: 'govt-quant-ch1',
      title: 'Number Systems & Simplification',
      topics: [
        { id: 'govt-q1-t1', title: 'Divisibility Rules, Unit Digits & Remainder Theorems' },
        { id: 'govt-q1-t2', title: 'Surds, Indices & BODMAS Simplifications' },
        { id: 'govt-q1-t3', title: 'HCF & LCM Core Applications & Word Problems' }
      ]
    },
    {
      id: 'govt-quant-ch2',
      title: 'Percentage, Profit & Loss and Discount',
      topics: [
        { id: 'govt-q2-t1', title: 'Percentage Fractions & Successive Percentage Formula' },
        { id: 'govt-q2-t2', title: 'Cost Price, Selling Price & Dishonest Shopkeeper Tricks' },
        { id: 'govt-q2-t3', title: 'Marked Price, Single Equivalent Discount & Profit Margins' }
      ]
    },
    {
      id: 'govt-quant-ch3',
      title: 'Ratio, Proportion & Mixture-Alligation',
      topics: [
        { id: 'govt-q3-t1', title: 'Compound & Duplicate Ratios, Mean Proportional' },
        { id: 'govt-q3-t2', title: 'Rule of Alligation & Liquid Replacement Formulas' },
        { id: 'govt-q3-t3', title: 'Partnership & Profit Sharing Based on Capital-Time' }
      ]
    },
    {
      id: 'govt-quant-ch4',
      title: 'Time, Speed, Distance & Work',
      topics: [
        { id: 'govt-q4-t1', title: 'Efficiency Ratio Method for Time and Work (Pipes & Cisterns)' },
        { id: 'govt-q4-t2', title: 'Relative Speed, Trains Crossing Platforms and Poles' },
        { id: 'govt-q4-t3', title: 'Boats and Streams (Upstream, Downstream & Still Water)' }
      ]
    },
    {
      id: 'govt-quant-ch5',
      title: 'Advance Maths: Algebra & Mensuration',
      topics: [
        { id: 'govt-q5-t1', title: 'Algebraic Identities (x + 1/x types & Value Putting)' },
        { id: 'govt-q5-t2', title: 'Area and Perimeter of Circles, Triangles & Quadrilaterals' },
        { id: 'govt-q5-t3', title: 'Volume and Surface Area of Cylinders, Cones, Spheres & Prisms' }
      ]
    }
  ],

  reasoning: [
    {
      id: 'govt-reas-ch1',
      title: 'Syllogism & Logical Deduction',
      topics: [
        { id: 'govt-r1-t1', title: 'Venn Diagram Representation of All, Some, None' },
        { id: 'govt-r1-t2', title: 'Possibility Cases & Either-Or Conditions' },
        { id: 'govt-r1-t3', title: 'Reverse Syllogism & Multi-Statement Derivations' }
      ]
    },
    {
      id: 'govt-reas-ch2',
      title: 'Coding-Decoding & Analogy',
      topics: [
        { id: 'govt-r2-t1', title: 'Letter Shifting, Reverse Alphabet Positions & Opposites' },
        { id: 'govt-r2-t2', title: 'Chinese Coding & Substitution Deciphering' },
        { id: 'govt-r2-t3', title: 'Semantic, Symbolic & Number Analogies' }
      ]
    },
    {
      id: 'govt-reas-ch3',
      title: 'Blood Relations & Direction Sense',
      topics: [
        { id: 'govt-r3-t1', title: 'Family Tree Diagramming & Coded Blood Relations' },
        { id: 'govt-r3-t2', title: 'Compass Directions, Turns and Pythagorean Distance' },
        { id: 'govt-r3-t3', title: 'Shadow Concepts & Angular Clockwise/Anticlockwise Rotations' }
      ]
    },
    {
      id: 'govt-reas-ch4',
      title: 'Seating Arrangement & Analytical Puzzles',
      topics: [
        { id: 'govt-r4-t1', title: 'Linear Row Arrangements (Facing North/South)' },
        { id: 'govt-r4-t2', title: 'Circular Seating (Facing Inward/Outward)' },
        { id: 'govt-r4-t3', title: 'Floor-Based & Day-Month Scheduling Puzzles' }
      ]
    },
    {
      id: 'govt-reas-ch5',
      title: 'Non-Verbal Reasoning & Series',
      topics: [
        { id: 'govt-r5-t1', title: 'Number Series, Missing Numbers & Pattern Recognition' },
        { id: 'govt-r5-t2', title: 'Mirror Images, Water Images & Paper Folding' },
        { id: 'govt-r5-t3', title: 'Embedded Figures, Cube-Dice Unfolding & Matrix' }
      ]
    }
  ],

  ga: [
    {
      id: 'govt-ga-ch1',
      title: 'Indian Polity & Constitution',
      topics: [
        { id: 'govt-ga1-t1', title: 'Making of Constitution, Preamble & Salient Features' },
        { id: 'govt-ga1-t2', title: 'Fundamental Rights (Art 12-35), DPSP & Fundamental Duties' },
        { id: 'govt-ga1-t3', title: 'President, Prime Minister, Parliament & Supreme Court' },
        { id: 'govt-ga1-t4', title: 'Constitutional Bodies (CAG, EC, UPSC, Finance Commission)' }
      ]
    },
    {
      id: 'govt-ga-ch2',
      title: 'Indian History & Freedom Struggle',
      topics: [
        { id: 'govt-ga2-t1', title: 'Ancient & Medieval: Indus Valley, Maurya, Gupta, Mughal Dynasties' },
        { id: 'govt-ga2-t2', title: 'Modern History: British Expansion, Revolt of 1857 & Social Reforms' },
        { id: 'govt-ga2-t3', title: 'Indian National Movement: Gandhian Era (1915-1947) & Important Acts' }
      ]
    },
    {
      id: 'govt-ga-ch3',
      title: 'Physical & Indian Geography',
      topics: [
        { id: 'govt-ga3-t1', title: 'Solar System, Earth Layers, Latitudes, Longitudes & Time Zones' },
        { id: 'govt-ga3-t2', title: 'Indian Geography: Himalayas, River Drainage Systems & Monsoons' },
        { id: 'govt-ga3-t3', title: 'National Parks, Wildlife Sanctuaries & Ramsar Wetland Sites' }
      ]
    },
    {
      id: 'govt-ga-ch4',
      title: 'Indian Economy & General Science',
      topics: [
        { id: 'govt-ga4-t1', title: 'National Income, GDP/GNP, Inflation & Monetary Policy (RBI)' },
        { id: 'govt-ga4-t2', title: 'Union Budget, GST, Fiscal Deficit & Economic Survey Key Terms' },
        { id: 'govt-ga4-t3', title: 'General Science: Physics, Chemistry & Biology Core Facts for Exams' }
      ]
    }
  ],

  eng: [
    {
      id: 'govt-eng-ch1',
      title: 'Grammar Fundamentals & Error Spotting',
      topics: [
        { id: 'govt-e1-t1', title: 'Subject-Verb Agreement Rules & Tricky Exceptions' },
        { id: 'govt-e1-t2', title: 'Tenses, Conditionals & Subjunctive Mood' },
        { id: 'govt-e1-t3', title: 'Prepositions, Phrasal Verbs & Fixed Preposition Lists' }
      ]
    },
    {
      id: 'govt-eng-ch2',
      title: 'Vocabulary: Synonyms, Antonyms & Idioms',
      topics: [
        { id: 'govt-e2-t1', title: 'High-Frequency Exam Synonyms & Antonyms (Root Word Method)' },
        { id: 'govt-e2-t2', title: 'One Word Substitutions (Scientific, Occupational & Personal)' },
        { id: 'govt-e2-t3', title: 'Popular Idioms & Phrases with Real Usage in Sentences' }
      ]
    },
    {
      id: 'govt-eng-ch3',
      title: 'Reading Comprehension & Cloze Test',
      topics: [
        { id: 'govt-e3-t1', title: 'Cloze Test Elimination Strategies & Context Clues' },
        { id: 'govt-e3-t2', title: 'Sentence Rearrangement (Para Jumbles) Mandatory Pairs Method' },
        { id: 'govt-e3-t3', title: 'Reading Comprehension: Central Theme, Tone of Author & Direct Facts' }
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// CURRICULUM RESOLVER FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Returns subjects corresponding to the student's selected class or exam goal.
 */
export function getSubjectsForClass(examGoal: string): Subject[] {
  const g = (examGoal || '').toLowerCase();

  // 1. Engineering Competitive (JEE Mains, JEE Advanced)
  if (g.includes('jee')) {
    return [
      { id: 'phy', name: 'Physics', icon: Atom, badge: 'Mechanics, Electrodynamics & Modern', accentBg: 'bg-indigo-50 border-indigo-200', color: 'text-indigo-700' },
      { id: 'chem', name: 'Chemistry', icon: FlaskConical, badge: 'Physical, Organic & Inorganic', accentBg: 'bg-amber-50 border-amber-200', color: 'text-amber-700' },
      { id: 'math', name: 'Mathematics', icon: Calculator, badge: 'Calculus, Vectors & Coordinate', accentBg: 'bg-blue-50 border-blue-200', color: 'text-blue-700' }
    ];
  }

  // 2. Medical Competitive (NEET UG)
  if (g.includes('neet')) {
    return [
      { id: 'bio', name: 'Biology', icon: Dna, badge: 'High Yield Botany & Zoology', accentBg: 'bg-emerald-50 border-emerald-200', color: 'text-emerald-700' },
      { id: 'chem', name: 'Chemistry', icon: FlaskConical, badge: 'NCERT Core & Physical Numericals', accentBg: 'bg-amber-50 border-amber-200', color: 'text-amber-700' },
      { id: 'phy', name: 'Physics', icon: Atom, badge: 'Medical Physics & Optics', accentBg: 'bg-indigo-50 border-indigo-200', color: 'text-indigo-700' }
    ];
  }

  // 3. Government & Civil Services (SSC CGL, UPSC CSE, Banking, Railways)
  if (g.includes('ssc') || g.includes('upsc') || g.includes('govt') || g.includes('cgl') || g.includes('civil')) {
    return [
      { id: 'quant', name: 'Quantitative Aptitude', icon: Calculator, badge: 'Arithmetic & Advance Maths', accentBg: 'bg-blue-50 border-blue-200', color: 'text-blue-700' },
      { id: 'reasoning', name: 'Reasoning & Intelligence', icon: Brain, badge: 'Logic & Analytical Reasoning', accentBg: 'bg-purple-50 border-purple-200', color: 'text-purple-700' },
      { id: 'ga', name: 'General Awareness (GS)', icon: Landmark, badge: 'Polity, History, Geo & Science', accentBg: 'bg-amber-50 border-amber-200', color: 'text-amber-700' },
      { id: 'eng', name: 'English Comprehension', icon: BookOpen, badge: 'Grammar, Vocabulary & RC', accentBg: 'bg-rose-50 border-rose-200', color: 'text-rose-700' }
    ];
  }

  // 4. Senior Secondary (Class 11 & 12)
  if (g.includes('11') || g.includes('12')) {
    return [
      { id: 'phy', name: 'Physics', icon: Atom, badge: 'Numericals & Derivations', accentBg: 'bg-indigo-50 border-indigo-200', color: 'text-indigo-700' },
      { id: 'chem', name: 'Chemistry', icon: FlaskConical, badge: 'Reactions & Mechanisms', accentBg: 'bg-amber-50 border-amber-200', color: 'text-amber-700' },
      { id: 'math', name: 'Mathematics', icon: Calculator, badge: 'Calculus & Formulas', accentBg: 'bg-blue-50 border-blue-200', color: 'text-blue-700' },
      { id: 'bio', name: 'Biology', icon: Dna, badge: 'Diagrams & High Yield', accentBg: 'bg-emerald-50 border-emerald-200', color: 'text-emerald-700' },
      { id: 'eng', name: 'English Core', icon: BookOpen, badge: 'Literature & Extracts', accentBg: 'bg-rose-50 border-rose-200', color: 'text-rose-700' }
    ];
  }

  // 5. Secondary School (Class 9 & 10)
  return [
    { id: 'sci', name: 'Science', icon: FlaskConical, badge: 'High Yield NCERT', accentBg: 'bg-emerald-50 border-emerald-200', color: 'text-emerald-700' },
    { id: 'math', name: 'Mathematics', icon: Calculator, badge: 'Core Marks', accentBg: 'bg-blue-50 border-blue-200', color: 'text-blue-700' },
    { id: 'sst', name: 'Social Science', icon: Globe, badge: 'History & Maps', accentBg: 'bg-amber-50 border-amber-200', color: 'text-amber-700' },
    { id: 'eng', name: 'English', icon: BookOpen, badge: 'Literature & Grammar', accentBg: 'bg-rose-50 border-rose-200', color: 'text-rose-700' }
  ];
}

/**
 * Returns authentic chapters for the given class/exam and subject.
 */
export function getCurriculumForClass(examGoal: string, subjectId: string): Chapter[] {
  const g = (examGoal || '').toLowerCase();
  const sub = (subjectId || '').toLowerCase();

  // 1. Government Exams
  if (g.includes('ssc') || g.includes('upsc') || g.includes('govt') || g.includes('cgl') || g.includes('civil')) {
    if (sub.includes('quant') || sub.includes('math') || sub.includes('aptitude')) return GOVT_CURRICULUM.quant || [];
    if (sub.includes('reas') || sub.includes('logic') || sub.includes('intel')) return GOVT_CURRICULUM.reasoning || [];
    if (sub.includes('ga') || sub.includes('aware') || sub.includes('gs') || sub.includes('gk')) return GOVT_CURRICULUM.ga || [];
    if (sub.includes('eng')) return GOVT_CURRICULUM.eng || [];
    const firstKey = Object.keys(GOVT_CURRICULUM)[0];
    return GOVT_CURRICULUM[firstKey] || [];
  }

  // 2. Engineering (JEE Mains & JEE Advanced)
  if (g.includes('jee')) {
    const key = sub.includes('chem') ? 'chem' : sub.includes('math') ? 'math' : 'phy';
    const c12 = CLASS_12_CURRICULUM[key] || [];
    const c11 = CLASS_11_CURRICULUM[key] || [];
    return [...c12, ...c11];
  }

  // 3. Medical (NEET UG)
  if (g.includes('neet')) {
    const key = sub.includes('bio') ? 'bio' : sub.includes('chem') ? 'chem' : 'phy';
    const c12 = CLASS_12_CURRICULUM[key] || [];
    const c11 = CLASS_11_CURRICULUM[key] || [];
    return [...c12, ...c11];
  }

  // 4. Senior Secondary & Secondary NCERT
  let targetDB = CLASS_9_CURRICULUM;
  if (g.includes('12')) {
    targetDB = CLASS_12_CURRICULUM;
  } else if (g.includes('11')) {
    targetDB = CLASS_11_CURRICULUM;
  } else if (g.includes('10')) {
    targetDB = CLASS_10_CURRICULUM;
  } else {
    targetDB = CLASS_9_CURRICULUM;
  }

  // Match key by prefix or inclusion
  if (sub.includes('phy')) return targetDB.phy || [];
  if (sub.includes('chem')) return targetDB.chem || [];
  if (sub.includes('bio')) return targetDB.bio || [];
  if (sub.includes('math')) return targetDB.math || [];
  if (sub.includes('sst') || sub.includes('social')) return targetDB.sst || [];
  if (sub.includes('eng')) return targetDB.eng || [];
  if (sub.includes('sci')) return targetDB.sci || targetDB.phy || [];

  // Fallback to first available subject in target database
  const firstKey = Object.keys(targetDB)[0];
  return targetDB[firstKey] || [];
}

export interface ResolvedTopicMetadata {
  topicId: string;
  topicTitle: string;
  chapterId: string;
  chapterTitle: string;
  subjectId: string;
  subjectName: string;
  classLevel: string;
}

const SUBJECT_NAME_MAP: Record<string, string> = {
  phy: 'Physics',
  chem: 'Chemistry',
  math: 'Mathematics',
  bio: 'Biology',
  sci: 'Science',
  sst: 'Social Science',
  eng: 'English',
  quant: 'Quantitative Aptitude',
  reasoning: 'General Intelligence & Reasoning',
  ga: 'General Awareness'
};

/**
 * Searches all class curriculums for a topic by ID (e.g. 'c11-p1-t1' or 'govt-q1-t1').
 * Crucial for F5 page refreshes and direct URL navigation.
 */
export function findTopicMetadata(topicId: string): ResolvedTopicMetadata | null {
  if (!topicId) return null;
  const tid = topicId.toLowerCase().trim();

  const classDatabases: { classLevel: string; data: Record<string, Chapter[]> }[] = [
    { classLevel: 'Govt Exams', data: GOVT_CURRICULUM },
    { classLevel: 'Class 12', data: CLASS_12_CURRICULUM },
    { classLevel: 'Class 11', data: CLASS_11_CURRICULUM },
    { classLevel: 'Class 10', data: CLASS_10_CURRICULUM },
    { classLevel: 'Class 9', data: CLASS_9_CURRICULUM },
  ];

  for (const { classLevel, data } of classDatabases) {
    for (const [subKey, chapters] of Object.entries(data)) {
      for (const ch of chapters) {
        if (ch.topics) {
          const matched = ch.topics.find(t => t.id.toLowerCase() === tid);
          if (matched) {
            return {
              topicId: matched.id,
              topicTitle: matched.title,
              chapterId: ch.id,
              chapterTitle: ch.title,
              subjectId: subKey,
              subjectName: SUBJECT_NAME_MAP[subKey] || subKey.toUpperCase(),
              classLevel
            };
          }
        }
      }
    }
  }

  return null;
}

