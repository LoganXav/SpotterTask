import '@/styles/global.css';
import AppNavbar from '@/components/layout/navbar';

function App() {
  return (
    <div className="min-h-screen bg-background-default dark:bg-background-paper">
      <AppNavbar />
      <div className="h-full flex items-center justify-center font-sans">
        Google Flights
      </div>
      {/* <AppFooter /> */}
    </div>
  );
}

export default App;
