import type { TASK_TYPES } from '@constants/task';

export enum ModalType {
  TASK_MODAL = 'TASK_MODAL',
}

export interface ModalProps {
  typeTask: TASK_TYPES;
  id?: string;
}

export interface ModalEmptyDataType {
  type: null;
  modalProps: null;
}

export interface ModalTaskDataType {
  type: ModalType;
  modalProps: ModalProps;
}

export type ModalDataType = ModalTaskDataType | ModalEmptyDataType;
export type ModalDataTypeAction = ModalTaskDataType;
