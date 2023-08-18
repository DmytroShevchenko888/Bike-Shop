import React from "react";
import Title from "../components/home/Title.tsx";
import Submenu from "../components/home/Submenu.tsx";
import Ticker from "../components/home/Ticker/index.tsx";
import ItemBicycle from "../components/home/ItemBicycle.tsx";
import { useAppDispatch, useAppSelector } from "../redux/hook.ts";
import { fetchOneBicycle } from "../redux/thunks.ts";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useAppDispatch();

  const { currentbicycle } = useAppSelector((state) => state.bicycles.bicycle);

  React.useEffect(() => {
    dispatch(fetchOneBicycle({ id: "64d7c1616da8b8269434d66f" }));
  }, [dispatch]);

  return (
    <section className="home">
      <Title />
      <Submenu />
      <Ticker />

      {currentbicycle !== null && (
        <ItemBicycle
          fullName={currentbicycle.fullName}
          availability={false}
          // availability={currentbicycle.availability}
          image={currentbicycle.image}
          price={3000}
          priceSale={3000}
        />
      )}
      {currentbicycle !== null && (
        <ItemBicycle
          fullName={currentbicycle.fullName}
          availability={currentbicycle.availability}
          image={currentbicycle.image}
          price={currentbicycle.price}
          priceSale={currentbicycle.priceSale}
        />
      )}
    </section>
  );
};

export default Home;
