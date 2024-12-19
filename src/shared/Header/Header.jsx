import React from "react";
import { Link, NavLink } from "react-router";
import logo from '../../assets/images/logo-dark.png'
import "../../assets/styles/home.css";

export default function Header() {
	return (
		<>
			<div className="bg-main text-white d-none d-md-flex">
				<div className="container d-flex justify-content-between align-items-center">
					<div className="">
						<Link to="#">
							<i className="p-1 text-white fa-brands fa-facebook-f"></i>
						</Link>
						<Link to="#">
							<i className="p-1 text-white fa-brands fa-twitter"></i>
						</Link>
						<Link to="#">
							<i className="p-1 text-white fa-brands fa-google-plus-g"></i>
						</Link>
						<Link to="#">
							<i className="p-1 text-white fa-brands fa-pinterest"></i>
						</Link>
						<Link to="#">
							<i className="p-1 text-white fa-brands fa-snapchat"></i>
						</Link>
						<span className="m-3">
							{" "}
							<i className="text-white p-1 fa-regular fa-clock"></i> Mon - Fri:
							09.00am - 10.00pm{" "}
						</span>
					</div>
					<Link to="#" className="Quote btn d-flex align-items-center fw-bold">
						<i className="p-2 fa-solid fa-bell"></i> Get A Quote
					</Link>
				</div>
			</div>

			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<Link className="navbar-brand" to="#">
						<img
							src={logo}
							alt="Logo"
							className="d-inline-block align-text-top"
						/>
					</Link>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse justify-content-center text-center"
						id="navbarNav"
					>
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink
									className={({ isActive }) =>
										`nav-link main-color ${isActive ? "active" : ""}`
									}
									to="/"
								>
									Home
								</NavLink>
							</li>
							<li className="main-color  nav-item">
								<NavLink
									className={({ isActive }) =>
										`nav-link main-color ${isActive ? "active" : ""}`
									}
									to="about"
								>
									About
								</NavLink>
							</li>
							<li className="main-color  nav-item">
								<NavLink
									className={({ isActive }) =>
										`nav-link main-color ${isActive ? "active" : ""}`
									}
									to="services"
								>
									Services
								</NavLink>
							</li>
							<li className="main-color  nav-item">
								<NavLink
									className={({ isActive }) =>
										`nav-link main-color ${isActive ? "active" : ""}`
									}
									to="blog"
								>
									Blog
								</NavLink>
							</li>
							<li className="main-color  nav-item">
								<NavLink
									className={({ isActive }) =>
										`nav-link main-color ${isActive ? "active" : ""}`
									}
									to="contact"
								>
									Contact
								</NavLink>
							</li>
						</ul>
					</div>

					<div className="d-none d-lg-flex align-items-center">
						<div className="me-2">
							<i className="fs-3 fa-solid fa-phone"></i>
						</div>

						<div className="d-flex flex-column">
							<span className="me-2">Quick Contact:</span>
							<span className="fw-bold">+985 8844 000</span>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
