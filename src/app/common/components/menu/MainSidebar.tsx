import menu from '../../services/handleNav';
import NavSection from '../nav/NavSection';
import './MainSidebar.css';

const MainSidebar = () => {
  return (
    <nav className="main-sidebar">
      <h2 className="sidebar-title">Interactive Dashboard</h2>
      {menu.map(section => (
        <NavSection key={section.id} items={section.items} />
      ))}
    </nav>
  );
};

export default MainSidebar;
