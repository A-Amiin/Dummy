import React from 'react'
import "../../assets/libs/bootstrap/css/bootstrap.min.css";
import Team1 from "../../assets/images/team1.png";
import { Link } from 'react-router';
import "./Booking.css";
const Booking = () => {
    return (
        <>
            <section className="booking">
                <div className="container w-75">
                    <div className="row">
                        {/* <!-- Images section --> */}
                        <div className="images d-none d-lg-block col-12 col-md-6 mb-4 mb-md-0">
                            <div className="image-1">
                                <img src={Team1} alt="" className="w-100" />
                            </div>
                            <div className="image-2">
                                <img src={Team1} alt="" className="w-100" />
                            </div>
                        </div>

                        {/* <!-- Text section --> */}
                        <div className="text col-12 col-md-6 d-flex flex-column justify-content-center text-center text-md-start">
                            <div className="content">
                                <h1>Making Your House</h1>
                                <h2>As Good As New</h2>
                                <p className="regular-paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, doloribus.
                                    Sunt,
                                    perspiciatis! Repudiandae, assumenda, ea, veniam, minus qui molestias delectus veniam ea debitis quae
                                    architecto ipsum quo illum? Dolore, voluptatibus.</p>
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-2"><i className="fa-solid fa-check me-2"></i> Remove debris and glass</li>
                                    <li className="mb-2"><i className="fa-solid fa-check me-2"></i> Clean and polish floors and walls</li>
                                    <li className="mb-2"><i className="fa-solid fa-check me-2"></i> Apply insulation to walls and ceilings</li>
                                    <li className="mb-2"><i className="fa-solid fa-check me-2"></i> Remove gutters and downspouts</li>
                                    <li className="mb-2"><i className="fa-solid fa-check me-2"></i> Fix broken appliances</li>
                                </ul>
                            </div>
                            <div className="calls d-flex justify-content-between">
                                <Link to="Booking-Form" className="Quote btn d-flex align-items-center fw-bold"> Book A Service <i
                                    className="fa-solid fa-chevron-right p-2"></i></Link>
                                <p className="number"><i className="fs-3 fa-solid fa-phone"></i> <span className="fw-bold">+985 8844 000</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Booking;