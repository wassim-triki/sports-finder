import React from 'react';
import { InputField } from './InputField';

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-3">
      <InputField
        label="Phone"
        type="text"
        name="phone"
        placeHolder="12 345 678"
      />
      <div className="flex gap-4">
        <InputField
          label="State"
          type="text"
          name="state"
          placeHolder="Enter your state"
        />
        <InputField
          label="City"
          type="text"
          name="city"
          placeHolder="Enter your city"
        />
      </div>
      <div className="flex gap-4">
        <InputField
          label="Street"
          type="text"
          name="street"
          placeHolder="Enter your street"
        />
        <InputField
          label="Zip code"
          type="text"
          name="zipCode"
          placeHolder="Enter your zip code"
        />
      </div>
    </form>
  );
};

export default ContactForm;
