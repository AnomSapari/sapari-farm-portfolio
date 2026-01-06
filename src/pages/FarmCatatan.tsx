import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Log {
  tanggal: string;
  jumlahAyam: number;
  umur: number;
  pakanPerEkor: number;
  totalPakanKg: number;
  biayaHarian: number;
  biayaBulanan: number;
}

const demoData: Log[] = [
  {
    tanggal: '05/01/2026',
    jumlahAyam: 15,
    umur: 12,
    pakanPerEkor: 60,
    totalPakanKg: 0.9,
    biayaHarian: 7200,
    biayaBulanan: 216000,
  },
  {
    tanggal: '06/01/2026',
    jumlahAyam: 15,
    umur: 12,
    pakanPerEkor: 60,
    totalPakanKg: 0.9,
    biayaHarian: 7200,
    biayaBulanan: 216000,
  },
  {
    tanggal: '07/01/2026',
    jumlahAyam: 15,
    umur: 13,
    pakanPerEkor: 65,
    totalPakanKg: 0.975,
    biayaHarian: 7800,
    biayaBulanan: 234000,
  },
];

const FarmCatatan: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    // Cek localStorage
    const savedLogs = JSON.parse(localStorage.getItem('farmLogs') || '[]');

    if (savedLogs.length === 0) {
      // Jika kosong, gunakan demoData
      localStorage.setItem('farmLogs', JSON.stringify(demoData));
      setLogs(demoData);
    } else {
      setLogs(savedLogs);
    }
  }, []);

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
          Catatan Harian Sapari Farm
        </h1>
        <p className="text-gray-400 md:text-lg">
          Jurnal harian pemeliharaan ayam KUB untuk evaluasi
          dan pembelajaran berkelanjutan.
        </p>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-6xl mx-auto mt-12 overflow-x-auto"
      >
        <table className="w-full border border-white/10 text-sm md:text-base">
          <thead className="bg-white/10">
            <tr>
              <th className="p-3 border border-white/10 text-left">Tanggal</th>
              <th className="p-3 border border-white/10 text-left">Umur</th>
              <th className="p-3 border border-white/10 text-left">
                Jumlah Ayam
              </th>
              <th className="p-3 border border-white/10 text-left">
                Pakan / Ekor (g)
              </th>
              <th className="p-3 border border-white/10 text-left">
                Total Pakan (kg/hari)
              </th>
              <th className="p-3 border border-white/10 text-left">
                Biaya Harian (Rp)
              </th>
              <th className="p-3 border border-white/10 text-left">
                Estimasi Bulanan (Rp)
              </th>
            </tr>
          </thead>
          <tbody>
            {logs.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="p-3 text-center text-gray-400 border border-white/10"
                >
                  Belum ada catatan.
                </td>
              </tr>
            ) : (
              logs.map((log, index) => (
                <tr key={index} className="hover:bg-white/5">
                  <td className="p-3 border border-white/10">{log.tanggal}</td>
                  <td className="p-3 border border-white/10">{log.umur} minggu</td>
                  <td className="p-3 border border-white/10">{log.jumlahAyam}</td>
                  <td className="p-3 border border-white/10">{log.pakanPerEkor}</td>
                  <td className="p-3 border border-white/10">{log.totalPakanKg.toFixed(2)}</td>
                  <td className="p-3 border border-white/10">
                    Rp {log.biayaHarian.toLocaleString('id-ID')}
                  </td>
                  <td className="p-3 border border-white/10">
                    Rp {log.biayaBulanan.toLocaleString('id-ID')}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-4xl mx-auto mt-10 text-sm text-gray-400"
      >
        <p>
          Catatan ini akan terus diperbarui seiring
          bertambahnya usia dan pengalaman beternak.
        </p>

        <div className="flex gap-4 mt-6 flex-wrap">
          <Link to="/farm" className="text-teal-500 hover:underline">
            ← Kembali ke Sapari Farm
          </Link>
          <Link to="/farm/perjalanan" className="text-teal-500 hover:underline">
            Lihat Perjalanan →
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default FarmCatatan;
