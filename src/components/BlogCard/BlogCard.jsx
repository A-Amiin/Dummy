import React from "react";
import { Link } from "react-router";
import "../../assets/styles/blog.css";

export default function BlogCard({
	imgSrc,
	date,
	title,
	author,
	description,
	linkLocation
}) {
	return (
		<>
			<div className="card shadow hover-shadow-lg cursor-pointer hover-card transition h-100">
				<div className="card-img">
					<Link to={linkLocation}>
						<img
							src={imgSrc}
							className="card-img-top transition"
							alt={`Blogs-card`}
						/>
					</Link>
				</div>
				<div className="card-body">
					<span>
						<i className="fa-solid fa-calendar-days"></i> {date}
					</span>
					<Link to={linkLocation}>
						<h5 className="card-title">{title}</h5>
					</Link>
					<span className="card-text-title">{author}</span>
					<p className="card-text">{description}</p>
					<div className="card-footer pb-0 mt-3">
						<div>
							<i className="fa-solid fa-heart"></i>
							<span className="text-dark fw-bold">06</span>
							<span>Likes</span>
						</div>
						<div>
							<i className="fa-solid fa-comment"></i>
							<span className="text-dark fw-bold">02</span>
							<span>comments</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
