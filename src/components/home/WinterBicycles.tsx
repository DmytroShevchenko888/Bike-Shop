import React from "react";
import ItemsBicycle from "./ItemsBicycle";
import { useMediaQuery } from "../../hooks/useMediaQuery";

interface WinterBicyclesProps {}

const WinterBicycles: React.FC<WinterBicyclesProps> = () => {
  const breakpoint_sm = useMediaQuery("(max-width: 470px)");

  const showTitle = breakpoint_sm ? (
    <h2>
      Winter
      <br />
      bicycles
    </h2>
  ) : (
    <h2>
      The best models
      <br />
      for winter drivings
    </h2>
  );

  return (
    <section className="winter-bicycles">
      <div className="container">{showTitle}</div>
      <div className="winter-bicycles__items">
        <ItemsBicycle btnWhite searchOnFilter="MTB" />
      </div>
    </section>
  );
};

export default WinterBicycles;
