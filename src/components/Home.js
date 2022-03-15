import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import * as runtime from 'react/jsx-runtime.js'
import Example from './blog/example.mdx'
import {evaluate} from '@mdx-js/mdx'

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
	const [content, setContent] = useState(null);

	useEffect(() => {
		// Get Post
		const post = async () => {
			const response = await fetch("https://raw.githubusercontent.com/noahfigueras/my-blog/master/src/components/example.mdx");
			const data = await response.text();
			setContent(await evaluate(data, {...runtime}));
		}
		post();
	}, []);

	return content != null ? content.default() : null;
}

const Home = () => {
	const meta_posts = [
		{
			title: "post1",
			date: "02/20/2022"
		},
		{
			title: "post2",
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
