import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";

export const fetchAllBicycles = createAsyncThunk<
  BicycleType[],
  undefined,
  { rejectValue: string }
>("bicycles/fetchAllBicycles", async (_, { rejectWithValue }) => {
  const response = await axios.get("/bicycles");

  if (response.status !== 200) {
    return rejectWithValue("server error!");
  }

  return response.data;
});
