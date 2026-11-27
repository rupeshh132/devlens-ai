import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';

// Science Papers (Sets 1 to 21)
import { CLASS_10_SCI_PAPERS } from './class10_sci';
import { CLASS_10_SCI_BATCH1_PAPERS } from './class10/science/sci_batch1_cbse';
import { CLASS_10_SCI_BATCH2_PAPERS } from './class10/science/sci_batch2_kvs';
import { CLASS_10_SCI_BATCH3_PAPERS } from './class10/science/sci_batch3_oswal';
import { CLASS_10_SCI_BATCH4_PAPERS } from './class10/science/sci_batch4_mocks';

// Mathematics Papers (Sets 1 to 21)
import { CLASS_10_MATH_PAPERS } from './class10_math';
import { CLASS_10_MATH_BATCH1_PAPERS } from './class10/math/math_batch1_cbse';
import { CLASS_10_MATH_BATCH2_PAPERS } from './class10/math/math_batch2_kvs';
import { CLASS_10_MATH_BATCH3_PAPERS } from './class10/math/math_batch3_oswal';
import { CLASS_10_MATH_BATCH4_PAPERS } from './class10/math/math_batch4_mocks';

// Social Science Papers (Sets 1 to 21)
import { CLASS_10_SST_PAPERS } from './class10_sst';
import { CLASS_10_SST_BATCH1_PAPERS } from './class10/sst/sst_batch1_cbse';
import { CLASS_10_SST_BATCH2_PAPERS } from './class10/sst/sst_batch2_kvs';
import { CLASS_10_SST_BATCH3_PAPERS } from './class10/sst/sst_batch3_oswal';
import { CLASS_10_SST_BATCH4_PAPERS } from './class10/sst/sst_batch4_mocks';

// English Papers (Sets 1 to 21)
import { CLASS_10_ENG_BATCH1_PAPERS } from './class10/english/eng_batch1_cbse';
import { CLASS_10_ENG_BATCH2_PAPERS } from './class10/english/eng_batch2_kvs';
import { CLASS_10_ENG_BATCH3_PAPERS } from './class10/english/eng_batch3_oswal';
import { CLASS_10_ENG_BATCH4_PAPERS } from './class10/english/eng_batch4_mocks';

// Hindi Papers (Sets 1 to 21)
import { CLASS_10_HINDI_BATCH1_PAPERS } from './class10/hindi/hindi_batch1_cbse';
import { CLASS_10_HINDI_BATCH2_PAPERS } from './class10/hindi/hindi_batch2_kvs';
import { CLASS_10_HINDI_BATCH3_PAPERS } from './class10/hindi/hindi_batch3_oswal';
import { CLASS_10_HINDI_BATCH4_PAPERS } from './class10/hindi/hindi_batch4_mocks';

export const CLASS_10_PYQ_PAPERS: PyqPaper[] = [
  // Science (21 Papers)
  ...CLASS_10_SCI_PAPERS,
  ...CLASS_10_SCI_BATCH1_PAPERS,
  ...CLASS_10_SCI_BATCH2_PAPERS,
  ...CLASS_10_SCI_BATCH3_PAPERS,
  ...CLASS_10_SCI_BATCH4_PAPERS,

  // Mathematics (21 Papers)
  ...CLASS_10_MATH_PAPERS,
  ...CLASS_10_MATH_BATCH1_PAPERS,
  ...CLASS_10_MATH_BATCH2_PAPERS,
  ...CLASS_10_MATH_BATCH3_PAPERS,
  ...CLASS_10_MATH_BATCH4_PAPERS,

  // Social Science (21 Papers)
  ...CLASS_10_SST_PAPERS,
  ...CLASS_10_SST_BATCH1_PAPERS,
  ...CLASS_10_SST_BATCH2_PAPERS,
  ...CLASS_10_SST_BATCH3_PAPERS,
  ...CLASS_10_SST_BATCH4_PAPERS,

  // English (21 Papers)
  ...CLASS_10_ENG_BATCH1_PAPERS,
  ...CLASS_10_ENG_BATCH2_PAPERS,
  ...CLASS_10_ENG_BATCH3_PAPERS,
  ...CLASS_10_ENG_BATCH4_PAPERS,

  // Hindi (21 Papers)
  ...CLASS_10_HINDI_BATCH1_PAPERS,
  ...CLASS_10_HINDI_BATCH2_PAPERS,
  ...CLASS_10_HINDI_BATCH3_PAPERS,
  ...CLASS_10_HINDI_BATCH4_PAPERS
];
