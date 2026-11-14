-- V136__seed_class11_biology_curriculum.sql
-- Class 11 Biology (Subject Code: 044) Official CBSE / Directorate of Education GNCT of Delhi 2026-27 Curriculum
-- Includes 19 Official NCERT Chapters + 1 Formative Enrichment Module & 103 Master Topics

-- 1. Insert Subject: Biology (Code 044) under Class 11 Exam Type
INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index)
VALUES ('65d29b56-0440-0000-0000-000000000011', '303d9917-55e9-4f81-8a0f-129ba4c01aef', 'Biology', '044', 2)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code, order_index = EXCLUDED.order_index;

-- 2. Insert 19 Official NCERT Chapters + 1 Formative Enrichment Module for Class 11 Biology
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
('65d29b56-0440-1100-0000-000000000001', '65d29b56-0440-0000-0000-000000000011', 'The Living World', 1, true),
('65d29b56-0440-1100-0000-000000000002', '65d29b56-0440-0000-0000-000000000011', 'Biological Classification', 2, true),
('65d29b56-0440-1100-0000-000000000003', '65d29b56-0440-0000-0000-000000000011', 'Plant Kingdom', 3, true),
('65d29b56-0440-1100-0000-000000000004', '65d29b56-0440-0000-0000-000000000011', 'Animal Kingdom', 4, true),
('65d29b56-0440-1100-0000-000000000005', '65d29b56-0440-0000-0000-000000000011', 'Morphology of Flowering Plants', 5, true),
('65d29b56-0440-1100-0000-000000000006', '65d29b56-0440-0000-0000-000000000011', 'Anatomy of Flowering Plants', 6, true),
('65d29b56-0440-1100-0000-000000000007', '65d29b56-0440-0000-0000-000000000011', 'Structural Organization in Animals', 7, true),
('65d29b56-0440-1100-0000-000000000008', '65d29b56-0440-0000-0000-000000000011', 'Cell: The Unit of Life', 8, true),
('65d29b56-0440-1100-0000-000000000009', '65d29b56-0440-0000-0000-000000000011', 'Biomolecules', 9, true),
('65d29b56-0440-1100-0000-000000000010', '65d29b56-0440-0000-0000-000000000011', 'Cell Cycle and Cell Division', 10, true),
('65d29b56-0440-1100-0000-000000000011', '65d29b56-0440-0000-0000-000000000011', 'Photosynthesis in Higher Plants', 11, true),
('65d29b56-0440-1100-0000-000000000012', '65d29b56-0440-0000-0000-000000000011', 'Respiration in Plants', 12, true),
('65d29b56-0440-1100-0000-000000000013', '65d29b56-0440-0000-0000-000000000011', 'Plant Growth and Development', 13, true),
('65d29b56-0440-1100-0000-000000000014', '65d29b56-0440-0000-0000-000000000011', 'Breathing and Exchange of Gases', 14, true),
('65d29b56-0440-1100-0000-000000000015', '65d29b56-0440-0000-0000-000000000011', 'Body Fluids and Circulation', 15, true),
('65d29b56-0440-1100-0000-000000000016', '65d29b56-0440-0000-0000-000000000011', 'Excretory Products and Their Elimination', 16, true),
('65d29b56-0440-1100-0000-000000000017', '65d29b56-0440-0000-0000-000000000011', 'Locomotion and Movement', 17, true),
('65d29b56-0440-1100-0000-000000000018', '65d29b56-0440-0000-0000-000000000011', 'Neural Control and Coordination', 18, true),
('65d29b56-0440-1100-0000-000000000019', '65d29b56-0440-0000-0000-000000000011', 'Chemical Coordination and Integration', 19, true),
('65d29b56-0440-1100-0000-000000000020', '65d29b56-0440-0000-0000-000000000011', 'Digestion and Absorption (Formative & Bridge Module)', 20, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Master Topics for Class 11 Biology (103 Topics across 20 Chapters)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
-- Chapter 1: The Living World (4 Topics)
('65d29b56-0440-2101-0000-000000000001', '65d29b56-0440-1100-0000-000000000001', 'What is Living & Biodiversity (Characteristics of Life, Biodiversity & Need for Classification)', 1, true),
('65d29b56-0440-2101-0000-000000000002', '65d29b56-0440-1100-0000-000000000001', 'Three Domains of Life, Taxonomy & Systematics', 2, true),
('65d29b56-0440-2101-0000-000000000003', '65d29b56-0440-1100-0000-000000000001', 'Concept of Species & Taxonomical Hierarchy (Kingdom, Phylum, Class, Order, Family, Genus, Species)', 3, true),
('65d29b56-0440-2101-0000-000000000004', '65d29b56-0440-1100-0000-000000000001', 'Binomial Nomenclature & Universal Rules of Botanical / Zoological Nomenclature', 4, true),

-- Chapter 2: Biological Classification (5 Topics)
('65d29b56-0440-2102-0000-000000000001', '65d29b56-0440-1100-0000-000000000002', 'Systems of Classification & Five Kingdom System Overview (Whittaker''s Criteria)', 1, true),
('65d29b56-0440-2102-0000-000000000002', '65d29b56-0440-1100-0000-000000000002', 'Kingdom Monera (Archaebacteria, Eubacteria, Cyanobacteria & Mycoplasma)', 2, true),
('65d29b56-0440-2102-0000-000000000003', '65d29b56-0440-1100-0000-000000000002', 'Kingdom Protista (Chrysophytes, Dinoflagellates, Euglenoids, Slime Moulds, Protozoans)', 3, true),
('65d29b56-0440-2102-0000-000000000004', '65d29b56-0440-1100-0000-000000000002', 'Kingdom Fungi (Phycomycetes, Ascomycetes, Basidiomycetes, Deuteromycetes)', 4, true),
('65d29b56-0440-2102-0000-000000000005', '65d29b56-0440-1100-0000-000000000002', 'Acellular Entities: Viruses, Viroids, Prions & Lichens', 5, true),

-- Chapter 3: Plant Kingdom (5 Topics)
('65d29b56-0440-2103-0000-000000000001', '65d29b56-0440-1100-0000-000000000003', 'Classification of Plants & Algae (Chlorophyceae, Phaeophyceae, Rhodophyceae)', 1, true),
('65d29b56-0440-2103-0000-000000000002', '65d29b56-0440-1100-0000-000000000003', 'Bryophytes: Amphibians of Plant Kingdom (Liverworts & Mosses)', 2, true),
('65d29b56-0440-2103-0000-000000000003', '65d29b56-0440-1100-0000-000000000003', 'Pteridophytes: Vascular Cryptogams (Homospory, Heterospory, Lycopsida, Sphenopsida, Pteropsida)', 3, true),
('65d29b56-0440-2103-0000-000000000004', '65d29b56-0440-1100-0000-000000000003', 'Gymnosperms: Naked-seeded Plants, Conifers & Life Cycle', 4, true),
('65d29b56-0440-2103-0000-000000000005', '65d29b56-0440-1100-0000-000000000003', 'Angiosperms: Overview, Monocots vs Dicots & Plant Life Cycles (Alternation of Generations)', 5, true),

-- Chapter 4: Animal Kingdom (6 Topics)
('65d29b56-0440-2104-0000-000000000001', '65d29b56-0440-1100-0000-000000000004', 'Basis of Classification (Levels of Organization, Symmetry, Germ Layers, Coelom, Segmentation, Notochord)', 1, true),
('65d29b56-0440-2104-0000-000000000002', '65d29b56-0440-1100-0000-000000000004', 'Non-Chordates I: Porifera, Coelenterata (Cnidaria), Ctenophora', 2, true),
('65d29b56-0440-2104-0000-000000000003', '65d29b56-0440-1100-0000-000000000004', 'Non-Chordates II: Platyhelminthes, Aschelminthes, Annelida', 3, true),
('65d29b56-0440-2104-0000-000000000004', '65d29b56-0440-1100-0000-000000000004', 'Non-Chordates III: Arthropoda, Mollusca, Echinodermata, Hemichordata', 4, true),
('65d29b56-0440-2104-0000-000000000005', '65d29b56-0440-1100-0000-000000000004', 'Phylum Chordata: Urochordata, Cephalochordata, Vertebrata (Agnatha & Gnathostomata - Chondrichthyes, Osteichthyes)', 5, true),
('65d29b56-0440-2104-0000-000000000006', '65d29b56-0440-1100-0000-000000000004', 'Superclass Tetrapoda: Amphibia, Reptilia, Aves, Mammalia', 6, true),

-- Chapter 5: Morphology of Flowering Plants (6 Topics)
('65d29b56-0440-2105-0000-000000000001', '65d29b56-0440-1100-0000-000000000005', 'Morphology of Root: Types (Tap, Adventitious), Regions & Modifications', 1, true),
('65d29b56-0440-2105-0000-000000000002', '65d29b56-0440-1100-0000-000000000005', 'Morphology of Stem: Characteristics, Nodes, Internodes & Modifications', 2, true),
('65d29b56-0440-2105-0000-000000000003', '65d29b56-0440-1100-0000-000000000005', 'Morphology of Leaf: Parts, Venation, Simple vs Compound Leaves, Phyllotaxy & Modifications', 3, true),
('65d29b56-0440-2105-0000-000000000004', '65d29b56-0440-1100-0000-000000000005', 'Inflorescence (Racemose & Cymose) & Flower Structure (Calyx, Corolla, Aestivation)', 4, true),
('65d29b56-0440-2105-0000-000000000005', '65d29b56-0440-1100-0000-000000000005', 'Androecium, Gynoecium, Placentation, Fruit and Seed Structure', 5, true),
('65d29b56-0440-2105-0000-000000000006', '65d29b56-0440-1100-0000-000000000005', 'Semi-Technical Description of Family Solanaceae (Floral Formula & Floral Diagram)', 6, true),

-- Chapter 6: Anatomy of Flowering Plants (5 Topics)
('65d29b56-0440-2106-0000-000000000001', '65d29b56-0440-1100-0000-000000000006', 'Plant Tissues: Meristematic Tissues (Apical, Intercalary, Lateral)', 1, true),
('65d29b56-0440-2106-0000-000000000002', '65d29b56-0440-1100-0000-000000000006', 'Permanent Tissues: Simple (Parenchyma, Collenchyma, Sclerenchyma) & Complex (Xylem & Phloem)', 2, true),
('65d29b56-0440-2106-0000-000000000003', '65d29b56-0440-1100-0000-000000000006', 'Tissue Systems: Epidermal Tissue System, Ground Tissue System, Vascular Tissue System', 3, true),
('65d29b56-0440-2106-0000-000000000004', '65d29b56-0440-1100-0000-000000000006', 'Anatomy of Dicotyledonous and Monocotyledonous Roots and Stems', 4, true),
('65d29b56-0440-2106-0000-000000000005', '65d29b56-0440-1100-0000-000000000006', 'Anatomy of Dorsiventral (Dicot) and Isobilateral (Monocot) Leaves', 5, true),

-- Chapter 7: Structural Organization in Animals (5 Topics)
('65d29b56-0440-2107-0000-000000000001', '65d29b56-0440-1100-0000-000000000007', 'Animal Tissues Overview (Epithelial, Connective, Muscular, Neural)', 1, true),
('65d29b56-0440-2107-0000-000000000002', '65d29b56-0440-1100-0000-000000000007', 'Morphology of Frog (Rana tigrina): External Features, Body Divisions & Skin', 2, true),
('65d29b56-0440-2107-0000-000000000003', '65d29b56-0440-1100-0000-000000000007', 'Frog Anatomy: Digestive System and Respiratory System', 3, true),
('65d29b56-0440-2107-0000-000000000004', '65d29b56-0440-1100-0000-000000000007', 'Frog Anatomy: Circulatory (Blood Vascular & Lymphatic) System', 4, true),
('65d29b56-0440-2107-0000-000000000005', '65d29b56-0440-1100-0000-000000000007', 'Frog Anatomy: Excretory, Nervous & Male/Female Reproductive Systems', 5, true),

-- Chapter 8: Cell: The Unit of Life (7 Topics)
('65d29b56-0440-2108-0000-000000000001', '65d29b56-0440-1100-0000-000000000008', 'Cell Theory & Basic Architecture of Prokaryotic vs Eukaryotic Cells', 1, true),
('65d29b56-0440-2108-0000-000000000002', '65d29b56-0440-1100-0000-000000000008', 'Prokaryotic Cell: Cell Envelope, Mesosomes, Flagella, Pili & Plasmids', 2, true),
('65d29b56-0440-2108-0000-000000000003', '65d29b56-0440-1100-0000-000000000008', 'Cell Membrane (Fluid Mosaic Model) and Cell Wall', 3, true),
('65d29b56-0440-2108-0000-000000000004', '65d29b56-0440-1100-0000-000000000008', 'Endomembrane System: Endoplasmic Reticulum (RER, SER), Golgi Apparatus, Lysosomes, Vacuoles', 4, true),
('65d29b56-0440-2108-0000-000000000005', '65d29b56-0440-1100-0000-000000000008', 'Semiautonomous Organelles: Mitochondria & Plastids (Chloroplasts, Chromoplasts, Leucoplasts)', 5, true),
('65d29b56-0440-2108-0000-000000000006', '65d29b56-0440-1100-0000-000000000008', 'Ribosomes, Cytoskeleton, Cilia, Flagella, Centrosome & Microbodies', 6, true),
('65d29b56-0440-2108-0000-000000000007', '65d29b56-0440-1100-0000-000000000008', 'Nucleus: Nuclear Envelope, Nucleoplasm, Chromatin, Nucleolus & Chromosome Types', 7, true),

-- Chapter 9: Biomolecules (6 Topics)
('65d29b56-0440-2109-0000-000000000001', '65d29b56-0440-1100-0000-000000000009', 'Chemical Analysis of Living Tissues & Cellular Pool of Biomolecules', 1, true),
('65d29b56-0440-2109-0000-000000000002', '65d29b56-0440-1100-0000-000000000009', 'Carbohydrates: Monosaccharides, Disaccharides & Polysaccharides (Starch, Glycogen, Cellulose)', 2, true),
('65d29b56-0440-2109-0000-000000000003', '65d29b56-0440-1100-0000-000000000009', 'Lipids: Fatty Acids, Glycerol, Triglycerides, Phospholipids & Sterols', 3, true),
('65d29b56-0440-2109-0000-000000000004', '65d29b56-0440-1100-0000-000000000009', 'Amino Acids & Protein Structures (Primary, Secondary, Tertiary, Quaternary)', 4, true),
('65d29b56-0440-2109-0000-000000000005', '65d29b56-0440-1100-0000-000000000009', 'Nucleic Acids: Structure of Nucleotides, DNA Double Helix & RNA', 5, true),
('65d29b56-0440-2109-0000-000000000006', '65d29b56-0440-1100-0000-000000000009', 'Enzymes: Chemical Nature, Classification, Factors Affecting Activity & Mechanism of Action', 6, true),

-- Chapter 10: Cell Cycle and Cell Division (5 Topics)
('65d29b56-0440-2110-0000-000000000001', '65d29b56-0440-1100-0000-000000000010', 'Cell Cycle Overview & Interphase (G1, S, G2 and G0 Quiescent Stage)', 1, true),
('65d29b56-0440-2110-0000-000000000002', '65d29b56-0440-1100-0000-000000000010', 'M Phase: Mitosis (Prophase, Metaphase, Anaphase, Telophase)', 2, true),
('65d29b56-0440-2110-0000-000000000010', '65d29b56-0440-1100-0000-000000000010', 'Cytokinesis in Plant vs Animal Cells & Significance of Mitosis', 3, true),
('65d29b56-0440-2110-0000-000000000004', '65d29b56-0440-1100-0000-000000000010', 'Meiosis I: Prophase I Stages (Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis) & Segregation', 4, true),
('65d29b56-0440-2110-0000-000000000005', '65d29b56-0440-1100-0000-000000000010', 'Meiosis II, Cytokinesis & Significance of Meiosis (Genetic Recombination)', 5, true),

-- Chapter 11: Photosynthesis in Higher Plants (6 Topics)
('65d29b56-0440-2111-0000-000000000001', '65d29b56-0440-1100-0000-000000000011', 'Early Historical Experiments & Chloroplast Structure as Photosynthetic Site', 1, true),
('65d29b56-0440-2111-0000-000000000002', '65d29b56-0440-1100-0000-000000000011', 'Photosynthetic Pigments, Absorption Spectrum vs Action Spectrum', 2, true),
('65d29b56-0440-2111-0000-000000000003', '65d29b56-0440-1100-0000-000000000011', 'Photochemical Phase (Light Reaction): PS I, PS II & Cyclic / Non-Cyclic Photophosphorylation (Z-Scheme)', 3, true),
('65d29b56-0440-2111-0000-000000000004', '65d29b56-0440-1100-0000-000000000011', 'Chemiosmotic Hypothesis of ATP Synthesis across Thylakoid Membrane', 4, true),
('65d29b56-0440-2111-0000-000000000005', '65d29b56-0440-1100-0000-000000000011', 'Biosynthetic Phase (Dark Reaction): Calvin Cycle (C3) & Hatch-Slack Pathway (C4)', 5, true),
('65d29b56-0440-2111-0000-000000000006', '65d29b56-0440-1100-0000-000000000011', 'Photorespiration (C2 Cycle) & Factors Affecting Photosynthesis (Blackman''s Law of Limiting Factors)', 6, true),

-- Chapter 12: Respiration in Plants (6 Topics)
('65d29b56-0440-2112-0000-000000000001', '65d29b56-0440-1100-0000-000000000012', 'Cellular Respiration & Gas Exchange in Plants', 1, true),
('65d29b56-0440-2112-0000-000000000002', '65d29b56-0440-1100-0000-000000000012', 'Glycolysis (EMP Pathway): Steps, Substrate Phosphorylation & Energetics', 2, true),
('65d29b56-0440-2112-0000-000000000003', '65d29b56-0440-1100-0000-000000000012', 'Anaerobic Respiration: Fermentation (Alcoholic & Lactic Acid)', 3, true),
('65d29b56-0440-2112-0000-000000000004', '65d29b56-0440-1100-0000-000000000012', 'Aerobic Respiration: Link Reaction (Oxidative Decarboxylation) & Krebs Cycle (TCA Cycle)', 4, true),
('65d29b56-0440-2112-0000-000000000005', '65d29b56-0440-1100-0000-000000000012', 'Electron Transport System (ETS) & Oxidative Phosphorylation (Complexes I-V)', 5, true),
('65d29b56-0440-2112-0000-000000000006', '65d29b56-0440-1100-0000-000000000012', 'Respiratory Balance Sheet, Amphibolic Nature of Respiration & Respiratory Quotient (RQ)', 6, true),

-- Chapter 13: Plant Growth and Development (5 Topics)
('65d29b56-0440-2113-0000-000000000001', '65d29b56-0440-1100-0000-000000000013', 'Plant Growth: Characteristics, Phases of Growth & Arithmetic vs Geometric Growth Rates', 1, true),
('65d29b56-0440-2113-0000-000000000002', '65d29b56-0440-1100-0000-000000000013', 'Differentiation, Dedifferentiation, Redifferentiation & Development / Plasticity', 2, true),
('65d29b56-0440-2113-0000-000000000003', '65d29b56-0440-1100-0000-000000000013', 'Plant Growth Promoters: Auxins, Gibberellins and Cytokinins (Physiological Roles & Applications)', 3, true),
('65d29b56-0440-2113-0000-000000000004', '65d29b56-0440-1100-0000-000000000013', 'Plant Growth Inhibitors: Ethylene and Abscisic Acid (ABA)', 4, true),
('65d29b56-0440-2113-0000-000000000005', '65d29b56-0440-1100-0000-000000000013', 'Seed Germination, Dormancy & Conditions Necessary for Plant Growth', 5, true),

-- Chapter 14: Breathing and Exchange of Gases (5 Topics)
('65d29b56-0440-2114-0000-000000000001', '65d29b56-0440-1100-0000-000000000014', 'Respiratory Organs Across Animals & Human Respiratory System Anatomy', 1, true),
('65d29b56-0440-2114-0000-000000000002', '65d29b56-0440-1100-0000-000000000014', 'Mechanism of Breathing (Inspiration, Expiration) & Respiratory Volumes and Capacities', 2, true),
('65d29b56-0440-2114-0000-000000000003', '65d29b56-0440-1100-0000-000000000014', 'Exchange of Gases (Alveolar & Tissue Level Partial Pressures)', 3, true),
('65d29b56-0440-2114-0000-000000000004', '65d29b56-0440-1100-0000-000000000014', 'Transport of Gases: Oxygen Transport (Oxyhemoglobin Dissociation Curve) & Carbon Dioxide Transport', 4, true),
('65d29b56-0440-2114-0000-000000000005', '65d29b56-0440-1100-0000-000000000014', 'Regulation of Respiration & Respiratory Disorders (Asthma, Emphysema, Occupational Respiratory Disorders)', 5, true),

-- Chapter 15: Body Fluids and Circulation (6 Topics)
('65d29b56-0440-2115-0000-000000000001', '65d29b56-0440-1100-0000-000000000015', 'Composition of Blood: Plasma & Formed Elements (RBCs, WBCs, Platelets)', 1, true),
('65d29b56-0440-2115-0000-000000000002', '65d29b56-0440-1100-0000-000000000015', 'Blood Groups (ABO & Rh Systems), Erythroblastosis Fetalis & Coagulation of Blood', 2, true),
('65d29b56-0440-2115-0000-000000000003', '65d29b56-0440-1100-0000-000000000015', 'Lymph (Tissue Fluid) & Human Circulatory System Anatomy (Heart Chambers & Valves)', 3, true),
('65d29b56-0440-2115-0000-000000000004', '65d29b56-0440-1100-0000-000000000015', 'Cardiac Cycle, Heart Sounds, Cardiac Output & Electrocardiogram (ECG)', 4, true),
('65d29b56-0440-2115-0000-000000000005', '65d29b56-0440-1100-0000-000000000015', 'Double Circulation: Pulmonary and Systemic Pathways & Hepatic Portal System', 5, true),
('65d29b56-0440-2115-0000-000000000006', '65d29b56-0440-1100-0000-000000000015', 'Regulation of Cardiac Activity & Disorders of Circulatory System (Hypertension, CAD, Angina, Heart Failure)', 6, true),

-- Chapter 16: Excretory Products and Their Elimination (6 Topics)
('65d29b56-0440-2116-0000-000000000001', '65d29b56-0440-1100-0000-000000000016', 'Modes of Excretion (Ammonotelism, Ureotelism, Uricotelism) & Excretory Organs in Animalia', 1, true),
('65d29b56-0440-2116-0000-000000000002', '65d29b56-0440-1100-0000-000000000016', 'Human Excretory System: Gross Kidney Anatomy & Structure of Nephron', 2, true),
('65d29b56-0440-2116-0000-000000000003', '65d29b56-0440-1100-0000-000000000016', 'Mechanism of Urine Formation: Glomerular Filtration, Tubular Reabsorption & Secretion', 3, true),
('65d29b56-0440-2116-0000-000000000004', '65d29b56-0440-1100-0000-000000000016', 'Function of Tubules, Osmoregulation & Counter-Current Mechanism (Henle''s Loop & Vasa Recta)', 4, true),
('65d29b56-0440-2116-0000-000000000005', '65d29b56-0440-1100-0000-000000000016', 'Regulation of Kidney Function: Juxtaglomerular Apparatus (RAAS), ADH (Vasopressin) & ANF', 5, true),
('65d29b56-0440-2116-0000-000000000006', '65d29b56-0440-1100-0000-000000000016', 'Role of Other Organs in Excretion, Disorders (Uremia, Renal Failure, Calculi, Nephritis) & Dialysis / Transplant', 6, true),

-- Chapter 17: Locomotion and Movement (5 Topics)
('65d29b56-0440-2117-0000-000000000001', '65d29b56-0440-1100-0000-000000000017', 'Types of Movement (Amoeboid, Ciliary, Muscular) & Muscle Types', 1, true),
('65d29b56-0440-2117-0000-000000000002', '65d29b56-0440-1100-0000-000000000017', 'Microscopic Anatomy of Skeletal Muscle, Sarcomere & Contractile Proteins (Actin & Myosin)', 2, true),
('65d29b56-0440-2117-0000-000000000003', '65d29b56-0440-1100-0000-000000000017', 'Mechanism of Muscle Contraction (Sliding Filament Theory & Cross-bridge Cycling)', 3, true),
('65d29b56-0440-2117-0000-000000000004', '65d29b56-0440-1100-0000-000000000017', 'Human Skeletal System: Axial Skeleton (Skull, Vertebral Column, Ribs, Sternum) & Appendicular Skeleton (Limbs, Girdles)', 4, true),
('65d29b56-0440-2117-0000-000000000005', '65d29b56-0440-1100-0000-000000000017', 'Joints (Fibrous, Cartilaginous, Synovial) & Disorders (Myasthenia Gravis, Tetany, Muscular Dystrophy, Arthritis, Osteoporosis, Gout)', 5, true),

-- Chapter 18: Neural Control and Coordination (5 Topics)
('65d29b56-0440-2118-0000-000000000001', '65d29b56-0440-1100-0000-000000000018', 'Neural System Overview & Structure of Neuron (Myelinated vs Non-myelinated)', 1, true),
('65d29b56-0440-2118-0000-000000000002', '65d29b56-0440-1100-0000-000000000018', 'Generation, Conduction and Synaptic Transmission of Nerve Impulse (Resting & Action Potential)', 2, true),
('65d29b56-0440-2118-0000-000000000003', '65d29b56-0440-1100-0000-000000000018', 'Central Nervous System: Forebrain (Cerebrum, Thalamus, Hypothalamus), Midbrain & Hindbrain (Cerebellum, Pons, Medulla)', 3, true),
('65d29b56-0440-2118-0000-000000000004', '65d29b56-0440-1100-0000-000000000018', 'Spinal Cord Anatomy & Reflex Action / Reflex Arc', 4, true),
('65d29b56-0440-2118-0000-000000000005', '65d29b56-0440-1100-0000-000000000018', 'Peripheral Nervous System (Somatic & Autonomic - Sympathetic and Parasympathetic)', 5, true),

-- Chapter 19: Chemical Coordination and Integration (6 Topics)
('65d29b56-0440-2119-0000-000000000001', '65d29b56-0440-1100-0000-000000000019', 'Endocrine Glands, Hormones as Chemical Messengers & Mechanism of Hormone Action', 1, true),
('65d29b56-0440-2119-0000-000000000002', '65d29b56-0440-1100-0000-000000000019', 'The Hypothalamus and Pituitary Gland (Anterior and Posterior Pituitary Hormones)', 2, true),
('65d29b56-0440-2119-0000-000000000003', '65d29b56-0440-1100-0000-000000000019', 'Pineal Gland, Thyroid Gland and Parathyroid Glands (Thyroxine, Calcitonin, PTH)', 3, true),
('65d29b56-0440-2119-0000-000000000004', '65d29b56-0440-1100-0000-000000000019', 'Thymus, Adrenal Gland (Cortex and Medulla) & Endocrine Pancreas (Islets of Langerhans)', 4, true),
('65d29b56-0440-2119-0000-000000000005', '65d29b56-0440-1100-0000-000000000019', 'Gonadal Hormones (Testes - Androgens, Ovaries - Estrogen & Progesterone) & Non-Endocrine Organ Hormones (Heart, Kidney, GI tract)', 5, true),
('65d29b56-0440-2119-0000-000000000006', '65d29b56-0440-1100-0000-000000000019', 'Endocrine Disorders: Dwarfism, Acromegaly, Cretinism, Goitre, Exophthalmic Goitre, Diabetes Mellitus, Addison''s Disease', 6, true),

-- Chapter 20: Digestion and Absorption (Formative & Bridge Module) (4 Topics)
('65d29b56-0440-2120-0000-000000000001', '65d29b56-0440-1100-0000-000000000020', '[Formative Module] Anatomy of Human Digestive System (Alimentary Canal Histology & Digestive Glands)', 1, true),
('65d29b56-0440-2120-0000-000000000002', '65d29b56-0440-1100-0000-000000000020', '[Formative Module] Digestion of Food: Enzymes, Gastrointestinal Hormones & Peristalsis', 2, true),
('65d29b56-0440-2120-0000-000000000003', '65d29b56-0440-1100-0000-000000000020', '[Formative Module] Absorption, Assimilation, Egestion & Calorific Values of Nutrients', 3, true),
('65d29b56-0440-2120-0000-000000000004', '65d29b56-0440-1100-0000-000000000020', '[Formative Module] Nutritional & Digestive Disorders (PEM - Kwashiorkor & Marasmus, Jaundice, Indigestion, Constipation, Vomiting, Diarrhea)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;
