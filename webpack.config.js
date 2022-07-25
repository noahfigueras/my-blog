const path = require('path');

module.exports = {
	entry: ["regenerator-runtime/runtime.js",'./src/index.js'],
	output: {
		filename: 'bundle.js', 
		path: path.join(__dirname, 'public')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{ 
				test: /\.css$/i, 
				use: ['style-loader', 'css-loader']
			},
			  {
				test: /\.mdx?$/,
				use: [
				  {
					loader: '@mdx-js/loader',
					/** @type {import('@mdx-js/loader').Options} */
					options: {}
				  }
				]
			  },
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
		    }
		]
	},
	mode: 'development',
	resolve: {
		fallback: {
			url: require.resolve('url'),
		}
	}
}
