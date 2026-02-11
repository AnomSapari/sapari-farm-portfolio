import { motion } from "framer-motion";
import { useState } from "react";
import OrderForm from "../../pages/Order/OrderForm";

interface ProductItem {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  stock?: string;
  waText?: string;
  shopeeLink?: string;
}

export default function Products() {
  const [selectedItem, setSelectedItem] = useState<ProductItem | null>(null);
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setSelectedItem(null);
    setOpen(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      {/* ===== ORDER FORM ===== */}
      {open && selectedItem && (
        <OrderForm
          productName={selectedItem.name}
          onClose={() => setOpen(false)}
        />
      )}

      {/* ===== MODAL DETAIL ===== */}
      {selectedItem && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-6"
            />

            <h2 className="text-3xl font-bold text-center text-green-600">
              {selectedItem.name}
            </h2>

            <p className="text-2xl font-bold text-center text-green-500">
              {selectedItem.price}
            </p>

            <p className="text-center text-gray-400 mb-6">
              {selectedItem.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* WA */}
              <a
                href={`https://wa.me/6283891515097?text=${encodeURIComponent(
                  selectedItem.waText ||
                    `Halo kak, saya tertarik ${selectedItem.name}`
                )}`}
                target="_blank"
                className="flex-1 bg-green-600 text-white py-3 rounded-xl text-center font-bold"
              >
                WhatsApp
              </a>

              {/* ORDER FORM */}
              <button
                onClick={() => setOpen(true)}
                className="flex-1 bg-emerald-500 text-white py-3 rounded-xl font-bold"
              >
                Pesan Sekarang
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}
