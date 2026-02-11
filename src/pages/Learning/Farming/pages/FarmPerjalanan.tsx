import FarmingSubNav from "../components/FarmingSubNav";

export default function FarmPerjalanan() {
  return (
    <div className="space-y-6">
      <FarmingSubNav />

      <h1 className="text-2xl font-bold">
        Perjalanan Ternak Ayam
      </h1>

      <p className="text-white/70">
        Catatan perkembangan ayam KUB dan Pelung dari hari ke hari.
      </p>

      <div className="rounded-xl border border-white/10 p-4">
        <p className="text-sm text-white/60">
          (nanti di sini: timeline harian / mingguan)
        </p>
      </div>
    </div>
  );
}
