import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Header from '../components/header/Header';
import Posts from '../components/Posts';

const Home = () => {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch("https://api.github.com/repos/noahfigueras/my-blog/contents/blog");
			const data = await response.json();
			setPosts(data);	
		}
		fetchPosts();
	}, []);

	return (
	<div className="container">
		<Header/>
		<div className="all-posts grid ">
			{posts != null &&
				<Posts list={posts}/>	
			}
		</div>
	</div>
	);
}

export default Home;
