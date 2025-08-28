import React from 'react';
import useThemeMode from '~/hooks/use-theme-mode';
import type { Palette } from '@mui/material/styles';
import { darkTheme, lightTheme } from '~/styles/theme';
import { ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';

function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const isSystemDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeMode] = useThemeMode();

  const isDark =
    (themeMode === 'media' && isSystemDark) || themeMode === 'dark';

  const theme = isDark ? darkTheme : lightTheme;

  React.useEffect(() => {
    const body = document.body;

    if (isDark) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }

    // Expose palette colors as CSS variables
    const paletteKeys: (keyof Palette)[] = [
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'error',
      'common',
      'text',
      'background',
      'action',
    ];

    paletteKeys.forEach((paletteKey) => {
      const section = theme.palette[paletteKey];

      if (section && typeof section === 'object') {
        const sectionObj = section as Record<
          string,
          string | number | undefined
        >;

        Object.entries(sectionObj).forEach(([colorKey, value]) => {
          if (typeof value === 'string' || typeof value === 'number') {
            document.documentElement.style.setProperty(
              `--color-mui-${paletteKey}-${colorKey}`,
              String(value)
            );
          }
        });
      }
    });
  }, [isDark, theme.palette]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
