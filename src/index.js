import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Remove Strict Mode on production build, 
// tool for highliting potential problems in an application.

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
