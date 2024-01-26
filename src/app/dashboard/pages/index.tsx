import EventsList from '../components/events/EventsList';
import './index.css';

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="content-container">
        <EventsList />
      </div>
    </section>
  );
};

export default Dashboard;
