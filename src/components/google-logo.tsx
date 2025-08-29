import { Typography, useTheme } from '@mui/material';

function GoogleLogo() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const letters = [
    { char: 'G', color: '#4285F4' },
    { char: 'o', color: '#EA4335' },
    { char: 'o', color: '#FBBC05' },
    { char: 'g', color: '#4285F4' },
    { char: 'l', color: '#34A853' },
    { char: 'e', color: '#EA4335' },
  ];

  return (
    <Typography variant="h5" color="text.primary">
      {letters.map((letter, index) => (
        <span key={index} style={{ color: isDark ? undefined : letter.color }}>
          {letter.char}
        </span>
      ))}
    </Typography>
  );
}

export default GoogleLogo;
