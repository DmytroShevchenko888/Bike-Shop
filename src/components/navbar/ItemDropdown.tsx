import React from "react";
import { FaChevronDown } from "react-icons/fa";

interface ItemDropdownProps {
  title: string;
  id: ActiveOType;
  listOption: string[];
  openO: (id: ActiveOType) => void;
  getOption: (id: ActiveOType) => void;
  getCategory: (id: ActiveOType) => void;
}

const ItemDropdown: React.FC<ItemDropdownProps> = ({
  title,
  id,
  listOption,
  openO,
  getOption,
  getCategory,
}) => {
  return (
    <div className="dropdown-sidebar">
      <div
        id={id}
        onClick={() => openO(id)}
        className={`box-option  ${getOption(id)}`}
      >
        <p>{title}</p>
        <span className="chevron-icon">
          <FaChevronDown />
        </span>
      </div>
      <ul
        id={id}
        onClick={() => openO(id)}
        className={`box-category ${getCategory(id)}`}
      >
        {listOption.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemDropdown;
