import type React from 'react';

import { Radio } from 'antd';

import useContainer from '@component/Radio/hook';

export interface RadioFieldProps {
  name: string;
  label: string;
}

const RadioField: React.FC<RadioFieldProps> = ({ name, label }) => {
  const { handleRadioChange } = useContainer({
    name,
  });

  const id = `input-${name}`;

  return (
    <Radio name={name} onChange={handleRadioChange} id={id} value={label}>
      {label}
    </Radio>
  );
};

export default RadioField;
