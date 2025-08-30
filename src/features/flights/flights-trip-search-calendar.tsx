import {
  CalendarTodayOutlined,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';
import React, { useState } from 'react';
import { formatDateToLocaleString } from '@/utils/date';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box, Typography, IconButton, Popover } from '@mui/material';

// ----------------------------
// Types
// ----------------------------
type TripType = 'oneway' | 'roundtrip';

interface FlightsTripSearchCalendarProps {
  tripType: TripType;
}

// ----------------------------
// Component
// ----------------------------
export default function FlightsTripSearchCalendar({
  tripType,
}: FlightsTripSearchCalendarProps) {
  // Which input field triggered the calendar popover
  const [activeField, setActiveField] = useState<'depart' | 'return' | null>(
    null
  );

  // The element where the popover should be positioned
  const [calendarTriggerElement, setCalendarTriggerElement] =
    useState<HTMLElement | null>(null);

  // Dates
  const [departDate, setDepartDate] = useState<Date | null>(new Date());
  const [returnDate, setReturnDate] = useState<Date | null>(null);

  // Popover state
  const isCalendarOpen = Boolean(calendarTriggerElement);

  // ----------------------------
  // Handlers
  // ----------------------------
  const openCalendar = (
    e: React.MouseEvent<HTMLElement>,
    field: 'depart' | 'return'
  ) => {
    setCalendarTriggerElement(e.currentTarget);
    setActiveField(field);
  };

  const closeCalendar = () => {
    setCalendarTriggerElement(null);
    setActiveField(null);
  };

  const shiftDate = (date: Date | null, days: number): Date | null => {
    if (!date) return new Date();
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
  };

  // ----------------------------
  // Render
  // ----------------------------
  return (
    <Box className="border w-full h-12 md:h-16 flex rounded-sm border-muted-main hover:border-text-primary p-4">
      {/* Departure */}
      <Box className="flex items-center gap-1 px-2 py-2 cursor-pointer w-full relative">
        <IconButton size="small" onClick={(e) => openCalendar(e, 'depart')}>
          <CalendarTodayOutlined
            fontSize="small"
            className="text-text-secondary"
          />
        </IconButton>

        <Typography
          onClick={(e) => openCalendar(e, 'depart')}
          className="flex-1 font-roboto overflow-ellipsis line-clamp-1"
        >
          {formatDateToLocaleString(departDate)}
        </Typography>

        <IconButton
          size="small"
          onClick={() => setDepartDate((d) => shiftDate(d, -1))}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => setDepartDate((d) => shiftDate(d, 1))}
        >
          <ChevronRight />
        </IconButton>
      </Box>

      {/* Return (only if roundtrip) */}
      {tripType === 'roundtrip' && (
        <Box className="flex items-center gap-1 px-2 py-2 cursor-pointer w-full border-l border-muted-main relative">
          <Typography
            onClick={(e) => openCalendar(e, 'return')}
            className="flex-1 font-roboto overflow-ellipsis line-clamp-1"
          >
            {formatDateToLocaleString(returnDate)}
          </Typography>

          <IconButton
            size="small"
            onClick={() => setReturnDate((d) => shiftDate(d, -1))}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            size="small"
            onClick={() => setReturnDate((d) => shiftDate(d, 1))}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      )}

      {/* Calendar Popover */}
      <Popover
        open={isCalendarOpen}
        anchorEl={calendarTriggerElement}
        onClose={closeCalendar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        {activeField === 'depart' && (
          <Box className="p-2">
            <DateCalendar
              value={departDate}
              onChange={(newVal) => {
                setDepartDate(newVal);
                closeCalendar();
              }}
            />
          </Box>
        )}
        {activeField === 'return' && (
          <Box className="p-2">
            <DateCalendar
              value={returnDate}
              onChange={(newVal) => {
                setReturnDate(newVal);
                closeCalendar();
              }}
            />
          </Box>
        )}
      </Popover>
    </Box>
  );
}
