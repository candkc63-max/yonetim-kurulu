import Link from "next/link";
import { Card } from "@/components/ui/card";
import { MiniLineChart } from "@/components/charts/mini-line-chart";
import { stocks, xu100 } from "@/lib/mock-data";

export function DashboardView() {
  const gainers = [...stocks].sort((a, b) => b.changePct - a.changePct).slice(0, 3);
  const losers = [...stocks].sort((a, b) => a.changePct - b.changePct).slice(0, 3);

  return (
    <main className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <Card className="p-4 xl:col-span-2">
        <p className="text-sm text-muted">XU100</p>
        <h2 className="mt-2 text-3xl font-bold">{xu100.level.toLocaleString("tr-TR")}</h2>
        <p className="text-primary">%{xu100.changePct.toFixed(2)}</p>
      </Card>
      <Card className="p-4">
        <p className="text-sm text-muted">Hacim Artışı</p>
        <h3 className="mt-2 text-xl font-semibold">{stocks[3].symbol}</h3>
        <p className="text-sm text-primary">+%{stocks[3].volumeChangePct}</p>
      </Card>
      <Card className="p-4">
        <p className="text-sm text-muted">EMA20/50 Sinyali</p>
        <h3 className="mt-2 text-xl font-semibold">{stocks.filter((s) => s.ema20 > s.ema50).length} Hisse</h3>
      </Card>
      <Card className="p-4">
        <h3 className="mb-3 text-sm text-muted">Yükselenler</h3>
        {gainers.map((s) => <p key={s.symbol} className="text-sm">{s.symbol} <span className="text-primary">%{s.changePct}</span></p>)}
      </Card>
      <Card className="p-4">
        <h3 className="mb-3 text-sm text-muted">Düşenler</h3>
        {losers.map((s) => <p key={s.symbol} className="text-sm">{s.symbol} <span className="text-red-400">%{s.changePct}</span></p>)}
      </Card>
      <Card className="p-4 xl:col-span-2">
        <h3 className="mb-3 text-sm text-muted">Favori Hisseler</h3>
        <div className="grid gap-3 md:grid-cols-2">
          {stocks.map((s) => (
            <Link href={`/hisse/${s.symbol}`} key={s.symbol} className="rounded-xl border border-border p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="font-medium">{s.symbol}</p><p className={s.changePct > 0 ? "text-primary" : "text-red-400"}>%{s.changePct}</p>
              </div>
              <MiniLineChart data={s.series} positive={s.changePct > 0} />
            </Link>
          ))}
        </div>
      </Card>
    </main>
  );
}
