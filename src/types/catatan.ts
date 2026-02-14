export type ModeCatatan = "harian" | "mingguan";
export type JenisAyam = "KUB" | "PELUNG";

export type CatatanTernak = {
  id: string;
  tanggal: string;
  mode: ModeCatatan;
  jenisAyam: JenisAyam;
  jumlahAyam: number;
  biaya: number;
  catatan?: string; 
};
