import { Box, Typography } from '@mui/material';
import useThemeMode from '@/hooks/use-theme-mode';

function FlightHero() {
  const { isDarkMode } = useThemeMode();

  const bgImage = isDarkMode
    ? 'https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_dark_theme_4.svg'
    : 'https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_4.svg';

  return (
    <Box className="relative">
      <div
        className="h-[23.925vw] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute bottom-0 w-full flex justify-center">
        <Typography variant="h2" className="font-[300]">
          Flights
        </Typography>
      </div>
    </Box>
  );
}

export default FlightHero;
