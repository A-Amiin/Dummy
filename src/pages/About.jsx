import { Link } from "react-router";
import "../assets/styles/about.css";
import HeadBanner from "../components/HeadBanner/HeadBanner";
import cleaningPerson from "../assets/images/cleaning-img.jpg"
import figure1 from "../assets/images/figure1.png"
import readMore from "../assets/images/read-more.webp"
import team2 from "../assets/images/team2.png"

function About() {
	return (
		<>
			{/* <!-- banner --> */}
			<HeadBanner currPage={"About"} />
			<section className="know-about-us d-flex justify-content-center col-12">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-6 p-5">
							<h5>know about us</h5>
							<br />
							<h2>Doing Business Since 1992 in Cleaning Service.</h2>
							<p>
								Chen an unknown prer ook 8 gatey of type ond scramesed to make a
								me socmen bck ha vd ot re crim sho Below uae
							</p>
							<p>
								Chen 3 kno pris took a gale of pe and scrambled to makes me
								secmen bck ha ved ot re cori bso Below kno preter too galley of
								fe and scrmbie 10 make a ype tr bck. hs sed ct ah fe crn.
							</p>
							<div className="d-flex gap-2 mt-4">
								<div>
									<i className="fa-regular fa-circle-check mt-1"></i>
								</div>
								<div>
									<h4>Customer Focused Reviews</h4>
									<p>
										Aorem ipsum dolor st amet consectetur adipiscing eb sed do
										‘Susmod tempor ncddunt ut soe t dolore.
									</p>
								</div>
							</div>
							<div className="d-flex gap-2 mt-4">
								<div>
									<i className="fa-regular fa-circle-check mt-1"></i>
								</div>
								<div>
									<h4>Customer Focused Reviews</h4>
									<p>
										Aorem ipsum dolor st amet consectetur adipiscing eb sed do
										‘Susmod tempor ncddunt ut soe t dolore.
									</p>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 d-flex justify-content-center position-relative p-5">
							<div>
								<img
									src={cleaningPerson}
									alt="cleaning person"
									srcSet=""
									className="w-100"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* ------------------------------------------- */}
			<section className="features col-12">
				<div className="container d-flex justify-content-center p-5 flex-wrap">
					<div className="col-12 col-lg-4 d-flex justify-content-center align-items-center p-1">
						<div className="features-card text-center p-5">
							<i className="fa-solid fa-circle-check my-3"></i>
							<h5 className="my-2">Trusted Cleaners</h5>
							<p className="text-white">
								Ahen an unknown printer took a galley of type and scrambled it
								to make a type specimen five centuries.{" "}
							</p>
						</div>
					</div>
					<div className="col-12 col-lg-4 d-flex justify-content-center align-items-center p-1">
						<div className="features-card text-center p-5">
							<i className="fa-solid fa-circle-check my-3"></i>
							<h5 className="my-2">100% Satisfaction</h5>
							<p className="text-white">
								Ahen an unknown printer took a galley of type and scrambled it
								to make a type specimen five centuries.
							</p>
						</div>
					</div>
					<div className="col-12 col-lg-4 d-flex justify-content-center align-items-center p-1">
						<div className="features-card text-center p-5">
							<i className="fa-solid fa-circle-check my-3"></i>
							<br />
							<h5 className="my-2">Cost Effective</h5>
							<p className="text-white">
								Ahen an unknown printer took a galley of type and scrambled it
								to make a type specimen five centuries.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ---------------------------------- */}
			<section className="working_experts position-relative py-5">
				<div className="container">
					<div className="row text-center py-5">
						<div className="col-12">
							<img
								className="working_experts_img img-fluid"
								src={figure1}
								alt="figure1_latest_blogs"
							/>
							<div className="working_experts_info">
								<h3 className="fw-bolder mt-2 heading_primary_blue">
									Our Working Experts
								</h3>
								<p className="mt-2 fs-p regular-paragraph">
									Perspiciatis unde omnis iste natus error sit voluptatem
									accusantium fa-angle- <br />
									double-up oremque laudantium, totam remeaque ipsa
								</p>
							</div>
						</div>
					</div>
					<div className="row mt-5 mb-5">
						{/* Passing with API */}
					</div>
				</div>
			</section>
			{/* ------------------------------- */}
			<section className="read-more d-flex flex-column flex-md-column flex-lg-row align-items-center">
				<div className="image w-100 w-lg-50 d-flex align-items-center justify-content-center mb-4 mb-md-5">
					<img
						src={readMore}
						alt="readMore"
						className="img-fluid"
					/>
				</div>
				<div className="text w-100 w-lg-50 p-5 d-flex flex-column align-items-start justify-content-center">
					<h1 className="mb-3">
						<strong>Together</strong> We&apos;ll Explore{" "}
						<strong>New Things</strong>
					</h1>
					<div className="Quote p-2">
						<Link
							to="https://www.google.com/search?q=cleaning+services&oq=&gs_lcrp=EgZjaHJvbWUqCQgBECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQs3MzA5MzI3ajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8"
							target="_blank"
							className="btn d-flex align-items-center fs-4 fw-bold mx-3"
						>
							{" "}
							Read More <i className="fa-solid fa-chevron-right p-2"></i>
						</Link>
					</div>
				</div>
			</section>
			{/* ----------------------------- */}

			<section className="how-it-works p-5 col-12">
				<div className="container">
					<div className="d-flex flex-column align-items-center">
						<div className="col-6 text-center">
							<h3>How It Works</h3>
							<p>
								Perspiciatis unde omnis iste natus error sit voluptatem
								accusantium dol oremaque laudantium, totam remeaque ipsa
							</p>
						</div>
						<div className="d-flex justify-content-center align-items-center flex-wrap mt-5">
							<div className="col-12 col-lg-4 d-flex justify-content-center flex-column align-items-center">
								<div className="bubble">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="35"
										height="35"
										fill="currentColor"
										className="bi bi-calendar-check"
										viewBox="0 0 16 16"
									>
										<path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
										<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
									</svg>
								</div>
								<h5>book online</h5>
								<p>
									Perspiciatis unde omnis iste natus error sit voluptatem
									accusantium dolore
								</p>
							</div>

							<div className="col-12 col-lg-4 d-flex justify-content-center flex-column align-items-center">
								<div className="bubble">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="35"
										height="35"
										fill="currentColor"
										className="bi bi-envelope"
										viewBox="0 0 16 16"
									>
										<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
									</svg>
								</div>
								<h5>get confirmation</h5>
								<p>
									Perspiciatis unde omnis iste natus error sit voluptatem
									accusantium dolore
								</p>
							</div>

							<div className="col-12 col-lg-4 d-flex justify-content-center flex-column align-items-center">
								<div className="bubble">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="35"
										height="35"
										fill="currentColor"
										className="bi bi-emoji-smile"
										viewBox="0 0 16 16"
									>
										<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
										<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
									</svg>
								</div>
								<h5>Let&apos;s enjoy</h5>
								<p>
									Perspiciatis unde omnis iste natus error sit voluptatem
									accusantium dolore
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ------------------------- */}

			<section className="get-started bg-primary col-12">
				<div className="container">
					<div className="d-flex justify-content-center align-items-center flex-wrap">
						<div className="col-12 col-lg-8 my-2 d-flex justify-content-center align-items-center">
							<h3 className="text-white">
								Get started with your free estimate
							</h3>
						</div>
						<div className="col-12 col-lg-2 my-2 d-flex justify-content-center align-items-center text-center">
							<div className="Quote">
								<Link to="../Booking-Form" className="btn d-flex align-items-center fs-4 fw-bold"> Get An Estimate <i
									className="fa-solid fa-chevron-right p-2"></i></Link>
							</div>
						</div>
						<div className="d-none d-lg-block col-lg-2 d-flex justify-content-center align-items-center">
							<img
								src={team2}
								alt="cleaning person"
								className="w-100"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default About;
