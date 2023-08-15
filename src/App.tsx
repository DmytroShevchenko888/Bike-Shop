import React from "react";
import "./styles/styles.css";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { fetchAllBicycles, fetchOneBicycle } from "./redux/thunks";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const dispatch = useAppDispatch();

  // const {
  //   allbicycles,
  //   isLoaded: isLoadedBicycles,
  //   error: errorBicycles,
  // } = useAppSelector((state) => state.bicycles.bicycles);

  // const {
  //   currentbicycle,
  //   isLoaded: isLoadedBicycle,
  //   error: errorBicycle,
  // } = useAppSelector((state) => state.bicycles.bicycle);

  // console.log("allbicycles:", allbicycles);
  // console.log("isLoadedBicycles:", isLoadedBicycles);
  // console.log("errorBicycles:", errorBicycles);

  // console.log("currentbicycle:", currentbicycle);
  // console.log("isLoadedBicycle:", isLoadedBicycle);
  // console.log("errorBicycle:", errorBicycle);

  React.useEffect(() => {
    dispatch(fetchAllBicycles());
    dispatch(fetchOneBicycle({ id: "64d7c1616da8b8269434d66f" }));
  }, [dispatch]);

  return <div>Project start</div>;
};

export default App;
