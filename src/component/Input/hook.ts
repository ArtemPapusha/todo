import type { ChangeEvent } from 'react';

import { useField } from 'formik';

import type { InputFieldProps } from './component';

const useContainer = ({ name }: Pick<InputFieldProps, 'name'>) => {

  const [fieldInputProps, fieldMetaProps, fieldHelperProps] = useField(name);
  const { value } = fieldInputProps;
  const { setValue } = fieldHelperProps;
  const { error } = fieldMetaProps;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setValue(event.target.value);
  };

  return {
    value,
    error,
    handleChange,
  };
};

export default useContainer;
