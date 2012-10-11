define(
	['jquery'],
	function($){

		$(document).on('click', 'a', function(event){
			var $target = $(event.currentTarget);
			var href = $target.attr('href');
			if ( href.indexOf('#') === 0 ) {
				event.preventDefault();

				// find element
				var $anchor = $(href);
				if ( $anchor.length === 0 ) {
					console.log('Anchor "'+ href + '" not found.');
					return;
				}

				var offset = $anchor.offset().top;
				$('html, body').animate({ scrollTop: offset }, 500 );
			}
		});

	}
);