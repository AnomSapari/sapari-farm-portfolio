import type { JenisAyam } from "@/data/ayam";

type Props = {
  jenis: JenisAyam;
  setJenis: (v: JenisAyam) => void;
  jumlahAyam: number;
  setJumlahAyam: (v: number) => void;
  usia: number;
  setUsia: (v: number) => void;
};

export default function KalkulatorForm(props: Props) {
  return (
    <div className="bg-gray-900 p-4 rounded space-y-3">
      <select
        value={props.jenis}
        onChange={(e) => props.setJenis(e.target.value as JenisAyam)}
      >
        <option value="KUB">Ayam KUB</option>
        <option value="PELUNG">Ayam Pelung</option>
      </select>

      <input
        type="number"
        placeholder="Jumlah ayam"
        value={props.jumlahAyam}
        onChange={(e) => props.setJumlahAyam(+e.target.value)}
      />

      <input
        type="number"
        placeholder="Usia (hari)"
        value={props.usia}
        onChange={(e) => props.setUsia(+e.target.value)}
      />
    </div>
  );
}
