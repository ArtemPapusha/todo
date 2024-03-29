import type React from 'react';
import { useReducer, createContext } from 'react';

import {
  addItemFunAction,
  removeItemFunAction,
  addItemClassAction,
  removeItemClassAction,
  openModalAction,
  closeModalAction,
  editItemClassAction,
  editItemFunAction,
} from '@contexts/store/actions';
import type { State } from '@contexts/store/index';
import { reducer } from '@contexts/store/reducer';
import type { ModalDataTypeAction } from '@generalTypes/modalTypes';
import type { ItemType } from '@generalTypes/task';

interface ContextProviderProps {
  children: React.ReactNode;
}

export interface ContextProps {
  addItemFun: (item: Omit<ItemType, 'id' | 'type'>) => void;

  removeItemFun: (title: string) => void;

  addItemClass: (item: Omit<ItemType, 'id' | 'type'>) => void;

  removeItemClass: (title: string) => void;

  state: State;

  openModal: (item: ModalDataTypeAction) => void;

  closeModal: () => void;

  editItemFun: (id: string, item: Omit<ItemType, 'id' | 'type'>) => void;

  editItemClass: (id: string, item: Omit<ItemType, 'id' | 'type'>) => void;
}

export const Context = createContext<ContextProps>({
  addItemFun: () => {},
  removeItemFun: () => {},
  addItemClass: () => {},
  removeItemClass: () => {},
  state: {
    listFun: [],
    listClass: [],
    modal: {
      type: null,
      modalProps: null,
    },
  },
  openModal: () => {},
  closeModal: () => {},
  editItemFun: () => {},
  editItemClass: () => {},
});

const ContextProvider = ({ children }: ContextProviderProps) => {
  const initState: State = {
    listFun: [],
    listClass: [],
    modal: {
      type: null,
      modalProps: null,
    },
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const addItemFun = (item: Omit<ItemType, 'id' | 'type'>) => {
    dispatch(addItemFunAction(item));
  };

  const removeItemFun = (title: string) => {
    dispatch(removeItemFunAction(title));
  };

  const addItemClass = (item: Omit<ItemType, 'id' | 'type'>) => {
    dispatch(addItemClassAction(item));
  };

  const removeItemClass = (title: string) => {
    dispatch(removeItemClassAction(title));
  };

  const openModal = (item: ModalDataTypeAction) => {
    dispatch(openModalAction(item));
  };

  const closeModal = () => {
    dispatch(closeModalAction());
  };

  const editItemFun = (id: string, item: Omit<ItemType, 'id' | 'type'>) => {
    dispatch(editItemFunAction(id, item));
  };

  const editItemClass = (id: string, item: Omit<ItemType, 'id' | 'type'>) => {
    dispatch(editItemClassAction(id, item));
  };

  return (
    <Context.Provider
      value={{
        state,
        addItemFun,
        addItemClass,
        removeItemFun,
        removeItemClass,
        openModal,
        closeModal,
        editItemFun,
        editItemClass,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
