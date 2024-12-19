import React from "react";
import { Link } from "react-router";
import "./HeadBanner.css";

export default function HeadBanner({ currPage }) {
	return (
		<>
			<header className="head-banner text-center py-5">
				<div className="container py-5">
					<h1 className="pb-3 head-banner-header">{currPage}</h1>
					<div className="pb-3">
						<span className="head-banner-breadcrumb">
							<Link to="/">Home</Link>
						</span>
						{currPage === "Kitchen Cleaning Services" ? (
							<>
								<span>
									<i className="fa fa-angle-double-right"> </i>
								</span>
								<span className="head-banner-breadcrumb">
									<Link to="../blog">Services</Link>
								</span>
								<span>
									<i className="fa fa-angle-double-right"> </i>
								</span>
								<span className="head-banner-breadcrumb current">
									<Link to={{}}>{currPage}</Link>
								</span>
							</>
						) : currPage === "Modern Rules Of Hygienic Cleaning" ? (
							<>
								<span>
									<i className="fa fa-angle-double-right"> </i>
								</span>
								<span className="head-banner-breadcrumb">
									<Link to="../blog">Blog</Link>
								</span>
								<span>
									<i className="fa fa-angle-double-right"> </i>
								</span>
								<span className="head-banner-breadcrumb current">
									<Link to={{}}>{currPage}</Link>
								</span>
							</>
						) : (
							<>
								<span>
									<i className="fa fa-angle-double-right"> </i>
								</span>
								<span className="head-banner-breadcrumb current">
									<Link to={{}}>{currPage}</Link>
								</span>
							</>
						)}
					</div>
				</div>
			</header>
		</>
	);
}
