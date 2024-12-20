import React, { useEffect } from "react";
import Newsletter from "../assets/images/Blog/Newsletter.svg";
import Aside from "../components/Aside/AsideBlog";
import HeadBanner from "../components/HeadBanner/HeadBanner";

import { useSelector, useDispatch } from "react-redux";
import { fetchBlogDetails } from "../network/blogApis";
import BlogCard from "../components/BlogCard/BlogCard";

function Blog() {
	const blogsList = useSelector((state) => {
		return state.Blog;
	});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchBlogDetails({ page: 1, limit: 8 }));
	}, [dispatch]);

	const handlePaginationClick = (pageNumber) => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});

		dispatch(fetchBlogDetails({ page: pageNumber, limit: 8 }));
	};

	return (
		<>
			{/* <!-- banner --> */}
			<HeadBanner currPage={"Blog"} />

			<div>
				<div className="container my-5">
					<div className="row">
						<div className="col-lg-8">
							{/* Blog Cards */}
							<div className="row blog-card">
								{Array.isArray(blogsList.blogDetails) &&
								blogsList.blogDetails.length > 0 ? (
									blogsList.blogDetails.map((blog) => (
										<div className="col-md-6 mb-4" key={blog.id}>
											<BlogCard
												blogId={blog.id}
												imgSrc={blog.image}
												date={blog.date}
												title={blog.title}
												author={blog.author}
												description={blog.description}
											/>
										</div>
									))
								) : (
									<p>
										No blogs available at the moment. Please check back later.
									</p>
								)}
							</div>
						</div>

						{/* Aside Section */}
						<div className="col-lg-4">
							<div className="row">
								<div className="col-md-12">
									<Aside title="Search">
										<div className="input-container">
											<input
												type="text"
												placeholder="Type here your topic..."
												className="input-field p-3"
											/>
											<i className="fa-solid fa-search search-icon"></i>
										</div>
									</Aside>
								</div>
								{/* Categories */}
								<div className="col-md-12">
									<Aside title="Categories">
										<div
											className="accordion accordion-flush"
											id="accordionFlushExample"
										>
											{[
												"Cleaning Tips",
												"Green Cleaning",
												"Moving Cleaning",
												"News",
												"Product Reviews",
												"Spring Cleaning"
											].map((category, index) => (
												<div className="accordion-item" key={index}>
													<h2 className="accordion-header">
														<button
															className="accordion-button collapsed"
															type="button"
															data-bs-toggle="collapse"
															data-bs-target={`#flush-collapse${index + 1}`}
															aria-expanded="false"
															aria-controls={`flush-collapse${index + 1}`}
														>
															{category}
														</button>
													</h2>
													<div
														id={`flush-collapse${index + 1}`}
														className="accordion-collapse collapse"
														data-bs-parent="#accordionFlushExample"
													>
														<div className="accordion-body">
															Placeholder content for {category}.
														</div>
													</div>
												</div>
											))}
										</div>
									</Aside>
								</div>
								{/* Posts */}
								<div className="col-md-12">
									<Aside title="Posts">
										<ul className="list-group rounded-0">
											{Array.from({ length: 3 }, (_, index) => (
												<li
													className="list-group-item py-3 fw-light h6 border-0"
													key={index}
												>
													<div className="date">
														<span>
															<i className="fa-regular fa-clock"></i> 24, July,
															2019
														</span>
													</div>
													<h5 className="card-title">
														Why Clany's a life-saver for my flatshare!
													</h5>
												</li>
											))}
										</ul>
									</Aside>
								</div>
								{/* Aside-form */}
								<div className="col-md-12">
									<div className="Aside-form">
										<div className="text-center">
											<div>
												<img
													src={Newsletter}
													alt="Newsletter"
													className="w-25"
												/>
											</div>
											<div>
												<h3 className="text-white h5 fw-bolder">Newsletter</h3>
												<p className="gray py-3">
													Subscribe us & stay with updates
												</p>
											</div>
											<div className="">
												<div>
													<input
														type="text"
														placeholder="Enter your Email"
														className="input-field py-2"
													/>
													<button className="btn main-btn py-2 my-2">
														Subscribe
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Archives */}
								<div className="col-md-12 archives">
									<Aside title="Archives">
										<ul className="list-group rounded-0">
											{[
												"January (15)",
												"February (15)",
												"March (15)",
												"More+"
											].map((archive, index) => (
												<li
													className="list-group-item py-3 fw-light h6 border-0"
													key={index}
												>
													{archive}
												</li>
											))}
										</ul>
									</Aside>
								</div>
								{/* Tags */}
								<div className="col-md-12">
									<Aside title="Tags">
										<div className="d-flex flex-wrap">
											{[
												"Cleaner",
												"Office Cleaning",
												"Glass Cleaning",
												"Kitchen Cleaning",
												"Apartment Cleaning",
												"Floor Cleaning"
											].map((tag, index) => (
												<a
													href="#"
													className="tag-item badge text-bg-light"
													key={index}
												>
													{tag}
												</a>
											))}
										</div>
									</Aside>
								</div>
							</div>
						</div>
					</div>
					{/* Pagination */}
					<div className="container pagination mx-auto">
						<div className="btn-group mx-auto" role="group">
							{Array.from({ length: 3 }, (_, index) => (
								<button
									type="button"
									className="btn btn-primary rounded-1 mx-1"
									key={index}
									onClick={() => handlePaginationClick(index + 1)}
								>
									{index + 1}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Blog;
