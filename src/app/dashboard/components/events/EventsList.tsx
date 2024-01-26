import EventModal from './modal/EventModal';
import Button from '../../../common/components/button/Button';
import './EventsList.css';
import useEventList from '../../hooks/useEventList';
import { useContext } from 'react';
import { EventsContext } from '../../../contexts/EventsContext';
import EventItem from './item/EventItem';

const EventsList = () => {
  const { events } = useContext(EventsContext);
  const { isModalOpen, openModal, closeModal } = useEventList();

  return (
    <div className="events-list">
      <div className="events-header">
        <h4 className="events-title">Events List</h4>
        <Button label="Create Event" onClick={openModal} />
        <EventModal isOpen={isModalOpen} closeModal={closeModal} type="add" />
      </div>
      {events.length ? (
        <ul className="events">
          {events.map(({ id, title, startDate, endDate }) => (
            <EventItem key={id} id={id} title={title} startDate={startDate} endDate={endDate} />
          ))}
        </ul>
      ) : (
        <p className="no-events">You still don't have events. Try creating one!</p>
      )}
    </div>
  );
};

export default EventsList;
