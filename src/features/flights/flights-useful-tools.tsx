import {
  TrendingUp,
  NotificationAddOutlined,
  CalendarMonthOutlined,
} from '@mui/icons-material';
import { useState } from 'react';
import { cn } from '@/utils/style';
import { Box, Typography } from '@mui/material';
import useThemeMode from '@/hooks/use-theme-mode';

function FlightsUsefulTools() {
  const { isDarkMode } = useThemeMode();

  const tools = [
    {
      id: 'cheapest-days',
      title: 'Find the cheapest days to fly',
      description:
        'The Date grid and Price graph make it easy to find the best flight deals',
      icon: <CalendarMonthOutlined fontSize="large" />,
      details: () => {
        const tripDatesImage = isDarkMode
          ? 'https://www.gstatic.com/flights/app/lp/dates_benefits_dark.svg'
          : 'https://www.gstatic.com/flights/app/lp/dates_benefits_light.svg';

        return (
          <Box className="space-y-4">
            <Typography variant="h6" className="font-[300]">
              Insightful tools help you choose your trip dates
            </Typography>
            <Typography className="font-roboto" variant="body1">
              If your travel plans are flexible, use the form above to start
              searching for a specific trip. Then, play around with the{' '}
              <strong>Date grid</strong> and <strong>Price graph</strong>{' '}
              options on the Search page to find the cheapest days to fly and
              book your tickets.
            </Typography>

            <Box
              style={{
                backgroundImage: `url(${tripDatesImage})`,
              }}
              className="bg-contain bg-no-repeat bg-center aspect-[16/9] h-[200px] lg:h-[300px]"
            />
          </Box>
        );
      },
    },
    {
      id: 'price-insights',
      title: 'Know when to book with price insights',
      description:
        'Price history and trend data show you the best time to book your airline ticket',
      icon: <TrendingUp fontSize="large" />,
      details: () => {
        const flightsPricesImage = isDarkMode
          ? 'https://www.gstatic.com/flights/app/lp/price_insights_benefits_dark.svg'
          : 'https://www.gstatic.com/flights/app/lp/price_insights_benefits_light.svg';

        return (
          <Box className="space-y-4">
            <Typography variant="h6" className="font-[300]">
              Get smart insights about flight prices
            </Typography>
            <Typography className="font-roboto" variant="body1">
              Real-time insights can tell you if a ticket price is lower or
              higher than usual, and if the fare you’re seeing is a good price.
              So, you don’t have to worry about paying too much for a flight or
              missing out on the cheapest time to book. On some routes, you
              might also see historical data that helps you better understand
              how flight prices vary over time.
            </Typography>

            <Box
              style={{
                backgroundImage: `url(${flightsPricesImage})`,
              }}
              className="bg-contain bg-no-repeat bg-center aspect-[16/9] h-[200px] lg:h-[300px]"
            />
          </Box>
        );
      },
    },
    {
      id: 'track-prices',
      title: 'Track flight prices for a trip',
      description:
        'Observe price changes for a route or flight and get notified when prices drop',
      icon: <NotificationAddOutlined fontSize="large" />,
      details: () => {
        const priceChangeImage = isDarkMode
          ? 'https://www.gstatic.com/flights/app/lp/tracking_prices_benefits_dark.svg'
          : 'https://www.gstatic.com/flights/app/lp/tracking_prices_benefits_light.svg';

        return (
          <Box className="space-y-4">
            <Typography variant="h6" className="font-[300] max-w-sm">
              Monitor flight prices and make sure you never miss a price change
            </Typography>
            <Typography className="font-roboto" variant="body1">
              Effortlessly track prices for specific travel dates or for any
              dates, if your plans are flexible, to uncover the best deals. You
              can easily set up tracking for multiple routes while searching for
              flights and opt-in to receive email updates when the price
              changes. Once that's done, you can come back to your Tracked
              Flights page to monitor prices whenever you like, or relax knowing
              you’ll never miss a flight deal.
            </Typography>
            <Box
              style={{
                backgroundImage: `url(${priceChangeImage})`,
              }}
              className="bg-contain bg-no-repeat bg-center aspect-[16/9] h-[200px] lg:h-[300px]"
            />
          </Box>
        );
      },
    },
  ];

  const [selectedToolId, setSelectedToolId] = useState(tools[0].id);

  const selectedTool = tools.find((tool) => tool.id === selectedToolId)!;

  return (
    <Box className="space-y-4">
      <Typography variant="h6">
        Useful tools to help you find the best flight deals
      </Typography>

      <Box className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
        {/* Left: Selectable cards */}
        <Box className="flex flex-col gap-4">
          {tools.map((tool) => (
            <Box
              key={tool.id}
              onClick={() => setSelectedToolId(tool.id)}
              className={cn(
                'relative p-4 lg:p-5 rounded-lg md:min-h-[180px] border border-muted-main cursor-pointer transition',
                selectedTool.id === tool.id
                  ? 'bg-primary-contrastText/10 border-primary-contrastText/30'
                  : 'hover:bg-muted-main/10'
              )}
            >
              <Box className="flex flex-col lg:flex-row items-start space-x-4">
                <Box className="flex items-center gap-2 mb-2 text-primary-contrastText">
                  {tool.icon}
                </Box>

                <Box className="space-y-2">
                  <Typography variant="body1">{tool.title}</Typography>
                  <Typography className="font-roboto" variant="body2">
                    {tool.description}
                  </Typography>
                </Box>
              </Box>

              {/* Arrow pointer (only for active card) */}
              {selectedTool.id === tool.id && (
                <Box className="hidden md:flex absolute top-1/2 -right-5 transform -translate-y-1/2 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[20px] border-l-primary-contrastText/30" />
              )}
            </Box>
          ))}
        </Box>

        {/* Right: Dynamic content */}
        <Box className="md:p-6 py-2 md:col-span-2 max-w-2xl">
          {selectedTool.details()}
        </Box>
      </Box>
    </Box>
  );
}

export default FlightsUsefulTools;
