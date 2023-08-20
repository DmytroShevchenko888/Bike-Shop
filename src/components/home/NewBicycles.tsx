import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchAllBicycles } from "../../redux/thunks";
import { getImageUrl } from "../../helpers/getImageUrl";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import ItemBicycle from "./ItemBicycle/index";
import SkeketonItemBicycle from "./ItemBicycle/SkeletonItemBicycle";

interface NewBicyclesProps {}

const NewBicycles: React.FC<NewBicyclesProps> = () => {
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

  const amountBicycles = allbicycles.filter(
    (bicycle) => bicycle.novelty
  ).length;

  const showBicycles = allbicycles
    .filter((bicycle) => bicycle.novelty)
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

  return (
    <section className="new-bicycles">
      <div className="container">
        <h2>Novelties</h2>

        <div className="new-bicycles__items">
          {isLoaded ? showBicycles : showLoader}
        </div>
        {amountBicycles > finishArray && (
          <img
            className="new-bicycles__right-arrow"
            onClick={clickRightArrow}
            src={getImageUrl("home", "rightArrow.svg")}
            alt="rigth"
          />
        )}
        {startArray !== 0 && (
          <img
            className="new-bicycles__left-arrow"
            onClick={clickLeftArrow}
            src={getImageUrl("home", "leftArrow.svg")}
            alt="left"
          />
        )}
      </div>
      <button className="new-bicycles__btn">SHOW ALL</button>
    </section>
  );
};

export default NewBicycles;
