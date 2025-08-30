import { Box, Typography } from '@mui/material';

function FlightsFindRoutes() {
  return (
    <Box className="space-y-4">
      <Typography variant="h6">Find cheap flights on popular routes</Typography>

      <Box className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array(20)
          .fill(null)
          .map((_, index) => (
            <Typography
              className="text-primary-contrastText cursor-pointer hover:text-primary-contrastText/80"
              variant="body2"
              key={index}
            >
              Flights from New York to London
            </Typography>
          ))}
      </Box>
    </Box>
  );
}

export default FlightsFindRoutes;
