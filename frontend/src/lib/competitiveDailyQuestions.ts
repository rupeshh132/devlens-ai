import type { DailyQuestionItem } from './dailyQuestionService';

export const JEE_MAINS_DAILY_QUESTIONS: DailyQuestionItem[] = [
  {
    id: 'jm-phy-day-1',
    targetClass: 'JEE Mains',
    title: 'Dimensional Analysis of Permittivity & Magnetic Field',
    subject: 'JEE Physics',
    topic: 'Units, Measurements & Experimental Skills',
    marks: '+4 / -1 (JEE Main NTA Format)',
    question: 'If ε₀ denotes permittivity of free space and E denotes electric field magnitude, what are the dimensions of (1/2) ε₀ E²?',
    options: [
      { id: 'A', text: '[M¹ L⁻¹ T⁻²]' },
      { id: 'B', text: '[M¹ L² T⁻²]' },
      { id: 'C', text: '[M¹ L⁻¹ T⁻¹]' },
      { id: 'D', text: '[M⁰ L¹ T⁻²]' }
    ],
    correctOption: 'A',
    correctOptionLabel: 'Option A ([M¹ L⁻¹ T⁻²] — Energy Density / Pressure)',
    explanation: 'The term (1/2) ε₀ E² represents electrostatic energy density (energy per unit volume): [ML²T⁻²] / [L³] = [ML⁻¹T⁻²]. This is identical to the dimensions of pressure and stress.',
    stepMarks: 'Correct (+4 Marks) | Wrong (-1 Mark) | Unattempted (0)',
    commonTrap: 'Trap: Confusing energy [ML²T⁻²] with energy density [ML⁻¹T⁻²]. Always divide by volume [L³] when field squared appears with ε₀.',
    difficulty: 'EASY',
    paperSource: 'JEE Main Shift Archive (NTA Rationalized)',
    tags: ['Physics', 'Units & Dimensions', 'NTA 2026']
  },
  {
    id: 'jm-chem-day-2',
    targetClass: 'JEE Mains',
    title: 'Diamagnetism of Octahedral & Tetrahedral Coordination Complexes',
    subject: 'JEE Chemistry',
    topic: 'Coordination Compounds',
    marks: '+4 / -1 (JEE Main NTA Format)',
    question: 'Which of the following coordination complexes is diamagnetic and exhibits zero unpaired electrons (spin-only magnetic moment = 0 BM)?',
    options: [
      { id: 'A', text: '[CoF₆]³⁻' },
      { id: 'B', text: '[Fe(CN)₆]³⁻' },
      { id: 'C', text: '[Fe(CN)₆]⁴⁻' },
      { id: 'D', text: '[NiCl₄]²⁻' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C ([Fe(CN)₆]⁴⁻)',
    explanation: 'In [Fe(CN)₆]⁴⁻, Fe is in +2 state (3d⁶). CN⁻ is a strong-field ligand causing electron pairing in t₂g orbitals (t₂g⁶ eg⁰), leaving 0 unpaired electrons. [Fe(CN)₆]³⁻ has 1 unpaired electron (d⁵ low spin), [CoF₆]³⁻ has 4, and [NiCl₄]²⁻ has 2.',
    stepMarks: 'Correct (+4 Marks) | Wrong (-1 Mark)',
    commonTrap: 'Trap: [Fe(CN)₆]³⁻ looks low-spin so students blindly think it has 0 unpaired electrons, but d⁵ always retains 1 unpaired electron!',
    difficulty: 'MODERATE',
    paperSource: 'JEE Main High-Yield PYQ Vault',
    tags: ['Chemistry', 'Coordination', 'CFT']
  },
  {
    id: 'jm-math-day-3',
    targetClass: 'JEE Mains',
    title: 'King Property Definite Integral Evaluation',
    subject: 'JEE Mathematics',
    topic: 'Integral Calculus (Definite Integrals)',
    marks: '+4 / -1 (JEE Main NTA Format)',
    question: 'Evaluate I = ∫₀^(π/2) [√sin x / (√sin x + √cos x)] dx:',
    options: [
      { id: 'A', text: 'π / 2' },
      { id: 'B', text: 'π / 4' },
      { id: 'C', text: 'π' },
      { id: 'D', text: '1 / 2' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (π / 4)',
    explanation: 'Using King’s Property ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a - x) dx: replacing x by (π/2 - x) swaps √sin x and √cos x. Adding I + I gives 2I = ∫₀^(π/2) 1 dx = π/2, hence I = π/4.',
    stepMarks: 'Correct (+4 Marks) | Wrong (-1 Mark)',
    commonTrap: 'Trap: Forgetting the factor of 2 in 2I = (upper - lower) and picking π/2 instead of π/4.',
    difficulty: 'EASY',
    paperSource: 'JEE Main Calculus Booster PYQ',
    tags: ['Mathematics', 'Definite Integrals', 'King Property']
  }
];

export const JEE_ADVANCED_DAILY_QUESTIONS: DailyQuestionItem[] = [
  {
    id: 'ja-phy-day-1',
    targetClass: 'JEE Advanced',
    title: 'Instantaneous Axis & Pure Rolling Kinetic Energy Partition',
    subject: 'JEE Adv Physics',
    topic: 'Rotational Dynamics (ICOR)',
    marks: '+3 / -1 (IIT JEE Advanced Format)',
    question: 'A uniform solid cylinder rolls without slipping down a rough fixed incline of angle θ. What fraction of its total kinetic energy is rotational kinetic energy?',
    options: [
      { id: 'A', text: '1 / 2' },
      { id: 'B', text: '1 / 3' },
      { id: 'C', text: '2 / 5' },
      { id: 'D', text: '2 / 3' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (1 / 3)',
    explanation: 'For a solid cylinder, k²/R² = 1/2. K_rot / K_total = (k²/R²) / (1 + k²/R²) = (1/2) / (1 + 1/2) = 1/3.',
    stepMarks: 'Full Marks (+3) | Negative (-1)',
    commonTrap: 'Trap: Confusing K_rot / K_trans (= 1/2) with K_rot / K_total (= 1/3), or using solid sphere value 2/7.',
    difficulty: 'MODERATE',
    paperSource: 'IIT JEE Advanced Archive Practice',
    tags: ['Physics', 'Rotational Motion', 'IIT Adv']
  },
  {
    id: 'ja-chem-day-2',
    targetClass: 'JEE Advanced',
    title: 'Bravais Lattice Octahedral & Tetrahedral Voids (ADV ONLY)',
    subject: 'JEE Adv Chemistry',
    topic: 'Solid State Crystallography (ADV ONLY)',
    marks: '+3 / -1 (IIT JEE Advanced Format)',
    question: 'In a face-centred cubic (FCC / CCP) ionic lattice, anions X⁻ occupy all lattice points, while cations M⁺ occupy 100% of octahedral voids and 50% of tetrahedral voids. What is the empirical formula of the crystal?',
    options: [
      { id: 'A', text: 'MX' },
      { id: 'B', text: 'M₂X' },
      { id: 'C', text: 'M₃X₂' },
      { id: 'D', text: 'M₂X₃' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (M₂X)',
    explanation: 'In an FCC unit cell, effective anions X⁻ = Z = 4. Total octahedral voids = Z = 4 (all filled => 4 M⁺). Total tetrahedral voids = 2Z = 8 (50% filled => 4 M⁺). Total M⁺ = 4 + 4 = 8; X⁻ = 4 => M₈X₄ = M₂X.',
    stepMarks: 'Full Marks (+3) | Negative (-1)',
    commonTrap: 'Trap: Taking Z = 1 for octahedral without doubling to 2Z for tetrahedral voids. Note: Solid State is deleted from JEE Mains but retained in JEE Advanced!',
    difficulty: 'MODERATE',
    paperSource: 'IIT JEE Advanced Exclusive Archive',
    tags: ['Chemistry', 'Solid State', 'ADV ONLY']
  }
];

export const NEET_UG_DAILY_QUESTIONS: DailyQuestionItem[] = [
  {
    id: 'nu-bot-day-1',
    targetClass: 'NEET UG',
    title: 'NCERT Line-by-Line: Photorespiration vs C4 Pathway (RuBisCO)',
    subject: 'NEET Botany',
    topic: 'Photosynthesis in Higher Plants',
    marks: '+4 / -1 (NMC NEET UG Format)',
    question: 'Read Statement I and Statement II carefully:\nStatement I: In C4 plants, photorespiration does not occur because they maintain a high concentration of CO₂ at the RuBisCO enzyme site.\nStatement II: In C4 plants, RuBisCO is abundantly present in mesophyll cells while PEPcase is restricted to bundle sheath cells.\nChoose the correct option:',
    options: [
      { id: 'A', text: 'Both Statement I and Statement II are correct' },
      { id: 'B', text: 'Both Statement I and Statement II are incorrect' },
      { id: 'C', text: 'Statement I is correct but Statement II is incorrect' },
      { id: 'D', text: 'Statement I is incorrect but Statement II is correct' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (Statement I is correct, Statement II is incorrect)',
    explanation: 'Per NCERT Class 11 Biology: C4 plants lack photorespiration because C4 acid breakdown in bundle sheath cells raises CO₂ concentration around RuBisCO. Statement II is reversed: PEPcase is in mesophyll cells (which lack RuBisCO), whereas RuBisCO is exclusively in bundle sheath cells.',
    stepMarks: 'Correct (+4 Marks) | Wrong (-1 Mark)',
    commonTrap: 'Trap: NTA Statement I/II questions swap cell locations (mesophyll vs bundle sheath) straight from NCERT lines!',
    difficulty: 'MODERATE',
    paperSource: 'NTA NEET UG Statement-Pattern Bank',
    tags: ['Botany', 'Plant Physiology', 'NCERT Line']
  },
  {
    id: 'nu-zoo-day-2',
    targetClass: 'NEET UG',
    title: 'NMC Retained Topic: Heart Chambers & Respiration in Frog',
    subject: 'NEET Zoology',
    topic: 'Structural Organisation in Animals (Rana tigrina)',
    marks: '+4 / -1 (NMC NEET UG Format)',
    question: 'Which of the following statements accurately describes the circulatory and respiratory system of Frog (Rana tigrina) as per NCERT?',
    options: [
      { id: 'A', text: 'It possesses a 4-chambered heart with complete separation of oxygenated and deoxygenated blood.' },
      { id: 'B', text: 'It has a 3-chambered heart (2 atria, 1 ventricle) with sinus venosus, and during aestivation/hibernation respires exclusively through skin (cutaneous respiration).' },
      { id: 'C', text: 'Red blood cells in frog are biconcave and non-nucleated.' },
      { id: 'D', text: 'Frogs excrete ammonia as primary nitrogenous waste (ammonotelic).' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (3-chambered heart & cutaneous respiration during dormancy)',
    explanation: 'As retained in NMC NEET UG syllabus: Frog heart has 3 chambers (two atria, one ventricle) plus sinus venosus and conus arteriosus. During hibernation/aestivation, gaseous exchange occurs solely through moist skin. Note: Frog RBCs are nucleated and oval; adult frogs are ureotelic (excrete urea).',
    stepMarks: 'Correct (+4 Marks) | Wrong (-1 Mark)',
    commonTrap: 'Trap: Remembering RBCs as non-nucleated (true only for mammals, not amphibians!) or thinking Digestion & Absorption replaces Frog.',
    difficulty: 'EASY',
    paperSource: 'NTA NEET UG NMC-Synced Zoology Bank',
    tags: ['Zoology', 'Frog Morphology', 'NMC 2026']
  }
];
