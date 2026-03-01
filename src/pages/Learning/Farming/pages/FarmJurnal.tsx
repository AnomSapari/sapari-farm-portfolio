import { useState, useEffect, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface Journal {
  id: number;
  date: string;
  type: string;
  feed: number;
  mortality: number;
  note: string;
}

export default function FarmJurnal() {
  // ================= STATE =================
  const [journals, setJournals] = useState<Journal[]>(() => {
    const saved = localStorage.getItem("farmJournals");
    return saved ? JSON.parse(saved) : [];
  });

  const today = new Date().toISOString().split("T")[0];

  const [date, setDate] = useState<string>(today);
  const [type, setType] = useState<string>("KUB");
  const [feed, setFeed] = useState<number>(0);
  const [mortality, setMortality] = useState<number>(0);
  const [note, setNote] = useState<string>("");

  const [editId, setEditId] = useState<number | null>(null);

  // ================= SAVE TO LOCAL STORAGE =================
  useEffect(() => {
    localStorage.setItem("farmJournals", JSON.stringify(journals));
  }, [journals]);

  // ================= RESET FORM =================
  const resetForm = () => {
    setDate(today);
    setType("KUB");
    setFeed(0);
    setMortality(0);
    setNote("");
    setEditId(null);
  };

  // ================= SUBMIT =================
  const handleSubmit = () => {
    if (!date) return;

    if (editId !== null) {
      // UPDATE
      setJournals((prev) =>
        prev.map((j) =>
          j.id === editId ? { id: editId, date, type, feed, mortality, note } : j
        )
      );
    } else {
      // ADD
      const newJournal: Journal = {
        id: Date.now(),
        date,
        type,
        feed,
        mortality,
        note,
      };

      setJournals((prev) => [...prev, newJournal]);
    }

    resetForm();
  };

  // ================= EDIT =================
  const handleEdit = (journal: Journal) => {
    setEditId(journal.id);
    setDate(journal.date);
    setType(journal.type);
    setFeed(journal.feed);
    setMortality(journal.mortality);
    setNote(journal.note);
  };

  // ================= DELETE =================
  const handleDelete = (id: number) => {
    if (!confirm("Yakin ingin menghapus data?")) return;
    setJournals((prev) => prev.filter((j) => j.id !== id));
  };

  // ================= STATISTICS =================
  const stats = useMemo(() => {
    const totalFeed = journals.reduce((sum, j) => sum + j.feed, 0);
    const totalMortality = journals.reduce((sum, j) => sum + j.mortality, 0);

    return { totalFeed, totalMortality };
  }, [journals]);

  // ================= CHART DATA =================
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

  // ================= RETURN UI =================
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          🐔 Farm Monitoring Dashboard
        </h1>
        <p className="text-gray-500">
          Sistem Monitoring Pakan & Kematian Ayam
        </p>
      </div>

      {/* STATISTICS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Total Data</p>
          <h2 className="text-3xl font-bold">{journals.length}</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Total Pakan</p>
          <h2 className="text-3xl font-bold text-green-600">
            {stats.totalFeed} kg
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Total Kematian</p>
          <h2 className="text-3xl font-bold text-red-600">
            {stats.totalMortality} ekor
          </h2>
        </div>
      </div>

      {/* GRAFIK */}
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

      {/* FORM & TABLE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* FORM */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">
            {editId !== null ? "Edit Jurnal" : "Tambah Jurnal"}
          </h2>

          <div className="space-y-3">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border rounded"
            />

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="KUB">KUB</option>
              <option value="Petelur">Petelur</option>
              <option value="Pelung">Pelung</option>
            </select>

            <input
              type="number"
              value={feed}
              onChange={(e) => setFeed(Number(e.target.value))}
              className="w-full p-2 border rounded"
              placeholder="Pakan (kg)"
            />

            <input
              type="number"
              value={mortality}
              onChange={(e) => setMortality(Number(e.target.value))}
              className="w-full p-2 border rounded"
              placeholder="Mati (ekor)"
            />

            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Catatan"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 text-white py-2 rounded"
            >
              {editId !== null ? "Update Data" : "Simpan Data"}
            </button>

            {editId !== null && (
              <button
                onClick={resetForm}
                className="w-full bg-gray-500 text-white py-2 rounded"
              >
                Batal Edit
              </button>
            )}
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white p-6 rounded-2xl shadow lg:col-span-2 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Tanggal</th>
                <th className="p-2">Jenis</th>
                <th className="p-2">Pakan</th>
                <th className="p-2">Mati</th>
                <th className="p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {journals.map((item) => (
                <tr key={item.id} className="border-b text-center">
                  <td className="p-2">{item.date}</td>
                  <td className="p-2">{item.type}</td>
                  <td className="p-2">{item.feed}</td>
                  <td className="p-2">{item.mortality}</td>
                  <td className="p-2 space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-600 text-white px-2 py-1 rounded text-xs"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}