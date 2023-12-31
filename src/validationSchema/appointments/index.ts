import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  patient_id: yup.string().nullable(),
  employee_id: yup.string().nullable(),
});
