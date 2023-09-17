import React from "react";
import FormAddBicycle from "../components/addBicyle/FormAddBicycle";

interface AddBicycleProps {}

const AddBicycle: React.FC<AddBicycleProps> = () => {
  return (
    <section className="add-bicycle">
      <div className="container">
        <h3 className="add-bicycle__title">Add New Bicycle:</h3>

        <FormAddBicycle />
      </div>
    </section>
  );
};

export default AddBicycle;
