import type { PyqPaper } from '../components/learn/PyqPaperViewerModal';
import { CLASS_12_PYQ_PAPERS } from './pyqs/class12_pyq';
import { CLASS_10_PYQ_PAPERS } from './pyqs/class10_pyq';
import { CLASS_11_PYQ_PAPERS } from './pyqs/class11_pyq';
import { CLASS_9_PYQ_PAPERS } from './pyqs/class9_pyq';

export const PYQ_PAPERS_DATA: PyqPaper[] = [
  ...CLASS_12_PYQ_PAPERS,
  ...CLASS_10_PYQ_PAPERS,
  ...CLASS_11_PYQ_PAPERS,
  ...CLASS_9_PYQ_PAPERS
];
