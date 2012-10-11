define(function(){


	/**
	 * EventDispatcher
	 * 
	 * @author Horacio J. Peña
	 * @license MIT/X11
	 * @link https://bitbucket.org/horape/eventdispatcher
	 */
	function EventDispatcher() {
		this.eventListeners = {};
	}

	EventDispatcher.prototype.addEventListener = function(event, closure, id) {
		if(typeof this.eventListeners[event] == 'undefined') { this.eventListeners[event] = []; }
		if(typeof id == 'undefined') {
			this.eventListeners[event].push(closure);
		} else {
			this.eventListeners[event][id] = closure;
		}
		return this;
	};

	EventDispatcher.prototype.removeEventListener = function(event, id) {
		delete this.eventListeners[event][id];
	};

	EventDispatcher.prototype.removeAllEventListeners = function(event) {
		this.eventListeners[event] = [];
	};

	EventDispatcher.prototype.trigger = function(event, obj) {
		for(var closure in this.eventListeners[event]) {
			this.eventListeners[event][closure](obj);
		}
	};

	return EventDispatcher;
	
});