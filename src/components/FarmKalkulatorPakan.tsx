import { useState } from 'react';
import * as XLSX from 'xlsx';
import { motion } from 'framer-motion';

const getPakanPerEkor = (umur: number): number => {
  if (umur <= 4) return 30;
  if (umur <= 8) return 40;
  if (umur <= 12) return 60;
  if (umur <= 16) return 70;
  return 75;
};

const FarmKalkulatorPakan: React.FC = () => {
  // State Input
  const [jumlahAyam, setJumlahAyam] = useState<number>(15);
  const [umur, setUmur] = useState<number>(12);
  const [hargaPakan, setHargaPakan] = useState<number>(8000);

  // State Hasil
  const [hasil, setHasil] = useState<{
    pakanPerEkor: number;
    totalPakanKg: number;
    biayaHarian: number;
    biayaBulanan: number;
  } | null>(null);

  const hitungPakan = () => {
    const pakanPerEkor = getPakanPerEkor(umur);
    const totalPakanGram = jumlahAyam * pakanPerEkor;
    const totalPakanKg = totalPakanGram / 1000;
    const biayaHarian = totalPakanKg * hargaPakan;
    const biayaBulanan = biayaHarian * 30;

    const newHasil = {
      pakanPerEkor,
      totalPakanKg: Number(totalPakanKg.toFixed(2)),
      biayaHarian: Math.round(biayaHarian),
      biayaBulanan: Math.round(biayaBulanan),
    };

    setHasil(newHasil);

    // Simpan ke localStorage
    const logs = JSON.parse(localStorage.getItem('farmLogs') || '[]');
    logs.push({
      tanggal: new Date().toLocaleDateString('id-ID'),
      jumlahAyam,
      umur,
      pakanPerEkor,
      totalPakanKg: newHasil.totalPakanKg,
      biayaHarian: newHasil.biayaHarian,
      biayaBulanan: newHasil.biayaBulanan,
    });
    localStorage.setItem('farmLogs', JSON.stringify(logs));
  };

  const downloadExcel = () => {
    if (!hasil) return;

    const data = [{
      Tanggal: new Date().toLocaleDateString('id-ID'),
      'Jumlah Ayam': jumlahAyam,
      Umur: `${umur} minggu`,
      'Pakan/Ekor (g)': hasil.pakanPerEkor,
      'Total Pakan (kg)': hasil.totalPakanKg,
      'Biaya Harian (Rp)': hasil.biayaHarian,
      'Biaya Bulanan (Rp)': hasil.biayaBulanan,
    }];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Kalkulator Pakan');

    XLSX.writeFile(workbook, `kalkulator-pakan-${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  return (
    <div className="p-6 md:p-12 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-teal-400">
        Kalkulator Pakan Ayam KUB
      </h1>

      <div className="max-w-2xl mx-auto bg-gray-800 p-6 md:p-10 rounded-2xl shadow-2xl space-y-6">
        <div>
          <label className="block text-lg mb-2">Jumlah Ayam</label>
          <input
            type="number"
            value={jumlahAyam}
            onChange={(e) => setJumlahAyam(Number(e.target.value))}
            min="1"
            className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-teal-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-lg mb-2">Umur Ayam (minggu)</label>
          <input
            type="number"
            value={umur}
            onChange={(e) => setUmur(Number(e.target.value))}
            min="1"
            className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-teal-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-lg mb-2">Harga Pakan per kg (Rp)</label>
          <input
            type="number"
            value={hargaPakan}
            onChange={(e) => setHargaPakan(Number(e.target.value))}
            min="1000"
            className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-teal-500 outline-none"
          />
        </div>

        <button
          onClick={hitungPakan}
          className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white text-xl font-bold rounded-xl transition"
        >
          Hitung & Simpan
        </button>
      </div>

      {hasil && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto mt-12 bg-gray-800 p-6 md:p-10 rounded-2xl shadow-2xl space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-teal-400">
            Hasil Perhitungan
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
            <div>
              <p><strong>Pakan per Ekor:</strong> {hasil.pakanPerEkor} gram</p>
              <p><strong>Total Pakan Harian:</strong> {hasil.totalPakanKg} kg</p>
            </div>
            <div>
              <p><strong>Biaya Harian:</strong> Rp {hasil.biayaHarian.toLocaleString('id-ID')}</p>
              <p><strong>Biaya Bulanan (30 hari):</strong> Rp {hasil.biayaBulanan.toLocaleString('id-ID')}</p>
            </div>
          </div>

          <button
            onClick={downloadExcel}
            className="w-full py-4 bg-green-600 hover:bg-green-700 text-white text-xl font-bold rounded-xl transition mt-6"
          >
            Download ke Excel
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default FarmKalkulatorPakan;