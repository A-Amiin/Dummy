import { createSlice } from "@reduxjs/toolkit";
import { fetchSubscriptionData } from "../../network/subscription";

const AffordablePricingSlice = createSlice({
  name: "AffordablePricing",
  initialState: {
    subscriptionData: [],
    loading: "false",
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
      });
  },
});
export { fetchSubscriptionData };
export default AffordablePricingSlice.reducer;
