import type React from 'react';

import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import type { TASK_TYPES } from '@constants/task';

import useContainer from './hook';

export interface TaskEditBtnProps {
  id: string;
  typeTask: TASK_TYPES;
}

const TaskEditBtn: React.FC<TaskEditBtnProps> = ({ id, typeTask }) => {
  const { openEditTask } = useContainer();

  return (
    <Button
      icon={<EditOutlined />}
      type="default"
      onClick={openEditTask(id, typeTask)}
      size="small"
      style={{ marginRight: 5 }}
    />
  );
};

export default TaskEditBtn;
