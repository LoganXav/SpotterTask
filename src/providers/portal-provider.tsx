import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProviderProps {
  children: ReactNode;
  container?: Element;
}

export default function PortalProvider({
  children,
  container,
}: PortalProviderProps) {
  // SSR safety
  if (typeof window === 'undefined') return null;
  return createPortal(children, container ?? document.body);
}
