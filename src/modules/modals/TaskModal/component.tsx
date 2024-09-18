import type React from 'react';

import { Button, Form, Radio } from 'antd';
import { FormikProvider } from 'formik';

import CheckboxField from '@component/Checkbox';
import RangePickerField from '@component/DatePicker';
import InputField from '@component/Input';
import Modal from '@component/Modal';
import RadioField from '@component/Radio';
import type { ModalProps } from '@generalTypes/modalTypes';

import useContainer from './hook';

const TaskModal: React.FC<ModalProps> = ({ id, typeTask }) => {
  const { form, handleCancel } = useContainer({ id, typeTask });

  return (
    <Modal
      title={id ? 'Edit task' : 'Creating a new task'}
      onCancel={handleCancel}
      footer={
        <Button htmlType="submit" type="default" onClick={form.submitForm}>
          {id ? 'Save task' : 'Add task'}
        </Button>
      }
    >
      <FormikProvider value={form}>
        <Form>
          <InputField
            name="title"
            placeholder="Enter title"
            label="Title"
            ruleType="string"
            inputType="text"
            maxLength={10}
          />

          <InputField
            name="description"
            placeholder="Enter description"
            label="Description"
            ruleType="string"
            inputType="textArea"
            maxLength={30}
          />

          <Form.Item
            name="member"
            label="Members"
            rules={[{ required: true, message: 'Pick a member!' }]}
            initialValue={form.initialValues.member}
          >
            <Radio.Group>
              <RadioField name="member" label="Slavko" />
              <RadioField name="member" label="Olenka" />
              <RadioField name="member" label="Sashko" />
            </Radio.Group>
          </Form.Item>
          
          <Form.Item
            name="tools"
            label="Tools"
            initialValue={form.initialValues.tools}
          >
            <CheckboxField
              name="tools"
              options={[
                { label: 'Hummer', value: 'Hummer' },
                { label: 'Shovel', value: 'Shovel' },
                { label: 'Saw', value: 'Saw' },
                { label: 'Axe', value: 'Axe' },
              ]}
            />
          </Form.Item>

          <Form.Item
            label="Deadlines"
            name="deadlines"
            initialValue={form.initialValues.deadlines}
            // rules={[
            //   {
            //     type: 'array' as const,
            //     required: true,
            //     message: 'Please select time!',
            //   },
            // ]}
          >
            <RangePickerField name="deadlines" />
          </Form.Item>
        </Form>
      </FormikProvider>
    </Modal>
  );
};

export default TaskModal;
