import { FormEvent, useCallback, useContext } from 'react';
import { Event, EventsContext } from '../../contexts/EventsContext';
import { v4 as uuidv4 } from 'uuid';

interface UseEventModalHookProps {
  handleAddEvent: (event: FormEvent<HTMLFormElement>) => void;
  handleEditEvent: (id: string, event: FormEvent<HTMLFormElement>) => void;
}

const useEventModal = (closeModal: () => void): UseEventModalHookProps => {
  const { addEvent, editEvent } = useContext(EventsContext);

  const handleAddEvent = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const { title, startDate, endDate } = event.currentTarget
        .elements as unknown as typeof event.currentTarget & {
        title: { value: string };
        startDate: { value: string };
        endDate: { value: string };
      };

      addEvent({
        id: uuidv4(),
        title: title?.value,
        startDate: startDate?.value,
        endDate: endDate?.value,
      } as Event);

      closeModal();
    },
    [addEvent, closeModal]
  );

  const handleEditEvent = useCallback(
    (id: string, event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const { title, startDate, endDate } = event.currentTarget
        .elements as unknown as typeof event.currentTarget & {
        title: { value: string };
        startDate: { value: string };
        endDate: { value: string };
      };

      editEvent(id, {
        title: title?.value,
        startDate: startDate?.value,
        endDate: endDate?.value,
      } as Event);

      closeModal();
    },
    [closeModal, editEvent]
  );

  return {
    handleAddEvent,
    handleEditEvent,
  };
};

export default useEventModal;
