import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { JurnalPakan } from "./types";

export default function FarmChart({ data }: { data: JurnalPakan[] }) {
  return (
    <div className="h-64 bg-white/5 border border-white/10 rounded-xl p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={[...data].reverse()}>
          <XAxis dataKey="tanggal" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="pakan"
            stroke="#34d399"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
