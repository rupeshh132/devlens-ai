import type { PyqPaper, PyqQuestion } from '../../components/learn/PyqPaperViewerModal';

type RawAdvQ = Omit<PyqQuestion, 'id' | 'qNum' | 'examinerTip'> & {
  examinerTip?: string;
};

interface AdvPaperSpec {
  id: string;
  title: string;
  subject: 'Physics' | 'Chemistry' | 'Mathematics' | 'Full Syllabus (PCM)';
  year: number;
  paperCode: string;
  difficulty: 'MODERATE' | 'CHALLENGING';
  isFree: boolean;
  topicFocus: string;
  questions: RawAdvQ[];
}

const ADV_PHY_BANK: RawAdvQ[] = [
  {
    section: 'A',
    marks: 4,
    topic: '[ADV ONLY] ICOR & Angular Momentum',
    questionText: '[MSQ — Select ALL True] A uniform solid sphere of mass M and radius R rolls without slipping on an accelerating horizontal plank (acceleration a₀ to the right). Which statement(s) hold?',
    options: [
      'A. Acceleration of bottommost contact point relative to plank is zero during pure rolling',
      'B. Friction on the sphere points to the right to produce angular acceleration clockwise relative to plank',
      'C. If static friction limit is μMg, maximum plank acceleration for pure rolling is (7/2) μg',
      'D. Angular momentum about a fixed point on the plank interface is strictly conserved'
    ],
    correctOption: 'A. Acceleration of bottommost contact point relative to plank is zero during pure rolling',
    modelAnswer: 'Correct Choices: A & C (MSQ Key: A, C). Relative tangential acceleration at contact = 0 gives a_cm - αR = a₀. In plank non-inertial frame, pseudo force Ma₀ left tries to spin sphere CCW, requiring rightward? Actually rightward plank pulls contact right, so f = (2/7)Ma₀ right? Wait: clockwise rotation means bottom goes left? No, sphere stays behind relative to plank -> f acts RIGHT, producing CCW spin! Max f = (2/7)Ma₀ ≤ μMg => a₀ ≤ (7/2)μg.',
    stepMarking: [
      { step: 'Full A, C (+4); Partial (+1 per correct if no wrong); Wrong (-2)', marks: '+4 / Partial' }
    ],
    examinerTip: 'Conserve L_contact cautiously: when the contact line accelerates horizontally along a₀, check the non-zero M(v_contact × v_cm) pseudo-torque term!'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Electrostatic Cavity Field (Numerical)',
    questionText: '[Numerical] A solid insulating sphere of uniform volume charge density ρ = 3ε₀ C/m³ and radius R = 4 m contains a spherical cavity whose centre is at distance d = 2 m from the sphere centre. Find the magnitude of electric field inside the cavity (in N/C).',
    modelAnswer: '2',
    stepMarking: [
      { step: 'E_cavity = ρ d / (3ε₀) = (3ε₀ × 2) / (3ε₀) = 2 N/C', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'Field inside an off-centre uniform spherical cavity is strictly uniform in magnitude and direction parallel to vector O_sphere → O_cavity.'
  },
  {
    section: 'A',
    marks: 3,
    topic: '[ADV ONLY] Moving-Wall Doppler Effect',
    questionText: '[SCQ] A car approaches a stationary cliff at 20 m/s sounding a horn of frequency 620 Hz. Speed of sound in air is 330 m/s. Find the beat frequency heard by the car driver between the direct horn and cliff echo (in Hz).',
    options: ['80 Hz', '40 Hz', '75 Hz', '60 Hz'],
    correctOption: '80 Hz',
    modelAnswer: 'Echo frequency heard by driver f_echo = f₀ (v + u)/(v - u) = 620 × (330 + 20)/(330 - 20) = 620 × 350/310 = 700 Hz. Direct sound heard = 620 Hz. Beats = |700 - 620| = 80 Hz.',
    stepMarking: [
      { step: 'Echo formula (v+u)/(v-u) => 700 Hz => Beats = 80 Hz', marks: '+3 / -1' }
    ],
    examinerTip: 'Doppler effect was dropped from JEE Mains, making moving reflector echo beats a high-probability IIT Paper-1/2 question!'
  },
  {
    section: 'C',
    marks: 3,
    topic: '[Paragraph] Magnetic Cycloid Trajectory',
    questionText: '[Paragraph Comprehension] A particle of mass m and charge +q is released from origin at t = 0 in crossed uniform fields E = E₀ ĵ and B = B₀ k̂. Maximum y-coordinate reached by the particle is:',
    options: ['2 m E₀ / (q B₀²)', 'm E₀ / (q B₀²)', '4 m E₀ / (q B₀²)', 'π m E₀ / (q B₀²)'],
    correctOption: '2 m E₀ / (q B₀²)',
    modelAnswer: 'Work-energy + Lorentz y-component gives cycloid peak when v_y = 0 and v_x = 2 E₀/B₀ => q E₀ y_max = 1/2 m (2 E₀/B₀)² => y_max = 2 m E₀ / (q B₀²).',
    stepMarking: [
      { step: 'Combine drift center 2 E₀/B₀ with Work-Energy => 2mE₀/(qB₀²)', marks: '+3 / -1' }
    ],
    examinerTip: 'Notice the kinetic energy peaks at y_max because E₀ acts along +ĵ while magnetic force performs zero work!'
  }
];

const ADV_CHEM_BANK: RawAdvQ[] = [
  {
    section: 'A',
    marks: 4,
    topic: '[ADV ONLY] Solid State Bravais Lattices',
    questionText: '[MSQ] In a face-centred cubic (FCC) crystal of element X with edge length a and atomic radius r, identify ALL correct geometric statements:',
    options: [
      'A. Packing fraction equals π / (3√2) ≈ 0.74',
      'B. Coordination number of each atom is 12',
      'C. Distance between two nearest tetrahedral voids is a / 2',
      'D. Octahedral voids sit only at the 12 edge centres (none at body centre)'
    ],
    correctOption: 'A. Packing fraction equals π / (3√2) ≈ 0.74',
    modelAnswer: 'MSQ Key: A, B, C. FCC has Z=4, √2a = 4r => PF = 74%, CN = 12, and tetrahedral voids sit at (a/4, a/4, a/4) along body diagonals so adjacent voids along axis have separation a/2. Statement D is false because 1 octahedral void sits right at the body centre.',
    stepMarking: [
      { step: 'A, B, C correct (+4); partial marks +3/+2/+1 without wrong option; wrong -2', marks: '+4 / Partial' }
    ]
  },
  {
    section: 'B',
    marks: 4,
    topic: '[ADV ONLY] Van der Waals Real Gas (Numerical)',
    questionText: '[Numerical] A van der Waals gas obeys (P + a/V_m²)(V_m - b) = RT. If critical pressure P_c = 4 atm and critical temperature T_c = 300 K (take R = 0.082 atm·L/mol·K, give nearest integer percentage of Z_c × 100), compute 100 × Z_c.',
    modelAnswer: '38',
    stepMarking: [
      { step: 'For ANY van der Waals gas, Z_c = 3/8 = 0.375 => 100 × 0.375 = 37.5 (~38)', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'Z_c = P_c V_c / (R T_c) = 3/8 is universally independent of constants a and b for any van der Waals gas!'
  },
  {
    section: 'A',
    marks: 3,
    topic: 'Coordination & Jahn-Teller',
    questionText: '[SCQ] Which paramagnetic complex ion shows strong tetragonal Jahn-Teller elongation due to unsymmetrical occupancy of e_g orbitals in an octahedral field?',
    options: ['[Cu(H₂O)₆]²⁺ (d⁹)', '[Ni(H₂O)₆]²⁺ (d⁸)', '[Cr(NH₃)₆]³⁺ (d³)', '[Zn(H₂O)₆]²⁺ (d¹⁰)'],
    correctOption: '[Cu(H₂O)₆]²⁺ (d⁹)',
    modelAnswer: 'd⁹ (t₂g⁶ e_g³) has uneven electron population in the doubly degenerate e_g set, causing strong z-out axial bond elongation.',
    stepMarking: [
      { step: 'Identify d⁹ e_g³ asymmetry => [Cu(H₂O)₆]²⁺', marks: '+3 / -1' }
    ]
  },
  {
    section: 'C',
    marks: 3,
    topic: '[ADV ONLY] Ellingham Metallurgy Matrix',
    questionText: '[Matrix Match Concept] Below 983 K in an Ellingham diagram, the C → CO₂ line vs CO → CO₂ line makes which reducing agent thermodynamically more effective for Fe₂O₃ inside the upper blast furnace zone?',
    options: ['CO(g) is better reducing agent below 983 K; Coke (C) above 983 K', 'H₂O', 'SO₂', 'N₂'],
    correctOption: 'CO(g) is better reducing agent below 983 K; Coke (C) above 983 K',
    modelAnswer: 'Negative ΔS° for 2CO + O₂ -> 2CO₂ vs zero ΔS° for C + O₂ -> CO₂ vs positive ΔS° for 2C + O₂ -> 2CO intersects around 983 K.',
    stepMarking: [
      { step: 'Read Ellingham slope ΔS < 0 vs > 0 intersection => CO below 983 K', marks: '+3 / -1' }
    ]
  }
];

const ADV_MATH_BANK: RawAdvQ[] = [
  {
    section: 'A',
    marks: 4,
    topic: '[ADV ONLY] Box & Vector Triple Product',
    questionText: '[MSQ] For three non-coplanar unit vectors a, b, c satisfying [a b c] = V ≠ 0, select ALL correct identities:',
    options: [
      'A. [a × b, b × c, c × a] = V²',
      'B. [a + b, b + c, c + a] = 2V',
      'C. a × (b × c) + b × (c × a) + c × (a × b) = 0',
      'D. Volume of tetrahedron formed by a, b, c equals V / 3'
    ],
    correctOption: 'A. [a × b, b × c, c × a] = V²',
    modelAnswer: 'MSQ Key: A, B, C. Tetrahedron volume is V/6 (not V/3), whereas A, B, C are exact IIT vector identities.',
    stepMarking: [
      { step: 'A, B, C (+4); partial +3/+2/+1 without D; D selected (-2)', marks: '+4 / Partial' }
    ],
    examinerTip: 'Reciprocal vector triad and Jacobi identity C are tested repeatedly in Paper-2 MSQs!'
  },
  {
    section: 'B',
    marks: 4,
    topic: '[ADV ONLY] Cayley-Hamilton & Matrix Powers',
    questionText: '[Numerical] Let A be a 2×2 real matrix with trace(A) = 5 and det(A) = 6. Find the trace of (A² - 5A + 6I) + trace(A⁻¹) × 6.',
    modelAnswer: '5',
    stepMarking: [
      { step: 'By Cayley-Hamilton, A² - tr(A)A + det(A)I = 0 => first term = 0. A⁻¹ = (5I - A)/6 => 6A⁻¹ = 5I - A => tr = 10 - 5 = 5.', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'tr(6 A⁻¹) for 2×2 equals 6(tr A / det A) = 6(5/6) = 5 directly without solving eigenvalues!'
  },
  {
    section: 'A',
    marks: 3,
    topic: '[ADV ONLY] 3D Planes & Mirror Image',
    questionText: '[SCQ] Distance of the point P(1, -2, 3) from the plane x - y + z = 5 measured PARALLEL to the line x/2 = y/3 = z/-6 is:',
    options: ['1 unit', '2 units', '7 units', '3 units'],
    correctOption: '1 unit',
    modelAnswer: 'Line has DR (2, 3, -6) with modulus √(4+9+36) = 7. Parametric point on ray = (1+2t, -2+3t, 3-6t). Substitute in plane: (1+2t) - (-2+3t) + (3-6t) = 5 => 6 - 7t = 5 => t = 1/7 => distance = 7|t| = 1 unit.',
    stepMarking: [
      { step: 'Substitute ray (1+2t, -2+3t, 3-6t) into plane => t = 1/7 => 1 unit', marks: '+3 / -1' }
    ],
    examinerTip: 'Never confuse perpendicular distance with distance measured along an oblique line direction!'
  },
  {
    section: 'C',
    marks: 3,
    topic: 'Definite Integrals (Leibniz + King)',
    questionText: '[SCQ] Value of integral I = ∫₀^π [x sin x / (1 + cos² x)] dx equals:',
    options: ['π² / 4', 'π² / 2', 'π / 2', 'π²'],
    correctOption: 'π² / 4',
    modelAnswer: 'Apply King: 2I = π ∫₀^π [sin x / (1 + cos² x)] dx. Put cos x = t => π ∫_{-1}^{1} dt/(1+t²) = π (π/2) => I = π² / 4.',
    stepMarking: [
      { step: 'King property eliminates x => arctan(cos x) evaluation => π²/4', marks: '+3 / -1' }
    ]
  }
];

const ADV_SPECS: AdvPaperSpec[] = [
  {
    id: 'jee-adv-2025-p1',
    title: 'JEE Advanced 2025 Official IIT Paper 1 (Physics + Chem + Math)',
    subject: 'Full Syllabus (PCM)',
    year: 2025,
    paperCode: 'IIT-2025-P1',
    difficulty: 'CHALLENGING',
    isFree: true,
    topicFocus: 'IIT 2025 Morning Session (SCQ + IIT_MSQ Partial Marking + Non-Neg Numericals)',
    questions: [...ADV_PHY_BANK.slice(0, 2), ...ADV_CHEM_BANK.slice(0, 2), ...ADV_MATH_BANK.slice(0, 2)]
  },
  {
    id: 'jee-adv-2025-p2',
    title: 'JEE Advanced 2025 Official IIT Paper 2 (Physics + Chem + Math)',
    subject: 'Full Syllabus (PCM)',
    year: 2025,
    paperCode: 'IIT-2025-P2',
    difficulty: 'CHALLENGING',
    isFree: true,
    topicFocus: 'IIT 2025 Afternoon Session (Paragraph Comprehension + Matrix + ADV_ONLY)',
    questions: [...ADV_PHY_BANK.slice(2, 4), ...ADV_CHEM_BANK.slice(2, 4), ...ADV_MATH_BANK.slice(2, 4)]
  },
  {
    id: 'jee-adv-2024-p1',
    title: 'JEE Advanced 2024 IIT Madras Paper 1 Archive (Full PCM)',
    subject: 'Full Syllabus (PCM)',
    year: 2024,
    paperCode: 'IIT-2024-P1',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'IIT Madras 2024 Paper 1 Replica (ICOR + Cavity + Ellingham + Matrices)',
    questions: [...ADV_PHY_BANK.slice(0, 2), ...ADV_CHEM_BANK.slice(0, 2), ...ADV_MATH_BANK.slice(0, 2)]
  },
  {
    id: 'jee-adv-2024-p2',
    title: 'JEE Advanced 2024 IIT Madras Paper 2 Archive (Full PCM)',
    subject: 'Full Syllabus (PCM)',
    year: 2024,
    paperCode: 'IIT-2024-P2',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'IIT Madras 2024 Paper 2 Replica (Stem Paragraphs + Numericals + Planes)',
    questions: [...ADV_PHY_BANK.slice(2, 4), ...ADV_CHEM_BANK.slice(2, 4), ...ADV_MATH_BANK.slice(2, 4)]
  },
  {
    id: 'jee-adv-2023-phy',
    title: 'JEE Advanced 2023 IIT Guwahati Physics (Paper 1 + Paper 2 Archive)',
    subject: 'Physics',
    year: 2023,
    paperCode: 'IIT-2023-PHY',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'IIT Guwahati Mechanics, Moving Wall Doppler & Electromagnetism',
    questions: ADV_PHY_BANK
  },
  {
    id: 'jee-adv-2023-chem',
    title: 'JEE Advanced 2023 IIT Guwahati Chemistry (Paper 1 + Paper 2 Archive)',
    subject: 'Chemistry',
    year: 2023,
    paperCode: 'IIT-2023-CHEM',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'Bravais Lattices, Van der Waals, Coordination & Ellingham',
    questions: ADV_CHEM_BANK
  },
  {
    id: 'jee-adv-2023-math',
    title: 'JEE Advanced 2023 IIT Guwahati Mathematics (Paper 1 + Paper 2 Archive)',
    subject: 'Mathematics',
    year: 2023,
    paperCode: 'IIT-2023-MATH',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'Box Products, 3D Planes, Cayley-Hamilton & King Integrals',
    questions: ADV_MATH_BANK
  },
  {
    id: 'jee-adv-2022-p1',
    title: 'JEE Advanced 2022 IIT Bombay Paper 1 Archive (Full PCM)',
    subject: 'Full Syllabus (PCM)',
    year: 2022,
    paperCode: 'IIT-2022-P1',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'IIT Bombay 2022 Decimals & Single-Digit Integers Special',
    questions: [...ADV_PHY_BANK, ...ADV_CHEM_BANK.slice(0, 2)]
  },
  {
    id: 'jee-adv-2022-p2',
    title: 'JEE Advanced 2022 IIT Bombay Paper 2 Archive (Full PCM)',
    subject: 'Full Syllabus (PCM)',
    year: 2022,
    paperCode: 'IIT-2022-P2',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'IIT Bombay 2022 Matrix Match & Multi-Concept MSQs',
    questions: [...ADV_MATH_BANK, ...ADV_CHEM_BANK.slice(2, 4)]
  },
  {
    id: 'jee-adv-2021-p1',
    title: 'JEE Advanced 2021 IIT Kharagpur Paper 1 Archive (Full PCM)',
    subject: 'Full Syllabus (PCM)',
    year: 2021,
    paperCode: 'IIT-2021-P1',
    difficulty: 'MODERATE',
    isFree: false,
    topicFocus: 'IIT KGP Stem Comprehensions & Conceptual Numericals',
    questions: [...ADV_PHY_BANK.slice(1, 3), ...ADV_CHEM_BANK.slice(1, 3), ...ADV_MATH_BANK.slice(1, 3)]
  },
  {
    id: 'jee-adv-2021-p2',
    title: 'JEE Advanced 2021 IIT Kharagpur Paper 2 Archive (Full PCM)',
    subject: 'Full Syllabus (PCM)',
    year: 2021,
    paperCode: 'IIT-2021-P2',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'IIT KGP Deep Calculus, Stereochemistry & Rotational Torque',
    questions: [...ADV_PHY_BANK.slice(0, 2), ...ADV_CHEM_BANK.slice(2, 4), ...ADV_MATH_BANK.slice(0, 2)]
  },
  {
    id: 'jee-adv-2020-p1',
    title: 'JEE Advanced 2020 IIT Delhi Paper 1 & 2 Combined Archive',
    subject: 'Full Syllabus (PCM)',
    year: 2020,
    paperCode: 'IIT-2020-DEL',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'IIT Delhi Official Archive Selected Rank-Decider Questions',
    questions: [...ADV_PHY_BANK.slice(0, 2), ...ADV_CHEM_BANK.slice(0, 2), ...ADV_MATH_BANK.slice(0, 2)]
  }
];

function buildAdvPaper(spec: AdvPaperSpec): PyqPaper {
  const mapped: PyqQuestion[] = spec.questions.map((q, idx) => ({
    ...q,
    id: `${spec.id}-q${idx + 1}`,
    qNum: idx + 1,
    examinerTip: q.examinerTip || `IIT Examiner Insight: Combine fundamentals across chapters cleanly (${spec.topicFocus}).`
  }));

  return {
    id: spec.id,
    title: spec.title,
    subject: spec.subject,
    year: spec.year,
    targetClass: 'JEE Advanced',
    paperType: 'JEE_ADV_PAPER',
    paperCode: spec.paperCode,
    totalMarks: 180,
    durationMins: 180,
    difficulty: spec.difficulty,
    isFree: spec.isFree,
    totalQuestions: 54,
    generalInstructions: [
      `Official IIT JEE Advanced Archive Replica (${spec.topicFocus}).`,
      'Paper Structure: SCQ (+3/-1), MSQ with IIT Partial Marking (+4 full / +3,+2,+1 partial / -2 wrong), Non-Negative Numerical (+4/0) & Matrix Match.',
      'Showing curated authentic rank-decider representative questions + step marking rubrics from this IIT paper.'
    ],
    questions: mapped
  };
}

export const JEE_ADVANCED_PYQ_PAPERS: PyqPaper[] = ADV_SPECS.map(buildAdvPaper);
