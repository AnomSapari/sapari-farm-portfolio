import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

interface Props {
  data: TimelineItem[];
}

export default function Timeline({ data }: Props) {
  return (
    <div className="relative max-w-6xl mx-auto">

      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-500 h-full"></div>

      <div className="space-y-24">
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              {/* Card */}
              <div className="w-1/2 px-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:scale-105 transition duration-300">

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-green-600 font-bold text-lg">
                      {item.year}
                    </h3>

                    <h2 className="text-xl font-semibold mt-2">
                      {item.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-600 rounded-full border-4 border-white dark:border-gray-900"></div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}