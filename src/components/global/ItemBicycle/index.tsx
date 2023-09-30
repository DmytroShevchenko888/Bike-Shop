import React from "react";
import { getImageUrl } from "../../../helpers/getImageUrl";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants";
import { useAppDispatch } from "../../../redux/hook";
import { fetchOneBicycle } from "../../../redux/thunks";
import { scrollToBottomHeader } from "../../../helpers/scrollToBottomHeader";

interface ItemBicycleProps {
  id: any;
  availability: boolean;
  image: string;
  fullName: string;
  price: number;
  priceSale: number;
  backgroundWhite?: boolean;
}

const ItemBicycle: React.FC<ItemBicycleProps> = ({
  id,
  availability,
  image,
  fullName,
  price,
  priceSale,
  backgroundWhite,
}) => {
  const dispatch = useAppDispatch();

  const showFullName50chars = fullName.slice(0, 50) + "...";
  const arrImages = image.split(",");
  const titleImage = arrImages[0].trim();

  console.log(fullName);

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
      <div className="item-bicycle__block-foto">
        <img
          className="item-bicycle__foto"
          src={`https://velo-shop-api.vercel.app/uploads/${titleImage}`}
          alt="foto"
        />
      </div>

      <Link
        to={ROUTES.VIEW_BICYCLE_BY_ID(id)}
        className="item-bicycle__fullName"
        onClick={() => {
          dispatch(fetchOneBicycle({ id: id }));
          scrollToBottomHeader();
        }}
      >
        {showFullName50chars}
      </Link>
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
