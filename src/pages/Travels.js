import React from 'react';
import Map from '../assets/054World_map_dot_B.svg';
import Header from '../components/header/Header';

const Travels = () => {
	return(
	<div className="container">
		<Header/>
		<div id="map">
			<img src={Map} alt="Dotted World Map"/>
		</div>
	</div>
	);
}

export default Travels;

