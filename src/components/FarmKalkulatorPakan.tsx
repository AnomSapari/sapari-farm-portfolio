import { useState } from 'react';
import * as XLSX from 'xlsx';
import { motion } from 'framer-motion';
import { createWaLink } from '../utils/whatsapp';

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
  const [hargaPakan, setHargaPakan] = useState(12000);
  const [ongkir, setOngkir] = useState(0);

  const [hasil, setHasil] = useState<{
    pakanPerEkor: number;
    totalPakanKg: number;
    biayaHarian: number;
    biayaBulanan: number;
  } | null>(null);

  const hitungPakan = () => {
    const pakanPerEkor = getPakanPerEkor(umur);
    const totalPakanKg = (jumlahAyam * pakanPerEkor) / 1000;
    const biayaPakanHarian = totalPakanKg * hargaPakan;

    const totalBiayaHarian = biayaPakanHarian + ongkir;
    const totalBiayaBulanan = totalBiayaHarian * 30;

    const newHasil = {
      pakanPerEkor,
      totalPakanKg: Number(totalPakanKg.toFixed(2)),
      biayaHarian: Math.round(totalBiayaHarian),
      biayaBulanan: Math.round(totalBiayaBulanan),
    };

    setHasil(newHasil);

    const logs = JSON.parse(localStorage.getItem('farmLogs') || '[]');
    logs.push({
      tanggal: new Date().toLocaleDateString('id-ID'),
      jumlahAyam,
      umur,
      ongkir,
      ...newHasil,
    });
    localStorage.setItem('farmLogs', JSON.stringify(logs));
  };

  const downloadExcel = () => {
    if (!hasil) return;

    const data = [
      {
        Tanggal: new Date().toLocaleDateString('id-ID'),
        'Jumlah Ayam': jumlahAyam,
        Umur: `${umur} minggu`,
        'Pakan / Ekor (g)': hasil.pakanPerEkor,
        'Total Pakan (kg)': hasil.totalPakanKg,
        'Ongkir Harian (Rp)': ongkir,
        'Total Biaya Harian (Rp)': hasil.biayaHarian,
        'Estimasi Bulanan (Rp)': hasil.biayaBulanan,
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

  const kirimKeWA = () => {
    if (!hasil) return;

    const message = `
Halo Sapari Farm 👋
Saya ingin pesan pakan ayam KUB.

🐔 Jumlah Ayam: ${jumlahAyam}
📆 Umur: ${umur} minggu
🌽 Total Pakan: ${hasil.totalPakanKg} kg / hari
🚚 Ongkir: Rp ${ongkir.toLocaleString('id-ID')}
💰 Total Biaya Bulanan: Rp ${hasil.biayaBulanan.toLocaleString('id-ID')}
    `.trim();

    window.open(createWaLink(message), '_blank');
  };

  return (
    <div className="p-6 md:p-12 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-teal-400">
        Kalkulator Pakan Ayam KUB
      </h1>

      <div className="max-w-2xl mx-auto bg-gray-800 p-6 md:p-10 rounded-2xl space-y-6">
        <input
          type="number"
          value={jumlahAyam}
          onChange={(e) => setJumlahAyam(Number(e.target.value))}
          placeholder="Jumlah Ayam"
          className="w-full p-3 bg-gray-700 rounded-lg"
        />

        <input
          type="number"
          value={umur}
          onChange={(e) => setUmur(Number(e.target.value))}
          placeholder="Umur (minggu)"
          className="w-full p-3 bg-gray-700 rounded-lg"
        />

        <input
          type="number"
          value={hargaPakan}
          onChange={(e) => setHargaPakan(Number(e.target.value))}
          placeholder="Harga Pakan / kg"
          className="w-full p-3 bg-gray-700 rounded-lg"
        />

        <input
          type="number"
          value={ongkir}
          onChange={(e) => setOngkir(Number(e.target.value))}
          placeholder="Ongkir per hari"
          className="w-full p-3 bg-gray-700 rounded-lg"
        />

        <button
          onClick={hitungPakan}
          className="w-full py-4 bg-teal-600 rounded-xl text-xl font-bold"
        >
          Hitung & Simpan
        </button>
      </div>

      {hasil && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="max-w-2xl mx-auto mt-10 bg-gray-800 p-6 rounded-2xl space-y-3"
  >
    <p>🐔 Pakan per ekor: {hasil.pakanPerEkor} g</p>
    <p>🌽 Total pakan: {hasil.totalPakanKg} kg / hari</p>

    <p className="text-yellow-400">
      🚚 Ongkir: Rp {ongkir.toLocaleString('id-ID')} / hari
    </p>

    <p className="text-green-400">
      💰 Total biaya harian: Rp {hasil.biayaHarian.toLocaleString('id-ID')}
    </p>

    <p className="text-teal-400">
      📆 Estimasi bulanan: Rp {hasil.biayaBulanan.toLocaleString('id-ID')}
    </p>

    <button
      onClick={kirimKeWA}
      className="w-full py-3 bg-green-600 rounded-xl font-bold"
    >
      💬 Pesan via WhatsApp
    </button>

    <button
      onClick={downloadExcel}
      className="w-full py-3 border border-green-500 rounded-xl"
    >
      Download Excel
    </button>
  </motion.div>
)}

    </div>
  );
};

export default FarmKalkulatorPakan;
