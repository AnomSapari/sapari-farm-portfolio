export default function FarmJourney() {

  return (

    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Perjalanan Ternak
      </h1>

      <div className="bg-zinc-900 p-6 rounded-xl">

        <table className="w-full">

          <thead className="text-zinc-400">
            <tr>
              <th>Umur</th>
              <th>Berat</th>
              <th>Catatan</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>7 Hari</td>
              <td>120 gr</td>
              <td>Sehat</td>
            </tr>

            <tr>
              <td>14 Hari</td>
              <td>280 gr</td>
              <td>Mulai grower</td>
            </tr>

            <tr>
              <td>17 Minggu</td>
              <td>1.8 kg</td>
              <td>Siap jual</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}