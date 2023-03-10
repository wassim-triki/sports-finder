import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
const inputs = [
  {
    name: 'firstName',
    label: 'First name',
    type: 'text',
    placeholder: 'Enter your first name',
  },
  {
    name: 'lastName',
    label: 'Last name',
    type: 'text',
    placeholder: 'Enter your last name',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
  {
    name: 'repeatPassword',
    label: 'Repeat password',
    type: 'password',
    placeholder: 'Repeat your password',
  },
];

interface Props {
  handleSubmitCredentials: SubmitHandler<any>;
}
const CredentialsForm = ({ handleSubmitCredentials }: Props) => {
  const { register, handleSubmit } = useForm();
  // console.log(useForm());
  const submitForm = (formValues: any) => {
    console.log(formValues);
  };
  return (
    <form
      onSubmit={handleSubmit(handleSubmitCredentials)}
      className="grid grid-cols-2 gap-4"
    >
      {inputs.map(({ name, label, type, placeholder }, idx) => (
        <label
          key={name}
          className={`${
            idx >= 2 && 'col-span-2'
          } text-slate-500 font-medium focus-within:text-black transition-all`}
        >
          {label}
          <input
            className={`input`}
            {...register(name)}
            type={type}
            placeholder={placeholder}
          />
        </label>
      ))}
      <button type="submit">submit</button>
    </form>
  );
};

export default CredentialsForm;
