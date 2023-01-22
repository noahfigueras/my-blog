import React from 'react';
import Header from '../components/header/Header';
import Map from '../components/Map';

const Travels = () => {
	const visitedCountries = [
		"usa",
		"mexico",
		"spain",
		"finland",
		"oahu",
		"kauai",
		"kahului",
		"morocco",
		"italy",
		"france",
		"switzerland",
		"czech",
		"burma",
		"thailand",
		"germany",
		"belgium",
		"netherlands",
    "gran canaria",
    "portugal"
	];

	return(
	<div className="container">
		<Header/>
		<div id="map">
			<Map countries={visitedCountries}/>
		</div>
	</div>
	);
}

export default Travels;

