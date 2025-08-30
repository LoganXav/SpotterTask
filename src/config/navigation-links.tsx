import { RouteEnums } from '@/constants/routes';
import HotelIcon from '@mui/icons-material/Hotel';
import FlightIcon from '@mui/icons-material/Flight';

export type AppRoute = {
  to: string;
  label: string;
  icon: React.ElementType;
  match?: (pathname: string) => boolean;
};

export const navLinks: AppRoute[] = [
  { to: '/travel', label: 'Travel', icon: FlightIcon },
  { to: '/hotels', label: 'Hotels', icon: FlightIcon },
  { to: '/explore', label: 'Explore', icon: HotelIcon },
  { to: '/vacation-rentals', label: 'Vacation rentals', icon: FlightIcon },
  {
    to: RouteEnums.FLIGHTS,
    label: 'Flights',
    icon: FlightIcon,
    match: (pathname) => pathname.startsWith(RouteEnums.FLIGHTS),
  },
];

export const footerPageSettings = [
  { label: 'Language • English(United States)', icon: FlightIcon },
  { label: 'Location • Nigeria', icon: FlightIcon },
  { label: 'Currency • NGN', icon: HotelIcon },
];

export const footerLinks = [
  'About',
  'Privacy',
  'Terms',
  'Join user studies',
  'Feedback',
  'Help Center',
];
