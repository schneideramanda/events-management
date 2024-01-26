import EventsList from '../components/events/EventsList';

const Dashboard = () => {
  return (
    <section className="dashboard" style={{ width: '100%' }}>
      <div className="content-container" style={{ height: '100vh' }}>
        <EventsList />
      </div>
    </section>
  );
};

export default Dashboard;
