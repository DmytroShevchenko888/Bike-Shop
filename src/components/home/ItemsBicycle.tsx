import React from "react";

import { useAppDispatch } from "../../redux/hook";
import { fetchAllBicycles } from "../../redux/thunks";

import ItemBicycle from "./ItemBicycle";
import Carousel from "./Carousel";

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

  React.useEffect(() => {
    dispatch(fetchAllBicycles());
  }, [dispatch, page]);

  const amountBicycles = bicyclesOnCurrentPage.length;

  const showBicycles = bicycles.map((obj) => (
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
      {!showMore && (
        <Carousel data={bicyclesOnCurrentPage}>{showBicycles}</Carousel>
      )}
      {showMore && (
        <div className="items-bicycle__block">{showCurrentBicyclesOnPage}</div>
      )}

      {showBtn}
    </div>
  );
};

export default ItemsBicycle;
