import { motion } from 'framer-motion';
import { useState, ChangeEvent } from 'react';
import {
  IconCodeCircle,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandVue,
  IconBrandNuxt,
  IconBrandSvelte,
  IconBrandTailwind,
} from '@tabler/icons-react';

import { SectionHeader } from '../components/SectionHeader';
import { SkillCard } from '../components/SkillCard';

export default function Resume() {
  const [resumeFile, setResumeFile] = useState<string | null>(localStorage.getItem('resumeFile'));
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file.type !== 'application/pdf') {
        alert('Hanya file PDF yang diizinkan!');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert('Ukuran file maksimal 5MB!');
        return;
      }

      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        localStorage.setItem('resumeFile', base64);
        setResumeFile(base64);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    if (resumeFile) {
      const a = document.createElement('a');
      a.href = resumeFile;
      a.download = 'AnomSapari_Resume.pdf';
      a.click();
    }
  };

  const handleClear = () => {
    localStorage.removeItem('resumeFile');
    setResumeFile(null);
  };


  const sectionDescription = 'List of my skills';

  const skills = [
    { label: 'React Js', icon: <IconBrandReact /> },
    { label: 'Next Js', icon: <IconBrandNextjs /> },
    { label: 'Vue Js', icon: <IconBrandVue /> },
    { label: 'Nuxt Js', icon: <IconBrandNuxt /> },
    { label: 'Svelte Js', icon: <IconBrandSvelte /> },
    { label: 'Tailwind CSS', icon: <IconBrandTailwind /> },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* ===== BAGIAN SKILLS (DI ATAS) ===== */}
        <div className="space-y-8">
          <SectionHeader
            icon={<IconCodeCircle size={40} />}
            label="Skills & Expertise"
            description={sectionDescription}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
            ))}
          </div>
        </div>

        {/* ===== BAGIAN RESUME/CV (DI BAWAH) ===== */}
        <div className="text-center space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-teal-600 dark:text-teal-400">
            Resume Pribadi Anom Sapari
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Upload CV/Resume Anda untuk dibagikan atau di-download.
          </p>

          {/* Upload Form */}
          <div className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <input
              type="file"
              accept="application/pdf"
              onChange={handleUpload}
              disabled={isUploading}
              className="w-full text-gray-200 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-teal-500 file:text-white hover:file:bg-teal-600"
            />
            {isUploading && <p className="mt-4 text-teal-400 animate-pulse">Mengupload...</p>}
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Hanya PDF, maksimal 5MB (disimpan sementara di browser Anda).
            </p>
          </div>

          {/* Preview & Download */}
          {resumeFile ? (
            <div className="space-y-6 max-w-4xl mx-auto">
              <embed
                src={resumeFile}
                type="application/pdf"
                className="w-full h-96 md:h-[700px] lg:h-[900px] rounded-xl shadow-2xl border border-gray-300 dark:border-gray-700"
              />
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={handleDownload}
                  className="px-10 py-5 bg-teal-600 hover:bg-teal-700 text-white text-xl font-bold rounded-2xl transition shadow-lg flex-1"
                >
                  Download Resume PDF
                </button>
                <button
                  onClick={handleClear}
                  className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white text-xl font-bold rounded-2xl transition shadow-lg flex-1"
                >
                  Hapus Resume
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 mt-10 text-lg">
              Belum ada resume diupload. Mulai sekarang!
            </p>
          )}
        </div>
      </div>
    </motion.section>
  );
}