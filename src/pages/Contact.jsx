import React from "react";
import HeadBanner from "../components/HeadBanner/HeadBanner";
import QuestionsForm from "../components/QuestionsForm/QuestionsForm";

export default function Contact() {
	return (
		<>
			{/* <!-- banner --> */}
			<HeadBanner currPage={"Contact"} />
			{/* <!-- contact --> */}
			<div className="container my-5">
				<div className="row">
					<div className="col-md-8">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z2YbZitmI2YrZiNix2YPYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2seg!4v1733500105479!5m2!1sar!2seg"
							width="100%"
							height="450"
							style={{ border: 0 }}
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
						<div className="row my-4 contact">
							<div className="col-md-4 flex">
								<i className="fa-solid fa-phone"></i>
								<div className="data mx-3">
									<h5 className="mb-2">Phone:</h5>
									<p>+8123 456 788 99,</p>
									<p>+8123 (456) 788 99</p>
								</div>
							</div>
							<div className="col-md-4 flex">
								<i className="fa-solid fa-envelope"></i>
								<div className="data mx-3">
									<h5 className="mb-2">E-mail:</h5>
									<p>info@roofing.com</p>
									<p>info@roofing.com</p>
								</div>
							</div>
							<div className="col-md-4 flex">
								<i className="fa-solid fa-location-dot"></i>
								<div className="data mx-3">
									<h5 className="mb-2">Location:</h5>
									<p>51 Street, Newyork City, NYPD</p>
									<p>18 Street, Newyork City, NYPD</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<aside>
							<QuestionsForm />
						</aside>
					</div>
				</div>
			</div>
		</>
	);
}
