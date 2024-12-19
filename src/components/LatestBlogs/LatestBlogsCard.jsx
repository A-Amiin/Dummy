import React from "react";
import { Link } from "react-router";
function LatestBlogsCard({ imgSrc, responsive }) {
  return (
    <div
      className={`col-12 col-sm-6 col-lg-4  ${responsive ? responsive : ""}`}
    >
      <div className="card border-0 shadow-sm">
        <img className="img-fluid" src={imgSrc} alt="latestBlogImg" />
        <div className="card-body">
          <div className="date-blogs mt-3">
            <i className="fa-solid fa-calendar-days"></i>
            <span className="mx-2 regular-paragraph">24 july, 2019</span>
          </div>
          <Link to="/blog" className="text-decoration-none">
            <h3 className="mt-3 fs-4 lh-base heading_primary_blue fw-medium">
              What is Best domin name for Business
            </h3>
          </Link>
          <p className="by_name regular-paragraph mt-2 position-relative px-4">
            by Mark Wily
          </p>
          <p className="regular-paragraph lh-base mt-3 mb-4">
            Aimply dummy text of the printing anden type setting industrym Ipsum
            has been the industry`&apos;`s standard.
          </p>
          <div className="likes_comments border-top d-flex justify-content-between align-items-center py-3">
            <div className="likes d-flex align-items-center gap-2">
              <i className="fa-solid fa-heart regular-paragraph"></i>
              <p className="regular-paragraph">
                <span className="text-black fw-bold">06</span> Likes
              </p>
            </div>
            <div className="comments d-flex align-items-center gap-2">
              <i className="fa-solid fa-message regular-paragraph"></i>
              <p className="regular-paragraph">
                <span className="text-black fw-bold">02</span> Comments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestBlogsCard;
