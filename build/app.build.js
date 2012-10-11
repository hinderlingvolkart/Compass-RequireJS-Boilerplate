({
	appDir: "../js-temp/",
	baseUrl: "./",
	dir: "../js-optimized",
	//Comment out the optimize line if you want
	//the code minified by UglifyJS
	optimize: "uglify",


	paths: {
		jquery: 'vendor/jquery'
	},

	
	modules: [
		{
			name: 'main'
		}
	]
})
