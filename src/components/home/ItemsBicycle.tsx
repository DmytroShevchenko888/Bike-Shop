import React from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchAllBicycles } from "../../redux/thunks";

import ItemBicycle from "./ItemBicycle";
import Carousel from "./Carousel";

interface IItemsBicycleProps {
  btnWhite?: boolean;
  bicycles: BicycleType[];
  showMore: boolean;
  setShowMore: (showMore: boolean) => void;
  page: number;
}

const ItemsBicycle: React.FC<IItemsBicycleProps> = ({
  btnWhite,
  bicycles,
  showMore,
  setShowMore,
  page,
}) => {
  const dispatch = useAppDispatch();
  const { allbicycles } = useAppSelector((state) => state.bicycles.bicycles);

  React.useEffect(() => {
    dispatch(fetchAllBicycles());
  }, [dispatch, page]);

  const amountBicycles = bicycles.length;

  const showBicycles = allbicycles.map((obj) => (
    <ItemBicycle
      key={obj._id}
      availability={obj.availability}
      fullName={obj.fullName}
      image={obj.image}
      price={obj.price}
      priceSale={obj.priceSale}
      backgroundWhite
    />
  ));

  const showBtn = amountBicycles >= 3 && !showMore && (
    <button
      onClick={() => setShowMore(true)}
      className={`items-bicycle__btn ${btnWhite ? "white-text" : ""}`}
    >
      SHOW ALL
    </button>
  );

  return (
    <div className="items-bicycle">
      <Carousel data={bicycles}>{showBicycles}</Carousel>

      {showBtn}
    </div>
  );
};

export default ItemsBicycle;
