import * as yup from 'yup';
export const credentialsSchema = yup.object().shape({
  firstName: yup.string().required('first name is required'),
  lastName: yup.string().required('last name is required'),
  email: yup
    .string()
    .required('email address is required')
    .email('please provide a valid email address'),
  password: yup
    .string()
    .required('password is required')
    .min(5, 'password should have a minimum length of 5')
    .max(12, 'password should have a maximum length of 12'),

  repeatPassword: yup
    .string()
    .required('repeat password is required')
    .oneOf([yup.ref('password')], 'passwords must match'),
});
