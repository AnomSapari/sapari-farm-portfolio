// src/components/FarmDashboardFinal.tsx
"use client";

import { useState, useEffect, useMemo } from "react";
import * as XLSX from "xlsx";
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
  batch: string;
  date: string;
  feed: number;
  mortality: number;
  note: string;
}

export default function FarmDashboardFinal() {
  // ================= STATE =================
  const [journals, setJournals] = useState<Journal[]>(() => {
    const saved = localStorage.getItem("farmJournals");
    return saved ? JSON.parse(saved) : [];
  });

  const today = new Date().toISOString().split("T")[0];

  const [batch, setBatch] = useState<string>("KUB001");
  const [date, setDate] = useState<string>(today);
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
    setBatch("KUB001");
    setDate(today);
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
          j.id === editId
            ? { id: editId, batch, date, feed, mortality, note }
            : j
        )
      );
    } else {
      // ADD
      const newJournal: Journal = {
        id: Date.now(),
        batch,
        date,
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
    setBatch(journal.batch);
    setDate(journal.date);
    setFeed(journal.feed);
    setMortality(journal.mortality);
    setNote(journal.note);
  };

  // ================= DELETE =================
  const handleDelete = (id: number) => {
    if (!confirm("Yakin ingin menghapus data?")) return;
    setJournals((prev) => prev.filter((j) => j.id !== id));
  };

  // ================= IMPORT EXCEL/CSV =================
  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const data = evt.target?.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows: any[] = XLSX.utils.sheet_to_json(firstSheet);

      const newJournals: Journal[] = rows.map((row) => ({
        id: Date.now() + Math.random(),
        batch: row.batch,
        date: row.date,
        feed: Number(row.feed),
        mortality: Number(row.mortality),
        note: row.note || "",
      }));

      setJournals((prev) => [...prev, ...newJournals]);
    };
    reader.readAsBinaryString(file);
  };

  // ================= STATISTICS =================
  const stats = useMemo(() => {
    const totalFeed = journals.reduce((sum, j) => sum + j.feed, 0);
    const totalMortality = journals.reduce((sum, j) => sum + j.mortality, 0);
    return { totalFeed, totalMortality };
  }, [journals]);

  // ================= CHART DATA =================
  const chartData = useMemo(() => {
    const batches = Array.from(new Set(journals.map((j) => j.batch)));
    return batches.map((b) => {
      const filtered = journals.filter((j) => j.batch === b);
      return {
        name: b,
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
        <p className="text-gray-500">Sistem Monitoring Pakan & Kematian Ayam</p>
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

      {/* FORM & IMPORT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">
            {editId !== null ? "Edit Jurnal" : "Tambah Jurnal"}
          </h2>

          {/* IMPORT FILE */}
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Import CSV/Excel:</label>
            <input
              type="file"
              accept=".csv, .xlsx, .xls"
              onChange={handleImportFile}
              className="border p-2 rounded w-full"
            />
          </div>

          {/* FORM */}
          <div className="space-y-3">
            <input
              type="text"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Batch (contoh: KUB001)"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border rounded"
            />
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
                className="w-full bg-gray-500 text-white py-2 rounded mt-2"
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
                <th className="p-2">Batch</th>
                <th className="p-2">Tanggal</th>
                <th className="p-2">Pakan (kg)</th>
                <th className="p-2">Mati</th>
                <th className="p-2">Catatan</th>
                <th className="p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {journals.map((item) => (
                <tr key={item.id} className="border-b text-center">
                  <td className="p-2">{item.batch}</td>
                  <td className="p-2">{item.date}</td>
                  <td className="p-2">{item.feed}</td>
                  <td className="p-2">{item.mortality}</td>
                  <td className="p-2">{item.note}</td>
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