import { motion } from 'framer-motion';
import { useState, ChangeEvent } from 'react';

export default function Resume() {
  const [resumeFile, setResumeFile] = useState<string | null>(localStorage.getItem('resumeFile'));

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file.type !== 'application/pdf') {
        alert('Hanya PDF yang diizinkan!');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        localStorage.setItem('resumeFile', base64);
        setResumeFile(base64);
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

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-600 dark:text-teal-400">
          Resume Pribadi Anom Sapari
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Upload CV/Resume Anda untuk dibagikan atau di-download.
        </p>

        {/* Upload Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleUpload}
            className="w-full text-gray-200"
          />
          <p className="mt-4 text-gray-500">
            Hanya PDF, max 5MB (untuk simpan lokalStorage sementara).
          </p>
        </div>

        {/* Preview & Download */}
        {resumeFile ? (
          <div className="space-y-4 mt-8">
            <embed src={resumeFile} type="application/pdf" className="w-full h-96 md:h-[600px]" />
            <button
              onClick={handleDownload}
              className="px-8 py-4 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700"
            >
              Download Resume
            </button>
          </div>
        ) : (
          <p className="text-gray-500">Belum ada resume diupload. Mulai sekarang!</p>
        )}
      </div>
    </motion.section>
  );
}