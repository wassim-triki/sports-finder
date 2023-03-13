import * as yup from 'yup';
export const loginSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Email not valid'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password should have a minimum length of 5')
    .max(12, 'Password should have a maximum length of 12'),
});
