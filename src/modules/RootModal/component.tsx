import type React from 'react';
import { useContext } from 'react';

import { Context } from '@contexts/Context';
import type { ModalProps } from '@generalTypes/modalTypes';

import modals from './modals';
const RootModal: React.FC = () => {
  const context = useContext(Context);
  const { type, modalProps } = context.state.modal;

  if (!type) {
    return null;
  }

  const Component = modals[type as keyof typeof modals];

  return <Component {...(modalProps as ModalProps)} />;
};

export default RootModal;
