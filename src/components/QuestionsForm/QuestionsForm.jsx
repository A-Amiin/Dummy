import React from "react";
import "./QuestionsForm.css";

export default function QuestionsForm() {
	return (
		<>
			<div className="questions-form-card aside-card p-5 mb-5 rounded-2">
				<h5 className="aside-card-title heading-border-inline-start ps-3 mb-4">
					Have You Any Questions?
				</h5>
				<form className="d-flex flex-column">
					<div className="questions-form-input">
						{/* <i className="fa-solid fa-user"></i>  */}
						<input
							type="text"
							name="name"
							placeholder="Name"
							className="questions-form-control rounded-1"
						/>
					</div>

					<div className="questions-form-input">
						{/*  <i className="fa-regular fa-envelope"></i>  */}
						<input
							type="email"
							name="email-address"
							placeholder="E-mail Address"
							className="questions-form-control rounded-1"
						/>
					</div>

					<div className="questions-form-input">
						{/*  <i className="fa-solid fa-phone"></i> */}
						<input
							type="text"
							name="phone"
							placeholder="Phone"
							className="questions-form-control rounded-1"
						/>
					</div>

					<div className="questions-form-input">
						{/*  <i className="fa-solid fa-question"></i>  */}
						<input
							type="text"
							name="subject"
							placeholder="Subject"
							className="questions-form-control rounded-1"
						/>
					</div>

					<div className="questions-form-input d-flex">
						{/* <i className="fa-regular fa-comments"></i>  */}
						<textarea
							type="text"
							name="address"
							placeholder="Address"
							className="questions-form-control rounded-1"
						></textarea>
					</div>
					<button className="yellow-btn fw-medium" type="submit">
						Send Message
					</button>
				</form>
			</div>
		</>
	);
}
