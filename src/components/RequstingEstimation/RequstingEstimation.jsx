import React from 'react'
import "./RequstingEstimation.css";
import BookingForm from '../BookingForm/BookingForm';
const RequstingEstimation = () => {
    return (
        <>
            <section className="requsting-estimate-section py-5">
                <div className="container">
                    <div className="Wrapper d-flex flex-column flex-lg-row">
                        {/* <!-- Content Section --> */}
                        <div className="content w-100 px-lg-5 mb-4 mb-lg-0">
                            <h1 className="header fw-bold">Our Goal is to Wow With Every Clean</h1>
                            <p className="fw-bold fs-5 py-3">
                                There are many variations of passages of lorem ispum available,
                                but the majority have suffered alteration in some form
                            </p>
                            <p className="regular-paragraph py-2 fs-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quisquam praesentium ratione, cupiditate
                                repudiandae repellendus amet laborum quasi, cumque illum, nobis odit consequatur! Ipsa et, accusantium
                                nesciunt maxime veritatis amet.
                            </p>
                            <div className="list mt-4">
                                <ul className="list-unstyled">
                                    <li className="mb-2 py-1">
                                        <h2 className="sub-heading"><i className="fa-solid fa-check me-2 p-2"></i> Customer Foucsed Reviews</h2>
                                        <p className="p-2 px-5 mx-3 regular-paragraph">Lorem ipsum dolor sit,
                                            amet consectetur adipisicing elit.
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        </p>
                                    </li>
                                    <li className="mb-2 py-1">
                                        <h2 className="sub-heading"><i className="fa-solid fa-check me-2 p-2"></i> We Are Committed</h2>
                                        <p className="p-2 px-5 mx-3 regular-paragraph">Lorem ipsum dolor sit,
                                            amet consectetur adipisicing elit.
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        </p>
                                    </li>
                                    <li className="mb-2 py-1">
                                        <h2 className="sub-heading"><i className="fa-solid fa-check me-2 p-2"></i> Regular & Monthly Cleaning</h2>
                                        <p className="p-2 px-5 mx-3 regular-paragraph">Lorem ipsum dolor sit,
                                            amet consectetur adipisicing elit.
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- Form Section --> */}
                        <BookingForm />
                    </div>
                </div>
            </section>
        </>
    )
}

export default RequstingEstimation;