import React from "react";

import { BsSuitHeart } from "react-icons/bs";
import { CHARS_SHORT_DESCRIPTION } from "../../constants";

interface OrderWindowProps {
  bicycle: BicycleType;
}

const OrderWindow: React.FC<OrderWindowProps> = ({ bicycle }) => {
  const [nameColor, setNameColor] = React.useState<string>(
    bicycle.color[0] || ""
  );
  const [nameSize, setNameSize] = React.useState<string>("");
  const arrImages = bicycle.image.split(",").map((item: string) => item.trim());
  const [showImage, setShowImage] = React.useState<string>(arrImages[0] || "");

  React.useEffect(() => {
    setShowImage(arrImages[0].replace(/[^-]+$/, "") + nameColor + ".jpg");
  }, [nameColor]);

  const setColor = (color: string) => {
    setNameColor(color);
  };
  const setSize = (size: string) => {
    setNameSize(size);
  };

  const showAvailability = bicycle?.availability ? (
    <p className="text-availability-true">In stock</p>
  ) : (
    <p className="text-availability-false">Out of stock</p>
  );

  const showPrice =
    bicycle?.price === bicycle?.priceSale ? (
      <div className="block-price">
        <h2>{bicycle?.price} £</h2>
      </div>
    ) : (
      <div className="block-price">
        <h2>{bicycle?.priceSale} £</h2>
        <p>{bicycle?.price} £</p>
      </div>
    );

  return (
    <section className="order-window">
      <div className="order-window__image">
        <img
          src={`https://velo-shop-api.vercel.app/uploads/${showImage}`}
          alt={`https://velo-shop-api.vercel.app/uploads/${showImage}`}
        />
      </div>

      <div className="order-window__description">
        <h3 className="order-window__description-title">{bicycle?.fullName}</h3>
        <p className="text-gray">{bicycle?.manufacturer}</p>
        <p className="text-gray">Артикул : {bicycle?.article}</p>
        {showAvailability}
        {showPrice}
        <p className="text-description">
          {bicycle.description.slice(0, CHARS_SHORT_DESCRIPTION)}...
        </p>
        <div className="block-size">
          <p>Size:</p>
          <ul>
            {bicycle?.size.map((size) => (
              <li
                key={size}
                style={{
                  backgroundColor: `${size === nameSize ? "black" : ""}`,
                  color: `${size === nameSize ? "white" : ""}`,
                }}
                onClick={() => setSize(size)}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className="block-color">
          <p>Color:</p>
          <ul>
            {bicycle?.color.map((color) => (
              <li
                key={color}
                style={{
                  backgroundColor: color,
                  border: `${color === nameColor ? "5px solid #E5E5E5" : ""}`,
                }}
                onClick={() => setColor(color)}
              />
            ))}
          </ul>
        </div>

        <div className="block-btn">
          <div className="block-btn__counter">
            <button>-</button>
            <p>0</p>
            <button>+</button>
          </div>
          <button
            className={`block-btn__btn standart-btn ${
              bicycle.availability ? "" : "inactive"
            }`}
          >
            to cart
          </button>
          <div className="block-btn__favorite ">
            <BsSuitHeart color="orange" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderWindow;
