import type { FormulaItem } from './class12_stem';

export const CLASS_11_HUMANITIES_COMMERCE_FORMULAS: FormulaItem[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 11: BIOLOGY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c11-bio-01',
    classLevel: '11',
    subjectId: 'bio',
    subjectName: 'Biology',
    domain: 'Cell Cycle and Cell Division',
    title: 'Mitosis vs Meiosis, Chromosome Numbers & Meiotic Recombination',
    formula: "Interphase Phases: G₁ (Cell growth) -> S Phase (DNA replicates 2C -> 4C; chromosome number remains 2n) -> G₂ (Protein synthesis)\nMitosis Stages: Prophase -> Metaphase (chromosomes align at equatorial plate) -> Anaphase (sister chromatids separate) -> Telophase\nMeiosis I Prophase I Sub-stages:\n  1) Leptotene: Chromatin condenses\n  2) Zygotene: Synapsis of homologous chromosomes, synaptonemal complex forms (bivalent/tetrad)\n  3) Pachytene: Crossing over mediated by enzyme recombinase\n  4) Diplotene: Dissolution of synaptonemal complex, X-shaped Chiasmata appear\n  5) Diakinesis: Terminalisation of chiasmata",
    variables: "2n = diploid chromosome number, C = DNA content (C increases to 2C in haploid, 2C to 4C in diploid during S phase)",
    examTip: "During S phase of cell division, DNA content doubles (from 2C to 4C), but the chromosome number remains EXACTLY the same (2n). Chromosome reduction (2n to n) occurs strictly during Anaphase I of Meiosis I."
  },
  {
    id: 'c11-bio-02',
    classLevel: '11',
    subjectId: 'bio',
    subjectName: 'Biology',
    domain: 'Photosynthesis in Higher Plants',
    title: 'Light Reaction Energetics, Calvin Cycle Stoichiometry & C4 Pathway',
    formula: "Calvin (C3) Cycle Energy Consumption per Glucose (C₆H₁₂O₆):\n  - 6 CO₂ fixed requires:\n    18 ATP (2 ATP for reduction + 1 ATP for regeneration per CO₂ = 3 × 6 = 18 ATP)\n    12 NADPH (2 NADPH for reduction per CO₂ = 2 × 6 = 12 NADPH)\nC4 Pathway (Hatch-Slack):\n  - Fixation in Mesophyll cells via enzyme PEPcase (primary CO₂ acceptor: PEP, 3-Carbon)\n  - Decarboxylation and Calvin cycle in Bundle Sheath cells (Kranz anatomy, Rubisco present)\n  - Requires 30 ATP + 12 NADPH per glucose (extra 12 ATP consumed to regenerate PEP)",
    variables: "PEP = Phosphoenolpyruvate, Rubisco = Ribulose bisphosphate carboxylase-oxygenase, PGA = 3-Phosphoglyceric acid",
    examTip: "C4 plants completely prevent photorespiration because high CO₂ concentration is maintained at the Rubisco active site in bundle sheath cells, preventing Rubisco from acting as an oxygenase. C4 plants are thermally and photosynthetically far more efficient."
  },
  {
    id: 'c11-bio-03',
    classLevel: '11',
    subjectId: 'bio',
    subjectName: 'Biology',
    domain: 'Respiration in Plants',
    title: 'Aerobic ATP Balance Sheet & Respiratory Quotient (RQ)',
    formula: "Net ATP Yield per Molecule of Glucose (Aerobic Respiration):\n  1) Glycolysis (Cytosol): 2 ATP (substrate-level) + 2 NADH (yielding 2 × 3 = 6 ATP or 2 × 2.5 = 5 ATP) = 7-8 ATP\n  2) Link Reaction (Mitochondrial Matrix): 2 Pyruvate -> 2 Acetyl CoA + 2 NADH (= 5-6 ATP)\n  3) Krebs / TCA Cycle (Matrix): 2 GTP + 6 NADH + 2 FADH₂ (= 2 + 15 + 3 = 20 ATP)\n  Total Theoretical Yield: 36 to 38 ATP per glucose\nRespiratory Quotient: RQ = Volume of CO₂ evolved / Volume of O₂ consumed\n  - Carbohydrates: RQ = 1.0 (C₆H₁₂O₆ + 6 O₂ -> 6 CO₂ + 6 H₂O)\n  - Fats (Tripalmitin): RQ = 0.7 (102 CO₂ / 145 O₂)\n  - Proteins: RQ ≈ 0.9\n  - Anaerobic Respiration: RQ = ∞ (CO₂ evolved without O₂ consumption)",
    variables: "NADH = 2.5-3 ATP equivalents; FADH₂ = 1.5-2 ATP equivalents; GTP = 1 ATP equivalent",
    examTip: "In anaerobic respiration, RQ is infinite (RQ = ∞) because CO₂ is released during alcoholic fermentation (pyruvate decarboxylation) while zero oxygen is consumed."
  },
  {
    id: 'c11-bio-04',
    classLevel: '11',
    subjectId: 'bio',
    subjectName: 'Biology',
    domain: 'Body Fluids & Circulation',
    title: 'Cardiac Cycle Volumes, Cardiac Output & Blood Pressure',
    formula: "Cardiac Cycle Duration = 0.8 seconds (at normal heart rate 72 beats/min):\n  - Atrial Systole = 0.1 s\n  - Ventricular Systole = 0.3 s\n  - Joint Diastole = 0.4 s\nStroke Volume (SV): End Diastolic Volume (120 mL) - End Systolic Volume (50 mL) = 70 mL\nCardiac Output: CO = Stroke Volume (SV) × Heart Rate (HR)\n  CO = 70 mL × 72 beats/min ≈ 5040 mL/min ≈ 5.0 Litres/min\nStandard Blood Pressure: 120 / 80 mmHg (120 mmHg = Systolic, 80 mmHg = Diastolic)\nPulse Pressure: Systolic Pressure - Diastolic Pressure = 120 - 80 = 40 mmHg",
    variables: "SV = blood volume pumped per ventricle per beat (mL), HR = heart rate (beats/min), CO = cardiac output",
    examTip: "First heart sound 'LUB' is produced by the closure of atrioventricular valves (tricuspid and bicuspid/mitral) at the start of ventricular systole. Second heart sound 'DUB' is caused by closure of semilunar valves at the onset of ventricular diastole."
  },
  {
    id: 'c11-bio-05',
    classLevel: '11',
    subjectId: 'bio',
    subjectName: 'Biology',
    domain: 'Excretory Products & Their Elimination',
    title: 'Glomerular Filtration Rate (GFR) & Net Filtration Pressure (NFP)',
    formula: "Glomerular Filtration Rate (GFR): 125 mL/min = 180 Litres/day\nDaily Urine Output: ~1.5 Litres/day (99% of filtrate is obligatorily and facultatively reabsorbed)\nNet Filtration Pressure (NFP):\n  NFP = GBHP - (CHP + BCOP)\n  NFP = 60 mmHg - (18 mmHg + 32 mmHg) = 10 mmHg\nCounter-Current Mechanism:\n  - Occurs between Henle's Loop and Vasa Recta in medullary interstitium\n  - Interstitial osmolarity increases from 300 mOsmol/L in cortex to 1200 mOsmol/L in inner medulla",
    variables: "GBHP = Glomerular blood hydrostatic pressure (~60 mmHg), CHP = Capsular hydrostatic pressure (~18 mmHg), BCOP = Blood colloidal osmotic pressure (~32 mmHg)",
    examTip: "Juxtaglomerular apparatus (JGA) releases Renin when GFR drops. Renin converts angiotensinogen to angiotensin I, which angiotensin-converting enzyme (ACE) turns to angiotensin II (a potent vasoconstrictor that stimulates aldosterone from adrenal cortex to retain Na⁺ and water, restoring GFR)."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 11: ECONOMICS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c11-eco-01',
    classLevel: '11',
    subjectId: 'eco',
    subjectName: 'Economics',
    domain: 'Statistics for Economics',
    title: 'Karl Pearson’s Correlation, Spearman’s Rank & Index Numbers',
    formula: "Karl Pearson's Coefficient of Correlation (r):\n  r = Σ [(x - x̄)(y - ȳ)] / √[ Σ (x - x̄)² · Σ (y - ȳ)² ] = Cov(X, Y) / (σ_x · σ_y)\n  Correlation Range: -1 ≤ r ≤ +1\nSpearman's Rank Correlation (no tied ranks):\n  r_s = 1 - [ (6 · Σ D²) / (N · (N² - 1)) ] (D = R₁ - R₂)\nLaspeyres Price Index (Base year weights q₀):\n  P₀₁ = [ Σ (p₁ · q₀) / Σ (p₀ · q₀) ] × 100\nPaasche Price Index (Current year weights q₁):\n  P₀₁ = [ Σ (p₁ · q₁) / Σ (p₀ · q₁) ] × 100\nFisher's Ideal Index: P₀₁ = √(Laspeyres × Paasche)",
    variables: "p₀, p₁ = base and current year prices; q₀, q₁ = base and current year quantities; D = difference between ranks; N = number of pairs",
    examTip: "Fisher's Ideal Price Index is called 'ideal' because it satisfies both the Time Reversal Test and the Factor Reversal Test, and is the geometric mean of Laspeyres and Paasche index numbers."
  },
  {
    id: 'c11-eco-02',
    classLevel: '11',
    subjectId: 'eco',
    subjectName: 'Economics',
    domain: 'Microeconomics: Consumer Behaviour',
    title: 'Price Elasticity of Demand, Utility & Consumer Equilibrium',
    formula: "Price Elasticity of Demand (Percentage Method):\n  E_d = (-) [ % Change in Quantity Demanded / % Change in Price ]\n  E_d = (-) [ (ΔQ / Q) / (ΔP / P) ] = (-) [ (ΔQ / ΔP) × (P / Q) ]\nDegrees of Elasticity:\n  E_d = 0 (Perfect Inelastic) | E_d < 1 (Inelastic) | E_d = 1 (Unitary) | E_d > 1 (Elastic) | E_d = ∞ (Perfect Elastic)\nMarginal Utility: MU_n = TU_n - TU_(n - 1) = ΔTU / ΔQ\nConsumer's Equilibrium (Two Commodities X and Y):\n  (MU_x / P_x) = (MU_y / P_y) = MU_m (Marginal Utility of Money)\nIndifference Curve Equilibrium Condition:\n  MRS_xy = P_x / P_y (Slope of IC equals Slope of Budget Line)",
    variables: "P = initial price, Q = initial quantity, ΔP = change in price, ΔQ = change in quantity, MRS_xy = Marginal Rate of Substitution (-ΔY / ΔX)",
    examTip: "In economics, the negative sign in price elasticity of demand indicates the inverse relationship between price and quantity (Law of Demand). When stating numerical elasticity magnitude, write |E_d|."
  },
  {
    id: 'c11-eco-03',
    classLevel: '11',
    subjectId: 'eco',
    subjectName: 'Economics',
    domain: 'Microeconomics: Production and Costs',
    title: 'Law of Variable Proportions, Cost Curves & Revenue Relations',
    formula: "Product Relations:\n  Total Product (TP) = Σ MP\n  Average Product (AP) = TP / L\n  Marginal Product (MP) = TP_n - TP_(n - 1) = ΔTP / ΔL\nCost Identities:\n  Total Cost (TC) = Total Fixed Cost (TFC) + Total Variable Cost (TVC)\n  Average Cost (AC) = Average Fixed Cost (AFC) + Average Variable Cost (AVC)\n  AFC = TFC / Q (Rectangular Hyperbola: AFC curve never touches axes)\n  Marginal Cost: MC = TC_n - TC_(n - 1) = TVC_n - TVC_(n - 1) = ΔTC / ΔQ\nRevenue Identities:\n  Total Revenue (TR) = P × Q\n  Average Revenue (AR) = TR / Q = P (AR always equals Price)\n  Marginal Revenue: MR = TR_n - TR_(n - 1) = ΔTR / ΔQ",
    variables: "L = units of variable factor (labour), Q = output volume, TFC = fixed cost (constant at all output levels including Q = 0)",
    examTip: "MC depends SOLELY on variable cost, never on fixed cost: MC = ΔTVC / ΔQ. When MC < AC, AC falls; when MC = AC, AC is at its absolute minimum; when MC > AC, AC rises. MC curve intersects AC and AVC curves at their lowest points."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 11: COMPUTER SCIENCE
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c11-cs-01',
    classLevel: '11',
    subjectId: 'cs',
    subjectName: 'Computer Science',
    domain: 'Computational Thinking & Python',
    title: 'Python Slicing Syntax, Data Types & Scope LEGB Rule',
    formula: "Sequence Slicing Syntax: sequence[start : stop : step]\n  - start: Inclusive index (defaults to 0 for positive step, -1 for negative step)\n  - stop: Exclusive index (stops at stop - 1)\n  - step: Increment stride (negative step reverses sequence: s[::-1])\nMutable Types: List, Dictionary, Set\nImmutable Types: Integer, Float, String, Tuple, FrozenSet, Boolean\nVariable Scope LEGB Hierarchy (Search Resolution Order):\n  1) L: Local (inside current function)\n  2) E: Enclosing (any enclosing/nested function closures)\n  3) G: Global (module top-level namespace; modified with 'global' keyword)\n  4) B: Built-in (predefined Python names: print, len, range)",
    variables: "s = string / list; indices run 0 to N-1 (forward) or -1 to -N (backward)",
    examTip: "Tuples and strings cannot be modified in place. Attempting `t[0] = 5` raises a TypeError: 'tuple' object does not support item assignment. Dictionary keys MUST be immutable (hashable) types (strings, numbers, or tuples)."
  },
  {
    id: 'c11-cs-02',
    classLevel: '11',
    subjectId: 'cs',
    subjectName: 'Computer Science',
    domain: 'Boolean Logic & Number Systems',
    title: "Boolean Algebra, De Morgan's Laws & Number Base Conversions",
    formula: "Fundamental Boolean Theorems:\n  - Identity: A + 0 = A ; A · 1 = A\n  - Idempotent: A + A = A ; A · A = A\n  - Complement: A + Ā = 1 ; A · Ā = 0\n  - Involution: (Ā)̄ = A\nDe Morgan's Laws:\n  1) (A + B)̄ = Ā · B̄ (Complement of sum equals product of complements)\n  2) (A · B)̄ = Ā + B̄ (Complement of product equals sum of complements)\nNumber Base Representations:\n  - Binary: Base 2 (digits 0, 1)\n  - Octal: Base 8 (digits 0 to 7; group 3 binary bits)\n  - Hexadecimal: Base 16 (digits 0-9, A-F; group 4 binary bits: A=10, B=11, C=12, D=13, E=14, F=15)",
    variables: "A, B = binary Boolean variables (0 or 1)",
    examTip: "To convert fractional binary to decimal, multiply positions after the radix point by negative powers of two: 0.101₂ = 1×2⁻¹ + 0×2⁻² + 1×2⁻³ = 0.5 + 0.125 = 0.625₁₀."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 11: POLITICAL SCIENCE & HISTORY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c11-pol-01',
    classLevel: '11',
    subjectId: 'pol',
    subjectName: 'Political Science',
    domain: 'Indian Constitution at Work',
    title: 'Fundamental Rights, Constitutional Remedies & Emergency Articles',
    formula: "Fundamental Rights (Part III, Articles 12 to 35):\n  1) Right to Equality: Articles 14 - 18\n  2) Right to Freedom: Articles 19 - 22 (Article 19 protects 6 basic freedoms; Article 21 protects Right to Life & Personal Liberty)\n  3) Right against Exploitation: Articles 23 - 24 (child labour prohibited in hazardous work)\n  4) Right to Freedom of Religion: Articles 25 - 28\n  5) Cultural and Educational Rights: Articles 29 - 30\n  6) Right to Constitutional Remedies: Article 32 (Supreme Court) & Article 226 (High Court)\nFive Constitutional Prerogative Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto\nEmergency Provisions (Part XVIII):\n  - Article 352: National Emergency (War, External Aggression, Armed Rebellion)\n  - Article 356: State Emergency / President's Rule (Breakdown of constitutional machinery)\n  - Article 360: Financial Emergency\nConstitutional Amendment Article: Article 368 (Part XX)",
    variables: "Dr. B.R. Ambedkar designated Article 32 as the 'Heart and Soul of the Constitution'",
    examTip: "Article 20 (protection in respect of conviction for offences) and Article 21 (right to life and personal liberty) can NEVER be suspended, even during a proclamation of National Emergency under Article 352 (44th Amendment Act, 1978)."
  },
  {
    id: 'c11-hist-01',
    classLevel: '11',
    subjectId: 'hist',
    subjectName: 'History',
    domain: 'Themes in World History',
    title: 'Mesopotamian Urbanism, Roman Society & Industrial Revolution Milestones',
    formula: "Mesopotamian Civilization Key Milestones:\n  - Location: Tigris and Euphrates rivers (modern Iraq)\n  - Writing System: Cuneiform script on clay tablets (~3200 BCE)\n  - Temple Economy: 'Ziggurats' dedicated to Moon God (Ur) and Inanna (Goddess of Love & War)\nRoman Empire Administrative Structure:\n  - Principate founded by Augustus (Octavian) in 27 BCE\n  - Three Key Players: The Emperor, The Senate, and The Army\n  - Constantine adopted Christianity as official state religion (~313 CE) and founded Constantinople (330 CE)\nIndustrial Revolution in Britain (1760 - 1850):\n  - Flying Shuttle: John Kay (1733)\n  - Spinning Jenny: James Hargreaves (1764)\n  - Water Frame: Richard Arkwright (1769)\n  - Steam Engine: James Watt (1769, improved Thomas Newcomen's design)",
    variables: "Pomerium = sacred boundary of Rome; Pax Romana = period of Roman imperial peace under Augustus",
    examTip: "Britain was the first nation to experience the Industrial Revolution due to political stability, common currency, abundant coal and iron ore reserves, financial institutions (Bank of England), and domestic river transport."
  }
];
