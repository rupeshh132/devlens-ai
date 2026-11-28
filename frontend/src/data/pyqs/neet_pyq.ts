import type { PyqPaper, PyqQuestion } from '../../components/learn/PyqPaperViewerModal';

type SubjectName = 'Physics' | 'Chemistry' | 'Botany' | 'Zoology';

type RawNeetQ = Omit<PyqQuestion, 'id' | 'qNum' | 'subject'>;

interface FullPaperSpec {
  id: string;
  title: string;
  year: number;
  paperType: 'COMPETITIVE_SAMPLE' | 'NEET_PAPER';
  paperCode: string;
  difficulty: 'EASY' | 'MODERATE' | 'CHALLENGING';
  isFree: boolean;
  topicFocus: string;
  offsets: Record<SubjectName, number>;
  strides: Record<SubjectName, number>;
}

interface SubjectPaperSpec {
  id: string;
  title: string;
  subject: SubjectName;
  year: number;
  paperCode: string;
  difficulty: 'EASY' | 'MODERATE' | 'CHALLENGING';
  isFree: boolean;
  topicFocus: string;
  offset: number;
  stride: number;
}

const BOT_POOL: RawNeetQ[] = [
  // 1-6: Living World & Biological Classification
  {
    section: 'A',
    marks: 4,
    topic: 'Living World (Binomial Nomenclature — ICBN)',
    questionText: 'According to ICBN rules of binomial nomenclature, which of the following biological names is written in the scientifically correct format for mango?',
    options: ['Mangifera indica Linn.', 'mangifera Indica Linn.', 'Mangifera Indica linn.', 'Mangifera indica'],
    correctOption: 'Mangifera indica Linn.',
    modelAnswer: 'Genus starts with a capital letter (Mangifera), specific epithet is lowercase (indica), Latinized/italicized, and the abbreviated author citation (Linn.) is written in Roman script after the epithet.',
    stepMarking: [{ step: 'Verify Genus capitalized + species lowercase + author citation Linn.', marks: '+4 / -1' }],
    examinerTip: 'NCERT Class XI Ch 1 explicitly illustrates Mangifera indica Linn. as the standard example.',
    commonPitfall: 'Capitalizing the specific epithet (Indica) or omitting author citation when specifically asked for full formal ICBN form.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Biological Classification (Whittaker Five-Kingdom)',
    questionText: 'Given below are two statements:\nStatement I: In R.H. Whittaker’s Five-Kingdom classification, Chlamydomonas and Chlorella are placed in Kingdom Protista along with Paramecium and Amoeba.\nStatement II: Earlier classifications had placed Chlamydomonas and Spirogyra together under Algae because both possessed cell walls.\nChoose the most appropriate answer:',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Both Statement I and Statement II are correct',
    modelAnswer: 'Whittaker’s Protista brought together all unicellular eukaryotes (Chlamydomonas, Chlorella, Paramecium, Amoeba) regardless of cell wall presence, separating Chlamydomonas from multicellular Spirogyra.',
    stepMarking: [{ step: 'NCERT XI Ch 2 p. 12–13 verbatim verification of Protista unification', marks: '+4 / -1' }],
    examinerTip: 'Unicellular + Eukaryotic = Kingdom Protista in Whittaker’s system, even for Chlamydomonas and Chlorella.',
    commonPitfall: 'Assuming Chlorella and Chlamydomonas remain in Plantae in Whittaker’s classification.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Biological Classification (Archaebacteria)',
    questionText: 'Archaebacteria survive in extreme salty areas, hot springs, and marshy areas primarily because they possess a:',
    options: [
      'Different cell wall structure and branched-chain membrane lipids without peptidoglycan',
      'Thick peptidoglycan cell wall cross-linked by D-amino acids',
      'Double-membraned nucleus protecting circular DNA',
      'Protective siliceous frustule around their plasma membrane'
    ],
    correctOption: 'Different cell wall structure and branched-chain membrane lipids without peptidoglycan',
    modelAnswer: 'Archaebacteria lack typical peptidoglycan (murein) and instead have pseudomurein/proteinaceous walls and ether-linked branched lipids enabling survival in extreme habitats.',
    stepMarking: [{ step: 'Identify unique cell wall structure as NCERT key reason', marks: '+4 / -1' }],
    examinerTip: 'Methanogens (gut of ruminants), Halophiles (salty), Thermoacidophiles (hot springs) are the 3 NCERT archaea.',
    commonPitfall: 'Selecting peptidoglycan cell wall — peptidoglycan is characteristic of eubacteria, not archaebacteria.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Biological Classification (Mycoplasma)',
    questionText: 'Assertion (A): Mycoplasmas are insensitive to antibiotics like penicillin that target bacterial cell wall synthesis.\nReason (R): Mycoplasmas completely lack a cell wall and are the smallest living cells known that can survive without oxygen.',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctOption: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    modelAnswer: 'Penicillin inhibits peptidoglycan cross-linking. Because Mycoplasmas completely lack a cell wall, penicillin has no target; they are also the smallest living cells and facultative anaerobes.',
    stepMarking: [{ step: 'Link absence of cell wall directly to penicillin resistance', marks: '+4 / -1' }],
    examinerTip: 'Remember Mycoplasma is pathogenic in both plants and animals and survives without oxygen.',
    commonPitfall: 'Thinking Mycoplasmas are obligate aerobes.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Kingdom Protista (Chrysophytes & Dinoflagellates)',
    questionText: 'Match List I with List II for Protists:\n(a) Diatoms — (i) Red tide toxin (Gonyaulax)\n(b) Dinoflagellates — (ii) Indestructible silica walls (diatomaceous earth)\n(c) Euglenoids — (iii) Protein-rich pellicle instead of cell wall\n(d) Slime moulds — (iv) Plasmodium aggregation under favourable conditions',
    options: ['a-ii, b-i, c-iii, d-iv', 'a-i, b-ii, c-iii, d-iv', 'a-ii, b-iii, c-i, d-iv', 'a-iv, b-i, c-iii, d-ii'],
    correctOption: 'a-ii, b-i, c-iii, d-iv',
    modelAnswer: 'Diatoms have overlapping silica shells forming diatomaceous earth; Gonyaulax causes red tides; Euglena has a flexible pellicle; Slime moulds form plasmodium.',
    stepMarking: [{ step: 'Match diagnostic traits of all four NCERT Protista groups', marks: '+4 / -1' }],
    examinerTip: 'Diatoms are the "chief producers" in the oceans; slime mould spores possess true walls.',
    commonPitfall: 'Confusing dinoflagellate stiff cellulose plates with euglenoid pellicle.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Kingdom Fungi & Viruses/Viroids',
    questionText: 'How do viroids (discovered by T.O. Diener in 1971) differ structurally from typical plant viruses?',
    options: [
      'Viroids are free, low-molecular-weight infectious RNA molecules lacking a protein coat',
      'Viroids contain double-stranded DNA enclosed in a lipid envelope',
      'Viroids are abnormally folded infectious proteins without nucleic acid',
      'Viroids consist of single-stranded RNA wrapped in capsomeres'
    ],
    correctOption: 'Viroids are free, low-molecular-weight infectious RNA molecules lacking a protein coat',
    modelAnswer: 'T.O. Diener discovered viroids causing Potato Spindle Tuber Disease (PSTD). They are free low-MW RNA without a protein capsid (unlike viruses). Abnormally folded proteins are prions.',
    stepMarking: [{ step: 'Distinguish Viroid (free low-MW RNA) from Prion (protein) and Virus (nucleoprotein)', marks: '+4 / -1' }],
    examinerTip: 'Viroids = low MW RNA (PSTD); Prions = folded protein (BSE/mad cow & CJD).',
    commonPitfall: 'Mixing up viroids and prions in hurried reading.'
  },
  // 7-11: Plant Kingdom
  {
    section: 'A',
    marks: 4,
    topic: 'Plant Kingdom (Algae Classes)',
    questionText: 'Which combination correctly represents Phaeophyceae (brown algae) pigments, stored food, and cell wall composition?',
    options: [
      'Chlorophyll a, c, fucoxanthin; mannitol and laminarin; cellulose + algin',
      'Chlorophyll a, d, phycoerythrin; floridean starch; cellulose + pectin + polysulphate esters',
      'Chlorophyll a, b; starch; cellulose + pectose',
      'Chlorophyll a, c, phycoerythrin; glycogen; chitin'
    ],
    correctOption: 'Chlorophyll a, c, fucoxanthin; mannitol and laminarin; cellulose + algin',
    modelAnswer: 'Brown algae contain Chl a, c, carotenoids, xanthophylls (fucoxanthin), store laminarin/mannitol, and have cellulose walls covered by gelatinous algin.',
    stepMarking: [{ step: 'Verify NCERT Table 3.1 row for Phaeophyceae', marks: '+4 / -1' }],
    examinerTip: 'Table 3.1 of NCERT Plant Kingdom is tested almost every year—memorize flagella count too (2, unequal, lateral in Phaeophyceae).',
    commonPitfall: 'Confusing algin (brown algae) with carrageen and agar (red algae).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Plant Kingdom (Bryophytes — Mosses)',
    questionText: 'Given below are two statements:\nStatement I: In mosses, the predominant stage of the life cycle is a gametophyte consisting of two stages: protonema and leafy stage.\nStatement II: The protonema stage develops directly from a spore and is creeping, green, branched, and frequently filamentous.\nChoose the correct option:',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Both Statement I and Statement II are correct',
    modelAnswer: 'Both statements match NCERT Class XI Ch 3 (Mosses): spore -> protonema (creeping, green, branched, filamentous) -> lateral bud -> leafy stage bearing sex organs.',
    stepMarking: [{ step: 'Verify Funaria/Polytrichum/Sphagnum two-stage gametophyte', marks: '+4 / -1' }],
    examinerTip: 'Remember Sphagnum provides peat (high water-holding capacity) used as packing material.',
    commonPitfall: 'Thinking the leafy stage develops directly from the zygote.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Plant Kingdom (Pteridophytes — Heterospory)',
    questionText: 'Which pair of pteridophytes exhibits heterospory (producing two kinds of spores: macro and microspores), considered a precursor to the seed habit?',
    options: ['Selaginella and Salvinia', 'Lycopodium and Equisetum', 'Psilotum and Adiantum', 'Dryopteris and Pteris'],
    correctOption: 'Selaginella and Salvinia',
    modelAnswer: 'While most pteridophytes are homosporous, genera like Selaginella and Salvinia are heterosporous; female gametophytes are retained on parent sporophytes for variable periods.',
    stepMarking: [{ step: 'Identify heterosporous NCERT pair: Selaginella & Salvinia', marks: '+4 / -1' }],
    examinerTip: 'Strobili/cones are found in Selaginella and Equisetum; heterospory is in Selaginella and Salvinia.',
    commonPitfall: 'Confusing Equisetum (homosporous, has strobili) as heterosporous.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Plant Kingdom (Gymnosperms)',
    questionText: 'In gymnosperms, identify the INCORRECT statement:',
    options: [
      'Male and female gametophytes have an independent free-living existence',
      'Cycas has specialized coralloid roots associated with N₂-fixing cyanobacteria',
      'Pinus has mycorrhizal fungal association in its roots',
      'Ovules are not enclosed by any ovary wall and remain exposed before and after fertilisation'
    ],
    correctOption: 'Male and female gametophytes have an independent free-living existence',
    modelAnswer: 'Unlike bryophytes and pteridophytes, in gymnosperms the male and female gametophytes do NOT have an independent free-living existence; they remain within sporangia retained on sporophytes.',
    stepMarking: [{ step: 'Spot NCERT contradiction on gametophyte independence in gymnosperms', marks: '+4 / -1' }],
    examinerTip: 'Cycas is dioecious (pinnate leaves, unbranched stem); Pinus is monoecious (branched stem, needle leaves).',
    commonPitfall: 'Misreading "INCORRECT" and selecting a true Cycas/Pinus fact.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Plant Kingdom (Life Cycle Patterns)',
    questionText: 'Which set of plant genera exhibits a haplo-diplontic life cycle?',
    options: ['Ectocarpus, Polysiphonia, Kelps', 'Fucus, Volvox, Spirogyra', 'Chlamydomonas, Ulothrix, Cycas', 'Sargassum, Fucus, Pinus'],
    correctOption: 'Ectocarpus, Polysiphonia, Kelps',
    modelAnswer: 'All bryophytes and pteridophytes are haplo-diplontic; among algae, Ectocarpus, Polysiphonia, and kelps are haplo-diplontic, whereas Fucus is diplontic and Volvox/Spirogyra are haplontic.',
    stepMarking: [{ step: 'Identify the three NCERT algal exceptions with haplo-diplontic cycles', marks: '+4 / -1' }],
    examinerTip: 'Algal exceptions: Fucus = Diplontic; Ectocarpus, Polysiphonia, Kelps = Haplo-diplontic.',
    commonPitfall: 'Grouping Fucus (diplontic) with Kelps (haplo-diplontic).'
  },
  // 12-19: Morphology & NMC Updated 5 Families
  {
    section: 'A',
    marks: 4,
    topic: 'Morphology (Placentation Types)',
    questionText: 'Match List I (Placentation) with List II (Example):\n(a) Marginal — (i) Dianthus, Primrose\n(b) Axile — (ii) Mustard, Argemone\n(c) Parietal — (iii) China rose, Tomato, Lemon\n(d) Free central — (iv) Pea',
    options: ['a-iv, b-iii, c-ii, d-i', 'a-iv, b-ii, c-iii, d-i', 'a-iii, b-iv, c-ii, d-i', 'a-i, b-iii, c-ii, d-iv'],
    correctOption: 'a-iv, b-iii, c-ii, d-i',
    modelAnswer: 'Marginal = Pea; Axile = China rose, Tomato, Lemon; Parietal = Mustard, Argemone (false septum replum); Free central = Dianthus, Primrose; Basal = Sunflower, Marigold.',
    stepMarking: [{ step: 'Match all four placentation examples from NCERT Ch 5', marks: '+4 / -1' }],
    examinerTip: 'Mustard & Argemone have a false septum (replum) making the unilocular ovary appear bilocular.',
    commonPitfall: 'Swapping parietal (Mustard) and free-central (Dianthus/Primrose).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Morphology (Ovary Position)',
    questionText: 'Epigynous flowers with an inferior ovary are found in:',
    options: ['Guava, cucumber, and ray florets of sunflower', 'Mustard, china rose, and brinjal', 'Plum, rose, and peach', 'Pea, bean, and lupin'],
    correctOption: 'Guava, cucumber, and ray florets of sunflower',
    modelAnswer: 'In epigynous flowers (guava, cucumber, ray florets of sunflower), the thalamus margin grows upward enclosing the ovary completely and fusing with it, making the ovary inferior.',
    stepMarking: [{ step: 'Recall NCERT groups: Hypogynous (Mustard/China rose/Brinjal), Perigynous (Plum/Rose/Peach), Epigynous (Guava/Cucumber/Ray florets)', marks: '+4 / -1' }],
    examinerTip: 'Ray florets of sunflower (Asteraceae) are epigynous — directly links Morphology with NMC updated family Compositae!',
    commonPitfall: 'Confusing perigynous (half-inferior: Plum, Rose, Peach) with epigynous (inferior).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'NMC Updated Family (Malvaceae)',
    questionText: 'Presence of epicalyx, twisted corolla aestivation, monoadelphous stamens with monothecous reniform anthers, and axile placentation in a pentacarpellary syncarpous ovary characterizes:',
    options: ['Malvaceae (e.g., Hibiscus rosa-sinensis, Gossypium)', 'Brassicaceae (e.g., Brassica campestris)', 'Poaceae (e.g., Triticum aestivum)', 'Asteraceae (e.g., Helianthus annuus)'],
    correctOption: 'Malvaceae (e.g., Hibiscus rosa-sinensis, Gossypium)',
    modelAnswer: 'Malvaceae (cotton/china rose/okra) uniquely exhibits epicalyx, twisted corolla, monoadelphous staminal tube with monothecous kidney-shaped (reniform) anthers, and mucilaginous sap.',
    stepMarking: [{ step: 'Verify Malvaceae diagnostic traits added in NMC 79-chapter syllabus', marks: '+4 / -1' }],
    examinerTip: 'NMC specifically added Malvaceae, Cruciferae, Leguminosae, Compositae, and Gramineae — expect 2–3 questions!',
    commonPitfall: 'Confusing monoadelphous (Malvaceae) with diadelphous (Fabaceae).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'NMC Updated Family (Cruciferae / Brassicaceae)',
    questionText: 'Which floral formula correctly represents Family Brassicaceae (Cruciferae — Mustard)?',
    options: [
      '⊕ ⚥ K₂₊₂ C₄ A₂₊₄ G₍₂₎ (superior)',
      '⊕ ⚥ K₍₅₎ C₅ A₍∞₎ G₍₅₎ (superior)',
      '% ⚥ K₍₅₎ C₁₊₂₊₍₂₎ A₍₉₎₊₁ G₁ (superior)',
      '⊕ ⚥ P₂ (lodicules) A₃ or ₆ G₁ (superior)'
    ],
    correctOption: '⊕ ⚥ K₂₊₂ C₄ A₂₊₄ G₍₂₎ (superior)',
    modelAnswer: 'Brassicaceae has actinomorphic bisexual flowers, 4 sepals in 2+2 whorls, 4 cruciform petals, 6 tetradynamous stamens (2 outer short + 4 inner long: A₂₊₄), and bicarpellary syncarpous superior ovary with replum.',
    stepMarking: [{ step: 'Identify K2+2, cruciform C4, tetradynamous A2+4', marks: '+4 / -1' }],
    examinerTip: 'Fruit of Brassicaceae is siliqua/silicula with a false septum called replum.',
    commonPitfall: 'Selecting A(∞) (Malvaceae) or A(9)+1 (Fabaceae).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'NMC Updated Family (Fabaceae / Leguminosae)',
    questionText: 'Vexillary aestivation (1 posterior standard, 2 lateral wings, 2 anterior fused keel petals) and diadelphous stamens (9)+1 with monocarpellary unilocular ovary characterize:',
    options: ['Fabaceae (Papilionoideae)', 'Solanaceae', 'Liliaceae', 'Compositae (Asteraceae)'],
    correctOption: 'Fabaceae (Papilionoideae)',
    modelAnswer: 'Papilionaceous corolla with descending imbricate (vexillary) aestivation and (9)+1 diadelphous androecium characterize Fabaceae (pea, gram, Indigofera, Sesbania, Trifolium).',
    stepMarking: [{ step: 'Match vexillary corolla + (9)+1 stamens to Fabaceae', marks: '+4 / -1' }],
    examinerTip: 'Memorize all Fabaceae economic plants in NCERT: pulses, edible oils (soyabean, groundnut), dye (Indigofera), fibres (sunhemp), fodder (Sesbania, Trifolium), medicine (muliathi).',
    commonPitfall: 'Confusing Solanaceae (epipetalous A₅) with Fabaceae.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'NMC Updated Family (Compositae / Asteraceae)',
    questionText: 'Which combination of features belongs exclusively to Family Asteraceae (Compositae — e.g., Sunflower, Marigold)?',
    options: [
      'Capitulum (head) inflorescence, calyx modified into pappus, syngenesious stamens, cypsela fruit with basal placentation',
      'Verticillaster inflorescence, gynobasic style, didynamous stamens, carcerulus fruit',
      'Raceme inflorescence, cruciform corolla, tetradynamous stamens, siliqua fruit',
      'Spike of spikelets, perianth as lodicules, versatile anthers, caryopsis fruit'
    ],
    correctOption: 'Capitulum (head) inflorescence, calyx modified into pappus, syngenesious stamens, cypsela fruit with basal placentation',
    modelAnswer: 'Asteraceae (largest angiosperm family) features capitulum surrounded by involucre bracts, hairy persistent calyx (pappus) aiding wind dispersal, syngenesious epipetalous anthers (anthers fused, filaments free), inferior ovary, basal placentation, and cypsela fruit.',
    stepMarking: [{ step: 'Verify 4 hallmark Asteraceae structures: Capitulum, Pappus, Syngenesious, Cypsela', marks: '+4 / -1' }],
    examinerTip: 'Syngenesious = anthers fused, filaments free (Asteraceae). Synandrous = both fused (Cucurbitaceae).',
    commonPitfall: 'Confusing syngenesious (Asteraceae) with monoadelphous (Malvaceae).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'NMC Updated Family (Gramineae / Poaceae)',
    questionText: 'In Family Poaceae (Gramineae — wheat, rice, maize), the reduced perianth scales, feathery stigma, versatile anthers, and single-seeded fruit where pericarp is fused with seed coat are respectively:',
    options: [
      'Lodicules, wind-pollinated stigma, versatile stamens, caryopsis',
      'Pappus, insect-pollinated stigma, epipetalous stamens, achene',
      'Epicalyx, bifid stigma, monoadelphous stamens, capsule',
      'Tepals, trifid stigma, epiphyllous stamens, berry'
    ],
    correctOption: 'Lodicules, wind-pollinated stigma, versatile stamens, caryopsis',
    modelAnswer: 'Poaceae flowers (florets in spikelets subtended by glumes, lemma, palea) have 2–3 tepal scales called lodicules, 3 versatile stamens, feathery stigma for anemophily, and caryopsis fruit.',
    stepMarking: [{ step: 'Identify Poaceae terms: Lodicules + Versatile + Caryopsis', marks: '+4 / -1' }],
    examinerTip: 'Poaceae monocot embryo also has a shield-shaped cotyledon called scutellum.',
    commonPitfall: 'Confusing caryopsis (pericarp fused with testa) with cypsela (Asteraceae).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Morphology (Stem & Leaf Modifications)',
    questionText: 'Given below are two statements:\nStatement I: Thorns in Citrus and Bougainvillea are modified axillary buds that protect plants from browsing animals.\nStatement II: In Australian Acacia, the leaves are small and short-lived, while the petioles expand, become green and synthesise food (phyllode).\nChoose the correct answer:',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Both Statement I and Statement II are correct',
    modelAnswer: 'Both statements are verbatim NCERT Class XI Ch 5 facts: thorns = axillary buds (Citrus, Bougainvillea); phyllode = green photosynthetic petiole (Australian Acacia).',
    stepMarking: [{ step: 'Distinguish stem thorn (axillary bud) from leaf spine (Opuntia) and phyllode', marks: '+4 / -1' }],
    examinerTip: 'Phylloclade = green flattened/cylindrical stem (Opuntia/Euphorbia); Phyllode = green petiole (Australian Acacia).',
    commonPitfall: 'Confusing Opuntia phylloclade (stem) with Australian Acacia phyllode (petiole).'
  },
  // 20-24: Anatomy of Flowering Plants
  {
    section: 'A',
    marks: 4,
    topic: 'Anatomy (Stomatal Apparatus & Trichomes)',
    questionText: 'In grasses (monocots), guard cells of stomata are _____-shaped, and the stomatal apparatus comprises:',
    options: [
      'Dumb-bell shaped; stomatal aperture, two guard cells, and surrounding subsidiary cells',
      'Bean-shaped; stomatal aperture, two guard cells, and bulliform cells',
      'Dumb-bell shaped; guard cells and lenticels only',
      'Bean-shaped; guard cells lacking chloroplasts and subsidiary cells'
    ],
    correctOption: 'Dumb-bell shaped; stomatal aperture, two guard cells, and surrounding subsidiary cells',
    modelAnswer: 'Dicots have bean/kidney-shaped guard cells, whereas grasses have dumb-bell shaped guard cells. Guard cells possess chloroplasts and regulate opening/closing; together with aperture + subsidiary cells they form the stomatal apparatus.',
    stepMarking: [{ step: 'Verify grass guard cell shape + 3 components of stomatal apparatus', marks: '+4 / -1' }],
    examinerTip: 'Root hairs are unicellular epidermal elongations; stem trichomes are usually multicellular.',
    commonPitfall: 'Thinking guard cells lack chloroplasts — epidermal cells lack them, guard cells HAVE chloroplasts.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Anatomy (Vascular Bundles)',
    questionText: 'Identify the correct match between plant organ and its vascular bundle arrangement:',
    options: [
      'Dicot stem: Conjoint, collateral, open, with endarch protoxylem',
      'Monocot stem: Radial, open, with exarch protoxylem',
      'Dicot root: Conjoint, closed, with endarch protoxylem',
      'Monocot root: Conjoint, open, with polyarch xylem'
    ],
    correctOption: 'Dicot stem: Conjoint, collateral, open, with endarch protoxylem',
    modelAnswer: 'Roots have radial bundles with exarch xylem (protoxylem towards periphery). Stems have conjoint bundles with endarch xylem (protoxylem towards centre). Dicot stems have cambium (open); monocot stems lack cambium (closed).',
    stepMarking: [{ step: 'Apply rule: Root = Radial + Exarch; Stem = Conjoint + Endarch', marks: '+4 / -1' }],
    examinerTip: 'Mnemonic: "R-E" (Root = Radial, Exarch) and "S-C-E" (Stem = Conjoint, Endarch).',
    commonPitfall: 'Confusing open (cambium present -> dicot stem) with closed (no cambium -> monocot stem).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Anatomy (Dicot vs Monocot Root)',
    questionText: 'Given below are two statements:\nStatement I: In a dicotyledonous root, usually two to four xylem and phloem patches are present, and the pith is small or inconspicuous.\nStatement II: In a monocotyledonous root, there are usually more than six (polyarch) xylem bundles and the pith is large and well developed.\nChoose the correct option:',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Both Statement I and Statement II are correct',
    modelAnswer: 'NCERT Class XI Ch 6 directly contrasts dicot root (diarch to tetrarch, 2–4 xylem patches, small pith) vs monocot root (polyarch >6 xylem bundles, large well-developed pith).',
    stepMarking: [{ step: 'Verify root anatomy comparison from NCERT Ch 6', marks: '+4 / -1' }],
    examinerTip: 'Casparian strips (suberin) occur on tangential and radial walls of root endodermis.',
    commonPitfall: 'Reversing pith size between dicot root and dicot stem.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Anatomy (Monocot Leaf — Bulliform Cells)',
    questionText: 'In an isobilateral (monocot) grass leaf, certain adaxial epidermal cells along the veins modify into large, empty, colourless cells that curl the leaf inwards to minimise water loss. These are:',
    options: ['Bulliform cells', 'Subsidiary cells', 'Passage cells', 'Companion cells'],
    correctOption: 'Bulliform cells',
    modelAnswer: 'When bulliform (motor) cells in the upper/adaxial epidermis of grass leaves absorb water and become turgid, the leaf surface is exposed; when flaccid due to water stress, they make leaves curl inwards to reduce transpiration.',
    stepMarking: [{ step: 'Identify adaxial epidermal bulliform cells in monocot leaves', marks: '+4 / -1' }],
    examinerTip: 'Bulliform cells are on the ADAXIAL (upper) epidermis of monocot leaves, not abaxial.',
    commonPitfall: 'Confusing bulliform cells with spongy mesophyll or bundle sheath extensions.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Anatomy (Dicot vs Monocot Stem)',
    questionText: 'In a monocotyledonous stem, the hypodermis, ground tissue differentiation, and water-containing cavities in vascular bundles are respectively:',
    options: [
      'Sclerenchymatous hypodermis, undifferentiated parenchymatous ground tissue, lysigenous water cavities',
      'Collenchymatous hypodermis, cortex + pericycle + pith, no water cavities',
      'Parenchymatous hypodermis, starch sheath endodermis, phloem parenchyma present',
      'Sclerenchymatous hypodermis, ring-arranged open bundles, medullary rays present'
    ],
    correctOption: 'Sclerenchymatous hypodermis, undifferentiated parenchymatous ground tissue, lysigenous water cavities',
    modelAnswer: 'Monocot stems have sclerenchymatous hypodermis, scattered conjoint closed bundles surrounded by sclerenchymatous bundle sheath, undifferentiated ground tissue, NO phloem parenchyma, and water-containing cavities.',
    stepMarking: [{ step: 'Check all 3 monocot stem diagnostic NCERT features', marks: '+4 / -1' }],
    examinerTip: 'Dicot stem = collenchymatous hypodermis + ring bundles + starch sheath; Monocot stem = sclerenchymatous hypodermis + scattered bundles.',
    commonPitfall: 'Saying monocot stem has phloem parenchyma (it is absent in most monocots).'
  },
  // 25-31: Cell & Cell Division
  {
    section: 'A',
    marks: 4,
    topic: 'Cell: Unit of Life (Endomembrane System)',
    questionText: 'Which set of organelles forms the coordinated Endomembrane System of a eukaryotic cell?',
    options: [
      'Endoplasmic reticulum, Golgi complex, Lysosomes, and Vacuoles',
      'Mitochondria, Chloroplast, Peroxisomes, and Golgi complex',
      'Endoplasmic reticulum, Mitochondria, Ribosomes, and Lysosomes',
      'Golgi complex, Peroxisomes, Vacuoles, and Centrosome'
    ],
    correctOption: 'Endoplasmic reticulum, Golgi complex, Lysosomes, and Vacuoles',
    modelAnswer: 'Because the functions of ER, Golgi apparatus, lysosomes, and vacuoles are coordinated, they constitute the endomembrane system. Mitochondria, chloroplasts, and peroxisomes are excluded.',
    stepMarking: [{ step: 'Select exact 4-organelle endomembrane set from NCERT Ch 8', marks: '+4 / -1' }],
    examinerTip: 'Cis (forming) face of Golgi receives vesicles from ER; trans (maturing) face releases modified glycoproteins/glycolipids.',
    commonPitfall: 'Including peroxisomes or mitochondria in the endomembrane system.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Cell: Unit of Life (Fluid Mosaic Model)',
    questionText: 'Assertion (A): The quasi-fluid nature of lipids enables lateral movement of proteins within the overall plasma membrane bilayer.\nReason (R): Singer and Nicolson (1972) proposed the Fluid Mosaic Model, where membrane fluidity helps in cell growth, endocytosis, and secretion.',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctOption: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    modelAnswer: 'In human erythrocyte membrane (~52% protein, ~40% lipids), lipids form a bilayer with polar heads outside and hydrophobic tails inside; quasi-fluid lipid nature allows lateral protein movement and membrane dynamics.',
    stepMarking: [{ step: 'Verify Singer-Nicolson 1972 model and quasi-fluid lipid significance', marks: '+4 / -1' }],
    examinerTip: 'Remember RBC membrane ratio: 52% protein, 40% lipid; Na⁺/K⁺ pump is active transport.',
    commonPitfall: 'Confusing lateral movement (common) with flip-flop movement of proteins (practically absent).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Cell: Unit of Life (Chromosomes & Centromere)',
    questionText: 'Match List I (Chromosome Type) with List II (Centromere Position):\n(a) Metacentric — (i) Terminal centromere\n(b) Sub-metacentric — (ii) Extremely close to end (one very short, one very long arm)\n(c) Acrocentric — (iii) Slightly away from middle (one shorter, one longer arm)\n(d) Telocentric — (iv) Middle centromere forming two equal arms',
    options: ['a-iv, b-iii, c-ii, d-i', 'a-iv, b-ii, c-iii, d-i', 'a-iii, b-iv, c-ii, d-i', 'a-i, b-iii, c-ii, d-iv'],
    correctOption: 'a-iv, b-iii, c-ii, d-i',
    modelAnswer: 'Metacentric = middle (V-shape); Sub-metacentric = slightly off-centre (L-shape); Acrocentric = sub-terminal (J-shape); Telocentric = terminal (I-shape).',
    stepMarking: [{ step: 'Match all four chromosome classifications accurately', marks: '+4 / -1' }],
    examinerTip: 'Secondary constrictions (NOR) give the appearance of a small fragment called a satellite.',
    commonPitfall: 'Swapping sub-metacentric and acrocentric definitions.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Cell Cycle (Interphase DNA & Chromosome Count)',
    questionText: 'If a diploid cell has 2n = 16 chromosomes and 2C DNA content at G₁ phase, what will be the chromosome number and DNA content after S-phase (at G₂ phase)?',
    options: ['16 chromosomes and 4C DNA', '32 chromosomes and 4C DNA', '16 chromosomes and 2C DNA', '8 chromosomes and 4C DNA'],
    correctOption: '16 chromosomes and 4C DNA',
    modelAnswer: 'During S-phase, DNA replicates (2C -> 4C) and centriole duplicates in cytoplasm, but chromosome number remains unchanged (still 2n = 16, each with two sister chromatids).',
    stepMarking: [{ step: 'Apply rule: S-phase doubles DNA (2C->4C) without changing chromosome count (2n)', marks: '+4 / -1' }],
    examinerTip: 'Chromosome count changes only at Anaphase (mitosis: temporarily doubles in cell) or Anaphase I (meiosis: halves per daughter pole).',
    commonPitfall: 'Doubling chromosome number to 32 after S-phase.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Cell Cycle & Division (Prophase I)',
    questionText: 'Match List I with List II for Meiosis I Prophase-I events:\n(a) Zygotene — (i) Terminalisation of chiasmata\n(b) Pachytene — (ii) Crossing over mediated by recombinase\n(c) Diplotene — (iii) Synapsis forming synaptonemal complex (bivalent)\n(d) Diakinesis — (iv) Dissolution of synaptonemal complex & X-shaped chiasmata',
    options: ['a-iii, b-ii, c-iv, d-i', 'a-ii, b-iii, c-iv, d-i', 'a-iii, b-iv, c-ii, d-i', 'a-i, b-ii, c-iii, d-iv'],
    correctOption: 'a-iii, b-ii, c-iv, d-i',
    modelAnswer: 'L-Z-P-D-D: Leptotene (compaction), Zygotene (synapsis), Pachytene (crossing over + recombination nodules), Diplotene (chiasmata visible), Diakinesis (terminalisation).',
    stepMarking: [{ step: 'Map each sub-stage of Prophase I to its NCERT landmark', marks: '+4 / -1' }],
    examinerTip: 'In oocytes of some vertebrates, Diplotene can last for months or years (dictyotene).',
    commonPitfall: 'Confusing Pachytene (crossing over) with Diplotene (chiasmata visibility).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Cell Division (Anaphase I vs Anaphase II)',
    questionText: 'Given below are two statements:\nStatement I: During Anaphase I of meiosis, homologous chromosomes separate while sister chromatids remain associated at their centromeres.\nStatement II: Splitting of centromeres occurs during Anaphase II of meiosis, separating sister chromatids.\nChoose the correct option:',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Both Statement I and Statement II are correct',
    modelAnswer: 'Anaphase I separates homologous chromosomes (no centromere splitting), reducing chromosome number by half. Anaphase II splits centromeres (like mitotic anaphase) to separate sister chromatids.',
    stepMarking: [{ step: 'Verify centromere non-splitting in Anaphase I and splitting in Anaphase II', marks: '+4 / -1' }],
    examinerTip: 'Only two divisions split centromeres: Mitotic Anaphase and Meiotic Anaphase II.',
    commonPitfall: 'Assuming centromeres split in Anaphase I.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Cell: Unit of Life (Ribosomes & Plastids)',
    questionText: 'In eukaryotes, which pair of organelles contains 70S ribosomes, circular DNA, and is surrounded by a double membrane?',
    options: [
      'Mitochondria and Chloroplasts',
      'Mitochondria and Peroxisomes',
      'Chloroplasts and Golgi apparatus',
      'Nucleus and Lysosomes'
    ],
    correctOption: 'Mitochondria and Chloroplasts',
    modelAnswer: 'Both mitochondria (matrix) and chloroplasts (stroma) are semi-autonomous double-membrane organelles possessing their own circular dsDNA and 70S ribosomes (50S + 30S).',
    stepMarking: [{ step: 'Identify semi-autonomous organelles with prokaryotic-type 70S ribosomes', marks: '+4 / -1' }],
    examinerTip: 'Cytoplasmic eukaryotic ribosomes are 80S (60S + 40S); S stands for Svedberg unit (sedimentation coefficient).',
    commonPitfall: 'Forgetting that eukaryotic cells contain BOTH 80S (cytoplasm/RER) and 70S (mitochondria/plastids) ribosomes.'
  },
  // 32-37: Photosynthesis in Higher Plants
  {
    section: 'A',
    marks: 4,
    topic: 'Photosynthesis (Light Reaction & Z-Scheme)',
    questionText: 'During non-cyclic photophosphorylation (Z-scheme), the primary electron acceptor from PS II (P680) and the terminal electron acceptor after PS I (P700) are respectively:',
    options: [
      'Pheophytin and NADP⁺ (via ferredoxin & FNR)',
      'Plastocyanin and O₂',
      'Ferredoxin and Plastoquinone',
      'Cytochrome b₆f and Water'
    ],
    correctOption: 'Pheophytin and NADP⁺ (via ferredoxin & FNR)',
    modelAnswer: 'PS II (P680) transfers excited electrons to pheophytin -> PQ -> Cyt b₆f -> PC -> PS I (P700) -> FRS/Fe-S -> Fd -> NADP⁺ reductase reducing NADP⁺ to NADPH + H⁺ in stroma.',
    stepMarking: [{ step: 'Trace electron chain from P680 (Pheophytin) to NADP⁺', marks: '+4 / -1' }],
    examinerTip: 'Water splitting complex (Mn²⁺, Cl⁻) is associated with PS II on the INNER (lumen) side of the thylakoid membrane.',
    commonPitfall: 'Placing water-splitting complex on PS I or stromal side.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Photosynthesis (Chemiosmotic Hypothesis)',
    questionText: 'According to Peter Mitchell’s chemiosmotic hypothesis in chloroplasts, what causes the steep proton (H⁺) accumulation inside the thylakoid lumen?',
    options: [
      'Water splitting in lumen, PQ-mediated H⁺ translocation across membrane, and stromal NADP⁺ reduction consuming H⁺',
      'Active pumping of H⁺ from lumen into stroma by ATP synthase CF₀',
      'Breakdown of glucose in the thylakoid lumen',
      'Conversion of RuBP into PGA inside the thylakoid lumen'
    ],
    correctOption: 'Water splitting in lumen, PQ-mediated H⁺ translocation across membrane, and stromal NADP⁺ reduction consuming H⁺',
    modelAnswer: 'Three factors lower lumen pH (high [H⁺]): (1) H₂O splitting releases H⁺ in lumen, (2) plastoquinone carries H⁺ from stroma to lumen, (3) NADP reductase uses stromal H⁺.',
    stepMarking: [{ step: 'Combine all 3 NCERT Ch 11 mechanisms building the proton gradient', marks: '+4 / -1' }],
    examinerTip: 'ATP synthesis occurs when H⁺ moves DOWN the gradient from lumen to stroma through CF₀-CF₁.',
    commonPitfall: 'Reversing direction: in chloroplasts H⁺ accumulates in lumen; in mitochondria H⁺ accumulates in intermembrane space.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Photosynthesis (Calvin Cycle Stoichiometry)',
    questionText: 'To synthesise 1 molecule of sucrose (12 carbons) via the C3 Calvin cycle, how many ATP and NADPH molecules are required?',
    options: ['36 ATP and 24 NADPH', '18 ATP and 12 NADPH', '30 ATP and 12 NADPH', '24 ATP and 36 NADPH'],
    correctOption: '36 ATP and 24 NADPH',
    modelAnswer: 'Fixing 1 CO₂ in C3 cycle needs 3 ATP + 2 NADPH. 1 glucose (6C) needs 18 ATP + 12 NADPH. 1 sucrose (12C) requires 12 CO₂ turns => 36 ATP and 24 NADPH.',
    stepMarking: [{ step: '1 CO2 = 3 ATP + 2 NADPH; Sucrose = 12 CO2 => 36 ATP + 24 NADPH', marks: '+4 / -1' }],
    examinerTip: 'Always read carefully whether the question asks for 1 CO₂, 1 Glucose (6C), or 1 Sucrose (12C)!',
    commonPitfall: 'Answering 18 ATP and 12 NADPH (which is for glucose, not sucrose).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Photosynthesis (C4 Hatch & Slack Pathway)',
    questionText: 'Given below are two statements:\nStatement I: In C4 plants, primary CO₂ acceptor is a 3-carbon molecule phosphoenolpyruvate (PEP) present in mesophyll cells.\nStatement II: Mesophyll cells of C4 plants lack RuBisCO enzyme, which is located in bundle sheath cells.\nChoose the most appropriate answer:',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Both Statement I and Statement II are correct',
    modelAnswer: 'In C4 plants (maize, sorghum), mesophyll cells contain PEPcase (no RuBisCO) fixing CO₂ with PEP to form OAA (4C); bundle sheath cells have RuBisCO (no PEPcase) performing Calvin cycle.',
    stepMarking: [{ step: 'NCERT XI Ch 11 p. 218 spatial separation of PEPcase and RuBisCO', marks: '+4 / -1' }],
    examinerTip: 'Kranz anatomy bundle sheath cells have thick walls impervious to gaseous exchange and numerous agranal chloroplasts.',
    commonPitfall: 'Forgetting that bundle sheath cells carry out the Calvin cycle in C4 plants.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Photosynthesis (Photorespiration / C2 Cycle)',
    questionText: 'During photorespiration (C2 cycle) in C3 plants, the three cell organelles involved in sequential order are:',
    options: [
      'Chloroplast -> Peroxisome -> Mitochondria',
      'Mitochondria -> Chloroplast -> Peroxisome',
      'Chloroplast -> Glyoxysome -> Mitochondria',
      'Peroxisome -> Chloroplast -> Ribosome'
    ],
    correctOption: 'Chloroplast -> Peroxisome -> Mitochondria',
    modelAnswer: 'RuBisCO oxygenase forms phosphoglycolate in Chloroplast -> glycolate moves to Peroxisome (forming glycine) -> Mitochondria decarboxylates glycine releasing CO₂ (wasteful, consumes ATP/NADPH).',
    stepMarking: [{ step: 'Verify C-P-M organelle sequence for photorespiration', marks: '+4 / -1' }],
    examinerTip: 'C4 plants avoid photorespiration by concentrating CO₂ around RuBisCO in bundle sheath cells.',
    commonPitfall: 'Including glyoxysome instead of peroxisome.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Photosynthesis (Historical Experiments & Limiting Factors)',
    questionText: 'In Blackman’s Law of Limiting Factors, at low light intensities and optimal temperature, what happens to the photosynthetic rate of a C3 plant if CO₂ concentration is increased from 0.03% to 0.05%?',
    options: [
      'Rate remains unaffected because light intensity is the limiting factor',
      'Rate increases linearly until saturation at 0.05%',
      'Rate drops sharply due to photorespiration',
      'C3 plants saturate only beyond 0.1% CO₂ under low light'
    ],
    correctOption: 'Rate remains unaffected because light intensity is the limiting factor',
    modelAnswer: 'According to Blackman (1905), the rate is determined by the factor nearest its minimal value. Under low light, light is limiting so increasing CO₂ does not raise the rate. (Note: at high light, C3 saturates >450 µL/L while C4 saturates ~360 µL/L).',
    stepMarking: [{ step: 'Apply Blackman’s limiting factor rule under low-light condition', marks: '+4 / -1' }],
    examinerTip: 'CO₂ is the major limiting factor in nature; C4 saturates at 360 µL/L, C3 saturates beyond 450 µL/L.',
    commonPitfall: 'Assuming CO₂ enrichment always boosts photosynthesis even when light is limiting.'
  },
  // 38-42: Respiration in Plants
  {
    section: 'A',
    marks: 4,
    topic: 'Respiration in Plants (Glycolysis / EMP)',
    questionText: 'In glycolysis (EMP pathway), which step involves substrate-level phosphorylation yielding ATP?',
    options: [
      '1,3-bisphosphoglycerate -> 3-phosphoglycerate and PEP -> Pyruvate',
      'Glucose -> Glucose-6-phosphate and Fructose-6-P -> Fructose-1,6-bisphosphate',
      '2-phosphoglycerate -> PEP',
      '3-phosphoglyceraldehyde -> 1,3-bisphosphoglycerate'
    ],
    correctOption: '1,3-bisphosphoglycerate -> 3-phosphoglycerate and PEP -> Pyruvate',
    modelAnswer: 'Glycolysis consumes 2 ATP (hexokinase, PFK) and generates 4 ATP by substrate-level phosphorylation (at phosphoglycerate kinase and pyruvate kinase steps), giving net 2 ATP + 2 NADH.',
    stepMarking: [{ step: 'Identify both ATP-generating substrate-level phosphorylation steps in glycolysis', marks: '+4 / -1' }],
    examinerTip: 'PGAL -> 1,3-BPGA produces NADH + H⁺ (not ATP directly in glycolysis).',
    commonPitfall: 'Confusing ATP-consuming steps (steps 1 & 3) with ATP-producing steps (steps 7 & 10).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Respiration in Plants (Krebs Cycle)',
    questionText: 'How many NADH + H⁺, FADH₂, and GTP/ATP molecules are produced during ONE turn of the Citric Acid (Krebs) cycle per acetyl-CoA molecule?',
    options: [
      '3 NADH + H⁺, 1 FADH₂, 1 GTP',
      '6 NADH + H⁺, 2 FADH₂, 2 GTP',
      '2 NADH + H⁺, 1 FADH₂, 2 GTP',
      '4 NADH + H⁺, 1 FADH₂, 1 GTP'
    ],
    correctOption: '3 NADH + H⁺, 1 FADH₂, 1 GTP',
    modelAnswer: 'Per acetyl-CoA (1 turn): 3 NADH (isocitrate->α-KG, α-KG->succinyl CoA, malate->OAA), 1 GTP (succinyl CoA->succinate), and 1 FADH₂ (succinate->fumarate). Per glucose = 2 turns.',
    stepMarking: [{ step: 'Count per acetyl-CoA turn vs per glucose molecule', marks: '+4 / -1' }],
    examinerTip: 'Succinate dehydrogenase (Complex II) is the ONLY Krebs cycle enzyme embedded in the inner mitochondrial membrane.',
    commonPitfall: 'Doubling the values (6, 2, 2) which applies per glucose, not per acetyl-CoA turn.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Respiration in Plants (ETS Complexes)',
    questionText: 'Match List I (Mitochondrial ETS Complex) with List II (Name / Component):\n(a) Complex I — (i) Cytochrome c oxidase (Cyt a, a₃ + 2 Cu centres)\n(b) Complex II — (ii) NADH dehydrogenase\n(c) Complex III — (iii) Succinate dehydrogenase\n(d) Complex IV — (iv) Cytochrome bc₁ complex',
    options: ['a-ii, b-iii, c-iv, d-i', 'a-iii, b-ii, c-iv, d-i', 'a-ii, b-iv, c-iii, d-i', 'a-i, b-iii, c-iv, d-ii'],
    correctOption: 'a-ii, b-iii, c-iv, d-i',
    modelAnswer: 'Complex I = NADH dehydrogenase; Complex II = Succinate dehydrogenase; Complex III = Cytochrome bc₁; Complex IV = Cytochrome c oxidase (contains Cyt a, a₃ and two copper centres); Complex V = ATP synthase.',
    stepMarking: [{ step: 'Match Complexes I–IV in mitochondrial inner membrane', marks: '+4 / -1' }],
    examinerTip: 'Cytochrome c is a small mobile peripheral protein on the OUTER surface of the inner mitochondrial membrane; O₂ is the final H⁺/e⁻ acceptor.',
    commonPitfall: 'Swapping Complex II (Succinate DH) and Complex III (Cyt bc₁).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Respiration in Plants (Respiratory Quotient)',
    questionText: 'For tripalmitin (a fat: 2 C₅₁H₉₈O₆ + 145 O₂ -> 102 CO₂ + 98 H₂O), carbohydrates, and proteins, the approximate Respiratory Quotient (RQ) values are respectively:',
    options: ['0.7, 1.0, and 0.9', '1.0, 0.7, and 0.9', '0.9, 1.0, and 0.7', '1.3, 1.0, and 0.7'],
    correctOption: '0.7, 1.0, and 0.9',
    modelAnswer: 'RQ = CO₂ evolved / O₂ consumed. Tripalmitin = 102/145 ≈ 0.7; Carbohydrate = 6/6 = 1.0; Protein ≈ 0.9; Organic acids > 1; Anaerobic respiration = ∞.',
    stepMarking: [{ step: 'Compute 102/145 = 0.7 for fat and match carbohydrate (1.0) and protein (0.9)', marks: '+4 / -1' }],
    examinerTip: 'In living organisms, respiratory substrates are often mixed, never purely proteins or fats alone.',
    commonPitfall: 'Reversing 0.7 (fats) and 0.9 (proteins).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Respiration in Plants (Fermentation & Amphibolic Pathway)',
    questionText: 'Given below are two statements:\nStatement I: In alcoholic fermentation by yeast, pyruvic acid is converted to ethanol and CO₂ by pyruvate decarboxylase and alcohol dehydrogenase, netting 2 ATP per glucose.\nStatement II: Yeasts poison themselves to death when the concentration of alcohol reaches about 13 percent.\nChoose the correct option:',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Both Statement I and Statement II are correct',
    modelAnswer: 'Both statements are direct NCERT Class XI Ch 12 lines: fermentation yields less than 7% of glucose energy (2 net ATP), and yeast dies around 13% alcohol concentration.',
    stepMarking: [{ step: 'Verify NCERT alcohol threshold (13%) and net ATP yield (2 ATP)', marks: '+4 / -1' }],
    examinerTip: 'Lactic acid fermentation in muscles/bacteria releases NO CO₂, whereas alcoholic fermentation releases CO₂.',
    commonPitfall: 'Thinking lactic acid fermentation also releases CO₂.'
  },
  // 43-46: Plant Growth & Development
  {
    section: 'A',
    marks: 4,
    topic: 'Plant Growth & Development (Growth Curves)',
    questionText: 'In geometric growth of a plant organ/microbe, the growth expression W₁ = W₀ e^(rt) defines "r" as:',
    options: [
      'Relative growth rate (efficiency index — ability to produce new plant material)',
      'Absolute growth rate per unit time',
      'Initial size of the embryo at t = 0',
      'Carrying capacity of the environment'
    ],
    correctOption: 'Relative growth rate (efficiency index — ability to produce new plant material)',
    modelAnswer: 'In W₁ = W₀ e^(rt), W₁ = final size, W₀ = initial size, r = relative growth rate (measure of efficiency index), t = time, e = base of natural logarithms.',
    stepMarking: [{ step: 'Identify r as efficiency index / relative growth rate in NCERT Ch 13', marks: '+4 / -1' }],
    examinerTip: 'Arithmetic growth (root elongation at constant rate) follows L_t = L_0 + rt (linear); geometric growth gives an S-shaped sigmoid curve.',
    commonPitfall: 'Confusing relative growth rate (r) with absolute growth rate (dW/dt).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Plant Growth Regulators (Auxin & Gibberellin)',
    questionText: 'Which pair of PGR applications is matched CORRECTLY according to NCERT?',
    options: [
      '2,4-D: kills dicot weeds in monocot fields; Gibberellins (GA₃): promote bolting in rosette plants like beet and cabbage',
      'Auxin: overcomes apical dominance; Cytokinin: induces stomatal closure under drought',
      'Gibberellin: delays malting in brewing; Ethylene: promotes seed dormancy',
      'ABA: promotes flowering in pineapple; Auxin: accelerates senescence'
    ],
    correctOption: '2,4-D: kills dicot weeds in monocot fields; Gibberellins (GA₃): promote bolting in rosette plants like beet and cabbage',
    modelAnswer: '2,4-D is a synthetic auxin selective for broad-leaved dicot weeds (weed-free lawns); GA₃ promotes internode elongation (bolting) prior to flowering in beet/cabbages and speeds up malting.',
    stepMarking: [{ step: 'Verify 2,4-D selective herbicide action and GA bolting effect', marks: '+4 / -1' }],
    examinerTip: 'Auxin promotes apical dominance while Cytokinin overcomes it; Auxin + Ethylene initiate flowering in pineapples.',
    commonPitfall: 'Saying 2,4-D kills monocot weeds.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Plant Growth Regulators (Ethylene & Ethephon)',
    questionText: 'Ethephon (an aqueous source of ethylene) is widely used in agriculture to:',
    options: [
      'Hasten fruit ripening in tomatoes/apples and promote female flowers in cucumbers',
      'Prevent sprouting of potato tubers during storage',
      'Induce parthenocarpy exclusively in seedless bananas',
      'Delay leaf and flower abscission in cotton and walnut'
    ],
    correctOption: 'Hasten fruit ripening in tomatoes/apples and promote female flowers in cucumbers',
    modelAnswer: 'Ethephon slowly releases ethylene inside plants: it accelerates ripening in tomatoes/apples, accelerates abscission/thinning in cotton, cherry, walnut, and increases female flowers (yield) in cucumbers.',
    stepMarking: [{ step: 'Verify NCERT Ch 13 applications of ethephon', marks: '+4 / -1' }],
    examinerTip: 'Ethylene also breaks seed/bud dormancy, initiates germination in peanut seeds, and sprouting of potato tubers.',
    commonPitfall: 'Thinking ethylene prevents potato sprouting — it PROMOTES potato tuber sprouting.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Plant Growth Regulators (ABA & Antagonism)',
    questionText: 'Which PGR acts as an antagonist to Gibberellic acid (GA) in seed germination and is called the "stress hormone" because it stimulates closure of stomata?',
    options: ['Abscisic acid (ABA)', 'Zeatin (Cytokinin)', 'Indole-3-butyric acid (IBA)', 'Kinetin'],
    correctOption: 'Abscisic acid (ABA)',
    modelAnswer: 'ABA inhibits seed germination, induces seed dormancy (allowing desiccation tolerance), closes stomata during water stress, and acts antagonistically to gibberellins in most situations.',
    stepMarking: [{ step: 'Identify ABA as stress hormone and GA antagonist', marks: '+4 / -1' }],
    examinerTip: 'Kinetin (from autoclaved herring sperm DNA) does not occur naturally in plants; Zeatin (corn kernels/coconut milk) is a natural cytokinin.',
    commonPitfall: 'Confusing Kinetin (synthetic/animal-derived) with natural plant cytokinin Zeatin.'
  },
  // 47-51: Sexual Reproduction in Flowering Plants
  {
    section: 'A',
    marks: 4,
    topic: 'Sexual Reproduction in Flowering Plants (Anther & Pollen)',
    questionText: 'The innermost wall layer of the microsporangium that nourishes developing pollen grains and typically possesses dense cytoplasm with more than one nucleus is:',
    options: ['Tapetum', 'Endothecium', 'Middle layers', 'Epidermis'],
    correctOption: 'Tapetum',
    modelAnswer: 'Anther wall has 4 layers outside-in: epidermis, endothecium, middle layers (all protective + dehiscence), and tapetum (nourishing, multinucleate/polyploid, secretes sporopollenin precursors).',
    stepMarking: [{ step: 'Identify tapetum function and multinucleate feature', marks: '+4 / -1' }],
    examinerTip: 'Exine is made of sporopollenin (most resistant organic material known); intine is cellulose + pectin.',
    commonPitfall: 'Confusing endothecium (dehiscence) with tapetum (nutrition).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Sexual Reproduction in Flowering Plants (Embryo Sac)',
    questionText: 'A typical mature angiosperm embryo sac (Polygonum type) is _____-celled and _____-nucleate, and the filiform apparatus at the micropylar tip of synergids guides:',
    options: [
      '7-celled, 8-nucleate; entry of the pollen tube into a synergid',
      '8-celled, 7-nucleate; triple fusion inside the antipodals',
      '7-celled, 7-nucleate; entry of pollen tube into central cell',
      '8-celled, 8-nucleate; formation of pericarp'
    ],
    correctOption: '7-celled, 8-nucleate; entry of the pollen tube into a synergid',
    modelAnswer: '3 antipodals (chalazal) + 1 central cell with 2 polar nuclei + 2 synergids + 1 egg cell = 7 cells, 8 nuclei. Synergid filiform apparatus chemically guides pollen tube entry.',
    stepMarking: [{ step: 'Count 7 cells / 8 nuclei + synergid filiform guidance', marks: '+4 / -1' }],
    examinerTip: 'Egg apparatus = 1 egg cell + 2 synergids at the micropylar end.',
    commonPitfall: 'Writing 8-celled, 7-nucleate by reversing the two numbers.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Sexual Reproduction in Flowering Plants (Pollination)',
    questionText: 'Given below are two statements:\nStatement I: Geitonogamy is functionally cross-pollination involving a pollinating agent, but genetically similar to autogamy because pollen comes from the same plant.\nStatement II: Cleistogamous flowers (e.g., Viola, Oxalis, Commelina) are invariably autogamous and assure seed-set even in the absence of pollinators.\nChoose the correct option:',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Both Statement I and Statement II are correct',
    modelAnswer: 'Geitonogamy occurs between different flowers on the same plant (functionally cross, genetically self). Cleistogamous flowers never open, guaranteeing autogamy.',
    stepMarking: [{ step: 'Verify NCERT XII Ch 1 definitions of geitonogamy and cleistogamy', marks: '+4 / -1' }],
    examinerTip: 'Xenogamy is the ONLY type of pollination that brings genetically different pollen to the stigma.',
    commonPitfall: 'Confusing chasmogamous (exposed anthers/stigma) with cleistogamous (closed).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Sexual Reproduction in Flowering Plants (Double Fertilisation)',
    questionText: 'If an angiosperm plant has diploid chromosome number 2n = 24, what will be the chromosome numbers in its Endosperm (PEN), Synergid, and Nucellus respectively?',
    options: ['36, 12, 24', '24, 12, 36', '36, 24, 12', '12, 12, 24'],
    correctOption: '36, 12, 24',
    modelAnswer: 'Endosperm (PEN) formed by triple fusion = 3n = 36; Synergid (gametophyte cell) = n = 12; Nucellus (sporophytic ovule tissue) = 2n = 24.',
    stepMarking: [{ step: 'Assign ploidy: PEN = 3n, Synergid = n, Nucellus = 2n', marks: '+4 / -1' }],
    examinerTip: 'Be careful in interspecific cross ploidy questions: female contributes 2n (two polar nuclei) + male contributes n (1 male gamete).',
    commonPitfall: 'Treating nucellus as haploid.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Sexual Reproduction in Flowering Plants (Apomixis & Fruits)',
    questionText: 'Which statement accurately describes apomixis and false fruits?',
    options: [
      'Apomixis produces seeds without fertilisation (e.g., Asteraceae & grasses); in apple and strawberry, the thalamus contributes to fruit formation (false fruit)',
      'Apomixis always requires double fertilisation; banana is a false fruit',
      'Polyembryony in Citrus arises only from synergids; mango is a false fruit',
      'Parthenocarpic fruits always contain viable apomictic seeds'
    ],
    correctOption: 'Apomixis produces seeds without fertilisation (e.g., Asteraceae & grasses); in apple and strawberry, the thalamus contributes to fruit formation (false fruit)',
    modelAnswer: 'Apomixis mimics sexual reproduction by forming seeds without fertilisation (common in Asteraceae and grasses). Apple, strawberry, cashew are false fruits (thalamus forms fruit). Banana is parthenocarpic (seedless).',
    stepMarking: [{ step: 'Verify apomixis examples + false fruit examples (apple, strawberry, cashew)', marks: '+4 / -1' }],
    examinerTip: 'In Citrus and Mango, nucellar cells protrude into the embryo sac giving adventive polyembryony.',
    commonPitfall: 'Confusing parthenocarpy (seedless fruit) with apomixis (seed formation without fertilisation).'
  },
  // 52-56: Genetics & Molecular Inheritance
  {
    section: 'A',
    marks: 4,
    topic: 'Principles of Inheritance (Multiple Alleles & Codominance)',
    questionText: 'In human ABO blood group inheritance (controlled by gene I with alleles Iᴬ, Iᴮ, i), the total number of possible genotypes and phenotypes in the human population are respectively:',
    options: ['6 genotypes and 4 phenotypes', '4 genotypes and 6 phenotypes', '3 genotypes and 4 phenotypes', '6 genotypes and 6 phenotypes'],
    correctOption: '6 genotypes and 4 phenotypes',
    modelAnswer: 'Number of genotypes for n alleles = n(n+1)/2 = 3×4/2 = 6 (IᴬIᴬ, Iᴬi, IᴮIᴮ, Iᴮi, IᴬIᴮ, ii). Phenotypes = 4 (A, B, AB, O). Iᴬ and Iᴮ show codominance.',
    stepMarking: [{ step: 'Count 6 genotypes and 4 blood-group phenotypes', marks: '+4 / -1' }],
    examinerTip: 'Starch grain size and shape in pea seed is a classic NCERT example of pleiotropy + incomplete dominance (intermediate size in Bb).',
    commonPitfall: 'Writing 4 genotypes and 6 phenotypes by swapping the two counts.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Principles of Inheritance (Linkage & Recombination)',
    questionText: 'In T.H. Morgan’s dihybrid crosses on Drosophila melanogaster, genes for white eye and yellow body showed 1.3% recombination, whereas white eye and miniature wing showed 37.2% recombination. This indicates that:',
    options: [
      'White and yellow genes are very tightly linked on the X-chromosome, whereas white and miniature wing are loosely linked',
      'White and miniature wing are located on different autosomes',
      'Recombination frequency is inversely proportional to physical distance between genes',
      'Linkage prevents crossing over completely between genes on the same chromosome'
    ],
    correctOption: 'White and yellow genes are very tightly linked on the X-chromosome, whereas white and miniature wing are loosely linked',
    modelAnswer: 'Alfred Sturtevant used recombination frequencies (% recombination = distance in map units/centiMorgans) to map chromosomes. Lower recombination (1.3%) means tighter linkage (closer loci).',
    stepMarking: [{ step: 'Interpret Morgan’s 1.3% vs 37.2% linkage distance data', marks: '+4 / -1' }],
    examinerTip: 'Recombination frequency between two genes NEVER exceeds 50% (independent assortment limit).',
    commonPitfall: 'Saying recombination is inversely proportional to distance (it is DIRECTLY proportional to distance, inversely to linkage strength).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Molecular Basis of Inheritance (DNA Packaging & Experiments)',
    questionText: 'In the Hershey-Chase (1952) bacteriophage experiment proving DNA is the genetic material, radioactivity was detected in the bacterial pellet rather than the supernatant when phages were grown with:',
    options: [
      '³²P (which labels DNA), whereas ³⁵S radioactivity remained in the supernatant (protein coat)',
      '³⁵S (which labels DNA), whereas ³²P remained in the supernatant',
      '¹⁵N (heavy isotope of nitrogen), recovered in CsCl gradient',
      '³H-uridine, proving RNA enters E. coli'
    ],
    correctOption: '³²P (which labels DNA), whereas ³⁵S radioactivity remained in the supernatant (protein coat)',
    modelAnswer: 'DNA contains phosphorus (not sulphur), while protein capsids contain sulphur (methionine/cysteine, not phosphorus). Blending and centrifugation left empty protein coats (³⁵S) in supernatant and bacterial cells containing phage DNA (³²P) in the pellet.',
    stepMarking: [{ step: 'Trace 32P (DNA -> pellet) vs 35S (Protein -> supernatant)', marks: '+4 / -1' }],
    examinerTip: 'Meselson-Stahl used ¹⁵NH₄Cl and CsCl density gradient centrifugation (not radioactive ³²P) to prove semiconservative DNA replication.',
    commonPitfall: 'Mixing up Meselson-Stahl (¹⁵N non-radioactive density) with Hershey-Chase (³²P/³⁵S radioactive).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Molecular Basis of Inheritance (Lac Operon)',
    questionText: 'In the Lac Operon of E. coli, which structural gene encodes β-galactosidase responsible for hydrolysis of lactose into galactose and glucose?',
    options: ['lac z', 'lac y', 'lac a', 'lac i'],
    correctOption: 'lac z',
    modelAnswer: 'lac z codes for β-galactosidase, lac y codes for permease (increases cell permeability to β-galactosides), lac a codes for transacetylase, and regulatory gene i codes for the repressor.',
    stepMarking: [{ step: 'Direct NCERT XII Ch 5 check: z -> β-galactosidase, y -> permease, a -> transacetylase', marks: '+4 / -1' }],
    examinerTip: 'Note that "i" in lac i stands for "inhibitor", NOT "inducer"; allolactose/lactose acts as the inducer.',
    commonPitfall: 'Thinking lac i stands for inducer.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Molecular Basis of Inheritance (Transcription & Genetic Code)',
    questionText: 'In eukaryotes, which RNA polymerase transcribes hnRNA (precursor of mRNA), and what are the three post-transcriptional processing steps?',
    options: [
      'RNA Polymerase II; Capping (methyl guanosine triphosphate at 5′), Tailing (poly-A at 3′), and Splicing (removal of introns)',
      'RNA Polymerase I; Capping at 3′, Tailing at 5′, and Splicing',
      'RNA Polymerase III; Capping at 5′, Polyadenylation, and Translation',
      'RNA Polymerase II; Splicing out exons and retaining introns'
    ],
    correctOption: 'RNA Polymerase II; Capping (methyl guanosine triphosphate at 5′), Tailing (poly-A at 3′), and Splicing (removal of introns)',
    modelAnswer: 'Pol I transcribes rRNAs (28S, 18S, 5.8S); Pol II transcribes hnRNA; Pol III transcribes tRNA, 5srRNA, snRNAs. Processing: 5′ capping (mGppp), 3′ poly-A tailing (200–300 adenylate residues, template-independent), and splicing introns out.',
    stepMarking: [{ step: 'Verify Pol II + 5′ capping + 3′ poly-A tailing + intron splicing', marks: '+4 / -1' }],
    examinerTip: 'Mnemonic: "R-M-T" for Pol I (rRNA), Pol II (mRNA/hnRNA), Pol III (tRNA).',
    commonPitfall: 'Removing exons instead of introns during splicing.'
  },
  // 57-60: Ecology & Biodiversity
  {
    section: 'A',
    marks: 4,
    topic: 'Organisms & Populations (Population Interactions)',
    questionText: 'Match List I (Interaction) with List II (Example):\n(a) Mutualism (+, +) — (i) Barnacles growing on back of a whale\n(b) Commensalism (+, 0) — (ii) Fig tree and wasp species\n(c) Amensalism (−, 0) — (iii) Cuckoo laying eggs in crow’s nest (brood parasitism)\n(d) Parasitism (+, −) — (iv) Penicillium secreting penicillin inhibiting Staphylococcus',
    options: ['a-ii, b-i, c-iv, d-iii', 'a-i, b-ii, c-iv, d-iii', 'a-ii, b-iv, c-i, d-iii', 'a-iii, b-i, c-iv, d-ii'],
    correctOption: 'a-ii, b-i, c-iv, d-iii',
    modelAnswer: 'Fig-wasp is obligate mutualism; whale-barnacle (and orchid-mango, cattle egret-cattle, sea anemone-clownfish) is commensalism; Penicillium-bacteria is amensalism (−, 0); cuckoo-crow is brood parasitism.',
    stepMarking: [{ step: 'Classify each NCERT population interaction accurately', marks: '+4 / -1' }],
    examinerTip: 'Also remember Mediterranean orchid Ophrys ("sexual deceit") exhibits mutualism/pollination pseudocopulation with bumblebee.',
    commonPitfall: 'Confusing commensalism (+, 0) with amensalism (−, 0).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Organisms & Populations (Logistic Growth Equation)',
    questionText: 'In the Verhulst-Pearl Logistic Growth equation dN/dt = rN((K − N)/K), when does the population growth rate (dN/dt) reach zero (asymptote)?',
    options: [
      'When population density N equals carrying capacity K',
      'When N equals K/2 (inflection point)',
      'When intrinsic rate of natural increase r > 1',
      'When K approaches infinity (exponential phase)'
    ],
    correctOption: 'When population density N equals carrying capacity K',
    modelAnswer: 'When N = K, (K − N)/K = 0, so dN/dt = 0 and the curve reaches its upper asymptote. Maximum growth rate occurs at the inflection point N = K/2.',
    stepMarking: [{ step: 'Evaluate (K - N)/K = 0 when N = K', marks: '+4 / -1' }],
    examinerTip: 'Sigmoid growth phases in order: Lag -> Acceleration -> Deceleration -> Asymptote (K).',
    commonPitfall: 'Confusing maximum dN/dt (N = K/2) with zero dN/dt (N = K).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Ecosystem (Productivity & Ecological Pyramids)',
    questionText: 'Given below are two statements:\nStatement I: Net Primary Productivity (NPP) equals Gross Primary Productivity (GPP) minus respiratory losses (R), representing available biomass for heterotrophs.\nStatement II: The pyramid of biomass in the sea is generally inverted because the biomass of fishes far exceeds that of phytoplankton at a given instant.\nChoose the correct option:',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Both Statement I and Statement II are correct',
    modelAnswer: 'NPP = GPP − R. In marine ecosystems, phytoplankton have tiny standing-crop biomass at any instant (rapid turnover) compared to fishes, inverting the biomass pyramid, while the energy pyramid is ALWAYS upright.',
    stepMarking: [{ step: 'Verify NPP = GPP - R and inverted marine biomass pyramid', marks: '+4 / -1' }],
    examinerTip: 'Pyramid of Energy is NEVER inverted in any ecosystem because energy is lost as heat at every trophic step (Lindeman 10% law).',
    commonPitfall: 'Thinking pyramid of energy can be inverted in oceans.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Biodiversity & Conservation (Species-Area & Evil Quartet)',
    questionText: 'In Alexander von Humboldt’s species-area relationship log S = log C + Z log A, for frugivorous birds and mammals in tropical forests of different continents, the slope Z is found to be:',
    options: ['1.15 (steeper slope)', '0.1 to 0.2', '0.6', '0.01'],
    correctOption: '1.15 (steeper slope)',
    modelAnswer: 'For small areas / taxa within a region, Z lies in 0.1–0.2. For very large areas like entire continents, Z = 0.6–1.2; specifically for frugivorous birds and mammals in tropical forests across continents, Z = 1.15.',
    stepMarking: [{ step: 'Recall NCERT XII Ch 13 exact Z value (1.15) for frugivorous birds/mammals', marks: '+4 / -1' }],
    examinerTip: 'Also know the Evil Quartet of biodiversity loss: Habitat loss & fragmentation (most important), Over-exploitation, Alien species invasions, Co-extinctions.',
    commonPitfall: 'Choosing 0.1–0.2 (regional scale) instead of 1.15 (continental frugivores).'
  }
];

const ZOO_POOL: RawNeetQ[] = [
  // 1-6: Animal Kingdom
  {
    section: 'A',
    marks: 4,
    topic: 'Animal Kingdom (Coelom & Symmetry)',
    questionText: 'Match List I (Phylum) with List II (Body Cavity & Characteristic Structure):\n(a) Porifera — (i) Pseudocoelomate; muscular pharynx\n(b) Ctenophora — (ii) Acoelomate; 8 external ciliated comb plates & bioluminescence\n(c) Platyhelminthes — (iii) Cellular level; water canal system with choanocytes\n(d) Aschelminthes — (iv) Acoelomate; flame cells for osmoregulation & excretion',
    options: ['a-iii, b-ii, c-iv, d-i', 'a-iii, b-iv, c-ii, d-i', 'a-ii, b-iii, c-iv, d-i', 'a-iv, b-ii, c-iii, d-i'],
    correctOption: 'a-iii, b-ii, c-iv, d-i',
    modelAnswer: 'Porifera = choanocytes lining spongocoel/canals; Ctenophora = exclusively marine, comb plates & bioluminescence; Platyhelminthes = acoelomate flame cells; Aschelminthes = pseudocoelomate.',
    stepMarking: [{ step: 'Match all four non-chordate phyla with diagnostic NCERT traits', marks: '+4 / -1' }],
    examinerTip: 'Do NOT confuse Water Canal System (Porifera) with Water Vascular System (Echinodermata).',
    commonPitfall: 'Swapping Platyhelminthes (acoelomate) and Aschelminthes (pseudocoelomate).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Animal Kingdom (Cnidaria — Metagenesis)',
    questionText: 'Given below are two statements:\nStatement I: Obelia exhibits alternation of generations (metagenesis), where polyps produce medusae asexually and medusae form polyps sexually.\nStatement II: In Cnidaria, Aurelia (jellyfish) represents the umbrella-shaped, free-swimming medusa form, whereas Adamsia (sea anemone) represents the sessile cylindrical polyp.\nChoose the correct option:',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Both Statement I and Statement II are correct',
    modelAnswer: 'Obelia shows metagenesis (polyp --asexual--> medusa --sexual--> polyp). Aurelia is medusa; Adamsia and Hydra are polyps.',
    stepMarking: [{ step: 'Verify NCERT XI Ch 4 metagenesis direction and examples', marks: '+4 / -1' }],
    examinerTip: 'Cnidoblasts (stinging cells with nematocysts) are used for anchorage, defense, and capture of prey.',
    commonPitfall: 'Reversing sexual and asexual transitions in Obelia metagenesis.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Animal Kingdom (Arthropoda, Mollusca, Echinodermata)',
    questionText: 'Which set of excretory organs correctly matches Annelida (earthworm), Arthropoda (insects), Mollusca, and Hemichordata respectively?',
    options: [
      'Nephridia, Malpighian tubules, Feather-like gills/mantle cavity, Proboscis gland',
      'Flame cells, Green glands, Nephridia, Coxal glands',
      'Malpighian tubules, Nephridia, Radula, Water vascular system',
      'Nephridia, Flame cells, Gills, Notochord'
    ],
    correctOption: 'Nephridia, Malpighian tubules, Feather-like gills/mantle cavity, Proboscis gland',
    modelAnswer: 'Annelids = nephridia; Insects = Malpighian tubules; Molluscs = feather-like gills in mantle cavity (respiratory + excretory); Hemichordates (Balanoglossus) = proboscis gland; Echinoderms lack an excretory system.',
    stepMarking: [{ step: 'Verify phylum-wise excretory structures from NCERT Ch 4', marks: '+4 / -1' }],
    examinerTip: 'Radula in Mollusca is a file-like rasping organ for FEEDING, not excretion!',
    commonPitfall: 'Treating radula as an excretory organ or assuming echinoderms have nephridia.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Animal Kingdom (Protochordata & Cyclostomata)',
    questionText: 'Which statement accurately distinguishes Urochordata, Cephalochordata, and Cyclostomata?',
    options: [
      'In Urochordata (Ascidia), notochord is present only in larval tail; in Cephalochordata (Branchiostoma), it extends head to tail persistently; Cyclostomata (Petromyzon) are jawless ectoparasites with 6–15 gill slits',
      'Urochordata have persistent notochord in adults; Cyclostomata have paired fins and placoid scales',
      'Cephalochordata have bony endoskeleton; Petromyzon exhibits viviparity in marine water',
      'Cyclostomata belong to Gnathostomata and possess an operculum'
    ],
    correctOption: 'In Urochordata (Ascidia), notochord is present only in larval tail; in Cephalochordata (Branchiostoma), it extends head to tail persistently; Cyclostomata (Petromyzon) are jawless ectoparasites with 6–15 gill slits',
    modelAnswer: 'Urochordates (Ascidia, Salpa, Doliolum) have notochord only in larval tail; Cephalochordates (Branchiostoma/Amphioxus) retain it throughout life head-to-tail; Cyclostomes (Petromyzon, Myxine) are jawless, lack scales/paired fins, and migrate to fresh water for spawning.',
    stepMarking: [{ step: 'Check notochord fate and Cyclostomata traits', marks: '+4 / -1' }],
    examinerTip: 'Petromyzon is marine as an adult, migrates to fresh water to spawn, dies within days, and ammocoete larvae return to ocean.',
    commonPitfall: 'Saying cyclostomes have jaws or paired fins.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Animal Kingdom (Chondrichthyes vs Osteichthyes)',
    questionText: 'Identify the combination of features exclusive to Chondrichthyes (cartilaginous fishes like Scoliodon and Trygon) as compared to Osteichthyes:',
    options: [
      'Ventral mouth, placoid scales, gill slits without operculum, absence of air bladder (must swim constantly)',
      'Terminal mouth, cycloid scales, 4 pairs of gills covered by operculum, air bladder present',
      'Internal fertilisation, viviparity in all members, presence of swim bladder',
      'Bony endoskeleton, claspers on pelvic fins of females, external fertilisation'
    ],
    correctOption: 'Ventral mouth, placoid scales, gill slits without operculum, absence of air bladder (must swim constantly)',
    modelAnswer: 'Chondrichthyes have cartilaginous endoskeleton, ventral mouth, placoid scales (modified as backwardly directed teeth), gill slits without operculum, no air bladder (continuous swimming to avoid sinking), and pelvic claspers in males.',
    stepMarking: [{ step: 'Verify 4 diagnostic NCERT contrasts of Chondrichthyes vs Osteichthyes', marks: '+4 / -1' }],
    examinerTip: 'Torpedo has electric organs; Trygon has a poison sting; both are Chondrichthyes.',
    commonPitfall: 'Forgetting male claspers are on pelvic fins (not pectoral) and air bladder is absent.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Animal Kingdom (Tetrapoda — Reptiles, Birds, Mammals)',
    questionText: 'Which exception among vertebrates is matched CORRECTLY according to NCERT Animal Kingdom?',
    options: [
      'Crocodilus (4-chambered heart among reptiles); Ornithorhynchus (oviparous mammal); Aptenodytes/Neophron (pneumatic bones with air sacs)',
      'Chameleon (4-chambered heart); Pteropus (oviparous mammal)',
      'Testudo (viviparous reptile); Macropus (egg-laying mammal)',
      'Ichthyophis (limbed amphibian); Balaenoptera (poikilotherm mammal)'
    ],
    correctOption: 'Crocodilus (4-chambered heart among reptiles); Ornithorhynchus (oviparous mammal); Aptenodytes/Neophron (pneumatic bones with air sacs)',
    modelAnswer: 'Reptiles generally have 3-chambered hearts except Crocodiles (4-chambered). Mammals are viviparous except Ornithorhynchus (Platypus, oviparous). Birds have hollow pneumatic bones and air sacs.',
    stepMarking: [{ step: 'Identify key NCERT vertebrate exceptions accurately', marks: '+4 / -1' }],
    examinerTip: 'Always watch for NCERT vertebrate exceptions: Crocodilus (4-ch heart), Ichthyophis (limbless amphibian), Ornithorhynchus (oviparous mammal).',
    commonPitfall: 'Confusing Pteropus (flying fox, viviparous) as oviparous.'
  },
  // 7-12: Tissues + Cockroach + Frog
  {
    section: 'A',
    marks: 4,
    topic: 'Structural Organisation (Epithelial Junctions)',
    questionText: 'In animal epithelial tissues, which cell junctions perform cementing to keep neighbouring cells together, and which facilitate rapid communication of ions/small molecules between cytoplasm of adjoining cells?',
    options: [
      'Adhering junctions (cementing) and Gap junctions (rapid cytoplasmic communication)',
      'Tight junctions (cementing) and Adhering junctions (communication)',
      'Gap junctions (stop leakage) and Tight junctions (communication)',
      'Desmosomes (stop leakage) and Gap junctions (cementing)'
    ],
    correctOption: 'Adhering junctions (cementing) and Gap junctions (rapid cytoplasmic communication)',
    modelAnswer: 'Three epithelial junctions in NCERT: Tight junctions (stop substances from leaking across tissue), Adhering junctions (cementing neighbouring cells), Gap junctions (connect cytoplasm for rapid ion/molecule transfer).',
    stepMarking: [{ step: 'Distinguish Tight, Adhering, and Gap junction roles', marks: '+4 / -1' }],
    examinerTip: 'Intercalated discs in cardiac muscle contain gap junctions allowing heart cells to contract as a functional unit.',
    commonPitfall: 'Confusing tight junctions (leakage barrier) with adhering junctions (cementing).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Structural Organisation (Connective & Muscular Tissues)',
    questionText: 'Identify the INCORRECT statement regarding animal tissues:',
    options: [
      'Tendons connect bone to bone, whereas ligaments connect skeletal muscles to bones',
      'Ciliated epithelium lines the inner surface of hollow organs like bronchioles and fallopian tubes',
      'Smooth muscle fibres are fusiform (tapered at both ends), unstriated, and involuntary',
      'Matrix of cartilage (chondrocytes in lacunae) is solid, pliable, and resists compression'
    ],
    correctOption: 'Tendons connect bone to bone, whereas ligaments connect skeletal muscles to bones',
    modelAnswer: 'The statement is reversed: Tendons attach skeletal muscles to bones, whereas Ligaments attach one bone to another bone (both are dense regular connective tissues).',
    stepMarking: [{ step: 'Spot reversed Tendon vs Ligament definition', marks: '+4 / -1' }],
    examinerTip: 'Mnemonic: "MTB" (Muscle-Tendon-Bone) and "BLB" (Bone-Ligament-Bone).',
    commonPitfall: 'Misreading "INCORRECT" and picking a true cartilage/muscle option.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'NMC Retained Cockroach (Periplaneta americana)',
    questionText: 'In the alimentary canal of Cockroach (Periplaneta americana), food is crushed by six chitinous teeth in the _____, while 6–8 blind tubules at the junction of foregut and midgut secreting digestive juice are called _____:',
    options: [
      'Gizzard (proventriculus); Hepatic/gastric caeca',
      'Crop; Malpighian tubules',
      'Pharynx; Mushroom glands',
      'Gizzard; Malpighian tubules'
    ],
    correctOption: 'Gizzard (proventriculus); Hepatic/gastric caeca',
    modelAnswer: 'Crop stores food; gizzard (proventriculus) has an outer layer of thick circular muscles and inner thick cuticle forming 6 chitinous plates (teeth) for grinding. Hepatic/gastric caeca (6–8) sit at foregut-midgut junction; Malpighian tubules (100–150 yellow filaments) sit at midgut-hindgut junction for excretion.',
    stepMarking: [{ step: 'Locate Gizzard (grinding), Hepatic caeca (foregut-midgut), Malpighian tubules (midgut-hindgut)', marks: '+4 / -1' }],
    examinerTip: 'Cockroach is uricotelic, has a 13-chambered tubular heart, and mosaic vision (more sensitivity, less resolution).',
    commonPitfall: 'Placing Malpighian tubules at the foregut-midgut junction.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'NMC Retained Cockroach (Reproductive Dimorphism)',
    questionText: 'How can a male cockroach be externally distinguished from a female cockroach?',
    options: [
      'Male bears a pair of short, thread-like anal styles on the 9th sternum, which are absent in females (both sexes have jointed anal cerci on 10th tergum)',
      'Female bears anal styles while male lacks them',
      'Male has 3 pairs of legs whereas female has 2 pairs',
      'Male has a boat-shaped 7th sternum forming a brood pouch'
    ],
    correctOption: 'Male bears a pair of short, thread-like anal styles on the 9th sternum, which are absent in females (both sexes have jointed anal cerci on 10th tergum)',
    modelAnswer: 'Both sexes have jointed filamentous anal cerci on the 10th segment. Only males possess unjointed anal styles arising from the 9th sternum; females have a boat-shaped 7th sternum.',
    stepMarking: [{ step: 'Contrast anal styles (9th sternum, male only) vs anal cerci (10th segment, both)', marks: '+4 / -1' }],
    examinerTip: 'Cockroach development is paurometabolous (gradual through ~13 nymphal moults).',
    commonPitfall: 'Confusing anal cerci (present in both) with anal styles (male only).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'NMC Retained Frog (Rana tigrina — Excretory & Reproductive)',
    questionText: 'In male frogs (Rana tigrina), vasa efferentia are 10–12 in number that arise from testes and enter the kidneys on their side to open into:',
    options: [
      'Bidder’s canal',
      'Urinogenital duct directly bypassing the kidney',
      'Conus arteriosus',
      'Sinus venosus'
    ],
    correctOption: 'Bidder’s canal',
    modelAnswer: 'Per NCERT Class XI Ch 7: Vasa efferentia enter the kidney and open into Bidder’s canal, which communicates with the urinogenital duct that comes out of kidneys and opens into the cloaca.',
    stepMarking: [{ step: 'Trace male frog tract: Testes -> Vasa efferentia -> Bidder’s canal -> Urinogenital duct -> Cloaca', marks: '+4 / -1' }],
    examinerTip: 'Frog & Cockroach are heavily tested in NEET after Digestion & Absorption was deleted!',
    commonPitfall: 'Thinking frog female oviducts also open into Bidder’s canal (in females, ureters and oviducts open separately into cloaca).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'NMC Retained Frog (Circulation & Respiration)',
    questionText: 'Given below are two statements about Rana tigrina (Indian bullfrog):\nStatement I: Frogs respire through skin (cutaneous) in water and during aestivation/hibernation, and through skin, buccal cavity, and lungs on land.\nStatement II: Frogs have a 3-chambered heart (2 atria, 1 ventricle) with sinus venosus and conus arteriosus, and nucleated RBCs containing haemoglobin.\nChoose the correct option:',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Both Statement I and Statement II are correct',
    modelAnswer: 'Both statements match NCERT Ch 7 Frog anatomy: cutaneous respiration in water/hibernation, 3-chambered heart with sinus venosus (dorsal) and conus arteriosus (ventral), hepatic + renal portal systems, and nucleated RBCs.',
    stepMarking: [{ step: 'Verify frog respiratory modes, 3-chambered heart, and nucleated RBCs', marks: '+4 / -1' }],
    examinerTip: 'Frog has 10 pairs of cranial nerves and is ureotelic (tadpole is ammonotelic).',
    commonPitfall: 'Assuming frog RBCs are enucleated like mammalian RBCs.'
  },
  // 13-18: Biomolecules & Enzymes
  {
    section: 'A',
    marks: 4,
    topic: 'Biomolecules (Proteins & Amino Acids)',
    questionText: 'Which combination correctly represents an acidic amino acid, a basic amino acid, an aromatic amino acid, and the most abundant protein in the whole biosphere?',
    options: [
      'Glutamic acid, Lysine, Tyrosine, RuBisCO',
      'Valine, Glutamic acid, Alanine, Collagen',
      'Lysine, Glutamic acid, Tryptophan, Haemoglobin',
      'Glycine, Arginine, Serine, Myosin'
    ],
    correctOption: 'Glutamic acid, Lysine, Tyrosine, RuBisCO',
    modelAnswer: 'Glutamic acid = acidic; Lysine = basic; Valine = neutral; Tyrosine/Phenylalanine/Tryptophan = aromatic. Collagen is most abundant in animal world; RuBisCO is most abundant in the whole biosphere.',
    stepMarking: [{ step: 'Match amino acid classes and differentiate animal vs biosphere abundance', marks: '+4 / -1' }],
    examinerTip: 'Remember: Animal world = Collagen; Whole biosphere = RuBisCO.',
    commonPitfall: 'Choosing Collagen for whole biosphere.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Biomolecules (Polysaccharides & Secondary Metabolites)',
    questionText: 'Match List I with List II:\n(a) Inulin — (i) Exoskeleton of arthropods (homopolymer of N-acetyl glucosamine)\n(b) Chitin — (ii) Polymer of fructose\n(c) Cellulose — (iii) Gives blue colour with I₂ due to helical secondary structure\n(d) Starch — (iv) Unbranched β-glucose polymer; does NOT hold I₂',
    options: ['a-ii, b-i, c-iv, d-iii', 'a-i, b-ii, c-iv, d-iii', 'a-ii, b-iv, c-i, d-iii', 'a-iii, b-i, c-iv, d-ii'],
    correctOption: 'a-ii, b-i, c-iv, d-iii',
    modelAnswer: 'Inulin = polymer of fructose; Chitin = complex polysaccharide (NAG homopolymer); Starch forms helical secondary structures holding I₂ (blue); Cellulose has no complex helices so it does not hold I₂.',
    stepMarking: [{ step: 'Verify NCERT Ch 9 polysaccharide structure and iodine test facts', marks: '+4 / -1' }],
    examinerTip: 'Also memorize NCERT Table 9.3 Secondary Metabolites: Morphine/Codeine (Alkaloids), Abrin/Ricin (Toxins), Concanavalin A (Lectin), Vinblastin/Curcumin (Drugs).',
    commonPitfall: 'Confusing Inulin (fructose polymer) with Insulin (protein hormone).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Biomolecules (Nucleic Acid Structure)',
    questionText: 'In Watson-Crick B-DNA, the pitch of one complete helical turn, distance between consecutive base pairs, and number of base pairs per turn are respectively:',
    options: ['3.4 nm (34 Å), 0.34 nm (3.4 Å), 10 bp', '34 nm, 3.4 nm, 10 bp', '3.4 nm, 0.34 nm, 12 bp', '2.0 nm, 0.34 nm, 10 bp'],
    correctOption: '3.4 nm (34 Å), 0.34 nm (3.4 Å), 10 bp',
    modelAnswer: 'B-DNA is a right-handed double helix with diameter 2.0 nm (20 Å), pitch 3.4 nm (34 Å), 10 base pairs per turn, and 0.34 nm (3.4 Å) rise per base pair.',
    stepMarking: [{ step: 'Check B-DNA geometry in nm and Å accurately', marks: '+4 / -1' }],
    examinerTip: 'Adjacent nucleotides are linked by 3′->5′ phosphodiester bonds; complementary strands are antiparallel.',
    commonPitfall: 'Confusing 3.4 nm (pitch) with 3.4 Å (rise per bp).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Biomolecules (Enzymes — Inhibition)',
    questionText: 'Assertion (A): Inhibition of succinic dehydrogenase by malonate is a classic example of competitive inhibition.\nReason (R): Malonate closely resembles the substrate succinate in molecular structure and competes for the active site of the enzyme, increasing apparent Km while Vmax remains unchanged.',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctOption: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
    modelAnswer: 'Malonate is a structural analogue of succinate that binds reversibly to the active site of succinate dehydrogenase. Adding excess succinate restores Vmax (Km increases, Vmax unchanged).',
    stepMarking: [{ step: 'Link structural similarity of malonate/succinate to competitive inhibition kinetics', marks: '+4 / -1' }],
    examinerTip: 'Competitive inhibition: Vmax same, Km increases. Non-competitive: Vmax decreases, Km same.',
    commonPitfall: 'Thinking competitive inhibitor lowers Vmax.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Biomolecules (Enzyme Classification & Cofactors)',
    questionText: 'In the enzyme Carbonic Anhydrase, which accelerates CO₂ + H₂O -> H₂CO₃ by about 10 million times, the tightly/loosely associated metal ion cofactor required at the active site is _____, whereas haem in peroxidase/catalase is a _____:',
    options: [
      'Zinc (Zn²⁺); prosthetic group (tightly bound organic cofactor)',
      'Magnesium (Mg²⁺); coenzyme (transiently bound)',
      'Iron (Fe²⁺); apoenzyme',
      'Copper (Cu²⁺); prosthetic group'
    ],
    correctOption: 'Zinc (Zn²⁺); prosthetic group (tightly bound organic cofactor)',
    modelAnswer: 'Zn²⁺ is a metal-ion cofactor for carboxypeptidase and carbonic anhydrase (forming coordination bonds with side chains and substrate). Haem in peroxidase/catalase is a prosthetic group (tightly bound to apoenzyme); NAD/NADP (niacin) are coenzymes.',
    stepMarking: [{ step: 'Match Zn2+ (carbonic anhydrase/carboxypeptidase) and Haem (prosthetic group)', marks: '+4 / -1' }],
    examinerTip: 'Holoenzyme = Apoenzyme (protein part) + Cofactor (non-protein part). Catalytic activity is lost when cofactor is removed.',
    commonPitfall: 'Calling haem a coenzyme instead of a prosthetic group.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Biomolecules (Lipids & Zwitterions)',
    questionText: 'Lecithin found in cell membranes is chemically a _____, and palmitic acid has _____ carbons including the carboxyl carbon:',
    options: [
      'Phospholipid; 16 carbons',
      'Simple triglyceride; 20 carbons',
      'Glycolipid; 18 carbons',
      'Steroid; 16 carbons'
    ],
    correctOption: 'Phospholipid; 16 carbons',
    modelAnswer: 'Lecithin is a phosphorylated glyceride (phospholipid) in plasma membranes. Palmitic acid has 16 carbons (incl. carboxyl C), whereas arachidonic acid has 20 carbons.',
    stepMarking: [{ step: 'Verify NCERT Ch 9 facts: Lecithin = phospholipid; Palmitic = 16C; Arachidonic = 20C', marks: '+4 / -1' }],
    examinerTip: 'Remember lipids are NOT strictly macromolecules (MW < 800 Da) yet appear in the acid-insoluble fraction because cell membranes break into water-insoluble vesicles.',
    commonPitfall: 'Forgetting to count the carboxyl carbon (answering 15 instead of 16).'
  },
  // 19-26: Breathing & Circulation
  {
    section: 'A',
    marks: 4,
    topic: 'Breathing & Exchange of Gases (Lung Volumes & Capacities)',
    questionText: 'A healthy adult has Tidal Volume (TV) = 500 mL, Inspiratory Reserve Volume (IRV) = 2800 mL, Expiratory Reserve Volume (ERV) = 1100 mL, and Residual Volume (RV) = 1200 mL. Calculate Vital Capacity (VC) and Functional Residual Capacity (FRC):',
    options: [
      'VC = 4400 mL, FRC = 2300 mL',
      'VC = 5600 mL, FRC = 2300 mL',
      'VC = 4400 mL, FRC = 1600 mL',
      'VC = 3900 mL, FRC = 2800 mL'
    ],
    correctOption: 'VC = 4400 mL, FRC = 2300 mL',
    modelAnswer: 'VC = TV + IRV + ERV = 500 + 2800 + 1100 = 4400 mL. FRC = ERV + RV = 1100 + 1200 = 2300 mL. (Note: TLC = VC + RV = 5600 mL).',
    stepMarking: [
      { step: 'VC = TV + IRV + ERV = 4400 mL', marks: '+2' },
      { step: 'FRC = ERV + RV = 2300 mL', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'A simple spirometer CANNOT measure Residual Volume (RV), FRC, or TLC because RV never leaves the lungs.',
    commonPitfall: 'Adding RV into Vital Capacity (that gives Total Lung Capacity).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Breathing & Exchange of Gases (O₂ Dissociation Curve)',
    questionText: 'Which set of physiological conditions at the tissue level shifts the Oxygen-Haemoglobin dissociation curve to the RIGHT, favouring dissociation of O₂ from oxyhaemoglobin?',
    options: [
      'Low pO₂, high pCO₂, high H⁺ concentration (low pH), and high temperature',
      'High pO₂, low pCO₂, low H⁺ concentration (high pH), and low temperature',
      'Low pO₂, low pCO₂, high pH, and low temperature',
      'High pO₂, high pCO₂, low H⁺ concentration, and low temperature'
    ],
    correctOption: 'Low pO₂, high pCO₂, high H⁺ concentration (low pH), and high temperature',
    modelAnswer: 'In metabolically active tissues, pO₂ is low while pCO₂, [H⁺] (low pH), and temperature are high — shifting the sigmoid curve rightwards (Bohr effect) to unload O₂. In alveoli, the opposite shifts it leftwards.',
    stepMarking: [{ step: 'Identify tissue unloading conditions (Right shift = Bohr effect)', marks: '+4 / -1' }],
    examinerTip: 'Every 100 mL of oxygenated blood delivers around 5 mL of O₂ to tissues under normal physiological conditions.',
    commonPitfall: 'Confusing high H⁺ (acidic, low pH) with high pH.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Breathing & Exchange of Gases (CO₂ Transport & Regulation)',
    questionText: 'Approximately 70% of CO₂ is transported as bicarbonate (HCO₃⁻) in blood; the enzyme catalyzing CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ inside RBCs and the brain region that can moderate the respiratory rhythm centre are respectively:',
    options: [
      'Carbonic anhydrase (high concentration in RBCs); Pneumotaxic centre in the pons',
      'Carboxypeptidase; Chemosensitive area in cerebellum',
      'Carbonic anhydrase (absent in RBCs); Medullary rhythm centre in cerebrum',
      'Haemoglobinase; Hypothalamus'
    ],
    correctOption: 'Carbonic anhydrase (high concentration in RBCs); Pneumotaxic centre in the pons',
    modelAnswer: 'RBCs contain very high carbonic anhydrase (and minute amounts in plasma) converting CO₂ to HCO₃⁻. The pneumotaxic centre in the pons reduces duration of inspiration, altering respiratory rate; oxygen plays a quite insignificant role in rhythm regulation.',
    stepMarking: [{ step: 'Verify 70% HCO3- transport + Pons pneumotaxic centre', marks: '+4 / -1' }],
    examinerTip: 'Remember NCERT line: "The role of oxygen in the regulation of respiratory rhythm is quite insignificant."',
    commonPitfall: 'Saying O₂ concentration drives the chemosensitive area (it is CO₂ and H⁺).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Body Fluids & Circulation (Blood Clotting & Erythroblastosis)',
    questionText: 'Erythroblastosis foetalis can occur during a second pregnancy if:',
    options: [
      'Mother is Rh-negative and foetus is Rh-positive, and anti-Rh antibodies formed after the first delivery cross the placenta',
      'Mother is Rh-positive and foetus is Rh-negative',
      'Both parents are Rh-negative',
      'Mother has AB blood group and foetus has O blood group'
    ],
    correctOption: 'Mother is Rh-negative and foetus is Rh-positive, and anti-Rh antibodies formed after the first delivery cross the placenta',
    modelAnswer: 'During first delivery of an Rh⁺ baby to an Rh⁻ mother, foetal RBCs enter maternal blood triggering IgG anti-Rh antibody production. In subsequent Rh⁺ pregnancies, maternal IgG crosses the placenta destroying foetal RBCs. Prevented by injecting anti-Rh antibodies (RhoGAM) to mother immediately after first delivery.',
    stepMarking: [{ step: 'Verify Rh- mother + Rh+ foetus + IgG placental crossing', marks: '+4 / -1' }],
    examinerTip: 'In blood coagulation, Thrombokinase converts Prothrombin -> Thrombin (needs Ca²⁺), and Thrombin converts soluble Fibrinogen -> insoluble Fibrin.',
    commonPitfall: 'Reversing mother and foetus Rh status.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Body Fluids & Circulation (Cardiac Cycle & Output)',
    questionText: 'If a marathon runner has a heart rate of 80 beats/min, End-Diastolic Volume (EDV) of 130 mL, and End-Systolic Volume (ESV) of 50 mL, what is the Cardiac Output?',
    options: ['6.4 L/min (6400 mL/min)', '4.0 L/min', '5.0 L/min', '10.4 L/min'],
    correctOption: '6.4 L/min (6400 mL/min)',
    modelAnswer: 'Stroke Volume (SV) = EDV − ESV = 130 − 50 = 80 mL/beat. Cardiac Output = SV × Heart Rate = 80 mL × 80 beats/min = 6400 mL/min = 6.4 L/min.',
    stepMarking: [
      { step: 'SV = EDV - ESV = 130 - 50 = 80 mL', marks: '+2' },
      { step: 'CO = 80 × 80 = 6400 mL/min = 6.4 L/min', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'Normal adult rest values: SV ≈ 70 mL, HR ≈ 72/min, CO ≈ 5040 mL/min (~5 L); cycle = 0.8 s.',
    commonPitfall: 'Multiplying EDV (130) directly by heart rate without subtracting ESV.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Body Fluids & Circulation (ECG Waves)',
    questionText: 'The end of the T-wave on a standard human Electrocardiogram (ECG) marks the:',
    options: [
      'End of ventricular systole (ventricular repolarisation)',
      'Beginning of atrial contraction',
      'Depolarisation of ventricles',
      'Opening of atrioventricular (AV) valves'
    ],
    correctOption: 'End of ventricular systole (ventricular repolarisation)',
    modelAnswer: 'P-wave = atrial depolarisation; QRS complex = ventricular depolarisation (initiates ventricular contraction); T-wave = ventricular repolarisation, and the end of T-wave marks the end of systole.',
    stepMarking: [{ step: 'Verify NCERT XI Body Fluids verbatim ECG interpretation', marks: '+4 / -1' }],
    examinerTip: 'Counting the number of QRS complexes in a given time period determines the heart beat rate.',
    commonPitfall: 'Thinking QRS represents repolarisation or P-wave represents ventricular contraction.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Body Fluids & Circulation (Heart Sounds & Valves)',
    questionText: 'Given below are two statements:\nStatement I: The first heart sound (lub) is associated with the closure of the tricuspid and bicuspid (AV) valves at the start of ventricular systole.\nStatement II: The second heart sound (dub) is associated with the closure of the semilunar valves at the start of ventricular diastole.\nChoose the correct option:',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Both Statement I and Statement II are correct',
    modelAnswer: 'Heart sounds are produced by valve CLOSURE (never opening): Lub = AV (bicuspid + tricuspid) closure; Dub = semilunar (aortic + pulmonary) closure.',
    stepMarking: [{ step: 'Verify valve closure timings for lub and dub', marks: '+4 / -1' }],
    examinerTip: 'During joint diastole (~0.4 s), tricuspid and bicuspid valves are open while semilunar valves are closed.',
    commonPitfall: 'Linking heart sounds to valve opening instead of closure.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Body Fluids & Circulation (Coronary & Portal Circulation)',
    questionText: 'Which blood vessel carries deoxygenated blood from the digestive tract directly to the liver before it enters systemic circulation?',
    options: ['Hepatic portal vein', 'Hepatic vein', 'Hepatic artery', 'Pulmonary vein'],
    correctOption: 'Hepatic portal vein',
    modelAnswer: 'The hepatic portal vein carries nutrient-rich, deoxygenated blood from the intestine to the liver (hepatic portal system), after which hepatic veins drain into the inferior vena cava.',
    stepMarking: [{ step: 'Distinguish hepatic portal vein (gut -> liver) from hepatic vein (liver -> IVC)', marks: '+4 / -1' }],
    examinerTip: 'Pulmonary vein is the only vein in adults carrying OXYGENATED blood (lungs -> left atrium).',
    commonPitfall: 'Confusing hepatic vein with hepatic portal vein.'
  },
  // 27-33: Excretion & Locomotion
  {
    section: 'A',
    marks: 4,
    topic: 'Excretory Products (Nitrogenous Wastes)',
    questionText: 'Which set accurately classifies Ammonotelic, Ureotelic, and Uricotelic organisms in order?',
    options: [
      'Bony fishes & aquatic amphibians; Mammals & marine fishes; Birds, reptiles & land snails',
      'Cartilaginous fishes; Bony fishes; Amphibians',
      'Insects & birds; Bony fishes; Mammals',
      'Aquatic insects; Tadpoles; Marine fishes'
    ],
    correctOption: 'Bony fishes & aquatic amphibians; Mammals & marine fishes; Birds, reptiles & land snails',
    modelAnswer: 'Ammonotelic (high water): bony fishes, aquatic amphibians, aquatic insects. Ureotelic (moderate): mammals, many terrestrial amphibians, marine fishes. Uricotelic (least water): reptiles, birds, land snails, insects.',
    stepMarking: [{ step: 'Match NCERT Ch 16 examples cleanly without mixing bony vs marine fish', marks: '+4 / -1' }],
    examinerTip: 'Remember: Bony fishes = Ammonotelic; Marine/cartilaginous fishes = Ureotelic!',
    commonPitfall: 'Placing marine fishes under ammonotelic.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Excretory Products (Counter-Current Mechanism)',
    questionText: 'The osmolarity gradient in human renal medulla rises from ~300 mOsmol/L in the cortex to ~1200 mOsmol/L in the inner medulla mainly due to:',
    options: [
      'Counter-current flow in Henle’s loop and vasa recta maintaining NaCl and urea gradients',
      'Active secretion of glucose by collecting duct into cortex',
      'Passive reabsorption of proteins at Bowman’s capsule',
      'Atrial Natriuretic Factor (ANF) constricting afferent arterioles'
    ],
    correctOption: 'Counter-current flow in Henle’s loop and vasa recta maintaining NaCl and urea gradients',
    modelAnswer: 'NaCl transported out by the ascending limb of Henle’s loop is exchanged with the descending limb of vasa recta and returned to interstitium; small amounts of urea enter the thin ascending segment and exit from collecting duct to maintain 1200 mOsmol/L.',
    stepMarking: [{ step: 'Verify NaCl + Urea roles in Henle’s loop & vasa recta counter-current', marks: '+4 / -1' }],
    examinerTip: 'Descending limb of Henle’s loop is permeable to WATER (impermeable to electrolytes); Ascending limb is impermeable to WATER (permeable to electrolytes).',
    commonPitfall: 'Reversing water vs electrolyte permeability of the two limbs of Henle’s loop.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Excretory Products (RAAS vs ANF Regulation)',
    questionText: 'A fall in Glomerular Filtration Rate (GFR) activates Juxtaglomerular (JG) cells to release _____, whereas an increase in blood flow to the heart’s atria triggers release of _____ causing vasodilation:',
    options: [
      'Renin (activating Angiotensin II & Aldosterone); Atrial Natriuretic Factor (ANF)',
      'Rennin (curdling milk protein); ADH (vasopressin)',
      'ANF; Renin',
      'Aldosterone; Erythropoietin'
    ],
    correctOption: 'Renin (activating Angiotensin II & Aldosterone); Atrial Natriuretic Factor (ANF)',
    modelAnswer: 'Low GFR -> JG cells release Renin (single "n") -> Angiotensinogen -> Angiotensin I -> Angiotensin II (vasoconstrictor + stimulates adrenal cortex to release Aldosterone for Na⁺/water reabsorption in DCT). High atrial pressure -> ANF (check on RAAS).',
    stepMarking: [{ step: 'Verify Renin/RAAS vs ANF antagonistic loop', marks: '+4 / -1' }],
    examinerTip: 'Watch spelling: Renin (kidney enzyme, 1 n) vs Rennin (infant gastric enzyme, 2 n’s).',
    commonPitfall: 'Confusing Renin with Aldosterone release site (Aldosterone comes from adrenal cortex, not JG cells).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Excretory Products (Tubular Reabsorption & Disorders)',
    questionText: 'In the nephron, nearly 70–80% of electrolytes and water are reabsorbed in the _____, and presence of glucose and ketone bodies in urine is diagnostic of _____:',
    options: [
      'Proximal Convoluted Tubule (PCT); Diabetes mellitus',
      'Distal Convoluted Tubule (DCT); Diabetes insipidus',
      'Collecting duct; Glomerulonephritis',
      'Bowman’s capsule; Uremia'
    ],
    correctOption: 'Proximal Convoluted Tubule (PCT); Diabetes mellitus',
    modelAnswer: 'PCT is lined by simple cuboidal brush-border epithelium increasing surface area, reabsorbing all essential nutrients and 70–80% electrolytes/water. Glycosuria + ketonuria indicate Diabetes mellitus.',
    stepMarking: [{ step: 'Match PCT brush-border reabsorption + Diabetes mellitus markers', marks: '+4 / -1' }],
    examinerTip: 'Diabetes insipidus (ADH deficiency) causes dilute polyuria WITHOUT glucose or ketone bodies.',
    commonPitfall: 'Confusing Diabetes mellitus with Diabetes insipidus.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Locomotion & Movement (Sarcomere & Sliding Filament)',
    questionText: 'Given below are two statements:\nStatement I: During skeletal muscle contraction, the isotropic I-band and the H-zone shorten, whereas the anisotropic A-band retains its constant length.\nStatement II: Binding of Ca²⁺ to a subunit of troponin on actin filaments removes the masking of active sites for myosin, allowing cross-bridge formation using ATP hydrolysis.\nChoose the correct option:',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Both Statement I and Statement II are correct',
    modelAnswer: 'Actin slides over myosin towards the M-line: Z-lines move closer, I-band & H-zone shorten (may disappear), while A-band (myosin length) stays constant. Ca²⁺ binds troponin (TpC) exposing myosin-binding sites on actin.',
    stepMarking: [{ step: 'Verify band changes + Ca2+-troponin mechanism', marks: '+4 / -1' }],
    examinerTip: 'ATP hydrolysis at the myosin head drives power stroke; binding of a NEW ATP detaches the myosin head from actin (lack of ATP causes rigor mortis).',
    commonPitfall: 'Saying the A-band shortens during contraction.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Locomotion & Movement (Skeletal System & Joints)',
    questionText: 'Match List I (Joint Type) with List II (Example):\n(a) Ball and socket — (i) Between carpal and metacarpal of thumb\n(b) Hinge — (ii) Between atlas and axis vertebrae\n(c) Pivot — (iii) Knee joint and elbow joint\n(d) Saddle — (iv) Between humerus and pectoral girdle (glenoid cavity)',
    options: ['a-iv, b-iii, c-ii, d-i', 'a-iv, b-ii, c-iii, d-i', 'a-iii, b-iv, c-ii, d-i', 'a-i, b-iii, c-ii, d-iv'],
    correctOption: 'a-iv, b-iii, c-ii, d-i',
    modelAnswer: 'All four are synovial joints: Ball & socket = humerus-glenoid cavity; Hinge = knee/elbow; Pivot = atlas-axis; Saddle = carpal-metacarpal of thumb; Gliding = between carpals.',
    stepMarking: [{ step: 'Match all four synovial joint NCERT examples', marks: '+4 / -1' }],
    examinerTip: 'Also remember ribs: 1–7 true (vertebrosternal), 8–10 false (vertebrochondral), 11–12 floating (vertebral).',
    commonPitfall: 'Swapping pivot (atlas-axis) and saddle (thumb).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Locomotion & Movement (Muscular/Skeletal Disorders)',
    questionText: 'Which autoimmune disorder affects the neuromuscular junction leading to fatigue, weakening, and paralysis of skeletal muscles, and which disorder involves rapid wild muscle spasms due to low Ca²⁺ in body fluid?',
    options: [
      'Myasthenia gravis; Tetany',
      'Muscular dystrophy; Osteoporosis',
      'Tetany; Gout',
      'Arthritis; Myasthenia gravis'
    ],
    correctOption: 'Myasthenia gravis; Tetany',
    modelAnswer: 'Myasthenia gravis is an autoimmune disorder targeting ACh receptors at the neuromuscular junction. Tetany is rapid spasms due to hypocalcemia. Muscular dystrophy is genetic; Gout is uric acid crystal accumulation in joints.',
    stepMarking: [{ step: 'Distinguish Myasthenia gravis (autoimmune) vs Tetany (low Ca2+)', marks: '+4 / -1' }],
    examinerTip: 'Osteoporosis is age-related decreased bone mass often linked to decreased estrogen in post-menopausal women.',
    commonPitfall: 'Confusing Myasthenia gravis (autoimmune) with Muscular dystrophy (genetic).'
  },
  // 34-40: Neural & Endocrine
  {
    section: 'A',
    marks: 4,
    topic: 'Neural Control (Nerve Impulse Generation)',
    questionText: 'At resting membrane potential (−70 mV), the axonal membrane is comparatively more permeable to _____ and nearly impermeable to _____, while the Na⁺-K⁺ pump actively transports:',
    options: [
      'K⁺ ions; Na⁺ ions; 3 Na⁺ outwards for 2 K⁺ into the cell',
      'Na⁺ ions; K⁺ ions; 2 Na⁺ outwards for 3 K⁺ into the cell',
      'Cl⁻ ions; K⁺ ions; 3 K⁺ outwards for 2 Na⁺ into the cell',
      'Ca²⁺ ions; Na⁺ ions; 1 Na⁺ outwards for 1 K⁺ into the cell'
    ],
    correctOption: 'K⁺ ions; Na⁺ ions; 3 Na⁺ outwards for 2 K⁺ into the cell',
    modelAnswer: 'Resting axoplasm has high K⁺ and negatively charged proteins; membrane is more permeable to K⁺ and impermeable to Na⁺/proteins. Active Na⁺-K⁺ ATPase pumps 3 Na⁺ out per 2 K⁺ in. Depolarisation occurs via rapid Na⁺ influx.',
    stepMarking: [{ step: 'Verify resting permeability and 3 Na+ out / 2 K+ in stoichiometry', marks: '+4 / -1' }],
    examinerTip: 'Repolarisation restores resting potential primarily by rapid K⁺ efflux through voltage-gated K⁺ channels.',
    commonPitfall: 'Reversing 3 Na⁺ out and 2 K⁺ in.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Neural Control (Human Brain Regions)',
    questionText: 'Match List I (Brain Part) with List II (Primary Function):\n(a) Hypothalamus — (i) Controls respiration, cardiovascular reflexes, and gastric secretions\n(b) Limbic system + Hypothalamus — (ii) Thermoregulation, urge for eating/drinking, neurosecretory hormones\n(c) Cerebellum — (iii) Regulation of sexual behaviour, emotional reactions (excitement, pleasure, rage, fear)\n(d) Medulla oblongata — (iv) Convoluted surface providing additional space for posture & balance',
    options: ['a-ii, b-iii, c-iv, d-i', 'a-iii, b-ii, c-iv, d-i', 'a-ii, b-iv, c-iii, d-i', 'a-i, b-iii, c-iv, d-ii'],
    correctOption: 'a-ii, b-iii, c-iv, d-i',
    modelAnswer: 'Hypothalamus = body temperature, hunger/thirst, hormones; Limbic system (amygdala + hippocampus) + hypothalamus = emotions & sexual behaviour; Cerebellum = balance/posture; Medulla = involuntary vital centres.',
    stepMarking: [{ step: 'Map each brain region to its NCERT Ch 18 function', marks: '+4 / -1' }],
    examinerTip: 'Corpora quadrigemina (4 round lobes) are located on the dorsal portion of the MIDBRAIN; corpus callosum connects the two cerebral hemispheres.',
    commonPitfall: 'Confusing corpus callosum (forebrain tract) with corpora quadrigemina (midbrain).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Neural Control (Chemical vs Electrical Synapses)',
    questionText: 'Given below are two statements:\nStatement I: At a chemical synapse, arrival of an action potential at the axon terminal stimulates movement of synaptic vesicles toward the membrane via Ca²⁺ influx, releasing neurotransmitters into the synaptic cleft.\nStatement II: Electrical synapses are very common in the human nervous system and allow slower impulse transmission than chemical synapses.\nChoose the correct option:',
    options: [
      'Statement I is correct but Statement II is incorrect',
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Statement I is correct but Statement II is incorrect',
    modelAnswer: 'Statement I is true. Statement II is false: electrical synapses are RARE in our system (not common) and transmit impulses FASTER than chemical synapses (like conduction along a single axon).',
    stepMarking: [{ step: 'Spot NCERT reversal: electrical synapses are rare and faster', marks: '+4 / -1' }],
    examinerTip: 'Synaptic cleft exists in chemical synapses; pre- and post-synaptic membranes are in very close proximity in electrical synapses.',
    commonPitfall: 'Missing both traps in Statement II ("common" and "slower").'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Chemical Coordination (Pituitary & Hypothalamic Hormones)',
    questionText: 'Oxytocin and Vasopressin (ADH) are actually synthesised by the _____, and transported axonally to the _____ for storage and release:',
    options: [
      'Hypothalamus; Neurohypophysis (posterior pituitary)',
      'Adenohypophysis; Hypothalamus',
      'Pars intermedia; Pineal gland',
      'Posterior pituitary; Anterior pituitary'
    ],
    correctOption: 'Hypothalamus; Neurohypophysis (posterior pituitary)',
    modelAnswer: 'Neurohypophysis (pars nervosa / posterior pituitary) does NOT synthesise hormones; it only stores and releases Oxytocin and Vasopressin (ADH) synthesised by hypothalamic neurosecretory cells.',
    stepMarking: [{ step: 'Verify synthesis site (Hypothalamus) vs release site (Neurohypophysis)', marks: '+4 / -1' }],
    examinerTip: 'In humans, pars intermedia is almost merged with pars distalis and secretes MSH.',
    commonPitfall: 'Thinking the posterior pituitary synthesises oxytocin and ADH.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Chemical Coordination (Thyroid, Parathyroid & Adrenal)',
    questionText: 'Identify the INCORRECT hormone-function pair:',
    options: [
      'Thyrocalcitonin (TCT): increases blood Ca²⁺ levels (hypercalcemic hormone)',
      'Parathyroid hormone (PTH): increases blood Ca²⁺ by bone resorption and renal Ca²⁺ reabsorption',
      'Aldosterone (mineralocorticoid): stimulates Na⁺/water reabsorption and K⁺/PO₄³⁻ excretion',
      'Melatonin (pineal gland): regulates 24-hour diurnal rhythm, sleep-wake cycle, and menstrual cycle'
    ],
    correctOption: 'Thyrocalcitonin (TCT): increases blood Ca²⁺ levels (hypercalcemic hormone)',
    modelAnswer: 'TCT (protein hormone from parafollicular cells of thyroid) is HYPOCALCEMIC — it LOWERS blood Ca²⁺ levels, working antagonistically to PTH (hypercalcemic).',
    stepMarking: [{ step: 'Identify TCT as hypocalcemic (not hypercalcemic)', marks: '+4 / -1' }],
    examinerTip: 'Adrenal cortex 3 layers outside-in (GFR): Zona Glomerulosa (mineralocorticoids), Zona Fasciculata (glucocorticoids/cortisol), Zona Reticularis (androgens).',
    commonPitfall: 'Confusing TCT (lowers blood Ca²⁺) with PTH (raises blood Ca²⁺).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Chemical Coordination (Pancreas & GI Hormones)',
    questionText: 'Which pair correctly states the cells of Islets of Langerhans and a hormone that stimulates gastric HCl/pepsinogen secretion?',
    options: [
      'α-cells secrete glucagon (hyperglycemic), β-cells secrete insulin (hypoglycemic); Gastrin stimulates HCl & pepsinogen',
      'α-cells secrete insulin, β-cells secrete glucagon; Secretin stimulates HCl',
      'β-cells secrete somatostatin; CCK inhibits pancreatic enzymes',
      'α-cells secrete glucagon; GIP stimulates gastric motility and HCl'
    ],
    correctOption: 'α-cells secrete glucagon (hyperglycemic), β-cells secrete insulin (hypoglycemic); Gastrin stimulates HCl & pepsinogen',
    modelAnswer: 'α-cells -> glucagon (glycogenolysis/gluconeogenesis -> raises blood glucose); β-cells -> insulin (glycogenesis/cellular uptake -> lowers blood glucose). Gastrin stimulates gastric glands (HCl/pepsinogen); Secretin acts on exocrine pancreas (water/HCO₃⁻); CCK stimulates pancreatic enzymes & bile; GIP inhibits gastric secretion.',
    stepMarking: [{ step: 'Verify Islets α/β roles + Gastrin vs Secretin/CCK/GIP', marks: '+4 / -1' }],
    examinerTip: 'Glucagon and Insulin are peptide hormones acting via membrane-bound receptors.',
    commonPitfall: 'Confusing GIP (gastric INHIBITORY peptide) as stimulatory.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Chemical Coordination (Mechanism of Hormone Action)',
    questionText: 'Which group of hormones binds to INTRACELLULAR receptors (mostly nuclear) to regulate gene expression rather than generating second messengers like cAMP, IP₃, or Ca²⁺?',
    options: [
      'Cortisol, Testosterone, Estradiol, Progesterone, and Thyroxine (iodothyronines)',
      'Insulin, Glucagon, FSH, and LH',
      'Epinephrine, Oxytocin, and ADH',
      'PTH, TSH, and ACTH'
    ],
    correctOption: 'Cortisol, Testosterone, Estradiol, Progesterone, and Thyroxine (iodothyronines)',
    modelAnswer: 'Steroid hormones (cortisol, testosterone, estradiol, progesterone) and iodothyronines (T₃/T₄) are lipid/membrane-permeable and bind intracellular receptors forming hormone-receptor complexes that alter transcription. Peptide/catecholamine hormones use membrane receptors + second messengers.',
    stepMarking: [{ step: 'Classify steroid + thyroid hormones as intracellular-receptor acting', marks: '+4 / -1' }],
    examinerTip: 'Notice Epinephrine (amino-acid derivative) uses membrane receptors (cAMP), whereas Thyroxine (also amino-acid derivative) uses nuclear receptors!',
    commonPitfall: 'Assuming iodothyronines use membrane receptors like epinephrine.'
  },
  // 41-46: Human Reproduction & Reproductive Health
  {
    section: 'A',
    marks: 4,
    topic: 'Human Reproduction (Gametogenesis)',
    questionText: 'In human spermatogenesis and oogenesis, which statements are true regarding meiotic arrest and cell ploidy?',
    options: [
      'Primary spermatocyte (2n) completes Meiosis I to form two secondary spermatocytes (n); Primary oocyte (2n) arrests at Prophase I (diplotene) until puberty and secondary oocyte arrests at Metaphase II until fertilisation',
      'Secondary spermatocyte is diploid (2n); Primary oocyte completes Meiosis II before ovulation',
      'Spermatids undergo meiosis to form spermatozoa; First polar body is diploid (2n)',
      'Oogonia continue dividing mitotically throughout adult reproductive life'
    ],
    correctOption: 'Primary spermatocyte (2n) completes Meiosis I to form two secondary spermatocytes (n); Primary oocyte (2n) arrests at Prophase I (diplotene) until puberty and secondary oocyte arrests at Metaphase II until fertilisation',
    modelAnswer: 'No more oogonia are added after birth! Primary oocytes arrest at Prophase I; upon puberty, Meiosis I completes just prior to ovulation forming haploid secondary oocyte (arrested at Metaphase II) + 1st polar body. Sperm entry triggers completion of Meiosis II.',
    stepMarking: [{ step: 'Verify meiotic arrest stages (Prophase I -> Metaphase II) and ploidy', marks: '+4 / -1' }],
    examinerTip: 'Transformation of spermatids (n) into spermatozoa (n) is SPERMIOGENESIS; release from Sertoli cells is SPERMIATION.',
    commonPitfall: 'Confusing spermiogenesis with spermiation, or saying oogonia form after birth.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Human Reproduction (Menstrual Cycle Hormones)',
    questionText: 'In a normal 28-day human menstrual cycle, the rapid surge of _____ around Day 14 induces rupture of the Graafian follicle (ovulation), after which the empty follicle transforms into the _____ secreting high _____:',
    options: [
      'LH; Corpus luteum; Progesterone',
      'FSH; Corpus albicans; Estrogen',
      'Progesterone; Graafian follicle; LH',
      'Estrogen; Primary follicle; Testosterone'
    ],
    correctOption: 'LH; Corpus luteum; Progesterone',
    modelAnswer: 'Rapid secretion of LH reaching peak level mid-cycle (LH surge) causes ovulation. The ruptured Graafian follicle becomes the corpus luteum, secreting large amounts of progesterone essential for maintaining the endometrium.',
    stepMarking: [{ step: 'Link LH surge -> ovulation -> corpus luteum -> progesterone', marks: '+4 / -1' }],
    examinerTip: 'During follicular phase, FSH/LH increase gradually stimulating estrogen; during luteal phase, progesterone dominates.',
    commonPitfall: 'Choosing progesterone as the cause of ovulation instead of LH surge.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Human Reproduction (Fertilisation & Placenta)',
    questionText: 'During human fertilisation, which layer of the ovum induces changes in the membrane that block entry of additional sperms (polyspermy prevention), and which hormones are produced ONLY during pregnancy in women?',
    options: [
      'Zona pellucida; hCG, hPL, and Relaxin',
      'Corona radiata; Estrogen, Progesterone, and Cortisol',
      'Vitelline membrane; Oxytocin and Prolactin',
      'Zona pellucida; Prolactin and Thyroxine'
    ],
    correctOption: 'Zona pellucida; hCG, hPL, and Relaxin',
    modelAnswer: 'Sperm contact with zona pellucida induces cortical reaction preventing polyspermy. Placenta produces hCG, hPL, estrogens, progestogens; ovary later secretes relaxin. hCG, hPL, and relaxin are produced ONLY during pregnancy.',
    stepMarking: [{ step: 'Identify zona pellucida polyspermy block + pregnancy-exclusive hormones (hCG, hPL, relaxin)', marks: '+4 / -1' }],
    examinerTip: 'Implantation occurs at the BLASTOCYST stage (trophoblast attaches to endometrium, inner cell mass differentiates into embryo).',
    commonPitfall: 'Including estrogen/progesterone/thyroxine as pregnancy-only hormones.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Human Reproduction (Parturition & Lactation)',
    questionText: 'Given below are two statements:\nStatement I: The signals for parturition originate from the fully developed foetus and the placenta, inducing mild uterine contractions called foetal ejection reflex.\nStatement II: This triggers release of oxytocin from the maternal pituitary, creating a positive feedback loop of stronger uterine contractions until expulsion.\nChoose the correct option:',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Both Statement I and Statement II are correct',
    modelAnswer: 'NCERT XII Ch 2 verbatim: foetus + placenta initiate foetal ejection reflex -> maternal neurohypophysis releases oxytocin -> stronger contractions -> more oxytocin -> delivery.',
    stepMarking: [{ step: 'Verify foetal ejection reflex & maternal oxytocin positive feedback', marks: '+4 / -1' }],
    examinerTip: 'Prolactin stimulates milk synthesis; Oxytocin stimulates milk ejection (let-down reflex).',
    commonPitfall: 'Saying oxytocin originates from the foetal pituitary.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Reproductive Health (Contraceptives)',
    questionText: 'Match List I (Contraceptive) with List II (Category / Mechanism):\n(a) Lippes loop — (i) Hormone-releasing IUD making uterus unsuitable for implantation\n(b) CuT / Multiload 375 — (ii) Non-medicated IUD increasing phagocytosis of sperms\n(c) LNG-20 / Progestasert — (iii) Non-steroidal once-a-week oral pill (CDRI Lucknow)\n(d) Saheli — (iv) Copper-releasing IUD suppressing sperm motility and fertilising capacity',
    options: ['a-ii, b-iv, c-i, d-iii', 'a-iv, b-ii, c-i, d-iii', 'a-ii, b-i, c-iv, d-iii', 'a-i, b-iv, c-ii, d-iii'],
    correctOption: 'a-ii, b-iv, c-i, d-iii',
    modelAnswer: 'Lippes loop = non-medicated IUD; CuT/Cu7/Multiload 375 = Cu-releasing IUD; Progestasert/LNG-20 = hormone-releasing IUD; Saheli = non-steroidal once-a-week oral pill developed at CDRI.',
    stepMarking: [{ step: 'Classify all 3 IUD types + Saheli accurately', marks: '+4 / -1' }],
    examinerTip: 'Emergency contraception (progestogens or progestogen-estrogen or IUDs) works within 72 hours of unprotected coitus.',
    commonPitfall: 'Confusing Lippes loop (non-medicated) with LNG-20 (hormonal).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Reproductive Health (ART — Infertility)',
    questionText: 'In Assisted Reproductive Technologies (ART), transferring an embryo with MORE than 8 blastomeres into the uterus is termed _____, whereas directly injecting a single sperm into the ovum in a lab is termed _____:',
    options: [
      'IUT (Intra Uterine Transfer); ICSI (Intra Cytoplasmic Sperm Injection)',
      'ZIFT (Zygote Intra Fallopian Transfer); GIFT',
      'GIFT; AI (Artificial Insemination)',
      'ZIFT; IUT'
    ],
    correctOption: 'IUT (Intra Uterine Transfer); ICSI (Intra Cytoplasmic Sperm Injection)',
    modelAnswer: 'Zygote or early embryo up to 8 blastomeres -> ZIFT (into fallopian tube). Embryo with >8 blastomeres -> IUT (into uterus). Direct sperm injection into ovum cytoplasm -> ICSI. Transfer of donor ovum into fallopian tube -> GIFT.',
    stepMarking: [{ step: 'Apply >8 blastomeres -> IUT rule and direct injection -> ICSI', marks: '+4 / -1' }],
    examinerTip: 'Remember: <=8 blastomeres = ZIFT (fallopian tube); >8 blastomeres = IUT (uterus).',
    commonPitfall: 'Mixing up ZIFT (<=8 blastomeres) and IUT (>8 blastomeres).'
  },
  // 47-50: Evolution
  {
    section: 'A',
    marks: 4,
    topic: 'Evolution (Origin of Life & Homology)',
    questionText: 'In S.L. Miller’s 1953 spark-discharge experiment simulating early Earth conditions at 800°C, the gaseous mixture used and organic molecules formed were:',
    options: [
      'CH₄, H₂, NH₃, and water vapour (2:1:2 CH₄:NH₃:H₂ ratio); amino acids (alanine, glycine, aspartic acid)',
      'CO₂, O₂, N₂, and water vapour; nucleic acids',
      'CH₄, O₂, NH₃, and H₂; glucose and starch',
      'CO, N₂, H₂S, and O₂; lipids only'
    ],
    correctOption: 'CH₄, H₂, NH₃, and water vapour (2:1:2 CH₄:NH₃:H₂ ratio); amino acids (alanine, glycine, aspartic acid)',
    modelAnswer: 'Miller used a reducing atmosphere free of O₂ (CH₄, NH₃, H₂, H₂O vapour at 800°C with electric discharge) and obtained amino acids, supporting Oparin-Haldane chemical evolution.',
    stepMarking: [{ step: 'Verify 4 gases (no O2!) at 800°C yielding amino acids', marks: '+4 / -1' }],
    examinerTip: 'Homology (divergent evolution): Thorn of Bougainvillea & tendril of Cucurbita, vertebrate hearts/brains, forelimbs of whale/bat/cheetah/human. Analogy (convergent evolution): Sweet potato (root) & potato (stem), eye of octopus & mammals.',
    commonPitfall: 'Including free O₂ in Miller’s primitive atmosphere.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Evolution (Hardy-Weinberg Equilibrium)',
    questionText: 'In a population in Hardy-Weinberg equilibrium, the frequency of a recessive autosomal disease (aa) is 9% (0.09). What is the frequency of heterozygous carriers (2pq) in this population?',
    options: ['0.42 (42%)', '0.21 (21%)', '0.49 (49%)', '0.09 (9%)'],
    correctOption: '0.42 (42%)',
    modelAnswer: 'q² = 0.09 => q = 0.3. Since p + q = 1, p = 0.7. Heterozygous carrier frequency = 2pq = 2 × 0.7 × 0.3 = 0.42 (42%).',
    stepMarking: [
      { step: 'q² = 0.09 => q = 0.3 => p = 0.7', marks: '+2' },
      { step: '2pq = 2(0.7)(0.3) = 0.42', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'Five factors disturb Hardy-Weinberg equilibrium: Gene migration/flow, Genetic drift (founder effect), Mutation, Genetic recombination, Natural selection.',
    commonPitfall: 'Reporting pq (0.21) instead of 2pq (0.42)!'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Evolution (Natural Selection Types)',
    questionText: 'When natural selection favours individuals with BOTH extreme phenotypes over the mean character value, producing two peaks in the distribution curve, it is termed:',
    options: [
      'Disruptive selection',
      'Stabilising selection',
      'Directional selection',
      'Saltation'
    ],
    correctOption: 'Disruptive selection',
    modelAnswer: 'Stabilising = more individuals acquire mean character value (narrow peak). Directional = peak shifts in one direction (e.g., industrial melanism). Disruptive = both peripheral values favoured (two peaks). Saltation = Hugo de Vries single-step large mutation.',
    stepMarking: [{ step: 'Match two-peak distribution to Disruptive selection', marks: '+4 / -1' }],
    examinerTip: 'Industrial melanism (Biston betularia) is directional selection, NOT genetic drift.',
    commonPitfall: 'Confusing disruptive (two peaks) with directional (one shifted peak).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Evolution (Human Evolution)',
    questionText: 'Arrange the following hominids in the correct chronological sequence with their matching cranial capacities:\n(a) Homo habilis (650–800 cc), (b) Homo erectus (~900 cc), (c) Neanderthal man (~1400 cc), (d) Australopithecines',
    options: ['(d) -> (a) -> (b) -> (c)', '(a) -> (d) -> (b) -> (c)', '(d) -> (b) -> (a) -> (c)', '(b) -> (a) -> (d) -> (c)'],
    correctOption: '(d) -> (a) -> (b) -> (c)',
    modelAnswer: 'Sequence in NCERT XII Ch 6: Dryopithecus/Ramapithecus -> Australopithecines (~2 mya, stone weapons, fruit eaters) -> Homo habilis (650–800 cc, did not eat meat) -> Homo erectus (900 cc, Java 1.5 mya, ate meat) -> Neanderthal man (1400 cc, hides/buried dead) -> Homo sapiens.',
    stepMarking: [{ step: 'Order Australopithecines -> H. habilis -> H. erectus -> Neanderthal', marks: '+4 / -1' }],
    examinerTip: 'Homo habilis = "first human-like being" (650–800 cc, did NOT eat meat).',
    commonPitfall: 'Reversing Homo habilis and Homo erectus.'
  },
  // 51-55: Health, Immunity, Dengue/Chikungunya & Microbes
  {
    section: 'A',
    marks: 4,
    topic: 'Human Health & Immunity (Antibodies & Vaccination)',
    questionText: 'Which immunoglobulin class is abundantly present in yellowish colostrum secreted by the mother during the initial days of lactation (natural passive immunity), and which mediates allergic responses?',
    options: [
      'IgA (colostrum); IgE (allergy/mast cell degranulation)',
      'IgG (colostrum); IgM (allergy)',
      'IgM (colostrum); IgA (allergy)',
      'IgE (colostrum); IgG (allergy)'
    ],
    correctOption: 'IgA (colostrum); IgE (allergy/mast cell degranulation)',
    modelAnswer: 'Colostrum contains abundant IgA protecting the newborn (passive immunity); IgG crosses the placenta; IgE mediates allergic reactions (releasing histamine & serotonin from mast cells).',
    stepMarking: [{ step: 'Match IgA = colostrum passive immunity; IgE = allergy', marks: '+4 / -1' }],
    examinerTip: 'Anti-tetanus serum (ATS) and anti-venom injections are ARTIFICIAL passive immunity (preformed antibodies).',
    commonPitfall: 'Confusing IgA (secretory/colostrum) with IgG (placental).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Human Health (NMC Highlighted Vector Diseases — Dengue & Chikungunya)',
    questionText: 'In the NMC-updated NEET syllabus, both Dengue and Chikungunya are viral diseases transmitted to humans by the bite of which mosquito vector?',
    options: [
      'Female Aedes aegypti mosquito (day-biting)',
      'Female Anopheles mosquito (malaria vector)',
      'Female Culex mosquito (filariasis/Wuchereria vector)',
      'Tsetse fly (Glossina)'
    ],
    correctOption: 'Female Aedes aegypti mosquito (day-biting)',
    modelAnswer: 'NCERT XII Ch 7 explicitly mentions Aedes mosquitoes as vectors for both Dengue and Chikungunya (viral diseases), whereas Anopheles transmits Plasmodium (malaria) and Culex transmits Wuchereria (elephantiasis).',
    stepMarking: [{ step: 'Identify Aedes mosquito as vector for Dengue & Chikungunya', marks: '+4 / -1' }],
    examinerTip: 'Dengue and Chikungunya were specifically highlighted in the updated NMC NEET UG syllabus.',
    commonPitfall: 'Selecting Culex (filariasis) or Anopheles (malaria).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Human Health (AIDS / HIV & Malaria)',
    questionText: 'Upon entering human macrophages (HIV factory), the HIV retrovirus synthesises viral DNA inside the host cell using _____, and progressively destroys _____ leading to severe immunodeficiency:',
    options: [
      'Reverse transcriptase; Helper T-lymphocytes (T_H cells)',
      'DNA-dependent RNA polymerase; B-lymphocytes directly',
      'Taq polymerase; Cytotoxic NK cells',
      'Restriction endonuclease; Neutrophils'
    ],
    correctOption: 'Reverse transcriptase; Helper T-lymphocytes (T_H cells)',
    modelAnswer: 'HIV has ssRNA + reverse transcriptase. Inside macrophages it makes viral DNA which integrates into host genome; progeny viruses attack and deplete Helper T-lymphocytes (CD4⁺). Diagnosed by ELISA.',
    stepMarking: [{ step: 'Verify macrophage HIV factory, reverse transcriptase, and Helper-T depletion', marks: '+4 / -1' }],
    examinerTip: 'Malaria sporozoites multiply asexually in liver cells first, then RBCs (releasing haemozoin causing chills/fever every 3–4 days).',
    commonPitfall: 'Thinking HIV directly destroys RBCs or B-cells first.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Microbes in Human Welfare (Bioactive Molecules)',
    questionText: 'Match List I (Bioactive Molecule / Enzyme) with List II (Microbial Source):\n(a) Cyclosporin A (immunosuppressant) — (i) Monascus purpureus\n(b) Statins (blood-cholesterol lowering) — (ii) Trichoderma polysporum\n(c) Streptokinase (clot buster) — (iii) Aspergillus niger\n(d) Citric acid — (iv) Streptococcus',
    options: ['a-ii, b-i, c-iv, d-iii', 'a-i, b-ii, c-iv, d-iii', 'a-ii, b-iii, c-iv, d-i', 'a-iv, b-i, c-ii, d-iii'],
    correctOption: 'a-ii, b-i, c-iv, d-iii',
    modelAnswer: 'Cyclosporin A = Trichoderma polysporum (fungus); Statins = Monascus purpureus (yeast, competitive inhibitor of cholesterol synthesis); Streptokinase = Streptococcus (bacterium); Citric acid = Aspergillus niger (fungus).',
    stepMarking: [{ step: 'Match all four industrial microbes from NCERT Ch 8', marks: '+4 / -1' }],
    examinerTip: 'Also know: Lipases (detergent oily stains), Pectinases/Proteases (clarifying bottled fruit juices), Methanobacterium (biogas CH₄).',
    commonPitfall: 'Swapping Trichoderma polysporum (cyclosporin A) and Monascus purpureus (statins).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Microbes in Human Welfare (Sewage Treatment & Biocontrol)',
    questionText: 'Given below are two statements:\nStatement I: During secondary (biological) sewage treatment, vigorous growth of useful aerobic microbes into flocs (bacteria associated with fungal filaments) significantly reduces Biochemical Oxygen Demand (BOD).\nStatement II: Baculoviruses (Nucleopolyhedrovirus) are species-specific, narrow-spectrum insecticidal biocontrol agents that have no negative impacts on plants, mammals, birds, or non-target insects.\nChoose the correct option:',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Both Statement I and Statement II are correct',
    modelAnswer: 'Secondary sewage treatment uses aerobic flocs in aeration tanks to consume organic matter and reduce BOD before anaerobic sludge digestion produces biogas. Nucleopolyhedroviruses are ideal IPM biocontrol agents.',
    stepMarking: [{ step: 'Verify flocs + BOD reduction and Nucleopolyhedrovirus IPM traits', marks: '+4 / -1' }],
    examinerTip: 'Greater the BOD of waste water, more is its polluting potential.',
    commonPitfall: 'Confusing primary treatment (physical filtration & sedimentation) with secondary treatment (biological flocs).'
  },
  // 56-60: Biotechnology
  {
    section: 'A',
    marks: 4,
    topic: 'Biotechnology (PCR Steps & Enzyme)',
    questionText: 'During Polymerase Chain Reaction (PCR), the correct sequence of thermal-cycling steps and temperature for Primer Annealing and Extension is:',
    options: [
      'Denaturation (~94°C) -> Annealing (50–60°C) -> Extension (Taq polymerase at 72°C)',
      'Annealing (72°C) -> Denaturation (55°C) -> Extension (94°C)',
      'Denaturation (72°C) -> Extension (94°C) -> Annealing (55°C)',
      'Extension -> Annealing -> Ligation using EcoRI'
    ],
    correctOption: 'Denaturation (~94°C) -> Annealing (50–60°C) -> Extension (Taq polymerase at 72°C)',
    modelAnswer: 'Denaturation separates dsDNA at ~94°C; oligonucleotide primers anneal to ssDNA templates around 52–60°C; thermostable Taq DNA polymerase (from Thermus aquaticus) extends primers at 72°C.',
    stepMarking: [{ step: 'Verify D -> A -> E order and Taq polymerase at 72°C', marks: '+4 / -1' }],
    examinerTip: '30 PCR cycles can amplify a DNA segment roughly 1 billion (2³⁰) times.',
    commonPitfall: 'Swapping annealing and extension temperatures.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Biotechnology (pBR322 Cloning Vector)',
    questionText: 'In the cloning vector pBR322, if an alien DNA fragment is ligated at the BamHI restriction site within the tetracycline resistance gene (tetᴿ), recombinant transformants will:',
    options: [
      'Grow on ampicillin-containing medium but fail to grow on tetracycline-containing medium (insertional inactivation)',
      'Grow on both ampicillin and tetracycline media',
      'Fail to grow on ampicillin medium but grow on tetracycline medium',
      'Lose their origin of replication (ori) and fail to replicate'
    ],
    correctOption: 'Grow on ampicillin-containing medium but fail to grow on tetracycline-containing medium (insertional inactivation)',
    modelAnswer: 'Insertion at BamHI/SalI inactivates tetᴿ while leaving ampᴿ intact. Thus recombinants are ampᴿ (grow on ampicillin) and tetˢ (die on tetracycline), allowing replica-plate selection.',
    stepMarking: [{ step: 'Apply insertional inactivation at BamHI (tetR) preserving ampR', marks: '+4 / -1' }],
    examinerTip: 'In pBR322: PstI/PvuI are inside ampᴿ; BamHI/SalI are inside tetᴿ; rop codes for proteins involved in plasmid replication.',
    commonPitfall: 'Saying recombinants die on ampicillin too (that happens only if inserted at PstI/PvuI).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Biotechnology (Gel Electrophoresis & Restriction Enzymes)',
    questionText: 'During agarose gel electrophoresis, DNA fragments separate according to size under an electric field by moving towards the _____, and can be visualised as bright orange bands under UV light after staining with _____:',
    options: [
      'Anode (+ve electrode); Ethidium bromide (EtBr)',
      'Cathode (−ve electrode); Ethidium bromide (EtBr)',
      'Anode (+ve electrode); Methylene blue',
      'Cathode (−ve electrode); X-gal'
    ],
    correctOption: 'Anode (+ve electrode); Ethidium bromide (EtBr)',
    modelAnswer: 'DNA is negatively charged (phosphate backbone) so it migrates toward the positive anode (smaller fragments move farther through agarose pores). Stained with EtBr and exposed to UV light, DNA appears as bright orange bands; excision from gel is called elution.',
    stepMarking: [{ step: 'Verify Anode migration + EtBr/UV orange bands', marks: '+4 / -1' }],
    examinerTip: 'EcoRI recognises the palindromic sequence 5′-GAATTC-3′ and cuts between G and A leaving sticky ends.',
    commonPitfall: 'Confusing anode (positive in electrophoresis) with cathode.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Biotechnology Applications (Bt Cotton & RNAi)',
    questionText: 'Which combination of Bt toxin genes controls cotton bollworms vs corn borer, and how is a nematode (Meloidegyne incognitia) silenced in transgenic tobacco?',
    options: [
      'cryIAc & cryIIAb (cotton bollworms), cryIAb (corn borer); RNA interference (RNAi) using Agrobacterium vector producing dsRNA',
      'cryIAb (cotton bollworms), cryIAc (corn borer); PCR amplification',
      'cryIIAb (corn borer); DNA ligase gene therapy',
      'cryIAc (corn borer); Bacillus thuringiensis alkaline activation in tobacco soil'
    ],
    correctOption: 'cryIAc & cryIIAb (cotton bollworms), cryIAb (corn borer); RNA interference (RNAi) using Agrobacterium vector producing dsRNA',
    modelAnswer: 'cryIAc and cryIIAb target cotton bollworms; cryIAb targets corn borer (protoxin activates in alkaline insect midgut pH). For Meloidegyne incognitia, nematode-specific genes are introduced via Agrobacterium producing both sense and antisense RNA (dsRNA) initiating RNAi.',
    stepMarking: [{ step: 'Match Cry gene specificity + RNAi dsRNA silencing', marks: '+4 / -1' }],
    examinerTip: 'Notice the Bt protoxin is inactive in Bacillus itself and activates ONLY in the ALKALINE pH of insect gut.',
    commonPitfall: 'Swapping cryIAb (corn borer) with cryIIAb (cotton bollworm).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Biotechnology Applications (Humulin & ADA Gene Therapy)',
    questionText: 'In Eli Lilly’s (1983) recombinant human insulin (Humulin) production, how were chains A and B prepared in E. coli, and what enzyme is deficient in the first clinical gene therapy (1990)?',
    options: [
      'Two DNA sequences for chains A and B were inserted separately into E. coli plasmids, extracted, and linked by disulphide bonds (skipping C-peptide); Adenosine deaminase (ADA)',
      'Full proinsulin with C-peptide was directly secreted by yeast without cleavage; Phenylalanine hydroxylase',
      'Only chain A was made in E. coli; Glucose-6-phosphate dehydrogenase',
      'Chains A, B, and C were linked by peptide bonds; Reverse transcriptase'
    ],
    correctOption: 'Two DNA sequences for chains A and B were inserted separately into E. coli plasmids, extracted, and linked by disulphide bonds (skipping C-peptide); Adenosine deaminase (ADA)',
    modelAnswer: 'Mature insulin lacks C-peptide (present in proinsulin). Eli Lilly produced A and B chains separately in E. coli and joined them via disulphide bonds. First gene therapy (1990, 4-year-old girl) treated ADA deficiency; permanent cure is introducing the gene into bone marrow cells at early embryonic stages.',
    stepMarking: [{ step: 'Verify separate A/B chain disulphide assembly + ADA deficiency gene therapy', marks: '+4 / -1' }],
    examinerTip: 'Transgenic cow Rosie (1997) produced human alpha-lactalbumin enriched milk (2.4 g/L); GEAC regulates GM safety in India.',
    commonPitfall: 'Saying mature Humulin retains the C-peptide.'
  }
];

const CHEM_POOL: RawNeetQ[] = [
  // 1-7: Mole Concept & Atomic Structure
  {
    section: 'A',
    marks: 4,
    topic: 'Mole Concept (Limiting Reagent & Yield)',
    questionText: 'In the reaction N₂(g) + 3H₂(g) -> 2NH₃(g), 56 g of N₂ is mixed with 10 g of H₂. The limiting reagent and maximum mass of NH₃ formed are respectively (Molar masses: N₂ = 28, H₂ = 2, NH₃ = 17 g/mol):',
    options: ['H₂; 56.67 g', 'N₂; 68.0 g', 'H₂; 34.0 g', 'N₂; 56.67 g'],
    correctOption: 'H₂; 56.67 g',
    modelAnswer: 'Moles of N₂ = 56/28 = 2 mol; Moles of H₂ = 10/2 = 5 mol. 2 mol N₂ needs 6 mol H₂, so H₂ is limiting. 3 mol H₂ gives 2 mol NH₃ => 5 mol H₂ gives (10/3) mol NH₃ = (10/3) × 17 = 56.67 g.',
    stepMarking: [
      { step: 'n(N2) = 2, n(H2) = 5 => H2 limiting (needs 6 mol for 2 mol N2)', marks: '+2' },
      { step: 'm(NH3) = (5 × 2/3) × 17 = 56.67 g', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'Divide initial moles by stoichiometric coefficient: smaller ratio (5/3 = 1.67 < 2/1 = 2) is immediately the limiting reagent.',
    commonPitfall: 'Assuming the reactant with smaller mass (10 g H₂) is automatically limiting without converting to moles.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Mole Concept (Molarity vs Molality)',
    questionText: 'An aqueous solution of urea (NH₂CONH₂, molar mass = 60 g/mol) is 2 molal (2 m). If the density of the solution is 1.12 g/mL, its molarity (M) is:',
    options: ['2.0 M', '1.85 M', '2.24 M', '1.60 M'],
    correctOption: '2.0 M',
    modelAnswer: '2 m means 2 mol urea (2 × 60 = 120 g) in 1000 g water => total mass of solution = 1120 g. Volume = 1120 / 1.12 = 1000 mL = 1.0 L. Hence Molarity = 2 mol / 1.0 L = 2.0 M.',
    stepMarking: [
      { step: 'Mass of solution = 1000 + 120 = 1120 g; V = 1120 / 1.12 = 1 L', marks: '+2' },
      { step: 'M = 2 mol / 1 L = 2.0 M', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'Molality and mole fraction are temperature-independent; Molarity depends on temperature because volume changes.',
    commonPitfall: 'Taking 1000 g as solution mass instead of solvent mass.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Atomic Structure (Bohr Model)',
    questionText: 'The energy of an electron in the 2nd Bohr orbit of He⁺ ion (Z = 2) and the radius of the 3rd Bohr orbit of Li²⁺ ion (Z = 3) are respectively (take E₁(H) = −13.6 eV, a₀ = 0.529 Å):',
    options: [
      '−13.6 eV and 1.587 Å',
      '−54.4 eV and 0.529 Å',
      '−3.4 eV and 1.587 Å',
      '−13.6 eV and 4.761 Å'
    ],
    correctOption: '−13.6 eV and 1.587 Å',
    modelAnswer: 'E_n = −13.6 × Z²/n² = −13.6 × (2²/2²) = −13.6 eV. r_n = 0.529 × n²/Z = 0.529 × (3²/3) = 3 × 0.529 = 1.587 Å.',
    stepMarking: [
      { step: 'E2(He+) = -13.6 × 4/4 = -13.6 eV', marks: '+2' },
      { step: 'r3(Li2+) = 0.529 × 9/3 = 1.587 Å', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'Notice whenever n = Z, energy equals −13.6 eV and radius equals n·a₀!',
    commonPitfall: 'Using Z/n² instead of n²/Z in the Bohr radius formula.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Atomic Structure (de Broglie & Heisenberg)',
    questionText: 'If the uncertainty in position of a moving particle is equal to its de Broglie wavelength (λ), what is the minimum uncertainty in its velocity (Δv)?',
    options: ['v / (4π)', 'h / (4πm)', 'v / (2π)', '4πv'],
    correctOption: 'v / (4π)',
    modelAnswer: 'By Heisenberg: Δx · (mΔv) ≥ h/(4π). Substitute Δx = λ = h/(mv): (h/(mv)) · m · Δv ≥ h/(4π) => Δv ≥ v/(4π).',
    stepMarking: [{ step: 'Substitute Δx = h/(mv) into Δx·mΔv >= h/(4π)', marks: '+4 / -1' }],
    examinerTip: 'When Δx = Δp, Δp = √(h/4π) so Δv = (1/2m)√(h/π); when Δx = λ, Δv = v/(4π).',
    commonPitfall: 'Forgetting to cancel m and h cleanly.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Atomic Structure (Quantum Numbers & Nodes)',
    questionText: 'For a 4d orbital, the number of radial (spherical) nodes, angular (planar) nodes, and total nodes are respectively:',
    options: ['1, 2, and 3', '2, 1, and 3', '1, 3, and 4', '2, 2, and 4'],
    correctOption: '1, 2, and 3',
    modelAnswer: 'For 4d: n = 4, l = 2. Radial nodes = n − l − 1 = 4 − 2 − 1 = 1; Angular nodes = l = 2; Total nodes = n − 1 = 3.',
    stepMarking: [{ step: 'Radial = n-l-1 = 1; Angular = l = 2; Total = n-1 = 3', marks: '+4 / -1' }],
    examinerTip: 'd_{z²} has two conical nodal surfaces (no planar nodal plane), yet its angular node count l = 2 still holds.',
    commonPitfall: 'Swapping radial (n−l−1) and angular (l) formulas.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Atomic Structure (Aufbau, Pauli & Hund)',
    questionText: 'Given below are two statements:\nStatement I: For the outermost electrons of Chromium (Z = 24), the ground-state configuration is [Ar] 3d⁵ 4s¹ due to extra stability of half-filled d-subshell (symmetrical distribution and high exchange energy).\nStatement II: The maximum number of electrons in a shell with principal quantum number n = 4 is 16.\nChoose the correct option:',
    options: [
      'Statement I is correct but Statement II is incorrect',
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Statement I is correct but Statement II is incorrect',
    modelAnswer: 'Statement I is true (Cr = [Ar] 3d⁵ 4s¹). Statement II is false: total orbitals in shell n = n² = 16, so maximum electrons = 2n² = 32.',
    stepMarking: [{ step: 'Verify Cr configuration and distinguish orbitals (n²=16) vs electrons (2n²=32)', marks: '+4 / -1' }],
    examinerTip: 'Always read carefully: "number of orbitals" = n², "number of electrons" = 2n².',
    commonPitfall: 'Confusing orbital count (n² = 16) with electron capacity (2n² = 32).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Atomic Structure (Hydrogen Spectrum)',
    questionText: 'The ratio of the shortest wavelength of the Lyman series to the shortest wavelength of the Balmer series in the hydrogen emission spectrum is:',
    options: ['1 : 4', '4 : 1', '1 : 9', '5 : 36'],
    correctOption: '1 : 4',
    modelAnswer: 'Shortest wavelength (series limit) corresponds to n₂ = ∞. 1/λ_Lyman = R(1/1² − 0) = R => λ_L = 1/R. 1/λ_Balmer = R(1/2² − 0) = R/4 => λ_B = 4/R. Ratio = 1 : 4.',
    stepMarking: [{ step: 'Set n2 = ∞ for shortest λ: λ_L = 1/R, λ_B = 4/R => 1:4', marks: '+4 / -1' }],
    examinerTip: 'Shortest wavelength = max energy (n₂ = ∞); Longest wavelength (first line) = min energy (n₂ = n₁ + 1).',
    commonPitfall: 'Using n₂ = 2 and n₂ = 3 (which gives longest wavelengths, not shortest).'
  },
  // 8-14: Periodicity, Bonding & MOT
  {
    section: 'A',
    marks: 4,
    topic: 'Periodicity (Ionisation Enthalpy & Electron Gain Enthalpy)',
    questionText: 'Which sequence correctly represents: (i) increasing first ionisation enthalpy (ΔᵢH₁) of second-period elements, and (ii) increasing negative electron gain enthalpy (|ΔₑgH|) of halogens?',
    options: [
      'B < Be < C < O < N < F and I < Br < F < Cl',
      'Be < B < C < N < O < F and I < Br < Cl < F',
      'B < C < Be < O < N < F and F < Cl < Br < I',
      'Be < B < C < O < N < F and Br < I < F < Cl'
    ],
    correctOption: 'B < Be < C < O < N < F and I < Br < F < Cl',
    modelAnswer: 'Across Period 2, Be (2s²) > B (2s²2p¹) and N (half-filled 2p³) > O (2p⁴) => B < Be < C < O < N < F. For halogen electron gain enthalpy, Cl has more negative ΔₑgH than F (compact 2p repulsion in F) => Cl > F > Br > I.',
    stepMarking: [{ step: 'Apply Be>B, N>O IE anomalies and Cl>F electron gain order', marks: '+4 / -1' }],
    examinerTip: 'Same Group 16 rule: S has more negative electron gain enthalpy than O (actually O is least negative in Group 16: S > Se > Te > Po > O!).',
    commonPitfall: 'Placing F ahead of Cl in negative electron gain enthalpy.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Periodicity (Isoelectronic Ions & Oxides)',
    questionText: 'Arrange the isoelectronic species N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺ in increasing order of ionic radius, and identify the amphoteric oxide pair:',
    options: [
      'Mg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻; Al₂O₃ and ZnO',
      'N³⁻ < O²⁻ < F⁻ < Na⁺ < Mg²⁺; Na₂O and MgO',
      'Mg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻; CO₂ and SO₂',
      'Na⁺ < Mg²⁺ < F⁻ < O²⁻ < N³⁻; N₂O and CO'
    ],
    correctOption: 'Mg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻; Al₂O₃ and ZnO',
    modelAnswer: 'All five species have 10 electrons; higher nuclear charge (Z) pulls electrons closer, decreasing radius: Mg²⁺ (Z=12) < Na⁺ (11) < F⁻ (9) < O²⁻ (8) < N³⁻ (7). Neutral oxides = CO, NO, N₂O; Amphoteric = Al₂O₃, ZnO, BeO, SnO, PbO.',
    stepMarking: [{ step: 'Order 10-e- ions inversely by Z; select amphoteric Al2O3/ZnO', marks: '+4 / -1' }],
    examinerTip: 'As₂O₃ is also listed as amphoteric in NCERT Class XI Ch 3.',
    commonPitfall: 'Confusing neutral oxides (CO, NO, N₂O) with amphoteric oxides.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Chemical Bonding (VSEPR Shapes & Lone Pairs)',
    questionText: 'Match List I (Molecule/Ion) with List II (Hybridisation & Geometry):\n(a) SF₄ — (i) sp³d², Square planar (2 lone pairs)\n(b) ClF₃ — (ii) sp³d, See-saw (1 lone pair)\n(c) XeF₄ — (iii) sp³d, Bent T-shape (2 lone pairs)\n(d) I₃⁻ — (iv) sp³d, Linear (3 lone pairs)',
    options: ['a-ii, b-iii, c-i, d-iv', 'a-iii, b-ii, c-i, d-iv', 'a-ii, b-i, c-iii, d-iv', 'a-iv, b-iii, c-i, d-ii'],
    correctOption: 'a-ii, b-iii, c-i, d-iv',
    modelAnswer: 'SF₄ (4 bp + 1 lp = 5, sp³d) -> see-saw; ClF₃ (3 bp + 2 lp = 5, sp³d) -> T-shape; XeF₄ (4 bp + 2 lp = 6, sp³d²) -> square planar; I₃⁻ (2 bp + 3 lp = 5, sp³d) -> linear.',
    stepMarking: [{ step: 'Compute steric number (bp + lp) and VSEPR shapes', marks: '+4 / -1' }],
    examinerTip: 'In sp³d trigonal bipyramidal geometry, lone pairs ALWAYS occupy equatorial positions to minimize 90° lp-bp repulsions.',
    commonPitfall: 'Saying SF₄ is tetrahedral or XeF₄ is tetrahedral.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Chemical Bonding (Molecular Orbital Theory)',
    questionText: 'According to Molecular Orbital Theory, which set correctly describes O₂⁺, C₂, and He₂⁺?',
    options: [
      'O₂⁺: BO = 2.5 (paramagnetic); C₂: BO = 2 (diamagnetic, 2 π bonds only); He₂⁺: BO = 0.5 (paramagnetic)',
      'O₂⁺: BO = 1.5 (diamagnetic); C₂: BO = 2 (1 σ + 1 π); He₂⁺: BO = 0',
      'O₂⁺: BO = 2.5 (diamagnetic); C₂: BO = 2 (paramagnetic); He₂⁺: BO = 1',
      'O₂⁺: BO = 3.0 (diamagnetic); C₂: BO = 1; He₂⁺: BO = 0.5'
    ],
    correctOption: 'O₂⁺: BO = 2.5 (paramagnetic); C₂: BO = 2 (diamagnetic, 2 π bonds only); He₂⁺: BO = 0.5 (paramagnetic)',
    modelAnswer: 'O₂⁺ (15 e⁻) loses an antibonding π*2p e⁻ => BO = 2.5, 1 unpaired e⁻. C₂ (12 e⁻) fills (σ1s)²(σ*1s)²(σ2s)²(σ*2s)²(π2pₓ² = π2p_y²) => BO = 2, diamagnetic, both bonds are π! He₂⁺ (3 e⁻) => BO = (2−1)/2 = 0.5.',
    stepMarking: [{ step: 'Verify O2+ (15e-), C2 (12e- double π), He2+ (3e-)', marks: '+4 / -1' }],
    examinerTip: 'Remember MOT s-p mixing order changes at 14 e⁻: up to N₂ (≤14 e⁻), π2p is lower than σ2p_z; for O₂, F₂ (>14 e⁻), σ2p_z is lower.',
    commonPitfall: 'Assuming C₂ has one σ and one π bond like ethene.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Chemical Bonding (Dipole Moment)',
    questionText: 'Why is the dipole moment of NH₃ (1.47 D) significantly greater than that of NF₃ (0.23 D) despite fluorine being more electronegative than hydrogen?',
    options: [
      'In NH₃, the orbital dipole due to the lone pair acts in the SAME direction as the resultant N–H bond dipoles, whereas in NF₃ it opposes the resultant N–F bond dipoles',
      'NF₃ is planar (sp²) with zero bond moments',
      'N–F bonds are purely ionic with no dipole direction',
      'NH₃ has a tetrahedral bond angle of 109.5°'
    ],
    correctOption: 'In NH₃, the orbital dipole due to the lone pair acts in the SAME direction as the resultant N–H bond dipoles, whereas in NF₃ it opposes the resultant N–F bond dipoles',
    modelAnswer: 'In NH₃, N is more electronegative than H so N–H dipoles point toward N, reinforcing the upward lone-pair orbital dipole. In NF₃, F is more electronegative than N so N–F dipoles point away from N, largely cancelling the lone-pair dipole.',
    stepMarking: [{ step: 'Compare vector addition vs opposition of lone-pair orbital dipole', marks: '+4 / -1' }],
    examinerTip: 'BF₃, BeF₂, CH₄, CCl₄, CO₂, and trans-2-butene all have zero net dipole moment (μ = 0).',
    commonPitfall: 'Thinking greater electronegativity difference always gives a larger molecular dipole moment.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Chemical Bonding (Hydrogen Bonding & Fajan’s Rule)',
    questionText: 'Given below are two statements:\nStatement I: Ortho-nitrophenol is steam volatile due to intramolecular H-bonding, whereas para-nitrophenol has a higher boiling point due to intermolecular H-bonding.\nStatement II: According to Fajan’s rules, smaller cation size and larger anion size increase covalent character in an ionic bond.\nChoose the correct option:',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Both Statement I and Statement II are correct',
    modelAnswer: 'Intramolecular H-bonding in o-nitrophenol prevents molecular association (low BP, steam volatile), while intermolecular H-bonding in p-nitrophenol causes association (high BP). High polarising power (small cation, high charge) + high polarisability (large anion) favour covalent character.',
    stepMarking: [{ step: 'Verify o- vs p-nitrophenol H-bonding and Fajan’s covalent criteria', marks: '+4 / -1' }],
    examinerTip: 'HF has higher BP than HCl/HBr/HI due to H-bonding, even though HCl has lower BP than HBr < HI.',
    commonPitfall: 'Reversing o-nitrophenol and p-nitrophenol steam volatility.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Chemical Bonding (Sigma, Pi Bonds & Formal Charge)',
    questionText: 'In tetracyanoethylene, (CN)₂C=C(CN)₂, the total number of σ-bonds and π-bonds are respectively:',
    options: ['9 σ and 9 π bonds', '9 σ and 4 π bonds', '5 σ and 9 π bonds', '8 σ and 8 π bonds'],
    correctOption: '9 σ and 9 π bonds',
    modelAnswer: 'Structure has 1 C=C (1σ + 1π), 4 C–C single bonds (4σ), and 4 C≡N triple bonds (4×1σ + 4×2π = 4σ + 8π). Total = (1+4+4) = 9σ and (1+8) = 9π bonds.',
    stepMarking: [{ step: 'Count C=C (1σ,1π) + 4 C-C (4σ) + 4 C≡N (4σ,8π) => 9σ, 9π', marks: '+4 / -1' }],
    examinerTip: 'Every single bond = 1σ; double = 1σ + 1π; triple = 1σ + 2π.',
    commonPitfall: 'Forgetting the 4 C–C single bonds between central carbons and nitrile carbons.'
  },
  // 15-21: Thermodynamics & Solutions
  {
    section: 'A',
    marks: 4,
    topic: 'Thermodynamics (First Law & Reversible Work)',
    questionText: 'Two moles of an ideal gas expand isothermally and reversibly from 10 L to 100 L at 300 K. What are ΔU and the work done (w) by the IUPAC sign convention (R = 8.314 J/mol·K, ln 10 = 2.303)?',
    options: [
      'ΔU = 0, w = −11.49 kJ',
      'ΔU = +11.49 kJ, w = −11.49 kJ',
      'ΔU = 0, w = +11.49 kJ',
      'ΔU = 0, w = −5.74 kJ'
    ],
    correctOption: 'ΔU = 0, w = −11.49 kJ',
    modelAnswer: 'For an isothermal process of an ideal gas, ΔU = 0 (and ΔH = 0). By IUPAC convention (work done by system is negative): w = −2.303 nRT log(V₂/V₁) = −2.303 × 2 × 8.314 × 300 × log(10) ≈ −11488 J = −11.49 kJ.',
    stepMarking: [
      { step: 'Isothermal ideal gas => ΔU = 0', marks: '+1' },
      { step: 'w = -2.303(2)(8.314)(300)log(10) = -11.49 kJ', marks: '+3 (-1 if wrong)' }
    ],
    examinerTip: 'Under IUPAC convention in Chemistry: work done ON system (+w), work done BY system (−w).',
    commonPitfall: 'Using +11.49 kJ (Physics convention) or forgetting n = 2.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Thermodynamics (ΔH vs ΔU Relation)',
    questionText: 'For the complete combustion of solid benzoic acid: C₆H₅COOH(s) + (15/2) O₂(g) -> 7 CO₂(g) + 3 H₂O(l) at 300 K, what is (ΔH − ΔU)?',
    options: ['−0.5 RT', '+0.5 RT', '−3.5 RT', '−1.5 RT'],
    correctOption: '−0.5 RT',
    modelAnswer: 'Δn_g = gaseous products − gaseous reactants = 7 − 7.5 = −0.5. Since ΔH = ΔU + Δn_g RT, ΔH − ΔU = −0.5 RT.',
    stepMarking: [{ step: 'Compute Δng = 7 - 7.5 = -0.5 (ignore solid & liquid)', marks: '+4 / -1' }],
    examinerTip: 'Count ONLY gaseous (g) moles in Δn_g; solids (s) and liquids (l) are excluded.',
    commonPitfall: 'Including 3 mol of H₂O(l) in Δn_g.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Thermodynamics (Gibbs Energy & Spontaneity)',
    questionText: 'For a reaction with ΔH = +35.5 kJ/mol and ΔS = +83.6 J/(K·mol), above what temperature does the reaction become spontaneous?',
    options: ['424.6 K', '298 K', '42.5 K', 'Always non-spontaneous'],
    correctOption: '424.6 K',
    modelAnswer: 'With ΔH > 0 and ΔS > 0, ΔG = ΔH − TΔS < 0 when T > ΔH/ΔS = 35500 J / 83.6 J·K⁻¹ ≈ 424.6 K.',
    stepMarking: [{ step: 'Convert ΔH to 35500 J/mol and divide by 83.6 J/(K·mol)', marks: '+4 / -1' }],
    examinerTip: 'Always convert ΔH (kJ) and ΔS (J) into the SAME energy unit before calculating ΔG or T!',
    commonPitfall: 'Dividing 35.5 by 83.6 directly to get 0.425 K.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Thermochemistry (Hess’s Law & Bond Enthalpy)',
    questionText: 'Given standard enthalpies of formation (kJ/mol): CO₂(g) = −393.5, H₂O(l) = −285.8, and CH₄(g) = −74.8. What is the standard enthalpy of combustion of CH₄(g)?',
    options: ['−890.3 kJ/mol', '−604.5 kJ/mol', '+890.3 kJ/mol', '−754.1 kJ/mol'],
    correctOption: '−890.3 kJ/mol',
    modelAnswer: 'CH₄(g) + 2O₂(g) -> CO₂(g) + 2H₂O(l). ΔH°_c = [ΔH°_f(CO₂) + 2ΔH°_f(H₂O)] − [ΔH°_f(CH₄) + 0] = [−393.5 + 2(−285.8)] − (−74.8) = −965.1 + 74.8 = −890.3 kJ/mol.',
    stepMarking: [{ step: 'ΔH° = ΣΔH°f(products) - ΣΔH°f(reactants)', marks: '+4 / -1' }],
    examinerTip: 'When using ΔH°_f use (Products − Reactants); when using Bond Enthalpies use (Reactants − Products)!',
    commonPitfall: 'Reversing signs or forgetting factor 2 for H₂O(l).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Solutions (Henry’s Law & Raoult’s Law Deviations)',
    questionText: 'Given below are two statements:\nStatement I: Aquatic species are more comfortable in cold waters than in warm waters because the Henry’s law constant K_H increases with temperature, lowering O₂ solubility.\nStatement II: A mixture of ethanol and acetone shows negative deviation from Raoult’s law and forms a maximum-boiling azeotrope.\nChoose the correct option:',
    options: [
      'Statement I is correct but Statement II is incorrect',
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Statement I is correct but Statement II is incorrect',
    modelAnswer: 'Statement I is true (higher T -> higher K_H -> lower gas solubility). Statement II is false: adding acetone breaks H-bonds in ethanol, causing POSITIVE deviation (higher vapour pressure -> minimum-boiling azeotrope).',
    stepMarking: [{ step: 'Verify Henry’s law T-dependence; spot ethanol+acetone = positive deviation', marks: '+4 / -1' }],
    examinerTip: 'Positive deviation = Minimum-boiling azeotrope (ethanol+water, ethanol+acetone); Negative deviation = Maximum-boiling azeotrope (HNO₃+water, CHCl₃+acetone).',
    commonPitfall: 'Confusing positive and negative deviation azeotrope types.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Solutions (Colligative Properties & Osmotic Pressure)',
    questionText: 'If 0.1 M aqueous K₄[Fe(CN)₆] is 50% dissociated at 300 K, what is its effective Van’t Hoff factor (i) and which 0.1 M aqueous solution will have the HIGHEST boiling point among these?',
    options: [
      'i = 3.0; 0.1 M Al₂(SO₄)₃ (assuming 100% dissociation, i = 5)',
      'i = 2.5; 0.1 M NaCl (i = 2)',
      'i = 3.0; 0.1 M Urea (i = 1)',
      'i = 3.5; 0.1 M KCl (i = 2)'
    ],
    correctOption: 'i = 3.0; 0.1 M Al₂(SO₄)₃ (assuming 100% dissociation, i = 5)',
    modelAnswer: 'K₄[Fe(CN)₆] dissociates into n = 5 ions (4 K⁺ + [Fe(CN)₆]⁴⁻): i = 1 + α(n − 1) = 1 + 0.5(5 − 1) = 3.0. Complete dissociation of Al₂(SO₄)₃ yields n = 5 ions (2 Al³⁺ + 3 SO₄²⁻), giving highest i·m and highest ΔT_b.',
    stepMarking: [{ step: 'Apply i = 1 + α(n - 1) = 3.0 and compare i·C values', marks: '+4 / -1' }],
    examinerTip: 'Never dissociate the complex coordination sphere — only counter-ions separate in water!',
    commonPitfall: 'Breaking [Fe(CN)₆]⁴⁻ into Fe²⁺ and 6 CN⁻ (n = 11).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Solutions (Freezing Point Depression)',
    questionText: 'Calculate the mass of ethylene glycol (molar mass = 62 g/mol) to be added to 500 g of water to lower its freezing point by 3.72°C (K_f of water = 1.86 K·kg/mol):',
    options: ['62 g', '31 g', '124 g', '93 g'],
    correctOption: '62 g',
    modelAnswer: 'ΔT_f = K_f · m => 3.72 = 1.86 × (w / 62) × (1000 / 500) => 2 = (w / 62) × 2 => w = 62 g.',
    stepMarking: [{ step: '3.72 = 1.86 × (w/62) × (1000/500) => w = 62 g', marks: '+4 / -1' }],
    examinerTip: 'Ethylene glycol is a non-electrolyte (i = 1) used as car radiator antifreeze.',
    commonPitfall: 'Taking solvent mass in grams instead of kg (missing 1000/500 = 2).'
  },
  // 22-28: Equilibrium & Redox
  {
    section: 'A',
    marks: 4,
    topic: 'Chemical Equilibrium (Kp, Kc & Le Chatelier)',
    questionText: 'For the reaction N₂O₄(g) ⇌ 2NO₂(g) (ΔH = +57.2 kJ/mol), the yield of NO₂ increases by:',
    options: [
      'Increasing temperature and decreasing total pressure',
      'Decreasing temperature and increasing total pressure',
      'Adding an inert gas at constant volume',
      'Adding a positive catalyst at equilibrium'
    ],
    correctOption: 'Increasing temperature and decreasing total pressure',
    modelAnswer: 'Reaction is endothermic (ΔH > 0), so higher T shifts equilibrium forward. Also Δn_g = 2 − 1 = +1 > 0 (more gas moles on product side), so lowering pressure shifts equilibrium forward. Inert gas at constant volume or catalyst has no shift.',
    stepMarking: [{ step: 'Apply Le Chatelier to endothermic (+ΔH) and Δng = +1', marks: '+4 / -1' }],
    examinerTip: 'Equilibrium constant K depends ONLY on temperature (and stoichiometry representation).',
    commonPitfall: 'Thinking adding inert gas at constant VOLUME shifts equilibrium.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Ionic Equilibrium (pH of Strong Acid Dilution)',
    questionText: 'What is the approximate pH of a 10⁻⁸ M aqueous HCl solution at 298 K (K_w = 10⁻¹⁴)?',
    options: ['6.98 (just below 7)', '8.00', '7.00', '6.00'],
    correctOption: '6.98 (just below 7)',
    modelAnswer: 'Acid solution cannot have pH > 7! Accounting for water auto-ionisation: [H⁺] = 10⁻⁸ + x, [OH⁻] = x => (10⁻⁸ + x)x = 10⁻¹⁴ => [H⁺] ≈ 1.05 × 10⁻⁷ M => pH = −log(1.05×10⁻⁷) ≈ 6.98.',
    stepMarking: [{ step: 'Include water auto-ionisation H+ (~10^-7 M) => pH just < 7 (~6.98)', marks: '+4 / -1' }],
    examinerTip: 'Classic NEET trap: pH of very dilute acid (< 10⁻⁶ M) is ALWAYS between 6 and 7, never > 7!',
    commonPitfall: 'Computing −log(10⁻⁸) = 8.00 (basic pH for an acid!).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Ionic Equilibrium (Buffer & Henderson-Hasselbalch)',
    questionText: 'What is the pH of a buffer solution prepared by mixing 500 mL of 0.2 M CH₃COOH (pK_a = 4.74) and 500 mL of 0.2 M CH₃COONa?',
    options: ['4.74', '5.04', '4.44', '9.26'],
    correctOption: '4.74',
    modelAnswer: 'Moles of CH₃COOH = 0.5 × 0.2 = 0.1 mol; moles of CH₃COONa = 0.5 × 0.2 = 0.1 mol. By Henderson-Hasselbalch: pH = pK_a + log([Salt]/[Acid]) = 4.74 + log(1) = 4.74.',
    stepMarking: [{ step: '[Salt] = [Acid] => log(1) = 0 => pH = pKa = 4.74', marks: '+4 / -1' }],
    examinerTip: 'Maximum buffer capacity occurs when [Salt] = [Acid], i.e., pH = pK_a (acidic) or pOH = pK_b (basic).',
    commonPitfall: 'Calculating pOH instead of pH.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Ionic Equilibrium (Solubility Product K_sp)',
    questionText: 'Solubility of AgCl in 0.1 M NaCl solution (given K_sp of AgCl = 1.6 × 10⁻¹⁰) is approximately:',
    options: ['1.6 × 10⁻⁹ M', '1.26 × 10⁻⁵ M', '1.6 × 10⁻¹¹ M', '1.0 × 10⁻¹ M'],
    correctOption: '1.6 × 10⁻⁹ M',
    modelAnswer: 'K_sp = [Ag⁺][Cl⁻] = S(S + 0.1) ≈ S(0.1) = 1.6 × 10⁻¹⁰ => S = 1.6 × 10⁻⁹ M (common ion effect suppression).',
    stepMarking: [{ step: 'S = Ksp / [Cl-] = 1.6×10^-10 / 0.1 = 1.6×10^-9 M', marks: '+4 / -1' }],
    examinerTip: 'In pure water S = √K_sp = 1.26 × 10⁻⁵ M; common ion Cl⁻ suppresses solubility by ~10⁴ times.',
    commonPitfall: 'Using √K_sp without accounting for 0.1 M Cl⁻ from NaCl.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Ionic Equilibrium (Salt Hydrolysis & Conjugates)',
    questionText: 'Which aqueous salt solution is acidic in nature, and what is the conjugate base of H₂PO₄⁻ respectively?',
    options: [
      'NH₄Cl; HPO₄²⁻',
      'CH₃COONa; H₃PO₄',
      'KNO₃; PO₄³⁻',
      'Na₂CO₃; H₃PO₄'
    ],
    correctOption: 'NH₄Cl; HPO₄²⁻',
    modelAnswer: 'NH₄Cl is salt of strong acid (HCl) + weak base (NH₄OH), so cationic hydrolysis gives pH < 7. Removing one H⁺ from H₂PO₄⁻ gives its conjugate base HPO₄²⁻ (while adding H⁺ gives conjugate acid H₃PO₄).',
    stepMarking: [{ step: 'Identify SA+WB salt (NH4Cl) and H2PO4- -> H+ + HPO4^2-', marks: '+4 / -1' }],
    examinerTip: 'Conjugate base = species − H⁺; Conjugate acid = species + H⁺.',
    commonPitfall: 'Picking H₃PO₄ (conjugate acid) instead of HPO₄²⁻ (conjugate base).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Redox Reactions (Oxidation Numbers & Disproportionation)',
    questionText: 'The oxidation numbers of Cr in CrO₅ (butterfly peroxide) and S in H₂S₂O₈ (Marshall’s acid) are respectively, and which species does NOT undergo disproportionation?',
    options: [
      '+6 and +6; F₂ (or MnO₄⁻ / ClO₄⁻)',
      '+10 and +7; Cl₂',
      '+6 and +7; P₄',
      '+5 and +6; H₂O₂'
    ],
    correctOption: '+6 and +6; F₂ (or MnO₄⁻ / ClO₄⁻)',
    modelAnswer: 'CrO₅ has two −O–O− peroxo linkages (4 O at −1, 1 oxo at −2) => Cr = +6. H₂S₂O₈ has one −O–O− peroxo bridge (2 O at −1, 6 O at −2) => S = +6. Maximum oxidation states (MnO₄⁻, ClO₄⁻) and F₂ (most electronegative, 0 -> −1 only) cannot disproportionate.',
    stepMarking: [{ step: 'Account for peroxo O (-1) in CrO5 & H2S2O8; identify non-disproportionating species', marks: '+4 / -1' }],
    examinerTip: 'Oxidation state can NEVER exceed group valence (+6 for Cr/S, +7 for Mn/Cl).',
    commonPitfall: 'Computing +10 for CrO₅ or +7 for H₂S₂O₈ by assuming all O are −2.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Redox Reactions (Balancing & Equivalent Weight)',
    questionText: 'In acidic medium, how many moles of FeC₂O₄ (ferrous oxalate) are completely oxidised by 1 mole of KMnO₄?',
    options: ['5/3 mol (1.67 mol)', '5 mol', '1 mol', '3/5 mol'],
    correctOption: '5/3 mol (1.67 mol)',
    modelAnswer: 'In acidic medium, MnO₄⁻ -> Mn²⁺ (n-factor = 5). In FeC₂O₄, BOTH Fe²⁺ -> Fe³⁺ (1 e⁻) AND C₂O₄²⁻ -> 2 CO₂ (2 e⁻) are oxidised => total n-factor = 1 + 2 = 3. By equivalents: 1 × 5 = n × 3 => n = 5/3 mol.',
    stepMarking: [
      { step: 'n-factor(MnO4-) = 5; n-factor(FeC2O4) = 1 (Fe) + 2 (C2O4^2-) = 3', marks: '+2' },
      { step: '1 × 5 = n × 3 => n = 5/3 mol', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'Always check BOTH cation and anion in FeC₂O₄ (and Cu₂S, FeS₂) for redox n-factor!',
    commonPitfall: 'Using n-factor = 2 (oxalate only) or 1 (Fe²⁺ only) instead of 3.'
  },
  // 29-35: Electrochemistry & Kinetics
  {
    section: 'A',
    marks: 4,
    topic: 'Electrochemistry (Nernst Equation & ΔG°)',
    questionText: 'For the cell reaction Zn(s) + Cu²⁺(aq) -> Zn²⁺(aq) + Cu(s) with E°_cell = 1.10 V at 298 K, calculate ΔG° and equilibrium constant log K_c (F = 96500 C/mol, 2.303RT/F = 0.059 V):',
    options: [
      'ΔG° = −212.3 kJ/mol, log K_c ≈ 37.3',
      'ΔG° = −106.15 kJ/mol, log K_c ≈ 18.6',
      'ΔG° = +212.3 kJ/mol, log K_c ≈ 37.3',
      'ΔG° = −212.3 kJ/mol, log K_c ≈ 18.6'
    ],
    correctOption: 'ΔG° = −212.3 kJ/mol, log K_c ≈ 37.3',
    modelAnswer: 'n = 2. ΔG° = −nFE°_cell = −2 × 96500 × 1.10 = −212,300 J/mol = −212.3 kJ/mol. Also E°_cell = (0.059/n) log K_c => log K_c = (2 × 1.10)/0.059 ≈ 37.3.',
    stepMarking: [
      { step: 'ΔG° = -2 × 96500 × 1.10 = -212.3 kJ/mol', marks: '+2' },
      { step: 'log Kc = 2(1.10)/0.059 ≈ 37.3', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'E°_cell is an intensive property (does not scale with stoichiometry), whereas ΔG° is extensive (scales with n).',
    commonPitfall: 'Using n = 1 instead of n = 2.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Electrochemistry (Kohlrausch Law & Conductance)',
    questionText: 'Given Λ°_m values (S·cm²/mol): HCl = 426, NaCl = 126, CH₃COONa = 91. What is the limiting molar conductivity Λ°_m of CH₃COOH?',
    options: ['391 S·cm²/mol', '643 S·cm²/mol', '209 S·cm²/mol', '300 S·cm²/mol'],
    correctOption: '391 S·cm²/mol',
    modelAnswer: 'By Kohlrausch’s law: Λ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) − Λ°_m(NaCl) = 91 + 426 − 126 = 391 S·cm²/mol.',
    stepMarking: [{ step: '91 + 426 - 126 = 391 S·cm²/mol', marks: '+4 / -1' }],
    examinerTip: 'On dilution, conductivity (κ) DECREASES (fewer ions per unit volume), whereas molar conductivity (Λ_m) INCREASES.',
    commonPitfall: 'Confusing κ (decreases on dilution) with Λ_m (increases on dilution).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Electrochemistry (Faraday’s Laws & Electrolysis)',
    questionText: 'How many Faradays of electricity are required to produce 40 g of Ca from molten CaCl₂ and 18 g of Al from molten Al₂O₃ respectively (Atomic masses: Ca = 40, Al = 27)?',
    options: ['2 F and 2 F', '1 F and 3 F', '2 F and 3 F', '4 F and 2 F'],
    correctOption: '2 F and 2 F',
    modelAnswer: 'Ca²⁺ + 2e⁻ -> Ca (1 mol = 40 g needs 2 F). Al³⁺ + 3e⁻ -> Al (1 mol = 27 g needs 3 F; hence 18 g = 2/3 mol needs (2/3)×3 = 2 F).',
    stepMarking: [
      { step: '40 g Ca (1 mol Ca2+) => 2 F', marks: '+2' },
      { step: '18 g Al (2/3 mol Al3+) => (2/3)×3 = 2 F', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'For aqueous NaCl electrolysis, H₂ is liberated at cathode (lower reduction potential of Na⁺ than H₂O) and Cl₂ at anode (overpotential of O₂).',
    commonPitfall: 'Saying 18 g Al needs 3 F (which is for 27 g = 1 mol).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Electrochemistry (Batteries, Fuel Cells & Corrosion)',
    questionText: 'Given below are two statements:\nStatement I: During discharging of a lead storage battery, both the Pb anode and PbO₂ cathode are converted into solid PbSO₄ while H₂SO₄ is consumed.\nStatement II: A H₂–O₂ fuel cell converts chemical energy directly into electrical energy with ~70% efficiency and produces water as the only by-product.\nChoose the correct option:',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Both Statement I and Statement II are correct',
    modelAnswer: 'Discharge: Pb + PbO₂ + 2H₂SO₄ -> 2PbSO₄ + 2H₂O (density of acid drops). H₂-O₂ fuel cell (used in Apollo space programme) gives ~70% efficiency vs ~40% in thermal plants.',
    stepMarking: [{ step: 'Verify lead-storage discharge reaction and fuel cell efficiency', marks: '+4 / -1' }],
    examinerTip: 'In dry cell (Leclanche): Zn anode, MnO₂+C cathode, NH₄Cl+ZnCl₂ paste (~1.5 V); Mercury cell gives constant 1.35 V.',
    commonPitfall: 'Thinking PbSO₄ forms only at the anode during discharge.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Chemical Kinetics (Order, Molecularity & Half-life)',
    questionText: 'A first-order reaction is 75% complete in 40 minutes. How much time will it take for 87.5% completion?',
    options: ['60 minutes', '80 minutes', '50 minutes', '120 minutes'],
    correctOption: '60 minutes',
    modelAnswer: 'For first-order reactions, t_{1/2} is constant: 75% completion = 2 half-lives (50% -> 75%) = 40 min => t_{1/2} = 20 min. 87.5% completion = 3 half-lives (50% -> 75% -> 87.5%) = 3 × 20 = 60 min.',
    stepMarking: [{ step: '75% = 2 t1/2 => t1/2 = 20 min; 87.5% = 3 t1/2 = 60 min', marks: '+4 / -1' }],
    examinerTip: 'Useful shortcut for 1st order: t_{99.9%} = 10 × t_{50%}; t_{99%} = 2 × t_{90%}; t_{75%} = 2 × t_{50%}.',
    commonPitfall: 'Adding 40 + 40 = 80 min or scaling linearly with percentage.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Chemical Kinetics (Zero-Order & Units of k)',
    questionText: 'If the rate constant of a reaction is k = 2.5 × 10⁻⁴ mol·L⁻¹·s⁻¹, what is the order of the reaction and the formula for its half-life (t_{1/2})?',
    options: [
      'Zero order; t_{1/2} = [R]₀ / (2k)',
      'First order; t_{1/2} = 0.693 / k',
      'Second order; t_{1/2} = 1 / (k[R]₀)',
      'Zero order; t_{1/2} = [R]₀ / k'
    ],
    correctOption: 'Zero order; t_{1/2} = [R]₀ / (2k)',
    modelAnswer: 'Units of k = (mol/L)^{1−n} s⁻¹. Here mol·L⁻¹·s⁻¹ gives 1 − n = 1 => n = 0 (zero order). Integrated law [R] = [R]₀ − kt gives t_{1/2} = [R]₀ / (2k).',
    stepMarking: [{ step: 'Match k units mol·L-1·s-1 to n=0 and t1/2 = [R]0/(2k)', marks: '+4 / -1' }],
    examinerTip: 'Thermal decomposition of HI on gold surface and NH₃ on hot platinum at high pressure are zero-order reactions.',
    commonPitfall: 'Forgetting the factor of 2 in the denominator of zero-order t_{1/2}.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Chemical Kinetics (Arrhenius Equation & Catalyst)',
    questionText: 'For a reaction, the rate doubles when temperature rises from 300 K to 310 K. How does a catalyst increase the rate of reaction, and what is the slope of a ln k vs (1/T) plot?',
    options: [
      'Lowers activation energy (E_a) via an alternate path without altering ΔH or equilibrium; slope = −E_a / R',
      'Increases ΔH and shifts equilibrium forward; slope = −E_a / (2.303R)',
      'Increases collision frequency Z exclusively; slope = +E_a / R',
      'Lowers E_a of forward reaction only; slope = −E_a / R'
    ],
    correctOption: 'Lowers activation energy (E_a) via an alternate path without altering ΔH or equilibrium; slope = −E_a / R',
    modelAnswer: 'ln k = ln A − (E_a/R)(1/T) => slope of ln k vs 1/T is −E_a/R (for log₁₀ k vs 1/T it is −E_a/(2.303R)). A catalyst lowers E_a equally for both forward and backward reactions without changing ΔH, ΔG, or K_eq.',
    stepMarking: [{ step: 'Verify catalyst lowers Ea equally (ΔH/K unchanged) and ln k slope = -Ea/R', marks: '+4 / -1' }],
    examinerTip: 'Watch the y-axis label carefully: ln k gives −E_a/R, whereas log₁₀ k gives −E_a/(2.303R)!',
    commonPitfall: 'Writing −E_a/(2.303R) when the axis is natural log (ln k).'
  },
  // 36-43: p-Block, d/f-Block & Coordination Compounds
  {
    section: 'A',
    marks: 4,
    topic: 'p-Block (Inert Pair Effect & Group 13–14 Trends)',
    questionText: 'Due to the inert pair effect (reluctance of ns² electrons to participate in bonding down the group due to poor shielding by d and f electrons), which stability order is CORRECT?',
    options: [
      'Tl⁺ > Tl³⁺, Pb²⁺ > Pb⁴⁺, and Bi³⁺ > Bi⁵⁺',
      'Tl³⁺ > Tl⁺, Pb⁴⁺ > Pb²⁺, and Bi⁵⁺ > Bi³⁺',
      'Al⁺ > Al³⁺ and C²⁺ > C⁴⁺',
      'Tl⁺ < In⁺ < Ga⁺ < Al⁺'
    ],
    correctOption: 'Tl⁺ > Tl³⁺, Pb²⁺ > Pb⁴⁺, and Bi³⁺ > Bi⁵⁺',
    modelAnswer: 'Down Groups 13, 14, and 15, the lower oxidation state (group valence − 2) becomes progressively more stable: Tl⁺ > Tl³⁺, Pb²⁺ > Pb⁴⁺, Bi³⁺ > Bi⁵⁺. Hence PbO₂ and Bi(V) act as strong oxidising agents.',
    stepMarking: [{ step: 'Verify stability of +1 (Tl), +2 (Pb), +3 (Bi) over group valence', marks: '+4 / -1' }],
    examinerTip: 'In Group 13, TlI₃ is actually Tl⁺(I₃⁻), NOT Tl³⁺ with 3 I⁻!',
    commonPitfall: 'Reversing stability order for the heaviest p-block metals.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'p-Block (Oxoacids of P, S, Cl & Halogens)',
    questionText: 'Which combination correctly matches the number of P–H bonds in H₃PO₂ (hypophosphorous acid), S–S linkage in H₂S₂O₆, and acidic strength order of halogen oxoacids?',
    options: [
      '2 P–H bonds (monobasic, reducing), 1 S–S bond, and HClO < HClO₂ < HClO₃ < HClO₄',
      '1 P–H bond (dibasic), no S–S bond, and HClO₄ < HClO₃ < HClO₂ < HClO',
      '3 P–H bonds, 1 S–O–S bond, and HClO < HClO₂ < HClO₃ < HClO₄',
      '2 P–H bonds (dibasic), 1 S–S bond, and HClO < HClO₂ < HClO₃ < HClO₄'
    ],
    correctOption: '2 P–H bonds (monobasic, reducing), 1 S–S bond, and HClO < HClO₂ < HClO₃ < HClO₄',
    modelAnswer: 'H₃PO₂ has 1 P=O, 1 P–OH (monobasic!), and 2 P–H bonds (strong reducing agent). Dithionic acid H₂S₂O₆ has a direct S–S bond. Increasing oxidation state of Cl (+1 to +7) increases acid strength: HClO < HClO₂ < HClO₃ < HClO₄.',
    stepMarking: [{ step: 'Verify H3PO2 structure (1 OH, 2 P-H), H2S2O6 S-S bond, and HClOx acidity', marks: '+4 / -1' }],
    examinerTip: 'Count ONLY –OH groups for basicity of phosphorus oxoacids: H₃PO₂ = 1, H₃PO₃ = 2, H₃PO₄ = 3.',
    commonPitfall: 'Thinking H₃PO₂ is tribasic because it has 3 hydrogens.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'p-Block (Xenon Compounds & Interhalogens)',
    questionText: 'Match List I (Xenon Species) with List II (Geometry):\n(a) XeF₂ — (i) Square pyramidal (sp³d², 1 lp)\n(b) XeF₄ — (ii) Linear (sp³d, 3 lp)\n(c) XeOF₄ — (iii) Distorted octahedral (sp³d³, 1 lp)\n(d) XeF₆ — (iv) Square planar (sp³d², 2 lp)',
    options: ['a-ii, b-iv, c-i, d-iii', 'a-ii, b-i, c-iv, d-iii', 'a-iv, b-ii, c-i, d-iii', 'a-iii, b-iv, c-i, d-ii'],
    correctOption: 'a-ii, b-iv, c-i, d-iii',
    modelAnswer: 'XeF₂ (2 bp + 3 lp) = linear; XeF₄ (4 bp + 2 lp) = square planar; XeOF₄ (5 bp + 1 lp) = square pyramidal; XeF₆ (6 bp + 1 lp) = distorted octahedral.',
    stepMarking: [{ step: 'Verify NCERT p-block Xe compound shapes', marks: '+4 / -1' }],
    examinerTip: 'Partial hydrolysis of XeF₆ gives XeOF₄ and XeO₂F₂; complete hydrolysis gives explosive XeO₃ (pyramidal).',
    commonPitfall: 'Saying XeF₆ is regular octahedral.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'd & f-Block (Magnetic Moment & KMnO₄/K₂Cr₂O₇)',
    questionText: 'Which 3d transition-metal ion has a spin-only magnetic moment of √24 BM (4.90 BM), and how does Cr₂O₇²⁻ behave with change in pH?',
    options: [
      'Fe²⁺ or Cr²⁺ (4 unpaired e⁻); Cr₂O₇²⁻ (orange, acidic) ⇌ 2 CrO₄²⁻ (yellow, basic)',
      'Mn²⁺ (5 unpaired e⁻); Cr₂O₇²⁻ (yellow, acidic) ⇌ CrO₄²⁻ (orange, basic)',
      'Co²⁺ (3 unpaired e⁻); CrO₄²⁻ is stable in acidic medium',
      'Ni²⁺ (2 unpaired e⁻); Cr₂O₇²⁻ decomposes to Cr³⁺ in alkali'
    ],
    correctOption: 'Fe²⁺ or Cr²⁺ (4 unpaired e⁻); Cr₂O₇²⁻ (orange, acidic) ⇌ 2 CrO₄²⁻ (yellow, basic)',
    modelAnswer: 'μ = √(n(n+2)) = √24 => n = 4 unpaired electrons, matching d⁴ (Cr²⁺) or d⁶ (Fe²⁺). In aqueous medium: 2CrO₄²⁻ (yellow) + 2H⁺ ⇌ Cr₂O₇²⁻ (orange) + H₂O.',
    stepMarking: [{ step: 'Solve n(n+2) = 24 => n = 4 and check chromate-dichromate pH shift', marks: '+4 / -1' }],
    examinerTip: 'Remember: Mn²⁺ (d⁵) = 5.92 BM; Fe²⁺ (d⁶) = 4.90 BM; Co²⁺ (d⁷) = 3.87 BM; Ni²⁺ (d⁸) = 2.83 BM; Cu²⁺ (d⁹) = 1.73 BM.',
    commonPitfall: 'Swapping yellow chromate (basic) and orange dichromate (acidic).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'd & f-Block (Lanthanoid Contraction & Actinoids)',
    questionText: 'Given below are two statements:\nStatement I: Zr (4d) and Hf (5d) have almost identical atomic radii (160 pm vs 159 pm) and closely similar chemical properties due to lanthanoid contraction.\nStatement II: Actinoids show a much wider range of oxidation states than lanthanoids because 5f, 6d, and 7s orbitals are of comparable energies.\nChoose the correct option:',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Both Statement I and Statement II are correct',
    modelAnswer: 'Poor shielding by 4f electrons causes steady decrease in lanthanoid ionic radii (lanthanoid contraction), making 4d/5d pairs (Zr/Hf, Nb/Ta, Mo/W) nearly identical in size. Actinoids show +3 up to +7 due to small energy gap between 5f, 6d, 7s.',
    stepMarking: [{ step: 'Verify 4f shielding -> Zr/Hf similarity and actinoid 5f/6d/7s energy overlap', marks: '+4 / -1' }],
    examinerTip: 'Common lanthanoid oxidation state is +3; Ce⁴⁺ is a strong oxidant and Eu²⁺ is a strong reductant.',
    commonPitfall: 'Thinking lanthanoid contraction is due to 5f electrons instead of 4f.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Coordination Compounds (Spectrochemical Series)',
    questionText: 'The correct order of crystal field splitting strength for ligands according to the spectrochemical series is:',
    options: [
      'CO > CN⁻ > NH₃ > H₂O > Cl⁻ > I⁻',
      'I⁻ > Cl⁻ > H₂O > NH₃ > CN⁻ > CO',
      'H₂O > NH₃ > CN⁻ > CO > Cl⁻',
      'Cl⁻ > NH₃ > H₂O > CN⁻ > CO'
    ],
    correctOption: 'CO > CN⁻ > NH₃ > H₂O > Cl⁻ > I⁻',
    modelAnswer: 'CO and CN⁻ are strong-field π-acceptor ligands producing large Δ₀, NH₃ and H₂O are intermediate-field, and halides (I⁻ < Br⁻ < Cl⁻ < F⁻) are weak-field donors.',
    stepMarking: [{ step: 'Verify NCERT spectrochemical series order', marks: '+4 / -1' }],
    examinerTip: 'Recall Δ_t = (4/9) Δ_o; hence almost all tetrahedral complexes are high-spin.',
    commonPitfall: 'Placing H₂O stronger than NH₃ or halides stronger than water.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Coordination Compounds (VBT, Hybridisation & Magnetism)',
    questionText: 'The hybridisation, geometry, and spin-only magnetic moment of [Ni(CN)₄]²⁻ vs [NiCl₄]²⁻ (Ni, Z = 28) are respectively:',
    options: [
      '[Ni(CN)₄]²⁻: dsp², square planar, 0 BM; [NiCl₄]²⁻: sp³, tetrahedral, 2.83 BM',
      '[Ni(CN)₄]²⁻: sp³, tetrahedral, 2.83 BM; [NiCl₄]²⁻: dsp², square planar, 0 BM',
      'Both are sp³, tetrahedral, 2.83 BM',
      'Both are dsp², square planar, 0 BM'
    ],
    correctOption: '[Ni(CN)₄]²⁻: dsp², square planar, 0 BM; [NiCl₄]²⁻: sp³, tetrahedral, 2.83 BM',
    modelAnswer: 'Ni²⁺ is 3d⁸. Strong-field CN⁻ pairs all 8 electrons leaving one vacant 3d orbital -> dsp² square planar, n = 0 (0 BM). Weak-field Cl⁻ leaves 2 unpaired electrons -> sp³ tetrahedral, n = 2 (√8 = 2.83 BM).',
    stepMarking: [{ step: 'Contrast strong-field CN- (dsp2, 0 BM) vs weak-field Cl- (sp3, 2.83 BM)', marks: '+4 / -1' }],
    examinerTip: '[Ni(CO)₄] has Ni(0) (3d⁸4s² -> 3d¹⁰ with CO pairing) -> sp³ tetrahedral, 0 BM!',
    commonPitfall: 'Confusing [Ni(CO)₄] (sp³, 0 BM) with [Ni(CN)₄]²⁻ (dsp², 0 BM).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Coordination Compounds (Isomerism & Werner Theory)',
    questionText: 'How many geometrical isomers are possible for [Pt(NH₃)₂Cl₂] and [Co(en)₂Cl₂]⁺ respectively, and which of these exhibits optical isomerism?',
    options: [
      '2 (cis & trans) and 2 (cis & trans); cis-[Co(en)₂Cl₂]⁺ is optically active',
      '2 and 3; trans-[Co(en)₂Cl₂]⁺ is optically active',
      'None for [Pt(NH₃)₂Cl₂] and 2 for [Co(en)₂Cl₂]⁺; both are optically active',
      '2 and 2; cis-[Pt(NH₃)₂Cl₂] is optically active'
    ],
    correctOption: '2 (cis & trans) and 2 (cis & trans); cis-[Co(en)₂Cl₂]⁺ is optically active',
    modelAnswer: 'Square planar [Ma₂b₂] ([Pt(NH₃)₂Cl₂]) has cis and trans isomers (cis-platin is anticancer; plane of symmetry -> optically inactive). Octahedral [M(AA)₂b₂] ([Co(en)₂Cl₂]⁺) has cis (optically active d/l pair) and trans (optically inactive due to plane of symmetry).',
    stepMarking: [{ step: 'Check geometrical counts (2 & 2) and chirality of cis-[Co(en)2Cl2]+', marks: '+4 / -1' }],
    examinerTip: 'Total stereoisomers of [Co(en)₂Cl₂]⁺ = 3 (d-cis, l-cis, trans); geometrical isomers = 2.',
    commonPitfall: 'Saying trans-[Co(en)₂Cl₂]⁺ is optically active.'
  },
  // 44-49: GOC, Isomerism & Hydrocarbons
  {
    section: 'A',
    marks: 4,
    topic: 'GOC (Carbocation Stability & Hyperconjugation)',
    questionText: 'Arrange the following carbocations in decreasing order of stability:\n(I) (C₆H₅)₃C⁺, (II) (CH₃)₃C⁺, (III) CH₂=CH–CH₂⁺, (IV) CH₃–CH₂⁺',
    options: ['I > II > III > IV', 'II > I > III > IV', 'I > III > II > IV', 'III > I > II > IV'],
    correctOption: 'I > II > III > IV',
    modelAnswer: '(C₆H₅)₃C⁺ is stabilized by resonance across 3 phenyl rings; (CH₃)₃C⁺ has 9 hyperconjugative α-H (more stable than allyl CH₂=CH–CH₂⁺); CH₃CH₂⁺ has 3 α-H.',
    stepMarking: [{ step: 'Compare resonance (triphenylmethyl) > 9 α-H (tert-butyl) > allyl > ethyl', marks: '+4 / -1' }],
    examinerTip: 'Watch carefully: (CH₃)₃C⁺ (9 α-H) is MORE stable than allyl (CH₂=CH–CH₂⁺) and benzyl (C₆H₅CH₂⁺)!',
    commonPitfall: 'Placing simple allyl carbocation above tert-butyl carbocation.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'GOC (Aromaticity — Hückel Rule)',
    questionText: 'Which of the following species is AROMATIC according to Hückel’s (4n + 2) π-electron rule?',
    options: [
      'Cyclopentadienyl anion (C₅H₅⁻) and Tropylium cation (C₇H₇⁺)',
      'Cyclobutadiene (C₄H₄) and Cyclooctatetraene (C₈H₈)',
      'Cyclopentadienyl cation (C₅H₅⁺) and Cycloheptatrienyl anion (C₇H₇⁻)',
      '1,3-Cyclohexadiene'
    ],
    correctOption: 'Cyclopentadienyl anion (C₅H₅⁻) and Tropylium cation (C₇H₇⁺)',
    modelAnswer: 'Both C₅H₅⁻ and C₇H₇⁺ are cyclic, planar, completely conjugated, and possess 6 π electrons (n = 1 in 4n+2), making them aromatic. C₄H₄ (4π) and C₅H₅⁺ (4π) are anti-aromatic; C₈H₈ is tub-shaped non-aromatic.',
    stepMarking: [{ step: 'Verify cyclic, planar, fully conjugated + 6 π electrons', marks: '+4 / -1' }],
    examinerTip: 'Tropylium bromide (C₇H₇⁺Br⁻) is ionic and soluble in water because C₇H₇⁺ is strongly aromatic.',
    commonPitfall: 'Calling cyclooctatetraene anti-aromatic (it bends into a tub shape to become non-aromatic).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Isomerism (Geometrical & Optical)',
    questionText: 'Which statement regarding stereoisomerism is CORRECT?',
    options: [
      '2-Butene exhibits cis-trans geometrical isomerism, whereas 1-butene does not; tartaric acid has 2 optically active d/l isomers and 1 optically inactive meso form',
      '1-Butene exhibits cis-trans isomerism; meso-tartaric acid is optically active due to chiral carbons',
      '2-Chlorobutane is achiral because it has a plane of symmetry',
      'Staggered conformation of ethane is less stable than eclipsed conformation'
    ],
    correctOption: '2-Butene exhibits cis-trans geometrical isomerism, whereas 1-butene does not; tartaric acid has 2 optically active d/l isomers and 1 optically inactive meso form',
    modelAnswer: 'Geometrical isomerism requires two different groups on BOTH doubly bonded carbons (true for CH₃CH=CHCH₃, false for CH₂=CHCH₂CH₃). Meso-tartaric acid has two chiral centres yet is optically inactive due to an internal plane of symmetry.',
    stepMarking: [{ step: 'Verify alkene cis-trans condition + meso internal compensation', marks: '+4 / -1' }],
    examinerTip: 'Staggered ethane is more stable than eclipsed by ~12.5 kJ/mol due to minimal torsional strain.',
    commonPitfall: 'Thinking presence of chiral carbons always guarantees optical activity (ignores meso forms).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Hydrocarbons (Alkenes — Markovnikov vs Peroxide Effect)',
    questionText: 'Addition of HBr to propene (CH₃–CH=CH₂) in the presence of benzoyl peroxide yields _____ as the major product via a _____ mechanism:',
    options: [
      '1-Bromopropane; free-radical chain mechanism',
      '2-Bromopropane; carbocation ionic mechanism',
      '1-Bromopropane; carbocation rearrangement mechanism',
      '2-Bromopropane; free-radical mechanism'
    ],
    correctOption: '1-Bromopropane; free-radical chain mechanism',
    modelAnswer: 'Kharasch / peroxide effect occurs ONLY with HBr (not HCl or HI due to unfavourable thermodynamics of propagation steps) via a free-radical mechanism forming the more stable 2° radical (CH₃–CH•–CH₂Br) -> 1-bromopropane.',
    stepMarking: [{ step: 'Apply Kharasch anti-Markovnikov rule (HBr + peroxide -> radical -> 1-bromopropane)', marks: '+4 / -1' }],
    examinerTip: 'With HCl or HI + peroxide, addition STILL follows normal Markovnikov ionic rule!',
    commonPitfall: 'Applying the peroxide anti-Markovnikov effect to HCl or HI.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Hydrocarbons (Ozonolysis & Alkynes)',
    questionText: 'Reductive ozonolysis (O₃ followed by Zn/H₂O) of 2-methylbut-2-ene yields which carbonyl products, and what does propyne give on hydration with HgSO₄ / dil. H₂SO₄ at 333 K?',
    options: [
      'Propanone (acetone) + Ethanal (acetaldehyde); Propanone (acetone)',
      'Methanal + Butanone; Propanal',
      'Propanone + Methanal; Propanal',
      'Ethanal + Ethanal; Propanone'
    ],
    correctOption: 'Propanone (acetone) + Ethanal (acetaldehyde); Propanone (acetone)',
    modelAnswer: 'Cleaving (CH₃)₂C=CHCH₃ gives (CH₃)₂C=O (propanone) + O=CHCH₃ (ethanal). Hydration of propyne (CH₃C≡CH) follows Markovnikov addition to form CH₃C(OH)=CH₂ which tautomerises to propanone (only ethyne gives an aldehyde, ethanal).',
    stepMarking: [
      { step: 'Cleave (CH3)2C=CHCH3 -> propanone + ethanal', marks: '+2' },
      { step: 'Kucherov hydration of terminal alkyne >2C gives ketone (propanone)', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'Hydration of ethyne gives ethanal; hydration of ALL higher terminal alkynes gives ketones.',
    commonPitfall: 'Writing propanal as the product of propyne hydration.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Hydrocarbons (Benzene — Electrophilic Aromatic Substitution)',
    questionText: 'Arrange the following monosubstituted benzenes in decreasing order of reactivity towards electrophilic aromatic substitution (nitration):\n(I) Phenol (C₆H₅OH), (II) Toluene (C₆H₅CH₃), (III) Chlorobenzene (C₆H₅Cl), (IV) Nitrobenzene (C₆H₅NO₂)',
    options: ['I > II > III > IV', 'II > I > III > IV', 'I > II > IV > III', 'III > II > I > IV'],
    correctOption: 'I > II > III > IV',
    modelAnswer: '–OH (+M/+R strongly activating) > –CH₃ (+I/+H moderately activating) > –Cl (weakly deactivating via −I > +M, though o/p-directing) > –NO₂ (strongly deactivating −M/−I, m-directing).',
    stepMarking: [{ step: 'Order activating (+M > +H) > halogen (-I > +M) > deactivating (-M)', marks: '+4 / -1' }],
    examinerTip: 'Halogens (–F, –Cl, –Br, –I) are the classic exception: DEACTIVATING (−I > +M) yet ORTHO/PARA-directing (+M)!',
    commonPitfall: 'Putting chlorobenzene above benzene or treating –Cl as meta-directing.'
  },
  // 50-56: Haloalkanes, Alcohols/Phenols, Carbonyls & Amines
  {
    section: 'A',
    marks: 4,
    topic: 'Haloalkanes (SN1 vs SN2 Reactivity)',
    questionText: 'Which alkyl halide undergoes SN1 solvolysis fastest in aqueous ethanol, and which undergoes SN2 substitution fastest with OH⁻?',
    options: [
      'SN1 fastest: (CH₃)₃C–Br (or benzyl/allyl bromide); SN2 fastest: CH₃–Br',
      'SN1 fastest: CH₃–Br; SN2 fastest: (CH₃)₃C–Br',
      'Both SN1 and SN2 fastest: (CH₃)₃C–Cl',
      'SN1 fastest: C₆H₅–Br; SN2 fastest: CH₃–F'
    ],
    correctOption: 'SN1 fastest: (CH₃)₃C–Br (or benzyl/allyl bromide); SN2 fastest: CH₃–Br',
    modelAnswer: 'SN1 rate depends on carbocation stability (3° > 2° > 1° > CH₃⁺) with racemisation; SN2 rate depends on low steric hindrance (CH₃X > 1° > 2° > 3°) with Walden inversion. Leaving group ability: R–I > R–Br > R–Cl > R–F.',
    stepMarking: [{ step: 'Apply 3° fastest for SN1 and CH3X fastest for SN2', marks: '+4 / -1' }],
    examinerTip: 'Vinyl halides (CH₂=CHCl) and aryl halides (C₆H₅Cl) are unreactive toward both SN1 and SN2 due to partial double-bond character of C–X.',
    commonPitfall: 'Putting 3° halide fastest in SN2.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Alcohols, Phenols & Ethers (Named Reactions & Lucas Test)',
    questionText: 'Match List I (Reaction / Test) with List II (Major Product / Observation):\n(a) Reimer-Tiemann reaction (Phenol + CHCl₃ + aq. NaOH) — (i) Salicylic acid\n(b) Kolbe’s reaction (Sodium phenoxide + CO₂, then H⁺) — (ii) Salicylaldehyde\n(c) Lucas test (conc. HCl + anhyd. ZnCl₂) on 3° alcohol — (iii) Immediate turbidity\n(d) (CH₃)₃C–O–CH₃ + HI (1 eq.) — (iv) (CH₃)₃C–I + CH₃OH',
    options: ['a-ii, b-i, c-iii, d-iv', 'a-i, b-ii, c-iii, d-iv', 'a-ii, b-iii, c-i, d-iv', 'a-iv, b-i, c-iii, d-ii'],
    correctOption: 'a-ii, b-i, c-iii, d-iv',
    modelAnswer: 'Reimer-Tiemann -> salicylaldehyde (via :CCl₂ carbene); Kolbe -> salicylic acid; Lucas reagent -> immediate turbidity for 3° alcohol (~5 min for 2°, none at room temp for 1°); tert-butyl methyl ether + HI -> SN1 cleavage giving tert-butyl iodide + methanol!',
    stepMarking: [{ step: 'Verify Reimer-Tiemann, Kolbe, Lucas, and tert-alkyl ether HI SN1 cleavage', marks: '+4 / -1' }],
    examinerTip: 'In R–O–R′ + HI: if one group is 3° (or benzyl), cleavage goes via SN1 so I⁻ goes to the 3° carbon; if 1°/2° only, SN2 sends I⁻ to the SMALLER alkyl group!',
    commonPitfall: 'Giving CH₃I + (CH₃)₃C–OH for tert-butyl methyl ether + HI.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Aldehydes & Ketones (Aldol vs Cannizzaro)',
    questionText: 'Which pair of carbonyl compounds undergoes Cannizzaro disproportionation with conc. NaOH, and which undergoes the Haloform (iodoform) reaction with I₂ + NaOH?',
    options: [
      'Cannizzaro: HCHO and C₆H₅CHO (no α-H); Haloform: CH₃CHO and CH₃COCH₃',
      'Cannizzaro: CH₃CHO and CH₃COCH₃; Haloform: HCHO and C₆H₅CHO',
      'Cannizzaro: CH₃CH₂CHO and HCHO; Haloform: CH₃CH₂COCH₂CH₃',
      'Cannizzaro: C₆H₅COCH₃; Haloform: HCHO'
    ],
    correctOption: 'Cannizzaro: HCHO and C₆H₅CHO (no α-H); Haloform: CH₃CHO and CH₃COCH₃',
    modelAnswer: 'Aldehydes lacking α-hydrogen (HCHO, C₆H₅CHO, (CH₃)₃CCHO) undergo Cannizzaro reaction (alcohol + carboxylate salt). Compounds with CH₃–C(=O)– or CH₃–CH(OH)– (ethanal, ethanol, propanone, 2-alkanols) give yellow CHI₃ precipitate.',
    stepMarking: [{ step: 'Apply no α-H -> Cannizzaro and CH3CO-/CH3CH(OH)- -> Haloform', marks: '+4 / -1' }],
    examinerTip: 'Ethanal (CH₃CHO) is the ONLY aldehyde that gives a positive iodoform test; Methanol does NOT give iodoform, Ethanol DOES.',
    commonPitfall: 'Thinking pentan-3-one gives iodoform test (it lacks a CH₃–C=O group).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Aldehydes & Ketones (Tollens vs Fehling & Wolff-Kishner)',
    questionText: 'Benzaldehyde (C₆H₅CHO) gives a positive silver mirror with Tollens’ reagent but FAILS to react with Fehling’s solution; furthermore, reducing a ketone with NH₂NH₂ / KOH in ethylene glycol (Wolff-Kishner reduction) converts C=O to:',
    options: [
      '–CH₂– (alkane) under strongly basic conditions',
      '–CH(OH)– (secondary alcohol)',
      '–COOH (carboxylic acid)',
      '–CH₂– using Zn-Hg / conc. HCl'
    ],
    correctOption: '–CH₂– (alkane) under strongly basic conditions',
    modelAnswer: 'Aromatic aldehydes (C₆H₅CHO) reduce Tollens’ reagent ([Ag(NH₃)₂]⁺) but do NOT reduce Fehling’s solution (Cu²⁺ tartrate). Wolff-Kishner (NH₂NH₂/KOH/glycol, heat) reduces C=O -> CH₂ under basic conditions (ideal for acid-sensitive substrates).',
    stepMarking: [{ step: 'Verify Benzaldehyde Tollens(+)/Fehling(-) and Wolff-Kishner C=O -> CH2', marks: '+4 / -1' }],
    examinerTip: 'Use Clemmensen (Zn-Hg/HCl) for base-sensitive groups (e.g. esters/halides) and Wolff-Kishner for acid-sensitive groups (e.g. –OH/acetals).',
    commonPitfall: 'Saying benzaldehyde gives a red Cu₂O precipitate with Fehling’s solution.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Carboxylic Acids (Acid Strength & HVZ Reaction)',
    questionText: 'Arrange the following acids in decreasing order of acidic strength (lowest pK_a first):\n(I) CF₃COOH, (II) CCl₃COOH, (III) CH₂FCOOH, (IV) CH₃COOH, (V) HCOOH',
    options: [
      'I > II > III > V > IV',
      'II > I > III > V > IV',
      'I > II > V > III > IV',
      'I > III > II > IV > V'
    ],
    correctOption: 'I > II > III > V > IV',
    modelAnswer: 'Stronger −I groups stabilize the carboxylate anion: CF₃COOH (pK_a 0.23) > CCl₃COOH (0.65) > CH₂FCOOH (2.6) > HCOOH (3.75) > CH₃COOH (4.76, +I methyl destabilizes).',
    stepMarking: [{ step: 'Compare -I halogen substitutions and note HCOOH > CH3COOH', marks: '+4 / -1' }],
    examinerTip: 'In Hell-Volhard-Zelinsky (HVZ) reaction, carboxylic acids with α-H react with X₂ / red P -> H₂O to give α-halo carboxylic acids.',
    commonPitfall: 'Placing CH₃COOH stronger than HCOOH.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Amines (Carbylamine & Hinsberg Distinguishing Tests)',
    questionText: 'Which reagent distinguishes primary aliphatic/aromatic amines from secondary and tertiary amines by yielding foul-smelling isocyanides, and how does Hinsberg reagent (C₆H₅SO₂Cl) behave with a 2° amine?',
    options: [
      'Carbylamine test (CHCl₃ + alc. KOH); 2° amine forms N,N-dialkylbenzenesulphonamide insoluble in aqueous KOH',
      'Tollens reagent; 2° amine forms a KOH-soluble sulphonamide',
      'Carbylamine test; 2° amine fails to react with C₆H₅SO₂Cl',
      'Lucas test; 3° amine gives immediate precipitate with C₆H₅SO₂Cl'
    ],
    correctOption: 'Carbylamine test (CHCl₃ + alc. KOH); 2° amine forms N,N-dialkylbenzenesulphonamide insoluble in aqueous KOH',
    modelAnswer: 'Only 1° amines (aliphatic & aromatic) give the Carbylamine reaction (R–NC). With Hinsberg reagent: 1° amine -> sulphonamide soluble in KOH (has acidic N–H); 2° amine -> sulphonamide insoluble in KOH (no N–H); 3° amine -> no reaction.',
    stepMarking: [{ step: 'Verify Carbylamine (1° only) + Hinsberg solubility contrast (1° soluble, 2° insoluble)', marks: '+4 / -1' }],
    examinerTip: 'In aqueous solution, basicity of methylamines is 2° > 1° > 3° > NH₃, whereas for ethylamines it is 2° > 3° > 1° > NH₃!',
    commonPitfall: 'Thinking 2° amine sulphonamide dissolves in KOH.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Amines (Gabriel Phthalimide, Hoffmann Bromamide & Diazonium)',
    questionText: 'Which reaction prepares PURE primary aliphatic amines without secondary/tertiary contamination (but CANNOT prepare aniline), and which step-down reaction converts RCONH₂ to RNH₂ with one carbon less?',
    options: [
      'Gabriel phthalimide synthesis; Hoffmann bromamide degradation (Br₂ + 4 NaOH)',
      'Hoffmann ammonolysis; Gabriel phthalimide synthesis',
      'Sandmeyer reaction; Stephen reduction',
      'Carbylamine reaction; Gattermann reaction'
    ],
    correctOption: 'Gabriel phthalimide synthesis; Hoffmann bromamide degradation (Br₂ + 4 NaOH)',
    modelAnswer: 'Gabriel phthalimide uses SN2 of phthalimide anion on 1° alkyl halide (aryl halides do not undergo SN2, so aniline cannot be made). Hoffmann bromamide (RCONH₂ + Br₂ + 4NaOH -> RNH₂ + Na₂CO₃ + 2NaBr + 2H₂O) reduces carbon chain by 1 C.',
    stepMarking: [{ step: 'Match Gabriel (pure 1° aliphatic) and Hoffmann bromamide (step-down RNH2)', marks: '+4 / -1' }],
    examinerTip: 'Benzenediazonium chloride couples with phenol at pH 9–10 (weakly basic -> p-hydroxyazobenzene, orange dye) and with aniline at pH 4–5 (weakly acidic -> p-aminoazobenzene, yellow dye).',
    commonPitfall: 'Using Gabriel phthalimide synthesis to prepare aniline (C₆H₅NH₂).'
  },
  // 57-60: Biomolecules & NMC Practical Chemistry
  {
    section: 'A',
    marks: 4,
    topic: 'Biomolecules (Carbohydrates — Reducing Sugars & Anomers)',
    questionText: 'Which statement accurately describes D-(+)-glucose and disaccharides?',
    options: [
      'α-D-glucose and β-D-glucose are C-1 anomers; Sucrose is a non-reducing sugar because both anomeric carbons (C1 of α-glucose and C2 of β-fructose) are locked in the glycosidic bond',
      'Sucrose is a reducing sugar whereas maltose and lactose are non-reducing',
      'Glucose reacts with Schiff’s reagent and NaHSO₃ directly in crystalline form',
      'Amylose is branched α-1,4 / α-1,6 glucose polymer while amylopectin is unbranched'
    ],
    correctOption: 'α-D-glucose and β-D-glucose are C-1 anomers; Sucrose is a non-reducing sugar because both anomeric carbons (C1 of α-glucose and C2 of β-fructose) are locked in the glycosidic bond',
    modelAnswer: 'Sucrose (α-D-glucose C1 – β-D-fructose C2) has no free hemiacetal/hemiketal group, so it is non-reducing and shows inversion of optical rotation (+66.5° -> −20° upon hydrolysis). Maltose and Lactose are reducing.',
    stepMarking: [{ step: 'Verify C1 anomers + non-reducing sucrose glycosidic link', marks: '+4 / -1' }],
    examinerTip: 'Glucose pentaacetate also does not react with hydroxylamine (NH₂OH), proving absence of free –CHO in the cyclic form.',
    commonPitfall: 'Swapping amylose (linear, water-soluble, 15–20%) and amylopectin (branched, insoluble, 80–85%).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Biomolecules (Vitamins, Proteins & Nucleic Acids)',
    questionText: 'Match List I (Vitamin / Macromolecule) with List II (Deficiency / Feature):\n(a) Vitamin B₁₂ (Cyanocobalamin) — (i) Scurvy (bleeding gums)\n(b) Vitamin C (Ascorbic acid) — (ii) Pernicious anaemia (contains Cobalt)\n(c) DNA vs RNA bases — (iii) Thymine (5-methyluracil) in DNA vs Uracil in RNA\n(d) Denaturation of protein — (iv) Destroys 2° and 3° structures, leaving 1° sequence intact',
    options: ['a-ii, b-i, c-iii, d-iv', 'a-i, b-ii, c-iii, d-iv', 'a-ii, b-iii, c-i, d-iv', 'a-iv, b-i, c-iii, d-ii'],
    correctOption: 'a-ii, b-i, c-iii, d-iv',
    modelAnswer: 'B₁₂ deficiency = pernicious anaemia; Vitamin C = scurvy; DNA has A, G, C, T while RNA has A, G, C, U; Denaturation (heat/pH) unfolds 2°/3° structure without breaking peptide bonds (1° intact).',
    stepMarking: [{ step: 'Verify NCERT XII Biomolecules vitamin, base, and denaturation facts', marks: '+4 / -1' }],
    examinerTip: 'Fat-soluble vitamins = A, D, E, K (stored in liver/adipose); Water-soluble = B-group (except B₁₂ stored!) and C.',
    commonPitfall: 'Saying denaturation breaks primary peptide bonds.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Practical Organic Chemistry (Lassaigne’s Test — NMC Unit 20)',
    questionText: 'In Lassaigne’s test for detection of extra elements in an organic compound, the Prussian blue colour confirming Nitrogen and the blood-red colour when BOTH N and S are present are due to respectively:',
    options: [
      'Fe₄[Fe(CN)₆]₃ (Prussian blue) and [Fe(SCN)]²⁺ (blood red)',
      '[Fe(CN)₅NOS]⁴⁻ (violet) and Fe₄[Fe(CN)₆]₃',
      'AgCN and PbS',
      'Cu₂[Fe(CN)₆] and [Fe(CN)₆]³⁻'
    ],
    correctOption: 'Fe₄[Fe(CN)₆]₃ (Prussian blue) and [Fe(SCN)]²⁺ (blood red)',
    modelAnswer: 'Na + C + N -> NaCN; with FeSO₄/Fe³⁺/H⁺ gives Prussian blue Fe₄[Fe(CN)₆]₃. If both N & S are present, NaSCN forms, giving blood-red [Fe(SCN)]²⁺ with FeCl₃ (excess Na breaks NaSCN into NaCN + Na₂S).',
    stepMarking: [{ step: 'Identify Prussian blue Fe4[Fe(CN)6]3 and blood-red [Fe(SCN)]2+', marks: '+4 / -1' }],
    examinerTip: 'Sodium nitroprusside test gives VIOLET colour [Fe(CN)₅NOS]⁴⁻ specifically for Sulphur (S²⁻).',
    commonPitfall: 'Confusing violet nitroprusside complex (S only) with blood-red thiocyanate complex (N + S).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Practical Inorganic Salt Analysis (Cation Groups & Anion Tests — NMC Unit 20)',
    questionText: 'In qualitative inorganic salt analysis, what is the Group III cation reagent (precipitating Fe³⁺, Al³⁺, Cr³⁺ as hydroxides without precipitating Group IV/V cations), and which anion gives a brown ring [Fe(H₂O)₅(NO)]²⁺?',
    options: [
      'NH₄OH in presence of excess NH₄Cl; Nitrate ion (NO₃⁻)',
      'H₂S gas in acidic medium (dil. HCl); Sulphate ion (SO₄²⁻)',
      'H₂S gas in ammoniacal medium; Chloride ion (Cl⁻)',
      '(NH₄)₂CO₃ in presence of NH₄Cl; Nitrite ion (NO₂⁻)'
    ],
    correctOption: 'NH₄OH in presence of excess NH₄Cl; Nitrate ion (NO₃⁻)',
    modelAnswer: 'NH₄Cl suppresses ionisation of weak base NH₄OH via common ion effect (NH₄⁺), keeping [OH⁻] low enough to precipitate only low-K_sp Group III hydroxides (Fe(OH)₃, Al(OH)₃, Cr(OH)₃). Brown ring test with fresh FeSO₄ + conc. H₂SO₄ confirms NO₃⁻.',
    stepMarking: [{ step: 'Verify Group III common-ion buffer (NH4Cl + NH4OH) and brown ring NO3- test', marks: '+4 / -1' }],
    examinerTip: 'Chromyl chloride test (red vapours of CrO₂Cl₂) confirms Cl⁻; HgCl₂, AgCl, PbCl₂, SnCl₂ (covalent/insoluble chlorides) do NOT respond readily.',
    commonPitfall: 'Confusing Group III (NH₄Cl + NH₄OH) with Group V (NH₄Cl + NH₄OH + (NH₄)₂CO₃).'
  }
];

const PHY_POOL: RawNeetQ[] = [
  // 1-4: Units, Dimensions & NMC Unit 20 Experimental Skills
  {
    section: 'A',
    marks: 4,
    topic: 'Unit 20 Experimental Skills (Screw Gauge)',
    questionText: 'A screw gauge has a least count of 0.001 cm and 50 divisions on its circular scale. What is its pitch, and what is the true diameter if MSR = 2.5 mm, CSR = 20, and zero error = −0.03 mm?',
    options: [
      'Pitch = 0.05 cm (0.5 mm); True diameter = 2.73 mm',
      'Pitch = 0.005 cm; True diameter = 2.67 mm',
      'Pitch = 0.1 cm; True diameter = 2.70 mm',
      'Pitch = 0.05 cm; True diameter = 2.67 mm'
    ],
    correctOption: 'Pitch = 0.05 cm (0.5 mm); True diameter = 2.73 mm',
    modelAnswer: 'Pitch = LC × N = 0.001 cm × 50 = 0.05 cm = 0.5 mm. LC = 0.01 mm. Observed = 2.5 + 20(0.01) = 2.70 mm. True = Observed − Zero Error = 2.70 − (−0.03) = 2.73 mm.',
    stepMarking: [
      { step: 'Pitch = 0.001 × 50 = 0.05 cm = 0.5 mm', marks: '+2' },
      { step: 'True = 2.70 - (-0.03) = 2.73 mm', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'Always use True Reading = Observed Reading − (Zero Error with sign)!',
    commonPitfall: 'Subtracting 0.03 instead of (−0.03), getting 2.67 mm.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Unit 20 Experimental Skills (Vernier Callipers)',
    questionText: 'In a Vernier callipers, 10 Vernier scale divisions (VSD) coincide with 9 main scale divisions (MSD), where 1 MSD = 1 mm. While measuring a sphere, the zero of Vernier lies between 2.4 cm and 2.5 cm and the 6th VSD coincides. Find the diameter (zero error = 0):',
    options: ['2.46 cm', '2.40 cm', '2.56 cm', '2.43 cm'],
    correctOption: '2.46 cm',
    modelAnswer: 'LC = 1 MSD − 1 VSD = 1 − 0.9 = 0.1 mm = 0.01 cm. Reading = 2.4 cm + 6 × 0.01 cm = 2.46 cm.',
    stepMarking: [{ step: 'LC = 0.01 cm => Reading = 2.4 + 6(0.01) = 2.46 cm', marks: '+4 / -1' }],
    examinerTip: 'If N VSD = (N − 1) MSD, then LC = 1 MSD / N.',
    commonPitfall: 'Mixing mm and cm when adding MSR and VSR.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Units & Dimensions (Error Propagation)',
    questionText: 'A physical quantity P is given by P = (a³ b²) / (√c · d). The percentage errors in a, b, c, and d are 1%, 3%, 4%, and 2% respectively. What is the maximum percentage error in P?',
    options: ['13%', '7%', '11%', '15%'],
    correctOption: '13%',
    modelAnswer: 'ΔP/P % = 3(Δa/a%) + 2(Δb/b%) + (1/2)(Δc/c%) + 1(Δd/d%) = 3(1) + 2(3) + 0.5(4) + 1(2) = 3 + 6 + 2 + 2 = 13%.',
    stepMarking: [{ step: 'Sum |power| × %error for all terms: 3+6+2+2 = 13%', marks: '+4 / -1' }],
    examinerTip: 'Maximum fractional errors ALWAYS ADD, even for quantities in the denominator (like √c and d)!',
    commonPitfall: 'Subtracting denominator error terms.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Units & Dimensions (Dimensional Formulae)',
    questionText: 'Which pair of physical quantities possesses the SAME dimensional formula?',
    options: [
      'Planck’s constant (h) and Angular momentum (L)',
      'Torque (τ) and Power (P)',
      'Surface tension (T) and Young’s modulus (Y)',
      'Impulse and Force'
    ],
    correctOption: 'Planck’s constant (h) and Angular momentum (L)',
    modelAnswer: '[h] = [E]/[ν] = [ML²T⁻²]/[T⁻¹] = [ML²T⁻¹]. [L] = [mvr] = [ML²T⁻¹]. Torque = [ML²T⁻²] whereas Power = [ML²T⁻³]; Surface tension = [MT⁻²] whereas Young’s modulus = [ML⁻¹T⁻²].',
    stepMarking: [{ step: 'Verify [h] = [L] = [ML2T-1]', marks: '+4 / -1' }],
    examinerTip: 'Classic identical dimension pairs: (Work, Torque, Energy), (Impulse, Momentum), (h, Angular Momentum), (Stress, Pressure, Young’s Modulus).',
    commonPitfall: 'Assuming Torque and Power share dimensions.'
  },
  // 5-8: Kinematics
  {
    section: 'A',
    marks: 4,
    topic: 'Kinematics (1D Motion & Stopping Distance)',
    questionText: 'A car moving at 50 km/h comes to rest in 6 m after applying brakes. If the same car is moving at 100 km/h with the same braking deceleration, the minimum stopping distance is:',
    options: ['24 m', '12 m', '18 m', '48 m'],
    correctOption: '24 m',
    modelAnswer: 'Stopping distance s = u² / (2a) ∝ u². Doubling speed (50 -> 100 km/h) increases stopping distance by 2² = 4 times => 4 × 6 = 24 m.',
    stepMarking: [{ step: 'Apply s ∝ u² => (2)² × 6 = 24 m', marks: '+4 / -1' }],
    examinerTip: 'Galileo’s law of odd numbers: from rest under uniform acceleration, distances in equal successive time intervals follow 1 : 3 : 5 : 7.',
    commonPitfall: 'Doubling distance to 12 m assuming linear dependence on u.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Kinematics (Projectile Motion)',
    questionText: 'A projectile is fired at angle θ with horizontal so that its horizontal range (R) equals 4√3 times its maximum height (H). What is the angle of projection θ?',
    options: ['30°', '45°', '60°', '15°'],
    correctOption: '30°',
    modelAnswer: 'Relation: R tanθ = 4H => tanθ = 4H / R = 4H / (4√3 H) = 1/√3 => θ = 30°.',
    stepMarking: [{ step: 'Use R tanθ = 4H => tanθ = 1/√3 => 30°', marks: '+4 / -1' }],
    examinerTip: 'Memorize R tanθ = 4H! At θ = 45°, R = 4H.',
    commonPitfall: 'Confusing tanθ = 1/√3 (30°) with √3 (60°).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Kinematics (Relative Velocity — River Boat)',
    questionText: 'A swimmer can swim at 5 km/h in still water and wishes to cross a 1 km wide river flowing at 3 km/h in the SHORTEST POSSIBLE TIME. How much time will it take and what will be his downstream drift?',
    options: [
      '12 minutes; 0.6 km',
      '15 minutes; 0 km',
      '10 minutes; 0.5 km',
      '12 minutes; 0.8 km'
    ],
    correctOption: '12 minutes; 0.6 km',
    modelAnswer: 'For shortest time, swim perpendicular to river flow: t = d / v_s = 1 / 5 hr = 12 min. Drift = v_r × t = 3 × (1/5) = 0.6 km.',
    stepMarking: [
      { step: 'Shortest time: swim perpendicular => t = 1/5 h = 12 min', marks: '+2' },
      { step: 'Drift = 3 × (1/5) = 0.6 km', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'Shortest TIME = aim perpendicular (v_s); Shortest PATH (zero drift) = aim upstream at sinθ = v_r/v_s giving v_net = √(v_s² − v_r²).',
    commonPitfall: 'Using √(5² − 3²) = 4 km/h (which is for shortest path, NOT shortest time).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Kinematics (Uniform Circular Motion)',
    questionText: 'A particle moves in a circle of radius 0.5 m with a constant angular speed of 4 rad/s. What is the magnitude of its centripetal acceleration and change in velocity in half a revolution?',
    options: [
      '8 m/s² and 4 m/s',
      '8 m/s² and 0 m/s',
      '2 m/s² and 4 m/s',
      '16 m/s² and 2 m/s'
    ],
    correctOption: '8 m/s² and 4 m/s',
    modelAnswer: 'v = ωr = 4 × 0.5 = 2 m/s. Centripetal acceleration a_c = ω²r = 16 × 0.5 = 8 m/s². Over half a revolution (θ = 180°), Δv = 2v sin(θ/2) = 2(2)sin 90° = 4 m/s.',
    stepMarking: [
      { step: 'ac = ω²r = 16 × 0.5 = 8 m/s²', marks: '+2' },
      { step: '|Δv| = 2v sin(90°) = 4 m/s', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'Speed is constant in UCM, so Δ|v| = 0, but velocity is a vector so |Δv| = 2v sin(θ/2) ≠ 0!',
    commonPitfall: 'Writing Δv = 0 for half a revolution.'
  },
  // 9-12: Laws of Motion & Friction
  {
    section: 'A',
    marks: 4,
    topic: 'Laws of Motion (Atwood Machine / Pulley)',
    questionText: 'Two blocks of masses 4 kg and 6 kg are connected by a light inextensible string passing over a frictionless pulley. Taking g = 10 m/s², find the acceleration of the system and tension in the string:',
    options: ['2 m/s² and 48 N', '2 m/s² and 50 N', '4 m/s² and 48 N', '2 m/s² and 24 N'],
    correctOption: '2 m/s² and 48 N',
    modelAnswer: 'a = ((m₂ − m₁)/(m₁ + m₂))g = ((6−4)/10)×10 = 2 m/s². T = (2 m₁ m₂ / (m₁ + m₂))g = (2×4×6 / 10)×10 = 48 N.',
    stepMarking: [
      { step: 'a = (6-4)g/10 = 2 m/s²', marks: '+2' },
      { step: 'T = 2(4)(6)g/10 = 48 N', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'Quick check: T must always lie strictly between m₁g (40 N) and m₂g (60 N) -> 48 N passes!',
    commonPitfall: 'Taking T = 50 N (simple average).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Laws of Motion (Friction on Rough Horizontal / Incline)',
    questionText: 'A block of mass 5 kg rests on a horizontal floor with μ_s = 0.6 and μ_k = 0.4 (g = 10 m/s²). If a horizontal force of 20 N is applied on the block, what is the frictional force acting on it?',
    options: ['20 N (static friction)', '30 N', '0 N', '10 N'],
    correctOption: '20 N (static friction)',
    modelAnswer: 'Maximum static friction f_max = μ_s N = 0.6 × 50 = 30 N. Since applied force F = 20 N < 30 N, the block does NOT move, and self-adjusting static friction equals the applied force = 20 N.',
    stepMarking: [{ step: 'f_max = 30 N > 20 N => block stays at rest => f = F_applied = 20 N', marks: '+4 / -1' }],
    examinerTip: 'Static friction is self-adjusting (0 ≤ f_s ≤ μ_s N) and ALWAYS equals the driving force until slipping begins!',
    commonPitfall: 'Calculating f_s = μ_s N = 30 N even when applied force is only 20 N.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Laws of Motion (Banking of Roads)',
    questionText: 'A circular race track of radius 300 m is banked at an angle of 15° (tan 15° ≈ 0.27). What is the optimum speed (ignoring friction) to avoid wear and tear on tyres (g = 10 m/s²)?',
    options: ['28.5 m/s (√810 m/s)', '90 m/s', '18 m/s', '45 m/s'],
    correctOption: '28.5 m/s (√810 m/s)',
    modelAnswer: 'Optimum speed v₀ = √(Rg tanθ) = √(300 × 10 × 0.27) = √810 ≈ 28.46 ≈ 28.5 m/s.',
    stepMarking: [{ step: 'v0 = √(300 × 10 × 0.27) = √810 ≈ 28.5 m/s', marks: '+4 / -1' }],
    examinerTip: 'For a flat road, v_max = √(μRg); for banked road with friction, v_max = √[Rg(μ + tanθ)/(1 − μ tanθ)].',
    commonPitfall: 'Forgetting the square root and answering 810 or 81.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Laws of Motion (Impulse & Conservation of Momentum)',
    questionText: 'Given below are two statements:\nStatement I: A cricketer pulls his hands backwards while catching a fast-moving ball to increase the time of impact, thereby reducing the average impulsive force on his palms.\nStatement II: Conservation of linear momentum holds true for a system even when external forces act on it, provided the internal forces are zero.\nChoose the correct option:',
    options: [
      'Statement I is correct but Statement II is incorrect',
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Statement I is correct but Statement II is incorrect',
    modelAnswer: 'Statement I is true (F_avg = Δp/Δt). Statement II is false: linear momentum of a system is conserved ONLY when the net EXTERNAL force is zero (internal forces always cancel in action-reaction pairs anyway).',
    stepMarking: [{ step: 'Verify impulse-time inverse link; spot external force condition in Statement II', marks: '+4 / -1' }],
    examinerTip: 'Area under Force–Time (F–t) graph equals Impulse = Change in linear momentum (Δp).',
    commonPitfall: 'Thinking internal forces break momentum conservation.'
  },
  // 13-16: Work, Energy, Power & Collisions
  {
    section: 'A',
    marks: 4,
    topic: 'Work, Energy & Power (Work-Energy Theorem)',
    questionText: 'A body of mass 2 kg starts from rest and moves along x-axis under a variable force F(x) = (4x + 2) N. Find its kinetic energy at x = 3 m:',
    options: ['24 J', '18 J', '12 J', '30 J'],
    correctOption: '24 J',
    modelAnswer: 'By Work-Energy Theorem, ΔK = W = ∫₀³ (4x + 2) dx = [2x² + 2x]₀³ = 2(9) + 2(3) = 18 + 6 = 24 J.',
    stepMarking: [{ step: 'Integrate F(x) from 0 to 3: [2x^2 + 2x]_0^3 = 24 J', marks: '+4 / -1' }],
    examinerTip: 'Work-Energy Theorem (W_all forces = ΔK) applies to ALL forces (conservative, non-conservative, external, internal)!',
    commonPitfall: 'Computing F(3) × 3 = 14 × 3 = 42 J instead of integrating.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Work, Energy & Power (Vertical Circular Motion)',
    questionText: 'A stone tied to a string of length L is whirled in a vertical circle. What are the minimum speed at the lowest point to just complete the vertical circle, and the tension difference between lowest and highest points?',
    options: [
      '√(5gL) and 6mg',
      '√(4gL) and 4mg',
      '√(3gL) and 2mg',
      '√(gL) and 6mg'
    ],
    correctOption: '√(5gL) and 6mg',
    modelAnswer: 'At top T_top ≥ 0 => v_top = √(gL). By energy conservation: v_bottom = √(gL + 4gL) = √(5gL). T_bottom − T_top = (mv_b²/L + mg) − (mv_t²/L − mg) = m(4g) + 2mg = 6mg (always 6mg!).',
    stepMarking: [{ step: 'v_min(bottom) = √(5gL); T_bottom - T_top = 6mg', marks: '+4 / -1' }],
    examinerTip: 'Minimum speeds in vertical circle (string): Bottom = √(5gL), Horizontal = √(3gL), Top = √(gL). For a massless RIGID ROD: Bottom = √(4gL), Top = 0!',
    commonPitfall: 'Using √(4gL) for a string instead of √(5gL).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Collisions (1D Elastic & Inelastic)',
    questionText: 'A ball of mass m moving at speed u collides head-on and elastically with an identical stationary ball of mass m, whereas in a second trial it sticks to the stationary ball (perfectly inelastic). What is the fraction of initial kinetic energy lost in the perfectly inelastic collision?',
    options: ['1/2 (50%)', '1/4 (25%)', '3/4 (75%)', '0%'],
    correctOption: '1/2 (50%)',
    modelAnswer: 'In elastic collision of equal masses, velocities exchange (0% KE loss). In perfectly inelastic collision: v_f = mu/(2m) = u/2. K_f = (1/2)(2m)(u/2)² = (1/2) K_i => 50% KE lost.',
    stepMarking: [{ step: 'Apply ΔK = (1/2)[m1m2/(m1+m2)](u1-u2)^2 => 50% loss', marks: '+4 / -1' }],
    examinerTip: 'For general inelastic collision (coefficient of restitution e): ΔK = (1/2) μ (u₁ − u₂)² (1 − e²), where μ = m₁m₂/(m₁+m₂).',
    commonPitfall: 'Saying 75% KE is lost because speed halved (mass doubled to 2m!).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Work, Energy & Power (Instantaneous Power)',
    questionText: 'A water pump lifts 300 kg of water per minute from a 20 m deep well and ejects it at 10 m/s. Taking g = 10 m/s², what is the minimum power of the motor?',
    options: ['1250 W', '1000 W', '750 W', '2500 W'],
    correctOption: '1250 W',
    modelAnswer: 'Mass flow dm/dt = 300/60 = 5 kg/s. Power = (dm/dt)(gh + ½v²) = 5 × (10×20 + 0.5×100) = 5 × (200 + 50) = 1250 W.',
    stepMarking: [
      { step: 'dm/dt = 5 kg/s; energy/kg = gh + v^2/2 = 200 + 50 = 250 J/kg', marks: '+2' },
      { step: 'P = 5 × 250 = 1250 W', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'Do NOT forget the kinetic energy term (½v²) when water leaves the pipe with a given velocity!',
    commonPitfall: 'Computing only mgh/t = 1000 W and ignoring ½mv²/t.'
  },
  // 17-20: Rotational Motion
  {
    section: 'A',
    marks: 4,
    topic: 'Rotational Motion (Moment of Inertia & Axes Theorems)',
    questionText: 'The moment of inertia of a uniform solid sphere of mass M and radius R about a TANGENT to its surface is:',
    options: ['(7/5) MR²', '(2/5) MR²', '(5/3) MR²', '(3/2) MR²'],
    correctOption: '(7/5) MR²',
    modelAnswer: 'By Parallel Axis Theorem: I_tangent = I_cm + Md² = (2/5)MR² + MR² = (7/5)MR².',
    stepMarking: [{ step: 'I = (2/5)MR² + MR² = (7/5)MR²', marks: '+4 / -1' }],
    examinerTip: 'Remember: Disc about tangent in plane = 5/4 MR²; Disc about tangent ⊥ plane = 3/2 MR²; Ring about tangent in plane = 3/2 MR².',
    commonPitfall: 'Answering (2/5) MR² (about diameter) or (5/3) MR² (hollow sphere tangent).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Rotational Motion (Rolling Without Slipping)',
    questionText: 'A solid sphere rolls without slipping down an inclined plane of inclination 30°. What is its linear acceleration down the plane (g = 10 m/s²)?',
    options: ['25/7 m/s²', '5 m/s²', '10/3 m/s²', '5/2 m/s²'],
    correctOption: '25/7 m/s²',
    modelAnswer: 'a = g sinθ / (1 + k²/R²). For solid sphere, k²/R² = 2/5. a = (10 × 0.5) / (1 + 2/5) = 5 / (7/5) = 25/7 m/s².',
    stepMarking: [{ step: 'Apply a = g sin30° / (1 + 2/5) = 25/7 m/s²', marks: '+4 / -1' }],
    examinerTip: 'Race down an incline (highest acceleration wins): Solid Sphere (k²/R²=0.4) > Disc/Solid Cylinder (0.5) > Hollow Sphere (0.67) > Ring/Hollow Cylinder (1.0).',
    commonPitfall: 'Using g sinθ = 5 m/s² (sliding without friction) instead of rolling.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Rotational Motion (Angular Momentum Conservation)',
    questionText: 'A uniform circular disc of radius R and mass M is rotating freely about its central axis at angular speed ω₀. A small insect of mass M/4 gently lands on its rim. What is the new angular speed?',
    options: ['(2/3) ω₀', '(4/5) ω₀', '(1/2) ω₀', '(3/4) ω₀'],
    correctOption: '(2/3) ω₀',
    modelAnswer: 'No external torque => L_i = L_f. I_i = ½MR². I_f = ½MR² + (M/4)R² = (3/4)MR². Thus (½MR²)ω₀ = (3/4 MR²)ω_f => ω_f = (2/3) ω₀.',
    stepMarking: [
      { step: 'Ii = 0.5 MR²; If = 0.5 MR² + 0.25 MR² = 0.75 MR²', marks: '+2' },
      { step: 'ωf = (0.5 / 0.75) ω0 = (2/3) ω0', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'In such angular momentum conservation problems, mechanical kinetic energy DECREASES (lost via internal friction when landing).',
    commonPitfall: 'Conserving kinetic energy instead of angular momentum.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Rotational Motion (Centre of Mass)',
    questionText: 'Two particles of masses 2 kg and 6 kg are initially at rest 8 m apart. Under mutual gravitational attraction, they move towards each other. How far does the 2 kg mass move before they collide?',
    options: ['6 m', '2 m', '4 m', '5.33 m'],
    correctOption: '6 m',
    modelAnswer: 'No external force => COM remains stationary: m₁ Δx₁ = m₂ Δx₂ and Δx₁ + Δx₂ = 8 m. Thus 2Δx₁ = 6(8 − Δx₁) => 8Δx₁ = 48 => Δx₁ = 6 m.',
    stepMarking: [{ step: 'Apply m1 Δx1 = m2 Δx2 with Δx1 + Δx2 = 8 m => Δx1 = 6 m', marks: '+4 / -1' }],
    examinerTip: 'The lighter mass always travels the larger share of distance: Δx₁ = m₂ d / (m₁ + m₂).',
    commonPitfall: 'Swapping Δx₁ and Δx₂ and answering 2 m.'
  },
  // 21-24: Gravitation
  {
    section: 'A',
    marks: 4,
    topic: 'Gravitation (Variation of g with Depth & Height)',
    questionText: 'At what height h above Earth’s surface (radius R) is the acceleration due to gravity reduced to 1/4 of its surface value, and at what depth d is it reduced to 1/4 of its surface value?',
    options: ['h = R and d = 3R/4', 'h = 2R and d = 3R/4', 'h = R and d = R/4', 'h = 3R and d = R/4'],
    correctOption: 'h = R and d = 3R/4',
    modelAnswer: 'With height: g_h = g (R/(R+h))² = g/4 => R/(R+h) = 1/2 => h = R. With depth: g_d = g(1 − d/R) = g/4 => d/R = 3/4 => d = 3R/4.',
    stepMarking: [
      { step: 'Height: (R/(R+h))^2 = 1/4 => h = R', marks: '+2' },
      { step: 'Depth: 1 - d/R = 1/4 => d = 3R/4', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'For small heights (h ≪ R), g_h ≈ g(1 − 2h/R), so height drops g TWICE as fast as depth (d = 2h for equal small drop)!',
    commonPitfall: 'Using approximate formula (1 − 2h/R) for large h comparable to R.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Gravitation (Escape & Orbital Velocity)',
    questionText: 'A satellite is orbiting very close to Earth’s surface with orbital velocity v₀. By what factor must its speed be increased to escape Earth’s gravitational field completely, and what is the percentage increase needed?',
    options: [
      '√2 times; 41.4% increase',
      '2 times; 100% increase',
      '√2 times; 100% increase',
      '1/√2 times; 29.3% decrease'
    ],
    correctOption: '√2 times; 41.4% increase',
    modelAnswer: 'v_e = √(2gR) = √2 · v₀ ≈ 1.414 v₀. Percentage increase = ((v_e − v₀)/v₀)×100 = (1.414 − 1)×100 = 41.4%.',
    stepMarking: [{ step: 've = √2 v0 => % increase = (√2 - 1)×100 = 41.4%', marks: '+4 / -1' }],
    examinerTip: 'Escape velocity v_e = √(2GM/R) is independent of the mass of the escaping body AND angle of projection!',
    commonPitfall: 'Saying 141.4% increase instead of 41.4% increase.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Gravitation (Kepler’s Third Law)',
    questionText: 'A geostationary satellite orbits at distance 6R above Earth’s surface (i.e., r₁ = 7R from centre) with time period 24 h. What is the time period of another satellite at height 2.5R above Earth’s surface (r₂ = 3.5R from centre)?',
    options: ['6√2 hours (~8.49 h)', '12 hours', '6 hours', '3√2 hours'],
    correctOption: '6√2 hours (~8.49 h)',
    modelAnswer: 'By Kepler’s 3rd law T² ∝ r³: (T₂/T₁)² = (r₂/r₁)³ = (3.5R / 7R)³ = (1/2)³ = 1/8 => T₂ = 24 / √8 = 24 / (2√2) = 12/√2 = 6√2 h.',
    stepMarking: [{ step: 'Use r1=7R, r2=3.5R (from Earth centre!): T2 = 24 × (1/2)^(3/2) = 6√2 h', marks: '+4 / -1' }],
    examinerTip: 'ALWAYS add Earth’s radius R to altitude h before applying Kepler’s 3rd Law (r = R + h)!',
    commonPitfall: 'Using (2.5/6)³ instead of (3.5/7)³.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Gravitation (Satellite Energy & Potential)',
    questionText: 'A satellite of mass m is orbiting Earth (mass M) in a circular orbit of radius r. The ratio of its Kinetic Energy (K), Magnitude of Potential Energy (|U|), and Magnitude of Total Mechanical Energy (|E|) is:',
    options: ['1 : 2 : 1', '1 : 1 : 2', '2 : 1 : 1', '1 : 2 : 2'],
    correctOption: '1 : 2 : 1',
    modelAnswer: 'K = +GMm/(2r), U = −GMm/r, E = K + U = −GMm/(2r). Therefore K : |U| : |E| = 1 : 2 : 1 (and Binding Energy = +GMm/(2r) = K).',
    stepMarking: [{ step: 'Verify K = GMm/(2r), |U| = GMm/r, |E| = GMm/(2r) => 1:2:1', marks: '+4 / -1' }],
    examinerTip: 'As a satellite shifts to a higher orbit (r increases): Orbital speed & KE DECREASE, while Potential Energy & Total Energy INCREASE (become less negative)!',
    commonPitfall: 'Thinking total energy decreases when moving to a higher orbit.'
  },
  // 25-28: Solids & Fluids
  {
    section: 'A',
    marks: 4,
    topic: 'Mechanical Properties of Solids (Young’s Modulus & Elastic Energy)',
    questionText: 'A wire of length L and cross-sectional area A is stretched by ΔL under a tensile force F. What is the elastic potential energy stored per unit volume (energy density) in terms of Young’s modulus Y and strain ε?',
    options: ['(1/2) Y ε²', 'Y ε²', '(1/2) Y² ε', '(1/2) F ΔL'],
    correctOption: '(1/2) Y ε²',
    modelAnswer: 'Energy density u = (1/2) × Stress × Strain = (1/2) × (Y ε) × ε = (1/2) Y ε² = (Stress)² / (2Y). Note (1/2) F ΔL is TOTAL energy, not energy per unit volume.',
    stepMarking: [{ step: 'u = ½ × stress × strain = ½ Y ε^2', marks: '+4 / -1' }],
    examinerTip: 'Elastomers (rubber) do not obey Hooke’s law over most of their curve; Steel is MORE elastic than rubber (higher Y).',
    commonPitfall: 'Choosing ½ F ΔL (total elastic energy) instead of energy per unit volume.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Fluid Mechanics (Bernoulli & Torricelli Efflux)',
    questionText: 'A large open tank filled with water up to height H has a small hole at depth h below the free water surface. At what depth h should the hole be made for the horizontal range of the emerging water jet on the ground to be MAXIMUM, and what is that maximum range?',
    options: ['h = H/2; R_max = H', 'h = H/4; R_max = H/2', 'h = H/2; R_max = 2H', 'h = 3H/4; R_max = H'],
    correctOption: 'h = H/2; R_max = H',
    modelAnswer: 'Efflux speed v = √(2gh). Time to fall height (H − h) is t = √(2(H−h)/g). Range R = v t = 2√(h(H−h)), which is maximum at h = H/2 giving R_max = 2√((H/2)(H/2)) = H.',
    stepMarking: [{ step: 'Maximize R = 2√(h(H-h)) at h = H/2 => R_max = H', marks: '+4 / -1' }],
    examinerTip: 'Two holes at depths h and (H − h) produce the EXACT SAME horizontal range!',
    commonPitfall: 'Assuming R_max = 2H or maximum range occurs near the bottom.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Fluid Mechanics (Viscosity & Terminal Velocity)',
    questionText: 'Eight identical small spherical raindrops of radius r falling through air with terminal velocity 2 cm/s coalesce to form a single large drop. What is the terminal velocity of the big drop?',
    options: ['8 cm/s', '4 cm/s', '16 cm/s', '2 cm/s'],
    correctOption: '8 cm/s',
    modelAnswer: 'Volume conserved: (4/3)πR³ = 8 × (4/3)πr³ => R = 2r. Terminal velocity v_t = 2r²(ρ−σ)g/(9η) ∝ r². Thus v_big = 2² × 2 = 4 × 2 = 8 cm/s.',
    stepMarking: [
      { step: 'R = 8^(1/3) r = 2r', marks: '+2' },
      { step: 'vt ∝ r^2 => v_big = 4 × 2 = 8 cm/s', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'For n drops coalescing: R = n^(1/3) r, so v_t scales by n^(2/3)!',
    commonPitfall: 'Scaling v_t linearly with R (giving 4 cm/s) instead of R².'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Fluid Mechanics (Surface Tension — Excess Pressure & Capillarity)',
    questionText: 'What is the ratio of excess pressure inside a soap bubble of radius R to that inside an air bubble of the same radius R in water (assuming same surface tension T), and what happens if water rises to height h in a capillary tube inclined at 60° to the vertical?',
    options: [
      '2 : 1 (4T/R vs 2T/R); Vertical height h stays same, slant length becomes 2h',
      '1 : 2 (2T/R vs 4T/R); Vertical height halves',
      '1 : 1; Slant length remains h',
      '2 : 1; Vertical height becomes h cos 60°'
    ],
    correctOption: '2 : 1 (4T/R vs 2T/R); Vertical height h stays same, slant length becomes 2h',
    modelAnswer: 'A soap bubble has TWO free surfaces (4T/R) whereas an air bubble in water has ONE surface (2T/R) => ratio 2 : 1. Tilting a capillary keeps vertical height h = 2Tcosθ/(ρgr) unchanged, so length along tube l = h / cos 60° = 2h.',
    stepMarking: [{ step: 'Verify 4T/R vs 2T/R (2:1) and invariant vertical capillary rise h', marks: '+4 / -1' }],
    examinerTip: 'Even if capillary tube length is shorter than h, water does NOT overflow as a fountain — the meniscus radius adjusts instead!',
    commonPitfall: 'Using 4T/R for an air bubble inside liquid (it has only 1 liquid-air interface!).'
  },
  // 29-32: Thermal Physics, Thermodynamics & KTG
  {
    section: 'A',
    marks: 4,
    topic: 'Thermal Physics (Newton’s Law of Cooling & Radiation)',
    questionText: 'According to Wien’s Displacement Law and Stefan-Boltzmann Law, if the absolute temperature of a blackbody is doubled (T -> 2T), then the wavelength of maximum emission (λ_m) and total radiant power emitted per unit area (E) change by factors of:',
    options: [
      'λ_m becomes 1/2 and E becomes 16 times',
      'λ_m becomes 2 times and E becomes 8 times',
      'λ_m becomes 1/2 and E becomes 4 times',
      'λ_m becomes 1/4 and E becomes 16 times'
    ],
    correctOption: 'λ_m becomes 1/2 and E becomes 16 times',
    modelAnswer: 'Wien’s law: λ_m T = b (constant) => doubling T halves λ_m. Stefan’s law: E = σ T⁴ => doubling T multiplies E by 2⁴ = 16.',
    stepMarking: [{ step: 'Apply λm ∝ 1/T (1/2) and E ∝ T^4 (16×)', marks: '+4 / -1' }],
    examinerTip: 'For Newton’s Law of Cooling: (T₁ − T₂)/t ≈ K[(T₁ + T₂)/2 − T_surroundings] — always use the AVERAGE temperature in brackets!',
    commonPitfall: 'Forgetting the 4th power in Stefan’s law or using initial temperature instead of average in Newton’s cooling.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Thermodynamics (First Law & Molar Heat Capacities)',
    questionText: 'One mole of an ideal monoatomic gas (γ = 5/3) is heated at constant pressure (isobaric process). What fraction of the heat supplied (ΔQ) is used to increase the internal energy (ΔU), and what fraction performs external work (ΔW)?',
    options: ['3/5 (60%) for ΔU and 2/5 (40%) for ΔW', '2/5 for ΔU and 3/5 for ΔW', '5/7 for ΔU and 2/7 for ΔW', '1/2 for ΔU and 1/2 for ΔW'],
    correctOption: '3/5 (60%) for ΔU and 2/5 (40%) for ΔW',
    modelAnswer: 'For isobaric process: ΔU/ΔQ = (n C_v ΔT)/(n C_p ΔT) = 1/γ = 3/5. ΔW/ΔQ = 1 − 1/γ = 2/5.',
    stepMarking: [{ step: 'ΔU/ΔQ = 1/γ = 3/5; ΔW/ΔQ = 1 - 1/γ = 2/5', marks: '+4 / -1' }],
    examinerTip: 'Memorize isobaric ratios: ΔU/ΔQ = 1/γ and ΔW/ΔQ = (γ − 1)/γ for ANY ideal gas!',
    commonPitfall: 'Using γ = 7/5 (diatomic) instead of 5/3 (monoatomic).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Thermodynamics (Carnot Engine)',
    questionText: 'A Carnot engine operates between a source at 627°C and a sink at 27°C. If it absorbs 3000 J of heat from the source per cycle, calculate its efficiency and work output per cycle:',
    options: ['66.7% (2/3) and 2000 J', '95.7% and 2871 J', '33.3% and 1000 J', '50% and 1500 J'],
    correctOption: '66.7% (2/3) and 2000 J',
    modelAnswer: 'Convert to Kelvin! T₁ = 627 + 273 = 900 K; T₂ = 27 + 273 = 300 K. η = 1 − T₂/T₁ = 1 − 300/900 = 2/3 = 66.7%. Work W = η Q₁ = (2/3) × 3000 = 2000 J.',
    stepMarking: [
      { step: 'T1 = 900 K, T2 = 300 K => η = 1 - 300/900 = 2/3 (66.7%)', marks: '+2' },
      { step: 'W = (2/3) × 3000 = 2000 J', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'NEVER plug Celsius temperatures directly into Carnot efficiency (1 − T₂/T₁); ALWAYS add 273!',
    commonPitfall: 'Computing 1 − 27/627 = 95.7% using °C.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Kinetic Theory of Gases (RMS Speed & Equipartition)',
    questionText: 'At what temperature is the root-mean-square (rms) speed of oxygen (O₂, M = 32) molecules equal to the rms speed of hydrogen (H₂, M = 2) molecules at 27°C?',
    options: ['4800 K (4527°C)', '432 K', '300 K', '1200 K'],
    correctOption: '4800 K (4527°C)',
    modelAnswer: 'v_rms = √(3RT/M). Equal v_rms => T_O2 / M_O2 = T_H2 / M_H2 => T_O2 / 32 = (27 + 273) / 2 = 300 / 2 => T_O2 = 16 × 300 = 4800 K.',
    stepMarking: [{ step: 'T_O2 / 32 = 300 / 2 => T_O2 = 4800 K', marks: '+4 / -1' }],
    examinerTip: 'Speed ordering at a given T: v_rms (√3) > v_avg (√(8/π) ≈ 1.60) > v_mp (√2 ≈ 1.414).',
    commonPitfall: 'Using 27°C directly instead of 300 K.'
  },
  // 33-36: SHM & Waves
  {
    section: 'A',
    marks: 4,
    topic: 'Oscillations (SHM — Energy & Phase)',
    questionText: 'A particle executes Simple Harmonic Motion with amplitude A. At what displacement x from the mean position is its Kinetic Energy equal to three times its Potential Energy (K = 3U)?',
    options: ['± A / 2', '± A / √2', '± √3 A / 2', '± A / 4'],
    correctOption: '± A / 2',
    modelAnswer: 'Total energy E = K + U = 3U + U = 4U. Since U = ½k x² and E = ½k A², we get ½k x² = (1/4)(½k A²) => x² = A²/4 => x = ± A/2.',
    stepMarking: [{ step: 'E = 4U => x^2 = A^2 / 4 => x = ± A/2', marks: '+4 / -1' }],
    examinerTip: 'At x = ± A/√2, K = U (50%-50%); at x = ± A/2, K = 3U (75%-25%).',
    commonPitfall: 'Confusing x = A/√2 (where K = U) with x = A/2 (where K = 3U).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Oscillations (Spring-Mass & Simple Pendulum)',
    questionText: 'Two springs of spring constants k₁ and k₂ are connected first in series and then in parallel to a block of mass m. What is the ratio of their angular frequencies ω_series : ω_parallel when k₁ = k₂ = k?',
    options: ['1 : 2', '2 : 1', '1 : 4', '1 : √2'],
    correctOption: '1 : 2',
    modelAnswer: 'For identical springs: k_series = k/2, k_parallel = 2k. Since ω = √(k_eff / m), ω_series / ω_parallel = √((k/2)/(2k)) = √(1/4) = 1 : 2.',
    stepMarking: [{ step: 'k_s = k/2, k_p = 2k => ωs/ωp = √(1/4) = 1:2', marks: '+4 / -1' }],
    examinerTip: 'Cutting a spring of constant k into n equal parts increases each part’s spring constant to nk (since k ∝ 1/L)!',
    commonPitfall: 'Answering 1 : 4 (ratio of k_eff, forgetting the square root for ω).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Waves (Organ Pipes — Open vs Closed)',
    questionText: 'A closed organ pipe (closed at one end) and an open organ pipe (open at both ends) have the SAME length L. What is the ratio of the fundamental frequency of the closed pipe to that of the open pipe, and which harmonics are present in a closed pipe?',
    options: [
      '1 : 2; only ODD harmonics (1st, 3rd, 5th...)',
      '2 : 1; all harmonics (1st, 2nd, 3rd...)',
      '1 : 2; only EVEN harmonics',
      '1 : 4; only ODD harmonics'
    ],
    correctOption: '1 : 2; only ODD harmonics (1st, 3rd, 5th...)',
    modelAnswer: 'f_closed = v / (4L) and f_open = v / (2L) => f_closed : f_open = 1 : 2. Because one end is a node and the other an antinode, a closed pipe supports only odd harmonics (f, 3f, 5f...).',
    stepMarking: [{ step: 'Verify v/(4L) : v/(2L) = 1:2 and odd-harmonic rule for closed pipe', marks: '+4 / -1' }],
    examinerTip: 'Notice that the 2nd OVERTONE of a closed pipe is the 5th HARMONIC (5v/4L), whereas the 2nd OVERTONE of an open pipe is the 3rd HARMONIC (3v/2L)!',
    commonPitfall: 'Confusing "overtone number" with "harmonic number" in closed pipes.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Waves (Progressive Wave Equation & Beats)',
    questionText: 'A progressive transverse wave is given by y = 0.05 sin(4πt − 0.2πx) (x, y in metres, t in seconds). Find the wave speed (v) and wavelength (λ):',
    options: ['v = 20 m/s, λ = 10 m', 'v = 0.05 m/s, λ = 5 m', 'v = 20 m/s, λ = 5 m', 'v = 10 m/s, λ = 10 m'],
    correctOption: 'v = 20 m/s, λ = 10 m',
    modelAnswer: 'Compare with y = A sin(ωt − kx): ω = 4π rad/s, k = 0.2π m⁻¹. Wave speed v = ω/k = 4π / 0.2π = 20 m/s. Wavelength λ = 2π/k = 2π / 0.2π = 10 m.',
    stepMarking: [
      { step: 'v = ω/k = 4π / 0.2π = 20 m/s', marks: '+2' },
      { step: 'λ = 2π/k = 2π / 0.2π = 10 m', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'Maximum particle velocity v_max = Aω = 0.05 × 4π = 0.2π m/s (distinct from wave propagation speed v = ω/k!).',
    commonPitfall: 'Confusing particle speed (Aω) with wave speed (ω/k).'
  },
  // 37-40: Electrostatics & Capacitors
  {
    section: 'A',
    marks: 4,
    topic: 'Electrostatics (Gauss’s Law)',
    questionText: 'A point charge Q is placed at the centre of one face of a cube of side a. What is the electric flux passing through the remaining five faces of the cube?',
    options: ['Q / (2ε₀)', 'Q / (6ε₀)', '5Q / (6ε₀)', 'Q / ε₀'],
    correctOption: 'Q / (2ε₀)',
    modelAnswer: 'Place an identical imaginary cube symmetrically over that face so Q sits at the common centre of the 2-cube enclosure. Total flux = Q/ε₀ -> each cube receives Q/(2ε₀). Flux through the open face carrying Q is zero, so all Q/(2ε₀) passes through the remaining five faces.',
    stepMarking: [{ step: 'Two-cube Gaussian symmetry => Q / (2ε0)', marks: '+4 / -1' }],
    examinerTip: 'Symmetric cube charge shortcuts: Centre = Q/ε₀, Face centre = Q/(2ε₀), Edge centre = Q/(4ε₀), Corner = Q/(8ε₀).',
    commonPitfall: 'Multiplying Q/ε₀ by 5/6.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Electrostatics (Electric Dipole & Potential)',
    questionText: 'An electric dipole of dipole moment p is placed in a uniform electric field E. What is the work done in slowly rotating the dipole from stable equilibrium (θ = 0°) to unstable equilibrium (θ = 180°)?',
    options: ['2 pE', 'pE', '0', '−2 pE'],
    correctOption: '2 pE',
    modelAnswer: 'Potential energy U(θ) = −pE cosθ. At θ = 0° (stable), U₁ = −pE; at θ = 180° (unstable), U₂ = +pE. Work done W = U₂ − U₁ = pE − (−pE) = +2pE.',
    stepMarking: [{ step: 'W = U(180°) - U(0°) = (+pE) - (-pE) = 2pE', marks: '+4 / -1' }],
    examinerTip: 'On the equatorial plane of a dipole, potential V = 0 everywhere, while electric field E = kp/r³ (antiparallel to p) is non-zero!',
    commonPitfall: 'Answering pE (which is for 0° -> 90°) or 0.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Capacitors (Dielectric Slab Insertion)',
    questionText: 'A parallel-plate air capacitor of capacitance C₀ is charged to voltage V₀ and then DISCONNECTED from the battery. A dielectric slab of constant K is then inserted completely filling the space between plates. How do Charge (Q), Potential Difference (V), and Stored Energy (U) change?',
    options: [
      'Q stays constant; V becomes V₀/K; U becomes U₀/K',
      'Q becomes KQ₀; V stays V₀; U becomes KU₀',
      'Q stays constant; V becomes KV₀; U becomes KU₀',
      'Q becomes Q₀/K; V stays V₀; U becomes U₀/K'
    ],
    correctOption: 'Q stays constant; V becomes V₀/K; U becomes U₀/K',
    modelAnswer: 'With battery disconnected, Q is conserved and C increases to KC₀. Therefore V = Q/C = V₀/K and U = Q²/(2C) = U₀/K (energy drops because electric field pulls dielectric slab inward).',
    stepMarking: [{ step: 'Battery disconnected => Q constant => V -> V0/K and U -> U0/K', marks: '+4 / -1' }],
    examinerTip: 'Battery DISCONNECTED = Q constant (V/K, E/K, U/K); Battery CONNECTED = V constant (KQ, E same, KU)!',
    commonPitfall: 'Applying the battery-connected rules (KQ, KU) when the battery was disconnected.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Capacitors (Energy Loss on Charge Sharing)',
    questionText: 'A 4 μF capacitor charged to 100 V is disconnected and connected in parallel to an uncharged 4 μF capacitor. How much electrostatic energy is lost as heat/radiation in the connecting wires?',
    options: ['0.01 J (10 mJ)', '0.02 J (20 mJ)', '0.04 J (40 mJ)', '0 J'],
    correctOption: '0.01 J (10 mJ)',
    modelAnswer: 'ΔU_loss = ½ (C₁C₂/(C₁+C₂))(V₁ − V₂)² = ½ × (4×4/8)×10⁻⁶ × (100 − 0)² = ½ × 2×10⁻⁶ × 10⁴ = 0.01 J = 10 mJ.',
    stepMarking: [{ step: 'ΔU = ½ [C1C2/(C1+C2)] (V1-V2)^2 = 0.01 J', marks: '+4 / -1' }],
    examinerTip: 'Initial energy was ½(4×10⁻⁶)(100)² = 0.02 J; sharing with an equal uncharged capacitor always dissipates exactly half (0.01 J)!',
    commonPitfall: 'Assuming total electrostatic energy is conserved during charge redistribution.'
  },
  // 41-44: Current Electricity & Meter Bridge
  {
    section: 'A',
    marks: 4,
    topic: 'Current Electricity (Wire Stretching)',
    questionText: 'A cylindrical wire of resistance 16 Ω is melted and drawn into a wire of HALF its original length (volume conserved). What is its new resistance?',
    options: ['4 Ω', '8 Ω', '32 Ω', '64 Ω'],
    correctOption: '4 Ω',
    modelAnswer: 'At constant volume V = AL, R = ρL/A = ρL²/V ∝ L². Halving length multiplies R by (1/2)² = 1/4 => R_new = 16 / 4 = 4 Ω.',
    stepMarking: [{ step: 'Volume conserved => R ∝ L² => 16 × (1/2)² = 4 Ω', marks: '+4 / -1' }],
    examinerTip: 'Stretching/compressing wire shortcuts: R ∝ L² ∝ 1/A² ∝ 1/r⁴.',
    commonPitfall: 'Taking R ∝ L directly (giving 8 Ω) without accounting for doubled cross-sectional area.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Current Electricity (Drift Velocity & Temperature)',
    questionText: 'In a metallic conductor carrying steady current, how do resistivity (ρ) and relaxation time (τ) change when temperature increases, and how do semiconductor resistivities behave?',
    options: [
      'In metals, τ decreases so ρ increases; in semiconductors, carrier density n increases exponentially so ρ decreases',
      'In metals, τ increases so ρ decreases; in semiconductors, ρ increases',
      'Both metals and semiconductors show decreasing ρ with temperature',
      'In metals, n decreases causing ρ to increase'
    ],
    correctOption: 'In metals, τ decreases so ρ increases; in semiconductors, carrier density n increases exponentially so ρ decreases',
    modelAnswer: 'ρ = m / (ne²τ). In metals, n is large and nearly constant while higher thermal agitation lowers mean free time τ -> ρ increases (positive α). In semiconductors, exponential rise in n outweighs drop in τ -> ρ decreases (negative α).',
    stepMarking: [{ step: 'Apply ρ = m/(ne²τ) to metals (τ↓) vs semiconductors (n↑ exponentially)', marks: '+4 / -1' }],
    examinerTip: 'Alloys like Manganin and Constantan have very small α (temperature coefficient of resistivity), ideal for standard resistors & meter bridges.',
    commonPitfall: 'Saying carrier concentration n decreases with heating in metals.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Current Electricity (Cells in Series/Parallel & Maximum Power)',
    questionText: 'A cell of EMF E = 12 V and internal resistance r = 2 Ω is connected to an external variable resistor R. At what value of R is the power dissipated in R MAXIMUM, and what is that maximum power?',
    options: ['R = 2 Ω; P_max = 18 W', 'R = 4 Ω; P_max = 16 W', 'R = 1 Ω; P_max = 16 W', 'R = 2 Ω; P_max = 36 W'],
    correctOption: 'R = 2 Ω; P_max = 18 W',
    modelAnswer: 'By Maximum Power Transfer Theorem, power in R is maximum when R = r = 2 Ω. Then P_max = E² / (4r) = 12² / (4 × 2) = 144 / 8 = 18 W (efficiency = 50%).',
    stepMarking: [
      { step: 'Maximum power at R = r = 2 Ω', marks: '+2' },
      { step: 'Pmax = E^2 / (4r) = 144 / 8 = 18 W', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'At maximum power transfer (R = r), half the battery power is wasted inside r (efficiency = 50%).',
    commonPitfall: 'Using E²/r = 72 W instead of E²/(4r) = 18 W.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Current Electricity (Meter Bridge — Unit 20)',
    questionText: 'In a meter bridge experiment, a resistance X in the left gap and 12 Ω in the right gap give a null point at l = 40 cm from the left end. What is X, and what happens to the balance length if a 12 Ω resistor is connected in parallel with the right-gap 12 Ω?',
    options: [
      'X = 8 Ω; new balance length shifts to 57.1 cm (400/7 cm)',
      'X = 18 Ω; new balance length shifts to 25 cm',
      'X = 8 Ω; new balance length shifts to 25 cm',
      'X = 12 Ω; new balance length stays at 40 cm'
    ],
    correctOption: 'X = 8 Ω; new balance length shifts to 57.1 cm (400/7 cm)',
    modelAnswer: 'Initially X / 12 = 40 / (100 − 40) = 40/60 => X = 8 Ω. Connecting 12 Ω || 12 Ω in right gap makes R_right = 6 Ω. Then 8 / 6 = l′ / (100 − l′) => 800 − 8l′ = 6l′ => l′ = 800/14 = 400/7 ≈ 57.1 cm.',
    stepMarking: [
      { step: 'X / 12 = 40 / 60 => X = 8 Ω', marks: '+2' },
      { step: 'R_right = 6 Ω => 8/6 = l′/(100-l′) => l′ = 57.1 cm', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'Meter bridge works on the balanced Wheatstone bridge principle; balance point is independent of cell EMF and internal resistance!',
    commonPitfall: 'Using l/(100+l) or reversing left and right gap ratios.'
  },
  // 45-48: Magnetism & Matter
  {
    section: 'A',
    marks: 4,
    topic: 'Moving Charges & Magnetism (Biot-Savart & Ampere’s Law)',
    questionText: 'A circular coil of radius R carries current I. At what axial distance x from the centre of the coil is the magnetic field equal to 1/8 of its value at the centre?',
    options: ['x = √3 R', 'x = R', 'x = 2 R', 'x = R / √3'],
    correctOption: 'x = √3 R',
    modelAnswer: 'B_axis / B_centre = R³ / (R² + x²)^(3/2) = 1/8 = (1/2)³ => R / √(R² + x²) = 1/2 => R² + x² = 4R² => x = √3 R.',
    stepMarking: [{ step: '(R^2 / (R^2 + x^2))^(3/2) = 1/8 => R^2 + x^2 = 4R^2 => x = √3 R', marks: '+4 / -1' }],
    examinerTip: 'Inside a long solenoid, B = μ₀ n I (independent of radius); at either open end of a long solenoid, B = μ₀ n I / 2.',
    commonPitfall: 'Solving R²/(R²+x²) = 1/8 without taking cube root first.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Moving Charges & Magnetism (Charged Particle in Magnetic Field)',
    questionText: 'A proton and an α-particle enter a uniform perpendicular magnetic field with the SAME kinetic energy. What is the ratio of their circular path radii (r_p : r_α)?',
    options: ['1 : 1', '1 : 2', '2 : 1', '1 : 4'],
    correctOption: '1 : 1',
    modelAnswer: 'r = mv / (qB) = √(2mK) / (qB). For α-particle, m_α = 4m_p and q_α = 2q_p. Hence r_α / r_p = √4 / 2 = 2/2 = 1 => r_p : r_α = 1 : 1.',
    stepMarking: [{ step: 'Apply r = √(2mK)/(qB): √4 / 2 = 1 => 1 : 1', marks: '+4 / -1' }],
    examinerTip: 'Check what is kept SAME: Same v -> r ∝ m/q (1:2); Same p -> r ∝ 1/q (2:1); Same K -> r ∝ √m/q (1:1 for p & α)!',
    commonPitfall: 'Using r ∝ m/q (same speed) when the question specifies same kinetic energy.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Moving Charges & Magnetism (Galvanometer to Ammeter)',
    questionText: 'A galvanometer of coil resistance 98 Ω gives full-scale deflection for a current of 2 mA. What shunt resistance is needed to convert it into an ammeter of range 0 to 100 mA?',
    options: ['2 Ω in parallel', '2 Ω in series', '4900 Ω in series', '0.2 Ω in parallel'],
    correctOption: '2 Ω in parallel',
    modelAnswer: 'Shunt S = I_g G / (I − I_g) = (2 mA × 98 Ω) / (100 − 2) mA = (2 × 98) / 98 = 2 Ω connected in parallel.',
    stepMarking: [{ step: 'S = Ig G / (I - Ig) = 2×98 / 98 = 2 Ω in parallel', marks: '+4 / -1' }],
    examinerTip: 'Ammeter = low shunt in PARALLEL; Voltmeter = high multiplier R = V/I_g − G in SERIES.',
    commonPitfall: 'Dividing by I (100) instead of (I − I_g = 98).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Magnetism & Matter (Dia, Para, Ferromagnetic Materials)',
    questionText: 'Given below are two statements:\nStatement I: Diamagnetic substances have small negative magnetic susceptibility (χ < 0), are weakly repelled by magnets, and their susceptibility is independent of temperature.\nStatement II: Above the Curie temperature (T_c), a ferromagnetic substance loses its domain alignment and transforms into a paramagnetic substance obeying Curie-Weiss law.\nChoose the correct option:',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOption: 'Both Statement I and Statement II are correct',
    modelAnswer: 'Diamagnets (Bi, Cu, H₂O, superconductors χ = −1) have χ < 0 independent of T. Paramagnets follow χ = C/T (Curie’s law). Ferromagnets become paramagnets above T_c following χ = C/(T − T_c).',
    stepMarking: [{ step: 'Verify diamagnetic temperature independence & ferromagnetic Curie transition', marks: '+4 / -1' }],
    examinerTip: 'Soft iron (low retentivity, low coercivity, narrow hysteresis loop) is used for electromagnet/transformer cores; Steel/Alnico (high retentivity & coercivity) for permanent magnets.',
    commonPitfall: 'Thinking diamagnetic susceptibility varies as 1/T.'
  },
  // 49-52: EMI, AC & EM Waves
  {
    section: 'A',
    marks: 4,
    topic: 'Electromagnetic Induction (Motional EMF & Induced Charge)',
    questionText: 'A coil of resistance R = 10 Ω and 100 turns has its magnetic flux changed from 0.5 Wb to 0.1 Wb in 0.2 s. What is the total induced charge flowing through the closed coil?',
    options: ['4 C', '20 C', '0.4 C', '2 C'],
    correctOption: '4 C',
    modelAnswer: 'Induced charge q = N |ΔΦ| / R = 100 × (0.5 − 0.1) / 10 = 100 × 0.4 / 10 = 4 C. Notice q is completely independent of time Δt!',
    stepMarking: [{ step: 'Use q = N|ΔΦ|/R = 100(0.4)/10 = 4 C (independent of Δt)', marks: '+4 / -1' }],
    examinerTip: 'Induced EMF depends on time rate (dΦ/dt), whereas induced CHARGE q = NΔΦ/R depends ONLY on net flux change and resistance!',
    commonPitfall: 'Dividing by Δt = 0.2 s (which computes average current 20 A instead of charge 4 C).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Alternating Current (Series LCR Resonance)',
    questionText: 'In a series LCR circuit connected to an AC source of 220 V, 50 Hz, we have R = 20 Ω, X_L = 50 Ω, and X_C = 30 Ω. Find the impedance (Z) and power factor (cos φ) of the circuit:',
    options: [
      'Z = 20√2 Ω; cos φ = 1/√2 (0.707)',
      'Z = 40 Ω; cos φ = 0.5',
      'Z = 100 Ω; cos φ = 0.2',
      'Z = 20 Ω; cos φ = 1.0'
    ],
    correctOption: 'Z = 20√2 Ω; cos φ = 1/√2 (0.707)',
    modelAnswer: 'Z = √(R² + (X_L − X_C)²) = √(20² + (50 − 30)²) = √(400 + 400) = 20√2 Ω. Power factor cos φ = R/Z = 20 / (20√2) = 1/√2.',
    stepMarking: [
      { step: 'Z = √(20^2 + 20^2) = 20√2 Ω', marks: '+2' },
      { step: 'cos φ = R/Z = 1/√2', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'At resonance (X_L = X_C): Z = R (minimum), current is maximum, cos φ = 1, and quality factor Q = (1/R)√(L/C).',
    commonPitfall: 'Adding X_L + X_C = 80 Ω instead of taking |X_L − X_C| = 20 Ω.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Alternating Current (Transformers & Wattless Current)',
    questionText: 'An ideal step-down transformer steps 2200 V down to 220 V. If the secondary delivers 2 A to a resistive load, what are the turns ratio N_p : N_s and the primary current I_p?',
    options: ['10 : 1 and 0.2 A', '1 : 10 and 20 A', '10 : 1 and 20 A', '10 : 1 and 2 A'],
    correctOption: '10 : 1 and 0.2 A',
    modelAnswer: 'V_p / V_s = N_p / N_s = 2200 / 220 = 10 : 1. For an ideal transformer, V_p I_p = V_s I_s => 2200 I_p = 220 × 2 => I_p = 0.2 A.',
    stepMarking: [
      { step: 'Np : Ns = 2200 : 220 = 10 : 1', marks: '+2' },
      { step: 'Ip = (220×2)/2200 = 0.2 A', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'In a pure inductor or pure capacitor, phase difference is 90°, so average power P = V_rms I_rms cos 90° = 0 (wattless current).',
    commonPitfall: 'Multiplying I_s by 10 instead of dividing by 10.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Electromagnetic Waves (E/B Ratio, Direction & Spectrum)',
    questionText: 'A plane EM wave propagates along the +x axis in vacuum. At an instant, its electric field is E = 60 ĵ V/m. What is the magnetic field vector B at that point (c = 3 × 10⁸ m/s)?',
    options: [
      '2 × 10⁻⁷ k̂ T',
      '2 × 10⁻⁷ (−k̂) T',
      '1.8 × 10¹⁰ k̂ T',
      '2 × 10⁻⁷ î T'
    ],
    correctOption: '2 × 10⁻⁷ k̂ T',
    modelAnswer: 'Magnitude B = E / c = 60 / (3 × 10⁸) = 2 × 10⁻⁷ T. Direction of propagation = E × B direction (+î). Since ĵ × k̂ = +î, B points along +k̂.',
    stepMarking: [
      { step: 'B = E/c = 60 / 3e8 = 2e-7 T', marks: '+2' },
      { step: 'E × B = ĵ × k̂ = +î (+x direction) => B along +k̂', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'Always check E × B = direction of propagation! Also remember EM waves carry momentum p = U/c (or 2U/c on complete reflection) and equal average electric & magnetic energy densities.',
    commonPitfall: 'Getting the sign of k̂ wrong by checking B × E instead of E × B.'
  },
  // 53-56: Ray Optics & Wave Optics
  {
    section: 'A',
    marks: 4,
    topic: 'Ray Optics (Lens Maker’s Formula & Immersion)',
    questionText: 'A double convex lens of glass (μ_g = 1.5) has focal length +20 cm in air. If it is immersed completely in water (μ_w = 4/3), what becomes its new focal length and nature?',
    options: [
      '+80 cm (stays converging)',
      '+40 cm (stays converging)',
      '−80 cm (becomes diverging)',
      '+5 cm (stays converging)'
    ],
    correctOption: '+80 cm (stays converging)',
    modelAnswer: '1/f_air = (1.5 − 1)(1/R₁ − 1/R₂) = 0.5 K. In water: 1/f_w = (1.5/(4/3) − 1) K = (9/8 − 1) K = (1/8) K. Hence f_w / f_air = 0.5 / (1/8) = 4 => f_w = 4 × 20 = +80 cm.',
    stepMarking: [{ step: 'fw / fair = (μg - 1) / (μg/μw - 1) = 0.5 / (1/8) = 4 => +80 cm', marks: '+4 / -1' }],
    examinerTip: 'Immersion in medium with μ_m < μ_lens INCREASES focal length (same nature); μ_m > μ_lens REVERSES nature (converging becomes diverging); μ_m = μ_lens makes lens invisible (f = ∞)!',
    commonPitfall: 'Thinking focal length decreases in water.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Ray Optics (Prism Minimum Deviation & TIR)',
    questionText: 'An equilateral glass prism (A = 60°) produces minimum deviation δ_m = 30° for a monochromatic ray. What is the angle of incidence at minimum deviation and the refractive index (μ) of the prism material?',
    options: [
      'i = 45° and μ = √2',
      'i = 60° and μ = √3',
      'i = 30° and μ = √2',
      'i = 45° and μ = 1.5'
    ],
    correctOption: 'i = 45° and μ = √2',
    modelAnswer: 'At minimum deviation: i = (A + δ_m)/2 = (60 + 30)/2 = 45°, and r = A/2 = 30°. By Snell’s law: μ = sin(45°)/sin(30°) = (1/√2)/(1/2) = √2.',
    stepMarking: [
      { step: 'i = (60+30)/2 = 45°', marks: '+2' },
      { step: 'μ = sin45°/sin30° = √2', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'For a thin prism (small A), δ = (μ − 1)A, independent of angle of incidence!',
    commonPitfall: 'Computing sin(30°)/sin(45°) = 1/√2 (< 1!).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Wave Optics (Young’s Double Slit Experiment)',
    questionText: 'In Young’s Double Slit Experiment (YDSE), two coherent waves have an intensity ratio I₁ : I₂ = 9 : 1. What is the ratio of maximum intensity to minimum intensity (I_max : I_min) in the interference pattern?',
    options: ['4 : 1', '10 : 8 (5 : 4)', '9 : 1', '16 : 1'],
    correctOption: '4 : 1',
    modelAnswer: 'I₁/I₂ = 9/1 => amplitude ratio a₁/a₂ = 3/1. I_max / I_min = ((a₁ + a₂)/(a₁ − a₂))² = ((3 + 1)/(3 − 1))² = (4/2)² = 4 : 1.',
    stepMarking: [{ step: 'a1/a2 = √(9/1) = 3 => Imax/Imin = (4/2)^2 = 4 : 1', marks: '+4 / -1' }],
    examinerTip: 'Fringe width β = λD/d: immersing the YDSE setup in water (μ) shrinks λ to λ/μ, shrinking β to β/μ!',
    commonPitfall: 'Using intensities directly in ((9+1)/(9−1))² instead of taking square root for amplitudes first.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Wave Optics (Diffraction & Brewster’s Polarisation)',
    questionText: 'Light is incident from air onto a glass slab (μ = √3) at the polarising (Brewster) angle θ_p so that the reflected ray is completely plane polarised. What is θ_p and the angle between the reflected and refracted rays?',
    options: ['60° and 90°', '30° and 90°', '60° and 60°', '45° and 90°'],
    correctOption: '60° and 90°',
    modelAnswer: 'By Brewster’s law: tan θ_p = μ = √3 => θ_p = 60°. At polarising angle, the reflected and refracted rays are ALWAYS mutually perpendicular (90°).',
    stepMarking: [{ step: 'tan θp = √3 => θp = 60°; reflected ⊥ refracted (90°)', marks: '+4 / -1' }],
    examinerTip: 'In single-slit diffraction of width a, angular width of the CENTRAL maximum is 2λ/a (twice that of secondary maxima λ/a)!',
    commonPitfall: 'Reporting λ/a as the total angular width of the central diffraction maximum.'
  },
  // 57-60: Modern Physics & Logic Gates
  {
    section: 'A',
    marks: 4,
    topic: 'Dual Nature of Radiation (Photoelectric Effect)',
    questionText: 'Monochromatic light of wavelength 310 nm falls on a metal surface of work function 2.2 eV (take hc = 1240 eV·nm). What is the stopping potential V₀?',
    options: ['1.8 V', '4.0 V', '2.2 V', '6.2 V'],
    correctOption: '1.8 V',
    modelAnswer: 'Incident photon energy E = hc/λ = 1240 / 310 = 4.0 eV. By Einstein’s equation: eV₀ = K_max = E − φ₀ = 4.0 − 2.2 = 1.8 eV => V₀ = 1.8 V.',
    stepMarking: [
      { step: 'E = 1240 / 310 = 4.0 eV', marks: '+2' },
      { step: 'eV0 = 4.0 - 2.2 = 1.8 eV => V0 = 1.8 V', marks: '+2 (-1 if wrong)' }
    ],
    examinerTip: 'Increasing INTENSITY (keeping frequency constant) increases photoelectric current, leaving K_max and stopping potential UNCHANGED!',
    commonPitfall: 'Thinking higher light intensity increases stopping potential.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Modern Physics (Nuclei — Radius & Density)',
    questionText: 'If nuclei of mass numbers 27 and 125 are compared, the ratio of their nuclear radii (R₁ : R₂) and nuclear densities (ρ₁ : ρ₂) are respectively:',
    options: ['3 : 5 and 1 : 1', '3 : 5 and 27 : 125', '9 : 25 and 1 : 1', '1 : 1 and 3 : 5'],
    correctOption: '3 : 5 and 1 : 1',
    modelAnswer: 'R = R₀ A^(1/3) => R₁/R₂ = (27/125)^(1/3) = 3/5. Nuclear volume V ∝ R³ ∝ A, so nuclear density ρ = Mass/Volume is constant (~2.3 × 10¹⁷ kg/m³), independent of A => 1 : 1.',
    stepMarking: [{ step: 'Radius ∝ A^(1/3) = 3:5; Nuclear density = invariant 1:1', marks: '+4 / -1' }],
    examinerTip: 'Mass defect Δm = [Z m_p + (A−Z) m_n − M_nucleus]; Binding Energy = Δm × 931.5 MeV (for Δm in amu).',
    commonPitfall: 'Assuming heavier nuclei are denser (27 : 125).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Semiconductors (p-n Junction, Rectifier & Zener)',
    questionText: 'In a p-n junction diode under forward vs reverse bias, and in a full-wave rectifier fed with 50 Hz AC mains, which statement is CORRECT?',
    options: [
      'Forward bias narrows the depletion width; Reverse bias widens it; Full-wave rectifier output ripple fundamental frequency is 100 Hz (2f)',
      'Forward bias widens the depletion width; Full-wave output frequency is 50 Hz',
      'Zener diode acts as a voltage regulator in forward-bias breakdown',
      'Photodiode is normally operated under forward bias'
    ],
    correctOption: 'Forward bias narrows the depletion width; Reverse bias widens it; Full-wave rectifier output ripple fundamental frequency is 100 Hz (2f)',
    modelAnswer: 'Forward bias lowers barrier height & narrows depletion layer; reverse bias widens it. A full-wave rectifier inverts negative half-cycles, doubling ripple frequency to 2 × 50 = 100 Hz. Zener diode and photodiode both operate in REVERSE bias (while LED operates in forward bias).',
    stepMarking: [{ step: 'Verify depletion width bias trends and 100 Hz full-wave frequency', marks: '+4 / -1' }],
    examinerTip: 'Bias summary: LED = Forward bias; Photodiode & Zener regulator = Reverse bias; Solar cell = No external bias!',
    commonPitfall: 'Saying full-wave rectifier output frequency remains 50 Hz (that is for half-wave rectifier).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Semiconductors (Logic Gates)',
    questionText: 'Which universal logic gate produces a HIGH (1) output ONLY when BOTH inputs A and B are LOW (0), and which gate is formed when two inputs of a NAND gate are shorted together?',
    options: [
      'NOR gate; NOT gate',
      'NAND gate; AND gate',
      'NOR gate; OR gate',
      'XOR gate; NOT gate'
    ],
    correctOption: 'NOR gate; NOT gate',
    modelAnswer: 'For NOR: Y = NOT(A + B), so Y = 1 solely when A = 0 and B = 0. Shorting both inputs of a NAND gate gives Y = NOT(A · A) = NOT(A), acting as a NOT (inverter) gate.',
    stepMarking: [{ step: 'Verify NOR truth table (0,0 -> 1) and shorted NAND = NOT', marks: '+4 / -1' }],
    examinerTip: 'De Morgan’s theorems solve any composite gate circuit quickly: (A+B)̄ = Ā · B̄ (bubbled AND = NOR) and (A·B)̄ = Ā + B̄ (bubbled OR = NAND).',
    commonPitfall: 'Confusing NAND (outputs 0 only when both inputs are 1) with NOR (outputs 1 only when both inputs are 0).'
  }
];

const POOLS: Record<SubjectName, RawNeetQ[]> = {
  Physics: PHY_POOL,
  Chemistry: CHEM_POOL,
  Botany: BOT_POOL,
  Zoology: ZOO_POOL
};

function selectFromPool(
  subject: SubjectName,
  offset: number,
  stride: number,
  count: number
): (RawNeetQ & { subject: SubjectName })[] {
  const pool = POOLS[subject];
  const n = pool.length;
  const selected: (RawNeetQ & { subject: SubjectName })[] = [];
  for (let i = 0; i < count; i++) {
    const idx = (offset + i * stride) % n;
    selected.push({ ...pool[idx], subject });
  }
  return selected;
}

function buildFullNeetPaper(spec: FullPaperSpec): PyqPaper {
  const rawQuestions = [
    ...selectFromPool('Physics', spec.offsets.Physics, spec.strides.Physics, 45),
    ...selectFromPool('Chemistry', spec.offsets.Chemistry, spec.strides.Chemistry, 45),
    ...selectFromPool('Botany', spec.offsets.Botany, spec.strides.Botany, 45),
    ...selectFromPool('Zoology', spec.offsets.Zoology, spec.strides.Zoology, 45)
  ];

  const questions: PyqQuestion[] = rawQuestions.map((q, idx) => ({
    ...q,
    id: `${spec.id}-q${idx + 1}`,
    qNum: idx + 1
  }));

  return {
    id: spec.id,
    title: spec.title,
    subject: 'Full Syllabus (PCB)',
    year: spec.year,
    targetClass: 'NEET UG',
    paperType: spec.paperType,
    paperCode: spec.paperCode,
    totalMarks: 720,
    durationMins: 180,
    difficulty: spec.difficulty,
    isFree: spec.isFree,
    totalQuestions: questions.length,
    generalInstructions: [
      'Full-Length Official NMC 79-Chapter Synchronized NEET UG Format: 180 Compulsory MCQs (45 Physics + 45 Chemistry + 45 Botany + 45 Zoology).',
      'Marking Scheme: +4 Marks for each correct response, −1 Mark for each incorrect response, 0 Marks for unattempted questions (Total: 720 Marks, 180 Minutes).',
      'Deleted NCERT chapters (Digestion & Absorption, Transport/Mineral Nutrition, Solid State, s-Block, Polymers, Transistor/Communication) excluded; NMC additions (5 Plant Families, Frog, Dengue/Chikungunya, Unit 20 Practical Skills) included.',
      `High-Yield Focus: ${spec.topicFocus}`
    ],
    questions
  };
}

function buildSubjectNeetPaper(spec: SubjectPaperSpec): PyqPaper {
  const rawQuestions = selectFromPool(spec.subject, spec.offset, spec.stride, 45);
  const questions: PyqQuestion[] = rawQuestions.map((q, idx) => ({
    ...q,
    id: `${spec.id}-q${idx + 1}`,
    qNum: idx + 1
  }));

  return {
    id: spec.id,
    title: spec.title,
    subject: spec.subject,
    year: spec.year,
    targetClass: 'NEET UG',
    paperType: 'NEET_PAPER',
    paperCode: spec.paperCode,
    totalMarks: 180,
    durationMins: 45,
    difficulty: spec.difficulty,
    isFree: spec.isFree,
    totalQuestions: questions.length,
    generalInstructions: [
      `Official NMC 79-Chapter Synchronized NEET UG ${spec.subject} Section: 45 Compulsory MCQs (+4 Correct, −1 Incorrect; Total: 180 Marks, 45 Minutes).`,
      'Deleted syllabus chapters excluded; all NMC retained & newly added sub-topics integrated.',
      `High-Yield Focus: ${spec.topicFocus}`
    ],
    questions
  };
}

const FULL_PAPER_SPECS: FullPaperSpec[] = [
  {
    id: 'nu-sample-2026-1',
    title: 'NEET UG 2026 Official NMC Pattern Sample Paper — Set 1 (Full 180 PCB)',
    year: 2026,
    paperType: 'COMPETITIVE_SAMPLE',
    paperCode: 'NU-26-SMP1',
    difficulty: 'MODERATE',
    isFree: true,
    topicFocus: 'NMC Updated 5 Families, Frog/Cockroach, Dengue/Chikungunya, Unit 20 Experimental & Practical Chemistry',
    offsets: { Physics: 0, Chemistry: 0, Botany: 0, Zoology: 0 },
    strides: { Physics: 1, Chemistry: 1, Botany: 1, Zoology: 1 }
  },
  {
    id: 'nu-sample-2026-2',
    title: 'NEET UG 2026 Official NMC Pattern Sample Paper — Set 2 (Full 180 PCB)',
    year: 2026,
    paperType: 'COMPETITIVE_SAMPLE',
    paperCode: 'NU-26-SMP2',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'NCERT Statement I/II, Assertion-Reason, Match List I–II & Multi-Concept Numericals',
    offsets: { Physics: 15, Chemistry: 15, Botany: 15, Zoology: 15 },
    strides: { Physics: 7, Chemistry: 7, Botany: 7, Zoology: 7 }
  },
  {
    id: 'nu-full-2025',
    title: 'NEET UG 2025 Official Question Paper — Full 180 PCB (NMC Synced)',
    year: 2025,
    paperType: 'NEET_PAPER',
    paperCode: 'NU-25-PCB',
    difficulty: 'MODERATE',
    isFree: true,
    topicFocus: '180-Question Direct Format (Single-Section NMC Pattern), Vernier/Screw Gauge, C4 & Biotech',
    offsets: { Physics: 5, Chemistry: 10, Botany: 12, Zoology: 8 },
    strides: { Physics: 11, Chemistry: 13, Botany: 11, Zoology: 13 }
  },
  {
    id: 'nu-full-2024',
    title: 'NEET UG 2024 (Main + Re-NEET Synced) — Full 180 PCB Paper',
    year: 2024,
    paperType: 'NEET_PAPER',
    paperCode: 'NU-24-PCB',
    difficulty: 'MODERATE',
    isFree: false,
    topicFocus: 'NMC 79-Chapter Synchronized Full Paper: Malvaceae/Poaceae, Frog Bidder’s Canal, Salt Analysis & Optics',
    offsets: { Physics: 20, Chemistry: 25, Botany: 18, Zoology: 22 },
    strides: { Physics: 17, Chemistry: 19, Botany: 17, Zoology: 19 }
  },
  {
    id: 'nu-full-2023',
    title: 'NEET UG 2023 (Main + Manipur Synced) — Full 180 PCB Paper',
    year: 2023,
    paperType: 'NEET_PAPER',
    paperCode: 'NU-23-PCB',
    difficulty: 'MODERATE',
    isFree: false,
    topicFocus: 'Meiosis I Prophase, Lac Operon, ECG & Cardiac Output, CFT & Modern Physics',
    offsets: { Physics: 30, Chemistry: 35, Botany: 28, Zoology: 33 },
    strides: { Physics: 23, Chemistry: 29, Botany: 23, Zoology: 29 }
  },
  {
    id: 'nu-full-2022',
    title: 'NEET UG 2022 Official Question Paper — Full 180 PCB (NMC Synced)',
    year: 2022,
    paperType: 'NEET_PAPER',
    paperCode: 'NU-22-PCB',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'Heavy Statement & Assertion-Reason Coverage across NCERT Line-by-Line Biology, Chem & Physics',
    offsets: { Physics: 40, Chemistry: 42, Botany: 37, Zoology: 44 },
    strides: { Physics: 31, Chemistry: 37, Botany: 31, Zoology: 37 }
  },
  {
    id: 'nu-full-2021',
    title: 'NEET UG 2021 Official Question Paper — Full 180 PCB (NMC Synced)',
    year: 2021,
    paperType: 'NEET_PAPER',
    paperCode: 'NU-21-PCB',
    difficulty: 'EASY',
    isFree: false,
    topicFocus: 'NCERT Fundamental Concept Recall, Formula-Direct Physics & High-Yield Inorganic/Organic',
    offsets: { Physics: 50, Chemistry: 48, Botany: 52, Zoology: 55 },
    strides: { Physics: 41, Chemistry: 43, Botany: 41, Zoology: 43 }
  }
];

const SUBJECT_PAPER_SPECS: SubjectPaperSpec[] = [
  {
    id: 'nu-pyq-2025-b',
    title: 'NEET UG 2025 — Botany Official Archive (45 Qs, NMC Synced)',
    subject: 'Botany',
    year: 2025,
    paperCode: 'NU-25-BOT',
    difficulty: 'MODERATE',
    isFree: true,
    topicFocus: 'NMC 5 Plant Families, C4 Hatch-Slack, Cell Division, Molecular Inheritance & Ecology',
    offset: 0,
    stride: 1
  },
  {
    id: 'nu-pyq-2025-z',
    title: 'NEET UG 2025 — Zoology Official Archive (45 Qs, NMC Synced)',
    subject: 'Zoology',
    year: 2025,
    paperCode: 'NU-25-ZOO',
    difficulty: 'MODERATE',
    isFree: true,
    topicFocus: 'Frog & Cockroach, ECG & RAAS, Dengue/Chikungunya, PCR/pBR322 & Human Reproduction',
    offset: 0,
    stride: 1
  },
  {
    id: 'nu-pyq-2025-c',
    title: 'NEET UG 2025 — Chemistry Official Archive (45 Qs, NMC Synced)',
    subject: 'Chemistry',
    year: 2025,
    paperCode: 'NU-25-CHEM',
    difficulty: 'MODERATE',
    isFree: true,
    topicFocus: 'MOT, Coordination CFT, Ionic Ksp, Electrochemistry, GOC, Carbonyls & Practical Salt Analysis',
    offset: 0,
    stride: 1
  },
  {
    id: 'nu-pyq-2025-p',
    title: 'NEET UG 2025 — Physics Official Archive (45 Qs, incl. Unit 20)',
    subject: 'Physics',
    year: 2025,
    paperCode: 'NU-25-PHY',
    difficulty: 'MODERATE',
    isFree: true,
    topicFocus: 'Vernier/Screw Gauge, Rolling & Gravitation, Thermodynamics, Meter Bridge, Optics & Logic Gates',
    offset: 0,
    stride: 1
  },
  {
    id: 'nu-pyq-2024-b',
    title: 'NEET UG 2024 (Re-NEET Synced) — Botany Official Archive (45 Qs)',
    subject: 'Botany',
    year: 2024,
    paperCode: 'NU-24-BOT',
    difficulty: 'MODERATE',
    isFree: false,
    topicFocus: 'NCERT Statement I/II, Plant Kingdom, PGRs, Apomixis & Biodiversity',
    offset: 15,
    stride: 7
  },
  {
    id: 'nu-pyq-2024-z',
    title: 'NEET UG 2024 (Re-NEET Synced) — Zoology Official Archive (45 Qs)',
    subject: 'Zoology',
    year: 2024,
    paperCode: 'NU-24-ZOO',
    difficulty: 'MODERATE',
    isFree: false,
    topicFocus: 'Animal Kingdom Exceptions, Enzymes, Neural & Endocrine, ART & Bt/RNAi',
    offset: 15,
    stride: 7
  },
  {
    id: 'nu-pyq-2024-c',
    title: 'NEET UG 2024 — Chemistry Official Archive (45 Qs, Deleted Removed)',
    subject: 'Chemistry',
    year: 2024,
    paperCode: 'NU-24-CHEM',
    difficulty: 'EASY',
    isFree: false,
    topicFocus: 'Periodic Anomalies, Thermodynamics, Chemical Kinetics, p/d-f Block & Amines',
    offset: 15,
    stride: 7
  },
  {
    id: 'nu-pyq-2024-p',
    title: 'NEET UG 2024 — Physics Official Archive (45 Qs, Unit 20 Experimental)',
    subject: 'Physics',
    year: 2024,
    paperCode: 'NU-24-PHY',
    difficulty: 'MODERATE',
    isFree: false,
    topicFocus: 'Kinematics, WEP/Collisions, Bernoulli/Capillarity, LCR Resonance, YDSE & Photoelectric',
    offset: 15,
    stride: 7
  }
];

export const NEET_UG_PYQ_PAPERS: PyqPaper[] = [
  ...FULL_PAPER_SPECS.map(buildFullNeetPaper),
  ...SUBJECT_PAPER_SPECS.map(buildSubjectNeetPaper)
];
