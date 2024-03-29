import type React from 'react';

import { Outlet } from 'react-router-dom';

import NewTaskBtn from '@layout/Components/taskControls/NewTaskBtn';
import TaskDeleteBtn from '@layout/Components/taskControls/TaskDeleteBtn';
import type { TaskDeleteBtnProps } from '@layout/Components/taskControls/TaskDeleteBtn/component';
import TaskEditBtn from '@layout/Components/taskControls/TaskEditBtn';
import type { TaskEditBtnProps } from '@layout/Components/taskControls/TaskEditBtn/component';

export interface OutletType {
  TaskDeleteBtn: React.FC<TaskDeleteBtnProps>;
  TaskEditBtn: React.FC<TaskEditBtnProps>;
}

const Components: React.FC = () => {
  return (
    <>
      <NewTaskBtn />
      <Outlet
        context={{
          TaskDeleteBtn,
          TaskEditBtn,
        }}
      />
    </>
  );
};

export default Components;
