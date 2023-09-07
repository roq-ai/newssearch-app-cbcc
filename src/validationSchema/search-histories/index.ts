import * as yup from 'yup';

export const searchHistoryValidationSchema = yup.object().shape({
  keywords: yup.string().required(),
  date: yup.date().required(),
  region: yup.string().required(),
  source_credibility: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
