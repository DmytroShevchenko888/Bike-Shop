import React from "react";
import Title from "../components/home/Title.tsx";
import Submenu from "../components/home/Submenu.tsx";
import Ticker from "../components/home/Ticker/index.tsx";
import NewBicycles from "../components/home/NewBicycles.tsx";
import WinterBicycles from "../components/home/WinterBicycles.tsx";
import MountainBicycles from "../components/home/MountainBicycles.tsx";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <section className="home">
      <Title />
      <Submenu />
      <Ticker />

      <NewBicycles />
      <WinterBicycles />
      <MountainBicycles />
    </section>
  );
};

export default Home;
