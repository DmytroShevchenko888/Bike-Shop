import { PayloadAction, createSlice, AnyAction } from "@reduxjs/toolkit";

import { fetchAllBicycles } from "../thunks";

type TypeInitialState = {
  items: BicycleType[] | [];
  isLoaded: boolean;
  error: string | null;
};

const initialState: TypeInitialState = {
  items: [],
  isLoaded: false,
  error: null,
};

const bicyclesSlice = createSlice({
  name: "bicyclesSlice",
  initialState,
  reducers: {
    changeIsLoaded(state, action: PayloadAction<boolean>) {
      state.isLoaded = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBicycles.pending, (state) => {
        state.isLoaded = true;
        state.error = null;
      })
      .addCase(fetchAllBicycles.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoaded = false;
      })

      .addMatcher(isError, (state, action) => {
        state.error = action.error.message;
        state.isLoaded = false;
      });
  },
});

export const { changeIsLoaded } = bicyclesSlice.actions;

export const bicyclesReducer = bicyclesSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
