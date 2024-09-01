import React, { forwardRef } from "react";
import "./InputField.scss";
import { FieldErrors } from "react-hook-form";

interface inputProps {
  type: "text" | "email";
  value?: string;
  name: string;
  id?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errors?: FieldErrors;
  pattern?: string;
  //   defaultValue?: string;
}

const InputField = (
  props: inputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const {
    type,
    value,
    onChange,
    errors,
    name,
    id,
    className,
    placeholder,
    pattern,
    onBlur,
    // defaultValue,
  } = props;

  const error = errors && errors[name];

  return (
    <div className={`input-container ${className}`}>
      {error && <p className="error-message">{error.message?.toString()}</p>}
      <input
        ref={ref}
        type={type}
        name={name}
        pattern={pattern}
        onChange={onChange}
        value={value}
        id={id}
        placeholder={placeholder}
        onBlur={onBlur}
        // defaultValue={defaultValue}
      />
    </div>
  );
};

const Input = forwardRef(InputField);

export default Input;
