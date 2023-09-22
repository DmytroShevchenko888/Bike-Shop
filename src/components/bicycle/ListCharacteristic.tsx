import React from "react";
import { ItemCharacteristic } from "./ItemCharacteristic";
import { BICYCLE_CHARACTERISTIC } from "../../constants";

interface ListCharacteristicProps {
  bicycle: BicycleType;
}

export const ListCharacteristic: React.FC<ListCharacteristicProps> = ({
  bicycle,
}) => {
  return (
    <section className="list-characteristic">
      {BICYCLE_CHARACTERISTIC.map((item) => {
        const addTextToGarantine = bicycle[item.key] + " months"; // "12 months"

        const showTextAcrossComa =
          item.key === "color" || item.key === "size"
            ? bicycle[item.key].join(", ")
            : bicycle[item.key]; // [black,red,white] => "black, red, white"

        const description =
          item.key === "garantine" ? addTextToGarantine : showTextAcrossComa;

        return (
          <ItemCharacteristic
            key={item.key}
            name={item.name}
            description={description}
          />
        );
      })}
    </section>
  );
};
