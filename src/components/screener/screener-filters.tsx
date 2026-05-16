"use client";
import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { stocks } from "@/lib/mock-data";

export function ScreenerFilters() {
  const [ema, setEma] = useState(true);
  const [volume, setVolume] = useState(false);
  const [rsi, setRsi] = useState(false);
  const [golden, setGolden] = useState(false);
  const [ema200, setEma200] = useState(false);

  const results = useMemo(() => stocks.filter((s) => (!ema || s.ema20 > s.ema50) && (!volume || s.volumeChangePct >= 50) && (!rsi || s.rsi > 50) && (!golden || s.goldenCross) && (!ema200 || s.price > s.ema200)), [ema, volume, rsi, golden, ema200]);

  return <div className="space-y-4"><Card className="p-4"><div className="grid gap-2 text-sm md:grid-cols-2">{[[ema,setEma,"EMA20 > EMA50"],[volume,setVolume,"Hacim artışı %50+"],[rsi,setRsi,"RSI 50 üstü"],[golden,setGolden,"Golden cross"],[ema200,setEma200,"Fiyat EMA200 üstünde"]].map(([v,set,t]) => <label key={String(t)} className="flex items-center gap-2"><input type="checkbox" checked={v as boolean} onChange={(e)=> (set as (a:boolean)=>void)(e.target.checked)} /> {t as string}</label>)}</div></Card><Card className="p-4"><p className="mb-3 text-sm text-muted">Sonuçlar ({results.length})</p><div className="space-y-2">{results.map((s)=><div key={s.symbol} className="flex justify-between rounded-lg border border-border p-2"><span>{s.symbol}</span><span className="text-primary">%{s.changePct}</span></div>)}</div></Card></div>;
}
