import type { ModalDataTypeAction } from '@generalTypes/modalTypes';
import type { ItemType } from '@generalTypes/task';

import { ACTION_TYPES } from './type';
import type { Action } from './type';

export const addItemFunAction = (
  item: Omit<ItemType, 'id' | 'type'>,
): Action => ({
  type: ACTION_TYPES.ADD_ITEM_FUN,
  payload: item,
});

export const removeItemFunAction = (id: string): Action => ({
  type: ACTION_TYPES.REMOVE_ITEM_FUN,
  payload: id,
});

export const addItemClassAction = (
  item: Omit<ItemType, 'id' | 'type'>,
): Action => ({
  type: ACTION_TYPES.ADD_ITEM_CLASS,
  payload: item,
});

export const removeItemClassAction = (id: string): Action => ({
  type: ACTION_TYPES.REMOVE_ITEM_CLASS,
  payload: id,
});

export const openModalAction = (item: ModalDataTypeAction): Action => ({
  type: ACTION_TYPES.ADD_MODAL,
  payload: item,
});

export const closeModalAction = (): Action => ({
  type: ACTION_TYPES.REMOVE_MODAL,
  payload: undefined,
});

export const editItemFunAction = (
  id: string,
  item: Omit<ItemType, 'id' | 'type'>,
): Action => ({
  type: ACTION_TYPES.EDIT_ITEM_FUN,
  payload: { id, item },
});

export const editItemClassAction = (
  id: string,
  item: Omit<ItemType, 'id' | 'type'>,
): Action => ({
  type: ACTION_TYPES.EDIT_ITEM_CLASS,
  payload: { id, item },
});
