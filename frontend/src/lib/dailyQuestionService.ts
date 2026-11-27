import {
  JEE_MAINS_DAILY_QUESTIONS,
  JEE_ADVANCED_DAILY_QUESTIONS,
  NEET_UG_DAILY_QUESTIONS
} from './competitiveDailyQuestions';

export interface DailyQuestionOption {
  id: string; // 'A' | 'B' | 'C' | 'D'
  text: string;
}

export interface DailyQuestionItem {
  id: string;
  targetClass: string; // 'Class 11' | 'Class 12' | 'Class 10'
  title: string;
  subject: string;
  topic: string;
  marks: string;
  question: string;
  options: DailyQuestionOption[];
  correctOption: string;
  correctOptionLabel: string;
  explanation: string;
  stepMarks: string;
  commonTrap: string;
  difficulty: 'EASY' | 'MODERATE' | 'CHALLENGING';
  paperSource: string;
  tags: string[];
}

export const CLASS_11_DAILY_QUESTIONS: DailyQuestionItem[] = [
  {
    id: 'c11-phy-day-1',
    targetClass: 'Class 11',
    title: "Dimensions of Planck's Constant",
    subject: 'Class 11 Physics',
    topic: 'Units and Measurements',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: "The dimensions of Planck's constant (h) are identical to the dimensional formula of which of the following physical quantities?",
    options: [
      { id: 'A', text: 'Linear momentum (p = mv)' },
      { id: 'B', text: 'Angular momentum (L = r × p)' },
      { id: 'C', text: 'Energy (E = mc²)' },
      { id: 'D', text: 'Power (P = W / t)' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Angular momentum)',
    explanation: "From Planck's quantum relation: E = hν => [h] = [E] / [ν] = [ML²T⁻²] / [T⁻¹] = [ML²T⁻¹]. For angular momentum L = r × p => [L] = [L] · [MLT⁻¹] = [ML²T⁻¹]. Thus, both share the exact same dimensional formula [ML²T⁻¹].",
    stepMarks: "Step: Identification of [h] = [ML²T⁻¹] (+1/2 Mark) | Matching with Angular Momentum L (+1/2 Mark)",
    commonTrap: "Trap: Students often confuse linear momentum [MLT⁻¹] with angular momentum [ML²T⁻¹].",
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 11 Annual Physics Examination (Set 1)',
    tags: ['Physics', 'Units & Dimensions', 'High Yield']
  },
  {
    id: 'c11-chem-day-2',
    targetClass: 'Class 11',
    title: 'Maximum Electrons in a Single Orbital',
    subject: 'Class 11 Chemistry',
    topic: 'Structure of Atom',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'What is the maximum number of electrons that can be accommodated in an orbital having quantum numbers n = 4, l = 2?',
    options: [
      { id: 'A', text: '2 electrons' },
      { id: 'B', text: '6 electrons' },
      { id: 'C', text: '10 electrons' },
      { id: 'D', text: '14 electrons' }
    ],
    correctOption: 'A',
    correctOptionLabel: 'Option A (2 electrons)',
    explanation: "Carefully read the question phrasing: it asks for electrons in 'AN ORBITAL' (a single spatial orbital), not the entire 4d subshell! According to Pauli's Exclusion Principle, no two electrons can have the same four quantum numbers, which limits any single individual orbital to a maximum of 2 electrons of opposite spins (mₛ = +1/2, -1/2).",
    stepMarks: "Step: Pauli's Exclusion Principle recognition (+1/2 Mark) | Correct value 2 (+1/2 Mark)",
    commonTrap: "Trap: l = 2 represents the 4d subshell which holds 10 electrons in total, but any single orbital in it holds only 2 electrons!",
    difficulty: 'CHALLENGING',
    paperSource: 'CBSE Class 11 Chemistry Annual Paper',
    tags: ['Chemistry', 'Structure of Atom', 'Sure-Shot PYQ']
  },
  {
    id: 'c11-math-day-3',
    targetClass: 'Class 11',
    title: 'Number of Non-Empty Proper Subsets',
    subject: 'Class 11 Mathematics',
    topic: 'Sets & Relations',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'If a finite set A contains n distinct elements, what is the total number of non-empty proper subsets of set A?',
    options: [
      { id: 'A', text: '2ⁿ' },
      { id: 'B', text: '2ⁿ - 1' },
      { id: 'C', text: '2ⁿ - 2' },
      { id: 'D', text: '2ⁿ⁻¹' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (2ⁿ - 2)',
    explanation: 'Total number of subsets of a set with n elements is 2ⁿ. Proper subsets exclude the set itself (subtract 1). Non-empty subsets exclude the empty null set ∅ (subtract another 1). Therefore, non-empty proper subsets = 2ⁿ - 1 - 1 = 2ⁿ - 2.',
    stepMarks: 'Step: Total subsets = 2ⁿ (+1/2 Mark) | Subtracting self and empty set = 2ⁿ - 2 (+1/2 Mark)',
    commonTrap: 'Trap: Choosing 2ⁿ - 1 by forgetting that the empty set ∅ must also be excluded because the question specifies "non-empty".',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 11 Mathematics Model Question Paper',
    tags: ['Mathematics', 'Sets', 'Formulas']
  },
  {
    id: 'c11-bio-day-4',
    targetClass: 'Class 11',
    title: 'Fluid Mosaic Model of Cell Membrane',
    subject: 'Class 11 Biology',
    topic: 'Cell: The Unit of Life',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'The universally accepted Fluid Mosaic Model of the plasma membrane was proposed by Singer and Nicolson in which year?',
    options: [
      { id: 'A', text: '1953' },
      { id: 'B', text: '1972' },
      { id: 'C', text: '1982' },
      { id: 'D', text: '1965' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (1972)',
    explanation: 'S.J. Singer and G.L. Nicolson proposed the Fluid Mosaic Model in 1972. According to this model, the quasi-fluid nature of lipid enables lateral movement of proteins within the overall bilayer ("protein icebergs floating in a sea of lipids").',
    stepMarks: 'Step: Direct NCERT recall: Singer & Nicolson, 1972 (+1 Mark)',
    commonTrap: 'Trap: Confusing 1972 with 1953 (the year Watson and Crick published the DNA double helix model).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 11 Biology Annual Paper',
    tags: ['Biology', 'Cell Biology', 'NCERT Direct']
  },
  {
    id: 'c11-phy-day-5',
    targetClass: 'Class 11',
    title: 'Ratio of Max Height to Horizontal Range',
    subject: 'Class 11 Physics',
    topic: 'Motion in a Plane (Projectile Motion)',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'For an object launched in projectile motion at an angle θ with the horizontal ground, the ratio of maximum height (H) to horizontal range (R) is given by:',
    options: [
      { id: 'A', text: '(tan θ) / 4' },
      { id: 'B', text: '(tan θ) / 2' },
      { id: 'C', text: '4 tan θ' },
      { id: 'D', text: '2 tan θ' }
    ],
    correctOption: 'A',
    correctOptionLabel: 'Option A ((tan θ) / 4)',
    explanation: 'Maximum height H = (u² sin² θ) / (2g) and Range R = (2u² sin θ cos θ) / g. Dividing H by R gives H / R = [u² sin² θ / (2g)] / [2u² sin θ cos θ / g] = sin θ / (4 cos θ) = (tan θ) / 4. Hence R tan θ = 4H.',
    stepMarks: 'Step: H and R formula ratio (+1/2 Mark) | Simplification to (tan θ)/4 (+1/2 Mark)',
    commonTrap: 'Trap: Forgetting the factor of 2 in the denominator of H, mistakenly arriving at tan θ / 2.',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 11 Physics Model Paper',
    tags: ['Physics', 'Kinematics', 'Formulas']
  },
  {
    id: 'c11-chem-day-6',
    targetClass: 'Class 11',
    title: 'First Ionization Enthalpy Anomaly (N vs O)',
    subject: 'Class 11 Chemistry',
    topic: 'Classification of Elements & Periodicity',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'Why is the first ionization enthalpy (ΔᵢH₁) of Nitrogen (Z=7) greater than that of Oxygen (Z=8), despite Oxygen having a higher nuclear charge?',
    options: [
      { id: 'A', text: 'Nitrogen has smaller atomic radius than Oxygen' },
      { id: 'B', text: 'Nitrogen has an extra stable half-filled 2p³ subshell' },
      { id: 'C', text: 'Oxygen has greater shielding effect' },
      { id: 'D', text: 'Nitrogen has higher electronegativity than Oxygen' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Extra stable half-filled 2p³ subshell)',
    explanation: "Electronic configuration of Nitrogen is 1s² 2s² 2p³ (half-filled p-subshell with high exchange energy and spherical symmetry). Oxygen is 1s² 2s² 2p⁴ (four electrons in 2p, where removing one electron yields the more stable half-filled configuration). Extra energy is required to disrupt Nitrogen's stable half-filled subshell.",
    stepMarks: 'Step: Electronic configuration 2p³ vs 2p⁴ (+1/2 Mark) | Half-filled stability explanation (+1/2 Mark)',
    commonTrap: 'Trap: Assuming ionization energy strictly increases monotonically from left to right without accounting for subshell stability.',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 11 Chemistry Board Question Bank',
    tags: ['Chemistry', 'Periodic Table', 'High Yield']
  },
  {
    id: 'c11-math-day-7',
    targetClass: 'Class 11',
    title: 'Perpendicular Lines Slope Condition',
    subject: 'Class 11 Mathematics',
    topic: 'Straight Lines',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'Two non-vertical lines L₁ and L₂ having slopes m₁ and m₂ are perpendicular to each other if and only if:',
    options: [
      { id: 'A', text: 'm₁ = m₂' },
      { id: 'B', text: 'm₁ + m₂ = 0' },
      { id: 'C', text: 'm₁ · m₂ = -1' },
      { id: 'D', text: 'm₁ · m₂ = 1' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (m₁ · m₂ = -1)',
    explanation: 'If angle between two lines is θ = 90°, tan 90° = ∞ => |(m₂ - m₁) / (1 + m₁m₂)| = ∞. This occurs when the denominator equals zero: 1 + m₁m₂ = 0 => m₁ · m₂ = -1.',
    stepMarks: 'Step: Derivation from tan θ formula (+1/2 Mark) | Condition m₁m₂ = -1 (+1/2 Mark)',
    commonTrap: 'Trap: Confusing parallel lines (m₁ = m₂) with perpendicular lines (m₁m₂ = -1).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 11 Mathematics Standard Annual Paper',
    tags: ['Mathematics', 'Coordinate Geometry', 'Sure-Shot PYQ']
  },
  {
    id: 'c11-bio-day-8',
    targetClass: 'Class 11',
    title: 'DNA Replication Stage in Cell Cycle',
    subject: 'Class 11 Biology',
    topic: 'Cell Cycle and Cell Division',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'In eukaryotic cells, semi-conservative replication of nuclear DNA and duplication of centrioles occur during which phase of the cell cycle?',
    options: [
      { id: 'A', text: 'G₁ Phase (Gap 1)' },
      { id: 'B', text: 'S Phase (Synthetic Phase)' },
      { id: 'C', text: 'G₂ Phase (Gap 2)' },
      { id: 'D', text: 'M Phase (Metaphase)' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (S Phase - Synthetic Phase)',
    explanation: 'During the S phase (Synthesis phase), DNA replication takes place in the nucleus, doubling the amount of DNA per cell from 2C to 4C (chromosome number remains 2n). In animal cells, the centriole also duplicates in the cytoplasm during this phase.',
    stepMarks: 'Step: Identification of S Phase (+1 Mark)',
    commonTrap: 'Trap: Thinking chromosome number doubles in S phase (only DNA content 2C -> 4C doubles, ploidy stays 2n).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 11 Biology Board Exam Sample',
    tags: ['Biology', 'Cell Division', 'NCERT Direct']
  },
  {
    id: 'c11-phy-day-9',
    targetClass: 'Class 11',
    title: 'Variation of Gravity with Depth',
    subject: 'Class 11 Physics',
    topic: 'Gravitation',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'The acceleration due to gravity (g_d) at a depth d below the surface of the Earth of radius R is related to the surface gravity g by:',
    options: [
      { id: 'A', text: 'g_d = g (1 - d / R)' },
      { id: 'B', text: 'g_d = g (1 - 2d / R)' },
      { id: 'C', text: 'g_d = g (1 + d / R)' },
      { id: 'D', text: 'g_d = g (R / (R + d))²' }
    ],
    correctOption: 'A',
    correctOptionLabel: 'Option A (g_d = g (1 - d / R))',
    explanation: 'Inside the Earth at depth d, the effective mass attracting the body is only the inner sphere of radius (R - d). Thus g_d = G M_eff / (R - d)² = g (1 - d / R). At the Earth center (d = R), g_d = 0.',
    stepMarks: 'Step: Formula g_d = g(1 - d/R) (+1 Mark)',
    commonTrap: 'Trap: Confusing variation with height h (where g_h ≈ g(1 - 2h/R) for small h) with depth d (which is linear: g_d = g(1 - d/R)).',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 11 Physics Board Question Bank',
    tags: ['Physics', 'Gravitation', 'Formulas']
  },
  {
    id: 'c11-chem-day-10',
    targetClass: 'Class 11',
    title: 'Spontaneity Criterion at Constant T and P',
    subject: 'Class 11 Chemistry',
    topic: 'Chemical Thermodynamics',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'For a chemical process occurring at constant temperature and pressure, which condition guarantees that the process is spontaneous in the forward direction?',
    options: [
      { id: 'A', text: 'ΔG > 0' },
      { id: 'B', text: 'ΔG < 0' },
      { id: 'C', text: 'ΔH = 0' },
      { id: 'D', text: 'ΔS_system < 0' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (ΔG < 0)',
    explanation: 'According to the Second Law of Thermodynamics and Gibbs-Helmholtz equation: ΔG = ΔH - TΔS. A process is spontaneous at constant T and P if and only if Gibbs free energy change is negative (ΔG < 0). At equilibrium, ΔG = 0.',
    stepMarks: 'Step: Gibbs free energy criterion ΔG < 0 (+1 Mark)',
    commonTrap: 'Trap: Assuming only exothermic reactions (ΔH < 0) are spontaneous; endothermic reactions can be spontaneous if TΔS > ΔH.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 11 Chemistry Model Paper',
    tags: ['Chemistry', 'Thermodynamics', 'High Yield']
  },
  {
    id: 'c11-math-day-11',
    targetClass: 'Class 11',
    title: 'Number of Diagonals in an n-sided Polygon',
    subject: 'Class 11 Mathematics',
    topic: 'Permutations & Combinations',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'The total number of diagonals that can be drawn in a convex polygon having n vertices (n sides) is given by:',
    options: [
      { id: 'A', text: 'ⁿC₂' },
      { id: 'B', text: 'n(n - 1) / 2' },
      { id: 'C', text: 'n(n - 3) / 2' },
      { id: 'D', text: 'ⁿP₂ - n' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (n(n - 3) / 2)',
    explanation: 'Total lines joining any 2 of the n vertices = ⁿC₂ = n(n - 1) / 2. Out of these lines, exactly n lines are the sides of the polygon. Diagonals = ⁿC₂ - n = [n(n - 1) - 2n] / 2 = n(n - 3) / 2.',
    stepMarks: 'Step: Total lines ⁿC₂ minus n sides = n(n - 3)/2 (+1 Mark)',
    commonTrap: 'Trap: Forgetting to subtract the n outer sides and selecting ⁿC₂.',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 11 Mathematics Annual Question Paper',
    tags: ['Mathematics', 'Combinatorics', 'Sure-Shot PYQ']
  },
  {
    id: 'c11-bio-day-12',
    targetClass: 'Class 11',
    title: 'Crossing Over Stage in Meiosis',
    subject: 'Class 11 Biology',
    topic: 'Cell Cycle and Cell Division',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'During which sub-stage of Prophase I in Meiosis does crossing over (genetic recombination mediated by recombinase) take place between non-sister chromatids of homologous chromosomes?',
    options: [
      { id: 'A', text: 'Leptotene' },
      { id: 'B', text: 'Zygotene' },
      { id: 'C', text: 'Pachytene' },
      { id: 'D', text: 'Diplotene' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (Pachytene)',
    explanation: 'In Pachytene, bivalent chromosomes clearly appear as tetrads. Crossing over between non-sister chromatids of homologous chromosomes occurs at recombination nodules, catalyzed by the enzyme recombinase.',
    stepMarks: 'Step: Identifying Pachytene as the stage of crossing over (+1 Mark)',
    commonTrap: 'Trap: Confusing Zygotene (synapsis/synaptonemal complex formation) and Diplotene (dissolution of synaptonemal complex and chiasmata formation) with Pachytene.',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 11 Biology Model Paper',
    tags: ['Biology', 'Meiosis', 'NCERT Direct']
  }
];

export const CLASS_12_DAILY_QUESTIONS: DailyQuestionItem[] = [
  {
    id: 'c12-phy-day-1',
    targetClass: 'Class 12',
    title: 'Torque on an Electric Dipole in Uniform Electric Field',
    subject: 'Class 12 Physics',
    topic: 'Electric Charges and Fields',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: 'An electric dipole of dipole moment p is placed in a uniform electric field E at an angle θ with the direction of the field. The torque acting on the dipole is maximum when θ is:',
    options: [
      { id: 'A', text: '0°' },
      { id: 'B', text: '45°' },
      { id: 'C', text: '90°' },
      { id: 'D', text: '180°' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (90°)',
    explanation: 'The torque acting on an electric dipole in a uniform electric field is given by vector cross product: τ = p × E, whose magnitude is τ = pE sin θ. Torque is maximum when sin θ = 1, which occurs at θ = 90° (when the dipole is perpendicular to the electric field).',
    stepMarks: 'Step: Formula τ = pE sin θ (+1/2 Mark) | Maximum condition sin 90° = 1 (+1/2 Mark)',
    commonTrap: 'Trap: Confusing torque τ = pE sin θ (maximum at 90°) with potential energy U = -pE cos θ (minimum/most stable at 0°).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 12 Physics Board Examination',
    tags: ['Physics', 'Electrostatics', 'High Yield']
  },
  {
    id: 'c12-chem-day-2',
    targetClass: 'Class 12',
    title: "Henry's Law Constant and Gas Solubility in Liquids",
    subject: 'Class 12 Chemistry',
    topic: 'Solutions',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: "According to Henry's law, as the temperature of a liquid solvent increases, the value of Henry's law constant (K_H) and the solubility of a gas in the liquid behave as:",
    options: [
      { id: 'A', text: 'K_H increases, solubility decreases' },
      { id: 'B', text: 'K_H decreases, solubility increases' },
      { id: 'C', text: 'Both K_H and solubility increase' },
      { id: 'D', text: 'Both K_H and solubility decrease' }
    ],
    correctOption: 'A',
    correctOptionLabel: 'Option A (K_H increases, solubility decreases)',
    explanation: "Henry's law is p = K_H · χ (where χ is mole fraction of gas in liquid). For a given partial pressure p, higher K_H means lower solubility (χ = p / K_H). The dissolution of gas in liquid is an exothermic process (ΔH_sol < 0), so increasing temperature shifts equilibrium backwards, increasing K_H and decreasing the gas solubility. This is why aquatic species are more comfortable in cold water than warm water.",
    stepMarks: "Step: Henry's law relation χ = p/K_H (+1/2 Mark) | Temperature effect on K_H and solubility (+1/2 Mark)",
    commonTrap: "Trap: Assuming K_H is proportional to solubility; in fact, higher K_H implies lower solubility at given pressure!",
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 12 Chemistry Board Examination (Set 56/1/1)',
    tags: ['Chemistry', 'Solutions', 'Sure-Shot PYQ']
  },
  {
    id: 'c12-math-day-3',
    targetClass: 'Class 12',
    title: 'Determinant of Adjoint of a Square Matrix',
    subject: 'Class 12 Mathematics',
    topic: 'Matrices & Determinants',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: 'If A is a non-singular square matrix of order 3 and |A| = 5, what is the value of |adj(A)|?',
    options: [
      { id: 'A', text: '5' },
      { id: 'B', text: '25' },
      { id: 'C', text: '125' },
      { id: 'D', text: '15' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (25)',
    explanation: 'For any square matrix A of order n, the determinant of its adjoint is given by the standard identity: |adj(A)| = |A|ⁿ⁻¹. Here order n = 3 and |A| = 5. Therefore, |adj(A)| = |A|³⁻¹ = |A|² = 5² = 25.',
    stepMarks: 'Step: Property |adj(A)| = |A|ⁿ⁻¹ (+1/2 Mark) | Calculation 5² = 25 (+1/2 Mark)',
    commonTrap: 'Trap: Confusing |adj(A)| = |A|ⁿ⁻¹ with |kA| = kⁿ|A| or computing 5³ = 125.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 12 Mathematics Board Paper (Set 65/2/1)',
    tags: ['Mathematics', 'Determinants', 'Formulas']
  },
  {
    id: 'c12-bio-day-4',
    targetClass: 'Class 12',
    title: 'Ploidy Level of Primary Endosperm Nucleus (PEN)',
    subject: 'Class 12 Biology',
    topic: 'Sexual Reproduction in Flowering Plants',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: 'In angiosperms, double fertilization involves syngamy and triple fusion. What is the ploidy level of the Primary Endosperm Nucleus (PEN)?',
    options: [
      { id: 'A', text: 'Haploid (n)' },
      { id: 'B', text: 'Diploid (2n)' },
      { id: 'C', text: 'Triploid (3n)' },
      { id: 'D', text: 'Tetraploid (4n)' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (Triploid - 3n)',
    explanation: 'In angiosperms, one haploid male gamete (n) fuses with the two haploid polar nuclei (n + n = 2n) present in the central cell to produce the triploid (3n) Primary Endosperm Nucleus (PEN). This event is called triple fusion, giving endosperm a 3n chromosome complement.',
    stepMarks: 'Step: Triple fusion definition (n + 2n) (+1/2 Mark) | Resulting ploidy 3n (+1/2 Mark)',
    commonTrap: 'Trap: Confusing syngamy (egg cell + male gamete = 2n zygote) with triple fusion (polar nuclei + male gamete = 3n PEN).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 12 Biology Board Paper',
    tags: ['Biology', 'Reproduction', 'NCERT Direct']
  },
  {
    id: 'c12-phy-day-5',
    targetClass: 'Class 12',
    title: 'Energy Stored and Capacitance with Dielectric Slab',
    subject: 'Class 12 Physics',
    topic: 'Electrostatic Potential and Capacitance',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: 'A parallel plate capacitor is charged by a battery and then disconnected from the battery. A dielectric slab of dielectric constant K is now inserted between the plates. What happens to the capacitance (C) and the electrostatic energy stored (U)?',
    options: [
      { id: 'A', text: 'C increases to KC, U increases to KU' },
      { id: 'B', text: 'C increases to KC, U decreases to U/K' },
      { id: 'C', text: 'C decreases to C/K, U decreases to U/K' },
      { id: 'D', text: 'C remains unchanged, U decreases' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (C increases to KC, U decreases to U/K)',
    explanation: 'When the battery is disconnected, the charge Q on the plates remains constant. Inserting a dielectric of constant K increases capacitance from C to C\' = KC. The stored energy is U = Q² / (2C). Since Q is constant and C increases by factor K, the new stored energy is U\' = Q² / (2KC) = U / K. Hence energy decreases by factor K.',
    stepMarks: 'Step: Charge Q remains constant (+1/2 Mark) | U\' = Q²/(2KC) = U/K (+1/2 Mark)',
    commonTrap: 'Trap: Using U = 1/2 CV² and assuming V is constant; V is only constant when the battery remains connected!',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 12 Physics Board Paper',
    tags: ['Physics', 'Capacitors', 'High Yield']
  },
  {
    id: 'c12-chem-day-6',
    targetClass: 'Class 12',
    title: 'Unit of Rate Constant for First Order Reaction',
    subject: 'Class 12 Chemistry',
    topic: 'Chemical Kinetics',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: 'The SI unit of the rate constant (k) for a first-order chemical reaction is:',
    options: [
      { id: 'A', text: 'mol L⁻¹ s⁻¹' },
      { id: 'B', text: 'L mol⁻¹ s⁻¹' },
      { id: 'C', text: 's⁻¹' },
      { id: 'D', text: 'L² mol⁻² s⁻¹' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (s⁻¹)',
    explanation: 'General formula for unit of rate constant is (mol L⁻¹)¹⁻ⁿ · s⁻¹ (where n is reaction order). For a first order reaction, n = 1 => (mol L⁻¹)¹⁻¹ · s⁻¹ = (mol L⁻¹)⁰ · s⁻¹ = s⁻¹ (time⁻¹). The rate constant is independent of concentration units.',
    stepMarks: 'Step: General formula (mol/L)¹⁻ⁿ s⁻¹ (+1/2 Mark) | n=1 gives s⁻¹ (+1/2 Mark)',
    commonTrap: 'Trap: Confusing first order (s⁻¹) with zero order (mol L⁻¹ s⁻¹) or second order (L mol⁻¹ s⁻¹).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 12 Chemistry Board Exam',
    tags: ['Chemistry', 'Kinetics', 'Sure-Shot PYQ']
  },
  {
    id: 'c12-math-day-7',
    targetClass: 'Class 12',
    title: 'Definite Integral of an Odd Continuous Function',
    subject: 'Class 12 Mathematics',
    topic: 'Integrals (Definite Integrals)',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: 'The value of the definite integral ∫_{-π/2}^{π/2} (x³ + x cos x + tan⁵ x + 1) dx is equal to:',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: 'π' },
      { id: 'C', text: '2π' },
      { id: 'D', text: '1' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (π)',
    explanation: 'By the property of definite integrals: ∫_{-a}^{a} f(x) dx = 0 if f(x) is an odd function, and 2 ∫₀ᵃ f(x) dx if f(x) is even. Here x³, x cos x, and tan⁵ x are all odd functions because f(-x) = -f(x). Their integrals over [-π/2, π/2] evaluate to 0. We are left only with the constant term 1: ∫_{-π/2}^{π/2} 1 dx = [x]_{-π/2}^{π/2} = π/2 - (-π/2) = π.',
    stepMarks: 'Step: Identifying odd terms integrating to 0 (+1/2 Mark) | Integrating 1 dx = π (+1/2 Mark)',
    commonTrap: 'Trap: Answering 0 by carelessly assuming the entire integrand is odd, overlooking the +1 constant term.',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 12 Mathematics Board Paper',
    tags: ['Mathematics', 'Calculus', 'Sure-Shot PYQ']
  },
  {
    id: 'c12-bio-day-8',
    targetClass: 'Class 12',
    title: 'Direction of Okazaki Fragment Synthesis on Lagging Strand',
    subject: 'Class 12 Biology',
    topic: 'Molecular Basis of Inheritance',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: 'During DNA replication, the discontinuous synthesis of Okazaki fragments on the lagging template strand takes place in which direction?',
    options: [
      { id: 'A', text: "3' to 5'" },
      { id: 'B', text: "5' to 3'" },
      { id: 'C', text: 'Both 5\' to 3\' and 3\' to 5\'' },
      { id: 'D', text: 'Independent of polarity' }
    ],
    correctOption: 'B',
    correctOptionLabel: "Option B (5' to 3')",
    explanation: "DNA-dependent DNA polymerase can only catalyze polymerization strictly in the 5' -> 3' direction. On the template strand with polarity 5' -> 3', replication is discontinuous because the replication fork opens away from the direction of polymerization, producing short Okazaki fragments in the 5' -> 3' direction which are later joined by DNA ligase.",
    stepMarks: "Step: DNA polymerase 5' to 3' catalytic direction (+1/2 Mark) | Lagging strand synthesis recognition (+1/2 Mark)",
    commonTrap: "Trap: Confusing template polarity (which is 5' -> 3' on lagging strand) with the synthesized daughter strand polarity (which is always 5' -> 3').",
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 12 Biology Board Exam',
    tags: ['Biology', 'Genetics', 'NCERT Direct']
  },
  {
    id: 'c12-phy-day-9',
    targetClass: 'Class 12',
    title: "Lenz's Law and Conservation Principle",
    subject: 'Class 12 Physics',
    topic: 'Electromagnetic Induction',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: "Lenz's law of electromagnetic induction is a direct consequence of which fundamental law of physics?",
    options: [
      { id: 'A', text: 'Law of conservation of linear momentum' },
      { id: 'B', text: 'Law of conservation of energy' },
      { id: 'C', text: 'Law of conservation of electric charge' },
      { id: 'D', text: 'Law of conservation of angular momentum' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Law of conservation of energy)',
    explanation: "Lenz's law states that the polarity of induced emf is such that it produces a current whose magnetic field opposes the change in magnetic flux that produces it. The mechanical work done in overcoming this magnetic opposing force is transformed into electrical energy, satisfying the law of conservation of energy.",
    stepMarks: "Step: Opposition to flux change (+1/2 Mark) | Conservation of energy alignment (+1/2 Mark)",
    commonTrap: "Trap: Confusing Lenz's law (energy conservation) with Kirchhoff's Current Law (conservation of charge) or Loop Law (conservation of energy).",
    difficulty: 'EASY',
    paperSource: 'CBSE Class 12 Physics Annual Board Exam',
    tags: ['Physics', 'Electromagnetism', 'High Yield']
  },
  {
    id: 'c12-chem-day-10',
    targetClass: 'Class 12',
    title: 'Hybridization and Magnetic Character of Nickel Tetracarbonyl',
    subject: 'Class 12 Chemistry',
    topic: 'Coordination Compounds',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: 'According to Valence Bond Theory, the hybridization and magnetic nature of [Ni(CO)₄] are respectively:',
    options: [
      { id: 'A', text: 'dsp², diamagnetic' },
      { id: 'B', text: 'sp³, paramagnetic' },
      { id: 'C', text: 'sp³, diamagnetic' },
      { id: 'D', text: 'dsp², paramagnetic' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (sp³, diamagnetic)',
    explanation: 'Nickel in [Ni(CO)₄] is in zero oxidation state: Ni⁰ = 3d⁸ 4s². Carbon monoxide (CO) is a strong field ligand that forces the two 4s electrons into the 3d subshell to pair with the 3d electrons, resulting in a completely filled 3d¹⁰ configuration. The vacant 4s and three 4p orbitals hybridize to form four sp³ hybrid orbitals. Having zero unpaired electrons, it is diamagnetic with tetrahedral geometry.',
    stepMarks: 'Step: 3d¹⁰ paired configuration due to strong CO (+1/2 Mark) | sp³ tetrahedral & diamagnetic (+1/2 Mark)',
    commonTrap: 'Trap: Assuming Ni²⁺ in [Ni(CN)₄]²⁻ (which is dsp² square planar) instead of neutral Ni⁰ in [Ni(CO)₄] (sp³ tetrahedral).',
    difficulty: 'CHALLENGING',
    paperSource: 'CBSE Class 12 Chemistry Board Examination',
    tags: ['Chemistry', 'Coordination Chemistry', 'High Yield']
  },
  {
    id: 'c12-math-day-11',
    targetClass: 'Class 12',
    title: 'Condition for Perpendicular Vectors',
    subject: 'Class 12 Mathematics',
    topic: 'Vector Algebra',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: 'If vectors a = 2i + λj + k and b = 4i - 2j - 2k are perpendicular to each other, what is the value of scalar parameter λ?',
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '-3' },
      { id: 'C', text: '6' },
      { id: 'D', text: '0' }
    ],
    correctOption: 'A',
    correctOptionLabel: 'Option A (3)',
    explanation: 'Two non-zero vectors a and b are perpendicular if and only if their scalar (dot) product equals zero: a · b = 0 => (2)(4) + (λ)(-2) + (1)(-2) = 0 => 8 - 2λ - 2 = 0 => 6 - 2λ = 0 => 2λ = 6 => λ = 3.',
    stepMarks: 'Step: a · b = 0 condition (+1/2 Mark) | 8 - 2λ - 2 = 0 => λ = 3 (+1/2 Mark)',
    commonTrap: 'Trap: Calculation sign error in (1)(-2), yielding λ = 5 or -3.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 12 Mathematics Model Examination',
    tags: ['Mathematics', 'Vectors', 'Sure-Shot PYQ']
  },
  {
    id: 'c12-bio-day-12',
    targetClass: 'Class 12',
    title: 'Recognition Sequence of Restriction Enzyme EcoRI',
    subject: 'Class 12 Biology',
    topic: 'Biotechnology: Principles and Processes',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: 'The specific palindromic nucleotide recognition sequence recognized and cleaved by the restriction endonuclease EcoRI is:',
    options: [
      { id: 'A', text: "5'-GAATTC-3'" },
      { id: 'B', text: "5'-GGATCC-3'" },
      { id: 'C', text: "5'-AAGCTT-3'" },
      { id: 'D', text: "5'-GATATC-3'" }
    ],
    correctOption: 'A',
    correctOptionLabel: "Option A (5'-GAATTC-3')",
    explanation: "EcoRI inspects the length of a DNA sequence and binds to the specific 6 base-pair palindromic sequence 5'-GAATTC-3' (opposite strand 3'-CTTAAG-5'). It cuts each of the two strands of the double helix at a specific point between G and A, leaving single-stranded sticky ends (overhangs).",
    stepMarks: "Step: EcoRI palindromic sequence recognition (+1 Mark)",
    commonTrap: "Trap: Confusing EcoRI (5'-GAATTC-3') with BamHI (5'-GGATCC-3') or HindIII (5'-AAGCTT-3').",
    difficulty: 'EASY',
    paperSource: 'CBSE Class 12 Biology Board Exam Sample Paper',
    tags: ['Biology', 'Biotechnology', 'NCERT Direct']
  }
];

export const CLASS_9_DAILY_QUESTIONS: DailyQuestionItem[] = [
  {
    id: 'c9-phy-day-1',
    targetClass: 'Class 9',
    title: 'Displacement on Circular Track',
    subject: 'Class 9 Science',
    topic: 'Physics: Motion',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'An athlete completes one round of a circular track of diameter 200 m in 40 s. What will be the magnitude of displacement at the end of 2 minutes 20 seconds?',
    options: [
      { id: 'A', text: '0 m' },
      { id: 'B', text: '200 m' },
      { id: 'C', text: '314 m' },
      { id: 'D', text: '2200 m' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (200 m)',
    explanation: 'Total time = 2 min 20 s = 140 s. Number of rounds = 140 / 40 = 3.5 rounds. After 3 complete rounds, the athlete returns to the start point (displacement = 0). After the additional 0.5 round, the athlete is at the diametrically opposite point of the circle. Thus, the shortest straight line between initial and final points is equal to the track diameter = 200 m.',
    stepMarks: 'Step: Calculating 3.5 rounds (+1/2 Mark) | Diameter opposite point = 200 m (+1/2 Mark)',
    commonTrap: 'Trap: Calculating total distance travelled (3.5 × 2πr = 2200 m) instead of straight-line displacement (200 m).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Science Annual Examination',
    tags: ['Science', 'Motion', 'Physics', 'NCERT Direct']
  },
  {
    id: 'c9-chem-day-2',
    targetClass: 'Class 9',
    title: 'Conditions for Liquefaction of Gases',
    subject: 'Class 9 Science',
    topic: 'Chemistry: Matter in Our Surroundings',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'Which combination of physical conditions is most effective for liquefying atmospheric gases into a liquid state?',
    options: [
      { id: 'A', text: 'High temperature and high pressure' },
      { id: 'B', text: 'Low temperature and low pressure' },
      { id: 'C', text: 'Low temperature and high pressure' },
      { id: 'D', text: 'High temperature and low pressure' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (Low temperature and high pressure)',
    explanation: 'According to kinetic molecular theory, applying high pressure compresses the gas particles close together, overcoming their intermolecular distance. Simultaneously, lowering the temperature decreases their kinetic energy, allowing intermolecular forces of attraction to bind them into a liquid.',
    stepMarks: 'Step: High pressure reduces particle distance (+1/2 Mark) | Low temperature reduces kinetic energy (+1/2 Mark)',
    commonTrap: 'Trap: High temperature increases kinetic energy, making particles move faster and escape as gas, not condense!',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Science Annual Paper',
    tags: ['Science', 'Chemistry', 'Matter in Our Surroundings', 'NCERT Direct']
  },
  {
    id: 'c9-bio-day-3',
    targetClass: 'Class 9',
    title: 'Powerhouse of the Cell',
    subject: 'Class 9 Science',
    topic: 'Biology: The Fundamental Unit of Life',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'Which cell organelle is known as the "powerhouse of the cell", and which energy currency molecule does it produce?',
    options: [
      { id: 'A', text: 'Ribosome — synthesizes proteins' },
      { id: 'B', text: 'Mitochondria — produces ATP' },
      { id: 'C', text: 'Lysosome — produces digestive enzymes' },
      { id: 'D', text: 'Golgi Apparatus — produces secretory vesicles' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Mitochondria — produces ATP)',
    explanation: 'Mitochondria are known as the powerhouses of the cell because they generate ATP (Adenosine Triphosphate) molecules through cellular respiration. ATP acts as the universal chemical energy currency for vital life processes and metabolic reactions.',
    stepMarks: 'Step: Identification of Mitochondria (+1/2 Mark) | ATP as cellular energy currency (+1/2 Mark)',
    commonTrap: 'Trap: Confusing Mitochondria with Lysosomes (which are called the "suicide bags" of the cell).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Science Board Sample',
    tags: ['Science', 'Biology', 'Cell Biology', 'NCERT Direct']
  },
  {
    id: 'c9-phy-day-4',
    targetClass: 'Class 9',
    title: 'Linear Momentum of a Moving Body',
    subject: 'Class 9 Science',
    topic: 'Physics: Force and Laws of Motion',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'A vehicle of mass 1200 kg travels at a constant velocity of 20 m/s. What is the magnitude of its linear momentum?',
    options: [
      { id: 'A', text: '60 kg·m/s' },
      { id: 'B', text: '12000 kg·m/s' },
      { id: 'C', text: '24000 kg·m/s' },
      { id: 'D', text: '240000 kg·m/s' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (24000 kg·m/s)',
    explanation: 'Linear momentum (p) is the product of mass (m) and velocity (v): p = m × v = 1200 kg × 20 m/s = 24000 kg·m/s (or N·s). Momentum is a vector quantity having the same direction as velocity.',
    stepMarks: 'Step: Formula p = mv (+1/2 Mark) | Calculation 1200 × 20 = 24000 kg·m/s (+1/2 Mark)',
    commonTrap: 'Trap: Missing a zero in multiplication (12000 instead of 24000) or confusing momentum with kinetic energy (1/2 mv² = 240000 J).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Science Annual Paper',
    tags: ['Science', 'Physics', 'Laws of Motion', 'Formulas']
  },
  {
    id: 'c9-chem-day-5',
    targetClass: 'Class 9',
    title: 'Tyndall Effect in Colloidal Solutions',
    subject: 'Class 9 Science',
    topic: 'Chemistry: Is Matter Around Us Pure',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'Which of the following mixtures exhibits the Tyndall effect when a beam of light is passed through it?',
    options: [
      { id: 'A', text: 'Common salt aqueous solution' },
      { id: 'B', text: 'Copper sulfate solution' },
      { id: 'C', text: 'Milk / Starch solution' },
      { id: 'D', text: 'Sugar aqueous solution' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (Milk / Starch solution)',
    explanation: 'The Tyndall effect is the scattering of a visible light beam by colloidal particles. Salt, sugar, and copper sulfate form true solutions where solute particles are smaller than 1 nm and cannot scatter light. Milk and starch solutions are colloids where particle sizes (1–100 nm) are sufficiently large to scatter light along the beam path.',
    stepMarks: 'Step: Identification of colloid (Milk/Starch) (+1/2 Mark) | Tyndall light scattering principle (+1/2 Mark)',
    commonTrap: 'Trap: Believing copper sulfate scatters light because it has a bright blue color; colored true solutions do not scatter light.',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 9 Science Periodic Assessment',
    tags: ['Science', 'Chemistry', 'Colloids', 'Sure-Shot PYQ']
  },
  {
    id: 'c9-math-day-6',
    targetClass: 'Class 9',
    title: 'Classification of Real Numbers (Rational vs Irrational)',
    subject: 'Class 9 Mathematics',
    topic: 'Mathematics: Number Systems',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'Which of the following numbers is an irrational number?',
    options: [
      { id: 'A', text: '√225' },
      { id: 'B', text: '√23' },
      { id: 'C', text: '0.3796' },
      { id: 'D', text: '7.478478...' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (√23)',
    explanation: '√225 = 15 (a rational integer). 0.3796 is a terminating decimal (hence rational). 7.478478... is non-terminating but recurring (rational, p/q form). 23 is a prime number, and the square root of any non-perfect square is a non-terminating, non-recurring decimal, making √23 an irrational number.',
    stepMarks: 'Step: Non-perfect square square root is irrational (+1/2 Mark) | Identification of √23 (+1/2 Mark)',
    commonTrap: 'Trap: Confusing √225 with an irrational number because it has a square root symbol, forgetting 15² = 225.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Mathematics Model Paper',
    tags: ['Mathematics', 'Number Systems', 'NCERT Direct']
  },
  {
    id: 'c9-phy-day-7',
    targetClass: 'Class 9',
    title: 'Weight of an Object on the Moon',
    subject: 'Class 9 Science',
    topic: 'Physics: Gravitation',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'An object weighs 60 N on the surface of the Earth. What will be its weight on the surface of the Moon?',
    options: [
      { id: 'A', text: '600 N' },
      { id: 'B', text: '60 N' },
      { id: 'C', text: '10 N' },
      { id: 'D', text: '6 N' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (10 N)',
    explanation: 'The acceleration due to gravity on the Moon (g_moon) is approximately 1/6th of that on Earth (g_earth) due to the smaller mass and radius of the Moon. Therefore, Weight on Moon = (1/6) × Weight on Earth = (1/6) × 60 N = 10 N.',
    stepMarks: 'Step: W_moon = (1/6) * W_earth (+1/2 Mark) | 60 / 6 = 10 N (+1/2 Mark)',
    commonTrap: 'Trap: Confusing weight with mass. Mass remains constant everywhere, but weight is force W = mg and reduces by a factor of 6 on the Moon.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Science Annual Exam',
    tags: ['Science', 'Physics', 'Gravitation', 'High Yield']
  },
  {
    id: 'c9-bio-day-8',
    targetClass: 'Class 9',
    title: 'Vascular Tissues in Plants',
    subject: 'Class 9 Science',
    topic: 'Biology: Tissues',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'Which complex permanent tissue is responsible for the unidirectional conduction of water and dissolved minerals from roots to the leaves in vascular plants?',
    options: [
      { id: 'A', text: 'Phloem' },
      { id: 'B', text: 'Xylem' },
      { id: 'C', text: 'Collenchyma' },
      { id: 'D', text: 'Parenchyma' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Xylem)',
    explanation: 'Xylem consists of tracheids, vessels, xylem parenchyma, and xylem fibres. It provides unidirectional transport of water and mineral salts absorbed from the soil upward to stems and leaves. Phloem conducts prepared food (sucrose) bidirectionally from source leaves to storage organs.',
    stepMarks: 'Step: Identification of Xylem as water conducting tissue (+1 Mark)',
    commonTrap: 'Trap: Confusing Xylem (water/minerals) with Phloem (food/photosynthates).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Science Board Sample',
    tags: ['Science', 'Biology', 'Plant Tissues', 'NCERT Direct']
  },
  {
    id: 'c9-chem-day-9',
    targetClass: 'Class 9',
    title: 'Molecular Mass Calculation of Water',
    subject: 'Class 9 Science',
    topic: 'Chemistry: Atoms and Molecules',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'What is the relative molecular mass of water (H₂O), given atomic masses H = 1 u and O = 16 u?',
    options: [
      { id: 'A', text: '17 u' },
      { id: 'B', text: '18 u' },
      { id: 'C', text: '34 u' },
      { id: 'D', text: '16 u' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (18 u)',
    explanation: 'Molecular mass of H₂O = 2 × (Atomic mass of Hydrogen) + 1 × (Atomic mass of Oxygen) = 2 × (1 u) + 1 × (16 u) = 2 u + 16 u = 18 u (unified mass).',
    stepMarks: 'Step: 2(1) + 16 = 18 u (+1 Mark)',
    commonTrap: 'Trap: Forgetting that water has 2 hydrogen atoms, computing 1 + 16 = 17 u.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Science Periodic Test',
    tags: ['Science', 'Chemistry', 'Atoms & Molecules', 'Formulas']
  },
  {
    id: 'c9-math-day-10',
    targetClass: 'Class 9',
    title: 'Zero of a Linear Polynomial',
    subject: 'Class 9 Mathematics',
    topic: 'Mathematics: Polynomials',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'What is the zero of the linear polynomial p(x) = 2x + 5?',
    options: [
      { id: 'A', text: '5 / 2' },
      { id: 'B', text: '-5 / 2' },
      { id: 'C', text: '2 / 5' },
      { id: 'D', text: '-2 / 5' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (-5 / 2)',
    explanation: 'To find the zero of polynomial p(x), equate p(x) to 0: 2x + 5 = 0 => 2x = -5 => x = -5/2. Substituting x = -5/2 gives p(-5/2) = 2(-5/2) + 5 = -5 + 5 = 0.',
    stepMarks: 'Step: Equating 2x + 5 = 0 (+1/2 Mark) | x = -5/2 (+1/2 Mark)',
    commonTrap: 'Trap: Forgetting the negative sign when transposing +5 across the equals sign, arriving at +5/2.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Mathematics Annual Paper',
    tags: ['Mathematics', 'Polynomials', 'NCERT Direct']
  },
  {
    id: 'c9-math-day-11',
    targetClass: 'Class 9',
    title: 'Exponential Power Manipulation',
    subject: 'Class 9 Mathematics',
    topic: 'Mathematics: Number Systems',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'If 10^x = 64, what is the numerical value of 10^(x/2 + 1)?',
    options: [
      { id: 'A', text: '42' },
      { id: 'B', text: '18' },
      { id: 'C', text: '81' },
      { id: 'D', text: '80' }
    ],
    correctOption: 'D',
    correctOptionLabel: 'Option D (80)',
    explanation: 'By exponent rules: 10^(x/2 + 1) = 10^(x/2) · 10^1 = (10^x)^(1/2) · 10. Since 10^x = 64: (64)^(1/2) · 10 = √64 · 10 = 8 · 10 = 80.',
    stepMarks: 'Step: Separating into (10^x)^(1/2) · 10 (+1/2 Mark) | √64 · 10 = 80 (+1/2 Mark)',
    commonTrap: 'Trap: Incorrectly dividing 64 by 2 to get 32 · 10 = 320 or other arithmetic slips.',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 9 Mathematics Exemplar',
    tags: ['Mathematics', 'Number Systems', 'Exponents', 'High Yield']
  },
  {
    id: 'c9-math-day-12',
    targetClass: 'Class 9',
    title: 'Product of Decimal Exponents',
    subject: 'Class 9 Mathematics',
    topic: 'Mathematics: Number Systems',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'The value of (256)^0.16 × (256)^0.09 is equal to:',
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '16' },
      { id: 'C', text: '64' },
      { id: 'D', text: '256' }
    ],
    correctOption: 'A',
    correctOptionLabel: 'Option A (4)',
    explanation: 'Using exponent law a^p × a^q = a^(p + q): (256)^0.16 × (256)^0.09 = (256)^(0.16 + 0.09) = (256)^0.25. Since 0.25 = 1/4: (256)^(1/4) = (4^4)^(1/4) = 4.',
    stepMarks: 'Step: Exponent addition 0.16 + 0.09 = 0.25 = 1/4 (+1/2 Mark) | Fourth root of 256 = 4 (+1/2 Mark)',
    commonTrap: 'Trap: Multiplying the bases 256 × 256 instead of adding exponents.',
    difficulty: 'EASY',
    paperSource: 'NCERT Exemplar Class 9 Mathematics',
    tags: ['Mathematics', 'Number Systems', 'Laws of Exponents']
  },
  {
    id: 'c9-math-day-13',
    targetClass: 'Class 9',
    title: 'Reciprocal Quadratic Identity',
    subject: 'Class 9 Mathematics',
    topic: 'Mathematics: Polynomials',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'If x + 1/x = 7, then the value of x² + 1/x² is:',
    options: [
      { id: 'A', text: '36' },
      { id: 'B', text: '49' },
      { id: 'C', text: '47' },
      { id: 'D', text: '52' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (47)',
    explanation: 'Squaring both sides of (x + 1/x) = 7: (x + 1/x)² = 7² => x² + 2(x)(1/x) + 1/x² = 49 => x² + 2 + 1/x² = 49 => x² + 1/x² = 49 - 2 = 47.',
    stepMarks: 'Step: Squaring identity (x + 1/x)² = x² + 2 + 1/x² (+1/2 Mark) | Subtracting 2 to get 47 (+1/2 Mark)',
    commonTrap: 'Trap: Forgetting to subtract the cross-term 2, simply answering 7² = 49.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Mathematics Annual Paper',
    tags: ['Mathematics', 'Polynomials', 'Algebraic Identities']
  },
  {
    id: 'c9-math-day-14',
    targetClass: 'Class 9',
    title: 'Remainder Theorem on High Exponents',
    subject: 'Class 9 Mathematics',
    topic: 'Mathematics: Polynomials',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'When the polynomial p(x) = x⁹⁹ + 99 is divided by (x + 1), the remainder is:',
    options: [
      { id: 'A', text: '98' },
      { id: 'B', text: '99' },
      { id: 'C', text: '100' },
      { id: 'D', text: '0' }
    ],
    correctOption: 'A',
    correctOptionLabel: 'Option A (98)',
    explanation: 'By Remainder Theorem, dividing p(x) by (x + 1) yields remainder R = p(-1). Substituting x = -1: p(-1) = (-1)⁹⁹ + 99. Since 99 is odd, (-1)⁹⁹ = -1. Therefore, remainder = -1 + 99 = 98.',
    stepMarks: 'Step: Identifying R = p(-1) (+1/2 Mark) | Evaluating (-1)⁹⁹ + 99 = 98 (+1/2 Mark)',
    commonTrap: 'Trap: Mistakenly evaluating (-1)⁹⁹ as +1 to get 100.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Mathematics Question Bank',
    tags: ['Mathematics', 'Polynomials', 'Remainder Theorem']
  },
  {
    id: 'c9-math-day-15',
    targetClass: 'Class 9',
    title: 'Class Mark of Frequency Interval',
    subject: 'Class 9 Mathematics',
    topic: 'Mathematics: Statistics',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'What is the class mark of the class interval 90 – 130?',
    options: [
      { id: 'A', text: '90' },
      { id: 'B', text: '105' },
      { id: 'C', text: '115' },
      { id: 'D', text: '110' }
    ],
    correctOption: 'D',
    correctOptionLabel: 'Option D (110)',
    explanation: 'Class Mark is the central mid-point of the class interval: Class Mark = (Upper Class Limit + Lower Class Limit) / 2 = (130 + 90) / 2 = 220 / 2 = 110.',
    stepMarks: 'Step: Formula (Upper + Lower)/2 (+1/2 Mark) | Calculation (130 + 90)/2 = 110 (+1/2 Mark)',
    commonTrap: 'Trap: Subtracting limits (130 - 90 = 40) which gives Class Size instead of Class Mark.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Mathematics Annual Paper',
    tags: ['Mathematics', 'Statistics', 'Class Mark']
  },
  {
    id: 'c9-sci-day-16',
    targetClass: 'Class 9',
    title: 'Physical State of Water at 250 °C',
    subject: 'Class 9 Science',
    topic: 'Chemistry: Matter in Our Surroundings',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'What is the physical state of water at 250 °C under standard atmospheric pressure?',
    options: [
      { id: 'A', text: 'Liquid' },
      { id: 'B', text: 'Solid' },
      { id: 'C', text: 'Gaseous (Steam)' },
      { id: 'D', text: 'Supercooled liquid' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (Gaseous / Steam)',
    explanation: 'The boiling point of water is 100 °C (373.15 K). At any temperature above 100 °C (such as 250 °C), thermal kinetic energy completely overcomes intermolecular attractions, so water exists solely as gas/steam.',
    stepMarks: 'Step: Boiling point is 100 °C (+1/2 Mark) | At 250 °C water exists as gas (+1/2 Mark)',
    commonTrap: 'Trap: Confusing 250 °C with standard room temperature (25 °C).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Science Annual Paper',
    tags: ['Science', 'Chemistry', 'Matter in Our Surroundings']
  },
  {
    id: 'c9-sci-day-17',
    targetClass: 'Class 9',
    title: 'Base SI Unit of Temperature',
    subject: 'Class 9 Science',
    topic: 'Chemistry: Matter in Our Surroundings',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'What is the official SI unit of temperature?',
    options: [
      { id: 'A', text: 'Degree Celsius (°C)' },
      { id: 'B', text: 'Degree Fahrenheit (°F)' },
      { id: 'C', text: 'Kelvin (K)' },
      { id: 'D', text: 'Calorie (cal)' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (Kelvin)',
    explanation: 'Kelvin (symbol K) is the base SI unit of thermodynamic temperature. Degree Celsius and Fahrenheit are common scales, but Kelvin is the official SI unit. Note: Degree symbol (°) is never written with Kelvin.',
    stepMarks: 'Step: Identifying Kelvin (K) as official base SI unit (+1 Mark)',
    commonTrap: 'Trap: Choosing Degree Celsius (°C) because it is commonly used on thermometers.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Science Question Bank',
    tags: ['Science', 'Matter in Our Surroundings', 'SI Units']
  },
  {
    id: 'c9-sci-day-18',
    targetClass: 'Class 9',
    title: 'Tyndall Effect in Colloidal Solutions',
    subject: 'Class 9 Science',
    topic: 'Chemistry: Is Matter Around Us Pure',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'Which of the following mixtures shows the Tyndall effect when a light beam passes through it?',
    options: [
      { id: 'A', text: 'Common salt solution in water' },
      { id: 'B', text: 'Copper sulphate solution' },
      { id: 'C', text: 'Milk or Starch sol' },
      { id: 'D', text: 'Dilute sugar syrup' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (Milk or Starch sol)',
    explanation: 'The Tyndall effect is the scattering of light by colloidal particles (1 nm to 1000 nm). Milk and starch solutions are colloids, so the light beam path becomes clearly illuminated. Salt, copper sulphate, and sugar form true solutions (< 1 nm) and do not scatter light.',
    stepMarks: 'Step: Identifying colloid mixture (+1/2 Mark) | Light scattering explanation (+1/2 Mark)',
    commonTrap: 'Trap: Selecting copper sulphate solution because of its bright blue color (it is a true solution).',
    difficulty: 'EASY',
    paperSource: 'NCERT Exemplar Class 9 Science',
    tags: ['Science', 'Chemistry', 'Is Matter Around Us Pure', 'Tyndall Effect']
  },
  {
    id: 'c9-sci-day-19',
    targetClass: 'Class 9',
    title: 'Chemical Formula of Aluminium Sulphate',
    subject: 'Class 9 Science',
    topic: 'Chemistry: Atoms and Molecules',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'What is the correct chemical formula of Aluminium Sulphate?',
    options: [
      { id: 'A', text: 'AlSO₄' },
      { id: 'B', text: 'Al₂(SO₄)₃' },
      { id: 'C', text: 'Al₃(SO₄)₂' },
      { id: 'D', text: 'Al₂(SO₄)' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Al₂(SO₄)₃)',
    explanation: 'Aluminium cation has valency +3 (Al³⁺) and Sulphate polyatomic anion has valency -2 (SO₄²⁻). Criss-crossing the charges yields Al₂(SO₄)₃.',
    stepMarks: 'Step: Valencies Al = 3, SO₄ = 2 (+1/2 Mark) | Criss-cross formula Al₂(SO₄)₃ (+1/2 Mark)',
    commonTrap: 'Trap: Omitting parentheses on polyatomic sulphate ion or inverting valencies.',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 9 Science Annual Exam',
    tags: ['Science', 'Chemistry', 'Atoms and Molecules', 'Chemical Formulae']
  },
  {
    id: 'c9-sci-day-20',
    targetClass: 'Class 9',
    title: 'Audible Sound Frequency Range in Humans',
    subject: 'Class 9 Science',
    topic: 'Physics: Sound',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'The audible frequency range for a normal healthy human ear is approximately:',
    options: [
      { id: 'A', text: '20 Hz to 20,000 Hz' },
      { id: 'B', text: '2 Hz to 2,000 Hz' },
      { id: 'C', text: '200 Hz to 200,000 Hz' },
      { id: 'D', text: '0 Hz to 20 Hz' }
    ],
    correctOption: 'A',
    correctOptionLabel: 'Option A (20 Hz to 20,000 Hz)',
    explanation: 'Human ears can perceive sound waves with frequencies between 20 Hz and 20,000 Hz (20 kHz). Frequencies below 20 Hz are infrasonic, and frequencies above 20 kHz are ultrasonic.',
    stepMarks: 'Step: Stating audible limits 20 Hz to 20,000 Hz (+1 Mark)',
    commonTrap: 'Trap: Confusing 20 Hz with 200 Hz.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Science Question Bank',
    tags: ['Science', 'Physics', 'Sound', 'Audible Range']
  },
  {
    id: 'c9-sst-day-21',
    targetClass: 'Class 9',
    title: 'Division of Power: Spirit of the Laws',
    subject: 'Class 9 Social Science',
    topic: 'History: The French Revolution',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'In his famous work "The Spirit of the Laws", which French philosopher proposed the division of power within the government between the legislative, the executive, and the judiciary?',
    options: [
      { id: 'A', text: 'Jean-Jacques Rousseau' },
      { id: 'B', text: 'Montesquieu' },
      { id: 'C', text: 'John Locke' },
      { id: 'D', text: 'Voltaire' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Montesquieu)',
    explanation: 'Montesquieu proposed a tripartite division of state power between legislative, executive, and judiciary in "The Spirit of the Laws" (1748), which became the operational model for democratic constitutions worldwide, including the USA.',
    stepMarks: 'Step: Correct identification of Montesquieu (+1 Mark)',
    commonTrap: 'Trap: Confusing Montesquieu with Rousseau, who authored "The Social Contract".',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Social Science Annual Exam (Oswal Question Bank)',
    tags: ['Social Science', 'History', 'French Revolution', 'Enlightenment']
  },
  {
    id: 'c9-sst-day-22',
    targetClass: 'Class 9',
    title: 'Standard Meridian of India and Time Lag',
    subject: 'Class 9 Social Science',
    topic: 'Geography: India - Size and Location',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'The Standard Meridian of India is 82°30\' E, which passes through Mirzapur in Uttar Pradesh. What is the approximate time lag between Arunachal Pradesh in the east and Gujarat in the west?',
    options: [
      { id: 'A', text: '30 minutes' },
      { id: 'B', text: '1 hour' },
      { id: 'C', text: '2 hours' },
      { id: 'D', text: '3 hours' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (2 hours)',
    explanation: 'India spans nearly 30° of longitude (68°7\' E to 97°25\' E). Since the Earth rotates 360° in 24 hours (1° per 4 minutes), the 30° difference translates to 30 × 4 = 120 minutes = 2 hours.',
    stepMarks: 'Step: Calculating 30° × 4 min = 120 min = 2 hours (+1 Mark)',
    commonTrap: 'Trap: Confusing latitudinal span with longitudinal span.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Geography (Oswal Question Bank)',
    tags: ['Social Science', 'Geography', 'Standard Meridian', 'India Size & Location']
  },
  {
    id: 'c9-sst-day-23',
    targetClass: 'Class 9',
    title: 'Adoption vs Enforcement of Indian Constitution',
    subject: 'Class 9 Social Science',
    topic: 'Political Science: Constitutional Design',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'The Indian Constituent Assembly formally adopted and enacted the Constitution on which historic date?',
    options: [
      { id: 'A', text: '15 August 1947' },
      { id: 'B', text: '26 November 1949' },
      { id: 'C', text: '26 January 1950' },
      { id: 'D', text: '30 January 1948' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (26 November 1949)',
    explanation: 'The Constituent Assembly completed and adopted the Constitution on 26 November 1949 (celebrated as Constitution Day). It came into legal effect two months later on 26 January 1950 (Republic Day) to commemorate the Purna Swaraj declaration of 1930.',
    stepMarks: 'Step: Correct date 26 November 1949 (+1 Mark)',
    commonTrap: 'Trap: Confusing adoption date (26 Nov 1949) with enforcement / Republic Day (26 Jan 1950).',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 9 Democratic Politics (Oswal Question Bank)',
    tags: ['Social Science', 'Political Science', 'Constitutional Design', 'Constituent Assembly']
  },
  {
    id: 'c9-sst-day-24',
    targetClass: 'Class 9',
    title: 'Disguised Unemployment in Indian Agriculture',
    subject: 'Class 9 Social Science',
    topic: 'Economics: People as Resource',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'When more workers are employed in an agricultural plot than actually needed, such that removing surplus workers does not reduce total output, it is called:',
    options: [
      { id: 'A', text: 'Seasonal unemployment' },
      { id: 'B', text: 'Disguised unemployment' },
      { id: 'C', text: 'Frictional unemployment' },
      { id: 'D', text: 'Educated unemployment' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Disguised unemployment)',
    explanation: 'Disguised unemployment occurs when individuals appear to be actively employed, but their marginal contribution to production is zero. It is characteristic of small family-owned farmlands in India.',
    stepMarks: 'Step: Definition of disguised unemployment with zero marginal productivity (+1 Mark)',
    commonTrap: 'Trap: Confusing disguised unemployment with seasonal unemployment (which depends on agricultural cropping cycles).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Economics (Oswal Question Bank)',
    tags: ['Social Science', 'Economics', 'People as Resource', 'Unemployment']
  },
  {
    id: 'c9-sst-day-25',
    targetClass: 'Class 9',
    title: 'Strait Separating India and Sri Lanka',
    subject: 'Class 9 Social Science',
    topic: 'Geography: India - Size and Location',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'Which narrow channel of sea separates India from its southern island neighbour Sri Lanka?',
    options: [
      { id: 'A', text: 'Ten Degree Channel' },
      { id: 'B', text: 'Palk Strait and Gulf of Mannar' },
      { id: 'C', text: 'Strait of Malacca' },
      { id: 'D', text: 'Duncan Passage' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Palk Strait and Gulf of Mannar)',
    explanation: 'Sri Lanka is separated from India by a narrow channel of sea formed by the Palk Strait and the Gulf of Mannar. The Ten Degree Channel separates the Andaman and Nicobar Islands.',
    stepMarks: 'Step: Correct identification of Palk Strait and Gulf of Mannar (+1 Mark)',
    commonTrap: 'Trap: Selecting Ten Degree Channel or Malacca Strait.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Geography (Oswal Question Bank)',
    tags: ['Social Science', 'Geography', 'Map Work', 'Neighbours']
  },
  {
    id: 'c9-eng-day-26',
    targetClass: 'Class 9',
    title: 'Subject-Verb Concord with "Or / Nor"',
    subject: 'Class 9 English',
    topic: 'Grammar: Subject-Verb Concord',
    marks: '1 Mark (CBSE Class 9 Board Exam)',
    question: 'Choose the correct verb to complete the sentence: "Neither the teacher nor the students __________ aware of the sudden change in exam schedule."',
    options: [
      { id: 'A', text: 'was' },
      { id: 'B', text: 'were' },
      { id: 'C', text: 'is' },
      { id: 'D', text: 'has been' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (were)',
    explanation: 'When two subjects are connected by "Neither... nor" or "Either... or", the finite verb agrees in number and person with the nearer subject. Here, the nearer subject is "the students" (plural), requiring the plural verb "were".',
    stepMarks: 'Step: Applying rule of proximity in subject-verb concord (+1 Mark)',
    commonTrap: 'Trap: Making the verb agree with the first subject ("teacher") instead of the closer plural noun.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 English Language & Literature (Oswal Question Bank)',
    tags: ['English', 'Grammar', 'Subject-Verb Concord', 'High Yield']
  },
  {
    id: 'c9-eng-day-27',
    targetClass: 'Class 9',
    title: 'Past Perfect Tense Sequencing',
    subject: 'Class 9 English',
    topic: 'Grammar: Tenses',
    marks: '1 Mark (CBSE Class 9 Board Exam)',
    question: 'Select the grammatically correct sentence demonstrating the proper sequence of past events:',
    options: [
      { id: 'A', text: 'When we reached the cinema hall, the movie had already started.' },
      { id: 'B', text: 'When we reached the cinema hall, the movie already starts.' },
      { id: 'C', text: 'When we had reached the cinema hall, the movie already started.' },
      { id: 'D', text: 'When we have reached the cinema hall, the movie had already started.' }
    ],
    correctOption: 'A',
    correctOptionLabel: 'Option A (When we reached the cinema hall, the movie had already started)',
    explanation: 'When two actions happened in the past, the earlier completed action takes the Past Perfect Tense ("had already started"), while the later action takes the Simple Past Tense ("reached").',
    stepMarks: 'Step: Identifying prior completed action as Past Perfect (+1 Mark)',
    commonTrap: 'Trap: Using past perfect for both clauses or simple past for the earlier action.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 English Language & Literature (Oswal Question Bank)',
    tags: ['English', 'Grammar', 'Tenses', 'Past Perfect']
  },
  {
    id: 'c9-eng-day-28',
    targetClass: 'Class 9',
    title: 'The Mechanical Teacher in 2157',
    subject: 'Class 9 English',
    topic: 'Beehive: The Fun They Had (Isaac Asimov)',
    marks: '1 Mark (CBSE Class 9 Board Exam)',
    question: 'In Isaac Asimov\'s "The Fun They Had", why was Margie performing progressively worse in her geography tests?',
    options: [
      { id: 'A', text: 'She was not paying attention to her lessons' },
      { id: 'B', text: 'The geography sector of the mechanical teacher was geared too fast' },
      { id: 'C', text: 'Her mother refused to hire a County Inspector' },
      { id: 'D', text: 'The computer screen was broken and illegible' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (The geography sector was geared too fast)',
    explanation: 'The County Inspector explained to Mrs. Jones that Margie was faultless; the geography sector of the mechanical teacher was geared a little too quickly for her age, so he slowed it down to an average ten-year level.',
    stepMarks: 'Step: Correct reason from NCERT text (+1 Mark)',
    commonTrap: 'Trap: Assuming Margie was lazy or undisciplined.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 English Beehive (Oswal Question Bank)',
    tags: ['English', 'Literature', 'Beehive', 'Isaac Asimov']
  },
  {
    id: 'c9-eng-day-29',
    targetClass: 'Class 9',
    title: 'Symbolism of Two Roads in a Yellow Wood',
    subject: 'Class 9 English',
    topic: 'Beehive Poetry: The Road Not Taken (Robert Frost)',
    marks: '1 Mark (CBSE Class 9 Board Exam)',
    question: 'In Robert Frost\'s poem "The Road Not Taken", what do the "two roads diverged in a yellow wood" symbolize?',
    options: [
      { id: 'A', text: 'Two different physical highways leading to New York' },
      { id: 'B', text: 'The crucial choices and alternative paths one must navigate in life' },
      { id: 'C', text: 'The distinction between summer and autumn seasons' },
      { id: 'D', text: 'The conflict between humans and nature' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (The crucial choices and alternative paths in life)',
    explanation: 'The diverging roads are an extended metaphor for the life choices and critical crossroads an individual encounters. Deciding which road to pursue shapes the traveler\'s unique destiny and character.',
    stepMarks: 'Step: Accurately interpreting the philosophical metaphor of life choices (+1 Mark)',
    commonTrap: 'Trap: Interpreting the poem only on a literal geographical level.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 English Poetry (Oswal Question Bank)',
    tags: ['English', 'Poetry', 'Beehive', 'Robert Frost', 'Metaphor']
  },
  {
    id: 'c9-eng-day-30',
    targetClass: 'Class 9',
    title: 'The Core Theme of "The Lost Child"',
    subject: 'Class 9 English',
    topic: 'Moments: The Lost Child (Mulk Raj Anand)',
    marks: '1 Mark (CBSE Class 9 Board Exam)',
    question: 'What does the lost child\'s refusal of toys, burfi, balloons, and flowers at the end of the story symbolize?',
    options: [
      { id: 'A', text: 'The child suddenly developed a distaste for sweets and toys' },
      { id: 'B', text: 'The kind stranger was intimidating and frightening' },
      { id: 'C', text: 'A child\'s deepest emotional security lies in parental love, far above material luxuries' },
      { id: 'D', text: 'The child wanted to save money for school books' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (Child\'s deepest security lies in parental love)',
    explanation: 'Mulk Raj Anand shows that worldly amusements only possess value when enveloped in the safety of parental presence. Stripped of his parents, the child\'s material cravings vanish, leaving only the desperate cry for his mother and father.',
    stepMarks: 'Step: Stating the core psychological and emotional moral (+1 Mark)',
    commonTrap: 'Trap: Believing the child was being stubborn or suspicious of the kind man.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 English Moments (Oswal Question Bank)',
    tags: ['English', 'Literature', 'Moments', 'Mulk Raj Anand']
  },
  {
    id: 'c9-comm-day-31',
    targetClass: 'Class 9',
    title: 'The Guru-Dakshina on Saraswati Pooja Day',
    subject: 'Class 9 English',
    topic: 'Literature Reader: How I Taught My Grandmother to Read (Sudha Murthy)',
    marks: '1 Mark (CBSE Class 9 Communicative Exam)',
    question: 'In Sudha Murthy\'s story "How I Taught My Grandmother to Read", why did Krishtakka touch her twelve-year-old granddaughter\'s feet?',
    options: [
      { id: 'A', text: 'Because her granddaughter had graduated from college' },
      { id: 'B', text: 'Because she was paying respect to her teacher (Guru) who taught her to read' },
      { id: 'C', text: 'Because it was her granddaughter\'s birthday' },
      { id: 'D', text: 'Because her granddaughter gifted her a silk saree' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Paying respect to her teacher who taught her to read)',
    explanation: 'Krishtakka quoted ancient scriptures stating that a teacher must always be revered as a Guru regardless of gender or age. She touched her granddaughter\'s feet to pay respect to the teacher who made her independent in reading.',
    stepMarks: 'Step: Reverence to teacher regardless of age (+1 Mark)',
    commonTrap: 'Trap: Thinking it was an ordinary blessing or elder-child tradition.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Communicative English (Oswal Question Bank)',
    tags: ['English Communicative', 'Sudha Murthy', 'Literature Reader']
  },
  {
    id: 'c9-comm-day-32',
    targetClass: 'Class 9',
    title: 'The Eternal Refrain of "The Brook"',
    subject: 'Class 9 English',
    topic: 'Literature Reader: The Brook (Alfred Lord Tennyson)',
    marks: '1 Mark (CBSE Class 9 Communicative Exam)',
    question: 'In Lord Tennyson\'s poem "The Brook", what is the primary significance of the line: "For men may come and men may go, But I go on for ever"?',
    options: [
      { id: 'A', text: 'It shows that human beings frequently move from villages to cities' },
      { id: 'B', text: 'It contrasts the transient, mortal life of man with the eternal permanence of nature' },
      { id: 'C', text: 'It proves that the river is dangerous for human swimmers' },
      { id: 'D', text: 'It highlights that rainfall is continuous in the valley' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Contrasts transient human mortality with eternal nature)',
    explanation: 'The repeating refrain serves as the central philosophical theme: human life is fleeting and finite (birth, growth, death), whereas the natural brook flows in an endless, eternal hydrologic cycle.',
    stepMarks: 'Step: Stating philosophical contrast between human transience and nature\'s eternity (+1 Mark)',
    commonTrap: 'Trap: Reading the line only literally regarding human walking habits.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Communicative English (Oswal Question Bank)',
    tags: ['English Communicative', 'Poetry', 'Tennyson', 'The Brook']
  },
  {
    id: 'c9-comm-day-33',
    targetClass: 'Class 9',
    title: 'Gaston\'s Sharp Business Acumen in "Villa for Sale"',
    subject: 'Class 9 English',
    topic: 'Literature Reader: Villa for Sale (Sacha Guitry)',
    marks: '1 Mark (CBSE Class 9 Communicative Exam)',
    question: 'In Sacha Guitry\'s satire "Villa for Sale", how much net profit does Gaston make by outsmarting Mrs. Al Smith and Juliette?',
    options: [
      { id: 'A', text: '50,000 francs' },
      { id: 'B', text: '100,000 francs' },
      { id: 'C', text: '200,000 francs' },
      { id: 'D', text: '300,000 francs' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (100,000 francs)',
    explanation: 'Gaston sells the villa to Mrs. Al Smith for 300,000 francs and immediately buys it from Juliette for 200,000 francs, earning a net profit of 100,000 francs without spending any of his own money.',
    stepMarks: 'Step: Calculation 300,000 - 200,000 = 100,000 francs profit (+1 Mark)',
    commonTrap: 'Trap: Confusing the sale price (300,000) with the net profit (100,000).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Communicative English (Oswal Question Bank)',
    tags: ['English Communicative', 'Drama', 'Villa for Sale', 'Sacha Guitry']
  },
  {
    id: 'c9-comm-day-34',
    targetClass: 'Class 9',
    title: 'An Exemplary Leader: Dr. Kalam at Thumba',
    subject: 'Class 9 English',
    topic: 'Main Course Book: People (An Exemplary Leader)',
    marks: '1 Mark (CBSE Class 9 Communicative Exam)',
    question: 'In the MCB unit "An Exemplary Leader", what remarkable act did Dr. APJ Abdul Kalam do for a subordinate scientist at Thumba?',
    options: [
      { id: 'A', text: 'He granted him a month\'s paid vacation to Europe' },
      { id: 'B', text: 'He took the scientist\'s children to the exhibition because the scientist was engrossed in rocket calculations' },
      { id: 'C', text: 'He built a new laboratory for him in New Delhi' },
      { id: 'D', text: 'He completed the entire rocket calculation himself' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Took the scientist\'s children to the exhibition)',
    explanation: 'When the scientist forgot his personal promise to take his children to an exhibition due to intense work pressure, Dr. Kalam quietly stepped in and escorted the children himself, illustrating selfless, compassionate leadership.',
    stepMarks: 'Step: Accurately recounting Dr. Kalam\'s empathetic gesture (+1 Mark)',
    commonTrap: 'Trap: Assuming Dr. Kalam reprimanded the scientist for working late.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Main Course Book (Oswal Question Bank)',
    tags: ['English Communicative', 'Main Course Book', 'Dr Kalam', 'Leadership']
  },
  {
    id: 'c9-comm-day-35',
    targetClass: 'Class 9',
    title: 'Sentence Reordering & Coherence: Biodiversity',
    subject: 'Class 9 English',
    topic: 'Grammar: Sentence Reordering (Workbook Unit 1)',
    marks: '1 Mark (CBSE Class 9 Communicative Exam)',
    question: 'Which is the grammatically correct rearrangement of: "interact / that / balance / Biodiversity / the / support / is / of / to / life forms / variety / and sustain / of nature"?',
    options: [
      { id: 'A', text: 'Biodiversity is the variety of life forms that interact to support and sustain the balance of nature.' },
      { id: 'B', text: 'The balance of nature interacts to support and sustain biodiversity is variety of life forms.' },
      { id: 'C', text: 'Life forms interact to variety of nature and sustain the balance that is biodiversity.' },
      { id: 'D', text: 'Biodiversity that interacts is the balance of life forms to support and sustain variety of nature.' }
    ],
    correctOption: 'A',
    correctOptionLabel: 'Option A (Biodiversity is the variety of life forms that interact to support and sustain the balance of nature)',
    explanation: 'Option A presents the only syntactically accurate construction where "Biodiversity" is the subject, followed by the copular verb "is" and the defining relative clause "that interact to support and sustain the balance of nature".',
    stepMarks: 'Step: Correct grammatical syntax and semantic coherence (+1 Mark)',
    commonTrap: 'Trap: Misplacing the relative pronoun "that".',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Communicative English Workbook (Oswal Question Bank)',
    tags: ['English Communicative', 'Grammar', 'Sentence Reordering', 'Workbook']
  }
,
  {
    id: "c9-phy-day-36",
    targetClass: "Class 9",
    title: "Conservation of Mechanical Energy in Free Fall",
    subject: "Class 9 Science",
    topic: "Physics: Work and Energy",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "A body of mass 2 kg falls freely from a height of 10 m (take g = 10 m/s²). What is its kinetic energy when it has fallen through 5 m?",
    options: [
      { id: "A", text: "50 J" },
      { id: "B", text: "100 J" },
      { id: "C", text: "150 J" },
      { id: "D", text: "200 J" }
    ],
    correctOption: "B",
    correctOptionLabel: "Option B (100 J)",
    explanation: "Total initial energy at top = mgh = 2 × 10 × 10 = 200 J. At height 5 m, remaining PE = 2 × 10 × 5 = 100 J. By conservation of energy: KE = Total Energy - PE = 200 - 100 = 100 J.",
    stepMarks: "Step: Initial PE = 200 J (+1/2 Mark) | Loss in PE = Gain in KE = 100 J (+1/2 Mark)",
    commonTrap: "Trap: Calculating KE for remaining height instead of fallen height.",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Science Annual Exam (Oswal Question Bank)",
    tags: ["Science","Physics","Work and Energy","Conservation of Energy"]
  },
  {
    id: "c9-chem-day-37",
    targetClass: "Class 9",
    title: "Mole Concept and Avogadro Constant",
    subject: "Class 9 Science",
    topic: "Chemistry: Atoms and Molecules",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "How many carbon atoms are present in exactly 12 grams of pure Carbon-12 isotope?",
    options: [
      { id: "A", text: "1.204 × 10²³ atoms" },
      { id: "B", text: "6.022 × 10²³ atoms" },
      { id: "C", text: "3.011 × 10²³ atoms" },
      { id: "D", text: "12 × 10²³ atoms" }
    ],
    correctOption: "B",
    correctOptionLabel: "Option B (6.022 × 10²³ atoms)",
    explanation: "One mole of any carbon-12 isotope weighs exactly 12 grams (its molar mass) and contains Avogadro's number of atoms: N_A = 6.022 × 10²³ atoms.",
    stepMarks: "Step: 1 mole = molar mass = 6.022 × 10²³ particles (+1 Mark)",
    commonTrap: "Trap: Confusing atomic number 6 with power of ten exponent.",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Chemistry Annual Paper",
    tags: ["Science","Chemistry","Mole Concept","Atoms and Molecules"]
  },
  {
    id: "c9-bio-day-38",
    targetClass: "Class 9",
    title: "Protein Synthesis and Rough Endoplasmic Reticulum",
    subject: "Class 9 Science",
    topic: "Biology: The Fundamental Unit of Life",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "Which sub-cellular structure attached to the surface of the Rough Endoplasmic Reticulum (RER) is responsible for protein synthesis?",
    options: [
      { id: "A", text: "Lysosomes" },
      { id: "B", text: "Ribosomes" },
      { id: "C", text: "Centrosomes" },
      { id: "D", text: "Cristae" }
    ],
    correctOption: "B",
    correctOptionLabel: "Option B (Ribosomes)",
    explanation: "Ribosomes attached to the outer cytosolic face of RER synthesize polypeptides and secretory proteins. Smooth ER lacks ribosomes and synthesizes lipids.",
    stepMarks: "Step: Identification of ribosomes as protein factories (+1 Mark)",
    commonTrap: "Trap: Confusing Ribosomes with Lysosomes.",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Science Board PYQ",
    tags: ["Science","Biology","Cell Organelles","Proteins"]
  },
  {
    id: "c9-math-day-39",
    targetClass: "Class 9",
    title: "Factor Theorem and Roots of Quadratic",
    subject: "Class 9 Mathematics",
    topic: "Polynomials: Factor Theorem",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "If (x - 2) is a factor of the polynomial P(x) = 2x² - 5x + k, what is the value of k?",
    options: [
      { id: "A", text: "1" },
      { id: "B", text: "2" },
      { id: "C", text: "-2" },
      { id: "D", text: "-1" }
    ],
    correctOption: "B",
    correctOptionLabel: "Option B (k = 2)",
    explanation: "By the Factor Theorem, if (x - 2) is a factor, then P(2) = 0. Substituting x = 2: 2(2)² - 5(2) + k = 0 => 2(4) - 10 + k = 0 => 8 - 10 + k = 0 => -2 + k = 0 => k = 2.",
    stepMarks: "Step: P(2) = 0 (+1/2 Mark) | 8 - 10 + k = 0 => k = 2 (+1/2 Mark)",
    commonTrap: "Trap: Sign mistake: taking k = -2.",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Mathematics Standard Annual Exam",
    tags: ["Mathematics","Polynomials","Factor Theorem","Algebra"]
  },
  {
    id: "c9-math-day-40",
    targetClass: "Class 9",
    title: "Circle Arc Subtended Angle Theorem",
    subject: "Class 9 Mathematics",
    topic: "Circles: Theorems on Arcs",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "An arc of a circle subtends an angle of 110° at the center. What is the angle subtended by this arc at any point on the major segment of the circle?",
    options: [
      { id: "A", text: "220°" },
      { id: "B", text: "55°" },
      { id: "C", text: "70°" },
      { id: "D", text: "90°" }
    ],
    correctOption: "B",
    correctOptionLabel: "Option B (55°)",
    explanation: "Theorem: The angle subtended by an arc at the center of a circle is twice the angle subtended by it at any point on the remaining part of the circle. Angle on circumference = 110° / 2 = 55°.",
    stepMarks: "Step: Angle at circumference = (1/2) × Angle at center = 110° / 2 = 55° (+1 Mark)",
    commonTrap: "Trap: Doubling the angle to 220° instead of halving it.",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Mathematics Board Paper",
    tags: ["Mathematics","Circles","Theorems","Geometry"]
  },
  {
    id: "c9-sst-day-41",
    targetClass: "Class 9",
    title: "The Storming of the Bastille",
    subject: "Class 9 Social Science",
    topic: "History: The French Revolution",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "On which historic date did the citizens of Paris storm and demolish the royal fortress-prison Bastille, marking the outbreak of the French Revolution?",
    options: [
      { id: "A", text: "5 May 1789" },
      { id: "B", text: "14 July 1789" },
      { id: "C", text: "20 June 1789" },
      { id: "D", text: "26 August 1789" }
    ],
    correctOption: "B",
    correctOptionLabel: "Option B (14 July 1789)",
    explanation: "On the morning of 14 July 1789, an armed crowd of citizens stormed the Bastille fortress prison to seize gunpowder and protest royal despotism, an event celebrated annually as French National Day.",
    stepMarks: "Step: Correct date 14 July 1789 identified (+1 Mark)",
    commonTrap: "Trap: 5 May was Estates General meeting; 20 June was Tennis Court Oath.",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Social Science Board PYQ",
    tags: ["Social Science","History","French Revolution","Bastille"]
  },
  {
    id: "c9-sst-day-42",
    targetClass: "Class 9",
    title: "Indian Standard Time and Meridian",
    subject: "Class 9 Social Science",
    topic: "Geography: India - Size and Location",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "By how many hours and minutes is Indian Standard Time (IST) ahead of Greenwich Mean Time (GMT / UTC)?",
    options: [
      { id: "A", text: "+4 hours 30 minutes" },
      { id: "B", text: "+5 hours 30 minutes" },
      { id: "C", text: "+6 hours" },
      { id: "D", text: "+5 hours" }
    ],
    correctOption: "B",
    correctOptionLabel: "Option B (+5 hours 30 minutes)",
    explanation: "India's standard meridian is 82°30'E. Since 1° of longitude equals 4 minutes of solar time: 82.5° × 4 min = 330 minutes = 5 hours 30 minutes ahead of GMT (UTC+5:30).",
    stepMarks: "Step: 82.5° × 4 minutes = 330 minutes = +5:30 hours (+1 Mark)",
    commonTrap: "Trap: Choosing +5 hours without the 30 minutes.",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Geography Board Paper",
    tags: ["Social Science","Geography","IST","Standard Meridian"]
  },
  {
    id: "c9-sst-day-43",
    targetClass: "Class 9",
    title: "Right to Constitutional Remedies (Article 32)",
    subject: "Class 9 Social Science",
    topic: "Political Science: Democratic Rights",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "Why did Dr. B.R. Ambedkar describe the Right to Constitutional Remedies (Article 32) as the \"Heart and Soul\" of the Indian Constitution?",
    options: [
      { id: "A", text: "It gives the President emergency powers to suspend elections" },
      { id: "B", text: "It empowers citizens to approach courts directly to enforce their Fundamental Rights via writs" },
      { id: "C", text: "It provides free universal elementary education" },
      { id: "D", text: "It permits political parties to collect unlimited campaign donations" }
    ],
    correctOption: "B",
    correctOptionLabel: "Option B (Enforces Fundamental Rights through constitutional writs)",
    explanation: "Article 32 guarantees the right to move the Supreme Court by appropriate proceedings for the enforcement of fundamental rights through writs like Habeas Corpus, Mandamus, and Quo Warranto.",
    stepMarks: "Step: Direct court access and writ jurisdiction for fundamental rights enforcement (+1 Mark)",
    commonTrap: "Trap: Confusing Article 32 with Article 21 (Right to Life).",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Political Science Annual Exam",
    tags: ["Social Science","Civics","Fundamental Rights","Constitution"]
  },
  {
    id: "c9-sst-day-44",
    targetClass: "Class 9",
    title: "Disguised Unemployment in Agriculture",
    subject: "Class 9 Social Science",
    topic: "Economics: People as Resource",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "In disguised unemployment prevailing on small agricultural family farms, the marginal productivity of additional surplus labor is:",
    options: [
      { id: "A", text: "Extremely high" },
      { id: "B", text: "Equal to market wage rate" },
      { id: "C", text: "Strictly zero" },
      { id: "D", text: "Negative and inflationary" }
    ],
    correctOption: "C",
    correctOptionLabel: "Option C (Strictly zero)",
    explanation: "Disguised unemployment is a situation where more workers are engaged in an activity than required. Removing the surplus workers does not reduce total agricultural output, meaning their marginal productivity is zero.",
    stepMarks: "Step: Marginal productivity = zero identified (+1 Mark)",
    commonTrap: "Trap: Thinking marginal productivity is high because everyone works hard.",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Economics Annual Paper",
    tags: ["Social Science","Economics","Unemployment","Agriculture"]
  },
  {
    id: "c9-eng-day-45",
    targetClass: "Class 9",
    title: "Reported Speech Inversion in Wh-Questions",
    subject: "Class 9 English",
    topic: "Grammar: Reported Speech",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "Select the correct indirect speech transformation: Teacher asked me, \"Where did you keep the library books?\"",
    options: [
      { id: "A", text: "Teacher asked me where did I keep the library books." },
      { id: "B", text: "Teacher asked me where I had kept the library books." },
      { id: "C", text: "Teacher asked me where had I kept the library books." },
      { id: "D", text: "Teacher asked me that where I kept the library books." }
    ],
    correctOption: "B",
    correctOptionLabel: "Option B (Teacher asked me where I had kept the library books)",
    explanation: "In indirect wh-questions: (1) no \"that\" is used, (2) word order shifts from inverted to assertive (subject before auxiliary verb), and (3) simple past \"did keep\" shifts to past perfect \"had kept\".",
    stepMarks: "Step: Subject before verb + past perfect \"had kept\" (+1 Mark)",
    commonTrap: "Trap: Retaining interrogative word order \"where had I kept\" (Option C).",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 English Language & Literature (Oswal Question Bank)",
    tags: ["English","Grammar","Reported Speech","Rules"]
  },
  {
    id: "c9-eng-day-46",
    targetClass: "Class 9",
    title: "Robert Frost Extended Metaphor in The Road Not Taken",
    subject: "Class 9 English",
    topic: "Beehive: Poetry",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "In Robert Frost's poem \"The Road Not Taken\", what do the two diverging roads in the yellow wood symbolically signify?",
    options: [
      { id: "A", text: "Two concrete highways leading to major cities" },
      { id: "B", text: "Critical life choices and alternative future pathways" },
      { id: "C", text: "Morning and evening walking tracks" },
      { id: "D", text: "Spring and autumn seasonal transitions" }
    ],
    correctOption: "B",
    correctOptionLabel: "Option B (Critical life choices and alternative future pathways)",
    explanation: "The two diverging roads serve as an extended philosophical metaphor for the momentous, irrevocable life choices and career paths that an individual must choose between.",
    stepMarks: "Step: Life choices and destiny metaphor explained (+1 Mark)",
    commonTrap: "Trap: Taking the roads literally as physical walking paths.",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 English Beehive Board Paper",
    tags: ["English","Literature","Poetry","Robert Frost"]
  },
  {
    id: "c9-phy-day-47",
    targetClass: "Class 9",
    title: "Minimum Distance for Sensation of Echo",
    subject: "Class 9 Science",
    topic: "Physics: Sound",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "What is the minimum distance between the source of sound and a reflecting surface required to hear a distinct echo in air at 22°C (speed of sound = 344 m/s)?",
    options: [
      { id: "A", text: "34.4 m" },
      { id: "B", text: "17.2 m" },
      { id: "C", text: "8.6 m" },
      { id: "D", text: "68.8 m" }
    ],
    correctOption: "B",
    correctOptionLabel: "Option B (17.2 m)",
    explanation: "Persistence of human hearing is 0.1 s. Total round trip distance = v × t = 344 × 0.1 = 34.4 m. The one-way distance to the obstacle = 34.4 / 2 = 17.2 meters.",
    stepMarks: "Step: 2d = v × t => d = (344 × 0.1) / 2 = 17.2 m (+1 Mark)",
    commonTrap: "Trap: Forgetting to divide by 2 (choosing 34.4 m).",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Science Annual Paper",
    tags: ["Science","Physics","Sound","Echo"]
  },
  {
    id: "c9-chem-day-48",
    targetClass: "Class 9",
    title: "Law of Constant Proportions in Water",
    subject: "Class 9 Science",
    topic: "Chemistry: Atoms and Molecules",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "According to Proust's Law of Constant Proportions, what is the fixed ratio by mass of Hydrogen to Oxygen in pure water (H₂O)?",
    options: [
      { id: "A", text: "2:1" },
      { id: "B", text: "1:8" },
      { id: "C", text: "1:16" },
      { id: "D", text: "8:1" }
    ],
    correctOption: "B",
    correctOptionLabel: "Option B (1:8)",
    explanation: "In H₂O, mass of 2 Hydrogen atoms = 2 × 1 = 2 u. Mass of 1 Oxygen atom = 16 u. Ratio by mass = 2 : 16 = 1 : 8.",
    stepMarks: "Step: Mass ratio = 2 u : 16 u = 1 : 8 (+1 Mark)",
    commonTrap: "Trap: Confusing ratio of atoms (2:1) with ratio by mass (1:8).",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Chemistry Board Exam",
    tags: ["Science","Chemistry","Laws of Chemical Combination","Water"]
  },
  {
    id: "c9-bio-day-49",
    targetClass: "Class 9",
    title: "Unidirectional Water Transport in Xylem",
    subject: "Class 9 Science",
    topic: "Biology: Plant Tissues",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "How does the transport of sap in Xylem differ fundamentally from the translocation of food in Phloem?",
    options: [
      { id: "A", text: "Xylem transport is multidirectional; Phloem is unidirectional" },
      { id: "B", text: "Xylem transport is strictly unidirectional (upward from roots); Phloem is bidirectional" },
      { id: "C", text: "Xylem conducts glucose; Phloem conducts mineral ions" },
      { id: "D", text: "Xylem requires metabolic ATP; Phloem uses passive transpiration pull" }
    ],
    correctOption: "B",
    correctOptionLabel: "Option B (Xylem is unidirectional upward; Phloem is bidirectional)",
    explanation: "Xylem transports water and minerals unidirectionally upwards from roots to leaves driven by transpiration pull. Phloem translocates sucrose bidirectionally from source leaves to roots, storage organs, and growing buds using metabolic ATP energy.",
    stepMarks: "Step: Unidirectional upward vs bidirectional translocation distinction (+1 Mark)",
    commonTrap: "Trap: Swapping Xylem and Phloem transport directions.",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Science Board PYQ",
    tags: ["Science","Biology","Plant Tissues","Xylem and Phloem"]
  },
  {
    id: "c9-math-day-50",
    targetClass: "Class 9",
    title: "Area of Equilateral Triangle via Heron's Formula",
    subject: "Class 9 Mathematics",
    topic: "Mensuration: Heron's Formula",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "The perimeter of an equilateral triangle is 60 cm. Its area calculated via Heron's formula is:",
    options: [
      { id: "A", text: "100√3 cm²" },
      { id: "B", text: "300 cm²" },
      { id: "C", text: "200√3 cm²" },
      { id: "D", text: "150 cm²" }
    ],
    correctOption: "A",
    correctOptionLabel: "Option A (100√3 cm²)",
    explanation: "Side a = 60 / 3 = 20 cm. Semi-perimeter s = 30 cm. Area = √[30(30-20)³] = √[30 × 10 × 10 × 10] = √[30000] = 100√3 cm² (or using (√3/4)a² = (√3/4)(400) = 100√3 cm²).",
    stepMarks: "Step: Side = 20 cm (+1/2 Mark) | Area = (√3/4)(20)² = 100√3 cm² (+1/2 Mark)",
    commonTrap: "Trap: Using perimeter 60 as the side length.",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Mathematics Standard Paper",
    tags: ["Mathematics","Heron Formula","Equilateral Triangle","Mensuration"]
  },
  {
    id: "c9-math-day-51",
    targetClass: "Class 9",
    title: "Volume Scaling Factor of a Solid Sphere",
    subject: "Class 9 Mathematics",
    topic: "Surface Areas and Volumes: Sphere",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "If the radius of a solid metallic sphere is doubled, its volume increases by how many times?",
    options: [
      { id: "A", text: "2 times" },
      { id: "B", text: "4 times" },
      { id: "C", text: "8 times" },
      { id: "D", text: "16 times" }
    ],
    correctOption: "C",
    correctOptionLabel: "Option C (8 times)",
    explanation: "Volume V = (4/3)πr³. When radius is 2r, new volume V' = (4/3)π(2r)³ = 8 × [(4/3)πr³] = 8V.",
    stepMarks: "Step: V ∝ r³ => (2r)³ = 8r³ => 8 times (+1 Mark)",
    commonTrap: "Trap: Choosing 4 times (which is surface area scaling, not volume).",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Mathematics Board PYQ",
    tags: ["Mathematics","Surface Areas and Volumes","Sphere","Scaling"]
  },
  {
    id: "c9-sst-day-52",
    targetClass: "Class 9",
    title: "Lenin Three April Theses",
    subject: "Class 9 Social Science",
    topic: "History: Socialism in Europe and Russian Revolution",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "Upon returning from exile in April 1917, Vladimir Lenin presented three historic demands known as the \"April Theses\". Which of the following was one of them?",
    options: [
      { id: "A", text: "Support the Provisional Government unconditionally" },
      { id: "B", text: "Land be transferred to the peasants and banks be nationalized" },
      { id: "C", text: "Continue World War I until victory" },
      { id: "D", text: "Restore the Romanov Czarist monarchy" }
    ],
    correctOption: "B",
    correctOptionLabel: "Option B (Land to peasants, banks nationalized, war closed)",
    explanation: "Lenin demanded that World War I be brought to a close, land be transferred to peasant soviets, and commercial banks be nationalized.",
    stepMarks: "Step: Identification of core April Theses demands (+1 Mark)",
    commonTrap: "Trap: Bolsheviks opposed continuing World War I.",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Social Science Annual Exam",
    tags: ["Social Science","History","Russian Revolution","Lenin"]
  },
  {
    id: "c9-sst-day-53",
    targetClass: "Class 9",
    title: "Westward Flowing Peninsular Rift Valley Rivers",
    subject: "Class 9 Social Science",
    topic: "Geography: Drainage",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "Why do the rivers Narmada and Tapi flow westwards into the Arabian Sea while most major peninsular rivers flow eastwards?",
    options: [
      { id: "A", text: "They are fed by Himalayan glacial melt" },
      { id: "B", text: "They flow through fault-formed tectonic rift valleys" },
      { id: "C", text: "They carry more volume than Godavari" },
      { id: "D", text: "They are diverted by the Thar desert wind currents" }
    ],
    correctOption: "B",
    correctOptionLabel: "Option B (Flow through tectonic rift valleys)",
    explanation: "Unlike other peninsular rivers that follow the gentle eastward tilt of the plateau, Narmada and Tapi flow westwards through deep tectonic fault valleys (rift valleys) between the Vindhya and Satpura ranges.",
    stepMarks: "Step: Tectonic rift valley drainage mechanism identified (+1 Mark)",
    commonTrap: "Trap: Attributing westward flow to ocean tides.",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Geography Board PYQ",
    tags: ["Social Science","Geography","Drainage","Rift Valleys"]
  },
  {
    id: "c9-sst-day-54",
    targetClass: "Class 9",
    title: "Removal Safeguards of the Chief Election Commissioner",
    subject: "Class 9 Social Science",
    topic: "Political Science: Electoral Politics",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "How can the Chief Election Commissioner (CEC) of India be removed from office before the expiry of their term?",
    options: [
      { id: "A", text: "By a simple executive order signed by the Prime Minister" },
      { id: "B", text: "Only through parliamentary impeachment resolution passed by two-thirds majority in both Houses" },
      { id: "C", text: "By a majority vote in the Rajya Sabha alone" },
      { id: "D", text: "By the Supreme Court Bar Association" }
    ],
    correctOption: "B",
    correctOptionLabel: "Option B (Parliamentary impeachment similar to a Supreme Court judge)",
    explanation: "To maintain electoral autonomy, the Constitution mandates that the CEC can only be removed through a process of impeachment in Parliament on grounds of proven misbehavior or incapacity by a two-thirds majority in both Houses.",
    stepMarks: "Step: Impeachment requirement similar to Supreme Court judge (+1 Mark)",
    commonTrap: "Trap: Thinking the President or Prime Minister can dismiss the CEC unilaterally.",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Civics Board Paper",
    tags: ["Social Science","Civics","Election Commission","Constitution"]
  },
  {
    id: "c9-sst-day-55",
    targetClass: "Class 9",
    title: "Minimum Support Price (MSP) in Food Security",
    subject: "Class 9 Social Science",
    topic: "Economics: Food Security in India",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "What is the primary socio-economic objective of the pre-announced Minimum Support Price (MSP) announced by the government?",
    options: [
      { id: "A", text: "To maximize tax collections on grain transport" },
      { id: "B", text: "To provide assured price incentives to farmers and protect them from distress sales during bumper harvests" },
      { id: "C", text: "To ban private grain traders from operating in mandis" },
      { id: "D", text: "To fix maximum retail prices in supermarket chains" }
    ],
    correctOption: "B",
    correctOptionLabel: "Option B (Price security for farmers preventing distress sales)",
    explanation: "MSP is declared prior to the sowing season to assure farmers of a guaranteed baseline price for their wheat and paddy, preventing catastrophic distress sales in years of bumper production.",
    stepMarks: "Step: Price security and farmer incentive rationale explained (+1 Mark)",
    commonTrap: "Trap: Confusing MSP with consumer Issue Price at ration shops.",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Economics Annual Exam",
    tags: ["Social Science","Economics","Food Security","MSP"]
  },
  {
    id: "c9-eng-day-56",
    targetClass: "Class 9",
    title: "Modal Verb for Strict Institutional Compulsion",
    subject: "Class 9 English",
    topic: "Grammar: Modals",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "Fill in the blank with the appropriate modal: \"Candidates __________ carry their original hall tickets into the examination hall; otherwise, entry will be strictly prohibited.\"",
    options: [
      { id: "A", text: "might" },
      { id: "B", text: "could" },
      { id: "C", text: "must" },
      { id: "D", text: "would" }
    ],
    correctOption: "C",
    correctOptionLabel: "Option C (must)",
    explanation: "\"Must\" denotes non-negotiable institutional obligation and absolute necessity backed by disciplinary consequences.",
    stepMarks: "Step: Modal of strict compulsion \"must\" identified (+1 Mark)",
    commonTrap: "Trap: Choosing \"might\", which conveys weak optional possibility.",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 English Board Exam",
    tags: ["English","Grammar","Modals","Obligation"]
  },
  {
    id: "c9-eng-day-57",
    targetClass: "Class 9",
    title: "Subject-Verb Concord with Collective Nouns",
    subject: "Class 9 English",
    topic: "Grammar: Subject-Verb Concord",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "Select the correct sentence:",
    options: [
      { id: "A", text: "A pride of lions are resting under the acacia tree." },
      { id: "B", text: "A pride of lions is resting under the acacia tree." },
      { id: "C", text: "A pride of lions have been rested under the acacia tree." },
      { id: "D", text: "A pride of lions were rest under the acacia tree." }
    ],
    correctOption: "B",
    correctOptionLabel: "Option B (A pride of lions is resting)",
    explanation: "The subject is the collective noun \"A pride\" (singular unit). Therefore, it takes the singular verb \"is\", regardless of the plural noun \"lions\" following the preposition \"of\".",
    stepMarks: "Step: Collective noun \"A pride\" taking singular verb \"is\" (+1 Mark)",
    commonTrap: "Trap: Matching verb with plural noun \"lions\" instead of \"pride\".",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 English Grammar (Oswal Question Bank)",
    tags: ["English","Grammar","Subject-Verb Concord","Collective Noun"]
  },
  {
    id: "c9-phy-day-58",
    targetClass: "Class 9",
    title: "Weight Ratio on Lunar Surface",
    subject: "Class 9 Science",
    topic: "Physics: Gravitation",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "An astronaut with their spacesuit weighs 720 N on Earth. What will be their weight on the surface of the Moon?",
    options: [
      { id: "A", text: "720 N" },
      { id: "B", text: "120 N" },
      { id: "C", text: "4,320 N" },
      { id: "D", text: "0 N" }
    ],
    correctOption: "B",
    correctOptionLabel: "Option B (120 N)",
    explanation: "Weight on Moon W_moon = (1/6) × W_earth = (1/6) × 720 N = 120 N.",
    stepMarks: "Step: W_moon = 720 / 6 = 120 N (+1 Mark)",
    commonTrap: "Trap: Thinking mass changes or multiplying by 6.",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Science Annual Paper",
    tags: ["Science","Physics","Gravitation","Moon Weight"]
  },
  {
    id: "c9-chem-day-59",
    targetClass: "Class 9",
    title: "Bohr-Bury Rule for Maximum Shell Capacity",
    subject: "Class 9 Science",
    topic: "Chemistry: Structure of the Atom",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "According to the Bohr-Bury rule, the maximum number of electrons that can be accommodated in the 4th energy shell (N-shell, n = 4) is:",
    options: [
      { id: "A", text: "8" },
      { id: "B", text: "18" },
      { id: "C", text: "32" },
      { id: "D", text: "50" }
    ],
    correctOption: "C",
    correctOptionLabel: "Option C (32 electrons)",
    explanation: "Maximum shell capacity = 2n². For N-shell, n = 4: Capacity = 2 × (4)² = 2 × 16 = 32 electrons.",
    stepMarks: "Step: Formula 2n² applied for n=4 => 2 × 16 = 32 (+1 Mark)",
    commonTrap: "Trap: Choosing 18 (which is the capacity of the M-shell, n=3).",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Chemistry Board PYQ",
    tags: ["Science","Chemistry","Bohr Model","Atomic Structure"]
  },
  {
    id: "c9-bio-day-60",
    targetClass: "Class 9",
    title: "Mitosis vs Meiosis in Cellular Reproduction",
    subject: "Class 9 Science",
    topic: "Biology: The Fundamental Unit of Life",
    marks: "1 Mark (CBSE Class 9 Board Exam)",
    question: "Which type of cell division produces four daughter cells, each containing half the number of chromosomes (haploid) as the mother cell, for sexual reproduction?",
    options: [
      { id: "A", text: "Mitosis" },
      { id: "B", text: "Meiosis" },
      { id: "C", text: "Amitosis" },
      { id: "D", text: "Binary Fission" }
    ],
    correctOption: "B",
    correctOptionLabel: "Option B (Meiosis)",
    explanation: "Meiosis is a reductional division occurring in reproductive germ cells, producing four haploid daughter gametes (sperm/egg). Mitosis is equational division for growth producing two identical diploid cells.",
    stepMarks: "Step: Meiosis identified as reductional division (+1 Mark)",
    commonTrap: "Trap: Confusing Mitosis (2 diploid cells) with Meiosis (4 haploid cells).",
    difficulty: "EASY",
    paperSource: "CBSE Class 9 Biology Annual Paper",
    tags: ["Science","Biology","Cell Division","Meiosis"]
  },
{
  "id": "c9-hin-day-61",
  "targetClass": "Class 9",
  "title": "उपसर्ग और मूल शब्द पृथक्करण ('अत्याचार')",
  "subject": "Class 9 Hindi",
  "topic": "व्यावहारिक व्याकरण: उपसर्ग एवं प्रत्यय",
  "marks": "1 Mark (CBSE Class 9 Hindi A Exam)",
  "question": "'अत्याचार' शब्द में प्रयुक्त सही उपसर्ग और मूल शब्द का विकल्प कौन सा है?",
  "options": [
    {
      "id": "A",
      "text": "अत्य + आचार"
    },
    {
      "id": "B",
      "text": "अति + आचार"
    },
    {
      "id": "C",
      "text": "अ + त्याचार"
    },
    {
      "id": "D",
      "text": "अत् + आचार"
    }
  ],
  "correctOption": "B",
  "correctOptionLabel": "Option B (अति + आचार)",
  "explanation": "यण स्वर संधि के नियमानुसार जब 'इ' के बाद कोई भिन्न स्वर आता है, तो 'इ' का 'य्' हो जाता है। अतः 'अति + आचार' मिलकर 'अत्याचार' बनता है। यहाँ उपसर्ग 'अति' है।",
  "stepMarks": "Step: यण संधि नियम व शुद्ध उपसर्ग 'अति' की पहचान (+1 Mark)",
  "commonTrap": "Trap: प्रत्यक्ष रूप देखकर 'अत्य' उपसर्ग चुन लेना।",
  "difficulty": "EASY",
  "paperSource": "CBSE Class 9 Hindi Annual Paper (Oswal Question Bank)",
  "tags": [
    "Hindi",
    "व्याकरण",
    "उपसर्ग",
    "संधि"
  ]
},
{
  "id": "c9-hin-day-62",
  "targetClass": "Class 9",
  "title": "प्रत्यय एवं आदि-स्वर वृद्धि ('सामाजिक')",
  "subject": "Class 9 Hindi",
  "topic": "व्यावहारिक व्याकरण: उपसर्ग एवं प्रत्यय",
  "marks": "1 Mark (CBSE Class 9 Hindi A Exam)",
  "question": "'समाज' शब्द में 'इक' प्रत्यय जोड़ने पर कौन सा नया शब्द निर्मित होगा?",
  "options": [
    {
      "id": "A",
      "text": "समजिक"
    },
    {
      "id": "B",
      "text": "सामाजिक"
    },
    {
      "id": "C",
      "text": "समाजिय"
    },
    {
      "id": "D",
      "text": "सामजिक"
    }
  ],
  "correctOption": "B",
  "correctOptionLabel": "Option B (सामाजिक)",
  "explanation": "'इक' प्रत्यय लगने पर मूल शब्द के प्रथम स्वर 'अ' में वृद्धि होकर 'आ' हो जाता है (जैसे- समाज + इक = सामाजिक, धर्म + इक = धार्मिक)।",
  "stepMarks": "Step: प्रथम स्वर वृद्धि नियम एवं शुद्ध वर्तनी (+1 Mark)",
  "commonTrap": "Trap: बिना दीर्घीकरण किए 'समजिक' चुन लेना।",
  "difficulty": "EASY",
  "paperSource": "CBSE Class 9 Hindi Grammar Board Set",
  "tags": [
    "Hindi",
    "व्याकरण",
    "प्रत्यय",
    "स्वर वृद्धि"
  ]
},
{
  "id": "c9-hin-day-63",
  "targetClass": "Class 9",
  "title": "समास भेद निर्धारण: 'नीलकंठ'",
  "subject": "Class 9 Hindi",
  "topic": "व्यावहारिक व्याकरण: समास",
  "marks": "1 Mark (CBSE Class 9 Hindi A Exam)",
  "question": "'नीलकंठ' (नीला है कंठ जिसका अर्थात् भगवान शिव) में कौन सा समास है?",
  "options": [
    {
      "id": "A",
      "text": "द्विगु समास"
    },
    {
      "id": "B",
      "text": "द्वंद्व समास"
    },
    {
      "id": "C",
      "text": "बहुव्रीहि समास"
    },
    {
      "id": "D",
      "text": "तत्पुरुष समास"
    }
  ],
  "correctOption": "C",
  "correctOptionLabel": "Option C (बहुव्रीहि समास)",
  "explanation": "जहाँ दोनों पद प्रधान न होकर किसी तीसरे अन्य पद (भगवान शिव) की ओर संकेत करते हैं, वहाँ बहुव्रीहि समास होता है।",
  "stepMarks": "Step: अन्य पद की प्रधानता के आधार पर बहुव्रीहि समास की पहचान (+1 Mark)",
  "commonTrap": "Trap: यदि विग्रह 'नीला है जो कंठ' हो तब कर्मधारय होता है, किंतु तीसरे पद का संकेत होने पर बहुव्रीहि मान्य है।",
  "difficulty": "EASY",
  "paperSource": "CBSE Class 9 Hindi Board PYQ",
  "tags": [
    "Hindi",
    "व्याकरण",
    "समास",
    "बहुव्रीहि"
  ]
},
{
  "id": "c9-hin-day-64",
  "targetClass": "Class 9",
  "title": "अर्थ की दृष्टि से वाक्य भेद ('सशर्त वाक्य')",
  "subject": "Class 9 Hindi",
  "topic": "व्यावहारिक व्याकरण: अर्थ की दृष्टि से वाक्य भेद",
  "marks": "1 Mark (CBSE Class 9 Hindi A Exam)",
  "question": "'यदि समय पर वर्षा होगी, तो फसल भी अच्छी होगी।' - यह अर्थ की दृष्टि से किस प्रकार का वाक्य है?",
  "options": [
    {
      "id": "A",
      "text": "विधानवाचक वाक्य"
    },
    {
      "id": "B",
      "text": "संदेहवाचक वाक्य"
    },
    {
      "id": "C",
      "text": "संकेतवाचक वाक्य"
    },
    {
      "id": "D",
      "text": "इच्छावाचक वाक्य"
    }
  ],
  "correctOption": "C",
  "correctOptionLabel": "Option C (संकेतवाचक वाक्य)",
  "explanation": "जिस वाक्य में एक क्रिया का होना दूसरी क्रिया पर निर्भर करता है (सशर्त वाक्य), उसे संकेतवाचक वाक्य कहते हैं।",
  "stepMarks": "Step: शर्त एवं कारण-कार्य संबंध के आधार पर संकेतवाचक की पहचान (+1 Mark)",
  "commonTrap": "Trap: 'शायद' न होने पर भी इसे संदेहवाचक समझ लेना।",
  "difficulty": "EASY",
  "paperSource": "CBSE Class 9 Hindi Grammar Standard",
  "tags": [
    "Hindi",
    "व्याकरण",
    "वाक्य भेद",
    "संकेतवाचक"
  ]
},
{
  "id": "c9-hin-day-65",
  "targetClass": "Class 9",
  "title": "अलंकार पहचान: वर्णों की आवृत्ति",
  "subject": "Class 9 Hindi",
  "topic": "व्यावहारिक व्याकरण: अलंकार",
  "marks": "1 Mark (CBSE Class 9 Hindi A Exam)",
  "question": "'चारु चंद्र की चंचल किरणें, खेल रहीं हैं जल-थल में।' - इस काव्य पंक्ति में कौन सा अलंकार है?",
  "options": [
    {
      "id": "A",
      "text": "यमक अलंकार"
    },
    {
      "id": "B",
      "text": "अनुप्रास अलंकार"
    },
    {
      "id": "C",
      "text": "रूपक अलंकार"
    },
    {
      "id": "D",
      "text": "उपमा अलंकार"
    }
  ],
  "correctOption": "B",
  "correctOptionLabel": "Option B (अनुप्रास अलंकार)",
  "explanation": "यहाँ 'च' वर्ण की सुंदर आवृत्ति एक से अधिक बार क्रमानुसार हुई है (चारु चंद्र की चंचल), अतः यहाँ अनुप्रास अलंकार है।",
  "stepMarks": "Step: 'च' वर्ण की आवृत्ति पहचानकर अनुप्रास अलंकार अंकित करना (+1 Mark)",
  "commonTrap": "Trap: वर्ण की आवृत्ति और शब्द की आवृत्ति में भेद न समझना।",
  "difficulty": "EASY",
  "paperSource": "CBSE Class 9 Hindi Annual Board Examination",
  "tags": [
    "Hindi",
    "व्याकरण",
    "अलंकार",
    "अनुप्रास"
  ]
},
{
  "id": "c9-hin-day-66",
  "targetClass": "Class 9",
  "title": "अलंकार पहचान: शब्दों की आवृत्ति एवं भिन्न अर्थ",
  "subject": "Class 9 Hindi",
  "topic": "व्यावहारिक व्याकरण: अलंकार",
  "marks": "1 Mark (CBSE Class 9 Hindi A Exam)",
  "question": "'कनक कनक ते सौ गुनी मादकता अधिकाय। या खाए बौराय जग, या पाए बौराय॥' में प्रयुक्त अलंकार है:",
  "options": [
    {
      "id": "A",
      "text": "श्लेष अलंकार"
    },
    {
      "id": "B",
      "text": "यमक अलंकार"
    },
    {
      "id": "C",
      "text": "उत्प्रेक्षा अलंकार"
    },
    {
      "id": "D",
      "text": "मानवीकरण अलंकार"
    }
  ],
  "correctOption": "B",
  "correctOptionLabel": "Option B (यमक अलंकार)",
  "explanation": "यहाँ 'कनक' शब्द दो बार आया है। पहले 'कनक' का अर्थ 'धतूरा' (विषाक्त फल) है और दूसरे 'कनक' का अर्थ 'स्वर्ण' (सोना) है। अतः यहाँ यमक अलंकार है।",
  "stepMarks": "Step: समान शब्द की आवृत्ति और भिन्न अर्थों की पहचान (+1 Mark)",
  "commonTrap": "Trap: श्लेष अलंकार समझ लेना, जबकि यहाँ शब्द की स्पष्ट पुनरावृत्ति है।",
  "difficulty": "EASY",
  "paperSource": "CBSE Class 9 Hindi Board Standard",
  "tags": [
    "Hindi",
    "व्याकरण",
    "अलंकार",
    "यमक"
  ]
},
{
  "id": "c9-hin-day-67",
  "targetClass": "Class 9",
  "title": "क्षितिज गद्य: 'दो बैलों की कथा' (प्रेमचंद)",
  "subject": "Class 9 Hindi",
  "topic": "क्षितिज गद्य: दो बैलों की कथा",
  "marks": "1 Mark (CBSE Class 9 Hindi A Exam)",
  "question": "प्रेमचंद की कहानी 'दो बैलों की कथा' में हीरा और मोती किस नस्ल के बैल थे?",
  "options": [
    {
      "id": "A",
      "text": "साहीवाल जाति के"
    },
    {
      "id": "B",
      "text": "पछाईं जाति के"
    },
    {
      "id": "C",
      "text": "गिर जाति के"
    },
    {
      "id": "D",
      "text": "नागौरी जाति के"
    }
  ],
  "correctOption": "B",
  "correctOptionLabel": "Option B (पछाईं जाति के)",
  "explanation": "पाठ के आरंभ में ही प्रेमचंद जी लिखते हैं: 'दोनों पछाईं जाति के थे- देखने में सुंदर, काम में चौकस, डील में ऊँचे।'",
  "stepMarks": "Step: पाठ्यपुस्तक के प्रामाणिक तथ्य का स्मरण (+1 Mark)",
  "commonTrap": "Trap: आधुनिक गायों की नस्ल (साहीवाल/गिर) से भ्रमित होना।",
  "difficulty": "EASY",
  "paperSource": "CBSE Class 9 Hindi Textbook NCERT",
  "tags": [
    "Hindi",
    "क्षितिज",
    "दो बैलों की कथा",
    "प्रेमचंद"
  ]
},
{
  "id": "c9-hin-day-68",
  "targetClass": "Class 9",
  "title": "क्षितिज गद्य: 'ल्हासा की ओर' (राहुल सांकृत्यायन)",
  "subject": "Class 9 Hindi",
  "topic": "क्षितिज गद्य: ल्हासा की ओर",
  "marks": "1 Mark (CBSE Class 9 Hindi A Exam)",
  "question": "ल्हासा की यात्रा के दौरान लेखक राहुल सांकृत्यायन को शेखर विहार के बौद्ध मंदिर में कितनी हस्तलिखित पोथियाँ (कंजूर) मिली थीं?",
  "options": [
    {
      "id": "A",
      "text": "51 पोथियाँ"
    },
    {
      "id": "B",
      "text": "103 पोथियाँ"
    },
    {
      "id": "C",
      "text": "108 पोथियाँ"
    },
    {
      "id": "D",
      "text": "500 पोथियाँ"
    }
  ],
  "correctOption": "B",
  "correctOptionLabel": "Option B (103 पोथियाँ)",
  "explanation": "शेखर विहार के मंदिर में बुद्ध-वचन अनुवाद की 103 हस्तलिखित भारी पोथियाँ रखी हुई थीं, जिन्हें पढ़ने में लेखक पूर्णतः रम गए थे।",
  "stepMarks": "Step: पाठ के ऐतिहासिक तथ्य (103 कंजूर पोथियाँ) का अंकन (+1 Mark)",
  "commonTrap": "Trap: पारंपरिक संख्या 108 चुन लेना।",
  "difficulty": "EASY",
  "paperSource": "CBSE Class 9 Hindi Board Examination",
  "tags": [
    "Hindi",
    "क्षितिज",
    "ल्हासा की ओर",
    "राहुल सांकृत्यायन"
  ]
},
{
  "id": "c9-hin-day-69",
  "targetClass": "Class 9",
  "title": "क्षितिज गद्य: 'सांवले सपनों की याद' (जाबिर हुसैन)",
  "subject": "Class 9 Hindi",
  "topic": "क्षितिज गद्य: सांवले सपनों की याद",
  "marks": "1 Mark (CBSE Class 9 Hindi A Exam)",
  "question": "बचपन में सालिम अली की एयरगन से घायल होकर गिरी किस पक्षी ने उनके जीवन की दिशा को सदा के लिए बदल दिया था?",
  "options": [
    {
      "id": "A",
      "text": "नीले पंखों वाली नीलकंठ"
    },
    {
      "id": "B",
      "text": "पीले गले वाली गौरैया"
    },
    {
      "id": "C",
      "text": "सफेद कबूतर"
    },
    {
      "id": "D",
      "text": "जंगली मैना"
    }
  ],
  "correctOption": "B",
  "correctOptionLabel": "Option B (पीले गले वाली गौरैया)",
  "explanation": "बचपन में सालिम अली की एयरगन से एक पीले गले वाली गौरैया घायल होकर गिरी थी। उसकी सेवा और जिज्ञासा ने उन्हें भारत का सबसे बड़ा पक्षी-प्रेमी और वैज्ञानिक बना दिया।",
  "stepMarks": "Step: सालिम अली के जीवन की प्रेरणा-घटना का स्मरण (+1 Mark)",
  "commonTrap": "Trap: नीलकंठ पक्षी चुन लेना।",
  "difficulty": "EASY",
  "paperSource": "CBSE Class 9 Hindi Board Exam",
  "tags": [
    "Hindi",
    "क्षितिज",
    "सांवले सपनों की याद",
    "सालिम अली"
  ]
},
{
  "id": "c9-hin-day-70",
  "targetClass": "Class 9",
  "title": "क्षितिज काव्य: 'कैदी और कोकिला' (माखनलाल चतुर्वेदी)",
  "subject": "Class 9 Hindi",
  "topic": "क्षितिज काव्य: कैदी और कोकिला",
  "marks": "1 Mark (CBSE Class 9 Hindi A Exam)",
  "question": "'कैदी और कोकिला' कविता में कवि ने जेल में अंग्रेजों द्वारा पहनाई गई हथकड़ियों को क्या कहा है?",
  "options": [
    {
      "id": "A",
      "text": "गुलामी की जंजीरें"
    },
    {
      "id": "B",
      "text": "ब्रिटिश राज का गहना"
    },
    {
      "id": "C",
      "text": "अपराध का दंड"
    },
    {
      "id": "D",
      "text": "काले लोहे का फंदा"
    }
  ],
  "correctOption": "B",
  "correctOptionLabel": "Option B (ब्रिटिश राज का गहना)",
  "explanation": "कवि माखनलाल चतुर्वेदी एक सच्चे देशभक्त हैं। वे कहते हैं: 'हथकड़ियाँ क्यों? यह ब्रिटिश राज का गहना।' मातृभूमि की स्वतंत्रता के लिए जेल जाना उनके लिए गौरव की बात है।",
  "stepMarks": "Step: देशभक्तिपूर्ण प्रतीक 'ब्रिटिश राज का गहना' की पहचान (+1 Mark)",
  "commonTrap": "Trap: शाब्दिक रूप से 'गुलामी की जंजीरें' चुनना।",
  "difficulty": "EASY",
  "paperSource": "CBSE Class 9 Hindi Annual Paper",
  "tags": [
    "Hindi",
    "क्षितिज",
    "कैदी और कोकिला",
    "माखनलाल चतुर्वेदी"
  ]
}
];

export const CLASS_10_DAILY_QUESTIONS: DailyQuestionItem[] = [
  {
    id: 'c10-chem-day-1',
    targetClass: 'Class 10',
    title: 'Thermal Decomposition of Lead Nitrate',
    subject: 'Class 10 Science',
    topic: 'Chemistry: Chemical Reactions and Equations',
    marks: '1 Mark (CBSE Class 10 Board PYQ)',
    question: 'When dry lead nitrate powder is heated in a dry boiling tube, brown fumes are liberated. These brown fumes belong to which gas?',
    options: [
      { id: 'A', text: 'Lead Oxide (PbO)' },
      { id: 'B', text: 'Nitrogen Dioxide (NO₂)' },
      { id: 'C', text: 'Oxygen (O₂)' },
      { id: 'D', text: 'Nitrous Oxide (N₂O)' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Nitrogen Dioxide - NO₂)',
    explanation: 'On heating, lead nitrate decomposes thermally: 2Pb(NO₃)₂ (s) -(heat)-> 2PbO (s) [yellow solid] + 4NO₂ (g) [characteristic brown fumes] + O₂ (g) [colorless gas]. Hence, the brown gas is Nitrogen Dioxide (NO₂).',
    stepMarks: 'Step: Decomposition equation recognition (+1/2 Mark) | Identification of NO₂ brown gas (+1/2 Mark)',
    commonTrap: 'Trap: Confusing the yellow solid residue (PbO) with the brown gaseous fumes (NO₂).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 10 Science Board Exam (Set 31/1/1)',
    tags: ['Science', 'Chemistry', 'Chemical Reactions', 'Sure-Shot PYQ']
  },
  {
    id: 'c10-phy-day-2',
    targetClass: 'Class 10',
    title: "Ohm's Law and Circuit Current",
    subject: 'Class 10 Science',
    topic: 'Physics: Electricity',
    marks: '1 Mark (CBSE Class 10 Board PYQ)',
    question: 'A metallic resistor of 15 Ω is connected across the terminals of a 12 V electric battery. According to Ohm’s Law, what is the electric current flowing through the circuit?',
    options: [
      { id: 'A', text: '1.25 A' },
      { id: 'B', text: '0.8 A' },
      { id: 'C', text: '180 A' },
      { id: 'D', text: '27 A' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (0.8 A)',
    explanation: "From Ohm's law: V = I × R => I = V / R = 12 V / 15 Ω = 4 / 5 = 0.8 A. Thus, the current passing through the resistor is 0.8 Amperes.",
    stepMarks: 'Step: Formula I = V / R (+1/2 Mark) | Calculation 12/15 = 0.8 A (+1/2 Mark)',
    commonTrap: 'Trap: Inverting the ratio (15/12 = 1.25 A) by incorrectly applying I = R / V.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 10 Science Board Exam',
    tags: ['Science', 'Physics', 'Electricity', 'Formulas']
  },
  {
    id: 'c10-bio-day-3',
    targetClass: 'Class 10',
    title: 'Site of Complete Digestion in Humans',
    subject: 'Class 10 Science',
    topic: 'Biology: Life Processes',
    marks: '1 Mark (CBSE Class 10 Board PYQ)',
    question: 'In the human alimentary canal, which organ is the site of complete digestion of carbohydrates, proteins, and fats?',
    options: [
      { id: 'A', text: 'Stomach' },
      { id: 'B', text: 'Small Intestine' },
      { id: 'C', text: 'Large Intestine' },
      { id: 'D', text: 'Buccal Cavity' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Small Intestine)',
    explanation: 'The small intestine is the site of complete digestion of carbohydrates (into glucose), proteins (into amino acids), and fats (into fatty acids and glycerol). It receives bile juice from liver, pancreatic juice from pancreas, and intestinal enzymes from its own walls.',
    stepMarks: 'Step: Direct NCERT recall: Small intestine as complete digestion site (+1 Mark)',
    commonTrap: 'Trap: Choosing stomach, where only partial protein breakdown takes place via pepsin.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 10 Science Board Exam',
    tags: ['Science', 'Biology', 'Life Processes', 'NCERT Direct']
  },
  {
    id: 'c10-chem-day-4',
    targetClass: 'Class 10',
    title: 'Threshold pH for Acid Rain',
    subject: 'Class 10 Science',
    topic: 'Chemistry: Acids, Bases and Salts',
    marks: '1 Mark (CBSE Class 10 Board PYQ)',
    question: 'Rainwater is classified as "Acid Rain" when its pH value drops below which critical threshold?',
    options: [
      { id: 'A', text: '7.0' },
      { id: 'B', text: '6.5' },
      { id: 'C', text: '5.6' },
      { id: 'D', text: '2.0' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (5.6)',
    explanation: 'Normal rainwater has a slightly acidic pH of about 5.6–6.0 due to dissolved atmospheric CO₂ forming carbonic acid. When pollutants like SO₂ and NO₂ dissolve in rain to form sulfuric and nitric acids, the pH drops below 5.6, and it is termed acid rain.',
    stepMarks: 'Step: NCERT threshold pH < 5.6 (+1 Mark)',
    commonTrap: 'Trap: Selecting 7.0, assuming anything below pure neutral water is acid rain.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 10 Science Board Exam Sample Paper',
    tags: ['Science', 'Chemistry', 'Acids and Bases', 'NCERT Direct']
  },
  {
    id: 'c10-phy-day-5',
    targetClass: 'Class 10',
    title: 'Vehicle Rear-View Wing Mirror',
    subject: 'Class 10 Science',
    topic: 'Physics: Light - Reflection and Refraction',
    marks: '1 Mark (CBSE Class 10 Board PYQ)',
    question: 'Why are convex mirrors universally used as rear-view (wing) mirrors in automobiles?',
    options: [
      { id: 'A', text: 'They produce real, inverted, magnified images' },
      { id: 'B', text: 'They produce erect, diminished images and provide a much wider field of view' },
      { id: 'C', text: 'They have a focal length that adjusts automatically with speed' },
      { id: 'D', text: 'They invert distant headlights to reduce nighttime glare' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Erect, diminished images & wider field of view)',
    explanation: 'Convex mirrors always form virtual, erect, and diminished images of objects behind the vehicle regardless of distance. Because their reflecting surface curves outward, they offer a much wider field of view compared to plane or concave mirrors, enabling drivers to view traffic safely.',
    stepMarks: 'Step: Virtual, erect & diminished image (+1/2 Mark) | Wider field of view explanation (+1/2 Mark)',
    commonTrap: 'Trap: Confusing convex mirrors (rear-view) with concave mirrors (used in vehicle headlights to project parallel light beams).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 10 Science Board Examination',
    tags: ['Science', 'Physics', 'Light', 'Sure-Shot PYQ']
  },
  {
    id: 'c10-math-day-6',
    targetClass: 'Class 10',
    title: 'Nature of Roots of Quadratic Equation',
    subject: 'Class 10 Mathematics',
    topic: 'Mathematics: Quadratic Equations',
    marks: '1 Mark (CBSE Class 10 Board PYQ)',
    question: 'For a quadratic equation ax² + bx + c = 0 (a ≠ 0), if the discriminant D = b² - 4ac > 0, what is the nature of its roots?',
    options: [
      { id: 'A', text: 'Two distinct real roots' },
      { id: 'B', text: 'Two equal real roots' },
      { id: 'C', text: 'No real roots (imaginary roots)' },
      { id: 'D', text: 'Exactly one real root and one zero root' }
    ],
    correctOption: 'A',
    correctOptionLabel: 'Option A (Two distinct real roots)',
    explanation: 'The roots are given by x = (-b ± √D) / (2a). When D > 0, √D is a positive real number, yielding two distinct real solutions: (-b + √D)/(2a) and (-b - √D)/(2a). If D = 0, roots are real and equal; if D < 0, there are no real roots.',
    stepMarks: 'Step: Discriminant condition D > 0 (+1/2 Mark) | Two distinct real roots (+1/2 Mark)',
    commonTrap: 'Trap: Confusing D > 0 (two distinct real roots) with D = 0 (two equal real roots).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 10 Mathematics Standard Official Paper',
    tags: ['Mathematics', 'Quadratic Equations', 'NCERT Direct']
  },
  {
    id: 'c10-chem-day-7',
    targetClass: 'Class 10',
    title: 'Amphoteric Oxides of Metals',
    subject: 'Class 10 Science',
    topic: 'Chemistry: Metals and Non-Metals',
    marks: '1 Mark (CBSE Class 10 Board PYQ)',
    question: 'Which pair of metal oxides exhibits amphoteric behavior (reacts with both acids and bases to produce salt and water)?',
    options: [
      { id: 'A', text: 'Na₂O and K₂O' },
      { id: 'B', text: 'CaO and MgO' },
      { id: 'C', text: 'Al₂O₃ and ZnO' },
      { id: 'D', text: 'CuO and Fe₂O₃' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (Al₂O₃ and ZnO)',
    explanation: 'Most metal oxides are basic oxides. However, aluminum oxide (Al₂O₃) and zinc oxide (ZnO) react with both acids (e.g., HCl) and strong bases (e.g., NaOH) to produce salts (aluminates / zincates) and water. Such metal oxides are known as amphoteric oxides.',
    stepMarks: 'Step: Definition of amphoteric oxides (+1/2 Mark) | Identification of Al₂O₃ and ZnO (+1/2 Mark)',
    commonTrap: 'Trap: Selecting Na₂O and K₂O, which are strongly basic alkali oxides that dissolve in water to form hydroxides.',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 10 Science Board Exam',
    tags: ['Science', 'Chemistry', 'Metals & Non-Metals', 'High Yield']
  },
  {
    id: 'c10-bio-day-8',
    targetClass: 'Class 10',
    title: 'Transmission of Impulses Across Synapse',
    subject: 'Class 10 Science',
    topic: 'Biology: Control and Coordination',
    marks: '1 Mark (CBSE Class 10 Board PYQ)',
    question: 'The microscopic gap between the axon terminal of one neuron and the dendrite of the next neuron is called a:',
    options: [
      { id: 'A', text: 'Myelin Sheath' },
      { id: 'B', text: 'Synapse' },
      { id: 'C', text: 'Axon Hillock' },
      { id: 'D', text: 'Neuromuscular Junction' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Synapse)',
    explanation: 'A synapse is the functional microscopic gap between two adjacent neurons. When an electrical nerve impulse reaches the axon terminal, it triggers the release of chemical messengers (neurotransmitters) that cross the synapse and initiate a new electrical impulse in the dendrite of the subsequent neuron.',
    stepMarks: 'Step: Identification of synapse (+1 Mark)',
    commonTrap: 'Trap: Confusing synapse (neuron-to-neuron junction) with neuromuscular junction (neuron-to-muscle fiber junction).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 10 Science Board Sample',
    tags: ['Science', 'Biology', 'Nervous System', 'NCERT Direct']
  },
  {
    id: 'c10-phy-day-9',
    targetClass: 'Class 10',
    title: 'Magnetic Field Inside a Long Solenoid',
    subject: 'Class 10 Science',
    topic: 'Physics: Magnetic Effects of Electric Current',
    marks: '1 Mark (CBSE Class 10 Board PYQ)',
    question: 'The magnetic field pattern inside a current-carrying long straight solenoid consists of lines that are:',
    options: [
      { id: 'A', text: 'Circular and concentric' },
      { id: 'B', text: 'Parallel straight lines, indicating a uniform magnetic field' },
      { id: 'C', text: 'Radiating outward from the center' },
      { id: 'D', text: 'Zero at all internal points' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Parallel straight lines, uniform field)',
    explanation: 'Inside a long current-carrying solenoid, the magnetic field lines are in the form of parallel straight lines. This indicates that the magnetic field is uniform (constant strength and direction) at all points inside the core of the solenoid, resembling the uniform internal field of a bar magnet.',
    stepMarks: 'Step: Solenoid internal field lines are parallel (+1/2 Mark) | Representation of uniform magnetic field (+1/2 Mark)',
    commonTrap: 'Trap: Confusing the internal field of a solenoid (parallel uniform lines) with the field around a single straight conductor (concentric circles).',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 10 Science Board Examination',
    tags: ['Science', 'Physics', 'Magnetism', 'Sure-Shot PYQ']
  },
  {
    id: 'c10-math-day-10',
    targetClass: 'Class 10',
    title: 'Fundamental Trigonometric Identity',
    subject: 'Class 10 Mathematics',
    topic: 'Mathematics: Introduction to Trigonometry',
    marks: '1 Mark (CBSE Class 10 Board PYQ)',
    question: 'For any acute angle θ (0° ≤ θ < 90°), which of the following equations is a true trigonometric identity?',
    options: [
      { id: 'A', text: 'tan² θ - sec² θ = 1' },
      { id: 'B', text: 'sec² θ - tan² θ = 1' },
      { id: 'C', text: 'sin² θ - cos² θ = 1' },
      { id: 'D', text: 'cosec² θ + cot² θ = 1' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (sec² θ - tan² θ = 1)',
    explanation: 'From Pythagoras theorem applied to a right triangle: 1 + tan² θ = sec² θ. Transposing tan² θ gives sec² θ - tan² θ = 1. Similarly, sin² θ + cos² θ = 1 and 1 + cot² θ = cosec² θ (cosec² θ - cot² θ = 1).',
    stepMarks: 'Step: Formula sec² θ = 1 + tan² θ (+1/2 Mark) | sec² θ - tan² θ = 1 (+1/2 Mark)',
    commonTrap: 'Trap: Option A has the terms reversed: tan² θ - sec² θ = -1, not +1!',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 10 Mathematics Standard Board Exam',
    tags: ['Mathematics', 'Trigonometry', 'Formulas']
  }
];

export const CLASS_10_FALLBACK_QUESTIONS: DailyQuestionItem[] = CLASS_10_DAILY_QUESTIONS;

export function normalizeTargetClass(rawGradeOrGoal?: string): string {
  if (!rawGradeOrGoal) return 'Class 11';
  const str = rawGradeOrGoal.toLowerCase().trim();
  if (str.includes('jee') && (str.includes('adv') || str.includes('iit'))) return 'JEE Advanced';
  if (str.includes('jee')) return 'JEE Mains';
  if (str.includes('neet')) return 'NEET UG';
  if (/\b(9|9th|ix)\b/i.test(str) || str.includes('class 9') || str.includes('grade 9')) return 'Class 9';
  if (/\b(10|10th|x)\b/i.test(str) || str.includes('class 10') || str.includes('grade 10') || str.includes('matric')) return 'Class 10';
  if (/\b(12|12th|xii)\b/i.test(str) || str.includes('class 12') || str.includes('grade 12')) return 'Class 12';
  if (/\b(11|11th|xi)\b/i.test(str) || str.includes('class 11') || str.includes('grade 11')) return 'Class 11';
  return 'Class 11';
}

export function getQuestionById(id?: string): DailyQuestionItem | undefined {
  if (!id) return undefined;
  return [
    ...JEE_MAINS_DAILY_QUESTIONS,
    ...JEE_ADVANCED_DAILY_QUESTIONS,
    ...NEET_UG_DAILY_QUESTIONS,
    ...CLASS_12_DAILY_QUESTIONS,
    ...CLASS_11_DAILY_QUESTIONS,
    ...CLASS_10_DAILY_QUESTIONS,
    ...CLASS_9_DAILY_QUESTIONS
  ].find(q => q.id === id);
}

export function getQuestionsForClass(targetClass?: string): DailyQuestionItem[] {
  const norm = normalizeTargetClass(targetClass);
  if (norm === 'JEE Advanced') {
    return JEE_ADVANCED_DAILY_QUESTIONS;
  }
  if (norm === 'JEE Mains') {
    return JEE_MAINS_DAILY_QUESTIONS;
  }
  if (norm === 'NEET UG') {
    return NEET_UG_DAILY_QUESTIONS;
  }
  if (norm === 'Class 9') {
    return CLASS_9_DAILY_QUESTIONS;
  }
  if (norm === 'Class 10') {
    return CLASS_10_DAILY_QUESTIONS;
  }
  if (norm === 'Class 12') {
    return CLASS_12_DAILY_QUESTIONS;
  }
  return CLASS_11_DAILY_QUESTIONS;
}

/**
 * Returns the question of the day for a specific calendar date (YYYY-MM-DD).
 * Deterministic: every student in the same class sees the exact same question on that calendar date.
 */
export function getQuestionForDate(dateStr: string, targetClass?: string): DailyQuestionItem {
  const questions = getQuestionsForClass(targetClass);
  if (!questions || questions.length === 0) {
    return CLASS_11_DAILY_QUESTIONS[0];
  }

  const [y, m, d] = dateStr.split('-').map(Number);
  if (isNaN(y) || isNaN(m) || isNaN(d)) {
    return questions[0];
  }

  // Calculate deterministic UTC day index
  const dayIndex = Math.floor(Date.UTC(y, m - 1, d) / (1000 * 60 * 60 * 24));
  const selectedIndex = Math.abs(dayIndex) % questions.length;
  return questions[selectedIndex];
}

/**
 * Returns today's active question of the day based on local clock date.
 * Shifts automatically at local midnight!
 */
export function getDailyQuestion(targetClass?: string): DailyQuestionItem {
  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  return getQuestionForDate(todayStr, targetClass);
}

