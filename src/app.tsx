import '@/styles/global.css';
import { RouteEnums } from './constants/routes';
import { lazy, Suspense, useMemo } from 'react';
import { configureRoutes } from '@/utils/router';
import AppNavbar from '@/components/layout/navbar';
import AppFooter from '@/components/layout/footer';
import { Navigate, useRoutes } from 'react-router-dom';

function App() {
  const routes = useRoutes(
    useMemo(() => getRoutes({ redirectTo: RouteEnums.FLIGHTS }), [])
  );

  return (
    <div className="min-h-screen bg-background-default dark:bg-background-paper">
      <AppNavbar />
      <div className="container mx-auto pb-16">
        <Suspense>{routes}</Suspense>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;

const getRoutes = function getRoutes({ redirectTo }: { redirectTo: string }) {
  return configureRoutes([
    {
      path: '*',
      element: <Navigate to={redirectTo} replace />,
    },
    {
      path: RouteEnums.FLIGHTS,
      element: lazy(() => import('@/pages/flights')),
    },
    {
      path: RouteEnums.FLIGHTS_SEARCH,
      element: lazy(() => import('@/pages/flights-search')),
    },
  ]);
};
