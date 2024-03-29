import type React from 'react';

import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import useContainer from './hook';

export interface TaskDeleteBtnProps {
  id: string;
}

const TaskDeleteBtn: React.FC<TaskDeleteBtnProps> = ({ id }) => {
  const { handleDeleteTask } = useContainer();
  return (
    <Button
      icon={<CloseOutlined />}
      type="default"
      onClick={handleDeleteTask(id)}
      size="small"
    />
  );
};

export default TaskDeleteBtn;
