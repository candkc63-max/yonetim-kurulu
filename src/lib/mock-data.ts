import { Stock } from "@/types/market";

const baseSeries = [
  ["10:00", 102], ["11:00", 103], ["12:00", 101], ["13:00", 104], ["14:00", 106], ["15:00", 107]
];

const mk = (symbol: string, name: string, price: number, c: number, v: number, rsi: number, e20: number, e50: number, e200: number, goldenCross: boolean): Stock => ({
  symbol, name, price, changePct: c, volumeChangePct: v, rsi, ema20: e20, ema50: e50, ema200: e200, goldenCross,
  series: baseSeries.map(([time, value], i) => ({ time: String(time), value: Number(value) + i + price / 100, volume: 50000 + i * 3500 }))
});

export const stocks: Stock[] = [
  mk("THYAO", "Türk Hava Yolları", 324.5, 2.9, 64, 58, 320, 312, 288, true),
  mk("ASELS", "Aselsan", 87.2, -1.2, 52, 49, 86, 84, 79, false),
  mk("BIMAS", "BİM", 541.3, 1.1, 71, 56, 530, 521, 500, true),
  mk("GARAN", "Garanti BBVA", 122.4, 3.4, 83, 62, 118, 115, 108, true)
];

export const xu100 = { level: 11234.22, changePct: 1.48 };
