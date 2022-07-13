import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

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

export default Posts;
