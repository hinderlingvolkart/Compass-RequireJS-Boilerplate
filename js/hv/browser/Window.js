define(['jquery'],function($){

	var $w = $(window), windowWidth, windowHeight, scrollTop, scrollLeft;


	function recalc(){
		windowWidth = $w.width();
		windowHeight = $w.height();
	}

	function scroll(){
		scrollTop = $w.scrollTop();
		scrollLeft = $w.scrollLeft();
	}

	$w.resize(recalc);
	$w.scroll(scroll);
	recalc();
	scroll();

	var Window = {
		width: function() {
			return windowWidth;
		},
		height: function() {
			return windowHeight;
		},
		scrollTop: function() {
			return scrollTop;
		},
		scrollLeft: function() {
			return scrollLeft;
		},
		resize: function(){ $w.resize.apply($w, arguments); }
	};

	return Window;
});