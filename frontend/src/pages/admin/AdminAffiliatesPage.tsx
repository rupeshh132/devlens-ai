import { useState, useEffect } from 'react';
import { api } from '../../lib/api';
import { 
  Tag, Wallet, TrendingUp, Search, RefreshCw, 
  Plus, CheckCircle2, Copy, Check, X, 
  Trash2, AlertTriangle, ShieldCheck, Ticket,
  ChevronLeft, ChevronRight, Download
} from 'lucide-react';
import { toast } from 'sonner';

interface AffiliateStats {
  totalPromos: number;
  activePromos: number;
  totalRedemptions: number;
  totalSalesDriven: number;
  totalGrossCommission: number;
  pendingPayoutAmount: number;
  pendingPayoutsCount: number;
  settledPayoutAmount: number;
}

interface PromoCodeItem {
  id: string;
  code: string;
  affiliateUserId: string | null;
  discountPercentage: number;
  commissionPercentage: number;
  isActive: boolean;
  maxRedemptions: number | null;
  currentRedemptions: number;
  expiryDate: string | null;
  description: string | null;
  partnerName: string | null;
  partnerEmail: string | null;
  partnerPayoutUpi: string | null;
  createdAt: string;
}

interface LedgerItem {
  id: string;
  affiliateUserId: string;
  partnerName: string;
  partnerEmail: string | null;
  partnerPayoutUpi: string | null;
  buyerUserId: string;
  buyerName: string;
  buyerEmail: string;
  transactionId: string;
  promoCodeId: string;
  promoCodeStr: string | null;
  saleAmount: number;
  grossCommission: number;
  tdsAmount: number;
  netPayable: number;
  status: 'PENDING' | 'SETTLED' | 'REJECTED';
  settledAt: string | null;
  settledByAdminId: string | null;
  payoutReference: string | null;
  payoutNotes: string | null;
  createdAt: string;
}

export function AdminAffiliatesPage() {
  const [stats, setStats] = useState<AffiliateStats | null>(null);
  const [statsLoading, setStatsLoading] = useState(true);

  // Tab State
  const [activeTab, setActiveTab] = useState<'PROMOS' | 'LEDGER'>('PROMOS');

  // Promos Tab State
  const [promos, setPromos] = useState<PromoCodeItem[]>([]);
  const [promosLoading, setPromosLoading] = useState(true);
  const [promoSearch, setPromoSearch] = useState('');
  const [promoStatusFilter, setPromoStatusFilter] = useState<'ALL' | 'ACTIVE' | 'INACTIVE'>('ALL');
  const [promosPage, setPromosPage] = useState(0);
  const [promosTotalPages, setPromosTotalPages] = useState(1);

  // Ledger Tab State
  const [ledger, setLedger] = useState<LedgerItem[]>([]);
  const [ledgerLoading, setLedgerLoading] = useState(true);
  const [ledgerStatusFilter, setLedgerStatusFilter] = useState<'ALL' | 'PENDING' | 'SETTLED'>('ALL');
  const [ledgerSearch, setLedgerSearch] = useState('');
  const [ledgerPage, setLedgerPage] = useState(0);
  const [ledgerTotalPages, setLedgerTotalPages] = useState(1);

  // Create Modal State
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [createForm, setCreateForm] = useState({
    code: '',
    discountPercentage: 20,
    commissionPercentage: 0,
    maxRedemptions: '',
    expiryDate: '',
    description: '',
    partnerName: '',
    partnerEmail: '',
    partnerPayoutUpi: ''
  });

  // Settle Modal State
  const [settleModalOpen, setSettleModalOpen] = useState(false);
  const [selectedLedgerItem, setSelectedLedgerItem] = useState<LedgerItem | null>(null);
  const [settling, setSettling] = useState(false);
  const [payoutRefInput, setPayoutRefInput] = useState('');
  const [payoutNotesInput, setPayoutNotesInput] = useState('');

  // Copy code feedback
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // CSV Export states
  const [exportingPromos, setExportingPromos] = useState(false);
  const [exportingLedger, setExportingLedger] = useState(false);

  const escapeCsv = (val: string | number | null | undefined): string => {
    if (val === null || val === undefined) return '""';
    const str = String(val).replace(/"/g, '""');
    return `"${str}"`;
  };

  const handleExportPromosCSV = async () => {
    try {
      setExportingPromos(true);
      const params: Record<string, any> = { page: 0, size: 500 };
      if (promoSearch.trim()) params.query = promoSearch.trim();
      if (promoStatusFilter === 'ACTIVE') params.isActive = true;
      if (promoStatusFilter === 'INACTIVE') params.isActive = false;

      const res = await api.get('/learn/admin/affiliate/promos', { params });
      const items: PromoCodeItem[] = res.data?.content || [];

      if (items.length === 0) {
        toast.info('No promo codes found to export');
        return;
      }

      const headers = [
        'Promo Code',
        'Campaign Description',
        'Status',
        'Discount %',
        'Commission %',
        'Current Redemptions',
        'Max Redemptions Cap',
        'Partner Name',
        'Partner Email',
        'Partner Payout UPI',
        'Expiry Date',
        'Created At'
      ];

      const csvRows = [headers.join(',')];
      for (const p of items) {
        csvRows.push([
          escapeCsv(p.code),
          escapeCsv(p.description || ''),
          escapeCsv(p.isActive ? 'ACTIVE' : 'INACTIVE'),
          escapeCsv(p.discountPercentage),
          escapeCsv(p.commissionPercentage),
          escapeCsv(p.currentRedemptions),
          escapeCsv(p.maxRedemptions ?? 'Unlimited'),
          escapeCsv(p.partnerName || 'Platform Direct'),
          escapeCsv(p.partnerEmail || ''),
          escapeCsv(p.partnerPayoutUpi || ''),
          escapeCsv(p.expiryDate || 'Never'),
          escapeCsv(p.createdAt || '')
        ].join(','));
      }

      const blob = new Blob([csvRows.join('\r\n')], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `promo-codes-directory-${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast.success(`Exported ${items.length} promo codes to CSV`);
    } catch (err) {
      console.error('Failed to export promo codes:', err);
      toast.error('Failed to export promo codes CSV');
    } finally {
      setExportingPromos(false);
    }
  };

  const handleExportLedgerCSV = async () => {
    try {
      setExportingLedger(true);
      const params: Record<string, any> = { page: 0, size: 500 };
      if (ledgerSearch.trim()) params.query = ledgerSearch.trim();
      if (ledgerStatusFilter !== 'ALL') params.status = ledgerStatusFilter;

      const res = await api.get('/learn/admin/affiliate/ledger', { params });
      const items: LedgerItem[] = res.data?.content || [];

      if (items.length === 0) {
        toast.info('No commission ledger rows found to export');
        return;
      }

      const headers = [
        'Ledger ID',
        'Attributed Date',
        'Coupon Code',
        'Partner Name',
        'Partner Email',
        'Partner Payout UPI',
        'Buyer Student Name',
        'Buyer Student Email',
        'Sale Amount (INR)',
        'Gross Commission (INR)',
        'TDS Deducted 5% (INR)',
        'Net Payable (INR)',
        'Payout Status',
        'Settled At',
        'Settled By Admin ID',
        'Bank UTR / Payout Ref',
        'Payout Notes'
      ];

      const csvRows = [headers.join(',')];
      for (const l of items) {
        csvRows.push([
          escapeCsv(l.id),
          escapeCsv(l.createdAt || ''),
          escapeCsv(l.promoCodeStr || ''),
          escapeCsv(l.partnerName || 'Platform Direct'),
          escapeCsv(l.partnerEmail || ''),
          escapeCsv(l.partnerPayoutUpi || ''),
          escapeCsv(l.buyerName || ''),
          escapeCsv(l.buyerEmail || ''),
          escapeCsv(l.saleAmount),
          escapeCsv(l.grossCommission),
          escapeCsv(l.tdsAmount),
          escapeCsv(l.netPayable),
          escapeCsv(l.status),
          escapeCsv(l.settledAt || ''),
          escapeCsv(l.settledByAdminId || ''),
          escapeCsv(l.payoutReference || ''),
          escapeCsv(l.payoutNotes || '')
        ].join(','));
      }

      const blob = new Blob([csvRows.join('\r\n')], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `affiliate-commission-ledger-${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast.success(`Exported ${items.length} commission ledger rows to CSV`);
    } catch (err) {
      console.error('Failed to export ledger CSV:', err);
      toast.error('Failed to export commission ledger CSV');
    } finally {
      setExportingLedger(false);
    }
  };

  // 1. Fetch Stats
  const fetchStats = async () => {
    try {
      setStatsLoading(true);
      const res = await api.get('/learn/admin/affiliate/stats');
      setStats(res.data);
    } catch {
      toast.error('Failed to load affiliate analytics');
    } finally {
      setStatsLoading(false);
    }
  };

  // 2. Fetch Promo Codes
  const fetchPromos = async () => {
    try {
      setPromosLoading(true);
      const params: Record<string, any> = {
        page: promosPage,
        size: 15
      };
      if (promoSearch.trim()) params.query = promoSearch.trim();
      if (promoStatusFilter === 'ACTIVE') params.isActive = true;
      if (promoStatusFilter === 'INACTIVE') params.isActive = false;

      const res = await api.get('/learn/admin/affiliate/promos', { params });
      setPromos(res.data.content || []);
      setPromosTotalPages(res.data.totalPages || 1);
    } catch {
      toast.error('Failed to load promo codes');
    } finally {
      setPromosLoading(false);
    }
  };

  // 3. Fetch Ledger
  const fetchLedger = async () => {
    try {
      setLedgerLoading(true);
      const params: Record<string, any> = {
        page: ledgerPage,
        size: 15
      };
      if (ledgerStatusFilter !== 'ALL') params.status = ledgerStatusFilter;
      if (ledgerSearch.trim()) params.query = ledgerSearch.trim();

      const res = await api.get('/learn/admin/affiliate/ledger', { params });
      setLedger(res.data.content || []);
      setLedgerTotalPages(res.data.totalPages || 1);
    } catch {
      toast.error('Failed to load commission ledger');
    } finally {
      setLedgerLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    fetchPromos();
  }, [promosPage, promoStatusFilter]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setPromosPage(0);
      fetchPromos();
    }, 350);
    return () => clearTimeout(handler);
  }, [promoSearch]);

  useEffect(() => {
    fetchLedger();
  }, [ledgerPage, ledgerStatusFilter]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setLedgerPage(0);
      fetchLedger();
    }, 350);
    return () => clearTimeout(handler);
  }, [ledgerSearch]);

  // Handle Create Promo Code
  const handleCreatePromo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!createForm.code.trim()) {
      toast.error('Please enter a coupon code');
      return;
    }

    try {
      setCreating(true);
      const payload: Record<string, any> = {
        code: createForm.code.trim().toUpperCase(),
        discountPercentage: Number(createForm.discountPercentage),
        commissionPercentage: Number(createForm.commissionPercentage || 0),
        description: createForm.description.trim() || undefined,
        partnerName: createForm.partnerName.trim() || undefined,
        partnerEmail: createForm.partnerEmail.trim() || undefined,
        partnerPayoutUpi: createForm.partnerPayoutUpi.trim() || undefined
      };

      if (createForm.maxRedemptions) {
        payload.maxRedemptions = parseInt(createForm.maxRedemptions);
      }
      if (createForm.expiryDate) {
        payload.expiryDate = new Date(createForm.expiryDate).toISOString();
      }

      await api.post('/learn/admin/affiliate/promos', payload);
      toast.success(`Coupon code ${payload.code} created successfully!`);
      setCreateModalOpen(false);
      setCreateForm({
        code: '',
        discountPercentage: 20,
        commissionPercentage: 0,
        maxRedemptions: '',
        expiryDate: '',
        description: '',
        partnerName: '',
        partnerEmail: '',
        partnerPayoutUpi: ''
      });
      fetchStats();
      fetchPromos();
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to create promo code');
    } finally {
      setCreating(false);
    }
  };

  // Handle Toggle Active
  const handleToggleActive = async (id: string, currentCode: string) => {
    try {
      const res = await api.patch(`/learn/admin/affiliate/promos/${id}/toggle`);
      const updatedState = res.data.isActive;
      toast.success(`Coupon ${currentCode} is now ${updatedState ? 'ACTIVE' : 'INACTIVE'}`);
      setPromos(prev => prev.map(p => p.id === id ? { ...p, isActive: updatedState } : p));
      fetchStats();
    } catch {
      toast.error('Failed to toggle coupon status');
    }
  };

  // Handle Delete Promo
  const handleDeletePromo = async (id: string, code: string) => {
    if (!confirm(`Are you sure you want to delete or deactivate coupon "${code}"?`)) return;

    try {
      await api.delete(`/learn/admin/affiliate/promos/${id}`);
      toast.success(`Coupon ${code} processed successfully`);
      fetchStats();
      fetchPromos();
    } catch {
      toast.error('Failed to delete coupon');
    }
  };

  // Handle Settle Payout
  const handleSettlePayout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLedgerItem || !payoutRefInput.trim()) {
      toast.error('Please enter the UPI Transaction Reference / UTR');
      return;
    }

    try {
      setSettling(true);
      await api.post(`/learn/admin/affiliate/ledger/${selectedLedgerItem.id}/settle`, {
        payoutReference: payoutRefInput.trim(),
        payoutNotes: payoutNotesInput.trim() || undefined
      });

      toast.success(`Commission of ₹${selectedLedgerItem.netPayable} marked as SETTLED!`);
      setSettleModalOpen(false);
      setSelectedLedgerItem(null);
      setPayoutRefInput('');
      setPayoutNotesInput('');
      fetchStats();
      fetchLedger();
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to settle payout');
    } finally {
      setSettling(false);
    }
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    toast.success(`Copied ${code} to clipboard`);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* ─── Top Header & Controls ────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-foreground tracking-tight flex items-center gap-2">
              <Tag className="h-6 w-6 text-primary" />
              Promo Codes & Affiliate Partner Console
            </h1>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Author universal marketing discounts, manage influencer coupons & settle partner commissions.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => { fetchStats(); fetchPromos(); fetchLedger(); }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition-all shadow-xs"
          >
            <RefreshCw className={`h-4 w-4 ${statsLoading || promosLoading || ledgerLoading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>

          <button
            onClick={() => setCreateModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold transition-all shadow-xs"
          >
            <Plus className="h-4 w-4" />
            <span>Create Promo Code</span>
          </button>
        </div>
      </div>

      {/* ─── 4 Top KPI Analytics Cards (Interactive Quick-Filters) ──────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Active Coupons */}
        <button
          type="button"
          onClick={() => {
            setActiveTab('PROMOS');
            setPromoStatusFilter(prev => prev === 'ACTIVE' ? 'ALL' : 'ACTIVE');
            setPromosPage(0);
          }}
          className={`p-5 rounded-2xl border text-left transition-all duration-200 relative overflow-hidden shadow-2xs cursor-pointer group ${
            activeTab === 'PROMOS' && promoStatusFilter === 'ACTIVE'
              ? 'border-primary ring-2 ring-primary/40 bg-primary/5'
              : 'border-border bg-card/60 hover:bg-card hover:border-primary/40 hover:shadow-xs'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
              Active Promo Codes
            </span>
            <div className={`h-8 w-8 rounded-xl flex items-center justify-center transition-all ${
              activeTab === 'PROMOS' && promoStatusFilter === 'ACTIVE'
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
            }`}>
              <Tag className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <h3 className="text-2xl font-black text-foreground tracking-tight">
              {statsLoading ? '...' : stats?.activePromos ?? 0}
            </h3>
            <span className="text-xs font-semibold text-muted-foreground">
              / {stats?.totalPromos ?? 0} total
            </span>
          </div>
          <div className="mt-2 text-xs text-muted-foreground flex items-center justify-between">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              <span>Platform & Partner</span>
            </div>
            <span className="text-[10px] font-bold text-primary group-hover:underline">
              {activeTab === 'PROMOS' && promoStatusFilter === 'ACTIVE' ? 'Filtering Active' : 'Filter Active →'}
            </span>
          </div>
        </button>

        {/* Metric 2: Total Redemptions */}
        <button
          type="button"
          onClick={() => {
            setActiveTab('PROMOS');
            setPromoStatusFilter('ALL');
            setPromoSearch('');
            setPromosPage(0);
          }}
          className={`p-5 rounded-2xl border text-left transition-all duration-200 relative overflow-hidden shadow-2xs cursor-pointer group ${
            activeTab === 'PROMOS' && promoStatusFilter === 'ALL' && !promoSearch
              ? 'border-amber-500/60 ring-2 ring-amber-500/30 bg-amber-500/5'
              : 'border-border bg-card/60 hover:bg-card hover:border-amber-500/40 hover:shadow-xs'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
              Total Redemptions
            </span>
            <div className={`h-8 w-8 rounded-xl flex items-center justify-center transition-all ${
              activeTab === 'PROMOS' && promoStatusFilter === 'ALL' && !promoSearch
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white'
            }`}>
              <Ticket className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <h3 className="text-2xl font-black text-foreground tracking-tight">
              {statsLoading ? '...' : (stats?.totalRedemptions ?? 0).toLocaleString()}
            </h3>
            <span className="text-xs font-semibold text-muted-foreground">uses</span>
          </div>
          <div className="mt-2 text-xs text-muted-foreground flex items-center justify-between">
            <span>Attributed checkouts</span>
            <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 group-hover:underline">
              View All Promos →
            </span>
          </div>
        </button>

        {/* Metric 3: Gross Sales Driven */}
        <button
          type="button"
          onClick={() => {
            setActiveTab('LEDGER');
            setLedgerStatusFilter('ALL');
            setLedgerSearch('');
            setLedgerPage(0);
          }}
          className={`p-5 rounded-2xl border text-left transition-all duration-200 relative overflow-hidden shadow-2xs cursor-pointer group ${
            activeTab === 'LEDGER' && ledgerStatusFilter === 'ALL' && !ledgerSearch
              ? 'border-emerald-500/60 ring-2 ring-emerald-500/30 bg-emerald-500/5'
              : 'border-border bg-card/60 hover:bg-card hover:border-emerald-500/40 hover:shadow-xs'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
              Gross Sales Driven
            </span>
            <div className={`h-8 w-8 rounded-xl flex items-center justify-center transition-all ${
              activeTab === 'LEDGER' && ledgerStatusFilter === 'ALL' && !ledgerSearch
                ? 'bg-emerald-500 text-white shadow-xs'
                : 'bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white'
            }`}>
              <TrendingUp className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <h3 className="text-2xl font-black text-foreground tracking-tight">
              {statsLoading ? '...' : `₹${Number(stats?.totalSalesDriven ?? 0).toLocaleString('en-IN')}`}
            </h3>
          </div>
          <div className="mt-2 text-xs text-muted-foreground flex items-center justify-between">
            <span>Total promotional GMV</span>
            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 group-hover:underline">
              View Ledger →
            </span>
          </div>
        </button>

        {/* Metric 4: Pending Payouts */}
        <button
          type="button"
          onClick={() => {
            setActiveTab('LEDGER');
            setLedgerStatusFilter(prev => prev === 'PENDING' ? 'ALL' : 'PENDING');
            setLedgerPage(0);
          }}
          className={`p-5 rounded-2xl border text-left transition-all duration-200 relative overflow-hidden shadow-2xs cursor-pointer group ${
            activeTab === 'LEDGER' && ledgerStatusFilter === 'PENDING'
              ? 'border-rose-500/60 ring-2 ring-rose-500/30 bg-rose-500/5'
              : 'border-border bg-card/60 hover:bg-card hover:border-rose-500/40 hover:shadow-xs'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
              Pending Payouts
            </span>
            <div className={`h-8 w-8 rounded-xl flex items-center justify-center transition-all ${
              activeTab === 'LEDGER' && ledgerStatusFilter === 'PENDING'
                ? 'bg-rose-500 text-white shadow-xs'
                : 'bg-rose-500/10 text-rose-500 group-hover:bg-rose-500 group-hover:text-white'
            }`}>
              <Wallet className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <h3 className="text-2xl font-black text-foreground tracking-tight">
              {statsLoading ? '...' : `₹${Number(stats?.pendingPayoutAmount ?? 0).toLocaleString('en-IN')}`}
            </h3>
            {stats && stats.pendingPayoutsCount > 0 && (
              <span className="text-xs font-bold text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded-full">
                {stats.pendingPayoutsCount} pending
              </span>
            )}
          </div>
          <div className="mt-2 text-xs text-muted-foreground flex items-center justify-between">
            <span>₹{Number(stats?.settledPayoutAmount ?? 0).toLocaleString('en-IN')} settled</span>
            <span className="text-[10px] font-bold text-rose-600 dark:text-rose-400 group-hover:underline">
              {activeTab === 'LEDGER' && ledgerStatusFilter === 'PENDING' ? 'Filtering Pending' : 'Filter Pending →'}
            </span>
          </div>
        </button>
      </div>

      {/* ─── Tab Switcher ─────────────────────────────────────────────────── */}
      <div className="flex items-center gap-2 border-b border-border pb-2">
        <button
          onClick={() => setActiveTab('PROMOS')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'PROMOS'
              ? 'bg-primary text-primary-foreground shadow-xs'
              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
          }`}
        >
          <Tag className="h-4 w-4" />
          <span>Active Promo Codes Directory</span>
        </button>

        <button
          onClick={() => setActiveTab('LEDGER')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all relative ${
            activeTab === 'LEDGER'
              ? 'bg-primary text-primary-foreground shadow-xs'
              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
          }`}
        >
          <Wallet className="h-4 w-4" />
          <span>Affiliate Commission Ledger</span>
          {stats && stats.pendingPayoutsCount > 0 && (
            <span className="h-4 min-w-[16px] px-1 rounded-full bg-rose-500 text-white text-[10px] font-black flex items-center justify-center">
              {stats.pendingPayoutsCount}
            </span>
          )}
        </button>
      </div>

      {/* ─── TAB 1: PROMO CODES DIRECTORY ─────────────────────────────────── */}
      {activeTab === 'PROMOS' && (
        <div className="rounded-2xl border border-border bg-card shadow-2xs overflow-hidden">
          {/* Filters Bar */}
          <div className="p-4 border-b border-border flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-muted/20">
            <div className="flex items-center gap-2 flex-1 max-w-md">
              <div className="relative w-full">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search code, partner name, email..."
                  value={promoSearch}
                  onChange={(e) => setPromoSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-border bg-background text-xs font-medium text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-xl border border-border bg-background p-0.5">
                {(['ALL', 'ACTIVE', 'INACTIVE'] as const).map(f => (
                  <button
                    key={f}
                    onClick={() => { setPromoStatusFilter(f); setPromosPage(0); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      promoStatusFilter === f
                        ? 'bg-primary text-primary-foreground font-bold shadow-xs'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {f === 'ALL' ? 'All' : f === 'ACTIVE' ? 'Active' : 'Inactive'}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleExportPromosCSV}
                disabled={exportingPromos}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border bg-background hover:bg-muted text-xs font-semibold text-foreground transition-all shadow-2xs hover:shadow-xs cursor-pointer disabled:opacity-50"
                title="Export filtered promo codes to RFC-compliant CSV"
              >
                <Download className={`h-3.5 w-3.5 text-muted-foreground ${exportingPromos ? 'animate-bounce' : ''}`} />
                <span>{exportingPromos ? 'Exporting...' : 'Export CSV'}</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-border bg-muted/40 font-bold text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">Coupon Code</th>
                  <th className="px-4 py-3">Attribution / Partner</th>
                  <th className="px-4 py-3">Student Discount</th>
                  <th className="px-4 py-3">Affiliate Cut</th>
                  <th className="px-4 py-3">Redemptions</th>
                  <th className="px-4 py-3">Expiry</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {promosLoading ? (
                  Array.from({ length: 4 }).map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan={8} className="px-4 py-4 text-center text-muted-foreground">
                        Loading coupons...
                      </td>
                    </tr>
                  ))
                ) : promos.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-12 text-center text-muted-foreground">
                      <Tag className="h-10 w-10 mx-auto text-muted-foreground/40 mb-2" />
                      <p className="font-semibold">No promotional codes found</p>
                      <p className="text-[11px] mt-0.5">Click "Create Promo Code" to launch a new discount campaign.</p>
                    </td>
                  </tr>
                ) : (
                  promos.map((p) => (
                    <tr key={p.id} className="hover:bg-muted/40 transition-colors">
                      {/* Code */}
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <span className="font-black font-mono text-sm text-primary bg-primary/10 px-2.5 py-1 rounded-lg tracking-wider">
                            {p.code}
                          </span>
                          <button
                            onClick={() => copyCode(p.code)}
                            title="Copy Code"
                            className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
                          >
                            {copiedCode === p.code ? (
                              <Check className="h-3.5 w-3.5 text-emerald-500" />
                            ) : (
                              <Copy className="h-3.5 w-3.5" />
                            )}
                          </button>
                        </div>
                        {p.description && (
                          <div className="text-[10px] text-muted-foreground mt-1 max-w-[200px] truncate">
                            {p.description}
                          </div>
                        )}
                      </td>

                      {/* Partner */}
                      <td className="px-4 py-3.5">
                        <div className="font-bold text-foreground">
                          {p.partnerName || 'Platform Direct (Universal)'}
                        </div>
                        {p.partnerEmail && (
                          <div className="text-[10px] text-muted-foreground">
                            {p.partnerEmail}
                          </div>
                        )}
                        {p.partnerPayoutUpi && (
                          <div className="text-[10px] font-mono text-primary">
                            UPI: {p.partnerPayoutUpi}
                          </div>
                        )}
                      </td>

                      {/* Discount % */}
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span className="font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md text-xs">
                          {p.discountPercentage}% OFF
                        </span>
                      </td>

                      {/* Commission % */}
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        {p.commissionPercentage > 0 ? (
                          <span className="font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-md text-xs">
                            {p.commissionPercentage}% Cut
                          </span>
                        ) : (
                          <span className="text-muted-foreground text-[11px]">0% (Direct)</span>
                        )}
                      </td>

                      {/* Redemptions */}
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <div className="font-bold text-foreground">
                          {p.currentRedemptions} {p.maxRedemptions ? `/ ${p.maxRedemptions}` : ''}
                        </div>
                        {p.maxRedemptions && (
                          <div className="w-20 bg-muted rounded-full h-1.5 mt-1 overflow-hidden">
                            <div 
                              className="bg-primary h-full rounded-full transition-all" 
                              style={{ width: `${Math.min(100, (p.currentRedemptions / p.maxRedemptions) * 100)}%` }}
                            />
                          </div>
                        )}
                      </td>

                      {/* Expiry */}
                      <td className="px-4 py-3.5 whitespace-nowrap text-muted-foreground">
                        {p.expiryDate ? (
                          new Date(p.expiryDate).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })
                        ) : (
                          <span className="text-[11px] text-muted-foreground">Never expires</span>
                        )}
                      </td>

                      {/* Status */}
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full ${
                          p.isActive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-muted text-muted-foreground'
                        }`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${p.isActive ? 'bg-emerald-500' : 'bg-muted-foreground'}`} />
                          <span>{p.isActive ? 'Active' : 'Inactive'}</span>
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-4 py-3.5 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleToggleActive(p.id, p.code)}
                            className="px-2.5 py-1 rounded-lg border border-border bg-background hover:bg-muted text-[11px] font-semibold text-foreground transition-colors"
                          >
                            {p.isActive ? 'Deactivate' : 'Activate'}
                          </button>
                          <button
                            onClick={() => handleDeletePromo(p.id, p.code)}
                            className="p-1 rounded-lg border border-border hover:bg-rose-500/10 hover:border-rose-500/30 hover:text-rose-500 text-muted-foreground transition-colors"
                            title="Delete or retire coupon"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="p-4 border-t border-border flex items-center justify-between gap-4 bg-muted/10 text-xs text-muted-foreground">
            <span>Showing {promos.length} coupon codes</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPromosPage(p => Math.max(0, p - 1))}
                disabled={promosPage === 0}
                className="p-1.5 rounded-lg border border-border bg-background hover:bg-muted disabled:opacity-40 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="font-semibold text-foreground">
                Page {promosPage + 1} of {promosTotalPages || 1}
              </span>
              <button
                onClick={() => setPromosPage(p => Math.min(promosTotalPages - 1, p + 1))}
                disabled={promosPage >= promosTotalPages - 1}
                className="p-1.5 rounded-lg border border-border bg-background hover:bg-muted disabled:opacity-40 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── TAB 2: AFFILIATE COMMISSION LEDGER ────────────────────────────── */}
      {activeTab === 'LEDGER' && (
        <div className="rounded-2xl border border-border bg-card shadow-2xs overflow-hidden">
          {/* Filters Bar */}
          <div className="p-4 border-b border-border flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-muted/20">
            <div className="flex items-center gap-2 flex-1 max-w-md">
              <div className="relative w-full">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by code, UTR or buyer..."
                  value={ledgerSearch}
                  onChange={(e) => setLedgerSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-border bg-background text-xs font-medium text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-xl border border-border bg-background p-0.5">
                {(['ALL', 'PENDING', 'SETTLED'] as const).map(s => (
                  <button
                    key={s}
                    onClick={() => { setLedgerStatusFilter(s); setLedgerPage(0); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      ledgerStatusFilter === s
                        ? 'bg-primary text-primary-foreground font-bold shadow-xs'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {s === 'ALL' ? 'All' : s === 'PENDING' ? 'Pending' : 'Settled'}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleExportLedgerCSV}
                disabled={exportingLedger}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border bg-background hover:bg-muted text-xs font-semibold text-foreground transition-all shadow-2xs hover:shadow-xs cursor-pointer disabled:opacity-50"
                title="Export filtered commission ledger and payout audit to CSV"
              >
                <Download className={`h-3.5 w-3.5 text-muted-foreground ${exportingLedger ? 'animate-bounce' : ''}`} />
                <span>{exportingLedger ? 'Exporting...' : 'Export Ledger CSV'}</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-border bg-muted/40 font-bold text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Partner / Influencer</th>
                  <th className="px-4 py-3">Buyer Student</th>
                  <th className="px-4 py-3">Coupon</th>
                  <th className="px-4 py-3">Sale Amount</th>
                  <th className="px-4 py-3">Net Payable (Post TDS)</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Settlement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {ledgerLoading ? (
                  Array.from({ length: 4 }).map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan={8} className="px-4 py-4 text-center text-muted-foreground">
                        Loading commission ledger...
                      </td>
                    </tr>
                  ))
                ) : ledger.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-12 text-center text-muted-foreground">
                      <Wallet className="h-10 w-10 mx-auto text-muted-foreground/40 mb-2" />
                      <p className="font-semibold">No commission records found</p>
                      <p className="text-[11px] mt-0.5">When students buy subscriptions using an affiliate code, earnings appear here.</p>
                    </td>
                  </tr>
                ) : (
                  ledger.map((item) => (
                    <tr key={item.id} className="hover:bg-muted/40 transition-colors">
                      {/* Date */}
                      <td className="px-4 py-3.5 whitespace-nowrap text-muted-foreground">
                        <div className="font-medium text-foreground">
                          {new Date(item.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                        <div className="text-[10px]">
                          {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </td>

                      {/* Partner */}
                      <td className="px-4 py-3.5">
                        <div className="font-bold text-foreground">
                          {item.partnerName}
                        </div>
                        {item.partnerPayoutUpi ? (
                          <div className="text-[11px] font-mono text-primary">
                            UPI: {item.partnerPayoutUpi}
                          </div>
                        ) : (
                          <div className="text-[10px] text-muted-foreground">
                            {item.partnerEmail || 'No UPI ID saved'}
                          </div>
                        )}
                      </td>

                      {/* Buyer */}
                      <td className="px-4 py-3.5">
                        <div className="font-semibold text-foreground">
                          {item.buyerName}
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          {item.buyerEmail}
                        </div>
                      </td>

                      {/* Coupon */}
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span className="font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md text-xs">
                          {item.promoCodeStr || 'N/A'}
                        </span>
                      </td>

                      {/* Sale Amount */}
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span className="font-bold text-foreground">
                          ₹{Number(item.saleAmount).toLocaleString('en-IN')}
                        </span>
                      </td>

                      {/* Net Payable */}
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <div className="font-black text-sm text-emerald-500">
                          ₹{Number(item.netPayable).toLocaleString('en-IN')}
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          Gross: ₹{item.grossCommission} | TDS: -₹{item.tdsAmount}
                        </div>
                      </td>

                      {/* Status */}
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        {item.status === 'SETTLED' ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                            <CheckCircle2 className="h-3 w-3" />
                            <span>Settled</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full">
                            <AlertTriangle className="h-3 w-3" />
                            <span>Pending Payout</span>
                          </span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="px-4 py-3.5 whitespace-nowrap text-right">
                        {item.status === 'PENDING' ? (
                          <button
                            onClick={() => {
                              setSelectedLedgerItem(item);
                              setPayoutRefInput('');
                              setPayoutNotesInput('');
                              setSettleModalOpen(true);
                            }}
                            className="px-3 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] shadow-xs transition-colors"
                          >
                            Settle Payout
                          </button>
                        ) : (
                          <div className="text-[10px] text-muted-foreground text-right font-mono">
                            <div>Ref: {item.payoutReference || 'Paid'}</div>
                            {item.settledAt && (
                              <div>{new Date(item.settledAt).toLocaleDateString()}</div>
                            )}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="p-4 border-t border-border flex items-center justify-between gap-4 bg-muted/10 text-xs text-muted-foreground">
            <span>Showing {ledger.length} commission transactions</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLedgerPage(p => Math.max(0, p - 1))}
                disabled={ledgerPage === 0}
                className="p-1.5 rounded-lg border border-border bg-background hover:bg-muted disabled:opacity-40 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="font-semibold text-foreground">
                Page {ledgerPage + 1} of {ledgerTotalPages || 1}
              </span>
              <button
                onClick={() => setLedgerPage(p => Math.min(ledgerTotalPages - 1, p + 1))}
                disabled={ledgerPage >= ledgerTotalPages - 1}
                className="p-1.5 rounded-lg border border-border bg-background hover:bg-muted disabled:opacity-40 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── CREATE PROMO CODE MODAL ──────────────────────────────────────── */}
      {createModalOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <Tag className="h-5 w-5 text-primary" />
                <h3 className="text-base font-bold text-foreground">Create Promotional / Affiliate Coupon</h3>
              </div>
              <button 
                onClick={() => setCreateModalOpen(false)}
                className="p-1 rounded-lg hover:bg-muted text-muted-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleCreatePromo} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1 col-span-2 sm:col-span-1">
                  <label className="text-xs font-bold text-foreground">Coupon Code *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. DIWALI40"
                    value={createForm.code}
                    onChange={(e) => setCreateForm({ ...createForm, code: e.target.value.toUpperCase() })}
                    className="w-full px-3 py-2 rounded-xl border border-border bg-background text-xs font-mono font-bold tracking-wider uppercase text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-1 col-span-2 sm:col-span-1">
                  <label className="text-xs font-bold text-foreground">Student Discount (%) *</label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="100"
                    placeholder="20"
                    value={createForm.discountPercentage}
                    onChange={(e) => setCreateForm({ ...createForm, discountPercentage: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-border bg-background text-xs font-bold text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1 col-span-2 sm:col-span-1">
                  <label className="text-xs font-bold text-foreground">Partner Commission (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="50"
                    placeholder="10 (0 for platform direct)"
                    value={createForm.commissionPercentage}
                    onChange={(e) => setCreateForm({ ...createForm, commissionPercentage: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-border bg-background text-xs font-medium text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-1 col-span-2 sm:col-span-1">
                  <label className="text-xs font-bold text-foreground">Max Redemptions</label>
                  <input
                    type="number"
                    min="1"
                    placeholder="Unlimited if empty"
                    value={createForm.maxRedemptions}
                    onChange={(e) => setCreateForm({ ...createForm, maxRedemptions: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-border bg-background text-xs font-medium text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-foreground">Expiry Date (Optional)</label>
                <input
                  type="date"
                  value={createForm.expiryDate}
                  onChange={(e) => setCreateForm({ ...createForm, expiryDate: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-border bg-background text-xs font-medium text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-foreground">Campaign Description</label>
                <input
                  type="text"
                  placeholder="e.g. Festive launch discount for Class 10/12 students"
                  value={createForm.description}
                  onChange={(e) => setCreateForm({ ...createForm, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-border bg-background text-xs font-medium text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Partner Details Accordion Box */}
              <div className="p-3.5 rounded-xl border border-border bg-muted/20 space-y-3">
                <span className="text-[11px] font-bold text-primary uppercase block">
                  Partner / Affiliate Metadata (Optional)
                </span>

                <div className="grid grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    placeholder="Partner Full Name"
                    value={createForm.partnerName}
                    onChange={(e) => setCreateForm({ ...createForm, partnerName: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg border border-border bg-background text-xs"
                  />
                  <input
                    type="email"
                    placeholder="Partner Email"
                    value={createForm.partnerEmail}
                    onChange={(e) => setCreateForm({ ...createForm, partnerEmail: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg border border-border bg-background text-xs"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Partner Payout UPI ID (e.g. partner@upi)"
                  value={createForm.partnerPayoutUpi}
                  onChange={(e) => setCreateForm({ ...createForm, partnerPayoutUpi: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg border border-border bg-background text-xs font-mono"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setCreateModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={creating}
                  className="px-5 py-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold transition-all shadow-xs flex items-center gap-2 disabled:opacity-50"
                >
                  {creating && <RefreshCw className="h-3.5 w-3.5 animate-spin" />}
                  <span>Create Coupon</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── SETTLE PAYOUT MODAL ──────────────────────────────────────────── */}
      {settleModalOpen && selectedLedgerItem && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-card border border-border rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">Confirm Commission Settlement</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Record UPI payout to affiliate partner
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-border bg-muted/30 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground font-semibold">Partner:</span>
                <span className="font-bold text-foreground">{selectedLedgerItem.partnerName}</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground font-semibold">Payout UPI:</span>
                <span className="font-bold font-mono text-primary">
                  {selectedLedgerItem.partnerPayoutUpi || selectedLedgerItem.partnerEmail || 'Not specified'}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground font-semibold">Sale Amount:</span>
                <span className="text-foreground">₹{selectedLedgerItem.saleAmount}</span>
              </div>

              <div className="border-t border-border/60 pt-2 flex items-center justify-between">
                <span className="text-xs font-bold text-foreground">Net Payable (Post TDS):</span>
                <span className="text-lg font-black text-emerald-500">
                  ₹{Number(selectedLedgerItem.netPayable).toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <form onSubmit={handleSettlePayout} className="space-y-3 pt-1">
              <div className="space-y-1">
                <label className="text-xs font-bold text-foreground">
                  UPI UTR / Bank Reference Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 428919284192 (from GPay/PhonePe/Bank)"
                  value={payoutRefInput}
                  onChange={(e) => setPayoutRefInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-border bg-background text-xs font-mono font-medium text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-foreground">
                  Admin Settlement Notes (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Paid via GPay business account"
                  value={payoutNotesInput}
                  onChange={(e) => setPayoutNotesInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-border bg-background text-xs font-medium text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSettleModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={settling}
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-2 disabled:opacity-50"
                >
                  {settling && <RefreshCw className="h-3.5 w-3.5 animate-spin" />}
                  <span>Mark Settled</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
