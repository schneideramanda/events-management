import { useState } from 'react';

interface UseEventListHookProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useEventList = (): UseEventListHookProps => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};

export default useEventList;
