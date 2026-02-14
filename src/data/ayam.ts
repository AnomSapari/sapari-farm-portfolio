export type JenisAyam = "KUB" | "PELUNG" | "PETELUR";


export const AYAM_CONFIG: Record<
  JenisAyam,
  {
    konsumsiPakanPerHari: number;
    lamaSiklus: number;
    bobotPanen: number;
  }
> = {
  KUB: {
    konsumsiPakanPerHari: 0.1,   // 100 gr
    lamaSiklus: 70,
    bobotPanen: 1.2,
  },

  PELUNG: {
    konsumsiPakanPerHari: 0.12,  // 120 gr
    lamaSiklus: 90,
    bobotPanen: 1.8,
  },

  PETELUR: {
    konsumsiPakanPerHari: 0.12,  // 110–125 gr realistis
    lamaSiklus: 365,             // siklus tahunan
    bobotPanen: 1.6,             // opsional (boleh 0 kalau tidak panen daging)
  },
};

