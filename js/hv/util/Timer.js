define(['hv/animation/AnimationFrame'], function(AnimationFrame){

	var items = {};
	var counter = 0;
	var active = false;
	var timer;

	function now() {
		return new Date().getTime();
	}

	function check() {
		var item;
		var time = now();
		for ( var id in items ) {
			item = items[id];
			if ( time >= (item.time + item.delay) ) {
				if ( item.repeat ) {
					item.repeat--;
					if ( item.repeat === 0 ) {
						T.remove(id);
					} else {
						item.time += item.delay;
					}
				} else {
					remove(id);
				}
				if ( item.callback ) item.callback();
			}
		}
	}

	function add( callback, delay, repeat ) {
		counter++;
		items[counter] = new Item( callback, delay, repeat || 0 );
		activate();
		return counter;
	}

	function remove( id ) {
		delete items[id];
		if ( !hasItems() ) {
			disable();
		}
	}

	function hasItems() {
		for ( var id in items ) {
			return true;
		}
		return false;
	}

	function activate() {
		if ( !active ) {
			timer = AnimationFrame.request(animFrameLoop);
			if ( 'ontouchstart' in window ) document.addEventListener('touchmove', check, false);
			active = true;
		}
	}

	function disable() {
		if ( active ) {
			AnimationFrame.cancel(timer);
			if ( 'ontouchstart' in window ) document.removeEventListener('touchmove', check, false);
			active = false;
		}
	}

	function animFrameLoop() {
		check();
		timer = AnimationFrame.request(animFrameLoop);
	}

	var T = {
		add: add,
		interval: function(callback, delay, repeat) { return add(callback, delay, repeat||-1); },
		remove: remove,
		tick: check
	};


	function Item( callback, delay, repeat ) {
		this.time = now();
		this.delay = delay;
		this.end = this.time + this.delay;
		this.callback = callback;
		this.repeat = repeat;
	}

	return T;

});