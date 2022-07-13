import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import * as runtime from 'react/jsx-runtime.js'
import {evaluate} from '@mdx-js/mdx'

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

export default Post;
