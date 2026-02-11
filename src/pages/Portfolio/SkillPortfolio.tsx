import { motion } from "framer-motion";
import { useState } from "react";

interface SkillItem {
  id: number;
  title: string;
  description: string;
  tools: string[];
  image: string;
  projectLink?: string;
}

const skills: SkillItem[] = [
  {
    id: 1,
    title: "Administrasi Usaha Mandiri",
    description:
      "Pencatatan modal, pengeluaran, dan laporan usaha ternak ayam KUB secara terstruktur.",
    tools: ["Microsoft Excel"],
    image: "/images/skill-admin.jpg",
    projectLink: "/learning/farming/perjalanan",
  },
  {
    id: 2,
    title: "Analisis Keuangan Usaha",
    description:
      "Perhitungan biaya produksi, grafik pengeluaran, dan monitoring pakan.",
    tools: ["Microsoft Excel"],
    image: "/images/skill-excel.jpg",
    projectLink: "/learning/farming/perjalanan",
  },
  {
    id: 3,
    title: "Visualisasi Data",
    description:
      "Menyajikan data usaha ternak dalam bentuk visual yang mudah dipahami.",
    tools: ["Canva"],
    image: "/images/skill-canva.jpg",
  },
];

export default function SkillPortfolio() {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  return (
    <section className="pt-20 pb-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="text-center space-y-4 mb-14 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Skill Portfolio
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
          Dokumentasi skill berbasis praktik nyata usaha ternak ayam KUB
        </p>
      </div>

      {/* Grid Skill */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            whileHover={{ scale: 1.04 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            onClick={() => setSelectedSkill(skill)}
          >
            <img
              src={skill.image}
              alt={skill.title}
              className="w-full h-52 object-cover"
              onError={(e) => {
                e.currentTarget.src = "/images/placeholder.jpg";
              }}
            />

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Tools: {skill.tools.join(", ")}
              </p>

              {skill.projectLink && (
                <p className="mt-3 text-sm font-semibold text-green-600">
                  🔗 Terhubung dengan proyek
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Detail Skill */}
      {selectedSkill && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedSkill(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4 text-center">
              {selectedSkill.title}
            </h2>

            <p className="text-gray-700 dark:text-gray-300 text-center mb-4">
              {selectedSkill.description}
            </p>

            <p className="text-sm text-center text-gray-500 mb-6">
              Tools: {selectedSkill.tools.join(", ")}
            </p>

            {selectedSkill.projectLink && (
              <a
                href={selectedSkill.projectLink}
                className="block w-full text-center py-3 mb-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl"
              >
                🔍 Lihat Proyek Nyata
              </a>
            )}

            <button
              onClick={() => setSelectedSkill(null)}
              className="w-full py-3 bg-gray-300 dark:bg-gray-700 rounded-xl font-semibold"
            >
              Tutup
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
