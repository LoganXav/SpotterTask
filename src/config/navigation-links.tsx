import React from 'react';
import HotelIcon from '@mui/icons-material/Hotel';
import FlightIcon from '@mui/icons-material/Flight';

export type NavItem = {
  to: string;
  label: string;
  icon: React.ElementType;
};

export const navLinks: NavItem[] = [
  { to: '/travel', label: 'Travel', icon: FlightIcon },
  { to: '/explore', label: 'Explore', icon: HotelIcon },
  { to: '/flights', label: 'Flights', icon: FlightIcon },
  { to: '/hotels', label: 'Hotels', icon: FlightIcon },
  { to: '/vacation-rentals', label: 'Vacation rentals', icon: FlightIcon },
];
