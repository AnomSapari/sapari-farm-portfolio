import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const sectionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

export const Contact = () => {
  const [status, setStatus] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',     // Ganti dengan Service ID Anda
      'YOUR_TEMPLATE_ID',    // Ganti dengan Template ID Anda
      e.currentTarget,
      'YOUR_PUBLIC_KEY'      // Ganti dengan Public Key Anda
    ).then(() => {
      setStatus('Pesan terkirim! Terima kasih, saya akan hubungi segera 🌿');
      e.currentTarget.reset();
    }, (error) => {
      setStatus('Gagal kirim: ' + error.text);
    });
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
        <form onSubmit={sendEmail} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
          <input type="text" name="name" placeholder="Nama Lengkap" required className="w-full px-6 py-4 rounded-xl border border-green-300 focus:border-green-600 outline-none" />
          <input type="email" name="email" placeholder="Email" required className="w-full px-6 py-4 rounded-xl border border-green-300 focus:border-green-600 outline-none" />
          <input type="tel" name="phone" placeholder="Nomor HP / WhatsApp" required className="w-full px-6 py-4 rounded-xl border border-green-300 focus:border-green-600 outline-none" />
          <textarea name="message" rows={6} placeholder="Pesan / Pertanyaan (misal: Mau pesan 100 ekor DOC KUB)" required className="w-full px-6 py-4 rounded-xl border border-green-300 focus:border-green-600 outline-none"></textarea>
          <button type="submit" className="w-full py-6 bg-green-600 text-white text-2xl font-bold rounded-2xl hover:bg-green-700 transition shadow-lg">
            Kirim Pesan 📩
          </button>
          {status && <p className="text-center text-xl font-semibold text-green-600">{status}</p>}
        </form>
      </div>
    </motion.section>
  );
};