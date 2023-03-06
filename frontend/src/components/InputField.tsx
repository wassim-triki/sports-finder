import React from 'react';

interface Props {
  label: string;
  type: string;
  name: string;
  placeHolder: string;
}
export const InputField = ({ label, type, name, placeHolder }: Props) => {
  return (
    <div className="w-full group flex flex-col gap-1">
      <label
        className="text-slate-500 group-focus-within:text-slate-800"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="group outline-accent-200 px-3 py-2 border-2 border-slate-300 rounded-[4px] w-full"
        type={type}
        placeholder={placeHolder}
        id={name}
      />
    </div>
  );
};
