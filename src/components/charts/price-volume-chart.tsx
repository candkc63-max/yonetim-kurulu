"use client";
import { CartesianGrid, ComposedChart, Bar, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function PriceVolumeChart({ data }: { data: { time: string; value: number; volume: number }[] }) {
  return <div className="h-72 w-full"><ResponsiveContainer><ComposedChart data={data}><CartesianGrid stroke="#2a2a2a" /><XAxis dataKey="time" /><YAxis yAxisId="left" /><YAxis yAxisId="right" orientation="right" /><Tooltip /><Bar yAxisId="right" dataKey="volume" fill="#334155" /><Line yAxisId="left" dataKey="value" stroke="#22c55e" strokeWidth={2} dot={false} /></ComposedChart></ResponsiveContainer></div>;
}
