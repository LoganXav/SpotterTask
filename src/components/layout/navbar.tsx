import React from 'react';
import { cn } from '@/utils/style';
import AppSidebar from './sidebar';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import GoogleLogo from '@/components/google-logo';
import IconButton from '@mui/material/IconButton';
import { Button, Typography } from '@mui/material';
import { navLinks } from '@/config/navigation-links';
import ThemeToggler from '@/components/theme-toggler';
import { NavLink, useLocation } from 'react-router-dom';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';

function AppNavbar() {
  const [open, setOpen] = React.useState(false);
  const setDrawerOpen = (val: boolean) => () => setOpen(val);
  const { pathname } = useLocation();

  return (
    <>
      <AppBar position="sticky" elevation={0} className="border-b">
        <Container maxWidth="2xl">
          <Toolbar disableGutters className="flex justify-between items-center">
            <Box className="flex items-center gap-12">
              <Box className="flex items-center">
                <IconButton size="large" onClick={setDrawerOpen(true)}>
                  <MenuIcon />
                </IconButton>
                <GoogleLogo />
              </Box>

              <Box className="hidden lg:flex items-center gap-2">
                {navLinks.map(({ label, icon: Icon, to, match }) => {
                  const isFlight = label.toLowerCase().includes('flight');
                  const isActive = match ? match(pathname) : pathname === to;

                  return (
                    <NavLink key={to} to={to}>
                      <Button
                        disableRipple
                        variant="text"
                        className={cn(
                          'flex items-center gap-2 rounded-full border px-4 py-2 normal-case transition-colors text-sm font-medium border-muted-main',
                          isActive
                            ? 'bg-primary-main border-primary-main'
                            : 'hover:bg-primary-light/30'
                        )}
                      >
                        <Icon
                          className={cn(
                            'w-4 h-4 transition-colors text-primary-contrastText',
                            isFlight && 'rotate-45'
                          )}
                        />
                        <Typography
                          className={cn(
                            'transition-colors',
                            isActive
                              ? 'text-primary-contrastText'
                              : 'text-text-primary'
                          )}
                        >
                          {label}
                        </Typography>
                      </Button>
                    </NavLink>
                  );
                })}
              </Box>
            </Box>

            <Box className="flex items-center gap-2">
              <ThemeToggler />
              <Tooltip title="Google Apps" className="hidden sm:flex">
                <IconButton size="medium">
                  <AppsRoundedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Open settings">
                <IconButton size="medium">
                  <Box className="bg-lime-600 w-8 h-8 rounded-full flex items-center justify-center">
                    <Typography className="text-white">S</Typography>
                  </Box>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <AppSidebar open={open} onClose={() => setOpen(false)} topOffset={64} />
    </>
  );
}

export default AppNavbar;
