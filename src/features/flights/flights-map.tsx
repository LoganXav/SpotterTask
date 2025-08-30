import useThemeMode from '@/hooks/use-theme-mode';
import { Box, Button, Typography } from '@mui/material';

function FlightsMap() {
  const { isDarkMode } = useThemeMode();

  const bgImage = isDarkMode
    ? 'https://maps.googleapis.com/maps/api/staticmap?size=818x612&key=AIzaSyCMXZJgNbwR_PUfsUlyKfRldqfOyQOEd_g&language=en-US&theme=dark&center=0,0&zoom=1&scale=2&style=feature:all|element:labels|visibility:off&style=feature:poi|element:all|visibility:off&style=feature:road|element:all|visibility:off&style=feature:transit|element:all|visibility:off&style=feature:all|element:geometry|color:0x06080c&style=feature:water|element:geometry|color:0x06080c&style=feature:administrative|element:geometry|color:0x4a5462&style=feature:landscape.natural|element:geometry|color:0x162b31&style=feature:landscape.natural.landcover|element:geometry|color:0x213f42'
    : 'https://maps.googleapis.com/maps/api/staticmap?size=818x612&key=AIzaSyCMXZJgNbwR_PUfsUlyKfRldqfOyQOEd_g&language=en-US&theme=light&center=0,0&zoom=1&scale=2&style=feature:all|element:labels|visibility:off&style=feature:poi|element:all|visibility:off&style=feature:road|element:all|visibility:off&style=feature:transit|element:all|visibility:off';

  return (
    <Box className="space-y-4">
      <Typography variant="h6">
        Find cheap flights from Ibadan to anywhere
      </Typography>

      <Box className="relative h-[250px] cursor-pointer rounded-lg overflow-hidden group">
        {/* Background map */}
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Hover overlay */}
        <Box className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <Box className="absolute inset-0 flex items-center justify-center">
          <Button className="bg-white rounded-full px-6 py-1 shadow normal-case">
            <Typography className="text-primary-contrastText">
              Explore destinations
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default FlightsMap;
