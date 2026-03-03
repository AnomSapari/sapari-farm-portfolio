"use client";

import { useState, useEffect, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Journal {
  id: number;
  date: string;
  type: string;
  feed: number;
  price: number;
  mortality: number;
  weight: number;
  note: string;
}

export default function FarmJournal() {
  const [journals, setJournals] = useState<Journal[]>([]);

  const [date, setDate] = useState("");
  const [type, setType] = useState("starter");
  const [feed, setFeed] = useState<number>(0);
  const [price, setPrice] = useState<number>(12000);
  const [mortality, setMortality] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [note, setNote] = useState("");

  const [population] = useState<number>(100);

  useEffect(() => {
    const data = localStorage.getItem("farm-journal");
    if (data) setJournals(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("farm-journal", JSON.stringify(journals));
  }, [journals]);

  const addJournal = () => {
    if (!date) {
      alert("Pilih tanggal terlebih dahulu");
      return;
    }

    const newData: Journal = {
      id: Date.now(),
      date,
      type,
      feed,
      price,
      mortality,
      weight,
      note,
    };

    setJournals([...journals, newData]);

    setFeed(0);
    setMortality(0);
    setWeight(0);
    setNote("");
  };

  const deleteData = (id: number) => {
    if (!confirm("Hapus data ini?")) return;
    setJournals(journals.filter((j) => j.id !== id));
  };

  const stats = useMemo(() => {
    const totalFeed = journals.reduce((a, b) => a + b.feed, 0);

    const totalCost = journals.reduce((a, b) => a + b.feed * b.price, 0);

    const totalMortality = journals.reduce((a, b) => a + b.mortality, 0);

    const alive = population - totalMortality;

    const avgWeight =
      journals.length > 0 ? journals[journals.length - 1].weight : 0;

    const totalWeight = alive * avgWeight;

    const fcr = totalWeight > 0 ? totalFeed / totalWeight : 0;

    const costPerChicken = alive > 0 ? totalCost / alive : 0;

    return {
      totalFeed,
      totalCost,
      totalMortality,
      alive,
      costPerChicken,
      avgWeight,
      fcr,
    };
  }, [journals, population]);

  return (
    <div className="p-6 md:p-10 space-y-8 bg-black min-h-screen text-white">

      <h1 className="text-3xl font-bold">
        🐔 Farm Journal Dashboard
      </h1>

      {/* STAT CARD */}

      <div className="grid md:grid-cols-5 gap-4">

        <Stat title="Total Pakan" value={`${stats.totalFeed} kg`} />

        <Stat
          title="Total Biaya"
          value={`Rp ${stats.totalCost.toLocaleString()}`}
        />

        <Stat title="Ayam Hidup" value={stats.alive} />

        <Stat
          title="Biaya / Ekor"
          value={`Rp ${Math.round(stats.costPerChicken).toLocaleString()}`}
        />

        <Stat title="FCR" value={stats.fcr.toFixed(2)} />

      </div>

      {/* FORM */}

      <div className="bg-zinc-900 p-6 rounded-xl space-y-4">

        <h2 className="text-xl font-bold">
          Input Data Harian
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          <Input label="Tanggal">
            <input
              type="date"
              className="input"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Input>

          <Input label="Jenis Pakan">
            <select
              className="input"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>starter</option>
              <option>grower</option>
              <option>finisher</option>
            </select>
          </Input>

          <Input label="Pakan (kg)">
            <input
              type="number"
              className="input"
              value={feed}
              onChange={(e) => setFeed(Number(e.target.value))}
            />
          </Input>

          <Input label="Harga / kg">
            <input
              type="number"
              className="input"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </Input>

          <Input label="Ayam Mati">
            <input
              type="number"
              className="input"
              value={mortality}
              onChange={(e) => setMortality(Number(e.target.value))}
            />
          </Input>

          <Input label="Berat rata-rata (kg)">
            <input
              type="number"
              className="input"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
          </Input>

          <Input label="Catatan">
            <input
              className="input"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </Input>

        </div>

        <button
          onClick={addJournal}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-semibold"
        >
          Simpan Data
        </button>

      </div>

      {/* CHART */}

      <div className="bg-zinc-900 p-6 rounded-xl">

        <h2 className="font-bold mb-4">
          Grafik Konsumsi Pakan
        </h2>

        <div className="w-full h-[300px]">

          <ResponsiveContainer>
            <LineChart data={journals}>
              <XAxis dataKey="date" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="feed"
                stroke="#22c55e"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>

        </div>

      </div>

      {/* TABLE */}

      <div className="bg-zinc-900 p-6 rounded-xl overflow-auto">

        <h2 className="font-bold mb-4">
          Riwayat Jurnal
        </h2>

        <table className="w-full text-sm">

          <thead className="text-zinc-400">
            <tr>
              <th>Tanggal</th>
              <th>Pakan</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Mati</th>
              <th>Biaya</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>

            {journals.map((j) => (

              <tr key={j.id} className="border-t border-zinc-800">

                <td>{j.date}</td>

                <td>{j.feed} kg</td>

                <td>Rp {j.price.toLocaleString()}</td>

                <td>{j.weight} kg</td>

                <td>{j.mortality}</td>

                <td className="text-blue-400">
                  Rp {(j.feed * j.price).toLocaleString()}
                </td>

                <td>
                  <button
                    onClick={() => deleteData(j.id)}
                    className="text-red-400 hover:text-red-600"
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
  );
}

function Stat({ title, value }: any) {
  return (
    <div className="bg-zinc-900 p-5 rounded-xl">
      <p className="text-zinc-400">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}

function Input({ label, children }: any) {
  return (
    <div>
      <label className="text-sm text-zinc-400">{label}</label>
      {children}
    </div>
  );
}