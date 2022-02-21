import React from 'react';

const Posts = ({list}) => {
	
	const posts = [];

	for (let post of list) {
		posts.push(
			<div className="single-post">
				<span className="post-date text-accent">{post.date}</span>	
				<h3><a href={post.title}>{post.title}</a></h3>
			</div>
		)
	}
	return posts;
}

const App = () => {
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

export default App;
