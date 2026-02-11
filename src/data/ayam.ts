export type JenisAyam =
  | "kub"
  | "broiler"
  | "petelur"
  | "pelung"

export const AYAM_CONFIG: Record<
  JenisAyam,
  {
    nama: string
    lamaSiklus: number        // hari
    konsumsiPakanPerHari: number // kg / ekor / hari
    hargaJualPerKg: number
    bobotPanen: number        // kg / ekor
  }
> = {
  broiler: {
    nama: "Broiler",
    lamaSiklus: 35,
    konsumsiPakanPerHari: 0.1,
    hargaJualPerKg: 22000,
    bobotPanen: 2,
  },

  petelur: {
    nama: "Petelur",
    lamaSiklus: 30,
    konsumsiPakanPerHari: 0.11,
    hargaJualPerKg: 26000,
    bobotPanen: 1.8,
  },

  kub: {
    nama: "Ayam KUB",
    lamaSiklus: 60,
    konsumsiPakanPerHari: 0.09,
    hargaJualPerKg: 28000,
    bobotPanen: 1.6,
  },

  pelung: {
    nama: "Ayam Pelung",
    lamaSiklus: 90,
    konsumsiPakanPerHari: 0.1,
    hargaJualPerKg: 35000,
    bobotPanen: 2.5,
  },
}
