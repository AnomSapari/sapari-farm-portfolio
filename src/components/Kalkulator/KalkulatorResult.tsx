export default function KalkulatorResult(props: any) {
  return (
    <div className="bg-gray-800 p-4 rounded space-y-2">
      <p>🐔 Total Pakan: <b>{props.totalPakanKg.toFixed(2)} kg</b></p>
      <p>💸 Biaya Pakan: Rp {props.biayaPakan.toLocaleString()}</p>
      <p>🐣 Biaya Bibit: Rp {props.biayaBibit.toLocaleString()}</p>
      <p>📦 Total Biaya: Rp {props.totalBiaya.toLocaleString()}</p>
      <p>⚖️ Produksi: {props.estimasiProduksiKg} kg</p>
      <p>📊 HPP/kg: Rp {props.hargaPokokPerKg.toFixed(0)}</p>

      <p className="text-green-400 text-lg">
        💰 Harga Jual Disarankan: Rp {props.hargaJualDisarankan.toFixed(0)}
      </p>
    </div>
  )
}
