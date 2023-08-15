import React from "react";
import "./styles/styles.css";
import { useAppDispatch } from "./redux/hook";
import { fetchAllBicycles, fetchOneBicycle } from "./redux/thunks";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchAllBicycles()); // get array all bicycles
    dispatch(fetchOneBicycle({ id: "64d7c1616da8b8269434d66f" })); // get object one bicycle
  }, [dispatch]);

  return <div>Project start</div>;
};

export default App;
