import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as XLSX from 'xlsx';

const getPakanPerEkor = (umur: number): number => {
  if (umur <= 4) return 30;
  if (umur <= 8) return 40;
  if (umur <= 12) return 60;
  if (umur <= 16) return 70;
  return 75;
};

const FarmKalkulatorPakan: React.FC = () => {
  const [jumlahAyam, setJumlahAyam] = useState<number>(15);
  const [umur, setUmur] = useState<number>(12);
  const [hargaPakan, setHargaPakan] = useState<number>(8000);

  const pakanPerEkor = getPakanPerEkor(umur);
  const totalPakanKg = (jumlahAyam * pakanPerEkor) / 1000;
  const biayaHarian = totalPakanKg * hargaPakan;
  const biayaBulanan = biayaHarian * 30;

  const exportToExcel = () => {
    const data = [
      {
        'Jumlah Ayam': jumlahAyam,
        'Umur (minggu)': umur,
        'Pakan / Ekor (gram)': pakanPerEkor,
        'Total Pakan (kg / hari)': totalPakanKg.toFixed(2),
        'Harga Pakan (Rp / kg)': hargaPakan,
        'Biaya Harian (Rp)': Math.round(biayaHarian),
        'Estimasi Bulanan (Rp)': Math.round(biayaBulanan),
      },
    ];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Kalkulator Pakan');

    XLSX.writeFile(
      workbook,
      `kalkulator-pakan-${new Date().toISOString().slice(0, 10)}.xlsx`
    );
  };

  return (
    <section className="min-h-screen p-6 md:p-12 text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-4"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Kalkulator Pakan Ayam KUB
        </h1>
        <p className="text-gray-400 md:text-lg">
          Hitung estimasi kebutuhan pakan harian berdasarkan jumlah ayam dan usia.
        </p>
      </motion.div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-xl mx-auto mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5"
      >
        {/* Inputs */}
        <div>
          <label className="text-sm text-gray-300">Jumlah Ayam</label>
          <input
            type="number"
            min={1}
            value={jumlahAyam}
            onChange={(e) => setJumlahAyam(Number(e.target.value))}
            className="mt-1 w-full rounded-lg bg-black border border-white/20 px-3 py-2"
          />
        </div>

        <div>
          <label className="text-sm text-gray-300">Umur Ayam (minggu)</label>
          <input
            type="number"
            min={1}
            value={umur}
            onChange={(e) => setUmur(Number(e.target.value))}
            className="mt-1 w-full rounded-lg bg-black border border-white/20 px-3 py-2"
          />
        </div>

        <div>
          <label className="text-sm text-gray-300">Harga Pakan (Rp / kg)</label>
          <input
            type="number"
            min={0}
            value={hargaPakan}
            onChange={(e) => setHargaPakan(Number(e.target.value))}
            className="mt-1 w-full rounded-lg bg-black border border-white/20 px-3 py-2"
          />
        </div>

        {/* BUTTON — PASTI MUNCUL */}
        <button
          onClick={exportToExcel}
          className="w-full rounded-xl border border-teal-500 
                     px-4 py-3 text-teal-500 font-medium
                     hover:bg-teal-500 hover:text-black transition"
        >
          Export ke Excel (.xlsx)
        </button>

        {/* Result */}
        <div className="border-t border-white/10 pt-4 space-y-2 text-sm">
          <p>🐔 Konsumsi per ekor: <strong>{pakanPerEkor} g / hari</strong></p>
          <p>🌽 Total pakan: <strong>{totalPakanKg.toFixed(2)} kg / hari</strong></p>
          <p>💰 Biaya harian: <strong className="text-teal-400">Rp {biayaHarian.toLocaleString('id-ID')}</strong></p>
          <p>📆 Estimasi bulanan: <strong className="text-teal-400">Rp {biayaBulanan.toLocaleString('id-ID')}</strong></p>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto mt-10 text-sm text-gray-400 flex gap-4">
        <Link to="/farm/pakan" className="text-teal-500 hover:underline">
          ← Tabel Pakan
        </Link>
        <Link to="/farm" className="text-teal-500 hover:underline">
          Kembali ke Sapari Farm
        </Link>
      </div>
    </section>
  );
};

export default FarmKalkulatorPakan;
