import React from 'react';
import { Link, useParams } from "react-router-dom";
import Example from './example.mdx'

const Posts = ({list}) => {
	
	const posts = [];

	for (let post of list) {
		posts.push(
			<div className="single-post">
				<span className="post-date text-accent">{post.date}</span>	
				<h3><Link to={post.title}>{post.title}</Link></h3>
			</div>
		)
	}
	return posts;
}

const Post = () => {
	const params = useParams();
	return <Example title={params.postId}/>;
}

const Home = () => {
	const meta_posts = [
		{
			title: "All you need to know to pass the Comptia Security +",
			date: "02/20/2022"
		},
		{
			title: "Backpackig 4 days through the island of Maui - Hawaii",
			date: "02/18/2022"
		}
	];
	return (
	<div className="container">
			<h1 className="center"> Noah Figueras's Website </h1>
			<hr/>
			<div className="all-posts grid">
				<Posts list={meta_posts}/>	
			</div>
	</div>
	);
}


export {Home, Post};
