import React from "react";
import { getImageUrl } from "../../../helpers/getImageUrl";

interface ItemBicycleProps {
  availability: boolean;
  image: ImageType[];
  fullName: string;
  price: number;
  priceSale: number;
  backgroundWhite?: boolean;
}

const ItemBicycle: React.FC<ItemBicycleProps> = ({
  availability,
  image,
  fullName,
  price,
  priceSale,
  backgroundWhite,
}) => {
  const showFullName50chars = fullName.slice(0, 50) + "...";

  return (
    <div className={`item-bicycle ${backgroundWhite ? "bg-white" : ""}`}>
      <img
        src={getImageUrl("home", "italy.svg")}
        className="item-bicycle__flag"
        alt="flag"
      />
      {availability ? (
        <span className="item-bicycle__availability-true">in stock</span>
      ) : (
        <span className="item-bicycle__availability-false">sold out</span>
      )}
      <img className="item-bicycle__foto" src={image[0].image} alt="foto" />
      <p className="item-bicycle__fullName">{showFullName50chars}</p>
      {price === priceSale ? (
        <p className="item-bicycle__price">{price} $</p>
      ) : (
        <div className="item-bicycle__blockPrice">
          <p className="item-bicycle__blockPrice_sale">{priceSale} $</p>
          <p className="item-bicycle__blockPrice_price">{price} $</p>
        </div>
      )}
      <button
        className={`item-bicycle__btn ${
          availability ? "" : "inactive"
        } standart-btn`}
      >
        <img src={getImageUrl("home", "click.svg")} alt="click" />
        <p>In 1 click</p>
      </button>
    </div>
  );
};

export default ItemBicycle;
