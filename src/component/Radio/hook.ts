import type { RadioChangeEvent } from 'antd';
import { useField } from 'formik';

import type { RadioFieldProps } from './component';

const useContainer = ({ name }: Pick<RadioFieldProps, 'name'>) => {
  const [fieldInputProps, fieldMetaProps, fieldHelperProps] = useField(name);
  const { value } = fieldInputProps;
  const { setValue } = fieldHelperProps;
  const { error } = fieldMetaProps;

  const handleRadioChange = (event: RadioChangeEvent) => {
    setValue(event.target.value);
  };

  return {
    value,
    error,
    handleRadioChange,
  };
};

export default useContainer;
