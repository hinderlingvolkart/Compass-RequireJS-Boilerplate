({
	appDir: "../js-temp/",
	baseUrl: "./",
	dir: "../js-optimized",
	//Comment out the optimize line if you want
	//the code minified by UglifyJS
	optimize: "uglify",

	paths: {
		"jquery": "require-jquery"
	},

	modules: [
	//Optimize the require-jquery.js file by applying any minification
	//that is desired via the optimize: setting above.
	{
		name: "require-jquery",
		override: {
			optimize: 'uglify'
		}
	},

	//Optimize the application files. Exclude jQuery since it is
	//included already in require-jquery.js
	{
		name: "main",
		exclude: ["jquery"],
		override: {
			optimize: 'none'
		}
	}]
})
