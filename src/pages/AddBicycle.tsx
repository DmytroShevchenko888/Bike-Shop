import React from "react";
import FormAddBicycle from "../components/addBicyle/FormAddBicycle";

interface AddBicycleProps {}

const AddBicycle: React.FC<AddBicycleProps> = () => {
  return (
    <section className="add-bicycle">
      {/*add-bicycle__header ? heigth: 105px; background-color: $bt-black; */}
      <div className="add-bicycle__header" />
      <main className="container">
        <h3 className="add-bicycle__title">Add New Bicycle:</h3>

        <FormAddBicycle />
      </main>
    </section>
  );
};

export default AddBicycle;
