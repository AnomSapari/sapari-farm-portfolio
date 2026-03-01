import useJournalStore from "@/store/useJournalStore"
import FarmingSubNav from "../components/FarmingSubNav"

export default function FarmPerjalanan() {
  const items = useJournalStore((state) => state.items)

  return (
    <div className="space-y-6">
      <FarmingSubNav />

      <h1 className="text-2xl font-bold">
        Perjalanan Ternak Ayam
      </h1>

      <p className="text-white/70">
        Catatan dan perjalanan ternak dari hari ke hari.
      </p>

      {items.length === 0 && (
        <div className="text-white/50 text-sm">
          Belum ada jurnal. Silakan isi di menu Jurnal.
        </div>
      )}

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-white/10 rounded-xl p-4 bg-white/5"
          >
            <div className="flex justify-between text-sm text-white/50">
              <span>{item.tanggal}</span>
              <span>
                Rp {item.jumlah.toLocaleString("id-ID")}
              </span>
            </div>

            <p className="text-white mt-2">
              {item.keterangan}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
