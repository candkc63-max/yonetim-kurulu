import Link from "next/link";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto min-h-screen max-w-7xl p-4 md:p-6">
      <header className="mb-6 flex items-center justify-between">
        <Link href="/dashboard" className="text-lg font-semibold">BIST Pulse</Link>
        <nav className="flex gap-4 text-sm text-muted">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/screener">Screener</Link>
        </nav>
      </header>
      {children}
    </div>
  );
}
