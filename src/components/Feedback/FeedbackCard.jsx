import React from "react";
function FeedbackCard({ quote, name, role, rate, responsive }) {
  return (
    <div className={`col-12 col-sm-6 col-lg-4  ${responsive ? responsive : ""}`}>
      <div className="card rounded-0 position-relative text-center p-5">
        <span className="position-absolute quote rounded-circle p-4 fw-bold">
          <i className="fa-solid fa-quote-left"></i>
        </span>
        <div className="card-body p-0">
          <p className="regular-paragraph lh-base">{quote}</p>
          <span className="fw-bold mt-3 d-block">{name}</span>
          <span className="regular-paragraph">{role}</span>
          <ul className="rate_feedback list-unstyled d-flex justify-content-center mt-3">
            {Array(rate)
              .fill()
              .map((_, index) => (
                <li key={index}>
                  <i className="fa-solid fa-star"></i>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
