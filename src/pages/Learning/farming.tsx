import { Link } from "react-router-dom";

export default function Farming() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-emerald-500">
          Learning · Farming
        </h1>
        <p className="text-gray-400 max-w-3xl">
          Ruang belajar dan sistem manajemen sederhana untuk membantu
          pencatatan, monitoring, dan pengambilan keputusan dalam usaha
          peternakan ayam KUB.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Dashboard */}
        <Link
          to="."
          className="rounded-xl border border-gray-800 bg-gray-900 p-6 hover:border-emerald-500 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold text-emerald-500">
            Dashboard
          </h3>
          <p className="text-sm text-gray-400 mt-2">
            Ringkasan total ayam, total pakan, dan jumlah hari pemeliharaan.
          </p>
        </Link>

        {/* Jurnal */}
        <Link
          to="jurnal"
          className="rounded-xl border border-gray-800 bg-gray-900 p-6 hover:border-emerald-500 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold text-emerald-500">
            Jurnal Pakan
          </h3>
          <p className="text-sm text-gray-400 mt-2">
            Input dan kelola data harian seperti jumlah ayam, pakan, dan
            kematian.
          </p>
        </Link>

        {/* Kalkulator */}
        <Link
          to="kalkulator"
          className="rounded-xl border border-gray-800 bg-gray-900 p-6 hover:border-emerald-500 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold text-emerald-500">
            Kalkulator
          </h3>
          <p className="text-sm text-gray-400 mt-2">
            Hitung estimasi kebutuhan pakan dan biaya operasional dengan cepat.
          </p>
        </Link>

      </div>

      {/* Footer */}
      <div className="pt-6 border-t border-gray-800">
        <p className="text-sm text-gray-500">
          🚀 Sistem ini akan terus dikembangkan menuju versi monitoring
          peternakan berbasis data.
        </p>
      </div>
    </section>
  );
}