import React from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { BREADCRUMBS } from "../constants";
import OrderWindow from "../components/bicycle/OrderWindow";
import { useAppSelector } from "../redux/hook";

interface BicycleProps {}

const Bicycle: React.FC<BicycleProps> = () => {
  const isLoaded = useAppSelector((state) => state.bicycles.bicycle.isLoaded);
  const currentbicycle = useAppSelector(
    (state) => state.bicycles.bicycle.currentbicycle
  );

  return (
    <section className="bicycle">
      {/*bicycle__header ? heigth: 105px; background-color: $bt-black; */}
      <div className="bicycle__header" />
      <main className="container">
        <Breadcrumbs items={BREADCRUMBS} dark />
        {isLoaded && currentbicycle ? (
          <OrderWindow bicycle={currentbicycle} />
        ) : (
          <section className="bicycle__loading">"LOADIND..."</section>
        )}
      </main>
    </section>
  );
};

export default Bicycle;
