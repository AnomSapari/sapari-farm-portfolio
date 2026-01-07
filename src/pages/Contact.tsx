import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const sectionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

export const Contact = () => {
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null); // Tambah ref untuk form

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    if (!formRef.current) {
      setStatus('Form tidak ditemukan');
      setIsLoading(false);
      return;
    }

    try {
      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setStatus('Pesan terkirim! Terima kasih, saya akan hubungi segera 🌿');
        formRef.current.reset(); // Reset pakai ref
      } else {
        throw new Error('Respons tidak sukses');
      }
    } catch (error: any) {
      setStatus('Terjadi kesalahan saat mengirim. Coba lagi atau cek inbox Anda.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      initial={sectionVariants.initial}
      whileInView={sectionVariants.animate}
      transition={sectionVariants.transition}
      viewport={{ once: true }}
      className="space-y-12 py-16 bg-green-50 dark:bg-gray-900"
    >
      <div className="text-center space-y-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-green-700 dark:text-green-400">
          Hubungi Sapari Farm
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Pesan DOC Ayam KUB, ID Card Kulit, atau konsultasi peternakan
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-6">
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
          <input type="text" name="name" placeholder="Nama Lengkap" required className="w-full px-6 py-4 rounded-xl border border-green-300 focus:border-green-600 outline-none bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100" />
          <input type="email" name="email" placeholder="Email" required className="w-full px-6 py-4 rounded-xl border border-green-300 focus:border-green-600 outline-none bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100" />
          <input type="tel" name="phone" placeholder="Nomor HP / WhatsApp" required className="w-full px-6 py-4 rounded-xl border border-green-300 focus:border-green-600 outline-none bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100" />
          <textarea name="message" rows={6} placeholder="Pesan / Pertanyaan (misal: Mau pesan 100 ekor DOC KUB)" required className="w-full px-6 py-4 rounded-xl border border-green-300 focus:border-green-600 outline-none bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"></textarea>

          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full py-6 text-white text-2xl font-bold rounded-2xl shadow-lg transition ${
              isLoading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isLoading ? 'Mengirim...' : 'Kirim Pesan 📩'}
          </button>

          {status && (
            <p className={`text-center text-xl font-semibold ${status.includes('kesalahan') ? 'text-red-600' : 'text-green-600'}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
};