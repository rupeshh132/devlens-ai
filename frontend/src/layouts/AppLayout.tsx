import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="h-[72px] sticky top-0 z-50 backdrop-blur border-b border-border flex items-center px-6">
        <h1 className="text-xl font-bold">DevLens AI</h1>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-[280px] hidden lg:block border-r border-border p-6">
          <nav>Sidebar Placeholder</nav>
        </aside>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
