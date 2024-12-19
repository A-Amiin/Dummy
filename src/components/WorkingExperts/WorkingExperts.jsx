import React from "react";
import figure_working_experts from "../../assets/images/figure1.png";
import bubble_working_experts from "../../assets/images/bubble1.png";
import teamOne from "../../assets/images/team1.png";

import SectionTitle from "../SectionTitle/SectionTitle";
import WorkingExpertsCard from "./WorkingExpertsCard";
function WorkingExperts() {
  return (
    <>
      <section className="working_experts position-relative py-5">
        <div className="container">
          <SectionTitle
            imgSrc={figure_working_experts}
            title="Our Working Experts"
            wrapper="working_experts"
            colorHeading="heading_primary_blue"
            colorParagraph="regular-paragraph"
          />
          <div className="row mt-5 mb-5">
            {/*Column One */}
            <WorkingExpertsCard
              imgSrc={bubble_working_experts}
              teamImg={teamOne}
              name="Richard Powel"
              role="Office Cleaner"
            />
            {/*Column Two */}
            <WorkingExpertsCard
              imgSrc={bubble_working_experts}
              teamImg={teamOne}
              name=" Merry Patel"
              role="Kitchen Cleaner"
              responsive="mt-sm-0 mt-4"
            />

            {/*Column Three */}
            <WorkingExpertsCard
              imgSrc={bubble_working_experts}
              teamImg={teamOne}
              name=" Johnson Jack"
              role="Floor Cleaner"
              responsive="mt-lg-0 mt-4"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkingExperts;
