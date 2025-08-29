import { useThemeStore } from '@/store/use-theme-store';

function useThemeMode() {
  const themeMode = useThemeStore((state) => state.themeMode);
  const setThemeMode = useThemeStore((state) => state.setThemeMode);

  return [themeMode, setThemeMode] as const;
}

export default useThemeMode;
