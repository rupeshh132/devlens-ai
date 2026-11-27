import type { Chapter } from './curriculumData';

/**
 * Synchronized Competitive Exam Curricula:
 * 1. JEE Mains (NTA Rationalized 2025/2026 Syllabus)
 * 2. JEE Advanced (IIT Official Syllabus incl. ADV_ONLY modules)
 * 3. NEET UG (NMC UGMEB 79-Chapter Synchronized Syllabus across Phy, Chem, Bot, Zoo)
 */

// ─────────────────────────────────────────────────────────────────────────────
// 1. JEE MAINS (NTA RATIONALIZED SYLLABUS — 75 COMPULSORY Qs / 300 MARKS)
// ─────────────────────────────────────────────────────────────────────────────
export const JEE_MAINS_CURRICULUM: Record<string, Chapter[]> = {
  phy: [
    {
      id: 'jm-phy-ch1',
      title: 'Units, Measurements & Experimental Skills (Unit 20)',
      syllabusTag: 'NTA_SYNCED',
      classSource: '11 & 12 Bridge',
      topics: [
        { id: 'jm-p1-t1', title: 'SI Units, Dimensional Analysis & Limiting Error Propagation' },
        { id: 'jm-p1-t2', title: 'Vernier Callipers, Screw Gauge & Least Count Numerics' },
        { id: 'jm-p1-t3', title: 'Meter Bridge, Optical Bench, Resonance Tube & Ohm’s Law Setup' }
      ]
    },
    {
      id: 'jm-phy-ch2',
      title: 'Kinematics (1D Motion, Projectile & Relative Velocity)',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'jm-p2-t1', title: 'Calculus Kinematics (v = dx/dt, a = v dv/dx) & Motion Graphs' },
        { id: 'jm-p2-t2', title: 'Projectile on Horizontal & Inclined Planes' },
        { id: 'jm-p2-t3', title: 'Relative Velocity (River-Boat, Rain-Man & Closest Approach)' }
      ]
    },
    {
      id: 'jm-phy-ch3',
      title: 'Laws of Motion, Friction & Circular Dynamics',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'jm-p3-t1', title: 'Constraint Motion, Pulleys, Wedge-Block & Pseudo Force FBDs' },
        { id: 'jm-p3-t2', title: 'Static & Kinetic Friction on Inclines and Two-Block Systems' },
        { id: 'jm-p3-t3', title: 'Centripetal Force, Banking of Roads & Conical Pendulum' }
      ]
    },
    {
      id: 'jm-phy-ch4',
      title: 'Work, Energy, Power & Centre of Mass (Collisions)',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'jm-p4-t1', title: 'Work-Energy Theorem, Conservative Forces & Potential Well Graphs' },
        { id: 'jm-p4-t2', title: 'Vertical Circular Motion (String Tension & Loop-the-Loop)' },
        { id: 'jm-p4-t3', title: 'Centre of Mass, Momentum Conservation & 1D/2D Collisions (e)' }
      ]
    },
    {
      id: 'jm-phy-ch5',
      title: 'Rotational Motion & Moment of Inertia',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'jm-p5-t1', title: 'Moment of Inertia, Parallel & Perpendicular Axis Theorems' },
        { id: 'jm-p5-t2', title: 'Torque, Equilibrium, Fixed-Axis Rotation & Toppling Conditions' },
        { id: 'jm-p5-t3', title: 'Pure Rolling Motion, Instantaneous Axis & Angular Momentum Conservation' }
      ]
    },
    {
      id: 'jm-phy-ch6',
      title: 'Gravitation & Orbital Mechanics',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'jm-p6-t1', title: 'Gravitational Field & Potential Due to Shell, Sphere and Ring' },
        { id: 'jm-p6-t2', title: 'Variation of g, Escape Velocity & Satellite Energy (Kepler’s Laws)' }
      ]
    },
    {
      id: 'jm-phy-ch7',
      title: 'Properties of Solids & Fluids (Viscosity, Surface Tension)',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'jm-p7-t1', title: 'Elasticity, Stress-Strain Curve & Thermal Stress in Rods' },
        { id: 'jm-p7-t2', title: 'Hydrostatics, Archimedes Principle & Bernoulli’s Theorem (Torricelli)' },
        { id: 'jm-p7-t3', title: 'Viscosity (Stokes’ Law), Surface Tension, Excess Pressure & Capillarity' }
      ]
    },
    {
      id: 'jm-phy-ch8',
      title: 'Thermal Physics, Thermodynamics & KTG (Carnot Excluded)',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'jm-p8-t1', title: 'Thermal Expansion, Calorimetry, Conduction & Stefan’s / Wien’s Laws' },
        { id: 'jm-p8-t2', title: 'Kinetic Theory of Gases: RMS Speed, Degrees of Freedom & Equipartition' },
        { id: 'jm-p8-t3', title: 'First Law of Thermodynamics, Molar Heat Capacities & Cyclic Indicator Graphs' }
      ]
    },
    {
      id: 'jm-phy-ch9',
      title: 'Oscillations (SHM) & Mechanical Waves (No Doppler Sound)',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'jm-p9-t1', title: 'Simple Harmonic Motion: Phase, Energy & Spring-Block Combinations' },
        { id: 'jm-p9-t2', title: 'Progressive Waves, Standing Waves on Strings & Organ Pipes (Beats)' }
      ]
    },
    {
      id: 'jm-phy-ch10',
      title: 'Electrostatics, Gauss Law & Capacitors',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 12',
      topics: [
        { id: 'jm-p10-t1', title: 'Electric Field, Dipole Equilibrium & Gauss’s Law Flux Problems' },
        { id: 'jm-p10-t2', title: 'Electrostatic Potential, Conductors, Earthing & Self Energy' },
        { id: 'jm-p10-t3', title: 'Capacitors with Dielectrics, Nodal Analysis & RC Charging Circuits' }
      ]
    },
    {
      id: 'jm-phy-ch11',
      title: 'Current Electricity & Electrical Instruments (No Potentiometer)',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 12',
      topics: [
        { id: 'jm-p11-t1', title: 'Drift Velocity, KCL/KVL, Symmetry Networks & Equivalent Cells' },
        { id: 'jm-p11-t2', title: 'Heating Effect, Wheatstone Bridge, Meter Bridge & Galvanometer Conversion' }
      ]
    },
    {
      id: 'jm-phy-ch12',
      title: 'Magnetic Effects of Current & Magnetism (No Cyclotron)',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 12',
      topics: [
        { id: 'jm-p12-t1', title: 'Biot-Savart Law (Arc, Wire, Solenoid) & Ampere’s Circuital Law' },
        { id: 'jm-p12-t2', title: 'Lorentz Force, Helical Paths & Magnetic Dipole Torque' },
        { id: 'jm-p12-t3', title: 'Dia, Para & Ferromagnetic Materials & Hysteresis Properties' }
      ]
    },
    {
      id: 'jm-phy-ch13',
      title: 'Electromagnetic Induction, Alternating Current & EM Waves',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 12',
      topics: [
        { id: 'jm-p13-t1', title: 'Faraday & Lenz Law, Motional EMF & Induced Electric Field' },
        { id: 'jm-p13-t2', title: 'Self/Mutual Inductance, LR Transients & Transformer Efficiency' },
        { id: 'jm-p13-t3', title: 'RMS/Average AC, Series LCR Resonance, Power Factor & EM Wave Spectrum' }
      ]
    },
    {
      id: 'jm-phy-ch14',
      title: 'Ray Optics & Wave Optics (YDSE & Diffraction)',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 12',
      topics: [
        { id: 'jm-p14-t1', title: 'Plane & Spherical Mirrors, TIR, Prisms & Dispersion Numericals' },
        { id: 'jm-p14-t2', title: 'Lens Maker’s Formula, Silvered Lenses & Microscopes/Telescopes' },
        { id: 'jm-p14-t3', title: 'YDSE Interference (Slab Shift), Single-Slit Diffraction & Polarisation' }
      ]
    },
    {
      id: 'jm-phy-ch15',
      title: 'Modern Physics (Dual Nature, Atoms, Nuclei) & Semiconductors',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 12',
      topics: [
        { id: 'jm-p15-t1', title: 'Photoelectric Effect, Photon Momentum & de Broglie Wavelength' },
        { id: 'jm-p15-t2', title: 'Bohr Model Hydrogen Spectra, X-Rays & Nuclear Binding Energy / Q-Value' },
        { id: 'jm-p15-t3', title: 'p-n Junction, Zener Diode Voltage Regulator & Logic Gates (NAND/NOR)' }
      ]
    }
  ],

  chem: [
    {
      id: 'jm-chem-ch1',
      title: 'Mole Concept, Stoichiometry & Atomic Structure',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'jm-c1-t1', title: 'Molarity, Molality, Redox Titration & Limiting Reagent' },
        { id: 'jm-c1-t2', title: 'Bohr’s Model, de Broglie, Quantum Numbers & Radial Nodes (Ψ²)' }
      ]
    },
    {
      id: 'jm-chem-ch2',
      title: 'Chemical Bonding, MOT & Periodic Trends',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'jm-c2-t1', title: 'Periodic Trends: IE, Electron Gain Enthalpy & Diagonal Relationships' },
        { id: 'jm-c2-t2', title: 'VSEPR Shapes, Hybridization, Dipole Moment & Fajan’s Rules' },
        { id: 'jm-c2-t3', title: 'Molecular Orbital Theory (B₂ to Ne₂), Bond Order & H-Bonding' }
      ]
    },
    {
      id: 'jm-chem-ch3',
      title: 'Chemical Thermodynamics & Solutions',
      syllabusTag: 'NTA_SYNCED',
      classSource: '11 & 12 Bridge',
      topics: [
        { id: 'jm-c3-t1', title: 'Enthalpy, Hess’s Law, Born-Haber Cycle & Gibbs Free Energy (ΔG)' },
        { id: 'jm-c3-t2', title: 'Raoult’s Law, Colligative Properties & Van’t Hoff Factor (i)' }
      ]
    },
    {
      id: 'jm-chem-ch4',
      title: 'Chemical Equilibrium, Ionic Equilibrium & Redox',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'jm-c4-t1', title: 'Kp vs Kc, Degree of Dissociation & Le Chatelier’s Principle' },
        { id: 'jm-c4-t2', title: 'pH of Mixtures, Salt Hydrolysis, Buffers & Solubility Product (Ksp)' }
      ]
    },
    {
      id: 'jm-chem-ch5',
      title: 'Electrochemistry & Chemical Kinetics',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 12',
      topics: [
        { id: 'jm-c5-t1', title: 'Nernst Equation, ΔG° = -nFE°, Faraday’s Laws & Kohlrausch Conductance' },
        { id: 'jm-c5-t2', title: 'Zero & First Order Integrated Laws, Half-Life & Arrhenius Equation' }
      ]
    },
    {
      id: 'jm-chem-ch6',
      title: 'Inorganic Chemistry: p-Block (13-18 Trends), d-f Block & Coordination',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 12',
      topics: [
        { id: 'jm-c6-t1', title: 'Group 13 to 18 Core Trends, Oxoacids & Inert Pair Effect (Trimmed NTA)' },
        { id: 'jm-c6-t2', title: 'd & f Block Properties, KMnO₄ / K₂Cr₂O₇ Oxidations & Lanthanide Contraction' },
        { id: 'jm-c6-t3', title: 'Coordination Compounds: IUPAC, Isomerism, VBT & Crystal Field Splitting (Δo)' }
      ]
    },
    {
      id: 'jm-chem-ch7',
      title: 'GOC, Isomerism & Hydrocarbons',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'jm-c7-t1', title: 'Inductive, Resonance, Hyperconjugation, Aromaticity & Acid-Base Strength' },
        { id: 'jm-c7-t2', title: 'Structural & Geometrical/Optical Isomerism (R/S, E/Z, Chiral Centres)' },
        { id: 'jm-c7-t3', title: 'Alkanes, Alkenes (Ozonolysis, Markovnikov) & Alkynes/Benzene EAS' }
      ]
    },
    {
      id: 'jm-chem-ch8',
      title: 'Functional Organic Chemistry (Haloalkanes to Amines)',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 12',
      topics: [
        { id: 'jm-c8-t1', title: 'SN1, SN2, E1, E2 Competition & Alcohols/Phenols/Ethers Reactions' },
        { id: 'jm-c8-t2', title: 'Aldehydes & Ketones: Aldol, Cannizzaro, Haloform, Wittig & Carboxylic Acids' },
        { id: 'jm-c8-t3', title: 'Amines Basicity Orders, Hoffmann Bromamide, Gabriel Phthalimide & Diazonium Salts' }
      ]
    },
    {
      id: 'jm-chem-ch9',
      title: 'Biomolecules & Principles Related to Practical Chemistry',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 12',
      topics: [
        { id: 'jm-c9-t1', title: 'Carbohydrates (Glucose/Sucrose), Amino Acids (pI), Proteins & Nucleic Acids' },
        { id: 'jm-c9-t2', title: 'Qualitative Salt Analysis (Group Cations/Anions) & Organic Functional Tests' }
      ]
    }
  ],

  math: [
    {
      id: 'jm-math-ch1',
      title: 'Sets, Relations, Functions & Inverse Trigonometry',
      syllabusTag: 'NTA_SYNCED',
      classSource: '11 & 12 Bridge',
      topics: [
        { id: 'jm-m1-t1', title: 'Equivalence Relations, Domain-Range, Periodic & Composite Functions' },
        { id: 'jm-m1-t2', title: 'Inverse Trigonometric Principal Branches & Telescoping Series' }
      ]
    },
    {
      id: 'jm-math-ch2',
      title: 'Complex Numbers & Quadratic Equations',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'jm-m2-t1', title: 'Location of Roots, Newton’s Identities & Common Roots in Quadratics' },
        { id: 'jm-m2-t2', title: 'Modulus-Argument, De Moivre’s Theorem, Cube Roots & Argand Locus' }
      ]
    },
    {
      id: 'jm-math-ch3',
      title: 'Matrices, Determinants & System of Linear Equations',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 12',
      topics: [
        { id: 'jm-m3-t1', title: 'Symmetric, Orthogonal, Adjoint & Matrix Inverse Identities' },
        { id: 'jm-m3-t2', title: 'Determinant Expansion, Cramer’s Rule & Consistency of Linear Systems' }
      ]
    },
    {
      id: 'jm-math-ch4',
      title: 'Permutations, Combinations, Binomial & Sequences',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'jm-m4-t1', title: 'P&C: Multinomial Theorem, Derangements & Geometrical Selections' },
        { id: 'jm-m4-t2', title: 'Binomial Theorem: General/Greatest Term & Remainder Tricks' },
        { id: 'jm-m4-t3', title: 'AP, GP, AGP, AM-GM Inequality & Method of Differences Series' }
      ]
    },
    {
      id: 'jm-math-ch5',
      title: 'Differential Calculus: Limits, Continuity, AOD & Functions',
      syllabusTag: 'NTA_SYNCED',
      classSource: '11 & 12 Bridge',
      topics: [
        { id: 'jm-m5-t1', title: 'Indeterminate Forms (1^∞, Expansion Series) & L’Hôpital Shortcuts' },
        { id: 'jm-m5-t2', title: 'Continuity, Differentiability Checks & Functional Equations' },
        { id: 'jm-m5-t3', title: 'Application of Derivatives: Tangents, Monotonicity & Maxima-Minima' }
      ]
    },
    {
      id: 'jm-math-ch6',
      title: 'Integral Calculus: Indefinite, Definite, Area & Differential Eq.',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 12',
      topics: [
        { id: 'jm-m6-t1', title: 'Integration by Substitution, Parts & Special Algebraic Forms' },
        { id: 'jm-m6-t2', title: 'King/Queen Definite Integral Properties, Leibniz Rule & Area Under Curves' },
        { id: 'jm-m6-t3', title: 'Differential Equations: Variable Separable, Homogeneous & Bernoulli Form' }
      ]
    },
    {
      id: 'jm-math-ch7',
      title: 'Coordinate Geometry: Straight Lines, Circles & Conics',
      syllabusTag: 'NTA_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'jm-m7-t1', title: 'Centres of Triangle, Family of Lines & Circle Chord/Radical Axis' },
        { id: 'jm-m7-t2', title: 'Parabola, Ellipse & Hyperbola: Tangents, Normals & Focal Chords' }
      ]
    },
    {
      id: 'jm-math-ch8',
      title: 'Vectors, 3D Geometry (Lines Focus — Planes Excluded), Trig, Stats & Prob.',
      syllabusTag: 'NTA_SYNCED',
      classSource: '11 & 12 Bridge',
      topics: [
        { id: 'jm-m8-t1', title: 'Dot & Cross Products, Skew Lines Shortest Distance & Foot of Perpendicular' },
        { id: 'jm-m8-t2', title: 'Trigonometric Equations, Mean/Variance Formulas & Bayes Theorem' }
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. JEE ADVANCED (IIT OFFICIAL SYLLABUS — INCLUDES ADV_ONLY RETAINED MODULES)
// ─────────────────────────────────────────────────────────────────────────────
export const JEE_ADVANCED_CURRICULUM: Record<string, Chapter[]> = {
  phy: [
    ...JEE_MAINS_CURRICULUM.phy,
    {
      id: 'ja-phy-adv1',
      title: 'Advanced Mechanics, Variable Mass & Multi-Body Constraints (IIT Exclusive)',
      syllabusTag: 'ADV_ONLY',
      classSource: 'Class 11',
      topics: [
        { id: 'ja-p-adv1-t1', title: 'Instantaneous Centre of Rotation (ICOR), Rolling + Slipping & Angular Impulse' },
        { id: 'ja-p-adv1-t2', title: 'Rocket Propulsion, Variable-Mass Systems & Center-of-Mass Frame Collisions' }
      ]
    },
    {
      id: 'ja-phy-adv2',
      title: 'Carnot Engine, Entropy, Doppler Effect & Acoustic Beats (IIT Retained)',
      syllabusTag: 'ADV_ONLY',
      classSource: 'Class 11',
      topics: [
        { id: 'ja-p-adv2-t1', title: 'Carnot Efficiency, Entropy Changes & Polytropic Processes (PVⁿ = C)' },
        { id: 'ja-p-adv2-t2', title: 'Doppler Effect in Sound (Moving Wall/Observer) & Coupled String Harmonics' }
      ]
    },
    {
      id: 'ja-phy-adv3',
      title: 'Gauss Boundary Conditions, Potentiometer & Advanced Optics (IIT Retained)',
      syllabusTag: 'ADV_ONLY',
      classSource: 'Class 12',
      topics: [
        { id: 'ja-p-adv3-t1', title: 'Electrostatic Pressure, Spherical Cavity Fields & RC-LC-LR Coupled Circuits' },
        { id: 'ja-p-adv3-t2', title: 'Potentiometer Error Analysis, Resolving Power & Multi-Slit Thin-Film Interference' }
      ]
    }
  ],

  chem: [
    ...JEE_MAINS_CURRICULUM.chem,
    {
      id: 'ja-chem-adv1',
      title: 'States of Matter (Real Gases) & Solid State Crystallography (ADV ONLY)',
      syllabusTag: 'ADV_ONLY',
      classSource: 'Class 11 & 12',
      topics: [
        { id: 'ja-c-adv1-t1', title: 'van der Waals Equation, Compressibility Factor (Z) & Critical Constants' },
        { id: 'ja-c-adv1-t2', title: 'Bravais Lattices, Packing Fraction, Voids (Octahedral/Tetrahedral) & Defects' }
      ]
    },
    {
      id: 'ja-chem-adv2',
      title: 'Surface Chemistry & Electrochemistry Batteries/Corrosion (ADV ONLY)',
      syllabusTag: 'ADV_ONLY',
      classSource: 'Class 12',
      topics: [
        { id: 'ja-c-adv2-t1', title: 'Freundlich Adsorption Isotherm, Colloids, Hardy-Schulze Rule & Zeta Potential' },
        { id: 'ja-c-adv2-t2', title: 'Concentration Cells, Potentiometric Titrations & Thermodynamics of Cells' }
      ]
    },
    {
      id: 'ja-chem-adv3',
      title: 'Hydrogen, s-Block, Metallurgy & Full p-Block Anomalies (ADV ONLY)',
      syllabusTag: 'ADV_ONLY',
      classSource: 'Class 11 & 12',
      topics: [
        { id: 'ja-c-adv3-t1', title: 'Alkali/Alkaline Earth Compounds, Boranes, Silicates & Interhalogens' },
        { id: 'ja-c-adv3-t2', title: 'Ellingham Diagrams, Froth Flotation, Cyanide Extraction & Zone Refining' }
      ]
    },
    {
      id: 'ja-chem-adv4',
      title: 'Polymers, Qualitative Organic & Multi-Step Synthesis (ADV ONLY)',
      syllabusTag: 'ADV_ONLY',
      classSource: 'Class 12',
      topics: [
        { id: 'ja-c-adv4-t1', title: 'Nylon-6,6, Bakelite, Vulcanized Rubber & Biodegradable Polymers' },
        { id: 'ja-c-adv4-t2', title: 'Pericyclic / Rearrangement Cascades, Stereochemical Inversion & Kjeldahl Estimation' }
      ]
    }
  ],

  math: [
    ...JEE_MAINS_CURRICULUM.math,
    {
      id: 'ja-math-adv1',
      title: 'Scalar/Vector Triple Products & 3D Planes Family (ADV ONLY)',
      syllabusTag: 'ADV_ONLY',
      classSource: 'Class 12',
      topics: [
        { id: 'ja-m-adv1-t1', title: 'Box Product [a b c], Vector Triple Product a × (b × c) & Reciprocal Vectors' },
        { id: 'ja-m-adv1-t2', title: 'Equation of Planes, Line-Plane Intersection, Mirror Image & Coplanarity' }
      ]
    },
    {
      id: 'ja-math-adv2',
      title: 'Complex Geometry, Functional Integrals & IIT Matrices (ADV ONLY)',
      syllabusTag: 'ADV_ONLY',
      classSource: '11 & 12 Bridge',
      topics: [
        { id: 'ja-m-adv2-t1', title: 'Rotation Theorem in Argand Plane, nth Roots of Unity & Geometry of Circles' },
        { id: 'ja-m-adv2-t2', title: 'Cayley-Hamilton Theorem, Functional Differential Equations & Total Probability' }
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. NEET UG (NMC UGMEB 79-CHAPTER SYNCED SYLLABUS — 180 Qs / 720 MARKS)
// ─────────────────────────────────────────────────────────────────────────────
export const NEET_UG_CURRICULUM: Record<string, Chapter[]> = {
  bot: [
    {
      id: 'nu-bot-ch1',
      title: 'Diversity in Living World: Living World, Biological Classification & Plant Kingdom',
      syllabusTag: 'NMC_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'nu-b1-t1', title: 'Binomial Nomenclature, Taxonomic Hierarchy & Whittaker Five Kingdoms' },
        { id: 'nu-b1-t2', title: 'Monera, Protista, Fungi, Viruses/Viroids/Lichens (NCERT Line Traps)' },
        { id: 'nu-b1-t3', title: 'Algae (Chloro/Phaeo/Rhodophyceae), Bryophytes, Pteridophytes & Gymnosperms' }
      ]
    },
    {
      id: 'nu-bot-ch2',
      title: 'Morphology & Anatomy of Flowering Plants (Updated Plant Families)',
      syllabusTag: 'NMC_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'nu-b2-t1', title: 'Root/Stem/Leaf Modifications, Inflorescence & Aestivation/Placentation' },
        { id: 'nu-b2-t2', title: 'NMC Families: Malvaceae, Cruciferae, Leguminosae, Compositae & Gramineae' },
        { id: 'nu-b2-t3', title: 'Tissue Systems, Vascular Bundles & Dicot vs Monocot Root/Stem/Leaf Anatomy' }
      ]
    },
    {
      id: 'nu-bot-ch3',
      title: 'Cell: The Unit of Life & Cell Cycle and Cell Division',
      syllabusTag: 'NMC_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'nu-b3-t1', title: 'Fluid Mosaic Model, Endomembrane System (ER, Golgi, Lysosomes), Plastids & Nucleus' },
        { id: 'nu-b3-t2', title: 'Mitosis Phases & Meiosis I Prophase-I Substages (Chiasmata, Crossing Over)' }
      ]
    },
    {
      id: 'nu-bot-ch4',
      title: 'Plant Physiology (Photosynthesis, Respiration & PGR — Transport/Mineral Deleted)',
      syllabusTag: 'NMC_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'nu-b4-t1', title: 'Photosynthesis: Light Reaction (PS I/II, Chemiosmosis), C3 vs C4 & Photorespiration' },
        { id: 'nu-b4-t2', title: 'Respiration: Glycolysis, Link Reaction, Krebs Cycle, ETS ATP Yield & RQ' },
        { id: 'nu-b4-t3', title: 'Plant Growth Regulators (Auxin, GA, Cytokinin, Ethylene, ABA)' }
      ]
    },
    {
      id: 'nu-bot-ch5',
      title: 'Sexual Reproduction in Flowering Plants (Ch 1 Reproduction in Organisms Deleted)',
      syllabusTag: 'NMC_SYNCED',
      classSource: 'Class 12',
      topics: [
        { id: 'nu-b5-t1', title: 'Microsporogenesis, Megasporogenesis, Outbreeding Devices & Double Fertilisation' },
        { id: 'nu-b5-t2', title: 'Endosperm, Embryogeny, Apomixis & Polyembryony' }
      ]
    },
    {
      id: 'nu-bot-ch6',
      title: 'Genetics & Molecular Basis of Inheritance',
      syllabusTag: 'NMC_SYNCED',
      classSource: 'Class 12',
      topics: [
        { id: 'nu-b6-t1', title: 'Mendelian Crosses, Linkage Maps (Morgan), Pedigree & Chromosomal Disorders' },
        { id: 'nu-b6-t2', title: 'DNA Packaging, Meselson-Stahl, Transcription, Genetic Code, Lac Operon & HGP' }
      ]
    },
    {
      id: 'nu-bot-ch7',
      title: 'Ecology (Organisms, Populations, Ecosystem & Biodiversity — Env. Issues Deleted)',
      syllabusTag: 'NMC_SYNCED',
      classSource: 'Class 12',
      topics: [
        { id: 'nu-b7-t1', title: 'Population Interactions (Mutualism, Parasitism, Competition) & Growth Curves' },
        { id: 'nu-b7-t2', title: 'Productivity, Ecological Pyramids, Species-Area Relationship & Conservation' }
      ]
    }
  ],

  zoo: [
    {
      id: 'nu-zoo-ch1',
      title: 'Animal Kingdom & Structural Organisation (Cockroach + Frog Retained)',
      syllabusTag: 'NMC_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'nu-z1-t1', title: 'Phyla Classification (Porifera to Chordata): Examples, Symmetry & Coelom' },
        { id: 'nu-z1-t2', title: 'Animal Tissues, Cockroach (Periplaneta) & Frog (Rana tigrina) Morphology' }
      ]
    },
    {
      id: 'nu-zoo-ch2',
      title: 'Biomolecules & Enzymes',
      syllabusTag: 'NMC_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'nu-z2-t1', title: 'Amino Acids, Zwitterion, Protein Structures, Nucleotides & Secondary Metabolites' },
        { id: 'nu-z2-t2', title: 'Enzyme Kinetics, Competitive Inhibition (Km/Vmax) & Cofactors' }
      ]
    },
    {
      id: 'nu-zoo-ch3',
      title: 'Human Physiology I: Breathing & Body Fluids (Digestion & Absorption Deleted)',
      syllabusTag: 'NMC_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'nu-z3-t1', title: 'Respiratory Volumes/Capacities, Haemoglobin Dissociation Curve & Bohr Effect' },
        { id: 'nu-z3-t2', title: 'ABO/Rh Clotting Cascade, Cardiac Cycle, ECG P-QRS-T Waves & Double Circulation' }
      ]
    },
    {
      id: 'nu-zoo-ch4',
      title: 'Human Physiology II: Excretion, Locomotion, Neural & Endocrine Control',
      syllabusTag: 'NMC_SYNCED',
      classSource: 'Class 11',
      topics: [
        { id: 'nu-z4-t1', title: 'Nephron Counter-Current Mechanism, RAAS, Sarcomere Sliding Filament & Joints' },
        { id: 'nu-z4-t2', title: 'Action Potential Conduction, Brain Centres & Hypothalamus-Pituitary-Hormone Disorders' }
      ]
    },
    {
      id: 'nu-zoo-ch5',
      title: 'Human Reproduction, Reproductive Health & Evolution',
      syllabusTag: 'NMC_SYNCED',
      classSource: 'Class 12',
      topics: [
        { id: 'nu-z5-t1', title: 'Spermatogenesis, Oogenesis, Menstrual Hormone Peaks, Placenta & ART (IVF/GIFT)' },
        { id: 'nu-z5-t2', title: 'Miller Experiment, Adaptive Radiation, Hardy-Weinberg Principle & Human Evolution' }
      ]
    },
    {
      id: 'nu-zoo-ch6',
      title: 'Human Health, Microbes & Biotechnology Principles + Applications',
      syllabusTag: 'NMC_SYNCED',
      classSource: 'Class 12',
      topics: [
        { id: 'nu-z6-t1', title: 'Innate/Acquired Immunity, Antibodies, Malaria/AIDS/Cancer & Industrial Microbes' },
        { id: 'nu-z6-t2', title: 'Restriction Enzymes, pBR322, PCR, Gel Electrophoresis, Bt Cotton & ADA Gene Therapy' }
      ]
    }
  ],

  phy: JEE_MAINS_CURRICULUM.phy,
  chem: JEE_MAINS_CURRICULUM.chem
};
