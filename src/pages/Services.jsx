import { Link } from "react-router";
import "../assets/styles/services.css";
import Card from "../components/Card/Card";
import HeadBanner from "../components/HeadBanner/HeadBanner";
import { useEffect } from "react";
import { getServicesData } from "../network/servicesApis";
import { useSelector, useDispatch } from "react-redux";
export default function Services() {
	const services = useSelector((state) => {
		return state.services;
	  });
	  const dispatch = useDispatch();
	
	  useEffect(() => {
		dispatch(getServicesData())
	  }, [dispatch])

	  console.log(services.servicesData);
	return (
		<>
			{/* <!-- banner --> */}
			<HeadBanner currPage={"Our Services"} />

			<div className="main-container">
				<section className="container py-5">
					<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-gap-4">
						{services.servicesData.map((service) => (
							<Card key={service.id} service = {service} />
						))}
					</div>
				</section>
				<section className="second-section">
					<div className="container pt-5">
						<h2 className="text-capitalize fs-1">
							<b>together</b> we&apos;ll <br />
							explore <b>new things</b>
						</h2>
						<Link
							to="../Booking-Form"
							className="primary-btn text-capitalize text-decoration-none fs-6 fw-bold py-3 px-4 rounded-1"
						>
							book an appointment {">"}
						</Link>
					</div>
				</section>
			</div>
		</>
	);
}
