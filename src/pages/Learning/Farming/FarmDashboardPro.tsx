// src/pages/farming/FarmDashboardPro.tsx
import { useState, useEffect, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

interface Journal {
  id: number;
  date: string;
  type: string;
  feed: number;
  mortality: number;
  note: string;
}

export default function FarmDashboardPro() {
  const [journals, setJournals] = useState<Journal[]>(() => {
    const saved = localStorage.getItem("farmJournals");
    return saved ? JSON.parse(saved) : [];
  });

  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [type, setType] = useState("KUB");
  const [feed, setFeed] = useState(0);
  const [mortality, setMortality] = useState(0);
  const [note, setNote] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("farmJournals", JSON.stringify(journals));
  }, [journals]);

  const resetForm = () => {
    setDate(today);
    setType("KUB");
    setFeed(0);
    setMortality(0);
    setNote("");
    setEditId(null);
  };

  const handleSubmit = () => {
    if (!date) return;
    const newJournal: Journal = { id: editId ?? Date.now(), date, type, feed, mortality, note };
    setJournals((prev) =>
      editId !== null ? prev.map((j) => (j.id === editId ? newJournal : j)) : [...prev, newJournal]
    );
    resetForm();
  };

  const handleEdit = (journal: Journal) => {
    setEditId(journal.id);
    setDate(journal.date);
    setType(journal.type);
    setFeed(journal.feed);
    setMortality(journal.mortality);
    setNote(journal.note);
  };

  const handleDelete = (id: number) => {
    if (!confirm("Yakin ingin menghapus data?")) return;
    setJournals((prev) => prev.filter((j) => j.id !== id));
  };

  const stats = useMemo(() => {
    const totalFeed = journals.reduce((sum, j) => sum + j.feed, 0);
    const totalMortality = journals.reduce((sum, j) => sum + j.mortality, 0);
    return { totalFeed, totalMortality };
  }, [journals]);

  const chartData = useMemo(() => {
    const types = ["KUB", "Petelur", "Pelung"];
    return types.map((t) => {
      const filtered = journals.filter((j) => j.type === t);
      return {
        name: t,
        pakan: filtered.reduce((sum, j) => sum + j.feed, 0),
        mati: filtered.reduce((sum, j) => sum + j.mortality, 0),
      };
    });
  }, [journals]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">🐔 Farm Dashboard Pro</h1>
        <p className="text-gray-500">Monitoring Pakan & Kematian Ayam</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Total Data</p>
          <h2 className="text-3xl font-bold">{journals.length}</h2>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Total Pakan</p>
          <h2 className="text-3xl font-bold text-green-600">{stats.totalFeed} kg</h2>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Total Kematian</p>
          <h2 className="text-3xl font-bold text-red-600">{stats.totalMortality} ekor</h2>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pakan" fill="#16a34a" />
            <Bar dataKey="mati" fill="#dc2626" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}