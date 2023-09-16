import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/styles.css";

import { ROUTES } from "./constants";
import Home from "./pages/Home.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
