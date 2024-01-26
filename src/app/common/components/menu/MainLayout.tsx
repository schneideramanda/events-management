import { Navigate, Outlet, useLocation, ScrollRestoration } from 'react-router-dom';
import MainSidebar from './MainSidebar';
import './MainLayout.css';
import { useContext } from 'react';
import { SidebarContext } from '../../../contexts/SidebarContext';

const MainLayout = () => {
  const location = useLocation();
  const { isSidebarOpen, isMobile } = useContext(SidebarContext);

  if (location.pathname === '/') return <Navigate to="/dashboard" />;

  return (
    <main className={`main-layout ${isSidebarOpen ? '' : 'closed'} ${isMobile ? 'mobile' : ''}`}>
      <MainSidebar />
      <Outlet />
      <ScrollRestoration />
    </main>
  );
};

export default MainLayout;
