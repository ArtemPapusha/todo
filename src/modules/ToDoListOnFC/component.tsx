import type React from 'react';

import { Typography } from 'antd';

import Task from '@modules/Task';
import useContainer from '@modules/ToDoListOnFC/hook';

import style from './style.module.scss';

const { Title } = Typography;

const ToDoListOnFC: React.FC = () => {
  const { state } = useContainer();

  return (
    <>
      <Title level={2}>Function component</Title>
      <div>
        <Title level={2}>To do list :</Title>
        <div className={style.taskWrapper}>
          {state.listFun.map((task) => (
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

export default ToDoListOnFC;
