import { cn } from '@/utils/style';
import { NavLink } from 'react-router-dom';
import HotelIcon from '@mui/icons-material/Hotel';
import { navLinks, type AppRoute } from '@/config/navigation-links';
import { Drawer, List, ListItemButton, Box, Typography } from '@mui/material';

type Props = {
  open: boolean;
  onClose: () => void;
  topOffset?: number;
  drawerWidth?: number;
  links?: AppRoute[];
};

export default function AppSidebar({
  open,
  onClose,
  drawerWidth = 260,
  topOffset = 64,
  links = navLinks,
}: Props) {
  const handleClose = () => onClose();

  return (
    <Drawer
      anchor="left"
      elevation={2}
      open={open}
      onClose={handleClose}
      ModalProps={{
        keepMounted: true,
        BackdropProps: {
          sx: { backgroundColor: 'transparent' },
        },
      }}
      PaperProps={{
        sx: {
          position: 'absolute',
          top: topOffset,
          left: 0,
          width: drawerWidth,
          height: `calc(100% - ${topOffset}px)`,
          borderColor: 'divider',
        },
      }}
    >
      <Box className="w-full flex flex-col h-full" role="presentation">
        <List className="flex flex-col py-0">
          {links.map(({ to, label, icon: Icon }) => {
            const isFlight = label.toLowerCase().includes('flight');

            return (
              <NavLink key={to} to={to} end>
                {({ isActive }) => (
                  <ListItemButton
                    disableRipple
                    onClick={handleClose}
                    className={cn(
                      'flex items-center gap-3 px-4 py-4 transition-colors rounded-l-none rounded-r-full w-[96%]',
                      'text-sm font-medium',
                      'hover:bg-primary-light/40',
                      isActive && 'bg-primary-main border-primary-main'
                    )}
                  >
                    <Icon
                      className={cn(
                        'w-5 h-5 text-text-primary transition-colors',
                        isActive && 'text-primary-contrastText',
                        isFlight && 'rotate-45'
                      )}
                    />
                    <Typography
                      className={cn(
                        'transition-colors',
                        isActive && 'text-primary-contrastText'
                      )}
                    >
                      {label}
                    </Typography>
                  </ListItemButton>
                )}
              </NavLink>
            );
          })}
        </List>

        {/* pinned bottom items */}
        <Box className="mt-auto flex flex-col border-t border-muted-main">
          {settings.map(({ label, to, icon: Icon }) => (
            <NavLink key={to} to={to} end>
              {({ isActive }) => (
                <ListItemButton
                  disableRipple
                  onClick={handleClose}
                  className={cn(
                    'flex items-center gap-3 px-4 py-4 transition-colors rounded-l-none rounded-r-full w-[96%]',
                    'text-sm font-medium',
                    'hover:bg-primary-light/40',
                    isActive && 'bg-primary-main border-primary-main'
                  )}
                >
                  <Icon
                    className={cn(
                      'w-5 h-5 text-text-primary transition-colors',
                      isActive && 'text-primary-contrastText'
                    )}
                  />

                  <Typography
                    className={cn(
                      'transition-colors',
                      isActive && 'text-primary-contrastText'
                    )}
                  >
                    {label}
                  </Typography>
                </ListItemButton>
              )}
            </NavLink>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
}

const settings = [
  { icon: HotelIcon, to: '/flight-settings', label: 'Flights settings' },
  { icon: HotelIcon, to: '/feedback', label: 'Feedback' },
  { icon: HotelIcon, to: '/help', label: 'Help' },
];
