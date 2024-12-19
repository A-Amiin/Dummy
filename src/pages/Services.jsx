import { Link } from "react-router";
import "../assets/styles/services.css";
import Card from "../components/Card/Card";
import HeadBanner from "../components/HeadBanner/HeadBanner";

export default function Services() {
	return (
		<>
			{/* <!-- banner --> */}
			<HeadBanner currPage={"Our Services"} />

			<div className="main-container">
				<section className="container py-5">
					<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-gap-4">
						{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
							<Card key={item} />
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
