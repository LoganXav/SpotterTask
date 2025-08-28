import { create } from 'zustand';

type ThemeMode = 'light' | 'dark' | 'media';

interface ThemeState {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  themeMode: 'media', // default (system preference)
  setThemeMode: (mode) => set({ themeMode: mode }),
}));
