import React from 'react';
import { useForm } from 'react-hook-form';

const inputs = [
  {
    name: 'phone',
    label: 'Phone',
    type: 'text',
    placeholder: 'Enter your phone',
  },
  {
    name: 'state',
    label: 'State',
    type: 'text',
    placeholder: 'Enter your state',
  },
  {
    name: 'zipCode',
    label: 'Zip code',
    type: 'text',
    placeholder: 'Enter your zip code',
  },
  {
    name: 'city',
    label: 'City',
    type: 'text',
    placeholder: 'Enter your city',
  },
  {
    name: 'street',
    label: 'Street',
    type: 'text',
    placeholder: 'Enter your street',
  },
];

const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const submitForm = (formValues: any) => {
    console.log(formValues);
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="grid grid-cols-2 gap-4"
    >
      {inputs.map(({ name, label, type, placeholder }, idx) => (
        <label
          key={name}
          className={`${
            idx !== 1 && idx !== 2 && 'col-span-2'
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
    </form>
  );
};

export default ContactForm;
