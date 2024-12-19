import React from "react";
import "../../assets/libs/bootstrap/css/bootstrap.min.css";
import slideOne from "../../assets/images/slide-1.jpg";
import slideTwo from "../../assets/images/slide-2.jpeg";
import BubbleImg from "../../assets/images/section-bubble.png";
import "./Slider.css";
import { Link } from "react-router";
const Slider = () => {
	return (
		<>
			<div id="carouselExampleDark" className="carousel carousel-dark slide">
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="10000">
						<div className="carousel-image-container">
							<img src={slideOne} className="d-block w-100" alt="..." />
							<div className="overlaying"></div>
						</div>
						<div className="carousel-caption d-flex align-items-center justify-content-center top-50 start-0 translate-middle-y text-center">
							<div className="Colors d-flex flex-column align-items-center justify-content-center w-50">
								<p className="first-p sub-heading">
									The Best Cleaning Service Ever!
								</p>
								<h1 className="heading">Certified Company</h1>
								<p className="second-p">
									Some representative placeholder content for the first slide.
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
									soluta debitis nobis repudiandae eaque suscipit illo officiis
									rerum. Nemo
								</p>
								<Link
									to="services"
									className="Quote btn d-flex align-items-center fw-bold"
								>
									{" "}
									Take Our Service{" "}
									<i className="fa-solid fa-chevron-right p-2"></i>
								</Link>
							</div>
						</div>
					</div>
					<div className="carousel-item" data-bs-interval="2000">
						<div className="carousel-image-container">
							<img src={slideTwo} className="d-block w-100" alt="..." />
							<div className="overlaying"></div>
						</div>
						<div className="carousel-caption d-flex align-items-center justify-content-center top-50 start-0 translate-middle-y text-center">
							<div className="Colors d-flex flex-column align-items-center justify-content-center w-50">
								<p className="first-p sub-heading">
									The Best Cleaning Service Ever!
								</p>
								<h1 className="heading">Certified Company</h1>
								<p className="second-p">
									Some representative placeholder content for the first slide.
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
									soluta debitis nobis repudiandae eaque suscipit illo officiis
									rerum. Nemo
								</p>
								<Link
									to="services"
									className="Quote btn d-flex align-items-center fw-bold"
								>
									{" "}
									Take Our Service{" "}
									<i className="fa-solid fa-chevron-right p-2"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Arrow Controls --> */}
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleDark"
					data-bs-slide="prev"
				>
					<div className="arrow">
						<span
							className="carousel-control-prev-icon d-flex"
							aria-hidden="true"
						></span>
					</div>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleDark"
					data-bs-slide="next"
				>
					<div className="arrow">
						<span
							className="carousel-control-next-icon d-flex"
							aria-hidden="true"
						></span>
					</div>
					<span className="visually-hidden">Next</span>
				</button>
				<img className="img-bubble d-none d-lg-flex" src={BubbleImg} alt="" />
			</div>
		</>
	);
};

export default Slider;
