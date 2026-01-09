import { useState } from 'react';
import { motion } from 'framer-motion';

// Import tab (pastikan path sesuai folder Anda)
import FarmPakan from './FarmPakan';
import FarmKalkulatorPakan from '../components/FarmKalkulatorPakan';
import FarmCatatan from './FarmCatatan';
import FarmPerjalanan from './FarmPerjalanan';

const tabs = [
  { id: 'pakan', label: 'Tabel Pakan' },
  { id: 'kalkulator', label: 'Kalkulator Pakan' },
  { id: 'catatan', label: 'Catatan Harian' },
  { id: 'perjalanan', label: 'Perjalanan' },
];

const FarmDashboard = () => {
  const [activeTab, setActiveTab] = useState('pakan');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'pakan':
        return <FarmPakan />;
      case 'kalkulator':
        return <FarmKalkulatorPakan />;
      case 'catatan':
        return <FarmCatatan />;
      case 'perjalanan':
        return <FarmPerjalanan />;
      default:
        return (
          <div className="text-center text-red-500 text-2xl font-bold p-10">
            Tab tidak ditemukan (activeTab: {activeTab})
          </div>
        );
    }
  };

  return (
   <section className="min-h-screen pt-24 md:pt-28 px-6 md:px-12 pb-10 text-white bg-gradient-to-b from-gray-900 to-black">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center space-y-4 mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-teal-400">
          Sapari Farm Dashboard
        </h1>
        <p className="text-gray-400 md:text-lg">
          Kelola semua catatan peternakan ayam KUB dalam satu tempat
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-center mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-teal-500 text-black shadow-lg scale-105'
                : 'bg-gray-800/50 text-white hover:bg-gray-700 border border-teal-500/30 hover:scale-105'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {renderTabContent()}
      </motion.div>
    </section>
  );
};

export default FarmDashboard;