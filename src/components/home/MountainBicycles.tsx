import React from "react";
import { getImageUrl } from "../../helpers/getImageUrl";
import { mountainBicyclesSection } from "../../constants";

interface MountainBicyclesProps {}

const MountainBicycles: React.FC<MountainBicyclesProps> = () => {
  return (
    <section className="mountain-bicycles">
      <div className="container">
        <h2 className="mountain-bicycles__title">
          MOUNTAIN
          <br />
          BICYCLES
        </h2>

        <main className="mountain-bicycles__main">
          <div className="mountain-bicycles__main-col1">
            {mountainBicyclesSection.map((item) => (
              <div key={item.title} className="mountain-bicycles__item">
                <img src={item.icon} alt="icon" />
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>
          <div className="mountain-bicycles__main-col2">
            <img
              src={getImageUrl("home", "mountain-bicycles.jpg")}
              alt="image"
            />
            <p>
              Mountain biking, despite its name, is often and actively used in
              the city, as it has a number of characteristics that make cycling
              as pleasant and comfortable as possible.
            </p>
            <button className="mountain-bicycles__btn standart-btn">
              Catalog
            </button>
          </div>
        </main>
      </div>
    </section>
  );
};

export default MountainBicycles;
