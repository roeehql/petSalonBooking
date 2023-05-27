import React, { ChangeEvent } from "react";

interface InputType {
  type: "text" | "date" | "number" | "password";
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  labelText: string;
}

const Input = ({ type, name, onChange, value, labelText }: InputType) => {
  return (
    <div className="flex flex-col justify-center items-start">
      <label
        className="text-base tracking-tighter text-green-950"
        htmlFor={name}
      >
        {labelText}
      </label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        required
        className="px-4 py-2 mt-2 rounded-xl border-2 border-green-600 outline-none"
      />
    </div>
  );
};

export default Input;
