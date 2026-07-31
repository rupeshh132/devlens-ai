import type { Severity, Priority } from '../types/analysis';

export function getSeverityColor(severity: Severity): string {
  switch (severity) {
    case 'CRITICAL': return 'text-red-600 bg-red-100';
    case 'HIGH': return 'text-orange-600 bg-orange-100';
    case 'MEDIUM': return 'text-yellow-600 bg-yellow-100';
    case 'LOW': return 'text-blue-600 bg-blue-100';
    case 'INFO': return 'text-gray-600 bg-gray-100';
    default: return 'text-gray-600 bg-gray-100';
  }
}

export function getPriorityLabel(priority: Priority): string {
  switch (priority) {
    case 'MUST_FIX': return 'Must Fix';
    case 'SHOULD_FIX': return 'Should Fix';
    case 'NICE_TO_HAVE': return 'Nice to Have';
    default: return priority;
  }
}
