import { configureStore } from "@reduxjs/toolkit";
import OurWorkingExpertsSlice from "../features/OurWorkingExperts/OurWorkingExpertsSlice"
import AffordablePricingSlice from "../features/AffordablePricing/AffordablePricingSlice"
import BlogSlice from "../features/Blog/BlogSlice"
import ServicesSlice from "../features/Services/ServicesSlice";
export default configureStore({
  reducer: {
    OurWorkingExperts: OurWorkingExpertsSlice,
    AffordablePricing: AffordablePricingSlice,
    Blog: BlogSlice,
    services: ServicesSlice,
  },
});
