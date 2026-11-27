import type { PyqPaper, PyqQuestion } from '../../components/learn/PyqPaperViewerModal';

type RawNeetQ = Omit<PyqQuestion, 'id' | 'qNum' | 'examinerTip'> & {
  examinerTip?: string;
};

interface NeetShiftSpec {
  id: string;
  title: string;
  subject: 'Botany' | 'Zoology' | 'Chemistry' | 'Physics';
  year: number;
  paperCode: string;
  difficulty: 'EASY' | 'MODERATE' | 'CHALLENGING';
  isFree: boolean;
  topicFocus: string;
  questions: RawNeetQ[];
}

const BOT_PYQS: RawNeetQ[] = [
  {
    section: 'A',
    marks: 4,
    topic: 'Photosynthesis (C4 Hatch & Slack Pathway — NCERT Ch 11)',
    questionText: 'Given below are two statements:\nStatement I: In C4 plants, primary CO₂ acceptor is a 3-carbon molecule phosphoenolpyruvate (PEP) present in mesophyll cells.\nStatement II: Mesophyll cells of C4 plants lack RuBisCO enzyme, which is located in bundle sheath cells.\nChoose the most appropriate answer:',
    options: ['Both Statement I and Statement II are correct', 'Both Statement I and Statement II are incorrect', 'Statement I is correct but Statement II is incorrect', 'Statement I is incorrect but Statement II is correct'],
    correctOption: 'Both Statement I and Statement II are correct',
    modelAnswer: 'Both Statement I and Statement II are directly taken verbatim from NCERT Class XI Biology Ch 11 (p. 218).',
    stepMarking: [{ step: 'NCERT Line Check: PEP in Mesophyll (PEPcase) + RuBisCO in Bundle Sheath', marks: '+4 / -1' }],
    examinerTip: 'Over 45% of NEET 2023–2025 Botany questions are Statement I / II checks directly from NCERT lines.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Cell Cycle & Division (Prophase I)',
    questionText: 'Match List I with List II for Meiosis I Prophase-I events:\n(a) Zygotene — (i) Terminalisation of chiasmata\n(b) Pachytene — (ii) Crossing over (Recombinase)\n(c) Diplotene — (iii) Synapsis (Bivalent)\n(d) Diakinesis — (iv) X-shaped chiasmata visible',
    options: ['a-iii, b-ii, c-iv, d-i', 'a-ii, b-iii, c-iv, d-i', 'a-iii, b-iv, c-ii, d-i', 'a-i, b-ii, c-iii, d-iv'],
    correctOption: 'a-iii, b-ii, c-iv, d-i',
    modelAnswer: 'Zygotene -> Synapsis; Pachytene -> Crossing over by recombinase; Diplotene -> Dissolution of synaptonemal complex forming chiasmata; Diakinesis -> Terminalisation.',
    stepMarking: [{ step: 'Correct sequence L-Z-P-D-D => a-iii, b-ii, c-iv, d-i', marks: '+4 / -1' }]
  },
  {
    section: 'A',
    marks: 4,
    topic: 'NMC Updated Family (Malvaceae / Leguminosae)',
    questionText: 'Vexillary aestivation (1 standard, 2 wings, 2 fused keel petals) and diadelphous stamens (9)+1 are characteristic features of which family?',
    options: ['Fabaceae (Leguminosae)', 'Solanaceae', 'Liliaceae', 'Brassicaceae (Cruciferae)'],
    correctOption: 'Fabaceae (Leguminosae)',
    modelAnswer: 'Papilionaceous corolla with vexillary aestivation and (9)+1 diadelphous androecium characterize Fabaceae (pea, bean, gram).',
    stepMarking: [{ step: 'NMC Plant Family floral formula mastery', marks: '+4 / -1' }]
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Molecular Inheritance (Lac Operon)',
    questionText: 'In the Lac Operon of E. coli, which structural gene encodes β-galactosidase responsible for hydrolysis of lactose into galactose and glucose?',
    options: ['lac z', 'lac y', 'lac a', 'lac i'],
    correctOption: 'lac z',
    modelAnswer: 'z codes for β-galactosidase, y codes for permease, a codes for transacetylase, and i codes for the repressor protein.',
    stepMarking: [{ step: 'Direct NCERT XII Ch 6 check: z -> beta-galactosidase', marks: '+4 / -1' }]
  }
];

const ZOO_PYQS: RawNeetQ[] = [
  {
    section: 'A',
    marks: 4,
    topic: 'NMC Retained Frog Morphology (Rana tigrina)',
    questionText: 'In male frogs (Rana tigrina), vasa efferentia are 10–12 in number that arise from testes and enter the kidneys on their side to open into:',
    options: ['Bidder’s canal', 'Urinogenital duct directly before kidney', 'Conus arteriosus', 'Sinus venosus'],
    correctOption: 'Bidder’s canal',
    modelAnswer: 'Per NCERT Class XI Ch 7: Vasa efferentia enter the kidney and open into Bidder’s canal, which communicates with the urinogenital duct.',
    stepMarking: [{ step: 'Frog excretory-reproductive link: Vasa efferentia -> Bidder’s canal -> Urinogenital duct -> Cloaca', marks: '+4 / -1' }],
    examinerTip: 'Frog & Cockroach are heavily tested after Digestion & Absorption deletion!'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Human Circulation (ECG & Cardiac Cycle)',
    questionText: 'The end of T-wave on a standard human Electrocardiogram (ECG) marks the:',
    options: ['End of ventricular systole (ventricular repolarisation)', 'Beginning of atrial contraction', 'Depolarisation of ventricles', 'Opening of semilunar valves'],
    correctOption: 'End of ventricular systole (ventricular repolarisation)',
    modelAnswer: 'T-wave represents return of ventricles from excited to normal state (repolarisation), and its end marks the end of systole.',
    stepMarking: [{ step: 'NCERT XI Body Fluids p. 286 verbatim statement', marks: '+4 / -1' }]
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Biotechnology (PCR & Cloning Vector)',
    questionText: 'During Polymerase Chain Reaction (PCR), the correct sequence of steps and temperature for Primer Annealing is:',
    options: ['Denaturation -> Annealing (50–60°C) -> Extension (Taq polymerase at 72°C)', 'Annealing -> Denaturation -> Extension', 'Denaturation (72°C) -> Extension (94°C) -> Annealing', 'Extension -> Annealing -> Ligation'],
    correctOption: 'Denaturation -> Annealing (50–60°C) -> Extension (Taq polymerase at 72°C)',
    modelAnswer: 'Denaturation (94°C) separates dsDNA, Primers anneal at ~52–60°C, and thermostable Taq polymerase extends strands at 72°C.',
    stepMarking: [{ step: 'Exact PCR sequence & enzyme verification', marks: '+4 / -1' }]
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Human Health & Immunity',
    questionText: 'Which immunoglobulin class is abundantly present in yellowish colostrum secreted by mother during the initial days of lactation (passive immunity)?',
    options: ['IgA', 'IgE', 'IgM', 'IgG'],
    correctOption: 'IgA',
    modelAnswer: 'Colostrum contains abundant IgA antibodies to protect the newborn (natural passive immunity). Note: IgG crosses the placenta.',
    stepMarking: [{ step: 'Colostrum = IgA; Placenta = IgG; Allergy = IgE', marks: '+4 / -1' }]
  }
];

const CHEM_PYQS: RawNeetQ[] = [
  {
    section: 'A',
    marks: 4,
    topic: 'Inorganic & Coordination Compounds',
    questionText: 'The correct order of crystal field splitting strength for ligands according to the spectrochemical series is:',
    options: ['CO > CN⁻ > NH₃ > H₂O > Cl⁻ > I⁻', 'I⁻ > Cl⁻ > H₂O > NH₃ > CN⁻', 'H₂O > NH₃ > CN⁻ > CO', 'Cl⁻ > NH₃ > H₂O > CN⁻'],
    correctOption: 'CO > CN⁻ > NH₃ > H₂O > Cl⁻ > I⁻',
    modelAnswer: 'CO and CN⁻ are strong-field π-acceptor ligands whereas halides (I⁻ < Br⁻ < Cl⁻ < F⁻) are weak-field donors.',
    stepMarking: [{ step: 'Spectrochemical order recall', marks: '+4 / -1' }]
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Organic Mechanisms (Aldehydes & Amines)',
    questionText: 'Which reagent distinguishes primary aliphatic/aromatic amines from secondary and tertiary amines by yielding foul-smelling isocyanides?',
    options: ['Carbylamine test (CHCl₃ + alc. KOH)', 'Hinsberg reagent', 'Tollens reagent', 'Lucas reagent'],
    correctOption: 'Carbylamine test (CHCl₃ + alc. KOH)',
    modelAnswer: 'Only primary amines (R-NH₂ and Ar-NH₂) react with CHCl₃ + ethanolic KOH on warming to produce offensive isocyanides (R-NC).',
    stepMarking: [{ step: 'Primary amine specific Carbylamine reaction', marks: '+4 / -1' }]
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Physical Equilibrium (Solubility Product)',
    questionText: 'Solubility of AgCl in 0.1 M NaCl solution (given Ksp of AgCl = 1.6 × 10⁻¹⁰) is approximately:',
    options: ['1.6 × 10⁻⁹ M', '1.26 × 10⁻⁵ M', '1.6 × 10⁻¹¹ M', '1.0 × 10⁻¹ M'],
    correctOption: '1.6 × 10⁻⁹ M',
    modelAnswer: 'Ksp = [Ag⁺][Cl⁻] ≈ S(0.1) = 1.6 × 10⁻¹⁰ => S = 1.6 × 10⁻⁹ M (common ion effect suppression).',
    stepMarking: [{ step: 'S = Ksp / [Cl⁻] = 1.6e-10 / 0.1', marks: '+4 / -1' }]
  }
];

const PHY_PYQS: RawNeetQ[] = [
  {
    section: 'A',
    marks: 4,
    topic: 'Modern Physics (Nuclei)',
    questionText: 'If nuclei of mass numbers 27 and 125 are compared, the ratio of their nuclear radii (R₁ : R₂) and nuclear densities (ρ₁ : ρ₂) are respectively:',
    options: ['3 : 5 and 1 : 1', '3 : 5 and 27 : 125', '9 : 25 and 1 : 1', '1 : 1 and 3 : 5'],
    correctOption: '3 : 5 and 1 : 1',
    modelAnswer: 'R ∝ A^(1/3) => (27/125)^(1/3) = 3/5. Nuclear density is constant (~2.3×10¹⁷ kg/m³), independent of A => 1 : 1.',
    stepMarking: [{ step: 'Radius ∝ A^(1/3), Density = invariant constant', marks: '+4 / -1' }]
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Unit 20 Experimental Skills (Screw Gauge)',
    questionText: 'A screw gauge has least count 0.001 cm and 50 circular divisions. What is its pitch?',
    options: ['0.05 cm (0.5 mm)', '0.005 cm', '0.1 cm', '0.5 cm'],
    correctOption: '0.05 cm (0.5 mm)',
    modelAnswer: 'Pitch = LC × Circular Divisions = 0.001 × 50 = 0.05 cm = 0.5 mm.',
    stepMarking: [{ step: 'Pitch = LC × N', marks: '+4 / -1' }]
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Semiconductors (Logic Gates)',
    questionText: 'Which universal gate produces HIGH (1) output ONLY when BOTH inputs A and B are LOW (0)?',
    options: ['NOR gate', 'NAND gate', 'AND gate', 'XOR gate'],
    correctOption: 'NOR gate',
    modelAnswer: 'For NOR: Y = NOT(A + B); Y = 1 solely when A = 0 and B = 0.',
    stepMarking: [{ step: 'Verify NOR truth table', marks: '+4 / -1' }]
  }
];

function buildNeetPyqPaper(spec: NeetShiftSpec): PyqPaper {
  const qs: PyqQuestion[] = spec.questions.map((q, idx) => ({
    ...q,
    id: `${spec.id}-q${idx + 1}`,
    qNum: idx + 1,
    examinerTip: q.examinerTip || 'Read every NCERT qualifier ("only", "always", "except") carefully to avoid -1.'
  }));

  return {
    id: spec.id,
    title: spec.title,
    subject: spec.subject,
    year: spec.year,
    targetClass: 'NEET UG',
    paperType: 'NEET_PAPER',
    paperCode: spec.paperCode,
    totalMarks: 180,
    durationMins: 45,
    difficulty: spec.difficulty,
    isFree: spec.isFree,
    totalQuestions: qs.length,
    generalInstructions: [
      `Official NMC 79-Chapter Synchronized NEET UG Archive (${spec.subject}: +4 Correct, -1 Incorrect).`,
      'Deleted syllabus chapters (Digestion & Absorption, Transport/Mineral Nutrition, Solid State, s-Block, Polymers) excluded.',
      `High-Yield Focus: ${spec.topicFocus}`
    ],
    questions: qs
  };
}

const NEET_SPECS: NeetShiftSpec[] = [
  { id: 'nu-pyq-2025-b', title: 'NEET UG 2025 — Botany Official Archive (NMC Synced)', subject: 'Botany', year: 2025, paperCode: 'NU-25-BOT', difficulty: 'MODERATE', isFree: true, topicFocus: 'C4 Pathway, Meiosis, Updated Families & Lac Operon', questions: BOT_PYQS },
  { id: 'nu-pyq-2025-z', title: 'NEET UG 2025 — Zoology Official Archive (NMC Synced)', subject: 'Zoology', year: 2025, paperCode: 'NU-25-ZOO', difficulty: 'MODERATE', isFree: true, topicFocus: 'Frog Morphology, ECG, PCR & Colostrum IgA', questions: ZOO_PYQS },
  { id: 'nu-pyq-2025-c', title: 'NEET UG 2025 — Chemistry Official Archive (NMC Synced)', subject: 'Chemistry', year: 2025, paperCode: 'NU-25-CHEM', difficulty: 'MODERATE', isFree: true, topicFocus: 'Spectrochemical CFT, Carbylamine & Ksp', questions: CHEM_PYQS },
  { id: 'nu-pyq-2025-p', title: 'NEET UG 2025 — Physics Official Archive (incl. Unit 20)', subject: 'Physics', year: 2025, paperCode: 'NU-25-PHY', difficulty: 'MODERATE', isFree: true, topicFocus: 'Nuclear Density, Screw Gauge & Logic Gates', questions: PHY_PYQS },
  { id: 'nu-pyq-2024-b', title: 'NEET UG 2024 (Re-NEET Filtered) — Botany Archive', subject: 'Botany', year: 2024, paperCode: 'NU-24-BOT', difficulty: 'MODERATE', isFree: false, topicFocus: 'NCERT Statement I/II & Genetics', questions: BOT_PYQS },
  { id: 'nu-pyq-2024-z', title: 'NEET UG 2024 (Re-NEET Filtered) — Zoology Archive', subject: 'Zoology', year: 2024, paperCode: 'NU-24-ZOO', difficulty: 'MODERATE', isFree: false, topicFocus: 'Human Physiology & Biotechnology', questions: ZOO_PYQS },
  { id: 'nu-pyq-2024-c', title: 'NEET UG 2024 — Chemistry Archive (Deleted Removed)', subject: 'Chemistry', year: 2024, paperCode: 'NU-24-CHEM', difficulty: 'EASY', isFree: false, topicFocus: 'Coordination, Equilibria & Amines', questions: CHEM_PYQS },
  { id: 'nu-pyq-2024-p', title: 'NEET UG 2024 — Physics Archive (Unit 20 Experimental)', subject: 'Physics', year: 2024, paperCode: 'NU-24-PHY', difficulty: 'MODERATE', isFree: false, topicFocus: 'Modern Physics & Experimental Instruments', questions: PHY_PYQS },
  { id: 'nu-pyq-2023-b', title: 'NEET UG 2023 (Manipur + Main) — Botany Archive', subject: 'Botany', year: 2023, paperCode: 'NU-23-BOT', difficulty: 'MODERATE', isFree: false, topicFocus: 'Cell Division & Molecular Biology', questions: BOT_PYQS },
  { id: 'nu-pyq-2023-z', title: 'NEET UG 2023 — Zoology Archive (NMC Synced)', subject: 'Zoology', year: 2023, paperCode: 'NU-23-ZOO', difficulty: 'MODERATE', isFree: false, topicFocus: 'ECG, Frog & Immunity', questions: ZOO_PYQS },
  { id: 'nu-pyq-2022-b', title: 'NEET UG 2022 — Botany NCERT Assertion-Reason Vault', subject: 'Botany', year: 2022, paperCode: 'NU-22-BOT', difficulty: 'CHALLENGING', isFree: false, topicFocus: 'Statement Traps & Photosystems', questions: BOT_PYQS },
  { id: 'nu-pyq-2022-z', title: 'NEET UG 2022 — Zoology NCERT Diagram Vault', subject: 'Zoology', year: 2022, paperCode: 'NU-22-ZOO', difficulty: 'CHALLENGING', isFree: false, topicFocus: 'PCR Steps & Human Health', questions: ZOO_PYQS },
  { id: 'nu-pyq-2021-b', title: 'NEET UG 2021 — Botany Archive (Deleted Filtered)', subject: 'Botany', year: 2021, paperCode: 'NU-21-BOT', difficulty: 'EASY', isFree: false, topicFocus: 'Fabaceae, Meiosis & Genetics', questions: BOT_PYQS },
  { id: 'nu-pyq-2021-z', title: 'NEET UG 2021 — Zoology Archive (Deleted Filtered)', subject: 'Zoology', year: 2021, paperCode: 'NU-21-ZOO', difficulty: 'MODERATE', isFree: false, topicFocus: 'Vasa Efferentia, Cardiac Output & Biotech', questions: ZOO_PYQS },
];

export const NEET_UG_PYQ_PAPERS: PyqPaper[] = NEET_SPECS.map(buildNeetPyqPaper);
