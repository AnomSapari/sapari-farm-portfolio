import { motion } from "framer-motion";

const expenseData = [
  { item: "Pembuatan Kandang Ayam KUB", qty: 1, cost: 1500000 },
  { item: "Bibit Ayam KUB (usia 7 hari)", qty: 10, cost: 50000 },
  { item: "Pakan Ayam (starter)", qty: 1, cost: 350000 },
];

const dailyFeedData = [
  { day: "Hari 1", feedKg: 0.3 },
  { day: "Hari 2", feedKg: 0.35 },
  { day: "Hari 3", feedKg: 0.4 },
  { day: "Hari 4", feedKg: 0.45 },
];

const farmingTimeline = [
  {
    day: "Hari 0",
    title: "Persiapan Kandang",
    description: "Pembuatan kandang dan persiapan peralatan dasar.",
  },
  {
    day: "Hari 7",
    title: "Bibit Ayam Datang",
    description: "Pembelian 10 ekor bibit ayam KUB usia 7 hari.",
  },
  {
    day: "Hari 14",
    title: "Adaptasi & Monitoring",
    description: "Pemantauan pakan dan kondisi kesehatan ayam.",
  },
  {
    day: "Hari 30",
    title: "Pertumbuhan Stabil",
    description: "Bobot ayam meningkat, konsumsi pakan stabil.",
  },
];

export default function FarmJournalPage() {
  const maxCost = Math.max(...expenseData.map(i => i.qty * i.cost));
  const maxFeed = Math.max(...dailyFeedData.map(i => i.feedKg));

  return (
    <section className="pt-20 pb-24 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="text-center mb-14 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Jurnal & Administrasi Ternak Ayam KUB
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Pencatatan pengeluaran, pakan harian, dan perjalanan ternak
        </p>
      </div>

      {/* Tabel Pengeluaran */}
      <div className="max-w-5xl mx-auto px-4 mb-20 overflow-x-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
          Laporan Pengeluaran Awal
        </h2>

        <table className="w-full border border-gray-300 dark:border-gray-700 text-sm md:text-base">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="p-3 border">Item</th>
              <th className="p-3 border text-center">Qty</th>
              <th className="p-3 border text-right">Biaya</th>
              <th className="p-3 border text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {expenseData.map((item, i) => {
              const subtotal = item.qty * item.cost;
              return (
                <tr key={i}>
                  <td className="p-3 border">{item.item}</td>
                  <td className="p-3 border text-center">{item.qty}</td>
                  <td className="p-3 border text-right">
                    Rp {item.cost.toLocaleString("id-ID")}
                  </td>
                  <td className="p-3 border text-right font-semibold text-green-600">
                    Rp {subtotal.toLocaleString("id-ID")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Grafik Pengeluaran */}
      <div className="max-w-5xl mx-auto px-4 mb-20">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
          Grafik Pengeluaran
        </h2>

        {expenseData.map((item, i) => {
          const total = item.qty * item.cost;
          return (
            <div key={i} className="mb-5">
              <div className="flex justify-between mb-2 font-semibold">
                <span>{item.item}</span>
                <span>Rp {total.toLocaleString("id-ID")}</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-5">
                <div
                  className="bg-green-600 h-full rounded-full"
                  style={{ width: `${(total / maxCost) * 100}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Grafik Pakan */}
      <div className="max-w-5xl mx-auto px-4 mb-20">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
          Grafik Pakan Harian (kg)
        </h2>

        {dailyFeedData.map((item, i) => (
          <div key={i} className="mb-5">
            <div className="flex justify-between mb-2 font-semibold">
              <span>{item.day}</span>
              <span>{item.feedKg} kg</span>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-5">
              <div
                className="bg-green-600 h-full rounded-full"
                style={{ width: `${(item.feedKg / maxFeed) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-4 mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center text-green-600">
          Timeline Perjalanan Ternak
        </h2>

        {farmingTimeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 mb-5 rounded-xl shadow"
          >
            <div className="font-bold text-green-600">{item.day}</div>
            <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Download */}
      <div className="text-center">
        <a
          href="/files/laporan-ternak-ayam-kub.xlsx"
          download
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow"
        >
          📥 Download Laporan Excel
        </a>
      </div>
    </section>
  );
}
