// import "../../assets/styles/services.css"
import { Link } from "react-router";

function Card() {
	return (
		<div className="col">
			<div className="card">
				<div className="icon-container position-absolute">
					<img src alt="clean icon" />
				</div>
				<Link to="service-details" className="text-decoration-none text-center">
					<img src="assets/images/clean.jpg" alt="" className="card-img" />
					<p className="text-capitalize">office cleaning</p>
				</Link>
			</div>
		</div>
	);
}

export default Card;
