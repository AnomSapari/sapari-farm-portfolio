type HasilKalkulator = {
  usia: number
  totalBibit: number
  totalPakanKg: number
  totalPakan: number
  biayaOperasional: number
  totalModal: number
  bepPerEkor: number
  hargaJualTotal: number
  hargaJualPerEkor: number
  margin: number
}

type Props = {
  hasil: HasilKalkulator
}

export default function KalkulatorResult({ hasil }: Props) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl space-y-2">
      <p>Usia Ayam: <b>{hasil.usia} minggu</b></p>
      <p>Total Pakan: <b>{hasil.totalPakanKg.toFixed(1)} kg</b></p>
      <p>Biaya Pakan: Rp <b>{hasil.totalPakan.toLocaleString("id-ID")}</b></p>
      <p>Biaya Bibit: Rp <b>{hasil.totalBibit.toLocaleString("id-ID")}</b></p>
      <p>Biaya Operasional: Rp <b>{hasil.biayaOperasional.toLocaleString("id-ID")}</b></p>

      <hr className="border-gray-700 my-2" />

      <p className="text-yellow-400">
        BEP / Ekor: Rp <b>{hasil.bepPerEkor.toLocaleString("id-ID")}</b>
      </p>

      <p>Total Modal: Rp <b>{hasil.totalModal.toLocaleString("id-ID")}</b></p>

      <p className="text-green-400 text-lg">
        Harga Jual Target (+{hasil.margin}%): Rp{" "}
        <b>{hasil.hargaJualTotal.toLocaleString("id-ID")}</b>
      </p>

      <p className="text-green-300">
        Harga / Ekor: Rp{" "}
        <b>{hasil.hargaJualPerEkor.toLocaleString("id-ID")}</b>
      </p>
    </div>
  )
}
