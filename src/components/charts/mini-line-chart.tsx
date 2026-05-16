"use client";
import { Line, LineChart, ResponsiveContainer } from "recharts";

export function MiniLineChart({ data, positive }: { data: { value: number }[]; positive: boolean }) {
  return (
    <div className="h-16 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="value" stroke={positive ? "#16a34a" : "#ef4444"} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
