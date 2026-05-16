import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";
import { PriceVolumeChart } from "@/components/charts/price-volume-chart";
import { stocks } from "@/lib/mock-data";

export default async function StockPage({ params }: { params: Promise<{ symbol: string }> }) {
  const { symbol } = await params;
  const stock = stocks.find((s) => s.symbol === symbol.toUpperCase());
  if (!stock) return notFound();
  const risk = (stock.price * 0.03).toFixed(2);
  const reward = (stock.price * 0.07).toFixed(2);
  return <AppShell><div className="space-y-4"><Card className="p-4"><h1 className="text-2xl font-bold">{stock.name} ({stock.symbol})</h1><p className="text-sm text-muted">Fiyat: {stock.price} ₺</p></Card><Card className="p-4"><PriceVolumeChart data={stock.series} /></Card><Card className="grid gap-3 p-4 md:grid-cols-3"><p>EMA20: {stock.ema20}</p><p>EMA50: {stock.ema50}</p><p>EMA200: {stock.ema200}</p><p>RSI: {stock.rsi}</p><p>MACD: {(stock.ema20-stock.ema50).toFixed(2)}</p><p>Destek/Direnç: {(stock.price*0.96).toFixed(2)} / {(stock.price*1.06).toFixed(2)}</p></Card><Card className="p-4"><h2 className="mb-2 font-semibold">Risk/Ödül</h2><p>Risk: {risk} ₺</p><p>Ödül: {reward} ₺</p><p>Oran: 1:{(Number(reward)/Number(risk)).toFixed(2)}</p></Card></div></AppShell>;
}
