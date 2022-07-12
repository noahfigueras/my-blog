import React from 'react';
import Navbar from './Navbar';
import '../../css/header.css';

const Header = () => {
	return (
		<header>
			<h1 className="center"> Noah Figueras </h1>
			<p className="center fs-700"> I surf, hack and travel </p>
			<Navbar/>
		</header>
		);
};

export default Header;
