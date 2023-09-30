import React from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { fetchAllBicycles } from "../../../redux/thunks";

import ItemBicycle from "../../global/ItemBicycle";

import { Slider } from "../../global/Slider";
import { SwiperSlide } from "swiper/react";
import { SWIPER_PROPS_ITEMS_BICYCLE } from "./SWIPER_PROPS_ITEMS_BICYCLE";
import SkeketonItemBicycle from "../../global/ItemBicycle/SkeletonItemBicycle";
// import { ItemBike } from "../../global/ItemBike";

interface IItemsBicycleProps {
  btnWhite?: boolean;
  bicycles: BicycleType[];
  bicyclesOnCurrentPage: BicycleType[];
  showMore: boolean;
  setShowMore: (showMore: boolean) => void;
  page: number;
}

const ItemsBicycle: React.FC<IItemsBicycleProps> = ({
  btnWhite,
  bicycles,
  bicyclesOnCurrentPage,
  showMore,
  setShowMore,
  page,
}) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.bicycles.bicycles.isLoaded);

  React.useEffect(() => {
    dispatch(fetchAllBicycles());
  }, [dispatch, page]);

  const amountBicycles = bicyclesOnCurrentPage.length;

  // const showBicycles = bicycles.map((obj) => (
  //   <ItemBicycle
  //     key={obj._id}
  //     availability={obj.availability}
  //     fullName={obj.fullName}
  //     image={obj.image}
  //     price={obj.price}
  //     priceSale={obj.priceSale}
  //     id={obj._id}
  //     backgroundWhite
  //   />
  // ));

  const caruselBicycles = !showMore && (
    <Slider swiperProps={SWIPER_PROPS_ITEMS_BICYCLE}>
      {bicycles.map((obj) => (
        <SwiperSlide key={obj._id}>
          <ItemBicycle
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
  );

  const showCurrentBicyclesOnPage =
    showMore &&
    bicyclesOnCurrentPage.map((obj) => (
      <ItemBicycle
        key={obj._id}
        availability={obj.availability}
        fullName={obj.fullName}
        image={obj.image}
        price={obj.price}
        priceSale={obj.priceSale}
        id={obj._id}
        backgroundWhite
      />
    ));

  const showBtn = amountBicycles >= 3 && (
    <button
      onClick={() => setShowMore(!showMore)}
      className={`items-bicycle__btn ${btnWhite ? "white-text" : ""}`}
    >
      {!showMore ? "SHOW ALL" : "HIDE"}
    </button>
  );

  return (
    <div className="items-bicycle">
      {/* {!showMore && (
        <Carousel data={bicyclesOnCurrentPage}>{showBicycles}</Carousel>
      )} */}
      {isLoading
        ? caruselBicycles
        : [...new Array(1)].map((_, id) => <SkeketonItemBicycle key={id} />)}
      {showMore && (
        <div className="items-bicycle__block">{showCurrentBicyclesOnPage}</div>
      )}
      <div className="items-bicycle__block-btn">{showBtn}</div>
    </div>
  );
};

export default ItemsBicycle;
