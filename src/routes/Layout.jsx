import React from "react";
import { Outlet } from "react-router";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

export default function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
