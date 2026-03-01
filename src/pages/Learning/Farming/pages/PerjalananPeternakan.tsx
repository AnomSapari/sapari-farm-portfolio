import Timeline from "@/components/timeline/Timeline";
import { timeline } from "@/components/timeline/timelineData";

export default function PerjalananPeternakan() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-20">
      
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          🐔 Perjalanan Sapari Farm
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Dokumentasi perkembangan dan perjalanan peternakan dari awal hingga sekarang.
        </p>
      </div>

      {/* TIMELINE */}
      <Timeline data={timeline} />

    </section>
  );
}