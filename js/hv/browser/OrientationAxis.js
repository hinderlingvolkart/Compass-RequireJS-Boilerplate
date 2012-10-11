define(
	['util/EventDispatcher'],
	function(EventDispatcher){

		var AXIS_TABLE = {
			landscape: {
				x: 'gamma',
				y: 'beta',
				z: 'alpha'
			},
			portrait: {
				x: 'beta',
				y: 'gamma',
				z: 'alpha'
			}
		};

		var precision = 1000;
		var values = { x:0 , y: 0, z: 0 };
		



		var Axis = new EventDispatcher();

		Axis.available = function() {
			return 'ondeviceorientation' in window;
		};

		Axis.setPrecision = function( value ) {
			precision = 1/value;
		};

		Axis.get = function(key) {
			return values[key];
		};

		var update = function(e) {
			var axis, angle, changed;
			for ( var i in values ) {
				axis = AXIS_TABLE[Axis.orientation][i];
				angle = e[axis];
				if ( Math.round(angle*precision) != Math.round(values[i]*precision) ) {
					changed = true;
					values[i] = Math.round(angle*precision) / precision;
					Axis.trigger('change'+i, angle);
				}
			}
			if ( changed ) {
				Axis.trigger('change', values);
			}
		};

		var updateOrientation = function(e) {
			Axis.orientation = window.orientation === 0 ? 'portrait' : 'landscape';
		};

		if ( Axis.available() ) {
			updateOrientation();
			window.addEventListener('orientationchange', updateOrientation, false);
			window.addEventListener('deviceorientation', update, false);
		}
		


		return Axis;

	}
);