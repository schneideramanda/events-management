import { MenuItemProps } from '../../services/handleNav';
import NavItem from './NavItem';
import './NavSection.css';

interface NavSectionProps {
  items: MenuItemProps[];
}

const NavSection = ({ items }: NavSectionProps) => {
  return (
    <section>
      <ul className="nav-section">
        {items.map(item => (
          <NavItem key={item.title} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default NavSection;
