import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';

// Physics Papers (Sets 1 to 21 — 70 Marks Theory, 33 Qs)
import { CLASS_11_PHY_PAPERS } from './class11_phy';
import { CLASS_11_PHY_BATCH1_PAPERS } from './class11/physics/phy_batch1_cbse';
import { CLASS_11_PHY_BATCH2_PAPERS } from './class11/physics/phy_batch2_kvs';
import { CLASS_11_PHY_BATCH3_PAPERS } from './class11/physics/phy_batch3_oswal';
import { CLASS_11_PHY_BATCH4_PAPERS } from './class11/physics/phy_batch4_mocks';

// Chemistry Papers (Sets 1 to 21 — 70 Marks Theory, 33 Qs)
import { CLASS_11_CHEM_PAPERS } from './class11_chem';
import { CLASS_11_CHEM_BATCH1_PAPERS } from './class11/chemistry/chem_batch1_cbse';
import { CLASS_11_CHEM_BATCH2_PAPERS } from './class11/chemistry/chem_batch2_kvs';
import { CLASS_11_CHEM_BATCH3_PAPERS } from './class11/chemistry/chem_batch3_oswal';
import { CLASS_11_CHEM_BATCH4_PAPERS } from './class11/chemistry/chem_batch4_mocks';

// Biology Papers (Sets 1 to 21 — 70 Marks Theory, 33 Qs)
import { CLASS_11_BIO_BATCH1_PAPERS } from './class11/biology/bio_batch1_cbse';
import { CLASS_11_BIO_BATCH2_PAPERS } from './class11/biology/bio_batch2_kvs';
import { CLASS_11_BIO_BATCH3_PAPERS } from './class11/biology/bio_batch3_oswal';
import { CLASS_11_BIO_BATCH4_PAPERS } from './class11/biology/bio_batch4_mocks';

// Mathematics Papers (Sets 1 to 21 — 80 Marks, 38 Qs)
import { CLASS_11_MATH_PAPERS } from './class11_math';
import { CLASS_11_MATH_BATCH1_PAPERS } from './class11/math/math_batch1_cbse';
import { CLASS_11_MATH_BATCH2_PAPERS } from './class11/math/math_batch2_kvs';
import { CLASS_11_MATH_BATCH3_PAPERS } from './class11/math/math_batch3_oswal';
import { CLASS_11_MATH_BATCH4_PAPERS } from './class11/math/math_batch4_mocks';

// English Core Papers (Sets 1 to 21 — 80 Marks, Code 301)
import { CLASS_11_ENG_BATCH1_PAPERS } from './class11/english/eng_batch1_cbse';
import { CLASS_11_ENG_BATCH2_PAPERS } from './class11/english/eng_batch2_kvs';
import { CLASS_11_ENG_BATCH3_PAPERS } from './class11/english/eng_batch3_oswal';
import { CLASS_11_ENG_BATCH4_PAPERS } from './class11/english/eng_batch4_mocks';

export const CLASS_11_PYQ_PAPERS: PyqPaper[] = [
  // Physics (21 Papers)
  ...CLASS_11_PHY_PAPERS,
  ...CLASS_11_PHY_BATCH1_PAPERS,
  ...CLASS_11_PHY_BATCH2_PAPERS,
  ...CLASS_11_PHY_BATCH3_PAPERS,
  ...CLASS_11_PHY_BATCH4_PAPERS,

  // Chemistry (21 Papers)
  ...CLASS_11_CHEM_PAPERS,
  ...CLASS_11_CHEM_BATCH1_PAPERS,
  ...CLASS_11_CHEM_BATCH2_PAPERS,
  ...CLASS_11_CHEM_BATCH3_PAPERS,
  ...CLASS_11_CHEM_BATCH4_PAPERS,

  // Biology (21 Papers)
  ...CLASS_11_BIO_BATCH1_PAPERS,
  ...CLASS_11_BIO_BATCH2_PAPERS,
  ...CLASS_11_BIO_BATCH3_PAPERS,
  ...CLASS_11_BIO_BATCH4_PAPERS,

  // Mathematics (21 Papers)
  ...CLASS_11_MATH_PAPERS,
  ...CLASS_11_MATH_BATCH1_PAPERS,
  ...CLASS_11_MATH_BATCH2_PAPERS,
  ...CLASS_11_MATH_BATCH3_PAPERS,
  ...CLASS_11_MATH_BATCH4_PAPERS,

  // English Core (21 Papers)
  ...CLASS_11_ENG_BATCH1_PAPERS,
  ...CLASS_11_ENG_BATCH2_PAPERS,
  ...CLASS_11_ENG_BATCH3_PAPERS,
  ...CLASS_11_ENG_BATCH4_PAPERS
];
