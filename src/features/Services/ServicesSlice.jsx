import { createSlice } from "@reduxjs/toolkit";
import { getServicesData } from "../../network/servicesApis";

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    servicesData: [],
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
      });
  },
});

export { getServicesData };
export default servicesSlice.reducer;
