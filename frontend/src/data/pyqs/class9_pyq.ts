import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';

// Science Papers (Sets 1 to 20)
import { CLASS_9_SCI_PAPERS } from './class9_sci';
import { CLASS_9_SCI_SET2_PAPERS } from './class9_sci_set2';
import { CLASS_9_SCI_BATCH1_PAPERS } from './class9/science/sci_batch1_cbse';
import { CLASS_9_SCI_BATCH2_PAPERS } from './class9/science/sci_batch2_kvs';
import { CLASS_9_SCI_BATCH3_PAPERS } from './class9/science/sci_batch3_oswal';
import { CLASS_9_SCI_BATCH4_PAPERS } from './class9/science/sci_batch4_mocks';

// Mathematics Papers (Sets 1 to 20)
import { CLASS_9_MATH_PAPERS } from './class9_math';
import { CLASS_9_MATH_SET2_PAPERS } from './class9_math_set2';
import { CLASS_9_MATH_BATCH1_PAPERS } from './class9/math/math_batch1_cbse';
import { CLASS_9_MATH_BATCH2_PAPERS } from './class9/math/math_batch2_kvs';
import { CLASS_9_MATH_BATCH3_PAPERS } from './class9/math/math_batch3_oswal';
import { CLASS_9_MATH_BATCH4_PAPERS } from './class9/math/math_batch4_mocks';

// Social Science Papers (Sets 1 to 20)
import { CLASS_9_SST_PAPERS } from './class9_sst';
import { CLASS_9_SST_SET2_PAPERS } from './class9_sst_set2';
import { CLASS_9_SST_BATCH1_PAPERS } from './class9/sst/sst_batch1_cbse';
import { CLASS_9_SST_BATCH2_PAPERS } from './class9/sst/sst_batch2_kvs';
import { CLASS_9_SST_BATCH3_PAPERS } from './class9/sst/sst_batch3_oswal';
import { CLASS_9_SST_BATCH4_PAPERS } from './class9/sst/sst_batch4_mocks';

// English Papers (Sets 1 to 20)
import { CLASS_9_ENG_PAPERS } from './class9_eng';
import { CLASS_9_ENG_SET2_PAPERS } from './class9_eng_set2';
import { CLASS_9_ENG_COMM_PAPERS } from './class9_eng_comm';
import { CLASS_9_ENG_BATCH1_PAPERS } from './class9/english/eng_batch1_cbse';
import { CLASS_9_ENG_BATCH2_PAPERS } from './class9/english/eng_batch2_kvs';
import { CLASS_9_ENG_BATCH3_PAPERS } from './class9/english/eng_batch3_oswal';
import { CLASS_9_ENG_BATCH4_PAPERS } from './class9/english/eng_batch4_comm';

// Hindi Papers (Sets 1 to 20)
import { CLASS_9_HINDI_BATCH1_PAPERS } from './class9/hindi/hindi_batch1_cbse';
import { CLASS_9_HINDI_BATCH2_PAPERS } from './class9/hindi/hindi_batch2_kvs';
import { CLASS_9_HINDI_BATCH3_PAPERS } from './class9/hindi/hindi_batch3_oswal';
import { CLASS_9_HINDI_BATCH4_PAPERS } from './class9/hindi/hindi_batch4_mocks';

export const CLASS_9_PYQ_PAPERS: PyqPaper[] = [
  // Science (20 Papers)
  ...CLASS_9_SCI_PAPERS,
  ...CLASS_9_SCI_SET2_PAPERS,
  ...CLASS_9_SCI_BATCH1_PAPERS,
  ...CLASS_9_SCI_BATCH2_PAPERS,
  ...CLASS_9_SCI_BATCH3_PAPERS,
  ...CLASS_9_SCI_BATCH4_PAPERS,

  // Mathematics (20 Papers)
  ...CLASS_9_MATH_PAPERS,
  ...CLASS_9_MATH_SET2_PAPERS,
  ...CLASS_9_MATH_BATCH1_PAPERS,
  ...CLASS_9_MATH_BATCH2_PAPERS,
  ...CLASS_9_MATH_BATCH3_PAPERS,
  ...CLASS_9_MATH_BATCH4_PAPERS,

  // Social Science (20 Papers)
  ...CLASS_9_SST_PAPERS,
  ...CLASS_9_SST_SET2_PAPERS,
  ...CLASS_9_SST_BATCH1_PAPERS,
  ...CLASS_9_SST_BATCH2_PAPERS,
  ...CLASS_9_SST_BATCH3_PAPERS,
  ...CLASS_9_SST_BATCH4_PAPERS,

  // English (20 Papers)
  ...CLASS_9_ENG_PAPERS,
  ...CLASS_9_ENG_SET2_PAPERS,
  ...CLASS_9_ENG_COMM_PAPERS,
  ...CLASS_9_ENG_BATCH1_PAPERS,
  ...CLASS_9_ENG_BATCH2_PAPERS,
  ...CLASS_9_ENG_BATCH3_PAPERS,
  ...CLASS_9_ENG_BATCH4_PAPERS,

  // Hindi (20 Papers)
  ...CLASS_9_HINDI_BATCH1_PAPERS,
  ...CLASS_9_HINDI_BATCH2_PAPERS,
  ...CLASS_9_HINDI_BATCH3_PAPERS,
  ...CLASS_9_HINDI_BATCH4_PAPERS
];
