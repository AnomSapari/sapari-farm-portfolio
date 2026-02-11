export type CatatanTernak = {
  id: string
  tanggal: string
  mode: "harian" | "mingguan"
  umurHari: number
  jenisAyam: "KUB" | "PELUNG"
  jumlahAyam: number
  pakan: {
    jenis: string
    jumlahKg: number
    harga: number
  }
  kesehatan: {
    status: "sehat" | "sakit"
    gejala?: string
    tindakan?: string
    biayaObat?: number
  }
}
