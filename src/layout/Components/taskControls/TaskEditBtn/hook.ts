import { useContext } from 'react';

import type { TASK_TYPES } from '@constants/task';
import { Context } from '@contexts/Context';
import { ModalType } from '@generalTypes/modalTypes';

const useContainer = () => {
  const context = useContext(Context);
  const { openModal } = context;

  const openEditTask = (id: string, typeTask: TASK_TYPES) => () => {
    
    openModal({
      type: ModalType.TASK_MODAL,
      modalProps: { id: id, typeTask },
    });
  };

  return {
    openEditTask,
  };
};

export default useContainer;
