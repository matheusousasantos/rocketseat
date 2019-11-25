module.exports = {
	entry: './src/main.js', //Mova pasta raiz
	output: {
		path: __dirname + '/public', //Vai jogar o bundle para o public
		filename: 'bundle.js',
	},

	devServer: {
		contentBase: __dirname + '/public'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader', 
				}
			}
		],
	}
}