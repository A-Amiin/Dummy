import React from "react";
// mt-sm-0 mt-4
function WorkingExpertsCard({ imgSrc, teamImg, name, role, responsive }) {
  return (
    <div
      className={`col-12 col-sm-6 col-lg-4  ${responsive ? responsive : ""}`}
    >
      <div className="card border-0 d-flex align-items-center position-relative">
        <div className="bubble_img w-100 d-none d-lg-block position-absolute">
          <img
            className="bubble position-absolute h-100"
            src={imgSrc}
            alt="bubble1.png"
          />
        </div>
        <div className="working_experts_image overflow-hidden position-relative rounded-circle">
          <img
            className="image w-100 h-100 position-absolute z-1"
            src={teamImg}
            alt="latestBlogImg"
          />
        </div>
      </div>
      <div className="card-body text-center p-0">
        <h3 className="fw-bold mt-5 heading_primary_blue">{name}</h3>
        <span className="regular-paragraph mt-3">{role}</span>

        <ul className="working_experts_social list-unstyled d-flex align-items-center justify-content-center my-3">
          <li className="mx-2 rounded-circle d-flex justify-content-center align-items-center">
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li className="mx-2 rounded-circle d-flex justify-content-center align-items-center">
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li className="mx-2 rounded-circle d-flex justify-content-center align-items-center">
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className="mx-2 rounded-circle d-flex justify-content-center align-items-center">
            <a href="#">
              <i className="fa-brands fa-pinterest"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WorkingExpertsCard;
