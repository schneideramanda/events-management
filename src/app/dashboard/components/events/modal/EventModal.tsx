import Modal from 'react-modal';
import './EventModal.css';
import Button from '../../../../common/components/button/Button';
import useEventModal from '../../../hooks/useEventModal';
import { Event } from '../../../../contexts/EventsContext';
import { useContext } from 'react';
import { SidebarContext } from '../../../../contexts/SidebarContext';

interface EventModalProps {
  type: 'add' | 'edit';
  values?: Event;
  isOpen: boolean;
  closeModal: () => void;
}

const EventModal = ({ type, values, isOpen, closeModal }: EventModalProps) => {
  const { isMobile } = useContext(SidebarContext);
  const { handleAddEvent, handleEditEvent } = useEventModal(closeModal);

  const customStyles = isMobile
    ? {
        content: {
          top: '40px',
          left: '0%',
          right: 'auto',
          bottom: 'auto',
          minWidth: '90%',
          minHeight: '100%',
        },
      }
    : {
        content: {
          top: '50%',
          left: '57%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          minWidth: '400px',
          minHeight: '200px',
        },
      };

  return (
    <Modal isOpen={isOpen} ariaHideApp={false} style={customStyles}>
      <header className="modal-header">
        <h4 className="modal-title">{type === 'add' ? 'Create' : 'Edit'} Event</h4>
        <Button label="Close" onClick={closeModal} />
      </header>
      <form
        onSubmit={
          type === 'add' ? handleAddEvent : event => handleEditEvent(values?.id ?? '', event)
        }>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" defaultValue={values?.title ?? ''} />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start</label>
          <input type="date" id="startDate" defaultValue={values?.startDate ?? ''} />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End</label>
          <input type="date" id="endDate" defaultValue={values?.endDate ?? ''} />
        </div>
        <Button label={type === 'add' ? 'Create' : 'Save'} fullSize={true} type="submit" />
      </form>
    </Modal>
  );
};

export default EventModal;
