import { Container } from '@mui/material';
import FlightsMap from '@/features/flights/flights-map';
import FlightHero from '@/features/flights/flights-hero';
import FlightsFaqs from '@/features/flights/flights-faqs';
import FlightsTripSearch from '@/features/flights/flights-trip-search';
import FlightsFindRoutes from '@/features/flights/flights-find-routes';
import FlightsUsefulTools from '@/features/flights/flights-useful-tools';
import FlightsPopularDestinations from '@/features/flights/flights-popular-destinations';

function FlightsPage() {
  return (
    <div className="space-y-10">
      <FlightHero />
      <Container maxWidth="lg" className="space-y-10">
        <FlightsTripSearch />
        <FlightsMap />
        <FlightsUsefulTools />
        <FlightsPopularDestinations />
        <FlightsFaqs />
        <FlightsFindRoutes />
      </Container>
    </div>
  );
}

export default FlightsPage;
