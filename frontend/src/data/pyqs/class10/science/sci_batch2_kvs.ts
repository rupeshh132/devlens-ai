import type { PyqPaper } from '../../../../components/learn/PyqPaperViewerModal';

export const CLASS_10_SCI_BATCH2_PAPERS: PyqPaper[] = [
  {
    "id": "kvs-c10-sci-2024-pb1",
    "title": "KVS Delhi Region Class 10 Science Pre-Board Paper I (2024)",
    "subject": "Science",
    "targetClass": "Class 10",
    "year": 2024,
    "paperType": "PRE_BOARD",
    "paperCode": "KVS/DEL/C10/SCI-1",
    "totalMarks": 80,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 39,
    "generalInstructions": [
      "This question paper consists of 39 questions in 5 sections: Section A to Section E.",
      "Section A consists of 20 objective type questions of 1 mark each (Q1–Q16 MCQs, Q17–Q20 Assertion-Reason).",
      "Section B consists of 6 Very Short Answer questions of 2 marks each (30–50 words).",
      "Section C consists of 7 Short Answer questions of 3 marks each (50–80 words).",
      "Section D consists of 3 Long Answer questions of 5 marks each (80–120 words).",
      "Section E consists of 3 source-based/case-based units of 4 marks each with sub-parts."
    ],
    "questions": [
      {
        "id": "kvs-c10-sci-2024-pb1-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Human Eye: Atmospheric Scattering & Refraction",
        "questionText": "Why do stars appear to twinkle at night whereas planets do not?",
        "options": [
          "A) Planets emit steady light",
          "B) Stars undergo continuous atmospheric refraction as point sources, while planets act as extended sources",
          "C) Stars undergo total internal reflection",
          "D) Planets absorb blue light completely"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Stars are distant point-sized sources whose apparent path fluctuates with changing air refractive indices. Planets are much closer extended sources (collection of many point sources) so total variation averages out to zero.",
        "stepMarking": [
          {
            "step": "Point source atmospheric refraction vs extended source averaging",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Must mention both \"point source\" and \"average variation becomes zero\" for extended planets.",
        "commonPitfall": "Saying stars produce flickering nuclear light."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Electricity: Resistivity Dependence",
        "questionText": "A cylindrical copper wire is stretched to double its length without changing its volume. Its electrical resistivity (ρ) will:",
        "options": [
          "A) Become 4 times",
          "B) Become double",
          "C) Become half",
          "D) Remain unchanged"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Resistivity (ρ) is a characteristic property of the material and temperature; it does NOT depend on length or cross-sectional area (unlike resistance R, which becomes 4 times).",
        "stepMarking": [
          {
            "step": "Resistivity depends only on material nature and temperature",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Read carefully: question asks RESISTIVITY, not resistance!",
        "commonPitfall": "Calculating R' = 4R and marking Option (A)."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Electricity: Fuse Rating Calculation",
        "questionText": "An electric iron of power rating 1100 W is operated at 220 V. Which fuse rating is most appropriate for this appliance?",
        "options": [
          "A) 1 A",
          "B) 3 A",
          "C) 5 A",
          "D) 6 A or higher (e.g. 10 A)"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Normal current I = P / V = 1100 / 220 = 5 A. A fuse must have a rating slightly above the normal operating current (e.g., 6 A / 10 A) so it does not melt during normal operation.",
        "stepMarking": [
          {
            "step": "Calculate I = 5 A and select rating slightly above 5 A",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Never choose a 5 A fuse when operating current is 5 A; slight surge will blow it.",
        "commonPitfall": "Marking 5 A directly without accounting for fuse margin."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Magnetic Effects: Solenoid Field Pattern",
        "questionText": "The magnetic field lines inside a long straight current-carrying solenoid are:",
        "options": [
          "A) Concentric circles",
          "B) Parallel straight lines indicating uniform magnetic field",
          "C) Radial outward lines",
          "D) Zero everywhere inside"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Inside a current-carrying solenoid, the magnetic field lines are parallel and equidistant straight lines, showing that the magnetic field is uniform at all points inside.",
        "stepMarking": [
          {
            "step": "Parallel straight lines = uniform magnetic field inside solenoid",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember NCERT phrase: \"field lines are in the form of parallel straight lines\".",
        "commonPitfall": "Confusing solenoid interior with straight conductor circular field."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Our Environment: 10% Law of Energy Flow",
        "questionText": "In a terrestrial food chain Grass → Deer → Lion, if 5000 J of solar energy is captured by grass as chemical energy, how much energy is available to the lion?",
        "options": [
          "A) 500 J",
          "B) 50 J",
          "C) 5 J",
          "D) 0.5 J"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. According to Lindeman's 10% law: Grass (5000 J) → Deer (10% = 500 J) → Lion (10% of 500 = 50 J).",
        "stepMarking": [
          {
            "step": "Apply 10% rule twice: 5000 -> 500 -> 50 J",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Count trophic level steps carefully: 2 transfers = divide by 100.",
        "commonPitfall": "Applying 10% from sunlight (1%) instead of energy already trapped by plants."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Reactions: Corrosion of Silver & Copper",
        "questionText": "The green coating developed on copper vessels exposed to moist air is chemically:",
        "options": [
          "A) Copper sulphide (CuS)",
          "B) Basic copper carbonate [CuCO₃·Cu(OH)₂]",
          "C) Copper oxide (CuO)",
          "D) Copper nitrate"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Copper reacts slowly with moist CO₂ in air to lose its shiny brown surface and gain a green coat of basic copper carbonate.",
        "stepMarking": [
          {
            "step": "Identify basic copper carbonate as green coating",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Silver -> black Ag₂S; Copper -> green basic copper carbonate; Iron -> reddish-brown Fe₂O₃·xH₂O.",
        "commonPitfall": "Confusing green coating on copper with black CuO formed on heating."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Life Processes: Bile Juice Function",
        "questionText": "Even though bile juice contains no digestive enzymes, it is essential for digestion in the small intestine because it:",
        "options": [
          "A) Digests starch into maltose",
          "B) Makes acidic food alkaline and emulsifies large fat globules",
          "C) Breaks proteins into amino acids",
          "D) Absorbs water from undigested food"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Bile salts make the acidic chyme from stomach alkaline for pancreatic enzymes to act, and emulsify large fat globules into tiny droplets increasing surface area for lipase.",
        "stepMarking": [
          {
            "step": "Alkaline medium + emulsification of fats",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use the keyword \"emulsification of fats\" for full credit.",
        "commonPitfall": "Writing that bile directly digests fats into fatty acids."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Light: Power of a Lens Combination",
        "questionText": "Two thin lenses of power +3.5 D and -1.5 D are placed in contact. The focal length of the combination is:",
        "options": [
          "A) +50 cm",
          "B) +20 cm",
          "C) -50 cm",
          "D) +2.0 m"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Net power P = P₁ + P₂ = +3.5 - 1.5 = +2.0 D. Focal length f = 1/P = 1/2.0 m = +0.5 m = +50 cm.",
        "stepMarking": [
          {
            "step": "P = +2.0 D and f = 1/P = +0.5 m = +50 cm",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Convert metres to cm carefully (1 m = 100 cm).",
        "commonPitfall": "Leaving answer in metres or forgetting algebraic sign."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Acids, Bases and Salts: pH & Tooth Decay",
        "questionText": "Tooth enamel made of calcium hydroxyapatite starts corroding when the pH in the mouth falls below:",
        "options": [
          "A) 7.0",
          "B) 6.5",
          "C) 5.5",
          "D) 8.2"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Bacteria produce acids by degrading leftover food/sugars; when mouth pH falls below 5.5, tooth decay starts.",
        "stepMarking": [
          {
            "step": "State critical pH threshold < 5.5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember key NCERT pH numbers: Rain < 5.6 (acid rain), Mouth < 5.5 (tooth decay), Soil ~ 7.",
        "commonPitfall": "Confusing acid rain threshold (5.6) with tooth decay (5.5)."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Reactions and Equations: Thermal Decomposition",
        "questionText": "When ferrous sulphate crystals (FeSO₄·7H₂O) are heated strongly in a dry boiling tube, the colour changes from green to white and then brown. Identify the gases evolved:",
        "options": [
          "A) SO₂ and SO₃",
          "B) H₂S and O₂",
          "C) CO₂ and H₂",
          "D) NO₂ and O₂"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. 2FeSO₄(s) --(Heat)--> Fe₂O₃(s) + SO₂(g) + SO₃(g). Both sulphur dioxide and sulphur trioxide gases evolve with the characteristic smell of burning sulphur.",
        "stepMarking": [
          {
            "step": "Correct option (A) with balanced decomposition reaction",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember that Fe₂O₃ is reddish-brown solid residue and two oxides of sulphur (SO₂, SO₃) are evolved.",
        "commonPitfall": "Selecting only SO₂ or confusing with Pb(NO₃)₂ which evolves NO₂ + O₂."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Reactions and Equations: Double Displacement",
        "questionText": "On mixing aqueous solutions of barium chloride and sodium sulphate, a white precipitate is immediately formed. The precipitate is:",
        "options": [
          "A) NaCl",
          "B) BaSO₄",
          "C) BaS",
          "D) Na₂S"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s)↓ + 2NaCl(aq). Barium sulphate (BaSO₄) is insoluble in water and settles as a white precipitate.",
        "stepMarking": [
          {
            "step": "Identify BaSO₄ as insoluble white precipitate",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Double displacement reactions involving Ba²⁺ and SO₄²⁻ ions yield insoluble BaSO₄.",
        "commonPitfall": "Writing NaCl as the precipitate."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Acids, Bases and Salts: Chlor-Alkali Process",
        "questionText": "During the electrolysis of brine (aqueous NaCl), which products are formed at the anode and cathode respectively?",
        "options": [
          "A) Cl₂ at anode, H₂ at cathode",
          "B) H₂ at anode, Cl₂ at cathode",
          "C) NaOH at anode, Cl₂ at cathode",
          "D) O₂ at anode, Na at cathode"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. In the chlor-alkali process: 2NaCl(aq) + 2H₂O(l) → 2NaOH(aq) + Cl₂(g) [at anode] + H₂(g) [at cathode].",
        "stepMarking": [
          {
            "step": "Option (A) identifying Cl₂ at anode (+) and H₂ at cathode (-)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Negative Cl⁻ ions migrate to positive Anode; positive H⁺ ions migrate to negative Cathode.",
        "commonPitfall": "Swapping anode and cathode gases."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Acids, Bases and Salts: Water of Crystallisation",
        "questionText": "Which of the following salts does NOT contain water of crystallisation?",
        "options": [
          "A) Blue vitriol",
          "B) Baking soda",
          "C) Washing soda",
          "D) Gypsum"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Baking soda is anhydrous sodium hydrogencarbonate (NaHCO₃). Blue vitriol (CuSO₄·5H₂O), washing soda (Na₂CO₃·10H₂O), and gypsum (CaSO₄·2H₂O) contain water of crystallisation.",
        "stepMarking": [
          {
            "step": "Identify NaHCO₃ (baking soda) as anhydrous",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize formulas of all 4 hydrated salts from NCERT Chapter 2.",
        "commonPitfall": "Confusing baking soda (NaHCO₃) with washing soda (Na₂CO₃·10H₂O)."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Metals and Non-metals: Amphoteric Oxides",
        "questionText": "An element X reacts with oxygen to form an oxide X₂O₃ which reacts with both HCl and NaOH to produce salt and water. The element X is:",
        "options": [
          "A) Sodium",
          "B) Magnesium",
          "C) Aluminium",
          "D) Sulphur"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Aluminium forms aluminium oxide (Al₂O₃), which is amphoteric — it reacts with both acids and bases to yield salt and water.",
        "stepMarking": [
          {
            "step": "Option (C) identifying Al₂O₃ as amphoteric oxide",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "The two standard amphoteric oxides in Class 10 CBSE are Al₂O₃ and ZnO.",
        "commonPitfall": "Choosing basic oxides like Na₂O or MgO."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Metals and Non-metals: Thermit Reaction",
        "questionText": "The reaction Fe₂O₃(s) + 2Al(s) → 2Fe(l) + Al₂O₃(s) + Heat is used to join cracked railway tracks because:",
        "options": [
          "A) It is endothermic and cools the track",
          "B) It is highly exothermic producing molten iron",
          "C) Aluminium oxide melts into steel",
          "D) Iron is more reactive than aluminium"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. The thermit reaction is a highly exothermic displacement reaction where Al reduces Fe₂O₃ and the heat released melts the iron produced.",
        "stepMarking": [
          {
            "step": "Option (B) noting exothermic nature yielding molten iron",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always mention molten state of Fe(l) due to intense heat.",
        "commonPitfall": "Thinking Fe displaces Al instead of Al displacing Fe."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Carbon and its Compounds: Functional Groups",
        "questionText": "Identify the functional group present in CH₃–CO–CH₃ (Propanone):",
        "options": [
          "A) Aldehyde (-CHO)",
          "B) Ketone (>C=O)",
          "C) Carboxylic acid (-COOH)",
          "D) Alcohol (-OH)"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Propanone contains the carbonyl group (>C=O) bonded to two carbon atoms on either side, characteristic of ketones.",
        "stepMarking": [
          {
            "step": "Identify ketone functional group (>C=O)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Suffix \"-one\" always represents Ketone; \"-al\" represents Aldehyde.",
        "commonPitfall": "Confusing propanone with propanal."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q17",
        "qNum": 17,
        "section": "A",
        "marks": 1,
        "topic": "Magnetic Effects: Intersection of Field Lines",
        "questionText": "Assertion (A): Two magnetic field lines never intersect each other at any point.\nReason (R): If they intersected, a magnetic compass needle placed at that point would point in two different directions simultaneously, which is impossible.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Tangent to a field line gives the unique direction of net magnetic force at a point; two directions at one point cannot exist.",
        "stepMarking": [
          {
            "step": "Option (A) with compass needle contradiction logic",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Standard 1M/2M board favourite question.",
        "commonPitfall": "Confusing field lines with electric current paths."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q18",
        "qNum": 18,
        "section": "A",
        "marks": 1,
        "topic": "Carbon Compounds: Saturated vs Unsaturated Flames",
        "questionText": "Assertion (A): Saturated hydrocarbons normally burn with a clean blue flame in sufficient oxygen.\nReason (R): Saturated hydrocarbons contain a higher percentage of carbon than unsaturated hydrocarbons of the same chain length.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Saturated hydrocarbons burn with a clean flame because their percentage of carbon is LOWER than unsaturated hydrocarbons (alkenes/alkynes), allowing complete combustion.",
        "stepMarking": [
          {
            "step": "Option (C): A true, R false",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Unsaturated hydrocarbons have higher C:H mass ratio -> yellow sooty flame.",
        "commonPitfall": "Selecting (A) by overlooking \"higher percentage\"."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q19",
        "qNum": 19,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Reactions: Redox Reaction",
        "questionText": "Assertion (A): Reaction of zinc oxide with carbon (ZnO + C → Zn + CO) is a redox reaction.\nReason (R): Carbon is oxidised to CO while ZnO is reduced to Zn simultaneously.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Carbon gains oxygen (oxidation) and ZnO loses oxygen (reduction) simultaneously, proving it is a redox reaction.",
        "stepMarking": [
          {
            "step": "Option (A) with oxidation and reduction explanation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check truth of A, truth of R, and causal link.",
        "commonPitfall": "Confusing oxidising agent (ZnO) with substance oxidised (C)."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q20",
        "qNum": 20,
        "section": "A",
        "marks": 1,
        "topic": "Heredity: Sex Determination in Humans",
        "questionText": "Assertion (A): The sex of a newborn human child is determined genetically by the father.\nReason (R): All children inherit an X chromosome from their mother regardless of whether they are boys or girls.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Mother is XX (always contributes X). Father is XY (contributes X or Y). Thus inheriting X or Y from father decides XX (girl) or XY (boy).",
        "stepMarking": [
          {
            "step": "Option (A) with XX/XY chromosome inheritance proof",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Equal 50% probability exists for male and female child.",
        "commonPitfall": "Selecting (B) when R directly explains why mother does not decide sex."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Acids, Bases and Salts: Dilution Precaution",
        "questionText": "Why is it advised to add concentrated sulphuric acid slowly to water with constant stirring rather than adding water to acid?",
        "modelAnswer": "Dilution of concentrated acid is a highly exothermic process. If water is added to concentrated acid, the large heat generated instantly converts water to steam, causing the acidic mixture to splash out and cause severe burns. Adding acid slowly to water allows water to absorb the heat safely.",
        "stepMarking": [
          {
            "step": "Highly exothermic nature of acid dilution",
            "marks": "1 Mark"
          },
          {
            "step": "Risk of splashing/burns vs safe heat absorption",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention \"highly exothermic\" and \"splash out / container may break\".",
        "commonPitfall": "Saying acid explodes chemically with water."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q22",
        "qNum": 22,
        "section": "B",
        "marks": 2,
        "topic": "Life Processes: Rings of Cartilage & Residual Volume",
        "questionText": "(a) Why are rings of cartilage present in the human trachea?\n(b) What is the importance of residual volume of air in lungs?",
        "modelAnswer": "(a) C-shaped rings of cartilage ensure that the air passage (trachea) does not collapse even when there is very little air in it.\n(b) Residual volume ensures there is always sufficient time for oxygen to be absorbed and carbon dioxide to be released during the breathing cycle.",
        "stepMarking": [
          {
            "step": "(a) Prevent collapse of trachea",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Sufficient time for O2 absorption & CO2 release",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Quote NCERT directly for residual volume function.",
        "commonPitfall": "Stating cartilage filters dust instead of preventing collapse."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q23",
        "qNum": 23,
        "section": "B",
        "marks": 2,
        "topic": "Control and Coordination: Endocrine Feedback (Insulin)",
        "questionText": "How does our body respond when blood sugar level rises sharply after a meal? Name the hormone, the gland secreting it, and the feedback mechanism involved.",
        "modelAnswer": "Cells of the pancreas detect the rise in blood glucose and secrete more insulin hormone. Insulin stimulates body cells and liver to absorb glucose and convert excess into glycogen, lowering blood sugar. Once sugar drops to normal, insulin secretion decreases via feedback mechanism.",
        "stepMarking": [
          {
            "step": "Pancreas + Insulin identification",
            "marks": "1 Mark"
          },
          {
            "step": "Feedback regulation mechanism explained",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always name both Pancreas (gland) and Insulin (hormone).",
        "commonPitfall": "Writing adrenaline or thyroxine."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q24",
        "qNum": 24,
        "section": "B",
        "marks": 2,
        "topic": "Light: Convex Mirror as Rear-View Mirror",
        "questionText": "Why do drivers prefer a convex mirror over a plane or concave mirror as a rear-view mirror in vehicles? Give two reasons.",
        "modelAnswer": "1. A convex mirror always forms a virtual, erect, and diminished image regardless of object distance.\n2. It has a much wider field of view because it is curved outwards, allowing the driver to see a large area of traffic behind.",
        "stepMarking": [
          {
            "step": "Always forms erect image",
            "marks": "1 Mark"
          },
          {
            "step": "Wider field of view",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Write both points cleanly as numbered bullets.",
        "commonPitfall": "Confusing rear-view mirror (convex) with headlight reflector (concave)."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q25",
        "qNum": 25,
        "section": "B",
        "marks": 2,
        "topic": "Our Environment: Ozone Layer Depletion",
        "questionText": "What is ozone? How is it formed in the upper stratosphere, and which man-made chemicals caused its sharp depletion in the 1980s?",
        "modelAnswer": "Ozone (O₃) is a triatomic molecule of oxygen that shields Earth from harmful UV radiation.\nFormation: UV rays split O₂ into free oxygen atoms (O), which combine with O₂: O₂ --(UV)--> O + O; O + O₂ → O₃.\nDepleting agents: Chlorofluorocarbons (CFCs) used in refrigerants and fire extinguishers.",
        "stepMarking": [
          {
            "step": "UV splitting O₂ + O + O₂ -> O₃",
            "marks": "1 Mark"
          },
          {
            "step": "CFCs named as depleting chemical",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Include both chemical equations for O₃ formation.",
        "commonPitfall": "Writing CO₂ or SO₂ instead of CFCs."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q26",
        "qNum": 26,
        "section": "B",
        "marks": 2,
        "topic": "Metals and Non-metals: Reaction of Calcium & Sodium with Water",
        "questionText": "Give reasons:\n(i) Sodium catches fire when dropped in cold water, whereas calcium floats without catching fire.\n(ii) Aluminium does not corrode easily even though it is high in the reactivity series.",
        "modelAnswer": "(i) Na reacts violently with cold water and the exothermic heat ignites the evolved H₂ gas. Calcium reacts less violently (heat insufficient to ignite H₂), and bubbles of H₂ stick to its surface making it float.\n(ii) Aluminium forms a thin, tough protective layer of Al₂O₃ on its surface that prevents further oxidation.",
        "stepMarking": [
          {
            "step": "(i) Na exothermic H2 ignition vs Ca bubbles sticking",
            "marks": "1 Mark"
          },
          {
            "step": "(ii) Protective Al₂O₃ layer",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention \"H₂ bubbles stick to calcium surface\" explicitly.",
        "commonPitfall": "Saying calcium is lighter than water by density."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Metals and Non-metals: Electrolytic Refining of Copper",
        "questionText": "Explain the electrolytic refining of impure copper with a well-labelled description of:\n(a) Anode, Cathode, and Electrolyte used\n(b) What happens to soluble and insoluble impurities (anode mud)?",
        "modelAnswer": "(a) Anode: Thick block of impure copper; Cathode: Thin strip of pure copper; Electrolyte: Acidified aqueous copper sulphate (CuSO₄) solution.\n(b) On passing current, pure copper dissolves from anode into electrolyte and deposits on cathode. Soluble impurities pass into solution, while insoluble impurities (Ag, Au) settle below the anode as anode mud.",
        "stepMarking": [
          {
            "step": "(a) Correct anode, cathode, and electrolyte",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) Ion migration + anode mud explanation",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Remember: Impure metal is ALWAYS Anode; Pure thin strip is ALWAYS Cathode.",
        "commonPitfall": "Swapping impure and pure electrodes."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Life Processes: Nephron Urine Formation",
        "questionText": "Explain the three main steps involved in urine formation inside a nephron of the human kidney.",
        "modelAnswer": "1. Glomerular Filtration: Blood enters glomerulus under high pressure; water, urea, glucose, amino acids and salts filter into Bowman's capsule.\n2. Selective Reabsorption: As filtrate flows along renal tubule, useful substances like glucose, amino acids, salts and major amount of water are selectively reabsorbed into surrounding capillaries.\n3. Secretion / Collection: Remaining nitrogenous waste (urea) and excess water enter collecting duct as urine.",
        "stepMarking": [
          {
            "step": "Ultrafiltration in Bowman's capsule",
            "marks": "1 Mark"
          },
          {
            "step": "Selective reabsorption of glucose/water",
            "marks": "1.5 Marks"
          },
          {
            "step": "Amount of water reabsorbed depends on body water/waste",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Mention what determines how much water is reabsorbed: excess water in body and dissolved waste amount.",
        "commonPitfall": "Forgetting to list selective reabsorption of glucose and amino acids."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q29",
        "qNum": 29,
        "section": "C",
        "marks": 3,
        "topic": "Light: Concave Mirror Numerical",
        "questionText": "An object 4 cm in height is placed at 25 cm in front of a concave mirror of focal length 15 cm. At what distance from the mirror should a screen be placed to obtain a sharp image? Find the nature and height of the image.",
        "modelAnswer": "Given: h = +4 cm, u = -25 cm, f = -15 cm.\nMirror formula: 1/f = 1/v + 1/u => 1/(-15) = 1/v + 1/(-25)\n1/v = -1/15 + 1/25 = (-5 + 3)/75 = -2/75 => v = -37.5 cm.\nScreen should be placed 37.5 cm in front of the mirror.\nMagnification m = h'/h = -v/u => h'/4 = -(-37.5)/(-25) = -1.5 => h' = -6.0 cm.\nNature: Real, inverted and enlarged (height 6 cm).",
        "stepMarking": [
          {
            "step": "New Cartesian signs (u=-25, f=-15) & formula",
            "marks": "1 Mark"
          },
          {
            "step": "Image distance v = -37.5 cm",
            "marks": "1 Mark"
          },
          {
            "step": "Height h' = -6 cm & nature (real, inverted)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify with ray case: object between F (15 cm) and C (30 cm) -> image beyond C (37.5 cm), real, inverted, enlarged.",
        "commonPitfall": "Taking u or f as positive for a concave mirror."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q30",
        "qNum": 30,
        "section": "C",
        "marks": 3,
        "topic": "Human Eye: Myopia Cause & Correction",
        "questionText": "A student sitting on the last bench cannot read the blackboard clearly, though he can read his textbook comfortably.\n(a) Name the defect of vision and state its two causes.\n(b) Which lens corrects this defect? If his far point is 80 cm, calculate the power of the corrective lens required.",
        "modelAnswer": "(a) Defect: Myopia (near-sightedness). Causes: (i) Excessive curvature of the eye lens; (ii) Elongation of the eyeball.\n(b) Correction: Concave (diverging) lens.\nFor u = -∞, v = -80 cm = -0.8 m.\n1/f = 1/v - 1/u = 1/(-0.8) - 0 = -1.25 D.\nPower P = -1.25 D.",
        "stepMarking": [
          {
            "step": "(a) Myopia + two anatomical causes",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) Concave lens + correct sign numerical P = -1.25 D",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always convert cm to metres before computing Power P = 1/f(m).",
        "commonPitfall": "Using positive focal length for myopia correction."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q31",
        "qNum": 31,
        "section": "C",
        "marks": 3,
        "topic": "Electricity: Parallel Resistors & Total Current",
        "questionText": "Three resistors of 5 Ω, 10 Ω, and 30 Ω are connected in parallel across a 12 V battery. Calculate:\n(a) Current through each resistor\n(b) Total current drawn from the battery\n(c) Total effective resistance of the circuit.",
        "modelAnswer": "(a) Voltage across each branch is V = 12 V:\nI₁ = 12 / 5 = 2.4 A\nI₂ = 12 / 10 = 1.2 A\nI₃ = 12 / 30 = 0.4 A\n(b) Total current I = I₁ + I₂ + I₃ = 2.4 + 1.2 + 0.4 = 4.0 A.\n(c) 1/Rp = 1/5 + 1/10 + 1/30 = (6 + 3 + 1)/30 = 10/30 = 1/3 => Rp = 3 Ω (or V/I = 12/4 = 3 Ω).",
        "stepMarking": [
          {
            "step": "(a) Branch currents 2.4 A, 1.2 A, 0.4 A",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Total current 4.0 A",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Effective resistance 3 Ω",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check: Rp (3 Ω) must always be smaller than the smallest individual resistor (5 Ω).",
        "commonPitfall": "Forgetting to reciprocate 1/Rp = 1/3 back to Rp = 3 Ω."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q32",
        "qNum": 32,
        "section": "C",
        "marks": 3,
        "topic": "How do Organisms Reproduce: Contraceptive Methods",
        "questionText": "List three different categories of contraceptive methods used to prevent unwanted pregnancies, giving one example of each. Which method also protects against sexually transmitted diseases (STDs)?",
        "modelAnswer": "1. Mechanical / Barrier methods: Condoms (male/female) or cervical caps — prevent sperm from reaching egg.\n2. Chemical / Hormonal methods: Oral contraceptive pills — alter hormonal balance to prevent ovulation.\n3. Intra-Uterine Devices (IUDs) / Surgical methods: Copper-T (IUD) or Vasectomy/Tubectomy.\nSTD Protection: Barrier method (Condoms) provides protection against STDs such as HIV-AIDS, gonorrhoea, and syphilis.",
        "stepMarking": [
          {
            "step": "Three distinct categories with 1 example each",
            "marks": "2 Marks"
          },
          {
            "step": "Condoms/barrier method protects from STDs",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight that hormonal pills can cause side effects if taken carelessly.",
        "commonPitfall": "Saying IUDs or pills protect against STDs."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q33",
        "qNum": 33,
        "section": "C",
        "marks": 3,
        "topic": "Heredity: Dihybrid Cross F₂ Phenotypic Ratio",
        "questionText": "In a cross between pea plants having Round Yellow seeds (RRYY) and Wrinkled Green seeds (rryy), what type of seeds appear in F₁? State the F₂ phenotypic ratio and explain what it proves.",
        "modelAnswer": "F₁ generation: All plants produce Round Yellow seeds (RrYy) because Round (R) and Yellow (Y) are dominant traits.\nF₂ phenotypic ratio: 9 (Round Yellow) : 3 (Round Green) : 3 (Wrinkled Yellow) : 1 (Wrinkled Green).\nConclusion: It proves the Law of Independent Assortment — seed shape and seed colour traits are inherited independently of each other.",
        "stepMarking": [
          {
            "step": "F1 all Round Yellow (RrYy)",
            "marks": "1 Mark"
          },
          {
            "step": "F2 ratio 9:3:3:1 with labels",
            "marks": "1 Mark"
          },
          {
            "step": "Independent inheritance of traits",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "New recombinant combinations (Round Green & Wrinkled Yellow) prove independent assortment.",
        "commonPitfall": "Writing 3:1 monohybrid ratio instead of 9:3:3:1."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q34",
        "qNum": 34,
        "section": "D",
        "marks": 5,
        "topic": "Carbon and its Compounds: Ethanol, Ethanoic Acid & Esterification",
        "questionText": "(a) Complete the following chemical equations:\n  (i) CH₃COOH + C₂H₅OH --(Conc. H₂SO₄)--> ?\n  (ii) CH₃CH₂OH --(Alkaline KMnO₄ + Heat)--> ?\n  (iii) CH₃COOC₂H₅ + NaOH → ?\n(b) Draw the electron dot structure of Ethanoic acid or Ethyne (C₂H₂).\n(c) Explain why soaps do not form lather easily in hard water.",
        "modelAnswer": "(a) (i) CH₃COOC₂H₅ (Ethyl ethanoate ester) + H₂O (Esterification).\n(ii) CH₃COOH (Ethanoic acid) + H₂O (Oxidation).\n(iii) CH₃COONa (Sodium ethanoate) + C₂H₅OH (Saponification).\n(b) Ethyne: H : C ⋮⋮ C : H (each carbon shares 3 electron pairs with other carbon and 1 pair with H).\n(c) Hard water contains Ca²⁺ and Mg²⁺ ions, which react with soap molecules (sodium salts of fatty acids) to form an insoluble curdy white precipitate called scum, wasting soap.",
        "stepMarking": [
          {
            "step": "(a) Three balanced equations with product names",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Correct covalent electron dot structure",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Ca²⁺/Mg²⁺ scum formation explanation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Write IUPAC names below products in organic equations.",
        "commonPitfall": "Confusing esterification (acid + alcohol) with saponification (ester + NaOH)."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q35",
        "qNum": 35,
        "section": "D",
        "marks": 5,
        "topic": "Life Processes: Human Alimentary Canal & Respiration",
        "questionText": "(a) Name the enzyme present in (i) Saliva, (ii) Gastric juice, (iii) Pancreatic juice (for protein) and state their substrates and products.\n(b) How is the small intestine structurally adapted for maximum absorption of digested food?\n(c) Why do herbivores have a longer small intestine than carnivores?",
        "modelAnswer": "(a) (i) Salivary amylase: Starch → Maltose (simple sugar).\n(ii) Pepsin (active in acidic HCl): Proteins → Peptones.\n(iii) Trypsin (active in alkaline medium): Proteins → Simpler peptides/amino acids.\n(b) Inner lining of small intestine has millions of finger-like projections called villi, which increase surface area immensely and are richly supplied with blood vessels to transport absorbed nutrients.\n(c) Herbivores eat grass rich in cellulose, which takes much longer to digest; carnivores eat meat which is easier to digest, hence shorter small intestine.",
        "stepMarking": [
          {
            "step": "(a) All 3 enzymes, substrates, products",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Villi + rich blood supply",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Cellulose digestion in herbivores",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention acidic medium for Pepsin and alkaline medium for Trypsin.",
        "commonPitfall": "Saying pepsin digests starch or trypsin works in stomach."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q36",
        "qNum": 36,
        "section": "D",
        "marks": 5,
        "topic": "Electricity: Ohm's Law, V-I Graph & Series-Parallel Network",
        "questionText": "(a) State Ohm's law and derive the relation for equivalent resistance of two resistors R₁ and R₂ connected in parallel.\n(b) Two lamps rated 100 W at 220 V and 60 W at 220 V are connected in parallel to a 220 V supply. Calculate the total current drawn from the line.\n(c) Why is tungsten used almost exclusively for filament of electric lamps?",
        "modelAnswer": "(a) Ohm's Law: At constant temperature, current I flowing through a metallic conductor is directly proportional to potential difference V across its ends (V = IR).\nParallel derivation: I = I₁ + I₂ => V/Rp = V/R₁ + V/R₂ => 1/Rp = 1/R₁ + 1/R₂.\n(b) Total power in parallel P = 100 + 60 = 160 W.\nCurrent I = P / V = 160 / 220 = 8/11 ≈ 0.727 A.\n(c) Tungsten has a very high melting point (3380°C) and high resistivity, so it glows white-hot without melting.",
        "stepMarking": [
          {
            "step": "(a) Ohm's law + 1/Rp derivation",
            "marks": "2 Marks"
          },
          {
            "step": "(b) P = 160 W and I = 0.73 A",
            "marks": "2 Marks"
          },
          {
            "step": "(c) High melting point 3380°C of tungsten",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In parallel, powers simply add up: P_total = P₁ + P₂.",
        "commonPitfall": "Forgetting \"at constant physical conditions / temperature\" in Ohm's law."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q37",
        "qNum": 37,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: pH Scale & Everyday Salts (Acids, Bases and Salts)",
        "questionText": "Read the passage and answer the questions:\nA student tested four aqueous solutions P, Q, R, and S with universal indicator paper. Solution P turned dark red (pH = 1), Q turned orange (pH = 4), R turned green (pH = 7), and S turned dark violet (pH = 13).\n\n(a) Arrange P, Q, R, S in increasing order of hydrogen ion [H⁺] concentration. (1M)\n(b) Identify which solution can be used to treat acidity in the stomach or neutralize acidic soil, and why. (1M)\n(c) What happens when solid sodium carbonate is added to solution P? Write the balanced chemical equation assuming P is HCl. (2M)",
        "modelAnswer": "(a) Increasing [H⁺]: S (pH 13) < R (pH 7) < Q (pH 4) < P (pH 1).\n(b) Solution S (strong base, or mild bases like Mg(OH)₂/CaO) neutralizes excess H⁺ ions, though mild antacids like milk of magnesia (pH ~10) are preferred internally.\n(c) Brisk effervescence of CO₂ gas occurs, which turns lime water milky.\nEquation: Na₂CO₃(s) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g).",
        "stepMarking": [
          {
            "step": "(a) Correct order S < R < Q < P",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Neutralisation logic",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Effervescence + balanced Na₂CO₃ + 2HCl equation",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Higher pH means LOWER H⁺ concentration!",
        "commonPitfall": "Arranging pH values directly as H⁺ order (reversing the inequality)."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q38",
        "qNum": 38,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Refraction Through Glass Slab & Lenses (Light)",
        "questionText": "Read the passage and answer the questions:\nWhen a ray of light travels obliquely from air (n = 1.0) into crown glass (n = 1.52) and diamond (n = 2.42), its speed decreases depending on the optical density of the medium. Lenses made of glass are used in cameras, projectors, and spectacles.\n\n(a) State Snell's Law of refraction. (1M)\n(b) In which medium (crown glass or diamond) is the speed of light lower, and by what ratio? (1M)\n(c) If the speed of light in vacuum is 3 × 10⁸ m/s and refractive index of water is 4/3, calculate the speed of light in water. Also state what happens to lateral displacement if thickness of a glass slab increases. (2M)",
        "modelAnswer": "(a) Snell's Law: Ratio of sine of angle of incidence to sine of angle of refraction is constant for a given colour of light and pair of media (sin i / sin r = n).\n(b) Speed is lower in diamond (higher refractive index n = 2.42); ratio v_glass / v_diamond = 2.42 / 1.52 ≈ 1.59.\n(c) v_water = c / n = (3 × 10⁸) / (4/3) = 2.25 × 10⁸ m/s. Lateral displacement INCREASES directly as slab thickness increases.",
        "stepMarking": [
          {
            "step": "(a) Snell's law statement/formula",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Diamond has lower speed",
            "marks": "1 Mark"
          },
          {
            "step": "(c) v = 2.25 × 10⁸ m/s + direct relation with thickness",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "v = c / n — refractive index is inversely proportional to speed of light.",
        "commonPitfall": "Multiplying c by n instead of dividing c by n."
      },
      {
        "id": "kvs-c10-sci-2024-pb1-q39",
        "qNum": 39,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Ohm's Law & Household Power Circuits (Electricity)",
        "questionText": "Read the passage and answer the questions:\nRiya set up an electric circuit with a 6 V battery, two resistors R₁ = 4 Ω and R₂ = 8 Ω connected in series, an ammeter, and a voltmeter across R₁.\n\n(a) Calculate the total resistance and ammeter reading in the circuit. (1M)\n(b) What will be the voltmeter reading across R₁ (4 Ω)? (1M)\n(c) Calculate the heat dissipated in R₂ (8 Ω) in 2 minutes. (2M)",
        "modelAnswer": "(a) Rs = R₁ + R₂ = 4 + 8 = 12 Ω. Current I = V / Rs = 6 / 12 = 0.5 A.\n(b) Voltmeter reading V₁ = I × R₁ = 0.5 × 4 = 2.0 V.\n(c) Time t = 2 min = 120 s. Heat H = I² R₂ t = (0.5)² × 8 × 120 = 0.25 × 8 × 120 = 240 J.",
        "stepMarking": [
          {
            "step": "(a) Rs = 12 Ω, I = 0.5 A",
            "marks": "1 Mark"
          },
          {
            "step": "(b) V₁ = 2 V",
            "marks": "1 Mark"
          },
          {
            "step": "(c) H = I²Rt with t = 120 s = 240 J",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Always convert minutes to SI unit seconds (2 min = 120 s).",
        "commonPitfall": "Using t = 2 instead of 120 s in Joule's formula."
      }
    ]
  },
  {
    "id": "kvs-c10-sci-2024-pb2",
    "title": "KVS Mumbai Region Class 10 Science Pre-Board Paper II (2024)",
    "subject": "Science",
    "targetClass": "Class 10",
    "year": 2024,
    "paperType": "PRE_BOARD",
    "paperCode": "KVS/MUM/C10/SCI-2",
    "totalMarks": 80,
    "durationMins": 180,
    "difficulty": "CHALLENGING",
    "isFree": false,
    "totalQuestions": 39,
    "generalInstructions": [
      "This question paper consists of 39 questions in 5 sections: Section A to Section E.",
      "Section A consists of 20 objective type questions of 1 mark each (Q1–Q16 MCQs, Q17–Q20 Assertion-Reason).",
      "Section B consists of 6 Very Short Answer questions of 2 marks each (30–50 words).",
      "Section C consists of 7 Short Answer questions of 3 marks each (50–80 words).",
      "Section D consists of 3 Long Answer questions of 5 marks each (80–120 words).",
      "Section E consists of 3 source-based/case-based units of 4 marks each with sub-parts."
    ],
    "questions": [
      {
        "id": "kvs-c10-sci-2024-pb2-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Magnetic Effects: Solenoid Field Pattern",
        "questionText": "The magnetic field lines inside a long straight current-carrying solenoid are:",
        "options": [
          "A) Concentric circles",
          "B) Parallel straight lines indicating uniform magnetic field",
          "C) Radial outward lines",
          "D) Zero everywhere inside"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Inside a current-carrying solenoid, the magnetic field lines are parallel and equidistant straight lines, showing that the magnetic field is uniform at all points inside.",
        "stepMarking": [
          {
            "step": "Parallel straight lines = uniform magnetic field inside solenoid",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember NCERT phrase: \"field lines are in the form of parallel straight lines\".",
        "commonPitfall": "Confusing solenoid interior with straight conductor circular field."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Our Environment: 10% Law of Energy Flow",
        "questionText": "In a terrestrial food chain Grass → Deer → Lion, if 5000 J of solar energy is captured by grass as chemical energy, how much energy is available to the lion?",
        "options": [
          "A) 500 J",
          "B) 50 J",
          "C) 5 J",
          "D) 0.5 J"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. According to Lindeman's 10% law: Grass (5000 J) → Deer (10% = 500 J) → Lion (10% of 500 = 50 J).",
        "stepMarking": [
          {
            "step": "Apply 10% rule twice: 5000 -> 500 -> 50 J",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Count trophic level steps carefully: 2 transfers = divide by 100.",
        "commonPitfall": "Applying 10% from sunlight (1%) instead of energy already trapped by plants."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Reactions: Corrosion of Silver & Copper",
        "questionText": "The green coating developed on copper vessels exposed to moist air is chemically:",
        "options": [
          "A) Copper sulphide (CuS)",
          "B) Basic copper carbonate [CuCO₃·Cu(OH)₂]",
          "C) Copper oxide (CuO)",
          "D) Copper nitrate"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Copper reacts slowly with moist CO₂ in air to lose its shiny brown surface and gain a green coat of basic copper carbonate.",
        "stepMarking": [
          {
            "step": "Identify basic copper carbonate as green coating",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Silver -> black Ag₂S; Copper -> green basic copper carbonate; Iron -> reddish-brown Fe₂O₃·xH₂O.",
        "commonPitfall": "Confusing green coating on copper with black CuO formed on heating."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Life Processes: Bile Juice Function",
        "questionText": "Even though bile juice contains no digestive enzymes, it is essential for digestion in the small intestine because it:",
        "options": [
          "A) Digests starch into maltose",
          "B) Makes acidic food alkaline and emulsifies large fat globules",
          "C) Breaks proteins into amino acids",
          "D) Absorbs water from undigested food"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Bile salts make the acidic chyme from stomach alkaline for pancreatic enzymes to act, and emulsify large fat globules into tiny droplets increasing surface area for lipase.",
        "stepMarking": [
          {
            "step": "Alkaline medium + emulsification of fats",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use the keyword \"emulsification of fats\" for full credit.",
        "commonPitfall": "Writing that bile directly digests fats into fatty acids."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Light: Power of a Lens Combination",
        "questionText": "Two thin lenses of power +3.5 D and -1.5 D are placed in contact. The focal length of the combination is:",
        "options": [
          "A) +50 cm",
          "B) +20 cm",
          "C) -50 cm",
          "D) +2.0 m"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Net power P = P₁ + P₂ = +3.5 - 1.5 = +2.0 D. Focal length f = 1/P = 1/2.0 m = +0.5 m = +50 cm.",
        "stepMarking": [
          {
            "step": "P = +2.0 D and f = 1/P = +0.5 m = +50 cm",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Convert metres to cm carefully (1 m = 100 cm).",
        "commonPitfall": "Leaving answer in metres or forgetting algebraic sign."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Acids, Bases and Salts: pH & Tooth Decay",
        "questionText": "Tooth enamel made of calcium hydroxyapatite starts corroding when the pH in the mouth falls below:",
        "options": [
          "A) 7.0",
          "B) 6.5",
          "C) 5.5",
          "D) 8.2"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Bacteria produce acids by degrading leftover food/sugars; when mouth pH falls below 5.5, tooth decay starts.",
        "stepMarking": [
          {
            "step": "State critical pH threshold < 5.5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember key NCERT pH numbers: Rain < 5.6 (acid rain), Mouth < 5.5 (tooth decay), Soil ~ 7.",
        "commonPitfall": "Confusing acid rain threshold (5.6) with tooth decay (5.5)."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Reactions and Equations: Thermal Decomposition",
        "questionText": "When ferrous sulphate crystals (FeSO₄·7H₂O) are heated strongly in a dry boiling tube, the colour changes from green to white and then brown. Identify the gases evolved:",
        "options": [
          "A) SO₂ and SO₃",
          "B) H₂S and O₂",
          "C) CO₂ and H₂",
          "D) NO₂ and O₂"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. 2FeSO₄(s) --(Heat)--> Fe₂O₃(s) + SO₂(g) + SO₃(g). Both sulphur dioxide and sulphur trioxide gases evolve with the characteristic smell of burning sulphur.",
        "stepMarking": [
          {
            "step": "Correct option (A) with balanced decomposition reaction",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember that Fe₂O₃ is reddish-brown solid residue and two oxides of sulphur (SO₂, SO₃) are evolved.",
        "commonPitfall": "Selecting only SO₂ or confusing with Pb(NO₃)₂ which evolves NO₂ + O₂."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Reactions and Equations: Double Displacement",
        "questionText": "On mixing aqueous solutions of barium chloride and sodium sulphate, a white precipitate is immediately formed. The precipitate is:",
        "options": [
          "A) NaCl",
          "B) BaSO₄",
          "C) BaS",
          "D) Na₂S"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s)↓ + 2NaCl(aq). Barium sulphate (BaSO₄) is insoluble in water and settles as a white precipitate.",
        "stepMarking": [
          {
            "step": "Identify BaSO₄ as insoluble white precipitate",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Double displacement reactions involving Ba²⁺ and SO₄²⁻ ions yield insoluble BaSO₄.",
        "commonPitfall": "Writing NaCl as the precipitate."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Acids, Bases and Salts: Chlor-Alkali Process",
        "questionText": "During the electrolysis of brine (aqueous NaCl), which products are formed at the anode and cathode respectively?",
        "options": [
          "A) Cl₂ at anode, H₂ at cathode",
          "B) H₂ at anode, Cl₂ at cathode",
          "C) NaOH at anode, Cl₂ at cathode",
          "D) O₂ at anode, Na at cathode"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. In the chlor-alkali process: 2NaCl(aq) + 2H₂O(l) → 2NaOH(aq) + Cl₂(g) [at anode] + H₂(g) [at cathode].",
        "stepMarking": [
          {
            "step": "Option (A) identifying Cl₂ at anode (+) and H₂ at cathode (-)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Negative Cl⁻ ions migrate to positive Anode; positive H⁺ ions migrate to negative Cathode.",
        "commonPitfall": "Swapping anode and cathode gases."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Acids, Bases and Salts: Water of Crystallisation",
        "questionText": "Which of the following salts does NOT contain water of crystallisation?",
        "options": [
          "A) Blue vitriol",
          "B) Baking soda",
          "C) Washing soda",
          "D) Gypsum"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Baking soda is anhydrous sodium hydrogencarbonate (NaHCO₃). Blue vitriol (CuSO₄·5H₂O), washing soda (Na₂CO₃·10H₂O), and gypsum (CaSO₄·2H₂O) contain water of crystallisation.",
        "stepMarking": [
          {
            "step": "Identify NaHCO₃ (baking soda) as anhydrous",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize formulas of all 4 hydrated salts from NCERT Chapter 2.",
        "commonPitfall": "Confusing baking soda (NaHCO₃) with washing soda (Na₂CO₃·10H₂O)."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Metals and Non-metals: Amphoteric Oxides",
        "questionText": "An element X reacts with oxygen to form an oxide X₂O₃ which reacts with both HCl and NaOH to produce salt and water. The element X is:",
        "options": [
          "A) Sodium",
          "B) Magnesium",
          "C) Aluminium",
          "D) Sulphur"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Aluminium forms aluminium oxide (Al₂O₃), which is amphoteric — it reacts with both acids and bases to yield salt and water.",
        "stepMarking": [
          {
            "step": "Option (C) identifying Al₂O₃ as amphoteric oxide",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "The two standard amphoteric oxides in Class 10 CBSE are Al₂O₃ and ZnO.",
        "commonPitfall": "Choosing basic oxides like Na₂O or MgO."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Metals and Non-metals: Thermit Reaction",
        "questionText": "The reaction Fe₂O₃(s) + 2Al(s) → 2Fe(l) + Al₂O₃(s) + Heat is used to join cracked railway tracks because:",
        "options": [
          "A) It is endothermic and cools the track",
          "B) It is highly exothermic producing molten iron",
          "C) Aluminium oxide melts into steel",
          "D) Iron is more reactive than aluminium"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. The thermit reaction is a highly exothermic displacement reaction where Al reduces Fe₂O₃ and the heat released melts the iron produced.",
        "stepMarking": [
          {
            "step": "Option (B) noting exothermic nature yielding molten iron",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always mention molten state of Fe(l) due to intense heat.",
        "commonPitfall": "Thinking Fe displaces Al instead of Al displacing Fe."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Carbon and its Compounds: Functional Groups",
        "questionText": "Identify the functional group present in CH₃–CO–CH₃ (Propanone):",
        "options": [
          "A) Aldehyde (-CHO)",
          "B) Ketone (>C=O)",
          "C) Carboxylic acid (-COOH)",
          "D) Alcohol (-OH)"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Propanone contains the carbonyl group (>C=O) bonded to two carbon atoms on either side, characteristic of ketones.",
        "stepMarking": [
          {
            "step": "Identify ketone functional group (>C=O)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Suffix \"-one\" always represents Ketone; \"-al\" represents Aldehyde.",
        "commonPitfall": "Confusing propanone with propanal."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Carbon and its Compounds: Covalent Bonds in Pentane",
        "questionText": "Pentane has the molecular formula C₅H₁₂. How many covalent bonds are present in one molecule of pentane?",
        "options": [
          "A) 5",
          "B) 12",
          "C) 16",
          "D) 17"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Pentane has 4 C–C single bonds and 12 C–H single bonds, giving 4 + 12 = 16 covalent bonds.",
        "stepMarking": [
          {
            "step": "Option (C): 4 C–C + 12 C–H = 16 covalent bonds",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For any alkane CₙH₂ₙ₊₂, total covalent bonds = (n-1) + (2n+2) = 3n + 1. For n=5, 3(5)+1 = 16.",
        "commonPitfall": "Counting only C–H bonds (12) or forgetting one C–C bond."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Life Processes: Human Heart Double Circulation",
        "questionText": "Which chamber of the human heart receives oxygenated blood directly from the lungs via pulmonary veins?",
        "options": [
          "A) Right atrium",
          "B) Right ventricle",
          "C) Left atrium",
          "D) Left ventricle"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Oxygenated blood from the lungs enters the left atrium through the pulmonary veins before passing into the left ventricle.",
        "stepMarking": [
          {
            "step": "Identify Left Atrium as receiver of oxygenated blood from lungs",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Left side of heart always carries oxygenated blood; Atria always receive blood.",
        "commonPitfall": "Confusing pulmonary vein with pulmonary artery or atrium with ventricle."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Life Processes: Anaerobic Respiration in Muscle Cells",
        "questionText": "During vigorous exercise, muscle cramps occur due to accumulation of:",
        "options": [
          "A) Ethanol and CO₂",
          "B) Lactic acid",
          "C) Pyruvate",
          "D) Acetic acid"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Lack of oxygen in human skeletal muscle cells converts 3-carbon pyruvate into lactic acid (3-carbon molecule), causing cramps.",
        "stepMarking": [
          {
            "step": "Identify lactic acid accumulation during anaerobic muscle respiration",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Distinguish yeast fermentation (ethanol + CO₂) from muscle lack-of-O₂ pathway (lactic acid only).",
        "commonPitfall": "Selecting ethanol for human muscles."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q17",
        "qNum": 17,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Reactions: Redox Reaction",
        "questionText": "Assertion (A): Reaction of zinc oxide with carbon (ZnO + C → Zn + CO) is a redox reaction.\nReason (R): Carbon is oxidised to CO while ZnO is reduced to Zn simultaneously.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Carbon gains oxygen (oxidation) and ZnO loses oxygen (reduction) simultaneously, proving it is a redox reaction.",
        "stepMarking": [
          {
            "step": "Option (A) with oxidation and reduction explanation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check truth of A, truth of R, and causal link.",
        "commonPitfall": "Confusing oxidising agent (ZnO) with substance oxidised (C)."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q18",
        "qNum": 18,
        "section": "A",
        "marks": 1,
        "topic": "Heredity: Sex Determination in Humans",
        "questionText": "Assertion (A): The sex of a newborn human child is determined genetically by the father.\nReason (R): All children inherit an X chromosome from their mother regardless of whether they are boys or girls.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Mother is XX (always contributes X). Father is XY (contributes X or Y). Thus inheriting X or Y from father decides XX (girl) or XY (boy).",
        "stepMarking": [
          {
            "step": "Option (A) with XX/XY chromosome inheritance proof",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Equal 50% probability exists for male and female child.",
        "commonPitfall": "Selecting (B) when R directly explains why mother does not decide sex."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q19",
        "qNum": 19,
        "section": "A",
        "marks": 1,
        "topic": "Electricity: Domestic Parallel Wiring",
        "questionText": "Assertion (A): Domestic electrical appliances in a house are connected in parallel rather than series.\nReason (R): In a parallel circuit, each appliance receives the full mains voltage and has an independent switch.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Parallel connection ensures constant 220 V across every appliance, lower total resistance, and independent operation.",
        "stepMarking": [
          {
            "step": "Option (A) explaining independent switching and constant voltage",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In series, if one bulb fuses, the entire circuit breaks.",
        "commonPitfall": "Thinking parallel wiring increases total circuit resistance."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q20",
        "qNum": 20,
        "section": "A",
        "marks": 1,
        "topic": "Our Environment: Biological Magnification",
        "questionText": "Assertion (A): Maximum concentration of non-biodegradable pesticides like DDT accumulates in human beings at the top of the food chain.\nReason (R): Pesticides get degraded rapidly at every successive trophic level.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Assertion A is true (biomagnification), but Reason R is false because non-biodegradable pesticides are NOT degraded or washed away — they accumulate progressively.",
        "stepMarking": [
          {
            "step": "Option (C): A true, R false",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Read words like \"degraded rapidly\" carefully — non-biodegradable chemicals persist.",
        "commonPitfall": "Selecting (A) without catching the contradiction in R."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Control and Coordination: Endocrine Feedback (Insulin)",
        "questionText": "How does our body respond when blood sugar level rises sharply after a meal? Name the hormone, the gland secreting it, and the feedback mechanism involved.",
        "modelAnswer": "Cells of the pancreas detect the rise in blood glucose and secrete more insulin hormone. Insulin stimulates body cells and liver to absorb glucose and convert excess into glycogen, lowering blood sugar. Once sugar drops to normal, insulin secretion decreases via feedback mechanism.",
        "stepMarking": [
          {
            "step": "Pancreas + Insulin identification",
            "marks": "1 Mark"
          },
          {
            "step": "Feedback regulation mechanism explained",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always name both Pancreas (gland) and Insulin (hormone).",
        "commonPitfall": "Writing adrenaline or thyroxine."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q22",
        "qNum": 22,
        "section": "B",
        "marks": 2,
        "topic": "Light: Convex Mirror as Rear-View Mirror",
        "questionText": "Why do drivers prefer a convex mirror over a plane or concave mirror as a rear-view mirror in vehicles? Give two reasons.",
        "modelAnswer": "1. A convex mirror always forms a virtual, erect, and diminished image regardless of object distance.\n2. It has a much wider field of view because it is curved outwards, allowing the driver to see a large area of traffic behind.",
        "stepMarking": [
          {
            "step": "Always forms erect image",
            "marks": "1 Mark"
          },
          {
            "step": "Wider field of view",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Write both points cleanly as numbered bullets.",
        "commonPitfall": "Confusing rear-view mirror (convex) with headlight reflector (concave)."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q23",
        "qNum": 23,
        "section": "B",
        "marks": 2,
        "topic": "Our Environment: Ozone Layer Depletion",
        "questionText": "What is ozone? How is it formed in the upper stratosphere, and which man-made chemicals caused its sharp depletion in the 1980s?",
        "modelAnswer": "Ozone (O₃) is a triatomic molecule of oxygen that shields Earth from harmful UV radiation.\nFormation: UV rays split O₂ into free oxygen atoms (O), which combine with O₂: O₂ --(UV)--> O + O; O + O₂ → O₃.\nDepleting agents: Chlorofluorocarbons (CFCs) used in refrigerants and fire extinguishers.",
        "stepMarking": [
          {
            "step": "UV splitting O₂ + O + O₂ -> O₃",
            "marks": "1 Mark"
          },
          {
            "step": "CFCs named as depleting chemical",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Include both chemical equations for O₃ formation.",
        "commonPitfall": "Writing CO₂ or SO₂ instead of CFCs."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q24",
        "qNum": 24,
        "section": "B",
        "marks": 2,
        "topic": "Metals and Non-metals: Reaction of Calcium & Sodium with Water",
        "questionText": "Give reasons:\n(i) Sodium catches fire when dropped in cold water, whereas calcium floats without catching fire.\n(ii) Aluminium does not corrode easily even though it is high in the reactivity series.",
        "modelAnswer": "(i) Na reacts violently with cold water and the exothermic heat ignites the evolved H₂ gas. Calcium reacts less violently (heat insufficient to ignite H₂), and bubbles of H₂ stick to its surface making it float.\n(ii) Aluminium forms a thin, tough protective layer of Al₂O₃ on its surface that prevents further oxidation.",
        "stepMarking": [
          {
            "step": "(i) Na exothermic H2 ignition vs Ca bubbles sticking",
            "marks": "1 Mark"
          },
          {
            "step": "(ii) Protective Al₂O₃ layer",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention \"H₂ bubbles stick to calcium surface\" explicitly.",
        "commonPitfall": "Saying calcium is lighter than water by density."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q25",
        "qNum": 25,
        "section": "B",
        "marks": 2,
        "topic": "Electricity: Heating Elements Alloy Preference",
        "questionText": "Why are coils of electric toasters and electric irons made of an alloy (nichrome) rather than a pure metal like copper?",
        "modelAnswer": "1. Alloys have much higher resistivity than their constituent pure metals, producing substantial Joule heat (H = I²Rt).\n2. Alloys do not oxidise (burn) readily at high red-hot temperatures.",
        "stepMarking": [
          {
            "step": "Higher resistivity of alloys",
            "marks": "1 Mark"
          },
          {
            "step": "Does not oxidise/burn easily at high temperature",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Both points are strictly required in CBSE marking schemes.",
        "commonPitfall": "Writing \"high melting point\" alone without mentioning non-oxidation."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q26",
        "qNum": 26,
        "section": "B",
        "marks": 2,
        "topic": "How do Organisms Reproduce: Placenta Role",
        "questionText": "Define placenta and state two vital functions it performs for the developing human embryo inside the uterus.",
        "modelAnswer": "Placenta is a special disc-shaped tissue embedded in the uterine wall containing villi on the embryo's side and blood spaces on the mother's side.\nFunctions: (1) Transfers glucose and oxygen from mother's blood to embryo; (2) Removes metabolic wastes generated by the embryo into mother's blood.",
        "stepMarking": [
          {
            "step": "Structure/definition with villi",
            "marks": "1 Mark"
          },
          {
            "step": "Nutrient/O2 supply & waste removal",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight the huge surface area provided by villi.",
        "commonPitfall": "Saying mother and baby blood mixes directly."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Light: Concave Mirror Numerical",
        "questionText": "An object 4 cm in height is placed at 25 cm in front of a concave mirror of focal length 15 cm. At what distance from the mirror should a screen be placed to obtain a sharp image? Find the nature and height of the image.",
        "modelAnswer": "Given: h = +4 cm, u = -25 cm, f = -15 cm.\nMirror formula: 1/f = 1/v + 1/u => 1/(-15) = 1/v + 1/(-25)\n1/v = -1/15 + 1/25 = (-5 + 3)/75 = -2/75 => v = -37.5 cm.\nScreen should be placed 37.5 cm in front of the mirror.\nMagnification m = h'/h = -v/u => h'/4 = -(-37.5)/(-25) = -1.5 => h' = -6.0 cm.\nNature: Real, inverted and enlarged (height 6 cm).",
        "stepMarking": [
          {
            "step": "New Cartesian signs (u=-25, f=-15) & formula",
            "marks": "1 Mark"
          },
          {
            "step": "Image distance v = -37.5 cm",
            "marks": "1 Mark"
          },
          {
            "step": "Height h' = -6 cm & nature (real, inverted)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify with ray case: object between F (15 cm) and C (30 cm) -> image beyond C (37.5 cm), real, inverted, enlarged.",
        "commonPitfall": "Taking u or f as positive for a concave mirror."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Human Eye: Myopia Cause & Correction",
        "questionText": "A student sitting on the last bench cannot read the blackboard clearly, though he can read his textbook comfortably.\n(a) Name the defect of vision and state its two causes.\n(b) Which lens corrects this defect? If his far point is 80 cm, calculate the power of the corrective lens required.",
        "modelAnswer": "(a) Defect: Myopia (near-sightedness). Causes: (i) Excessive curvature of the eye lens; (ii) Elongation of the eyeball.\n(b) Correction: Concave (diverging) lens.\nFor u = -∞, v = -80 cm = -0.8 m.\n1/f = 1/v - 1/u = 1/(-0.8) - 0 = -1.25 D.\nPower P = -1.25 D.",
        "stepMarking": [
          {
            "step": "(a) Myopia + two anatomical causes",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) Concave lens + correct sign numerical P = -1.25 D",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always convert cm to metres before computing Power P = 1/f(m).",
        "commonPitfall": "Using positive focal length for myopia correction."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q29",
        "qNum": 29,
        "section": "C",
        "marks": 3,
        "topic": "Electricity: Parallel Resistors & Total Current",
        "questionText": "Three resistors of 5 Ω, 10 Ω, and 30 Ω are connected in parallel across a 12 V battery. Calculate:\n(a) Current through each resistor\n(b) Total current drawn from the battery\n(c) Total effective resistance of the circuit.",
        "modelAnswer": "(a) Voltage across each branch is V = 12 V:\nI₁ = 12 / 5 = 2.4 A\nI₂ = 12 / 10 = 1.2 A\nI₃ = 12 / 30 = 0.4 A\n(b) Total current I = I₁ + I₂ + I₃ = 2.4 + 1.2 + 0.4 = 4.0 A.\n(c) 1/Rp = 1/5 + 1/10 + 1/30 = (6 + 3 + 1)/30 = 10/30 = 1/3 => Rp = 3 Ω (or V/I = 12/4 = 3 Ω).",
        "stepMarking": [
          {
            "step": "(a) Branch currents 2.4 A, 1.2 A, 0.4 A",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Total current 4.0 A",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Effective resistance 3 Ω",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check: Rp (3 Ω) must always be smaller than the smallest individual resistor (5 Ω).",
        "commonPitfall": "Forgetting to reciprocate 1/Rp = 1/3 back to Rp = 3 Ω."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q30",
        "qNum": 30,
        "section": "C",
        "marks": 3,
        "topic": "How do Organisms Reproduce: Contraceptive Methods",
        "questionText": "List three different categories of contraceptive methods used to prevent unwanted pregnancies, giving one example of each. Which method also protects against sexually transmitted diseases (STDs)?",
        "modelAnswer": "1. Mechanical / Barrier methods: Condoms (male/female) or cervical caps — prevent sperm from reaching egg.\n2. Chemical / Hormonal methods: Oral contraceptive pills — alter hormonal balance to prevent ovulation.\n3. Intra-Uterine Devices (IUDs) / Surgical methods: Copper-T (IUD) or Vasectomy/Tubectomy.\nSTD Protection: Barrier method (Condoms) provides protection against STDs such as HIV-AIDS, gonorrhoea, and syphilis.",
        "stepMarking": [
          {
            "step": "Three distinct categories with 1 example each",
            "marks": "2 Marks"
          },
          {
            "step": "Condoms/barrier method protects from STDs",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight that hormonal pills can cause side effects if taken carelessly.",
        "commonPitfall": "Saying IUDs or pills protect against STDs."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q31",
        "qNum": 31,
        "section": "C",
        "marks": 3,
        "topic": "Heredity: Dihybrid Cross F₂ Phenotypic Ratio",
        "questionText": "In a cross between pea plants having Round Yellow seeds (RRYY) and Wrinkled Green seeds (rryy), what type of seeds appear in F₁? State the F₂ phenotypic ratio and explain what it proves.",
        "modelAnswer": "F₁ generation: All plants produce Round Yellow seeds (RrYy) because Round (R) and Yellow (Y) are dominant traits.\nF₂ phenotypic ratio: 9 (Round Yellow) : 3 (Round Green) : 3 (Wrinkled Yellow) : 1 (Wrinkled Green).\nConclusion: It proves the Law of Independent Assortment — seed shape and seed colour traits are inherited independently of each other.",
        "stepMarking": [
          {
            "step": "F1 all Round Yellow (RrYy)",
            "marks": "1 Mark"
          },
          {
            "step": "F2 ratio 9:3:3:1 with labels",
            "marks": "1 Mark"
          },
          {
            "step": "Independent inheritance of traits",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "New recombinant combinations (Round Green & Wrinkled Yellow) prove independent assortment.",
        "commonPitfall": "Writing 3:1 monohybrid ratio instead of 9:3:3:1."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q32",
        "qNum": 32,
        "section": "C",
        "marks": 3,
        "topic": "Magnetic Effects: Fleming Left-Hand Rule & Domestic Safety",
        "questionText": "(a) State Fleming's Left-Hand Rule.\n(b) An electron enters a magnetic field directed from North to South while moving vertically downwards. Find the direction of force on the electron.\n(c) Mention the colour coding of Live, Neutral, and Earth wires in India.",
        "modelAnswer": "(a) Stretch thumb, forefinger and middle finger of left hand mutually perpendicular: Forefinger = Magnetic Field (B), Middle finger = Current (I), Thumb = Force/Motion (F).\n(b) Electron moves downwards => conventional current is vertically UPWARDS. Field is N→S. Applying Left-Hand Rule gives force towards WEST (or East depending on viewer frame; specifically perpendicular to both: let down=-y, N->S=-z => I=+y, B=-z => F = I×B = +y×(-z) = -x (West)).\n(c) Live = Red, Neutral = Black, Earth = Green.",
        "stepMarking": [
          {
            "step": "(a) Correct Fleming Left-Hand Rule statement",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Reversing electron direction for current -> force direction",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Red, Black, Green wire colours",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always reverse direction of negative charges (electrons) to get conventional current!",
        "commonPitfall": "Taking electron velocity directly as conventional current direction."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q33",
        "qNum": 33,
        "section": "C",
        "marks": 3,
        "topic": "Acids, Bases and Salts: Plaster of Paris Preparation & Storage",
        "questionText": "(a) Write the chemical formula and preparation equation of Plaster of Paris from gypsum.\n(b) Why should Plaster of Paris be stored in a moisture-proof container?\n(c) Give one medical and one decorative use of Plaster of Paris.",
        "modelAnswer": "(a) Formula: CaSO₄·½H₂O (Calcium sulphate hemihydrate).\nPreparation: CaSO₄·2H₂O --(373 K)--> CaSO₄·½H₂O + 1½H₂O.\n(b) On absorbing moisture, it reacts to set into a hard solid mass (gypsum), becoming useless.\n(c) Medical: Supporting fractured bones in right position; Decorative: Making toys/statues/smooth ceilings.",
        "stepMarking": [
          {
            "step": "(a) Formula + balanced 373 K equation",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) Sets into hard gypsum with moisture",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Two uses",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Always specify temperature 373 K (100°C); above this dead burnt plaster forms.",
        "commonPitfall": "Writing CaSO₄·2H₂O as Plaster of Paris instead of gypsum."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q34",
        "qNum": 34,
        "section": "D",
        "marks": 5,
        "topic": "Life Processes: Human Alimentary Canal & Respiration",
        "questionText": "(a) Name the enzyme present in (i) Saliva, (ii) Gastric juice, (iii) Pancreatic juice (for protein) and state their substrates and products.\n(b) How is the small intestine structurally adapted for maximum absorption of digested food?\n(c) Why do herbivores have a longer small intestine than carnivores?",
        "modelAnswer": "(a) (i) Salivary amylase: Starch → Maltose (simple sugar).\n(ii) Pepsin (active in acidic HCl): Proteins → Peptones.\n(iii) Trypsin (active in alkaline medium): Proteins → Simpler peptides/amino acids.\n(b) Inner lining of small intestine has millions of finger-like projections called villi, which increase surface area immensely and are richly supplied with blood vessels to transport absorbed nutrients.\n(c) Herbivores eat grass rich in cellulose, which takes much longer to digest; carnivores eat meat which is easier to digest, hence shorter small intestine.",
        "stepMarking": [
          {
            "step": "(a) All 3 enzymes, substrates, products",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Villi + rich blood supply",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Cellulose digestion in herbivores",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention acidic medium for Pepsin and alkaline medium for Trypsin.",
        "commonPitfall": "Saying pepsin digests starch or trypsin works in stomach."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q35",
        "qNum": 35,
        "section": "D",
        "marks": 5,
        "topic": "Electricity: Ohm's Law, V-I Graph & Series-Parallel Network",
        "questionText": "(a) State Ohm's law and derive the relation for equivalent resistance of two resistors R₁ and R₂ connected in parallel.\n(b) Two lamps rated 100 W at 220 V and 60 W at 220 V are connected in parallel to a 220 V supply. Calculate the total current drawn from the line.\n(c) Why is tungsten used almost exclusively for filament of electric lamps?",
        "modelAnswer": "(a) Ohm's Law: At constant temperature, current I flowing through a metallic conductor is directly proportional to potential difference V across its ends (V = IR).\nParallel derivation: I = I₁ + I₂ => V/Rp = V/R₁ + V/R₂ => 1/Rp = 1/R₁ + 1/R₂.\n(b) Total power in parallel P = 100 + 60 = 160 W.\nCurrent I = P / V = 160 / 220 = 8/11 ≈ 0.727 A.\n(c) Tungsten has a very high melting point (3380°C) and high resistivity, so it glows white-hot without melting.",
        "stepMarking": [
          {
            "step": "(a) Ohm's law + 1/Rp derivation",
            "marks": "2 Marks"
          },
          {
            "step": "(b) P = 160 W and I = 0.73 A",
            "marks": "2 Marks"
          },
          {
            "step": "(c) High melting point 3380°C of tungsten",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In parallel, powers simply add up: P_total = P₁ + P₂.",
        "commonPitfall": "Forgetting \"at constant physical conditions / temperature\" in Ohm's law."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q36",
        "qNum": 36,
        "section": "D",
        "marks": 5,
        "topic": "Light: Refraction, Ray Diagrams & Lens Numerical",
        "questionText": "(a) Draw ray diagrams for image formation by a convex lens when an object is placed: (i) between F₁ and 2F₁, (ii) between optical centre O and F₁.\n(b) A concave lens of focal length 15 cm forms an image 10 cm from the lens. How far is the object placed from the lens? Also compute magnification.",
        "modelAnswer": "(a) (i) Object between F₁ and 2F₁: Real, inverted, magnified image beyond 2F₂.\n(ii) Object between O and F₁: Virtual, erect, magnified image on same side as object (magnifying glass).\n(b) Concave lens: f = -15 cm, v = -10 cm.\nLens formula: 1/f = 1/v - 1/u => 1/u = 1/v - 1/f = 1/(-10) - 1/(-15) = -1/10 + 1/15 = -1/30.\nHence u = -30 cm (object is 30 cm in front of lens).\nMagnification m = v/u = (-10)/(-30) = +1/3 ≈ +0.33 (virtual, erect, diminished).",
        "stepMarking": [
          {
            "step": "(a) Both ray diagram positions & image natures",
            "marks": "2 Marks"
          },
          {
            "step": "(b) Lens formula + u = -30 cm",
            "marks": "2 Marks"
          },
          {
            "step": "Magnification m = +1/3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For concave lens, u, v, and f are ALL negative!",
        "commonPitfall": "Using mirror formula (1/v + 1/u) instead of lens formula (1/v - 1/u)."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q37",
        "qNum": 37,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Refraction Through Glass Slab & Lenses (Light)",
        "questionText": "Read the passage and answer the questions:\nWhen a ray of light travels obliquely from air (n = 1.0) into crown glass (n = 1.52) and diamond (n = 2.42), its speed decreases depending on the optical density of the medium. Lenses made of glass are used in cameras, projectors, and spectacles.\n\n(a) State Snell's Law of refraction. (1M)\n(b) In which medium (crown glass or diamond) is the speed of light lower, and by what ratio? (1M)\n(c) If the speed of light in vacuum is 3 × 10⁸ m/s and refractive index of water is 4/3, calculate the speed of light in water. Also state what happens to lateral displacement if thickness of a glass slab increases. (2M)",
        "modelAnswer": "(a) Snell's Law: Ratio of sine of angle of incidence to sine of angle of refraction is constant for a given colour of light and pair of media (sin i / sin r = n).\n(b) Speed is lower in diamond (higher refractive index n = 2.42); ratio v_glass / v_diamond = 2.42 / 1.52 ≈ 1.59.\n(c) v_water = c / n = (3 × 10⁸) / (4/3) = 2.25 × 10⁸ m/s. Lateral displacement INCREASES directly as slab thickness increases.",
        "stepMarking": [
          {
            "step": "(a) Snell's law statement/formula",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Diamond has lower speed",
            "marks": "1 Mark"
          },
          {
            "step": "(c) v = 2.25 × 10⁸ m/s + direct relation with thickness",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "v = c / n — refractive index is inversely proportional to speed of light.",
        "commonPitfall": "Multiplying c by n instead of dividing c by n."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q38",
        "qNum": 38,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Ohm's Law & Household Power Circuits (Electricity)",
        "questionText": "Read the passage and answer the questions:\nRiya set up an electric circuit with a 6 V battery, two resistors R₁ = 4 Ω and R₂ = 8 Ω connected in series, an ammeter, and a voltmeter across R₁.\n\n(a) Calculate the total resistance and ammeter reading in the circuit. (1M)\n(b) What will be the voltmeter reading across R₁ (4 Ω)? (1M)\n(c) Calculate the heat dissipated in R₂ (8 Ω) in 2 minutes. (2M)",
        "modelAnswer": "(a) Rs = R₁ + R₂ = 4 + 8 = 12 Ω. Current I = V / Rs = 6 / 12 = 0.5 A.\n(b) Voltmeter reading V₁ = I × R₁ = 0.5 × 4 = 2.0 V.\n(c) Time t = 2 min = 120 s. Heat H = I² R₂ t = (0.5)² × 8 × 120 = 0.25 × 8 × 120 = 240 J.",
        "stepMarking": [
          {
            "step": "(a) Rs = 12 Ω, I = 0.5 A",
            "marks": "1 Mark"
          },
          {
            "step": "(b) V₁ = 2 V",
            "marks": "1 Mark"
          },
          {
            "step": "(c) H = I²Rt with t = 120 s = 240 J",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Always convert minutes to SI unit seconds (2 min = 120 s).",
        "commonPitfall": "Using t = 2 instead of 120 s in Joule's formula."
      },
      {
        "id": "kvs-c10-sci-2024-pb2-q39",
        "qNum": 39,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Human Circulatory & Excretory Systems (Life Processes)",
        "questionText": "Read the passage and answer the questions:\nThe human heart has four chambers that prevent mixing of oxygenated and deoxygenated blood, ensuring a highly efficient oxygen supply needed for warm-blooded mammals and birds.\n\n(a) Why do birds and mammals require complete separation of left and right sides of the heart? (1M)\n(b) Why do ventricles have thicker muscular walls than atria? (1M)\n(c) Differentiate between arteries and veins based on wall thickness, valves, and blood direction. (2M)",
        "modelAnswer": "(a) Birds and mammals are warm-blooded and constantly use high energy to maintain steady body temperature, requiring uninterrupted oxygen-rich blood.\n(b) Ventricles have to pump blood under high pressure to distant organs and lungs, whereas atria only push blood into adjacent ventricles.\n(c) Arteries: Thick elastic walls, no valves, carry blood away from heart under high pressure. Veins: Thin walls, have valves to prevent backflow, collect blood from organs back to heart.",
        "stepMarking": [
          {
            "step": "(a) High energy for constant body temperature",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Ventricles pump blood to distant organs",
            "marks": "1 Mark"
          },
          {
            "step": "(c) 2 clear differences between arteries and veins",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Mention \"maintain constant body temperature\" for warm-blooded animals.",
        "commonPitfall": "Saying arteries always carry oxygenated blood without noting pulmonary artery exception."
      }
    ]
  },
  {
    "id": "nvs-c10-sci-2024-pb1",
    "title": "Navodaya Vidyalaya Samiti (NVS) Class 10 Science Pre-Board (2024)",
    "subject": "Science",
    "targetClass": "Class 10",
    "year": 2024,
    "paperType": "PRE_BOARD",
    "paperCode": "NVS/RO/C10/SCI-1",
    "totalMarks": 80,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 39,
    "generalInstructions": [
      "This question paper consists of 39 questions in 5 sections: Section A to Section E.",
      "Section A consists of 20 objective type questions of 1 mark each (Q1–Q16 MCQs, Q17–Q20 Assertion-Reason).",
      "Section B consists of 6 Very Short Answer questions of 2 marks each (30–50 words).",
      "Section C consists of 7 Short Answer questions of 3 marks each (50–80 words).",
      "Section D consists of 3 Long Answer questions of 5 marks each (80–120 words).",
      "Section E consists of 3 source-based/case-based units of 4 marks each with sub-parts."
    ],
    "questions": [
      {
        "id": "nvs-c10-sci-2024-pb1-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Life Processes: Bile Juice Function",
        "questionText": "Even though bile juice contains no digestive enzymes, it is essential for digestion in the small intestine because it:",
        "options": [
          "A) Digests starch into maltose",
          "B) Makes acidic food alkaline and emulsifies large fat globules",
          "C) Breaks proteins into amino acids",
          "D) Absorbs water from undigested food"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Bile salts make the acidic chyme from stomach alkaline for pancreatic enzymes to act, and emulsify large fat globules into tiny droplets increasing surface area for lipase.",
        "stepMarking": [
          {
            "step": "Alkaline medium + emulsification of fats",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use the keyword \"emulsification of fats\" for full credit.",
        "commonPitfall": "Writing that bile directly digests fats into fatty acids."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Light: Power of a Lens Combination",
        "questionText": "Two thin lenses of power +3.5 D and -1.5 D are placed in contact. The focal length of the combination is:",
        "options": [
          "A) +50 cm",
          "B) +20 cm",
          "C) -50 cm",
          "D) +2.0 m"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Net power P = P₁ + P₂ = +3.5 - 1.5 = +2.0 D. Focal length f = 1/P = 1/2.0 m = +0.5 m = +50 cm.",
        "stepMarking": [
          {
            "step": "P = +2.0 D and f = 1/P = +0.5 m = +50 cm",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Convert metres to cm carefully (1 m = 100 cm).",
        "commonPitfall": "Leaving answer in metres or forgetting algebraic sign."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Acids, Bases and Salts: pH & Tooth Decay",
        "questionText": "Tooth enamel made of calcium hydroxyapatite starts corroding when the pH in the mouth falls below:",
        "options": [
          "A) 7.0",
          "B) 6.5",
          "C) 5.5",
          "D) 8.2"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Bacteria produce acids by degrading leftover food/sugars; when mouth pH falls below 5.5, tooth decay starts.",
        "stepMarking": [
          {
            "step": "State critical pH threshold < 5.5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember key NCERT pH numbers: Rain < 5.6 (acid rain), Mouth < 5.5 (tooth decay), Soil ~ 7.",
        "commonPitfall": "Confusing acid rain threshold (5.6) with tooth decay (5.5)."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Reactions and Equations: Thermal Decomposition",
        "questionText": "When ferrous sulphate crystals (FeSO₄·7H₂O) are heated strongly in a dry boiling tube, the colour changes from green to white and then brown. Identify the gases evolved:",
        "options": [
          "A) SO₂ and SO₃",
          "B) H₂S and O₂",
          "C) CO₂ and H₂",
          "D) NO₂ and O₂"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. 2FeSO₄(s) --(Heat)--> Fe₂O₃(s) + SO₂(g) + SO₃(g). Both sulphur dioxide and sulphur trioxide gases evolve with the characteristic smell of burning sulphur.",
        "stepMarking": [
          {
            "step": "Correct option (A) with balanced decomposition reaction",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember that Fe₂O₃ is reddish-brown solid residue and two oxides of sulphur (SO₂, SO₃) are evolved.",
        "commonPitfall": "Selecting only SO₂ or confusing with Pb(NO₃)₂ which evolves NO₂ + O₂."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Reactions and Equations: Double Displacement",
        "questionText": "On mixing aqueous solutions of barium chloride and sodium sulphate, a white precipitate is immediately formed. The precipitate is:",
        "options": [
          "A) NaCl",
          "B) BaSO₄",
          "C) BaS",
          "D) Na₂S"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s)↓ + 2NaCl(aq). Barium sulphate (BaSO₄) is insoluble in water and settles as a white precipitate.",
        "stepMarking": [
          {
            "step": "Identify BaSO₄ as insoluble white precipitate",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Double displacement reactions involving Ba²⁺ and SO₄²⁻ ions yield insoluble BaSO₄.",
        "commonPitfall": "Writing NaCl as the precipitate."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Acids, Bases and Salts: Chlor-Alkali Process",
        "questionText": "During the electrolysis of brine (aqueous NaCl), which products are formed at the anode and cathode respectively?",
        "options": [
          "A) Cl₂ at anode, H₂ at cathode",
          "B) H₂ at anode, Cl₂ at cathode",
          "C) NaOH at anode, Cl₂ at cathode",
          "D) O₂ at anode, Na at cathode"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. In the chlor-alkali process: 2NaCl(aq) + 2H₂O(l) → 2NaOH(aq) + Cl₂(g) [at anode] + H₂(g) [at cathode].",
        "stepMarking": [
          {
            "step": "Option (A) identifying Cl₂ at anode (+) and H₂ at cathode (-)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Negative Cl⁻ ions migrate to positive Anode; positive H⁺ ions migrate to negative Cathode.",
        "commonPitfall": "Swapping anode and cathode gases."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Acids, Bases and Salts: Water of Crystallisation",
        "questionText": "Which of the following salts does NOT contain water of crystallisation?",
        "options": [
          "A) Blue vitriol",
          "B) Baking soda",
          "C) Washing soda",
          "D) Gypsum"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Baking soda is anhydrous sodium hydrogencarbonate (NaHCO₃). Blue vitriol (CuSO₄·5H₂O), washing soda (Na₂CO₃·10H₂O), and gypsum (CaSO₄·2H₂O) contain water of crystallisation.",
        "stepMarking": [
          {
            "step": "Identify NaHCO₃ (baking soda) as anhydrous",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize formulas of all 4 hydrated salts from NCERT Chapter 2.",
        "commonPitfall": "Confusing baking soda (NaHCO₃) with washing soda (Na₂CO₃·10H₂O)."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Metals and Non-metals: Amphoteric Oxides",
        "questionText": "An element X reacts with oxygen to form an oxide X₂O₃ which reacts with both HCl and NaOH to produce salt and water. The element X is:",
        "options": [
          "A) Sodium",
          "B) Magnesium",
          "C) Aluminium",
          "D) Sulphur"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Aluminium forms aluminium oxide (Al₂O₃), which is amphoteric — it reacts with both acids and bases to yield salt and water.",
        "stepMarking": [
          {
            "step": "Option (C) identifying Al₂O₃ as amphoteric oxide",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "The two standard amphoteric oxides in Class 10 CBSE are Al₂O₃ and ZnO.",
        "commonPitfall": "Choosing basic oxides like Na₂O or MgO."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Metals and Non-metals: Thermit Reaction",
        "questionText": "The reaction Fe₂O₃(s) + 2Al(s) → 2Fe(l) + Al₂O₃(s) + Heat is used to join cracked railway tracks because:",
        "options": [
          "A) It is endothermic and cools the track",
          "B) It is highly exothermic producing molten iron",
          "C) Aluminium oxide melts into steel",
          "D) Iron is more reactive than aluminium"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. The thermit reaction is a highly exothermic displacement reaction where Al reduces Fe₂O₃ and the heat released melts the iron produced.",
        "stepMarking": [
          {
            "step": "Option (B) noting exothermic nature yielding molten iron",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always mention molten state of Fe(l) due to intense heat.",
        "commonPitfall": "Thinking Fe displaces Al instead of Al displacing Fe."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Carbon and its Compounds: Functional Groups",
        "questionText": "Identify the functional group present in CH₃–CO–CH₃ (Propanone):",
        "options": [
          "A) Aldehyde (-CHO)",
          "B) Ketone (>C=O)",
          "C) Carboxylic acid (-COOH)",
          "D) Alcohol (-OH)"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Propanone contains the carbonyl group (>C=O) bonded to two carbon atoms on either side, characteristic of ketones.",
        "stepMarking": [
          {
            "step": "Identify ketone functional group (>C=O)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Suffix \"-one\" always represents Ketone; \"-al\" represents Aldehyde.",
        "commonPitfall": "Confusing propanone with propanal."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Carbon and its Compounds: Covalent Bonds in Pentane",
        "questionText": "Pentane has the molecular formula C₅H₁₂. How many covalent bonds are present in one molecule of pentane?",
        "options": [
          "A) 5",
          "B) 12",
          "C) 16",
          "D) 17"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Pentane has 4 C–C single bonds and 12 C–H single bonds, giving 4 + 12 = 16 covalent bonds.",
        "stepMarking": [
          {
            "step": "Option (C): 4 C–C + 12 C–H = 16 covalent bonds",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For any alkane CₙH₂ₙ₊₂, total covalent bonds = (n-1) + (2n+2) = 3n + 1. For n=5, 3(5)+1 = 16.",
        "commonPitfall": "Counting only C–H bonds (12) or forgetting one C–C bond."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Life Processes: Human Heart Double Circulation",
        "questionText": "Which chamber of the human heart receives oxygenated blood directly from the lungs via pulmonary veins?",
        "options": [
          "A) Right atrium",
          "B) Right ventricle",
          "C) Left atrium",
          "D) Left ventricle"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Oxygenated blood from the lungs enters the left atrium through the pulmonary veins before passing into the left ventricle.",
        "stepMarking": [
          {
            "step": "Identify Left Atrium as receiver of oxygenated blood from lungs",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Left side of heart always carries oxygenated blood; Atria always receive blood.",
        "commonPitfall": "Confusing pulmonary vein with pulmonary artery or atrium with ventricle."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Life Processes: Anaerobic Respiration in Muscle Cells",
        "questionText": "During vigorous exercise, muscle cramps occur due to accumulation of:",
        "options": [
          "A) Ethanol and CO₂",
          "B) Lactic acid",
          "C) Pyruvate",
          "D) Acetic acid"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Lack of oxygen in human skeletal muscle cells converts 3-carbon pyruvate into lactic acid (3-carbon molecule), causing cramps.",
        "stepMarking": [
          {
            "step": "Identify lactic acid accumulation during anaerobic muscle respiration",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Distinguish yeast fermentation (ethanol + CO₂) from muscle lack-of-O₂ pathway (lactic acid only).",
        "commonPitfall": "Selecting ethanol for human muscles."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Control and Coordination: Plant Tropisms",
        "questionText": "Growth of a pollen tube towards the ovule inside the pistil is an example of:",
        "options": [
          "A) Phototropism",
          "B) Geotropism",
          "C) Chemotropism",
          "D) Hydrotropism"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Pollen tube grows in response to chemical substances secreted by the ovule, demonstrating chemotropism.",
        "stepMarking": [
          {
            "step": "Identify Chemotropism",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember NCERT example: chemotropism = pollen tube growth towards ovule.",
        "commonPitfall": "Selecting geotropism because the tube grows downwards."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Control and Coordination: Synapse Transmission",
        "questionText": "At the synapse between two neurons, electrical impulse is converted into:",
        "options": [
          "A) Mechanical wave",
          "B) Chemical signal (neurotransmitter)",
          "C) Thermal energy",
          "D) Magnetic pulse"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. At the axon terminal, the electrical impulse triggers release of chemicals (neurotransmitters) that cross the synaptic gap and start a similar electrical impulse in the next neuron dendrite.",
        "stepMarking": [
          {
            "step": "Option (B) identifying chemical signal conversion at synapse",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Synapse ensures unidirectional flow of nerve impulses.",
        "commonPitfall": "Stating impulse jumps directly as electricity across the gap."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "How do Organisms Reproduce: Vegetative Propagation & Fission",
        "questionText": "Which organism reproduces by multiple fission inside a protective cyst under unfavourable conditions?",
        "options": [
          "A) Amoeba",
          "B) Leishmania",
          "C) Plasmodium",
          "D) Spirogyra"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Plasmodium (malarial parasite) divides into many daughter cells simultaneously by multiple fission.",
        "stepMarking": [
          {
            "step": "Identify Plasmodium as multiple fission example",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Amoeba = binary fission (any plane); Leishmania = binary fission (definite orientation); Plasmodium = multiple fission.",
        "commonPitfall": "Confusing Leishmania with Plasmodium."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q17",
        "qNum": 17,
        "section": "A",
        "marks": 1,
        "topic": "Electricity: Domestic Parallel Wiring",
        "questionText": "Assertion (A): Domestic electrical appliances in a house are connected in parallel rather than series.\nReason (R): In a parallel circuit, each appliance receives the full mains voltage and has an independent switch.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Parallel connection ensures constant 220 V across every appliance, lower total resistance, and independent operation.",
        "stepMarking": [
          {
            "step": "Option (A) explaining independent switching and constant voltage",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In series, if one bulb fuses, the entire circuit breaks.",
        "commonPitfall": "Thinking parallel wiring increases total circuit resistance."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q18",
        "qNum": 18,
        "section": "A",
        "marks": 1,
        "topic": "Our Environment: Biological Magnification",
        "questionText": "Assertion (A): Maximum concentration of non-biodegradable pesticides like DDT accumulates in human beings at the top of the food chain.\nReason (R): Pesticides get degraded rapidly at every successive trophic level.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Assertion A is true (biomagnification), but Reason R is false because non-biodegradable pesticides are NOT degraded or washed away — they accumulate progressively.",
        "stepMarking": [
          {
            "step": "Option (C): A true, R false",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Read words like \"degraded rapidly\" carefully — non-biodegradable chemicals persist.",
        "commonPitfall": "Selecting (A) without catching the contradiction in R."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q19",
        "qNum": 19,
        "section": "A",
        "marks": 1,
        "topic": "Magnetic Effects: Intersection of Field Lines",
        "questionText": "Assertion (A): Two magnetic field lines never intersect each other at any point.\nReason (R): If they intersected, a magnetic compass needle placed at that point would point in two different directions simultaneously, which is impossible.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Tangent to a field line gives the unique direction of net magnetic force at a point; two directions at one point cannot exist.",
        "stepMarking": [
          {
            "step": "Option (A) with compass needle contradiction logic",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Standard 1M/2M board favourite question.",
        "commonPitfall": "Confusing field lines with electric current paths."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q20",
        "qNum": 20,
        "section": "A",
        "marks": 1,
        "topic": "Carbon Compounds: Saturated vs Unsaturated Flames",
        "questionText": "Assertion (A): Saturated hydrocarbons normally burn with a clean blue flame in sufficient oxygen.\nReason (R): Saturated hydrocarbons contain a higher percentage of carbon than unsaturated hydrocarbons of the same chain length.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Saturated hydrocarbons burn with a clean flame because their percentage of carbon is LOWER than unsaturated hydrocarbons (alkenes/alkynes), allowing complete combustion.",
        "stepMarking": [
          {
            "step": "Option (C): A true, R false",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Unsaturated hydrocarbons have higher C:H mass ratio -> yellow sooty flame.",
        "commonPitfall": "Selecting (A) by overlooking \"higher percentage\"."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Our Environment: Ozone Layer Depletion",
        "questionText": "What is ozone? How is it formed in the upper stratosphere, and which man-made chemicals caused its sharp depletion in the 1980s?",
        "modelAnswer": "Ozone (O₃) is a triatomic molecule of oxygen that shields Earth from harmful UV radiation.\nFormation: UV rays split O₂ into free oxygen atoms (O), which combine with O₂: O₂ --(UV)--> O + O; O + O₂ → O₃.\nDepleting agents: Chlorofluorocarbons (CFCs) used in refrigerants and fire extinguishers.",
        "stepMarking": [
          {
            "step": "UV splitting O₂ + O + O₂ -> O₃",
            "marks": "1 Mark"
          },
          {
            "step": "CFCs named as depleting chemical",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Include both chemical equations for O₃ formation.",
        "commonPitfall": "Writing CO₂ or SO₂ instead of CFCs."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q22",
        "qNum": 22,
        "section": "B",
        "marks": 2,
        "topic": "Metals and Non-metals: Reaction of Calcium & Sodium with Water",
        "questionText": "Give reasons:\n(i) Sodium catches fire when dropped in cold water, whereas calcium floats without catching fire.\n(ii) Aluminium does not corrode easily even though it is high in the reactivity series.",
        "modelAnswer": "(i) Na reacts violently with cold water and the exothermic heat ignites the evolved H₂ gas. Calcium reacts less violently (heat insufficient to ignite H₂), and bubbles of H₂ stick to its surface making it float.\n(ii) Aluminium forms a thin, tough protective layer of Al₂O₃ on its surface that prevents further oxidation.",
        "stepMarking": [
          {
            "step": "(i) Na exothermic H2 ignition vs Ca bubbles sticking",
            "marks": "1 Mark"
          },
          {
            "step": "(ii) Protective Al₂O₃ layer",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention \"H₂ bubbles stick to calcium surface\" explicitly.",
        "commonPitfall": "Saying calcium is lighter than water by density."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q23",
        "qNum": 23,
        "section": "B",
        "marks": 2,
        "topic": "Electricity: Heating Elements Alloy Preference",
        "questionText": "Why are coils of electric toasters and electric irons made of an alloy (nichrome) rather than a pure metal like copper?",
        "modelAnswer": "1. Alloys have much higher resistivity than their constituent pure metals, producing substantial Joule heat (H = I²Rt).\n2. Alloys do not oxidise (burn) readily at high red-hot temperatures.",
        "stepMarking": [
          {
            "step": "Higher resistivity of alloys",
            "marks": "1 Mark"
          },
          {
            "step": "Does not oxidise/burn easily at high temperature",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Both points are strictly required in CBSE marking schemes.",
        "commonPitfall": "Writing \"high melting point\" alone without mentioning non-oxidation."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q24",
        "qNum": 24,
        "section": "B",
        "marks": 2,
        "topic": "How do Organisms Reproduce: Placenta Role",
        "questionText": "Define placenta and state two vital functions it performs for the developing human embryo inside the uterus.",
        "modelAnswer": "Placenta is a special disc-shaped tissue embedded in the uterine wall containing villi on the embryo's side and blood spaces on the mother's side.\nFunctions: (1) Transfers glucose and oxygen from mother's blood to embryo; (2) Removes metabolic wastes generated by the embryo into mother's blood.",
        "stepMarking": [
          {
            "step": "Structure/definition with villi",
            "marks": "1 Mark"
          },
          {
            "step": "Nutrient/O2 supply & waste removal",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight the huge surface area provided by villi.",
        "commonPitfall": "Saying mother and baby blood mixes directly."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q25",
        "qNum": 25,
        "section": "B",
        "marks": 2,
        "topic": "Chemical Reactions: Silver Bromide Photolysis",
        "questionText": "2 g of silver bromide is taken in a china dish and kept in sunlight for some time.\n(i) State the colour change observed.\n(ii) Write the balanced chemical equation and mention one practical use of this reaction.",
        "modelAnswer": "(i) Pale yellow silver bromide turns grey due to formation of metallic silver.\n(ii) 2AgBr(s) --(Sunlight)--> 2Ag(s) + Br₂(g). Use: Black and white photography.",
        "stepMarking": [
          {
            "step": "(i) Colour change pale yellow to grey",
            "marks": "0.5 Mark"
          },
          {
            "step": "(ii) Balanced equation with Sunlight above arrow",
            "marks": "1 Mark"
          },
          {
            "step": "Application in B&W photography",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Always write \"Sunlight\" over the reaction arrow for photolytic decomposition.",
        "commonPitfall": "Writing AgCl instead of AgBr or forgetting to balance Br₂."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q26",
        "qNum": 26,
        "section": "B",
        "marks": 2,
        "topic": "Acids, Bases and Salts: Dilution Precaution",
        "questionText": "Why is it advised to add concentrated sulphuric acid slowly to water with constant stirring rather than adding water to acid?",
        "modelAnswer": "Dilution of concentrated acid is a highly exothermic process. If water is added to concentrated acid, the large heat generated instantly converts water to steam, causing the acidic mixture to splash out and cause severe burns. Adding acid slowly to water allows water to absorb the heat safely.",
        "stepMarking": [
          {
            "step": "Highly exothermic nature of acid dilution",
            "marks": "1 Mark"
          },
          {
            "step": "Risk of splashing/burns vs safe heat absorption",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention \"highly exothermic\" and \"splash out / container may break\".",
        "commonPitfall": "Saying acid explodes chemically with water."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Electricity: Parallel Resistors & Total Current",
        "questionText": "Three resistors of 5 Ω, 10 Ω, and 30 Ω are connected in parallel across a 12 V battery. Calculate:\n(a) Current through each resistor\n(b) Total current drawn from the battery\n(c) Total effective resistance of the circuit.",
        "modelAnswer": "(a) Voltage across each branch is V = 12 V:\nI₁ = 12 / 5 = 2.4 A\nI₂ = 12 / 10 = 1.2 A\nI₃ = 12 / 30 = 0.4 A\n(b) Total current I = I₁ + I₂ + I₃ = 2.4 + 1.2 + 0.4 = 4.0 A.\n(c) 1/Rp = 1/5 + 1/10 + 1/30 = (6 + 3 + 1)/30 = 10/30 = 1/3 => Rp = 3 Ω (or V/I = 12/4 = 3 Ω).",
        "stepMarking": [
          {
            "step": "(a) Branch currents 2.4 A, 1.2 A, 0.4 A",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Total current 4.0 A",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Effective resistance 3 Ω",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check: Rp (3 Ω) must always be smaller than the smallest individual resistor (5 Ω).",
        "commonPitfall": "Forgetting to reciprocate 1/Rp = 1/3 back to Rp = 3 Ω."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "How do Organisms Reproduce: Contraceptive Methods",
        "questionText": "List three different categories of contraceptive methods used to prevent unwanted pregnancies, giving one example of each. Which method also protects against sexually transmitted diseases (STDs)?",
        "modelAnswer": "1. Mechanical / Barrier methods: Condoms (male/female) or cervical caps — prevent sperm from reaching egg.\n2. Chemical / Hormonal methods: Oral contraceptive pills — alter hormonal balance to prevent ovulation.\n3. Intra-Uterine Devices (IUDs) / Surgical methods: Copper-T (IUD) or Vasectomy/Tubectomy.\nSTD Protection: Barrier method (Condoms) provides protection against STDs such as HIV-AIDS, gonorrhoea, and syphilis.",
        "stepMarking": [
          {
            "step": "Three distinct categories with 1 example each",
            "marks": "2 Marks"
          },
          {
            "step": "Condoms/barrier method protects from STDs",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight that hormonal pills can cause side effects if taken carelessly.",
        "commonPitfall": "Saying IUDs or pills protect against STDs."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q29",
        "qNum": 29,
        "section": "C",
        "marks": 3,
        "topic": "Heredity: Dihybrid Cross F₂ Phenotypic Ratio",
        "questionText": "In a cross between pea plants having Round Yellow seeds (RRYY) and Wrinkled Green seeds (rryy), what type of seeds appear in F₁? State the F₂ phenotypic ratio and explain what it proves.",
        "modelAnswer": "F₁ generation: All plants produce Round Yellow seeds (RrYy) because Round (R) and Yellow (Y) are dominant traits.\nF₂ phenotypic ratio: 9 (Round Yellow) : 3 (Round Green) : 3 (Wrinkled Yellow) : 1 (Wrinkled Green).\nConclusion: It proves the Law of Independent Assortment — seed shape and seed colour traits are inherited independently of each other.",
        "stepMarking": [
          {
            "step": "F1 all Round Yellow (RrYy)",
            "marks": "1 Mark"
          },
          {
            "step": "F2 ratio 9:3:3:1 with labels",
            "marks": "1 Mark"
          },
          {
            "step": "Independent inheritance of traits",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "New recombinant combinations (Round Green & Wrinkled Yellow) prove independent assortment.",
        "commonPitfall": "Writing 3:1 monohybrid ratio instead of 9:3:3:1."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q30",
        "qNum": 30,
        "section": "C",
        "marks": 3,
        "topic": "Magnetic Effects: Fleming Left-Hand Rule & Domestic Safety",
        "questionText": "(a) State Fleming's Left-Hand Rule.\n(b) An electron enters a magnetic field directed from North to South while moving vertically downwards. Find the direction of force on the electron.\n(c) Mention the colour coding of Live, Neutral, and Earth wires in India.",
        "modelAnswer": "(a) Stretch thumb, forefinger and middle finger of left hand mutually perpendicular: Forefinger = Magnetic Field (B), Middle finger = Current (I), Thumb = Force/Motion (F).\n(b) Electron moves downwards => conventional current is vertically UPWARDS. Field is N→S. Applying Left-Hand Rule gives force towards WEST (or East depending on viewer frame; specifically perpendicular to both: let down=-y, N->S=-z => I=+y, B=-z => F = I×B = +y×(-z) = -x (West)).\n(c) Live = Red, Neutral = Black, Earth = Green.",
        "stepMarking": [
          {
            "step": "(a) Correct Fleming Left-Hand Rule statement",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Reversing electron direction for current -> force direction",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Red, Black, Green wire colours",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always reverse direction of negative charges (electrons) to get conventional current!",
        "commonPitfall": "Taking electron velocity directly as conventional current direction."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q31",
        "qNum": 31,
        "section": "C",
        "marks": 3,
        "topic": "Acids, Bases and Salts: Plaster of Paris Preparation & Storage",
        "questionText": "(a) Write the chemical formula and preparation equation of Plaster of Paris from gypsum.\n(b) Why should Plaster of Paris be stored in a moisture-proof container?\n(c) Give one medical and one decorative use of Plaster of Paris.",
        "modelAnswer": "(a) Formula: CaSO₄·½H₂O (Calcium sulphate hemihydrate).\nPreparation: CaSO₄·2H₂O --(373 K)--> CaSO₄·½H₂O + 1½H₂O.\n(b) On absorbing moisture, it reacts to set into a hard solid mass (gypsum), becoming useless.\n(c) Medical: Supporting fractured bones in right position; Decorative: Making toys/statues/smooth ceilings.",
        "stepMarking": [
          {
            "step": "(a) Formula + balanced 373 K equation",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) Sets into hard gypsum with moisture",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Two uses",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Always specify temperature 373 K (100°C); above this dead burnt plaster forms.",
        "commonPitfall": "Writing CaSO₄·2H₂O as Plaster of Paris instead of gypsum."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q32",
        "qNum": 32,
        "section": "C",
        "marks": 3,
        "topic": "Metals and Non-metals: Electrolytic Refining of Copper",
        "questionText": "Explain the electrolytic refining of impure copper with a well-labelled description of:\n(a) Anode, Cathode, and Electrolyte used\n(b) What happens to soluble and insoluble impurities (anode mud)?",
        "modelAnswer": "(a) Anode: Thick block of impure copper; Cathode: Thin strip of pure copper; Electrolyte: Acidified aqueous copper sulphate (CuSO₄) solution.\n(b) On passing current, pure copper dissolves from anode into electrolyte and deposits on cathode. Soluble impurities pass into solution, while insoluble impurities (Ag, Au) settle below the anode as anode mud.",
        "stepMarking": [
          {
            "step": "(a) Correct anode, cathode, and electrolyte",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) Ion migration + anode mud explanation",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Remember: Impure metal is ALWAYS Anode; Pure thin strip is ALWAYS Cathode.",
        "commonPitfall": "Swapping impure and pure electrodes."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q33",
        "qNum": 33,
        "section": "C",
        "marks": 3,
        "topic": "Life Processes: Nephron Urine Formation",
        "questionText": "Explain the three main steps involved in urine formation inside a nephron of the human kidney.",
        "modelAnswer": "1. Glomerular Filtration: Blood enters glomerulus under high pressure; water, urea, glucose, amino acids and salts filter into Bowman's capsule.\n2. Selective Reabsorption: As filtrate flows along renal tubule, useful substances like glucose, amino acids, salts and major amount of water are selectively reabsorbed into surrounding capillaries.\n3. Secretion / Collection: Remaining nitrogenous waste (urea) and excess water enter collecting duct as urine.",
        "stepMarking": [
          {
            "step": "Ultrafiltration in Bowman's capsule",
            "marks": "1 Mark"
          },
          {
            "step": "Selective reabsorption of glucose/water",
            "marks": "1.5 Marks"
          },
          {
            "step": "Amount of water reabsorbed depends on body water/waste",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Mention what determines how much water is reabsorbed: excess water in body and dissolved waste amount.",
        "commonPitfall": "Forgetting to list selective reabsorption of glucose and amino acids."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q34",
        "qNum": 34,
        "section": "D",
        "marks": 5,
        "topic": "Electricity: Ohm's Law, V-I Graph & Series-Parallel Network",
        "questionText": "(a) State Ohm's law and derive the relation for equivalent resistance of two resistors R₁ and R₂ connected in parallel.\n(b) Two lamps rated 100 W at 220 V and 60 W at 220 V are connected in parallel to a 220 V supply. Calculate the total current drawn from the line.\n(c) Why is tungsten used almost exclusively for filament of electric lamps?",
        "modelAnswer": "(a) Ohm's Law: At constant temperature, current I flowing through a metallic conductor is directly proportional to potential difference V across its ends (V = IR).\nParallel derivation: I = I₁ + I₂ => V/Rp = V/R₁ + V/R₂ => 1/Rp = 1/R₁ + 1/R₂.\n(b) Total power in parallel P = 100 + 60 = 160 W.\nCurrent I = P / V = 160 / 220 = 8/11 ≈ 0.727 A.\n(c) Tungsten has a very high melting point (3380°C) and high resistivity, so it glows white-hot without melting.",
        "stepMarking": [
          {
            "step": "(a) Ohm's law + 1/Rp derivation",
            "marks": "2 Marks"
          },
          {
            "step": "(b) P = 160 W and I = 0.73 A",
            "marks": "2 Marks"
          },
          {
            "step": "(c) High melting point 3380°C of tungsten",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In parallel, powers simply add up: P_total = P₁ + P₂.",
        "commonPitfall": "Forgetting \"at constant physical conditions / temperature\" in Ohm's law."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q35",
        "qNum": 35,
        "section": "D",
        "marks": 5,
        "topic": "Light: Refraction, Ray Diagrams & Lens Numerical",
        "questionText": "(a) Draw ray diagrams for image formation by a convex lens when an object is placed: (i) between F₁ and 2F₁, (ii) between optical centre O and F₁.\n(b) A concave lens of focal length 15 cm forms an image 10 cm from the lens. How far is the object placed from the lens? Also compute magnification.",
        "modelAnswer": "(a) (i) Object between F₁ and 2F₁: Real, inverted, magnified image beyond 2F₂.\n(ii) Object between O and F₁: Virtual, erect, magnified image on same side as object (magnifying glass).\n(b) Concave lens: f = -15 cm, v = -10 cm.\nLens formula: 1/f = 1/v - 1/u => 1/u = 1/v - 1/f = 1/(-10) - 1/(-15) = -1/10 + 1/15 = -1/30.\nHence u = -30 cm (object is 30 cm in front of lens).\nMagnification m = v/u = (-10)/(-30) = +1/3 ≈ +0.33 (virtual, erect, diminished).",
        "stepMarking": [
          {
            "step": "(a) Both ray diagram positions & image natures",
            "marks": "2 Marks"
          },
          {
            "step": "(b) Lens formula + u = -30 cm",
            "marks": "2 Marks"
          },
          {
            "step": "Magnification m = +1/3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For concave lens, u, v, and f are ALL negative!",
        "commonPitfall": "Using mirror formula (1/v + 1/u) instead of lens formula (1/v - 1/u)."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q36",
        "qNum": 36,
        "section": "D",
        "marks": 5,
        "topic": "How do Organisms Reproduce: Human Female Reproductive System & Flower Fertilization",
        "questionText": "(a) State the functions of: (i) Ovary, (ii) Fallopian tube (Oviduct), (iii) Uterus in the human female reproductive system.\n(b) What happens in the uterus if the egg is NOT fertilised?\n(c) Trace the events following pollination inside a bisexual flower up to seed formation.",
        "modelAnswer": "(a) (i) Ovary: Produces female gametes (ova/eggs) and hormones oestrogen & progesterone.\n(ii) Oviduct: Site of fertilisation and transports egg to uterus.\n(iii) Uterus: Site of implantation and embryo development.\n(b) If egg is not fertilised, the thick spongy uterine lining breaks down and exits through vagina as blood and mucus (menstruation, ~2-8 days).\n(c) Pollen lands on stigma -> pollen tube grows through style to ovule -> male germ cell fuses with female egg cell (fertilisation) forming zygote -> zygote forms embryo, ovule becomes seed with tough coat, ovary ripens into fruit.",
        "stepMarking": [
          {
            "step": "(a) Functions of ovary, oviduct, uterus",
            "marks": "2 Marks"
          },
          {
            "step": "(b) Menstruation breakdown explained",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Pollen tube -> fertilisation -> ovule=seed, ovary=fruit",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Remember: Ovule -> Seed; Ovary -> Fruit.",
        "commonPitfall": "Writing fertilisation occurs in the uterus instead of oviduct."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q37",
        "qNum": 37,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Ohm's Law & Household Power Circuits (Electricity)",
        "questionText": "Read the passage and answer the questions:\nRiya set up an electric circuit with a 6 V battery, two resistors R₁ = 4 Ω and R₂ = 8 Ω connected in series, an ammeter, and a voltmeter across R₁.\n\n(a) Calculate the total resistance and ammeter reading in the circuit. (1M)\n(b) What will be the voltmeter reading across R₁ (4 Ω)? (1M)\n(c) Calculate the heat dissipated in R₂ (8 Ω) in 2 minutes. (2M)",
        "modelAnswer": "(a) Rs = R₁ + R₂ = 4 + 8 = 12 Ω. Current I = V / Rs = 6 / 12 = 0.5 A.\n(b) Voltmeter reading V₁ = I × R₁ = 0.5 × 4 = 2.0 V.\n(c) Time t = 2 min = 120 s. Heat H = I² R₂ t = (0.5)² × 8 × 120 = 0.25 × 8 × 120 = 240 J.",
        "stepMarking": [
          {
            "step": "(a) Rs = 12 Ω, I = 0.5 A",
            "marks": "1 Mark"
          },
          {
            "step": "(b) V₁ = 2 V",
            "marks": "1 Mark"
          },
          {
            "step": "(c) H = I²Rt with t = 120 s = 240 J",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Always convert minutes to SI unit seconds (2 min = 120 s).",
        "commonPitfall": "Using t = 2 instead of 120 s in Joule's formula."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q38",
        "qNum": 38,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Human Circulatory & Excretory Systems (Life Processes)",
        "questionText": "Read the passage and answer the questions:\nThe human heart has four chambers that prevent mixing of oxygenated and deoxygenated blood, ensuring a highly efficient oxygen supply needed for warm-blooded mammals and birds.\n\n(a) Why do birds and mammals require complete separation of left and right sides of the heart? (1M)\n(b) Why do ventricles have thicker muscular walls than atria? (1M)\n(c) Differentiate between arteries and veins based on wall thickness, valves, and blood direction. (2M)",
        "modelAnswer": "(a) Birds and mammals are warm-blooded and constantly use high energy to maintain steady body temperature, requiring uninterrupted oxygen-rich blood.\n(b) Ventricles have to pump blood under high pressure to distant organs and lungs, whereas atria only push blood into adjacent ventricles.\n(c) Arteries: Thick elastic walls, no valves, carry blood away from heart under high pressure. Veins: Thin walls, have valves to prevent backflow, collect blood from organs back to heart.",
        "stepMarking": [
          {
            "step": "(a) High energy for constant body temperature",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Ventricles pump blood to distant organs",
            "marks": "1 Mark"
          },
          {
            "step": "(c) 2 clear differences between arteries and veins",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Mention \"maintain constant body temperature\" for warm-blooded animals.",
        "commonPitfall": "Saying arteries always carry oxygenated blood without noting pulmonary artery exception."
      },
      {
        "id": "nvs-c10-sci-2024-pb1-q39",
        "qNum": 39,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Mendel Genetics & Blood Groups / Pea Cross (Heredity)",
        "questionText": "Read the passage and answer the questions:\nA farmer crossed pure violet-flowered pea plants (VV) with pure white-flowered pea plants (vv). In the F₁ generation, all 120 plants produced violet flowers. He then self-pollinated the F₁ plants to raise 800 plants in F₂.\n\n(a) State the genotype of all F₁ plants and identify the recessive trait. (1M)\n(b) How many plants out of 800 in F₂ are expected to have white flowers? (1M)\n(c) Out of 800 F₂ plants, how many are expected to be pure homozygous violet (VV) vs heterozygous violet (Vv)? (2M)",
        "modelAnswer": "(a) Genotype of F₁: Vv (heterozygous violet). White flower colour (v) is recessive.\n(b) F₂ phenotypic ratio is 3:1 => White flowers = 1/4 × 800 = 200 plants.\n(c) F₂ genotypic ratio is 1 VV : 2 Vv : 1 vv. Pure homozygous VV = 1/4 × 800 = 200 plants; Heterozygous Vv = 2/4 × 800 = 400 plants.",
        "stepMarking": [
          {
            "step": "(a) Vv genotype + white is recessive",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 200 white plants",
            "marks": "1 Mark"
          },
          {
            "step": "(c) 200 VV and 400 Vv",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Check sum: 200 (VV) + 400 (Vv) + 200 (vv) = 800 total.",
        "commonPitfall": "Giving 300 or 600 for homozygous violet instead of 200."
      }
    ]
  },
  {
    "id": "kvs-c10-sci-2023-pb1",
    "title": "KVS Chandigarh Region Class 10 Science Pre-Board (2023)",
    "subject": "Science",
    "targetClass": "Class 10",
    "year": 2023,
    "paperType": "PRE_BOARD",
    "paperCode": "KVS/CHD/C10/SCI-3",
    "totalMarks": 80,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 39,
    "generalInstructions": [
      "This question paper consists of 39 questions in 5 sections: Section A to Section E.",
      "Section A consists of 20 objective type questions of 1 mark each (Q1–Q16 MCQs, Q17–Q20 Assertion-Reason).",
      "Section B consists of 6 Very Short Answer questions of 2 marks each (30–50 words).",
      "Section C consists of 7 Short Answer questions of 3 marks each (50–80 words).",
      "Section D consists of 3 Long Answer questions of 5 marks each (80–120 words).",
      "Section E consists of 3 source-based/case-based units of 4 marks each with sub-parts."
    ],
    "questions": [
      {
        "id": "kvs-c10-sci-2023-pb1-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Reactions and Equations: Thermal Decomposition",
        "questionText": "When ferrous sulphate crystals (FeSO₄·7H₂O) are heated strongly in a dry boiling tube, the colour changes from green to white and then brown. Identify the gases evolved:",
        "options": [
          "A) SO₂ and SO₃",
          "B) H₂S and O₂",
          "C) CO₂ and H₂",
          "D) NO₂ and O₂"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. 2FeSO₄(s) --(Heat)--> Fe₂O₃(s) + SO₂(g) + SO₃(g). Both sulphur dioxide and sulphur trioxide gases evolve with the characteristic smell of burning sulphur.",
        "stepMarking": [
          {
            "step": "Correct option (A) with balanced decomposition reaction",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember that Fe₂O₃ is reddish-brown solid residue and two oxides of sulphur (SO₂, SO₃) are evolved.",
        "commonPitfall": "Selecting only SO₂ or confusing with Pb(NO₃)₂ which evolves NO₂ + O₂."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Reactions and Equations: Double Displacement",
        "questionText": "On mixing aqueous solutions of barium chloride and sodium sulphate, a white precipitate is immediately formed. The precipitate is:",
        "options": [
          "A) NaCl",
          "B) BaSO₄",
          "C) BaS",
          "D) Na₂S"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s)↓ + 2NaCl(aq). Barium sulphate (BaSO₄) is insoluble in water and settles as a white precipitate.",
        "stepMarking": [
          {
            "step": "Identify BaSO₄ as insoluble white precipitate",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Double displacement reactions involving Ba²⁺ and SO₄²⁻ ions yield insoluble BaSO₄.",
        "commonPitfall": "Writing NaCl as the precipitate."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Acids, Bases and Salts: Chlor-Alkali Process",
        "questionText": "During the electrolysis of brine (aqueous NaCl), which products are formed at the anode and cathode respectively?",
        "options": [
          "A) Cl₂ at anode, H₂ at cathode",
          "B) H₂ at anode, Cl₂ at cathode",
          "C) NaOH at anode, Cl₂ at cathode",
          "D) O₂ at anode, Na at cathode"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. In the chlor-alkali process: 2NaCl(aq) + 2H₂O(l) → 2NaOH(aq) + Cl₂(g) [at anode] + H₂(g) [at cathode].",
        "stepMarking": [
          {
            "step": "Option (A) identifying Cl₂ at anode (+) and H₂ at cathode (-)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Negative Cl⁻ ions migrate to positive Anode; positive H⁺ ions migrate to negative Cathode.",
        "commonPitfall": "Swapping anode and cathode gases."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Acids, Bases and Salts: Water of Crystallisation",
        "questionText": "Which of the following salts does NOT contain water of crystallisation?",
        "options": [
          "A) Blue vitriol",
          "B) Baking soda",
          "C) Washing soda",
          "D) Gypsum"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Baking soda is anhydrous sodium hydrogencarbonate (NaHCO₃). Blue vitriol (CuSO₄·5H₂O), washing soda (Na₂CO₃·10H₂O), and gypsum (CaSO₄·2H₂O) contain water of crystallisation.",
        "stepMarking": [
          {
            "step": "Identify NaHCO₃ (baking soda) as anhydrous",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize formulas of all 4 hydrated salts from NCERT Chapter 2.",
        "commonPitfall": "Confusing baking soda (NaHCO₃) with washing soda (Na₂CO₃·10H₂O)."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Metals and Non-metals: Amphoteric Oxides",
        "questionText": "An element X reacts with oxygen to form an oxide X₂O₃ which reacts with both HCl and NaOH to produce salt and water. The element X is:",
        "options": [
          "A) Sodium",
          "B) Magnesium",
          "C) Aluminium",
          "D) Sulphur"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Aluminium forms aluminium oxide (Al₂O₃), which is amphoteric — it reacts with both acids and bases to yield salt and water.",
        "stepMarking": [
          {
            "step": "Option (C) identifying Al₂O₃ as amphoteric oxide",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "The two standard amphoteric oxides in Class 10 CBSE are Al₂O₃ and ZnO.",
        "commonPitfall": "Choosing basic oxides like Na₂O or MgO."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Metals and Non-metals: Thermit Reaction",
        "questionText": "The reaction Fe₂O₃(s) + 2Al(s) → 2Fe(l) + Al₂O₃(s) + Heat is used to join cracked railway tracks because:",
        "options": [
          "A) It is endothermic and cools the track",
          "B) It is highly exothermic producing molten iron",
          "C) Aluminium oxide melts into steel",
          "D) Iron is more reactive than aluminium"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. The thermit reaction is a highly exothermic displacement reaction where Al reduces Fe₂O₃ and the heat released melts the iron produced.",
        "stepMarking": [
          {
            "step": "Option (B) noting exothermic nature yielding molten iron",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always mention molten state of Fe(l) due to intense heat.",
        "commonPitfall": "Thinking Fe displaces Al instead of Al displacing Fe."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Carbon and its Compounds: Functional Groups",
        "questionText": "Identify the functional group present in CH₃–CO–CH₃ (Propanone):",
        "options": [
          "A) Aldehyde (-CHO)",
          "B) Ketone (>C=O)",
          "C) Carboxylic acid (-COOH)",
          "D) Alcohol (-OH)"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Propanone contains the carbonyl group (>C=O) bonded to two carbon atoms on either side, characteristic of ketones.",
        "stepMarking": [
          {
            "step": "Identify ketone functional group (>C=O)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Suffix \"-one\" always represents Ketone; \"-al\" represents Aldehyde.",
        "commonPitfall": "Confusing propanone with propanal."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Carbon and its Compounds: Covalent Bonds in Pentane",
        "questionText": "Pentane has the molecular formula C₅H₁₂. How many covalent bonds are present in one molecule of pentane?",
        "options": [
          "A) 5",
          "B) 12",
          "C) 16",
          "D) 17"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Pentane has 4 C–C single bonds and 12 C–H single bonds, giving 4 + 12 = 16 covalent bonds.",
        "stepMarking": [
          {
            "step": "Option (C): 4 C–C + 12 C–H = 16 covalent bonds",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For any alkane CₙH₂ₙ₊₂, total covalent bonds = (n-1) + (2n+2) = 3n + 1. For n=5, 3(5)+1 = 16.",
        "commonPitfall": "Counting only C–H bonds (12) or forgetting one C–C bond."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Life Processes: Human Heart Double Circulation",
        "questionText": "Which chamber of the human heart receives oxygenated blood directly from the lungs via pulmonary veins?",
        "options": [
          "A) Right atrium",
          "B) Right ventricle",
          "C) Left atrium",
          "D) Left ventricle"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Oxygenated blood from the lungs enters the left atrium through the pulmonary veins before passing into the left ventricle.",
        "stepMarking": [
          {
            "step": "Identify Left Atrium as receiver of oxygenated blood from lungs",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Left side of heart always carries oxygenated blood; Atria always receive blood.",
        "commonPitfall": "Confusing pulmonary vein with pulmonary artery or atrium with ventricle."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Life Processes: Anaerobic Respiration in Muscle Cells",
        "questionText": "During vigorous exercise, muscle cramps occur due to accumulation of:",
        "options": [
          "A) Ethanol and CO₂",
          "B) Lactic acid",
          "C) Pyruvate",
          "D) Acetic acid"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Lack of oxygen in human skeletal muscle cells converts 3-carbon pyruvate into lactic acid (3-carbon molecule), causing cramps.",
        "stepMarking": [
          {
            "step": "Identify lactic acid accumulation during anaerobic muscle respiration",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Distinguish yeast fermentation (ethanol + CO₂) from muscle lack-of-O₂ pathway (lactic acid only).",
        "commonPitfall": "Selecting ethanol for human muscles."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Control and Coordination: Plant Tropisms",
        "questionText": "Growth of a pollen tube towards the ovule inside the pistil is an example of:",
        "options": [
          "A) Phototropism",
          "B) Geotropism",
          "C) Chemotropism",
          "D) Hydrotropism"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Pollen tube grows in response to chemical substances secreted by the ovule, demonstrating chemotropism.",
        "stepMarking": [
          {
            "step": "Identify Chemotropism",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember NCERT example: chemotropism = pollen tube growth towards ovule.",
        "commonPitfall": "Selecting geotropism because the tube grows downwards."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Control and Coordination: Synapse Transmission",
        "questionText": "At the synapse between two neurons, electrical impulse is converted into:",
        "options": [
          "A) Mechanical wave",
          "B) Chemical signal (neurotransmitter)",
          "C) Thermal energy",
          "D) Magnetic pulse"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. At the axon terminal, the electrical impulse triggers release of chemicals (neurotransmitters) that cross the synaptic gap and start a similar electrical impulse in the next neuron dendrite.",
        "stepMarking": [
          {
            "step": "Option (B) identifying chemical signal conversion at synapse",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Synapse ensures unidirectional flow of nerve impulses.",
        "commonPitfall": "Stating impulse jumps directly as electricity across the gap."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "How do Organisms Reproduce: Vegetative Propagation & Fission",
        "questionText": "Which organism reproduces by multiple fission inside a protective cyst under unfavourable conditions?",
        "options": [
          "A) Amoeba",
          "B) Leishmania",
          "C) Plasmodium",
          "D) Spirogyra"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Plasmodium (malarial parasite) divides into many daughter cells simultaneously by multiple fission.",
        "stepMarking": [
          {
            "step": "Identify Plasmodium as multiple fission example",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Amoeba = binary fission (any plane); Leishmania = binary fission (definite orientation); Plasmodium = multiple fission.",
        "commonPitfall": "Confusing Leishmania with Plasmodium."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Heredity: Mendel Monohybrid F₂ Ratio",
        "questionText": "When pure tall pea plants (TT) are crossed with pure dwarf pea plants (tt), the phenotypic ratio in the F₂ generation is:",
        "options": [
          "A) 1 : 2 : 1",
          "B) 3 : 1",
          "C) 9 : 3 : 3 : 1",
          "D) 2 : 1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. In F₂ generation, 75% plants are tall (1 TT + 2 Tt) and 25% are dwarf (1 tt), giving a phenotypic ratio of 3 : 1.",
        "stepMarking": [
          {
            "step": "Identify 3:1 phenotypic ratio in F2 monohybrid cross",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Phenotypic ratio = 3:1; Genotypic ratio = 1:2:1.",
        "commonPitfall": "Giving genotypic ratio 1:2:1 when phenotypic ratio is asked."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Light: Mirror Magnification Sign",
        "questionText": "A spherical mirror produces a magnification of m = -2. The image formed is:",
        "options": [
          "A) Virtual, erect and diminished",
          "B) Real, inverted and enlarged",
          "C) Virtual, erect and enlarged",
          "D) Real, inverted and same size"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Negative magnification (m < 0) denotes a real and inverted image; |m| = 2 > 1 indicates the image is magnified (enlarged).",
        "stepMarking": [
          {
            "step": "Negative sign = real/inverted, |m|>1 = enlarged",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always split m into sign (+ virtual/erect, - real/inverted) and magnitude (>1 enlarged, <1 diminished).",
        "commonPitfall": "Ignoring the minus sign."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Human Eye: Atmospheric Scattering & Refraction",
        "questionText": "Why do stars appear to twinkle at night whereas planets do not?",
        "options": [
          "A) Planets emit steady light",
          "B) Stars undergo continuous atmospheric refraction as point sources, while planets act as extended sources",
          "C) Stars undergo total internal reflection",
          "D) Planets absorb blue light completely"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Stars are distant point-sized sources whose apparent path fluctuates with changing air refractive indices. Planets are much closer extended sources (collection of many point sources) so total variation averages out to zero.",
        "stepMarking": [
          {
            "step": "Point source atmospheric refraction vs extended source averaging",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Must mention both \"point source\" and \"average variation becomes zero\" for extended planets.",
        "commonPitfall": "Saying stars produce flickering nuclear light."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q17",
        "qNum": 17,
        "section": "A",
        "marks": 1,
        "topic": "Magnetic Effects: Intersection of Field Lines",
        "questionText": "Assertion (A): Two magnetic field lines never intersect each other at any point.\nReason (R): If they intersected, a magnetic compass needle placed at that point would point in two different directions simultaneously, which is impossible.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Tangent to a field line gives the unique direction of net magnetic force at a point; two directions at one point cannot exist.",
        "stepMarking": [
          {
            "step": "Option (A) with compass needle contradiction logic",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Standard 1M/2M board favourite question.",
        "commonPitfall": "Confusing field lines with electric current paths."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q18",
        "qNum": 18,
        "section": "A",
        "marks": 1,
        "topic": "Carbon Compounds: Saturated vs Unsaturated Flames",
        "questionText": "Assertion (A): Saturated hydrocarbons normally burn with a clean blue flame in sufficient oxygen.\nReason (R): Saturated hydrocarbons contain a higher percentage of carbon than unsaturated hydrocarbons of the same chain length.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Saturated hydrocarbons burn with a clean flame because their percentage of carbon is LOWER than unsaturated hydrocarbons (alkenes/alkynes), allowing complete combustion.",
        "stepMarking": [
          {
            "step": "Option (C): A true, R false",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Unsaturated hydrocarbons have higher C:H mass ratio -> yellow sooty flame.",
        "commonPitfall": "Selecting (A) by overlooking \"higher percentage\"."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q19",
        "qNum": 19,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Reactions: Redox Reaction",
        "questionText": "Assertion (A): Reaction of zinc oxide with carbon (ZnO + C → Zn + CO) is a redox reaction.\nReason (R): Carbon is oxidised to CO while ZnO is reduced to Zn simultaneously.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Carbon gains oxygen (oxidation) and ZnO loses oxygen (reduction) simultaneously, proving it is a redox reaction.",
        "stepMarking": [
          {
            "step": "Option (A) with oxidation and reduction explanation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check truth of A, truth of R, and causal link.",
        "commonPitfall": "Confusing oxidising agent (ZnO) with substance oxidised (C)."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q20",
        "qNum": 20,
        "section": "A",
        "marks": 1,
        "topic": "Heredity: Sex Determination in Humans",
        "questionText": "Assertion (A): The sex of a newborn human child is determined genetically by the father.\nReason (R): All children inherit an X chromosome from their mother regardless of whether they are boys or girls.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Mother is XX (always contributes X). Father is XY (contributes X or Y). Thus inheriting X or Y from father decides XX (girl) or XY (boy).",
        "stepMarking": [
          {
            "step": "Option (A) with XX/XY chromosome inheritance proof",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Equal 50% probability exists for male and female child.",
        "commonPitfall": "Selecting (B) when R directly explains why mother does not decide sex."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Electricity: Heating Elements Alloy Preference",
        "questionText": "Why are coils of electric toasters and electric irons made of an alloy (nichrome) rather than a pure metal like copper?",
        "modelAnswer": "1. Alloys have much higher resistivity than their constituent pure metals, producing substantial Joule heat (H = I²Rt).\n2. Alloys do not oxidise (burn) readily at high red-hot temperatures.",
        "stepMarking": [
          {
            "step": "Higher resistivity of alloys",
            "marks": "1 Mark"
          },
          {
            "step": "Does not oxidise/burn easily at high temperature",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Both points are strictly required in CBSE marking schemes.",
        "commonPitfall": "Writing \"high melting point\" alone without mentioning non-oxidation."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q22",
        "qNum": 22,
        "section": "B",
        "marks": 2,
        "topic": "How do Organisms Reproduce: Placenta Role",
        "questionText": "Define placenta and state two vital functions it performs for the developing human embryo inside the uterus.",
        "modelAnswer": "Placenta is a special disc-shaped tissue embedded in the uterine wall containing villi on the embryo's side and blood spaces on the mother's side.\nFunctions: (1) Transfers glucose and oxygen from mother's blood to embryo; (2) Removes metabolic wastes generated by the embryo into mother's blood.",
        "stepMarking": [
          {
            "step": "Structure/definition with villi",
            "marks": "1 Mark"
          },
          {
            "step": "Nutrient/O2 supply & waste removal",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight the huge surface area provided by villi.",
        "commonPitfall": "Saying mother and baby blood mixes directly."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q23",
        "qNum": 23,
        "section": "B",
        "marks": 2,
        "topic": "Chemical Reactions: Silver Bromide Photolysis",
        "questionText": "2 g of silver bromide is taken in a china dish and kept in sunlight for some time.\n(i) State the colour change observed.\n(ii) Write the balanced chemical equation and mention one practical use of this reaction.",
        "modelAnswer": "(i) Pale yellow silver bromide turns grey due to formation of metallic silver.\n(ii) 2AgBr(s) --(Sunlight)--> 2Ag(s) + Br₂(g). Use: Black and white photography.",
        "stepMarking": [
          {
            "step": "(i) Colour change pale yellow to grey",
            "marks": "0.5 Mark"
          },
          {
            "step": "(ii) Balanced equation with Sunlight above arrow",
            "marks": "1 Mark"
          },
          {
            "step": "Application in B&W photography",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Always write \"Sunlight\" over the reaction arrow for photolytic decomposition.",
        "commonPitfall": "Writing AgCl instead of AgBr or forgetting to balance Br₂."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q24",
        "qNum": 24,
        "section": "B",
        "marks": 2,
        "topic": "Acids, Bases and Salts: Dilution Precaution",
        "questionText": "Why is it advised to add concentrated sulphuric acid slowly to water with constant stirring rather than adding water to acid?",
        "modelAnswer": "Dilution of concentrated acid is a highly exothermic process. If water is added to concentrated acid, the large heat generated instantly converts water to steam, causing the acidic mixture to splash out and cause severe burns. Adding acid slowly to water allows water to absorb the heat safely.",
        "stepMarking": [
          {
            "step": "Highly exothermic nature of acid dilution",
            "marks": "1 Mark"
          },
          {
            "step": "Risk of splashing/burns vs safe heat absorption",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention \"highly exothermic\" and \"splash out / container may break\".",
        "commonPitfall": "Saying acid explodes chemically with water."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q25",
        "qNum": 25,
        "section": "B",
        "marks": 2,
        "topic": "Life Processes: Rings of Cartilage & Residual Volume",
        "questionText": "(a) Why are rings of cartilage present in the human trachea?\n(b) What is the importance of residual volume of air in lungs?",
        "modelAnswer": "(a) C-shaped rings of cartilage ensure that the air passage (trachea) does not collapse even when there is very little air in it.\n(b) Residual volume ensures there is always sufficient time for oxygen to be absorbed and carbon dioxide to be released during the breathing cycle.",
        "stepMarking": [
          {
            "step": "(a) Prevent collapse of trachea",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Sufficient time for O2 absorption & CO2 release",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Quote NCERT directly for residual volume function.",
        "commonPitfall": "Stating cartilage filters dust instead of preventing collapse."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q26",
        "qNum": 26,
        "section": "B",
        "marks": 2,
        "topic": "Control and Coordination: Endocrine Feedback (Insulin)",
        "questionText": "How does our body respond when blood sugar level rises sharply after a meal? Name the hormone, the gland secreting it, and the feedback mechanism involved.",
        "modelAnswer": "Cells of the pancreas detect the rise in blood glucose and secrete more insulin hormone. Insulin stimulates body cells and liver to absorb glucose and convert excess into glycogen, lowering blood sugar. Once sugar drops to normal, insulin secretion decreases via feedback mechanism.",
        "stepMarking": [
          {
            "step": "Pancreas + Insulin identification",
            "marks": "1 Mark"
          },
          {
            "step": "Feedback regulation mechanism explained",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always name both Pancreas (gland) and Insulin (hormone).",
        "commonPitfall": "Writing adrenaline or thyroxine."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Heredity: Dihybrid Cross F₂ Phenotypic Ratio",
        "questionText": "In a cross between pea plants having Round Yellow seeds (RRYY) and Wrinkled Green seeds (rryy), what type of seeds appear in F₁? State the F₂ phenotypic ratio and explain what it proves.",
        "modelAnswer": "F₁ generation: All plants produce Round Yellow seeds (RrYy) because Round (R) and Yellow (Y) are dominant traits.\nF₂ phenotypic ratio: 9 (Round Yellow) : 3 (Round Green) : 3 (Wrinkled Yellow) : 1 (Wrinkled Green).\nConclusion: It proves the Law of Independent Assortment — seed shape and seed colour traits are inherited independently of each other.",
        "stepMarking": [
          {
            "step": "F1 all Round Yellow (RrYy)",
            "marks": "1 Mark"
          },
          {
            "step": "F2 ratio 9:3:3:1 with labels",
            "marks": "1 Mark"
          },
          {
            "step": "Independent inheritance of traits",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "New recombinant combinations (Round Green & Wrinkled Yellow) prove independent assortment.",
        "commonPitfall": "Writing 3:1 monohybrid ratio instead of 9:3:3:1."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Magnetic Effects: Fleming Left-Hand Rule & Domestic Safety",
        "questionText": "(a) State Fleming's Left-Hand Rule.\n(b) An electron enters a magnetic field directed from North to South while moving vertically downwards. Find the direction of force on the electron.\n(c) Mention the colour coding of Live, Neutral, and Earth wires in India.",
        "modelAnswer": "(a) Stretch thumb, forefinger and middle finger of left hand mutually perpendicular: Forefinger = Magnetic Field (B), Middle finger = Current (I), Thumb = Force/Motion (F).\n(b) Electron moves downwards => conventional current is vertically UPWARDS. Field is N→S. Applying Left-Hand Rule gives force towards WEST (or East depending on viewer frame; specifically perpendicular to both: let down=-y, N->S=-z => I=+y, B=-z => F = I×B = +y×(-z) = -x (West)).\n(c) Live = Red, Neutral = Black, Earth = Green.",
        "stepMarking": [
          {
            "step": "(a) Correct Fleming Left-Hand Rule statement",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Reversing electron direction for current -> force direction",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Red, Black, Green wire colours",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always reverse direction of negative charges (electrons) to get conventional current!",
        "commonPitfall": "Taking electron velocity directly as conventional current direction."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q29",
        "qNum": 29,
        "section": "C",
        "marks": 3,
        "topic": "Acids, Bases and Salts: Plaster of Paris Preparation & Storage",
        "questionText": "(a) Write the chemical formula and preparation equation of Plaster of Paris from gypsum.\n(b) Why should Plaster of Paris be stored in a moisture-proof container?\n(c) Give one medical and one decorative use of Plaster of Paris.",
        "modelAnswer": "(a) Formula: CaSO₄·½H₂O (Calcium sulphate hemihydrate).\nPreparation: CaSO₄·2H₂O --(373 K)--> CaSO₄·½H₂O + 1½H₂O.\n(b) On absorbing moisture, it reacts to set into a hard solid mass (gypsum), becoming useless.\n(c) Medical: Supporting fractured bones in right position; Decorative: Making toys/statues/smooth ceilings.",
        "stepMarking": [
          {
            "step": "(a) Formula + balanced 373 K equation",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) Sets into hard gypsum with moisture",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Two uses",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Always specify temperature 373 K (100°C); above this dead burnt plaster forms.",
        "commonPitfall": "Writing CaSO₄·2H₂O as Plaster of Paris instead of gypsum."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q30",
        "qNum": 30,
        "section": "C",
        "marks": 3,
        "topic": "Metals and Non-metals: Electrolytic Refining of Copper",
        "questionText": "Explain the electrolytic refining of impure copper with a well-labelled description of:\n(a) Anode, Cathode, and Electrolyte used\n(b) What happens to soluble and insoluble impurities (anode mud)?",
        "modelAnswer": "(a) Anode: Thick block of impure copper; Cathode: Thin strip of pure copper; Electrolyte: Acidified aqueous copper sulphate (CuSO₄) solution.\n(b) On passing current, pure copper dissolves from anode into electrolyte and deposits on cathode. Soluble impurities pass into solution, while insoluble impurities (Ag, Au) settle below the anode as anode mud.",
        "stepMarking": [
          {
            "step": "(a) Correct anode, cathode, and electrolyte",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) Ion migration + anode mud explanation",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Remember: Impure metal is ALWAYS Anode; Pure thin strip is ALWAYS Cathode.",
        "commonPitfall": "Swapping impure and pure electrodes."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q31",
        "qNum": 31,
        "section": "C",
        "marks": 3,
        "topic": "Life Processes: Nephron Urine Formation",
        "questionText": "Explain the three main steps involved in urine formation inside a nephron of the human kidney.",
        "modelAnswer": "1. Glomerular Filtration: Blood enters glomerulus under high pressure; water, urea, glucose, amino acids and salts filter into Bowman's capsule.\n2. Selective Reabsorption: As filtrate flows along renal tubule, useful substances like glucose, amino acids, salts and major amount of water are selectively reabsorbed into surrounding capillaries.\n3. Secretion / Collection: Remaining nitrogenous waste (urea) and excess water enter collecting duct as urine.",
        "stepMarking": [
          {
            "step": "Ultrafiltration in Bowman's capsule",
            "marks": "1 Mark"
          },
          {
            "step": "Selective reabsorption of glucose/water",
            "marks": "1.5 Marks"
          },
          {
            "step": "Amount of water reabsorbed depends on body water/waste",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Mention what determines how much water is reabsorbed: excess water in body and dissolved waste amount.",
        "commonPitfall": "Forgetting to list selective reabsorption of glucose and amino acids."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q32",
        "qNum": 32,
        "section": "C",
        "marks": 3,
        "topic": "Light: Concave Mirror Numerical",
        "questionText": "An object 4 cm in height is placed at 25 cm in front of a concave mirror of focal length 15 cm. At what distance from the mirror should a screen be placed to obtain a sharp image? Find the nature and height of the image.",
        "modelAnswer": "Given: h = +4 cm, u = -25 cm, f = -15 cm.\nMirror formula: 1/f = 1/v + 1/u => 1/(-15) = 1/v + 1/(-25)\n1/v = -1/15 + 1/25 = (-5 + 3)/75 = -2/75 => v = -37.5 cm.\nScreen should be placed 37.5 cm in front of the mirror.\nMagnification m = h'/h = -v/u => h'/4 = -(-37.5)/(-25) = -1.5 => h' = -6.0 cm.\nNature: Real, inverted and enlarged (height 6 cm).",
        "stepMarking": [
          {
            "step": "New Cartesian signs (u=-25, f=-15) & formula",
            "marks": "1 Mark"
          },
          {
            "step": "Image distance v = -37.5 cm",
            "marks": "1 Mark"
          },
          {
            "step": "Height h' = -6 cm & nature (real, inverted)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify with ray case: object between F (15 cm) and C (30 cm) -> image beyond C (37.5 cm), real, inverted, enlarged.",
        "commonPitfall": "Taking u or f as positive for a concave mirror."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q33",
        "qNum": 33,
        "section": "C",
        "marks": 3,
        "topic": "Human Eye: Myopia Cause & Correction",
        "questionText": "A student sitting on the last bench cannot read the blackboard clearly, though he can read his textbook comfortably.\n(a) Name the defect of vision and state its two causes.\n(b) Which lens corrects this defect? If his far point is 80 cm, calculate the power of the corrective lens required.",
        "modelAnswer": "(a) Defect: Myopia (near-sightedness). Causes: (i) Excessive curvature of the eye lens; (ii) Elongation of the eyeball.\n(b) Correction: Concave (diverging) lens.\nFor u = -∞, v = -80 cm = -0.8 m.\n1/f = 1/v - 1/u = 1/(-0.8) - 0 = -1.25 D.\nPower P = -1.25 D.",
        "stepMarking": [
          {
            "step": "(a) Myopia + two anatomical causes",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) Concave lens + correct sign numerical P = -1.25 D",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always convert cm to metres before computing Power P = 1/f(m).",
        "commonPitfall": "Using positive focal length for myopia correction."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q34",
        "qNum": 34,
        "section": "D",
        "marks": 5,
        "topic": "Light: Refraction, Ray Diagrams & Lens Numerical",
        "questionText": "(a) Draw ray diagrams for image formation by a convex lens when an object is placed: (i) between F₁ and 2F₁, (ii) between optical centre O and F₁.\n(b) A concave lens of focal length 15 cm forms an image 10 cm from the lens. How far is the object placed from the lens? Also compute magnification.",
        "modelAnswer": "(a) (i) Object between F₁ and 2F₁: Real, inverted, magnified image beyond 2F₂.\n(ii) Object between O and F₁: Virtual, erect, magnified image on same side as object (magnifying glass).\n(b) Concave lens: f = -15 cm, v = -10 cm.\nLens formula: 1/f = 1/v - 1/u => 1/u = 1/v - 1/f = 1/(-10) - 1/(-15) = -1/10 + 1/15 = -1/30.\nHence u = -30 cm (object is 30 cm in front of lens).\nMagnification m = v/u = (-10)/(-30) = +1/3 ≈ +0.33 (virtual, erect, diminished).",
        "stepMarking": [
          {
            "step": "(a) Both ray diagram positions & image natures",
            "marks": "2 Marks"
          },
          {
            "step": "(b) Lens formula + u = -30 cm",
            "marks": "2 Marks"
          },
          {
            "step": "Magnification m = +1/3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For concave lens, u, v, and f are ALL negative!",
        "commonPitfall": "Using mirror formula (1/v + 1/u) instead of lens formula (1/v - 1/u)."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q35",
        "qNum": 35,
        "section": "D",
        "marks": 5,
        "topic": "How do Organisms Reproduce: Human Female Reproductive System & Flower Fertilization",
        "questionText": "(a) State the functions of: (i) Ovary, (ii) Fallopian tube (Oviduct), (iii) Uterus in the human female reproductive system.\n(b) What happens in the uterus if the egg is NOT fertilised?\n(c) Trace the events following pollination inside a bisexual flower up to seed formation.",
        "modelAnswer": "(a) (i) Ovary: Produces female gametes (ova/eggs) and hormones oestrogen & progesterone.\n(ii) Oviduct: Site of fertilisation and transports egg to uterus.\n(iii) Uterus: Site of implantation and embryo development.\n(b) If egg is not fertilised, the thick spongy uterine lining breaks down and exits through vagina as blood and mucus (menstruation, ~2-8 days).\n(c) Pollen lands on stigma -> pollen tube grows through style to ovule -> male germ cell fuses with female egg cell (fertilisation) forming zygote -> zygote forms embryo, ovule becomes seed with tough coat, ovary ripens into fruit.",
        "stepMarking": [
          {
            "step": "(a) Functions of ovary, oviduct, uterus",
            "marks": "2 Marks"
          },
          {
            "step": "(b) Menstruation breakdown explained",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Pollen tube -> fertilisation -> ovule=seed, ovary=fruit",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Remember: Ovule -> Seed; Ovary -> Fruit.",
        "commonPitfall": "Writing fertilisation occurs in the uterus instead of oviduct."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q36",
        "qNum": 36,
        "section": "D",
        "marks": 5,
        "topic": "Carbon and its Compounds: Ethanol, Ethanoic Acid & Esterification",
        "questionText": "(a) Complete the following chemical equations:\n  (i) CH₃COOH + C₂H₅OH --(Conc. H₂SO₄)--> ?\n  (ii) CH₃CH₂OH --(Alkaline KMnO₄ + Heat)--> ?\n  (iii) CH₃COOC₂H₅ + NaOH → ?\n(b) Draw the electron dot structure of Ethanoic acid or Ethyne (C₂H₂).\n(c) Explain why soaps do not form lather easily in hard water.",
        "modelAnswer": "(a) (i) CH₃COOC₂H₅ (Ethyl ethanoate ester) + H₂O (Esterification).\n(ii) CH₃COOH (Ethanoic acid) + H₂O (Oxidation).\n(iii) CH₃COONa (Sodium ethanoate) + C₂H₅OH (Saponification).\n(b) Ethyne: H : C ⋮⋮ C : H (each carbon shares 3 electron pairs with other carbon and 1 pair with H).\n(c) Hard water contains Ca²⁺ and Mg²⁺ ions, which react with soap molecules (sodium salts of fatty acids) to form an insoluble curdy white precipitate called scum, wasting soap.",
        "stepMarking": [
          {
            "step": "(a) Three balanced equations with product names",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Correct covalent electron dot structure",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Ca²⁺/Mg²⁺ scum formation explanation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Write IUPAC names below products in organic equations.",
        "commonPitfall": "Confusing esterification (acid + alcohol) with saponification (ester + NaOH)."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q37",
        "qNum": 37,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Human Circulatory & Excretory Systems (Life Processes)",
        "questionText": "Read the passage and answer the questions:\nThe human heart has four chambers that prevent mixing of oxygenated and deoxygenated blood, ensuring a highly efficient oxygen supply needed for warm-blooded mammals and birds.\n\n(a) Why do birds and mammals require complete separation of left and right sides of the heart? (1M)\n(b) Why do ventricles have thicker muscular walls than atria? (1M)\n(c) Differentiate between arteries and veins based on wall thickness, valves, and blood direction. (2M)",
        "modelAnswer": "(a) Birds and mammals are warm-blooded and constantly use high energy to maintain steady body temperature, requiring uninterrupted oxygen-rich blood.\n(b) Ventricles have to pump blood under high pressure to distant organs and lungs, whereas atria only push blood into adjacent ventricles.\n(c) Arteries: Thick elastic walls, no valves, carry blood away from heart under high pressure. Veins: Thin walls, have valves to prevent backflow, collect blood from organs back to heart.",
        "stepMarking": [
          {
            "step": "(a) High energy for constant body temperature",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Ventricles pump blood to distant organs",
            "marks": "1 Mark"
          },
          {
            "step": "(c) 2 clear differences between arteries and veins",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Mention \"maintain constant body temperature\" for warm-blooded animals.",
        "commonPitfall": "Saying arteries always carry oxygenated blood without noting pulmonary artery exception."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q38",
        "qNum": 38,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Mendel Genetics & Blood Groups / Pea Cross (Heredity)",
        "questionText": "Read the passage and answer the questions:\nA farmer crossed pure violet-flowered pea plants (VV) with pure white-flowered pea plants (vv). In the F₁ generation, all 120 plants produced violet flowers. He then self-pollinated the F₁ plants to raise 800 plants in F₂.\n\n(a) State the genotype of all F₁ plants and identify the recessive trait. (1M)\n(b) How many plants out of 800 in F₂ are expected to have white flowers? (1M)\n(c) Out of 800 F₂ plants, how many are expected to be pure homozygous violet (VV) vs heterozygous violet (Vv)? (2M)",
        "modelAnswer": "(a) Genotype of F₁: Vv (heterozygous violet). White flower colour (v) is recessive.\n(b) F₂ phenotypic ratio is 3:1 => White flowers = 1/4 × 800 = 200 plants.\n(c) F₂ genotypic ratio is 1 VV : 2 Vv : 1 vv. Pure homozygous VV = 1/4 × 800 = 200 plants; Heterozygous Vv = 2/4 × 800 = 400 plants.",
        "stepMarking": [
          {
            "step": "(a) Vv genotype + white is recessive",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 200 white plants",
            "marks": "1 Mark"
          },
          {
            "step": "(c) 200 VV and 400 Vv",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Check sum: 200 (VV) + 400 (Vv) + 200 (vv) = 800 total.",
        "commonPitfall": "Giving 300 or 600 for homozygous violet instead of 200."
      },
      {
        "id": "kvs-c10-sci-2023-pb1-q39",
        "qNum": 39,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: pH Scale & Everyday Salts (Acids, Bases and Salts)",
        "questionText": "Read the passage and answer the questions:\nA student tested four aqueous solutions P, Q, R, and S with universal indicator paper. Solution P turned dark red (pH = 1), Q turned orange (pH = 4), R turned green (pH = 7), and S turned dark violet (pH = 13).\n\n(a) Arrange P, Q, R, S in increasing order of hydrogen ion [H⁺] concentration. (1M)\n(b) Identify which solution can be used to treat acidity in the stomach or neutralize acidic soil, and why. (1M)\n(c) What happens when solid sodium carbonate is added to solution P? Write the balanced chemical equation assuming P is HCl. (2M)",
        "modelAnswer": "(a) Increasing [H⁺]: S (pH 13) < R (pH 7) < Q (pH 4) < P (pH 1).\n(b) Solution S (strong base, or mild bases like Mg(OH)₂/CaO) neutralizes excess H⁺ ions, though mild antacids like milk of magnesia (pH ~10) are preferred internally.\n(c) Brisk effervescence of CO₂ gas occurs, which turns lime water milky.\nEquation: Na₂CO₃(s) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g).",
        "stepMarking": [
          {
            "step": "(a) Correct order S < R < Q < P",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Neutralisation logic",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Effervescence + balanced Na₂CO₃ + 2HCl equation",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Higher pH means LOWER H⁺ concentration!",
        "commonPitfall": "Arranging pH values directly as H⁺ order (reversing the inequality)."
      }
    ]
  },
  {
    "id": "nvs-c10-sci-2023-pb2",
    "title": "NVS Lucknow Region Class 10 Science Pre-Board Examination (2023)",
    "subject": "Science",
    "targetClass": "Class 10",
    "year": 2023,
    "paperType": "PRE_BOARD",
    "paperCode": "NVS/LKO/C10/SCI-4",
    "totalMarks": 80,
    "durationMins": 180,
    "difficulty": "CHALLENGING",
    "isFree": false,
    "totalQuestions": 39,
    "generalInstructions": [
      "This question paper consists of 39 questions in 5 sections: Section A to Section E.",
      "Section A consists of 20 objective type questions of 1 mark each (Q1–Q16 MCQs, Q17–Q20 Assertion-Reason).",
      "Section B consists of 6 Very Short Answer questions of 2 marks each (30–50 words).",
      "Section C consists of 7 Short Answer questions of 3 marks each (50–80 words).",
      "Section D consists of 3 Long Answer questions of 5 marks each (80–120 words).",
      "Section E consists of 3 source-based/case-based units of 4 marks each with sub-parts."
    ],
    "questions": [
      {
        "id": "nvs-c10-sci-2023-pb2-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Acids, Bases and Salts: Water of Crystallisation",
        "questionText": "Which of the following salts does NOT contain water of crystallisation?",
        "options": [
          "A) Blue vitriol",
          "B) Baking soda",
          "C) Washing soda",
          "D) Gypsum"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Baking soda is anhydrous sodium hydrogencarbonate (NaHCO₃). Blue vitriol (CuSO₄·5H₂O), washing soda (Na₂CO₃·10H₂O), and gypsum (CaSO₄·2H₂O) contain water of crystallisation.",
        "stepMarking": [
          {
            "step": "Identify NaHCO₃ (baking soda) as anhydrous",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize formulas of all 4 hydrated salts from NCERT Chapter 2.",
        "commonPitfall": "Confusing baking soda (NaHCO₃) with washing soda (Na₂CO₃·10H₂O)."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Metals and Non-metals: Amphoteric Oxides",
        "questionText": "An element X reacts with oxygen to form an oxide X₂O₃ which reacts with both HCl and NaOH to produce salt and water. The element X is:",
        "options": [
          "A) Sodium",
          "B) Magnesium",
          "C) Aluminium",
          "D) Sulphur"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Aluminium forms aluminium oxide (Al₂O₃), which is amphoteric — it reacts with both acids and bases to yield salt and water.",
        "stepMarking": [
          {
            "step": "Option (C) identifying Al₂O₃ as amphoteric oxide",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "The two standard amphoteric oxides in Class 10 CBSE are Al₂O₃ and ZnO.",
        "commonPitfall": "Choosing basic oxides like Na₂O or MgO."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Metals and Non-metals: Thermit Reaction",
        "questionText": "The reaction Fe₂O₃(s) + 2Al(s) → 2Fe(l) + Al₂O₃(s) + Heat is used to join cracked railway tracks because:",
        "options": [
          "A) It is endothermic and cools the track",
          "B) It is highly exothermic producing molten iron",
          "C) Aluminium oxide melts into steel",
          "D) Iron is more reactive than aluminium"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. The thermit reaction is a highly exothermic displacement reaction where Al reduces Fe₂O₃ and the heat released melts the iron produced.",
        "stepMarking": [
          {
            "step": "Option (B) noting exothermic nature yielding molten iron",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always mention molten state of Fe(l) due to intense heat.",
        "commonPitfall": "Thinking Fe displaces Al instead of Al displacing Fe."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Carbon and its Compounds: Functional Groups",
        "questionText": "Identify the functional group present in CH₃–CO–CH₃ (Propanone):",
        "options": [
          "A) Aldehyde (-CHO)",
          "B) Ketone (>C=O)",
          "C) Carboxylic acid (-COOH)",
          "D) Alcohol (-OH)"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Propanone contains the carbonyl group (>C=O) bonded to two carbon atoms on either side, characteristic of ketones.",
        "stepMarking": [
          {
            "step": "Identify ketone functional group (>C=O)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Suffix \"-one\" always represents Ketone; \"-al\" represents Aldehyde.",
        "commonPitfall": "Confusing propanone with propanal."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Carbon and its Compounds: Covalent Bonds in Pentane",
        "questionText": "Pentane has the molecular formula C₅H₁₂. How many covalent bonds are present in one molecule of pentane?",
        "options": [
          "A) 5",
          "B) 12",
          "C) 16",
          "D) 17"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Pentane has 4 C–C single bonds and 12 C–H single bonds, giving 4 + 12 = 16 covalent bonds.",
        "stepMarking": [
          {
            "step": "Option (C): 4 C–C + 12 C–H = 16 covalent bonds",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For any alkane CₙH₂ₙ₊₂, total covalent bonds = (n-1) + (2n+2) = 3n + 1. For n=5, 3(5)+1 = 16.",
        "commonPitfall": "Counting only C–H bonds (12) or forgetting one C–C bond."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Life Processes: Human Heart Double Circulation",
        "questionText": "Which chamber of the human heart receives oxygenated blood directly from the lungs via pulmonary veins?",
        "options": [
          "A) Right atrium",
          "B) Right ventricle",
          "C) Left atrium",
          "D) Left ventricle"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Oxygenated blood from the lungs enters the left atrium through the pulmonary veins before passing into the left ventricle.",
        "stepMarking": [
          {
            "step": "Identify Left Atrium as receiver of oxygenated blood from lungs",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Left side of heart always carries oxygenated blood; Atria always receive blood.",
        "commonPitfall": "Confusing pulmonary vein with pulmonary artery or atrium with ventricle."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Life Processes: Anaerobic Respiration in Muscle Cells",
        "questionText": "During vigorous exercise, muscle cramps occur due to accumulation of:",
        "options": [
          "A) Ethanol and CO₂",
          "B) Lactic acid",
          "C) Pyruvate",
          "D) Acetic acid"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Lack of oxygen in human skeletal muscle cells converts 3-carbon pyruvate into lactic acid (3-carbon molecule), causing cramps.",
        "stepMarking": [
          {
            "step": "Identify lactic acid accumulation during anaerobic muscle respiration",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Distinguish yeast fermentation (ethanol + CO₂) from muscle lack-of-O₂ pathway (lactic acid only).",
        "commonPitfall": "Selecting ethanol for human muscles."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Control and Coordination: Plant Tropisms",
        "questionText": "Growth of a pollen tube towards the ovule inside the pistil is an example of:",
        "options": [
          "A) Phototropism",
          "B) Geotropism",
          "C) Chemotropism",
          "D) Hydrotropism"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Pollen tube grows in response to chemical substances secreted by the ovule, demonstrating chemotropism.",
        "stepMarking": [
          {
            "step": "Identify Chemotropism",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember NCERT example: chemotropism = pollen tube growth towards ovule.",
        "commonPitfall": "Selecting geotropism because the tube grows downwards."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Control and Coordination: Synapse Transmission",
        "questionText": "At the synapse between two neurons, electrical impulse is converted into:",
        "options": [
          "A) Mechanical wave",
          "B) Chemical signal (neurotransmitter)",
          "C) Thermal energy",
          "D) Magnetic pulse"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. At the axon terminal, the electrical impulse triggers release of chemicals (neurotransmitters) that cross the synaptic gap and start a similar electrical impulse in the next neuron dendrite.",
        "stepMarking": [
          {
            "step": "Option (B) identifying chemical signal conversion at synapse",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Synapse ensures unidirectional flow of nerve impulses.",
        "commonPitfall": "Stating impulse jumps directly as electricity across the gap."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "How do Organisms Reproduce: Vegetative Propagation & Fission",
        "questionText": "Which organism reproduces by multiple fission inside a protective cyst under unfavourable conditions?",
        "options": [
          "A) Amoeba",
          "B) Leishmania",
          "C) Plasmodium",
          "D) Spirogyra"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Plasmodium (malarial parasite) divides into many daughter cells simultaneously by multiple fission.",
        "stepMarking": [
          {
            "step": "Identify Plasmodium as multiple fission example",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Amoeba = binary fission (any plane); Leishmania = binary fission (definite orientation); Plasmodium = multiple fission.",
        "commonPitfall": "Confusing Leishmania with Plasmodium."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Heredity: Mendel Monohybrid F₂ Ratio",
        "questionText": "When pure tall pea plants (TT) are crossed with pure dwarf pea plants (tt), the phenotypic ratio in the F₂ generation is:",
        "options": [
          "A) 1 : 2 : 1",
          "B) 3 : 1",
          "C) 9 : 3 : 3 : 1",
          "D) 2 : 1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. In F₂ generation, 75% plants are tall (1 TT + 2 Tt) and 25% are dwarf (1 tt), giving a phenotypic ratio of 3 : 1.",
        "stepMarking": [
          {
            "step": "Identify 3:1 phenotypic ratio in F2 monohybrid cross",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Phenotypic ratio = 3:1; Genotypic ratio = 1:2:1.",
        "commonPitfall": "Giving genotypic ratio 1:2:1 when phenotypic ratio is asked."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Light: Mirror Magnification Sign",
        "questionText": "A spherical mirror produces a magnification of m = -2. The image formed is:",
        "options": [
          "A) Virtual, erect and diminished",
          "B) Real, inverted and enlarged",
          "C) Virtual, erect and enlarged",
          "D) Real, inverted and same size"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Negative magnification (m < 0) denotes a real and inverted image; |m| = 2 > 1 indicates the image is magnified (enlarged).",
        "stepMarking": [
          {
            "step": "Negative sign = real/inverted, |m|>1 = enlarged",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always split m into sign (+ virtual/erect, - real/inverted) and magnitude (>1 enlarged, <1 diminished).",
        "commonPitfall": "Ignoring the minus sign."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Human Eye: Atmospheric Scattering & Refraction",
        "questionText": "Why do stars appear to twinkle at night whereas planets do not?",
        "options": [
          "A) Planets emit steady light",
          "B) Stars undergo continuous atmospheric refraction as point sources, while planets act as extended sources",
          "C) Stars undergo total internal reflection",
          "D) Planets absorb blue light completely"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Stars are distant point-sized sources whose apparent path fluctuates with changing air refractive indices. Planets are much closer extended sources (collection of many point sources) so total variation averages out to zero.",
        "stepMarking": [
          {
            "step": "Point source atmospheric refraction vs extended source averaging",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Must mention both \"point source\" and \"average variation becomes zero\" for extended planets.",
        "commonPitfall": "Saying stars produce flickering nuclear light."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Electricity: Resistivity Dependence",
        "questionText": "A cylindrical copper wire is stretched to double its length without changing its volume. Its electrical resistivity (ρ) will:",
        "options": [
          "A) Become 4 times",
          "B) Become double",
          "C) Become half",
          "D) Remain unchanged"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Resistivity (ρ) is a characteristic property of the material and temperature; it does NOT depend on length or cross-sectional area (unlike resistance R, which becomes 4 times).",
        "stepMarking": [
          {
            "step": "Resistivity depends only on material nature and temperature",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Read carefully: question asks RESISTIVITY, not resistance!",
        "commonPitfall": "Calculating R' = 4R and marking Option (A)."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Electricity: Fuse Rating Calculation",
        "questionText": "An electric iron of power rating 1100 W is operated at 220 V. Which fuse rating is most appropriate for this appliance?",
        "options": [
          "A) 1 A",
          "B) 3 A",
          "C) 5 A",
          "D) 6 A or higher (e.g. 10 A)"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Normal current I = P / V = 1100 / 220 = 5 A. A fuse must have a rating slightly above the normal operating current (e.g., 6 A / 10 A) so it does not melt during normal operation.",
        "stepMarking": [
          {
            "step": "Calculate I = 5 A and select rating slightly above 5 A",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Never choose a 5 A fuse when operating current is 5 A; slight surge will blow it.",
        "commonPitfall": "Marking 5 A directly without accounting for fuse margin."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Magnetic Effects: Solenoid Field Pattern",
        "questionText": "The magnetic field lines inside a long straight current-carrying solenoid are:",
        "options": [
          "A) Concentric circles",
          "B) Parallel straight lines indicating uniform magnetic field",
          "C) Radial outward lines",
          "D) Zero everywhere inside"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Inside a current-carrying solenoid, the magnetic field lines are parallel and equidistant straight lines, showing that the magnetic field is uniform at all points inside.",
        "stepMarking": [
          {
            "step": "Parallel straight lines = uniform magnetic field inside solenoid",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember NCERT phrase: \"field lines are in the form of parallel straight lines\".",
        "commonPitfall": "Confusing solenoid interior with straight conductor circular field."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q17",
        "qNum": 17,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Reactions: Redox Reaction",
        "questionText": "Assertion (A): Reaction of zinc oxide with carbon (ZnO + C → Zn + CO) is a redox reaction.\nReason (R): Carbon is oxidised to CO while ZnO is reduced to Zn simultaneously.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Carbon gains oxygen (oxidation) and ZnO loses oxygen (reduction) simultaneously, proving it is a redox reaction.",
        "stepMarking": [
          {
            "step": "Option (A) with oxidation and reduction explanation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check truth of A, truth of R, and causal link.",
        "commonPitfall": "Confusing oxidising agent (ZnO) with substance oxidised (C)."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q18",
        "qNum": 18,
        "section": "A",
        "marks": 1,
        "topic": "Heredity: Sex Determination in Humans",
        "questionText": "Assertion (A): The sex of a newborn human child is determined genetically by the father.\nReason (R): All children inherit an X chromosome from their mother regardless of whether they are boys or girls.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Mother is XX (always contributes X). Father is XY (contributes X or Y). Thus inheriting X or Y from father decides XX (girl) or XY (boy).",
        "stepMarking": [
          {
            "step": "Option (A) with XX/XY chromosome inheritance proof",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Equal 50% probability exists for male and female child.",
        "commonPitfall": "Selecting (B) when R directly explains why mother does not decide sex."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q19",
        "qNum": 19,
        "section": "A",
        "marks": 1,
        "topic": "Electricity: Domestic Parallel Wiring",
        "questionText": "Assertion (A): Domestic electrical appliances in a house are connected in parallel rather than series.\nReason (R): In a parallel circuit, each appliance receives the full mains voltage and has an independent switch.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Parallel connection ensures constant 220 V across every appliance, lower total resistance, and independent operation.",
        "stepMarking": [
          {
            "step": "Option (A) explaining independent switching and constant voltage",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In series, if one bulb fuses, the entire circuit breaks.",
        "commonPitfall": "Thinking parallel wiring increases total circuit resistance."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q20",
        "qNum": 20,
        "section": "A",
        "marks": 1,
        "topic": "Our Environment: Biological Magnification",
        "questionText": "Assertion (A): Maximum concentration of non-biodegradable pesticides like DDT accumulates in human beings at the top of the food chain.\nReason (R): Pesticides get degraded rapidly at every successive trophic level.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Assertion A is true (biomagnification), but Reason R is false because non-biodegradable pesticides are NOT degraded or washed away — they accumulate progressively.",
        "stepMarking": [
          {
            "step": "Option (C): A true, R false",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Read words like \"degraded rapidly\" carefully — non-biodegradable chemicals persist.",
        "commonPitfall": "Selecting (A) without catching the contradiction in R."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Chemical Reactions: Silver Bromide Photolysis",
        "questionText": "2 g of silver bromide is taken in a china dish and kept in sunlight for some time.\n(i) State the colour change observed.\n(ii) Write the balanced chemical equation and mention one practical use of this reaction.",
        "modelAnswer": "(i) Pale yellow silver bromide turns grey due to formation of metallic silver.\n(ii) 2AgBr(s) --(Sunlight)--> 2Ag(s) + Br₂(g). Use: Black and white photography.",
        "stepMarking": [
          {
            "step": "(i) Colour change pale yellow to grey",
            "marks": "0.5 Mark"
          },
          {
            "step": "(ii) Balanced equation with Sunlight above arrow",
            "marks": "1 Mark"
          },
          {
            "step": "Application in B&W photography",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Always write \"Sunlight\" over the reaction arrow for photolytic decomposition.",
        "commonPitfall": "Writing AgCl instead of AgBr or forgetting to balance Br₂."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q22",
        "qNum": 22,
        "section": "B",
        "marks": 2,
        "topic": "Acids, Bases and Salts: Dilution Precaution",
        "questionText": "Why is it advised to add concentrated sulphuric acid slowly to water with constant stirring rather than adding water to acid?",
        "modelAnswer": "Dilution of concentrated acid is a highly exothermic process. If water is added to concentrated acid, the large heat generated instantly converts water to steam, causing the acidic mixture to splash out and cause severe burns. Adding acid slowly to water allows water to absorb the heat safely.",
        "stepMarking": [
          {
            "step": "Highly exothermic nature of acid dilution",
            "marks": "1 Mark"
          },
          {
            "step": "Risk of splashing/burns vs safe heat absorption",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention \"highly exothermic\" and \"splash out / container may break\".",
        "commonPitfall": "Saying acid explodes chemically with water."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q23",
        "qNum": 23,
        "section": "B",
        "marks": 2,
        "topic": "Life Processes: Rings of Cartilage & Residual Volume",
        "questionText": "(a) Why are rings of cartilage present in the human trachea?\n(b) What is the importance of residual volume of air in lungs?",
        "modelAnswer": "(a) C-shaped rings of cartilage ensure that the air passage (trachea) does not collapse even when there is very little air in it.\n(b) Residual volume ensures there is always sufficient time for oxygen to be absorbed and carbon dioxide to be released during the breathing cycle.",
        "stepMarking": [
          {
            "step": "(a) Prevent collapse of trachea",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Sufficient time for O2 absorption & CO2 release",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Quote NCERT directly for residual volume function.",
        "commonPitfall": "Stating cartilage filters dust instead of preventing collapse."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q24",
        "qNum": 24,
        "section": "B",
        "marks": 2,
        "topic": "Control and Coordination: Endocrine Feedback (Insulin)",
        "questionText": "How does our body respond when blood sugar level rises sharply after a meal? Name the hormone, the gland secreting it, and the feedback mechanism involved.",
        "modelAnswer": "Cells of the pancreas detect the rise in blood glucose and secrete more insulin hormone. Insulin stimulates body cells and liver to absorb glucose and convert excess into glycogen, lowering blood sugar. Once sugar drops to normal, insulin secretion decreases via feedback mechanism.",
        "stepMarking": [
          {
            "step": "Pancreas + Insulin identification",
            "marks": "1 Mark"
          },
          {
            "step": "Feedback regulation mechanism explained",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always name both Pancreas (gland) and Insulin (hormone).",
        "commonPitfall": "Writing adrenaline or thyroxine."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q25",
        "qNum": 25,
        "section": "B",
        "marks": 2,
        "topic": "Light: Convex Mirror as Rear-View Mirror",
        "questionText": "Why do drivers prefer a convex mirror over a plane or concave mirror as a rear-view mirror in vehicles? Give two reasons.",
        "modelAnswer": "1. A convex mirror always forms a virtual, erect, and diminished image regardless of object distance.\n2. It has a much wider field of view because it is curved outwards, allowing the driver to see a large area of traffic behind.",
        "stepMarking": [
          {
            "step": "Always forms erect image",
            "marks": "1 Mark"
          },
          {
            "step": "Wider field of view",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Write both points cleanly as numbered bullets.",
        "commonPitfall": "Confusing rear-view mirror (convex) with headlight reflector (concave)."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q26",
        "qNum": 26,
        "section": "B",
        "marks": 2,
        "topic": "Our Environment: Ozone Layer Depletion",
        "questionText": "What is ozone? How is it formed in the upper stratosphere, and which man-made chemicals caused its sharp depletion in the 1980s?",
        "modelAnswer": "Ozone (O₃) is a triatomic molecule of oxygen that shields Earth from harmful UV radiation.\nFormation: UV rays split O₂ into free oxygen atoms (O), which combine with O₂: O₂ --(UV)--> O + O; O + O₂ → O₃.\nDepleting agents: Chlorofluorocarbons (CFCs) used in refrigerants and fire extinguishers.",
        "stepMarking": [
          {
            "step": "UV splitting O₂ + O + O₂ -> O₃",
            "marks": "1 Mark"
          },
          {
            "step": "CFCs named as depleting chemical",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Include both chemical equations for O₃ formation.",
        "commonPitfall": "Writing CO₂ or SO₂ instead of CFCs."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Acids, Bases and Salts: Plaster of Paris Preparation & Storage",
        "questionText": "(a) Write the chemical formula and preparation equation of Plaster of Paris from gypsum.\n(b) Why should Plaster of Paris be stored in a moisture-proof container?\n(c) Give one medical and one decorative use of Plaster of Paris.",
        "modelAnswer": "(a) Formula: CaSO₄·½H₂O (Calcium sulphate hemihydrate).\nPreparation: CaSO₄·2H₂O --(373 K)--> CaSO₄·½H₂O + 1½H₂O.\n(b) On absorbing moisture, it reacts to set into a hard solid mass (gypsum), becoming useless.\n(c) Medical: Supporting fractured bones in right position; Decorative: Making toys/statues/smooth ceilings.",
        "stepMarking": [
          {
            "step": "(a) Formula + balanced 373 K equation",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) Sets into hard gypsum with moisture",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Two uses",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Always specify temperature 373 K (100°C); above this dead burnt plaster forms.",
        "commonPitfall": "Writing CaSO₄·2H₂O as Plaster of Paris instead of gypsum."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Metals and Non-metals: Electrolytic Refining of Copper",
        "questionText": "Explain the electrolytic refining of impure copper with a well-labelled description of:\n(a) Anode, Cathode, and Electrolyte used\n(b) What happens to soluble and insoluble impurities (anode mud)?",
        "modelAnswer": "(a) Anode: Thick block of impure copper; Cathode: Thin strip of pure copper; Electrolyte: Acidified aqueous copper sulphate (CuSO₄) solution.\n(b) On passing current, pure copper dissolves from anode into electrolyte and deposits on cathode. Soluble impurities pass into solution, while insoluble impurities (Ag, Au) settle below the anode as anode mud.",
        "stepMarking": [
          {
            "step": "(a) Correct anode, cathode, and electrolyte",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) Ion migration + anode mud explanation",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Remember: Impure metal is ALWAYS Anode; Pure thin strip is ALWAYS Cathode.",
        "commonPitfall": "Swapping impure and pure electrodes."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q29",
        "qNum": 29,
        "section": "C",
        "marks": 3,
        "topic": "Life Processes: Nephron Urine Formation",
        "questionText": "Explain the three main steps involved in urine formation inside a nephron of the human kidney.",
        "modelAnswer": "1. Glomerular Filtration: Blood enters glomerulus under high pressure; water, urea, glucose, amino acids and salts filter into Bowman's capsule.\n2. Selective Reabsorption: As filtrate flows along renal tubule, useful substances like glucose, amino acids, salts and major amount of water are selectively reabsorbed into surrounding capillaries.\n3. Secretion / Collection: Remaining nitrogenous waste (urea) and excess water enter collecting duct as urine.",
        "stepMarking": [
          {
            "step": "Ultrafiltration in Bowman's capsule",
            "marks": "1 Mark"
          },
          {
            "step": "Selective reabsorption of glucose/water",
            "marks": "1.5 Marks"
          },
          {
            "step": "Amount of water reabsorbed depends on body water/waste",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Mention what determines how much water is reabsorbed: excess water in body and dissolved waste amount.",
        "commonPitfall": "Forgetting to list selective reabsorption of glucose and amino acids."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q30",
        "qNum": 30,
        "section": "C",
        "marks": 3,
        "topic": "Light: Concave Mirror Numerical",
        "questionText": "An object 4 cm in height is placed at 25 cm in front of a concave mirror of focal length 15 cm. At what distance from the mirror should a screen be placed to obtain a sharp image? Find the nature and height of the image.",
        "modelAnswer": "Given: h = +4 cm, u = -25 cm, f = -15 cm.\nMirror formula: 1/f = 1/v + 1/u => 1/(-15) = 1/v + 1/(-25)\n1/v = -1/15 + 1/25 = (-5 + 3)/75 = -2/75 => v = -37.5 cm.\nScreen should be placed 37.5 cm in front of the mirror.\nMagnification m = h'/h = -v/u => h'/4 = -(-37.5)/(-25) = -1.5 => h' = -6.0 cm.\nNature: Real, inverted and enlarged (height 6 cm).",
        "stepMarking": [
          {
            "step": "New Cartesian signs (u=-25, f=-15) & formula",
            "marks": "1 Mark"
          },
          {
            "step": "Image distance v = -37.5 cm",
            "marks": "1 Mark"
          },
          {
            "step": "Height h' = -6 cm & nature (real, inverted)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify with ray case: object between F (15 cm) and C (30 cm) -> image beyond C (37.5 cm), real, inverted, enlarged.",
        "commonPitfall": "Taking u or f as positive for a concave mirror."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q31",
        "qNum": 31,
        "section": "C",
        "marks": 3,
        "topic": "Human Eye: Myopia Cause & Correction",
        "questionText": "A student sitting on the last bench cannot read the blackboard clearly, though he can read his textbook comfortably.\n(a) Name the defect of vision and state its two causes.\n(b) Which lens corrects this defect? If his far point is 80 cm, calculate the power of the corrective lens required.",
        "modelAnswer": "(a) Defect: Myopia (near-sightedness). Causes: (i) Excessive curvature of the eye lens; (ii) Elongation of the eyeball.\n(b) Correction: Concave (diverging) lens.\nFor u = -∞, v = -80 cm = -0.8 m.\n1/f = 1/v - 1/u = 1/(-0.8) - 0 = -1.25 D.\nPower P = -1.25 D.",
        "stepMarking": [
          {
            "step": "(a) Myopia + two anatomical causes",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) Concave lens + correct sign numerical P = -1.25 D",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always convert cm to metres before computing Power P = 1/f(m).",
        "commonPitfall": "Using positive focal length for myopia correction."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q32",
        "qNum": 32,
        "section": "C",
        "marks": 3,
        "topic": "Electricity: Parallel Resistors & Total Current",
        "questionText": "Three resistors of 5 Ω, 10 Ω, and 30 Ω are connected in parallel across a 12 V battery. Calculate:\n(a) Current through each resistor\n(b) Total current drawn from the battery\n(c) Total effective resistance of the circuit.",
        "modelAnswer": "(a) Voltage across each branch is V = 12 V:\nI₁ = 12 / 5 = 2.4 A\nI₂ = 12 / 10 = 1.2 A\nI₃ = 12 / 30 = 0.4 A\n(b) Total current I = I₁ + I₂ + I₃ = 2.4 + 1.2 + 0.4 = 4.0 A.\n(c) 1/Rp = 1/5 + 1/10 + 1/30 = (6 + 3 + 1)/30 = 10/30 = 1/3 => Rp = 3 Ω (or V/I = 12/4 = 3 Ω).",
        "stepMarking": [
          {
            "step": "(a) Branch currents 2.4 A, 1.2 A, 0.4 A",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Total current 4.0 A",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Effective resistance 3 Ω",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check: Rp (3 Ω) must always be smaller than the smallest individual resistor (5 Ω).",
        "commonPitfall": "Forgetting to reciprocate 1/Rp = 1/3 back to Rp = 3 Ω."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q33",
        "qNum": 33,
        "section": "C",
        "marks": 3,
        "topic": "How do Organisms Reproduce: Contraceptive Methods",
        "questionText": "List three different categories of contraceptive methods used to prevent unwanted pregnancies, giving one example of each. Which method also protects against sexually transmitted diseases (STDs)?",
        "modelAnswer": "1. Mechanical / Barrier methods: Condoms (male/female) or cervical caps — prevent sperm from reaching egg.\n2. Chemical / Hormonal methods: Oral contraceptive pills — alter hormonal balance to prevent ovulation.\n3. Intra-Uterine Devices (IUDs) / Surgical methods: Copper-T (IUD) or Vasectomy/Tubectomy.\nSTD Protection: Barrier method (Condoms) provides protection against STDs such as HIV-AIDS, gonorrhoea, and syphilis.",
        "stepMarking": [
          {
            "step": "Three distinct categories with 1 example each",
            "marks": "2 Marks"
          },
          {
            "step": "Condoms/barrier method protects from STDs",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight that hormonal pills can cause side effects if taken carelessly.",
        "commonPitfall": "Saying IUDs or pills protect against STDs."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q34",
        "qNum": 34,
        "section": "D",
        "marks": 5,
        "topic": "How do Organisms Reproduce: Human Female Reproductive System & Flower Fertilization",
        "questionText": "(a) State the functions of: (i) Ovary, (ii) Fallopian tube (Oviduct), (iii) Uterus in the human female reproductive system.\n(b) What happens in the uterus if the egg is NOT fertilised?\n(c) Trace the events following pollination inside a bisexual flower up to seed formation.",
        "modelAnswer": "(a) (i) Ovary: Produces female gametes (ova/eggs) and hormones oestrogen & progesterone.\n(ii) Oviduct: Site of fertilisation and transports egg to uterus.\n(iii) Uterus: Site of implantation and embryo development.\n(b) If egg is not fertilised, the thick spongy uterine lining breaks down and exits through vagina as blood and mucus (menstruation, ~2-8 days).\n(c) Pollen lands on stigma -> pollen tube grows through style to ovule -> male germ cell fuses with female egg cell (fertilisation) forming zygote -> zygote forms embryo, ovule becomes seed with tough coat, ovary ripens into fruit.",
        "stepMarking": [
          {
            "step": "(a) Functions of ovary, oviduct, uterus",
            "marks": "2 Marks"
          },
          {
            "step": "(b) Menstruation breakdown explained",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Pollen tube -> fertilisation -> ovule=seed, ovary=fruit",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Remember: Ovule -> Seed; Ovary -> Fruit.",
        "commonPitfall": "Writing fertilisation occurs in the uterus instead of oviduct."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q35",
        "qNum": 35,
        "section": "D",
        "marks": 5,
        "topic": "Carbon and its Compounds: Ethanol, Ethanoic Acid & Esterification",
        "questionText": "(a) Complete the following chemical equations:\n  (i) CH₃COOH + C₂H₅OH --(Conc. H₂SO₄)--> ?\n  (ii) CH₃CH₂OH --(Alkaline KMnO₄ + Heat)--> ?\n  (iii) CH₃COOC₂H₅ + NaOH → ?\n(b) Draw the electron dot structure of Ethanoic acid or Ethyne (C₂H₂).\n(c) Explain why soaps do not form lather easily in hard water.",
        "modelAnswer": "(a) (i) CH₃COOC₂H₅ (Ethyl ethanoate ester) + H₂O (Esterification).\n(ii) CH₃COOH (Ethanoic acid) + H₂O (Oxidation).\n(iii) CH₃COONa (Sodium ethanoate) + C₂H₅OH (Saponification).\n(b) Ethyne: H : C ⋮⋮ C : H (each carbon shares 3 electron pairs with other carbon and 1 pair with H).\n(c) Hard water contains Ca²⁺ and Mg²⁺ ions, which react with soap molecules (sodium salts of fatty acids) to form an insoluble curdy white precipitate called scum, wasting soap.",
        "stepMarking": [
          {
            "step": "(a) Three balanced equations with product names",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Correct covalent electron dot structure",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Ca²⁺/Mg²⁺ scum formation explanation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Write IUPAC names below products in organic equations.",
        "commonPitfall": "Confusing esterification (acid + alcohol) with saponification (ester + NaOH)."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q36",
        "qNum": 36,
        "section": "D",
        "marks": 5,
        "topic": "Life Processes: Human Alimentary Canal & Respiration",
        "questionText": "(a) Name the enzyme present in (i) Saliva, (ii) Gastric juice, (iii) Pancreatic juice (for protein) and state their substrates and products.\n(b) How is the small intestine structurally adapted for maximum absorption of digested food?\n(c) Why do herbivores have a longer small intestine than carnivores?",
        "modelAnswer": "(a) (i) Salivary amylase: Starch → Maltose (simple sugar).\n(ii) Pepsin (active in acidic HCl): Proteins → Peptones.\n(iii) Trypsin (active in alkaline medium): Proteins → Simpler peptides/amino acids.\n(b) Inner lining of small intestine has millions of finger-like projections called villi, which increase surface area immensely and are richly supplied with blood vessels to transport absorbed nutrients.\n(c) Herbivores eat grass rich in cellulose, which takes much longer to digest; carnivores eat meat which is easier to digest, hence shorter small intestine.",
        "stepMarking": [
          {
            "step": "(a) All 3 enzymes, substrates, products",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Villi + rich blood supply",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Cellulose digestion in herbivores",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention acidic medium for Pepsin and alkaline medium for Trypsin.",
        "commonPitfall": "Saying pepsin digests starch or trypsin works in stomach."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q37",
        "qNum": 37,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Mendel Genetics & Blood Groups / Pea Cross (Heredity)",
        "questionText": "Read the passage and answer the questions:\nA farmer crossed pure violet-flowered pea plants (VV) with pure white-flowered pea plants (vv). In the F₁ generation, all 120 plants produced violet flowers. He then self-pollinated the F₁ plants to raise 800 plants in F₂.\n\n(a) State the genotype of all F₁ plants and identify the recessive trait. (1M)\n(b) How many plants out of 800 in F₂ are expected to have white flowers? (1M)\n(c) Out of 800 F₂ plants, how many are expected to be pure homozygous violet (VV) vs heterozygous violet (Vv)? (2M)",
        "modelAnswer": "(a) Genotype of F₁: Vv (heterozygous violet). White flower colour (v) is recessive.\n(b) F₂ phenotypic ratio is 3:1 => White flowers = 1/4 × 800 = 200 plants.\n(c) F₂ genotypic ratio is 1 VV : 2 Vv : 1 vv. Pure homozygous VV = 1/4 × 800 = 200 plants; Heterozygous Vv = 2/4 × 800 = 400 plants.",
        "stepMarking": [
          {
            "step": "(a) Vv genotype + white is recessive",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 200 white plants",
            "marks": "1 Mark"
          },
          {
            "step": "(c) 200 VV and 400 Vv",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Check sum: 200 (VV) + 400 (Vv) + 200 (vv) = 800 total.",
        "commonPitfall": "Giving 300 or 600 for homozygous violet instead of 200."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q38",
        "qNum": 38,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: pH Scale & Everyday Salts (Acids, Bases and Salts)",
        "questionText": "Read the passage and answer the questions:\nA student tested four aqueous solutions P, Q, R, and S with universal indicator paper. Solution P turned dark red (pH = 1), Q turned orange (pH = 4), R turned green (pH = 7), and S turned dark violet (pH = 13).\n\n(a) Arrange P, Q, R, S in increasing order of hydrogen ion [H⁺] concentration. (1M)\n(b) Identify which solution can be used to treat acidity in the stomach or neutralize acidic soil, and why. (1M)\n(c) What happens when solid sodium carbonate is added to solution P? Write the balanced chemical equation assuming P is HCl. (2M)",
        "modelAnswer": "(a) Increasing [H⁺]: S (pH 13) < R (pH 7) < Q (pH 4) < P (pH 1).\n(b) Solution S (strong base, or mild bases like Mg(OH)₂/CaO) neutralizes excess H⁺ ions, though mild antacids like milk of magnesia (pH ~10) are preferred internally.\n(c) Brisk effervescence of CO₂ gas occurs, which turns lime water milky.\nEquation: Na₂CO₃(s) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g).",
        "stepMarking": [
          {
            "step": "(a) Correct order S < R < Q < P",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Neutralisation logic",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Effervescence + balanced Na₂CO₃ + 2HCl equation",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Higher pH means LOWER H⁺ concentration!",
        "commonPitfall": "Arranging pH values directly as H⁺ order (reversing the inequality)."
      },
      {
        "id": "nvs-c10-sci-2023-pb2-q39",
        "qNum": 39,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Refraction Through Glass Slab & Lenses (Light)",
        "questionText": "Read the passage and answer the questions:\nWhen a ray of light travels obliquely from air (n = 1.0) into crown glass (n = 1.52) and diamond (n = 2.42), its speed decreases depending on the optical density of the medium. Lenses made of glass are used in cameras, projectors, and spectacles.\n\n(a) State Snell's Law of refraction. (1M)\n(b) In which medium (crown glass or diamond) is the speed of light lower, and by what ratio? (1M)\n(c) If the speed of light in vacuum is 3 × 10⁸ m/s and refractive index of water is 4/3, calculate the speed of light in water. Also state what happens to lateral displacement if thickness of a glass slab increases. (2M)",
        "modelAnswer": "(a) Snell's Law: Ratio of sine of angle of incidence to sine of angle of refraction is constant for a given colour of light and pair of media (sin i / sin r = n).\n(b) Speed is lower in diamond (higher refractive index n = 2.42); ratio v_glass / v_diamond = 2.42 / 1.52 ≈ 1.59.\n(c) v_water = c / n = (3 × 10⁸) / (4/3) = 2.25 × 10⁸ m/s. Lateral displacement INCREASES directly as slab thickness increases.",
        "stepMarking": [
          {
            "step": "(a) Snell's law statement/formula",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Diamond has lower speed",
            "marks": "1 Mark"
          },
          {
            "step": "(c) v = 2.25 × 10⁸ m/s + direct relation with thickness",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "v = c / n — refractive index is inversely proportional to speed of light.",
        "commonPitfall": "Multiplying c by n instead of dividing c by n."
      }
    ]
  }
];
