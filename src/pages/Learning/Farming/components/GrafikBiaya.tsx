import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { CatatanTernak } from "../types/catatan";

export default function GrafikBiaya({ data }: { data: CatatanTernak[] }) {
  const chartData = data.map((d) => ({
    tanggal: d.tanggal,
    biaya: d.pakan.harga + (d.kesehatan.biayaObat || 0),
  }));

  return (
    <div className="h-64 bg-gray-900 p-4 rounded">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <XAxis dataKey="tanggal" />
          <YAxis />
          <Tooltip />
          <Line dataKey="biaya" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
