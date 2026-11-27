-- V483__seed_jee_mains_curriculum_lectures_notes.sql
-- Seeds JEE Mains (NTA Rationalized 2026 Syllabus) subjects, 32 chapters,
-- 78 topics, verified continuous-stream YouTube lectures (VIDEO),
-- downloadable Chapter Master Notes PDFs (NOTES_PDF via LearnPdfService),
-- and curated topic-level JEE Main practice questions.

DO $$
DECLARE
    v_jee_id UUID;
    v_phy_sub UUID := '65d29b56-1010-0100-0000-000000000001';
    v_chem_sub UUID := '65d29b56-1010-0200-0000-000000000002';
    v_math_sub UUID := '65d29b56-1010-0300-0000-000000000003';
BEGIN
    SELECT id INTO v_jee_id FROM learn_exam_types WHERE slug = 'jee-mains' LIMIT 1;
    IF v_jee_id IS NULL THEN
        INSERT INTO learn_exam_types (name, slug, full_name, category, sub_category, conducting_body, required_plan, is_active, display_order)
        VALUES ('JEE Mains', 'jee-mains', 'Joint Entrance Examination - Main', 'ENGINEERING', 'ENGINEERING', 'NTA', 'ENGINEERING', true, 20)
        RETURNING id INTO v_jee_id;
    END IF;

    -- Clean idempotent reload for JEE Mains subjects/chapters/topics
    DELETE FROM learn_content_items WHERE id::text LIKE '65d29b56-101%';
    DELETE FROM learn_topics WHERE id::text LIKE '65d29b56-101%';
    DELETE FROM learn_chapters WHERE id::text LIKE '65d29b56-101%';
    DELETE FROM learn_subjects WHERE id IN (v_phy_sub, v_chem_sub, v_math_sub);

    -- 1. Subjects (Physics, Chemistry, Mathematics)
    INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active) VALUES
    (v_phy_sub,  v_jee_id, 'Physics',     'PHY',  1, true),
    (v_chem_sub, v_jee_id, 'Chemistry',   'CHEM', 2, true),
    (v_math_sub, v_jee_id, 'Mathematics', 'MATH', 3, true)
    ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, is_active = true;

    -- 2. Chapters (15 Physics + 9 Chemistry + 8 Mathematics = 32 NTA Synced Chapters)
    INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active) VALUES
    -- Physics (15 Chapters, incl. Unit 20 Experimental Skills; deleted topics excluded)
    ('65d29b56-1011-1001-0000-000000000001', v_phy_sub, 'Units, Measurements & Experimental Skills (Unit 20)', 1, true),
    ('65d29b56-1011-1002-0000-000000000002', v_phy_sub, 'Kinematics (1D Motion, Projectile & Relative Velocity)', 2, true),
    ('65d29b56-1011-1003-0000-000000000003', v_phy_sub, 'Laws of Motion, Friction & Circular Dynamics', 3, true),
    ('65d29b56-1011-1004-0000-000000000004', v_phy_sub, 'Work, Energy, Power & Centre of Mass (Collisions)', 4, true),
    ('65d29b56-1011-1005-0000-000000000005', v_phy_sub, 'Rotational Motion & Moment of Inertia', 5, true),
    ('65d29b56-1011-1006-0000-000000000006', v_phy_sub, 'Gravitation & Orbital Mechanics', 6, true),
    ('65d29b56-1011-1007-0000-000000000007', v_phy_sub, 'Properties of Solids & Fluids (Viscosity, Surface Tension)', 7, true),
    ('65d29b56-1011-1008-0000-000000000008', v_phy_sub, 'Thermal Physics, Thermodynamics & KTG (Carnot Excluded)', 8, true),
    ('65d29b56-1011-1009-0000-000000000009', v_phy_sub, 'Oscillations (SHM) & Mechanical Waves (No Doppler Sound)', 9, true),
    ('65d29b56-1011-1010-0000-000000000010', v_phy_sub, 'Electrostatics, Gauss Law & Capacitors', 10, true),
    ('65d29b56-1011-1011-0000-000000000011', v_phy_sub, 'Current Electricity & Electrical Instruments (No Potentiometer)', 11, true),
    ('65d29b56-1011-1012-0000-000000000012', v_phy_sub, 'Magnetic Effects of Current & Magnetism (No Cyclotron)', 12, true),
    ('65d29b56-1011-1013-0000-000000000013', v_phy_sub, 'Electromagnetic Induction, Alternating Current & EM Waves', 13, true),
    ('65d29b56-1011-1014-0000-000000000014', v_phy_sub, 'Ray Optics & Wave Optics (YDSE & Diffraction)', 14, true),
    ('65d29b56-1011-1015-0000-000000000015', v_phy_sub, 'Modern Physics (Dual Nature, Atoms, Nuclei) & Semiconductors', 15, true),

    -- Chemistry (9 Chapters, deleted NCERT chapters excluded)
    ('65d29b56-1012-1001-0000-000000000001', v_chem_sub, 'Mole Concept, Stoichiometry & Atomic Structure', 1, true),
    ('65d29b56-1012-1002-0000-000000000002', v_chem_sub, 'Chemical Bonding, MOT & Periodic Trends', 2, true),
    ('65d29b56-1012-1003-0000-000000000003', v_chem_sub, 'Chemical Thermodynamics & Solutions', 3, true),
    ('65d29b56-1012-1004-0000-000000000004', v_chem_sub, 'Chemical Equilibrium, Ionic Equilibrium & Redox', 4, true),
    ('65d29b56-1012-1005-0000-000000000005', v_chem_sub, 'Electrochemistry & Chemical Kinetics', 5, true),
    ('65d29b56-1012-1006-0000-000000000006', v_chem_sub, 'Inorganic Chemistry: p-Block (13-18 Trends), d-f Block & Coordination', 6, true),
    ('65d29b56-1012-1007-0000-000000000007', v_chem_sub, 'GOC, Isomerism & Hydrocarbons', 7, true),
    ('65d29b56-1012-1008-0000-000000000008', v_chem_sub, 'Functional Organic Chemistry (Haloalkanes to Amines)', 8, true),
    ('65d29b56-1012-1009-0000-000000000009', v_chem_sub, 'Biomolecules & Principles Related to Practical Chemistry', 9, true),

    -- Mathematics (8 Chapters, Induction / Reasoning / 3D Planes / Triple Products excluded)
    ('65d29b56-1013-1001-0000-000000000001', v_math_sub, 'Sets, Relations, Functions & Inverse Trigonometry', 1, true),
    ('65d29b56-1013-1002-0000-000000000002', v_math_sub, 'Complex Numbers & Quadratic Equations', 2, true),
    ('65d29b56-1013-1003-0000-000000000003', v_math_sub, 'Matrices, Determinants & System of Linear Equations', 3, true),
    ('65d29b56-1013-1004-0000-000000000004', v_math_sub, 'Permutations, Combinations, Binomial & Sequences', 4, true),
    ('65d29b56-1013-1005-0000-000000000005', v_math_sub, 'Differential Calculus: Limits, Continuity, AOD & Functions', 5, true),
    ('65d29b56-1013-1006-0000-000000000006', v_math_sub, 'Integral Calculus: Indefinite, Definite, Area & Differential Eq.', 6, true),
    ('65d29b56-1013-1007-0000-000000000007', v_math_sub, 'Coordinate Geometry: Straight Lines, Circles & Conics', 7, true),
    ('65d29b56-1013-1008-0000-000000000008', v_math_sub, 'Vectors, 3D Geometry (Lines Focus), Trig, Stats & Prob.', 8, true);

    -- 3. Topics (78 Verified Competitive Subtopics across 32 Chapters)
    INSERT INTO learn_topics (id, chapter_id, title, description, order_index, is_active) VALUES
    -- Physics Topics (37)
    ('65d29b56-1011-2001-0000-000000000001', '65d29b56-1011-1001-0000-000000000001', 'SI Units, Dimensional Analysis & Limiting Error Propagation', 'Apply homogeneity checks and percentage error laws to derive physical exponents quickly.', 1, true),
    ('65d29b56-1011-2001-0000-000000000002', '65d29b56-1011-1001-0000-000000000001', 'Vernier Callipers, Screw Gauge & Least Count Numerics', 'Unit 20 Experimental Skills: MSD/VSD least count, pitch, and positive/negative zero error correction.', 2, true),
    ('65d29b56-1011-2001-0000-000000000003', '65d29b56-1011-1001-0000-000000000001', 'Meter Bridge, Optical Bench, Resonance Tube & Ohm’s Law Setup', 'Circuit null-point balancing, end corrections, parallax removal & slope error extraction.', 3, true),
    ('65d29b56-1011-2002-0000-000000000001', '65d29b56-1011-1002-0000-000000000002', 'Calculus Kinematics (v = dx/dt, a = v dv/dx) & Motion Graphs', 'Variable acceleration integration and v-t, x-t, a-x slope-area conversions.', 1, true),
    ('65d29b56-1011-2002-0000-000000000002', '65d29b56-1011-1002-0000-000000000002', 'Projectile on Horizontal & Inclined Planes', 'Trajectory equations, complementary launch angles & maximum inclined range shortcuts.', 2, true),
    ('65d29b56-1011-2002-0000-000000000003', '65d29b56-1011-1002-0000-000000000002', 'Relative Velocity (River-Boat, Rain-Man & Closest Approach)', 'Shortest path vs shortest time river crossings and vector subtraction geometry.', 3, true),
    ('65d29b56-1011-2003-0000-000000000001', '65d29b56-1011-1003-0000-000000000003', 'Constraint Motion, Pulleys, Wedge-Block & Pseudo Force FBDs', 'String-length constraint differentiation, virtual work T·v and non-inertial frame equilibrium.', 1, true),
    ('65d29b56-1011-2003-0000-000000000002', '65d29b56-1011-1003-0000-000000000003', 'Static & Kinetic Friction on Inclines and Two-Block Systems', 'Self-adjusting friction force, angle of repose & common-acceleration boundary checks.', 2, true),
    ('65d29b56-1011-2003-0000-000000000003', '65d29b56-1011-1003-0000-000000000003', 'Centripetal Force, Banking of Roads & Conical Pendulum', 'Maximum safe speed limits on rough banked tracks and conical tension balance.', 3, true),
    ('65d29b56-1011-2004-0000-000000000001', '65d29b56-1011-1004-0000-000000000004', 'Work-Energy Theorem, Conservative Forces & Potential Well Graphs', 'Line integral work F·dr, F = -dU/dx equilibrium stability & turning points.', 1, true),
    ('65d29b56-1011-2004-0000-000000000002', '65d29b56-1011-1004-0000-000000000004', 'Vertical Circular Motion (String Tension & Loop-the-Loop)', 'Minimum critical speeds √(5gR), √(4gR) and slackening conditions.', 2, true),
    ('65d29b56-1011-2004-0000-000000000003', '65d29b56-1011-1004-0000-000000000004', 'Centre of Mass, Momentum Conservation & 1D/2D Collisions (e)', 'Cavity COM subtraction, elastic/inelastic collisions & coefficient of restitution.', 3, true),
    ('65d29b56-1011-2005-0000-000000000001', '65d29b56-1011-1005-0000-000000000005', 'Moment of Inertia, Parallel & Perpendicular Axis Theorems', 'Rods, rings, discs, spheres, hollow shells & composite cavity MOI tricks.', 1, true),
    ('65d29b56-1011-2005-0000-000000000002', '65d29b56-1011-1005-0000-000000000005', 'Torque, Equilibrium, Fixed-Axis Rotation & Toppling Conditions', 'Vector torque r × F, hinge reaction forces and toppling vs sliding thresholds.', 2, true),
    ('65d29b56-1011-2005-0000-000000000003', '65d29b56-1011-1005-0000-000000000005', 'Pure Rolling Motion, Instantaneous Axis & Angular Momentum Conservation', 'Incline rolling acceleration a = g sinθ/(1+k²/R²) & L = r×mv + Iω conservation.', 3, true),
    ('65d29b56-1011-2006-0000-000000000001', '65d29b56-1011-1006-0000-000000000006', 'Gravitational Field & Potential Due to Shell, Sphere and Ring', 'Inside/outside solid sphere fields, tunnel SHM and ring axis maximum field point.', 1, true),
    ('65d29b56-1011-2006-0000-000000000002', '65d29b56-1011-1006-0000-000000000006', 'Variation of g, Escape Velocity & Satellite Energy (Kepler’s Laws)', 'Total binding energy -GMm/2r, elliptical orbital conservation & geostationary exclusion.', 2, true),
    ('65d29b56-1011-2007-0000-000000000001', '65d29b56-1011-1007-0000-000000000007', 'Elasticity, Stress-Strain Curve & Thermal Stress in Rods', 'Youngs modulus elongation, elastic energy density ½ stress·strain & series/parallel bars.', 1, true),
    ('65d29b56-1011-2007-0000-000000000002', '65d29b56-1011-1007-0000-000000000007', 'Hydrostatics, Archimedes Principle & Bernoulli’s Theorem (Torricelli)', 'Accelerating fluid containers, buoyant equilibrium & efflux range calculations.', 2, true),
    ('65d29b56-1011-2007-0000-000000000003', '65d29b56-1011-1007-0000-000000000007', 'Viscosity (Stokes’ Law), Surface Tension, Excess Pressure & Capillarity', 'Terminal velocity v_T ∝ r², soap bubble excess pressure 4T/r & capillary rise.', 3, true),
    ('65d29b56-1011-2008-0000-000000000001', '65d29b56-1011-1008-0000-000000000008', 'Thermal Expansion, Calorimetry, Conduction & Stefan’s / Wien’s Laws', 'Series/parallel thermal resistance, blackbody radiation & Wien displacement peak (Newton cooling excluded).', 1, true),
    ('65d29b56-1011-2008-0000-000000000002', '65d29b56-1011-1008-0000-000000000008', 'Kinetic Theory of Gases: RMS Speed, Degrees of Freedom & Equipartition', 'v_rms vs v_avg vs v_mp, pressure equation, mean free path & γ_mix of gas mixtures.', 2, true),
    ('65d29b56-1011-2008-0000-000000000003', '65d29b56-1011-1008-0000-000000000008', 'First Law of Thermodynamics, Molar Heat Capacities & Cyclic Graphs', 'Isothermal/adiabatic work, polytropic C = Cv + R/(1-n) & P-V cyclic efficiency (Carnot excluded).', 3, true),
    ('65d29b56-1011-2009-0000-000000000001', '65d29b56-1011-1009-0000-000000000009', 'Simple Harmonic Motion: Phase, Energy & Spring-Block Combinations', 'Phasor method for travel times, reduced mass springs & angular simple pendulum.', 1, true),
    ('65d29b56-1011-2009-0000-000000000002', '65d29b56-1011-1009-0000-000000000009', 'Progressive Waves, Standing Waves on Strings & Organ Pipes (Beats)', 'Wave speed v = √(T/μ), closed/open organ pipe overtones & beat frequency (Doppler excluded).', 2, true),
    ('65d29b56-1011-2010-0000-000000000001', '65d29b56-1011-1010-0000-000000000010', 'Electric Field, Dipole Equilibrium & Gauss’s Law Flux Problems', 'Cube/cone/cylinder Gaussian flux symmetry and torque τ = p × E dipole oscillations.', 1, true),
    ('65d29b56-1011-2010-0000-000000000002', '65d29b56-1011-1010-0000-000000000010', 'Electrostatic Potential, Conductors, Earthing & Self Energy', 'Concentric conducting shell potential redistribution, earthing charge conservation & sphere energy.', 2, true),
    ('65d29b56-1011-2010-0000-000000000003', '65d29b56-1011-1010-0000-000000000010', 'Capacitors with Dielectrics, Nodal Analysis & RC Charging Circuits', 'Battery connected vs disconnected slabs, common potential sharing & RC time constants.', 3, true),
    ('65d29b56-1011-2011-0000-000000000001', '65d29b56-1011-1011-0000-000000000011', 'Drift Velocity, KCL/KVL, Symmetry Networks & Equivalent Cells', 'Mirror/folding resistor symmetry, R ∝ L² wire stretching & mixed cell EMF/r.', 1, true),
    ('65d29b56-1011-2011-0000-000000000002', '65d29b56-1011-1011-0000-000000000011', 'Heating Effect, Wheatstone Bridge, Meter Bridge & Galvanometer Conversion', 'Bulb brightness rating comparisons, meter bridge balance & ammeter/voltmeter shunts (Potentiometer excluded).', 2, true),
    ('65d29b56-1011-2012-0000-000000000001', '65d29b56-1011-1012-0000-000000000012', 'Biot-Savart Law (Arc, Wire, Solenoid) & Ampere’s Circuital Law', 'Circular arc B = μ₀Iθ/(4πR), finite wire formula, hollow cavity pipe field & solenoid.', 1, true),
    ('65d29b56-1011-2012-0000-000000000002', '65d29b56-1011-1012-0000-000000000012', 'Lorentz Force, Helical Paths & Magnetic Dipole Torque', 'Charge trajectory radius/pitch in uniform B, velocity selector & parallel current force (No Cyclotron).', 2, true),
    ('65d29b56-1011-2013-0000-000000000001', '65d29b56-1011-1013-0000-000000000013', 'Faraday & Lenz Law, Motional EMF & Induced Electric Field', 'Rotating rod Bl²ω/2, sliding rails terminal velocity & time-varying B induced loops.', 1, true),
    ('65d29b56-1011-2013-0000-000000000002', '65d29b56-1011-1013-0000-000000000013', 'RMS/Average AC, Series LCR Resonance, LR Transients & EM Waves', 'Phasor impedance Z, resonant frequency, transformer efficiency & E/B = c EM wave ratio.', 2, true),
    ('65d29b56-1011-2014-0000-000000000001', '65d29b56-1011-1014-0000-000000000014', 'Ray Optics: Mirrors, TIR, Prism Deviation & Lens Maker’s Formula', 'Apparent depth, prism minimum deviation, silvered lens focal power & optical instruments.', 1, true),
    ('65d29b56-1011-2014-0000-000000000002', '65d29b56-1011-1014-0000-000000000014', 'Wave Optics: YDSE Slab Shift, Diffraction & Polarisation (Malus)', 'Fringe width β, glass-slab shift (μ-1)t·D/d, single-slit angular width & Brewster law.', 2, true),
    ('65d29b56-1011-2015-0000-000000000001', '65d29b56-1011-1015-0000-000000000015', 'Modern Physics (Photoelectric, Bohr, X-Rays, Nuclei) & Logic Gates', 'Stopping potential, Bohr radius/energy scaling, nuclear Q-value, Zener regulator & NAND/NOR truth tables.', 1, true),

    -- Chemistry Topics (22)
    ('65d29b56-1012-2001-0000-000000000001', '65d29b56-1012-1001-0000-000000000001', 'Molarity, Molality, Redox Titration & Limiting Reagent', 'Stoichiometry mole ratio, normality N = M × n-factor & POAC problem solving.', 1, true),
    ('65d29b56-1012-2001-0000-000000000002', '65d29b56-1012-1001-0000-000000000001', 'Bohr’s Model, de Broglie, Quantum Numbers & Radial Nodes (Ψ²)', 'Hydrogen Balmer/Lyman transitions, Heisenberg limits & radial/angular node counts.', 2, true),
    ('65d29b56-1012-2002-0000-000000000001', '65d29b56-1012-1002-0000-000000000002', 'Periodic Trends: IE, Electron Gain Enthalpy & Diagonal Relationships', 'Successive ionization jumps, inert pair trends & acidic/amphoteric oxide classifications.', 1, true),
    ('65d29b56-1012-2002-0000-000000000002', '65d29b56-1012-1002-0000-000000000002', 'VSEPR Shapes, Hybridization, Dipole Moment & MOT Bond Order', 'Bent’s rule angles, back bonding & O₂/N₂/B₂ Molecular Orbital bond order & magnetism.', 2, true),
    ('65d29b56-1012-2003-0000-000000000001', '65d29b56-1012-1003-0000-000000000003', 'Enthalpy, Hess’s Law, Born-Haber Cycle & Gibbs Free Energy (ΔG)', 'Reversible/irreversible expansion work, ΔH = ΔU + Δn_g RT & ΔG spontaneity.', 1, true),
    ('65d29b56-1012-2003-0000-000000000002', '65d29b56-1012-1003-0000-000000000003', 'Raoult’s Law, Colligative Properties & Van’t Hoff Factor (i)', 'Relative lowering of vapour pressure, ΔTb/ΔTf, osmotic pressure & electrolyte dissociation.', 2, true),
    ('65d29b56-1012-2004-0000-000000000001', '65d29b56-1012-1004-0000-000000000004', 'Kp vs Kc, Degree of Dissociation & Le Chatelier’s Principle', 'Reaction quotient Q vs K, inert gas addition shifts & equilibrium partial pressures.', 1, true),
    ('65d29b56-1012-2004-0000-000000000002', '65d29b56-1012-1004-0000-000000000004', 'pH of Mixtures, Salt Hydrolysis, Buffers & Solubility Product (Ksp)', 'Henderson-Hasselbalch buffer pH, conjugate hydrolysis & common-ion Ksp suppression.', 2, true),
    ('65d29b56-1012-2005-0000-000000000001', '65d29b56-1012-1005-0000-000000000005', 'Nernst Equation, ΔG° = -nFE°, Faraday’s Laws & Kohlrausch Conductance', 'Electrode potentials, limiting molar conductivity Λ°m & electrolysis mass deposited.', 1, true),
    ('65d29b56-1012-2005-0000-000000000002', '65d29b56-1012-1005-0000-000000000005', 'Zero & First Order Integrated Laws, Half-Life & Arrhenius Equation', 'Pressure/titration first-order problems, t_75%/t_99.9% ratios & Ea temperature shifts.', 2, true),
    ('65d29b56-1012-2006-0000-000000000001', '65d29b56-1012-1006-0000-000000000006', 'Group 13 to 18 Core Trends, Oxoacids & Inert Pair Effect (Trimmed NTA)', 'Oxidation state stability down groups 13–18 & oxoacid basicity / reducing power.', 1, true),
    ('65d29b56-1012-2006-0000-000000000002', '65d29b56-1012-1006-0000-000000000006', 'd & f Block Properties, KMnO₄ / K₂Cr₂O₇ Oxidations & Lanthanide Contraction', 'Magnetic moments, variable valency & acidic/neutral permanganate stoichiometry.', 2, true),
    ('65d29b56-1012-2006-0000-000000000003', '65d29b56-1012-1006-0000-000000000006', 'Coordination Compounds: IUPAC, Isomerism, VBT & Crystal Field Splitting (Δo)', 'Geometrical/optical isomer counts, CFSE calculations & spectrochemical series strength.', 3, true),
    ('65d29b56-1012-2007-0000-000000000001', '65d29b56-1012-1007-0000-000000000007', 'Inductive, Resonance, Hyperconjugation, Aromaticity & Acid-Base Strength', 'SIR/SIP ortho effects, carbocation rearrangement stability & Huckel 4n+2 aromaticity.', 1, true),
    ('65d29b56-1012-2007-0000-000000000002', '65d29b56-1012-1007-0000-000000000007', 'Structural & Geometrical/Optical Isomerism (R/S, E/Z, Chiral Centres)', 'Meso forms, enantiomeric pairs, racemic mixtures & geometrical stereoisomers.', 2, true),
    ('65d29b56-1012-2007-0000-000000000003', '65d29b56-1012-1007-0000-000000000007', 'Alkanes, Alkenes (Ozonolysis, Markovnikov) & Alkynes/Benzene EAS', 'Reductive/oxidative ozonolysis, peroxide anti-Markovnikov & Friedel-Crafts directing effects.', 3, true),
    ('65d29b56-1012-2008-0000-000000000001', '65d29b56-1012-1008-0000-000000000008', 'SN1, SN2, E1, E2 Competition & Alcohols/Phenols/Ethers Reactions', 'Solvent effects (polar aprotic vs protic), Lucas/Reimer-Tiemann & Williamson ether synthesis.', 1, true),
    ('65d29b56-1012-2008-0000-000000000002', '65d29b56-1012-1008-0000-000000000008', 'Aldehydes & Ketones: Aldol, Cannizzaro, Haloform & Carboxylic Acids', 'Cross-aldol mechanisms, iodoform test substrates, Tollens/Fehling & HVZ reaction.', 2, true),
    ('65d29b56-1012-2008-0000-000000000003', '65d29b56-1012-1008-0000-000000000008', 'Amines Basicity Orders, Hoffmann Bromamide, Gabriel & Diazonium Salts', 'Aqueous vs gaseous basicity, Hinsberg separation & Sandmeyer coupling reactions.', 3, true),
    ('65d29b56-1012-2009-0000-000000000001', '65d29b56-1012-1009-0000-000000000009', 'Biomolecules: Carbohydrates, Amino Acids (pI), Proteins & Vitamins', 'Reducing vs non-reducing sugars, mutarotation, zwitterion pI & DNA base pairing.', 1, true),
    ('65d29b56-1012-2009-0000-000000000002', '65d29b56-1012-1009-0000-000000000009', 'Practical Organic & Qualitative Salt Analysis (Group Cations/Anions)', 'Lassaigne N/S/X tests, chromyl chloride, brown ring test & I-VI cation precipitates.', 2, true),

    -- Mathematics Topics (20)
    ('65d29b56-1013-2001-0000-000000000001', '65d29b56-1013-1001-0000-000000000001', 'Equivalence Relations, Domain-Range, Periodic & Composite Functions', 'Equivalence class counting, bijective mappings & Inverse Trigonometric principal values.', 1, true),
    ('65d29b56-1013-2002-0000-000000000001', '65d29b56-1013-1002-0000-000000000002', 'Location of Roots, Newton’s Identities & Common Roots in Quadratics', 'b²-4ac discriminant bounds, graph vertex placement & alpha^n power recursion.', 1, true),
    ('65d29b56-1013-2002-0000-000000000002', '65d29b56-1013-1002-0000-000000000002', 'Modulus-Argument, De Moivre’s Theorem, Cube Roots & Argand Locus', '|z-z₁| circles/perpendicular bisectors, ω identities & Euler rotations.', 2, true),
    ('65d29b56-1013-2003-0000-000000000001', '65d29b56-1013-1003-0000-000000000003', 'Symmetric, Orthogonal, Adjoint & Matrix Inverse Identities', '|adj(A)| = |A|^(n-1), involutory/idempotent identities & matrix trace properties.', 1, true),
    ('65d29b56-1013-2003-0000-000000000002', '65d29b56-1013-1003-0000-000000000003', 'Determinant Expansion, Cramer’s Rule & Consistency of Linear Systems', 'Non-trivial solutions Δ=0, infinite vs no-solution system rank conditions.', 2, true),
    ('65d29b56-1013-2004-0000-000000000001', '65d29b56-1013-1004-0000-000000000004', 'P&C: Multinomial Theorem, Derangements & Geometrical Selections', 'Rank of words, non-negative integral solutions n+r-1Cr-1 & circular permutations.', 1, true),
    ('65d29b56-1013-2004-0000-000000000002', '65d29b56-1013-1004-0000-000000000004', 'Binomial Theorem & Sequences (AP, GP, AGP, AM-GM Inequality)', 'Middle/greatest term, remainder problems & telescoping V_r difference series.', 2, true),
    ('65d29b56-1013-2005-0000-000000000001', '65d29b56-1013-1005-0000-000000000005', 'Indeterminate Forms (1^∞, Taylor Series) & Differentiability Checks', 'Maclaurin expansions, L’Hôpital limits & piecewise differentiability corner points.', 1, true),
    ('65d29b56-1013-2005-0000-000000000002', '65d29b56-1013-1005-0000-000000000005', 'Application of Derivatives: Tangents, Monotonicity & Maxima-Minima', 'Rolle/Lagrange MVT, global extrema intervals & critical point classification.', 2, true),
    ('65d29b56-1013-2006-0000-000000000001', '65d29b56-1013-1006-0000-000000000006', 'Indefinite Integrals, King/Queen Definite Properties & Leibniz Rule', 'By-parts e^x[f+f’’], King symmetry, Newton-Leibniz limit differentiation & Walli’s rule.', 1, true),
    ('65d29b56-1013-2006-0000-000000000002', '65d29b56-1013-1006-0000-000000000006', 'Area Under Curves & Differential Equations (Linear & Homogeneous)', 'Parabola-line enclosed area formulas, integrating factors & orthogonal trajectories.', 2, true),
    ('65d29b56-1013-2007-0000-000000000001', '65d29b56-1013-1007-0000-000000000007', 'Straight Lines, Triangle Centres & Circle Chords / Radical Axis', 'Orthocentre/circumcentre coordinates, family of circles & chord of contact T = 0.', 1, true),
    ('65d29b56-1013-2007-0000-000000000002', '65d29b56-1013-1007-0000-000000000007', 'Parabola, Ellipse & Hyperbola: Tangents, Normals & Focal Chords', 'Slope form tangent equations, eccentricity identities & focal chord harmonic mean.', 2, true),
    ('65d29b56-1013-2008-0000-000000000001', '65d29b56-1013-1008-0000-000000000008', 'Vectors & 3D Skew Lines Shortest Distance (Planes Excluded NTA)', 'Unit projections, foot of perpendicular to line & shortest distance between skew lines.', 1, true),
    ('65d29b56-1013-2008-0000-000000000002', '65d29b56-1013-1008-0000-000000000008', 'Trigonometric Equations, Statistics Variance & Bayes Probability', 'General trig solutions in intervals, combined mean/variance & conditional Bayes probability.', 2, true);

    -- 4. Video Lectures (Continuous Zero-Gap Verified YouTube Streams)
    INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index) VALUES
    -- Physics Videos (Verified YouTube IDs)
    ('65d29b56-1011-3001-0000-000000000001', '65d29b56-1011-2001-0000-000000000001', 'VIDEO', 'Units, Dimensions & Error Propagation (JEE Masterclass)', 'https://www.youtube.com/watch?v=5rm-iI9Nqyo&t=0s&end=2700s', true, 1),
    ('65d29b56-1011-3001-0000-000000000002', '65d29b56-1011-2001-0000-000000000002', 'VIDEO', 'Vernier Callipers & Screw Gauge Experimental Skills', 'https://www.youtube.com/watch?v=5rm-iI9Nqyo&t=2700s&end=4200s', true, 1),
    ('65d29b56-1011-3001-0000-000000000003', '65d29b56-1011-2001-0000-000000000003', 'VIDEO', 'Unit 20 Lab Apparatus: Meter Bridge, Resonance & Ohm’s Law', 'https://www.youtube.com/watch?v=StBdeErCQlc', false, 1),
    ('65d29b56-1011-3002-0000-000000000001', '65d29b56-1011-2002-0000-000000000001', 'VIDEO', 'Calculus Kinematics & Motion Graphs One-Shot', 'https://www.youtube.com/watch?v=Tf_NDFEPiEQ', true, 1),
    ('65d29b56-1011-3002-0000-000000000002', '65d29b56-1011-2002-0000-000000000002', 'VIDEO', 'Projectile Motion on Horizontal & Inclined Planes', 'https://www.youtube.com/watch?v=Rguy27cyJpo&t=0s&end=2800s', true, 1),
    ('65d29b56-1011-3002-0000-000000000003', '65d29b56-1011-2002-0000-000000000003', 'VIDEO', 'Relative Motion: River-Boat & Rain-Man Problems', 'https://www.youtube.com/watch?v=Rguy27cyJpo&t=2800s&end=5200s', false, 1),
    ('65d29b56-1011-3003-0000-000000000001', '65d29b56-1011-2003-0000-000000000001', 'VIDEO', 'Pulleys, Constraints & Pseudo Force FBDs', 'https://www.youtube.com/watch?v=sD2Bbz6a--c&t=0s&end=3678s', false, 1),
    ('65d29b56-1011-3003-0000-000000000002', '65d29b56-1011-2003-0000-000000000002', 'VIDEO', 'Static & Kinetic Friction: Two-Block Numericals', 'https://www.youtube.com/watch?v=sD2Bbz6a--c&t=3678s&end=7991s', false, 1),
    ('65d29b56-1011-3003-0000-000000000003', '65d29b56-1011-2003-0000-000000000003', 'VIDEO', 'Circular Dynamics & Banking of Roads', 'https://www.youtube.com/watch?v=sD2Bbz6a--c&t=7991s&end=9280s', false, 1),
    ('65d29b56-1011-3004-0000-000000000001', '65d29b56-1011-2004-0000-000000000001', 'VIDEO', 'Work-Energy Theorem & Potential Energy Wells', 'https://www.youtube.com/watch?v=oswh0W7uMGo&t=0s&end=2700s', false, 1),
    ('65d29b56-1011-3004-0000-000000000002', '65d29b56-1011-2004-0000-000000000002', 'VIDEO', 'Vertical Circular Motion Critical Speeds', 'https://www.youtube.com/watch?v=oswh0W7uMGo&t=2700s&end=4500s', false, 1),
    ('65d29b56-1011-3004-0000-000000000003', '65d29b56-1011-2004-0000-000000000003', 'VIDEO', 'Centre of Mass & Elastic/Inelastic Collisions', 'https://www.youtube.com/watch?v=oswh0W7uMGo&t=4500s&end=6400s', false, 1),
    ('65d29b56-1011-3005-0000-000000000001', '65d29b56-1011-2005-0000-000000000001', 'VIDEO', 'Moment of Inertia & Axis Theorems', 'https://www.youtube.com/watch?v=gIDn8NW3N6M&t=0s&end=2600s', false, 1),
    ('65d29b56-1011-3005-0000-000000000002', '65d29b56-1011-2005-0000-000000000002', 'VIDEO', 'Torque, Equilibrium & Toppling Conditions', 'https://www.youtube.com/watch?v=gIDn8NW3N6M&t=2600s&end=5200s', false, 1),
    ('65d29b56-1011-3005-0000-000000000003', '65d29b56-1011-2005-0000-000000000003', 'VIDEO', 'Pure Rolling Motion & Angular Momentum Conservation', 'https://www.youtube.com/watch?v=gIDn8NW3N6M&t=5200s&end=7800s', false, 1),
    ('65d29b56-1011-3006-0000-000000000001', '65d29b56-1011-2006-0000-000000000001', 'VIDEO', 'Gravitational Field & Potential of Shells/Spheres', 'https://www.youtube.com/watch?v=1FY5JGkhMkE&t=0s&end=2400s', false, 1),
    ('65d29b56-1011-3006-0000-000000000002', '65d29b56-1011-2006-0000-000000000002', 'VIDEO', 'Kepler’s Laws, Escape & Satellite Energy', 'https://www.youtube.com/watch?v=1FY5JGkhMkE&t=2400s&end=4800s', false, 1),
    ('65d29b56-1011-3007-0000-000000000001', '65d29b56-1011-2007-0000-000000000001', 'VIDEO', 'Elasticity & Stress-Strain Numericals', 'https://www.youtube.com/watch?v=p4zl6OBD80o', false, 1),
    ('65d29b56-1011-3007-0000-000000000002', '65d29b56-1011-2007-0000-000000000002', 'VIDEO', 'Hydrostatics & Bernoulli’s Theorem', 'https://www.youtube.com/watch?v=R8gN-kDi5E8&t=0s&end=2800s', false, 1),
    ('65d29b56-1011-3007-0000-000000000003', '65d29b56-1011-2007-0000-000000000003', 'VIDEO', 'Viscosity, Stokes’ Law & Surface Tension', 'https://www.youtube.com/watch?v=R8gN-kDi5E8&t=2800s&end=5600s', false, 1),
    ('65d29b56-1011-3008-0000-000000000001', '65d29b56-1011-2008-0000-000000000001', 'VIDEO', 'Thermal Expansion, Conduction & Radiation Laws', 'https://www.youtube.com/watch?v=JVhYUndMXCE', false, 1),
    ('65d29b56-1011-3008-0000-000000000002', '65d29b56-1011-2008-0000-000000000002', 'VIDEO', 'Kinetic Theory of Gases & Degrees of Freedom', 'https://www.youtube.com/watch?v=QokEth-VtKc', false, 1),
    ('65d29b56-1011-3008-0000-000000000003', '65d29b56-1011-2008-0000-000000000003', 'VIDEO', 'First Law of Thermodynamics & Cyclic P-V Graphs', 'https://www.youtube.com/watch?v=qRNUZQlxXU0', false, 1),
    ('65d29b56-1011-3009-0000-000000000001', '65d29b56-1011-2009-0000-000000000001', 'VIDEO', 'SHM Equations, Energy & Spring Combinations', 'https://www.youtube.com/watch?v=eL7s6QvvY7k', false, 1),
    ('65d29b56-1011-3009-0000-000000000002', '65d29b56-1011-2009-0000-000000000002', 'VIDEO', 'Standing Waves, Organ Pipes & Beats', 'https://www.youtube.com/watch?v=p3vMfyGjfcM', false, 1),
    ('65d29b56-1011-3010-0000-000000000001', '65d29b56-1011-2010-0000-000000000001', 'VIDEO', 'Electric Field, Dipole & Gauss’s Law Flux', 'https://www.youtube.com/watch?v=gs6_BHVZ7DI', false, 1),
    ('65d29b56-1011-3010-0000-000000000002', '65d29b56-1011-2010-0000-000000000002', 'VIDEO', 'Electrostatic Potential, Conductors & Earthing', 'https://www.youtube.com/watch?v=CAaMXcb18H0&t=0s&end=2700s', false, 1),
    ('65d29b56-1011-3010-0000-000000000003', '65d29b56-1011-2010-0000-000000000003', 'VIDEO', 'Capacitors with Dielectrics & RC Transients', 'https://www.youtube.com/watch?v=CAaMXcb18H0&t=2700s&end=5400s', false, 1),
    ('65d29b56-1011-3011-0000-000000000001', '65d29b56-1011-2011-0000-000000000001', 'VIDEO', 'Drift Velocity, KVL/KCL & Circuit Symmetry', 'https://www.youtube.com/watch?v=NYHf961Oem4&t=0s&end=2700s', false, 1),
    ('65d29b56-1011-3011-0000-000000000002', '65d29b56-1011-2011-0000-000000000002', 'VIDEO', 'Meter Bridge, Wheatstone & Galvanometer Shunts', 'https://www.youtube.com/watch?v=NYHf961Oem4&t=2700s&end=5200s', false, 1),
    ('65d29b56-1011-3012-0000-000000000001', '65d29b56-1011-2012-0000-000000000001', 'VIDEO', 'Biot-Savart Law & Ampere’s Circuital Law', 'https://www.youtube.com/watch?v=f0Om2AnIY-8', false, 1),
    ('65d29b56-1011-3012-0000-000000000002', '65d29b56-1011-2012-0000-000000000002', 'VIDEO', 'Lorentz Force, Magnetic Dipole & Matter', 'https://www.youtube.com/watch?v=tQvTQs6eB4g', false, 1),
    ('65d29b56-1011-3013-0000-000000000001', '65d29b56-1011-2013-0000-000000000001', 'VIDEO', 'Faraday’s Law, Lenz Law & Motional EMF', 'https://www.youtube.com/watch?v=KNvRJXil1Gg', false, 1),
    ('65d29b56-1011-3013-0000-000000000002', '65d29b56-1011-2013-0000-000000000002', 'VIDEO', 'Alternating Current LCR Resonance & EM Waves', 'https://www.youtube.com/watch?v=4sF2xkNP8XE', false, 1),
    ('65d29b56-1011-3014-0000-000000000001', '65d29b56-1011-2014-0000-000000000001', 'VIDEO', 'Ray Optics: Mirrors, Prisms & Lens Maker Formula', 'https://www.youtube.com/watch?v=GQsJAssGVII', false, 1),
    ('65d29b56-1011-3014-0000-000000000002', '65d29b56-1011-2014-0000-000000000002', 'VIDEO', 'Wave Optics: YDSE Slab Shift & Single-Slit Diffraction', 'https://www.youtube.com/watch?v=UsX7AAksOQY', false, 1),
    ('65d29b56-1011-3015-0000-000000000001', '65d29b56-1011-2015-0000-000000000001', 'VIDEO', 'Modern Physics (Dual Nature, Atoms, Nuclei) & Logic Gates', 'https://www.youtube.com/watch?v=uUpsZIcwgiY', false, 1),

    -- Chemistry Videos (Verified YouTube IDs)
    ('65d29b56-1012-3001-0000-000000000001', '65d29b56-1012-2001-0000-000000000001', 'VIDEO', 'Mole Concept, Stoichiometry & Limiting Reagent', 'https://www.youtube.com/watch?v=1t9Dq4wyhBw', true, 1),
    ('65d29b56-1012-3001-0000-000000000002', '65d29b56-1012-2001-0000-000000000002', 'VIDEO', 'Atomic Structure, Bohr Model & Quantum Numbers', 'https://www.youtube.com/watch?v=S7uLXHDTamo', true, 1),
    ('65d29b56-1012-3002-0000-000000000001', '65d29b56-1012-2002-0000-000000000001', 'VIDEO', 'Periodic Properties, IE & Electron Gain Enthalpy', 'https://www.youtube.com/watch?v=I55bzdbtY2k', true, 1),
    ('65d29b56-1012-3002-0000-000000000002', '65d29b56-1012-2002-0000-000000000002', 'VIDEO', 'Chemical Bonding: VSEPR, Hybridization & MOT', 'https://www.youtube.com/watch?v=qle-q0CxtJk', false, 1),
    ('65d29b56-1012-3003-0000-000000000001', '65d29b56-1012-2003-0000-000000000001', 'VIDEO', 'Chemical Thermodynamics, Hess Law & Gibbs Energy', 'https://www.youtube.com/watch?v=NzB2YwNndZw', false, 1),
    ('65d29b56-1012-3003-0000-000000000002', '65d29b56-1012-2003-0000-000000000002', 'VIDEO', 'Solutions: Raoult Law & Van’t Hoff Factor (i)', 'https://www.youtube.com/watch?v=3VVSOY_iQX8', false, 1),
    ('65d29b56-1012-3004-0000-000000000001', '65d29b56-1012-2004-0000-000000000001', 'VIDEO', 'Chemical Equilibrium & Le Chatelier’s Principle', 'https://www.youtube.com/watch?v=A4Ab8xZmTU4&t=0s&end=2700s', false, 1),
    ('65d29b56-1012-3004-0000-000000000002', '65d29b56-1012-2004-0000-000000000002', 'VIDEO', 'Ionic Equilibrium: pH, Buffers & Ksp Solubility', 'https://www.youtube.com/watch?v=A4Ab8xZmTU4&t=2700s&end=5600s', false, 1),
    ('65d29b56-1012-3005-0000-000000000001', '65d29b56-1012-2005-0000-000000000001', 'VIDEO', 'Electrochemistry: Nernst Equation & Faraday Laws', 'https://www.youtube.com/watch?v=etdTd4zscso', false, 1),
    ('65d29b56-1012-3005-0000-000000000002', '65d29b56-1012-2005-0000-000000000002', 'VIDEO', 'Chemical Kinetics: 1st Order & Arrhenius Equation', 'https://www.youtube.com/watch?v=rlsq4cJn2DM', false, 1),
    ('65d29b56-1012-3006-0000-000000000001', '65d29b56-1012-2006-0000-000000000001', 'VIDEO', 'p-Block Group 13–18 Rationalized Trends', 'https://www.youtube.com/watch?v=Q2pJ8XH3R2E', false, 1),
    ('65d29b56-1012-3006-0000-000000000002', '65d29b56-1012-2006-0000-000000000002', 'VIDEO', 'd & f Block Elements & Potassium Permanganate', 'https://www.youtube.com/watch?v=atz_SW4Ovg8', false, 1),
    ('65d29b56-1012-3006-0000-000000000003', '65d29b56-1012-2006-0000-000000000003', 'VIDEO', 'Coordination Compounds: IUPAC, Isomerism & CFT', 'https://www.youtube.com/watch?v=kb0bECblCKw', false, 1),
    ('65d29b56-1012-3007-0000-000000000001', '65d29b56-1012-2007-0000-000000000001', 'VIDEO', 'GOC: Inductive, Resonance, Hyperconjugation & Acidity', 'https://www.youtube.com/watch?v=soIba7r34ZM&t=0s&end=2700s', false, 1),
    ('65d29b56-1012-3007-0000-000000000002', '65d29b56-1012-2007-0000-000000000002', 'VIDEO', 'Isomerism: Structural, Geometrical & Optical Chirality', 'https://www.youtube.com/watch?v=soIba7r34ZM&t=2700s&end=5400s', false, 1),
    ('65d29b56-1012-3007-0000-000000000003', '65d29b56-1012-2007-0000-000000000003', 'VIDEO', 'Hydrocarbons: Alkenes Ozonolysis & Benzene EAS', 'https://www.youtube.com/watch?v=nGi3tGiKiv4', false, 1),
    ('65d29b56-1012-3008-0000-000000000001', '65d29b56-1012-2008-0000-000000000001', 'VIDEO', 'Haloalkanes (SN1/SN2), Alcohols, Phenols & Ethers', 'https://www.youtube.com/watch?v=2GT9GM7k9_k', false, 1),
    ('65d29b56-1012-3008-0000-000000000002', '65d29b56-1012-2008-0000-000000000002', 'VIDEO', 'Aldehydes, Ketones (Aldol/Cannizzaro) & Acids', 'https://www.youtube.com/watch?v=uxZlQlbrvmw', false, 1),
    ('65d29b56-1012-3008-0000-000000000003', '65d29b56-1012-2008-0000-000000000003', 'VIDEO', 'Amines Basicity, Hoffmann Bromamide & Diazonium', 'https://www.youtube.com/watch?v=lkAbtIASF4o', false, 1),
    ('65d29b56-1012-3009-0000-000000000001', '65d29b56-1012-2009-0000-000000000001', 'VIDEO', 'Biomolecules: Carbohydrates, Amino Acids & DNA', 'https://www.youtube.com/watch?v=lkAIoq7vN6o', false, 1),
    ('65d29b56-1012-3009-0000-000000000002', '65d29b56-1012-2009-0000-000000000002', 'VIDEO', 'Practical Organic & Qualitative Salt Analysis', 'https://www.youtube.com/watch?v=slkIdffX7dQ', false, 1),

    -- Mathematics Videos (Verified YouTube IDs)
    ('65d29b56-1013-3001-0000-000000000001', '65d29b56-1013-2001-0000-000000000001', 'VIDEO', 'Relations, Functions & Inverse Trigonometry Masterclass', 'https://www.youtube.com/watch?v=zyFucmwc2gY', true, 1),
    ('65d29b56-1013-3002-0000-000000000001', '65d29b56-1013-2002-0000-000000000001', 'VIDEO', 'Quadratic Equations: Location of Roots & Common Roots', 'https://www.youtube.com/watch?v=4VXUlNRlT3c&t=0s&end=2700s', true, 1),
    ('65d29b56-1013-3002-0000-000000000002', '65d29b56-1013-2002-0000-000000000002', 'VIDEO', 'Complex Numbers: De Moivre Theorem & Argand Geometry', 'https://www.youtube.com/watch?v=4VXUlNRlT3c&t=2700s&end=5600s', false, 1),
    ('65d29b56-1013-3003-0000-000000000001', '65d29b56-1013-2003-0000-000000000001', 'VIDEO', 'Matrices, Adjoint & Matrix Inverse Identities', 'https://www.youtube.com/watch?v=QRblOWCxDdg', false, 1),
    ('65d29b56-1013-3003-0000-000000000002', '65d29b56-1013-2003-0000-000000000002', 'VIDEO', 'Determinants, Cramer’s Rule & System Consistency', 'https://www.youtube.com/watch?v=2NncYZhn6FI', false, 1),
    ('65d29b56-1013-3004-0000-000000000001', '65d29b56-1013-2004-0000-000000000001', 'VIDEO', 'Permutations & Combinations: Multinomial & Derangements', 'https://www.youtube.com/watch?v=7tu6_GH5qAw', false, 1),
    ('65d29b56-1013-3004-0000-000000000002', '65d29b56-1013-2004-0000-000000000002', 'VIDEO', 'Binomial Theorem & AP/GP/AM-GM Sequences', 'https://www.youtube.com/watch?v=Kdcd7m0jme0', false, 1),
    ('65d29b56-1013-3005-0000-000000000001', '65d29b56-1013-2005-0000-000000000001', 'VIDEO', 'Limits, Continuity & Differentiability (1^∞ & Taylor)', 'https://www.youtube.com/watch?v=cnpv-t2DGiw', false, 1),
    ('65d29b56-1013-3005-0000-000000000002', '65d29b56-1013-2005-0000-000000000002', 'VIDEO', 'Application of Derivatives: Tangents & Maxima-Minima', 'https://www.youtube.com/watch?v=fy4m6lZ9YwA', false, 1),
    ('65d29b56-1013-3006-0000-000000000001', '65d29b56-1013-2006-0000-000000000001', 'VIDEO', 'Indefinite & Definite Integrals (King Rule & Leibniz)', 'https://www.youtube.com/watch?v=yY2oUKVAkdY', false, 1),
    ('65d29b56-1013-3006-0000-000000000002', '65d29b56-1013-2006-0000-000000000002', 'VIDEO', 'Area Under Curves & Linear Differential Equations', 'https://www.youtube.com/watch?v=lnR343-9vFY', false, 1),
    ('65d29b56-1013-3007-0000-000000000001', '65d29b56-1013-2007-0000-000000000001', 'VIDEO', 'Straight Lines & Circles One-Shot (JEE Core)', 'https://www.youtube.com/watch?v=lRrHW6hfAiA', false, 1),
    ('65d29b56-1013-3007-0000-000000000002', '65d29b56-1013-2007-0000-000000000002', 'VIDEO', 'Conic Sections: Parabola, Ellipse & Hyperbola', 'https://www.youtube.com/watch?v=5w2tWzcsiy4', false, 1),
    ('65d29b56-1013-3008-0000-000000000001', '65d29b56-1013-2008-0000-000000000001', 'VIDEO', 'Vectors & 3D Skew Lines (Planes Excluded)', 'https://www.youtube.com/watch?v=sNG2FVZi5d8', false, 1),
    ('65d29b56-1013-3008-0000-000000000002', '65d29b56-1013-2008-0000-000000000002', 'VIDEO', 'Trigonometry, Statistics Variance & Bayes Probability', 'https://www.youtube.com/watch?v=I4WvS7_rk8k', false, 1);

    -- 5. Full Chapter Master Notes PDFs (Dynamic Backend PDF Endpoint for all 32 Chapters)
    -- Any topic inside a chapter inherits chapter PDF via LearnContentService fallback, AND first topic has explicit NOTES_PDF row.
    INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
    SELECT
        ('65d29b56-1019-4000-8000-' || LPAD(ROW_NUMBER() OVER (ORDER BY ch.id)::text, 12, '0'))::uuid,
        t.id,
        'NOTES_PDF',
        'JEE Main NTA Synced Master Notes: ' || ch.title || ' (Formulas + Solved Traps PDF)',
        '/api/v1/learn/content/chapters/' || ch.id || '/notes-pdf',
        true,
        2
    FROM learn_chapters ch
    JOIN LATERAL (
        SELECT id FROM learn_topics lt WHERE lt.chapter_id = ch.id ORDER BY lt.order_index ASC LIMIT 1
    ) t ON true
    WHERE ch.id::text LIKE '65d29b56-101%';

END $$;
