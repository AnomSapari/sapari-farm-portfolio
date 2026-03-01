import { create } from "zustand"

export type Expense = {
  item: string
  qty: number
  cost: number
}

export type JournalItem = {
  tanggal: string
  keterangan: string
  jumlah: number
}

export type JournalState = {
  expenses: Expense[]
  items: JournalItem[]

  addExpense: (expense: Expense) => void
  addItem: (item: JournalItem) => void
}

const useJournalStore = create<JournalState>((set) => ({
  expenses: [],
  items: [],

  addExpense: (expense) =>
    set((state) => ({
      expenses: [...state.expenses, expense],
    })),

  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
}))

export default useJournalStore
