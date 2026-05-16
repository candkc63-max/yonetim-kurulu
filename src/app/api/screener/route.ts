import { NextRequest, NextResponse } from "next/server";
import { stocks } from "@/lib/mock-data";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const data = stocks.filter((s) =>
    (!params.get("ema") || s.ema20 > s.ema50) &&
    (!params.get("volume") || s.volumeChangePct >= 50) &&
    (!params.get("rsi") || s.rsi > 50) &&
    (!params.get("golden") || s.goldenCross) &&
    (!params.get("ema200") || s.price > s.ema200)
  );
  return NextResponse.json(data);
}
