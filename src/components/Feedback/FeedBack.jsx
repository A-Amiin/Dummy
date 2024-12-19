import React from "react";
import FeedbackCard from "./FeedbackCard";

function FeedBack() {
  return (
    <section className="feedback position-relative py-5">
      <div className="container">
        <div className="row text-center py-3">
          <div className="col-12">
            <p className="fw-bolder fs-3 text-white">
              What Clients Say <br />
              About Us
            </p>
          </div>
        </div>

        <div className="row mt-5 mb-5">
          {/* Column 1 */}
          <FeedbackCard
            quote="Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since."
            name="Steven Joes"
            role="CEO, RT"
            rate={5}
            
          />

          {/* Column 2 */}
          <FeedbackCard
            quote="Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since."
            name="Mike Tyson"
            role="CEO, RT"
            rate={5}
            responsive = "mt-sm-0 mt-4"
          />
          {/* Column 3 */}
          <FeedbackCard
            quote="Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since."
            name="Bobby John"
            role="CEO, RT"
            rate={5}
            responsive = "mt-lg-0 mt-4"
          />
        </div>
      </div>
    </section>
  );
}

export default FeedBack;
