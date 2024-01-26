import EventsList from '../components/events/EventsList';

const Dashboard = () => {
  return (
    <section className="dashboard" style={{ width: '100%' }}>
      <div className="content-container">
        <EventsList />
      </div>
    </section>
  );
};

export default Dashboard;
