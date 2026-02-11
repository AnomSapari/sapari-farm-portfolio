export type JurnalItem = {
  deskripsi: string
  biaya?: number
}

export type JurnalHarian = {
  judul: string
  items: JurnalItem[]
}
