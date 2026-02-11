import { useState } from "react";

// components global
import KalkulatorForm from "../../../../components/Kalkulator/KalkulatorForm";
import KalkulatorResult from "../../../../components/Kalkulator/KalkulatorResult";

// utils farming
import { HitungInput, HasilKalkulator, kalkulasi } from "../utils/farming";

// data
import { JenisAyam } from "../../../../data/ayam";

export default function FarmKalkulator() {
  const [jenis, setJenis] = useState<JenisAyam>("kub");
  const [jumlahAyam, setJumlahAyam] = useState(0);
  const [usia, setUsia] = useState(1); // usia ayam
  const [hargaPakan, setHargaPakan] = useState(12000);
  const [hargaBibit, setHargaBibit] = useState(6000);
  const [biayaOperasional, setBiayaOperasional] = useState(0);
  const [margin, setMargin] = useState(15);

  const input: HitungInput = {
    jenis,
    jumlahAyam,
    usia,
    hargaPakan,
    hargaBibit,
    biayaOperasional,
    margin,
  };

  const hasil: HasilKalkulator | null =
    jumlahAyam > 0 ? kalkulasi(input) : null;

  return (
    <div className="space-y-6">
      <KalkulatorForm
        jenis={jenis}
        setJenis={setJenis}
        jumlahAyam={jumlahAyam}
        setJumlahAyam={setJumlahAyam}
        usia={usia}
        setUsia={setUsia}
        hargaPakan={hargaPakan}
        setHargaPakan={setHargaPakan}
        hargaBibit={hargaBibit}
        setHargaBibit={setHargaBibit}
        biayaOperasional={biayaOperasional}
        setBiayaOperasional={setBiayaOperasional}
        margin={margin}
        setMargin={setMargin}
      />

      {hasil && <KalkulatorResult hasil={hasil} />}
    </div>
  );
}
