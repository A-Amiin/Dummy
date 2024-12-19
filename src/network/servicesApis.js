import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getServicesData = createAsyncThunk(
  "servicesData/getServicesData",
  async () => {
    const response = await axios.get("http://localhost:3000/Blog");
    return response.data.slice(0, 9);
  }
);
