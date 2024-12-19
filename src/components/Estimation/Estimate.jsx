import React from 'react';
import "../../assets/libs/bootstrap/css/bootstrap.min.css";
import "./Estimate.css";
import BubbleImg from "../../assets/images/section-bubble.png";
import Team2 from "../../assets/images/team2.png";
import { Link } from 'react-router';

const Estimate = () => {
    return (
        <>
            <section className="estimate-section mb-5">
                <div className="container">
                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                        <h1 className="heading text-center text-md-start">Get started with your free estimate</h1>
                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mt-3 mt-md-0">
                            <Link to="Booking-Form" className="Quote btn d-flex align-items-center fw-bold mx-3"> Get an Estimate <i
                                className="fa-solid fa-chevron-right p-2"></i></Link>
                            <img src={Team2} alt="team1" className="d-none d-md-block" />
                        </div>
                    </div>
                </div>
                <img className="img-bubble d-none d-md-block" src={BubbleImg} alt="img-bubble" />
            </section>
        </>
    )
}

export default Estimate