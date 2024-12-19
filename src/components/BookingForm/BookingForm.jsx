import React from 'react'
import "./BookingForm.css";

const BookingForm = () => {
    return (
        <>
            <div className="form w-75 p-5">
                <h1 className="text-center sub-heading mb-4">Request An Estimate</h1>
                <form action="">
                    <div className="mb-3">
                        <input type="text" className="form-control p-3" id="name" placeholder="Residential" required />
                    </div>
                    <div className="two-input-at-row d-flex flex-column justify-content-between">
                        <div className="mb-3 d-flex">
                            <input type="text" className="form-control p-3" placeholder="Property" required />
                            <input type="text" className="form-control p-3" placeholder="-- Approx SF --" required />
                        </div>
                        <div className="mb-3 d-flex">
                            <input type="text" className="form-control p-3" placeholder="-- Bedroom --" required />
                            <input type="text" className="form-control p-3" placeholder="-- Bathroom --" required />
                        </div>
                        <div className="mb-3 d-flex">
                            <input type="text" className="form-control p-3" placeholder="-- Frequency --" required />
                            <input type="text" className="form-control p-3" placeholder=" ZIP Code" />
                        </div>
                        <div className="mb-3 d-flex">
                            <input type="text" className="form-control p-3" placeholder="mm/dd/yyyy" />
                            <input type="time" className="form-control p-3" />
                        </div>
                        <div className="mb-3 d-flex">
                            <input type="text" className="form-control p-3" placeholder=" Name " required />
                            <input type="number" className="form-control p-3" placeholder=" Phone " required />
                        </div>
                    </div>
                    <div className="mb-3">
                        <textarea name="Address" className="form-control p-3" id="address" placeholder="Address"></textarea>
                    </div>
                    <div className="d-flex Quote p-2 justify-content-center">
                        <a href="#" className="btn d-flex align-items-center fw-bold mx-3"> Book Now <i
                            className="fa-solid fa-chevron-right p-2 "></i></a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default BookingForm