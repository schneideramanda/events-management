import menu from '../../services/handleNav';
import NavSection from '../nav/NavSection';
import MenuIcon from '@material-ui/icons/Menu';
import './MainSidebar.css';
import { useContext } from 'react';
import { SidebarContext } from '../../../contexts/SidebarContext';

const MainSidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

  return (
    <nav className={`main-sidebar ${isSidebarOpen ? '' : 'closed'}`}>
      <div className="sidebar-action">
        <MenuIcon
          className={`sidebar-icon ${isSidebarOpen ? '' : 'closed'}`}
          onClick={() => {
            toggleSidebar();
          }}
        />
      </div>
      <h2 className={`sidebar-title ${isSidebarOpen ? '' : 'closed'}`}>Interactive Dashboard</h2>
      {menu.map(section => (
        <NavSection key={section.id} items={section.items} />
      ))}
    </nav>
  );
};

export default MainSidebar;
