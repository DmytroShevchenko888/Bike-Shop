import React from "react";
import { Slider } from "../Slider";
import { useAppSelector } from "../../../redux/hook";
import { SwiperSlide } from "swiper/react";
import { ItemBike } from "../ItemBike";
import { SWIPER_PROPS_SIMILAR_ITEMS } from "./SWIPER_PROPS_SIMILAR_ITEMS";

interface SimilarItemsProps {
  nameCategory: string;
  fullName: string;
}

export const SimilarItems: React.FC<SimilarItemsProps> = ({
  nameCategory,
  fullName,
}) => {
  const bicycle = useAppSelector(
    (state) => state.bicycles.bicycles.allbicycles
  );

  const data = bicycle.filter(
    (bicycle) =>
      bicycle.category === nameCategory && bicycle.fullName !== fullName
  );

  return (
    <div className="similar-items">
      <h3 className="similar-items__subtitle">similar products</h3>

      {data.length === 0 ? (
        "no similar bicycles"
      ) : (
        <Slider swiperProps={SWIPER_PROPS_SIMILAR_ITEMS}>
          {data.map((obj) => (
            <SwiperSlide key={obj._id}>
              <ItemBike
                key={obj._id}
                availability={obj.availability}
                fullName={obj.fullName}
                image={obj.image}
                price={obj.price}
                priceSale={obj.priceSale}
                id={obj._id}
              />
            </SwiperSlide>
          ))}
        </Slider>
      )}
    </div>
  );
};
