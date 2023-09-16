import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/styles.css";

import { ROUTES } from "./constants";
import Home from "./pages/Home.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import AddBicycle from "./pages/AddBicycle.tsx";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ADD_BICYCLE} element={<AddBicycle />} />
      </Routes>
    </>
  );
};

export default App;
