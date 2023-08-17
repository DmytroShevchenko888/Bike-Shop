import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/styles.css";

import { ROUTES } from "./constants";
import Home from "./pages/Home.tsx";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
