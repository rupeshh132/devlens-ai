-- V487__seed_neet_ug_curriculum_lectures_notes.sql
-- Seeds NEET UG (NMC UGMEB 79-Chapter Synchronized 2026 Syllabus)
-- 4 Official Subjects: Botany, Zoology, Chemistry, Physics
-- Excludes deleted NMC chapters (Digestion & Absorption, Transport in Plants, Mineral Nutrition,
-- Reproduction in Organisms, Strategies for Food Enhancement, Environmental Issues, Solid State, s-Block, etc.).
-- Seeds verified PW NEET / Competition Wallah & NCERT Wallah VIDEO lectures + Chapter Master Notes PDFs.

DO $$
DECLARE
    v_neet_id UUID;
    v_bot_sub UUID := '65d29b56-2010-0100-0000-000000000001';
    v_zoo_sub UUID := '65d29b56-2010-0200-0000-000000000002';
    v_chem_sub UUID := '65d29b56-2010-0300-0000-000000000003';
    v_phy_sub UUID := '65d29b56-2010-0400-0000-000000000004';
BEGIN
    SELECT id INTO v_neet_id FROM learn_exam_types WHERE slug = 'neet-ug' LIMIT 1;
    IF v_neet_id IS NULL THEN
        INSERT INTO learn_exam_types (name, slug, full_name, category, sub_category, conducting_body, required_plan, is_active, display_order)
        VALUES ('NEET UG', 'neet-ug', 'National Eligibility cum Entrance Test - Undergraduate', 'MEDICAL', 'MEDICAL', 'NTA / NMC', 'MEDICAL', true, 30)
        RETURNING id INTO v_neet_id;
    END IF;

    -- Clean idempotent reload for NEET UG DB hierarchy
    DELETE FROM learn_content_items WHERE id::text LIKE '65d29b56-201%';
    DELETE FROM learn_topics WHERE id::text LIKE '65d29b56-201%';
    DELETE FROM learn_chapters WHERE id::text LIKE '65d29b56-201%';
    DELETE FROM learn_subjects WHERE id IN (v_bot_sub, v_zoo_sub, v_chem_sub, v_phy_sub);

    -- 1. Official NMC Section Subjects (45 + 45 + 45 + 45 = 180 Compulsory MCQs)
    INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active) VALUES
    (v_bot_sub,  v_neet_id, 'Botany',    'BOT',  1, true),
    (v_zoo_sub,  v_neet_id, 'Zoology',   'ZOO',  2, true),
    (v_chem_sub, v_neet_id, 'Chemistry', 'CHEM', 3, true),
    (v_phy_sub,  v_neet_id, 'Physics',   'PHY',  4, true)
    ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, is_active = true;

    -- 2. Chapters (7 Botany + 6 Zoology + 9 Chemistry + 15 Physics = 37 Synced Units)
    INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active) VALUES
    -- Botany (7 Core Blocks)
    ('65d29b56-2011-1001-0000-000000000001', v_bot_sub, 'Diversity in Living World: Living World, Classification & Plant Kingdom', 1, true),
    ('65d29b56-2011-1002-0000-000000000002', v_bot_sub, 'Morphology & Anatomy of Flowering Plants (Updated Plant Families)', 2, true),
    ('65d29b56-2011-1003-0000-000000000003', v_bot_sub, 'Cell: The Unit of Life & Cell Cycle and Cell Division', 3, true),
    ('65d29b56-2011-1004-0000-000000000004', v_bot_sub, 'Plant Physiology (Photosynthesis, Respiration & PGR)', 4, true),
    ('65d29b56-2011-1005-0000-000000000005', v_bot_sub, 'Sexual Reproduction in Flowering Plants', 5, true),
    ('65d29b56-2011-1006-0000-000000000006', v_bot_sub, 'Genetics & Molecular Basis of Inheritance', 6, true),
    ('65d29b56-2011-1007-0000-000000000007', v_bot_sub, 'Ecology: Organisms, Populations, Ecosystem & Biodiversity', 7, true),

    -- Zoology (6 Core Blocks — Digestion & Absorption Removed; Frog & Cockroach Retained)
    ('65d29b56-2012-1001-0000-000000000001', v_zoo_sub, 'Animal Kingdom & Structural Organisation (Cockroach + Frog Retained)', 1, true),
    ('65d29b56-2012-1002-0000-000000000002', v_zoo_sub, 'Biomolecules & Enzymes', 2, true),
    ('65d29b56-2012-1003-0000-000000000003', v_zoo_sub, 'Human Physiology I: Breathing & Body Fluids (Circulation)', 3, true),
    ('65d29b56-2012-1004-0000-000000000004', v_zoo_sub, 'Human Physiology II: Excretion, Locomotion, Neural & Endocrine', 4, true),
    ('65d29b56-2012-1005-0000-000000000005', v_zoo_sub, 'Human Reproduction, Reproductive Health & Evolution', 5, true),
    ('65d29b56-2012-1006-0000-000000000006', v_zoo_sub, 'Human Health, Microbes & Biotechnology Applications', 6, true),

    -- Chemistry (9 Rationalized NMC Blocks)
    ('65d29b56-2013-1001-0000-000000000001', v_chem_sub, 'Mole Concept, Stoichiometry & Atomic Structure', 1, true),
    ('65d29b56-2013-1002-0000-000000000002', v_chem_sub, 'Chemical Bonding, MOT & Periodic Trends', 2, true),
    ('65d29b56-2013-1003-0000-000000000003', v_chem_sub, 'Chemical Thermodynamics & Solutions', 3, true),
    ('65d29b56-2013-1004-0000-000000000004', v_chem_sub, 'Chemical Equilibrium, Ionic Equilibrium & Redox', 4, true),
    ('65d29b56-2013-1005-0000-000000000005', v_chem_sub, 'Electrochemistry & Chemical Kinetics', 5, true),
    ('65d29b56-2013-1006-0000-000000000006', v_chem_sub, 'Inorganic Chemistry: p-Block, d-f Block & Coordination', 6, true),
    ('65d29b56-2013-1007-0000-000000000007', v_chem_sub, 'GOC, Isomerism & Hydrocarbons', 7, true),
    ('65d29b56-2013-1008-0000-000000000008', v_chem_sub, 'Functional Organic (Haloalkanes, Alcohols, Carbonyls & Amines)', 8, true),
    ('65d29b56-2013-1009-0000-000000000009', v_chem_sub, 'Biomolecules & Principles of Practical Chemistry', 9, true),

    -- Physics (15 Rationalized NMC Units incl. Unit 20 Experimental Skills)
    ('65d29b56-2014-1001-0000-000000000001', v_phy_sub, 'Units, Measurements & Experimental Skills (Unit 20)', 1, true),
    ('65d29b56-2014-1002-0000-000000000002', v_phy_sub, 'Kinematics (1D & Projectile Motion)', 2, true),
    ('65d29b56-2014-1003-0000-000000000003', v_phy_sub, 'Laws of Motion, Friction & Circular Motion', 3, true),
    ('65d29b56-2014-1004-0000-000000000004', v_phy_sub, 'Work, Energy, Power & Collisions', 4, true),
    ('65d29b56-2014-1005-0000-000000000005', v_phy_sub, 'Rotational Motion & Moment of Inertia', 5, true),
    ('65d29b56-2014-1006-0000-000000000006', v_phy_sub, 'Gravitation & Planetary Satellites', 6, true),
    ('65d29b56-2014-1007-0000-000000000007', v_phy_sub, 'Solids, Fluids, Viscosity & Surface Tension', 7, true),
    ('65d29b56-2014-1008-0000-000000000008', v_phy_sub, 'Thermal Physics, Thermodynamics & KTG', 8, true),
    ('65d29b56-2014-1009-0000-000000000009', v_phy_sub, 'Oscillations (SHM) & Waves', 9, true),
    ('65d29b56-2014-1010-0000-000000000010', v_phy_sub, 'Electrostatics, Gauss Law & Capacitors', 10, true),
    ('65d29b56-2014-1011-0000-000000000011', v_phy_sub, 'Current Electricity & Electrical Bridges', 11, true),
    ('65d29b56-2014-1012-0000-000000000012', v_phy_sub, 'Moving Charges & Magnetism', 12, true),
    ('65d29b56-2014-1013-0000-000000000013', v_phy_sub, 'Electromagnetic Induction, AC & EM Waves', 13, true),
    ('65d29b56-2014-1014-0000-000000000014', v_phy_sub, 'Ray & Wave Optics (YDSE)', 14, true),
    ('65d29b56-2014-1015-0000-000000000015', v_phy_sub, 'Modern Physics (Dual Nature, Atoms, Nuclei) & Semiconductors', 15, true);

    -- 3. Subtopics (Botany 17 + Zoology 12 + Chemistry 9 + Physics 15 = 53 Focused Master Units)
    INSERT INTO learn_topics (id, chapter_id, title, description, order_index, is_active) VALUES
    -- Botany Topics (17)
    ('65d29b56-2011-2001-0000-000000000001', '65d29b56-2011-1001-0000-000000000001', 'Binomial Nomenclature, Taxonomic Hierarchy & Whittaker Five Kingdoms', 'NCERT exact taxonomic rules, defining properties & 5-kingdom classification.', 1, true),
    ('65d29b56-2011-2001-0000-000000000002', '65d29b56-2011-1001-0000-000000000001', 'Monera, Protista, Fungi & Viruses/Viroids/Lichens (NCERT Line Traps)', 'Archaebacteria, dinoflagellates, fungi spore classes & TMV/viroid discovery.', 2, true),
    ('65d29b56-2011-2001-0000-000000000003', '65d29b56-2011-1001-0000-000000000001', 'Algae, Bryophytes, Pteridophytes & Gymnosperms Life Cycles', 'Pigment & stored food tables, heterospory & diplontic/haplodiplontic examples.', 3, true),
    ('65d29b56-2011-2002-0000-000000000001', '65d29b56-2011-1002-0000-000000000002', 'Root/Stem/Leaf Modifications, Inflorescence & Aestivation/Placentation', 'Racemose vs cymose, hypogynous/epigynous & placentation diagram matching.', 1, true),
    ('65d29b56-2011-2002-0000-000000000002', '65d29b56-2011-1002-0000-000000000002', 'NMC Families: Malvaceae, Cruciferae, Leguminosae, Compositae & Gramineae', 'Floral formulas, symmetry & economic examples newly added by NMC.', 2, true),
    ('65d29b56-2011-2002-0000-000000000003', '65d29b56-2011-1002-0000-000000000002', 'Tissue Systems, Vascular Bundles & Dicot vs Monocot Anatomy', 'Conjoint/radial bundles, bulliform cells, Casparian strips & secondary growth.', 3, true),
    ('65d29b56-2011-2003-0000-000000000001', '65d29b56-2011-1003-0000-000000000003', 'Fluid Mosaic Model, Endomembrane System, Plastids & Nucleus', 'Membrane transport, GERL coordination & satellite/centromere chromosome types.', 1, true),
    ('65d29b56-2011-2003-0000-000000000002', '65d29b56-2011-1003-0000-000000000003', 'Mitosis Phases & Meiosis I Prophase-I Substages (Chiasmata)', '2C->4C DNA tracking, synaptonemal complex & recombinase crossing over.', 2, true),
    ('65d29b56-2011-2004-0000-000000000001', '65d29b56-2011-1004-0000-000000000004', 'Photosynthesis: Light Reaction, C3 vs C4 Pathway & Photorespiration', 'Chemiosmotic proton gradient, PEPcase/RuBisCO compartmentalization & ATP counts.', 1, true),
    ('65d29b56-2011-2004-0000-000000000002', '65d29b56-2011-1004-0000-000000000004', 'Cellular Respiration: Glycolysis, Krebs Cycle, ETS & RQ', 'Substrate-level phosphorylation, F0-F1 ATP synthase complexes & RQ values.', 2, true),
    ('65d29b56-2011-2004-0000-000000000003', '65d29b56-2011-1004-0000-000000000004', 'Plant Growth Regulators (Auxin, GA, Cytokinin, Ethylene, ABA)', 'Bioassays, bolting, Richmond-Lang, triple response & stomatal stress closure.', 3, true),
    ('65d29b56-2011-2005-0000-000000000001', '65d29b56-2011-1005-0000-000000000005', 'Microsporogenesis, Megasporogenesis & Double Fertilisation', 'Tapetum, 7-celled 8-nucleate embryo sac, outbreeding devices & syngamy/triple fusion.', 1, true),
    ('65d29b56-2011-2005-0000-000000000002', '65d29b56-2011-1005-0000-000000000005', 'Endosperm, Embryogeny, Apomixis & Polyembryony', 'Scutellum, perisperm examples (black pepper/beet) & citrus nucellar embryos.', 2, true),
    ('65d29b56-2011-2006-0000-000000000001', '65d29b56-2011-1006-0000-000000000006', 'Mendelian Crosses, Linkage Maps (Morgan) & Pedigree Disorders', 'Incomplete/co-dominance, pleiotropy, sickle cell & autosomal vs sex-linked pedigrees.', 1, true),
    ('65d29b56-2011-2006-0000-000000000002', '65d29b56-2011-1006-0000-000000000006', 'DNA Replication, Transcription, Genetic Code & Lac Operon', 'Meselson-Stahl, hnRNA splicing, wobble/degenerate codons & VNTR DNA fingerprinting.', 2, true),
    ('65d29b56-2011-2007-0000-000000000001', '65d29b56-2011-1007-0000-000000000007', 'Population Interactions, Exponential/Logistic Growth & Productivity', 'Verhulst-Pearl sigmoid curves, brood parasitism & Gause competitive exclusion.', 1, true),
    ('65d29b56-2011-2007-0000-000000000002', '65d29b56-2011-1007-0000-000000000007', 'Ecological Pyramids, Energy 10% Law & Biodiversity Conservation', 'Inverted aquatic biomass pyramid, species-area log slope Z & Evil Quartet.', 2, true),

    -- Zoology Topics (12)
    ('65d29b56-2012-2001-0000-000000000001', '65d29b56-2012-1001-0000-000000000001', 'Animal Phyla Classification (Porifera to Chordata Examples)', 'Water canal/vascular systems, cnidoblasts, flame cells, metameric segmentation & cyclostomes.', 1, true),
    ('65d29b56-2012-2001-0000-000000000002', '65d29b56-2012-1001-0000-000000000001', 'Animal Tissues, Cockroach (Periplaneta) & Frog (Rana tigrina)', 'Epithelial junctions, cockroach Malpighian/gizzard & frog Bidder canal + cutaneous respiration.', 2, true),
    ('65d29b56-2012-2002-0000-000000000001', '65d29b56-2012-1002-0000-000000000002', 'Biomolecules, Protein Folding & Enzyme Kinetics (Km/Vmax)', 'Zwitterions, glycosidic/peptide bonds, allosteric vs competitive inhibition (malonate/succinate).', 1, true),
    ('65d29b56-2012-2003-0000-000000000001', '65d29b56-2012-1003-0000-000000000003', 'Respiratory Volumes, Alveolar Exchange & Oxyhaemoglobin Curve', 'TV/IRV/ERV/RV capacities, Haldane/Bohr shifts & CO₂ bicarbonate transport.', 1, true),
    ('65d29b56-2012-2003-0000-000000000002', '65d29b56-2012-1003-0000-000000000003', 'ABO/Rh Clotting Cascade, Cardiac Cycle & ECG Wave Analysis', 'Thrombokinase cascade, SAN nodal impulse, lub-dub sounds & P-QRS-T clinical ECG.', 2, true),
    ('65d29b56-2012-2004-0000-000000000001', '65d29b56-2012-1004-0000-000000000004', 'Nephron Counter-Current Mechanism, RAAS, Muscle Contraction & Joints', 'Henle vasa recta osmolarity, ANF/ADH/Aldosterone, sliding filament troponin-actin & synovial joints.', 1, true),
    ('65d29b56-2012-2004-0000-000000000002', '65d29b56-2012-1004-0000-000000000004', 'Action Potential, Brain Centres & Endocrine Hormones Disorders', 'Na+/K+ pump resting potential, hypothalamus-pituitary portal axis & thyroid/adrenal syndromes.', 2, true),
    ('65d29b56-2012-2005-0000-000000000001', '65d29b56-2012-1005-0000-000000000005', 'Gametogenesis, Menstrual Hormone Peaks, Placenta & ART (IVF/ZIFT)', 'LH surge, corpus luteum hCG rescue, first polar body vs secondary oocyte & contraceptive IUDs.', 1, true),
    ('65d29b56-2012-2005-0000-000000000002', '65d29b56-2012-1005-0000-000000000005', 'Miller Experiment, Adaptive Radiation, Hardy-Weinberg & Human Evolution', 'Homologous/analogous examples, industrial melanism, p²+2pq+q²=1 & cranial capacities.', 2, true),
    ('65d29b56-2012-2006-0000-000000000001', '65d29b56-2012-1006-0000-000000000006', 'Immunity (IgA/IgG), Diseases (Malaria/AIDS/Cancer) & Microbes', 'Plasmodium life cycle, ELISA/HIV retrovirus, MALT, cyclosporin A, statins & sewage BOD.', 1, true),
    ('65d29b56-2012-2006-0000-000000000002', '65d29b56-2012-1006-0000-000000000006', 'Recombinant DNA (pBR322/PCR) & Bt Cotton / Insulin / ADA Therapy', 'EcoRI sticky ends, gel electrophoresis agarose elution, CryIAc/IIAb & ELISA molecular diagnostics.', 2, true),

    -- Chemistry (9 High-Yield Blocks)
    ('65d29b56-2013-2001-0000-000000000001', '65d29b56-2013-1001-0000-000000000001', 'Mole Concept, Molarity & Quantum Numbers / Atomic Spectra', 'Stoichiometry, Bohr radius/energy & radial node counts.', 1, true),
    ('65d29b56-2013-2002-0000-000000000001', '65d29b56-2013-1002-0000-000000000002', 'Periodic Anomalies, VSEPR Shapes & MOT Bond Order', 'Electron gain halogen order Cl>F, XeF4/SF4 geometry & O2+/NO paramagnetism.', 1, true),
    ('65d29b56-2013-2003-0000-000000000001', '65d29b56-2013-1003-0000-000000000003', 'Thermodynamics ΔG Spontaneity & Colligative Van’t Hoff Factor', 'Hess law, ΔH=ΔU+ΔnRT, azeotropes & osmotic pressure biological cells.', 1, true),
    ('65d29b56-2013-2004-0000-000000000001', '65d29b56-2013-1004-0000-000000000004', 'Kp/Kc Equilibrium, Buffers, Ksp & Redox Balancing', 'Le Chatelier shifts, acidic/basic blood buffers & common-ion precipitation.', 1, true),
    ('65d29b56-2013-2005-0000-000000000001', '65d29b56-2013-1005-0000-000000000005', 'Nernst Equation, Kohlrausch Law & 1st Order Kinetics / Arrhenius', 'Electrode potentials, Faraday laws, half-life t1/2 & catalyst activation energy.', 1, true),
    ('65d29b56-2013-2006-0000-000000000001', '65d29b56-2013-1006-0000-000000000006', 'd-f Block, Lanthanide Contraction & Coordination Isomerism/CFT', 'KMnO4 oxidizing power, spin-only magnetic moment & strong vs weak ligands.', 1, true),
    ('65d29b56-2013-2007-0000-000000000001', '65d29b56-2013-1007-0000-000000000007', 'GOC Acidity/Basicity, Optical Isomerism & Hydrocarbons Ozonolysis', 'Carbocation stability, meso chirality & Markovnikov/peroxide mechanisms.', 1, true),
    ('65d29b56-2013-2008-0000-000000000001', '65d29b56-2013-1008-0000-000000000008', 'SN1/SN2, Reimer-Tiemann, Aldol/Cannizzaro & Amines Carbylamine', 'High-yield organic named reactions & distinguishing chemical tests.', 1, true),
    ('65d29b56-2013-2009-0000-000000000001', '65d29b56-2013-1009-0000-000000000009', 'Biomolecules (Sugars, Amino Acids, Vitamins) & Practical Salt Analysis', 'Reducing sugars, protein denaturation, vitamin deficiencies & qualitative group tests.', 1, true),

    -- Physics (15 Rationalized Units)
    ('65d29b56-2014-2001-0000-000000000001', '65d29b56-2014-1001-0000-000000000001', 'SI Dimensions, Errors, Vernier Callipers & Screw Gauge (Unit 20)', 'Least count, pitch, zero error correction & percentage error exponents.', 1, true),
    ('65d29b56-2014-2002-0000-000000000001', '65d29b56-2014-1002-0000-000000000002', '1D Motion Graphs, Projectile Trajectory & Relative Rain-River', 'Kinematic equations, complementary ranges & relative velocities.', 1, true),
    ('65d29b56-2014-2003-0000-000000000001', '65d29b56-2014-1003-0000-000000000003', 'FBD Pulleys, Friction, Centripetal & Banking of Roads', 'Impulse-momentum, recoil, limiting friction & safe turning speed.', 1, true),
    ('65d29b56-2014-2004-0000-000000000001', '65d29b56-2014-1004-0000-000000000004', 'Work-Energy Theorem, Vertical Circle & Elastic Collisions', 'Spring energy conservation, power F·v & 1D collision coefficient of restitution.', 1, true),
    ('65d29b56-2014-2005-0000-000000000001', '65d29b56-2014-1005-0000-000000000005', 'Moment of Inertia, Torque, Angular Momentum & Rolling', 'Parallel/perpendicular axes, solid sphere vs ring rolling races.', 1, true),
    ('65d29b56-2014-2006-0000-000000000001', '65d29b56-2014-1006-0000-000000000006', 'Variation of g, Escape Velocity, Orbital Energy & Kepler Laws', 'g at depth/altitude, orbital time period T² ∝ r³ & gravitational potential.', 1, true),
    ('65d29b56-2014-2007-0000-000000000001', '65d29b56-2014-1007-0000-000000000007', 'Elasticity, Bernoulli Efflux, Terminal Velocity & Capillarity', 'Young modulus, soap bubble excess pressure 4T/r & Jurin capillary rise.', 1, true),
    ('65d29b56-2014-2008-0000-000000000001', '65d29b56-2014-1008-0000-000000000008', 'Thermal Conduction, KTG RMS Speed & First Law Processes', 'Stefan/Wien radiation laws, degrees of freedom & isothermal vs adiabatic slope.', 1, true),
    ('65d29b56-2014-2009-0000-000000000001', '65d29b56-2014-1009-0000-000000000009', 'SHM Energy Partition, Pendulums, Organ Pipes & Beats', 'Cut-spring time period, closed/open pipe harmonics & beat frequency.', 1, true),
    ('65d29b56-2014-2010-0000-000000000001', '65d29b56-2014-1010-0000-000000000010', 'Gauss Law Symmetry, Electric Dipole & Dielectric Capacitors', 'Axial/equatorial dipole, equipotentials & parallel plate capacitor combinations.', 1, true),
    ('65d29b56-2014-2011-0000-000000000001', '65d29b56-2014-1011-0000-000000000011', 'Drift Velocity, KVL, Wire Stretching & Meter Bridge', 'R ∝ L² tricks, bulb power ratings, Wheatstone & galvanometer shunts.', 1, true),
    ('65d29b56-2014-2012-0000-000000000001', '65d29b56-2014-1012-0000-000000000012', 'Biot-Savart Law, Ampere Law, Lorentz Radii & Dia/Para/Ferro', 'Circular arc/solenoid B, proton vs alpha particle radius & susceptibility.', 1, true),
    ('65d29b56-2014-2013-0000-000000000001', '65d29b56-2014-1013-0000-000000000013', 'Faraday/Lenz Law, LCR Resonance, Transformers & EM Spectrum', 'Motional EMF, series LCR power factor & EM wave frequency ordering.', 1, true),
    ('65d29b56-2014-2014-0000-000000000001', '65d29b56-2014-1014-0000-000000000014', 'Lens Combination, Prism Deviation, YDSE Fringes & Polarisation', 'Lens power sum, critical angle TIR, YDSE intensity ratio & Brewster angle.', 1, true),
    ('65d29b56-2014-2015-0000-000000000001', '65d29b56-2014-1015-0000-000000000015', 'Photoelectric Effect, Bohr Atom, Nuclear Density & Logic Gates', 'de Broglie electrons, constant nuclear density, Zener/p-n bias & NAND/NOR logic.', 1, true);

    -- 4. Verified Video Lectures (PW NEET / Competition Wallah / NCERT Wallah / LearnoHub Verified URLs)
    INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index) VALUES
    -- Botany Videos
    ('65d29b56-2011-3001-0000-000000000001', '65d29b56-2011-2001-0000-000000000001', 'VIDEO', 'The Living World & Taxonomic Categories (NEET One-Shot)', 'https://www.youtube.com/watch?v=FNLxE6vrWzs', true, 1),
    ('65d29b56-2011-3001-0000-000000000002', '65d29b56-2011-2001-0000-000000000002', 'VIDEO', 'Biological Classification: Monera, Protista, Fungi & Viruses', 'https://www.youtube.com/watch?v=soS6dnpNSIg', true, 1),
    ('65d29b56-2011-3001-0000-000000000003', '65d29b56-2011-2001-0000-000000000003', 'VIDEO', 'Plant Kingdom: Algae to Gymnosperms (NCERT Masterclass)', 'https://www.youtube.com/watch?v=38t4sSVaRjI', false, 1),
    ('65d29b56-2011-3002-0000-000000000001', '65d29b56-2011-2002-0000-000000000001', 'VIDEO', 'Morphology of Flowering Plants (Root, Stem, Flower)', 'https://www.youtube.com/watch?v=lfbG0NUiHLs&t=0s&end=3200s', true, 1),
    ('65d29b56-2011-3002-0000-000000000002', '65d29b56-2011-2002-0000-000000000002', 'VIDEO', 'Updated NMC Plant Families (Malvaceae, Cruciferae, Gramineae)', 'https://www.youtube.com/watch?v=lfbG0NUiHLs&t=3200s&end=5600s', false, 1),
    ('65d29b56-2011-3002-0000-000000000003', '65d29b56-2011-2002-0000-000000000003', 'VIDEO', 'Anatomy of Flowering Plants (Tissues & Stele)', 'https://www.youtube.com/watch?v=CtZ4FG6AAQ4', false, 1),
    ('65d29b56-2011-3003-0000-000000000001', '65d29b56-2011-2003-0000-000000000001', 'VIDEO', 'Cell: The Unit of Life (Fluid Mosaic & Organelles)', 'https://www.youtube.com/watch?v=6rpCt0IKMzo', false, 1),
    ('65d29b56-2011-3003-0000-000000000002', '65d29b56-2011-2003-0000-000000000002', 'VIDEO', 'Cell Cycle, Mitosis & Meiosis Prophase-I Deep Dive', 'https://www.youtube.com/watch?v=4bTa-o535Jw', false, 1),
    ('65d29b56-2011-3004-0000-000000000001', '65d29b56-2011-2004-0000-000000000001', 'VIDEO', 'Photosynthesis in Higher Plants (C3, C4 & Chemiosmosis)', 'https://www.youtube.com/watch?v=8pARJFHbL0o', false, 1),
    ('65d29b56-2011-3004-0000-000000000002', '65d29b56-2011-2004-0000-000000000002', 'VIDEO', 'Respiration in Plants: Glycolysis, Krebs & ETS', 'https://www.youtube.com/watch?v=xiwwNqRg9t8', false, 1),
    ('65d29b56-2011-3004-0000-000000000003', '65d29b56-2011-2004-0000-000000000003', 'VIDEO', 'Plant Growth & Development (Auxin to ABA Phytohormones)', 'https://www.youtube.com/watch?v=HndqlohQ6pw', false, 1),
    ('65d29b56-2011-3005-0000-000000000001', '65d29b56-2011-2005-0000-000000000001', 'VIDEO', 'Sexual Reproduction in Flowering Plants: Pollen & Ovule', 'https://www.youtube.com/watch?v=bJyyUSEH_ao&t=0s&end=2700s', false, 1),
    ('65d29b56-2011-3005-0000-000000000002', '65d29b56-2011-2005-0000-000000000002', 'VIDEO', 'Double Fertilisation, Endosperm & Apomixis', 'https://www.youtube.com/watch?v=bJyyUSEH_ao&t=2700s&end=5200s', false, 1),
    ('65d29b56-2011-3006-0000-000000000001', '65d29b56-2011-2006-0000-000000000001', 'VIDEO', 'Principles of Inheritance & Variation (NEET Ummeed)', 'https://www.youtube.com/watch?v=nyIf7AXZ4I8', false, 1),
    ('65d29b56-2011-3006-0000-000000000002', '65d29b56-2011-2006-0000-000000000002', 'VIDEO', 'Molecular Basis of Inheritance: DNA, RNA & Lac Operon', 'https://www.youtube.com/watch?v=zhgxP1r7Ndk', false, 1),
    ('65d29b56-2011-3007-0000-000000000001', '65d29b56-2011-2007-0000-000000000001', 'VIDEO', 'Organisms & Populations: Interactions & Growth Models', 'https://www.youtube.com/watch?v=Bb428wu6_Pg', false, 1),
    ('65d29b56-2011-3007-0000-000000000002', '65d29b56-2011-2007-0000-000000000002', 'VIDEO', 'Ecosystem Pyramids & Biodiversity Conservation (Ummeed)', 'https://www.youtube.com/watch?v=gHFViShBqsA', false, 1),

    -- Zoology Videos
    ('65d29b56-2012-3001-0000-000000000001', '65d29b56-2012-2001-0000-000000000001', 'VIDEO', 'Animal Kingdom: Porifera to Chordata Complete One-Shot', 'https://www.youtube.com/watch?v=gJVD_kj4rq8', true, 1),
    ('65d29b56-2012-3001-0000-000000000002', '65d29b56-2012-2001-0000-000000000002', 'VIDEO', 'Structural Organisation in Animals: Frog & Cockroach', 'https://www.youtube.com/watch?v=0qtXzH_I1aA', true, 1),
    ('65d29b56-2012-3002-0000-000000000001', '65d29b56-2012-2002-0000-000000000001', 'VIDEO', 'Biomolecules & Enzymes Kinetics (NEET Masterclass)', 'https://www.youtube.com/watch?v=kmggUcIFm30', true, 1),
    ('65d29b56-2012-3003-0000-000000000001', '65d29b56-2012-2003-0000-000000000001', 'VIDEO', 'Breathing & Exchange of Gases (Volumes & Dissociation)', 'https://www.youtube.com/watch?v=u5wOicCsERg', false, 1),
    ('65d29b56-2012-3003-0000-000000000002', '65d29b56-2012-2003-0000-000000000002', 'VIDEO', 'Body Fluids & Circulation (Heart, Cardiac Cycle & ECG)', 'https://www.youtube.com/watch?v=Y6BuLZ5-FDs', false, 1),
    ('65d29b56-2012-3004-0000-000000000001', '65d29b56-2012-2004-0000-000000000001', 'VIDEO', 'Excretory Products (RAAS) & Locomotion/Movement', 'https://www.youtube.com/watch?v=M7C0sRGBrJA', false, 1),
    ('65d29b56-2012-3004-0000-000000000002', '65d29b56-2012-2004-0000-000000000002', 'VIDEO', 'Neural Control & Endocrine Chemical Coordination', 'https://www.youtube.com/watch?v=odaz7IVZV8c', false, 1),
    ('65d29b56-2012-3005-0000-000000000001', '65d29b56-2012-2005-0000-000000000001', 'VIDEO', 'Human Reproduction & Reproductive Health', 'https://www.youtube.com/watch?v=zZ05EByJ9ts', false, 1),
    ('65d29b56-2012-3005-0000-000000000002', '65d29b56-2012-2005-0000-000000000002', 'VIDEO', 'Evolution: Hardy-Weinberg, Adaptive Radiation & Humans', 'https://www.youtube.com/watch?v=x3U83f9eFSo', false, 1),
    ('65d29b56-2012-3006-0000-000000000001', '65d29b56-2012-2006-0000-000000000001', 'VIDEO', 'Human Health, Immunity (IgA/IgG) & Welfare Microbes', 'https://www.youtube.com/watch?v=uySMYvvV1H4', false, 1),
    ('65d29b56-2012-3006-0000-000000000002', '65d29b56-2012-2006-0000-000000000002', 'VIDEO', 'Biotechnology Principles (PCR/pBR322) & Applications', 'https://www.youtube.com/watch?v=v2dm3-4PCPY', false, 1),

    -- Chemistry Videos (NEET Rationalized)
    ('65d29b56-2013-3001-0000-000000000001', '65d29b56-2013-2001-0000-000000000001', 'VIDEO', 'Mole Concept, Stoichiometry & Atomic Structure', 'https://www.youtube.com/watch?v=1t9Dq4wyhBw', true, 1),
    ('65d29b56-2013-3002-0000-000000000001', '65d29b56-2013-2002-0000-000000000001', 'VIDEO', 'Chemical Bonding, VSEPR, MOT & Periodic Trends', 'https://www.youtube.com/watch?v=qle-q0CxtJk', true, 1),
    ('65d29b56-2013-3003-0000-000000000001', '65d29b56-2013-2003-0000-000000000001', 'VIDEO', 'Chemical Thermodynamics & Colligative Solutions', 'https://www.youtube.com/watch?v=NzB2YwNndZw', false, 1),
    ('65d29b56-2013-3004-0000-000000000001', '65d29b56-2013-2004-0000-000000000001', 'VIDEO', 'Equilibrium (Kp/Kc/Ksp) & Redox Reactions', 'https://www.youtube.com/watch?v=A4Ab8xZmTU4', false, 1),
    ('65d29b56-2013-3005-0000-000000000001', '65d29b56-2013-2005-0000-000000000001', 'VIDEO', 'Electrochemistry & 1st Order Chemical Kinetics', 'https://www.youtube.com/watch?v=etdTd4zscso', false, 1),
    ('65d29b56-2013-3006-0000-000000000001', '65d29b56-2013-2006-0000-000000000001', 'VIDEO', 'd & f Block Elements & Coordination CFT', 'https://www.youtube.com/watch?v=kb0bECblCKw', false, 1),
    ('65d29b56-2013-3007-0000-000000000001', '65d29b56-2013-2007-0000-000000000001', 'VIDEO', 'GOC, Isomerism & Hydrocarbons Mechanisms', 'https://www.youtube.com/watch?v=soIba7r34ZM', false, 1),
    ('65d29b56-2013-3008-0000-000000000001', '65d29b56-2013-2008-0000-000000000001', 'VIDEO', 'Haloalkanes to Amines Named Organic Reactions', 'https://www.youtube.com/watch?v=uxZlQlbrvmw', false, 1),
    ('65d29b56-2013-3009-0000-000000000001', '65d29b56-2013-2009-0000-000000000001', 'VIDEO', 'Biomolecules & Qualitative Practical Chemistry', 'https://www.youtube.com/watch?v=lkAIoq7vN6o', false, 1),

    -- Physics Videos (NEET Rationalized)
    ('65d29b56-2014-3001-0000-000000000001', '65d29b56-2014-2001-0000-000000000001', 'VIDEO', 'Units, Measurements & Unit 20 Vernier/Screw Gauge', 'https://www.youtube.com/watch?v=5rm-iI9Nqyo', true, 1),
    ('65d29b56-2014-3002-0000-000000000001', '65d29b56-2014-2002-0000-000000000001', 'VIDEO', 'Kinematics, Projectiles & Relative Motion', 'https://www.youtube.com/watch?v=Tf_NDFEPiEQ', true, 1),
    ('65d29b56-2014-3003-0000-000000000001', '65d29b56-2014-2003-0000-000000000001', 'VIDEO', 'Laws of Motion, Friction & Circular Motion', 'https://www.youtube.com/watch?v=sD2Bbz6a--c', false, 1),
    ('65d29b56-2014-3004-0000-000000000001', '65d29b56-2014-2004-0000-000000000001', 'VIDEO', 'Work, Energy, Power & Collisions', 'https://www.youtube.com/watch?v=oswh0W7uMGo', false, 1),
    ('65d29b56-2014-3005-0000-000000000001', '65d29b56-2014-2005-0000-000000000001', 'VIDEO', 'Rotational Motion & Moment of Inertia', 'https://www.youtube.com/watch?v=gIDn8NW3N6M', false, 1),
    ('65d29b56-2014-3006-0000-000000000001', '65d29b56-2014-2006-0000-000000000001', 'VIDEO', 'Gravitation & Planetary Satellites', 'https://www.youtube.com/watch?v=1FY5JGkhMkE', false, 1),
    ('65d29b56-2014-3007-0000-000000000001', '65d29b56-2014-2007-0000-000000000001', 'VIDEO', 'Properties of Solids, Fluids & Surface Tension', 'https://www.youtube.com/watch?v=R8gN-kDi5E8', false, 1),
    ('65d29b56-2014-3008-0000-000000000001', '65d29b56-2014-2008-0000-000000000001', 'VIDEO', 'Thermodynamics, KTG & Heat Transfer', 'https://www.youtube.com/watch?v=qRNUZQlxXU0', false, 1),
    ('65d29b56-2014-3009-0000-000000000001', '65d29b56-2014-2009-0000-000000000001', 'VIDEO', 'Oscillations (SHM) & Standing Waves', 'https://www.youtube.com/watch?v=eL7s6QvvY7k', false, 1),
    ('65d29b56-2014-3010-0000-000000000001', '65d29b56-2014-2010-0000-000000000001', 'VIDEO', 'Electrostatics, Gauss Law & Dielectrics Capacitors', 'https://www.youtube.com/watch?v=gs6_BHVZ7DI', false, 1),
    ('65d29b56-2014-3011-0000-000000000001', '65d29b56-2014-2011-0000-000000000001', 'VIDEO', 'Current Electricity & Meter Bridge', 'https://www.youtube.com/watch?v=NYHf961Oem4', false, 1),
    ('65d29b56-2014-3012-0000-000000000001', '65d29b56-2014-2012-0000-000000000001', 'VIDEO', 'Moving Charges & Magnetism', 'https://www.youtube.com/watch?v=f0Om2AnIY-8', false, 1),
    ('65d29b56-2014-3013-0000-000000000001', '65d29b56-2014-2013-0000-000000000001', 'VIDEO', 'EMI, AC Series LCR & EM Waves', 'https://www.youtube.com/watch?v=4sF2xkNP8XE', false, 1),
    ('65d29b56-2014-3014-0000-000000000001', '65d29b56-2014-2014-0000-000000000001', 'VIDEO', 'Ray Optics & YDSE Wave Optics', 'https://www.youtube.com/watch?v=GQsJAssGVII', false, 1),
    ('65d29b56-2014-3015-0000-000000000001', '65d29b56-2014-2015-0000-000000000001', 'VIDEO', 'Modern Physics & Semiconductor Logic Gates', 'https://www.youtube.com/watch?v=uUpsZIcwgiY', false, 1);

    -- 5. Full Chapter Master Notes PDFs for all 37 NEET Chapters
    INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
    SELECT
        ('65d29b56-2019-4000-8000-' || LPAD(ROW_NUMBER() OVER (ORDER BY ch.id)::text, 12, '0'))::uuid,
        t.id,
        'NOTES_PDF',
        'NEET UG NMC-Synced Master Notes: ' || ch.title || ' (NCERT Line Highlights + PYQ Bank PDF)',
        '/api/v1/learn/content/chapters/' || ch.id || '/notes-pdf',
        true,
        2
    FROM learn_chapters ch
    JOIN LATERAL (
        SELECT id FROM learn_topics lt WHERE lt.chapter_id = ch.id ORDER BY lt.order_index ASC LIMIT 1
    ) t ON true
    WHERE ch.id::text LIKE '65d29b56-201%';
END $$;
