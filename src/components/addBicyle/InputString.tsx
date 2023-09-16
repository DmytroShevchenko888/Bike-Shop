import React from "react";
import { getImageUrl } from "../../helpers/getImageUrl";

interface InputStringProps {
  register: any; // react-hook-form
  registerKey: string; // react-hook-form, name key
  errors?: any; // react-hook-form
  optionalField?: boolean; // react-hook-form, optional field input

  errorMessage?: string; // message error text, if not value
  errorMessageMinLength?: string; // message error text, if string < minLength
  errorMessageMaxLength?: string; // message error text, if string > maxLength
  errorMessageMin?: string; // message error text, if number < min
  errorMessageMax?: string; // message error text, if number > max
  valueMinLength?: number; // min number of characters
  valueMaxLength?: number; // max number of characters
  valueMin?: number; // min number value
  valueMax?: number; // max number value
  label: string; // title text componenta
  typeInput: string; // <input type="?"/>
  placeholder: string; // <input placeholder="?"/>
}

export const InputString: React.FC<InputStringProps> = ({
  register,
  registerKey,
  optionalField,
  errors,
  errorMessage,
  errorMessageMinLength,
  errorMessageMin,
  errorMessageMax,
  valueMinLength,
  valueMin,
  valueMax,
  label,
  typeInput,
  placeholder,
}) => {
  return (
    <div className="form-add-bicycle__input-block">
      <label className="form-add-bicycle__input-title">{label}</label>
      <div className="input-relative">
        <input
          type={typeInput}
          {...register(
            registerKey,
            optionalField
              ? { required: false }
              : {
                  required: errorMessage,

                  minLength: {
                    value: valueMinLength,
                    message: errorMessageMinLength,
                  },
                  min: { value: valueMin, message: errorMessageMin },
                  max: { value: valueMax, message: errorMessageMax },
                }
          )}
          className={`form-add-bicycle__input-string ${
            errors?.[registerKey] ? "error" : ""
          }`}
          placeholder={placeholder}
        />
        {errors?.[registerKey] && (
          <img
            className="input-absolute"
            src={getImageUrl("addBicycle", "warning.svg")}
            alt="!"
          />
        )}
      </div>
      {errors?.[registerKey] && (
        <h6 className="message-error">{errors?.[registerKey].message}</h6>
      )}
    </div>
  );
};
