import { createSlice } from "@reduxjs/toolkit";
import {
  fetchSubscriptionData,
  viewSubscriptionData,
} from "../../network/subscription";

const AffordablePricingSlice = createSlice({
  name: "AffordablePricing",
  initialState: {
    subscriptionData: [],
    loading: "false",
    subscriptionDetails: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubscriptionData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSubscriptionData.fulfilled, (state, action) => {
        state.loading = false;
        state.subscriptionData = action.payload;
      })
      .addCase(fetchSubscriptionData.rejected, (state) => {
        state.loading = false;
      })
      .addCase(viewSubscriptionData.pending, (state) => {
        state.loading = true;
      })
      .addCase(viewSubscriptionData.fulfilled, (state, action) => {
        state.subscriptionDetails = action.payload;
        state.loading = false;
        
      })
      .addCase(viewSubscriptionData.rejected, (state) => {
        state.loading = false;
      });
  },
});
export { fetchSubscriptionData, viewSubscriptionData };
export default AffordablePricingSlice.reducer;
