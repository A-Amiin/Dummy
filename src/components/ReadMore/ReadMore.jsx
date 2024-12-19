import React from 'react';
import "./ReadMore.css";
import IMg from "../../assets/images/read-more.webp"
import { Link } from 'react-router';
const ReadMore = () => {
    return (
        <>
            <section className="read-more d-flex flex-column flex-md-column flex-lg-row align-items-center">
                <div className="image w-100 w-lg-50 d-flex align-items-center justify-content-center mb-4 mb-md-5">
                    <img src={IMg} alt="readMore" className="img-fluid" />
                </div>
                <div className="text w-100 w-lg-50 p-5 d-flex flex-column align-items-start justify-content-center">
                    <h1 className="mb-3">
                        <strong>Together</strong> We'll Explore <strong>New Things</strong>
                    </h1>
                    <div className="Quote p-2">
                        <Link to="about" className="btn d-flex align-items-center fs-4 fw-bold mx-3"> Read More <i
                            className="fa-solid fa-chevron-right p-2"></i></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReadMore