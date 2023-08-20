import React from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchAllBicycles } from "../../redux/thunks";
import { getImageUrl } from "../../helpers/getImageUrl";

import ItemBicycle from "./ItemBicycle";
import SkeketonItemBicycle from "./ItemBicycle/SkeletonItemBicycle";

interface IItemsBicycleProps {
  btnWhite?: boolean;
  searchOnFilter?: "MTB" | "electric";
}

const ItemsBicycle: React.FC<IItemsBicycleProps> = ({
  btnWhite,
  searchOnFilter,
}) => {
  // breakpoints adaptive
  const breakpoint_xxl = useMediaQuery("(max-width: 1290px)");
  const breakpoint_md = useMediaQuery("(max-width: 660px)");

  // shows how many cards "ItemBicycle.tsx" displays 1 | 2 | 3
  const showTwoOrThreeBicycles = breakpoint_xxl ? 2 : 3;
  const showAmountBicycles = breakpoint_md ? 1 : showTwoOrThreeBicycles;

  const [startArray, setStartArray] = React.useState<number>(0);
  const [finishArray, setFinishArray] =
    React.useState<number>(showAmountBicycles);

  const dispatch = useAppDispatch();

  const { allbicycles, isLoaded } = useAppSelector(
    (state) => state.bicycles.bicycles
  );

  React.useEffect(() => {
    dispatch(fetchAllBicycles());

    setFinishArray(showAmountBicycles);
  }, [dispatch, showAmountBicycles]);

  const amountBicycles = allbicycles.filter((bicycle) =>
    searchOnFilter ? bicycle.category === searchOnFilter : bicycle.novelty
  ).length;

  const showBicycles = allbicycles
    .filter((bicycle) =>
      searchOnFilter ? bicycle.category === searchOnFilter : bicycle.novelty
    )
    .slice(startArray, finishArray)
    .map((obj) => (
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

  const showLoader = [...new Array(3)]
    .slice(startArray, finishArray)
    .map((_, id) => <SkeketonItemBicycle key={id} />);

  const showBtn = amountBicycles >= 3 && (
    <button className={`items-bicycle__btn ${btnWhite ? "white-text" : ""}`}>
      SHOW ALL
    </button>
  );

  const clickRightArrow = () => {
    if (amountBicycles <= finishArray) {
      return;
    } else {
      setStartArray(startArray + 1);
      setFinishArray(finishArray + 1);
    }
  };

  const clickLeftArrow = () => {
    if (startArray <= 0) {
      return;
    } else {
      setStartArray(startArray - 1);
      setFinishArray(finishArray - 1);
    }
  };

  const showLeftArrow = startArray !== 0 && (
    <img
      className="items-bicycle__left-arrow"
      onClick={clickLeftArrow}
      src={getImageUrl("home", "leftArrow.svg")}
      alt="left"
    />
  );

  const showRightArrow = amountBicycles > finishArray && (
    <img
      className="items-bicycle__right-arrow"
      onClick={clickRightArrow}
      src={getImageUrl("home", "rightArrow.svg")}
      alt="rigth"
    />
  );

  return (
    <div className="items-bicycle">
      <div className="items-bicycle__block">
        {isLoaded ? showBicycles : showLoader}
      </div>
      {showRightArrow}
      {showLeftArrow}
      {showBtn}
    </div>
  );
};

export default ItemsBicycle;
