import { motion } from "framer-motion";

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
  media?: {
    type: "image" | "video";
    src: string;
  };
};

type Props = {
  data: TimelineItem[];
};

export default function Timeline({ data }: Props) {
  if (!data || data.length === 0) {
    return (
      <p className="text-white/50 text-sm">
        Belum ada data perjalanan ternak.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {data.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border border-white/10 rounded-xl p-4 bg-white/5"
        >
          <p className="text-xs text-emerald-400">{item.date}</p>

          <h3 className="font-semibold text-lg mt-1">
            {item.title}
          </h3>

          <p className="text-white/70 text-sm mt-1">
            {item.description}
          </p>

          {/* MEDIA (IMAGE / VIDEO) */}
          {item.media && (
            <div className="mt-4">
              {item.media.type === "video" ? (
                <video
                  src={item.media.src}
                  controls
                  className="w-full rounded-lg aspect-video"
                />
              ) : (
                <img
                  src={item.media.src}
                  alt={item.title}
                  className="w-full rounded-lg"
                />
              )}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
