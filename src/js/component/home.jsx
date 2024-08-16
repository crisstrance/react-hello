import React from "react";
import ImageGrid from './grid.jsx';

//include images into your bundle
import wcs from "../../img/wcs.png";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-2 text-light" >Hello Geeks!</h1>
			<div className="d-flex justify-content-center">
				<ImageGrid />
				{/* Otras secciones de tu página */}
			</div>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p className="text-light">
				Made by{" "}
				<a href="#">Cristian Aravena</a>!
			</p>
		</div>
	);
};

export default Home;
