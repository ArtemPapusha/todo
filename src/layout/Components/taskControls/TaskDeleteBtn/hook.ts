import { useContext } from 'react';

import { Context } from '@contexts/Context';

const useContainer = () => {
  const context = useContext(Context);
  const { removeItemFun, removeItemClass } = context;

  const handleDeleteTask = (id: string) => () => {
    removeItemClass(id);
    removeItemFun(id);
  };

  return {
    handleDeleteTask,
  };
};

export default useContainer;
