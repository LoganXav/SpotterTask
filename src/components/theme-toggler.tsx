import {
  IconButton,
  ListSubheader,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import React from 'react';
import useThemeMode from '@/hooks/use-theme-mode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

export default function ThemeToggler() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { themeMode, setThemeMode } = useThemeMode();

  const [resolvedMode, setResolvedMode] = React.useState<'light' | 'dark'>(
    'light'
  );

  React.useEffect(() => {
    if (themeMode === 'media') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const getSystemTheme = () =>
        setResolvedMode(mediaQuery.matches ? 'dark' : 'light');

      getSystemTheme();
      mediaQuery.addEventListener('change', getSystemTheme);
      return () => mediaQuery.removeEventListener('change', getSystemTheme);
    } else {
      setResolvedMode(themeMode);
    }
  }, [themeMode]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleChangeTheme = (mode: 'light' | 'dark' | 'media') => {
    setThemeMode(mode);
    handleClose();
  };

  return (
    <div>
      <Tooltip title="Change appearance">
        <IconButton onClick={handleClick} size="small">
          {resolvedMode === 'dark' ? (
            <LightModeOutlinedIcon fontSize="inherit" />
          ) : (
            <DarkModeIcon fontSize="inherit" />
          )}
        </IconButton>
      </Tooltip>
      <Menu
        id="theme-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'theme-menu-button',
            sx: { py: 0 },
          },
        }}
      >
        <ListSubheader>Appearance</ListSubheader>
        <MenuItem
          onClick={() => handleChangeTheme('media')}
          selected={themeMode === 'media'}
        >
          Use device default
        </MenuItem>
        <MenuItem
          onClick={() => handleChangeTheme('light')}
          selected={themeMode === 'light'}
        >
          Light
        </MenuItem>
        <MenuItem
          onClick={() => handleChangeTheme('dark')}
          selected={themeMode === 'dark'}
        >
          Dark
        </MenuItem>
      </Menu>
    </div>
  );
}
