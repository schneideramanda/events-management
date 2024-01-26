export interface MenuItemProps {
  title: string;
  path: string;
  icon: any;
}

export interface MenuProps {
  id: string;
  items: MenuItemProps[];
}

const menu = [
  {
    id: 'events',
    items: [
      {
        title: 'Events List',
        path: '/',
        icon: 'list',
      },
      {
        title: 'Calendar Views',
        path: '/calendar',
        icon: 'calendar_today',
      },
    ],
  },
];

export default menu;
