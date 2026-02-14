import { useEffect, useState } from "react";
import FarmingSubNav from "../components/FarmingSubNav";
import FarmChart from "../FarmChart";
import { exportCSV } from "@/utils/exportCsv";
import type { JurnalPakan } from "@/types/jurnal";

export default function FarmDashboard() {
  const [list, setList] = useState<JurnalPakan[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("jurnalPakan");
    if (saved) {
      setList(JSON.parse(saved) as JurnalPakan[]);
    }
  }, []);

  const totalAyam = list.reduce(
    (sum, item) => sum + item.jumlahAyam,
    0
  );

  const totalPakan = list.reduce(
    (sum, item) => sum + item.pakanKg,
    0
  );

  return (
    <div className="space-y-6">
      <FarmingSubNav />

      <div>
        <h1 className="text-2xl font-bold">Dashboard Farming</h1>
        <p className="text-gray-400 text-sm">
          Ringkasan aktivitas peternakan
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <StatCard label="Total Ayam" value={totalAyam} />
        <StatCard label="Total Pakan (kg)" value={totalPakan} />
        <StatCard label="Total Hari" value={list.length} />
      </div>

      {list.length > 0 && <FarmChart data={list} />}

      <div className="flex justify-end">
        <button
          onClick={() => exportCSV(list)}
          className="bg-emerald-500 hover:bg-emerald-400
          text-black px-4 py-2 rounded-lg font-medium"
        >
          Export CSV
        </button>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
