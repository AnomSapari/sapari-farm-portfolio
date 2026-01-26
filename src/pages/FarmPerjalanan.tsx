import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type MediaItem = {
  id: number;
  type: 'image' | 'video';
  url: string;
  tanggal: string;
};

const FarmPerjalanan = () => {
  const [media, setMedia] = useState<MediaItem[]>([]);

  // Load dari localStorage
  useEffect(() => {
    const saved = localStorage.getItem('farmJourneyMedia');
    if (saved) {
      setMedia(JSON.parse(saved));
    }
  }, []);

  // Simpan ke localStorage
  const saveMedia = (items: MediaItem[]) => {
    setMedia(items);
    localStorage.setItem('farmJourneyMedia', JSON.stringify(items));
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newItems: MediaItem[] = Array.from(files).map((file) => ({
      id: Date.now() + Math.random(),
      type: file.type.startsWith('video') ? 'video' : 'image',
      url: URL.createObjectURL(file),
      tanggal: new Date().toLocaleDateString('id-ID'),
    }));

    saveMedia([...newItems, ...media]);
  };

  return (
    <section className="max-w-6xl mx-auto mt-8 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-4"
      >
        📸 Perjalanan Sapari Farm
      </motion.h2>

      <p className="text-gray-400 mb-6">
        Dokumentasi foto & video kegiatan harian (kamera HP langsung bisa).
      </p>

      {/* Upload */}
      <label className="inline-block mb-6 cursor-pointer">
        <input
          type="file"
          accept="image/*,video/*"
          capture
          multiple
          className="hidden"
          onChange={handleUpload}
        />
        <span className="px-5 py-2 rounded-xl bg-teal-500 text-black hover:bg-teal-400 transition">
          + Ambil Foto / Video
        </span>
      </label>

      {/* Gallery */}
      {media.length === 0 ? (
        <p className="text-gray-500">Belum ada dokumentasi.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {media.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden border border-white/10 bg-black"
            >
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt="Dokumentasi Farm"
                  className="w-full h-40 object-cover"
                />
              ) : (
                <video
                  src={item.url}
                  controls
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-2 text-xs text-gray-400">
                {item.tanggal}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FarmPerjalanan;
