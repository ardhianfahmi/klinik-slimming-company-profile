import { create } from "zustand";

// Define types for your store
interface AppState {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;

  user: { name: string; email: string } | null;
  setUser: (user: { name: string; email: string } | null) => void;
}

// Create Zustand store
export const useStore = create<AppState>((set) => ({
  // Dark mode state
  darkMode: false,
  setDarkMode: (value) => set({ darkMode: value }),

  // User state
  user: null,
  setUser: (user) => set({ user }),
}));
