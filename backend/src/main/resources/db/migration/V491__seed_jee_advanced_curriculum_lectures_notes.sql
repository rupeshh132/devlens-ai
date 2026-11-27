-- V491__seed_jee_advanced_curriculum_lectures_notes.sql
-- Seeds JEE Advanced (Official IIT Paper 1 + Paper 2 Synchronized Syllabus)
-- 3 Official Subjects: Physics (18 Chapters: 15 Core + 3 ADV_ONLY),
-- Chemistry (13 Chapters: 9 Core + 4 ADV_ONLY), Mathematics (10 Chapters: 8 Core + 2 ADV_ONLY) = 41 Chapters!
-- Seeds 41 verified continuous-stream YouTube VIDEO lectures + 41 downloadable Master Notes PDFs.

DO $$
DECLARE
    v_adv_id UUID;
    v_phy_sub UUID := '65d29b56-3010-0100-0000-000000000001';
    v_chem_sub UUID := '65d29b56-3010-0200-0000-000000000002';
    v_math_sub UUID := '65d29b56-3010-0300-0000-000000000003';
BEGIN
    SELECT id INTO v_adv_id FROM learn_exam_types WHERE slug = 'jee-advanced' LIMIT 1;
    IF v_adv_id IS NULL THEN
        INSERT INTO learn_exam_types (name, slug, full_name, category, sub_category, conducting_body, required_plan, is_active, display_order)
        VALUES ('JEE Advanced', 'jee-advanced', 'Joint Entrance Examination - Advanced (IIT)', 'ENGINEERING', 'ENGINEERING', 'IIT JAB', 'ENGINEERING', true, 21)
        RETURNING id INTO v_adv_id;
    END IF;

    -- Clean idempotent reload for JEE Advanced hierarchy
    DELETE FROM learn_content_items WHERE id::text LIKE '65d29b56-301%';
    DELETE FROM learn_topics WHERE id::text LIKE '65d29b56-301%';
    DELETE FROM learn_chapters WHERE id::text LIKE '65d29b56-301%';
    DELETE FROM learn_subjects WHERE id IN (v_phy_sub, v_chem_sub, v_math_sub);

    -- 1. Subjects
    INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active) VALUES
    (v_phy_sub,  v_adv_id, 'Physics',     'PHY',  1, true),
    (v_chem_sub, v_adv_id, 'Chemistry',   'CHEM', 2, true),
    (v_math_sub, v_adv_id, 'Mathematics', 'MATH', 3, true)
    ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, is_active = true;

    -- 2. Chapters (18 Physics + 13 Chemistry + 10 Mathematics = 41 IIT Synced Chapters)
    INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active) VALUES
    -- Physics (15 Core + 3 ADV_ONLY)
    ('65d29b56-3011-1001-0000-000000000001', v_phy_sub, 'Units, Error Propagation & Experimental Skills', 1, true),
    ('65d29b56-3011-1002-0000-000000000002', v_phy_sub, 'Kinematics: 1D Calculus, Projectiles & Relative Motion', 2, true),
    ('65d29b56-3011-1003-0000-000000000003', v_phy_sub, 'Laws of Motion, Friction & Constrained Pulleys', 3, true),
    ('65d29b56-3011-1004-0000-000000000004', v_phy_sub, 'Work, Energy, Potential Wells & Elastic/Inelastic Collisions', 4, true),
    ('65d29b56-3011-1005-0000-000000000005', v_phy_sub, 'Rotational Dynamics & Angular Momentum Conservation', 5, true),
    ('65d29b56-3011-1006-0000-000000000006', v_phy_sub, 'Gravitation, Kepler Elliptical Orbits & Binary Stars', 6, true),
    ('65d29b56-3011-1007-0000-000000000007', v_phy_sub, 'Elasticity, Fluid Dynamics, Viscosity & Capillarity', 7, true),
    ('65d29b56-3011-1008-0000-000000000008', v_phy_sub, 'Thermal Conduction, Radiation & First Law Thermodynamics', 8, true),
    ('65d29b56-3011-1009-0000-000000000009', v_phy_sub, 'Oscillations (SHM) & Standing Waves on Strings/Pipes', 9, true),
    ('65d29b56-3011-1010-0000-000000000010', v_phy_sub, 'Electrostatics, Dielectrics, Capacitors & RC Networks', 10, true),
    ('65d29b56-3011-1011-0000-000000000011', v_phy_sub, 'Current Electricity, Symmetric Circuits & Galvanometers', 11, true),
    ('65d29b56-3011-1012-0000-000000000012', v_phy_sub, 'Magnetic Effects, Helical Lorentz Paths & Torque', 12, true),
    ('65d29b56-3011-1013-0000-000000000013', v_phy_sub, 'EMI, Motional EMF, LR Transients & Series LCR Resonance', 13, true),
    ('65d29b56-3011-1014-0000-000000000014', v_phy_sub, 'Geometrical Ray Optics & YDSE Wave Interference', 14, true),
    ('65d29b56-3011-1015-0000-000000000015', v_phy_sub, 'Modern Physics: Photoelectric, Bohr Spectra & Radioactivity', 15, true),
    ('65d29b56-3011-1016-0000-000000000016', v_phy_sub, '[ADV ONLY] ICOR, Angular Impulse & Variable-Mass Rocket Propulsion', 16, true),
    ('65d29b56-3011-1017-0000-000000000017', v_phy_sub, '[ADV ONLY] Carnot Engine, Entropy & Moving-Wall Doppler Effect', 17, true),
    ('65d29b56-3011-1018-0000-000000000018', v_phy_sub, '[ADV ONLY] Electrostatic Cavity Fields, Potentiometer & Thin-Film Optics', 18, true),

    -- Chemistry (9 Core + 4 ADV_ONLY)
    ('65d29b56-3012-1001-0000-000000000001', v_chem_sub, 'Stoichiometry, Eudiometry & Quantum Radial Wavefunctions', 1, true),
    ('65d29b56-3012-1002-0000-000000000002', v_chem_sub, 'Chemical Bonding, MOT, Bent Rule & Periodicity', 2, true),
    ('65d29b56-3012-1003-0000-000000000003', v_chem_sub, 'Chemical Thermodynamics, Entropy & Colligative Solutions', 3, true),
    ('65d29b56-3012-1004-0000-000000000004', v_chem_sub, 'Chemical & Polyprotic Ionic Equilibrium, Buffers & Ksp', 4, true),
    ('65d29b56-3012-1005-0000-000000000005', v_chem_sub, 'Electrochemistry, Parallel/Sequential 1st-Order Kinetics', 5, true),
    ('65d29b56-3012-1006-0000-000000000006', v_chem_sub, 'd-f Block, Coordination Stereoisomerism & CFT Jahn-Teller', 6, true),
    ('65d29b56-3012-1007-0000-000000000007', v_chem_sub, 'GOC, Stereochemistry (R/S, Atropisomerism) & Hydrocarbons', 7, true),
    ('65d29b56-3012-1008-0000-000000000008', v_chem_sub, 'Functional Organic: Mechanisms, Aldol Cascades & Amines', 8, true),
    ('65d29b56-3012-1009-0000-000000000009', v_chem_sub, 'Biomolecules (Carbohydrates/Amino Acids) & Salt Analysis', 9, true),
    ('65d29b56-3012-1010-0000-000000000010', v_chem_sub, '[ADV ONLY] Real Gases (van der Waals) & Solid State Bravais Lattices', 10, true),
    ('65d29b56-3012-1011-0000-000000000011', v_chem_sub, '[ADV ONLY] Surface Chemistry, Hardy-Schulze & Concentration Cells', 11, true),
    ('65d29b56-3012-1012-0000-000000000012', v_chem_sub, '[ADV ONLY] Hydrogen, s-Block, Boranes, Silicates & Ellingham Metallurgy', 12, true),
    ('65d29b56-3012-1013-0000-000000000013', v_chem_sub, '[ADV ONLY] Polymers, Multi-Step Organic Synthesis & Kjeldahl Estimation', 13, true),

    -- Mathematics (8 Core + 2 ADV_ONLY)
    ('65d29b56-3013-1001-0000-000000000001', v_math_sub, 'Functions, Functional Equations & Inverse Trigonometry', 1, true),
    ('65d29b56-3013-1002-0000-000000000002', v_math_sub, 'Quadratic Location of Roots & Complex Number Geometry', 2, true),
    ('65d29b56-3013-1003-0000-000000000003', v_math_sub, 'Matrices, Rank, Adjoint Identities & Linear Systems', 3, true),
    ('65d29b56-3013-1004-0000-000000000004', v_math_sub, 'Combinatorics, Derangements, Binomial & Series Bounds', 4, true),
    ('65d29b56-3013-1005-0000-000000000005', v_math_sub, 'Differential Calculus: LMVT, Continuity Points & AOD Optima', 5, true),
    ('65d29b56-3013-1006-0000-000000000006', v_math_sub, 'Definite Integrals (Leibniz/King), Area & Differential Equations', 6, true),
    ('65d29b56-3013-1007-0000-000000000007', v_math_sub, 'Coordinate Geometry: Radical Axis, Conic Normals & Loci', 7, true),
    ('65d29b56-3013-1008-0000-000000000008', v_math_sub, 'Vectors, 3D Skew Lines, Trig Equations & Bayes Theorem', 8, true),
    ('65d29b56-3013-1009-0000-000000000009', v_math_sub, '[ADV ONLY] Box/Vector Triple Products & Family of 3D Planes', 9, true),
    ('65d29b56-3013-1010-0000-000000000010', v_math_sub, '[ADV ONLY] Argand Rotation, nth Roots of Unity & Cayley-Hamilton', 10, true);

    -- 3. Topics (41 IIT Master Modules — 1-to-1 aligned per chapter for deep multi-concept study + extra ADV subtopics)
    INSERT INTO learn_topics (id, chapter_id, title, description, order_index, is_active) VALUES
    -- Physics Topics (18)
    ('65d29b56-3011-2001-0000-000000000001', '65d29b56-3011-1001-0000-000000000001', 'IIT Dimensional Checks, Vernier/Screw Gauge & Least Count Errors', 'Multi-variable partial error bounds & optical/mechanical experimental setups.', 1, true),
    ('65d29b56-3011-2002-0000-000000000001', '65d29b56-3011-1002-0000-000000000002', 'Inclined Projectile Envelopes & Relative Velocity Separation', 'Parabolic safety envelopes, bouncing trajectories & river-boat vector optima.', 1, true),
    ('65d29b56-3011-2003-0000-000000000001', '65d29b56-3011-1003-0000-000000000003', 'Wedge-Block Non-Inertial FBDs & Two-Block Friction Transitions', 'Critical slipping thresholds, pseudo force balance & conic pendulum stability.', 1, true),
    ('65d29b56-3011-2004-0000-000000000001', '65d29b56-3011-1004-0000-000000000004', 'Work-Energy, Potential Well Turning Points & Oblique Collisions', 'Center-of-mass frame restitution, impulse vectors & variable constraint springs.', 1, true),
    ('65d29b56-3011-2005-0000-000000000001', '65d29b56-3011-1005-0000-000000000005', 'Fixed-Axis Rotation, Toppling Criteria & Rolling Energetics', 'MOI axis theorems, frictional impulse during collision & pure rolling thresholds.', 1, true),
    ('65d29b56-3011-2006-0000-000000000001', '65d29b56-3011-1006-0000-000000000006', 'Elliptical Transfer Orbits, Cavity Gravitation & Tunnel SHM', 'Angular momentum + energy conservation at apogee/perigee & shell flux theorems.', 1, true),
    ('65d29b56-3011-2007-0000-000000000001', '65d29b56-3011-1007-0000-000000000007', 'Rotating Cylinder Manometers, Viscosity Poiseuille & Surface Energy', 'Excess pressure inside coalescing drops, Jurin capillarity & Bernoulli efflux.', 1, true),
    ('65d29b56-3011-2008-0000-000000000001', '65d29b56-3011-1008-0000-000000000008', 'Radial Conduction, Wien-Stefan Radiation & Adiabatic Pistons', 'Bimetallic bending, mixture degrees of freedom & spring-piston PV cycles.', 1, true),
    ('65d29b56-3011-2009-0000-000000000001', '65d29b56-3011-1009-0000-000000000009', 'Coupled Spring SHM, Physical Pendulums & Standing Wave Nodes', 'Two-body reduced mass oscillation & open/closed resonance tube end corrections.', 1, true),
    ('65d29b56-3011-2010-0000-000000000001', '65d29b56-3011-1010-0000-000000000010', 'Conducting Shell Redistribution, Slab Capacitors & RC Networks', 'Self-energy vs interaction energy & multi-loop charging transients.', 1, true),
    ('65d29b56-3011-2011-0000-000000000001', '65d29b56-3011-1011-0000-000000000011', 'Infinite Ladder Grids, Non-Uniform Drift & Galvanometer Bridges', 'Cylindrical temperature-dependent resistance & multi-cell nodal equivalence.', 1, true),
    ('65d29b56-3011-2012-0000-000000000001', '65d29b56-3011-1012-0000-000000000012', 'Ampere Cavity Fields, Cycloidal E×B Drift & Dipole Precession', 'Magnetic force on arbitrary wire arcs & angular deflection in crossed fields.', 1, true),
    ('65d29b56-3011-2013-0000-000000000001', '65d29b56-3011-1013-0000-000000000013', 'Rolling Rod Terminal EMF, Mutual Coupling & Sharpness Q-Factor', 'Time-varying B-field conservative vs non-conservative induced E loops & phasors.', 1, true),
    ('65d29b56-3011-2014-0000-000000000001', '65d29b56-3011-1014-0000-000000000014', 'Variable Refractive Index Paths, Silvered Prisms & Lloyd Mirror', 'Integration Snell trajectories, equivalent mirror combinations & oblique YDSE.', 1, true),
    ('65d29b56-3011-2015-0000-000000000001', '65d29b56-3011-1015-0000-000000000015', 'Recoil Photons, Moseley X-Ray Series & Parallel Nuclear Decay', 'Conservation of momentum during atomic de-excitation & radioactive growth.', 1, true),
    ('65d29b56-3011-2016-0000-000000000001', '65d29b56-3011-1016-0000-000000000016', '[ADV ONLY] ICOR Velocity Field, Angular Impulse & Rocket Thrust', 'Instantaneous axis acceleration, sliding-to-rolling transition & variable mass.', 1, true),
    ('65d29b56-3011-2017-0000-000000000001', '65d29b56-3011-1017-0000-000000000017', '[ADV ONLY] Carnot Reversibility, ΔS Cycles & Doppler Beat Frequency', 'Polytropic molar heat capacities, irreversible ΔS & moving-reflector beats.', 1, true),
    ('65d29b56-3011-2018-0000-000000000001', '65d29b56-3011-1018-0000-000000000018', '[ADV ONLY] Cavity Vector Superposition, Potentiometer & Thin-Film', 'Dielectric force pulling, potentiometer null shifts & thin-film phase changes.', 1, true),

    -- Chemistry Topics (13)
    ('65d29b56-3012-2001-0000-000000000001', '65d29b56-3012-1001-0000-000000000001', 'Oleum Back-Titration, Eudiometry & Schrodinger Radial Nodes', 'Hydrogen-like Psi(r) nodal spheres & multi-step iodometric equivalents.', 1, true),
    ('65d29b56-3012-2002-0000-000000000001', '65d29b56-3012-1002-0000-000000000002', 'Bent Rule, Drago Molecules, s-p Mixing & MOT Bond Order', 'Berry pseudorotation, hypervalent bonding & dipole vector cancellations.', 1, true),
    ('65d29b56-3012-2003-0000-000000000001', '65d29b56-3012-1003-0000-000000000003', 'Kirchhoff Enthalpy, Adiabatic Irreversible Work & Azeotropes', 'Phase diagrams, cryoscopic anomalies & ΔS_universe feasibility checks.', 1, true),
    ('65d29b56-3012-2004-0000-000000000001', '65d29b56-3012-1004-0000-000000000004', 'Titration Curves, Amphiprotic pH & Selective Sulphide Precipitation', 'Polyprotic H3PO4 species distribution & simultaneous Ksp equilibria.', 1, true),
    ('65d29b56-3012-2005-0000-000000000001', '65d29b56-3012-1005-0000-000000000005', 'Kohlrausch Limit, Conductometric Curves & Reversible Kinetics', 'Opposing/parallel first-order rate ratios & steady-state approximation.', 1, true),
    ('65d29b56-3012-2006-0000-000000000001', '65d29b56-3012-1006-0000-000000000006', 'Geometrical/Optical Isomers, Jahn-Teller Distortion & CFT Spin', 'Co(III) ammine stereochemistry, Latimer diagrams & pi-acid carbonyls.', 1, true),
    ('65d29b56-3012-2007-0000-000000000001', '65d29b56-3012-1007-0000-000000000007', 'Bredt Rule, Ortho Effect, Atropisomerism & Peroxide Regioselectivity', 'Anti-aromatic vs homo-aromatic ions & asymmetric alkene stereoselectivity.', 1, true),
    ('65d29b56-3012-2008-0000-000000000001', '65d29b56-3012-1008-0000-000000000008', 'Crossed Aldol-Cannizzaro, Pinacol, Beckmann & Diazonium Coupling', 'Neighboring group participation (NGP) retention & stereospecific E2.', 1, true),
    ('65d29b56-3012-2009-0000-000000000001', '65d29b56-3012-1009-0000-000000000009', 'Anomeric Mutarotation, Isoelectric Peptides & Group IV Cation Tests', 'Osazone identity, Tollen positive sugars & wet qualitative precipitates.', 1, true),
    ('65d29b56-3012-2010-0000-000000000001', '65d29b56-3012-1010-0000-000000000010', '[ADV ONLY] Van der Waals Critical Curves & FCC/BCC Crystal Defects', 'Compressibility Z vs P virial slopes, Schottky/Frenkel & ionic radius ratios.', 1, true),
    ('65d29b56-3012-2011-0000-000000000001', '65d29b56-3012-1011-0000-000000000011', '[ADV ONLY] Freundlich Slope, Peptization & Concentration Cells', 'Calomel/quinhydrone half-cells, dE°/dT Gibbs-Helmholtz & micelle CMC.', 1, true),
    ('65d29b56-3012-2012-0000-000000000001', '65d29b56-3012-1012-0000-000000000012', '[ADV ONLY] Borax/Diborane Back-Bonding, Silicates & Ellingham Curves', 'Hall-Heroult cryolite, MacArthur cyanide leaching & Zone Refining.', 1, true),
    ('65d29b56-3012-2013-0000-000000000001', '65d29b56-3012-1013-0000-000000000013', '[ADV ONLY] Nylon/Bakelite Polymerization & 6-Step Organic Roadmaps', 'Stereochemical inversion cascades, Victor Meyer & Dumas/Kjeldahl N%.', 1, true),

    -- Mathematics Topics (10)
    ('65d29b56-3013-2001-0000-000000000001', '65d29b56-3013-1001-0000-000000000001', 'Functional Equations, Periodic Composition & Inverse Trig Sum Bounds', 'Principal range transitions arcsin(sin x) & piecewise monotonicity traps.', 1, true),
    ('65d29b56-3013-2002-0000-000000000001', '65d29b56-3013-1002-0000-000000000002', 'Newton Quadratic Sums, Root Interval Traps & Apollonius Circle Loci', 'Symmetric root elimination & triangle inequality extrema in C.', 1, true),
    ('65d29b56-3013-2003-0000-000000000001', '65d29b56-3013-1003-0000-000000000003', 'Orthogonal Projections, Adj(Adj A) & Determinant Differentiation', 'Singular non-homogeneous systems & cyclic determinant factorization.', 1, true),
    ('65d29b56-3013-2004-0000-000000000001', '65d29b56-3013-1004-0000-000000000004', 'Inclusion-Exclusion Surjections, Multinomials & Cauchy-Schwarz Bounds', 'Alternating binomial convolution sums & telescopic inequalities.', 1, true),
    ('65d29b56-3013-2005-0000-000000000001', '65d29b56-3013-1005-0000-000000000005', 'Non-Differentiability Min-Max Branches & Rolle/LMVT Guarantees', 'Composite f(g(x)) differentiability exceptions & parametric tangent loci.', 1, true),
    ('65d29b56-3013-2006-0000-000000000001', '65d29b56-3013-1006-0000-000000000006', 'King-Leibniz Functional Integrals, Orthogonal Trajectories & Exact DEs', 'Integral bounds via Riemann sums & integrating factor inspection tricks.', 1, true),
    ('65d29b56-3013-2007-0000-000000000001', '65d29b56-3013-1007-0000-000000000007', 'Coaxial Circle Pencils, Conormal Parabola Points & Director Circles', 'Common tangents to ellipse-hyperbola & reflection focal properties.', 1, true),
    ('65d29b56-3013-2008-0000-000000000001', '65d29b56-3013-1008-0000-000000000008', '3D Shortest Distance, Trigonometric Solution Sets & Conditional Bayes', 'Tree probability cascades & parametric line intersections.', 1, true),
    ('65d29b56-3013-2009-0000-000000000001', '65d29b56-3013-1009-0000-000000000009', '[ADV ONLY] Scalar/Vector Triple Product & 3D Plane Intersections', 'Box product parallelepiped bounds, reciprocal vectors & plane family mirrors.', 1, true),
    ('65d29b56-3013-2010-0000-000000000001', '65d29b56-3013-1010-0000-000000000010', '[ADV ONLY] Argand Rotation Theorem, nth Roots & Cayley-Hamilton', 'Geometric triangle similarity in C & characteristic polynomial matrix powers.', 1, true);

    -- 4. Verified Video Lectures across all 41 IIT Modules
    INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index) VALUES
    -- Physics
    ('65d29b56-3011-3001-0000-000000000001', '65d29b56-3011-2001-0000-000000000001', 'VIDEO', 'JEE Adv Error Analysis, Vernier & Screw Gauge Mastery', 'https://www.youtube.com/watch?v=5rm-iI9Nqyo', true, 1),
    ('65d29b56-3011-3002-0000-000000000001', '65d29b56-3011-2002-0000-000000000001', 'VIDEO', 'Advanced Kinematics & Inclined Projectile Envelopes', 'https://www.youtube.com/watch?v=Tf_NDFEPiEQ', true, 1),
    ('65d29b56-3011-3003-0000-000000000001', '65d29b56-3011-2003-0000-000000000001', 'VIDEO', 'Wedge-Block Constraints, Pseudo Force & Friction', 'https://www.youtube.com/watch?v=sD2Bbz6a--c', false, 1),
    ('65d29b56-3011-3004-0000-000000000001', '65d29b56-3011-2004-0000-000000000001', 'VIDEO', 'Work-Energy Theorem & Oblique 2D Collisions', 'https://www.youtube.com/watch?v=oswh0W7uMGo', false, 1),
    ('65d29b56-3011-3005-0000-000000000001', '65d29b56-3011-2005-0000-000000000001', 'VIDEO', 'Rotational Dynamics & Angular Momentum Conservation', 'https://www.youtube.com/watch?v=gIDn8NW3N6M', false, 1),
    ('65d29b56-3011-3006-0000-000000000001', '65d29b56-3011-2006-0000-000000000001', 'VIDEO', 'Kepler Orbits, Shell Theorem & Binary Star Dynamics', 'https://www.youtube.com/watch?v=1FY5JGkhMkE', false, 1),
    ('65d29b56-3011-3007-0000-000000000001', '65d29b56-3011-2007-0000-000000000001', 'VIDEO', 'Fluid Dynamics, Viscosity & Surface Energy Cavities', 'https://www.youtube.com/watch?v=R8gN-kDi5E8', false, 1),
    ('65d29b56-3011-3008-0000-000000000001', '65d29b56-3011-2008-0000-000000000001', 'VIDEO', 'Conduction, Wien-Stefan Radiation & Adiabatic Pistons', 'https://www.youtube.com/watch?v=JVhYUndMXCE', false, 1),
    ('65d29b56-3011-3009-0000-000000000001', '65d29b56-3011-2009-0000-000000000001', 'VIDEO', 'Coupled SHM & Standing Waves Harmonics', 'https://www.youtube.com/watch?v=eL7s6QvvY7k', false, 1),
    ('65d29b56-3011-3010-0000-000000000001', '65d29b56-3011-2010-0000-000000000001', 'VIDEO', 'Electrostatic Shells, Dielectrics & Multi-Loop RC', 'https://www.youtube.com/watch?v=CAaMXcb18H0', false, 1),
    ('65d29b56-3011-3011-0000-000000000001', '65d29b56-3011-2011-0000-000000000001', 'VIDEO', 'Infinite Grid Symmetry & Electrical Bridges', 'https://www.youtube.com/watch?v=NYHf961Oem4', false, 1),
    ('65d29b56-3011-3012-0000-000000000001', '65d29b56-3011-2012-0000-000000000001', 'VIDEO', 'Biot-Savart Cavity B & Cycloidal E×B Motion', 'https://www.youtube.com/watch?v=f0Om2AnIY-8', false, 1),
    ('65d29b56-3011-3013-0000-000000000001', '65d29b56-3011-2013-0000-000000000001', 'VIDEO', 'Motional EMF, Mutual Coupling & AC Q-Factor', 'https://www.youtube.com/watch?v=KNvRJXil1Gg', false, 1),
    ('65d29b56-3011-3014-0000-000000000001', '65d29b56-3011-2014-0000-000000000001', 'VIDEO', 'Gradient Refractive Index & Oblique YDSE Wave Optics', 'https://www.youtube.com/watch?v=GQsJAssGVII', false, 1),
    ('65d29b56-3011-3015-0000-000000000001', '65d29b56-3011-2015-0000-000000000001', 'VIDEO', 'Recoil Photons, Moseley Law & Parallel Radioactivity', 'https://www.youtube.com/watch?v=uUpsZIcwgiY', false, 1),
    ('65d29b56-3011-3016-0000-000000000001', '65d29b56-3011-2016-0000-000000000001', 'VIDEO', '[ADV ONLY] ICOR, Angular Impulse & Rocket Thrust Masterclass', 'https://www.youtube.com/watch?v=j4j2w7xK-tU', true, 1),
    ('65d29b56-3011-3017-0000-000000000001', '65d29b56-3011-2017-0000-000000000001', 'VIDEO', '[ADV ONLY] Carnot Reversibility, Entropy & Moving-Wall Doppler', 'https://www.youtube.com/watch?v=qRNUZQlxXU0&t=5582s&end=7820s', true, 1),
    ('65d29b56-3011-3018-0000-000000000001', '65d29b56-3011-2018-0000-000000000001', 'VIDEO', '[ADV ONLY] Spherical Cavities, Potentiometer & Thin-Film Interference', 'https://www.youtube.com/watch?v=gs6_BHVZ7DI', true, 1),

    -- Chemistry
    ('65d29b56-3012-3001-0000-000000000001', '65d29b56-3012-2001-0000-000000000001', 'VIDEO', 'Oleum Eudiometry & Schrodinger Radial Wavefunctions', 'https://www.youtube.com/watch?v=1t9Dq4wyhBw', true, 1),
    ('65d29b56-3012-3002-0000-000000000001', '65d29b56-3012-2002-0000-000000000001', 'VIDEO', 'Bent Rule, Drago Rule & MOT Bond Strength', 'https://www.youtube.com/watch?v=qle-q0CxtJk', true, 1),
    ('65d29b56-3012-3003-0000-000000000001', '65d29b56-3012-2003-0000-000000000001', 'VIDEO', 'Kirchhoff Enthalpy & Non-Ideal Azeotrope Solutions', 'https://www.youtube.com/watch?v=NzB2YwNndZw', false, 1),
    ('65d29b56-3012-3004-0000-000000000001', '65d29b56-3012-2004-0000-000000000001', 'VIDEO', 'Polyprotic Buffers & Selective Ksp Precipitation', 'https://www.youtube.com/watch?v=A4Ab8xZmTU4', false, 1),
    ('65d29b56-3012-3005-0000-000000000001', '65d29b56-3012-2005-0000-000000000001', 'VIDEO', 'Kohlrausch Limit & Parallel/Sequential Kinetics', 'https://www.youtube.com/watch?v=etdTd4zscso', false, 1),
    ('65d29b56-3012-3006-0000-000000000001', '65d29b56-3012-2006-0000-000000000001', 'VIDEO', 'Coordination Isomerism, Jahn-Teller & Carbonyl Pi-Acids', 'https://www.youtube.com/watch?v=kb0bECblCKw', false, 1),
    ('65d29b56-3012-3007-0000-000000000001', '65d29b56-3012-2007-0000-000000000001', 'VIDEO', 'Bredt Rule, Atropisomerism & Peroxide Effects', 'https://www.youtube.com/watch?v=soIba7r34ZM', false, 1),
    ('65d29b56-3012-3008-0000-000000000001', '65d29b56-3012-2008-0000-000000000001', 'VIDEO', 'NGP Mechanisms, Pinacol, Beckmann & Aldol Cascades', 'https://www.youtube.com/watch?v=uxZlQlbrvmw', false, 1),
    ('65d29b56-3012-3009-0000-000000000001', '65d29b56-3012-2009-0000-000000000001', 'VIDEO', 'Mutarotation, Isoelectric Amino Acids & Salt Analysis', 'https://www.youtube.com/watch?v=lkAIoq7vN6o', false, 1),
    ('65d29b56-3012-3010-0000-000000000001', '65d29b56-3012-2010-0000-000000000001', 'VIDEO', '[ADV ONLY] Real Gases Virial Z & Bravais Crystal Lattices', 'https://www.youtube.com/watch?v=S7uLXHDTamo', true, 1),
    ('65d29b56-3012-3011-0000-000000000001', '65d29b56-3012-2011-0000-000000000001', 'VIDEO', '[ADV ONLY] Freundlich Isotherm, Colloids & Concentration Cells', 'https://www.youtube.com/watch?v=rlsq4cJn2DM', false, 1),
    ('65d29b56-3012-3012-0000-000000000001', '65d29b56-3012-2012-0000-000000000001', 'VIDEO', '[ADV ONLY] Boranes, Silicates & Ellingham Diagram Metallurgy', 'https://www.youtube.com/watch?v=Q2pJ8XH3R2E', true, 1),
    ('65d29b56-3012-3013-0000-000000000001', '65d29b56-3012-2013-0000-000000000001', 'VIDEO', '[ADV ONLY] Nylon/Bakelite Polymers & Multi-Step Synthesis', 'https://www.youtube.com/watch?v=2GT9GM7k9_k', false, 1),

    -- Mathematics
    ('65d29b56-3013-3001-0000-000000000001', '65d29b56-3013-2001-0000-000000000001', 'VIDEO', 'Functional Equations & Inverse Trigonometric Sums', 'https://www.youtube.com/watch?v=zyFucmwc2gY', true, 1),
    ('65d29b56-3013-3002-0000-000000000001', '65d29b56-3013-2002-0000-000000000001', 'VIDEO', 'Location of Roots & Apollonius Complex Geometry', 'https://www.youtube.com/watch?v=4VXUlNRlT3c', true, 1),
    ('65d29b56-3013-3003-0000-000000000001', '65d29b56-3013-2003-0000-000000000001', 'VIDEO', 'Orthogonal Projections, Adjoint & System Consistency', 'https://www.youtube.com/watch?v=QRblOWCxDdg', false, 1),
    ('65d29b56-3013-3004-0000-000000000001', '65d29b56-3013-2004-0000-000000000001', 'VIDEO', 'Inclusion-Exclusion Surjections & Alternating Binomials', 'https://www.youtube.com/watch?v=7tu6_GH5qAw', false, 1),
    ('65d29b56-3013-3005-0000-000000000001', '65d29b56-3013-2005-0000-000000000001', 'VIDEO', 'Continuity Points, Differentiability & LMVT Proofs', 'https://www.youtube.com/watch?v=cnpv-t2DGiw', false, 1),
    ('65d29b56-3013-3006-0000-000000000001', '65d29b56-3013-2006-0000-000000000001', 'VIDEO', 'Newton-Leibniz Functional Integrals & Orthogonal DEs', 'https://www.youtube.com/watch?v=yY2oUKVAkdY', false, 1),
    ('65d29b56-3013-3007-0000-000000000001', '65d29b56-3013-2007-0000-000000000001', 'VIDEO', 'Coaxial Circle Pencils & Conormal Conic Chords', 'https://www.youtube.com/watch?v=5w2tWzcsiy4', false, 1),
    ('65d29b56-3013-3008-0000-000000000001', '65d29b56-3013-2008-0000-000000000001', 'VIDEO', '3D Skew Line Distance, Trig Bounds & Conditional Bayes', 'https://www.youtube.com/watch?v=sNG2FVZi5d8', false, 1),
    ('65d29b56-3013-3009-0000-000000000001', '65d29b56-3013-2009-0000-000000000001', 'VIDEO', '[ADV ONLY] Box/Vector Triple Product & 3D Family of Planes', 'https://www.youtube.com/watch?v=iTV5LP5j17s', true, 1),
    ('65d29b56-3013-3010-0000-000000000001', '65d29b56-3013-2010-0000-000000000001', 'VIDEO', '[ADV ONLY] Argand Rotation, nth Roots & Cayley-Hamilton', 'https://www.youtube.com/watch?v=4VXUlNRlT3c&t=2700s&end=5600s', true, 1);

    -- 5. Full Chapter Master Notes PDFs for all 41 JEE Advanced Chapters
    INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
    SELECT
        ('65d29b56-3019-4000-8000-' || LPAD(ROW_NUMBER() OVER (ORDER BY ch.id)::text, 12, '0'))::uuid,
        t.id,
        'NOTES_PDF',
        'JEE Advanced IIT Master Notes: ' || ch.title || ' (Multi-Concept Derivations + MSQ Traps PDF)',
        '/api/v1/learn/content/chapters/' || ch.id || '/notes-pdf',
        true,
        2
    FROM learn_chapters ch
    JOIN LATERAL (
        SELECT id FROM learn_topics lt WHERE lt.chapter_id = ch.id ORDER BY lt.order_index ASC LIMIT 1
    ) t ON true
    WHERE ch.id::text LIKE '65d29b56-301%';
END $$;
