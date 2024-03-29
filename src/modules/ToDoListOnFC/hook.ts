import { useContext } from 'react';

import { Context } from '@contexts/Context';

const useContainer = () => {
  const context = useContext(Context);
  const { state } = context;

  return {
    state: state,
  };
};

export default useContainer;
