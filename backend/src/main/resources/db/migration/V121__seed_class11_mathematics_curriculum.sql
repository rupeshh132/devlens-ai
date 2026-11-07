-- V121__seed_class11_mathematics_curriculum.sql
-- Class 11 Mathematics (Subject Code: 041) Official CBSE / Directorate of Education GNCT of Delhi 2026-27 Curriculum
-- Includes 14 NCERT Chapters & 72 Master Topics (Summative Core + Formative Enrichment Modules)

-- 1. Insert Subject: Mathematics (Code 041) under Class 11 Exam Type
INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index)
VALUES ('65d29b56-2222-0000-0000-000000000011', '303d9917-55e9-4f81-8a0f-129ba4c01aef', 'Mathematics', '041', 1)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code, order_index = EXCLUDED.order_index;

-- 2. Insert 14 Official NCERT Chapters for Class 11
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
('65d29b56-2222-1100-0000-000000000001', '65d29b56-2222-0000-0000-000000000011', 'Sets', 1, true),
('65d29b56-2222-1100-0000-000000000002', '65d29b56-2222-0000-0000-000000000011', 'Relations and Functions', 2, true),
('65d29b56-2222-1100-0000-000000000003', '65d29b56-2222-0000-0000-000000000011', 'Trigonometric Functions', 3, true),
('65d29b56-2222-1100-0000-000000000004', '65d29b56-2222-0000-0000-000000000011', 'Complex Numbers and Quadratic Equations', 4, true),
('65d29b56-2222-1100-0000-000000000005', '65d29b56-2222-0000-0000-000000000011', 'Linear Inequalities', 5, true),
('65d29b56-2222-1100-0000-000000000006', '65d29b56-2222-0000-0000-000000000011', 'Permutations and Combinations', 6, true),
('65d29b56-2222-1100-0000-000000000007', '65d29b56-2222-0000-0000-000000000011', 'Binomial Theorem', 7, true),
('65d29b56-2222-1100-0000-000000000008', '65d29b56-2222-0000-0000-000000000011', 'Sequence and Series', 8, true),
('65d29b56-2222-1100-0000-000000000009', '65d29b56-2222-0000-0000-000000000011', 'Straight Lines', 9, true),
('65d29b56-2222-1100-0000-000000000010', '65d29b56-2222-0000-0000-000000000011', 'Conic Sections', 10, true),
('65d29b56-2222-1100-0000-000000000011', '65d29b56-2222-0000-0000-000000000011', 'Introduction to Three-Dimensional Geometry', 11, true),
('65d29b56-2222-1100-0000-000000000012', '65d29b56-2222-0000-0000-000000000011', 'Limits and Derivatives', 12, true),
('65d29b56-2222-1100-0000-000000000013', '65d29b56-2222-0000-0000-000000000011', 'Statistics', 13, true),
('65d29b56-2222-1100-0000-000000000014', '65d29b56-2222-0000-0000-000000000011', 'Probability', 14, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Master Topics for Class 11 (72 Topics across 14 Chapters)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
-- Chapter 1: Sets (5 Topics)
('65d29b56-2222-2101-0000-000000000001', '65d29b56-2222-1100-0000-000000000001', 'Sets & Representations (Roster & Set-Builder Forms, Empty, Finite & Infinite, Equal Sets)', 1, true),
('65d29b56-2222-2101-0000-000000000002', '65d29b56-2222-1100-0000-000000000001', 'Subsets, Subsets of Real Numbers, Intervals as Subsets of R & Universal Set', 2, true),
('65d29b56-2222-2101-0000-000000000003', '65d29b56-2222-1100-0000-000000000001', 'Venn Diagrams & Operations on Sets (Union, Intersection, Difference of Sets)', 3, true),
('65d29b56-2222-2101-0000-000000000004', '65d29b56-2222-1100-0000-000000000001', 'Complement of a Set & Properties of Complement (De Morgan''s Laws)', 4, true),
('65d29b56-2222-2101-0000-000000000005', '65d29b56-2222-1100-0000-000000000001', '[Enrichment / Formative] Practical Word Problems on Union and Intersection of Two Sets', 5, true),

-- Chapter 2: Relations and Functions (6 Topics)
('65d29b56-2222-2102-0000-000000000001', '65d29b56-2222-1100-0000-000000000002', 'Cartesian Product of Sets & Cartesian Product of Reals (R x R x R)', 1, true),
('65d29b56-2222-2102-0000-000000000002', '65d29b56-2222-1100-0000-000000000002', 'Relations: Definition, Pictorial Diagrams, Domain, Co-domain and Range', 2, true),
('65d29b56-2222-2102-0000-000000000003', '65d29b56-2222-1100-0000-000000000002', 'Functions as Special Relations, Pictorial Representation, Domain & Range', 3, true),
('65d29b56-2222-2102-0000-000000000004', '65d29b56-2222-1100-0000-000000000002', 'Standard Real Functions & Graphs (Identity, Constant, Polynomial, Rational, Modulus, Signum, Exponential, Logarithmic & GIF)', 4, true),
('65d29b56-2222-2102-0000-000000000005', '65d29b56-2222-1100-0000-000000000002', 'Algebra of Real Functions (Sum, Difference, Product and Quotient)', 5, true),
('65d29b56-2222-2102-0000-000000000006', '65d29b56-2222-1100-0000-000000000002', '[Enrichment / Formative] Composition of Functions (fog and gof)', 6, true),

-- Chapter 3: Trigonometric Functions (6 Topics)
('65d29b56-2222-2103-0000-000000000001', '65d29b56-2222-1100-0000-000000000003', 'Angles: Degree & Radian Measures, Interconversions & Unit Circle Definition', 1, true),
('65d29b56-2222-2103-0000-000000000002', '65d29b56-2222-1100-0000-000000000003', 'Signs, Domain, Range & Graphs of Trigonometric Functions (sin²x + cos²x = 1)', 2, true),
('65d29b56-2222-2103-0000-000000000003', '65d29b56-2222-1100-0000-000000000003', 'Compound Angle Identities (sin(x±y), cos(x±y), tan(x±y), cot(x±y))', 3, true),
('65d29b56-2222-2103-0000-000000000004', '65d29b56-2222-1100-0000-000000000003', 'Transformation Formulas: Sum/Difference to Product & Product to Sum', 4, true),
('65d29b56-2222-2103-0000-000000000005', '65d29b56-2222-1100-0000-000000000003', 'Multiple & Submultiple Angles: Identities for sin2x, cos2x, tan2x, sin3x, cos3x, tan3x', 5, true),
('65d29b56-2222-2103-0000-000000000006', '65d29b56-2222-1100-0000-000000000003', '[Enrichment / Formative] General Solution of Trigonometric Equations (sin y = sin a, cos y = cos a, tan y = tan a)', 6, true),

-- Chapter 4: Complex Numbers and Quadratic Equations (6 Topics)
('65d29b56-2222-2104-0000-000000000001', '65d29b56-2222-1100-0000-000000000004', 'Introduction to Imaginary Numbers, Need for √-1 & Integral Powers of i', 1, true),
('65d29b56-2222-2104-0000-000000000002', '65d29b56-2222-1100-0000-000000000004', 'Algebra of Complex Numbers (Addition, Subtraction, Multiplication & Division)', 2, true),
('65d29b56-2222-2104-0000-000000000003', '65d29b56-2222-1100-0000-000000000004', 'Modulus, Conjugate & Argand Plane (Complex Plane Representation)', 3, true),
('65d29b56-2222-2104-0000-000000000004', '65d29b56-2222-1100-0000-000000000004', '[Enrichment / Formative] Polar Representation of Complex Numbers & Euler''s Form', 4, true),
('65d29b56-2222-2104-0000-000000000005', '65d29b56-2222-1100-0000-000000000004', '[Enrichment / Formative] Fundamental Theorem of Algebra & Quadratic Equations with Complex Roots', 5, true),
('65d29b56-2222-2104-0000-000000000006', '65d29b56-2222-1100-0000-000000000004', '[Enrichment / Formative] Principle of Mathematical Induction (Proof by Induction & Natural Number Foundations)', 6, true),

-- Chapter 5: Linear Inequalities (5 Topics)
('65d29b56-2222-2105-0000-000000000001', '65d29b56-2222-1100-0000-000000000005', 'Introduction to Linear Inequalities & Rules of Inequality', 1, true),
('65d29b56-2222-2105-0000-000000000002', '65d29b56-2222-1100-0000-000000000005', 'Algebraic Solutions of Linear Inequalities in One Variable', 2, true),
('65d29b56-2222-2105-0000-000000000003', '65d29b56-2222-1100-0000-000000000005', 'Graphical Representation of Solutions on the Number Line', 3, true),
('65d29b56-2222-2105-0000-000000000004', '65d29b56-2222-1100-0000-000000000005', '[Enrichment / Formative] Graphical Solution of Linear Inequalities in Two Variables', 4, true),
('65d29b56-2222-2105-0000-000000000005', '65d29b56-2222-1100-0000-000000000005', '[Enrichment / Formative] Graphical Method of Solving Systems of Linear Inequalities in Two Variables', 5, true),

-- Chapter 6: Permutations and Combinations (5 Topics)
('65d29b56-2222-2106-0000-000000000001', '65d29b56-2222-1100-0000-000000000006', 'Fundamental Principle of Counting (Multiplication & Addition Principles)', 1, true),
('65d29b56-2222-2106-0000-000000000002', '65d29b56-2222-1100-0000-000000000006', 'Factorial Notation (n!) & Computation Properties', 2, true),
('65d29b56-2222-2106-0000-000000000003', '65d29b56-2222-1100-0000-000000000006', 'Permutations: Derivation of Formula for ⁿPᵣ & Restricted Permutations', 3, true),
('65d29b56-2222-2106-0000-000000000004', '65d29b56-2222-1100-0000-000000000006', 'Combinations: Derivation of Formula for ⁿCᵣ, Properties & Relation with ⁿPᵣ', 4, true),
('65d29b56-2222-2106-0000-000000000005', '65d29b56-2222-1100-0000-000000000006', 'Practical & Contextual Applications of Permutations and Combinations', 5, true),

-- Chapter 7: Binomial Theorem (4 Topics)
('65d29b56-2222-2107-0000-000000000001', '65d29b56-2222-1100-0000-000000000007', 'Historical Perspective, Pascal''s Triangle & Pattern Observation', 1, true),
('65d29b56-2222-2107-0000-000000000002', '65d29b56-2222-1100-0000-000000000007', 'Statement & Proof of Binomial Theorem for Positive Integral Indices', 2, true),
('65d29b56-2222-2107-0000-000000000003', '65d29b56-2222-1100-0000-000000000007', 'Binomial Expansions & Simple Applications (Approximations & Divisibility)', 3, true),
('65d29b56-2222-2107-0000-000000000004', '65d29b56-2222-1100-0000-000000000007', '[Enrichment / Formative] General Term (Tᵣ₊₁) and Middle Term(s) in Binomial Expansion', 4, true),

-- Chapter 8: Sequence and Series (5 Topics)
('65d29b56-2222-2108-0000-000000000001', '65d29b56-2222-1100-0000-000000000008', 'Sequences and Series: Definitions, Recall of AP & Arithmetic Mean (A.M.)', 1, true),
('65d29b56-2222-2108-0000-000000000002', '65d29b56-2222-1100-0000-000000000008', 'Geometric Progression (G.P.): General Term (aₙ = arⁿ⁻¹) & Properties', 2, true),
('65d29b56-2222-2108-0000-000000000003', '65d29b56-2222-1100-0000-000000000008', 'Sum of First n Terms of a G.P. (Sₙ) & Sum of an Infinite G.P. (S∞)', 3, true),
('65d29b56-2222-2108-0000-000000000004', '65d29b56-2222-1100-0000-000000000008', 'Geometric Mean (G.M.) & Relationship between A.M. and G.M. (A.M. ≥ G.M.)', 4, true),
('65d29b56-2222-2108-0000-000000000005', '65d29b56-2222-1100-0000-000000000008', '[Enrichment / Formative] Special Sum Formulas: Sum of First n Natural Numbers, Squares & Cubes (Σk, Σk², Σk³)', 5, true),

-- Chapter 9: Straight Lines (5 Topics)
('65d29b56-2222-2109-0000-000000000001', '65d29b56-2222-1100-0000-000000000009', 'Slope of a Line, Collinearity of Points & Angle between Two Lines', 1, true),
('65d29b56-2222-2109-0000-000000000002', '65d29b56-2222-1100-0000-000000000009', 'Standard Forms: Parallel to Axes, Point-Slope & Two-Point Forms', 2, true),
('65d29b56-2222-2109-0000-000000000003', '65d29b56-2222-1100-0000-000000000009', 'Slope-Intercept & Intercept Forms of Line Equation', 3, true),
('65d29b56-2222-2109-0000-000000000004', '65d29b56-2222-1100-0000-000000000009', 'Perpendicular Distance of a Point from a Line & Distance between Parallel Lines', 4, true),
('65d29b56-2222-2109-0000-000000000005', '65d29b56-2222-1100-0000-000000000009', '[Enrichment / Formative] Normal Form (x cos α + y sin α = p) & General Form Reduction (Ax + By + C = 0)', 5, true),

-- Chapter 10: Conic Sections (5 Topics)
('65d29b56-2222-2110-0000-000000000001', '65d29b56-2222-1100-0000-000000000010', 'Sections of a Cone (Circle, Ellipse, Parabola, Hyperbola & Degenerate Cases)', 1, true),
('65d29b56-2222-2110-0000-000000000002', '65d29b56-2222-1100-0000-000000000010', 'Standard Equation of a Circle & Concentric / General Forms', 2, true),
('65d29b56-2222-2110-0000-000000000003', '65d29b56-2222-1100-0000-000000000010', 'Parabola: Standard Equations (y²=4ax, x²=4ay), Focus, Directrix, Axis & Latus Rectum', 3, true),
('65d29b56-2222-2110-0000-000000000004', '65d29b56-2222-1100-0000-000000000010', 'Ellipse: Standard Equations (x²/a² + y²/b² = 1), Major/Minor Axes, Foci, Eccentricity & Latus Rectum', 4, true),
('65d29b56-2222-2110-0000-000000000005', '65d29b56-2222-1100-0000-000000000010', 'Hyperbola: Standard Equations (x²/a² - y²/b² = 1), Foci, Vertices, Transverse/Conjugate Axes & Latus Rectum', 5, true),

-- Chapter 11: Introduction to Three-Dimensional Geometry (4 Topics)
('65d29b56-2222-2111-0000-000000000001', '65d29b56-2222-1100-0000-000000000011', 'Coordinate Axes, Coordinate Planes & Octants in 3D Space', 1, true),
('65d29b56-2222-2111-0000-000000000002', '65d29b56-2222-1100-0000-000000000011', 'Coordinates of a Point in 3D Space & Signs in Different Octants', 2, true),
('65d29b56-2222-2111-0000-000000000003', '65d29b56-2222-1100-0000-000000000011', 'Distance Formula between Two Points in 3D Space & Collinearity Applications', 3, true),
('65d29b56-2222-2111-0000-000000000004', '65d29b56-2222-1100-0000-000000000011', '[Enrichment / Formative] Section Formula in Three Dimensions (Internal and External Division & Centroid)', 4, true),

-- Chapter 12: Limits and Derivatives (6 Topics)
('65d29b56-2222-2112-0000-000000000001', '65d29b56-2222-1100-0000-000000000012', 'Intuitive Idea of Limits, Left-Hand & Right-Hand Limits', 1, true),
('65d29b56-2222-2112-0000-000000000002', '65d29b56-2222-1100-0000-000000000012', 'Limits of Polynomial, Rational & Standard Trigonometric Functions (lim sinx/x = 1)', 2, true),
('65d29b56-2222-2112-0000-000000000003', '65d29b56-2222-1100-0000-000000000012', 'Limits of Exponential & Logarithmic Functions (lim (eˣ-1)/x = 1)', 3, true),
('65d29b56-2222-2112-0000-000000000004', '65d29b56-2222-1100-0000-000000000012', 'Derivative as Rate of Change, Geometric Slope of Tangent & Definition from First Principles', 4, true),
('65d29b56-2222-2112-0000-000000000005', '65d29b56-2222-1100-0000-000000000012', 'Algebra of Derivatives: Sum, Difference, Product Rule & Quotient Rule', 5, true),
('65d29b56-2222-2112-0000-000000000006', '65d29b56-2222-1100-0000-000000000012', '[Enrichment / Formative] Derivatives of Composite Functions (Introduction to Chain Rule)', 6, true),

-- Chapter 13: Statistics (5 Topics)
('65d29b56-2222-2113-0000-000000000001', '65d29b56-2222-1100-0000-000000000013', 'Measures of Dispersion: Concept of Spread & Range', 1, true),
('65d29b56-2222-2113-0000-000000000002', '65d29b56-2222-1100-0000-000000000013', 'Mean Deviation about Mean for Ungrouped & Grouped Frequency Distributions', 2, true),
('65d29b56-2222-2113-0000-000000000003', '65d29b56-2222-1100-0000-000000000013', 'Mean Deviation about Median for Ungrouped & Grouped Frequency Distributions', 3, true),
('65d29b56-2222-2113-0000-000000000004', '65d29b56-2222-1100-0000-000000000013', 'Variance and Standard Deviation of Ungrouped Data', 4, true),
('65d29b56-2222-2113-0000-000000000005', '65d29b56-2222-1100-0000-000000000013', 'Variance and Standard Deviation of Continuous Grouped Frequency Distributions (Short-cut Method)', 5, true),

-- Chapter 14: Probability (5 Topics)
('65d29b56-2222-2114-0000-000000000001', '65d29b56-2222-1100-0000-000000000014', '[Enrichment / Formative] Random Experiments, Outcomes and Sample Space (Set Representation)', 1, true),
('65d29b56-2222-2114-0000-000000000002', '65d29b56-2222-1100-0000-000000000014', 'Event Algebra: Occurrence of Events, ''Not'' (Complementary), ''And'' & ''Or'' Events', 2, true),
('65d29b56-2222-2114-0000-000000000003', '65d29b56-2222-1100-0000-000000000014', 'Mutually Exclusive and Exhaustive Events', 3, true),
('65d29b56-2222-2114-0000-000000000004', '65d29b56-2222-1100-0000-000000000014', 'Axiomatic (Set-Theoretic) Approach to Probability', 4, true),
('65d29b56-2222-2114-0000-000000000005', '65d29b56-2222-1100-0000-000000000014', 'Probability of an Event, Probability of ''Not A'', ''A or B'', and ''A and B''', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;
