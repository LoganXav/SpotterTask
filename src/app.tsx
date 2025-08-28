import '~/styles/global.css';
import ThemeToggler from '~/components/theme-toggler';
import AppThemeProvider from '~/providers/theme-provider';

function App() {
  return (
    <>
      <AppThemeProvider>
        <div className="flex items-center justify-center min-h-screen">
          Hello World
          <ThemeToggler />
        </div>
      </AppThemeProvider>
    </>
  );
}

export default App;
