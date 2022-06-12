import React from 'react';
import ReactDOM from 'react-dom';
import {
	  BrowserRouter,
	  Routes,
	  Route,
} from "react-router-dom";
import './css/retro.css';
import './css/index.css';
import 'regenerator-runtime/runtime'
import {Home, Post} from './components/Home';

// Remove Strict Mode on production build, 
// tool for highliting potential problems in an application.

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path=":postId" element={<Post />} />
			</Routes>
	  </BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
