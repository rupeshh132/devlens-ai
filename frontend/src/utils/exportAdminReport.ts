import type { LivePlatformTelemetry } from '@/types/adminDashboard';

/**
 * Generates and downloads a clean, Excel/Google Sheets-compatible CSV 
 * containing live platform metrics, financial data, and academy health indicators.
 */
export function exportPlatformMetricsCsv(telemetry: LivePlatformTelemetry, timeRange: string = '30d') {
  const timestamp = new Date().toISOString();
  const dateFormatted = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const rows = [
    ['Category', 'Metric', 'Current Value', 'Unit / Details', 'Source System'],
    ['Developer Academy', 'Total Registered Students', telemetry.totalStudents, 'Students', 'PostgreSQL users'],
    ['Developer Academy', 'Active Developer Tracks', telemetry.totalCourses, 'Curriculums', 'PostgreSQL courses'],
    ['Developer Academy', 'Total Course Modules', telemetry.totalModules, 'Modules', 'PostgreSQL modules'],
    ['Developer Academy', 'Total Track Enrollments', telemetry.totalEnrollments, 'Enrollments', 'PostgreSQL user_progress'],
    ['Developer Academy', 'Pending Capstone Reviews', telemetry.pendingSubmissions, 'Queue Items', 'PostgreSQL user_progress (PENDING_REVIEW)'],
    ['Developer Academy', 'Approved Capstones', telemetry.approvedSubmissions, 'Completed Projects', 'PostgreSQL user_progress (COMPLETED)'],
    ['Developer Academy', 'Verified Certificates Issued', telemetry.certificatesIssued, 'Issued Credentials', 'PostgreSQL certificates'],
    ['Developer Academy', 'Connected GitHub Repositories', telemetry.totalConnectedRepos, 'Repositories', 'PostgreSQL repositories'],
    
    ['Financial Telemetry', 'LMS Paid Transactions', telemetry.lmsSuccessPayments, 'Completed Payments', 'PostgreSQL payment_transactions'],
    ['Financial Telemetry', 'LMS Academy Revenue (INR)', `₹${telemetry.lmsRevenueInr.toLocaleString()}`, 'INR', 'PostgreSQL payment_transactions'],
    ['Financial Telemetry', 'Learn Platform Revenue (INR)', `₹${telemetry.learnRevenueInr.toLocaleString()}`, 'INR', 'Learn Payments Table'],
    ['Financial Telemetry', 'Total Platform Revenue (INR)', `₹${telemetry.totalRevenueInr.toLocaleString()}`, 'INR', 'Consolidated Financials'],
    
    ['AI Engine & Compute', 'AI Code Analysis Jobs (24h)', telemetry.aiJobsLast24h, 'Batched Runs', 'DevLens Engine Workers'],
    ['AI Engine & Compute', 'Total Analysis Runs All-Time', telemetry.totalAnalysisJobs, 'Jobs', 'PostgreSQL analysis_jobs'],
    ['AI Engine & Compute', 'Resumes Tailored / Generated', telemetry.totalResumesGenerated, 'Documents', 'PostgreSQL resumes'],
    ['AI Engine & Compute', 'AI Mock Interviews Completed', telemetry.totalInterviews, 'Sessions', 'PostgreSQL interviews'],
    ['AI Engine & Compute', 'Estimated API Burn (USD)', `$${telemetry.estimatedApiBurnUsd.toFixed(2)}`, 'USD', 'Groq / LLM Token Usage'],
    
    ['System Health', 'Telemetry Status', 'HEALTHY & LIVE', 'Online', 'Supabase PostgreSQL'],
    ['System Health', 'Audit Filter Window', timeRange.toUpperCase(), 'Filter Scope', 'DevLens Admin UI'],
    ['System Health', 'Report Exported At', timestamp, 'ISO Timestamp', 'Client Browser Session']
  ];

  // Convert rows to CSV string
  const csvContent = rows
    .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    .join('\r\n');

  // Trigger download via Blob
  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `devlens_executive_report_${dateFormatted.replace(/[\s,]+/g, '_')}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Triggers a browser print dialog formatted specifically for an Executive Summary.
 */
export function printExecutiveSummary() {
  window.print();
}
