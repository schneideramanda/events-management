import { RouteObject } from 'react-router-dom';
import MainLayout from '../common/components/menu/MainLayout';
import Dashboard from '../dashboard/pages';
import { EventsProvider } from '../contexts/EventsContext';
import Calendar from '../calendar/pages';

const routes: RouteObject[] = [
  {
    path: '*',
    element: (
      <EventsProvider>
        <MainLayout />
      </EventsProvider>
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
