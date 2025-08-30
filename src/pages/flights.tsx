import { Container } from '@mui/material';
import FlightsMap from '@/features/flights/flights-map';
import FlightHero from '@/features/flights/flights-hero';
import FlightsFaqs from '@/features/flights/flights-faqs';
import FlightTripSearch from '@/features/flights/flight-trip-search';
import FlightsFindRoutes from '@/features/flights/flights-find-routes';
import FlightsUsefulTools from '@/features/flights/flights-useful-tools';
import FlightsPopularDestinations from '@/features/flights/flights-popular-destinations';

function FlightsPage() {
  return (
    <Container maxWidth="lg" className="space-y-10">
      <FlightHero />
      <FlightTripSearch />
      <FlightsMap />
      <FlightsUsefulTools />
      <FlightsPopularDestinations />
      <FlightsFaqs />
      <FlightsFindRoutes />
    </Container>
  );
}

export default FlightsPage;
