import React from "react";
import figure1_footer from "../../assets/images/figure1.png";
import figure2_footer from "../../assets/images/figure2.png";

export default function Footer() {
	return (
		<>
			<footer className="footer position-relative p-4">
				<img
					src={figure1_footer}
					alt="figure1_footer"
					className="position-absolute top-0"
				/>
				<img
					src={figure2_footer}
					alt="figure2_footer"
					className="position-absolute bottom-0"
				/>
				<div className="container py-3">
					<div className="row position-relative">
						{/* <!-- Features --> */}
						<div className="col-12 col-sm-6 col-lg-4 col-xl-3 text-center text-sm-start">
							<div className="features">
								<h3 className="footer_h3_style">FEATURES</h3>
								<ul className="footer-list mt-4 list-unstyled">
									<li className="mt-3">
										<a className="text-decoration-none" href="#">
											Residential Services
										</a>
									</li>
									<li className="mt-3">
										<a className="text-decoration-none" href="#">
											Commercial Services
										</a>
									</li>
									<li className="mt-3">
										<a className="text-decoration-none" href="#">
											Vechile Wash
										</a>
									</li>
									<li className="mt-3">
										<a className="text-decoration-none" href="#">
											Londry Facilities
										</a>
									</li>
									<li className="mt-3">
										<a className="text-decoration-none" href="#">
											Carpet Removal
										</a>
									</li>
								</ul>
							</div>
						</div>

						{/* <!-- Company --> */}
						<div className="col-12 col-sm-6 col-lg-4 col-xl-3 mt-5 mt-sm-0 text-center text-sm-start">
							<div className="company">
								<h3 className="footer_h3_style">COMPANY</h3>
								<ul className="footer-list mt-4 list-unstyled">
									<li className="mt-3">
										<a className="text-decoration-none" href="#">
											About Us
										</a>
									</li>
									<li className="mt-3">
										<a className="text-decoration-none" href="#">
											Testimonials
										</a>
									</li>
									<li className="mt-3">
										<a className="text-decoration-none" href="#">
											Terms
										</a>
									</li>
									<li className="mt-3">
										<a className="text-decoration-none" href="#">
											Media Kit
										</a>
									</li>
									<li className="mt-3">
										<a className="text-decoration-none" href="#">
											Sitemap
										</a>
									</li>
								</ul>
							</div>
						</div>
						{/* <!-- Quick Links --> */}
						<div className="col-12 col-sm-6 col-lg-4 col-xl-3 mt-5 mt-lg-0 text-center text-sm-start">
							<div className="quick_Links">
								<h3 className="footer_h3_style">Quick Links</h3>
								<ul className="footer-list mt-4 list-unstyled">
									<li className="mt-3">
										<a className="text-decoration-none" href="#">
											Features
										</a>
									</li>
									<li className="mt-3">
										<a className="text-decoration-none" href="#">
											Pricing
										</a>
									</li>
									<li className="mt-3">
										<a className="text-decoration-none" href="#">
											Partners
										</a>
									</li>
									<li className="mt-3">
										<a className="text-decoration-none" href="#">
											Cloud Affiliate Program
										</a>
									</li>
								</ul>
							</div>
						</div>

						{/* <!-- Affiliates --> */}
						<div className="col-12 col-sm-6 col-lg-4 col-xl-3 mt-5 mt-xl-0 text-center text-sm-start">
							<div className="affiliates">
								<h3 className="footer_h3_style">AFFILIATES</h3>
								<ul className="footer-list mt-4 list-unstyled">
									<li className="mt-3">
										<a className="text-decoration-none" href="#">
											Become An Affiliate
										</a>
									</li>
									<li className="mt-3">
										<a className="text-decoration-none" href="#">
											Affiliate
										</a>
									</li>
								</ul>
								<a
									className="fw-medium mt-5 py-3 px-3 d-block text-white text-decoration-none"
									href=""
								>
									<i className="fa-regular fa-envelope mx-2"></i> HAVE ANY
									QUESTION
								</a>
							</div>
						</div>
					</div>

					<div className="position-relative py-3 mt-5 mb-5 d-flex align-items-center justify-content-lg-between flex-lg-row flex-column">
						{/* <!-- Sign Up For news and special offers --> */}
						<div>
							<div>
								<h3 className="footer_h3_style text-center text-lg-start">
									Sign up For news and special offers
								</h3>
								<div className="form_for_news mt-3 d-flex align-items-center">
									<input
										className="border-0 px-4 placeholder-lg py-2 rounded-start-2"
										type="text"
										placeholder="Search Keywords..."
									/>
									<input
										className="border-0 px-4 py-2 rounded-end-2 text-black fw-medium"
										type="submit"
									/>
								</div>
							</div>
						</div>
						<div className="mt-5 mt-lg-0">
							<div className="social_follow d-flex align-items-center">
								<h4 className="text-white fs-6">Follow Us On :</h4>
								<ul className="list-unstyled social_follow_list d-flex align-items-center my-0 mx-2">
									<li className="mx-2 fs-6">
										<a href="#">
											<i className="fa-brands fa-facebook-f"></i>
										</a>
									</li>
									<li className="mx-2 fs-6">
										<a href="#">
											<i className="fa-brands fa-twitter"></i>
										</a>
									</li>
									<li className="mx-2 fs-6">
										<a href="#">
											<i className="fa-brands fa-instagram"></i>
										</a>
									</li>
									<li className="mx-2 fs-6">
										<a href="#">
											<i className="fa-brands fa-google-plus-g"></i>
										</a>
									</li>
									<li className="mx-2 fs-6">
										<a href="#">
											<i className="fa-brands fa-pinterest"></i>
										</a>
									</li>
									<li className="mx-2 fs-6">
										<a href="#">
											<i className="fa-brands fa-vimeo-v"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="position-relative copy_right py-4 d-flex justify-content-between align-items-center flex-md-row flex-column">
						<p>Copyright 2019 clenix. All Rights Reserved</p>
						<ul className="list-unstyled d-flex align-items-center m-md-0 mt-3">
							<li>
								<a className="text-decoration-none" href="#">
									Sitemap .{" "}
								</a>
							</li>
							<li className="mx-2">
								<a className="text-decoration-none" href="#">
									Terms of Service .
								</a>
							</li>
							<li>
								<a className="text-decoration-none" href="#">
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
}
