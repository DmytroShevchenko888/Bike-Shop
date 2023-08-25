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

export const fetchOneBicycle = createAsyncThunk<
  BicycleType[],
  { id: string },
  { rejectValue: string }
>("bicycles/fetchOneBicycle", async (params, { rejectWithValue }) => {
  const { id } = params;
  const response = await axios.get(`/bicycles/${id}`);

  if (response.status !== 200) {
    return rejectWithValue("server error!");
  }

  return response.data;
});
