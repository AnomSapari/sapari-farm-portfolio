import { JenisAyam, AYAM_CONFIG } from "@/data/ayam"

type Input = {
  jenis: JenisAyam
  jumlahAyam: number
  totalPakanKg: number
  hargaPakan: number
  hargaBibit: number
  biayaOperasional: number
  margin: number
}

export function hitungTransparansi(input: Input) {
  const config = AYAM_CONFIG[input.jenis]

  const biayaPakan = input.totalPakanKg * input.hargaPakan
  const biayaBibit = input.jumlahAyam * input.hargaBibit

  const totalBiaya =
    biayaPakan + biayaBibit + input.biayaOperasional

  const estimasiProduksiKg =
    input.jumlahAyam * config.bobotPanen

  const hargaPokokPerKg = totalBiaya / estimasiProduksiKg
  const hargaJualDisarankan =
    hargaPokokPerKg * (1 + input.margin / 100)

  return {
    biayaPakan,
    biayaBibit,
    totalBiaya,
    estimasiProduksiKg,
    hargaPokokPerKg,
    hargaJualDisarankan,
  }
}
