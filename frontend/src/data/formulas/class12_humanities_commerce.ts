import type { FormulaItem } from './class12_stem';

export const CLASS_12_HUMANITIES_COMMERCE_FORMULAS: FormulaItem[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 12: BIOLOGY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c12-bio-01',
    classLevel: '12',
    subjectId: 'bio',
    subjectName: 'Biology',
    domain: 'Genetics and Evolution',
    title: 'Hardy-Weinberg Principle & Population Genetics Equations',
    formula: "Hardy-Weinberg Equilibrium Equations:\n  Allele Frequencies: p + q = 1\n  Genotype Frequencies: p² + 2pq + q² = 1\n  - p² = Frequency of homozygous dominant genotype (AA)\n  - 2pq = Frequency of heterozygous genotype (Aa)\n  - q² = Frequency of homozygous recessive genotype (aa)\nFive Factors Causing Evolutionary Deviation from Equilibrium:\n  1) Gene migration / Gene flow\n  2) Genetic drift (Sewall Wright effect / Founder effect / Bottleneck effect)\n  3) Mutation\n  4) Genetic recombination (during meiosis)\n  5) Natural selection (Stabilizing, Directional, or Disruptive)",
    variables: "p = frequency of dominant allele A, q = frequency of recessive allele a in a panmictic population",
    examTip: "In numerical problems: If given the percentage of recessive phenotype (e.g. 16% aa), first solve for q = √(0.16) = 0.4. Then find p = 1 - q = 1 - 0.4 = 0.6. The frequency of heterozygous carriers is 2pq = 2(0.6)(0.4) = 0.48 (48%)."
  },
  {
    id: 'c12-bio-02',
    classLevel: '12',
    subjectId: 'bio',
    subjectName: 'Biology',
    domain: 'Molecular Basis of Inheritance',
    title: "Chargaff's Rules, DNA Geometry & Lac Operon Genetics",
    formula: "Chargaff's DNA Base Equivalence Rules:\n  1) Amount of Adenine = Amount of Thymine (A = T)\n  2) Amount of Guanine = Amount of Cytosine (G = C)\n  3) Purines equal Pyrimidines: A + G = T + C => (A + G) / (T + C) = 1.0\n  4) (A + T) / (G + C) is a species-specific constant\nB-DNA Helical Dimensions:\n  - Pitch of helix = 3.4 nm (34 Å)\n  - Distance between adjacent base pairs = 0.34 nm (3.4 Å)\n  - Base pairs per complete turn = 10 bp\nLac Operon Structural Genes & Products:\n  - z gene -> β-galactosidase (hydrolyses lactose to glucose + galactose)\n  - y gene -> Permease (increases membrane permeability to β-galactosides)\n  - a gene -> Transacetylase (transfers acetyl group to β-galactosides)",
    variables: "Inducer = Allolactose (inactivates the lac repressor protein encoded by i gene)",
    examTip: "Chargaff's rules apply strictly to DOUBLE-STRANDED DNA (dsDNA). If in an analytical problem %A does not equal %T, the nucleic acid is necessarily single-stranded DNA (ssDNA) or RNA."
  },
  {
    id: 'c12-bio-03',
    classLevel: '12',
    subjectId: 'bio',
    subjectName: 'Biology',
    domain: 'Biotechnology: Principles and Processes',
    title: 'Polymerase Chain Reaction (PCR) Yield & Agarose Electrophoresis',
    formula: "PCR Amplification Formula: N = N₀ · 2ⁿ\n  - After n cycles: Amplification = 2ⁿ times\n  - Example: After 30 cycles, 2³⁰ ≈ 1.07 × 10⁹ (over 1 billion-fold amplification)\nThree Sequential PCR Thermal Steps:\n  1) Denaturation: 94 °C (separates dsDNA into single strands)\n  2) Annealing: 50 °C - 56 °C (primers hybridize to complementary 3' ends)\n  3) Extension / Synthesis: 72 °C (Taq polymerase synthesizes new strands from dNTPs)\nAgarose Gel Electrophoresis Migration:\n  - DNA fragments are negatively charged (phosphate backbone) and migrate toward positive Anode (+)\n  - Separation Rate: Smaller fragments travel farther through agarose matrix pores (inversely proportional to size)",
    variables: "N = final DNA copy number, N₀ = starting template copies, n = number of thermal cycles, Taq polymerase = thermostable DNA polymerase isolated from bacterium Thermus aquaticus",
    examTip: "DNA fragments separated on agarose gel cannot be seen directly under normal visible light. They must be stained with Ethidium Bromide (EtBr) and viewed under ultraviolet (UV) radiation, showing bright orange bands."
  },
  {
    id: 'c12-bio-04',
    classLevel: '12',
    subjectId: 'bio',
    subjectName: 'Biology',
    domain: 'Ecology: Organisms and Populations',
    title: 'Exponential & Logistic Population Growth & Species-Area Equation',
    formula: "Exponential Growth (Unlimited Resources - J-shaped curve):\n  Differential Form: dN / dt = (b - d) N = r · N\n  Integral Form: N_t = N₀ · e^(r t)\nLogistic Growth (Limited Resources - Verhulst-Pearl S-shaped / Sigmoid curve):\n  dN / dt = r · N · [ (K - N) / K ]\nSpecies-Area Relationship (Alexander von Humboldt):\n  log S = log C + Z · log A  (or S = C · A^Z)\nLindeman's 10% Trophic Efficiency Law:\n  Energy Transferred to Next Trophic Level = 10% of ingested biomass (90% lost in respiration/metabolism)",
    variables: "N = population size, b = birth rate, d = death rate, r = intrinsic rate of natural increase, K = carrying capacity of habitat, S = species richness, A = geographic area, Z = regression slope (0.1 to 0.2 for local areas; 0.6 to 1.2 for entire continents)",
    examTip: "When population size N approaches carrying capacity K (N -> K), the environmental resistance term (K - N)/K approaches zero, so growth rate dN/dt ceases (population reaches plateau/asymptote)."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 12: ECONOMICS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c12-eco-01',
    classLevel: '12',
    subjectId: 'eco',
    subjectName: 'Economics',
    domain: 'Macroeconomics: National Income Accounting',
    title: 'National Income Identities, Conversion Matrix & Aggregates',
    formula: "Fundamental Conversion Axioms:\n  1) Gross to Net: Net = Gross - Depreciation (Consumption of Fixed Capital)\n  2) Domestic to National: National = Domestic + NFIA (Net Factor Income from Abroad)\n     NFIA = Factor income earned from abroad - Factor income paid abroad\n  3) Market Price to Factor Cost: Factor Cost = Market Price - NIT (Net Indirect Taxes)\n     NIT = Indirect Taxes (GST) - Subsidies\nNational Income Definition: NNP_fc = National Income\nMaster Identity: NNP_fc = GDP_mp - Depreciation + NFIA - NIT",
    variables: "GDP_mp = Gross Domestic Product at Market Price, NNP_fc = Net National Product at Factor Cost, NFIA = Net factor income from abroad, NIT = Net indirect taxes",
    examTip: "Net export (X - M) is already included in GDP_mp; do NOT confuse it with NFIA. Depreciation is also called 'Consumption of Fixed Capital' or 'Capital Consumption Allowance' in exam questions."
  },
  {
    id: 'c12-eco-02',
    classLevel: '12',
    subjectId: 'eco',
    subjectName: 'Economics',
    domain: 'Macroeconomics: National Income Accounting',
    title: 'Three Methods of Measuring National Income',
    formula: "1) Value Added Method:\n   GVA_mp = Value of Output - Intermediate Consumption\n   Value of Output = Sales + Change in Stock (Closing Stock - Opening Stock)\n   Σ GVA_mp = GDP_mp\n2) Income Method:\n   NDP_fc = Compensation of Employees (Wages + Salaries in cash/kind + Employer social contribution)\n          + Operating Surplus (Rent + Royalty + Interest + Profit [Dividends + Corp Tax + Retained Earnings])\n          + Mixed Income of Self-Employed\n3) Expenditure Method:\n   GDP_mp = Private Final Consumption Expenditure (C)\n          + Government Final Consumption Expenditure (G)\n          + Gross Domestic Capital Formation (Gross Investment = Net Investment + Dep)\n          + Net Exports (X - M)",
    variables: "Intermediate Consumption = Purchase of raw materials and non-factor inputs used up in production; does NOT include machinery/capital goods purchase",
    examTip: "Transfer payments (e.g., old-age pensions, pocket money, scholarships, gifts) are NOT factor payments and must NEVER be included in National Income because they do not correspond to any current productive output."
  },
  {
    id: 'c12-eco-03',
    classLevel: '12',
    subjectId: 'eco',
    subjectName: 'Economics',
    domain: 'Macroeconomics: Income & Employment',
    title: 'Consumption, Saving Functions & Investment Multiplier',
    formula: "Consumption Function: C = c̄ + b · Y (where c̄ = autonomous consumption, b = MPC)\nSaving Function: S = -c̄ + (1 - b) · Y (where (1 - b) = MPS)\nPropensities to Consume & Save:\n  - Marginal: MPC = ΔC / ΔY | MPS = ΔS / ΔY | MPC + MPS = 1\n  - Average: APC = C / Y | APS = S / Y | APC + APS = 1\nInvestment Multiplier (k):\n  k = ΔY / ΔI = 1 / (1 - MPC) = 1 / MPS\nLimits of Multiplier: 1 ≤ k ≤ ∞\n  - If MPC = 0: k = 1 (minimum multiplier)\n  - If MPC = 1: k = ∞ (maximum multiplier)",
    variables: "Y = National Income, C = Total Consumption, S = Total Savings, ΔI = Change in autonomous investment, k = multiplier",
    examTip: "APC can be greater than 1 (APC > 1) at income levels below the break-even point where consumption exceeds income (C > Y), resulting in negative savings (dissavings). However, MPC can NEVER exceed 1."
  },
  {
    id: 'c12-eco-04',
    classLevel: '12',
    subjectId: 'eco',
    subjectName: 'Economics',
    domain: 'Macroeconomics: Money & Banking',
    title: 'Credit Multiplier, Money Supply Aggregates & Central Bank Tools',
    formula: "Money / Credit Multiplier: k_credit = 1 / LRR (Legal Reserve Ratio)\nLegal Reserve Ratio: LRR = Cash Reserve Ratio (CRR) + Statutory Liquidity Ratio (SLR)\nTotal Credit Creation: Total Credit = Initial Primary Deposits × (1 / LRR)\nMoney Supply Measures (RBI):\n  - M₁ = Currency with public (C) + Demand deposits of banks (DD) + Other deposits with RBI (OD) [Most liquid]\n  - M₂ = M₁ + Post office savings bank deposits\n  - M₃ = M₁ + Time deposits with commercial banks [Broad money]\n  - M₄ = M₃ + Total post office deposits (excluding NSC)",
    variables: "CRR = percentage of net demand and time liabilities (NDTL) kept with RBI in cash; SLR = percentage of NDTL maintained with banks in liquid assets (gold, unencumbered securities)",
    examTip: "To control inflation (excess demand), the Central Bank increases Repo Rate, CRR, SLR, and Bank Rate, or sells government securities in Open Market Operations (OMO) to drain liquid credit from the economy."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 12: COMPUTER SCIENCE
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c12-cs-01',
    classLevel: '12',
    subjectId: 'cs',
    subjectName: 'Computer Science',
    domain: 'Data Structures & Python File Handling',
    title: 'Stack Operations (LIFO) & File Access Modes',
    formula: "Stack Data Structure (LIFO - Last In First Out):\n  - Push Operation: stack.append(item)\n  - Pop Operation: stack.pop() (Check Underflow: if len(stack) == 0 => Underflow)\n  - Peek Operation: stack[-1] (returns topmost element without removal)\nPython Text & Binary File Modes:\n  - 'r' / 'rb': Read only (File must exist; pointer at start)\n  - 'w' / 'wb': Write only (Overwrites existing file or creates new; pointer at start)\n  - 'a' / 'ab': Append only (Pointer at end of file; preserves existing content)\n  - 'r+' / 'w+': Read and Write\nFile Pointer Methods:\n  - file.tell(): Returns current byte position of file pointer\n  - file.seek(offset, from_what): Moves pointer (from_what: 0 = start, 1 = current, 2 = end)",
    variables: "Pickle module methods: pickle.dump(data, file) writes object; pickle.load(file) deserializes object",
    examTip: "When using `seek(offset, from_what)` in Python 3 on text files, `from_what` values of 1 (relative to current position) and 2 (relative to file end) are allowed ONLY when offset is 0. Arbitrary non-zero relative seeking requires binary mode ('rb')."
  },
  {
    id: 'c12-cs-02',
    classLevel: '12',
    subjectId: 'cs',
    subjectName: 'Computer Science',
    domain: 'Database Management Systems & SQL',
    title: 'SQL DDL vs DML Commands, Clause Hierarchy & Aggregate Rules',
    formula: "SQL Command Classifications:\n  - DDL (Data Definition Language): CREATE, ALTER, DROP, TRUNCATE (auto-committed)\n  - DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE (can be rolled back)\n  - DCL: GRANT, REVOKE | TCL: COMMIT, ROLLBACK, SAVEPOINT\nSQL Query Execution Clause Order:\n  SELECT [DISTINCT] column_expressions\n  FROM table_name\n  WHERE row_condition\n  GROUP BY group_columns\n  HAVING aggregate_condition\n  ORDER BY sort_column [ASC | DESC];\nRelation Metrics:\n  - Degree: Total number of attributes (columns) in a relation\n  - Cardinality: Total number of tuples (rows) in a relation",
    variables: "Primary Key = uniquely identifies row (NOT NULL and UNIQUE); Foreign Key = references primary key of another table",
    examTip: "WHERE clause filters individual rows BEFORE grouping. HAVING clause filters groups AFTER aggregation. Therefore, aggregate functions like COUNT(), SUM(), AVG(), MAX(), MIN() can NEVER appear in a WHERE clause; they must be placed in HAVING."
  },
  {
    id: 'c12-cs-03',
    classLevel: '12',
    subjectId: 'cs',
    subjectName: 'Computer Science',
    domain: 'Computer Networks',
    title: 'Network Topologies, OSI Reference Model & IP Addressing',
    formula: "Network Topologies:\n  - Star: All nodes connect to central switch/hub; single node failure does not affect network; central hub failure collapses system\n  - Bus: Single central backbone cable with terminators; requires least cable; prone to collisions\n  - Mesh: Every node connects to every other node; links required = N(N - 1) / 2\nIP Addressing:\n  - IPv4: 32 bits (4 octets separated by dots, e.g., 192.168.1.1)\n  - IPv6: 128 bits (8 groups of 4 hexadecimal digits separated by colons)\nCore Application Protocols & Port Defaults:\n  - HTTP: Port 80 | HTTPS: Port 443 | FTP: Ports 20, 21 | SMTP: Port 25 | DNS: Port 53",
    variables: "N = number of nodes in network; MAC address = 48-bit (6 bytes) permanent hardware address burned into NIC",
    examTip: "In case-study design questions: Place the server in the building block with the MAXIMUM number of computers (80-20 rule) to minimize network traffic delays across connecting cables."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 12: HISTORY & POLITICAL SCIENCE
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c12-hist-01',
    classLevel: '12',
    subjectId: 'hist',
    subjectName: 'History',
    domain: 'Themes in Indian History',
    title: 'Harappan Archaeology, Vijayanagara Architecture & Indian Nationalist Acts',
    formula: "Harappan Civilization (Mature Harappan 2600 - 1900 BCE):\n  - Town Planning: Dual division into Citadel (western, higher, fortified) and Lower Town (eastern, residential)\n  - Standard Brick Dimension Ratio: Thickness : Width : Length = 1 : 2 : 4\n  - Drainage: Covered drains with inspection sumps; street grid pattern intersecting at right angles\nVijayanagara Empire (1336 - 1565 CE):\n  - Founded by Harihara and Bukka (Sangama Dynasty)\n  - Pinnacle Ruler: Krishnadeva Raya (Tuluva Dynasty, 1509-1529, author of Amuktamalyada)\n  - Battle of Talikota (Rakshasi-Tangadi): 1565 CE (Vijayanagara routed by Deccan Sultanates coalition)\nKey Colonial Epochal Dates:\n  - Permanent Settlement of Bengal: 1793 (Lord Cornwallis)\n  - Santhal Rebellion: 1855-56 (Sidhu and Kanhu Murmu)\n  - Sepoy Mutiny: 10 May 1857 (Meerut)\n  - Non-Cooperation Movement: 1920-22 (suspended after Chauri Chaura incident, Feb 1922)\n  - Salt March / Civil Disobedience: 12 March to 6 April 1930 (Sabarmati to Dandi)\n  - Quit India Movement: 8 August 1942 (Gowalia Tank, Bombay - 'Do or Die')",
    variables: "John Marshall = DG of ASI who formally announced discovery of Indus Valley Civilization to the world in 1924",
    examTip: "James Prinsep deciphered Asokan Brahmi and Kharosthi scripts in 1837, establishing that inscriptions referencing 'Devanampiya Piyadassi' (Beloved of the Gods) belonged to Emperor Asoka Maurya."
  },
  {
    id: 'c12-pol-01',
    classLevel: '12',
    subjectId: 'pol',
    subjectName: 'Political Science',
    domain: 'Contemporary World Politics & Indian Politics',
    title: 'UN Organs, Cold War Treaties, Panchsheel & Coalition Eras',
    formula: "United Nations (Founded 24 October 1945):\n  - UN Security Council: 15 Members (5 Permanent with Veto Power [P5: USA, UK, France, Russia, China] + 10 Non-Permanent elected for 2-year terms)\n  - International Court of Justice (ICJ): Seat at The Hague, Netherlands (15 judges, 9-year terms)\nCold War Military Alliances:\n  - NATO (North Atlantic Treaty Organization): 1949 (Western Bloc, led by USA)\n  - Warsaw Pact: 1955 (Eastern Bloc, led by USSR; dissolved 1991)\nNon-Aligned Movement (NAM) Five Founders:\n  - Jawaharlal Nehru (India), Josip Broz Tito (Yugoslavia), Gamal Abdel Nasser (Egypt), Sukarno (Indonesia), Kwame Nkrumah (Ghana); 1st Summit: Belgrade (1961)\nPanchsheel Principles (Signed 29 April 1954 between Nehru and Zhou Enlai):\n  1) Mutual respect for territorial integrity and sovereignty\n  2) Mutual non-aggression\n  3) Mutual non-interference in internal affairs\n  4) Equality and mutual benefit\n  5) Peaceful co-existence\nMajor Post-Independence Coalition Milestones:\n  - 1989: National Front (V.P. Singh supported by BJP and Left from outside)\n  - 1998 & 2014: National Democratic Alliance (NDA led by BJP)\n  - 2004: United Progressive Alliance (UPA led by Congress)",
    variables: "Disintegration of Soviet Union occurred on 25 December 1991 when Mikhail Gorbachev resigned as President of the USSR",
    examTip: "The Emergency in India was proclaimed under Article 352 on the grounds of 'internal disturbance' on the night of 25 June 1975 by President Fakhruddin Ali Ahmed on the advice of Prime Minister Indira Gandhi. The 44th Constitutional Amendment replaced 'internal disturbance' with 'armed rebellion'."
  }
];
