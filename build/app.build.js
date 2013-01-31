({
	appDir: "../js-temp/",
	baseUrl: "./",
	dir: "../js-optimized",
	optimize: "uglify",


	paths: {
		jquery: 'vendor/jquery',
		backbone: 'vendor/backbone',
		underscore: 'vendor/underscore',
		tpl: 'vendor/require/tpl'
	},

	shim: {
		'jquery': { exports: 'jQuery' },
		'underscore': { exports: '_' },
		'backbone': { exports: 'Backbone', deps: ['underscore','jquery'] },
		'app/plugins': { deps: ['jquery'] }
	},
	
	modules: [
		{
			name: 'main'
		}
	]
})