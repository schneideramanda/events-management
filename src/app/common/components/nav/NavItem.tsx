import Icon from '@material-ui/core/Icon';
import { Link, useLocation } from 'react-router-dom';
import { MenuItemProps } from '../../services/handleNav';
import './NavItem.css';

interface NavItemProps {
  item: MenuItemProps;
}

const NavItem = ({ item }: NavItemProps) => {
  const location = useLocation();

  let pathMatch = false;

  if (item.path) {
    if (item.path === '/') {
      pathMatch = location.pathname === item.path || location.pathname === '/dashboard';
    } else {
      pathMatch = location.pathname.startsWith(item.path);
    }
  }

  return (
    <li className="nav-item">
      <Icon className="item-icon">{item.icon}</Icon>
      <Link to={item.path} className={`nav-link ${pathMatch ? 'active' : ''}`}>
        {item.title}
      </Link>
    </li>
  );
};

export default NavItem;
