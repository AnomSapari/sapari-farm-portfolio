export type ShippingOption = {
  id: string;
  label: string;
  price: number;
};

export type PaymentOption = {
  id: string;
  label: string;
};

export const shippingOptions: ShippingOption[] = [
  { id: "pickup", label: "Ambil di lokasi", price: 0 },
  { id: "jne", label: "JNE", price: 20000 },
  { id: "jnt", label: "J&T", price: 18000 },
];

export const paymentOptions: PaymentOption[] = [
  { id: "transfer", label: "Transfer Bank" },
  { id: "cod", label: "COD" },
  { id: "ewallet", label: "E-Wallet (Dana / OVO)" },
];
