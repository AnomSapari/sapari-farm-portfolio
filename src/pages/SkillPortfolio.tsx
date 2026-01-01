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

const maxCost = Math.max(
  ...expenseData.map((item) => item.qty * item.cost)
);

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
      description:
        'Pencatatan modal dan pengeluaran ternak ayam KUB dengan perhitungan otomatis.',
    },
    {
      id: 2,
      title: 'Visual Pengeluaran (Canva)',
      image: '/images/canva-project.png',
      tools: ['Canva'],
      description:
        'Visualisasi data pengeluaran ternak agar mudah dipahami.',
    },
  ];

  return (
   <section className="pt-24 pb-24 bg-gray-50 dark:bg-gray-900">

      {/* ===== JUDUL ===== */}
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold">
          Portfolio Administrasi Usaha Mandiri
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Pencatatan pengeluaran dan dokumentasi usaha ternak ayam KUB
        </p>
      </div>

      {/* ===== TABEL PENGELUARAN ===== */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <h3 className="text-2xl font-bold mb-4 text-center text-green-600">
          Laporan Pengeluaran Awal Ternak Ayam KUB
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="p-3 border">Item</th>
                <th className="p-3 border">Qty</th>
                <th className="p-3 border">Biaya</th>
                <th className="p-3 border">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {expenseData.map((item, index) => {
                const subtotal = item.qty * item.cost;
                return (
                  <tr key={index}>
                    <td className="p-3 border">{item.item}</td>
                    <td className="p-3 border text-center">{item.qty}</td>
                    <td className="p-3 border">
                      Rp {item.cost.toLocaleString('id-ID')}
                    </td>
                    <td className="p-3 border font-bold text-green-600">
                      Rp {subtotal.toLocaleString('id-ID')}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

        {/* ===== GRAFIK ===== */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <h3 className="text-2xl font-bold mb-6 text-center text-green-600">
          Grafik Pengeluaran Awal Ternak Ayam KUB
        </h3>

        <div className="space-y-4">
          {expenseData.map((item, index) => {
            const total = item.qty * item.cost;
            const widthPercent = (total / maxCost) * 100;

            return (
              <div key={index}>
                <div className="flex justify-between mb-1 text-sm font-semibold">
                  <span>{item.item}</span>
                  <span>Rp {total.toLocaleString('id-ID')}</span>
                </div>

                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-green-600 h-4 rounded-full"
                    style={{ width: `${widthPercent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

<h3 className="text-xl font-semibold text-center text-gray-500 mb-8">
  Dokumentasi Skill & Tools Pendukung
</h3>

{/* ===== TIMELINE PERJALANAN TERNAK ===== */}
<div className="max-w-4xl mx-auto px-6 my-24">
  <h3 className="text-2xl font-bold mb-12 text-center text-green-600">
    Timeline Perjalanan Ternak Ayam KUB
  </h3>

  <div className="space-y-8">
    {farmingTimeline.map((item, index) => (
      <div
        key={index}
        className="flex items-start gap-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
      >
        <div className="min-w-[70px] text-center font-bold text-green-600">
          {item.day}
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-1">
            {item.title}
          </h4>
          <p className="text-gray-600 dark:text-gray-300">
            {item.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* KARTU SKILL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        {skills.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm text-gray-500">
                Tools: {item.tools.join(', ')}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===== GRAFIK PAKAN HARIAN ===== */}
<div className="max-w-5xl mx-auto px-6 mb-20">
  <h3 className="text-2xl font-bold mb-6 text-center text-green-600">
    Grafik Pakan Harian Ayam KUB (kg)
  </h3>

  <div className="space-y-4">
    {dailyFeedData.map((item, index) => {
      const maxFeed = Math.max(
        ...dailyFeedData.map((d) => d.feedKg)
      );
      const widthPercent = (item.feedKg / maxFeed) * 100;

      return (
        <div key={index}>
          <div className="flex justify-between text-sm font-semibold mb-1">
            <span>{item.day}</span>
            <span>{item.feedKg} kg</span>
          </div>

          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
            <div
              className="bg-green-600 h-4 rounded-full transition-all duration-500"
              style={{ width: `${widthPercent}%` }}
            />
          </div>
        </div>
      );
    })}
  </div>
</div>    

<div className="my-24 border-t border-gray-300 dark:border-gray-700" />

{/* ===== DOWNLOAD EXCEL ===== */}
<div className="text-center mt-8">
  <a
    href="/files/laporan-ternak-ayam-kub.xlsx"
    download
    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition"
  >
    📥 Download Laporan Excel
  </a>

  <p className="mt-3 text-sm text-gray-500">
    File Excel berisi pencatatan modal & pengeluaran ternak ayam KUB
  </p>
</div>


      {/* MODAL */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4 text-center">
              {selectedItem.title}
            </h3>
            <p className="text-center">
              {selectedItem.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
