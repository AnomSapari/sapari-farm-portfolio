export type JenisAyam = 'broiler' | 'petelur' | 'kub'

export const AYAM_CONFIG = {
  broiler: {
    nama: 'Broiler',
    lamaSiklus: 35,
    konsumsiPakanPerHari: 0.1, // kg
    hargaJualPerKg: 22000,
    bobotPanen: 2,
  },
  petelur: {
    nama: 'Petelur',
    lamaSiklus: 30,
    konsumsiPakanPerHari: 0.11,
    hargaJualPerKg: 26000,
    bobotPanen: 1.8,
  },
  kub: {
    nama: 'Ayam KUB',
    lamaSiklus: 60,
    konsumsiPakanPerHari: 0.09,
    hargaJualPerKg: 28000,
    bobotPanen: 1.6,
  },
}
