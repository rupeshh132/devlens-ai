-- V157__seed_class11_chemistry_curriculum.sql
-- Class 11 Chemistry (Subject Code: 043) Official CBSE / Directorate of Education GNCT of Delhi 2026-27 Curriculum
-- Includes 9 Summative NCERT Units (70 Marks) + 2 Formative Enrichment Modules & 62 Master Topics

-- 1. Insert Subject: Chemistry (Code 043) under Class 11 Exam Type
INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active)
VALUES ('65d29b56-0430-0000-0000-000000000011', '303d9917-55e9-4f81-8a0f-129ba4c01aef', 'Chemistry', '043', 3, true)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code, order_index = EXCLUDED.order_index, is_active = true;

-- 2. Insert 11 Chapters (9 Summative Units + 2 Formative & Bridge Modules)
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
('65d29b56-0430-1100-0000-000000000001', '65d29b56-0430-0000-0000-000000000011', 'Some Basic Concepts of Chemistry', 1, true),
('65d29b56-0430-1100-0000-000000000002', '65d29b56-0430-0000-0000-000000000011', 'Structure of Atom', 2, true),
('65d29b56-0430-1100-0000-000000000003', '65d29b56-0430-0000-0000-000000000011', 'Classification of Elements and Periodicity in Properties', 3, true),
('65d29b56-0430-1100-0000-000000000004', '65d29b56-0430-0000-0000-000000000011', 'Chemical Bonding and Molecular Structure', 4, true),
('65d29b56-0430-1100-0000-000000000005', '65d29b56-0430-0000-0000-000000000011', 'Thermodynamics', 5, true),
('65d29b56-0430-1100-0000-000000000006', '65d29b56-0430-0000-0000-000000000011', 'Equilibrium', 6, true),
('65d29b56-0430-1100-0000-000000000007', '65d29b56-0430-0000-0000-000000000011', 'Redox Reactions', 7, true),
('65d29b56-0430-1100-0000-000000000008', '65d29b56-0430-0000-0000-000000000011', 'Organic Chemistry – Some Basic Principles and Techniques', 8, true),
('65d29b56-0430-1100-0000-000000000009', '65d29b56-0430-0000-0000-000000000011', 'Hydrocarbons', 9, true),
('65d29b56-0430-1100-0000-000000000010', '65d29b56-0430-0000-0000-000000000011', 's-Block and p-Block Elements (Formative & Bridge Module)', 10, true),
('65d29b56-0430-1100-0000-000000000011', '65d29b56-0430-0000-0000-000000000011', 'The Gaseous State: States of Matter (Formative & Bridge Module)', 11, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Master Topics for Class 11 Chemistry (62 Topics across 11 Chapters)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
-- Chapter 1: Some Basic Concepts of Chemistry (5 Topics)
('65d29b56-0430-2101-0000-000000000001', '65d29b56-0430-1100-0000-000000000001', 'Importance of Chemistry, Nature of Matter, Properties & Measurement (SI Units, Uncertainty & Significant Figures)', 1, true),
('65d29b56-0430-2101-0000-000000000002', '65d29b56-0430-1100-0000-000000000001', 'Laws of Chemical Combination & Dalton''s Atomic Theory', 2, true),
('65d29b56-0430-2101-0000-000000000003', '65d29b56-0430-1100-0000-000000000001', 'Atomic, Isotopic and Molecular Masses, Mole Concept, Molar Mass & Percentage Composition', 3, true),
('65d29b56-0430-2101-0000-000000000004', '65d29b56-0430-1100-0000-000000000001', 'Empirical and Molecular Formulas, Stoichiometry, Stoichiometric Calculations & Limiting Reagent', 4, true),
('65d29b56-0430-2101-0000-000000000005', '65d29b56-0430-1100-0000-000000000001', 'Concentration of Solutions: Mass Percent, Mole Fraction, Molarity (M) and Molality (m)', 5, true),

-- Chapter 2: Structure of Atom (6 Topics)
('65d29b56-0430-2102-0000-000000000001', '65d29b56-0430-1100-0000-000000000002', 'Discovery of Sub-atomic Particles (Cathode & Anode Rays) and Early Atomic Models (Thomson & Rutherford)', 1, true),
('65d29b56-0430-2102-0000-000000000002', '65d29b56-0430-1100-0000-000000000002', 'Developments Leading to Bohr''s Model: Dual Nature of EM Radiation, Planck''s Quantum Theory & Photoelectric Effect', 2, true),
('65d29b56-0430-2102-0000-000000000003', '65d29b56-0430-1100-0000-000000000003', 'Line Spectrum of Hydrogen, Bohr''s Model for Hydrogen Atom, Energy Levels, Spectral Series & Limitations', 3, true),
('65d29b56-0430-2102-0000-000000000004', '65d29b56-0430-1100-0000-000000000002', 'Dual Nature of Matter (de Broglie Relation) and Heisenberg''s Uncertainty Principle', 4, true),
('65d29b56-0430-2102-0000-000000000005', '65d29b56-0430-1100-0000-000000000002', 'Quantum Mechanical Model of Atom: Wave Functions, Quantum Numbers (n, l, m, s) & Shapes of s, p, d Orbitals', 5, true),
('65d29b56-0430-2102-0000-000000000006', '65d29b56-0430-1100-0000-000000000002', 'Rules for Filling Electrons in Orbitals: Aufbau Principle, Pauli''s Exclusion Principle, Hund''s Rule & Electronic Configurations', 6, true),

-- Chapter 3: Classification of Elements and Periodicity in Properties (5 Topics)
('65d29b56-0430-2103-0000-000000000001', '65d29b56-0430-1100-0000-000000000003', 'Genesis of Periodic Classification (Dobereiner, Newlands, Mendeleev) & Modern Periodic Law', 1, true),
('65d29b56-0430-2103-0000-000000000002', '65d29b56-0430-1100-0000-000000000003', 'Modern Periodic Table Structure, Periods, Groups & IUPAC Nomenclature of Elements with Z > 100', 2, true),
('65d29b56-0430-2103-0000-000000000003', '65d29b56-0430-1100-0000-000000000003', 'Electronic Configurations and Divisions of Elements: s-, p-, d-, and f-Block Elements', 3, true),
('65d29b56-0430-2103-0000-000000000004', '65d29b56-0430-1100-0000-000000000003', 'Periodic Trends in Physical Properties: Atomic Radii, Ionic Radii, Ionization Enthalpy & Electron Gain Enthalpy', 4, true),
('65d29b56-0430-2103-0000-000000000005', '65d29b56-0430-1100-0000-000000000003', 'Periodic Trends in Chemical Properties: Electronegativity, Valency, Anomalous Behavior of Second Period & Diagonal Relationships', 5, true),

-- Chapter 4: Chemical Bonding and Molecular Structure (6 Topics)
('65d29b56-0430-2104-0000-000000000001', '65d29b56-0430-1100-0000-000000000004', 'Kossel-Lewis Approach, Octet Rule, Lewis Structures, Ionic/Electrovalent Bond & Lattice Enthalpy', 1, true),
('65d29b56-0430-2104-0000-000000000002', '65d29b56-0430-1100-0000-000000000004', 'Covalent Bond Parameters: Bond Length, Angle, Enthalpy, Order, Resonance & Polarity of Bonds (Dipole Moment & Fajan''s Rules)', 2, true),
('65d29b56-0430-2104-0000-000000000003', '65d29b56-0430-1100-0000-000000000004', 'Valence Shell Electron Pair Repulsion (VSEPR) Theory and Molecular Geometry', 3, true),
('65d29b56-0430-2104-0000-000000000004', '65d29b56-0430-1100-0000-000000000004', 'Valence Bond Theory (Orbital Overlap, Sigma and Pi Bonds) & Hybridisation (sp, sp2, sp3, sp3d, sp3d2)', 4, true),
('65d29b56-0430-2104-0000-000000000005', '65d29b56-0430-1100-0000-000000000004', 'Molecular Orbital Theory (MOT): LCAO Concept, MO Energy Diagrams, Bond Order & Magnetism of Diatomics (H2 to O2)', 5, true),
('65d29b56-0430-2104-0000-000000000006', '65d29b56-0430-1100-0000-000000000004', 'Intermolecular Forces and Hydrogen Bonding (Inter vs Intra-molecular & Effect on Boiling Points)', 6, true),

-- Chapter 5: Thermodynamics (6 Topics)
('65d29b56-0430-2105-0000-000000000001', '65d29b56-0430-1100-0000-000000000005', 'Thermodynamic Systems & State Functions: System vs Surroundings, State Variables, Internal Energy (U), Heat (q) and Work (w)', 1, true),
('65d29b56-0430-2105-0000-000000000002', '65d29b56-0430-1100-0000-000000000005', 'First Law of Thermodynamics, Enthalpy (H), Heat Capacity (Cp, Cv), Cp - Cv = R & Calorimetry (dU and dH)', 2, true),
('65d29b56-0430-2105-0000-000000000003', '65d29b56-0430-1100-0000-000000000005', 'Enthalpies of Reactions: Standard Formation, Combustion, Atomization, Phase Transitions & Bond Dissociation Enthalpy', 3, true),
('65d29b56-0430-2105-0000-000000000004', '65d29b56-0430-1100-0000-000000000005', 'Hess''s Law of Constant Heat Summation & Lattice Enthalpy Calculations', 4, true),
('65d29b56-0430-2105-0000-000000000005', '65d29b56-0430-1100-0000-000000000005', 'Spontaneity, Entropy (S), Second Law of Thermodynamics & Absolute Entropy (Third Law)', 5, true),
('65d29b56-0430-2105-0000-000000000006', '65d29b56-0430-1100-0000-000000000005', 'Gibbs Free Energy (G), Gibbs-Helmholtz Equation, Criterion for Spontaneity & Relation between dG° and K', 6, true),

-- Chapter 6: Equilibrium (7 Topics)
('65d29b56-0430-2106-0000-000000000001', '65d29b56-0430-1100-0000-000000000006', 'Equilibrium in Physical Processes: Solid-Liquid, Liquid-Gas, Solid-Gas & Solutions (Henry''s Law)', 1, true),
('65d29b56-0430-2106-0000-000000000002', '65d29b56-0430-1100-0000-000000000006', 'Equilibrium in Chemical Processes: Dynamic Nature, Law of Mass Action, Kc and Kp Expressions & Kp = Kc(RT)^dn', 2, true),
('65d29b56-0430-2106-0000-000000000003', '65d29b56-0430-1100-0000-000000000006', 'Homogeneous vs Heterogeneous Equilibria, Reaction Quotient (Q) & Applications of Equilibrium Constant', 3, true),
('65d29b56-0430-2106-0000-000000000004', '65d29b56-0430-1100-0000-000000000006', 'Le Chatelier''s Principle: Effect of Concentration, Pressure, Temperature, Catalyst and Inert Gas Addition', 4, true),
('65d29b56-0430-2106-0000-000000000005', '65d29b56-0430-1100-0000-000000000006', 'Ionic Equilibrium: Arrhenius, Bronsted-Lowry & Lewis Acid-Base Concepts, Ionization of Water & pH Scale', 5, true),
('65d29b56-0430-2106-0000-000000000006', '65d29b56-0430-1100-0000-000000000006', 'Ionization of Weak Acids and Bases (Ka, Kb), Ostwald''s Dilution Law, Common Ion Effect & Buffer Solutions (Henderson Equation)', 6, true),
('65d29b56-0430-2106-0000-000000000007', '65d29b56-0430-1100-0000-000000000006', 'Hydrolysis of Salts & Solubility Equilibria of Sparingly Soluble Salts (Solubility Product Ksp & Common Ion Effect)', 7, true),

-- Chapter 7: Redox Reactions (5 Topics)
('65d29b56-0430-2107-0000-000000000001', '65d29b56-0430-1100-0000-000000000007', 'Classical and Electronic Concepts of Oxidation and Reduction, Oxidizing and Reducing Agents', 1, true),
('65d29b56-0430-2107-0000-000000000002', '65d29b56-0430-1100-0000-000000000007', 'Oxidation Number: Rules for Assignment, Fractional Oxidation States & Stock Notation', 2, true),
('65d29b56-0430-2107-0000-000000000003', '65d29b56-0430-1100-0000-000000000007', 'Types of Redox Reactions: Combination, Decomposition, Displacement & Disproportionation Reactions', 3, true),
('65d29b56-0430-2107-0000-000000000004', '65d29b56-0430-1100-0000-000000000007', 'Balancing of Redox Equations: Oxidation Number Method & Ion-Electron (Half-Reaction) Method', 4, true),
('65d29b56-0430-2107-0000-000000000005', '65d29b56-0430-1100-0000-000000000007', 'Redox Reactions and Electrode Processes: Electrochemical Cells, Standard Hydrogen Electrode & Electrochemical Series', 5, true),

-- Chapter 8: Organic Chemistry – Some Basic Principles and Techniques (8 Topics)
('65d29b56-0430-2108-0000-000000000001', '65d29b56-0430-1100-0000-000000000008', 'General Introduction, Tetravalence of Carbon, Hybridisation (sp3, sp2, sp) & Shapes of Organic Molecules', 1, true),
('65d29b56-0430-2108-0000-000000000002', '65d29b56-0430-1100-0000-000000000008', 'Structural Representations of Organic Compounds: Complete, Condensed, Bond-line & 3D Wedge-Dash Formulas', 2, true),
('65d29b56-0430-2108-0000-000000000003', '65d29b56-0430-1100-0000-000000000008', 'Classification of Organic Compounds & IUPAC Nomenclature (Aliphatic, Alicyclic & Polyfunctional Compounds)', 3, true),
('65d29b56-0430-2108-0000-000000000004', '65d29b56-0430-1100-0000-000000000008', 'Isomerism in Organic Compounds: Structural Isomerism (Chain, Position, Functional, Metamerism, Tautomerism) & Stereoisomerism Basics', 4, true),
('65d29b56-0430-2108-0000-000000000005', '65d29b56-0430-1100-0000-000000000008', 'Fundamental Concepts in Organic Reactions: Fission of Bonds (Homolytic vs Heterolytic), Reactive Intermediates (Carbocations, Carbanions, Radicals)', 5, true),
('65d29b56-0430-2108-0000-000000000006', '65d29b56-0430-1100-0000-000000000008', 'Electronic Displacements in Covalent Bonds: Inductive Effect, Electromeric Effect, Resonance / Mesomeric Effect & Hyperconjugation', 6, true),
('65d29b56-0430-2108-0000-000000000007', '65d29b56-0430-1100-0000-000000000008', 'Methods of Purification of Organic Compounds: Sublimation, Crystallization, Distillation (Simple, Fractional, Steam, Vacuum) & Chromatography', 7, true),
('65d29b56-0430-2108-0000-000000000008', '65d29b56-0430-1100-0000-000000000008', 'Qualitative Analysis (Lassaigne''s Test for N, S, Halogens) and Quantitative Analysis (C, H, N, Halogen, S, P Estimation)', 8, true),

-- Chapter 9: Hydrocarbons (6 Topics)
('65d29b56-0430-2109-0000-000000000001', '65d29b56-0430-1100-0000-000000000009', 'Classification of Hydrocarbons & Alkanes: Structure, Nomenclature, Isomerism & Conformations (Sawhorse & Newman Projections of Ethane)', 1, true),
('65d29b56-0430-2109-0000-000000000002', '65d29b56-0430-1100-0000-000000000009', 'Alkanes: Preparation Methods (Wurtz, Decarboxylation, Kolbe) & Chemical Reactions (Free Radical Halogenation, Combustion, Aromatization)', 2, true),
('65d29b56-0430-2109-0000-000000000003', '65d29b56-0430-1100-0000-000000000009', 'Alkenes: Nomenclature, Geometrical Isomerism (cis-trans), Preparation & Electrophilic Additions (Markovnikov & Anti-Markovnikov Rules, Ozonolysis)', 3, true),
('65d29b56-0430-2109-0000-000000000004', '65d29b56-0430-1100-0000-000000000009', 'Alkynes: Structure, Nomenclature, Acidity of Terminal Alkynes, Preparation & Addition Reactions (Hydration to Carbonyls & Polymerization)', 4, true),
('65d29b56-0430-2109-0000-000000000005', '65d29b56-0430-1100-0000-000000000009', 'Aromatic Hydrocarbons: Benzene Structure, Huckel''s Rule of Aromaticity & Electrophilic Substitution Reactions (Nitration, Halogenation, Friedel-Crafts)', 5, true),
('65d29b56-0430-2109-0000-000000000006', '65d29b56-0430-1100-0000-000000000009', 'Directive Influence of Functional Groups in Monosubstituted Benzene (o/p vs m-Directors) & Carcinogenicity and Toxicity of Polynuclear Arenes', 6, true),

-- Chapter 10: s-Block and p-Block Elements (Formative & Bridge Module) (4 Topics)
('65d29b56-0430-2110-0000-000000000001', '65d29b56-0430-1100-0000-000000000010', '[Formative Module] Group 1 (Alkali Metals): Electronic Configuration, Radii, Ionization/Hydration Enthalpies & Physical/Chemical Trends', 1, true),
('65d29b56-0430-2110-0000-000000000002', '65d29b56-0430-1100-0000-000000000010', '[Formative Module] Group 2 (Alkaline Earth Metals): General Characteristics, Diagonal Relationships (Li-Mg, Be-Al) & Anomalous Behavior', 2, true),
('65d29b56-0430-2110-0000-000000000003', '65d29b56-0430-1100-0000-000000000010', '[Formative Module] Group 13 Elements (Boron Family): Electronic Configuration, Oxidation States, Inert Pair Effect & Trends in Physical/Chemical Properties', 3, true),
('65d29b56-0430-2110-0000-000000000004', '65d29b56-0430-1100-0000-000000000010', '[Formative Module] Group 14 Elements (Carbon Family): General Trends, Catenation, Allotropes of Carbon (Diamond, Graphite, Fullerenes) & Comparative Study', 4, true),

-- Chapter 11: The Gaseous State: States of Matter (Formative & Bridge Module) (4 Topics)
('65d29b56-0430-2111-0000-000000000001', '65d29b56-0430-1100-0000-000000000011', '[Formative Module] Intermolecular Forces, Thermal Energy & Gas Laws (Boyle''s, Charles''s, Gay-Lussac''s, Avogadro''s Laws)', 1, true),
('65d29b56-0430-2111-0000-000000000002', '65d29b56-0430-1100-0000-000000000011', '[Formative Module] Ideal Gas Equation (PV = nRT), Universal Gas Constant (R) & Combined Gas Law', 2, true),
('65d29b56-0430-2111-0000-000000000003', '65d29b56-0430-1100-0000-000000000011', '[Formative Module] Dalton''s Law of Partial Pressures, Graham''s Law of Diffusion & Kinetic Molecular Theory of Gases', 3, true),
('65d29b56-0430-2111-0000-000000000004', '65d29b56-0430-1100-0000-000000000011', '[Formative Module] Deviations from Ideal Gas Behavior, Real Gases, Van der Waals Equation of State & Liquefaction of Gases', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;
