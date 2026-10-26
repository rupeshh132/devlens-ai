import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Users, BookOpen, Clock, 
  FileCheck, UploadCloud, Trophy, ArrowLeft, 
  Menu, X, Bell, FileSpreadsheet, Video, CreditCard, FolderTree, HelpCircle, Bot, Tag, Code2
} from 'lucide-react';
import { AdminNotificationsDrawer } from '@/components/admin/AdminNotificationsDrawer';

export function AdminLayout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  
  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Students & CRM', path: '/admin/students', icon: Users },
    { name: 'Platform Developers', path: '/admin/users', icon: Code2 },
    { name: 'Billing & Revenue', path: '/admin/billing', icon: CreditCard },
    { name: 'Coupons & Affiliates', path: '/admin/affiliates', icon: Tag },
    { name: 'Developer Tracks', path: '/admin/courses', icon: BookOpen },
    { name: 'Capstone Submissions', path: '/admin/submissions', icon: Clock },
    { name: 'Content Status Matrix', path: '/admin/learn/status', icon: FileCheck },
    { name: 'Curriculum Builder', path: '/admin/learn/curriculum', icon: FolderTree },
    { name: 'Question Bank', path: '/admin/learn/questions', icon: HelpCircle },
    { name: 'Curate Videos & Notes', path: '/admin/learn/upload', icon: Video },
    { name: 'Bulk Question Import', path: '/admin/learn/import', icon: UploadCloud },
    { name: 'PYQ & Papers Vault', path: '/admin/learn/pyq', icon: FileSpreadsheet },
    { name: 'AI Doubt Telemetry', path: '/admin/ai', icon: Bot },
    { name: 'Leaderboard & Rewards', path: '/admin/gamification', icon: Trophy },
  ];

  // Auto-close mobile drawer when location/route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const renderNavLinks = (isMobile = false) => (
    <nav className="space-y-1.5">
      {navItems.map(item => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path || 
          (item.path === '/admin/courses' && location.pathname.startsWith('/admin/courses')) ||
          (item.path === '/admin/users' && (location.pathname === '/admin/users' || location.pathname === '/admin/developers'));
        return (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => isMobile && setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              isActive 
                ? 'bg-primary text-primary-foreground shadow-xs font-bold' 
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            <Icon className="h-4 w-4 shrink-0" />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background">
      
      {/* ─── Mobile Sticky Topbar (Screen < 768px) ─────────────────────────── */}
      <header className="sticky top-0 z-40 flex md:hidden items-center justify-between border-b border-border bg-card/95 backdrop-blur-md px-4 py-3 shadow-2xs">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-black text-base shadow-xs">
            ⚡
          </div>
          <div>
            <h2 className="text-sm font-bold text-foreground tracking-tight leading-none">DevLens Admin</h2>
            <p className="text-[10px] text-muted-foreground mt-0.5">Developer Academy & CRM</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile Bell Button */}
          <button
            onClick={() => setNotificationsOpen(true)}
            className="relative p-2 rounded-xl border border-border bg-muted/50 text-foreground hover:bg-muted transition-colors focus:outline-hidden"
            aria-label="Open notifications drawer"
          >
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 h-4 min-w-[16px] px-1 rounded-full bg-rose-500 text-white text-[10px] font-black flex items-center justify-center animate-pulse shadow-xs">
                {unreadCount > 9 ? '9+' : unreadCount}
              </span>
            )}
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="p-2 rounded-xl border border-border bg-muted/50 text-foreground hover:bg-muted transition-colors focus:outline-hidden focus:ring-2 focus:ring-primary/20"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {/* ─── Mobile Sliding Drawer & Backdrop (Screen < 768px) ─────────────── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden animate-in fade-in duration-200">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <aside className="fixed inset-y-0 left-0 w-72 max-w-[85vw] bg-card border-r border-border shadow-2xl flex flex-col z-50 animate-in slide-in-from-left duration-250 overflow-hidden">
            {/* Drawer Header (Fixed) */}
            <div className="p-4 border-b border-border shrink-0 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-black text-base">
                  ⚡
                </div>
                <div>
                  <h2 className="text-sm font-bold text-foreground tracking-tight leading-none">DevLens Admin</h2>
                  <p className="text-[10px] text-muted-foreground mt-0.5">Management Portal</p>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable Navigation Area */}
            <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border hover:[&::-webkit-scrollbar-thumb]:bg-muted-foreground/30 [&::-webkit-scrollbar-thumb]:rounded-full">
              {renderNavLinks(true)}
            </div>

            {/* Drawer Footer (Fixed) */}
            <div className="p-4 border-t border-border/80 shrink-0 bg-card">
              <Link 
                to="/dashboard" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Back to DevLens App
              </Link>
            </div>
          </aside>
        </div>
      )}

      {/* ─── Desktop Permanent Sidebar (Screen >= 768px) ────────────────────── */}
      <aside className="w-64 border-r border-border bg-card hidden md:flex flex-col shrink-0 sticky top-0 h-screen overflow-hidden">
        {/* Fixed Header */}
        <div className="p-4 pb-3 border-b border-border/40 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-black text-lg shadow-xs">
                ⚡
              </div>
              <div>
                <h2 className="text-base font-bold text-foreground tracking-tight leading-none">DevLens Admin</h2>
                <p className="text-[11px] text-muted-foreground mt-0.5">Developer Academy & CRM</p>
              </div>
            </div>

            {/* Desktop Bell Shortcut */}
            <button
              onClick={() => setNotificationsOpen(true)}
              className="relative p-2 rounded-xl border border-border bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus:outline-hidden"
              title="Action Center & Notifications"
              aria-label="Open notifications drawer"
            >
              <Bell className="h-4 w-4" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 min-w-[16px] px-1 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center animate-pulse shadow-xs">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Scrollable Nav Items */}
        <div className="flex-1 min-h-0 overflow-y-auto p-3 space-y-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border hover:[&::-webkit-scrollbar-thumb]:bg-muted-foreground/30 [&::-webkit-scrollbar-thumb]:rounded-full">
          {renderNavLinks(false)}
        </div>

        {/* Fixed Footer */}
        <div className="p-3 border-t border-border/60 shrink-0 bg-card">
          <Link 
            to="/dashboard" 
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to DevLens App
          </Link>
        </div>
      </aside>

      {/* ─── Main Content Area ──────────────────────────────────────────────── */}
      <main className="flex-1 overflow-auto p-4 sm:p-6 md:p-8">
        <Outlet />
      </main>

      {/* ─── Real-Time Notifications Slide-over Drawer ──────────────────────── */}
      <AdminNotificationsDrawer 
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
        onCountChange={(count) => setUnreadCount(count)}
      />

    </div>
  );
}
