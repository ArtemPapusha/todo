import type React from 'react';

import { Modal as AntModal } from 'antd';

interface ModalFieldProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  onCancel:
    | ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

const Modal: React.FC<ModalFieldProps> = ({
  children,
  title,
  footer,
  onCancel,
}) => {
  return (
    <AntModal title={title} open={true} onCancel={onCancel} footer={footer}>
      {children}
    </AntModal>
  );
};

export default Modal;
