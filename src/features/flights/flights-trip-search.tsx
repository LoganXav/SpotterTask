import React from 'react';
import { Search as SearchIcon } from '@mui/icons-material';

import { Box, Button } from '@mui/material';
import FlightsTripSearchFilters from './flights-trip-search-filters';
import FlightsTripSearchAutocomplete from '@/features/flights/flights-trip-search-autocomplete';
import FlightsTripSearchCalendar from './flights-trip-search-calendar';

const FlightSearchBar: React.FC = () => {
  return (
    <Box className="bg-background-default rounded-xl shadow-[0_0px_3px_0_rgba(0,0,0,0.1),0_4px_8px_3px_rgba(0,0,0,0.15)] relative w-full flex flex-col items-center gap-4 p-4 pb-16">
      <FlightsTripSearchFilters />

      {/* From / To */}
      <Box className="flex flex-col lg:flex-row gap-4 w-full bg-inherit">
        <Box className="lg:w-[55%] bg-inherit">
          <FlightsTripSearchAutocomplete />
        </Box>

        {/* Dates */}
        <Box className="flex-1 bg-inherit">
          <FlightsTripSearchCalendar tripType="roundtrip" />
        </Box>
      </Box>

      {/* Explore Button */}
      <Button
        variant="contained"
        startIcon={<SearchIcon />}
        className="absolute -bottom-4 rounded-full bg-primary-contrastText px-4 md:px-6 py-1 md:py-2 normal-case shadow-md hover:bg-primary-contrastText/90 text-background-paper"
      >
        Explore
      </Button>
    </Box>
  );
};

export default FlightSearchBar;
