import { v4 as uuid } from 'uuid';

import { TASK_TYPES } from '@constants/task';

import { ACTION_TYPES } from './type';
import type { State, Action } from './type';

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ACTION_TYPES.ADD_ITEM_FUN:
      return {
        ...state,
        listFun: [
          ...state.listFun,
          { ...action.payload, id: uuid(), type: TASK_TYPES.FUNCTION },
        ],
      };
    case ACTION_TYPES.REMOVE_ITEM_FUN:
      return {
        ...state,
        listFun: state.listFun.filter((item) => item.id !== action.payload),
      };
    case ACTION_TYPES.ADD_ITEM_CLASS:
      return {
        ...state,
        listClass: [
          ...state.listClass,
          { ...action.payload, id: uuid(), type: TASK_TYPES.CLASS },
        ],
      };
    case ACTION_TYPES.REMOVE_ITEM_CLASS:
      return {
        ...state,
        listClass: state.listClass.filter((item) => item.id !== action.payload),
      };
    case ACTION_TYPES.ADD_MODAL:
      return {
        ...state,
        modal: {
          type: action.payload.type,
          modalProps: action.payload.modalProps,
        },
      };
    case ACTION_TYPES.REMOVE_MODAL:
      return {
        ...state,
        modal: { type: null, modalProps: null },
      };
    case ACTION_TYPES.EDIT_ITEM_FUN:
      return {
        ...state,
        listFun: state.listFun.map((item) =>
          item.id === action.payload.id
            ? { ...item, ...action.payload.item }
            : item,
        ),
      };
    case ACTION_TYPES.EDIT_ITEM_CLASS:
      return {
        ...state,
        listClass: state.listClass.map((item) =>
          item.id === action.payload.id
            ? { ...item, ...action.payload.item }
            : item,
        ),
      };
    default:
      return state;
  }
}
