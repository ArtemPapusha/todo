import type React from 'react';

import { Typography } from 'antd';

import type { ItemType } from '@generalTypes/task';
import Task from '@modules/Task';
const { Title } = Typography;

import style from './style.module.scss';

interface ToDoListProps {
  tasks: ItemType[];
}

const ToDoListComponent: React.FC<ToDoListProps> = ({ tasks }) => {
  return (
    <>
      <Title level={2}>Class component</Title>
      <div>
        <Title level={2}>To do list :</Title>
        <div className={style.taskWrapper}>
          {tasks.map((task) => (
            <Task
              type={task.type}
              id={task.id}
              key={task.id}
              title={task.title}
              description={task.description}
              member={task.member}
              tools={task.tools}
              deadlines={task.deadlines}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ToDoListComponent;
