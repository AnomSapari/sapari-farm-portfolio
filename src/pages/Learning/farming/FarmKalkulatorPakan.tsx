import { useState } from 'react'
import KalkulatorForm from '../../../components/Kalkulator/KalkulatorForm'
import KalkulatorResult from '../../../components/Kalkulator/KalkulatorResult'
import { hitungTransparansi } from './kalkulator'
import { JenisAyam } from '../../../data/ayam'



export default function FarmKalkulatorPakan() {
  const [jenis, setJenis] = useState<JenisAyam>('kub')
  const [jumlahAyam, setJumlahAyam] = useState(0)
  const [hargaPakan, setHargaPakan] = useState(12000)
  const [hargaBibit, setHargaBibit] = useState(6000)
  const [biayaOperasional, setBiayaOperasional] = useState(0)
  const [margin, setMargin] = useState(15)

  const hasil =
    jumlahAyam > 0
      ? hitungTransparansi({
          jenis,
          jumlahAyam,
          hargaPakan,
          hargaBibit,
          biayaOperasional,
          margin,
        })
      : null

  return (
    <div className="space-y-6">
      <KalkulatorForm
        {...{
          jenis,
          setJenis,
          jumlahAyam,
          setJumlahAyam,
          hargaPakan,
          setHargaPakan,
          hargaBibit,
          setHargaBibit,
          biayaOperasional,
          setBiayaOperasional,
          margin,
          setMargin,
        }}
      />

      {hasil && <KalkulatorResult hasil={hasil} />}
    </div>
  )
}
