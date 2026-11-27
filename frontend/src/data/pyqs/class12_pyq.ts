import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';
import { CLASS_12_PHY_PAPERS } from './class12_phy';
import { CLASS_12_CHEM_PAPERS } from './class12_chem';
import { CLASS_12_MATH_PAPERS } from './class12_math';
import { CLASS_12_BIO_PAPERS } from './class12_bio';

import { CLASS_12_PHY_BATCH1_PAPERS } from './class12/physics/phy_batch1_cbse';
import { CLASS_12_PHY_BATCH2_PAPERS } from './class12/physics/phy_batch2_kvs';
import { CLASS_12_PHY_BATCH3_PAPERS } from './class12/physics/phy_batch3_oswal';
import { CLASS_12_PHY_BATCH4_PAPERS } from './class12/physics/phy_batch4_mocks';

import { CLASS_12_CHEM_BATCH1_PAPERS } from './class12/chemistry/chem_batch1_cbse';
import { CLASS_12_CHEM_BATCH2_PAPERS } from './class12/chemistry/chem_batch2_kvs';
import { CLASS_12_CHEM_BATCH3_PAPERS } from './class12/chemistry/chem_batch3_oswal';
import { CLASS_12_CHEM_BATCH4_PAPERS } from './class12/chemistry/chem_batch4_mocks';

import { CLASS_12_BIO_BATCH1_PAPERS } from './class12/biology/bio_batch1_cbse';
import { CLASS_12_BIO_BATCH2_PAPERS } from './class12/biology/bio_batch2_kvs';
import { CLASS_12_BIO_BATCH3_PAPERS } from './class12/biology/bio_batch3_oswal';
import { CLASS_12_BIO_BATCH4_PAPERS } from './class12/biology/bio_batch4_mocks';

import { CLASS_12_MATH_BATCH1_PAPERS } from './class12/math/math_batch1_cbse';
import { CLASS_12_MATH_BATCH2_PAPERS } from './class12/math/math_batch2_kvs';
import { CLASS_12_MATH_BATCH3_PAPERS } from './class12/math/math_batch3_oswal';
import { CLASS_12_MATH_BATCH4_PAPERS } from './class12/math/math_batch4_mocks';

import { CLASS_12_ENG_BATCH1_PAPERS } from './class12/english/eng_batch1_cbse';
import { CLASS_12_ENG_BATCH2_PAPERS } from './class12/english/eng_batch2_kvs';
import { CLASS_12_ENG_BATCH3_PAPERS } from './class12/english/eng_batch3_oswal';
import { CLASS_12_ENG_BATCH4_PAPERS } from './class12/english/eng_batch4_mocks';

export const CLASS_12_PYQ_PAPERS: PyqPaper[] = [
  ...CLASS_12_PHY_PAPERS,
  ...CLASS_12_PHY_BATCH1_PAPERS,
  ...CLASS_12_PHY_BATCH2_PAPERS,
  ...CLASS_12_PHY_BATCH3_PAPERS,
  ...CLASS_12_PHY_BATCH4_PAPERS,
  ...CLASS_12_CHEM_PAPERS,
  ...CLASS_12_CHEM_BATCH1_PAPERS,
  ...CLASS_12_CHEM_BATCH2_PAPERS,
  ...CLASS_12_CHEM_BATCH3_PAPERS,
  ...CLASS_12_CHEM_BATCH4_PAPERS,
  ...CLASS_12_BIO_PAPERS,
  ...CLASS_12_BIO_BATCH1_PAPERS,
  ...CLASS_12_BIO_BATCH2_PAPERS,
  ...CLASS_12_BIO_BATCH3_PAPERS,
  ...CLASS_12_BIO_BATCH4_PAPERS,
  ...CLASS_12_MATH_PAPERS,
  ...CLASS_12_MATH_BATCH1_PAPERS,
  ...CLASS_12_MATH_BATCH2_PAPERS,
  ...CLASS_12_MATH_BATCH3_PAPERS,
  ...CLASS_12_MATH_BATCH4_PAPERS,
  ...CLASS_12_ENG_BATCH1_PAPERS,
  ...CLASS_12_ENG_BATCH2_PAPERS,
  ...CLASS_12_ENG_BATCH3_PAPERS,
  ...CLASS_12_ENG_BATCH4_PAPERS
];
