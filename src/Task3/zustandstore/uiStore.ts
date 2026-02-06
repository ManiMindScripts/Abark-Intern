import { create } from "zustand"

type Theme = "light" | "dark"

interface UIState {
  isCartOpen: boolean
  theme: Theme

  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  toggleTheme: () => void
}

export const useUIStore = create<UIState>((set) => ({
  isCartOpen: false,
  theme: "light",

  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  toggleCart: () =>
    set((state) => ({ isCartOpen: !state.isCartOpen })),

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}))