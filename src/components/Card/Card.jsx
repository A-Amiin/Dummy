
import { Link } from "react-router";
import cleanIcon from "../../assets/images/clean-icon.png"
function Card({service}) {
	return (
		<div className="col">
			<div className="card">
				<div className="icon-container position-absolute">
					<img src={cleanIcon} alt="clean icon" />
				</div>
				<Link to="service-details" className="text-decoration-none text-center">
					<img src={service.image} alt="" className="card-img" />
					<p className="text-capitalize">{service.role}</p>
				</Link>
			</div>
		</div>
	);
}

export default Card;
