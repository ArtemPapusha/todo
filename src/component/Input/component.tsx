import type React from 'react';

import { Input, Form } from 'antd';

import useContainer from '@component/Input/hook';

export interface InputFieldProps {
  name: string;
  placeholder?: string;
  label: string;
  inputType: 'text' | 'textArea';
  ruleType?: 'string' | 'number' | 'url' | 'email';
  maxLength?: number;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  label,
  inputType,
  ruleType,
  maxLength,
}) => {
  const { value, handleChange } = useContainer({
    name,
  });

  const id = `input-${name}`;

  return (
    <>
      {inputType === 'text' && (
        <Form.Item
          hasFeedback
          label={label}
          name={id}
          rules={[
            { required: true, message: `${label} is required!` },
            {
              max: maxLength,
              message: `Cant be more than ${maxLength} symbols`,
            },
            { type: ruleType },
          ]}
          validateDebounce={300}
          initialValue={value}
        >
          <Input
            placeholder={placeholder}
            name={name}
            onChange={handleChange}
            id={id}
            value={value}
          />
        </Form.Item>
      )}
      {inputType === 'textArea' && (
        <Form.Item
          hasFeedback
          label={label}
          name={id}
          rules={[
            { required: true, message: `${label} is required!` },
            {
              max: maxLength,
              message: `Cant be more than ${maxLength} symbols`,
            },
            { type: ruleType },
          ]}
          validateDebounce={300}
          initialValue={value}
        >
          <Input.TextArea
            placeholder={placeholder}
            name={name}
            onChange={handleChange}
            id={id}
            value={value}
            autoSize={{ minRows: 3, maxRows: 5 }}
            maxLength={maxLength}
            showCount
          />
        </Form.Item>
      )}
    </>
  );
};

export default InputField;
