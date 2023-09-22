import React from "react";

interface ItemCharacteristicProps {
  name: string;
  description?: string;
}

export const ItemCharacteristic: React.FC<ItemCharacteristicProps> = ({
  name,
  description,
}) => {
  return (
    <div className="item-characteristic">
      <p className="item-characteristic__col-1">{name}</p>
      <p className="item-characteristic__col-2">{description}</p>
    </div>
  );
};
