export type Stock = {
  symbol: string;
  name: string;
  price: number;
  changePct: number;
  volumeChangePct: number;
  rsi: number;
  ema20: number;
  ema50: number;
  ema200: number;
  goldenCross: boolean;
  series: { time: string; value: number; volume: number }[];
};
