define(["jquery"], function($){

	var STRIP_SCRIPT = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
	var STRIP_BODY = /<body\b[^>]*>([\s\S]*?)<\/body>/gmi;

	var defaultOptions = {
		ignoreInlineScript: false
	};


	var Loader = function( options ) {
		this.options = $.extend( {}, defaultOptions, options );
		this.loading = false;
	};

	Loader.prototype.load = function( url, complete, options ) {
		var me = this;
		//this.cancel();
		options = options || {};
		options.success = function(data) {
			me.handleSuccess(data, complete);
		};

		this.loading = true;
		this.xhr = $.ajax( url, options);
	};

	Loader.prototype.isLoading = function() {
		return this.loading;
	};

	Loader.prototype.handleSuccess = function(data, callback) {
		var $Dummy = $('<div id="#body">');
		var strBody = data;

		// if we have a body tag, let's continue to work with only that one
		if ( strBody.indexOf('<body') >= 0 ) {
			strBody = data.match(STRIP_BODY)[0];
		}

		// let's get rid of all script tags (if not otherwise in options)
		if ( !this.options.ignoreInlineScript && strBody.indexOf('<script') ) {
			strBody = strBody.replace( STRIP_SCRIPT, '' );
		}

		if (callback) callback( strBody, data );

		this.xhr = null;
		this.loading = false;
	};

	Loader.prototype.cancel = function() {
		if ( this.xhr ) {
			this.xhr.abort();
			this.xhr = null;
			this.loading = false;
		}
	};

	Loader.prototype.dispose = function() {
		this.cancel();
	};

	return Loader;


});