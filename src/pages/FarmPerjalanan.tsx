import { useState, useEffect, ChangeEvent } from 'react';
import { motion } from 'framer-motion';

type Entry = {
  id: number;
  tanggal: string;
  catatan: string;
  media?: string[]; // base64 string
};

const LOCAL_STORAGE_KEY = 'farmPerjalanan';

const FarmPerjalanan: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [catatan, setCatatan] = useState('');
  const [tanggal, setTanggal] = useState(new Date().toISOString().slice(0, 10));
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const valid = parsed.map((entry: any) => ({
          ...entry,
          media: Array.isArray(entry.media) ? entry.media : [], // Fix aman
        }));
        setEntries(valid);
      } catch (e) {
        console.error('Error parsing localStorage:', e);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
    }
    setLoading(false);
  }, []);

  const handleMediaChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setMediaFiles(Array.from(e.target.files));
  };

  const handleAddEntry = () => {
    if (!catatan.trim()) {
      alert('Isi catatan dulu ya!');
      return;
    }

    const readFiles = mediaFiles.map(
      (file) =>
        new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        })
    );

    Promise.all(readFiles).then((media) => {
      const newEntry: Entry = {
        id: Date.now(),
        tanggal,
        catatan,
        media,
      };
      const updated = [newEntry, ...entries];
      setEntries(updated);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      setCatatan('');
      setMediaFiles([]);
    });
  };

  const handleDeleteEntry = (id: number) => {
    if (window.confirm('Hapus catatan ini?')) {
      const updated = entries.filter((e) => e.id !== id);
      setEntries(updated);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    }
  };

  if (loading) return <p className="text-center text-gray-400">Memuat data...</p>;

  return (
    <section className="min-h-screen p-6 md:p-12 text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold">Perjalanan Sapari Farm</h1>
        <p className="text-gray-400 md:text-lg">
          Catat aktivitas harian dan unggah foto/video untuk dokumentasi.
        </p>
      </motion.div>

      {/* Form Input */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4"
      >
        <div>
          <label className="block text-sm mb-1 text-gray-300">Tanggal</label>
          <input
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            className="w-full rounded-lg bg-black border border-white/20 px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">Catatan</label>
          <textarea
            value={catatan}
            onChange={(e) => setCatatan(e.target.value)}
            className="w-full rounded-lg bg-black border border-white/20 px-3 py-2"
            rows={4}
            placeholder="Catat aktivitas hari ini (vaksin, pakan, kesehatan ayam, dll)..."
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">Upload Foto/Video (opsional)</label>
          <input
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={handleMediaChange}
            className="w-full text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-teal-500 file:text-white hover:file:bg-teal-600"
          />
        </div>

        <button
          onClick={handleAddEntry}
          disabled={!catatan.trim()}
          className="mt-4 w-full rounded-xl bg-teal-600 px-4 py-3 text-white font-bold hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Tambah Catatan
        </button>
      </motion.div>

      {/* Entries */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto mt-12 space-y-8"
      >
        {entries.length === 0 ? (
          <p className="text-gray-400 text-center text-xl">Belum ada catatan perjalanan. Mulai tambah sekarang!</p>
        ) : (
          entries.map((entry) => (
            <div
              key={entry.id}
              className="border border-white/20 rounded-2xl p-6 bg-white/5 backdrop-blur-sm space-y-4 relative"
            >
              <div className="flex justify-between items-start">
                <span className="text-gray-400 text-sm">{entry.tanggal}</span>
                <button
                  onClick={() => handleDeleteEntry(entry.id)}
                  className="text-red-400 hover:text-red-600 transition"
                >
                  Hapus
                </button>
              </div>
              <p className="text-gray-200 whitespace-pre-wrap">{entry.catatan}</p>

              {/* Media Gallery - Aman */}
              {entry.media && Array.isArray(entry.media) && entry.media.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {entry.media.map((src, idx) => (
                    <div key={idx} className="relative rounded-lg overflow-hidden">
                      {src.startsWith('data:video') ? (
                        <video
                          src={src}
                          controls
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      ) : (
                        <img
                          src={src}
                          alt={`media-${idx}`}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </motion.div>
    </section>
  );
};

export default FarmPerjalanan;