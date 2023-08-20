import React from "react";
import ItemsBicycle from "./ItemsBicycle";

interface NewBicyclesProps {}

const NewBicycles: React.FC<NewBicyclesProps> = () => {
  return (
    <section className="new-bicycles">
      <div className="container">
        <h2>Novelties</h2>

        <ItemsBicycle />
      </div>
    </section>
  );
};

export default NewBicycles;
