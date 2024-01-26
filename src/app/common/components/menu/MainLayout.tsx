import { Navigate, Outlet, useLocation, ScrollRestoration } from 'react-router-dom';
import MainSidebar from './MainSidebar';
import './MainLayout.css';

const MainLayout = () => {
  const location = useLocation();

  if (location.pathname === '/') return <Navigate to="/dashboard" />;

  return (
    <main className="main-layout">
      <MainSidebar />
      <Outlet />
      <ScrollRestoration />
    </main>
  );
};

export default MainLayout;
