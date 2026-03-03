import { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface Journal {
  id: number;
  date: string;
  feed: number;
  mortality: number;
}

export default function FarmDashboard() {
  const [journals] = useState<Journal[]>(() => {
    const saved = localStorage.getItem("farmJournals");
    return saved ? JSON.parse(saved) : [];
  });

  const pricePerKg = 12000;

  const stats = useMemo(() => {
    const totalFeed = journals.reduce((sum, j) => sum + j.feed, 0);
    const totalMortality = journals.reduce((sum, j) => sum + j.mortality, 0);

    const totalCost = totalFeed * pricePerKg;

    return {
      totalFeed,
      totalMortality,
      totalCost,
      totalData: journals.length,
    };
  }, [journals]);

  const chartData = journals.map((j) => ({
    date: j.date,
    pakan: j.feed,
  }));

  return (
    <div className="space-y-6">

      {/* STAT CARD */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="bg-gray-900 p-5 rounded-xl border border-white/10">
          <p className="text-gray-400 text-sm">Total Data</p>
          <h2 className="text-2xl font-bold">{stats.totalData}</h2>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl border border-white/10">
          <p className="text-gray-400 text-sm">Total Pakan</p>
          <h2 className="text-2xl font-bold text-green-400">
            {stats.totalFeed} kg
          </h2>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl border border-white/10">
          <p className="text-gray-400 text-sm">Ayam Mati</p>
          <h2 className="text-2xl font-bold text-red-400">
            {stats.totalMortality}
          </h2>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl border border-white/10">
          <p className="text-gray-400 text-sm">Biaya Pakan</p>
          <h2 className="text-2xl font-bold text-yellow-400">
            Rp {stats.totalCost.toLocaleString()}
          </h2>
        </div>

      </div>

      {/* GRAFIK */}
      <div className="bg-gray-900 p-6 rounded-xl border border-white/10">
        <h2 className="text-lg font-semibold mb-4">
          Grafik Konsumsi Pakan
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="date" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip />
            <Bar dataKey="pakan" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}