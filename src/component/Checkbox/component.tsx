import type React from 'react';

import { Checkbox } from 'antd';

import useContainer from '@component/Checkbox/hook';

export interface CheckboxFieldProps {
  name: string;
  options: {
    label: string;
    value: string;
  }[];
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ name, options }) => {
  const { handleCheckboxChange, value } = useContainer({
    name,
  });

  return (
    <Checkbox.Group
      name={name}
      options={options}
      onChange={handleCheckboxChange}
      value={value}
    />
  );
};

export default CheckboxField;
