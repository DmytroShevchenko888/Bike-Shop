import React from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { BREADCRUMBS, ROUTES } from "../constants";
import OrderWindow from "../components/bicycle/OrderWindow";
import { useAppSelector } from "../redux/hook";
import { ListCharacteristic } from "../components/bicycle/ListCharacteristic";

interface BicycleProps {}

const Bicycle: React.FC<BicycleProps> = () => {
  const isLoaded = useAppSelector((state) => state.bicycles.bicycle.isLoaded);
  const currentbicycle = useAppSelector(
    (state) => state.bicycles.bicycle.currentbicycle
  );

  const showLoading = (
    <section className="bicycle__loading">"LOADING..."</section>
  );

  const newBreadcrumbs = [
    ...BREADCRUMBS,
    {
      name: currentbicycle?.fullName,
      link: ROUTES.VIEW_BICYCLE_BY_ID(currentbicycle?._id),
    },
  ];

  return (
    <section className="bicycle">
      {/*bicycle__header ? heigth: 105px; background-color: $bt-black; */}
      <div className="bicycle__header" />
      <main className="container">
        {isLoaded && currentbicycle ? (
          <Breadcrumbs items={newBreadcrumbs} dark />
        ) : (
          "loading..."
        )}

        {isLoaded && currentbicycle ? (
          <OrderWindow bicycle={currentbicycle} />
        ) : (
          showLoading
        )}

        <h3 className="bicycle__subtitle">description</h3>
        <p className="bicycle__text mb-80">{currentbicycle?.description}</p>

        <h3 className="bicycle__subtitle">characteristic</h3>
        {isLoaded && currentbicycle ? (
          <ListCharacteristic bicycle={currentbicycle} />
        ) : (
          showLoading
        )}
      </main>
    </section>
  );
};

export default Bicycle;
