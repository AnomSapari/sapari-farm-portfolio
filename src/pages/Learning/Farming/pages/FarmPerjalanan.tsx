import { useEffect } from "react";
import FarmingSubNav from "../components/FarmingSubNav";
import { useJurnalStore } from "@/store/useJurnalStore";

export default function FarmPerjalanan() {
  const { jurnal, loadJurnal } = useJurnalStore();

  useEffect(() => {
    loadJurnal();
  }, []);

  return (
    <div className="space-y-6">
      <FarmingSubNav />

      <h1 className="text-2xl font-bold">
        Perjalanan Ternak Ayam
      </h1>

      <p className="text-white/70">
        Story dan catatan perjalanan ternak dari hari ke hari.
      </p>

      {jurnal.length === 0 && (
        <div className="text-white/50 text-sm">
          Belum ada jurnal. Silakan isi di menu Jurnal.
        </div>
      )}

      <div className="space-y-4">
        {jurnal.map((item, index) => (
          <div
            key={index}
            className="border border-white/10 rounded-xl p-4 bg-white/5"
          >
            <div className="flex justify-between text-sm text-white/50">
              <span>{item.tanggal}</span>
              <span>{item.jenisAyam}</span>
            </div>

            <p className="font-semibold mt-2">
              Jumlah Ayam: {item.jumlahAyam}
            </p>

            {item.catatan && (
              <p className="text-white/70 mt-1">
                {item.catatan}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
