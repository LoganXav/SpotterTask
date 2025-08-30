import React from 'react';
import { Box, MenuItem, Select } from '@mui/material';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FlightsPassengersSelector from '@/features/flights/flights-passengers-selector';

function FlightsTripSearchFilters() {
  const [tripType, setTripType] = React.useState('round');
  const [cabinClass, setCabinClass] = React.useState('economy');
  return (
    <Box className="flex w-full items-center gap-4">
      {/* Trip Type */}
      <Box className="flex items-center gap-2 text-text-secondary">
        <SyncAltIcon fontSize="small" />
        <Select
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
          variant="standard"
          disableUnderline
          className="text-sm text-text-secondary font-roboto min-w-[100px]"
          IconComponent={(props) => (
            <ArrowDropDownIcon {...props} fontSize="small" />
          )}
        >
          <MenuItem className="font-roboto" value="round">
            Round trip
          </MenuItem>
          <MenuItem className="font-roboto" value="oneway">
            One way
          </MenuItem>
          <MenuItem className="font-roboto" value="multi">
            Multi-city
          </MenuItem>
        </Select>
      </Box>

      {/* Passengers */}
      <FlightsPassengersSelector />

      {/* Cabin Class */}
      <Box className="flex items-center gap-2 text-text-secondary">
        <Select
          value={cabinClass}
          onChange={(e) => setCabinClass(e.target.value)}
          variant="standard"
          disableUnderline
          className="text-sm text-text-secondary font-roboto min-w-[80px]"
          IconComponent={(props) => (
            <ArrowDropDownIcon {...props} fontSize="small" />
          )}
        >
          <MenuItem className="font-roboto" value="economy">
            Economy
          </MenuItem>
          <MenuItem className="font-roboto" value="premium">
            Premium Economy
          </MenuItem>
          <MenuItem className="font-roboto" value="business">
            Business
          </MenuItem>
          <MenuItem className="font-roboto" value="first">
            First
          </MenuItem>
        </Select>
      </Box>
    </Box>
  );
}

export default FlightsTripSearchFilters;
