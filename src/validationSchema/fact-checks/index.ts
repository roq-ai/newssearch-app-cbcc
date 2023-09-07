import * as yup from 'yup';

export const factCheckValidationSchema = yup.object().shape({
  title: yup.string().required(),
  summary: yup.string().required(),
  source_link: yup.string().required(),
  source_credibility: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
