import React from "react";
import { Link } from "react-router";
import "./HeadBanner.css";

export default function HeadBanner({ prevPage, currPage }) {
	return (
		<>
			<header className="head-banner text-center py-5">
				<div className="container py-5">
					<h1 className="pb-3 head-banner-header">{currPage}</h1>
					<div className="pb-3">
						<span className="head-banner-breadcrumb">
							<Link to="/">Home</Link>
						</span>
						<span>
							<i className="fa fa-angle-double-right"> </i>
						</span>
						{prevPage && (
							<>
								<span className="head-banner-breadcrumb text-capitalize">
									<Link to="/">{prevPage}</Link>
								</span>
								<span>
									<i className="fa fa-angle-double-right"></i>
								</span>
							</>
						)}
						<span className="head-banner-breadcrumb current">
							<Link to={{}}>{currPage}</Link>
						</span>
					</div>
				</div>
			</header>
		</>
	);
}
