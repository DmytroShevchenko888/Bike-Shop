import React from "react";
import { Slider } from "./Slider";
import { useAppSelector } from "../../redux/hook";

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
        <Slider data={data} slidesPerView={4} spaceBetween={40} />
      )}
    </div>
  );
};
