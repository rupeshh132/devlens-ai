import React, { useState, useEffect } from 'react';
import { api } from '../../lib/api';
import { 
  CreditCard, DollarSign, Search, RefreshCw, CheckCircle2, 
  XCircle, Clock, ArrowUpDown, Copy, Check, 
  ShieldCheck, ChevronLeft, ChevronRight, 
  FileSpreadsheet, Award, Eye
} from 'lucide-react';
import { toast } from 'sonner';

interface BillingStats {
  totalRevenue: number;
  lmsRevenue: number;
  learnRevenue: number;
  totalTransactions: number;
  successTransactions: number;
  failedTransactions: number;
  pendingTransactions: number;
  successRate: number;
}

interface TransactionItem {
  id: string;
  vertical: 'LMS' | 'LEARN';
  userId: string;
  userName: string;
  userEmail: string;
  itemName: string;
  amount: number;
  status: 'SUCCESS' | 'PENDING' | 'FAILED';
  razorpayOrderId: string;
  razorpayPaymentId: string | null;
  promoCode: string | null;
  createdAt: string;
  adminNotes: string | null;
  verifiedByAdminId: string | null;
  refundStatus: string;
}

export function AdminBillingPage() {
  const [stats, setStats] = useState<BillingStats | null>(null);
  const [statsLoading, setStatsLoading] = useState(true);

  const [transactions, setTransactions] = useState<TransactionItem[]>([]);
  const [tableLoading, setTableLoading] = useState(true);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // Filters
  const [verticalFilter, setVerticalFilter] = useState<'ALL' | 'LMS' | 'LEARN'>('ALL');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'SUCCESS' | 'PENDING' | 'FAILED'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);

  // Clipboard copy state
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Verification Modal State
  const [verifyModalTx, setVerifyModalTx] = useState<TransactionItem | null>(null);
  const [manualPaymentId, setManualPaymentId] = useState('');
  const [manualNotes, setManualNotes] = useState('');
  const [verifying, setVerifying] = useState(false);

  // Detail View Drawer
  const [activeDrawerTx, setActiveDrawerTx] = useState<TransactionItem | null>(null);

  // Export State
  const [exporting, setExporting] = useState(false);

  // ─── Fetch Stats ───────────────────────────────────────────────────────────
  const fetchStats = async () => {
    setStatsLoading(true);
    try {
      const res = await api.get('/admin/billing/stats');
      setStats(res.data);
    } catch (err: any) {
      console.error('Failed to fetch billing stats:', err);
      toast.error('Failed to load financial stats');
    } finally {
      setStatsLoading(false);
    }
  };

  // ─── Fetch Transactions ────────────────────────────────────────────────────
  const fetchTransactions = async () => {
    setTableLoading(true);
    try {
      const params = new URLSearchParams({
        vertical: verticalFilter,
        status: statusFilter,
        page: page.toString(),
        size: pageSize.toString(),
      });
      if (searchQuery.trim()) {
        params.append('search', searchQuery.trim());
      }

      const res = await api.get(`/admin/billing/transactions?${params.toString()}`);
      setTransactions(res.data?.content || []);
      setTotalElements(res.data?.totalElements || 0);
      setTotalPages(res.data?.totalPages || 1);
    } catch (err: any) {
      console.error('Failed to load transactions:', err);
      toast.error('Failed to load transaction ledger');
    } finally {
      setTableLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [verticalFilter, statusFilter, page, pageSize]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(0);
      fetchTransactions();
    }, 350);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // ─── Copy to Clipboard ─────────────────────────────────────────────────────
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast.success('Copied to clipboard');
    setTimeout(() => setCopiedId(null), 1800);
  };

  // ─── Handle Manual Verification ────────────────────────────────────────────
  const handleOpenVerifyModal = (tx: TransactionItem) => {
    setVerifyModalTx(tx);
    setManualPaymentId(tx.razorpayPaymentId || `pay_manual_${Math.random().toString(36).substring(2, 9)}`);
    setManualNotes('');
  };

  const handleManualVerifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!verifyModalTx) return;

    setVerifying(true);
    try {
      await api.post(`/admin/billing/transactions/${verifyModalTx.id}/manual-verify`, {
        vertical: verifyModalTx.vertical,
        razorpayPaymentId: manualPaymentId.trim(),
        adminNotes: manualNotes.trim() || 'Manually approved & activated by Admin',
      });

      toast.success(`Transaction verified! Access granted to ${verifyModalTx.userEmail}`);
      setVerifyModalTx(null);
      fetchStats();
      fetchTransactions();
    } catch (err: any) {
      const errMsg = err.response?.data?.message || err.response?.data?.error || 'Verification failed';
      toast.error(errMsg);
    } finally {
      setVerifying(false);
    }
  };

  const formatCurrency = (amt: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amt);
  };

  const formatDate = (isoString: string) => {
    if (!isoString) return '—';
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return isoString;
    }
  };

  // ─── Export CSV Handler ───────────────────────────────────────────────────
  const handleExportCSV = async () => {
    setExporting(true);
    try {
      // Fetch up to 1000 records matching current active filter
      const params = new URLSearchParams({
        vertical: verticalFilter,
        status: statusFilter,
        page: '0',
        size: '1000',
      });
      if (searchQuery.trim()) {
        params.append('search', searchQuery.trim());
      }

      const res = await api.get(`/admin/billing/transactions?${params.toString()}`);
      const data: TransactionItem[] = res.data?.content || [];

      if (data.length === 0) {
        toast.info('No transactions found to export for current filters');
        return;
      }

      const headers = [
        'Transaction ID',
        'Date & Time',
        'Vertical',
        'Customer Name',
        'Customer Email',
        'Item / Course',
        'Amount (INR)',
        'Gateway Status',
        'Razorpay Order ID',
        'Razorpay Payment ID',
        'Promo Code',
        'Admin Notes',
        'Refund Status'
      ];

      const escapeCsv = (val: string | number | null | undefined) => {
        if (val === null || val === undefined) return '""';
        const str = String(val).replace(/"/g, '""');
        return `"${str}"`;
      };

      const csvRows: string[] = [headers.join(',')];

      data.forEach(item => {
        const row = [
          escapeCsv(item.id),
          escapeCsv(item.createdAt),
          escapeCsv(item.vertical),
          escapeCsv(item.userName),
          escapeCsv(item.userEmail),
          escapeCsv(item.itemName),
          escapeCsv(item.amount),
          escapeCsv(item.status),
          escapeCsv(item.razorpayOrderId),
          escapeCsv(item.razorpayPaymentId),
          escapeCsv(item.promoCode),
          escapeCsv(item.adminNotes),
          escapeCsv(item.refundStatus)
        ];
        csvRows.push(row.join(','));
      });

      const blob = new Blob([csvRows.join('\r\n')], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      const dateStr = new Date().toISOString().slice(0, 10);
      link.setAttribute('href', url);
      link.setAttribute('download', `financial-ledger-${dateStr}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast.success(`Exported ${data.length} transactions to CSV`);
    } catch (err) {
      console.error('Failed to export CSV:', err);
      toast.error('Failed to export transaction ledger');
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="space-y-6 pb-16">
      {/* ─── Top Header & Title ───────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-card p-6 rounded-2xl border border-border shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              Financial Command Center
            </span>
            <span className="text-xs text-muted-foreground">• Multi-Vertical Ledger</span>
          </div>
          <h1 className="text-2xl font-black text-foreground mt-1">Billing & Revenue Console</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Monitor real-time payments, Razorpay order states, and manually approve offline or dropped transactions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleExportCSV}
            disabled={exporting || tableLoading}
            className="px-3.5 py-2 text-xs font-bold bg-card border border-border hover:bg-muted text-foreground rounded-xl transition-all flex items-center gap-1.5 active:scale-95 shadow-2xs disabled:opacity-50 cursor-pointer"
            title="Download currently filtered financial transactions as CSV"
          >
            <FileSpreadsheet className={`w-3.5 h-3.5 ${exporting ? 'animate-spin text-primary' : 'text-emerald-600 dark:text-emerald-400'}`} />
            <span>{exporting ? 'Exporting...' : 'Export CSV'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              fetchStats();
              fetchTransactions();
              toast.success('Ledger and stats refreshed');
            }}
            className="px-3.5 py-2 text-xs font-bold bg-card border border-border hover:bg-muted text-foreground rounded-xl transition-all flex items-center gap-1.5 active:scale-95 shadow-2xs cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${tableLoading || statsLoading ? 'animate-spin text-primary' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* ─── KPI Cards (Interactive Quick Filters) ───────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Gross Collections / All Verticals */}
        <button
          type="button"
          onClick={() => {
            setVerticalFilter('ALL');
            setStatusFilter('ALL');
            setPage(0);
          }}
          className={`text-left p-5 rounded-2xl border shadow-xs transition-all cursor-pointer hover:scale-[1.01] active:scale-95 flex items-center justify-between ${
            verticalFilter === 'ALL' && statusFilter === 'ALL'
              ? 'border-emerald-500 ring-2 ring-emerald-500/30 bg-emerald-500/10'
              : 'border-border/70 bg-card/60 hover:bg-card/90 backdrop-blur-md'
          }`}
          title="Click to view all platform collections across LMS and PrepLens"
        >
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Gross Collections</p>
            <h3 className="text-2xl font-black text-foreground mt-1">
              {statsLoading ? '...' : formatCurrency(stats?.totalRevenue || 0)}
            </h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[11px] text-muted-foreground">
                LMS Academy + PrepLens Pro
              </span>
              {verticalFilter === 'ALL' && statusFilter === 'ALL' && (
                <span className="font-bold text-emerald-600 dark:text-emerald-400 text-[9px] uppercase px-1.5 py-0.2 bg-emerald-500/20 rounded">
                  All
                </span>
              )}
            </div>
          </div>
          <div className="p-3 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 rounded-2xl border border-emerald-500/20 shrink-0">
            <DollarSign className="w-6 h-6" />
          </div>
        </button>

        {/* LMS Courses Sales */}
        <button
          type="button"
          onClick={() => {
            setVerticalFilter(prev => prev === 'LMS' ? 'ALL' : 'LMS');
            setPage(0);
          }}
          className={`text-left p-5 rounded-2xl border shadow-xs transition-all cursor-pointer hover:scale-[1.01] active:scale-95 flex items-center justify-between ${
            verticalFilter === 'LMS'
              ? 'border-indigo-500 ring-2 ring-indigo-500/30 bg-indigo-500/10'
              : 'border-border/70 bg-card/60 hover:bg-card/90 backdrop-blur-md'
          }`}
          title="Click to filter by LMS Developer Academy course purchases"
        >
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">LMS Courses Sales</p>
            <h3 className="text-2xl font-black text-foreground mt-1">
              {statsLoading ? '...' : formatCurrency(stats?.lmsRevenue || 0)}
            </h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold">
                Developer Academy Tracks
              </span>
              {verticalFilter === 'LMS' && (
                <span className="font-bold text-indigo-600 dark:text-indigo-400 text-[9px] uppercase px-1.5 py-0.2 bg-indigo-500/20 rounded">
                  Filtered
                </span>
              )}
            </div>
          </div>
          <div className="p-3 bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 rounded-2xl border border-indigo-500/20 shrink-0">
            <CreditCard className="w-6 h-6" />
          </div>
        </button>

        {/* PrepLens Pro Subscriptions */}
        <button
          type="button"
          onClick={() => {
            setVerticalFilter(prev => prev === 'LEARN' ? 'ALL' : 'LEARN');
            setPage(0);
          }}
          className={`text-left p-5 rounded-2xl border shadow-xs transition-all cursor-pointer hover:scale-[1.01] active:scale-95 flex items-center justify-between ${
            verticalFilter === 'LEARN'
              ? 'border-blue-500 ring-2 ring-blue-500/30 bg-blue-500/10'
              : 'border-border/70 bg-card/60 hover:bg-card/90 backdrop-blur-md'
          }`}
          title="Click to filter by PrepLens Learn Pro student subscriptions"
        >
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">PrepLens Pro Subscriptions</p>
            <h3 className="text-2xl font-black text-foreground mt-1">
              {statsLoading ? '...' : formatCurrency(stats?.learnRevenue || 0)}
            </h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
                K12 & Competitive Subscriptions
              </span>
              {verticalFilter === 'LEARN' && (
                <span className="font-bold text-blue-600 dark:text-blue-400 text-[9px] uppercase px-1.5 py-0.2 bg-blue-500/20 rounded">
                  Filtered
                </span>
              )}
            </div>
          </div>
          <div className="p-3 bg-blue-500/15 text-blue-600 dark:text-blue-400 rounded-2xl border border-blue-500/20 shrink-0">
            <Award className="w-6 h-6" />
          </div>
        </button>

        {/* Payment Success Rate / Drop-offs */}
        <button
          type="button"
          onClick={() => {
            setStatusFilter(prev => prev === 'PENDING' ? 'ALL' : 'PENDING');
            setPage(0);
          }}
          className={`text-left p-5 rounded-2xl border shadow-xs transition-all cursor-pointer hover:scale-[1.01] active:scale-95 flex items-center justify-between ${
            statusFilter === 'PENDING'
              ? 'border-amber-500 ring-2 ring-amber-500/30 bg-amber-500/10'
              : 'border-border/70 bg-card/60 hover:bg-card/90 backdrop-blur-md'
          }`}
          title="Click to filter by Pending / Abandoned drop-offs needing manual recovery"
        >
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Payment Success Rate</p>
            <h3 className="text-2xl font-black text-foreground mt-1">
              {statsLoading ? '...' : `${stats?.successRate ?? 0}%`}
            </h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[11px] text-muted-foreground">
                {stats?.successTransactions || 0} Paid • {stats?.pendingTransactions || 0} Drop-offs
              </span>
              {statusFilter === 'PENDING' ? (
                <span className="font-bold text-amber-600 dark:text-amber-400 text-[9px] uppercase px-1.5 py-0.2 bg-amber-500/20 rounded">
                  Drop-offs
                </span>
              ) : (
                <span className="text-[10px] text-primary underline underline-offset-2">Filter</span>
              )}
            </div>
          </div>
          <div className="p-3 bg-amber-500/15 text-amber-600 dark:text-amber-400 rounded-2xl border border-amber-500/20 shrink-0">
            <ArrowUpDown className="w-6 h-6" />
          </div>
        </button>
      </div>

      {/* ─── Search and Filters Bar ───────────────────────────────────────── */}
      <div className="bg-card p-4 rounded-2xl border border-border shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by customer email, name, Razorpay Order ID, or Payment ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-10 pr-4 py-2.5 bg-muted/40 border border-border rounded-xl outline-none focus:border-primary focus:bg-card text-foreground transition-all font-medium placeholder:text-muted-foreground"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Vertical Filter */}
            <select
              value={verticalFilter}
              onChange={(e) => {
                setVerticalFilter(e.target.value as any);
                setPage(0);
              }}
              className="text-xs font-bold bg-muted/40 border border-border text-foreground rounded-xl px-3 py-2 outline-none focus:border-primary"
            >
              <option value="ALL">All Verticals (LMS + Learn)</option>
              <option value="LMS">LMS Developer Academy</option>
              <option value="LEARN">PrepLens Learn Pro</option>
            </select>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value as any);
                setPage(0);
              }}
              className="text-xs font-bold bg-muted/40 border border-border text-foreground rounded-xl px-3 py-2 outline-none focus:border-primary"
            >
              <option value="ALL">All Statuses</option>
              <option value="SUCCESS">Success Only (Paid)</option>
              <option value="PENDING">Pending (Checkout Drop)</option>
              <option value="FAILED">Failed Payments</option>
            </select>

            {/* Page Size */}
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(0);
              }}
              className="text-xs font-bold bg-muted/40 border border-border text-foreground rounded-xl px-2.5 py-2 outline-none focus:border-primary"
            >
              <option value="10">10 / page</option>
              <option value="20">20 / page</option>
              <option value="50">50 / page</option>
            </select>
          </div>
        </div>
      </div>

      {/* ─── Transactions Table ───────────────────────────────────────────── */}
      <div className="bg-card rounded-2xl border border-border shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-muted/50 border-b border-border text-muted-foreground font-extrabold uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-3 px-4">Date / Time</th>
                <th className="py-3 px-4">Customer / Student</th>
                <th className="py-3 px-4">Vertical</th>
                <th className="py-3 px-4">Item / Track</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Gateway Status</th>
                <th className="py-3 px-4">Razorpay Reference</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {tableLoading ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-muted-foreground">
                    <RefreshCw className="w-6 h-6 animate-spin mx-auto text-primary mb-2" />
                    <span>Loading financial transaction ledger...</span>
                  </td>
                </tr>
              ) : transactions.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-muted-foreground">
                    <FileSpreadsheet className="w-8 h-8 mx-auto text-muted-foreground/40 mb-2" />
                    <p className="font-bold text-foreground">No transactions match current filters</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Try altering the search query, vertical, or status filter.</p>
                  </td>
                </tr>
              ) : (
                transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-muted/30 transition-colors">
                    {/* Date */}
                    <td className="py-3.5 px-4 font-mono text-[11px] text-muted-foreground whitespace-nowrap">
                      {formatDate(tx.createdAt)}
                    </td>

                    {/* Customer */}
                    <td className="py-3.5 px-4 min-w-[180px] max-w-[240px]">
                      <div className="font-bold text-foreground truncate" title={tx.userName}>{tx.userName || 'Student'}</div>
                      <div className="text-[11px] text-muted-foreground font-mono truncate select-all" title={tx.userEmail}>{tx.userEmail}</div>
                    </td>

                    {/* Vertical Badge */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      {tx.vertical === 'LMS' ? (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                          LMS Academy
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                          PrepLens Pro
                        </span>
                      )}
                    </td>

                    {/* Item */}
                    <td className="py-3.5 px-4 min-w-[200px] max-w-[260px]">
                      <span className="font-semibold text-foreground truncate block" title={tx.itemName}>
                        {tx.itemName || 'Subscription'}
                      </span>
                      {tx.promoCode && (
                        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                          Promo: {tx.promoCode}
                        </span>
                      )}
                    </td>

                    {/* Amount */}
                    <td className="py-3.5 px-4 font-black text-foreground whitespace-nowrap">
                      {formatCurrency(tx.amount)}
                    </td>

                    {/* Status */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      {tx.status === 'SUCCESS' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          SUCCESS
                        </span>
                      ) : tx.status === 'PENDING' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                          <Clock className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                          PENDING
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                          <XCircle className="w-3 h-3 text-rose-600 dark:text-rose-400" />
                          FAILED
                        </span>
                      )}

                      {tx.refundStatus && tx.refundStatus !== 'NONE' && (
                        <div className="mt-1">
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                            Refund: {tx.refundStatus}
                          </span>
                        </div>
                      )}
                    </td>

                    {/* Razorpay Ref */}
                    <td className="py-3.5 px-4 font-mono text-[11px] min-w-[190px] max-w-[240px]">
                      <div className="flex items-center gap-1 text-foreground/80 truncate">
                        <span className="truncate select-all" title={tx.razorpayOrderId}>{tx.razorpayOrderId}</span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(tx.razorpayOrderId, tx.id + '_order')}
                          className="p-1 hover:text-primary text-muted-foreground shrink-0 transition-colors cursor-pointer"
                          title="Copy Order ID"
                        >
                          {copiedId === tx.id + '_order' ? (
                            <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      </div>
                      {tx.razorpayPaymentId && (
                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground truncate mt-0.5">
                          <span className="truncate select-all" title={tx.razorpayPaymentId}>Pay: {tx.razorpayPaymentId}</span>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(tx.razorpayPaymentId!, tx.id + '_pay')}
                            className="p-0.5 hover:text-primary text-muted-foreground shrink-0 transition-colors cursor-pointer"
                            title="Copy Payment ID"
                          >
                            {copiedId === tx.id + '_pay' ? (
                              <Check className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" />
                            ) : (
                              <Copy className="w-2.5 h-2.5" />
                            )}
                          </button>
                        </div>
                      )}
                      {tx.verifiedByAdminId && (
                        <span className="inline-block mt-0.5 px-1.5 py-0.2 rounded text-[9px] font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                          Manual Override
                        </span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setActiveDrawerTx(tx)}
                          className="p-1.5 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors cursor-pointer"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        {tx.status !== 'SUCCESS' ? (
                          <button
                            type="button"
                            onClick={() => handleOpenVerifyModal(tx)}
                            className="px-2.5 py-1 text-[11px] font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all shadow-2xs flex items-center gap-1 active:scale-95"
                            title="Force verify payment and grant access"
                          >
                            <ShieldCheck className="w-3.5 h-3.5" />
                            Verify
                          </button>
                        ) : (
                          <span className="text-[11px] text-muted-foreground font-semibold px-2">
                            Active
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination footer */}
        <div className="p-4 border-t border-border bg-muted/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>
            Showing <strong className="text-foreground">{transactions.length}</strong> of{' '}
            <strong className="text-foreground">{totalElements}</strong> total records
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              disabled={page === 0 || tableLoading}
              onClick={() => setPage(prev => Math.max(0, prev - 1))}
              className="p-2 border border-border bg-card rounded-xl hover:bg-muted disabled:opacity-40 transition-all text-foreground cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="px-3 py-1 font-bold text-foreground">
              Page {page + 1} of {Math.max(1, totalPages)}
            </span>
            <button
              type="button"
              disabled={page >= totalPages - 1 || tableLoading}
              onClick={() => setPage(prev => prev + 1)}
              className="p-2 border border-border bg-card rounded-xl hover:bg-muted disabled:opacity-40 transition-all text-foreground cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ─── Manual Verification Modal ────────────────────────────────────── */}
      {verifyModalTx && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-card rounded-2xl max-w-md w-full p-6 shadow-xl border border-border space-y-4 text-foreground">
            <div className="flex justify-between items-start border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl border border-emerald-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-foreground text-base">Manual Payment Verification</h3>
                  <p className="text-xs text-muted-foreground">Override and activate user purchase</p>
                </div>
              </div>
              <button 
                onClick={() => setVerifyModalTx(null)} 
                className="text-muted-foreground hover:text-foreground p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleManualVerifySubmit} className="space-y-3.5 text-xs">
              <div className="p-3 bg-muted/40 border border-border rounded-xl space-y-1">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">User:</span>
                  <span className="font-bold text-foreground">{verifyModalTx.userName} ({verifyModalTx.userEmail})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Target Item:</span>
                  <span className="font-bold text-foreground">{verifyModalTx.itemName} ({verifyModalTx.vertical})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className="font-black text-emerald-600 dark:text-emerald-400">{formatCurrency(verifyModalTx.amount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Order ID:</span>
                  <span className="font-mono text-foreground/80 text-[11px]">{verifyModalTx.razorpayOrderId}</span>
                </div>
              </div>

              <div>
                <label className="font-bold text-foreground block mb-1">
                  Razorpay Payment ID / Bank Reference:
                </label>
                <input
                  type="text"
                  required
                  value={manualPaymentId}
                  onChange={(e) => setManualPaymentId(e.target.value)}
                  placeholder="e.g. pay_XXXXX or UPI/NEFT Ref Number"
                  className="w-full text-xs font-mono p-2.5 bg-muted/40 border border-input rounded-xl outline-none focus:border-emerald-500 focus:bg-card text-foreground placeholder:text-muted-foreground"
                />
                <p className="text-[10px] text-muted-foreground mt-1">
                  Enter the transaction ID from Razorpay Dashboard or bank screenshot.
                </p>
              </div>

              <div>
                <label className="font-bold text-foreground block mb-1">
                  Admin Verification Reason (Audit Log):
                </label>
                <textarea
                  required
                  rows={2}
                  value={manualNotes}
                  onChange={(e) => setManualNotes(e.target.value)}
                  placeholder="e.g. Student paid via offline UPI QR code; screenshot verified on WhatsApp."
                  className="w-full text-xs p-2.5 bg-muted/40 border border-input rounded-xl outline-none focus:border-emerald-500 focus:bg-card text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-800 dark:text-amber-300 text-[11px] leading-relaxed">
                <strong>Attention:</strong> Approving will immediately mark this transaction as <strong>SUCCESS</strong>, grant the student PRO membership or course enrollment, and record your admin ID in the audit ledger.
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-border">
                <button
                  type="button"
                  onClick={() => setVerifyModalTx(null)}
                  className="px-4 py-2 text-xs font-semibold text-muted-foreground hover:bg-muted rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={verifying || !manualPaymentId.trim() || !manualNotes.trim()}
                  className="px-4 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-xl shadow-xs transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
                >
                  {verifying ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      Approving...
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Confirm & Grant Access
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── Transaction Detail Drawer ────────────────────────────────────── */}
      {activeDrawerTx && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-xs z-50 flex justify-end animate-in fade-in duration-150">
          <div className="bg-card w-full max-w-md h-full shadow-2xl p-6 overflow-y-auto space-y-5 border-l border-border text-foreground animate-in slide-in-from-right duration-250">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Transaction Inspector</span>
                <h3 className="text-base font-extrabold text-foreground">Order #{activeDrawerTx.razorpayOrderId.substring(0, 14)}...</h3>
              </div>
              <button 
                onClick={() => setActiveDrawerTx(null)} 
                className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="bg-muted/40 p-4 rounded-xl border border-border space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Vertical:</span>
                  <span className="font-bold text-foreground">{activeDrawerTx.vertical}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Target Item:</span>
                  <span className="font-bold text-foreground text-right max-w-[220px] truncate" title={activeDrawerTx.itemName}>{activeDrawerTx.itemName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className={`font-bold ${activeDrawerTx.status === 'SUCCESS' ? 'text-emerald-600 dark:text-emerald-400' : activeDrawerTx.status === 'PENDING' ? 'text-amber-600 dark:text-amber-400' : 'text-rose-600 dark:text-rose-400'}`}>
                    {activeDrawerTx.status}
                  </span>
                </div>
                {activeDrawerTx.promoCode && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Promo Code:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">{activeDrawerTx.promoCode}</span>
                  </div>
                )}
                {activeDrawerTx.refundStatus && activeDrawerTx.refundStatus !== 'NONE' && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Refund Status:</span>
                    <span className="font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">{activeDrawerTx.refundStatus}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Gross Amount:</span>
                  <span className="font-black text-foreground text-sm">{formatCurrency(activeDrawerTx.amount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Purchased On:</span>
                  <span className="font-medium text-foreground">{formatDate(activeDrawerTx.createdAt)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-foreground">Customer Identity</h4>
                <div className="bg-muted/40 p-3 rounded-xl border border-border space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Name:</span>
                    <span className="font-bold text-foreground">{activeDrawerTx.userName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="font-mono text-foreground select-all">{activeDrawerTx.userEmail}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">User UUID:</span>
                    <span className="font-mono text-[10px] text-muted-foreground truncate max-w-[200px] select-all" title={activeDrawerTx.userId}>{activeDrawerTx.userId}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-foreground">Gateway Audit Data</h4>
                <div className="bg-muted/40 p-3 rounded-xl border border-border space-y-2 font-mono text-[11px]">
                  <div>
                    <span className="text-muted-foreground block text-[10px] font-sans">Razorpay Order ID:</span>
                    <div className="flex items-center justify-between text-foreground mt-0.5">
                      <span className="select-all truncate">{activeDrawerTx.razorpayOrderId}</span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(activeDrawerTx.razorpayOrderId, 'drawer_order')}
                        className="p-1 hover:text-primary text-muted-foreground shrink-0 cursor-pointer"
                        title="Copy Order ID"
                      >
                        {copiedId === 'drawer_order' ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[10px] font-sans">Razorpay Payment ID:</span>
                    <div className="flex items-center justify-between text-foreground mt-0.5">
                      <span className="select-all truncate">{activeDrawerTx.razorpayPaymentId || '—'}</span>
                      {activeDrawerTx.razorpayPaymentId && (
                        <button
                          type="button"
                          onClick={() => copyToClipboard(activeDrawerTx.razorpayPaymentId!, 'drawer_pay')}
                          className="p-1 hover:text-primary text-muted-foreground shrink-0 cursor-pointer"
                          title="Copy Payment ID"
                        >
                          {copiedId === 'drawer_pay' ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                  {activeDrawerTx.adminNotes && (
                    <div>
                      <span className="text-muted-foreground block text-[10px] font-sans">Admin Memo / Notes:</span>
                      <span className="text-purple-600 dark:text-purple-400 font-sans font-medium">{activeDrawerTx.adminNotes}</span>
                    </div>
                  )}
                  {activeDrawerTx.verifiedByAdminId && (
                    <div className="pt-1">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-sans">
                        Manually Verified & Activated
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {activeDrawerTx.status !== 'SUCCESS' && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      const target = activeDrawerTx;
                      setActiveDrawerTx(null);
                      handleOpenVerifyModal(target);
                    }}
                    className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-xs transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    Manually Verify & Grant Access
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
