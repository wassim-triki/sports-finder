import * as yup from 'yup';
export const credentialsSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().required('Email is required').email('Email not valid'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password should have a minimum length of 5')
    .max(12, 'Password should have a maximum length of 12'),

  repeatPassword: yup
    .string()
    .required('Repeat password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});
