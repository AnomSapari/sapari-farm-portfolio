import { useState } from "react";
import {
  shippingOptions,
  paymentOptions,
  type ShippingOption,
  type PaymentOption,
} from "./orderData";

type Props = {
  productName?: string;
  onClose: () => void;
};

export default function OrderForm({ productName, onClose }: Props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [shipping, setShipping] = useState<ShippingOption>(shippingOptions[0]);
  const [payment, setPayment] = useState<PaymentOption>(paymentOptions[0]);
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    const message = `
Halo Sapari Farm 👋

📦 Produk: ${productName || "-"}
👤 Nama: ${name}
📍 Alamat: ${address}

🚚 Pengiriman: ${shipping.label}
💰 Ongkir: Rp ${shipping.price.toLocaleString()}

💳 Pembayaran: ${payment.label}

📝 Catatan:
${note || "-"}

Terima kasih 🙏
    `;

    window.open(
      `https://wa.me/6283891515097?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 w-full max-w-lg rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-center text-emerald-600">
          Form Pemesanan
        </h2>

        <input
          className="w-full border rounded-lg p-3"
          placeholder="Nama lengkap"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="w-full border rounded-lg p-3"
          placeholder="Alamat pengiriman"
          rows={3}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <select
          className="w-full border rounded-lg p-3"
          value={shipping.id}
          onChange={(e) =>
            setShipping(
              shippingOptions.find((s) => s.id === e.target.value)!
            )
          }
        >
          {shippingOptions.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label} (+Rp {opt.price.toLocaleString()})
            </option>
          ))}
        </select>

        <select
          className="w-full border rounded-lg p-3"
          value={payment.id}
          onChange={(e) =>
            setPayment(
              paymentOptions.find((p) => p.id === e.target.value)!
            )
          }
        >
          {paymentOptions.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>

        <textarea
          className="w-full border rounded-lg p-3"
          placeholder="Catatan tambahan"
          rows={2}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-emerald-600 text-white py-3 rounded-xl font-semibold"
          >
            Kirim via WhatsApp
          </button>

          <button
            onClick={onClose}
            className="flex-1 bg-gray-300 py-3 rounded-xl"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}
