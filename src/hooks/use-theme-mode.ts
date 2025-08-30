import { useMediaQuery } from '@mui/material';
import { useThemeStore } from '@/store/use-theme-store';

function useThemeMode() {
  const themeMode = useThemeStore((state) => state.themeMode);
  const setThemeMode = useThemeStore((state) => state.setThemeMode);
  const isSystemDark = useMediaQuery('(prefers-color-scheme: dark)');

  const isDarkMode =
    (themeMode === 'media' && isSystemDark) || themeMode === 'dark';

  return { themeMode, setThemeMode, isDarkMode } as const;
}

export default useThemeMode;
