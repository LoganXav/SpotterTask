import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import useThemeMode from '~/hooks/use-theme-mode';

export default function ThemeToggler() {
  const [themeMode, setThemeMode] = useThemeMode();

  const toggle = () => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <IconButton color="inherit" onClick={toggle}>
      {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}
