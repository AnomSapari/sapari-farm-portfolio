// src/pages/Learning/Farming/utils/farming.ts
import { JenisAyam } from "../../../../data/ayam"

// --------------------
// Tipe untuk input kalkulator
// --------------------
export type HitungInput = {
  jenis: JenisAyam
  jumlahAyam: number
  usia: number // minggu
  hargaPakan: number
  hargaBibit: number
  biayaOperasional: number
  margin: number // persen
}

// --------------------
// Tipe untuk output kalkulator
// --------------------
export type HasilKalkulator = {
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

// --------------------
// Contoh fungsi hitung transparansi
// --------------------
export function hitungTransparansi(nilai: number): number {
  // misal: transparansi = nilai dibagi 100
  return nilai / 100
}

// --------------------
// Contoh fungsi kalkulator sederhana
// --------------------
export function kalkulasi(input: HitungInput): HasilKalkulator {
  const totalBibit = input.jumlahAyam * input.hargaBibit
  const totalPakanKg = input.jumlahAyam * input.usia * 0.1 // contoh konsumsi
  const totalPakan = totalPakanKg * input.hargaPakan
  const totalModal = totalBibit + totalPakan + input.biayaOperasional
  const hargaJualTotal = totalModal * (1 + input.margin / 100)
  const hargaJualPerEkor = hargaJualTotal / input.jumlahAyam
  const bepPerEkor = totalModal / input.jumlahAyam

  return {
    usia: input.usia,
    totalBibit,
    totalPakanKg,
    totalPakan,
    biayaOperasional: input.biayaOperasional,
    totalModal,
    bepPerEkor,
    hargaJualTotal,
    hargaJualPerEkor,
    margin: input.margin
  }
}
