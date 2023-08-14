import { configureStore } from "@reduxjs/toolkit";
import { bicyclesReducer } from "./slices/bicyclesSlice";

const store = configureStore({
  reducer: { bicycles: bicyclesReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
