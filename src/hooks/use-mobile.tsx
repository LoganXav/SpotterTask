import React from 'react';

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(
    window.innerWidth < breakpoint
  );

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
}
