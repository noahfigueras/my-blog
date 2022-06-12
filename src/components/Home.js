import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import * as runtime from 'react/jsx-runtime.js'
import {evaluate} from '@mdx-js/mdx'

const Posts = ({list}) => {
	const [posts, setPosts] = useState([]);

	const getDate = (name) => {
		const i = name.indexOf("--");
		return name.slice(i+2).replace(".mdx", "");
	}
	
	const getTitle = async (name) => {
		try {
			const response = await fetch(`https://raw.githubusercontent.com/noahfigueras/my-blog/master/blog/${name}`);
			const data = await response.text();
			return data.slice(0,data.indexOf("  ")).replace("# ", "");
		} catch(err) {
			console.log(err)
		}
	}

	useEffect(() => {
		const getPosts = async () => {
			try{
				for (let post of list) {
					const date = getDate(post.name);
					const title = await getTitle(post.name);
					const element = (
						<div className="single-post">
							<span className="post-date">{date}</span>	
							<h3><Link to={post.name}>{title}</Link></h3>
						</div>
						);
					setPosts(oldArray => [...oldArray, element]);
				}
			} catch(err) {
				console.log(err)
			}
		}
		getPosts()
	},[])
	return posts.length < 1 ? null : posts;
}

const Post = () => {
	const params = useParams();
	const [content, setContent] = useState(null);

	useEffect(() => {
		// Get Post
		const post = async () => {
			const response = await fetch(`https://raw.githubusercontent.com/noahfigueras/my-blog/master/blog/${params.postId}`);
			const data = await response.text();
			setContent(await evaluate(data, {...runtime}));
		}
		post();
	}, []);

	return content != null ? content.default() : null;
}

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
		<header>
			<h1 className="center"> Noah Figueras </h1>
			<p className="center fs-700"> I surf, hack and travel </p>
			<hr />
		</header>
			<div className="all-posts grid ">
				{posts != null &&
					<Posts list={posts}/>	
				}
			</div>
	</div>
	);
}


export {Home, Post};
