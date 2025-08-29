import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    muted: Palette['primary'];
  }
  interface PaletteOptions {
    muted?: PaletteOptions['primary'];
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#eef4fe', light: '#eef4fe', contrastText: '#1976d2' },
    secondary: { main: '#ff4081' },
    background: { default: '#fafafa', paper: '#ffffff' },
    muted: { main: '#dadce0' },
    text: { primary: '#3c4043' },
  },
  typography: {
    fontFamily: 'ProductSans, sans-serif',
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#3c4043',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1D1E21',
          borderColor: '#dadce0',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderColor: '#dadce0',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          boxShadow: 'none',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ffff', light: '#5f6368F2', contrastText: '#a8c7fa' },
    secondary: { main: '#f48fb1' },
    background: { default: '#121212', paper: '#1e1e1e' },
    muted: { main: '#5f6368' },
    // text: { primary: '#fffff' },
  },
  typography: {
    fontFamily: 'ProductSans, sans-serif',
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#ffff',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderColor: '#5f6368',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
        },
      },
    },
  },
});
