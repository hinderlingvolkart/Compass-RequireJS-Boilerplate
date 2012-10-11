/*!
 * Your Application
 * Copyright 2012 Your Company
 * http://yourcompany.com/
 *
 * Authors: You and yourself
 */

requirejs.config({
	paths: {
		jquery: 'vendor/jquery'
	},
	shim: {
		'jquery': { exports: 'jQuery' },
		'app/plugins': { deps: ['jquery'] }
	}
});


require( ['jquery', 'hv/util/log', 'app/plugins'], function($, log){

	log('This is fancy fun.');

});


