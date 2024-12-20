import React, { useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import figure_latest_blogs from "../../assets/images/figure1.png";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogDetails } from "../../network/blogApis";
import BlogCard from "../BlogCard/BlogCard";

function LatestBlogs() {
	const blogsList = useSelector((state) => {
		return state.Blog;
	});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchBlogDetails({ page: 1, limit: 3 }));
	}, [dispatch]);

	return (
		<section className="latest_blogs position-relative py-5">
			<div className="container">
				<SectionTitle
					imgSrc={figure_latest_blogs}
					title="Our Latest Blogs"
					wrapper="latest_blogs"
					colorHeading="heading_primary_blue"
					colorParagraph="regular-paragraph"
				/>
				<div className="row mt-5 blog-card">
					{Array.isArray(blogsList.blogDetails) &&
					blogsList.blogDetails.length > 0 ? (
						blogsList.blogDetails.map((blog) => (
							<div className="col-md-4 mb-4" key={blog.id}>
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
						<p>No blogs available at the moment. Please check back later.</p>
					)}
				</div>
			</div>
		</section>
	);
}

export default LatestBlogs;
