import Timeline from "@/components/timeline/Timeline";
import { timeline } from "@/components/timeline/timelineData";

export default function PerjalananPeternakan() {
  return (
    <section className="min-h-screen px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-10">
        Perjalanan Peternakan Sapari Farm
      </h1>

      <Timeline data={timeline} />
    </section>
  );
}
