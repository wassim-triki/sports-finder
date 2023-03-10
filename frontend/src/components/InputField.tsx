import React from 'react';

interface Props {
  name: string;
  type: string;
  placeholder: string;
  label: string;
  errors: any;
  register: Function;
  fullWidth: Boolean;
}

const InputField = ({
  name,
  label,
  type,
  placeholder,
  register,
  errors,
  fullWidth = true,
}: Props) => {
  return (
    <div className={`flex flex-col ${fullWidth && 'col-span-full'}`}>
      <label
        htmlFor={name}
        className={`${
          !errors[name] && 'text-slate-500'
        } font-medium focus-within:text-black transition-all ${
          errors[name] && 'text-red-500 focus-within:text-red-500'
        }`}
      >
        {label}
        {errors[name] ? (
          <span className=" text-sm italic font-normal ">
            <span> - </span>
            {errors[name]?.message?.toString()}
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
