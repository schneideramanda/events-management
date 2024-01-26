import menu from '../../services/handleNav';
import NavSection from '../nav/NavSection';
import MenuIcon from '@material-ui/icons/Menu';
import './MainSidebar.css';
import { useContext } from 'react';
import { SidebarContext } from '../../../contexts/SidebarContext';

const MainSidebar = () => {
  const { isSidebarOpen, isMobile, toggleSidebar } = useContext(SidebarContext);

  return (
    <nav className={`main-sidebar ${isSidebarOpen ? '' : 'closed'} ${isMobile ? 'mobile' : ''}`}>
      <div className={`sidebar-action ${isMobile ? 'mobile' : ''}`}>
        <MenuIcon
          className={`sidebar-icon ${isSidebarOpen ? '' : 'closed'} ${isMobile ? 'mobile' : ''}`}
          onClick={() => {
            toggleSidebar();
          }}
        />
      </div>
      <div
        className={`sidebar-content ${isSidebarOpen ? '' : 'closed'} ${isMobile ? 'mobile' : ''}`}>
        <h2
          className={`sidebar-title ${isSidebarOpen ? '' : 'closed'} ${isMobile ? 'mobile' : ''}`}>
          Events Management
        </h2>
        {menu.map(section => (
          <NavSection key={section.id} items={section.items} />
        ))}
      </div>
    </nav>
  );
};

export default MainSidebar;
