import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import {projectsData} from '../data/projects';

import '../css/projects.css';

const Project = ({data}) => {
	return(
		<div className="project">
			<img src={data.logo}/>
			<div> 
				<a href={data.link} target="_blank">
					<h3>{data.name}</h3>
					<p>{data.description}</p>
				</a>
			</div>
		</div>
	);
}

const Projects = () => {

	const addProjects = () => {
		for(let project of projectsData) {
			return <Project data={project}/>
		}
	}

	return(
	<div className="container">
		<Header/>
		<div id="projects-section">
			{addProjects()}
		</div>
	</div>
	);
}

export default Projects;

