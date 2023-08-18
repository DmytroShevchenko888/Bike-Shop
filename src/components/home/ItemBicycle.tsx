import React from "react";
import { getImageUrl } from "../../helpers/getImageUrl";

interface ItemBicycleProps {
  availability: boolean;
  image: ImageType[];
  fullName: string;
  price: number;
  priceSale: number;
}

const ItemBicycle: React.FC<ItemBicycleProps> = ({
  availability,
  image,
  fullName,
  price,
  priceSale,
}) => {
  const isActiveItem = availability ? "" : "inactive";

  return (
    <div className={`item-bicycle ${isActiveItem}`}>
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

      <p className="item-bicycle__fullName">{fullName}</p>

      {price === priceSale ? (
        <p className="item-bicycle__price">{price} $</p>
      ) : (
        <div className="item-bicycle__blockPrice">
          <p className="item-bicycle__blockPrice_sale">{priceSale} $</p>
          <p className="item-bicycle__blockPrice_price">{price} $</p>
        </div>
      )}
      {availability && (
        <button className="item-bicycle__btn standart-btn">
          <img src={getImageUrl("home", "click.svg")} alt="click" />
          <p>In 1 click</p>
        </button>
      )}
    </div>
  );
};

export default ItemBicycle;
