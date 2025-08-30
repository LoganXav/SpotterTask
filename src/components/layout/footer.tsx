import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { footerLinks, footerPageSettings } from '@/config/navigation-links';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';

function AppFooter() {
  return (
    <Container maxWidth="2xl">
      <Box className="border-y border-muted-main py-8 flex flex-col space-y-8 items-center">
        <Box className="flex flex-wrap gap-2 items-center">
          {footerPageSettings.map(({ label, icon: Icon }) => (
            <Button
              key={label}
              disableRipple
              variant="text"
              className="flex items-center gap-2 rounded-full border px-4 py-1 normal-case transition-colors text-sm font-medium border-muted-main hover:bg-primary-light/30"
            >
              <Icon className="w-4 h-4 transition-colors text-primary-contrastText" />
              <Typography
                className=" text-primary-contrastText"
                variant="body2"
              >
                {label}
              </Typography>
            </Button>
          ))}
        </Box>

        <Typography
          className="text-center text-text-primary/80 max-w-xl font-roboto"
          variant="body2"
        >
          Current language and currency options applied: English (United States)
          - Nigeria - NGN Displayed currencies may differ from the currencies
          used to purchase flights.
          <span className="text-primary-contrastText"> Learn more</span>
        </Typography>

        <Box className="grid gap-4 grid-cols-3 lg:grid-cols-6">
          {footerLinks.map((link, idx) => (
            <Typography
              key={idx}
              className="text-center hover:underline text-primary-contrastText max-w-2xl font-roboto cursor-pointer"
              variant="body2"
            >
              {link}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box className="py-8 flex items-center space-x-6 justify-center">
        {['International sites', 'Explore flights'].map((label, idx) => (
          <Box className="flex items-center space-x-1" key={idx}>
            <Typography className="text-primary-contrastText">
              {label}
            </Typography>

            <IconButton className="text-primary-contrastText">
              <ExpandMoreIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default AppFooter;
