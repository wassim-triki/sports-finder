import React from 'react';
import { InputField } from './InputField';

const CredentialsForm = () => {
  return (
    <form className="flex flex-col gap-3">
      <div className="flex gap-4">
        <InputField
          label="First name"
          type="text"
          name="firstName"
          placeHolder="Your first name"
        />
        <InputField
          label="Last name"
          type="text"
          name="lastName"
          placeHolder="Your last name"
        />
      </div>
      <InputField
        label="Email"
        type="email"
        name="email"
        placeHolder="name@example.com"
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        placeHolder="Your password"
      />
      <InputField
        label="Repeat password"
        type="password"
        name="repeatPassword"
        placeHolder="Repeat your password"
      />
    </form>
  );
};

export default CredentialsForm;
