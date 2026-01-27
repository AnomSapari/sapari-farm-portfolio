import { useState, useEffect } from 'react';
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

  // 🔄 Auto hitung saat input berubah
  useEffect(() => {
    if (jumlahAyam <= 0 || umur <= 0) {
      setHasil(null);
      return;
    }

    const pakanPerEkor = getPakanPerEkor(umur);
    const totalPakanKg = (jumlahAyam * pakanPerEkor) / 1000;
    const biayaPakanHarian = totalPakanKg * hargaPakan;

    const totalBiayaHarian = biayaPakanHarian + ongkir;
    const totalBiayaBulanan = totalBiayaHarian * 30;

    setHasil({
      pakanPerEkor,
      totalPakanKg: Number(totalPakanKg.toFixed(2)),
      biayaHarian: Math.round(totalBiayaHarian),
      biayaBulanan: Math.round(totalBiayaBulanan),
    });
  }, [jumlahAyam, umur, hargaPakan, ongkir]);

  // 💾 Simpan log
  const simpanLog = () => {
    if (!hasil) return;

    const logs = JSON.parse(localStorage.getItem('farmLogs') || '[]');
    logs.push({
      tanggal: new Date().toLocaleDateString('id-ID'),
      jumlahAyam,
      umur,
      ongkir,
      ...hasil,
    });
    localStorage.setItem('farmLogs', JSON.stringify(logs));
  };

  // 📥 Excel
  const downloadExcel = () => {
    if (!hasil) return;

    const data = [
      {
        Tanggal: new Date().toLocaleDateString('id-ID'),
        'Jumlah Ayam (ekor)': jumlahAyam,
        'Umur (minggu)': umur,
        'Pakan / Ekor (gram)': hasil.pakanPerEkor,
        'Total Pakan (kg/hari)': hasil.totalPakanKg,
        'Ongkir (Rp/hari)': ongkir,
        'Biaya Harian (Rp)': hasil.biayaHarian,
        'Estimasi Bulanan (Rp)': hasil.biayaBulanan,
      },
    ];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Kalkulator Pakan');
    XLSX.writeFile(workbook, 'kalkulator-pakan-ayam.xlsx');
  };

  // 💬 WhatsApp
  const kirimKeWA = () => {
    if (!hasil) return;

    const message = `
Halo Sapari Farm 👋
Saya ingin pesan pakan ayam KUB.

🐔 Jumlah Ayam: ${jumlahAyam} ekor
📆 Umur: ${umur} minggu
🌽 Total Pakan: ${hasil.totalPakanKg} kg / hari
🚚 Ongkir: Rp ${ongkir.toLocaleString('id-ID')}
💰 Estimasi Bulanan: Rp ${hasil.biayaBulanan.toLocaleString('id-ID')}
    `.trim();

    window.open(createWaLink(message), '_blank');
  };

  const inputClass =
    'w-full p-3 pr-20 bg-gray-700 rounded-lg appearance-none';

  return (
    <div className="p-6 md:p-12 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-teal-400">
        Kalkulator Pakan Ayam KUB
      </h1>

      <div className="max-w-2xl mx-auto bg-gray-800 p-6 md:p-10 rounded-2xl space-y-5">
        {/* Jumlah Ayam */}
        <div className="relative">
          <input
            type="number"
            value={jumlahAyam}
            min={1}
            onChange={(e) => setJumlahAyam(Number(e.target.value))}
            placeholder="Jumlah Ayam"
            className={inputClass}
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            ekor
          </span>
        </div>

        {/* Umur */}
        <div className="relative">
          <input
            type="number"
            value={umur}
            min={1}
            onChange={(e) => setUmur(Number(e.target.value))}
            placeholder="Umur Ayam"
            className={inputClass}
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            minggu
          </span>
        </div>

        {/* Harga */}
        <div className="relative">
          <input
            type="number"
            value={hargaPakan}
            min={0}
            onChange={(e) => setHargaPakan(Number(e.target.value))}
            placeholder="Harga Pakan"
            className={inputClass}
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            Rp / kg
          </span>
        </div>

        {/* Ongkir */}
        <div className="relative">
          <input
            type="number"
            value={ongkir}
            min={0}
            onChange={(e) => setOngkir(Number(e.target.value))}
            placeholder="Ongkir"
            className={inputClass}
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            Rp / hari
          </span>
        </div>

        <button
          onClick={simpanLog}
          className="w-full py-4 bg-teal-600 rounded-xl text-xl font-bold"
        >
          Simpan Perhitungan
        </button>
      </div>

      {hasil && (
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mt-10 bg-gray-800 p-6 rounded-2xl"
        >
          <h2 className="text-xl font-bold mb-4 text-teal-400">
            📊 Hasil Perhitungan
          </h2>

          <table className="w-full border border-gray-700">
            <tbody>
              <tr><td className="p-3">Pakan / Ekor</td><td>{hasil.pakanPerEkor} gram</td></tr>
              <tr><td className="p-3">Total Pakan</td><td>{hasil.totalPakanKg} kg / hari</td></tr>
              <tr><td className="p-3">Biaya Harian</td><td>Rp {hasil.biayaHarian.toLocaleString('id-ID')}</td></tr>
              <tr className="font-semibold text-teal-400">
                <td className="p-3">Estimasi Bulanan</td>
                <td>Rp {hasil.biayaBulanan.toLocaleString('id-ID')}</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-6 space-y-3">
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
          </div>
        </motion.div>
        
      )}
    </div>
    
  );
};

export default FarmKalkulatorPakan;
