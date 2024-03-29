import type React from 'react';

import { DatePicker } from 'antd';

import useContainer from '@component/DatePicker/hook';

export interface DatePickerFieldProps {
  name: string;
}

const RangePickerField: React.FC<DatePickerFieldProps> = ({ name }) => {
  const { onRangeChange, value } = useContainer({
    name,
  });

  const { RangePicker } = DatePicker;

  const id = `input-${name}`;

  return <RangePicker format="YYYY-MM-DD" id={id} onChange={onRangeChange} value={value.dates}/>;
};

export default RangePickerField;
