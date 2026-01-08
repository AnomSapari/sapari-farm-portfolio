const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Kontak & Informasi Sapari Farm
      </h1>

      <p className="text-gray-400 mb-10">
        Sapari Farm adalah usaha peternakan dan distribusi pakan ayam skala
        kecil–menengah yang berfokus pada edukasi dan solusi praktis untuk
        peternak.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Identitas */}
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-teal-400 mb-3">
            Identitas Usaha
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>📛 Nama Usaha: <strong>Sapari Farm</strong></li>
            <li>🐔 Fokus: Pakan Ayam & Edukasi Peternakan</li>
            <li>📍 Wilayah: Jawa Tengah (melayani sekitar)</li>
            <li>📆 Pengalaman: Dokumentasi real farm</li>
          </ul>
        </div>

        {/* Kontak */}
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-teal-400 mb-3">
            Hubungi Kami
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>📞 WhatsApp: 08xxxxxxxxxx</li>
            <li>⏰ Jam Operasional: 08.00 – 20.00 WIB</li>
            <li>📩 Konsultasi awal GRATIS</li>
          </ul>

          <a
            href="https://wa.me/6283891515097"
            target="_blank"
            className="inline-block mt-6 rounded-full bg-teal-500 px-6 py-3 text-black font-semibold"
          >
            Chat via WhatsApp
          </a>
        </div>
      </div>

      {/* Trust Section */}
      <div className="mt-12 bg-gray-900 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-teal-400 mb-4">
          Kenapa Sapari Farm?
        </h2>
        <ul className="list-disc ml-5 space-y-2 text-gray-300">
          <li>Berbasis pengalaman peternakan nyata</li>
          <li>Bukan sekadar jualan, tapi edukasi</li>
          <li>Perhitungan pakan transparan</li>
          <li>Siap bantu peternak pemula</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
