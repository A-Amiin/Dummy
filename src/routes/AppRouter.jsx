import React from "react";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import Services from "../pages/Services";
import Booking from "../pages/Booking";
import ScrollToTop from "../routes/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../routes/Layout";
const AppRouter = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="blog" element={<Blog />} />
					<Route path="blog/:id" element={<BlogDetails />} />
					<Route path="services" element={<Services />} />
					<Route path="services/service-details" element={<ServiceDetails />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="Booking-Form" element={<Booking />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
