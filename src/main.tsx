import App from '@/app';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '@mui/material/GlobalStyles';
import AppThemeProvider from '@/providers/theme-provider';
import { StyledEngineProvider } from '@mui/material/styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      <BrowserRouter>
        <AppThemeProvider>
          <App />
        </AppThemeProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  </StrictMode>
);
