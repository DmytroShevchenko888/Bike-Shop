import React from "react";
import { getImageUrl } from "../../helpers/getImageUrl";

interface InputTextareaProps {
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

  placeholder: string; // <input placeholder="?"/>
}

export const InputTextarea: React.FC<InputTextareaProps> = ({
  register,
  registerKey,
  errors,
  optionalField,
  errorMessage,
  errorMessageMinLength,
  valueMinLength,
  label,

  placeholder,
}) => {
  return (
    <div className="form-add-bicycle__input-block">
      <label className="form-add-bicycle__input-title">{label}</label>
      <div className="textarea-relative">
        <textarea
          className={errors?.[registerKey] ? "textarea-relative__error" : ""}
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
                }
          )}
          placeholder={placeholder}
        />
        {errors?.[registerKey] && (
          <img
            className="textarea-absolute"
            src={getImageUrl("addBicycle", "warning.svg")}
            alt="!"
          />
        )}

        {errors?.[registerKey] && (
          <h6 className="message-error">{errors?.[registerKey].message}</h6>
        )}
      </div>
    </div>
  );
};
