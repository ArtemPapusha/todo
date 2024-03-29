import * as Yup from 'yup';

const taskSchema = Yup.object().shape({
  title: Yup.string().required('Title is required!').max(10),
  description: Yup.string().required('Description is required!').max(20),
  member: Yup.string().required(),
  // deadlines: Yup.array().of(
  //   Yup.string().required('Deadline is required!')
  // ).min(2, 'At least two deadlines are required'),
});

export default taskSchema;
