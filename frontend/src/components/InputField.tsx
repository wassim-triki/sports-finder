import React from 'react';
import { IInput } from '../types';
interface Props extends IInput {
  register: Function;
}

const InputField = ({
  name,
  label,
  type,
  placeholder,
  register,
  error,
}: Props) => {
  return (
    <div
      // id={`${name}`}
      className={` ${name} flex flex-col`}
    >
      <label
        htmlFor={name}
        className={`${
          !error && 'text-slate-500'
        } font-medium focus-within:text-black transition-all ${
          error ? 'text-red-500 focus-within:text-red-500' : ''
        }`}
      >
        {label}
        {error ? (
          <span className=" text-sm italic font-normal ">
            <span> - </span>
            {error?.message?.toString()}
          </span>
        ) : (
          <></>
        )}
      </label>
      <input
        className={`input`}
        {...register(name)}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
