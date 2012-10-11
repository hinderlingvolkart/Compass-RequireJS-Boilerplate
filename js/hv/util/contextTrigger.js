/*
 * contextTrigger
 *
 * Binds fonctions to a certain context that is defined by a DOM Element.
 *
 * Usage:
 *
 * contextTrigger.add( triggerSelector,callback );
 *
 * contextTrigger.run( contextSelector,func );
 *
 * contextSelector & func are optional. The function is used as namespace
 * and can be passed as argument to run only this function.
 * ContextSelector defines the context where to look for the triggerSelector
 * by default the context is the document body.
 *
 * ---------------------------------------------------------------------------
 *
 * Example:
 *
 * contextTrigger.add("#main", function(){
 *
 *  require(['util/Frameplayer'], function(F){
 *    console.log(F);
 *  });
 *
 * });
 *
 * After some ajax calls maybe:
 *
 * contextTrigger.run();
 *
 * Todo: Optional Name Spaceing (dont forget to adapt the remove method)
 *
 */

define(["jquery"],function() {

	var contextTrigger;

	contextTrigger = {
		events: {}
	};

	contextTrigger.add = function( selector,func ){

		if( !contextTrigger.events[ selector ] ){
			contextTrigger.events[ selector ] = [];
		}

		contextTrigger.events[ selector ].push( func );
		contextTrigger.run( selector,func );

	};

	contextTrigger.remove = function( selector,func ){
		if( !contextTrigger.events[selector] ){
			return false;
		}

		if( !func ){
			contextTrigger.events[selector] = null;
		}else{
			for( var evnt in contextTrigger.events[selector] ){
				if( contextTrigger.events[selector][evnt] === func){
					contextTrigger.events[selector][evnt] = null;
				}
			}
		}
	};

	contextTrigger.run = function( context,func ){
		context = context || "body";

		var callback,$context = $( context );

		callback = function(){
			contextTrigger.events[selector][evnt].call( this );
		};

		if( !$context.length ){
			return false;
		}

		for( var selector in contextTrigger.events ){

			var $selector = $context.is(selector) ? $context : $context.find( selector );

			if( $selector.length ){
				for( var evnt in contextTrigger.events[selector] ) {
					if( func && contextTrigger.events[selector][evnt] !== func ){
						return false;
					}

					$selector.each(callback);
				}
			}
		}
	};

	return contextTrigger;

});