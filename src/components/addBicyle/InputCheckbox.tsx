import React from "react";

interface IInputCheckboxProps {
  label: string; // title component
  toggleState: boolean; // state toggle
  handleChangeFunction: () => void;
}

export const InputCheckbox: React.FC<IInputCheckboxProps> = ({
  label,
  toggleState,
  handleChangeFunction,
}) => {
  const title = `${label}: ${toggleState ? "yes" : "_no"}`;

  const styleButton = toggleState
    ? { backgroundColor: "#F57520", border: "none" }
    : { backgroundColor: "#FFFFFF" };

  const styleSwitchButton = toggleState
    ? { backgroundColor: "#FFFFFF" }
    : { backgroundColor: "#F57520", transform: "translateX(-22px)" };

  return (
    <div className="form-add-bicycle__switch-button">
      <label className="form-add-bicycle__input-title">{title}</label>
      <button
        className="switch-btn"
        type="button"
        onClick={handleChangeFunction}
        style={styleButton}
      >
        <span className="switch-btn__toggle" style={styleSwitchButton} />
      </button>
    </div>
  );
};
