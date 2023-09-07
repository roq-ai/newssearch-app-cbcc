import * as yup from 'yup';

export const educationalResourceValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  source_link: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
