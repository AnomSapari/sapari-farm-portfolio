import { useState } from 'react';
import * as XLSX from 'xlsx';
import { motion } from 'framer-motion';
import { openWhatsApp } from '../utils/whatsapp'; // ⬅️ BARU

const getPakanPerEkor = (umur: number): number => {
  if (umur <= 4) return 30;
  if (umur <= 8) return 40;
  if (umur <= 12) return 60;
  if (umur <= 16) return 70;
  return 75;
};

const FarmKalkulatorPakan: React.FC = () => {
  const [jumlahAyam, setJumlahAyam] = useState(15);
  const [umur, setUmur] = useState(12);
  const [hargaPakan, setHargaPakan] = useState(8000);

  const [hasil, setHasil] = useState<{
    pakanPerEkor: number;
    totalPakanKg: number;
    biayaHarian: number;
    biayaBulanan: number;
  } | null>(null);

  const hitungPakan = () => {
    const pakanPerEkor = getPakanPerEkor(umur);
    const totalPakanKg = (jumlahAyam * pakanPerEkor) / 1000;
    const biayaHarian = totalPakanKg * hargaPakan;
    const biayaBulanan = biayaHarian * 30;

    const newHasil = {
      pakanPerEkor,
      totalPakanKg: Number(totalPakanKg.toFixed(2)),
      biayaHarian: Math.round(biayaHarian),
      biayaBulanan: Math.round(biayaBulanan),
    };

    setHasil(newHasil);

    const logs = JSON.parse(localStorage.getItem('farmLogs') || '[]');
    logs.push({
      tanggal: new Date().toLocaleDateString('id-ID'),
      jumlahAyam,
      umur,
      ...newHasil,
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

  // ⬇️ BARU — PESAN WA OTOMATIS
  const kirimKeWA = () => {
    if (!hasil) return;

    openWhatsApp(`
Halo Sapari Farm 👋
Saya ingin pesan pakan ayam KUB.

🐔 Jumlah Ayam: ${jumlahAyam}
📆 Umur: ${umur} minggu
🌽 Total Pakan: ${hasil.totalPakanKg} kg / hari
💰 Estimasi Bulanan: Rp ${hasil.biayaBulanan.toLocaleString('id-ID')}
    `.trim());
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
            min={1}
            value={jumlahAyam}
            onChange={(e) => setJumlahAyam(Number(e.target.value))}
            className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600"
          />
        </div>

        <div>
          <label className="block text-lg mb-2">Umur Ayam (minggu)</label>
          <input
            type="number"
            min={1}
            value={umur}
            onChange={(e) => setUmur(Number(e.target.value))}
            className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600"
          />
        </div>

        <div>
          <label className="block text-lg mb-2">Harga Pakan per kg (Rp)</label>
          <input
            type="number"
            min={1000}
            value={hargaPakan}
            onChange={(e) => setHargaPakan(Number(e.target.value))}
            className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600"
          />
        </div>

        <button
          onClick={hitungPakan}
          className="w-full py-4 bg-teal-600 hover:bg-teal-700 rounded-xl text-xl font-bold"
        >
          Hitung & Simpan
        </button>
      </div>

      {hasil && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto mt-12 bg-gray-800 p-6 md:p-10 rounded-2xl space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-teal-400">
            Hasil Perhitungan
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 text-lg">
            <div>
              <p>🐔 {hasil.pakanPerEkor} g / ekor</p>
              <p>🌽 {hasil.totalPakanKg} kg / hari</p>
            </div>
            <div>
              <p>💰 Rp {hasil.biayaHarian.toLocaleString('id-ID')} / hari</p>
              <p>📆 Rp {hasil.biayaBulanan.toLocaleString('id-ID')} / bulan</p>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={kirimKeWA}
              className="w-full py-4 bg-green-600 hover:bg-green-700 rounded-xl text-xl font-bold"
            >
              💬 Pesan via WhatsApp
            </button>

            <button
              onClick={downloadExcel}
              className="w-full py-3 border border-green-500 rounded-xl"
            >
              Download Excel
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FarmKalkulatorPakan;
