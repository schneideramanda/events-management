import { RouteObject } from 'react-router-dom';
import MainLayout from '../common/components/menu/MainLayout';
import Dashboard from '../dashboard/pages';
import { EventsProvider } from '../contexts/EventsContext';
import Calendar from '../calendar/pages';
import { SidebarProvider } from '../contexts/SidebarContext';

const routes: RouteObject[] = [
  {
    path: '*',
    element: (
      <SidebarProvider>
        <EventsProvider>
          <MainLayout />
        </EventsProvider>
      </SidebarProvider>
    ),
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
    ],
  },
];

export default routes;
