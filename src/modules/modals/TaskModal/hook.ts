import { useContext } from 'react';

import { useFormik } from 'formik';
import type { FormikHelpers } from 'formik';

import { TASK_TYPES } from '@constants/task';
import { Context } from '@contexts/Context';
import type { ModalProps } from '@generalTypes/modalTypes';
import type { ItemType } from '@generalTypes/task';

import taskSchema from './taskValidation';

const useContainer = ({ id, typeTask }: ModalProps) => {
  const context = useContext(Context);

  const {
    addItemFun,
    addItemClass,
    closeModal,
    state,
    editItemClass,
    editItemFun,
  } = context;

  const listItems = [...state.listClass, ...state.listFun];

  const selectedItem = listItems.find((item) => item.id === id);

  const initialValues: Omit<ItemType, 'id' | 'type'> = {
    title: selectedItem?.title ?? '',
    description: selectedItem?.description ?? '',
    member: selectedItem?.member ?? '',
    tools: selectedItem?.tools ?? [],
    deadlines: {
      dates: selectedItem?.deadlines.dates ?? [null, null],
      dateStrings: selectedItem?.deadlines.dateStrings ?? ['', ''],
    },
  };

  const handleSubmit = (
    values: Omit<ItemType, 'id' | 'type'>,
    formikHelpers: FormikHelpers<Omit<ItemType, 'id' | 'type'>>,
  ) => {
    console.log(formikHelpers);

    if (!id && typeTask === TASK_TYPES.FUNCTION) {
      addItemFun(values);
    }

    if (!id && typeTask === TASK_TYPES.CLASS) {
      addItemClass(values);
    }

    if (id && typeTask === TASK_TYPES.FUNCTION) {
      editItemFun(id, values);
    }

    if (id && typeTask === TASK_TYPES.CLASS) {
      editItemClass(id, values);
    }

    closeModal();
  };

  const form = useFormik<Omit<ItemType, 'id' | 'type'>>({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: taskSchema,
    onSubmit: handleSubmit,
  });

  const handleCancel = () => {
    closeModal();
  };

  return {
    form,
    handleCancel,
  };
};

export default useContainer;
