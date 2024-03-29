import type { ModalDataType, ModalDataTypeAction } from '@generalTypes/modalTypes';
import type { ItemType } from '@generalTypes/task';
export enum ACTION_TYPES {
  ADD_ITEM_FUN = 'ADD_ITEM_FUN',
  REMOVE_ITEM_FUN = 'REMOVE_ITEM_FUN',
  ADD_ITEM_CLASS = 'ADD_ITEM_CLASS',
  REMOVE_ITEM_CLASS = 'REMOVE_ITEM_CLASS',
  ADD_MODAL = 'ADD_MODAL',
  REMOVE_MODAL = 'REMOVE_MODAL',
  EDIT_ITEM_FUN = 'EDIT_ITEM_FUN',
  EDIT_ITEM_CLASS = 'EDIT_ITEM_CLASS',
}

interface editItemType {
  id: string;
  item: Omit<ItemType, 'id' | 'type'>;
}

export interface State {
  listFun: ItemType[];
  listClass: ItemType[];
  modal: ModalDataType;
}

export interface ActionItem<T, P> {
  type: T;
  payload: P;
}

export type Action =
  | ActionItem<ACTION_TYPES.ADD_ITEM_FUN, Omit<ItemType, 'id' | 'type'>>
  | ActionItem<ACTION_TYPES.REMOVE_ITEM_FUN, string>
  | ActionItem<ACTION_TYPES.ADD_ITEM_CLASS, Omit<ItemType, 'id' | 'type'>>
  | ActionItem<ACTION_TYPES.REMOVE_ITEM_CLASS, string>
  | ActionItem<ACTION_TYPES.ADD_MODAL, ModalDataTypeAction>
  | ActionItem<ACTION_TYPES.REMOVE_MODAL, undefined>
  | ActionItem<ACTION_TYPES.EDIT_ITEM_FUN, editItemType>
  | ActionItem<ACTION_TYPES.EDIT_ITEM_CLASS, editItemType>;
