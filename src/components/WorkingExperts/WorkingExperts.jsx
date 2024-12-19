import React, { useEffect } from "react";
import figure_working_experts from "../../assets/images/figure1.png";
import bubble_working_experts from "../../assets/images/bubble1.png";
import SectionTitle from "../SectionTitle/SectionTitle";
import WorkingExpertsCard from "./WorkingExpertsCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchTeam } from "../../network/teamApis";
function WorkingExperts() {

  const Obj = useSelector((state) => {
    return state.OurWorkingExperts;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeam())
  }, [dispatch])
  // console.log(team);

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
            {
              Obj.team.map((member) => {
                return (
                  <WorkingExpertsCard
                    key={member.id}
                    imgSrc={bubble_working_experts}
                    teamImg={member.image}
                    name={member.name}
                    role={member.role}
                    responsive="mt-sm-0 mt-4"
                  />
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkingExperts;
