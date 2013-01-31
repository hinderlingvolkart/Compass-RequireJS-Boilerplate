/*!
 * Your Application
 * Copyright 2012 Your Company
 * http://yourcompany.com/
 *
 * Authors: You and yourself
 */

requirejs.config({
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
	}
});


require( ['jquery', 'hv/util/log', 'app/plugins'], function($, log){

	log('This is fancy fun.');

});


