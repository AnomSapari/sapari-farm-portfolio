import { create } from "zustand";

export type JurnalItem = {
  id: string;
  tanggal: string;
  jenisAyam: string;
  jumlahAyam: number;
  catatan?: string;
  media?: {
    type: "image" | "video";
    src: string; // base64 / url
  };
};

type JurnalState = {
  jurnal: JurnalItem[];
  tambahJurnal: (data: JurnalItem) => void;
  loadJurnal: () => void;
};

export const useJurnalStore = create<JurnalState>((set) => ({
  jurnal: [],

  loadJurnal: () => {
    const saved = localStorage.getItem("jurnal-ternak");
    if (saved) {
      set({ jurnal: JSON.parse(saved) });
    }
  },

  tambahJurnal: (data) =>
    set((state) => {
      const updated = [...state.jurnal, data];
      localStorage.setItem("jurnal-ternak", JSON.stringify(updated));
      return { jurnal: updated };
    }),
}));
