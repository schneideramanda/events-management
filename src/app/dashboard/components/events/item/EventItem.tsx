import './EventItem.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useEventItem from '../../../hooks/useEventItem';
import EventModal from '../modal/EventModal';

interface EventItemPros {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
}

const EventItem = ({ id, title, startDate, endDate }: EventItemPros) => {
  const {
    isModalOpen,
    startDateFormatted,
    endDateFormatted,
    handleRemoveEvent,
    openModal,
    closeModal,
  } = useEventItem(startDate, endDate);

  return (
    <li className="event">
      <header className="event-header">
        <p className="event-title">{title}</p>
        <div className="event-actions">
          <EditIcon color="action" onClick={openModal} />
          <DeleteIcon color="action" onClick={() => handleRemoveEvent(id)} />
        </div>
      </header>
      <div className="event-group">
        <p className="event-label">Start Date:</p>
        <p>{startDateFormatted}</p>
      </div>
      <div className="event-group">
        <p className="event-label">End Date:</p>
        <p>{endDateFormatted}</p>
      </div>
      <EventModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        type="edit"
        values={{ id, title, startDate, endDate }}
      />
    </li>
  );
};

export default EventItem;
