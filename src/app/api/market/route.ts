import { NextResponse } from "next/server";
import { stocks, xu100 } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({ xu100, stocks });
}
