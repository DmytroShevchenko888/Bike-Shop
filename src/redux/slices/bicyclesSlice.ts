import { PayloadAction, createSlice, AnyAction } from "@reduxjs/toolkit";

import { fetchAllBicycles, fetchOneBicycle } from "../thunks";

type TypeInitialState = {
  bicycles: {
    allbicycles: BicycleType[] | [];
    isLoaded: boolean;
    error: string | null;
  };
  bicycle: {
    currentbicycle: BicycleType[] | null;
    isLoaded: boolean;
    error: string | null;
  };
};

const initialState: TypeInitialState = {
  bicycles: {
    allbicycles: [],
    isLoaded: true,
    error: null,
  },
  bicycle: {
    currentbicycle: null,
    isLoaded: true,
    error: null,
  },
};

const bicyclesSlice = createSlice({
  name: "bicyclesSlice",
  initialState,
  reducers: {
    changeIsLoaded(state, action: PayloadAction<boolean>) {
      state.bicycles.isLoaded = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBicycles.pending, (state) => {
        state.bicycles.isLoaded = true;
        state.bicycles.error = null;
      })
      .addCase(fetchAllBicycles.fulfilled, (state, action) => {
        state.bicycles.allbicycles = action.payload;
        state.bicycles.isLoaded = false;
      })

      .addCase(fetchOneBicycle.pending, (state) => {
        state.bicycle.isLoaded = true;
        state.bicycle.error = null;
      })
      .addCase(fetchOneBicycle.fulfilled, (state, action) => {
        state.bicycle.currentbicycle = action.payload;
        state.bicycle.isLoaded = false;
      })

      .addMatcher(isError, (state, action) => {
        if (action.type === "bicycles/fetchOneBicycle/rejected") {
          state.bicycle.error = action.error.message;
          state.bicycle.isLoaded = false;
        } else {
          state.bicycles.error = action.error.message;
          state.bicycles.isLoaded = false;
        }
      });
  },
});

export const { changeIsLoaded } = bicyclesSlice.actions;

export const bicyclesReducer = bicyclesSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
