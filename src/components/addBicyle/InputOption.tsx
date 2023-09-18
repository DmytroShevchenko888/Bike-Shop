import React from "react";

interface InputOptionProps {
  listElements: string[]; // The list Elements for drop down window "select/option"

  register: any; // react-hook-form
  registerKey: string; // react-hook-form, name key
  errors: any; // react-hook-form
  errorMessage: string; // message error text, if not value
  label: string; // title text componenta
}

export const InputOption: React.FC<InputOptionProps> = ({
  listElements,
  register,
  registerKey,
  errors,
  errorMessage,
  label,
}) => {
  return (
    <div className="form-add-bicycle__input-block">
      <label className="form-add-bicycle__input-title">{label}</label>
      <div>
        <select {...register(registerKey, { required: errorMessage })}>
          <option value="" disabled selected>
            {`Select a ${registerKey}`}
          </option>
          {listElements.map((categoryName) => (
            <option key={categoryName} value={categoryName}>
              {categoryName}
            </option>
          ))}
        </select>
        {errors?.[registerKey] && (
          <h6 className="message-error">{errors?.[registerKey].message}</h6>
        )}
      </div>
    </div>
  );
};
