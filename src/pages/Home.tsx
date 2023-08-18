import React from "react";
import Title from "../components/home/Title.tsx";
import Submenu from "../components/home/Submenu.tsx";
import Ticker from "../components/home/Ticker/index.tsx";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <section className="home">
      <Title />
      <Submenu />
      <Ticker />
    </section>
  );
};

export default Home;
