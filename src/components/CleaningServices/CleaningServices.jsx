import React from 'react'
import "./CleaningServices.css";
import Figure1 from "../../assets/images/figure1.png";
import Fig1 from "../../assets/images/Blog/Blogs-card-3.jpg";
import Fig2 from "../../assets/images/Blog/Blogs-card-2.jpg";
import Fig3 from "../../assets/images/Blog/Blogs-card-7.jpg";
const CleaningServices = () => {
    return (
        <>
            <section className="cleaning-services py-5">
                <div className="container">
                    {/* <!-- Centered Text Content --> */}
                    <div className="text text-center mb-4">
                        <img src={Figure1} alt="" className="mb-3" />
                        <h1 className="heading">Cleaning Services</h1>
                        <p className="regular-paragraph">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, doloribus. Sunt, perspiciatis! Repudiandae,
                            assumenda
                        </p>
                    </div>
                    {/* <!-- Services Cards --> */}
                    <div className="row g-4">
                        {/* <!-- Service Card --> */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100 text-center p-1">
                                <img src={Fig1} alt="" className="card-img-top mx-auto" />
                                <div className="card-body">
                                    <div className="bg-icon d-flex align-items-center justify-content-center">
                                        <i className="fa-solid fa-house-chimney"></i>
                                    </div>
                                    <h2 className="card-title mt-3 sub-heading">Residential</h2>
                                    <ul className="list-unstyled">
                                        <li className="mb-2"><i className="fa-solid fa-check me-2 p-2"></i>Kitchen</li>
                                        <li className="mb-2"><i className="fa-solid fa-check me-2 p-2"></i>Bathroom</li>
                                        <li className="mb-2"><i className="fa-solid fa-check me-2 p-2"></i>Bedroom</li>
                                        <li className="mb-2"><i className="fa-solid fa-check me-2 p-2"></i>Windows</li>
                                        <li className="mb-2"><i className="fa-solid fa-check me-2 p-2"></i>Carpets</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Duplicate the card structure for other services --> */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100 text-center p-1">
                                <img src={Fig2} alt="" className="card-img-top mx-auto" />
                                <div className="card-body">
                                    <div className="bg-icon d-flex align-items-center justify-content-center">
                                        <i className="fa-solid fa-calculator"></i>
                                    </div>
                                    <h2 className="card-title mt-3 sub-heading">Commercial</h2>
                                    <ul className="list-unstyled">
                                        <li className="mb-2"><i className="fa-solid fa-check me-2 p-2"></i>Kitchen</li>
                                        <li className="mb-2"><i className="fa-solid fa-check me-2 p-2"></i>Bathroom</li>
                                        <li className="mb-2"><i className="fa-solid fa-check me-2 p-2"></i>Bedroom</li>
                                        <li className="mb-2"><i className="fa-solid fa-check me-2 p-2"></i>Windows</li>
                                        <li className="mb-2"><i className="fa-solid fa-check me-2 p-2"></i>Carpets</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100 text-center p-1">
                                <img src={Fig3} alt="" className="card-img-top mx-auto" />
                                <div className="card-body">
                                    <div className="bg-icon d-flex align-items-center justify-content-center">
                                        <i className="fa-solid fa-car"></i>
                                    </div>
                                    <h2 className="card-title mt-3 sub-heading">Vehicle Wash</h2>
                                    <ul className="list-unstyled">
                                        <li className="mb-2"><i className="fa-solid fa-check me-2 p-2"></i>Kitchen</li>
                                        <li className="mb-2"><i className="fa-solid fa-check me-2 p-2"></i>Bathroom</li>
                                        <li className="mb-2"><i className="fa-solid fa-check me-2 p-2"></i>Bedroom</li>
                                        <li className="mb-2"><i className="fa-solid fa-check me-2 p-2"></i>Windows</li>
                                        <li className="mb-2"><i className="fa-solid fa-check me-2 p-2"></i>Carpets</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CleaningServices