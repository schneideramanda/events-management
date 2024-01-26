import Icon from '@material-ui/core/Icon';
import { Link, useLocation } from 'react-router-dom';
import { MenuItemProps } from '../../services/handleNav';
import './NavItem.css';
import { useContext } from 'react';
import { SidebarContext } from '../../../contexts/SidebarContext';

interface NavItemProps {
  item: MenuItemProps;
}

const NavItem = ({ item }: NavItemProps) => {
  const location = useLocation();
  const { isSidebarOpen } = useContext(SidebarContext);

  let pathMatch = false;

  if (item.path) {
    if (item.path === '/') {
      pathMatch = location.pathname === item.path || location.pathname === '/dashboard';
    } else {
      pathMatch = location.pathname.startsWith(item.path);
    }
  }

  return (
    <li className={`nav-item ${isSidebarOpen ? '' : 'closed'}`}>
      <Link to={item.path} className={`nav-link ${pathMatch ? 'active' : ''}`}>
        <Icon className="item-icon">{item.icon}</Icon>
        {isSidebarOpen ? item.title : ''}
      </Link>
    </li>
  );
};

export default NavItem;
