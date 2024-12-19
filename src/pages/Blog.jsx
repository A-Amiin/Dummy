import React from "react";
import { Link } from "react-router";
import Card1 from "../assets/images/Blog/Blogs-card-1.jpg";
import Card2 from "../assets/images/Blog/Blogs-card-2.jpg";
import Card3 from "../assets/images/Blog/Blogs-card-3.jpg";
import Card4 from "../assets/images/Blog/Blogs-card-4.jpg";
import Card5 from "../assets/images/Blog/Blogs-card-5.jpg";
import Card6 from "../assets/images/Blog/Blogs-card-6.jpg";
import Card7 from "../assets/images/Blog/Blogs-card-7.jpg";
import Card8 from "../assets/images/Blog/Blogs-card-8.jpg";
import Newsletter from "../assets/images/Blog/Newsletter.svg";
import Aside from "../components/Aside/AsideBlog";
import HeadBanner from "../components/HeadBanner/HeadBanner";

function Blog() {
	const cards = [Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8];

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
								{Array.from({ length: 8 }, (_, index) => (
									<div className="col-md-6 mb-4 " key={index}>
										<Link to={"blog-details"}>
											<div className="card shadow hover-shadow-lg cursor-pointer hover-card transition h-100">
												<div className="card-img">
													<img
														src={cards[index]}
														className="card-img-top transition"
														alt={`Blogs-card-${index + 1}`}
													/>
												</div>
												<div className="card-body">
													<span>
														<i className="fa-solid fa-calendar-days"></i> 24,
														July, 2019
													</span>
													<h5 className="card-title">
														What is Best Domain Name for Business
													</h5>
													<span className="card-text-title">By Mark Wily</span>
													<p className="card-text">
														Some quick example text to build on the and make up
														the bulk of the card's content Lorem ipsum dolor sit
														amet consectetur adipisicing.
													</p>
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
										</Link>
									</div>
								))}
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
							{Array.from({ length: 4 }, (_, index) => (
								<button
									type="button"
									className="btn btn-primary rounded-1 mx-1"
									key={index}
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
