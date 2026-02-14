import { JenisAyam, AYAM_CONFIG } from "@/data/ayam";

export function hitungKebutuhanPakan(
  jenis: JenisAyam,
  jumlahAyam: number,
  umurHari: number
) {
  const config = AYAM_CONFIG[jenis];

  if (!config) {
    return {
      perHari: 0,
      totalKg: 0,
    };
  }

  const perHari = config.konsumsiPakanPerHari * jumlahAyam;
  const totalKg = perHari * umurHari;

  return { perHari, totalKg };
}
