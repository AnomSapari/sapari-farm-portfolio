export default function KalkulatorResult({ hasil }: any) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl space-y-2">
      <h2 className="text-xl font-bold text-teal-400">
        Hasil Perhitungan Transparan
      </h2>

      <p>Total pakan: {hasil.totalPakan.toFixed(1)} kg</p>
      <p>Biaya pakan: Rp {hasil.biayaPakan.toLocaleString()}</p>
      <p>Biaya bibit: Rp {hasil.biayaBibit.toLocaleString()}</p>
      <p>Total biaya: Rp {hasil.totalBiaya.toLocaleString()}</p>

      <hr className="opacity-20" />

      <p>Estimasi produksi: {hasil.estimasiProduksiKg} kg</p>
      <p className="font-semibold">
        Harga pokok/kg: Rp {hasil.hargaPokokPerKg.toFixed(0)}
      </p>

      <p className="text-teal-400 font-bold">
        Harga jual wajar: Rp {hasil.hargaJualDisarankan.toFixed(0)} / kg
      </p>
    </div>
  )
}
