import { DateTime } from 'luxon';
import { useCallback, useContext, useState } from 'react';
import { EventsContext } from '../../contexts/EventsContext';

interface UseEventItemHookProps {
  startDateFormatted: string;
  endDateFormatted: string;
  isModalOpen: boolean;
  handleRemoveEvent: (id: string) => void;
  openModal: () => void;
  closeModal: () => void;
}

const useEventItem = (startDate: string, endDate: string): UseEventItemHookProps => {
  const { removeEvent } = useContext(EventsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const startDt = DateTime.fromISO(startDate);
  const endDt = DateTime.fromISO(endDate);
  const startDateFormatted = startDt.toLocaleString(DateTime.DATE_FULL);
  const endDateFormatted = endDt.toLocaleString(DateTime.DATE_FULL);

  const handleRemoveEvent = useCallback(
    (id: string) => {
      removeEvent(id);
    },
    [removeEvent]
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    startDateFormatted,
    endDateFormatted,
    isModalOpen,
    handleRemoveEvent,
    openModal,
    closeModal,
  };
};

export default useEventItem;
