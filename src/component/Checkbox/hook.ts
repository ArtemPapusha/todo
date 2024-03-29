import type { GetProp, Checkbox } from 'antd';
import { useField } from 'formik';

import type { CheckboxFieldProps } from './component';

const useContainer = ({ name }: Pick<CheckboxFieldProps, 'name'>) => {
  const [fieldInputProps, fieldMetaProps, fieldHelperProps] = useField(name);
  const { value } = fieldInputProps;
  const { setValue } = fieldHelperProps;
  const { error } = fieldMetaProps;

  const handleCheckboxChange: GetProp<typeof Checkbox.Group, 'onChange'> = (
    checkedValues,
  ) => {
    setValue(checkedValues);
  };

  return {
    value,
    error,
    handleCheckboxChange,
  };
};

export default useContainer;
