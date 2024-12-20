import { createSlice } from "@reduxjs/toolkit";
import {
  getServicesData,
  viewServicesDetails,
} from "../../network/servicesApis";

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    servicesData: [],
    servicesDetailsData: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getServicesData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getServicesData.fulfilled, (state, action) => {
        state.servicesData = action.payload;
        state.loading = false;
      })
      .addCase(getServicesData.rejected, (state) => {
        state.loading = false;
      })
      .addCase(viewServicesDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(viewServicesDetails.fulfilled, (state, action) => {
        state.servicesDetailsData = action.payload;
        state.loading = false;
      })
      .addCase(viewServicesDetails.rejected, (state) => {
        state.loading = false;
      });
  },
});

export { getServicesData, viewServicesDetails };
export default servicesSlice.reducer;
