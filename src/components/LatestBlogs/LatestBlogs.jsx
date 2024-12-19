import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import figure_latest_blogs from "../../assets/images/figure1.png";
import blogOne from "../../assets/images/blog1.jpg";
import LatestBlogsCard from "./LatestBlogsCard";

function LatestBlogs() {
  return (
    <section className="latest_blogs position-relative py-5">
      <div className="container">
        <SectionTitle
          imgSrc={figure_latest_blogs}
          title="Our Latest Blogs"
          wrapper="latest_blogs"
          colorHeading="heading_primary_blue"
          colorParagraph="regular-paragraph"
        />
        <div className="row mt-5">
          {/* Column One */}
          <LatestBlogsCard imgSrc={blogOne} />
          {/* Column Two */}
          <LatestBlogsCard imgSrc={blogOne} responsive="mt-sm-0 mt-4" />

          {/* Column Three */}
          <LatestBlogsCard imgSrc={blogOne} responsive="mt-lg-0 mt-4" />
        </div>
      </div>
    </section>
  );
}

export default LatestBlogs;
