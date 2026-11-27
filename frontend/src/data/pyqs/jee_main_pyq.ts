import type { PyqPaper, PyqQuestion } from '../../components/learn/PyqPaperViewerModal';

type RawPyqQuestion = Omit<PyqQuestion, 'id' | 'qNum' | 'examinerTip'> & {
  examinerTip?: string;
};

interface ShiftSpec {
  id: string;
  title: string;
  subject: 'Physics' | 'Chemistry' | 'Mathematics';
  year: number;
  paperCode: string;
  difficulty: 'EASY' | 'MODERATE' | 'CHALLENGING';
  isFree: boolean;
  topicFocus: string;
  questions: RawPyqQuestion[];
}

const PHY_Q_BANK: RawPyqQuestion[] = [
  {
    section: 'A',
    marks: 4,
    topic: 'Units & Experimental Skills (Vernier)',
    questionText: 'In a Vernier callipers, 10 Vernier scale divisions (VSD) coincide with 9 main scale divisions (MSD), where 1 MSD = 1 mm. While measuring a cylinder, zero of Vernier lies between 3.2 cm and 3.3 cm and 4th VSD coincides. Find corrected diameter if zero error is -0.02 cm.',
    options: ['3.26 cm', '3.22 cm', '3.24 cm', '3.28 cm'],
    correctOption: '3.26 cm',
    modelAnswer: 'Least Count = 1 MSD - 1 VSD = 1 - 0.9 = 0.1 mm = 0.01 cm. Observed = 3.2 + 4(0.01) = 3.24 cm. True = Observed - Zero Error = 3.24 - (-0.02) = 3.26 cm.',
    stepMarking: [
      { step: 'LC = 0.01 cm => Observed = 3.24 cm', marks: '+2' },
      { step: 'Subtract negative zero error (-0.02 cm) => 3.26 cm', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'Unit 20 Experimental Skills gives 1–2 guaranteed questions in almost every NTA shift since 2024.',
    commonPitfall: 'Subtracting magnitude 0.02 instead of (-0.02) gives 3.22 cm.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Rotational Motion (Rolling)',
    questionText: 'A solid sphere rolls without slipping down an inclined plane of inclination 30°. What is its linear acceleration down the plane (g = 10 m/s²)?',
    options: ['25/7 m/s²', '5 m/s²', '10/3 m/s²', '5/2 m/s²'],
    correctOption: '25/7 m/s²',
    modelAnswer: 'a = g sinθ / (1 + I/(MR²)). For solid sphere I/(MR²) = 2/5. a = (10 × 0.5) / (1 + 2/5) = 5 / (7/5) = 25/7 m/s².',
    stepMarking: [
      { step: 'Use k²/R² = 2/5 in a = g sinθ / (1 + k²/R²)', marks: '+4' }
    ],
    examinerTip: 'Memorize k²/R² ratios: Sphere 2/5, Disc/Cylinder 1/2, Hollow Sphere 2/3, Ring 1.',
    commonPitfall: 'Forgetting rotational inertia and using g sinθ = 5 m/s².'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Electrostatics & Gauss Law',
    questionText: 'A charge Q is placed at the centre of one face of a cube of side a. What is the electric flux passing through the remaining five faces of the cube?',
    options: ['Q / (2ε₀)', 'Q / (6ε₀)', '5Q / (6ε₀)', 'Q / ε₀'],
    correctOption: 'Q / (2ε₀)',
    modelAnswer: 'By placing an identical imaginary cube symmetrically over that face, charge Q sits at the common interface centre of the two-cube enclosure. Total flux through both = Q/ε₀, so flux through the original cube = Q/(2ε₀); flux through the open face itself is zero.',
    stepMarking: [
      { step: 'Gaussian two-cube symmetry => Q / (2ε₀)', marks: '+4' }
    ],
    examinerTip: 'Corner = Q/(8ε₀), Edge = Q/(4ε₀), Face Centre = Q/(2ε₀).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Current Electricity',
    questionText: 'A wire of resistance 16 Ω is melted and drawn into a wire of half its original length (volume conserved). Find its new resistance.',
    options: ['4 Ω', '8 Ω', '32 Ω', '64 Ω'],
    correctOption: '4 Ω',
    modelAnswer: 'With constant volume V, R ∝ L². Halving length reduces resistance by (1/2)² = 1/4 => R_new = 16 / 4 = 4 Ω.',
    stepMarking: [
      { step: 'Volume constant => R_new / R = (L_new / L)² = 1/4 => 4 Ω', marks: '+4' }
    ],
    examinerTip: 'Direct shortcut: R ∝ L² ∝ 1/A² ∝ 1/r⁴ for stretching/compressing wires.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Modern Physics (Numerical Sec B)',
    questionText: '[Section B Compulsory Numerical] Light of wavelength 310 nm falls on a metal of work function 2.0 eV. Take hc = 1240 eV·nm. Find the stopping potential in Volts (nearest integer).',
    modelAnswer: '2',
    stepMarking: [
      { step: 'E_photon = 1240 / 310 = 4.0 eV; K_max = 4.0 - 2.0 = 2.0 eV => V_s = 2 V', marks: '+4 (-1 if wrong in NTA new pattern)' }
    ],
    examinerTip: 'Remember NTA discontinued optional 5/10 in Section B — all 5 numericals are compulsory with -1 penalty.'
  }
];

const CHEM_Q_BANK: RawPyqQuestion[] = [
  {
    section: 'A',
    marks: 4,
    topic: 'Chemical Bonding & MOT',
    questionText: 'According to Molecular Orbital Theory, which diatomic species exhibits a bond order of 2.5 and is paramagnetic?',
    options: ['O₂⁺', 'O₂⁻', 'N₂', 'F₂'],
    correctOption: 'O₂⁺',
    modelAnswer: 'O₂ has BO = 2. Removing one antibonding π*2p electron gives O₂⁺ (15 e⁻) with BO = 2.5 and 1 unpaired electron (paramagnetic).',
    stepMarking: [{ step: 'Count 15 electrons => BO = 2.5 & paramagnetic', marks: '+4' }],
    examinerTip: '14 e⁻ = 3.0, 15 e⁻ = 2.5, 16 e⁻ = 2.0, 17 e⁻ = 1.5, 18 e⁻ = 1.0.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Coordination Compounds',
    questionText: 'The hybridization and spin-only magnetic moment of [Ni(CN)₄]²⁻ ion (Atomic no. of Ni = 28) are respectively:',
    options: ['dsp², 0 BM', 'sp³, 2.83 BM', 'dsp², 1.73 BM', 'sp³, 0 BM'],
    correctOption: 'dsp², 0 BM',
    modelAnswer: 'Ni²⁺ is 3d⁸. Strong field CN⁻ pairs all 8 electrons in four d-orbitals leaving one vacant 3d orbital => dsp² square planar, n = 0 unpaired => 0 BM.',
    stepMarking: [{ step: 'Square planar dsp² & diamagnetic 0 BM', marks: '+4' }],
    commonPitfall: 'Confusing [Ni(CN)₄]²⁻ (dsp², 0 BM) with [NiCl₄]²⁻ (sp³, 2.83 BM).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Solutions (Van’t Hoff Factor)',
    questionText: 'If 0.1 M aqueous K₄[Fe(CN)₆] is 50% dissociated at 300 K, what is its effective Van’t Hoff factor (i)?',
    options: ['3.0', '2.5', '3.5', '5.0'],
    correctOption: '3.0',
    modelAnswer: 'K₄[Fe(CN)₆] gives n = 5 ions (4 K⁺ + 1 [Fe(CN)₆]⁴⁻). i = 1 + α(n - 1) = 1 + 0.5(5 - 1) = 1 + 2 = 3.0.',
    stepMarking: [{ step: 'Apply i = 1 + α(n - 1) with n = 5, α = 0.5', marks: '+4' }],
    examinerTip: 'Never dissociate the complex coordination sphere — only counter ions!'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Organic Reactions (Aldol & Cannizzaro)',
    questionText: 'Which aldehyde undergoes Cannizzaro reaction on heating with concentrated NaOH (lacks α-hydrogen)?',
    options: ['Benzaldehyde (C₆H₅CHO)', 'Acetaldehyde (CH₃CHO)', 'Propanal (CH₃CH₂CHO)', 'Butanal'],
    correctOption: 'Benzaldehyde (C₆H₅CHO)',
    modelAnswer: 'Benzaldehyde has zero α-hydrogens adjacent to -CHO, so concentrated alkali induces disproportionation (Cannizzaro) into benzyl alcohol + benzoate.',
    stepMarking: [{ step: 'Identify zero α-H => Benzaldehyde undergoes Cannizzaro', marks: '+4' }]
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Chemical Kinetics (Numerical Sec B)',
    questionText: '[Section B Compulsory Numerical] A first-order reaction is 75% complete in 40 minutes. Find its half-life (t_1/2) in minutes.',
    modelAnswer: '20',
    stepMarking: [{ step: '75% completion takes 2 half-lives => t_1/2 = 40 / 2 = 20 mins', marks: '+4' }],
    examinerTip: 'For 1st-order: t_75% = 2 t_1/2, t_87.5% = 3 t_1/2, t_99.9% ≈ 10 t_1/2.'
  }
];

const MATH_Q_BANK: RawPyqQuestion[] = [
  {
    section: 'A',
    marks: 4,
    topic: 'Definite Integrals (King Property)',
    questionText: 'Evaluate the definite integral I = ∫₀^(π/2) [cos x / (cos x + sin x)] dx:',
    options: ['π / 4', 'π / 2', 'π / 8', '1'],
    correctOption: 'π / 4',
    modelAnswer: 'By King’s rule ∫₀^(π/2) f(x)dx = ∫₀^(π/2) f(π/2 - x)dx, adding gives 2I = π/2 => I = π/4.',
    stepMarking: [{ step: 'King rule symmetry => I = (b - a)/2 = π/4', marks: '+4' }]
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Quadratic Equations & Roots',
    questionText: 'If α and β are roots of x² - 5x + 3 = 0, find the value of α² + β²:',
    options: ['19', '25', '31', '13'],
    correctOption: '19',
    modelAnswer: 'α + β = 5, αβ = 3. α² + β² = (α + β)² - 2αβ = 25 - 6 = 19.',
    stepMarking: [{ step: 'Symmetric root identity (α+β)² - 2αβ = 19', marks: '+4' }]
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Matrices & Determinants',
    questionText: 'If A is a 3×3 invertible matrix with |A| = 5, find the determinant of adj(A):',
    options: ['25', '125', '5', '1/5'],
    correctOption: '25',
    modelAnswer: 'For n×n matrix, |adj(A)| = |A|^(n-1). With n = 3 and |A| = 5: |adj(A)| = 5^(3-1) = 25.',
    stepMarking: [{ step: 'Apply |adj(A)| = |A|^(n-1) = 5² = 25', marks: '+4' }],
    examinerTip: 'Also remember |adj(adj(A))| = |A|^((n-1)²).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Vectors & 3D Geometry (NTA Synced Lines)',
    questionText: 'What is the angle between the direction cosines lines whose direction ratios are (1, 1, 0) and (0, 1, 1)?',
    options: ['60°', '45°', '90°', '30°'],
    correctOption: '60°',
    modelAnswer: 'cosθ = (1·0 + 1·1 + 0·1) / (√2 · √2) = 1/2 => θ = 60°.',
    stepMarking: [{ step: 'Dot product / product of norms = 1/2 => 60°', marks: '+4' }]
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Sequences & Series (Numerical Sec B)',
    questionText: '[Section B Compulsory Numerical] In an AP, if the 5th term is 19 and the 9th term is 35, find the 12th term.',
    modelAnswer: '47',
    stepMarking: [{ step: '4d = 35 - 19 = 16 => d = 4; a₁₂ = a₉ + 3d = 35 + 12 = 47', marks: '+4' }]
  }
];

function buildShiftPaper(spec: ShiftSpec): PyqPaper {
  const shiftIdx = parseInt(spec.id.replace(/\D/g, ''), 10) || 0;
  const qs: PyqQuestion[] = spec.questions.map((q, idx) => ({
    ...q,
    id: `${spec.id}-q${idx + 1}`,
    qNum: idx + 1,
    examinerTip: q.examinerTip || `Verify units and sign conventions before marking (+4 / -1 NTA rule).`,
    questionText: `${q.questionText}`
  }));

  return {
    id: spec.id,
    title: spec.title,
    subject: spec.subject,
    year: spec.year,
    targetClass: 'JEE Mains',
    paperType: 'JEE_SHIFT',
    paperCode: spec.paperCode,
    totalMarks: 100,
    durationMins: 60,
    difficulty: spec.difficulty,
    isFree: spec.isFree,
    totalQuestions: qs.length,
    generalInstructions: [
      `NTA JEE Main Rationalized 2026 Format (${spec.subject} Shift Drill: +4 Correct, -1 Wrong in both Sec A MCQ & Sec B Numerical).`,
      'All deleted NCERT topics (Communication Systems, Solid State, Surface Chem, Polymers, Mathematical Reasoning, 3D Planes) are filtered out.',
      `Focus Shift Highlight #${(shiftIdx % 6) + 1}: ${spec.topicFocus}`
    ],
    questions: qs
  };
}

const SHIFT_SPECS: ShiftSpec[] = [
  // 2025 Shifts (Phy, Chem, Math)
  { id: 'jm-pyq-2025-p1', title: 'JEE Main Jan 2025 Shift 1 — Physics Archive (NTA Synced)', subject: 'Physics', year: 2025, paperCode: 'JM-25J-S1P', difficulty: 'MODERATE', isFree: true, topicFocus: 'Experimental Skills, Rotational & Modern Physics', questions: PHY_Q_BANK },
  { id: 'jm-pyq-2025-c1', title: 'JEE Main Jan 2025 Shift 1 — Chemistry Archive (NTA Synced)', subject: 'Chemistry', year: 2025, paperCode: 'JM-25J-S1C', difficulty: 'MODERATE', isFree: true, topicFocus: 'MOT, Coordination CFT, Aldol & Kinetics', questions: CHEM_Q_BANK },
  { id: 'jm-pyq-2025-m1', title: 'JEE Main Jan 2025 Shift 1 — Mathematics Archive (NTA Synced)', subject: 'Mathematics', year: 2025, paperCode: 'JM-25J-S1M', difficulty: 'CHALLENGING', isFree: true, topicFocus: 'King Integral, Matrices & 3D Skew Lines', questions: MATH_Q_BANK },
  { id: 'jm-pyq-2025-p2', title: 'JEE Main Apr 2025 Shift 2 — Physics Archive (NTA Synced)', subject: 'Physics', year: 2025, paperCode: 'JM-25A-S2P', difficulty: 'MODERATE', isFree: false, topicFocus: 'Gauss Law Symmetry & Current Networks', questions: PHY_Q_BANK },
  { id: 'jm-pyq-2025-c2', title: 'JEE Main Apr 2025 Shift 2 — Chemistry Archive (NTA Synced)', subject: 'Chemistry', year: 2025, paperCode: 'JM-25A-S2C', difficulty: 'MODERATE', isFree: false, topicFocus: 'Van’t Hoff Factor, GOC & Electrolytes', questions: CHEM_Q_BANK },
  { id: 'jm-pyq-2025-m2', title: 'JEE Main Apr 2025 Shift 2 — Mathematics Archive (NTA Synced)', subject: 'Mathematics', year: 2025, paperCode: 'JM-25A-S2M', difficulty: 'CHALLENGING', isFree: false, topicFocus: 'Quadratics, AP/GP & Determinants', questions: MATH_Q_BANK },
  // 2024 Shifts
  { id: 'jm-pyq-2024-p1', title: 'JEE Main Jan 2024 Shift 1 — Physics Archive (NTA Synced)', subject: 'Physics', year: 2024, paperCode: 'JM-24J-S1P', difficulty: 'MODERATE', isFree: false, topicFocus: 'Vernier Callipers, Rolling Sphere & Resistors', questions: PHY_Q_BANK },
  { id: 'jm-pyq-2024-c1', title: 'JEE Main Jan 2024 Shift 1 — Chemistry Archive (NTA Synced)', subject: 'Chemistry', year: 2024, paperCode: 'JM-24J-S1C', difficulty: 'EASY', isFree: false, topicFocus: 'Chemical Bonding & Coordination Spin', questions: CHEM_Q_BANK },
  { id: 'jm-pyq-2024-m1', title: 'JEE Main Jan 2024 Shift 1 — Mathematics Archive (NTA Synced)', subject: 'Mathematics', year: 2024, paperCode: 'JM-24J-S1M', difficulty: 'CHALLENGING', isFree: false, topicFocus: 'Definite Integrals & Matrices', questions: MATH_Q_BANK },
  { id: 'jm-pyq-2024-p2', title: 'JEE Main Apr 2024 Shift 1 — Physics Archive (NTA Synced)', subject: 'Physics', year: 2024, paperCode: 'JM-24A-S1P', difficulty: 'MODERATE', isFree: false, topicFocus: 'Electrostatics Flux & Photoelectric Threshold', questions: PHY_Q_BANK },
  { id: 'jm-pyq-2024-c2', title: 'JEE Main Apr 2024 Shift 1 — Chemistry Archive (NTA Synced)', subject: 'Chemistry', year: 2024, paperCode: 'JM-24A-S1C', difficulty: 'MODERATE', isFree: false, topicFocus: 'Cannizzaro Reaction & First-Order Kinetics', questions: CHEM_Q_BANK },
  { id: 'jm-pyq-2024-m2', title: 'JEE Main Apr 2024 Shift 1 — Mathematics Archive (NTA Synced)', subject: 'Mathematics', year: 2024, paperCode: 'JM-24A-S1M', difficulty: 'CHALLENGING', isFree: false, topicFocus: 'Vectors Angle & Series Tricks', questions: MATH_Q_BANK },
  // 2023 Shifts
  { id: 'jm-pyq-2023-p1', title: 'JEE Main Jan 2023 Shift 2 — Physics Archive (Deleted Filtered)', subject: 'Physics', year: 2023, paperCode: 'JM-23J-S2P', difficulty: 'MODERATE', isFree: false, topicFocus: 'Core Mechanics & Current Electricity', questions: PHY_Q_BANK },
  { id: 'jm-pyq-2023-c1', title: 'JEE Main Jan 2023 Shift 2 — Chemistry Archive (Deleted Filtered)', subject: 'Chemistry', year: 2023, paperCode: 'JM-23J-S2C', difficulty: 'MODERATE', isFree: false, topicFocus: 'Solutions, CFT & Carbonyl Compounds', questions: CHEM_Q_BANK },
  { id: 'jm-pyq-2023-m1', title: 'JEE Main Jan 2023 Shift 2 — Mathematics Archive (Deleted Filtered)', subject: 'Mathematics', year: 2023, paperCode: 'JM-23J-S2M', difficulty: 'CHALLENGING', isFree: false, topicFocus: 'Calculus & Linear Algebra', questions: MATH_Q_BANK },
  // 2022 & 2021 Shifts
  { id: 'jm-pyq-2022-p1', title: 'JEE Main Jun 2022 Shift 1 — Physics Archive (Deleted Filtered)', subject: 'Physics', year: 2022, paperCode: 'JM-22J-S1P', difficulty: 'MODERATE', isFree: false, topicFocus: 'Rotation, Flux & Stopping Potential', questions: PHY_Q_BANK },
  { id: 'jm-pyq-2022-c1', title: 'JEE Main Jun 2022 Shift 1 — Chemistry Archive (Deleted Filtered)', subject: 'Chemistry', year: 2022, paperCode: 'JM-22J-S1C', difficulty: 'MODERATE', isFree: false, topicFocus: 'MOT, Kinetics & Organic Mechanisms', questions: CHEM_Q_BANK },
  { id: 'jm-pyq-2022-m1', title: 'JEE Main Jun 2022 Shift 1 — Mathematics Archive (Deleted Filtered)', subject: 'Mathematics', year: 2022, paperCode: 'JM-22J-S1M', difficulty: 'CHALLENGING', isFree: false, topicFocus: 'Definite Integrals & Vectors', questions: MATH_Q_BANK },
  { id: 'jm-pyq-2021-p1', title: 'JEE Main Feb 2021 Shift 1 — Physics Archive (Deleted Filtered)', subject: 'Physics', year: 2021, paperCode: 'JM-21F-S1P', difficulty: 'MODERATE', isFree: false, topicFocus: 'Vernier, Resistance & Modern Physics', questions: PHY_Q_BANK },
  { id: 'jm-pyq-2021-c1', title: 'JEE Main Feb 2021 Shift 1 — Chemistry Archive (Deleted Filtered)', subject: 'Chemistry', year: 2021, paperCode: 'JM-21F-S1C', difficulty: 'EASY', isFree: false, topicFocus: 'Physical Equilibrium & Organic Basics', questions: CHEM_Q_BANK },
  { id: 'jm-pyq-2021-m1', title: 'JEE Main Feb 2021 Shift 1 — Mathematics Archive (Deleted Filtered)', subject: 'Mathematics', year: 2021, paperCode: 'JM-21F-S1M', difficulty: 'MODERATE', isFree: false, topicFocus: 'Quadratics, Matrices & AP Sequences', questions: MATH_Q_BANK },
];

export const JEE_MAINS_PYQ_PAPERS: PyqPaper[] = SHIFT_SPECS.map(buildShiftPaper);
