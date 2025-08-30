import { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

function CustomDatePicker() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Create days in month grid
  const getDaysInMonth = (month: number, year: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    const numDays = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null); // empty slots before month starts
    }
    for (let i = 1; i <= numDays; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const days = getDaysInMonth(currentMonth, currentYear);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const isSameDay = (d1: Date, d2: Date) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  return (
    <Box className="w-80 rounded-2xl shadow-lg bg-white p-4">
      {/* Header */}
      <Box className="flex items-center justify-between mb-4">
        <IconButton size="small" onClick={handlePrevMonth}>
          <ChevronLeftIcon />
        </IconButton>
        <Typography className="font-medium">
          {today.toLocaleString('default', { month: 'long' })} {currentYear}
        </Typography>
        <IconButton size="small" onClick={handleNextMonth}>
          <ChevronRightIcon />
        </IconButton>
      </Box>

      {/* Days of week */}
      <Box className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map((d) => (
          <Typography
            key={d}
            className="text-xs font-medium text-gray-500 text-center"
          >
            {d}
          </Typography>
        ))}
      </Box>

      {/* Calendar grid */}
      <Box className="grid grid-cols-7 gap-1">
        {days.map((date, idx) => {
          if (!date) return <Box key={idx} className="h-10" />;

          const isToday = isSameDay(date, today);
          const isSelected = selectedDate && isSameDay(date, selectedDate);

          return (
            <button
              key={idx}
              onClick={() => setSelectedDate(date)}
              className={`h-10 w-10 rounded-full flex items-center justify-center text-sm
                ${isSelected ? 'bg-blue-600 text-white' : ''}
                ${isToday && !isSelected ? 'border border-blue-500' : ''}
                hover:bg-blue-100`}
            >
              {date.getDate()}
            </button>
          );
        })}
      </Box>
    </Box>
  );
}

export default CustomDatePicker;
