import React from "react";
import AffordablePricing from "../components/AffordablePricing/AffordablePricing";
import WorkingExperts from "../components/WorkingExperts/WorkingExperts";
import Specialist from "../components/Specialist/Specialist";
import FeedBack from "../components/Feedback/FeedBack";
import LatestBlogs from "../components/LatestBlogs/LatestBlogs";
import Slider from "../components/Slider/Slider";
import Booking from "../components/Booking/Booking";
import CleaningServices from "../components/CleaningServices/CleaningServices";
import Estimate from "../components/Estimation/Estimate";
import RequstingEstimation from "../components/RequstingEstimation/RequstingEstimation";
import ReadMore from "../components/ReadMore/ReadMore";

export default function Home() {
  return (
    <>
      {/* Ahmed Amin */}
      <Slider />
      <Booking />
      <CleaningServices />
      <Estimate />
      <RequstingEstimation />
      <ReadMore />
      {/* Mohamed Morsy */}
      <AffordablePricing />
      <WorkingExperts />
      <Specialist />
      <FeedBack />
      <LatestBlogs />
    </>
  );
}
