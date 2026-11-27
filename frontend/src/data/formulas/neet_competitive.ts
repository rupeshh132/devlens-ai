import type { FormulaItem } from './class12_stem';

export const NEET_COMPETITIVE_FORMULAS: FormulaItem[] = [
  {
    id: 'neet-bio-01',
    classLevel: '11',
    subjectId: 'bio',
    subjectName: 'Biology',
    domain: 'Plant Taxonomy & NMC Updated Families',
    title: 'NMC New Syllabus Plant Families & Floral Symmetry',
    formula: "Cruciferae (Brassicaceae): ⊕ ⚥ K₂₊₂ C₄ A₂₊₄ G₍₂₎ (Tetradynamous, Siliqua fruit)\nMalvaceae: ⊕ ⚥ EpiK₃₋₇ K₍₅₎ C₅ A₍∞₎ (Monoadelphous) G₍₅₋∞₎\nLeguminosae (Fabaceae): % ⚥ K₍₅₎ C₁₊₂₊₍₂₎ (Vexillary) A₍₉₎₊₁ G₁\nCompositae (Asteraceae): Pappus calyx, Syngenesious anthers, Basal placentation\nGramineae (Poaceae): Perianth reduced to 2 Lodicules, Versatile anthers, Caryopsis fruit",
    variables: "⊕ = Actinomorphic, % = Zygomorphic, G_ = Superior ovary, ∩ above C-A = Epipetalous",
    examTip: "NMC NEET 2026 added Malvaceae, Cruciferae, Compositae & Gramineae explicitly alongside Leguminosae — high chance of matching questions!"
  },
  {
    id: 'neet-bio-02',
    classLevel: '11',
    subjectId: 'bio',
    subjectName: 'Biology',
    domain: 'Cell Cycle & Meiosis Division',
    title: 'DNA Content (2C/4C) & Chromosome Number (2n) Tracking',
    formula: "G1 Phase: 2n chromosomes, 2C DNA\nS Phase (Replication): 2n chromosomes, 4C DNA (Histones + Centriole double)\nG2 & Mitosis Metaphase: 2n, 4C -> Post-Mitosis daughter: 2n, 2C\nMeiosis I end: n, 2C (reductional) -> Meiosis II end: n, 1C (equational)",
    variables: "n = haploid chromosome set count, C = haploid DNA mass",
    examTip: "During S-phase DNA content doubles (2C -> 4C) while chromosome number stays 2n!"
  },
  {
    id: 'neet-bio-03',
    classLevel: '11',
    subjectId: 'bio',
    subjectName: 'Biology',
    domain: 'Plant Physiology (Photosynthesis & Respiration)',
    title: 'C3 vs C4 ATP Cost & Respiratory Quotient (RQ)',
    formula: "C3 Cycle (per 1 CO₂ / per Glucose): 3 ATP + 2 NADPH (18 ATP + 12 NADPH per glucose)\nC4 Cycle (per 1 CO₂ / per Glucose): 5 ATP + 2 NADPH (30 ATP + 12 NADPH per glucose)\nRQ = Volume CO₂ evolved / Volume O₂ consumed:\nCarbohydrate = 1.0 | Proteins ≈ 0.9 | Fats ≈ 0.7 (Tripalmitin) | Organic Acids > 1 | Anaerobic = ∞",
    variables: "RuBisCO site in C4 = Bundle Sheath; PEPcase site in C4 = Mesophyll cells",
    examTip: "Photorespiration occurs in Chloroplast -> Peroxisome -> Mitochondria ONLY in C3 plants, NEVER in C4 plants."
  },
  {
    id: 'neet-bio-04',
    classLevel: '11',
    subjectId: 'bio',
    subjectName: 'Biology',
    domain: 'Human Physiology (Breathing & ECG)',
    title: 'Spirometry Capacities & P-QRS-T ECG Waves',
    formula: "TV = 500 mL | IRV = 2500–3000 mL | ERV = 1000–1100 mL | RV = 1100–1200 mL\nVital Capacity VC = TV + IRV + ERV ≈ 4500 mL\nCardiac Output CO = Stroke Volume (70 mL) × Heart Rate (72 bpm) ≈ 5040 mL/min\nECG: P = Atrial Depolarisation | QRS = Ventricular Depolarisation | T = Ventricular Repolarisation",
    variables: "Spirometer CANNOT measure Residual Volume (RV), FRC (ERV+RV), or TLC",
    examTip: "Right shift of Oxyhaemoglobin Dissociation Curve = High CO₂, High H⁺ (low pH), High Temp, Low pO₂ (Bohr effect)."
  },
  {
    id: 'neet-bio-05',
    classLevel: '12',
    subjectId: 'bio',
    subjectName: 'Biology',
    domain: 'Molecular Biology & Genetics',
    title: 'Chargaff Rule, Lac Operon & Hardy-Weinberg Equilibrium',
    formula: "Chargaff Rule: A = T, G = C, (A + G) / (T + C) = 1 ; (A+T)/(G+C) is species-specific constant\nHardy-Weinberg: p + q = 1 and p² + 2pq + q² = 1\nLac Operon Genes: z = β-galactosidase | y = Permease | a = Transacetylase (i = Repressor)",
    variables: "p = dominant allele frequency, q = recessive allele frequency, 2pq = heterozygote carrier frequency",
    examTip: "Genetic drift (Founder effect), Gene migration, Mutation, Recombination & Natural Selection disturb Hardy-Weinberg equilibrium."
  },
  {
    id: 'neet-bio-06',
    classLevel: '12',
    subjectId: 'bio',
    subjectName: 'Biology',
    domain: 'Biotechnology (PCR & Vectors)',
    title: 'PCR Thermal Steps & pBR322 Antibiotic Selectable Markers',
    formula: "PCR Steps: 1) Denaturation (94°C) -> 2) Primer Annealing (50–60°C) -> 3) Extension (72°C, Taq polymerase)\nDNA Copies after n cycles = 2ⁿ\npBR322 Sites: BamHI / SalI lie inside tetᴿ gene ; PstI / PvuI lie inside ampᴿ gene ; rop codes for replication proteins",
    variables: "Taq DNA Polymerase isolated from Thermus aquaticus (heat-stable); Ethidium Bromide + UV stains DNA bright orange",
    examTip: "Insertional inactivation at BamHI destroys tetracycline resistance (recombinants grow on ampicillin only)."
  },
  {
    id: 'neet-phy-01',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Medical Physics Quick Ratios (NEET Speed Tricks)',
    title: 'High-Frequency NEET Formulas (Lens Power, Nuclear Size & Logic)',
    formula: "Nuclear Radius: R = R₀ A^(1/3) (R₀ = 1.2 fm) | Nuclear Density = CONSTANT (independent of A)\nResolving Limit vs Resolving Power: RP_microscope = 2μ sinθ / λ | RP_telescope = D / (1.22 λ)\nDoppler Light Shift: Δλ/λ = v/c | pH meter / Galvanometer Ammeter Shunt: S = (I_g · G) / (I - I_g)",
    variables: "A = Mass number, G = Galvanometer resistance, I_g = Full scale deflection current",
    examTip: "Nuclear density is ~2.3 × 10¹⁷ kg/m³ — IDENTICAL for ⁴He, ⁵⁶Fe, and ²³⁸U (favourite 4-mark NCERT trap!)."
  }
];
