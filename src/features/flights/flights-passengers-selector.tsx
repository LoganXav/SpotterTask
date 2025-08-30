import React, { useState } from 'react';
import { PersonOutline, Add, Remove } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, IconButton, Popover, Typography, Button } from '@mui/material';
import { cn } from '@/utils/style';

function FlightsPassengersSelector() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infantsSeat: 0,
    infantsLap: 0,
  });

  const open = Boolean(anchorEl);

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const updatePassengersCount = (
    key: keyof typeof passengers,
    delta: number
  ) => {
    setPassengers((prev) => {
      const next = Math.max(
        0,
        key === 'adults' ? Math.max(1, prev[key] + delta) : prev[key] + delta
      );
      return { ...prev, [key]: next };
    });
  };

  const total =
    passengers.adults +
    passengers.children +
    passengers.infantsSeat +
    passengers.infantsLap;

  return (
    <Box>
      <Box
        onClick={handleToggle}
        className="flex items-center gap-2 cursor-pointer text-text-secondary px-3 py-2"
      >
        <PersonOutline fontSize="small" />
        <Typography variant="body2">{total}</Typography>
        <ArrowDropDownIcon
          fontSize="small"
          className={cn('text-text-primary', open && 'rotate-180')}
        />
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        PaperProps={{
          className:
            'p-4 w-56 bg-background-paper rounded-lg shadow-lg text-text-primary',
        }}
      >
        {[
          { key: 'adults', label: 'Adults' },
          { key: 'children', label: 'Children', sub: 'Aged 2–11' },
          { key: 'infantsSeat', label: 'Infants', sub: 'In seat' },
          { key: 'infantsLap', label: 'Infants', sub: 'On lap' },
        ].map((row) => (
          <Box key={row.key} className="flex justify-between items-center py-2">
            <Box>
              <Typography variant="body1" className="font-roboto">
                {row.label}
              </Typography>
              {row.sub && (
                <Typography
                  variant="caption"
                  className="text-text-secondary font-roboto"
                >
                  {row.sub}
                </Typography>
              )}
            </Box>
            <Box className="flex items-center gap-2">
              <IconButton
                size="small"
                disabled={
                  row.key === 'adults'
                    ? passengers.adults <= 1
                    : passengers[row.key as keyof typeof passengers] <= 0
                }
                onClick={() =>
                  updatePassengersCount(row.key as keyof typeof passengers, -1)
                }
                className="rounded-sm "
              >
                <Remove fontSize="small" />
              </IconButton>
              <Typography className="w-4 text-center">
                {passengers[row.key as keyof typeof passengers]}
              </Typography>
              <IconButton
                color="info"
                size="small"
                onClick={() =>
                  updatePassengersCount(row.key as keyof typeof passengers, 1)
                }
                className="rounded-sm bg-primary-contrastText text-background-paper"
              >
                <Add fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        ))}

        {/* Footer actions */}
        <Box className="flex justify-end mt-4">
          <Button onClick={handleClose} size="small" color="info">
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            size="small"
            color="info"
            variant="text"
          >
            Done
          </Button>
        </Box>
      </Popover>
    </Box>
  );
}

export default FlightsPassengersSelector;
