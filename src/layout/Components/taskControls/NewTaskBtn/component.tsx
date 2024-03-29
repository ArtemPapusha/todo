import type React from 'react';

import { Button } from 'antd';

import useContainer from './hook';

const NewTaskBtn: React.FC = () => {
  const { openNewTask } = useContainer();
  return (
    <Button type="primary" onClick={openNewTask}>
      New Task
    </Button>
  );
};

export default NewTaskBtn;
