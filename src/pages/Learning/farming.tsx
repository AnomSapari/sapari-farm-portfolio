export default function Farming() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-emerald-600">
          Learning · Farming
        </h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
          Ruang belajar dan catatan seputar dunia peternakan ayam KUB berdasarkan
          pengalaman langsung di lapangan, dikemas secara sederhana dan praktis.
        </p>
      </div>

      {/* Highlight Box */}
      <div
        className="border-l-4 border-emerald-400 dark:border-emerald-600
        bg-emerald-50/50 dark:bg-emerald-950/30
        p-5 sm:p-6 rounded-xl"
      >
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
          🌱 Fokus utama halaman ini adalah pembelajaran nyata: manajemen
          pemeliharaan, pakan, kesehatan ayam, serta pengalaman yang bisa langsung
          diterapkan oleh peternak pemula maupun UMKM.
        </p>
      </div>

      {/* Content Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 space-y-2">
          <h3 className="font-semibold text-emerald-600">
            Catatan Lapangan
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pengalaman harian beternak ayam KUB, termasuk tantangan dan solusi
            sederhana di kandang.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 space-y-2">
          <h3 className="font-semibold text-emerald-600">
            Panduan Praktis
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Tips dan panduan beternak dari nol, mulai dari DOC, pakan, hingga
            manajemen dasar.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 space-y-2">
          <h3 className="font-semibold text-emerald-600">
            Tools & Kalkulator
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Alat bantu seperti kalkulator pakan dan estimasi biaya untuk mendukung
            keputusan peternak.
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        🚧 Konten akan terus dikembangkan secara bertahap berdasarkan praktik dan
        kebutuhan peternak.
      </p>
    </section>
  );
}
