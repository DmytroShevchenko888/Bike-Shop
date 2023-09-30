import React from "react";
import { getImageUrl } from "../../helpers/getImageUrl";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import { fetchOneBicycle } from "../../redux/thunks";
import { scrollToBottomHeader } from "../../helpers/scrollToBottomHeader";
import { useAppDispatch } from "../../redux/hook";

interface ItemBikeProps {
  id: any;
  availability: boolean;
  image: string;
  fullName: string;
  price: number;
  priceSale: number;
  backgroundWhite?: boolean;
}

export const ItemBike: React.FC<ItemBikeProps> = ({
  id,
  availability,
  image,
  fullName,
  price,
  priceSale,
}) => {
  const dispatch = useAppDispatch();

  const showFullName50chars = fullName.slice(0, 50) + "...";
  const arrImages = image.split(",");
  const titleImage = arrImages[0].trim();

  return (
    <div className="item-bike">
      <img
        src={getImageUrl("home", "italy.svg")}
        className="item-bike__flag"
        alt="flag"
      />
      {availability ? (
        <span className="item-bike__availability-true">in stock</span>
      ) : (
        <span className="item-bike__availability-false">sold out</span>
      )}
      <div className="item-bike__foto-block">
        <img
          className="item-bike__foto"
          src={`https://velo-shop-api.vercel.app/uploads/${titleImage}`}
          alt="foto"
        />
      </div>

      <Link
        to={ROUTES.VIEW_BICYCLE_BY_ID(id)}
        className="item-bike__fullName"
        onClick={() => {
          dispatch(fetchOneBicycle({ id: id }));
          scrollToBottomHeader();
        }}
      >
        {showFullName50chars}
      </Link>
      {price === priceSale ? (
        <p className="item-bike__price">{price} $</p>
      ) : (
        <div className="item-bike__blockPrice">
          <p className="item-bike__blockPrice_sale">{priceSale} $</p>
          <p className="item-bike__blockPrice_price">{price} $</p>
        </div>
      )}
    </div>
  );
};
