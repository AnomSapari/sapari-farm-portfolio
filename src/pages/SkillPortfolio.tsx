import { motion } from 'framer-motion';
import { useState } from 'react';

interface SkillItem {
  id: number;
  title: string;
  image: string;
  tools: string[];
  description: string;
}

const expenseData = [
  { item: 'Pembuatan Kandang Ayam KUB', qty: 1, cost: 1500000 },
  { item: 'Bibit Ayam KUB (usia 7 hari)', qty: 10, cost: 50000 },
  { item: 'Pakan Ayam (starter)', qty: 1, cost: 350000 },
];

const dailyFeedData = [
  { day: 'Hari 1', feedKg: 0.3 },
  { day: 'Hari 2', feedKg: 0.35 },
  { day: 'Hari 3', feedKg: 0.4 },
  { day: 'Hari 4', feedKg: 0.45 },
];

const maxCost = Math.max(...expenseData.map((item) => item.qty * item.cost));

const farmingTimeline = [
  {
    day: 'Hari 0',
    title: 'Persiapan Kandang',
    description: 'Pembuatan kandang ayam KUB dan persiapan peralatan dasar.',
  },
  {
    day: 'Hari 7',
    title: 'Bibit Ayam Datang',
    description: 'Pembelian 10 ekor bibit ayam KUB usia 7 hari.',
  },
  {
    day: 'Hari 14',
    title: 'Adaptasi & Monitoring',
    description: 'Ayam mulai adaptasi, pemantauan pakan dan kesehatan.',
  },
  {
    day: 'Hari 30',
    title: 'Pertumbuhan Stabil',
    description: 'Bobot ayam meningkat, konsumsi pakan stabil.',
  },
];

export default function SkillPortfolio() {
  const [selectedItem, setSelectedItem] = useState<SkillItem | null>(null);

  const skills: SkillItem[] = [
    {
      id: 1,
      title: 'Pencatatan Pengeluaran Ternak (Excel)',
      image: '/images/excel-project.png',
      tools: ['Microsoft Excel'],
      description: 'Pencatatan modal dan pengeluaran ternak ayam KUB dengan perhitungan otomatis.',
    },
    {
      id: 2,
      title: 'Visual Pengeluaran (Canva)',
      image: '/images/canva-project.png',
      tools: ['Canva'],
      description: 'Visualisasi data pengeluaran ternak agar mudah dipahami.',
    },
  ];

  return (
    <section className="pt-20 pb-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Judul */}
      <div className="text-center space-y-4 mb-12 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Portfolio Administrasi Usaha Mandiri
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
          Pencatatan pengeluaran dan dokumentasi usaha ternak ayam KUB
        </p>
      </div>

      {/* Tabel Pengeluaran */}
      <div className="max-w-full sm:max-w-5xl mx-auto px-4 sm:px-6 mb-16 overflow-x-auto">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-green-600">
          Laporan Pengeluaran Awal Ternak Ayam KUB
        </h3>

        <div className="min-w-[600px] md:min-w-full"> {/* Agar tabel tidak terlalu kecil di HP */}
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 text-sm md:text-base">
            <thead className="bg-gray-200 dark:bg-gray-700 sticky top-0">
              <tr>
                <th className="p-3 border text-left">Item</th>
                <th className="p-3 border text-center">Qty</th>
                <th className="p-3 border text-right">Biaya</th>
                <th className="p-3 border text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {expenseData.map((item, index) => {
                const subtotal = item.qty * item.cost;
                return (
                  <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                    <td className="p-3 border">{item.item}</td>
                    <td className="p-3 border text-center">{item.qty}</td>
                    <td className="p-3 border text-right">
                      Rp {item.cost.toLocaleString('id-ID')}
                    </td>
                    <td className="p-3 border text-right font-bold text-green-600">
                      Rp {subtotal.toLocaleString('id-ID')}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grafik Pengeluaran */}
      <div className="max-w-full sm:max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-green-600">
          Grafik Pengeluaran Awal Ternak Ayam KUB
        </h3>

        <div className="space-y-6">
          {expenseData.map((item, index) => {
            const total = item.qty * item.cost;
            const widthPercent = (total / maxCost) * 100;

            return (
              <div key={index}>
                <div className="flex justify-between mb-2 text-sm md:text-base font-semibold">
                  <span>{item.item}</span>
                  <span>Rp {total.toLocaleString('id-ID')}</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-5 md:h-6">
                  <div
                    className="bg-green-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${widthPercent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline Perjalanan Ternak */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
        <h3 className="text-xl md:text-2xl font-bold mb-8 text-center text-green-600">
          Timeline Perjalanan Ternak Ayam KUB
        </h3>

        <div className="space-y-6">
          {farmingTimeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-start gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
            >
              <div className="min-w-[80px] text-center font-bold text-green-600 text-lg">
                {item.day}
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Kartu Skill */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 sm:px-6">
        {skills.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg cursor-pointer overflow-hidden"
            onClick={() => setSelectedItem(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 md:h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Tools: {item.tools.join(', ')}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Grafik Pakan Harian */}
      <div className="max-w-full sm:max-w-5xl mx-auto px-4 sm:px-6 mb-20 mt-16">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-green-600">
          Grafik Pakan Harian Ayam KUB (kg)
        </h3>

        <div className="space-y-6">
          {dailyFeedData.map((item, index) => {
            const maxFeed = Math.max(...dailyFeedData.map((d) => d.feedKg));
            const widthPercent = (item.feedKg / maxFeed) * 100;

            return (
              <div key={index}>
                <div className="flex justify-between mb-2 text-sm md:text-base font-semibold">
                  <span>{item.day}</span>
                  <span>{item.feedKg} kg</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-5 md:h-6">
                  <div
                    className="bg-green-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${widthPercent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Download Excel */}
      <div className="text-center mt-12 px-4">
        <a
          href="/files/laporan-ternak-ayam-kub.xlsx"
          download
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl shadow transition text-lg md:text-xl"
        >
          📥 Download Laporan Excel
        </a>
        <p className="mt-4 text-sm text-gray-500">
          File Excel berisi pencatatan modal & pengeluaran ternak ayam KUB
        </p>
      </div>

      {/* Modal Skill */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4 text-center">
              {selectedItem.title}
            </h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              {selectedItem.description}
            </p>
            <button
              onClick={() => setSelectedItem(null)}
              className="mt-6 w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
            >
              Tutup
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}