import type { Dayjs } from 'dayjs';
import { useField } from 'formik';

import type { DatePickerFieldProps } from './component';

const useContainer = ({ name }: Pick<DatePickerFieldProps, 'name'>) => {
  const [fieldInputProps, fieldMetaProps, fieldHelperProps] = useField(name);
  const { value } = fieldInputProps;
  const { setValue } = fieldHelperProps;
  const { error } = fieldMetaProps;

  const onRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[],
  ) => {
    setValue({ dateStrings, dates });
  };

  return {
    value,
    error,
    onRangeChange,
  };
};

export default useContainer;
