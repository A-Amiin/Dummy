import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubscriptionData = createAsyncThunk(
  "SubscriptionData/fetchSubscriptionData",
  async () => {
    const response = await axios.get("http://localhost:3000/AffordablePricing");
    return response.data;
  }
);
