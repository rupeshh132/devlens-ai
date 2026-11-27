import type { PyqPaper } from '../../../../components/learn/PyqPaperViewerModal';

export const CLASS_12_BIO_BATCH4_PAPERS: PyqPaper[] = [
  {
    "id": "model-c12-bio-2024-dps",
    "title": "DPS R.K. Puram Class 12 Biology Pre-Board Model Paper (2024)",
    "subject": "Biology",
    "targetClass": "Class 12",
    "year": 2024,
    "paperType": "PRE_BOARD",
    "paperCode": "DPS/C12/BIO-01",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "CHALLENGING",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "All 33 questions are compulsory across 5 sections: Section A to Section E (Total 70 Marks).",
      "Section A: 16 questions (12 MCQs + 4 Assertion-Reason) of 1 mark each.",
      "Section B: 5 questions of 2 marks each.",
      "Section C: 7 questions of 3 marks each.",
      "Section D: 2 case-based questions of 4 marks each.",
      "Section E: 3 long answer questions of 5 marks each."
    ],
    "questions": [
      {
        "id": "model-c12-bio-2024-dps-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Human Health & Disease: Innate vs Active/Passive Immunity",
        "questionText": "Colostrum secreted by the mother during initial days of lactation provides abundant IgA antibodies to the newborn. This is an example of:",
        "options": [
          "A) Natural active immunity",
          "B) Natural passive immunity",
          "C) Artificial active immunity",
          "D) Cell-mediated immunity"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Pre-formed IgA antibodies are transferred naturally from mother to infant (no host antigen exposure/memory), making it natural passive immunity.",
        "stepMarking": [
          {
            "step": "Pre-formed IgA transferred naturally -> Natural passive immunity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Anti-venom / Tetanus antitoxin = Artificial passive; Vaccination = Artificial active; Colostrum / Placental IgG = Natural passive.",
        "commonPitfall": "Marking active immunity."
      },
      {
        "id": "model-c12-bio-2024-dps-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Microbes in Human Welfare: BOD & Sewage Treatment",
        "questionText": "During secondary sewage treatment, \"flocs\" consist of:",
        "options": [
          "A) Anaerobic methanogens only",
          "B) Masses of aerobic bacteria associated with fungal filaments forming mesh-like structures",
          "C) Heavy grit and floating plastic debris",
          "D) Pure nitrogen-fixing Rhizobium"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Vigorous aeration in aeration tanks promotes growth of useful aerobic microbes into flocs (bacteria + fungal filaments) that consume organic matter and sharply lower BOD.",
        "stepMarking": [
          {
            "step": "Aerobic bacteria + fungal filaments lowering BOD",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Higher BOD means MORE polluting potential of sewage water!",
        "commonPitfall": "Confusing aerobic flocs with anaerobic sludge digester methanogens."
      },
      {
        "id": "model-c12-bio-2024-dps-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Biotechnology Principles: Restriction Enzymes & Selectable Markers",
        "questionText": "Which enzyme is used to join sticky ends of vector DNA and foreign DNA fragments by forming phosphodiester bonds?",
        "options": [
          "A) EcoRI",
          "B) Taq polymerase",
          "C) DNA ligase",
          "D) Exonuclease"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. DNA ligase (molecular glue) seals sugar-phosphate backbones via phosphodiester bonds to form recombinant DNA.",
        "stepMarking": [
          {
            "step": "Identify DNA ligase",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "EcoRI = molecular scissors (cuts between G and A in 5'-GAATTC-3'); Taq polymerase = heat-stable PCR DNA synthesis; DNA ligase = molecular glue.",
        "commonPitfall": "Selecting Taq polymerase."
      },
      {
        "id": "model-c12-bio-2024-dps-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Biotechnology Applications: Bt Cotton & RNA Interference",
        "questionText": "Why does the Bt toxin protein crystal produced by Bacillus thuringiensis NOT kill the bacterium itself?",
        "options": [
          "A) Bacterium has a thick chitin wall",
          "B) Toxin exists as an inactive protoxin and activates only in the alkaline pH of the insect midgut",
          "C) Toxin only kills plant cells",
          "D) Acidic bacterial cytoplasm destroys it"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Inside Bacillus, Bt toxin exists as inactive protoxin; once ingested by an insect, the alkaline pH of the midgut solubilises the crystals and converts protoxin into active toxin that creates pores in midgut epithelial cells.",
        "stepMarking": [
          {
            "step": "Inactive protoxin activated by alkaline insect gut pH",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Specify \"alkaline pH of gut\" + \"pores in midgut epithelial cells causing swelling and lysis\".",
        "commonPitfall": "Writing \"acidic\" gut pH instead of \"alkaline\"!"
      },
      {
        "id": "model-c12-bio-2024-dps-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Organisms & Populations: Verhulst-Pearl Logistic Growth",
        "questionText": "In the Verhulst-Pearl Logistic Growth equation dN/dt = rN [(K - N)/K], when N equals K (carrying capacity), the population growth rate dN/dt becomes:",
        "options": [
          "A) Maximum",
          "B) Equal to rN",
          "C) Zero (asymptote phase)",
          "D) Exponential"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. When N = K, (K - N)/K = 0, so dN/dt = 0 and population size stabilises at carrying capacity K (sigmoid S-shaped curve).",
        "stepMarking": [
          {
            "step": "N = K => (K - N)/K = 0 => dN/dt = 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sigmoid curve shows Lag -> Log/Acceleration -> Deceleration -> Asymptote.",
        "commonPitfall": "Thinking dN/dt is maximum when N = K (max growth rate actually occurs at N = K/2!)."
      },
      {
        "id": "model-c12-bio-2024-dps-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Ecosystem & Biodiversity: Rivet Popper Hypothesis & Ecological Pyramids",
        "questionText": "Which ecological pyramid can NEVER be inverted in any natural ecosystem?",
        "options": [
          "A) Pyramid of biomass in sea",
          "B) Pyramid of number on a big tree",
          "C) Pyramid of energy",
          "D) Pyramid of biomass in grassland"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Pyramid of energy is ALWAYS upright because energy always flows unidirectionally from lower to higher trophic levels, with ~90% lost as heat at every step (10% law).",
        "stepMarking": [
          {
            "step": "Pyramid of energy always upright due to thermodynamic heat loss",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Biomass pyramid in sea (phytoplankton < zooplankton/fishes) IS inverted!",
        "commonPitfall": "Saying pyramid of biomass is always upright."
      },
      {
        "id": "model-c12-bio-2024-dps-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Sexual Reproduction in Flowering Plants: Pollen Viability & Tapetum",
        "questionText": "In an anther, the innermost wall layer that nourishes the developing pollen grains and typically possesses dense cytoplasm and multiple nuclei is:",
        "options": [
          "A) Epidermis",
          "B) Endothecium",
          "C) Middle layers",
          "D) Tapetum"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Tapetum is the innermost nourishing layer whose cells are often multinucleate and rich in cytoplasm; endothecium aids dehiscence.",
        "stepMarking": [
          {
            "step": "Identify Tapetum as nutritive innermost anther layer",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Pollen exine is made of sporopollenin (most resistant organic material known!).",
        "commonPitfall": "Confusing Tapetum with Endothecium (dehiscence)."
      },
      {
        "id": "model-c12-bio-2024-dps-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Human Reproduction: Hormonal Control of Spermatogenesis",
        "questionText": "Which hormone acts directly on Sertoli cells inside seminiferous tubules to stimulate secretion of factors that help in spermiogenesis?",
        "options": [
          "A) LH (Luteinising Hormone)",
          "B) FSH (Follicle Stimulating Hormone)",
          "C) Oxytocin",
          "D) Progesterone"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. LH acts on Leydig (interstitial) cells to secrete androgens, whereas FSH acts on Sertoli cells to assist spermiogenesis.",
        "stepMarking": [
          {
            "step": "FSH -> Sertoli cells; LH -> Leydig cells",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mnemonic: \"L\"H -> \"L\"eydig cells; \"F\"SH -> \"S\"ertoli cells.",
        "commonPitfall": "Swapping LH and FSH targets."
      },
      {
        "id": "model-c12-bio-2024-dps-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Reproductive Health: Copper IUDs Mechanism",
        "questionText": "Cu ions released by intra-uterine devices like CuT and Multiload 375 prevent pregnancy primarily by:",
        "options": [
          "A) Preventing ovulation directly",
          "B) Suppressing sperm motility and their fertilising capacity",
          "C) Blocking fallopian tubes surgically",
          "D) Inducing menstruation immediately"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Copper-releasing IUDs increase phagocytosis of sperms within the uterus and Cu²⁺ ions suppress sperm motility and fertilising ability.",
        "stepMarking": [
          {
            "step": "Suppress sperm motility & fertilising capacity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Hormone-releasing IUDs (LNG-20, Progestasert) additionally make the uterus unsuitable for implantation and cervix hostile to sperms.",
        "commonPitfall": "Writing that CuT prevents ovulation."
      },
      {
        "id": "model-c12-bio-2024-dps-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Principles of Inheritance: Pleiotropy & Multiple Alleles",
        "questionText": "ABO blood grouping in humans is a classic example of:",
        "options": [
          "A) Incomplete dominance only",
          "B) Multiple allelism and Co-dominance",
          "C) Polygenic inheritance",
          "D) Epistasis"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Three alleles (I^A, I^B, i) control blood group in a population (multiple allelism), and I^A I^B expresses both A and B sugars equally (co-dominance).",
        "stepMarking": [
          {
            "step": "Multiple allelism (3 alleles) + Co-dominance (I^A I^B)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "3 alleles produce 6 genotypes and 4 phenotypes in human ABO blood groups.",
        "commonPitfall": "Confusing co-dominance with incomplete dominance (Snapdragon flower)."
      },
      {
        "id": "model-c12-bio-2024-dps-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Molecular Basis of Inheritance: Lac Operon Regulation",
        "questionText": "In the lac operon of E. coli, which structural gene codes for the enzyme β-galactosidase that hydrolyses lactose into glucose and galactose?",
        "options": [
          "A) lac i",
          "B) lac z",
          "C) lac y",
          "D) lac a"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. z gene codes for β-galactosidase, y gene codes for permease, a gene codes for transacetylase, and i gene codes for the repressor.",
        "stepMarking": [
          {
            "step": "Identify lac z -> β-galactosidase",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice \"i\" in lac i stands for \"inhibitor\" (repressor), NOT \"inducer\"!",
        "commonPitfall": "Thinking lac y codes for β-galactosidase."
      },
      {
        "id": "model-c12-bio-2024-dps-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Evolution: Hardy-Weinberg Equilibrium Equation",
        "questionText": "In a population in Hardy-Weinberg equilibrium, the frequency of homozygous recessive genotype (aa) is 0.16. What is the frequency of heterozygous carriers (Aa)?",
        "options": [
          "A) 0.36",
          "B) 0.48",
          "C) 0.24",
          "D) 0.60"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. q² = 0.16 => q = 0.4. Since p + q = 1, p = 0.6. Heterozygous frequency 2pq = 2 × 0.6 × 0.4 = 0.48 (48%).",
        "stepMarking": [
          {
            "step": "q = 0.4, p = 0.6 -> 2pq = 0.48",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always verify p² + 2pq + q² = 0.36 + 0.48 + 0.16 = 1.00!",
        "commonPitfall": "Forgetting the factor of 2 in 2pq."
      },
      {
        "id": "model-c12-bio-2024-dps-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Biodiversity: Amazon Rainforests & In-situ Conservation",
        "questionText": "Assertion (A): Biodiversity hotspots are examples of ex-situ conservation.\nReason (R): Hotspots exhibit very high levels of species richness and high degree of endemism under urgent threat of habitat loss.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Biodiversity hotspots (like Western Ghats & Sri Lanka, Indo-Burma, Himalaya) are prime examples of IN-SITU (on-site) conservation, not ex-situ. Thus A is false, R is true.",
        "stepMarking": [
          {
            "step": "Option (D): Hotspots are in-situ conservation, so A false, R true",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In-situ: Hotspots, Biosphere reserves, National parks, Sacred groves; Ex-situ: Seed banks, Botanical gardens, Cryopreservation.",
        "commonPitfall": "Assuming hotspots are ex-situ."
      },
      {
        "id": "model-c12-bio-2024-dps-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Reproduction: Human Menstrual Cycle LH Surge",
        "questionText": "Assertion (A): Rapid secretion of LH leading to its maximum level during the mid-cycle (day 14) induces rupture of Graafian follicle and ovulation.\nReason (R): High LH surge triggers degeneration of corpus luteum before fertilisation.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Mid-cycle LH surge causes ovulation, after which the empty Graafian follicle transforms INTO the corpus luteum (it does not degenerate until day ~26–28 if fertilisation fails).",
        "stepMarking": [
          {
            "step": "Option (C): A true, R false",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "LH surge -> Ovulation -> Remainder becomes Corpus Luteum secreting Progesterone.",
        "commonPitfall": "Missing the false claim about corpus luteum degeneration at mid-cycle."
      },
      {
        "id": "model-c12-bio-2024-dps-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Molecular Inheritance: DNA Replication Polarity",
        "questionText": "Assertion (A): During DNA replication, synthesis on one template strand is continuous while on the other it is discontinuous (Okazaki fragments).\nReason (R): DNA-dependent DNA polymerase can polymerise nucleotides ONLY in the 5' → 3' direction.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Because DNA polymerase only extends 3'-OH (synthesising 5'→3'), the 3'→5' template is copied continuously while the 5'→3' template must be copied discontinuously away from the replication fork.",
        "stepMarking": [
          {
            "step": "Option (A) citing strict 5'→3' polymerase polarity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw the replication fork arrows in 2M/3M questions clearly.",
        "commonPitfall": "Saying Okazaki fragments grow 3'→5'."
      },
      {
        "id": "model-c12-bio-2024-dps-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Biotechnology: Gel Electrophoresis DNA Separation",
        "questionText": "Assertion (A): During agarose gel electrophoresis, DNA fragments move towards the positive anode under an electric field.\nReason (R): DNA molecules are negatively charged due to phosphate groups in their sugar-phosphate backbone.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Negatively charged DNA migrates toward the positive anode through agarose pores, with smaller fragments travelling farther.",
        "stepMarking": [
          {
            "step": "Option (A) citing negative phosphate backbone charge",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Stained with Ethidium Bromide and viewed under UV light as bright orange bands!",
        "commonPitfall": "Thinking larger fragments travel faster."
      },
      {
        "id": "model-c12-bio-2024-dps-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Flowering Plants: Apomixis & Polyembryony in Citrus/Mango",
        "questionText": "Define Apomixis and Polyembryony. Why does the hybrid seed industry strongly desire transferring apomictic genes into hybrid crops?",
        "modelAnswer": "Apomixis: Production of seeds without fertilisation (asexual reproduction mimicking sexual reproduction, e.g., Asteraceae and grasses).\nPolyembryony: Occurrence of more than one embryo in a single seed (e.g., Citrus, Mango nucellar cells).\nHybrid Advantage: Hybrid seeds lose vigour in F₂ due to segregation and cost farmers heavily every year; if made apomictic, there is no segregation of hybrid traits so farmers can replant saved seeds year after year.",
        "stepMarking": [
          {
            "step": "Definitions of Apomixis & Polyembryony",
            "marks": "1 Mark"
          },
          {
            "step": "Preventing hybrid trait segregation for farmers",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight \"no segregation of characters in hybrid progeny\".",
        "commonPitfall": "Confusing apomixis (seed without fertilisation) with parthenocarpy (fruit without fertilisation -> seedless)."
      },
      {
        "id": "model-c12-bio-2024-dps-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Inheritance: Haemophilia & Colour Blindness X-Linked Criss-Cross",
        "questionText": "A colour-blind man marries a woman with normal vision whose father was colour-blind. Work out a Punnett square to show the probability of their sons and daughters being colour-blind.",
        "modelAnswer": "Man = X^c Y; Woman = carrier X^C X^c (inherited X^c from colour-blind father).\nGametes: Man (X^c, Y) × Woman (X^C, X^c).\nOffspring genotypes:\n• X^C X^c (Carrier daughter) — 25%\n• X^c X^c (Colour-blind daughter) — 25% (50% of daughters)\n• X^C Y (Normal son) — 25%\n• X^c Y (Colour-blind son) — 25% (50% of sons).\n50% of sons and 50% of daughters will be colour-blind.",
        "stepMarking": [
          {
            "step": "Parental genotypes X^c Y and carrier X^C X^c",
            "marks": "1 Mark"
          },
          {
            "step": "Punnett cross showing 50% sons & 50% daughters affected",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember a daughter is affected ONLY when father is affected AND mother is at least a carrier!",
        "commonPitfall": "Assuming the woman is homozygous normal X^C X^C despite her colour-blind father."
      },
      {
        "id": "model-c12-bio-2024-dps-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Human Health: Innate Immunity Barriers & Interferons",
        "questionText": "What are interferons, and under which category of innate immunity barriers are they classified?",
        "modelAnswer": "Interferons are protective antiviral proteins secreted by virus-infected cells that protect neighbouring non-infected cells from further viral infection.\nThey belong to the Cytokine barriers of Innate Immunity.",
        "stepMarking": [
          {
            "step": "Antiviral proteins from virus-infected cells",
            "marks": "1 Mark"
          },
          {
            "step": "Cytokine barrier of Innate Immunity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Know all 4 NCERT Innate Barriers: Physical (skin/mucus), Physiological (HCl/tears), Cellular (PMNL/NK cells), Cytokine (Interferons).",
        "commonPitfall": "Classifying interferons under Cellular barriers."
      },
      {
        "id": "model-c12-bio-2024-dps-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Microbes: Statins, Cyclosporin A & Streptokinase",
        "questionText": "Name the bioactive molecule and its source microbe used as:\n(i) Immunosuppressive agent in organ-transplant patients\n(ii) Blood-cholesterol lowering agent.",
        "modelAnswer": "(i) Cyclosporin A — produced by the fungus Trichoderma polysporum.\n(ii) Statins — produced by the yeast Monascus purpureus (competitively inhibits enzyme responsible for cholesterol synthesis).",
        "stepMarking": [
          {
            "step": "Cyclosporin A from Trichoderma polysporum",
            "marks": "1 Mark"
          },
          {
            "step": "Statins from Monascus purpureus",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Also remember Streptokinase (\"clot buster\") from bacterium Streptococcus.",
        "commonPitfall": "Swapping Trichoderma polysporum and Monascus purpureus."
      },
      {
        "id": "model-c12-bio-2024-dps-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Biodiversity: Causes of Biodiversity Losses (\"The Evil Quartet\")",
        "questionText": "List the four major causes of accelerated species extinction collectively termed \"The Evil Quartet\", explaining any one with an example.",
        "modelAnswer": "The Evil Quartet:\n1. Habitat loss and fragmentation (most important — e.g., Amazon rainforest cleared for soy/cattle).\n2. Over-exploitation (e.g., Steller's sea cow, Passenger pigeon).\n3. Alien species invasions (e.g., Nile perch introduced into Lake Victoria killed 200+ native cichlid fish; Eichhornia/Lantana).\n4. Co-extinctions (obligatory host-parasite or plant-pollinator mutualism extinction).",
        "stepMarking": [
          {
            "step": "List all 4 Evil Quartet causes accurately",
            "marks": "1 Mark"
          },
          {
            "step": "Clear example explaining one cause",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight Habitat Loss & Fragmentation as the single biggest driver.",
        "commonPitfall": "Listing climate pollution without the exact 4 NCERT Evil Quartet terms."
      },
      {
        "id": "model-c12-bio-2024-dps-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Evolution: Darwinian Natural Selection vs Industrial Melanism & Analogous Organs",
        "questionText": "Differentiate between Homologous and Analogous organs with one plant and one animal example of each, naming the type of evolution they signify.",
        "modelAnswer": "1. Homologous Organs: Similar fundamental anatomical structure & origin, adapted for different functions (Divergent Evolution). Examples: Forelimbs of Whale, Bat, Cheetah, Human; Thorns of Bougainvillea and Tendrils of Cucurbita.\n2. Analogous Organs: Different anatomical structure & origin, evolved for similar functions (Convergent Evolution). Examples: Wings of butterfly and bird (or Eye of octopus & mammals; Flippers of penguins & dolphins); Sweet potato (root modification) and Potato (stem modification).",
        "stepMarking": [
          {
            "step": "Homologous = same origin, divergent evolution + 2 examples",
            "marks": "1.5 Marks"
          },
          {
            "step": "Analogous = different origin, convergent evolution + 2 examples",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always memorize ONE plant example and ONE animal example for both!",
        "commonPitfall": "Swapping divergent (homologous) and convergent (analogous)."
      },
      {
        "id": "model-c12-bio-2024-dps-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Human Health: Life Cycle of Plasmodium & AIDS Retrovirus Replication",
        "questionText": "Trace the key stages of HIV replication inside a human macrophage and explain why HIV-infected patients suffer severe opportunistic infections.",
        "modelAnswer": "1. HIV enters host Macrophage (acts as \"HIV factory\").\n2. Viral RNA genome is reverse-transcribed into viral DNA by enzyme Reverse Transcriptase.\n3. Viral DNA incorporates into host cell genome and directs synthesis of new viral RNA and particles.\n4. Progeny HIV simultaneously enters Helper T-lymphocytes (T_H cells), replicates and destroys them, causing a progressive drop in T_H count. Lacking cell-mediated immunity, patients succumb to opportunistic infections (Mycobacterium, viruses, Toxoplasma).",
        "stepMarking": [
          {
            "step": "Macrophage entry + Reverse Transcriptase (RNA -> DNA)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Host integration + Helper T-cell depletion -> immunodeficiency",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always specify BOTH cell types: Macrophage (\"HIV factory\") and Helper T-lymphocytes (T_H drop)!",
        "commonPitfall": "Saying HIV destroys B-cells directly instead of Helper T-cells."
      },
      {
        "id": "model-c12-bio-2024-dps-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Biotechnology Principles: PCR Three Steps & Applications",
        "questionText": "Describe the three sequential thermal steps of one Polymerase Chain Reaction (PCR) cycle with temperatures and the special DNA polymerase used.",
        "modelAnswer": "Enzyme used: Thermostable DNA polymerase (Taq polymerase) isolated from Thermus aquaticus (remains active at 94°C).\n1. Denaturation (~94°C): Double-stranded target DNA separates into two single strands.\n2. Annealing (~50–60°C): Two short oligonucleotide primers hydrogen-bond to complementary 3' ends of target strands.\n3. Extension (~72°C): Taq polymerase adds dNTPs onto primers in 5'→3' direction, doubling DNA copies per cycle (~1 billion copies in 30 cycles).",
        "stepMarking": [
          {
            "step": "Denaturation, Annealing, Extension in order",
            "marks": "2 Marks"
          },
          {
            "step": "Taq polymerase from Thermus aquaticus & role",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Show both primers and 5'→3' extension direction clearly.",
        "commonPitfall": "Putting Annealing before Denaturation."
      },
      {
        "id": "model-c12-bio-2024-dps-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Biotechnology Applications: Genetically Engineered Human Insulin (Eli Lilly)",
        "questionText": "Why is insulin extracted from slaughtered cattle/pigs less preferred today? Explain how Eli Lilly engineered recombinant human insulin (Humulin) in 1983 using E. coli.",
        "modelAnswer": "Animal insulin triggered allergic immune reactions in some diabetic patients.\nPro-insulin in humans has three chains (A, B, and extra C-peptide) which is removed during maturation into active A–B linked by disulphide bridges.\nEli Lilly prepared two separate DNA sequences corresponding to Chain A and Chain B of human insulin, inserted them separately into plasmids of E. coli to produce separate A and B chains, extracted them, and combined them by forming disulphide bonds to assemble functional human insulin.",
        "stepMarking": [
          {
            "step": "Allergy drawback + pro-insulin C-peptide removal challenge",
            "marks": "1.5 Marks"
          },
          {
            "step": "Separate A & B synthesis in E. coli + disulphide linkage",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Key detail: Chain A and Chain B were synthesised SEPARATELY and then joined via disulphide bonds!",
        "commonPitfall": "Saying E. coli processed pro-insulin directly (prokaryotes lack splicing/processing machinery!)."
      },
      {
        "id": "model-c12-bio-2024-dps-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Organisms & Populations: Population Interactions (Mutualism & Brood Parasitism)",
        "questionText": "Differentiate between Mutualism, Commensalism, and Brood Parasitism, giving one specific NCERT example of each.",
        "modelAnswer": "1. Mutualism (+, +): Both species benefit. Example: Lichens (algae + fungus), Mycorrhizae, or Fig tree and Wasp pollinator (or Orchid Ophrys sexual deceit).\n2. Commensalism (+, 0): One benefits while host is neither harmed nor benefited. Example: Orchid growing as epiphyte on mango branch, Barnacles on whale back, Cattle egret and grazing cattle.\n3. Brood Parasitism: Parasitic bird lays eggs in host nest letting host incubate them (eggs evolve to mimic host egg colour/size). Example: Cuckoo (Koel) laying eggs in Crow's nest.",
        "stepMarking": [
          {
            "step": "Three definitions with (+/+), (+/0), (+/-) signs",
            "marks": "1.5 Marks"
          },
          {
            "step": "One exact NCERT example for each",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Give (+, +), (+, 0), (+, -) symbols cleanly in table or bullets.",
        "commonPitfall": "Confusing Amensalism (-, 0) with Commensalism (+, 0)."
      },
      {
        "id": "model-c12-bio-2024-dps-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Ecosystem: Decomposition Steps in Detritus",
        "questionText": "Explain the five sequential steps involved in the process of decomposition of detritus in a terrestrial ecosystem.",
        "modelAnswer": "1. Fragmentation: Detritivores (earthworms) break detritus into smaller particles.\n2. Leaching: Water-soluble inorganic nutrients percolate into soil horizon and precipitate as unavailable salts.\n3. Catabolism: Bacterial and fungal enzymes degrade detritus into simpler inorganic substances.\n4. Humification: Accumulation of dark amorphous colloidal substance called humus (highly resistant to microbial action, decomposes very slowly, nutrient reservoir).\n5. Mineralisation: Further degradation of humus by microbes releasing inorganic nutrients back into soil.",
        "stepMarking": [
          {
            "step": "Fragmentation, Leaching, Catabolism",
            "marks": "1.5 Marks"
          },
          {
            "step": "Humification & Mineralisation explained",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Remember that Fragmentation, Leaching, and Catabolism occur SIMULTANEOUSLY on detritus.",
        "commonPitfall": "Putting Mineralisation before Humification."
      },
      {
        "id": "model-c12-bio-2024-dps-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Molecular Inheritance: Hershey-Chase Experiment (DNA as Genetic Material)",
        "questionText": "Why did Alfred Hershey and Martha Chase use radioactive isotopes ³²P and ³⁵S separately in bacteriophage infection experiments? State their final observation and conclusion.",
        "modelAnswer": "• Rationale: DNA contains Phosphorus (³²P) but NO Sulphur, whereas Protein coat contains Sulphur (³⁵S, in methionine/cysteine) but NO Phosphorus.\n• Procedure (3 steps): Infection of E. coli -> Blending (to agitate viral coats off bacteria) -> Centrifugation (heavier bacteria settle in pellet; lighter viral coats stay in supernatant).\n• Observation & Conclusion: Bacteria infected with ³²P phages were radioactive in the PELLET, whereas ³⁵S radioactivity remained only in the SUPERNATANT. Proved conclusively that DNA (not protein) is the genetic material transferred from virus to bacteria.",
        "stepMarking": [
          {
            "step": "³²P labels DNA only; ³⁵S labels Protein only",
            "marks": "1 Mark"
          },
          {
            "step": "Infection, Blending, Centrifugation steps",
            "marks": "1 Mark"
          },
          {
            "step": "³²P in pellet -> DNA is genetic material",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention exact words: Blending and Centrifugation, Pellet vs Supernatant!",
        "commonPitfall": "Saying ³⁵S entered the bacterial pellet."
      },
      {
        "id": "model-c12-bio-2024-dps-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Pedigree Analysis & Genetic Disorders",
        "questionText": "Read the case and answer:\nIn a family pedigree chart, unaffected carrier parents give birth to an affected child (both boys and girls can be affected equally), whereas an affected individual rarely transmits the trait directly to the next generation if marrying an unaffected homozygous partner.\n\n(a) Identify the mode of inheritance (Autosomal/Sex-linked; Dominant/Recessive) and give one classic human example. (2M)\n(b) State the defect in Sickle-Cell Anaemia at the DNA/protein codon level. (1.5M)\n(c) Why is Sickle-Cell Anaemia still maintained at noticeable frequency in malaria-endemic regions? (0.5M)",
        "modelAnswer": "(a) Autosomal Recessive inheritance (skips generations, affects males & females equally). Example: Sickle-cell anaemia or Phenylketonuria / Thalassemia.\n(b) Point mutation in β-globin gene on chromosome 11: GAG mutates to GUG in mRNA, substituting Glutamic acid (Glu) with Valine (Val) at the 6th position of β-globin chain.\n(c) Heterozygous carriers (Hb^A Hb^S) enjoy selective advantage against severe Plasmodium falciparum malaria.",
        "stepMarking": [
          {
            "step": "(a) Autosomal recessive + example",
            "marks": "2 Marks"
          },
          {
            "step": "(b) GAG -> GUG / 6th position Glu -> Val",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Heterozygote malaria resistance",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Pedigree shortcut: Normal parents having affected child => ALWAYS Recessive!",
        "commonPitfall": "Calling unaffected parents having affected child \"Dominant\"."
      },
      {
        "id": "model-c12-bio-2024-dps-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: pBR322 Cloning Vector & Insertional Inactivation",
        "questionText": "Read the passage and answer:\nPlasmids like pBR322 contain an origin of replication (ori), selectable markers (amp^R and tet^R), and unique cloning sites such as BamHI inside tet^R. Alternatively, chromogenic substrates (X-gal) allow blue-white screening using β-galactosidase.\n\n(a) What is the function of the \"ori\" site in a cloning vector? (1M)\n(b) If foreign DNA is ligated at the BamHI site of pBR322, how will you distinguish recombinant colonies from non-recombinant transformants? (2M)\n(c) Why is blue-white colour selection preferred over antibiotic double-plating? (1M)",
        "modelAnswer": "(a) ori is the sequence from where replication starts, and also controls the copy number of the linked foreign DNA.\n(b) Inserting DNA at BamHI inactivates the tet^R gene (insertional inactivation), while amp^R remains intact. Transformants first grow on ampicillin medium; transferring replicas onto tetracycline kills recombinants while non-recombinants grow on BOTH antibiotics.\n(c) Double antibiotic plating is cumbersome (requires simultaneous plating on two media plates); chromogenic blue-white screening separates white recombinants from blue non-recombinants on a single plate.",
        "stepMarking": [
          {
            "step": "(a) Starts replication & controls copy number",
            "marks": "1 Mark"
          },
          {
            "step": "(b) tet^R inactivated -> grows on Amp, dies on Tet",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Single-plate convenience vs cumbersome double plating",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice: Recombinants produce WHITE colonies (gene inactivated -> no enzyme) while non-recombinants turn BLUE!",
        "commonPitfall": "Thinking recombinant colonies turn blue in β-galactosidase screening."
      },
      {
        "id": "model-c12-bio-2024-dps-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Human Reproduction: Oogenesis vs Spermatogenesis & Hormonal Menstrual Cycle",
        "questionText": "(a) Trace the sequence of stages of Oogenesis in human females, noting when Meiosis I and Meiosis II complete.\n(b) Explain the hormonal changes (LH, FSH, Oestrogen, Progesterone) across the Follicular, Ovulatory, and Luteal phases of a 28-day menstrual cycle.",
        "modelAnswer": "(a) Oogonia (2n, formed before birth!) enter Prophase I and arrest as Primary oocytes (2n). At puberty, primary follicles mature into tertiary follicles; Primary oocyte completes Meiosis I inside tertiary follicle forming large Secondary oocyte (n) and tiny First polar body (n). Meiosis II arrests at Metaphase II and completes ONLY upon sperm entry during fertilisation, forming Ovum (n) and Second polar body.\n(b) • Follicular phase (days 5–13): FSH & LH rise gradually, stimulating follicular growth and Oestrogen secretion to regenerate endometrium.\n• Ovulatory phase (day 14): Peak Oestrogen triggers sharp LH surge, rupturing Graafian follicle to release secondary oocyte.\n• Luteal phase (days 15–28): Corpus luteum secretes high Progesterone to maintain thick secretory endometrium for implantation. Without fertilisation, corpus luteum regresses into corpus albicans, Progesterone falls, causing menstruation.",
        "stepMarking": [
          {
            "step": "(a) Foetal Prophase I arrest -> Meiosis I -> Metaphase II fertilisation arrest",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) FSH/LH/Oestrogen/Progesterone roles across all 3 phases",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Highlight BOTH meiotic arrest points in Oogenesis (Prophase I before birth; Metaphase II before fertilisation)!",
        "commonPitfall": "Stating Meiosis II completes inside ovary before ovulation."
      },
      {
        "id": "model-c12-bio-2024-dps-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Molecular Basis of Inheritance: Transcription & Genetic Code Properties",
        "questionText": "(a) Draw a schematic labelled diagram of a Transcription Unit and explain why BOTH DNA strands are not copied during transcription.\n(b) State four salient features of the Genetic Code.",
        "modelAnswer": "(a) Transcription unit components: Promoter (at 5' end of coding strand), Structural gene, Terminator (at 3' end of coding strand). Template strand runs 3'→5' while Coding strand runs 5'→3' (matching mRNA sequence except T→U).\nWhy not both strands: (1) Two complementary mRNAs would encode two completely different proteins, complicating genetic transfer; (2) Two complementary RNAs would pair to form double-stranded RNA (dsRNA), blocking translation into protein.\n(b) Genetic Code features: (1) Triplet (61 sense codons + 3 stop codons UAA, UAG, UGA); (2) Unambiguous/Specific (1 codon = 1 amino acid); (3) Degenerate (multiple codons for most amino acids); (4) Universal across bacteria to humans & Commaless; (5) AUG is dual initiator (codes Methionine + start codon).",
        "stepMarking": [
          {
            "step": "(a) Promoter/Structural/Terminator polarity + 2 reasons against dual-strand copying",
            "marks": "3 Marks"
          },
          {
            "step": "(b) 4 clear features of Genetic Code",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Promoter position is ALWAYS referenced w.r.t. the 5' end of the CODING strand!",
        "commonPitfall": "Writing that Template strand sequence matches mRNA (it is complementary; CODING strand matches mRNA!)."
      },
      {
        "id": "model-c12-bio-2024-dps-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Biotechnology Applications: Gene Therapy (ADA Deficiency) & Transgenic Animals",
        "questionText": "(a) Explain how ADA (Adenosine Deaminase) deficiency was treated in a 4-year-old girl in 1990 using gene therapy. Why is periodic infusion of engineered lymphocytes required, and how can a permanent cure be achieved?\n(b) State four ways transgenic animals are beneficial to human medicine and research.",
        "modelAnswer": "(a) Lymphocytes from patient's blood were cultured outside; a functional ADA cDNA was introduced into them using a retroviral vector, and engineered lymphocytes were returned to the patient. Because lymphocytes are NOT immortal, patients require periodic infusions. A permanent cure requires isolating the gene from marrow cells and introducing it at early EMBRYONIC stages.\n(b) Transgenic animal benefits: (1) Studying normal physiology & gene regulation (e.g., insulin-like growth factor); (2) Disease models (cancer, cystic fibrosis, Alzheimer's); (3) Biological products (α-1-antitrypsin for emphysema; Rosie cow producing 2.4 g/L human α-lactalbumin enriched milk); (4) Vaccine safety & chemical toxicity testing.",
        "stepMarking": [
          {
            "step": "(a) Retroviral ADA cDNA in lymphocytes + embryonic permanent cure",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Four transgenic uses with Rosie / α-1-antitrypsin examples",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Cite exact year 1990, Rosie transgenic cow (1997, 2.4 g/L α-lactalbumin), and α-1-antitrypsin.",
        "commonPitfall": "Saying lymphocyte infusion gives permanent cure."
      }
    ]
  },
  {
    "id": "model-c12-bio-2024-cfpq",
    "title": "CBSE CFPQ Competency Practice Class 12 Biology Paper (2024-25)",
    "subject": "Biology",
    "targetClass": "Class 12",
    "year": 2024,
    "paperType": "CBSE_SAMPLE",
    "paperCode": "CFPQ/C12/BIO-02",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "CHALLENGING",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "All 33 questions are compulsory across 5 sections: Section A to Section E (Total 70 Marks).",
      "Section A: 16 questions (12 MCQs + 4 Assertion-Reason) of 1 mark each.",
      "Section B: 5 questions of 2 marks each.",
      "Section C: 7 questions of 3 marks each.",
      "Section D: 2 case-based questions of 4 marks each.",
      "Section E: 3 long answer questions of 5 marks each."
    ],
    "questions": [
      {
        "id": "model-c12-bio-2024-cfpq-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Biotechnology Principles: Restriction Enzymes & Selectable Markers",
        "questionText": "Which enzyme is used to join sticky ends of vector DNA and foreign DNA fragments by forming phosphodiester bonds?",
        "options": [
          "A) EcoRI",
          "B) Taq polymerase",
          "C) DNA ligase",
          "D) Exonuclease"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. DNA ligase (molecular glue) seals sugar-phosphate backbones via phosphodiester bonds to form recombinant DNA.",
        "stepMarking": [
          {
            "step": "Identify DNA ligase",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "EcoRI = molecular scissors (cuts between G and A in 5'-GAATTC-3'); Taq polymerase = heat-stable PCR DNA synthesis; DNA ligase = molecular glue.",
        "commonPitfall": "Selecting Taq polymerase."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Biotechnology Applications: Bt Cotton & RNA Interference",
        "questionText": "Why does the Bt toxin protein crystal produced by Bacillus thuringiensis NOT kill the bacterium itself?",
        "options": [
          "A) Bacterium has a thick chitin wall",
          "B) Toxin exists as an inactive protoxin and activates only in the alkaline pH of the insect midgut",
          "C) Toxin only kills plant cells",
          "D) Acidic bacterial cytoplasm destroys it"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Inside Bacillus, Bt toxin exists as inactive protoxin; once ingested by an insect, the alkaline pH of the midgut solubilises the crystals and converts protoxin into active toxin that creates pores in midgut epithelial cells.",
        "stepMarking": [
          {
            "step": "Inactive protoxin activated by alkaline insect gut pH",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Specify \"alkaline pH of gut\" + \"pores in midgut epithelial cells causing swelling and lysis\".",
        "commonPitfall": "Writing \"acidic\" gut pH instead of \"alkaline\"!"
      },
      {
        "id": "model-c12-bio-2024-cfpq-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Organisms & Populations: Verhulst-Pearl Logistic Growth",
        "questionText": "In the Verhulst-Pearl Logistic Growth equation dN/dt = rN [(K - N)/K], when N equals K (carrying capacity), the population growth rate dN/dt becomes:",
        "options": [
          "A) Maximum",
          "B) Equal to rN",
          "C) Zero (asymptote phase)",
          "D) Exponential"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. When N = K, (K - N)/K = 0, so dN/dt = 0 and population size stabilises at carrying capacity K (sigmoid S-shaped curve).",
        "stepMarking": [
          {
            "step": "N = K => (K - N)/K = 0 => dN/dt = 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sigmoid curve shows Lag -> Log/Acceleration -> Deceleration -> Asymptote.",
        "commonPitfall": "Thinking dN/dt is maximum when N = K (max growth rate actually occurs at N = K/2!)."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Ecosystem & Biodiversity: Rivet Popper Hypothesis & Ecological Pyramids",
        "questionText": "Which ecological pyramid can NEVER be inverted in any natural ecosystem?",
        "options": [
          "A) Pyramid of biomass in sea",
          "B) Pyramid of number on a big tree",
          "C) Pyramid of energy",
          "D) Pyramid of biomass in grassland"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Pyramid of energy is ALWAYS upright because energy always flows unidirectionally from lower to higher trophic levels, with ~90% lost as heat at every step (10% law).",
        "stepMarking": [
          {
            "step": "Pyramid of energy always upright due to thermodynamic heat loss",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Biomass pyramid in sea (phytoplankton < zooplankton/fishes) IS inverted!",
        "commonPitfall": "Saying pyramid of biomass is always upright."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Sexual Reproduction in Flowering Plants: Pollen Viability & Tapetum",
        "questionText": "In an anther, the innermost wall layer that nourishes the developing pollen grains and typically possesses dense cytoplasm and multiple nuclei is:",
        "options": [
          "A) Epidermis",
          "B) Endothecium",
          "C) Middle layers",
          "D) Tapetum"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Tapetum is the innermost nourishing layer whose cells are often multinucleate and rich in cytoplasm; endothecium aids dehiscence.",
        "stepMarking": [
          {
            "step": "Identify Tapetum as nutritive innermost anther layer",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Pollen exine is made of sporopollenin (most resistant organic material known!).",
        "commonPitfall": "Confusing Tapetum with Endothecium (dehiscence)."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Human Reproduction: Hormonal Control of Spermatogenesis",
        "questionText": "Which hormone acts directly on Sertoli cells inside seminiferous tubules to stimulate secretion of factors that help in spermiogenesis?",
        "options": [
          "A) LH (Luteinising Hormone)",
          "B) FSH (Follicle Stimulating Hormone)",
          "C) Oxytocin",
          "D) Progesterone"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. LH acts on Leydig (interstitial) cells to secrete androgens, whereas FSH acts on Sertoli cells to assist spermiogenesis.",
        "stepMarking": [
          {
            "step": "FSH -> Sertoli cells; LH -> Leydig cells",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mnemonic: \"L\"H -> \"L\"eydig cells; \"F\"SH -> \"S\"ertoli cells.",
        "commonPitfall": "Swapping LH and FSH targets."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Reproductive Health: Copper IUDs Mechanism",
        "questionText": "Cu ions released by intra-uterine devices like CuT and Multiload 375 prevent pregnancy primarily by:",
        "options": [
          "A) Preventing ovulation directly",
          "B) Suppressing sperm motility and their fertilising capacity",
          "C) Blocking fallopian tubes surgically",
          "D) Inducing menstruation immediately"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Copper-releasing IUDs increase phagocytosis of sperms within the uterus and Cu²⁺ ions suppress sperm motility and fertilising ability.",
        "stepMarking": [
          {
            "step": "Suppress sperm motility & fertilising capacity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Hormone-releasing IUDs (LNG-20, Progestasert) additionally make the uterus unsuitable for implantation and cervix hostile to sperms.",
        "commonPitfall": "Writing that CuT prevents ovulation."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Principles of Inheritance: Pleiotropy & Multiple Alleles",
        "questionText": "ABO blood grouping in humans is a classic example of:",
        "options": [
          "A) Incomplete dominance only",
          "B) Multiple allelism and Co-dominance",
          "C) Polygenic inheritance",
          "D) Epistasis"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Three alleles (I^A, I^B, i) control blood group in a population (multiple allelism), and I^A I^B expresses both A and B sugars equally (co-dominance).",
        "stepMarking": [
          {
            "step": "Multiple allelism (3 alleles) + Co-dominance (I^A I^B)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "3 alleles produce 6 genotypes and 4 phenotypes in human ABO blood groups.",
        "commonPitfall": "Confusing co-dominance with incomplete dominance (Snapdragon flower)."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Molecular Basis of Inheritance: Lac Operon Regulation",
        "questionText": "In the lac operon of E. coli, which structural gene codes for the enzyme β-galactosidase that hydrolyses lactose into glucose and galactose?",
        "options": [
          "A) lac i",
          "B) lac z",
          "C) lac y",
          "D) lac a"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. z gene codes for β-galactosidase, y gene codes for permease, a gene codes for transacetylase, and i gene codes for the repressor.",
        "stepMarking": [
          {
            "step": "Identify lac z -> β-galactosidase",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice \"i\" in lac i stands for \"inhibitor\" (repressor), NOT \"inducer\"!",
        "commonPitfall": "Thinking lac y codes for β-galactosidase."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Evolution: Hardy-Weinberg Equilibrium Equation",
        "questionText": "In a population in Hardy-Weinberg equilibrium, the frequency of homozygous recessive genotype (aa) is 0.16. What is the frequency of heterozygous carriers (Aa)?",
        "options": [
          "A) 0.36",
          "B) 0.48",
          "C) 0.24",
          "D) 0.60"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. q² = 0.16 => q = 0.4. Since p + q = 1, p = 0.6. Heterozygous frequency 2pq = 2 × 0.6 × 0.4 = 0.48 (48%).",
        "stepMarking": [
          {
            "step": "q = 0.4, p = 0.6 -> 2pq = 0.48",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always verify p² + 2pq + q² = 0.36 + 0.48 + 0.16 = 1.00!",
        "commonPitfall": "Forgetting the factor of 2 in 2pq."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Human Health & Disease: Innate vs Active/Passive Immunity",
        "questionText": "Colostrum secreted by the mother during initial days of lactation provides abundant IgA antibodies to the newborn. This is an example of:",
        "options": [
          "A) Natural active immunity",
          "B) Natural passive immunity",
          "C) Artificial active immunity",
          "D) Cell-mediated immunity"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Pre-formed IgA antibodies are transferred naturally from mother to infant (no host antigen exposure/memory), making it natural passive immunity.",
        "stepMarking": [
          {
            "step": "Pre-formed IgA transferred naturally -> Natural passive immunity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Anti-venom / Tetanus antitoxin = Artificial passive; Vaccination = Artificial active; Colostrum / Placental IgG = Natural passive.",
        "commonPitfall": "Marking active immunity."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Microbes in Human Welfare: BOD & Sewage Treatment",
        "questionText": "During secondary sewage treatment, \"flocs\" consist of:",
        "options": [
          "A) Anaerobic methanogens only",
          "B) Masses of aerobic bacteria associated with fungal filaments forming mesh-like structures",
          "C) Heavy grit and floating plastic debris",
          "D) Pure nitrogen-fixing Rhizobium"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Vigorous aeration in aeration tanks promotes growth of useful aerobic microbes into flocs (bacteria + fungal filaments) that consume organic matter and sharply lower BOD.",
        "stepMarking": [
          {
            "step": "Aerobic bacteria + fungal filaments lowering BOD",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Higher BOD means MORE polluting potential of sewage water!",
        "commonPitfall": "Confusing aerobic flocs with anaerobic sludge digester methanogens."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Reproduction: Human Menstrual Cycle LH Surge",
        "questionText": "Assertion (A): Rapid secretion of LH leading to its maximum level during the mid-cycle (day 14) induces rupture of Graafian follicle and ovulation.\nReason (R): High LH surge triggers degeneration of corpus luteum before fertilisation.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Mid-cycle LH surge causes ovulation, after which the empty Graafian follicle transforms INTO the corpus luteum (it does not degenerate until day ~26–28 if fertilisation fails).",
        "stepMarking": [
          {
            "step": "Option (C): A true, R false",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "LH surge -> Ovulation -> Remainder becomes Corpus Luteum secreting Progesterone.",
        "commonPitfall": "Missing the false claim about corpus luteum degeneration at mid-cycle."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Molecular Inheritance: DNA Replication Polarity",
        "questionText": "Assertion (A): During DNA replication, synthesis on one template strand is continuous while on the other it is discontinuous (Okazaki fragments).\nReason (R): DNA-dependent DNA polymerase can polymerise nucleotides ONLY in the 5' → 3' direction.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Because DNA polymerase only extends 3'-OH (synthesising 5'→3'), the 3'→5' template is copied continuously while the 5'→3' template must be copied discontinuously away from the replication fork.",
        "stepMarking": [
          {
            "step": "Option (A) citing strict 5'→3' polymerase polarity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw the replication fork arrows in 2M/3M questions clearly.",
        "commonPitfall": "Saying Okazaki fragments grow 3'→5'."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Biotechnology: Gel Electrophoresis DNA Separation",
        "questionText": "Assertion (A): During agarose gel electrophoresis, DNA fragments move towards the positive anode under an electric field.\nReason (R): DNA molecules are negatively charged due to phosphate groups in their sugar-phosphate backbone.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Negatively charged DNA migrates toward the positive anode through agarose pores, with smaller fragments travelling farther.",
        "stepMarking": [
          {
            "step": "Option (A) citing negative phosphate backbone charge",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Stained with Ethidium Bromide and viewed under UV light as bright orange bands!",
        "commonPitfall": "Thinking larger fragments travel faster."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Biodiversity: Amazon Rainforests & In-situ Conservation",
        "questionText": "Assertion (A): Biodiversity hotspots are examples of ex-situ conservation.\nReason (R): Hotspots exhibit very high levels of species richness and high degree of endemism under urgent threat of habitat loss.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Biodiversity hotspots (like Western Ghats & Sri Lanka, Indo-Burma, Himalaya) are prime examples of IN-SITU (on-site) conservation, not ex-situ. Thus A is false, R is true.",
        "stepMarking": [
          {
            "step": "Option (D): Hotspots are in-situ conservation, so A false, R true",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In-situ: Hotspots, Biosphere reserves, National parks, Sacred groves; Ex-situ: Seed banks, Botanical gardens, Cryopreservation.",
        "commonPitfall": "Assuming hotspots are ex-situ."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Inheritance: Haemophilia & Colour Blindness X-Linked Criss-Cross",
        "questionText": "A colour-blind man marries a woman with normal vision whose father was colour-blind. Work out a Punnett square to show the probability of their sons and daughters being colour-blind.",
        "modelAnswer": "Man = X^c Y; Woman = carrier X^C X^c (inherited X^c from colour-blind father).\nGametes: Man (X^c, Y) × Woman (X^C, X^c).\nOffspring genotypes:\n• X^C X^c (Carrier daughter) — 25%\n• X^c X^c (Colour-blind daughter) — 25% (50% of daughters)\n• X^C Y (Normal son) — 25%\n• X^c Y (Colour-blind son) — 25% (50% of sons).\n50% of sons and 50% of daughters will be colour-blind.",
        "stepMarking": [
          {
            "step": "Parental genotypes X^c Y and carrier X^C X^c",
            "marks": "1 Mark"
          },
          {
            "step": "Punnett cross showing 50% sons & 50% daughters affected",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember a daughter is affected ONLY when father is affected AND mother is at least a carrier!",
        "commonPitfall": "Assuming the woman is homozygous normal X^C X^C despite her colour-blind father."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Human Health: Innate Immunity Barriers & Interferons",
        "questionText": "What are interferons, and under which category of innate immunity barriers are they classified?",
        "modelAnswer": "Interferons are protective antiviral proteins secreted by virus-infected cells that protect neighbouring non-infected cells from further viral infection.\nThey belong to the Cytokine barriers of Innate Immunity.",
        "stepMarking": [
          {
            "step": "Antiviral proteins from virus-infected cells",
            "marks": "1 Mark"
          },
          {
            "step": "Cytokine barrier of Innate Immunity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Know all 4 NCERT Innate Barriers: Physical (skin/mucus), Physiological (HCl/tears), Cellular (PMNL/NK cells), Cytokine (Interferons).",
        "commonPitfall": "Classifying interferons under Cellular barriers."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Microbes: Statins, Cyclosporin A & Streptokinase",
        "questionText": "Name the bioactive molecule and its source microbe used as:\n(i) Immunosuppressive agent in organ-transplant patients\n(ii) Blood-cholesterol lowering agent.",
        "modelAnswer": "(i) Cyclosporin A — produced by the fungus Trichoderma polysporum.\n(ii) Statins — produced by the yeast Monascus purpureus (competitively inhibits enzyme responsible for cholesterol synthesis).",
        "stepMarking": [
          {
            "step": "Cyclosporin A from Trichoderma polysporum",
            "marks": "1 Mark"
          },
          {
            "step": "Statins from Monascus purpureus",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Also remember Streptokinase (\"clot buster\") from bacterium Streptococcus.",
        "commonPitfall": "Swapping Trichoderma polysporum and Monascus purpureus."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Biodiversity: Causes of Biodiversity Losses (\"The Evil Quartet\")",
        "questionText": "List the four major causes of accelerated species extinction collectively termed \"The Evil Quartet\", explaining any one with an example.",
        "modelAnswer": "The Evil Quartet:\n1. Habitat loss and fragmentation (most important — e.g., Amazon rainforest cleared for soy/cattle).\n2. Over-exploitation (e.g., Steller's sea cow, Passenger pigeon).\n3. Alien species invasions (e.g., Nile perch introduced into Lake Victoria killed 200+ native cichlid fish; Eichhornia/Lantana).\n4. Co-extinctions (obligatory host-parasite or plant-pollinator mutualism extinction).",
        "stepMarking": [
          {
            "step": "List all 4 Evil Quartet causes accurately",
            "marks": "1 Mark"
          },
          {
            "step": "Clear example explaining one cause",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight Habitat Loss & Fragmentation as the single biggest driver.",
        "commonPitfall": "Listing climate pollution without the exact 4 NCERT Evil Quartet terms."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Flowering Plants: Apomixis & Polyembryony in Citrus/Mango",
        "questionText": "Define Apomixis and Polyembryony. Why does the hybrid seed industry strongly desire transferring apomictic genes into hybrid crops?",
        "modelAnswer": "Apomixis: Production of seeds without fertilisation (asexual reproduction mimicking sexual reproduction, e.g., Asteraceae and grasses).\nPolyembryony: Occurrence of more than one embryo in a single seed (e.g., Citrus, Mango nucellar cells).\nHybrid Advantage: Hybrid seeds lose vigour in F₂ due to segregation and cost farmers heavily every year; if made apomictic, there is no segregation of hybrid traits so farmers can replant saved seeds year after year.",
        "stepMarking": [
          {
            "step": "Definitions of Apomixis & Polyembryony",
            "marks": "1 Mark"
          },
          {
            "step": "Preventing hybrid trait segregation for farmers",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight \"no segregation of characters in hybrid progeny\".",
        "commonPitfall": "Confusing apomixis (seed without fertilisation) with parthenocarpy (fruit without fertilisation -> seedless)."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Human Health: Life Cycle of Plasmodium & AIDS Retrovirus Replication",
        "questionText": "Trace the key stages of HIV replication inside a human macrophage and explain why HIV-infected patients suffer severe opportunistic infections.",
        "modelAnswer": "1. HIV enters host Macrophage (acts as \"HIV factory\").\n2. Viral RNA genome is reverse-transcribed into viral DNA by enzyme Reverse Transcriptase.\n3. Viral DNA incorporates into host cell genome and directs synthesis of new viral RNA and particles.\n4. Progeny HIV simultaneously enters Helper T-lymphocytes (T_H cells), replicates and destroys them, causing a progressive drop in T_H count. Lacking cell-mediated immunity, patients succumb to opportunistic infections (Mycobacterium, viruses, Toxoplasma).",
        "stepMarking": [
          {
            "step": "Macrophage entry + Reverse Transcriptase (RNA -> DNA)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Host integration + Helper T-cell depletion -> immunodeficiency",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always specify BOTH cell types: Macrophage (\"HIV factory\") and Helper T-lymphocytes (T_H drop)!",
        "commonPitfall": "Saying HIV destroys B-cells directly instead of Helper T-cells."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Biotechnology Principles: PCR Three Steps & Applications",
        "questionText": "Describe the three sequential thermal steps of one Polymerase Chain Reaction (PCR) cycle with temperatures and the special DNA polymerase used.",
        "modelAnswer": "Enzyme used: Thermostable DNA polymerase (Taq polymerase) isolated from Thermus aquaticus (remains active at 94°C).\n1. Denaturation (~94°C): Double-stranded target DNA separates into two single strands.\n2. Annealing (~50–60°C): Two short oligonucleotide primers hydrogen-bond to complementary 3' ends of target strands.\n3. Extension (~72°C): Taq polymerase adds dNTPs onto primers in 5'→3' direction, doubling DNA copies per cycle (~1 billion copies in 30 cycles).",
        "stepMarking": [
          {
            "step": "Denaturation, Annealing, Extension in order",
            "marks": "2 Marks"
          },
          {
            "step": "Taq polymerase from Thermus aquaticus & role",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Show both primers and 5'→3' extension direction clearly.",
        "commonPitfall": "Putting Annealing before Denaturation."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Biotechnology Applications: Genetically Engineered Human Insulin (Eli Lilly)",
        "questionText": "Why is insulin extracted from slaughtered cattle/pigs less preferred today? Explain how Eli Lilly engineered recombinant human insulin (Humulin) in 1983 using E. coli.",
        "modelAnswer": "Animal insulin triggered allergic immune reactions in some diabetic patients.\nPro-insulin in humans has three chains (A, B, and extra C-peptide) which is removed during maturation into active A–B linked by disulphide bridges.\nEli Lilly prepared two separate DNA sequences corresponding to Chain A and Chain B of human insulin, inserted them separately into plasmids of E. coli to produce separate A and B chains, extracted them, and combined them by forming disulphide bonds to assemble functional human insulin.",
        "stepMarking": [
          {
            "step": "Allergy drawback + pro-insulin C-peptide removal challenge",
            "marks": "1.5 Marks"
          },
          {
            "step": "Separate A & B synthesis in E. coli + disulphide linkage",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Key detail: Chain A and Chain B were synthesised SEPARATELY and then joined via disulphide bonds!",
        "commonPitfall": "Saying E. coli processed pro-insulin directly (prokaryotes lack splicing/processing machinery!)."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Organisms & Populations: Population Interactions (Mutualism & Brood Parasitism)",
        "questionText": "Differentiate between Mutualism, Commensalism, and Brood Parasitism, giving one specific NCERT example of each.",
        "modelAnswer": "1. Mutualism (+, +): Both species benefit. Example: Lichens (algae + fungus), Mycorrhizae, or Fig tree and Wasp pollinator (or Orchid Ophrys sexual deceit).\n2. Commensalism (+, 0): One benefits while host is neither harmed nor benefited. Example: Orchid growing as epiphyte on mango branch, Barnacles on whale back, Cattle egret and grazing cattle.\n3. Brood Parasitism: Parasitic bird lays eggs in host nest letting host incubate them (eggs evolve to mimic host egg colour/size). Example: Cuckoo (Koel) laying eggs in Crow's nest.",
        "stepMarking": [
          {
            "step": "Three definitions with (+/+), (+/0), (+/-) signs",
            "marks": "1.5 Marks"
          },
          {
            "step": "One exact NCERT example for each",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Give (+, +), (+, 0), (+, -) symbols cleanly in table or bullets.",
        "commonPitfall": "Confusing Amensalism (-, 0) with Commensalism (+, 0)."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Ecosystem: Decomposition Steps in Detritus",
        "questionText": "Explain the five sequential steps involved in the process of decomposition of detritus in a terrestrial ecosystem.",
        "modelAnswer": "1. Fragmentation: Detritivores (earthworms) break detritus into smaller particles.\n2. Leaching: Water-soluble inorganic nutrients percolate into soil horizon and precipitate as unavailable salts.\n3. Catabolism: Bacterial and fungal enzymes degrade detritus into simpler inorganic substances.\n4. Humification: Accumulation of dark amorphous colloidal substance called humus (highly resistant to microbial action, decomposes very slowly, nutrient reservoir).\n5. Mineralisation: Further degradation of humus by microbes releasing inorganic nutrients back into soil.",
        "stepMarking": [
          {
            "step": "Fragmentation, Leaching, Catabolism",
            "marks": "1.5 Marks"
          },
          {
            "step": "Humification & Mineralisation explained",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Remember that Fragmentation, Leaching, and Catabolism occur SIMULTANEOUSLY on detritus.",
        "commonPitfall": "Putting Mineralisation before Humification."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Molecular Inheritance: Hershey-Chase Experiment (DNA as Genetic Material)",
        "questionText": "Why did Alfred Hershey and Martha Chase use radioactive isotopes ³²P and ³⁵S separately in bacteriophage infection experiments? State their final observation and conclusion.",
        "modelAnswer": "• Rationale: DNA contains Phosphorus (³²P) but NO Sulphur, whereas Protein coat contains Sulphur (³⁵S, in methionine/cysteine) but NO Phosphorus.\n• Procedure (3 steps): Infection of E. coli -> Blending (to agitate viral coats off bacteria) -> Centrifugation (heavier bacteria settle in pellet; lighter viral coats stay in supernatant).\n• Observation & Conclusion: Bacteria infected with ³²P phages were radioactive in the PELLET, whereas ³⁵S radioactivity remained only in the SUPERNATANT. Proved conclusively that DNA (not protein) is the genetic material transferred from virus to bacteria.",
        "stepMarking": [
          {
            "step": "³²P labels DNA only; ³⁵S labels Protein only",
            "marks": "1 Mark"
          },
          {
            "step": "Infection, Blending, Centrifugation steps",
            "marks": "1 Mark"
          },
          {
            "step": "³²P in pellet -> DNA is genetic material",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention exact words: Blending and Centrifugation, Pellet vs Supernatant!",
        "commonPitfall": "Saying ³⁵S entered the bacterial pellet."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Evolution: Darwinian Natural Selection vs Industrial Melanism & Analogous Organs",
        "questionText": "Differentiate between Homologous and Analogous organs with one plant and one animal example of each, naming the type of evolution they signify.",
        "modelAnswer": "1. Homologous Organs: Similar fundamental anatomical structure & origin, adapted for different functions (Divergent Evolution). Examples: Forelimbs of Whale, Bat, Cheetah, Human; Thorns of Bougainvillea and Tendrils of Cucurbita.\n2. Analogous Organs: Different anatomical structure & origin, evolved for similar functions (Convergent Evolution). Examples: Wings of butterfly and bird (or Eye of octopus & mammals; Flippers of penguins & dolphins); Sweet potato (root modification) and Potato (stem modification).",
        "stepMarking": [
          {
            "step": "Homologous = same origin, divergent evolution + 2 examples",
            "marks": "1.5 Marks"
          },
          {
            "step": "Analogous = different origin, convergent evolution + 2 examples",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always memorize ONE plant example and ONE animal example for both!",
        "commonPitfall": "Swapping divergent (homologous) and convergent (analogous)."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: pBR322 Cloning Vector & Insertional Inactivation",
        "questionText": "Read the passage and answer:\nPlasmids like pBR322 contain an origin of replication (ori), selectable markers (amp^R and tet^R), and unique cloning sites such as BamHI inside tet^R. Alternatively, chromogenic substrates (X-gal) allow blue-white screening using β-galactosidase.\n\n(a) What is the function of the \"ori\" site in a cloning vector? (1M)\n(b) If foreign DNA is ligated at the BamHI site of pBR322, how will you distinguish recombinant colonies from non-recombinant transformants? (2M)\n(c) Why is blue-white colour selection preferred over antibiotic double-plating? (1M)",
        "modelAnswer": "(a) ori is the sequence from where replication starts, and also controls the copy number of the linked foreign DNA.\n(b) Inserting DNA at BamHI inactivates the tet^R gene (insertional inactivation), while amp^R remains intact. Transformants first grow on ampicillin medium; transferring replicas onto tetracycline kills recombinants while non-recombinants grow on BOTH antibiotics.\n(c) Double antibiotic plating is cumbersome (requires simultaneous plating on two media plates); chromogenic blue-white screening separates white recombinants from blue non-recombinants on a single plate.",
        "stepMarking": [
          {
            "step": "(a) Starts replication & controls copy number",
            "marks": "1 Mark"
          },
          {
            "step": "(b) tet^R inactivated -> grows on Amp, dies on Tet",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Single-plate convenience vs cumbersome double plating",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice: Recombinants produce WHITE colonies (gene inactivated -> no enzyme) while non-recombinants turn BLUE!",
        "commonPitfall": "Thinking recombinant colonies turn blue in β-galactosidase screening."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Pedigree Analysis & Genetic Disorders",
        "questionText": "Read the case and answer:\nIn a family pedigree chart, unaffected carrier parents give birth to an affected child (both boys and girls can be affected equally), whereas an affected individual rarely transmits the trait directly to the next generation if marrying an unaffected homozygous partner.\n\n(a) Identify the mode of inheritance (Autosomal/Sex-linked; Dominant/Recessive) and give one classic human example. (2M)\n(b) State the defect in Sickle-Cell Anaemia at the DNA/protein codon level. (1.5M)\n(c) Why is Sickle-Cell Anaemia still maintained at noticeable frequency in malaria-endemic regions? (0.5M)",
        "modelAnswer": "(a) Autosomal Recessive inheritance (skips generations, affects males & females equally). Example: Sickle-cell anaemia or Phenylketonuria / Thalassemia.\n(b) Point mutation in β-globin gene on chromosome 11: GAG mutates to GUG in mRNA, substituting Glutamic acid (Glu) with Valine (Val) at the 6th position of β-globin chain.\n(c) Heterozygous carriers (Hb^A Hb^S) enjoy selective advantage against severe Plasmodium falciparum malaria.",
        "stepMarking": [
          {
            "step": "(a) Autosomal recessive + example",
            "marks": "2 Marks"
          },
          {
            "step": "(b) GAG -> GUG / 6th position Glu -> Val",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Heterozygote malaria resistance",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Pedigree shortcut: Normal parents having affected child => ALWAYS Recessive!",
        "commonPitfall": "Calling unaffected parents having affected child \"Dominant\"."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Molecular Basis of Inheritance: Transcription & Genetic Code Properties",
        "questionText": "(a) Draw a schematic labelled diagram of a Transcription Unit and explain why BOTH DNA strands are not copied during transcription.\n(b) State four salient features of the Genetic Code.",
        "modelAnswer": "(a) Transcription unit components: Promoter (at 5' end of coding strand), Structural gene, Terminator (at 3' end of coding strand). Template strand runs 3'→5' while Coding strand runs 5'→3' (matching mRNA sequence except T→U).\nWhy not both strands: (1) Two complementary mRNAs would encode two completely different proteins, complicating genetic transfer; (2) Two complementary RNAs would pair to form double-stranded RNA (dsRNA), blocking translation into protein.\n(b) Genetic Code features: (1) Triplet (61 sense codons + 3 stop codons UAA, UAG, UGA); (2) Unambiguous/Specific (1 codon = 1 amino acid); (3) Degenerate (multiple codons for most amino acids); (4) Universal across bacteria to humans & Commaless; (5) AUG is dual initiator (codes Methionine + start codon).",
        "stepMarking": [
          {
            "step": "(a) Promoter/Structural/Terminator polarity + 2 reasons against dual-strand copying",
            "marks": "3 Marks"
          },
          {
            "step": "(b) 4 clear features of Genetic Code",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Promoter position is ALWAYS referenced w.r.t. the 5' end of the CODING strand!",
        "commonPitfall": "Writing that Template strand sequence matches mRNA (it is complementary; CODING strand matches mRNA!)."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Biotechnology Applications: Gene Therapy (ADA Deficiency) & Transgenic Animals",
        "questionText": "(a) Explain how ADA (Adenosine Deaminase) deficiency was treated in a 4-year-old girl in 1990 using gene therapy. Why is periodic infusion of engineered lymphocytes required, and how can a permanent cure be achieved?\n(b) State four ways transgenic animals are beneficial to human medicine and research.",
        "modelAnswer": "(a) Lymphocytes from patient's blood were cultured outside; a functional ADA cDNA was introduced into them using a retroviral vector, and engineered lymphocytes were returned to the patient. Because lymphocytes are NOT immortal, patients require periodic infusions. A permanent cure requires isolating the gene from marrow cells and introducing it at early EMBRYONIC stages.\n(b) Transgenic animal benefits: (1) Studying normal physiology & gene regulation (e.g., insulin-like growth factor); (2) Disease models (cancer, cystic fibrosis, Alzheimer's); (3) Biological products (α-1-antitrypsin for emphysema; Rosie cow producing 2.4 g/L human α-lactalbumin enriched milk); (4) Vaccine safety & chemical toxicity testing.",
        "stepMarking": [
          {
            "step": "(a) Retroviral ADA cDNA in lymphocytes + embryonic permanent cure",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Four transgenic uses with Rosie / α-1-antitrypsin examples",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Cite exact year 1990, Rosie transgenic cow (1997, 2.4 g/L α-lactalbumin), and α-1-antitrypsin.",
        "commonPitfall": "Saying lymphocyte infusion gives permanent cure."
      },
      {
        "id": "model-c12-bio-2024-cfpq-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Human Reproduction: Oogenesis vs Spermatogenesis & Hormonal Menstrual Cycle",
        "questionText": "(a) Trace the sequence of stages of Oogenesis in human females, noting when Meiosis I and Meiosis II complete.\n(b) Explain the hormonal changes (LH, FSH, Oestrogen, Progesterone) across the Follicular, Ovulatory, and Luteal phases of a 28-day menstrual cycle.",
        "modelAnswer": "(a) Oogonia (2n, formed before birth!) enter Prophase I and arrest as Primary oocytes (2n). At puberty, primary follicles mature into tertiary follicles; Primary oocyte completes Meiosis I inside tertiary follicle forming large Secondary oocyte (n) and tiny First polar body (n). Meiosis II arrests at Metaphase II and completes ONLY upon sperm entry during fertilisation, forming Ovum (n) and Second polar body.\n(b) • Follicular phase (days 5–13): FSH & LH rise gradually, stimulating follicular growth and Oestrogen secretion to regenerate endometrium.\n• Ovulatory phase (day 14): Peak Oestrogen triggers sharp LH surge, rupturing Graafian follicle to release secondary oocyte.\n• Luteal phase (days 15–28): Corpus luteum secretes high Progesterone to maintain thick secretory endometrium for implantation. Without fertilisation, corpus luteum regresses into corpus albicans, Progesterone falls, causing menstruation.",
        "stepMarking": [
          {
            "step": "(a) Foetal Prophase I arrest -> Meiosis I -> Metaphase II fertilisation arrest",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) FSH/LH/Oestrogen/Progesterone roles across all 3 phases",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Highlight BOTH meiotic arrest points in Oogenesis (Prophase I before birth; Metaphase II before fertilisation)!",
        "commonPitfall": "Stating Meiosis II completes inside ovary before ovulation."
      }
    ]
  },
  {
    "id": "model-c12-bio-2023-dav",
    "title": "DAV Schools National Class 12 Biology Pre-Board (2023)",
    "subject": "Biology",
    "targetClass": "Class 12",
    "year": 2023,
    "paperType": "PRE_BOARD",
    "paperCode": "DAV/C12/BIO-03",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "All 33 questions are compulsory across 5 sections: Section A to Section E (Total 70 Marks).",
      "Section A: 16 questions (12 MCQs + 4 Assertion-Reason) of 1 mark each.",
      "Section B: 5 questions of 2 marks each.",
      "Section C: 7 questions of 3 marks each.",
      "Section D: 2 case-based questions of 4 marks each.",
      "Section E: 3 long answer questions of 5 marks each."
    ],
    "questions": [
      {
        "id": "model-c12-bio-2023-dav-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Organisms & Populations: Verhulst-Pearl Logistic Growth",
        "questionText": "In the Verhulst-Pearl Logistic Growth equation dN/dt = rN [(K - N)/K], when N equals K (carrying capacity), the population growth rate dN/dt becomes:",
        "options": [
          "A) Maximum",
          "B) Equal to rN",
          "C) Zero (asymptote phase)",
          "D) Exponential"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. When N = K, (K - N)/K = 0, so dN/dt = 0 and population size stabilises at carrying capacity K (sigmoid S-shaped curve).",
        "stepMarking": [
          {
            "step": "N = K => (K - N)/K = 0 => dN/dt = 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sigmoid curve shows Lag -> Log/Acceleration -> Deceleration -> Asymptote.",
        "commonPitfall": "Thinking dN/dt is maximum when N = K (max growth rate actually occurs at N = K/2!)."
      },
      {
        "id": "model-c12-bio-2023-dav-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Ecosystem & Biodiversity: Rivet Popper Hypothesis & Ecological Pyramids",
        "questionText": "Which ecological pyramid can NEVER be inverted in any natural ecosystem?",
        "options": [
          "A) Pyramid of biomass in sea",
          "B) Pyramid of number on a big tree",
          "C) Pyramid of energy",
          "D) Pyramid of biomass in grassland"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Pyramid of energy is ALWAYS upright because energy always flows unidirectionally from lower to higher trophic levels, with ~90% lost as heat at every step (10% law).",
        "stepMarking": [
          {
            "step": "Pyramid of energy always upright due to thermodynamic heat loss",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Biomass pyramid in sea (phytoplankton < zooplankton/fishes) IS inverted!",
        "commonPitfall": "Saying pyramid of biomass is always upright."
      },
      {
        "id": "model-c12-bio-2023-dav-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Sexual Reproduction in Flowering Plants: Pollen Viability & Tapetum",
        "questionText": "In an anther, the innermost wall layer that nourishes the developing pollen grains and typically possesses dense cytoplasm and multiple nuclei is:",
        "options": [
          "A) Epidermis",
          "B) Endothecium",
          "C) Middle layers",
          "D) Tapetum"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Tapetum is the innermost nourishing layer whose cells are often multinucleate and rich in cytoplasm; endothecium aids dehiscence.",
        "stepMarking": [
          {
            "step": "Identify Tapetum as nutritive innermost anther layer",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Pollen exine is made of sporopollenin (most resistant organic material known!).",
        "commonPitfall": "Confusing Tapetum with Endothecium (dehiscence)."
      },
      {
        "id": "model-c12-bio-2023-dav-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Human Reproduction: Hormonal Control of Spermatogenesis",
        "questionText": "Which hormone acts directly on Sertoli cells inside seminiferous tubules to stimulate secretion of factors that help in spermiogenesis?",
        "options": [
          "A) LH (Luteinising Hormone)",
          "B) FSH (Follicle Stimulating Hormone)",
          "C) Oxytocin",
          "D) Progesterone"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. LH acts on Leydig (interstitial) cells to secrete androgens, whereas FSH acts on Sertoli cells to assist spermiogenesis.",
        "stepMarking": [
          {
            "step": "FSH -> Sertoli cells; LH -> Leydig cells",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mnemonic: \"L\"H -> \"L\"eydig cells; \"F\"SH -> \"S\"ertoli cells.",
        "commonPitfall": "Swapping LH and FSH targets."
      },
      {
        "id": "model-c12-bio-2023-dav-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Reproductive Health: Copper IUDs Mechanism",
        "questionText": "Cu ions released by intra-uterine devices like CuT and Multiload 375 prevent pregnancy primarily by:",
        "options": [
          "A) Preventing ovulation directly",
          "B) Suppressing sperm motility and their fertilising capacity",
          "C) Blocking fallopian tubes surgically",
          "D) Inducing menstruation immediately"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Copper-releasing IUDs increase phagocytosis of sperms within the uterus and Cu²⁺ ions suppress sperm motility and fertilising ability.",
        "stepMarking": [
          {
            "step": "Suppress sperm motility & fertilising capacity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Hormone-releasing IUDs (LNG-20, Progestasert) additionally make the uterus unsuitable for implantation and cervix hostile to sperms.",
        "commonPitfall": "Writing that CuT prevents ovulation."
      },
      {
        "id": "model-c12-bio-2023-dav-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Principles of Inheritance: Pleiotropy & Multiple Alleles",
        "questionText": "ABO blood grouping in humans is a classic example of:",
        "options": [
          "A) Incomplete dominance only",
          "B) Multiple allelism and Co-dominance",
          "C) Polygenic inheritance",
          "D) Epistasis"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Three alleles (I^A, I^B, i) control blood group in a population (multiple allelism), and I^A I^B expresses both A and B sugars equally (co-dominance).",
        "stepMarking": [
          {
            "step": "Multiple allelism (3 alleles) + Co-dominance (I^A I^B)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "3 alleles produce 6 genotypes and 4 phenotypes in human ABO blood groups.",
        "commonPitfall": "Confusing co-dominance with incomplete dominance (Snapdragon flower)."
      },
      {
        "id": "model-c12-bio-2023-dav-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Molecular Basis of Inheritance: Lac Operon Regulation",
        "questionText": "In the lac operon of E. coli, which structural gene codes for the enzyme β-galactosidase that hydrolyses lactose into glucose and galactose?",
        "options": [
          "A) lac i",
          "B) lac z",
          "C) lac y",
          "D) lac a"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. z gene codes for β-galactosidase, y gene codes for permease, a gene codes for transacetylase, and i gene codes for the repressor.",
        "stepMarking": [
          {
            "step": "Identify lac z -> β-galactosidase",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice \"i\" in lac i stands for \"inhibitor\" (repressor), NOT \"inducer\"!",
        "commonPitfall": "Thinking lac y codes for β-galactosidase."
      },
      {
        "id": "model-c12-bio-2023-dav-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Evolution: Hardy-Weinberg Equilibrium Equation",
        "questionText": "In a population in Hardy-Weinberg equilibrium, the frequency of homozygous recessive genotype (aa) is 0.16. What is the frequency of heterozygous carriers (Aa)?",
        "options": [
          "A) 0.36",
          "B) 0.48",
          "C) 0.24",
          "D) 0.60"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. q² = 0.16 => q = 0.4. Since p + q = 1, p = 0.6. Heterozygous frequency 2pq = 2 × 0.6 × 0.4 = 0.48 (48%).",
        "stepMarking": [
          {
            "step": "q = 0.4, p = 0.6 -> 2pq = 0.48",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always verify p² + 2pq + q² = 0.36 + 0.48 + 0.16 = 1.00!",
        "commonPitfall": "Forgetting the factor of 2 in 2pq."
      },
      {
        "id": "model-c12-bio-2023-dav-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Human Health & Disease: Innate vs Active/Passive Immunity",
        "questionText": "Colostrum secreted by the mother during initial days of lactation provides abundant IgA antibodies to the newborn. This is an example of:",
        "options": [
          "A) Natural active immunity",
          "B) Natural passive immunity",
          "C) Artificial active immunity",
          "D) Cell-mediated immunity"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Pre-formed IgA antibodies are transferred naturally from mother to infant (no host antigen exposure/memory), making it natural passive immunity.",
        "stepMarking": [
          {
            "step": "Pre-formed IgA transferred naturally -> Natural passive immunity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Anti-venom / Tetanus antitoxin = Artificial passive; Vaccination = Artificial active; Colostrum / Placental IgG = Natural passive.",
        "commonPitfall": "Marking active immunity."
      },
      {
        "id": "model-c12-bio-2023-dav-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Microbes in Human Welfare: BOD & Sewage Treatment",
        "questionText": "During secondary sewage treatment, \"flocs\" consist of:",
        "options": [
          "A) Anaerobic methanogens only",
          "B) Masses of aerobic bacteria associated with fungal filaments forming mesh-like structures",
          "C) Heavy grit and floating plastic debris",
          "D) Pure nitrogen-fixing Rhizobium"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Vigorous aeration in aeration tanks promotes growth of useful aerobic microbes into flocs (bacteria + fungal filaments) that consume organic matter and sharply lower BOD.",
        "stepMarking": [
          {
            "step": "Aerobic bacteria + fungal filaments lowering BOD",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Higher BOD means MORE polluting potential of sewage water!",
        "commonPitfall": "Confusing aerobic flocs with anaerobic sludge digester methanogens."
      },
      {
        "id": "model-c12-bio-2023-dav-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Biotechnology Principles: Restriction Enzymes & Selectable Markers",
        "questionText": "Which enzyme is used to join sticky ends of vector DNA and foreign DNA fragments by forming phosphodiester bonds?",
        "options": [
          "A) EcoRI",
          "B) Taq polymerase",
          "C) DNA ligase",
          "D) Exonuclease"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. DNA ligase (molecular glue) seals sugar-phosphate backbones via phosphodiester bonds to form recombinant DNA.",
        "stepMarking": [
          {
            "step": "Identify DNA ligase",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "EcoRI = molecular scissors (cuts between G and A in 5'-GAATTC-3'); Taq polymerase = heat-stable PCR DNA synthesis; DNA ligase = molecular glue.",
        "commonPitfall": "Selecting Taq polymerase."
      },
      {
        "id": "model-c12-bio-2023-dav-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Biotechnology Applications: Bt Cotton & RNA Interference",
        "questionText": "Why does the Bt toxin protein crystal produced by Bacillus thuringiensis NOT kill the bacterium itself?",
        "options": [
          "A) Bacterium has a thick chitin wall",
          "B) Toxin exists as an inactive protoxin and activates only in the alkaline pH of the insect midgut",
          "C) Toxin only kills plant cells",
          "D) Acidic bacterial cytoplasm destroys it"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Inside Bacillus, Bt toxin exists as inactive protoxin; once ingested by an insect, the alkaline pH of the midgut solubilises the crystals and converts protoxin into active toxin that creates pores in midgut epithelial cells.",
        "stepMarking": [
          {
            "step": "Inactive protoxin activated by alkaline insect gut pH",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Specify \"alkaline pH of gut\" + \"pores in midgut epithelial cells causing swelling and lysis\".",
        "commonPitfall": "Writing \"acidic\" gut pH instead of \"alkaline\"!"
      },
      {
        "id": "model-c12-bio-2023-dav-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Molecular Inheritance: DNA Replication Polarity",
        "questionText": "Assertion (A): During DNA replication, synthesis on one template strand is continuous while on the other it is discontinuous (Okazaki fragments).\nReason (R): DNA-dependent DNA polymerase can polymerise nucleotides ONLY in the 5' → 3' direction.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Because DNA polymerase only extends 3'-OH (synthesising 5'→3'), the 3'→5' template is copied continuously while the 5'→3' template must be copied discontinuously away from the replication fork.",
        "stepMarking": [
          {
            "step": "Option (A) citing strict 5'→3' polymerase polarity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw the replication fork arrows in 2M/3M questions clearly.",
        "commonPitfall": "Saying Okazaki fragments grow 3'→5'."
      },
      {
        "id": "model-c12-bio-2023-dav-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Biotechnology: Gel Electrophoresis DNA Separation",
        "questionText": "Assertion (A): During agarose gel electrophoresis, DNA fragments move towards the positive anode under an electric field.\nReason (R): DNA molecules are negatively charged due to phosphate groups in their sugar-phosphate backbone.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Negatively charged DNA migrates toward the positive anode through agarose pores, with smaller fragments travelling farther.",
        "stepMarking": [
          {
            "step": "Option (A) citing negative phosphate backbone charge",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Stained with Ethidium Bromide and viewed under UV light as bright orange bands!",
        "commonPitfall": "Thinking larger fragments travel faster."
      },
      {
        "id": "model-c12-bio-2023-dav-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Biodiversity: Amazon Rainforests & In-situ Conservation",
        "questionText": "Assertion (A): Biodiversity hotspots are examples of ex-situ conservation.\nReason (R): Hotspots exhibit very high levels of species richness and high degree of endemism under urgent threat of habitat loss.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Biodiversity hotspots (like Western Ghats & Sri Lanka, Indo-Burma, Himalaya) are prime examples of IN-SITU (on-site) conservation, not ex-situ. Thus A is false, R is true.",
        "stepMarking": [
          {
            "step": "Option (D): Hotspots are in-situ conservation, so A false, R true",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In-situ: Hotspots, Biosphere reserves, National parks, Sacred groves; Ex-situ: Seed banks, Botanical gardens, Cryopreservation.",
        "commonPitfall": "Assuming hotspots are ex-situ."
      },
      {
        "id": "model-c12-bio-2023-dav-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Reproduction: Human Menstrual Cycle LH Surge",
        "questionText": "Assertion (A): Rapid secretion of LH leading to its maximum level during the mid-cycle (day 14) induces rupture of Graafian follicle and ovulation.\nReason (R): High LH surge triggers degeneration of corpus luteum before fertilisation.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Mid-cycle LH surge causes ovulation, after which the empty Graafian follicle transforms INTO the corpus luteum (it does not degenerate until day ~26–28 if fertilisation fails).",
        "stepMarking": [
          {
            "step": "Option (C): A true, R false",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "LH surge -> Ovulation -> Remainder becomes Corpus Luteum secreting Progesterone.",
        "commonPitfall": "Missing the false claim about corpus luteum degeneration at mid-cycle."
      },
      {
        "id": "model-c12-bio-2023-dav-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Human Health: Innate Immunity Barriers & Interferons",
        "questionText": "What are interferons, and under which category of innate immunity barriers are they classified?",
        "modelAnswer": "Interferons are protective antiviral proteins secreted by virus-infected cells that protect neighbouring non-infected cells from further viral infection.\nThey belong to the Cytokine barriers of Innate Immunity.",
        "stepMarking": [
          {
            "step": "Antiviral proteins from virus-infected cells",
            "marks": "1 Mark"
          },
          {
            "step": "Cytokine barrier of Innate Immunity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Know all 4 NCERT Innate Barriers: Physical (skin/mucus), Physiological (HCl/tears), Cellular (PMNL/NK cells), Cytokine (Interferons).",
        "commonPitfall": "Classifying interferons under Cellular barriers."
      },
      {
        "id": "model-c12-bio-2023-dav-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Microbes: Statins, Cyclosporin A & Streptokinase",
        "questionText": "Name the bioactive molecule and its source microbe used as:\n(i) Immunosuppressive agent in organ-transplant patients\n(ii) Blood-cholesterol lowering agent.",
        "modelAnswer": "(i) Cyclosporin A — produced by the fungus Trichoderma polysporum.\n(ii) Statins — produced by the yeast Monascus purpureus (competitively inhibits enzyme responsible for cholesterol synthesis).",
        "stepMarking": [
          {
            "step": "Cyclosporin A from Trichoderma polysporum",
            "marks": "1 Mark"
          },
          {
            "step": "Statins from Monascus purpureus",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Also remember Streptokinase (\"clot buster\") from bacterium Streptococcus.",
        "commonPitfall": "Swapping Trichoderma polysporum and Monascus purpureus."
      },
      {
        "id": "model-c12-bio-2023-dav-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Biodiversity: Causes of Biodiversity Losses (\"The Evil Quartet\")",
        "questionText": "List the four major causes of accelerated species extinction collectively termed \"The Evil Quartet\", explaining any one with an example.",
        "modelAnswer": "The Evil Quartet:\n1. Habitat loss and fragmentation (most important — e.g., Amazon rainforest cleared for soy/cattle).\n2. Over-exploitation (e.g., Steller's sea cow, Passenger pigeon).\n3. Alien species invasions (e.g., Nile perch introduced into Lake Victoria killed 200+ native cichlid fish; Eichhornia/Lantana).\n4. Co-extinctions (obligatory host-parasite or plant-pollinator mutualism extinction).",
        "stepMarking": [
          {
            "step": "List all 4 Evil Quartet causes accurately",
            "marks": "1 Mark"
          },
          {
            "step": "Clear example explaining one cause",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight Habitat Loss & Fragmentation as the single biggest driver.",
        "commonPitfall": "Listing climate pollution without the exact 4 NCERT Evil Quartet terms."
      },
      {
        "id": "model-c12-bio-2023-dav-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Flowering Plants: Apomixis & Polyembryony in Citrus/Mango",
        "questionText": "Define Apomixis and Polyembryony. Why does the hybrid seed industry strongly desire transferring apomictic genes into hybrid crops?",
        "modelAnswer": "Apomixis: Production of seeds without fertilisation (asexual reproduction mimicking sexual reproduction, e.g., Asteraceae and grasses).\nPolyembryony: Occurrence of more than one embryo in a single seed (e.g., Citrus, Mango nucellar cells).\nHybrid Advantage: Hybrid seeds lose vigour in F₂ due to segregation and cost farmers heavily every year; if made apomictic, there is no segregation of hybrid traits so farmers can replant saved seeds year after year.",
        "stepMarking": [
          {
            "step": "Definitions of Apomixis & Polyembryony",
            "marks": "1 Mark"
          },
          {
            "step": "Preventing hybrid trait segregation for farmers",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight \"no segregation of characters in hybrid progeny\".",
        "commonPitfall": "Confusing apomixis (seed without fertilisation) with parthenocarpy (fruit without fertilisation -> seedless)."
      },
      {
        "id": "model-c12-bio-2023-dav-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Inheritance: Haemophilia & Colour Blindness X-Linked Criss-Cross",
        "questionText": "A colour-blind man marries a woman with normal vision whose father was colour-blind. Work out a Punnett square to show the probability of their sons and daughters being colour-blind.",
        "modelAnswer": "Man = X^c Y; Woman = carrier X^C X^c (inherited X^c from colour-blind father).\nGametes: Man (X^c, Y) × Woman (X^C, X^c).\nOffspring genotypes:\n• X^C X^c (Carrier daughter) — 25%\n• X^c X^c (Colour-blind daughter) — 25% (50% of daughters)\n• X^C Y (Normal son) — 25%\n• X^c Y (Colour-blind son) — 25% (50% of sons).\n50% of sons and 50% of daughters will be colour-blind.",
        "stepMarking": [
          {
            "step": "Parental genotypes X^c Y and carrier X^C X^c",
            "marks": "1 Mark"
          },
          {
            "step": "Punnett cross showing 50% sons & 50% daughters affected",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember a daughter is affected ONLY when father is affected AND mother is at least a carrier!",
        "commonPitfall": "Assuming the woman is homozygous normal X^C X^C despite her colour-blind father."
      },
      {
        "id": "model-c12-bio-2023-dav-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Biotechnology Principles: PCR Three Steps & Applications",
        "questionText": "Describe the three sequential thermal steps of one Polymerase Chain Reaction (PCR) cycle with temperatures and the special DNA polymerase used.",
        "modelAnswer": "Enzyme used: Thermostable DNA polymerase (Taq polymerase) isolated from Thermus aquaticus (remains active at 94°C).\n1. Denaturation (~94°C): Double-stranded target DNA separates into two single strands.\n2. Annealing (~50–60°C): Two short oligonucleotide primers hydrogen-bond to complementary 3' ends of target strands.\n3. Extension (~72°C): Taq polymerase adds dNTPs onto primers in 5'→3' direction, doubling DNA copies per cycle (~1 billion copies in 30 cycles).",
        "stepMarking": [
          {
            "step": "Denaturation, Annealing, Extension in order",
            "marks": "2 Marks"
          },
          {
            "step": "Taq polymerase from Thermus aquaticus & role",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Show both primers and 5'→3' extension direction clearly.",
        "commonPitfall": "Putting Annealing before Denaturation."
      },
      {
        "id": "model-c12-bio-2023-dav-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Biotechnology Applications: Genetically Engineered Human Insulin (Eli Lilly)",
        "questionText": "Why is insulin extracted from slaughtered cattle/pigs less preferred today? Explain how Eli Lilly engineered recombinant human insulin (Humulin) in 1983 using E. coli.",
        "modelAnswer": "Animal insulin triggered allergic immune reactions in some diabetic patients.\nPro-insulin in humans has three chains (A, B, and extra C-peptide) which is removed during maturation into active A–B linked by disulphide bridges.\nEli Lilly prepared two separate DNA sequences corresponding to Chain A and Chain B of human insulin, inserted them separately into plasmids of E. coli to produce separate A and B chains, extracted them, and combined them by forming disulphide bonds to assemble functional human insulin.",
        "stepMarking": [
          {
            "step": "Allergy drawback + pro-insulin C-peptide removal challenge",
            "marks": "1.5 Marks"
          },
          {
            "step": "Separate A & B synthesis in E. coli + disulphide linkage",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Key detail: Chain A and Chain B were synthesised SEPARATELY and then joined via disulphide bonds!",
        "commonPitfall": "Saying E. coli processed pro-insulin directly (prokaryotes lack splicing/processing machinery!)."
      },
      {
        "id": "model-c12-bio-2023-dav-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Organisms & Populations: Population Interactions (Mutualism & Brood Parasitism)",
        "questionText": "Differentiate between Mutualism, Commensalism, and Brood Parasitism, giving one specific NCERT example of each.",
        "modelAnswer": "1. Mutualism (+, +): Both species benefit. Example: Lichens (algae + fungus), Mycorrhizae, or Fig tree and Wasp pollinator (or Orchid Ophrys sexual deceit).\n2. Commensalism (+, 0): One benefits while host is neither harmed nor benefited. Example: Orchid growing as epiphyte on mango branch, Barnacles on whale back, Cattle egret and grazing cattle.\n3. Brood Parasitism: Parasitic bird lays eggs in host nest letting host incubate them (eggs evolve to mimic host egg colour/size). Example: Cuckoo (Koel) laying eggs in Crow's nest.",
        "stepMarking": [
          {
            "step": "Three definitions with (+/+), (+/0), (+/-) signs",
            "marks": "1.5 Marks"
          },
          {
            "step": "One exact NCERT example for each",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Give (+, +), (+, 0), (+, -) symbols cleanly in table or bullets.",
        "commonPitfall": "Confusing Amensalism (-, 0) with Commensalism (+, 0)."
      },
      {
        "id": "model-c12-bio-2023-dav-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Ecosystem: Decomposition Steps in Detritus",
        "questionText": "Explain the five sequential steps involved in the process of decomposition of detritus in a terrestrial ecosystem.",
        "modelAnswer": "1. Fragmentation: Detritivores (earthworms) break detritus into smaller particles.\n2. Leaching: Water-soluble inorganic nutrients percolate into soil horizon and precipitate as unavailable salts.\n3. Catabolism: Bacterial and fungal enzymes degrade detritus into simpler inorganic substances.\n4. Humification: Accumulation of dark amorphous colloidal substance called humus (highly resistant to microbial action, decomposes very slowly, nutrient reservoir).\n5. Mineralisation: Further degradation of humus by microbes releasing inorganic nutrients back into soil.",
        "stepMarking": [
          {
            "step": "Fragmentation, Leaching, Catabolism",
            "marks": "1.5 Marks"
          },
          {
            "step": "Humification & Mineralisation explained",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Remember that Fragmentation, Leaching, and Catabolism occur SIMULTANEOUSLY on detritus.",
        "commonPitfall": "Putting Mineralisation before Humification."
      },
      {
        "id": "model-c12-bio-2023-dav-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Molecular Inheritance: Hershey-Chase Experiment (DNA as Genetic Material)",
        "questionText": "Why did Alfred Hershey and Martha Chase use radioactive isotopes ³²P and ³⁵S separately in bacteriophage infection experiments? State their final observation and conclusion.",
        "modelAnswer": "• Rationale: DNA contains Phosphorus (³²P) but NO Sulphur, whereas Protein coat contains Sulphur (³⁵S, in methionine/cysteine) but NO Phosphorus.\n• Procedure (3 steps): Infection of E. coli -> Blending (to agitate viral coats off bacteria) -> Centrifugation (heavier bacteria settle in pellet; lighter viral coats stay in supernatant).\n• Observation & Conclusion: Bacteria infected with ³²P phages were radioactive in the PELLET, whereas ³⁵S radioactivity remained only in the SUPERNATANT. Proved conclusively that DNA (not protein) is the genetic material transferred from virus to bacteria.",
        "stepMarking": [
          {
            "step": "³²P labels DNA only; ³⁵S labels Protein only",
            "marks": "1 Mark"
          },
          {
            "step": "Infection, Blending, Centrifugation steps",
            "marks": "1 Mark"
          },
          {
            "step": "³²P in pellet -> DNA is genetic material",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention exact words: Blending and Centrifugation, Pellet vs Supernatant!",
        "commonPitfall": "Saying ³⁵S entered the bacterial pellet."
      },
      {
        "id": "model-c12-bio-2023-dav-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Evolution: Darwinian Natural Selection vs Industrial Melanism & Analogous Organs",
        "questionText": "Differentiate between Homologous and Analogous organs with one plant and one animal example of each, naming the type of evolution they signify.",
        "modelAnswer": "1. Homologous Organs: Similar fundamental anatomical structure & origin, adapted for different functions (Divergent Evolution). Examples: Forelimbs of Whale, Bat, Cheetah, Human; Thorns of Bougainvillea and Tendrils of Cucurbita.\n2. Analogous Organs: Different anatomical structure & origin, evolved for similar functions (Convergent Evolution). Examples: Wings of butterfly and bird (or Eye of octopus & mammals; Flippers of penguins & dolphins); Sweet potato (root modification) and Potato (stem modification).",
        "stepMarking": [
          {
            "step": "Homologous = same origin, divergent evolution + 2 examples",
            "marks": "1.5 Marks"
          },
          {
            "step": "Analogous = different origin, convergent evolution + 2 examples",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always memorize ONE plant example and ONE animal example for both!",
        "commonPitfall": "Swapping divergent (homologous) and convergent (analogous)."
      },
      {
        "id": "model-c12-bio-2023-dav-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Human Health: Life Cycle of Plasmodium & AIDS Retrovirus Replication",
        "questionText": "Trace the key stages of HIV replication inside a human macrophage and explain why HIV-infected patients suffer severe opportunistic infections.",
        "modelAnswer": "1. HIV enters host Macrophage (acts as \"HIV factory\").\n2. Viral RNA genome is reverse-transcribed into viral DNA by enzyme Reverse Transcriptase.\n3. Viral DNA incorporates into host cell genome and directs synthesis of new viral RNA and particles.\n4. Progeny HIV simultaneously enters Helper T-lymphocytes (T_H cells), replicates and destroys them, causing a progressive drop in T_H count. Lacking cell-mediated immunity, patients succumb to opportunistic infections (Mycobacterium, viruses, Toxoplasma).",
        "stepMarking": [
          {
            "step": "Macrophage entry + Reverse Transcriptase (RNA -> DNA)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Host integration + Helper T-cell depletion -> immunodeficiency",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always specify BOTH cell types: Macrophage (\"HIV factory\") and Helper T-lymphocytes (T_H drop)!",
        "commonPitfall": "Saying HIV destroys B-cells directly instead of Helper T-cells."
      },
      {
        "id": "model-c12-bio-2023-dav-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Pedigree Analysis & Genetic Disorders",
        "questionText": "Read the case and answer:\nIn a family pedigree chart, unaffected carrier parents give birth to an affected child (both boys and girls can be affected equally), whereas an affected individual rarely transmits the trait directly to the next generation if marrying an unaffected homozygous partner.\n\n(a) Identify the mode of inheritance (Autosomal/Sex-linked; Dominant/Recessive) and give one classic human example. (2M)\n(b) State the defect in Sickle-Cell Anaemia at the DNA/protein codon level. (1.5M)\n(c) Why is Sickle-Cell Anaemia still maintained at noticeable frequency in malaria-endemic regions? (0.5M)",
        "modelAnswer": "(a) Autosomal Recessive inheritance (skips generations, affects males & females equally). Example: Sickle-cell anaemia or Phenylketonuria / Thalassemia.\n(b) Point mutation in β-globin gene on chromosome 11: GAG mutates to GUG in mRNA, substituting Glutamic acid (Glu) with Valine (Val) at the 6th position of β-globin chain.\n(c) Heterozygous carriers (Hb^A Hb^S) enjoy selective advantage against severe Plasmodium falciparum malaria.",
        "stepMarking": [
          {
            "step": "(a) Autosomal recessive + example",
            "marks": "2 Marks"
          },
          {
            "step": "(b) GAG -> GUG / 6th position Glu -> Val",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Heterozygote malaria resistance",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Pedigree shortcut: Normal parents having affected child => ALWAYS Recessive!",
        "commonPitfall": "Calling unaffected parents having affected child \"Dominant\"."
      },
      {
        "id": "model-c12-bio-2023-dav-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: pBR322 Cloning Vector & Insertional Inactivation",
        "questionText": "Read the passage and answer:\nPlasmids like pBR322 contain an origin of replication (ori), selectable markers (amp^R and tet^R), and unique cloning sites such as BamHI inside tet^R. Alternatively, chromogenic substrates (X-gal) allow blue-white screening using β-galactosidase.\n\n(a) What is the function of the \"ori\" site in a cloning vector? (1M)\n(b) If foreign DNA is ligated at the BamHI site of pBR322, how will you distinguish recombinant colonies from non-recombinant transformants? (2M)\n(c) Why is blue-white colour selection preferred over antibiotic double-plating? (1M)",
        "modelAnswer": "(a) ori is the sequence from where replication starts, and also controls the copy number of the linked foreign DNA.\n(b) Inserting DNA at BamHI inactivates the tet^R gene (insertional inactivation), while amp^R remains intact. Transformants first grow on ampicillin medium; transferring replicas onto tetracycline kills recombinants while non-recombinants grow on BOTH antibiotics.\n(c) Double antibiotic plating is cumbersome (requires simultaneous plating on two media plates); chromogenic blue-white screening separates white recombinants from blue non-recombinants on a single plate.",
        "stepMarking": [
          {
            "step": "(a) Starts replication & controls copy number",
            "marks": "1 Mark"
          },
          {
            "step": "(b) tet^R inactivated -> grows on Amp, dies on Tet",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Single-plate convenience vs cumbersome double plating",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice: Recombinants produce WHITE colonies (gene inactivated -> no enzyme) while non-recombinants turn BLUE!",
        "commonPitfall": "Thinking recombinant colonies turn blue in β-galactosidase screening."
      },
      {
        "id": "model-c12-bio-2023-dav-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Biotechnology Applications: Gene Therapy (ADA Deficiency) & Transgenic Animals",
        "questionText": "(a) Explain how ADA (Adenosine Deaminase) deficiency was treated in a 4-year-old girl in 1990 using gene therapy. Why is periodic infusion of engineered lymphocytes required, and how can a permanent cure be achieved?\n(b) State four ways transgenic animals are beneficial to human medicine and research.",
        "modelAnswer": "(a) Lymphocytes from patient's blood were cultured outside; a functional ADA cDNA was introduced into them using a retroviral vector, and engineered lymphocytes were returned to the patient. Because lymphocytes are NOT immortal, patients require periodic infusions. A permanent cure requires isolating the gene from marrow cells and introducing it at early EMBRYONIC stages.\n(b) Transgenic animal benefits: (1) Studying normal physiology & gene regulation (e.g., insulin-like growth factor); (2) Disease models (cancer, cystic fibrosis, Alzheimer's); (3) Biological products (α-1-antitrypsin for emphysema; Rosie cow producing 2.4 g/L human α-lactalbumin enriched milk); (4) Vaccine safety & chemical toxicity testing.",
        "stepMarking": [
          {
            "step": "(a) Retroviral ADA cDNA in lymphocytes + embryonic permanent cure",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Four transgenic uses with Rosie / α-1-antitrypsin examples",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Cite exact year 1990, Rosie transgenic cow (1997, 2.4 g/L α-lactalbumin), and α-1-antitrypsin.",
        "commonPitfall": "Saying lymphocyte infusion gives permanent cure."
      },
      {
        "id": "model-c12-bio-2023-dav-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Human Reproduction: Oogenesis vs Spermatogenesis & Hormonal Menstrual Cycle",
        "questionText": "(a) Trace the sequence of stages of Oogenesis in human females, noting when Meiosis I and Meiosis II complete.\n(b) Explain the hormonal changes (LH, FSH, Oestrogen, Progesterone) across the Follicular, Ovulatory, and Luteal phases of a 28-day menstrual cycle.",
        "modelAnswer": "(a) Oogonia (2n, formed before birth!) enter Prophase I and arrest as Primary oocytes (2n). At puberty, primary follicles mature into tertiary follicles; Primary oocyte completes Meiosis I inside tertiary follicle forming large Secondary oocyte (n) and tiny First polar body (n). Meiosis II arrests at Metaphase II and completes ONLY upon sperm entry during fertilisation, forming Ovum (n) and Second polar body.\n(b) • Follicular phase (days 5–13): FSH & LH rise gradually, stimulating follicular growth and Oestrogen secretion to regenerate endometrium.\n• Ovulatory phase (day 14): Peak Oestrogen triggers sharp LH surge, rupturing Graafian follicle to release secondary oocyte.\n• Luteal phase (days 15–28): Corpus luteum secretes high Progesterone to maintain thick secretory endometrium for implantation. Without fertilisation, corpus luteum regresses into corpus albicans, Progesterone falls, causing menstruation.",
        "stepMarking": [
          {
            "step": "(a) Foetal Prophase I arrest -> Meiosis I -> Metaphase II fertilisation arrest",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) FSH/LH/Oestrogen/Progesterone roles across all 3 phases",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Highlight BOTH meiotic arrest points in Oogenesis (Prophase I before birth; Metaphase II before fertilisation)!",
        "commonPitfall": "Stating Meiosis II completes inside ovary before ovulation."
      },
      {
        "id": "model-c12-bio-2023-dav-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Molecular Basis of Inheritance: Transcription & Genetic Code Properties",
        "questionText": "(a) Draw a schematic labelled diagram of a Transcription Unit and explain why BOTH DNA strands are not copied during transcription.\n(b) State four salient features of the Genetic Code.",
        "modelAnswer": "(a) Transcription unit components: Promoter (at 5' end of coding strand), Structural gene, Terminator (at 3' end of coding strand). Template strand runs 3'→5' while Coding strand runs 5'→3' (matching mRNA sequence except T→U).\nWhy not both strands: (1) Two complementary mRNAs would encode two completely different proteins, complicating genetic transfer; (2) Two complementary RNAs would pair to form double-stranded RNA (dsRNA), blocking translation into protein.\n(b) Genetic Code features: (1) Triplet (61 sense codons + 3 stop codons UAA, UAG, UGA); (2) Unambiguous/Specific (1 codon = 1 amino acid); (3) Degenerate (multiple codons for most amino acids); (4) Universal across bacteria to humans & Commaless; (5) AUG is dual initiator (codes Methionine + start codon).",
        "stepMarking": [
          {
            "step": "(a) Promoter/Structural/Terminator polarity + 2 reasons against dual-strand copying",
            "marks": "3 Marks"
          },
          {
            "step": "(b) 4 clear features of Genetic Code",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Promoter position is ALWAYS referenced w.r.t. the 5' end of the CODING strand!",
        "commonPitfall": "Writing that Template strand sequence matches mRNA (it is complementary; CODING strand matches mRNA!)."
      }
    ]
  },
  {
    "id": "model-c12-bio-2024-neet",
    "title": "NCERT Genetics & Biotech Mastery Class 12 Biology Mock (2024)",
    "subject": "Biology",
    "targetClass": "Class 12",
    "year": 2024,
    "paperType": "CBSE_SAMPLE",
    "paperCode": "NCERT/C12/BIO-04",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "CHALLENGING",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "All 33 questions are compulsory across 5 sections: Section A to Section E (Total 70 Marks).",
      "Section A: 16 questions (12 MCQs + 4 Assertion-Reason) of 1 mark each.",
      "Section B: 5 questions of 2 marks each.",
      "Section C: 7 questions of 3 marks each.",
      "Section D: 2 case-based questions of 4 marks each.",
      "Section E: 3 long answer questions of 5 marks each."
    ],
    "questions": [
      {
        "id": "model-c12-bio-2024-neet-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Sexual Reproduction in Flowering Plants: Pollen Viability & Tapetum",
        "questionText": "In an anther, the innermost wall layer that nourishes the developing pollen grains and typically possesses dense cytoplasm and multiple nuclei is:",
        "options": [
          "A) Epidermis",
          "B) Endothecium",
          "C) Middle layers",
          "D) Tapetum"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Tapetum is the innermost nourishing layer whose cells are often multinucleate and rich in cytoplasm; endothecium aids dehiscence.",
        "stepMarking": [
          {
            "step": "Identify Tapetum as nutritive innermost anther layer",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Pollen exine is made of sporopollenin (most resistant organic material known!).",
        "commonPitfall": "Confusing Tapetum with Endothecium (dehiscence)."
      },
      {
        "id": "model-c12-bio-2024-neet-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Human Reproduction: Hormonal Control of Spermatogenesis",
        "questionText": "Which hormone acts directly on Sertoli cells inside seminiferous tubules to stimulate secretion of factors that help in spermiogenesis?",
        "options": [
          "A) LH (Luteinising Hormone)",
          "B) FSH (Follicle Stimulating Hormone)",
          "C) Oxytocin",
          "D) Progesterone"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. LH acts on Leydig (interstitial) cells to secrete androgens, whereas FSH acts on Sertoli cells to assist spermiogenesis.",
        "stepMarking": [
          {
            "step": "FSH -> Sertoli cells; LH -> Leydig cells",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mnemonic: \"L\"H -> \"L\"eydig cells; \"F\"SH -> \"S\"ertoli cells.",
        "commonPitfall": "Swapping LH and FSH targets."
      },
      {
        "id": "model-c12-bio-2024-neet-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Reproductive Health: Copper IUDs Mechanism",
        "questionText": "Cu ions released by intra-uterine devices like CuT and Multiload 375 prevent pregnancy primarily by:",
        "options": [
          "A) Preventing ovulation directly",
          "B) Suppressing sperm motility and their fertilising capacity",
          "C) Blocking fallopian tubes surgically",
          "D) Inducing menstruation immediately"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Copper-releasing IUDs increase phagocytosis of sperms within the uterus and Cu²⁺ ions suppress sperm motility and fertilising ability.",
        "stepMarking": [
          {
            "step": "Suppress sperm motility & fertilising capacity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Hormone-releasing IUDs (LNG-20, Progestasert) additionally make the uterus unsuitable for implantation and cervix hostile to sperms.",
        "commonPitfall": "Writing that CuT prevents ovulation."
      },
      {
        "id": "model-c12-bio-2024-neet-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Principles of Inheritance: Pleiotropy & Multiple Alleles",
        "questionText": "ABO blood grouping in humans is a classic example of:",
        "options": [
          "A) Incomplete dominance only",
          "B) Multiple allelism and Co-dominance",
          "C) Polygenic inheritance",
          "D) Epistasis"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Three alleles (I^A, I^B, i) control blood group in a population (multiple allelism), and I^A I^B expresses both A and B sugars equally (co-dominance).",
        "stepMarking": [
          {
            "step": "Multiple allelism (3 alleles) + Co-dominance (I^A I^B)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "3 alleles produce 6 genotypes and 4 phenotypes in human ABO blood groups.",
        "commonPitfall": "Confusing co-dominance with incomplete dominance (Snapdragon flower)."
      },
      {
        "id": "model-c12-bio-2024-neet-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Molecular Basis of Inheritance: Lac Operon Regulation",
        "questionText": "In the lac operon of E. coli, which structural gene codes for the enzyme β-galactosidase that hydrolyses lactose into glucose and galactose?",
        "options": [
          "A) lac i",
          "B) lac z",
          "C) lac y",
          "D) lac a"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. z gene codes for β-galactosidase, y gene codes for permease, a gene codes for transacetylase, and i gene codes for the repressor.",
        "stepMarking": [
          {
            "step": "Identify lac z -> β-galactosidase",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice \"i\" in lac i stands for \"inhibitor\" (repressor), NOT \"inducer\"!",
        "commonPitfall": "Thinking lac y codes for β-galactosidase."
      },
      {
        "id": "model-c12-bio-2024-neet-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Evolution: Hardy-Weinberg Equilibrium Equation",
        "questionText": "In a population in Hardy-Weinberg equilibrium, the frequency of homozygous recessive genotype (aa) is 0.16. What is the frequency of heterozygous carriers (Aa)?",
        "options": [
          "A) 0.36",
          "B) 0.48",
          "C) 0.24",
          "D) 0.60"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. q² = 0.16 => q = 0.4. Since p + q = 1, p = 0.6. Heterozygous frequency 2pq = 2 × 0.6 × 0.4 = 0.48 (48%).",
        "stepMarking": [
          {
            "step": "q = 0.4, p = 0.6 -> 2pq = 0.48",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always verify p² + 2pq + q² = 0.36 + 0.48 + 0.16 = 1.00!",
        "commonPitfall": "Forgetting the factor of 2 in 2pq."
      },
      {
        "id": "model-c12-bio-2024-neet-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Human Health & Disease: Innate vs Active/Passive Immunity",
        "questionText": "Colostrum secreted by the mother during initial days of lactation provides abundant IgA antibodies to the newborn. This is an example of:",
        "options": [
          "A) Natural active immunity",
          "B) Natural passive immunity",
          "C) Artificial active immunity",
          "D) Cell-mediated immunity"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Pre-formed IgA antibodies are transferred naturally from mother to infant (no host antigen exposure/memory), making it natural passive immunity.",
        "stepMarking": [
          {
            "step": "Pre-formed IgA transferred naturally -> Natural passive immunity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Anti-venom / Tetanus antitoxin = Artificial passive; Vaccination = Artificial active; Colostrum / Placental IgG = Natural passive.",
        "commonPitfall": "Marking active immunity."
      },
      {
        "id": "model-c12-bio-2024-neet-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Microbes in Human Welfare: BOD & Sewage Treatment",
        "questionText": "During secondary sewage treatment, \"flocs\" consist of:",
        "options": [
          "A) Anaerobic methanogens only",
          "B) Masses of aerobic bacteria associated with fungal filaments forming mesh-like structures",
          "C) Heavy grit and floating plastic debris",
          "D) Pure nitrogen-fixing Rhizobium"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Vigorous aeration in aeration tanks promotes growth of useful aerobic microbes into flocs (bacteria + fungal filaments) that consume organic matter and sharply lower BOD.",
        "stepMarking": [
          {
            "step": "Aerobic bacteria + fungal filaments lowering BOD",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Higher BOD means MORE polluting potential of sewage water!",
        "commonPitfall": "Confusing aerobic flocs with anaerobic sludge digester methanogens."
      },
      {
        "id": "model-c12-bio-2024-neet-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Biotechnology Principles: Restriction Enzymes & Selectable Markers",
        "questionText": "Which enzyme is used to join sticky ends of vector DNA and foreign DNA fragments by forming phosphodiester bonds?",
        "options": [
          "A) EcoRI",
          "B) Taq polymerase",
          "C) DNA ligase",
          "D) Exonuclease"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. DNA ligase (molecular glue) seals sugar-phosphate backbones via phosphodiester bonds to form recombinant DNA.",
        "stepMarking": [
          {
            "step": "Identify DNA ligase",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "EcoRI = molecular scissors (cuts between G and A in 5'-GAATTC-3'); Taq polymerase = heat-stable PCR DNA synthesis; DNA ligase = molecular glue.",
        "commonPitfall": "Selecting Taq polymerase."
      },
      {
        "id": "model-c12-bio-2024-neet-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Biotechnology Applications: Bt Cotton & RNA Interference",
        "questionText": "Why does the Bt toxin protein crystal produced by Bacillus thuringiensis NOT kill the bacterium itself?",
        "options": [
          "A) Bacterium has a thick chitin wall",
          "B) Toxin exists as an inactive protoxin and activates only in the alkaline pH of the insect midgut",
          "C) Toxin only kills plant cells",
          "D) Acidic bacterial cytoplasm destroys it"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Inside Bacillus, Bt toxin exists as inactive protoxin; once ingested by an insect, the alkaline pH of the midgut solubilises the crystals and converts protoxin into active toxin that creates pores in midgut epithelial cells.",
        "stepMarking": [
          {
            "step": "Inactive protoxin activated by alkaline insect gut pH",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Specify \"alkaline pH of gut\" + \"pores in midgut epithelial cells causing swelling and lysis\".",
        "commonPitfall": "Writing \"acidic\" gut pH instead of \"alkaline\"!"
      },
      {
        "id": "model-c12-bio-2024-neet-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Organisms & Populations: Verhulst-Pearl Logistic Growth",
        "questionText": "In the Verhulst-Pearl Logistic Growth equation dN/dt = rN [(K - N)/K], when N equals K (carrying capacity), the population growth rate dN/dt becomes:",
        "options": [
          "A) Maximum",
          "B) Equal to rN",
          "C) Zero (asymptote phase)",
          "D) Exponential"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. When N = K, (K - N)/K = 0, so dN/dt = 0 and population size stabilises at carrying capacity K (sigmoid S-shaped curve).",
        "stepMarking": [
          {
            "step": "N = K => (K - N)/K = 0 => dN/dt = 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sigmoid curve shows Lag -> Log/Acceleration -> Deceleration -> Asymptote.",
        "commonPitfall": "Thinking dN/dt is maximum when N = K (max growth rate actually occurs at N = K/2!)."
      },
      {
        "id": "model-c12-bio-2024-neet-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Ecosystem & Biodiversity: Rivet Popper Hypothesis & Ecological Pyramids",
        "questionText": "Which ecological pyramid can NEVER be inverted in any natural ecosystem?",
        "options": [
          "A) Pyramid of biomass in sea",
          "B) Pyramid of number on a big tree",
          "C) Pyramid of energy",
          "D) Pyramid of biomass in grassland"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Pyramid of energy is ALWAYS upright because energy always flows unidirectionally from lower to higher trophic levels, with ~90% lost as heat at every step (10% law).",
        "stepMarking": [
          {
            "step": "Pyramid of energy always upright due to thermodynamic heat loss",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Biomass pyramid in sea (phytoplankton < zooplankton/fishes) IS inverted!",
        "commonPitfall": "Saying pyramid of biomass is always upright."
      },
      {
        "id": "model-c12-bio-2024-neet-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Biotechnology: Gel Electrophoresis DNA Separation",
        "questionText": "Assertion (A): During agarose gel electrophoresis, DNA fragments move towards the positive anode under an electric field.\nReason (R): DNA molecules are negatively charged due to phosphate groups in their sugar-phosphate backbone.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Negatively charged DNA migrates toward the positive anode through agarose pores, with smaller fragments travelling farther.",
        "stepMarking": [
          {
            "step": "Option (A) citing negative phosphate backbone charge",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Stained with Ethidium Bromide and viewed under UV light as bright orange bands!",
        "commonPitfall": "Thinking larger fragments travel faster."
      },
      {
        "id": "model-c12-bio-2024-neet-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Biodiversity: Amazon Rainforests & In-situ Conservation",
        "questionText": "Assertion (A): Biodiversity hotspots are examples of ex-situ conservation.\nReason (R): Hotspots exhibit very high levels of species richness and high degree of endemism under urgent threat of habitat loss.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Biodiversity hotspots (like Western Ghats & Sri Lanka, Indo-Burma, Himalaya) are prime examples of IN-SITU (on-site) conservation, not ex-situ. Thus A is false, R is true.",
        "stepMarking": [
          {
            "step": "Option (D): Hotspots are in-situ conservation, so A false, R true",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In-situ: Hotspots, Biosphere reserves, National parks, Sacred groves; Ex-situ: Seed banks, Botanical gardens, Cryopreservation.",
        "commonPitfall": "Assuming hotspots are ex-situ."
      },
      {
        "id": "model-c12-bio-2024-neet-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Reproduction: Human Menstrual Cycle LH Surge",
        "questionText": "Assertion (A): Rapid secretion of LH leading to its maximum level during the mid-cycle (day 14) induces rupture of Graafian follicle and ovulation.\nReason (R): High LH surge triggers degeneration of corpus luteum before fertilisation.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Mid-cycle LH surge causes ovulation, after which the empty Graafian follicle transforms INTO the corpus luteum (it does not degenerate until day ~26–28 if fertilisation fails).",
        "stepMarking": [
          {
            "step": "Option (C): A true, R false",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "LH surge -> Ovulation -> Remainder becomes Corpus Luteum secreting Progesterone.",
        "commonPitfall": "Missing the false claim about corpus luteum degeneration at mid-cycle."
      },
      {
        "id": "model-c12-bio-2024-neet-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Molecular Inheritance: DNA Replication Polarity",
        "questionText": "Assertion (A): During DNA replication, synthesis on one template strand is continuous while on the other it is discontinuous (Okazaki fragments).\nReason (R): DNA-dependent DNA polymerase can polymerise nucleotides ONLY in the 5' → 3' direction.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Because DNA polymerase only extends 3'-OH (synthesising 5'→3'), the 3'→5' template is copied continuously while the 5'→3' template must be copied discontinuously away from the replication fork.",
        "stepMarking": [
          {
            "step": "Option (A) citing strict 5'→3' polymerase polarity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw the replication fork arrows in 2M/3M questions clearly.",
        "commonPitfall": "Saying Okazaki fragments grow 3'→5'."
      },
      {
        "id": "model-c12-bio-2024-neet-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Microbes: Statins, Cyclosporin A & Streptokinase",
        "questionText": "Name the bioactive molecule and its source microbe used as:\n(i) Immunosuppressive agent in organ-transplant patients\n(ii) Blood-cholesterol lowering agent.",
        "modelAnswer": "(i) Cyclosporin A — produced by the fungus Trichoderma polysporum.\n(ii) Statins — produced by the yeast Monascus purpureus (competitively inhibits enzyme responsible for cholesterol synthesis).",
        "stepMarking": [
          {
            "step": "Cyclosporin A from Trichoderma polysporum",
            "marks": "1 Mark"
          },
          {
            "step": "Statins from Monascus purpureus",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Also remember Streptokinase (\"clot buster\") from bacterium Streptococcus.",
        "commonPitfall": "Swapping Trichoderma polysporum and Monascus purpureus."
      },
      {
        "id": "model-c12-bio-2024-neet-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Biodiversity: Causes of Biodiversity Losses (\"The Evil Quartet\")",
        "questionText": "List the four major causes of accelerated species extinction collectively termed \"The Evil Quartet\", explaining any one with an example.",
        "modelAnswer": "The Evil Quartet:\n1. Habitat loss and fragmentation (most important — e.g., Amazon rainforest cleared for soy/cattle).\n2. Over-exploitation (e.g., Steller's sea cow, Passenger pigeon).\n3. Alien species invasions (e.g., Nile perch introduced into Lake Victoria killed 200+ native cichlid fish; Eichhornia/Lantana).\n4. Co-extinctions (obligatory host-parasite or plant-pollinator mutualism extinction).",
        "stepMarking": [
          {
            "step": "List all 4 Evil Quartet causes accurately",
            "marks": "1 Mark"
          },
          {
            "step": "Clear example explaining one cause",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight Habitat Loss & Fragmentation as the single biggest driver.",
        "commonPitfall": "Listing climate pollution without the exact 4 NCERT Evil Quartet terms."
      },
      {
        "id": "model-c12-bio-2024-neet-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Flowering Plants: Apomixis & Polyembryony in Citrus/Mango",
        "questionText": "Define Apomixis and Polyembryony. Why does the hybrid seed industry strongly desire transferring apomictic genes into hybrid crops?",
        "modelAnswer": "Apomixis: Production of seeds without fertilisation (asexual reproduction mimicking sexual reproduction, e.g., Asteraceae and grasses).\nPolyembryony: Occurrence of more than one embryo in a single seed (e.g., Citrus, Mango nucellar cells).\nHybrid Advantage: Hybrid seeds lose vigour in F₂ due to segregation and cost farmers heavily every year; if made apomictic, there is no segregation of hybrid traits so farmers can replant saved seeds year after year.",
        "stepMarking": [
          {
            "step": "Definitions of Apomixis & Polyembryony",
            "marks": "1 Mark"
          },
          {
            "step": "Preventing hybrid trait segregation for farmers",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight \"no segregation of characters in hybrid progeny\".",
        "commonPitfall": "Confusing apomixis (seed without fertilisation) with parthenocarpy (fruit without fertilisation -> seedless)."
      },
      {
        "id": "model-c12-bio-2024-neet-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Inheritance: Haemophilia & Colour Blindness X-Linked Criss-Cross",
        "questionText": "A colour-blind man marries a woman with normal vision whose father was colour-blind. Work out a Punnett square to show the probability of their sons and daughters being colour-blind.",
        "modelAnswer": "Man = X^c Y; Woman = carrier X^C X^c (inherited X^c from colour-blind father).\nGametes: Man (X^c, Y) × Woman (X^C, X^c).\nOffspring genotypes:\n• X^C X^c (Carrier daughter) — 25%\n• X^c X^c (Colour-blind daughter) — 25% (50% of daughters)\n• X^C Y (Normal son) — 25%\n• X^c Y (Colour-blind son) — 25% (50% of sons).\n50% of sons and 50% of daughters will be colour-blind.",
        "stepMarking": [
          {
            "step": "Parental genotypes X^c Y and carrier X^C X^c",
            "marks": "1 Mark"
          },
          {
            "step": "Punnett cross showing 50% sons & 50% daughters affected",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember a daughter is affected ONLY when father is affected AND mother is at least a carrier!",
        "commonPitfall": "Assuming the woman is homozygous normal X^C X^C despite her colour-blind father."
      },
      {
        "id": "model-c12-bio-2024-neet-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Human Health: Innate Immunity Barriers & Interferons",
        "questionText": "What are interferons, and under which category of innate immunity barriers are they classified?",
        "modelAnswer": "Interferons are protective antiviral proteins secreted by virus-infected cells that protect neighbouring non-infected cells from further viral infection.\nThey belong to the Cytokine barriers of Innate Immunity.",
        "stepMarking": [
          {
            "step": "Antiviral proteins from virus-infected cells",
            "marks": "1 Mark"
          },
          {
            "step": "Cytokine barrier of Innate Immunity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Know all 4 NCERT Innate Barriers: Physical (skin/mucus), Physiological (HCl/tears), Cellular (PMNL/NK cells), Cytokine (Interferons).",
        "commonPitfall": "Classifying interferons under Cellular barriers."
      },
      {
        "id": "model-c12-bio-2024-neet-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Biotechnology Applications: Genetically Engineered Human Insulin (Eli Lilly)",
        "questionText": "Why is insulin extracted from slaughtered cattle/pigs less preferred today? Explain how Eli Lilly engineered recombinant human insulin (Humulin) in 1983 using E. coli.",
        "modelAnswer": "Animal insulin triggered allergic immune reactions in some diabetic patients.\nPro-insulin in humans has three chains (A, B, and extra C-peptide) which is removed during maturation into active A–B linked by disulphide bridges.\nEli Lilly prepared two separate DNA sequences corresponding to Chain A and Chain B of human insulin, inserted them separately into plasmids of E. coli to produce separate A and B chains, extracted them, and combined them by forming disulphide bonds to assemble functional human insulin.",
        "stepMarking": [
          {
            "step": "Allergy drawback + pro-insulin C-peptide removal challenge",
            "marks": "1.5 Marks"
          },
          {
            "step": "Separate A & B synthesis in E. coli + disulphide linkage",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Key detail: Chain A and Chain B were synthesised SEPARATELY and then joined via disulphide bonds!",
        "commonPitfall": "Saying E. coli processed pro-insulin directly (prokaryotes lack splicing/processing machinery!)."
      },
      {
        "id": "model-c12-bio-2024-neet-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Organisms & Populations: Population Interactions (Mutualism & Brood Parasitism)",
        "questionText": "Differentiate between Mutualism, Commensalism, and Brood Parasitism, giving one specific NCERT example of each.",
        "modelAnswer": "1. Mutualism (+, +): Both species benefit. Example: Lichens (algae + fungus), Mycorrhizae, or Fig tree and Wasp pollinator (or Orchid Ophrys sexual deceit).\n2. Commensalism (+, 0): One benefits while host is neither harmed nor benefited. Example: Orchid growing as epiphyte on mango branch, Barnacles on whale back, Cattle egret and grazing cattle.\n3. Brood Parasitism: Parasitic bird lays eggs in host nest letting host incubate them (eggs evolve to mimic host egg colour/size). Example: Cuckoo (Koel) laying eggs in Crow's nest.",
        "stepMarking": [
          {
            "step": "Three definitions with (+/+), (+/0), (+/-) signs",
            "marks": "1.5 Marks"
          },
          {
            "step": "One exact NCERT example for each",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Give (+, +), (+, 0), (+, -) symbols cleanly in table or bullets.",
        "commonPitfall": "Confusing Amensalism (-, 0) with Commensalism (+, 0)."
      },
      {
        "id": "model-c12-bio-2024-neet-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Ecosystem: Decomposition Steps in Detritus",
        "questionText": "Explain the five sequential steps involved in the process of decomposition of detritus in a terrestrial ecosystem.",
        "modelAnswer": "1. Fragmentation: Detritivores (earthworms) break detritus into smaller particles.\n2. Leaching: Water-soluble inorganic nutrients percolate into soil horizon and precipitate as unavailable salts.\n3. Catabolism: Bacterial and fungal enzymes degrade detritus into simpler inorganic substances.\n4. Humification: Accumulation of dark amorphous colloidal substance called humus (highly resistant to microbial action, decomposes very slowly, nutrient reservoir).\n5. Mineralisation: Further degradation of humus by microbes releasing inorganic nutrients back into soil.",
        "stepMarking": [
          {
            "step": "Fragmentation, Leaching, Catabolism",
            "marks": "1.5 Marks"
          },
          {
            "step": "Humification & Mineralisation explained",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Remember that Fragmentation, Leaching, and Catabolism occur SIMULTANEOUSLY on detritus.",
        "commonPitfall": "Putting Mineralisation before Humification."
      },
      {
        "id": "model-c12-bio-2024-neet-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Molecular Inheritance: Hershey-Chase Experiment (DNA as Genetic Material)",
        "questionText": "Why did Alfred Hershey and Martha Chase use radioactive isotopes ³²P and ³⁵S separately in bacteriophage infection experiments? State their final observation and conclusion.",
        "modelAnswer": "• Rationale: DNA contains Phosphorus (³²P) but NO Sulphur, whereas Protein coat contains Sulphur (³⁵S, in methionine/cysteine) but NO Phosphorus.\n• Procedure (3 steps): Infection of E. coli -> Blending (to agitate viral coats off bacteria) -> Centrifugation (heavier bacteria settle in pellet; lighter viral coats stay in supernatant).\n• Observation & Conclusion: Bacteria infected with ³²P phages were radioactive in the PELLET, whereas ³⁵S radioactivity remained only in the SUPERNATANT. Proved conclusively that DNA (not protein) is the genetic material transferred from virus to bacteria.",
        "stepMarking": [
          {
            "step": "³²P labels DNA only; ³⁵S labels Protein only",
            "marks": "1 Mark"
          },
          {
            "step": "Infection, Blending, Centrifugation steps",
            "marks": "1 Mark"
          },
          {
            "step": "³²P in pellet -> DNA is genetic material",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention exact words: Blending and Centrifugation, Pellet vs Supernatant!",
        "commonPitfall": "Saying ³⁵S entered the bacterial pellet."
      },
      {
        "id": "model-c12-bio-2024-neet-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Evolution: Darwinian Natural Selection vs Industrial Melanism & Analogous Organs",
        "questionText": "Differentiate between Homologous and Analogous organs with one plant and one animal example of each, naming the type of evolution they signify.",
        "modelAnswer": "1. Homologous Organs: Similar fundamental anatomical structure & origin, adapted for different functions (Divergent Evolution). Examples: Forelimbs of Whale, Bat, Cheetah, Human; Thorns of Bougainvillea and Tendrils of Cucurbita.\n2. Analogous Organs: Different anatomical structure & origin, evolved for similar functions (Convergent Evolution). Examples: Wings of butterfly and bird (or Eye of octopus & mammals; Flippers of penguins & dolphins); Sweet potato (root modification) and Potato (stem modification).",
        "stepMarking": [
          {
            "step": "Homologous = same origin, divergent evolution + 2 examples",
            "marks": "1.5 Marks"
          },
          {
            "step": "Analogous = different origin, convergent evolution + 2 examples",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always memorize ONE plant example and ONE animal example for both!",
        "commonPitfall": "Swapping divergent (homologous) and convergent (analogous)."
      },
      {
        "id": "model-c12-bio-2024-neet-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Human Health: Life Cycle of Plasmodium & AIDS Retrovirus Replication",
        "questionText": "Trace the key stages of HIV replication inside a human macrophage and explain why HIV-infected patients suffer severe opportunistic infections.",
        "modelAnswer": "1. HIV enters host Macrophage (acts as \"HIV factory\").\n2. Viral RNA genome is reverse-transcribed into viral DNA by enzyme Reverse Transcriptase.\n3. Viral DNA incorporates into host cell genome and directs synthesis of new viral RNA and particles.\n4. Progeny HIV simultaneously enters Helper T-lymphocytes (T_H cells), replicates and destroys them, causing a progressive drop in T_H count. Lacking cell-mediated immunity, patients succumb to opportunistic infections (Mycobacterium, viruses, Toxoplasma).",
        "stepMarking": [
          {
            "step": "Macrophage entry + Reverse Transcriptase (RNA -> DNA)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Host integration + Helper T-cell depletion -> immunodeficiency",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always specify BOTH cell types: Macrophage (\"HIV factory\") and Helper T-lymphocytes (T_H drop)!",
        "commonPitfall": "Saying HIV destroys B-cells directly instead of Helper T-cells."
      },
      {
        "id": "model-c12-bio-2024-neet-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Biotechnology Principles: PCR Three Steps & Applications",
        "questionText": "Describe the three sequential thermal steps of one Polymerase Chain Reaction (PCR) cycle with temperatures and the special DNA polymerase used.",
        "modelAnswer": "Enzyme used: Thermostable DNA polymerase (Taq polymerase) isolated from Thermus aquaticus (remains active at 94°C).\n1. Denaturation (~94°C): Double-stranded target DNA separates into two single strands.\n2. Annealing (~50–60°C): Two short oligonucleotide primers hydrogen-bond to complementary 3' ends of target strands.\n3. Extension (~72°C): Taq polymerase adds dNTPs onto primers in 5'→3' direction, doubling DNA copies per cycle (~1 billion copies in 30 cycles).",
        "stepMarking": [
          {
            "step": "Denaturation, Annealing, Extension in order",
            "marks": "2 Marks"
          },
          {
            "step": "Taq polymerase from Thermus aquaticus & role",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Show both primers and 5'→3' extension direction clearly.",
        "commonPitfall": "Putting Annealing before Denaturation."
      },
      {
        "id": "model-c12-bio-2024-neet-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: pBR322 Cloning Vector & Insertional Inactivation",
        "questionText": "Read the passage and answer:\nPlasmids like pBR322 contain an origin of replication (ori), selectable markers (amp^R and tet^R), and unique cloning sites such as BamHI inside tet^R. Alternatively, chromogenic substrates (X-gal) allow blue-white screening using β-galactosidase.\n\n(a) What is the function of the \"ori\" site in a cloning vector? (1M)\n(b) If foreign DNA is ligated at the BamHI site of pBR322, how will you distinguish recombinant colonies from non-recombinant transformants? (2M)\n(c) Why is blue-white colour selection preferred over antibiotic double-plating? (1M)",
        "modelAnswer": "(a) ori is the sequence from where replication starts, and also controls the copy number of the linked foreign DNA.\n(b) Inserting DNA at BamHI inactivates the tet^R gene (insertional inactivation), while amp^R remains intact. Transformants first grow on ampicillin medium; transferring replicas onto tetracycline kills recombinants while non-recombinants grow on BOTH antibiotics.\n(c) Double antibiotic plating is cumbersome (requires simultaneous plating on two media plates); chromogenic blue-white screening separates white recombinants from blue non-recombinants on a single plate.",
        "stepMarking": [
          {
            "step": "(a) Starts replication & controls copy number",
            "marks": "1 Mark"
          },
          {
            "step": "(b) tet^R inactivated -> grows on Amp, dies on Tet",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Single-plate convenience vs cumbersome double plating",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice: Recombinants produce WHITE colonies (gene inactivated -> no enzyme) while non-recombinants turn BLUE!",
        "commonPitfall": "Thinking recombinant colonies turn blue in β-galactosidase screening."
      },
      {
        "id": "model-c12-bio-2024-neet-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Pedigree Analysis & Genetic Disorders",
        "questionText": "Read the case and answer:\nIn a family pedigree chart, unaffected carrier parents give birth to an affected child (both boys and girls can be affected equally), whereas an affected individual rarely transmits the trait directly to the next generation if marrying an unaffected homozygous partner.\n\n(a) Identify the mode of inheritance (Autosomal/Sex-linked; Dominant/Recessive) and give one classic human example. (2M)\n(b) State the defect in Sickle-Cell Anaemia at the DNA/protein codon level. (1.5M)\n(c) Why is Sickle-Cell Anaemia still maintained at noticeable frequency in malaria-endemic regions? (0.5M)",
        "modelAnswer": "(a) Autosomal Recessive inheritance (skips generations, affects males & females equally). Example: Sickle-cell anaemia or Phenylketonuria / Thalassemia.\n(b) Point mutation in β-globin gene on chromosome 11: GAG mutates to GUG in mRNA, substituting Glutamic acid (Glu) with Valine (Val) at the 6th position of β-globin chain.\n(c) Heterozygous carriers (Hb^A Hb^S) enjoy selective advantage against severe Plasmodium falciparum malaria.",
        "stepMarking": [
          {
            "step": "(a) Autosomal recessive + example",
            "marks": "2 Marks"
          },
          {
            "step": "(b) GAG -> GUG / 6th position Glu -> Val",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Heterozygote malaria resistance",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Pedigree shortcut: Normal parents having affected child => ALWAYS Recessive!",
        "commonPitfall": "Calling unaffected parents having affected child \"Dominant\"."
      },
      {
        "id": "model-c12-bio-2024-neet-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Human Reproduction: Oogenesis vs Spermatogenesis & Hormonal Menstrual Cycle",
        "questionText": "(a) Trace the sequence of stages of Oogenesis in human females, noting when Meiosis I and Meiosis II complete.\n(b) Explain the hormonal changes (LH, FSH, Oestrogen, Progesterone) across the Follicular, Ovulatory, and Luteal phases of a 28-day menstrual cycle.",
        "modelAnswer": "(a) Oogonia (2n, formed before birth!) enter Prophase I and arrest as Primary oocytes (2n). At puberty, primary follicles mature into tertiary follicles; Primary oocyte completes Meiosis I inside tertiary follicle forming large Secondary oocyte (n) and tiny First polar body (n). Meiosis II arrests at Metaphase II and completes ONLY upon sperm entry during fertilisation, forming Ovum (n) and Second polar body.\n(b) • Follicular phase (days 5–13): FSH & LH rise gradually, stimulating follicular growth and Oestrogen secretion to regenerate endometrium.\n• Ovulatory phase (day 14): Peak Oestrogen triggers sharp LH surge, rupturing Graafian follicle to release secondary oocyte.\n• Luteal phase (days 15–28): Corpus luteum secretes high Progesterone to maintain thick secretory endometrium for implantation. Without fertilisation, corpus luteum regresses into corpus albicans, Progesterone falls, causing menstruation.",
        "stepMarking": [
          {
            "step": "(a) Foetal Prophase I arrest -> Meiosis I -> Metaphase II fertilisation arrest",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) FSH/LH/Oestrogen/Progesterone roles across all 3 phases",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Highlight BOTH meiotic arrest points in Oogenesis (Prophase I before birth; Metaphase II before fertilisation)!",
        "commonPitfall": "Stating Meiosis II completes inside ovary before ovulation."
      },
      {
        "id": "model-c12-bio-2024-neet-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Molecular Basis of Inheritance: Transcription & Genetic Code Properties",
        "questionText": "(a) Draw a schematic labelled diagram of a Transcription Unit and explain why BOTH DNA strands are not copied during transcription.\n(b) State four salient features of the Genetic Code.",
        "modelAnswer": "(a) Transcription unit components: Promoter (at 5' end of coding strand), Structural gene, Terminator (at 3' end of coding strand). Template strand runs 3'→5' while Coding strand runs 5'→3' (matching mRNA sequence except T→U).\nWhy not both strands: (1) Two complementary mRNAs would encode two completely different proteins, complicating genetic transfer; (2) Two complementary RNAs would pair to form double-stranded RNA (dsRNA), blocking translation into protein.\n(b) Genetic Code features: (1) Triplet (61 sense codons + 3 stop codons UAA, UAG, UGA); (2) Unambiguous/Specific (1 codon = 1 amino acid); (3) Degenerate (multiple codons for most amino acids); (4) Universal across bacteria to humans & Commaless; (5) AUG is dual initiator (codes Methionine + start codon).",
        "stepMarking": [
          {
            "step": "(a) Promoter/Structural/Terminator polarity + 2 reasons against dual-strand copying",
            "marks": "3 Marks"
          },
          {
            "step": "(b) 4 clear features of Genetic Code",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Promoter position is ALWAYS referenced w.r.t. the 5' end of the CODING strand!",
        "commonPitfall": "Writing that Template strand sequence matches mRNA (it is complementary; CODING strand matches mRNA!)."
      },
      {
        "id": "model-c12-bio-2024-neet-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Biotechnology Applications: Gene Therapy (ADA Deficiency) & Transgenic Animals",
        "questionText": "(a) Explain how ADA (Adenosine Deaminase) deficiency was treated in a 4-year-old girl in 1990 using gene therapy. Why is periodic infusion of engineered lymphocytes required, and how can a permanent cure be achieved?\n(b) State four ways transgenic animals are beneficial to human medicine and research.",
        "modelAnswer": "(a) Lymphocytes from patient's blood were cultured outside; a functional ADA cDNA was introduced into them using a retroviral vector, and engineered lymphocytes were returned to the patient. Because lymphocytes are NOT immortal, patients require periodic infusions. A permanent cure requires isolating the gene from marrow cells and introducing it at early EMBRYONIC stages.\n(b) Transgenic animal benefits: (1) Studying normal physiology & gene regulation (e.g., insulin-like growth factor); (2) Disease models (cancer, cystic fibrosis, Alzheimer's); (3) Biological products (α-1-antitrypsin for emphysema; Rosie cow producing 2.4 g/L human α-lactalbumin enriched milk); (4) Vaccine safety & chemical toxicity testing.",
        "stepMarking": [
          {
            "step": "(a) Retroviral ADA cDNA in lymphocytes + embryonic permanent cure",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Four transgenic uses with Rosie / α-1-antitrypsin examples",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Cite exact year 1990, Rosie transgenic cow (1997, 2.4 g/L α-lactalbumin), and α-1-antitrypsin.",
        "commonPitfall": "Saying lymphocyte infusion gives permanent cure."
      }
    ]
  },
  {
    "id": "model-c12-bio-2022-aps",
    "title": "Army Public Schools Combined Class 12 Biology Pre-Board (2022)",
    "subject": "Biology",
    "targetClass": "Class 12",
    "year": 2022,
    "paperType": "PRE_BOARD",
    "paperCode": "APS/C12/BIO-05",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "All 33 questions are compulsory across 5 sections: Section A to Section E (Total 70 Marks).",
      "Section A: 16 questions (12 MCQs + 4 Assertion-Reason) of 1 mark each.",
      "Section B: 5 questions of 2 marks each.",
      "Section C: 7 questions of 3 marks each.",
      "Section D: 2 case-based questions of 4 marks each.",
      "Section E: 3 long answer questions of 5 marks each."
    ],
    "questions": [
      {
        "id": "model-c12-bio-2022-aps-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Reproductive Health: Copper IUDs Mechanism",
        "questionText": "Cu ions released by intra-uterine devices like CuT and Multiload 375 prevent pregnancy primarily by:",
        "options": [
          "A) Preventing ovulation directly",
          "B) Suppressing sperm motility and their fertilising capacity",
          "C) Blocking fallopian tubes surgically",
          "D) Inducing menstruation immediately"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Copper-releasing IUDs increase phagocytosis of sperms within the uterus and Cu²⁺ ions suppress sperm motility and fertilising ability.",
        "stepMarking": [
          {
            "step": "Suppress sperm motility & fertilising capacity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Hormone-releasing IUDs (LNG-20, Progestasert) additionally make the uterus unsuitable for implantation and cervix hostile to sperms.",
        "commonPitfall": "Writing that CuT prevents ovulation."
      },
      {
        "id": "model-c12-bio-2022-aps-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Principles of Inheritance: Pleiotropy & Multiple Alleles",
        "questionText": "ABO blood grouping in humans is a classic example of:",
        "options": [
          "A) Incomplete dominance only",
          "B) Multiple allelism and Co-dominance",
          "C) Polygenic inheritance",
          "D) Epistasis"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Three alleles (I^A, I^B, i) control blood group in a population (multiple allelism), and I^A I^B expresses both A and B sugars equally (co-dominance).",
        "stepMarking": [
          {
            "step": "Multiple allelism (3 alleles) + Co-dominance (I^A I^B)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "3 alleles produce 6 genotypes and 4 phenotypes in human ABO blood groups.",
        "commonPitfall": "Confusing co-dominance with incomplete dominance (Snapdragon flower)."
      },
      {
        "id": "model-c12-bio-2022-aps-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Molecular Basis of Inheritance: Lac Operon Regulation",
        "questionText": "In the lac operon of E. coli, which structural gene codes for the enzyme β-galactosidase that hydrolyses lactose into glucose and galactose?",
        "options": [
          "A) lac i",
          "B) lac z",
          "C) lac y",
          "D) lac a"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. z gene codes for β-galactosidase, y gene codes for permease, a gene codes for transacetylase, and i gene codes for the repressor.",
        "stepMarking": [
          {
            "step": "Identify lac z -> β-galactosidase",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice \"i\" in lac i stands for \"inhibitor\" (repressor), NOT \"inducer\"!",
        "commonPitfall": "Thinking lac y codes for β-galactosidase."
      },
      {
        "id": "model-c12-bio-2022-aps-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Evolution: Hardy-Weinberg Equilibrium Equation",
        "questionText": "In a population in Hardy-Weinberg equilibrium, the frequency of homozygous recessive genotype (aa) is 0.16. What is the frequency of heterozygous carriers (Aa)?",
        "options": [
          "A) 0.36",
          "B) 0.48",
          "C) 0.24",
          "D) 0.60"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. q² = 0.16 => q = 0.4. Since p + q = 1, p = 0.6. Heterozygous frequency 2pq = 2 × 0.6 × 0.4 = 0.48 (48%).",
        "stepMarking": [
          {
            "step": "q = 0.4, p = 0.6 -> 2pq = 0.48",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always verify p² + 2pq + q² = 0.36 + 0.48 + 0.16 = 1.00!",
        "commonPitfall": "Forgetting the factor of 2 in 2pq."
      },
      {
        "id": "model-c12-bio-2022-aps-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Human Health & Disease: Innate vs Active/Passive Immunity",
        "questionText": "Colostrum secreted by the mother during initial days of lactation provides abundant IgA antibodies to the newborn. This is an example of:",
        "options": [
          "A) Natural active immunity",
          "B) Natural passive immunity",
          "C) Artificial active immunity",
          "D) Cell-mediated immunity"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Pre-formed IgA antibodies are transferred naturally from mother to infant (no host antigen exposure/memory), making it natural passive immunity.",
        "stepMarking": [
          {
            "step": "Pre-formed IgA transferred naturally -> Natural passive immunity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Anti-venom / Tetanus antitoxin = Artificial passive; Vaccination = Artificial active; Colostrum / Placental IgG = Natural passive.",
        "commonPitfall": "Marking active immunity."
      },
      {
        "id": "model-c12-bio-2022-aps-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Microbes in Human Welfare: BOD & Sewage Treatment",
        "questionText": "During secondary sewage treatment, \"flocs\" consist of:",
        "options": [
          "A) Anaerobic methanogens only",
          "B) Masses of aerobic bacteria associated with fungal filaments forming mesh-like structures",
          "C) Heavy grit and floating plastic debris",
          "D) Pure nitrogen-fixing Rhizobium"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Vigorous aeration in aeration tanks promotes growth of useful aerobic microbes into flocs (bacteria + fungal filaments) that consume organic matter and sharply lower BOD.",
        "stepMarking": [
          {
            "step": "Aerobic bacteria + fungal filaments lowering BOD",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Higher BOD means MORE polluting potential of sewage water!",
        "commonPitfall": "Confusing aerobic flocs with anaerobic sludge digester methanogens."
      },
      {
        "id": "model-c12-bio-2022-aps-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Biotechnology Principles: Restriction Enzymes & Selectable Markers",
        "questionText": "Which enzyme is used to join sticky ends of vector DNA and foreign DNA fragments by forming phosphodiester bonds?",
        "options": [
          "A) EcoRI",
          "B) Taq polymerase",
          "C) DNA ligase",
          "D) Exonuclease"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. DNA ligase (molecular glue) seals sugar-phosphate backbones via phosphodiester bonds to form recombinant DNA.",
        "stepMarking": [
          {
            "step": "Identify DNA ligase",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "EcoRI = molecular scissors (cuts between G and A in 5'-GAATTC-3'); Taq polymerase = heat-stable PCR DNA synthesis; DNA ligase = molecular glue.",
        "commonPitfall": "Selecting Taq polymerase."
      },
      {
        "id": "model-c12-bio-2022-aps-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Biotechnology Applications: Bt Cotton & RNA Interference",
        "questionText": "Why does the Bt toxin protein crystal produced by Bacillus thuringiensis NOT kill the bacterium itself?",
        "options": [
          "A) Bacterium has a thick chitin wall",
          "B) Toxin exists as an inactive protoxin and activates only in the alkaline pH of the insect midgut",
          "C) Toxin only kills plant cells",
          "D) Acidic bacterial cytoplasm destroys it"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Inside Bacillus, Bt toxin exists as inactive protoxin; once ingested by an insect, the alkaline pH of the midgut solubilises the crystals and converts protoxin into active toxin that creates pores in midgut epithelial cells.",
        "stepMarking": [
          {
            "step": "Inactive protoxin activated by alkaline insect gut pH",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Specify \"alkaline pH of gut\" + \"pores in midgut epithelial cells causing swelling and lysis\".",
        "commonPitfall": "Writing \"acidic\" gut pH instead of \"alkaline\"!"
      },
      {
        "id": "model-c12-bio-2022-aps-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Organisms & Populations: Verhulst-Pearl Logistic Growth",
        "questionText": "In the Verhulst-Pearl Logistic Growth equation dN/dt = rN [(K - N)/K], when N equals K (carrying capacity), the population growth rate dN/dt becomes:",
        "options": [
          "A) Maximum",
          "B) Equal to rN",
          "C) Zero (asymptote phase)",
          "D) Exponential"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. When N = K, (K - N)/K = 0, so dN/dt = 0 and population size stabilises at carrying capacity K (sigmoid S-shaped curve).",
        "stepMarking": [
          {
            "step": "N = K => (K - N)/K = 0 => dN/dt = 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sigmoid curve shows Lag -> Log/Acceleration -> Deceleration -> Asymptote.",
        "commonPitfall": "Thinking dN/dt is maximum when N = K (max growth rate actually occurs at N = K/2!)."
      },
      {
        "id": "model-c12-bio-2022-aps-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Ecosystem & Biodiversity: Rivet Popper Hypothesis & Ecological Pyramids",
        "questionText": "Which ecological pyramid can NEVER be inverted in any natural ecosystem?",
        "options": [
          "A) Pyramid of biomass in sea",
          "B) Pyramid of number on a big tree",
          "C) Pyramid of energy",
          "D) Pyramid of biomass in grassland"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Pyramid of energy is ALWAYS upright because energy always flows unidirectionally from lower to higher trophic levels, with ~90% lost as heat at every step (10% law).",
        "stepMarking": [
          {
            "step": "Pyramid of energy always upright due to thermodynamic heat loss",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Biomass pyramid in sea (phytoplankton < zooplankton/fishes) IS inverted!",
        "commonPitfall": "Saying pyramid of biomass is always upright."
      },
      {
        "id": "model-c12-bio-2022-aps-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Sexual Reproduction in Flowering Plants: Pollen Viability & Tapetum",
        "questionText": "In an anther, the innermost wall layer that nourishes the developing pollen grains and typically possesses dense cytoplasm and multiple nuclei is:",
        "options": [
          "A) Epidermis",
          "B) Endothecium",
          "C) Middle layers",
          "D) Tapetum"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Tapetum is the innermost nourishing layer whose cells are often multinucleate and rich in cytoplasm; endothecium aids dehiscence.",
        "stepMarking": [
          {
            "step": "Identify Tapetum as nutritive innermost anther layer",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Pollen exine is made of sporopollenin (most resistant organic material known!).",
        "commonPitfall": "Confusing Tapetum with Endothecium (dehiscence)."
      },
      {
        "id": "model-c12-bio-2022-aps-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Human Reproduction: Hormonal Control of Spermatogenesis",
        "questionText": "Which hormone acts directly on Sertoli cells inside seminiferous tubules to stimulate secretion of factors that help in spermiogenesis?",
        "options": [
          "A) LH (Luteinising Hormone)",
          "B) FSH (Follicle Stimulating Hormone)",
          "C) Oxytocin",
          "D) Progesterone"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. LH acts on Leydig (interstitial) cells to secrete androgens, whereas FSH acts on Sertoli cells to assist spermiogenesis.",
        "stepMarking": [
          {
            "step": "FSH -> Sertoli cells; LH -> Leydig cells",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mnemonic: \"L\"H -> \"L\"eydig cells; \"F\"SH -> \"S\"ertoli cells.",
        "commonPitfall": "Swapping LH and FSH targets."
      },
      {
        "id": "model-c12-bio-2022-aps-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Biodiversity: Amazon Rainforests & In-situ Conservation",
        "questionText": "Assertion (A): Biodiversity hotspots are examples of ex-situ conservation.\nReason (R): Hotspots exhibit very high levels of species richness and high degree of endemism under urgent threat of habitat loss.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Biodiversity hotspots (like Western Ghats & Sri Lanka, Indo-Burma, Himalaya) are prime examples of IN-SITU (on-site) conservation, not ex-situ. Thus A is false, R is true.",
        "stepMarking": [
          {
            "step": "Option (D): Hotspots are in-situ conservation, so A false, R true",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In-situ: Hotspots, Biosphere reserves, National parks, Sacred groves; Ex-situ: Seed banks, Botanical gardens, Cryopreservation.",
        "commonPitfall": "Assuming hotspots are ex-situ."
      },
      {
        "id": "model-c12-bio-2022-aps-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Reproduction: Human Menstrual Cycle LH Surge",
        "questionText": "Assertion (A): Rapid secretion of LH leading to its maximum level during the mid-cycle (day 14) induces rupture of Graafian follicle and ovulation.\nReason (R): High LH surge triggers degeneration of corpus luteum before fertilisation.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Mid-cycle LH surge causes ovulation, after which the empty Graafian follicle transforms INTO the corpus luteum (it does not degenerate until day ~26–28 if fertilisation fails).",
        "stepMarking": [
          {
            "step": "Option (C): A true, R false",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "LH surge -> Ovulation -> Remainder becomes Corpus Luteum secreting Progesterone.",
        "commonPitfall": "Missing the false claim about corpus luteum degeneration at mid-cycle."
      },
      {
        "id": "model-c12-bio-2022-aps-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Molecular Inheritance: DNA Replication Polarity",
        "questionText": "Assertion (A): During DNA replication, synthesis on one template strand is continuous while on the other it is discontinuous (Okazaki fragments).\nReason (R): DNA-dependent DNA polymerase can polymerise nucleotides ONLY in the 5' → 3' direction.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Because DNA polymerase only extends 3'-OH (synthesising 5'→3'), the 3'→5' template is copied continuously while the 5'→3' template must be copied discontinuously away from the replication fork.",
        "stepMarking": [
          {
            "step": "Option (A) citing strict 5'→3' polymerase polarity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw the replication fork arrows in 2M/3M questions clearly.",
        "commonPitfall": "Saying Okazaki fragments grow 3'→5'."
      },
      {
        "id": "model-c12-bio-2022-aps-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Biotechnology: Gel Electrophoresis DNA Separation",
        "questionText": "Assertion (A): During agarose gel electrophoresis, DNA fragments move towards the positive anode under an electric field.\nReason (R): DNA molecules are negatively charged due to phosphate groups in their sugar-phosphate backbone.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Negatively charged DNA migrates toward the positive anode through agarose pores, with smaller fragments travelling farther.",
        "stepMarking": [
          {
            "step": "Option (A) citing negative phosphate backbone charge",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Stained with Ethidium Bromide and viewed under UV light as bright orange bands!",
        "commonPitfall": "Thinking larger fragments travel faster."
      },
      {
        "id": "model-c12-bio-2022-aps-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Biodiversity: Causes of Biodiversity Losses (\"The Evil Quartet\")",
        "questionText": "List the four major causes of accelerated species extinction collectively termed \"The Evil Quartet\", explaining any one with an example.",
        "modelAnswer": "The Evil Quartet:\n1. Habitat loss and fragmentation (most important — e.g., Amazon rainforest cleared for soy/cattle).\n2. Over-exploitation (e.g., Steller's sea cow, Passenger pigeon).\n3. Alien species invasions (e.g., Nile perch introduced into Lake Victoria killed 200+ native cichlid fish; Eichhornia/Lantana).\n4. Co-extinctions (obligatory host-parasite or plant-pollinator mutualism extinction).",
        "stepMarking": [
          {
            "step": "List all 4 Evil Quartet causes accurately",
            "marks": "1 Mark"
          },
          {
            "step": "Clear example explaining one cause",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight Habitat Loss & Fragmentation as the single biggest driver.",
        "commonPitfall": "Listing climate pollution without the exact 4 NCERT Evil Quartet terms."
      },
      {
        "id": "model-c12-bio-2022-aps-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Flowering Plants: Apomixis & Polyembryony in Citrus/Mango",
        "questionText": "Define Apomixis and Polyembryony. Why does the hybrid seed industry strongly desire transferring apomictic genes into hybrid crops?",
        "modelAnswer": "Apomixis: Production of seeds without fertilisation (asexual reproduction mimicking sexual reproduction, e.g., Asteraceae and grasses).\nPolyembryony: Occurrence of more than one embryo in a single seed (e.g., Citrus, Mango nucellar cells).\nHybrid Advantage: Hybrid seeds lose vigour in F₂ due to segregation and cost farmers heavily every year; if made apomictic, there is no segregation of hybrid traits so farmers can replant saved seeds year after year.",
        "stepMarking": [
          {
            "step": "Definitions of Apomixis & Polyembryony",
            "marks": "1 Mark"
          },
          {
            "step": "Preventing hybrid trait segregation for farmers",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight \"no segregation of characters in hybrid progeny\".",
        "commonPitfall": "Confusing apomixis (seed without fertilisation) with parthenocarpy (fruit without fertilisation -> seedless)."
      },
      {
        "id": "model-c12-bio-2022-aps-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Inheritance: Haemophilia & Colour Blindness X-Linked Criss-Cross",
        "questionText": "A colour-blind man marries a woman with normal vision whose father was colour-blind. Work out a Punnett square to show the probability of their sons and daughters being colour-blind.",
        "modelAnswer": "Man = X^c Y; Woman = carrier X^C X^c (inherited X^c from colour-blind father).\nGametes: Man (X^c, Y) × Woman (X^C, X^c).\nOffspring genotypes:\n• X^C X^c (Carrier daughter) — 25%\n• X^c X^c (Colour-blind daughter) — 25% (50% of daughters)\n• X^C Y (Normal son) — 25%\n• X^c Y (Colour-blind son) — 25% (50% of sons).\n50% of sons and 50% of daughters will be colour-blind.",
        "stepMarking": [
          {
            "step": "Parental genotypes X^c Y and carrier X^C X^c",
            "marks": "1 Mark"
          },
          {
            "step": "Punnett cross showing 50% sons & 50% daughters affected",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember a daughter is affected ONLY when father is affected AND mother is at least a carrier!",
        "commonPitfall": "Assuming the woman is homozygous normal X^C X^C despite her colour-blind father."
      },
      {
        "id": "model-c12-bio-2022-aps-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Human Health: Innate Immunity Barriers & Interferons",
        "questionText": "What are interferons, and under which category of innate immunity barriers are they classified?",
        "modelAnswer": "Interferons are protective antiviral proteins secreted by virus-infected cells that protect neighbouring non-infected cells from further viral infection.\nThey belong to the Cytokine barriers of Innate Immunity.",
        "stepMarking": [
          {
            "step": "Antiviral proteins from virus-infected cells",
            "marks": "1 Mark"
          },
          {
            "step": "Cytokine barrier of Innate Immunity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Know all 4 NCERT Innate Barriers: Physical (skin/mucus), Physiological (HCl/tears), Cellular (PMNL/NK cells), Cytokine (Interferons).",
        "commonPitfall": "Classifying interferons under Cellular barriers."
      },
      {
        "id": "model-c12-bio-2022-aps-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Microbes: Statins, Cyclosporin A & Streptokinase",
        "questionText": "Name the bioactive molecule and its source microbe used as:\n(i) Immunosuppressive agent in organ-transplant patients\n(ii) Blood-cholesterol lowering agent.",
        "modelAnswer": "(i) Cyclosporin A — produced by the fungus Trichoderma polysporum.\n(ii) Statins — produced by the yeast Monascus purpureus (competitively inhibits enzyme responsible for cholesterol synthesis).",
        "stepMarking": [
          {
            "step": "Cyclosporin A from Trichoderma polysporum",
            "marks": "1 Mark"
          },
          {
            "step": "Statins from Monascus purpureus",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Also remember Streptokinase (\"clot buster\") from bacterium Streptococcus.",
        "commonPitfall": "Swapping Trichoderma polysporum and Monascus purpureus."
      },
      {
        "id": "model-c12-bio-2022-aps-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Organisms & Populations: Population Interactions (Mutualism & Brood Parasitism)",
        "questionText": "Differentiate between Mutualism, Commensalism, and Brood Parasitism, giving one specific NCERT example of each.",
        "modelAnswer": "1. Mutualism (+, +): Both species benefit. Example: Lichens (algae + fungus), Mycorrhizae, or Fig tree and Wasp pollinator (or Orchid Ophrys sexual deceit).\n2. Commensalism (+, 0): One benefits while host is neither harmed nor benefited. Example: Orchid growing as epiphyte on mango branch, Barnacles on whale back, Cattle egret and grazing cattle.\n3. Brood Parasitism: Parasitic bird lays eggs in host nest letting host incubate them (eggs evolve to mimic host egg colour/size). Example: Cuckoo (Koel) laying eggs in Crow's nest.",
        "stepMarking": [
          {
            "step": "Three definitions with (+/+), (+/0), (+/-) signs",
            "marks": "1.5 Marks"
          },
          {
            "step": "One exact NCERT example for each",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Give (+, +), (+, 0), (+, -) symbols cleanly in table or bullets.",
        "commonPitfall": "Confusing Amensalism (-, 0) with Commensalism (+, 0)."
      },
      {
        "id": "model-c12-bio-2022-aps-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Ecosystem: Decomposition Steps in Detritus",
        "questionText": "Explain the five sequential steps involved in the process of decomposition of detritus in a terrestrial ecosystem.",
        "modelAnswer": "1. Fragmentation: Detritivores (earthworms) break detritus into smaller particles.\n2. Leaching: Water-soluble inorganic nutrients percolate into soil horizon and precipitate as unavailable salts.\n3. Catabolism: Bacterial and fungal enzymes degrade detritus into simpler inorganic substances.\n4. Humification: Accumulation of dark amorphous colloidal substance called humus (highly resistant to microbial action, decomposes very slowly, nutrient reservoir).\n5. Mineralisation: Further degradation of humus by microbes releasing inorganic nutrients back into soil.",
        "stepMarking": [
          {
            "step": "Fragmentation, Leaching, Catabolism",
            "marks": "1.5 Marks"
          },
          {
            "step": "Humification & Mineralisation explained",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Remember that Fragmentation, Leaching, and Catabolism occur SIMULTANEOUSLY on detritus.",
        "commonPitfall": "Putting Mineralisation before Humification."
      },
      {
        "id": "model-c12-bio-2022-aps-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Molecular Inheritance: Hershey-Chase Experiment (DNA as Genetic Material)",
        "questionText": "Why did Alfred Hershey and Martha Chase use radioactive isotopes ³²P and ³⁵S separately in bacteriophage infection experiments? State their final observation and conclusion.",
        "modelAnswer": "• Rationale: DNA contains Phosphorus (³²P) but NO Sulphur, whereas Protein coat contains Sulphur (³⁵S, in methionine/cysteine) but NO Phosphorus.\n• Procedure (3 steps): Infection of E. coli -> Blending (to agitate viral coats off bacteria) -> Centrifugation (heavier bacteria settle in pellet; lighter viral coats stay in supernatant).\n• Observation & Conclusion: Bacteria infected with ³²P phages were radioactive in the PELLET, whereas ³⁵S radioactivity remained only in the SUPERNATANT. Proved conclusively that DNA (not protein) is the genetic material transferred from virus to bacteria.",
        "stepMarking": [
          {
            "step": "³²P labels DNA only; ³⁵S labels Protein only",
            "marks": "1 Mark"
          },
          {
            "step": "Infection, Blending, Centrifugation steps",
            "marks": "1 Mark"
          },
          {
            "step": "³²P in pellet -> DNA is genetic material",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention exact words: Blending and Centrifugation, Pellet vs Supernatant!",
        "commonPitfall": "Saying ³⁵S entered the bacterial pellet."
      },
      {
        "id": "model-c12-bio-2022-aps-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Evolution: Darwinian Natural Selection vs Industrial Melanism & Analogous Organs",
        "questionText": "Differentiate between Homologous and Analogous organs with one plant and one animal example of each, naming the type of evolution they signify.",
        "modelAnswer": "1. Homologous Organs: Similar fundamental anatomical structure & origin, adapted for different functions (Divergent Evolution). Examples: Forelimbs of Whale, Bat, Cheetah, Human; Thorns of Bougainvillea and Tendrils of Cucurbita.\n2. Analogous Organs: Different anatomical structure & origin, evolved for similar functions (Convergent Evolution). Examples: Wings of butterfly and bird (or Eye of octopus & mammals; Flippers of penguins & dolphins); Sweet potato (root modification) and Potato (stem modification).",
        "stepMarking": [
          {
            "step": "Homologous = same origin, divergent evolution + 2 examples",
            "marks": "1.5 Marks"
          },
          {
            "step": "Analogous = different origin, convergent evolution + 2 examples",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always memorize ONE plant example and ONE animal example for both!",
        "commonPitfall": "Swapping divergent (homologous) and convergent (analogous)."
      },
      {
        "id": "model-c12-bio-2022-aps-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Human Health: Life Cycle of Plasmodium & AIDS Retrovirus Replication",
        "questionText": "Trace the key stages of HIV replication inside a human macrophage and explain why HIV-infected patients suffer severe opportunistic infections.",
        "modelAnswer": "1. HIV enters host Macrophage (acts as \"HIV factory\").\n2. Viral RNA genome is reverse-transcribed into viral DNA by enzyme Reverse Transcriptase.\n3. Viral DNA incorporates into host cell genome and directs synthesis of new viral RNA and particles.\n4. Progeny HIV simultaneously enters Helper T-lymphocytes (T_H cells), replicates and destroys them, causing a progressive drop in T_H count. Lacking cell-mediated immunity, patients succumb to opportunistic infections (Mycobacterium, viruses, Toxoplasma).",
        "stepMarking": [
          {
            "step": "Macrophage entry + Reverse Transcriptase (RNA -> DNA)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Host integration + Helper T-cell depletion -> immunodeficiency",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always specify BOTH cell types: Macrophage (\"HIV factory\") and Helper T-lymphocytes (T_H drop)!",
        "commonPitfall": "Saying HIV destroys B-cells directly instead of Helper T-cells."
      },
      {
        "id": "model-c12-bio-2022-aps-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Biotechnology Principles: PCR Three Steps & Applications",
        "questionText": "Describe the three sequential thermal steps of one Polymerase Chain Reaction (PCR) cycle with temperatures and the special DNA polymerase used.",
        "modelAnswer": "Enzyme used: Thermostable DNA polymerase (Taq polymerase) isolated from Thermus aquaticus (remains active at 94°C).\n1. Denaturation (~94°C): Double-stranded target DNA separates into two single strands.\n2. Annealing (~50–60°C): Two short oligonucleotide primers hydrogen-bond to complementary 3' ends of target strands.\n3. Extension (~72°C): Taq polymerase adds dNTPs onto primers in 5'→3' direction, doubling DNA copies per cycle (~1 billion copies in 30 cycles).",
        "stepMarking": [
          {
            "step": "Denaturation, Annealing, Extension in order",
            "marks": "2 Marks"
          },
          {
            "step": "Taq polymerase from Thermus aquaticus & role",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Show both primers and 5'→3' extension direction clearly.",
        "commonPitfall": "Putting Annealing before Denaturation."
      },
      {
        "id": "model-c12-bio-2022-aps-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Biotechnology Applications: Genetically Engineered Human Insulin (Eli Lilly)",
        "questionText": "Why is insulin extracted from slaughtered cattle/pigs less preferred today? Explain how Eli Lilly engineered recombinant human insulin (Humulin) in 1983 using E. coli.",
        "modelAnswer": "Animal insulin triggered allergic immune reactions in some diabetic patients.\nPro-insulin in humans has three chains (A, B, and extra C-peptide) which is removed during maturation into active A–B linked by disulphide bridges.\nEli Lilly prepared two separate DNA sequences corresponding to Chain A and Chain B of human insulin, inserted them separately into plasmids of E. coli to produce separate A and B chains, extracted them, and combined them by forming disulphide bonds to assemble functional human insulin.",
        "stepMarking": [
          {
            "step": "Allergy drawback + pro-insulin C-peptide removal challenge",
            "marks": "1.5 Marks"
          },
          {
            "step": "Separate A & B synthesis in E. coli + disulphide linkage",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Key detail: Chain A and Chain B were synthesised SEPARATELY and then joined via disulphide bonds!",
        "commonPitfall": "Saying E. coli processed pro-insulin directly (prokaryotes lack splicing/processing machinery!)."
      },
      {
        "id": "model-c12-bio-2022-aps-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Pedigree Analysis & Genetic Disorders",
        "questionText": "Read the case and answer:\nIn a family pedigree chart, unaffected carrier parents give birth to an affected child (both boys and girls can be affected equally), whereas an affected individual rarely transmits the trait directly to the next generation if marrying an unaffected homozygous partner.\n\n(a) Identify the mode of inheritance (Autosomal/Sex-linked; Dominant/Recessive) and give one classic human example. (2M)\n(b) State the defect in Sickle-Cell Anaemia at the DNA/protein codon level. (1.5M)\n(c) Why is Sickle-Cell Anaemia still maintained at noticeable frequency in malaria-endemic regions? (0.5M)",
        "modelAnswer": "(a) Autosomal Recessive inheritance (skips generations, affects males & females equally). Example: Sickle-cell anaemia or Phenylketonuria / Thalassemia.\n(b) Point mutation in β-globin gene on chromosome 11: GAG mutates to GUG in mRNA, substituting Glutamic acid (Glu) with Valine (Val) at the 6th position of β-globin chain.\n(c) Heterozygous carriers (Hb^A Hb^S) enjoy selective advantage against severe Plasmodium falciparum malaria.",
        "stepMarking": [
          {
            "step": "(a) Autosomal recessive + example",
            "marks": "2 Marks"
          },
          {
            "step": "(b) GAG -> GUG / 6th position Glu -> Val",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Heterozygote malaria resistance",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Pedigree shortcut: Normal parents having affected child => ALWAYS Recessive!",
        "commonPitfall": "Calling unaffected parents having affected child \"Dominant\"."
      },
      {
        "id": "model-c12-bio-2022-aps-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: pBR322 Cloning Vector & Insertional Inactivation",
        "questionText": "Read the passage and answer:\nPlasmids like pBR322 contain an origin of replication (ori), selectable markers (amp^R and tet^R), and unique cloning sites such as BamHI inside tet^R. Alternatively, chromogenic substrates (X-gal) allow blue-white screening using β-galactosidase.\n\n(a) What is the function of the \"ori\" site in a cloning vector? (1M)\n(b) If foreign DNA is ligated at the BamHI site of pBR322, how will you distinguish recombinant colonies from non-recombinant transformants? (2M)\n(c) Why is blue-white colour selection preferred over antibiotic double-plating? (1M)",
        "modelAnswer": "(a) ori is the sequence from where replication starts, and also controls the copy number of the linked foreign DNA.\n(b) Inserting DNA at BamHI inactivates the tet^R gene (insertional inactivation), while amp^R remains intact. Transformants first grow on ampicillin medium; transferring replicas onto tetracycline kills recombinants while non-recombinants grow on BOTH antibiotics.\n(c) Double antibiotic plating is cumbersome (requires simultaneous plating on two media plates); chromogenic blue-white screening separates white recombinants from blue non-recombinants on a single plate.",
        "stepMarking": [
          {
            "step": "(a) Starts replication & controls copy number",
            "marks": "1 Mark"
          },
          {
            "step": "(b) tet^R inactivated -> grows on Amp, dies on Tet",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Single-plate convenience vs cumbersome double plating",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice: Recombinants produce WHITE colonies (gene inactivated -> no enzyme) while non-recombinants turn BLUE!",
        "commonPitfall": "Thinking recombinant colonies turn blue in β-galactosidase screening."
      },
      {
        "id": "model-c12-bio-2022-aps-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Molecular Basis of Inheritance: Transcription & Genetic Code Properties",
        "questionText": "(a) Draw a schematic labelled diagram of a Transcription Unit and explain why BOTH DNA strands are not copied during transcription.\n(b) State four salient features of the Genetic Code.",
        "modelAnswer": "(a) Transcription unit components: Promoter (at 5' end of coding strand), Structural gene, Terminator (at 3' end of coding strand). Template strand runs 3'→5' while Coding strand runs 5'→3' (matching mRNA sequence except T→U).\nWhy not both strands: (1) Two complementary mRNAs would encode two completely different proteins, complicating genetic transfer; (2) Two complementary RNAs would pair to form double-stranded RNA (dsRNA), blocking translation into protein.\n(b) Genetic Code features: (1) Triplet (61 sense codons + 3 stop codons UAA, UAG, UGA); (2) Unambiguous/Specific (1 codon = 1 amino acid); (3) Degenerate (multiple codons for most amino acids); (4) Universal across bacteria to humans & Commaless; (5) AUG is dual initiator (codes Methionine + start codon).",
        "stepMarking": [
          {
            "step": "(a) Promoter/Structural/Terminator polarity + 2 reasons against dual-strand copying",
            "marks": "3 Marks"
          },
          {
            "step": "(b) 4 clear features of Genetic Code",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Promoter position is ALWAYS referenced w.r.t. the 5' end of the CODING strand!",
        "commonPitfall": "Writing that Template strand sequence matches mRNA (it is complementary; CODING strand matches mRNA!)."
      },
      {
        "id": "model-c12-bio-2022-aps-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Biotechnology Applications: Gene Therapy (ADA Deficiency) & Transgenic Animals",
        "questionText": "(a) Explain how ADA (Adenosine Deaminase) deficiency was treated in a 4-year-old girl in 1990 using gene therapy. Why is periodic infusion of engineered lymphocytes required, and how can a permanent cure be achieved?\n(b) State four ways transgenic animals are beneficial to human medicine and research.",
        "modelAnswer": "(a) Lymphocytes from patient's blood were cultured outside; a functional ADA cDNA was introduced into them using a retroviral vector, and engineered lymphocytes were returned to the patient. Because lymphocytes are NOT immortal, patients require periodic infusions. A permanent cure requires isolating the gene from marrow cells and introducing it at early EMBRYONIC stages.\n(b) Transgenic animal benefits: (1) Studying normal physiology & gene regulation (e.g., insulin-like growth factor); (2) Disease models (cancer, cystic fibrosis, Alzheimer's); (3) Biological products (α-1-antitrypsin for emphysema; Rosie cow producing 2.4 g/L human α-lactalbumin enriched milk); (4) Vaccine safety & chemical toxicity testing.",
        "stepMarking": [
          {
            "step": "(a) Retroviral ADA cDNA in lymphocytes + embryonic permanent cure",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Four transgenic uses with Rosie / α-1-antitrypsin examples",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Cite exact year 1990, Rosie transgenic cow (1997, 2.4 g/L α-lactalbumin), and α-1-antitrypsin.",
        "commonPitfall": "Saying lymphocyte infusion gives permanent cure."
      },
      {
        "id": "model-c12-bio-2022-aps-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Human Reproduction: Oogenesis vs Spermatogenesis & Hormonal Menstrual Cycle",
        "questionText": "(a) Trace the sequence of stages of Oogenesis in human females, noting when Meiosis I and Meiosis II complete.\n(b) Explain the hormonal changes (LH, FSH, Oestrogen, Progesterone) across the Follicular, Ovulatory, and Luteal phases of a 28-day menstrual cycle.",
        "modelAnswer": "(a) Oogonia (2n, formed before birth!) enter Prophase I and arrest as Primary oocytes (2n). At puberty, primary follicles mature into tertiary follicles; Primary oocyte completes Meiosis I inside tertiary follicle forming large Secondary oocyte (n) and tiny First polar body (n). Meiosis II arrests at Metaphase II and completes ONLY upon sperm entry during fertilisation, forming Ovum (n) and Second polar body.\n(b) • Follicular phase (days 5–13): FSH & LH rise gradually, stimulating follicular growth and Oestrogen secretion to regenerate endometrium.\n• Ovulatory phase (day 14): Peak Oestrogen triggers sharp LH surge, rupturing Graafian follicle to release secondary oocyte.\n• Luteal phase (days 15–28): Corpus luteum secretes high Progesterone to maintain thick secretory endometrium for implantation. Without fertilisation, corpus luteum regresses into corpus albicans, Progesterone falls, causing menstruation.",
        "stepMarking": [
          {
            "step": "(a) Foetal Prophase I arrest -> Meiosis I -> Metaphase II fertilisation arrest",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) FSH/LH/Oestrogen/Progesterone roles across all 3 phases",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Highlight BOTH meiotic arrest points in Oogenesis (Prophase I before birth; Metaphase II before fertilisation)!",
        "commonPitfall": "Stating Meiosis II completes inside ovary before ovulation."
      }
    ]
  }
];
