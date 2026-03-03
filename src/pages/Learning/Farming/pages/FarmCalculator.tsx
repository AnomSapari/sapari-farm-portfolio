import { useState } from "react";

export default function FarmCalculator() {

  const [price, setPrice] = useState(35000);
  const [weight, setWeight] = useState(1.8);
  const [chicken, setChicken] = useState(100);

  const income = price * weight * chicken;

  return (

    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Kalkulator Panen
      </h1>

      <div className="bg-zinc-900 p-6 rounded-xl space-y-4">

        <input
          type="number"
          className="w-full p-2 bg-zinc-800 rounded"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Harga per kg"
        />

        <input
          type="number"
          className="w-full p-2 bg-zinc-800 rounded"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          placeholder="Berat ayam"
        />

        <input
          type="number"
          className="w-full p-2 bg-zinc-800 rounded"
          value={chicken}
          onChange={(e) => setChicken(Number(e.target.value))}
          placeholder="Jumlah ayam"
        />

        <h2 className="text-xl font-bold text-green-400">
          Estimasi Pendapatan
        </h2>

        <p>
          Rp {income.toLocaleString()}
        </p>

      </div>

    </div>
  );
}