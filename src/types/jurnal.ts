export type JurnalItem = {
  deskripsi: string
  biaya?: number
}

export type JurnalHarian = {
  judul: string
  items: JurnalItem[]
}

export type JurnalPakan = {
  id: string;
  tanggal: string;
  jumlahAyam: number;
  pakanKg: number;
};