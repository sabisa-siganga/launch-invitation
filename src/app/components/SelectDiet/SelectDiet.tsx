import React, { forwardRef } from "react";
import "./SelectDiet.scss";
import { FieldErrors, SubmitHandler } from "react-hook-form";

interface SelectProps {
  options: {
    value: string;
  }[];
  errors?: FieldErrors;
  name?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  defaultValue?: string;
}

const Select = (
  props: SelectProps,
  ref: React.ForwardedRef<HTMLSelectElement>
) => {
  const {
    options,
    onBlur,
    onChange,
    errors,
    name,
    id,
    placeholder,
    required,
    defaultValue,
  } = props;
  const error = errors && name && errors[name];

  return (
    <div className="select-page-cont">
      {error && <p className="error-message">{error.message?.toString()}</p>}
      <div className="select-container">
        <select
          id={id}
          className={`select-item ${error ? "error" : ""}`}
          ref={ref}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          defaultValue={defaultValue}
        >
          {placeholder && (
            <option value="" className="select-list-item">
              {placeholder}
            </option>
          )}

          {options.map((item, index) => {
            return (
              <option
                key={index}
                value={item.value}
                className="select-list-item"
              >
                {item.value}
              </option>
            );
          })}
        </select>
        <div className="down-arrow"></div>
      </div>
    </div>
  );
};

const SelectField = forwardRef(Select);

export default SelectField;
