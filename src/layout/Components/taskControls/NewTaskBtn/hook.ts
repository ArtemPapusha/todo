import { useContext } from 'react';

import { useMatches } from 'react-router-dom';

import { ROUTES, ROUTE_ID } from '@constants/routes';
import { TASK_TYPES } from '@constants/task';
import { Context } from '@contexts/Context';
import { ModalType } from '@generalTypes/modalTypes';

const useContainer = () => {
  const matches = useMatches();
  const context = useContext(Context);
  const { openModal } = context;

  const openNewTask = () => {
    if (matches.at(-1)?.id === ROUTES[ROUTE_ID.CLASS_COMPONENT].ID) {
      openModal({
        type: ModalType.TASK_MODAL,
        modalProps: { typeTask: TASK_TYPES.CLASS },
      });
    }
    if (matches.at(-1)?.id === ROUTES[ROUTE_ID.FUNCTION_COMPONENT].ID) {
      openModal({
        type: ModalType.TASK_MODAL,
        modalProps: { typeTask: TASK_TYPES.FUNCTION },
      });
    }
  };

  return {
    openNewTask,
  };
};

export default useContainer;
