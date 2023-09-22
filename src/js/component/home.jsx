import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = (props) => {
	console.log(props)
	return (
		<div className="container mt-4 bg-dark p-0">
			<div className="text-center d-flex justify-content-center box-color">
				<h1 className="p-5 m-2 bg-dark text-light rounded-5 display-5 number-size"><FontAwesomeIcon icon={faClock} /></h1>
				<h1 className="p-5 m-2 bg-dark text-light rounded-5 display-5 number-size">{props.six}</h1>
				<h1 className="p-5 m-2 bg-dark text-light rounded-5 display-5 number-size">{props.five}</h1>
				<h1 className="p-5 m-2 bg-dark text-light rounded-5 display-5 number-size">{props.four}</h1>
				<h1 className="p-5 m-2 bg-dark text-light rounded-5 display-5 number-size">{props.three}</h1>
				<h1 className="p-5 m-2 bg-dark text-light rounded-5 display-5 number-size">{props.two}</h1>
				<h1 className="p-5 m-2 bg-dark text-light rounded-5 display-5 number-size">{props.one}</h1>
			</div>
		</div>
	);
};

export default Home;
