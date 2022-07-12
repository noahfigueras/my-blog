import React, {useEffect} from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

	useEffect(() => {
		const setActiveTab = () => {
			const route = window.location.pathname;
			const ul = document.getElementById("navbar");
			for(let child = 0; child < ul.children.length; child++) {
				const href = ul.children[child].firstChild.attributes.href.value;
				if(route === href) {
					ul.children[child].classList.add('active');
				}
			}
		}
		setActiveTab();
	});
	
	return (
		<div class="container-spacer">
			<ul id="navbar">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/projects">Projects</Link></li>
			</ul>
		</div>
	);
}

export default Navbar;
