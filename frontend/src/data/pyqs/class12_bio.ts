import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';

export const CLASS_12_BIO_PAPERS: PyqPaper[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. CBSE CLASS 12 BIOLOGY 2024 BOARD EXAM (COMPLETE FULL PAPER - SET 57/1/1)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'cbse-c12-bio-2024-board',
    title: 'CBSE Class 12 Biology Board Exam 2024 (Complete Original Paper - Set 57/1/1)',
    subject: 'Biology',
    targetClass: 'Class 12',
    year: 2024,
    paperType: 'BOARD_EXAM',
    paperCode: '57/1/1',
    totalMarks: 70,
    durationMins: 180,
    difficulty: 'MODERATE',
    isFree: true,
    totalQuestions: 33,
    generalInstructions: [
      'This question paper contains 33 questions in 5 sections: Section A to Section E.',
      'Section A contains 16 questions: 12 MCQs and 4 Assertion-Reason questions of 1 mark each.',
      'Section B contains 5 questions of 2 marks each (Q17 to Q21).',
      'Section C contains 7 questions of 3 marks each (Q22 to Q28).',
      'Section D contains 2 case study-based questions of 4 marks each (Q29 and Q30).',
      'Section E contains 3 long answer questions of 5 marks each (Q31 to Q33).',
      'All questions are compulsory. Internal choice is provided in some questions.',
      'Neat, clean, and well-labelled diagrams should be drawn wherever necessary.'
    ],
    questions: [
      // ══════════════════════════════════════════════════════════════════════════
      // SECTION A: MCQs & ASSERTION-REASON (Q1 to Q16 - 1 Mark Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c12-bio-24-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Sexual Reproduction in Flowering Plants: Tapetum Function',
        questionText: 'The innermost wall layer of microsporangium is tapetum. Its main function is:',
        options: [
          'A) Protection of pollen grains',
          'B) Dehiscence of anther',
          'C) Providing nourishment to developing pollen grains',
          'D) Formation of pollen tetrads'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Providing nourishment to developing pollen grains.\nThe tapetum is the innermost layer of the microsporangial wall. Its cells possess dense cytoplasm and are generally multinucleated. It synthesizes nutrients, callase enzyme, and sporopollenin precursors, nourishing the developing microspores (pollen grains).',
        stepMarking: [
          { step: 'Correct option C (Nourishment to developing pollen grains)', marks: '1 Mark' }
        ],
        examinerTip: 'Outer three layers (Epidermis, Endothecium, Middle layers) are protective and assist dehiscence; only Tapetum provides nourishment.',
        commonPitfall: 'Confusing endothecium (responsible for dehiscence) with tapetum.'
      },
      {
        id: 'c12-bio-24-q2',
        qNum: 2,
        section: 'A',
        marks: 1,
        topic: 'Human Reproduction: Sertoli Cells',
        questionText: 'Sertoli cells present in the seminiferous tubules of human testes are regulated by which pituitary hormone?',
        options: [
          'A) Luteinizing Hormone (LH)',
          'B) Follicle Stimulating Hormone (FSH)',
          'C) Growth Hormone (GH)',
          'D) Prolactin (PRL)'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Follicle Stimulating Hormone (FSH).\nFSH acts on Sertoli cells and stimulates the secretion of androgen-binding protein (ABP) and factors essential for spermiogenesis. In contrast, LH acts on Leydig (interstitial) cells to stimulate testosterone synthesis.',
        stepMarking: [
          { step: 'Option B (FSH)', marks: '1 Mark' }
        ],
        examinerTip: 'Mnemonic: FSH acts on Sertoli cells (S with S); LH acts on Leydig cells (L with L).',
        commonPitfall: 'Selecting LH because both are anterior pituitary gonadotropins.'
      },
      {
        id: 'c12-bio-24-q3',
        qNum: 3,
        section: 'A',
        marks: 1,
        topic: 'Reproductive Health: IUD Mechanism',
        questionText: 'Which of the following intrauterine devices (IUDs) releases copper ions to suppress sperm motility and fertilizing capacity?',
        options: [
          'A) Progestasert',
          'B) LNG-20',
          'C) CuT and Multiload 375',
          'D) Lippes loop'
        ],
        correctOption: 'C',
        modelAnswer: 'C) CuT and Multiload 375.\nCuT, Cu7, and Multiload 375 are copper-releasing IUDs. The Cu²⁺ ions released suppress sperm motility and inhibit the fertilizing capacity of spermatozoa. Progestasert and LNG-20 are hormone-releasing IUDs, while Lippes loop is a non-medicated IUD.',
        stepMarking: [
          { step: 'Option C (CuT and Multiload 375)', marks: '1 Mark' }
        ],
        examinerTip: 'Classify IUDs clearly: Non-medicated (Lippes loop), Cu-releasing (CuT, Cu7, Multiload 375), Hormone-releasing (Progestasert, LNG-20).',
        commonPitfall: 'Confusing LNG-20 (hormone releasing) with copper-releasing IUDs.'
      },
      {
        id: 'c12-bio-24-q4',
        qNum: 4,
        section: 'A',
        marks: 1,
        topic: 'Principles of Inheritance: Monohybrid Test Cross Ratio',
        questionText: 'The phenotypic and genotypic ratio of a typical monohybrid test cross is:',
        options: [
          'A) 3 : 1',
          'B) 1 : 2 : 1',
          'C) 1 : 1',
          'D) 9 : 3 : 3 : 1'
        ],
        correctOption: 'C',
        modelAnswer: 'C) 1 : 1.\nA test cross involves crossing an individual of unknown dominant genotype (e.g., Tt) with a homozygous recessive parent (tt).\nCross: Tt × tt produces gametes T, t and t, resulting in offspring Tt (Tall) and tt (Dwarf) in equal proportions, giving a 1 : 1 phenotypic and genotypic ratio.',
        stepMarking: [
          { step: 'Option C (1 : 1 ratio)', marks: '1 Mark' }
        ],
        examinerTip: 'A test cross ALWAYS yields a 1 : 1 ratio for monohybrid and 1 : 1 : 1 : 1 for dihybrid.',
        commonPitfall: 'Confusing self-crossing of F1 (3:1 phenotypic, 1:2:1 genotypic) with test cross (1:1).'
      },
      {
        id: 'c12-bio-24-q5',
        qNum: 5,
        section: 'A',
        marks: 1,
        topic: 'Molecular Basis of Inheritance: Transforming Principle',
        questionText: 'The biochemical characterisation of the "Transforming Principle" originally discovered by Frederick Griffith was accomplished by:',
        options: [
          'A) Alfred Hershey and Martha Chase',
          'B) Oswald Avery, Colin MacLeod, and Maclyn McCarty',
          'C) James Watson and Francis Crick',
          'D) Matthew Meselson and Franklin Stahl'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Oswald Avery, Colin MacLeod, and Maclyn McCarty.\nIn 1944, Avery, MacLeod, and McCarty purified biochemicals (proteins, RNA, DNA) from heat-killed S-strain Streptococcus pneumoniae and discovered that only deoxyribonuclease (DNase) inhibited transformation, proving that DNA is the genetic material.',
        stepMarking: [
          { step: 'Option B (Oswald Avery, Colin MacLeod, and Maclyn McCarty)', marks: '1 Mark' }
        ],
        examinerTip: 'Hershey & Chase provided unequivocal proof (1952) using bacteriophages; Avery, MacLeod & McCarty discovered biochemical characterisation (1944).',
        commonPitfall: 'Choosing Hershey and Chase instead of Avery, MacLeod, and McCarty.'
      },
      {
        id: 'c12-bio-24-q6',
        qNum: 6,
        section: 'A',
        marks: 1,
        topic: 'Molecular Basis of Inheritance: Start Codon',
        questionText: 'Which codon acts as a dual function initiator codon, coding for methionine as well as initiating translation?',
        options: [
          'A) UAA',
          'B) UAG',
          'C) AUG',
          'D) UGA'
        ],
        correctOption: 'C',
        modelAnswer: 'C) AUG.\nAUG has dual functions: it acts as the initiation codon for translation and codes for the amino acid Methionine (Met). UAA, UAG, and UGA are stop (nonsense) codons.',
        stepMarking: [
          { step: 'Option C (AUG)', marks: '1 Mark' }
        ],
        examinerTip: 'Remember the stop codons: UAA (Ochre), UAG (Amber), UGA (Opal). AUG is the only standard start codon.',
        commonPitfall: 'Confusing start codon AUG with UGA (stop codon).'
      },
      {
        id: 'c12-bio-24-q7',
        qNum: 7,
        section: 'A',
        marks: 1,
        topic: 'Evolution: Homologous Organs',
        questionText: 'The forelimbs of cheetah, whale, bat, and human share a common skeletal pattern. This is an example of:',
        options: [
          'A) Convergent evolution and analogous organs',
          'B) Divergent evolution and homologous organs',
          'C) Adaptive radiation and analogous organs',
          'D) Saltation and mutation'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Divergent evolution and homologous organs.\nHomologous organs share a common anatomical origin and basic structural plan (humerus, radius, ulna, carpals, metacarpals) but perform different functions adapted to different habitats. This phenomenon is termed divergent evolution.',
        stepMarking: [
          { step: 'Option B (Divergent evolution and homologous organs)', marks: '1 Mark' }
        ],
        examinerTip: 'Homology indicates common ancestry (divergent evolution); Analogy indicates different ancestry meeting similar needs (convergent evolution).',
        commonPitfall: 'Confusing homology with analogy.'
      },
      {
        id: 'c12-bio-24-q8',
        qNum: 8,
        section: 'A',
        marks: 1,
        topic: 'Human Health & Disease: Antibodies',
        questionText: 'Which antibody is predominantly present in the yellow fluid "colostrum" secreted by the mother during the initial days of lactation?',
        options: [
          'A) IgG',
          'B) IgA',
          'C) IgM',
          'D) IgE'
        ],
        correctOption: 'B',
        modelAnswer: 'B) IgA.\nColostrum contains abundant secretory IgA antibodies, providing naturally acquired passive immunity to protect the newborn infant from various gastrointestinal and respiratory infections.',
        stepMarking: [
          { step: 'Option B (IgA)', marks: '1 Mark' }
        ],
        examinerTip: 'IgA is in secretions (saliva, tears, colostrum); IgG crosses the placenta; IgE mediates allergic responses; IgM is the largest pentameric antibody.',
        commonPitfall: 'Selecting IgG (which crosses placenta) instead of IgA (present in colostrum).'
      },
      {
        id: 'c12-bio-24-q9',
        qNum: 9,
        section: 'A',
        marks: 1,
        topic: 'Microbes in Human Welfare: Cyclosporin A Source',
        questionText: 'Cyclosporin A, an important immunosuppressive agent used in organ transplant patients, is produced by the fungus:',
        options: [
          'A) Trichoderma polysporum',
          'B) Monascus purpureus',
          'C) Aspergillus niger',
          'D) Penicillium notatum'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Trichoderma polysporum.\nCyclosporin A is produced by the fungus Trichoderma polysporum. Monascus purpureus produces statins (blood cholesterol lowering agents), and Aspergillus niger produces citric acid.',
        stepMarking: [
          { step: 'Option A (Trichoderma polysporum)', marks: '1 Mark' }
        ],
        examinerTip: 'Pair them correctly: Trichoderma polysporum → Cyclosporin A; Monascus purpureus → Statins; Streptococcus → Streptokinase.',
        commonPitfall: 'Confusing Trichoderma polysporum with Monascus purpureus.'
      },
      {
        id: 'c12-bio-24-q10',
        qNum: 10,
        section: 'A',
        marks: 1,
        topic: 'Biotechnology: Gel Electrophoresis DNA Staining',
        questionText: 'During agarose gel electrophoresis, the separated DNA fragments can only be visualized after staining with which compound under UV radiation?',
        options: [
          'A) Methylene blue',
          'B) Ethidium bromide',
          'C) Acetocarmine',
          'D) Safranin'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Ethidium bromide.\nDNA fragments are invisible under normal light. Staining with Ethidium Bromide (EtBr) followed by exposure to ultraviolet (UV) light renders them visible as bright orange coloured bands.',
        stepMarking: [
          { step: 'Option B (Ethidium bromide)', marks: '1 Mark' }
        ],
        examinerTip: 'Always remember: Ethidium bromide + UV radiation = bright orange bands.',
        commonPitfall: 'Forgetting UV light is required; EtBr alone does not show visible bands under white light.'
      },
      {
        id: 'c12-bio-24-q11',
        qNum: 11,
        section: 'A',
        marks: 1,
        topic: 'Biotechnology Applications: Bt Toxin Action',
        questionText: 'Why does the Bt toxin protein synthesized by Bacillus thuringiensis not kill the bacterium itself?',
        options: [
          'A) The bacterium is immune to the toxin',
          'B) The toxin exists as an inactive protoxin and requires alkaline pH of insect gut for activation',
          'C) The toxin is enclosed within a thick protective capsule',
          'D) The toxin is rapidly degraded by bacterial proteases'
        ],
        correctOption: 'B',
        modelAnswer: 'B) The toxin exists as an inactive protoxin and requires alkaline pH of insect gut for activation.\nBt toxin protein exists as an inactive crystal protein (protoxin) inside the bacterium. Once an insect ingests the protoxin, the alkaline pH of the insect midgut solubilizes the crystals and converts them into the active toxin form, which binds to midgut epithelial cells and creates pores.',
        stepMarking: [
          { step: 'Option B (Inactive protoxin converted in alkaline pH of insect gut)', marks: '1 Mark' }
        ],
        examinerTip: 'Key points: Inactive protoxin + Alkaline pH of midgut → Active toxin → Epithelial cell lysis.',
        commonPitfall: 'Writing acidic pH instead of alkaline pH.'
      },
      {
        id: 'c12-bio-24-q12',
        qNum: 12,
        section: 'A',
        marks: 1,
        topic: 'Organisms & Populations: Population Interactions',
        questionText: 'The interaction between cattle egret and grazing cattle is an ecological example of:',
        options: [
          'A) Mutualism (+, +)',
          'B) Commensalism (+, 0)',
          'C) Amensalism (-, 0)',
          'D) Parasitism (+, -)'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Commensalism (+, 0).\nAs cattle graze and move through tall grass, they stir up and flush out insects that would otherwise be difficult for egrets to catch. The egret benefits by obtaining food easily (+), while the cattle is neither harmed nor benefited (0).',
        stepMarking: [
          { step: 'Option B (Commensalism)', marks: '1 Mark' }
        ],
        examinerTip: 'Commensalism (+, 0): Orchid on mango branch, barnacles on whale, cattle egret and grazing cattle.',
        commonPitfall: 'Classifying it as mutualism assuming cattle gets cleaned.'
      },
      {
        id: 'c12-bio-24-q13',
        qNum: 13,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Apomixis',
        questionText: 'Assertion (A): Apomixis is a form of asexual reproduction that mimics sexual reproduction.\nReason (R): In apomixis, seeds are produced without the occurrence of fertilization.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nApomixis produces seeds without syngamy and meiosis (asexual mode), yet the outcome is a seed (the characteristic end product of sexual reproduction). Thus, it mimics sexual reproduction because seed formation takes place without actual fertilization.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) is the correct explanation (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Apomixis has huge commercial importance because hybrid vigor does not segregate in apomictic hybrid seeds.',
        commonPitfall: 'Confusing apomixis (seed without fertilization) with parthenocarpy (fruit without fertilization).'
      },
      {
        id: 'c12-bio-24-q14',
        qNum: 14,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Klinefelter\'s Syndrome',
        questionText: 'Assertion (A): Individuals with Klinefelter\'s syndrome have overall masculine development with feminine features such as gynaecomastia.\nReason (R): Klinefelter\'s syndrome is caused by the presence of an additional copy of an X-chromosome resulting in the karyotype 47, XXY.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nKlinefelter\'s syndrome arises due to nondisjunction leading to the sex chromosomal constitution 47, XXY. The presence of the Y chromosome confers masculine development, while the extra X chromosome leads to feminine characteristics like breast development (gynaecomastia) and sterile testes.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) is the correct explanation (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Contrast with Turner syndrome (45, X0 - sterile female, rudimentary ovaries, webbed neck).',
        commonPitfall: 'Confusing Klinefelter (47, XXY) with Down syndrome (Trisomy 21).'
      },
      {
        id: 'c12-bio-24-q15',
        qNum: 15,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: DNA Packaging in Eukaryotes',
        questionText: 'Assertion (A): DNA is wrapped around a positively charged histone octamer to form a structure called nucleosome.\nReason (R): Histones are rich in the basic amino acid residues lysine and arginine which carry positive charges in their side chains.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nDNA is a negatively charged polymer due to phosphate groups. Histones are basic proteins rich in lysine and arginine carrying positive charges. The electrostatic attraction allows the negatively charged DNA to wrap tightly around the positive histone octamer to form nucleosomes.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) correctly explains (A) (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'A typical nucleosome contains 200 base pairs of DNA helix.',
        commonPitfall: 'Assuming histones are negatively charged like DNA.'
      },
      {
        id: 'c12-bio-24-q16',
        qNum: 16,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: In-situ vs Ex-situ Conservation',
        questionText: 'Assertion (A): Zoological parks, botanical gardens, and wildlife safari parks serve as in-situ conservation strategies.\nReason (R): In-situ conservation involves protecting threatened species in their natural habitats.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'D',
        modelAnswer: 'D) (A) is false, but (R) is true.\nAssertion (A) is FALSE: Zoological parks, botanical gardens, and wildlife safari parks are EX-SITU (off-site) conservation methods where endangered organisms are taken out of their natural habitat and placed in special care settings.\nReason (R) is TRUE: In-situ (on-site) conservation protects endangered species within their natural ecosystem (e.g., National Parks, Sanctuaries, Biosphere Reserves).',
        stepMarking: [
          { step: '(A) is false, but (R) is true (Option D)', marks: '1 Mark' }
        ],
        examinerTip: 'Ex-situ: Zoo, Botanical Garden, Safari park, Seed bank, Cryopreservation. In-situ: National Parks, Wildlife Sanctuaries, Biosphere Reserves, Sacred Groves.',
        commonPitfall: 'Assuming wildlife safari parks are in-situ because they look like forests.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION B: SHORT ANSWER TYPE-I (Q17 to Q21 - 2 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c12-bio-24-q17',
        qNum: 17,
        section: 'B',
        marks: 2,
        topic: 'Sexual Reproduction in Flowering Plants: Double Fertilization',
        questionText: 'What is double fertilization? Name the two fusion events involved and their respective end products in angiosperms.',
        modelAnswer: 'Double fertilization is a unique characteristic event of angiosperms where two sperms (male gametes) fertilize two distinct cellular structures inside the embryo sac.\n\nThe two fusion events are:\n1. Syngamy: One haploid male gamete (n) fuses with the haploid egg nucleus (n) to form a diploid Zygote (2n), which develops into an embryo.\n2. Triple Fusion: The second haploid male gamete (n) fuses with the two haploid polar nuclei (or diploid secondary nucleus, 2n) in the central cell to form a triploid Primary Endosperm Nucleus (PEN, 3n), which develops into nutrient-rich endosperm.',
        stepMarking: [
          { step: 'Definition of double fertilization', marks: '0.5 Mark' },
          { step: 'Syngamy (male gamete + egg = diploid zygote 2n)', marks: '0.75 Mark' },
          { step: 'Triple fusion (male gamete + 2 polar nuclei = triploid PEN 3n)', marks: '0.75 Mark' }
        ],
        examinerTip: 'Always mention the ploidy levels: Zygote is 2n, PEN is 3n.',
        commonPitfall: 'Forgetting to specify the ploidy of endosperm as triploid (3n).'
      },
      {
        id: 'c12-bio-24-q18',
        qNum: 18,
        section: 'B',
        marks: 2,
        topic: 'Human Reproduction: Corpus Luteum & Progesterone',
        questionText: 'Explain the fate of the corpus luteum and the corresponding uterine changes if:\n(a) Fertilization takes place.\n(b) Fertilization does not take place.',
        modelAnswer: '(a) If fertilization takes place:\nThe corpus luteum persists under the influence of hCG (human chorionic gonadotropin) and continues to secrete high levels of progesterone. Progesterone maintains the hypertrophied endometrium of the uterus, supporting implantation and preventing menstruation throughout pregnancy.\n\n(b) If fertilization does not take place:\nIn the absence of fertilization, LH levels decline. The corpus luteum degenerates into a white scar tissue called corpus albicans. Progesterone and estrogen levels drop sharply, causing the breakdown of the endometrial lining and triggering the onset of menstruation.',
        stepMarking: [
          { step: '(a) Corpus luteum persists, secretes progesterone, maintains endometrium for pregnancy', marks: '1 Mark' },
          { step: '(b) Degenerates into corpus albicans, progesterone drops, endometrial breakdown (menstruation)', marks: '1 Mark' }
        ],
        examinerTip: 'State the hormonal link: Progesterone is the pregnancy hormone that maintains the endometrium.',
        commonPitfall: 'Failing to mention that low progesterone triggers menstruation.'
      },
      {
        id: 'c12-bio-24-q19',
        qNum: 19,
        section: 'B',
        marks: 2,
        topic: 'Reproductive Health: Medical Termination of Pregnancy (MTP)',
        questionText: 'Under what circumstances is Medical Termination of Pregnancy (MTP) permitted in India? Up to what stage of pregnancy is it considered relatively safe?',
        modelAnswer: 'Under the MTP (Amendment) Act 2017/2021 in India, pregnancy may be terminated under the following legally permitted circumstances:\n1. Where continuation of pregnancy poses a grave risk to the physical or mental health of the pregnant woman.\n2. Where there is substantial risk that the child, if born, would suffer from serious physical or mental abnormalities (handicaps).\n3. In cases of rape or failure of contraceptive devices used by a couple.\n\nSafe Period:\nMTP is considered relatively safe during the first trimester (up to 12 weeks of pregnancy). Second-trimester terminations (up to 24 weeks) are significantly riskier and require the approval of registered medical practitioners/board.',
        stepMarking: [
          { step: 'Any two valid legal grounds for MTP', marks: '1 Mark' },
          { step: 'Stating first trimester (up to 12 weeks) as the safe period', marks: '1 Mark' }
        ],
        examinerTip: '12 weeks (first trimester) is the official NCERT benchmark for safe MTP.',
        commonPitfall: 'Writing 24 weeks as the safest period; 24 weeks is the legal upper limit, not the safest period.'
      },
      {
        id: 'c12-bio-24-q20',
        qNum: 20,
        section: 'B',
        marks: 2,
        topic: 'Evolution: Hardy-Weinberg Principle Factors',
        questionText: 'State the Hardy-Weinberg principle. Mention any two evolutionary factors that can disturb Hardy-Weinberg equilibrium.',
        modelAnswer: 'Hardy-Weinberg Principle:\nIt states that allele frequencies in a stable, large, randomly mating population remain constant from generation to generation in the absence of evolutionary influences (p² + 2pq + q² = 1).\n\nFactors disturbing equilibrium (Any two):\n1. Gene migration / Gene flow: Transfer of alleles into or out of a population due to immigration or emigration.\n2. Genetic drift: Random changes in allele frequencies occurring purely by chance in small populations.\n3. Mutation: Introduction of new alleles through sudden DNA changes.\n4. Genetic recombination: Shuffling of alleles during crossing over in meiosis.\n5. Natural selection: Differential reproductive success favoring advantageous phenotypes.',
        stepMarking: [
          { step: 'Accurate statement of Hardy-Weinberg principle and equation p² + 2pq + q² = 1', marks: '1 Mark' },
          { step: 'Any two disturbing factors correctly listed', marks: '1 Mark' }
        ],
        examinerTip: 'Always write the algebraic equation p² + 2pq + q² = 1 along with the principle definition.',
        commonPitfall: 'Forgetting to specify that Hardy-Weinberg equilibrium assumes random mating in large populations.'
      },
      {
        id: 'c12-bio-24-q21',
        qNum: 21,
        section: 'B',
        marks: 2,
        topic: 'Biotechnology: Selectable Markers in Cloning Vectors',
        questionText: 'What are selectable markers in a cloning vector? Give two examples of antibiotic resistance genes used as selectable markers in pBR322.',
        modelAnswer: 'Selectable markers are genes incorporated into cloning vectors that help distinguish and selectively permit the growth of transformants while eliminating non-transformants (host cells that failed to take up recombinant/vector DNA).\n\nExamples in plasmid vector pBR322:\n1. amp^R (Ampicillin resistance gene)\n2. tet^R (Tetracycline resistance gene)\n\nInsertion of foreign DNA into a restriction site located within one of these genes (e.g., BamHI in tet^R) leads to insertional inactivation, allowing identification of recombinants.',
        stepMarking: [
          { step: 'Definition: Selectable markers help identify and select transformants/recombinants', marks: '1 Mark' },
          { step: 'Two examples: amp^R and tet^R genes in pBR322', marks: '1 Mark' }
        ],
        examinerTip: 'Differentiate between transformant selection (vector uptake) and recombinant selection (foreign DNA inserted into marker).',
        commonPitfall: 'Writing ori or rop as selectable markers.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION C: SHORT ANSWER TYPE-II (Q22 to Q28 - 3 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c12-bio-24-q22',
        qNum: 22,
        section: 'C',
        marks: 3,
        topic: 'Sexual Reproduction in Flowering Plants: Outbreeding Devices',
        questionText: 'Continued self-pollination leads to inbreeding depression in angiosperms. Explain any three outbreeding devices developed by flowering plants to prevent self-pollination and promote cross-pollination.',
        modelAnswer: 'Plants have evolved several contrivances (outbreeding devices) to discourage autogamy (self-pollination) and encourage allogamy:\n\n1. Dichogamy (Non-synchronisation of pollen release and stigma receptivity):\n   - Protandry: Pollen is released before stigma becomes receptive (e.g., Sunflower, Salvia).\n   - Protogyny: Stigma becomes receptive before pollen is released from anthers (e.g., Datura, Aristolochia).\n\n2. Herkogamy / Spatial Separation of Anther and Stigma:\n   - Anthers and stigmas are positioned at different physical heights or locations, preventing pollen from landing on the stigma of the same flower (e.g., Primula - heterostyly).\n\n3. Self-incompatibility (Self-sterility):\n   - A genetically mediated mechanism that inhibits pollen germination or pollen tube growth in the pistil if pollen originates from the same flower or other flowers of the same plant (e.g., Tobacco, Petunia).',
        stepMarking: [
          { step: 'Dichogamy explained with protandry/protogyny', marks: '1 Mark' },
          { step: 'Spatial separation / Herkogamy explained', marks: '1 Mark' },
          { step: 'Self-incompatibility genetic mechanism explained', marks: '1 Mark' }
        ],
        examinerTip: 'Dioecy (unisexual male and female flowers on separate plants, e.g., Papaya) is also a valid full-mark device preventing both autogamy and geitonogamy.',
        commonPitfall: 'Describing wind pollination features instead of outbreeding mechanisms.'
      },
      {
        id: 'c12-bio-24-q23',
        qNum: 23,
        section: 'C',
        marks: 3,
        topic: 'Principles of Inheritance: Incomplete Dominance vs Co-dominance',
        questionText: 'Differentiate between Incomplete Dominance and Co-dominance with the help of one suitable genetic cross example for each.',
        modelAnswer: '1. Incomplete Dominance:\n- Neither of the two alleles is completely dominant over the other. The heterozygous F1 phenotype is an intermediate blend between the two parental phenotypes.\n- Example: Flower colour in Mirabilis jalapa (4 o\'clock plant) or Antirrhinum majus (Snapdragon).\n  Parental Cross: Red (RR) × White (rr)\n  F1 Generation: Rr (All Pink flowers - intermediate phenotype).\n  F2 Generation: 1 Red (RR) : 2 Pink (Rr) : 1 White (rr). Both phenotypic and genotypic ratios are 1 : 2 : 1.\n\n2. Co-dominance:\n- Both alleles of a gene express themselves independently and fully in the heterozygous condition without blending.\n- Example: ABO Blood Grouping in humans controlled by gene I.\n  Alleles I^A and I^B are co-dominant. When an individual inherits genotype I^A I^B, both antigen A and antigen B are expressed simultaneously on red blood cell membranes, giving Blood Group AB.',
        stepMarking: [
          { step: 'Explanation and SnapDragon cross for Incomplete Dominance (1:2:1 pink intermediate)', marks: '1.5 Marks' },
          { step: 'Explanation and I^A I^B blood group cross for Co-dominance (both antigens expressed)', marks: '1.5 Marks' }
        ],
        examinerTip: 'In incomplete dominance, phenotypic and genotypic ratios are identical (1:2:1). In co-dominance, both gene products are synthesized.',
        commonPitfall: 'Confusing incomplete dominance (blending phenotype) with co-dominance (independent equal expression).'
      },
      {
        id: 'c12-bio-24-q24',
        qNum: 24,
        section: 'C',
        marks: 3,
        topic: 'Molecular Basis of Inheritance: Meselson and Stahl\'s Experiment',
        questionText: 'Describe the experiment conducted by Matthew Meselson and Franklin Stahl that provided definitive proof for the semiconservative mode of DNA replication.',
        modelAnswer: '1. Experimental Setup:\n- Meselson and Stahl grew E. coli in a culture medium containing ¹⁵NH₄Cl (heavy nitrogen isotope, ¹⁵N) for many generations until ¹⁵N was incorporated into both strands of bacterial DNA (Heavy DNA).\n\n2. Shift to Light Medium (¹⁴N):\n- Cells were transferred to a medium containing normal ¹⁴NH₄Cl (light isotope, ¹⁴N) and allowed to divide.\n- DNA was extracted at specific intervals (Generation I after 20 mins, Generation II after 40 mins) and separated by CsCl density gradient centrifugation.\n\n3. Observations & Inference:\n- Generation 0 (0 min): Showed a single band of heavy density (¹⁵N-¹⁵N).\n- Generation I (20 mins = 1 generation): DNA extracted showed a single intermediate hybrid density band (¹⁵N-¹⁴N), proving that each new DNA duplex consists of one parental heavy strand and one newly synthesized light strand.\n- Generation II (40 mins = 2 generations): Showed equal proportions of hybrid density DNA (¹⁵N-¹⁴N) and light density DNA (¹⁴N-¹⁴N).\n\nConclusion: DNA replication is strictly semiconservative.',
        stepMarking: [
          { step: 'Culture in ¹⁵N and transfer to ¹⁴N medium with CsCl centrifugation mechanism', marks: '1 Mark' },
          { step: 'Results after 20 mins (hybrid band) and 40 mins (50% hybrid, 50% light)', marks: '1 Mark' },
          { step: 'Logical deduction proving semiconservative nature of replication', marks: '1 Mark' }
        ],
        examinerTip: 'Mention clearly: ¹⁵N is a heavy stable isotope, NOT a radioactive isotope (do not confuse with ³²P or ³⁵S).',
        commonPitfall: 'Calling ¹⁵N a radioactive isotope.'
      },
      {
        id: 'c12-bio-24-q25',
        qNum: 25,
        section: 'C',
        marks: 3,
        topic: 'Human Health & Disease: Innate Immunity Barriers',
        questionText: 'Innate immunity is non-specific type of defense accomplished by providing different types of barriers. Explain the four operational barriers of innate immunity in the human body.',
        modelAnswer: 'Innate immunity consists of four defense barrier systems:\n\n1. Physical Barriers:\n   - Skin: The outermost stratum corneum acts as a primary mechanical wall preventing pathogen entry.\n   - Mucous Membranes: Mucus coating the epithelial lining of the respiratory, gastrointestinal, and urogenital tracts traps entrapped microbes.\n\n2. Physiological Barriers:\n   - Gastric hydrochloric acid (HCl) in the stomach destroys ingested microorganisms.\n   - Saliva in mouth and tears from eyes contain lysozyme, an antibacterial enzyme that lyses bacterial cell walls.\n\n3. Cellular Barriers:\n   - Specialized phagocytes like Polymorphonuclear Leukocytes (PMNL-neutrophils), monocytes, and tissue macrophages engulf and digest microbes.\n   - Natural Killer (NK) lymphocytes induce apoptosis in virus-infected and tumor cells.\n\n4. Cytokine Barriers:\n   - Virus-infected cells secrete proteins called Interferons (IFN-α, IFN-β), which bind to neighboring uninfected cells and stimulate synthesis of antiviral proteins, protecting them from viral spread.',
        stepMarking: [
          { step: 'Physical barriers (Skin & Mucosa)', marks: '0.75 Mark' },
          { step: 'Physiological barriers (Stomach acid, Lysozyme in tears/saliva)', marks: '0.75 Mark' },
          { step: 'Cellular barriers (PMNL, Monocytes, Macrophages, NK cells)', marks: '0.75 Mark' },
          { step: 'Cytokine barriers (Interferons protecting non-infected cells)', marks: '0.75 Mark' }
        ],
        examinerTip: 'Interferons protect NON-INFECTED cells from further infection; they do not cure already infected cells.',
        commonPitfall: 'Writing antibodies under innate immunity (antibodies belong to acquired immunity).'
      },
      {
        id: 'c12-bio-24-q26',
        qNum: 26,
        section: 'C',
        marks: 3,
        topic: 'Microbes in Human Welfare: Sewage Treatment Plant (STP)',
        questionText: 'Explain the biological (secondary) treatment of municipal wastewater in a sewage treatment plant. How is biochemical oxygen demand (BOD) related to water pollution?',
        modelAnswer: 'Biological (Secondary) Treatment:\n1. The primary effluent is passed into large aeration tanks where it is constantly agitated mechanically and air is pumped into it.\n2. This encourages vigorous growth of aerobic microbes into "flocs" (masses of bacteria associated with fungal filaments forming mesh-like networks).\n3. As they grow, these microbes consume the major part of organic matter in the effluent, significantly reducing its Biochemical Oxygen Demand (BOD).\n4. Once BOD is reduced, effluent is passed into a settling tank where flocs sediment to form "activated sludge".\n5. A small part of activated sludge is pumped back to the aeration tank as inoculum; the remainder is transferred to anaerobic sludge digesters where anaerobic bacteria digest bacteria and fungi, producing biogas (methane, H₂S, CO₂).\n\nRelationship between BOD and Water Pollution:\nBOD measures the amount of dissolved oxygen required by microbes to oxidize all organic matter in 1 liter of water. Higher BOD indicates greater organic pollution and lower dissolved oxygen, threatening aquatic life.',
        stepMarking: [
          { step: 'Aeration tank, floc formation, and aerobic digestion', marks: '1 Mark' },
          { step: 'Settling tank, activated sludge, and anaerobic sludge digester with biogas generation', marks: '1 Mark' },
          { step: 'Definition of BOD and direct proportional relationship with pollution level', marks: '1 Mark' }
        ],
        examinerTip: 'High BOD = High Organic Pollution = Highly Polluted Water. As sewage is treated, BOD progressively drops.',
        commonPitfall: 'Confusing primary treatment (physical filtration/sedimentation) with secondary treatment (biological).'
      },
      {
        id: 'c12-bio-24-q27',
        qNum: 27,
        section: 'C',
        marks: 3,
        topic: 'Biotechnology: Polymerase Chain Reaction (PCR)',
        questionText: 'Name and explain the three successive steps involved in a single cycle of Polymerase Chain Reaction (PCR). What is the role of Taq polymerase?',
        modelAnswer: 'PCR achieves exponential enzymatic amplification of specific DNA fragments in vitro through three steps:\n\n1. Denaturation (at ~94°C - 96°C):\nThe reaction mixture is heated to break the hydrogen bonds between complementary nitrogenous bases of double-stranded target DNA, separating it into two single template strands.\n\n2. Primer Annealing (at ~50°C - 60°C):\nTwo sets of chemically synthesized oligonucleotide primers anneal (hybridize) to complementary sequences at the 3\' ends of each single-stranded DNA template.\n\n3. Primer Extension (at ~72°C):\nThe enzyme Taq DNA polymerase synthesizes a new DNA strand complementary to the template using deoxynucleoside triphosphates (dNTPs) and Mg²⁺ ions, extending the primers from 5\' to 3\' direction.\n\nRole of Taq Polymerase:\nTaq polymerase is isolated from the thermophilic bacterium Thermus aquaticus. It is thermostable and remains active at high denaturation temperatures (~95°C), eliminating the need to add fresh enzyme after each thermal cycle.',
        stepMarking: [
          { step: 'Step 1: Denaturation at ~94°C with separation of strands', marks: '0.75 Mark' },
          { step: 'Step 2: Annealing of primers at ~55°C', marks: '0.75 Mark' },
          { step: 'Step 3: Extension at ~72°C using dNTPs', marks: '0.75 Mark' },
          { step: 'Taq polymerase: Thermostable enzyme from Thermus aquaticus', marks: '0.75 Mark' }
        ],
        examinerTip: 'Mention the exact temperatures: Denaturation (94°C), Annealing (50-60°C), Extension (72°C).',
        commonPitfall: 'Writing that Taq polymerase is isolated from E. coli.'
      },
      {
        id: 'c12-bio-24-q28',
        qNum: 28,
        section: 'C',
        marks: 3,
        topic: 'Biodiversity & Conservation: Causes of Biodiversity Losses (The Evil Quartet)',
        questionText: 'The accelerated rates of species extinctions worldwide are largely due to human activities. Explain any three components of "The Evil Quartet" responsible for biodiversity loss.',
        modelAnswer: '"The Evil Quartet" refers to the four major anthropogenic drivers of biodiversity loss:\n\n1. Habitat Loss and Fragmentation:\n- The primary cause of extinction. Vast tracts of natural habitats (like tropical rainforests) are cleared for agriculture (e.g., clearing Amazon rainforest for soybean cultivation or beef cattle pastures).\n- When large contiguous habitats are fragmented into small patches due to urbanisation, animals requiring large territories (mammals, birds) decline rapidly.\n\n2. Over-exploitation:\n- Excessive hunting, harvesting, and overfishing driven by human greed beyond the species’ natural regenerative capacity.\n- Examples: Extinction of Steller\'s sea cow and Passenger pigeon in the last 500 years.\n\n3. Alien (Invasive) Species Invasions:\n- When non-native species are introduced intentionally or accidentally, they turn invasive and cause the decline or extinction of native endemic species.\n- Examples: Nile perch introduced into Lake Victoria caused extinction of >200 species of native cichlid fish; invasive weeds like Parthenium (carrot grass), Lantana, and Eichhornia (water hyacinth) choke native ecosystems.',
        stepMarking: [
          { step: 'Habitat Loss and Fragmentation explained with Amazon rainforest example', marks: '1 Mark' },
          { step: 'Over-exploitation explained with Passenger pigeon/Steller’s sea cow', marks: '1 Mark' },
          { step: 'Alien species invasion explained with Nile perch/Water hyacinth', marks: '1 Mark' }
        ],
        examinerTip: 'The 4th component is Co-extinctions (obligate mutualism where extinction of one partner inevitably causes extinction of the other).',
        commonPitfall: 'Describing general pollution without citing the specific official four categories.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION D: CASE STUDY QUESTIONS (Q29 & Q30 - 4 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c12-bio-24-q29',
        qNum: 29,
        section: 'D',
        marks: 4,
        topic: 'Case Study 1: Pedigree Analysis and Mendelian Disorders (Sickle Cell Anemia)',
        questionText: 'Sickle cell anemia is an autosome-linked recessive genetic disorder. A clinical geneticist analyzed a family pedigree where both parents appear clinically normal (unaffected), but their firstborn male child suffers from sickle cell crisis.\n\nBased on your understanding of human genetics, answer the following:\n(i) What are the genotypes of both parents with respect to the hemoglobin alleles (Hb^A and Hb^S)? [1 Mark]\n(ii) State the molecular cause of sickle cell anemia at the 6th position of the β-globin chain. [1 Mark]\n(iii) (a) Using a Punnett square, calculate the probability of their next child being a phenotypically normal carrier of the sickle cell trait. [2 Marks]\n                         OR\n(iii) (b) Why do heterozygous individuals (Hb^A Hb^S) enjoy a selective survival advantage in malaria-endemic regions? [2 Marks]',
        modelAnswer: '(i) Genotypes of both parents:\nSince the disorder is autosomal recessive and a child has the disease (genotype Hb^S Hb^S), both unaffected parents must be heterozygous carriers:\nFather: Hb^A Hb^S\nMother: Hb^A Hb^S.\n\n(ii) Molecular Cause:\nA single point mutation (transversion) from GAG to GUG at the 6th codon of the β-globin gene mRNA replaces the amino acid Glutamic acid (hydrophilic) with Valine (hydrophobic) at the sixth position of the β-globin polypeptide chain. Under low oxygen tension, mutant hemoglobin polymerizes into fibrous filaments, distorting RBCs into rigid sickle shapes.\n\n(iii) (a) Punnett Square:\nCross: Hb^A Hb^S × Hb^A Hb^S\nGametes: (Hb^A, Hb^S) × (Hb^A, Hb^S)\nOffspring genotypes:\n- 1/4 Hb^A Hb^A (Normal homozygous)\n- 2/4 (1/2) Hb^A Hb^S (Clinically normal heterozygous carriers)\n- 1/4 Hb^S Hb^S (Sickle cell anemia)\nProbability of child being a carrier (Hb^A Hb^S) = 2/4 = 1/2 (50%).\n\nOR\n(iii) (b) Selective advantage against malaria:\nPlasmodium falciparum (malarial parasite) infects and reproduces inside human erythrocytes. In heterozygous individuals (Hb^A Hb^S), the sickle-shaped RBCs sickle prematurely upon parasite invasion, leading to early splenic destruction of infected cells before the parasite completes its erythrocytic cycle. Thus, carriers are significantly protected from lethal falciparum malaria (heterozygote advantage / balanced polymorphism).',
        stepMarking: [
          { step: '(i) Parental genotypes Hb^A Hb^S (both heterozygous carriers)', marks: '1 Mark' },
          { step: '(ii) Point mutation: GAG to GUG codon, Glutamic acid replaced by Valine at 6th position of β-chain', marks: '1 Mark' },
          { step: '(iii)(a) Punnett cross showing carrier probability = 50% OR (iii)(b) Protection against malaria explained', marks: '2 Marks' }
        ],
        examinerTip: 'Specify: Glutamic acid (Glu) is replaced by Valine (Val). Transversion is GAG to GUG.',
        commonPitfall: 'Stating that the mutation is on alpha-chain instead of beta-chain.'
      },
      {
        id: 'c12-bio-24-q30',
        qNum: 30,
        section: 'D',
        marks: 4,
        topic: 'Case Study 2: Recombinant Insulin & Gene Therapy',
        questionText: 'Biotechnology has revolutionized human healthcare through the commercial production of genetically engineered therapeutics and gene therapy.\n\nBased on your understanding of recombinant therapeutics, answer the following:\n(i) How did the American company Eli Lilly produce recombinant human insulin (Humulin) in 1983? [1 Mark]\n(ii) Why is proinsulin functionally inactive in comparison to mature human insulin? [1 Mark]\n(iii) (a) Explain the clinical protocol of the first clinical gene therapy performed in 1990 on a 4-year-old girl suffering from Adenosine Deaminase (ADA) deficiency. Why is this treatment not permanent? [2 Marks]\n                         OR\n(iii) (b) Suggest a permanent curative approach using biotechnology for ADA deficiency. [2 Marks]',
        modelAnswer: '(i) Production by Eli Lilly (1983):\nEli Lilly prepared two separate synthetic DNA sequences corresponding to chain A and chain B of human insulin and introduced them into plasmids of Escherichia coli to produce peptide chains A and B separately. Chains A and B were extracted and combined by creating disulfide bonds in vitro to yield mature active human insulin.\n\n(ii) Inactivity of Proinsulin:\nProinsulin contains an extra polypeptide segment called the C-peptide (connecting peptide). This C-peptide prevents proper folding into the active conformation. In mature insulin, the C-peptide is removed during processing, leaving chains A and B linked via disulfide bridges.\n\n(iii) (a) 1990 ADA Gene Therapy Protocol:\n1. Lymphocytes from the peripheral blood of the ADA-deficient patient were isolated and cultured in vitro.\n2. A functional ADA cDNA was introduced into these lymphocytes using a retroviral vector.\n3. The genetically corrected lymphocytes were transfused back into the patient.\nWhy not permanent: Lymphocytes are mortal and have a finite lifespan; therefore, the patient requires periodic infusions of genetically modified lymphocytes.\n\nOR\n(iii) (b) Permanent Curative Approach:\nIf the functional ADA gene isolated from healthy bone marrow is introduced into embryonic cells at early developmental stages (or into hematopoietic stem cells before differentiation), the correction becomes permanent because stem cells self-renew throughout the life of the individual.',
        stepMarking: [
          { step: '(i) Separate synthesis of A and B chains in E. coli linked via disulfide bonds', marks: '1 Mark' },
          { step: '(ii) Presence of extra C-peptide in proinsulin which is excised in mature insulin', marks: '1 Mark' },
          { step: '(iii)(a) Retroviral vector mediated ADA cDNA transfer into lymphocytes + finite lifespan explanation OR (iii)(b) Gene transfer into bone marrow stem cells at early embryonic stages', marks: '2 Marks' }
        ],
        examinerTip: 'Eli Lilly did NOT produce proinsulin; they produced chains A and B separately and connected them via disulfide bonds.',
        commonPitfall: 'Saying recombinant insulin was extracted from pancreas of slaughtered pigs.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION E: LONG ANSWER QUESTIONS (Q31 to Q33 - 5 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c12-bio-24-q31',
        qNum: 31,
        section: 'E',
        marks: 5,
        topic: 'Human Reproduction: Oogenesis & Menstrual Cycle',
        questionText: '(a) Describe the process of oogenesis in human females from fetal life up to ovulation, highlighting the ploidy of cells at each developmental stage.\n(b) Correlate the ovarian and uterine phases with the cyclical fluctuations of pituitary gonadotropins (LH, FSH) and ovarian hormones (estrogen, progesterone) during a 28-day menstrual cycle.',
        modelAnswer: '(a) Process of Oogenesis:\n1. Fetal Life:\n- Millions of diploid oogonia (2n) are formed within fetal ovaries; no new oogonia are formed after birth.\n- Oogonia enter meiotic division and become temporarily arrested at prophase-I of meiosis-I, forming Primary Oocytes (2n).\n- Each primary oocyte becomes surrounded by a layer of granulosa cells to form a Primary Follicle.\n\n2. At Puberty to Ovulation:\n- Out of millions, only 60,000–80,000 primary follicles survive in each ovary.\n- Primary follicle develops into secondary and then tertiary follicle characterized by a fluid-filled cavity called antrum.\n- Primary oocyte within tertiary follicle completes meiosis-I just before ovulation, undergoing unequal cytokinesis to produce a large haploid Secondary Oocyte (n) and a tiny First Polar Body (n).\n- The mature Graafian follicle ruptures under LH surge, releasing the secondary oocyte (ovum arrest at metaphase-II) into the fallopian tube (Ovulation).\n\n(b) Menstrual Cycle Phases & Hormonal Correlation:\n1. Menstrual Phase (Days 1–5):\n- Drop in progesterone and estrogen triggers shedding of the endometrial lining (menstruation). LH and FSH levels remain low.\n\n2. Follicular / Proliferative Phase (Days 6–13):\n- FSH stimulates follicular maturation. Growing follicles secrete increasing amounts of Estrogen.\n- Estrogen stimulates rapid proliferation and repair of the uterine endometrium (vascularisation).\n\n3. Ovulatory Phase (Day 14):\n- Peak levels of LH and FSH (LH Surge) trigger the rupture of the Graafian follicle and release of the ovum.\n\n4. Luteal / Secretory Phase (Days 15–28):\n- Ruptured Graafian follicle transforms into Corpus Luteum, which secretes abundant Progesterone.\n- Progesterone converts endometrium into a glandular, secretory tissue ready for blastocyst implantation.\n- If no pregnancy occurs, corpus luteum degenerates, progesterone falls, and a new cycle begins.',
        stepMarking: [
          { step: '(a) Detailed stages: Oogonia (2n) → Primary oocyte (2n arrested at Prophase I) → Secondary oocyte (n) + Polar body', marks: '2.5 Marks' },
          { step: '(b) Hormonal synchronization across 4 phases: Menstrual, Proliferative (FSH/Estrogen), Ovulatory (LH surge), Luteal (Progesterone)', marks: '2.5 Marks' }
        ],
        examinerTip: 'Draw a schematic timeline or flowchart showing Oogonium (2n) → Primary Oocyte (2n) → Secondary Oocyte (n) + 1st Polar body.',
        commonPitfall: 'Believing meiosis-II is completed before ovulation; meiosis-II only completes when a sperm penetrates the secondary oocyte.'
      },
      {
        id: 'c12-bio-24-q32',
        qNum: 32,
        section: 'E',
        marks: 5,
        topic: 'Molecular Basis of Inheritance: Transcription & lac Operon',
        questionText: '(a) Describe the transcriptional unit in DNA. Explain the process of transcription in prokaryotes mentioning initiation, elongation, and termination.\n(b) Explain the regulation of the lac operon in Escherichia coli in the presence and absence of lactose (inducer).',
        modelAnswer: '(a) Transcriptional Unit in DNA:\nA transcription unit consists of three primary functional regions:\n1. Promoter: DNA sequence located at the 5\' end (upstream) of the coding strand that binds RNA polymerase and initiates transcription.\n2. Structural Gene: The region flanked by promoter and terminator containing the template strand (3\' → 5\') that is transcribed into RNA.\n3. Terminator: Located towards the 3\' end of the coding strand, signalling cessation of transcription.\n\nProcess in Prokaryotes:\n- Initiation: RNA polymerase binds to the promoter with the assistance of initiation factor sigma (σ).\n- Elongation: RNA polymerase unzips DNA and catalyzes RNA synthesis in 5\' → 3\' direction using ribonucleoside triphosphates according to base pairing rules.\n- Termination: On reaching the terminator, RNA polymerase associates with termination factor rho (ρ), detaching nascent mRNA and the enzyme.\n\n(b) Regulation of lac Operon:\nThe lac operon consists of regulatory gene i, promoter p, operator o, and structural genes z, y, a.\n\n1. In the Absence of Inducer (Lactose):\n- Gene i constitutively synthesizes repressor protein.\n- Repressor protein binds to the operator region (o) and prevents RNA polymerase from transcribing the structural genes (Operon switched OFF).\n\n2. In the Presence of Inducer (Lactose/Allolactose):\n- Allolactose binds to the repressor protein, inactivating it by conformational change.\n- Inactivated repressor cannot bind to the operator.\n- RNA polymerase accesses the promoter and transcribes polycistronic mRNA, translating:\n  * z gene → β-galactosidase (hydrolyzes lactose to glucose and galactose)\n  * y gene → Permease (increases cell permeability to β-galactosides)\n  * a gene → Transacetylase (transfers acetyl group to β-galactosides)\n- Operon is switched ON (Negative inducible regulation).',
        stepMarking: [
          { step: '(a) Transcription unit parts (Promoter, Structural gene, Terminator) + Initiation (σ), Elongation, Termination (ρ)', marks: '2.5 Marks' },
          { step: '(b) lac Operon: Gene i, operator, repressor action in absence of lactose (OFF) and with lactose/allolactose (ON) with z, y, a enzymes', marks: '2.5 Marks' }
        ],
        examinerTip: 'Remember: In prokaryotes, mRNA does not require splicing or post-transcriptional processing and translation can begin co-transcriptionally.',
        commonPitfall: 'Labeling lactose as repressor instead of inducer.'
      },
      {
        id: 'c12-bio-24-q33',
        qNum: 33,
        section: 'E',
        marks: 5,
        topic: 'Human Health & Disease: Life Cycle of HIV & Cancer',
        questionText: '(a) Trace the life cycle of Human Immunodeficiency Virus (HIV) inside a human host cell with the help of a flow chart or sequential explanation. Why is HIV called a retrovirus?\n(b) Explain how normal cells transform into cancerous neoplastic cells. Differentiate between benign and malignant tumors.',
        modelAnswer: '(a) Life Cycle of HIV:\nHIV is called a retrovirus because its genetic material is single-stranded RNA enclosed in an envelope and it replicates via a DNA intermediate synthesized by the enzyme reverse transcriptase.\n\nStep-by-step cycle inside host:\n1. Viral entry: Glycoprotein gp120 on the viral envelope binds to CD4 receptors on macrophages and T-helper (T_H) lymphocytes.\n2. Penetration: Viral RNA genome is released into host cytoplasm.\n3. Reverse Transcription: Viral enzyme Reverse Transcriptase copies viral RNA into complementary single-stranded DNA and then double-stranded viral DNA.\n4. Integration: Viral enzyme Integrase incorporates viral DNA into the host cell\'s genome.\n5. Transcription & Translation: Infected host cell transcribes integrated viral DNA into viral genomic RNA and mRNA, which are translated into viral proteins.\n6. Assembly & Budding: New viral particles assemble near the plasma membrane and bud off, lysing helper T-cells.\nMacrophages act as an HIV factory (continuously producing virus), while progressive reduction in CD4⁺ T-cells destroys cell-mediated immunity.\n\n(b) Cancerous Transformation & Tumor Types:\nNormal cells exhibit contact inhibition (cessation of cell growth and division upon contact with neighboring cells). When regulatory oncogenes are mutated by carcinogens (physical ionizing rays, chemical tobacco smoke, oncogenic viruses), cells lose contact inhibition, divide uncontrollably, and form tumors.\n\nDifference between Benign and Malignant Tumors:\n1. Benign Tumor:\n- Remains confined to its original location and does not invade other body organs.\n- Causes minimal damage and does not metastasize.\n\n2. Malignant Tumor:\n- Mass of rapidly proliferating neoplastic cells that invade, infiltrate, and destroy surrounding normal tissues.\n- Exhibit Metastasis: Cancer cells slough off, travel through blood or lymphatic circulation, lodge in distant organs, and establish secondary tumors. Metastasis is the most dreaded characteristic of malignant neoplasms.',
        stepMarking: [
          { step: '(a) Retrovirus definition and sequential life cycle (Reverse transcriptase, integrase, macrophage factory, CD4 depletion)', marks: '2.5 Marks' },
          { step: '(b) Loss of contact inhibition mechanism + Benign vs Malignant comparison with metastasis explained', marks: '2.5 Marks' }
        ],
        examinerTip: 'Metastasis is the defining clinical property separating malignant tumors from benign tumors.',
        commonPitfall: 'Stating that HIV destroys red blood cells instead of CD4⁺ Helper T-cells.'
      }
    ]
  }
];
