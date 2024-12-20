import Aside from "../components/Aside/AsideBlog";
import "../assets/styles/blog-details.css";
import man1 from "../assets/images/blog-details/man-1.jpg";
import cleaning1 from "../assets/images/blog-details/cleaning1.avif";
import cleaning2 from "../assets/images/blog-details/cleaning2.avif";
import woman1 from "../assets/images/blog-details/woman-1.jpeg";
import woman2 from "../assets/images/blog-details/woman-2.jpeg";
import NewsLetter from "../assets/images/Blog/Newsletter.svg";
import HeadBanner from "../components/HeadBanner/HeadBanner";
import { useParams } from "react-router";
import { useEffect } from "react";
import { fetchSingleBlog } from "../network/blogApis";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

export default function BlogDetails() {
	const location = useLocation();
	const segments = location.pathname.split("/");
	const { id } = useParams();
	const dispatch = useDispatch();
	const selectedBlog = useSelector((state) => {
		return state.Blog;
	});

	const { image, author, date, role, ...rest } = selectedBlog.blogDetails;

	useEffect(() => {
		dispatch(fetchSingleBlog(id));
	}, [dispatch, id]);

	return (
		<>
			{/* <!-- banner --> */}
			<HeadBanner prevPage={segments[1]} currPage={role} />

			<div className="main-cont">
				<div className="container my-5">
					<div className="row">
						<div className="col-lg-8">
							<div>
								<article>
									<div className="image">
										<img
											src={image}
											className="rounded"
											width="100%"
											alt="Blog Detail"
										/>
									</div>
									<div className="date my-3">
										<i className="fa-solid fa-calendar-days"></i>
										<span className="ms-2">{date}</span>
									</div>
									<header>
										<h3 className="fw-bold blog-heading">{role}</h3>
										<div className="rate d-flex my-3">
											<div className="author d-flex align-items-center people">
												<img src={man1} alt="Author" className="mx-3" />
												<span>{author}</span>
											</div>
											<div className="likes d-flex align-items-center ms-3">
												<i className="fa-solid fa-heart"></i>
												<span className="text-dark fw-bolder ms-1">
													06 Likes
												</span>
											</div>
											<div className="comments d-flex align-items-center ms-3">
												<i className="fa-solid fa-comment"></i>
												<span className="text-dark fw-bolder ms-1">
													02 Comments
												</span>
											</div>
										</div>
									</header>
									<hr />
									<p className="my-3">
										Cagna aliqua. Ut enim ad minim veniam, quis nostrud
										exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor in reprehenderit in
										voluptate velit esse cillum dolore eu fugiat nulla pariatur.
										Excepteur sint occaecat cupidatat non proident, sunt in
										culpa qui officia deserunt mollit anim id est laborum. Sed
										ut perspiciatis unde omnis iste natus error sit voluptatem
										accusantium doloremque laudantium, totam rem aperiam, eaque
										ipsa quae ab illo invery.
									</p>
									<blockquote className="mess w-75 h-75 p-5 ms-5 rounded">
										<q>
											Aimply dummy text of the printing and ustryorem Ipsum has
											been the industry's standard dummy text ever since
										</q>
										<div className="name position-relative mt-3 ms-2">
											<span className="ms-4">Jessica Mcdade</span>
										</div>
									</blockquote>
									<p className="my-4">
										Cagna aliqua. Ut enim ad minim veniam, quis nostrud
										exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor in reprehenderit in
										voluptate velit esse cillum dolore eu fugiat nulla pariatur.
										Excepteur sint occaecat cupidatat non proident, sunt in
										culpa qui officia deserunt mollit anim id est laborum. Sed
										ut perspiciatis unde omnis iste natus errore.
									</p>
									<div className="tags d-flex justify-content-between">
										<div className="left">
											<p className="mb-2">Related Tags:</p>
											<p>Business, Corporate, Agency</p>
										</div>
										<div className="right">
											<p className="mb-2">Share:</p>
											<div className="icon">
												<i className="fa-brands fa-facebook me-2"></i>
												<i className="fa-brands fa-twitter me-2"></i>
												<i className="fa-brands fa-linkedin-in me-2"></i>
												<i className="fa-brands fa-google-plus-g me-2"></i>
												<i className="fa-brands fa-pinterest me-2"></i>
												<i className="fa-brands fa-vimeo-v me-2"></i>
											</div>
										</div>
									</div>
									<div className="mess p-5 rounded my-5">
										<div className="row">
											<div className="col-md-2">
												<img src={woman1} alt="Author" />
											</div>
											<div className="col-md-10">
												<h5>Dainel Rose</h5>
												<p className="my-2">Author</p>
												<div className="icon mb-2">
													<i className="fa-brands fa-facebook me-2"></i>
													<i className="fa-brands fa-twitter me-2"></i>
													<i className="fa-brands fa-linkedin-in me-2"></i>
													<i className="fa-brands fa-google-plus-g me-2"></i>
												</div>
												<p>
													Cagna aliqua. Ut enim ad minim veniam, quis nostrud
													exercitation ullamcry ut aliquip ex ea commodo
													consequat. Duis aute irure dolor in reprehenderit
													voluptate velit esse cillum dolore eu fugiat nulla
													pariatur.
												</p>
											</div>
										</div>
									</div>
									<div className="parts my-5">
										<div className="row d-flex">
											<div className="col-md-6 d-flex">
												<img src={cleaning1} alt="Previous Post" />
												<div className="data mx-3">
													<p className="mb-2">How an Island Forms and Stones</p>
													<span>
														<i className="fa-regular fa-clock mr-1"></i>
														July 15, 2019
													</span>
													<span className="d-block mt-3">
														<i className="fa-solid fa-angle-left mr-1"></i>
														Previous Post
													</span>
												</div>
											</div>
											<div className="col-md-6 d-flex">
												<div className="data mx-3 text-right">
													<p className="mb-2">How an Island Forms and Stones</p>
													<span>
														<i className="fa-regular fa-clock mr-1"></i>
														July 15, 2019
													</span>
													<span className="d-block mt-3">
														Next Post
														<i className="fa-solid fa-angle-right mr-1"></i>
													</span>
												</div>
												<img src={cleaning2} alt="Next Post" />
											</div>
										</div>
									</div>
									<div className="mess p-5 rounded my-5">
										<div className="title position-relative">
											<h6 className="ms-3">(02) Discussion</h6>
										</div>
										<div className="row my-4">
											<div className="col-md-2">
												<img src={woman2} alt="Commenter" />
											</div>
											<div className="col-md-10">
												<div className="d-flex justify-content-between">
													<div>
														<h6>Maria Jaman</h6>
														<p>May 29, 2015</p>
													</div>
													<span>Reply</span>
												</div>
												<p className="my-3">
													Ahen an unknown printer took a galley of type and
													scrambled it to make a type specimen book. It has
													survived not only five centuries.
												</p>
											</div>
										</div>
										<div className="row my-4">
											<div className="col-md-2">
												<img src={man1} alt="Commenter" />
											</div>
											<div className="col-md-10">
												<div className="d-flex justify-content-between">
													<div>
														<h6>Maria Jaman</h6>
														<p>May 29, 2015</p>
													</div>
													<span>Reply</span>
												</div>
												<p className="my-3">
													Ahen an unknown printer took a galley of type and
													scrambled it to make a type specimen book. It has
													survived not only five centuries.
												</p>
											</div>
										</div>
									</div>
									{/* Comment Form */}
									<div className="post border p-5 rounded my-4">
										<div className="title position-relative">
											<h5 className="ms-3">Leave a Reply</h5>
										</div>
										<form action="" className="mt-4">
											<div className="row">
												<div className="col-md-6 my-2">
													<input
														type="text"
														className="form-control py-4"
														placeholder="Name * "
														name="name"
														required
													/>
												</div>
												<div className="col-md-6 my-2">
													<input
														type="email"
														className="form-control py-4"
														placeholder="E-mail *"
														name="email"
														required
													/>
												</div>
											</div>
											<div className="row">
												<div className="col-md-12 my-3">
													<input
														type="text"
														className="form-control py-4"
														placeholder="Website *"
														name="web"
													/>
												</div>
											</div>
											<textarea
												name="comments"
												placeholder="Comment *"
												className="form-control py-3"
												rows="6"
												required
											></textarea>
											<button type="submit" className="py-3 px-5 mt-3 btn">
												Post Comment
											</button>
										</form>
									</div>
								</article>
							</div>
						</div>

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

								<div className="col-md-12">
									<div className="Aside-form">
										<div className="text-center">
											<div>
												<img
													src={NewsLetter}
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

								<div className="col-md-12">
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
				</div>
			</div>
		</>
	);
}
