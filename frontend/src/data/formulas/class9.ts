import type { FormulaItem } from './class12_stem';

export const CLASS_9_FORMULAS: FormulaItem[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 9: SCIENCE (PHYSICS, CHEMISTRY, BIOLOGY)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c9-sci-matter-01',
    classLevel: '9',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Matter in Our Surroundings',
    title: 'States of Matter, Phase Transitions, Latent Heat & SI Units',
    formula: "Core SI Units:\n  • Temperature: Kelvin (K) [T(K) = T(°C) + 273.15]\n  • Mass: Kilogram (kg) | Weight/Force: Newton (N)\n  • Density: kg/m³ | Volume: m³ (1 L = 10⁻³ m³ = 1000 cm³)\n  • Pressure: Pascal (Pa) [1 atm = 1.013 × 10⁵ Pa = 760 mm Hg]\nPhase Transitions & Latent Heat:\n  • Latent Heat of Fusion: Heat required to change 1 kg solid into liquid at atmospheric pressure at its melting point (Ice: 3.34 × 10⁵ J/kg)\n  • Latent Heat of Vaporisation: Heat required to change 1 kg liquid into vapour at atmospheric pressure at its boiling point (Water: 2.26 × 10⁶ J/kg)\n  • Evaporation Rate: Rate ∝ (Surface Area × Temperature × Wind Speed) / Humidity\n  • Sublimation (Solid ↔ Gas directly): Camphor, Naphthalene, Ammonium Chloride, Solid CO₂ (Dry Ice)\nModern States of Matter: Plasma (super-energetic ionised gas) & Bose-Einstein Condensate (BEC)",
    variables: "T = absolute temperature (K), Pa = Pascal (N/m²), atm = standard atmosphere",
    examTip: "Steam at 100 °C (373 K) produces more severe burns than boiling water at 100 °C because steam particles possess extra latent heat of vaporisation (2.26 × 10⁶ J/kg). Ice at 273 K cools drinks more effectively than water at 273 K due to latent heat of fusion absorption."
  },
  {
    id: 'c9-sci-01',
    classLevel: '9',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Motion',
    title: 'Three Equations of Motion & Uniform Circular Motion',
    formula: "Acceleration: a = (v - u) / t\nThree Kinematic Equations (Uniform Acceleration):\n  1) v = u + a t\n  2) s = u t + ½ a t²\n  3) v² = u² + 2 a s\nAverage Speed: Total distance / Total time\nAverage Velocity: Total displacement / Total time\nUniform Circular Motion Speed: v = (2 π r) / t",
    variables: "u = initial velocity (m/s), v = final velocity (m/s), a = uniform acceleration (m/s²), t = time interval (s), s = distance / displacement (m), r = radius of circular track (m)",
    examTip: "In uniform circular motion, speed is constant, but velocity continuously changes at every instant due to change in direction. Hence, uniform circular motion is an accelerated motion directed towards the centre (centripetal acceleration)."
  },
  {
    id: 'c9-sci-02',
    classLevel: '9',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Force and Laws of Motion',
    title: "Newton's Laws of Motion & Momentum Conservation",
    formula: "Momentum: p = m · v (Unit: kg·m/s)\nNewton's Second Law: F = m · a = m (v - u) / t\nNewton's Third Law: Action = -Reaction (F_AB = -F_BA)\nLaw of Conservation of Momentum (isolated system):\n  m₁ u₁ + m₂ u₂ = m₁ v₁ + m₂ v₂\nRecoil Velocity of Gun: v_recoil = - (m_bullet · v_bullet) / M_gun",
    variables: "m = mass (kg), v = velocity (m/s), F = external unbalanced force (Newtons, N), M_gun = mass of gun, m_bullet = mass of bullet",
    examTip: "Action and reaction forces are strictly equal in magnitude and opposite in direction, but they NEVER cancel each other out because they act on TWO DIFFERENT bodies."
  },
  {
    id: 'c9-sci-03',
    classLevel: '9',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Gravitation',
    title: 'Universal Law of Gravitation, Free Fall & Mass vs Weight',
    formula: "Universal Gravitational Law: F = G · (M · m) / d²\nGravitational Constant: G = 6.673 × 10⁻¹¹ N·m²/kg²\nAcceleration Due to Gravity: g = (G · M) / R² ≈ 9.8 m/s² (on Earth surface)\nFree Fall Equations (dropped from rest: u = 0, a = +g):\n  1) v = g t | 2) h = ½ g t² | 3) v² = 2 g h\nWeight of an Object: W = m · g (Unit: Newton, N)\nWeight on Moon: W_moon = ⅙ · W_earth",
    variables: "M = mass of celestial body, m = mass of object, R = radius of body, g = acceleration due to gravity, W = weight (N)",
    examTip: "Mass is the intrinsic measure of inertia and remains strictly constant everywhere in the universe (scalar, unit: kg). Weight is the gravitational force acting on it (W = mg), which varies with local gravity g (vector, unit: N)."
  },
  {
    id: 'c9-sci-04',
    classLevel: '9',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Gravitation & Floatation',
    title: "Thrust, Pressure, Archimedes' Principle & Relative Density",
    formula: "Pressure: P = Thrust / Area = F / A (Unit: Pascal, 1 Pa = 1 N/m²)\nBuoyant Force (Upthrust): F_b = V_displaced · ρ_fluid · g = Weight of fluid displaced\nArchimedes' Principle: When a body is immersed fully or partially in a fluid, it experiences an upward buoyant force equal to the weight of fluid displaced\nCondition of Sinking: ρ_solid > ρ_fluid\nCondition of Floating: ρ_solid ≤ ρ_fluid\nRelative Density: Relative Density = Density of substance / Density of water at 4 °C",
    variables: "Thrust = force perpendicular to surface (N), A = contact area (m²), ρ = density (kg/m³), Relative density is dimensionless (no units)",
    examTip: "Relative density has NO units because it is a pure ratio of two identical physical quantities (densities). If relative density > 1, the substance sinks in water; if < 1, it floats."
  },
  {
    id: 'c9-sci-05',
    classLevel: '9',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Work and Energy',
    title: 'Work Done, Kinetic Energy, Potential Energy & Power',
    formula: "Work Done: W = F · s = F s cosθ (1 Joule = 1 N · 1 m)\nKinetic Energy: E_k = ½ m v²\nGravitational Potential Energy: E_p = m · g · h\nLaw of Conservation of Energy: E_total = E_k + E_p = constant\nElectric Power: P = Work done / Time = W / t = E / t (Unit: Watt, 1 W = 1 J/s)\nCommercial Unit of Energy: 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ Joules",
    variables: "m = mass (kg), v = speed (m/s), g = 9.8 m/s², h = vertical height (m), P = power (Watts, W)",
    examTip: "Work done by a force is ZERO if the displacement is perpendicular to the force (θ = 90°, cos90° = 0). For example, work done by gravitational force on a satellite orbiting in a circular path is strictly zero."
  },
  {
    id: 'c9-sci-06',
    classLevel: '9',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Sound',
    title: 'Wave Velocity, Echo Conditions & SONAR Distance Calculation',
    formula: "Wave Speed Equation: v = λ / T = λ · ν (Speed = Wavelength × Frequency)\nEcho Condition:\n  Minimum time gap between direct and reflected sound = 0.1 s\n  Minimum distance to reflecting surface in air (v = 344 m/s at 22 °C): d_min = (v × t) / 2 = (344 × 0.1) / 2 = 17.2 metres\nSONAR Depth / Distance Equation:\n  Total round-trip distance: 2 d = v · t => d = (v · t) / 2",
    variables: "v = speed of sound (m/s), λ = wavelength (m), ν = frequency (Hertz, Hz), T = time period (s), d = depth or distance to underwater obstacle (m)",
    examTip: "In SONAR calculations, sound travels to the ocean floor and reflects back up. Always remember to divide the product (v · t) by 2 to determine the one-way depth d = (v · t) / 2."
  },
  {
    id: 'c9-sci-07',
    classLevel: '9',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Is Matter Around Us Pure',
    title: 'Solution Concentration (Mass & Volume Percentage)',
    formula: "Mass by Mass Percentage: % (w/w) = [Mass of Solute / Mass of Solution] × 100%\nMass by Volume Percentage: % (w/v) = [Mass of Solute / Volume of Solution] × 100%\nVolume by Volume Percentage: % (v/v) = [Volume of Solute / Volume of Solution] × 100%\nMass of Solution: Mass of Solution = Mass of Solute + Mass of Solvent",
    variables: "Solute = substance dissolved (minor component), Solvent = dissolving medium (major component, e.g. water)",
    examTip: "Examiner Trap: The denominator is ALWAYS the mass or volume of the SOLUTION (Solute + Solvent), NEVER just the mass of the solvent alone."
  },
  {
    id: 'c9-sci-08',
    classLevel: '9',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Atoms and Molecules',
    title: 'Laws of Chemical Combination, Molar Mass & Mole Concept',
    formula: "Law of Conservation of Mass: Mass of reactants = Mass of products in chemical reaction\nLaw of Constant Proportions: Elements are always present in definite proportions by mass (e.g., H₂O has H : O = 1 : 8 by mass)\nNumber of Moles: n = Given Mass (m) / Molar Mass (M) = Given Number of Particles (N) / Avogadro Number (N₀)\nAvogadro Constant: N₀ = 6.022 × 10²³ particles/mol\nMass of a Single Atom: m_atom = Molar Mass (g) / (6.022 × 10²³)",
    variables: "n = number of moles, m = mass in grams, M = molar mass in g/mol, N = count of atoms/molecules",
    examTip: "Atomic mass unit (1 u) is defined as exactly 1/12th the mass of one Carbon-12 atom. One mole of any substance contains exactly 6.022 × 10²³ representative particles."
  },
  {
    id: 'c9-sci-09',
    classLevel: '9',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Structure of the Atom',
    title: 'Bohr-Bury Electron Distribution, Isotopes & Isobars',
    formula: "Maximum Electrons in nth Shell: 2 n²\n  K Shell (n = 1): 2(1)² = 2 electrons\n  L Shell (n = 2): 2(2)² = 8 electrons\n  M Shell (n = 3): 2(3)² = 18 electrons (outermost capacity capped at 8 by octet rule)\n  N Shell (n = 4): 2(4)² = 32 electrons\nAtomic Number: Z = Number of Protons = Number of Electrons (in neutral atom)\nMass Number: A = Number of Protons (Z) + Number of Neutrons (N)\nAverage Atomic Mass of Isotope Mixture: A_avg = (A₁ × %₁) + (A₂ × %₂)",
    variables: "Z = atomic number, A = mass number, n = principal quantum shell number",
    examTip: "Isotopes have identical atomic number Z but different mass numbers A (same chemical properties, e.g., ³⁵Cl and ³⁷Cl in 3:1 ratio giving average atomic mass 35.5 u). Isobars have identical mass number A but different atomic numbers Z (different chemical elements, e.g., ⁴⁰Ar and ⁴⁰Ca)."
  },
  {
    id: 'c9-sci-10',
    classLevel: '9',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'The Fundamental Unit of Life & Tissues',
    title: 'Cell Organelles, Osmosis Behaviour & Tissue Functions',
    formula: "Osmosis Conditions:\n  1) Hypotonic Solution (Dilute exterior): Water enters cell via endosmosis -> Cell swells / becomes turgid\n  2) Isotonic Solution (Equal concentration): No net water movement -> Cell size remains unchanged\n  3) Hypertonic Solution (Concentrated exterior): Water leaves cell via exosmosis -> Cell shrinks / plasmolysis\nKey Functional Organelles:\n  - Mitochondria: Powerhouse of cell, site of ATP synthesis, possesses own DNA and ribosomes\n  - Lysosomes: 'Suicide bags', rich in hydrolytic digestive enzymes\n  - Ribosomes: Site of protein synthesis\n  - Chloroplasts: Site of photosynthesis (thylakoid, chlorophyll)\nPlant Vascular Tissues:\n  - Xylem: Unidirectional conduction of water and minerals (tracheids, vessels, parenchyma, fibres)\n  - Phloem: Bidirectional translocation of organic food / sugars (sieve tubes, companion cells, parenchyma, fibres)",
    variables: "ATP = Adenosine triphosphate; Endosmosis = inward osmotic water flow; Exosmosis = outward osmotic water flow",
    examTip: "Mitochondria and Chloroplasts are semi-autonomous organelles because they contain their own circular DNA and 70S ribosomes, enabling them to synthesize some of their own proteins independently."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 9: MATHEMATICS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c9-math-01',
    classLevel: '9',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Number Systems',
    title: 'Rationalisation of Surds & Laws of Real Exponents',
    formula: "Rationalisation of Monomial Surd: 1 / √a = √a / a\nRationalisation of Binomial Surd: 1 / (a + √b) = (a - √b) / (a² - b)\nRationalisation: 1 / (√a + √b) = (√a - √b) / (a - b)\nLaws of Exponents (for positive real base a, b and rational powers p, q):\n  1) a^p · a^q = a^(p + q)\n  2) (a^p)^q = a^(p · q)\n  3) a^p / a^q = a^(p - q)\n  4) a^p · b^p = (a · b)^p\n  5) a⁰ = 1 ; a⁻ᵖ = 1 / a^p ; a^(1/n) = ⁿ√a",
    variables: "a, b = positive real numbers; p, q = rational exponents",
    examTip: "To rationalise the denominator of a fraction containing (√a + √b), multiply both numerator and denominator by its conjugate radical expression (√a - √b) using the identity (x + y)(x - y) = x² - y²."
  },
  {
    id: 'c9-math-02',
    classLevel: '9',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Polynomials',
    title: 'Eight Essential Algebraic Identities & Factorisation Theorems',
    formula: "1) (x + y)² = x² + 2xy + y²\n2) (x - y)² = x² - 2xy + y²\n3) x² - y² = (x - y)(x + y)\n4) (x + a)(x + b) = x² + (a + b)x + ab\n5) (x + y + z)² = x² + y² + z² + 2xy + 2yz + 2zx\n6) (x + y)³ = x³ + y³ + 3xy(x + y)\n7) (x - y)³ = x³ - y³ - 3xy(x - y)\n8) x³ + y³ + z³ - 3xyz = (x + y + z)(x² + y² + z² - xy - yz - zx)\nConditional Identity: If x + y + z = 0, then x³ + y³ + z³ = 3xyz",
    variables: "x, y, z = real variables or numerical values",
    examTip: "Whenever an evaluation asks for the sum of three cubes (e.g., 28³ + (-15)³ + (-13)³), check the sum of bases first: 28 + (-15) + (-13) = 0. Since x + y + z = 0, the sum is immediately 3 · (28) · (-15) · (-13) without computing individual cubes."
  },
  {
    id: 'c9-math-03',
    classLevel: '9',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Coordinate Geometry',
    title: 'Cartesian Coordinate Plane, Abscissa, Ordinate & Signs',
    formula: "Coordinates of Origin: (0, 0)\nAbscissa = x-coordinate (perpendicular distance from y-axis)\nOrdinate = y-coordinate (perpendicular distance from x-axis)\nSigns in Four Quadrants:\n  Quadrant I: (+, +)\n  Quadrant II: (-, +)\n  Quadrant III: (-, -)\n  Quadrant IV: (+, -)\nAny point lying on the x-axis has form: (x, 0) [ordinate is 0]\nAny point lying on the y-axis has form: (0, y) [abscissa is 0]",
    variables: "x = horizontal coordinate, y = vertical coordinate",
    examTip: "The perpendicular distance of a point P(x, y) from the x-axis is strictly |y| (absolute value of ordinate). The perpendicular distance from the y-axis is strictly |x| (absolute value of abscissa)."
  },
  {
    id: 'c9-math-04',
    classLevel: '9',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Linear Equations in Two Variables',
    title: 'Standard Form, Solutions & Coordinate Axis Line Equations',
    formula: "Standard Form: ax + by + c = 0 (where a, b, c are real numbers and a² + b² ≠ 0)\nNumber of Solutions: A linear equation in two variables has infinitely many real solutions (pairs (x, y))\nEquation of the x-axis: y = 0\nEquation of the y-axis: x = 0\nLine parallel to x-axis: y = k (horizontal line at distance k)\nLine parallel to y-axis: x = k (vertical line at distance k)\nLine passing through origin: y = m x (constant term c = 0)",
    variables: "a, b = coefficients of x and y; c = constant term",
    examTip: "The graph of every linear equation in two variables ax + by + c = 0 is a geometrically straight line. Any point lying on the line is a solution, and every solution corresponds to a point on the line."
  },
  {
    id: 'c9-math-05',
    classLevel: '9',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Lines and Angles',
    title: 'Parallel Lines, Transversal Relations & Angle Sum Theorem',
    formula: "Vertically Opposite Angles: If two lines intersect, vertically opposite angles are equal\nTransversal across Parallel Lines (l || m):\n  1) Corresponding angles are equal (∠1 = ∠5)\n  2) Alternate interior angles are equal (∠3 = ∠5)\n  3) Co-interior angles are supplementary: ∠4 + ∠5 = 180°\nAngle Sum Property of Triangle: Sum of interior angles of a triangle is 180° (∠A + ∠B + ∠C = 180°)\nExterior Angle Theorem: An exterior angle of a triangle equals the sum of its two interior opposite angles: ∠ACD = ∠A + ∠B",
    variables: "Angles measured in degrees (°)",
    examTip: "If a ray stands on a line, the sum of two adjacent angles formed is 180° (Linear Pair Axiom). The bisectors of a pair of interior angles on the same side of a transversal to two parallel lines intersect at exactly 90°."
  },
  {
    id: 'c9-math-06',
    classLevel: '9',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Triangles (Congruence)',
    title: 'Triangle Congruence Criteria & Isosceles Properties',
    formula: "Criteria for Congruence of Triangles:\n  1) SAS: Two sides and included angle equal\n  2) ASA: Two angles and included side equal\n  3) AAS: Two angles and any corresponding non-included side equal\n  4) SSS: All three corresponding sides equal\n  5) RHS: Right angle, Hypotenuse and one side equal in right triangles\nIsosceles Triangle Theorems:\n  - Angles opposite to equal sides of an isosceles triangle are equal\n  - Sides opposite to equal angles of a triangle are equal\nEquilateral Triangle: All three angles are equal to 60°",
    variables: "CPCTC = Corresponding Parts of Congruent Triangles are Congruent",
    examTip: "SSA (Side-Side-Angle) and AAA (Angle-Angle-Angle) are NOT valid congruence criteria. AAA guarantees similarity, not congruence."
  },
  {
    id: 'c9-math-07',
    classLevel: '9',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Quadrilaterals',
    title: 'Parallelogram Theorems & The Mid-Point Theorem',
    formula: "Angle Sum of Quadrilateral: ∠A + ∠B + ∠C + ∠D = 360°\nParallelogram Properties:\n  - Opposite sides are equal (AB = CD, AD = BC)\n  - Opposite angles are equal (∠A = ∠C, ∠B = ∠D)\n  - Consecutive angles are supplementary (∠A + ∠B = 180°)\n  - Diagonals bisect each other (OA = OC, OB = OD)\nMid-Point Theorem:\n  The line segment joining the mid-points of two sides of a triangle is parallel to the third side and is half of it:\n  In ΔABC, if D and E are midpoints of AB and AC: DE || BC and DE = ½ BC\nConverse of Mid-Point Theorem:\n  Line drawn through midpoint of one side parallel to another side bisects the third side",
    variables: "D, E = midpoints of triangle sides",
    examTip: "The figure formed by joining the midpoints of the sides of any quadrilateral in order is always a PARALLELOGRAM. If the quadrilateral is a rectangle, the midpoint figure is a rhombus."
  },
  {
    id: 'c9-math-08',
    classLevel: '9',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Circles',
    title: 'Circle Theorems: Central Angle, Semicircle & Cyclic Quadrilateral',
    formula: "Theorem 1: The angle subtended by an arc at the centre is double the angle subtended by it at any point on the remaining part of the circle: ∠AOB = 2 · ∠APB\nTheorem 2: Angles in the same segment of a circle are equal\nTheorem 3: The angle subtended in a semicircle is a right angle: ∠in_semicircle = 90°\nCyclic Quadrilateral Theorems:\n  - The sum of either pair of opposite angles of a cyclic quadrilateral is 180°: ∠A + ∠C = 180° and ∠B + ∠D = 180°\n  - If an exterior angle of a cyclic quadrilateral is produced, it equals the interior opposite angle",
    variables: "O = centre of circle, A, B = arc endpoints, P = point on circumference",
    examTip: "A cyclic parallelogram is ALWAYS a rectangle because opposite angles are both equal (∠A = ∠C) and supplementary (∠A + ∠C = 180°), forcing each angle to be 90°."
  },
  {
    id: 'c9-math-09',
    classLevel: '9',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: "Heron's Formula",
    title: "Heron's Formula for Area of Triangle & Special Cases",
    formula: "Semi-Perimeter: s = (a + b + c) / 2\nHeron's Formula: Area = √[s · (s - a) · (s - b) · (s - c)]\nEquilateral Triangle (side a): Area = (√3 / 4) · a²\nHeight of Equilateral Triangle: h = (√3 / 2) · a\nIsosceles Triangle (equal sides a, base b): Area = (b / 4) · √(4a² - b²)\nRight Triangle: Area = ½ · Base · Height",
    variables: "a, b, c = side lengths of triangle, s = semi-perimeter",
    examTip: "Always verify semi-perimeter calculation before computing factors. Each difference (s - a), (s - b), and (s - c) must be strictly positive. If any difference is zero or negative, the three lengths cannot form a valid triangle."
  },
  {
    id: 'c9-math-10',
    classLevel: '9',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Surface Areas and Volumes',
    title: 'Cubes, Cuboids, Cylinders, Cones & Spheres Formulas',
    formula: "Cuboid (length l, breadth b, height h):\n  TSA = 2(l b + b h + h l) | LSA (4 walls) = 2 h (l + b) | Volume = l · b · h | Diagonal = √(l² + b² + h²)\nCube (edge a):\n  TSA = 6 a² | LSA = 4 a² | Volume = a³ | Diagonal = a √3\nRight Circular Cylinder:\n  CSA = 2 π r h | TSA = 2 π r (r + h) | Volume = π r² h\nRight Circular Cone:\n  Slant Height: l = √(r² + h²)\n  CSA = π r l | TSA = π r (l + r) | Volume = ⅓ π r² h\nSphere (radius r):\n  Surface Area = 4 π r² | Volume = ⁴⁄₃ π r³\nHemisphere (radius r):\n  CSA = 2 π r² | TSA = 3 π r² | Volume = ⅔ π r³",
    variables: "l = length, b = breadth, h = height, r = radius, a = cube edge length, CSA = curved surface area, TSA = total surface area",
    examTip: "Lateral surface area of a cuboid 2h(l + b) is also called the Area of the Four Walls of a room. For an open cylinder (like an open water pipe or bucket), TSA is CSA + base area = 2πrh + πr²."
  },
  {
    id: 'c9-math-05-euclid',
    classLevel: '9',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: "Introduction to Euclid's Geometry",
    title: "Euclid's 5 Postulates & Core Axioms",
    formula: "Euclid's 5 Postulates:\n  Postulate 1: A straight line may be drawn from any one point to any other point\n  Postulate 2: A terminated line can be produced indefinitely\n  Postulate 3: A circle can be drawn with any centre and any radius\n  Postulate 4: All right angles are equal to one another (each equals 90°)\n  Postulate 5: If a straight line falling on two straight lines makes interior angles on same side sum < 180°, lines meet on that side\nCore Axioms:\n  - Things equal to the same thing are equal to one another\n  - If equals are added to equals, the wholes are equal\n  - The whole is greater than the part",
    variables: "Axiom = self-evident truth applied across all mathematics; Postulate = self-evident truth specific to geometry",
    examTip: "Axiom vs Theorem: An axiom is accepted without proof. A theorem is a mathematical statement established and validated by logical deductions from axioms."
  },
  {
    id: 'c9-math-11',
    classLevel: '9',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Statistics',
    title: 'Class Marks, Class Sizes, Histograms & Frequency Polygons',
    formula: "Class Mark (Mid-value): Class Mark = (Upper Limit + Lower Limit) / 2\nClass Size (Width): Class Size = Upper Limit - Lower Limit\nRange: Range = Maximum Observation - Minimum Observation\nLower Limit from Mid-value (m) and Width (h): Lower Limit = m - (h / 2)\nUpper Limit from Mid-value (m) and Width (h): Upper Limit = m + (h / 2)\nAdjusted Frequency for Unequal Class Intervals in Histogram:\n  Adjusted Frequency = (Minimum Class Size / Class Size of this class) × Frequency\nFrequency Polygon Coordinates: (Class Mark x_i, Frequency f_i)",
    variables: "m = class mid-value, h = class width, x_i = class marks, f_i = class frequencies",
    examTip: "In a histogram, the AREA of each rectangle is strictly proportional to the frequency. Always use Class Marks (not class boundaries) on the x-axis when constructing a Frequency Polygon."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 9: SOCIAL SCIENCE (HISTORY, GEOGRAPHY, POLITICAL SCIENCE, ECONOMICS)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c9-sst-01-french-rev',
    classLevel: '9',
    subjectId: 'sst',
    subjectName: 'Social Science',
    domain: 'History: The French Revolution',
    title: 'French Revolution Timeline, Political Symbols & Estates System',
    formula: "Core Timeline:\n  • 1774: Louis XVI ascends throne; finds empty treasury due to war loans\n  • 5 May 1789: Estates General convened at Versailles (300 1st, 300 2nd, 600 3rd Estate)\n  • 20 June 1789: Tennis Court Oath; National Assembly formed under Mirabeau & Abbe Sieyes\n  • 14 July 1789: Storming of the Bastille fortress-prison in Paris\n  • 4 August 1789: Feudal system, tithes, and feudal dues abolished\n  • 1791: Constitution framed; Constitutional Monarchy; Active vs Passive citizens\n  • 1792–1793: Monarchy abolished; French Republic proclaimed; Louis XVI executed\n  • 1793–1794: Reign of Terror under Robespierre (Jacobins / Sans-culottes / Guillotine)\n  • 1804: Napoleon Bonaparte crowns himself Emperor of France\n  • 1815: Defeat of Napoleon at Battle of Waterloo\n  • 1848: Slavery completely abolished in French colonies | 1946: Women win right to vote\nPolitical Symbols:\n  • Broken Chain: Freedom from slavery | Bundle of Rods (Fasces): Strength in unity\n  • Eye in Triangle: Knowledge dispelling ignorance | Sceptre: Royal power\n  • Snake biting tail: Eternity (no beginning, no end) | Phrygian Cap (Red Cap): Liberty",
    variables: "Tithe = Church tax (1/10th of farm produce); Taille = Direct tax paid to the state; Sans-culottes = Men without knee breeches",
    examTip: "Active citizens were men above 25 years who paid taxes equal to at least 3 days of an unskilled labourer's wage. Passive citizens (women, landless peasants, youth) had no voting rights."
  },
  {
    id: 'c9-sst-02-india-size',
    classLevel: '9',
    subjectId: 'sst',
    subjectName: 'Social Science',
    domain: 'Geography: India - Size and Location',
    title: 'India: Dimensions, Boundaries, Standard Meridian & Neighbors',
    formula: "Core Spatial Statistics:\n  • Total Land Area: 3.28 million sq km (2.4% of total world land area, 7th largest country)\n  • Land Frontier/Boundary: 15,200 km\n  • Total Coastline (Mainland + Andaman & Lakshadweep): 7,516.6 km\n  • North-South Extent: 3,214 km (Kashmir to Kanyakumari)\n  • East-West Extent: 2,933 km (Arunachal Pradesh to Rann of Kachchh)\nCoordinate Bounds:\n  • Latitudinal Extent: 8°4' N to 37°6' N\n  • Longitudinal Extent: 68°7' E to 97°25' E (approx 30° span)\nStandard Time & Sun Position:\n  • Standard Meridian: 82°30' E (passes through Mirzapur, Uttar Pradesh)\n  • Time Lag: 30° × 4 min = 120 min = 2 hours between Arunachal Pradesh & Gujarat\n  • IST = GMT + 5 hours 30 minutes\nKey Tropic & Maritime Straits:\n  • Tropic of Cancer (23°30' N): Divides India into almost two equal halves; cuts 8 states (Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram)\n  • Palk Strait & Gulf of Mannar: Narrow channel separating India from Sri Lanka",
    variables: "IST = Indian Standard Time, GMT = Greenwich Mean Time, 1° Longitude = 4 Minutes time difference",
    examTip: "Remember the 1869 opening of the Suez Canal reduced the maritime transit distance between India and Europe by 7,000 kilometres."
  },
  {
    id: 'c9-sst-03-constitutional-design',
    classLevel: '9',
    subjectId: 'sst',
    subjectName: 'Social Science',
    domain: 'Political Science: Constitutional Design',
    title: 'Apartheid Struggles, Constituent Assembly & Preamble Values',
    formula: "South Africa Democratic Transition:\n  • Apartheid: System of racial discrimination enforced by white minority against blacks (3/4 population)\n  • Resistance: African National Congress (ANC); Nelson Mandela imprisoned 28 years on Robben Island\n  • 26 April 1994: New democratic South Africa born; multiracial equal constitution adopted\nIndian Constitution Milestones:\n  • 1928: Motilal Nehru & 8 Congress leaders drafted first Indian constitution outline\n  • 1931: Karachi Session resolution on fundamental rights & universal adult franchise\n  • July 1946: Constituent Assembly elections | Dec 1946: First meeting\n  • 299 Members in Assembly after Partition | 114 days of meetings over 3 years\n  • Drafting Committee: Chaired by Dr. B.R. Ambedkar (Father of Indian Constitution)\n  • Assembly President: Dr. Rajendra Prasad\n  • 26 November 1949: Constitution adopted & enacted (Constitution Day)\n  • 26 January 1950: Constitution came into effect (Republic Day)\nPreamble Key Values:\n  • Sovereign: People have supreme right to make decisions; no external power dictates\n  • Socialist: Wealth generated socially, shared equally; government regulates land & industry\n  • Secular: Complete freedom to follow any religion; no official state religion\n  • Democratic: People elect rulers and hold them accountable with one person, one vote\n  • Republic: Head of State is an elected person, not a hereditary monarch",
    variables: "Preamble = Introduction or preface to the Constitution outlining its guiding philosophy",
    examTip: "The words 'Socialist' and 'Secular' were added to the Preamble by the 42nd Constitutional Amendment Act of 1976."
  },
  {
    id: 'c9-sst-04-people-as-resource',
    classLevel: '9',
    subjectId: 'sst',
    subjectName: 'Social Science',
    domain: 'Economics: People as Resource',
    title: 'Human Capital Formation, Economic Sectors & Unemployment Types',
    formula: "Human Capital Formation:\n  • Human Capital = Stock of skill, education, and productive knowledge embodied in a population\n  • Investment Trio: Education + Training + Healthcare = High productivity and national income growth\n  • Superiority: Human capital is superior to land and physical capital because it can utilize them\nThree Economic Sectors:\n  1. Primary Sector: Direct exploitation of natural resources (Agriculture, forestry, animal husbandry, fishing, mining)\n  2. Secondary Sector: Manufacturing, industrial transformation, and construction\n  3. Tertiary (Service) Sector: Trade, transport, communication, banking, education, health, tourism\nUnemployment Classification:\n  • Definition: Willing and able to work at prevailing market wage but unable to find employment (Age: 15–59)\n  • Seasonal Unemployment: Workers unable to find jobs during certain agricultural off-seasons\n  • Disguised Unemployment: More workers engaged than required; marginal productivity of excess labour = 0\nKey Health & Education Indicators:\n  • Infant Mortality Rate (IMR): Death of child < 1 year per 1,000 live births\n  • Literacy Rate: Percentage of population aged 7 and above who can read and write with understanding\n  • Sarva Shiksha Abhiyan: Flagship scheme for universal elementary education (ages 6–14)",
    variables: "IMR = Infant Mortality Rate, SSA = Sarva Shiksha Abhiyan, GDP = Gross Domestic Product",
    examTip: "Japan has virtually no natural mineral resources, yet became one of the world's richest nations by investing heavily in the health and technical education of its human resource."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 9: ENGLISH LANGUAGE & LITERATURE (GRAMMAR, BEEHIVE, MOMENTS, WRITING)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c9-eng-01-tenses-grammar',
    classLevel: '9',
    subjectId: 'eng',
    subjectName: 'English',
    domain: 'Grammar: Tenses, Concord & Reported Speech',
    title: '12 Tenses Master Matrix, Subject-Verb Concord & Reported Speech',
    formula: "12 Tenses Quick Rule Matrix:\n  • Simple Present: Sub + V1(s/es) | Universal truths, habits\n  • Present Continuous: is/am/are + V1-ing | Action now or near future\n  • Present Perfect: has/have + V3 | Action completed with present link\n  • Present Perfect Continuous: has/have been + V1-ing (+ since/for)\n  • Simple Past: Sub + V2 | Specific completed past action\n  • Past Continuous: was/were + V1-ing | Ongoing past action\n  • Past Perfect: had + V3 | Earlier of two past actions\n  • Past Perfect Continuous: had been + V1-ing (+ since/for)\n  • Simple Future: will/shall + V1 | Spontaneous decision, certainty\n  • Future Continuous: will/shall be + V1-ing | Action in progress at future point\n  • Future Perfect: will/shall have + V3 | Action finished by specific future time\n  • Future Perfect Continuous: will/shall have been + V1-ing\nSubject-Verb Concord Golden Rules:\n  • 'Each' / 'Every' / 'Everyone' + singular noun => strictly SINGULAR verb\n  • 'Neither... nor' / 'Either... or' => verb agrees with the CLOSER subject (Proximity Rule)\n  • Two singular nouns denoting one single idea/person (single article 'The') => SINGULAR verb\n  • Uncountable nouns ('News', 'Information', 'Furniture', 'Advice') => always SINGULAR\nReported Speech Transformations:\n  • Present Simple -> Past Simple | Present Continuous -> Past Continuous\n  • Present Perfect -> Past Perfect | Past Simple -> Past Perfect\n  • will -> would | can -> could | may -> might | now -> then | today -> that day",
    variables: "V1 = Base verb, V2 = Past form, V3 = Past participle, S-V Concord = Agreement between subject and verb in number & person",
    examTip: "In Past Perfect sequencing: The first completed action takes 'had + V3', and the subsequent action takes 'V2'. Example: 'The train had left (1st) before we reached the station (2nd)'."
  },
  {
    id: 'c9-eng-02-beehive-prose-poetry',
    classLevel: '9',
    subjectId: 'eng',
    subjectName: 'English',
    domain: 'Beehive: Prose & Poetry Core Themes',
    title: 'Beehive High-Yield Chapters, Authors & Poetic Devices',
    formula: "Key Prose Modules:\n  • 'The Fun They Had' (Isaac Asimov): Year 2157; Margie (11) & Tommy (13); telebooks vs real books; County Inspector slows geography sector; social joy of traditional schooling\n  • 'The Sound of Music' (Deborah Cowley): Evelyn Glennie deaf at 11; guided by percussionist Ron Forbes; feels vibrations through body; Bismillah Khan & Shehnai at Red Fort (15 Aug 1947)\n  • 'The Little Girl' (Katherine Mansfield): Kezia fears strict father; ruins speech papers for pin-cushion; father comforts her after nightmare; realizes big heart beneath rough exterior\n  • 'A Truly Beautiful Mind': Albert Einstein; pacifist; warned Roosevelt in 1939; deeply shaken by Hiroshima-Nagasaki atomic bombing; crusaded for world government\nKey Poems & Literary Devices:\n  • 'The Road Not Taken' (Robert Frost): Rhyme ABAAB; yellow wood = autumn/crossroads; two roads = life choices; 'wanted wear' = personification; 'way leads on to way' = irreversibility\n  • 'Wind' (Subramania Bharati): Symbolizes hardships & adversity; crushes the weak, empowers the strong; build strong homes and resilient hearts\n  • 'Rain on the Roof' (Coates Kinney): Melancholy darkness; patter of rain on shingles brings nostalgic bliss and memories of mother\n  • 'No Men Are Foreign' (James Kirkup): Universal brotherhood; all walk on the same earth; war and hatred pollute our common air",
    variables: "Theme = Underlying message, Metaphor = Direct comparison without 'like/as', Personification = Giving human traits to non-human entities",
    examTip: "In Robert Frost's poem, always emphasize that the speaker does not merely regret his choice; rather, he reflects with a sigh that any decisive choice inevitably makes all the difference."
  },
  {
    id: 'c9-eng-03-moments-stories',
    classLevel: '9',
    subjectId: 'eng',
    subjectName: 'English',
    domain: 'Moments: Supplementary Reader Master Themes',
    title: 'Moments Core Characters, Moral Lessons & Critical Endings',
    formula: "Core Chapter Insights:\n  • 'The Lost Child' (Mulk Raj Anand): Festival of spring; child craves toys, burfi, garland of gulmohar, balloons, roundabout ride; loses parents in crowd; refuses all luxuries offered by kind stranger; parental presence is the supreme anchor of human security\n  • 'The Adventures of Toto' (Ruskin Bond): Red monkey bought for Rs 5 from tonga-driver; destroys wallpaper, shredded blazer, boiled bathwater incident; sold back for Rs 3 because middle-class home cannot sustain recurring damage\n  • 'In the Kingdom of Fools' (A.K. Ramanujan): Foolish King & Minister; day is night, night is day; everything costs one duddu; disciple trapped due to gluttony; Guru's wisdom tricks king onto the execution stake\n  • 'The Happy Prince' (Oscar Wilde): Gilded statue with sapphire eyes & ruby hilt; swallow acts as messenger of charity; helps poor seamstress, playwright, matchgirl; swallow dies of frost; God declares Prince's lead heart & dead bird as two most precious things\n  • 'The Last Leaf' (O. Henry): Johnsy suffering from pneumonia; links life to falling ivy leaves; old painter Behrman paints an indelible leaf on the wall in freezing storm; saves Johnsy's life; dies of pneumonia; creates his ultimate masterpiece",
    variables: "Protagonist = Main character, Irony = Contrast between expectation and reality, Climax = Turning point of story",
    examTip: "In 'The Last Leaf', Behrman's painted ivy leaf is a masterpiece not because of high art technique, but because it breathed life and hope into a dying human soul at the cost of the artist's own life."
  },
  {
    id: 'c9-eng-04-writing-formats',
    classLevel: '9',
    subjectId: 'eng',
    subjectName: 'English',
    domain: 'Writing Skills: Formats & Evaluation Rubrics',
    title: 'Descriptive Paragraph, Story Writing & Diary Entry Rubrics',
    formula: "1. Descriptive Paragraph (100–120 Words | 5 Marks):\n  • Format (1 Mark): Meaningful, catchy Title (optional but recommended)\n  • Content (2 Marks): Sensory details (sight, sound, emotions), chronological/spatial order, vivid adjectives\n  • Expression (2 Marks): Grammatical accuracy, sentence variety, cohesive transitional devices\n2. Diary Entry (100–120 Words | 5 Marks):\n  • Format (1 Mark): Day, Date (e.g. Thursday, 26 March 2025), Time (e.g. 9:00 PM), Salutation ('Dear Diary')\n  • Content (2 Marks): First-person perspective ('I'), authentic emotional reflection, clear event recounting\n  • Expression (2 Marks): Intimate informal tone, correct tense usage (Past Tense for events, Present for reflections), Signature at end\n3. Story Writing (100–120 Words | 5 Marks):\n  • Format (1 Mark): Engaging Title\n  • Content (2 Marks): Clear exposition (setting & characters), rising conflict, climax, satisfying resolution\n  • Expression (2 Marks): Expressive narrative language, dialogue tags, moral takeaway (if applicable)",
    variables: "Word limit = Strictly 100 to 120 words. Exceeding by > 20 words attracts negative expression marks.",
    examTip: "Never use informal SMS abbreviations ('u', 'coz', 'btw') in any creative writing task. Maintain polished standard English."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 9: COMMUNICATIVE ENGLISH (CODE 101 - INTERACT IN ENGLISH)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c9-eng-comm-01-literature',
    classLevel: '9',
    subjectId: 'eng',
    subjectName: 'English',
    domain: 'Communicative English: Literature Reader',
    title: 'Literature Reader: How I Taught My Grandmother, The Brook & Villa for Sale',
    formula: "Core Prose, Poetry & Drama Modules:\n  • 'How I Taught My Grandmother to Read' (Sudha Murthy): 62-year-old Krishtakka; illiterate in Kannada; loves Triveni's serialized novel 'Kashi Yatre'; granddaughter away at wedding; Krishtakka feels helpless and weeps; resolves to learn Kannada alphabet by Saraswati Pooja Day; achieves mastery; touches granddaughter's feet as Guru-Dakshina ('teacher must be respected regardless of age')\n  • 'The Brook' (Alfred Lord Tennyson): First-person personification of a stream; originates from coots and herons; bickers down hills; chatters over stony ways (sharps & trebles); babble on pebbles; merges into 'brimming river'; Refrain: 'For men may come and men may go, But I go on for ever' (transient human mortality vs eternal nature)\n  • 'Villa for Sale' (Sacha Guitry): Satire set near French Hollywood; Juliette desperate to sell villa; signs up for month; Jeanne wants villa for parents; cynical husband Gaston refuses; Mrs. Al Smith mistakes Gaston for owner; Gaston quotes 300,000 francs; buys from Juliette for 200,000 francs; nets 100,000 francs profit + signed Carot painting",
    variables: "Guru-Dakshina = Sacred offering to teacher, Refrain = Repeated line in poetry, Satire = Ridiculing human follies through wit",
    examTip: "In 'The Brook', onomatopoeic words include 'chatter', 'babble', 'bubble', 'bicker', and 'murmur'. The rhyme scheme is abab in quatrains."
  },
  {
    id: 'c9-eng-comm-02-mcb-people',
    classLevel: '9',
    subjectId: 'eng',
    subjectName: 'English',
    domain: 'Communicative English: Main Course Book',
    title: 'Main Course Book: People - An Exemplary Leader & Vision for India',
    formula: "Core MCB Themes & Character Insights:\n  • 'An Exemplary Leader' (Dr. APJ Abdul Kalam): Setting: Thumba Equatorial Rocket Launching Station (TERLS); scientists worked under extreme pressure (12-18 hrs daily); subordinate promised to take kids to exhibition at 5:30 PM; forgot due to absorption in rocket work; rushed home at 8:15 PM expecting tears; learned Dr. Kalam had personally visited his home and escorted his children to the exhibition\n  • Leadership Philosophy: Authoritarian bosses provoke rebellion & burnout; exemplary leaders cultivate 'eustress' (positive motivational stress that builds resilience, autonomy, and commitment)\n  • Desirable Boss Qualities: Trustworthy, meticulous, problem-solving, decisive, willing to take risks, empathetic, inspiring\n  • Dr. Kalam's Vision for India: 1st Vision = Freedom (India respects others' freedom); 2nd Vision = Development (standing as an economic superpower); 3rd Vision = Strength (military & economic self-reliance); Youth's role = active citizenship, fighting corruption, and national integration",
    variables: "Eustress = Positive stress that enhances performance and job satisfaction; Distress = Negative debilitating stress",
    examTip: "When writing on leadership in MCB questions, contrast authoritarian command with empathetic support using Dr. Kalam's real-life Thumba incident."
  },
  {
    id: 'c9-eng-comm-03-writing-skills',
    classLevel: '9',
    subjectId: 'eng',
    subjectName: 'English',
    domain: 'Communicative English: Writing Skills Formats',
    title: 'Notice (4M), Dialogue (5M), Informal Letter (7M) & MCB Paragraph (8M)',
    formula: "Communicative English Section B Formats:\n  1. Notice Writing (Max 50 Words | 4 Marks):\n     • Box format: Institution Name, NOTICE, Date, Bold Heading, Target Audience, Event Details (Date, Time, Venue), Contact Authority (Sign, Name, Designation)\n  2. Dialogue Writing (Max 100 Words | 5 Marks):\n     • Speaker names with colons: Direct, natural conversational turns; avoid quotation marks; logical flow with meaningful resolution\n  3. Informal Letter (Max 120 Words | 7 Marks):\n     • Sender's Address, Date, Informal Salutation ('Dear...'), Warm opening, Body (2-3 paragraphs), Polite sign-off ('Yours affectionately' / 'Yours warmly')\n  4. Thematic Paragraph from MCB (Max 150 Words | 8 Marks):\n     • Heading; CODER framework: Collect ideas, Organise logically, Draft, Edit, Revise; rich vocabulary, cohesive transitional linking phrases",
    variables: "CODER = Collect, Organise, Draft, Edit, Revise. Total Writing Section weightage = 24 Marks.",
    examTip: "Notice must strictly not exceed 50 words and MUST be enclosed in a box. In Dialogue writing, ensure both characters speak balanced, contextually relevant lines."
  }
];
