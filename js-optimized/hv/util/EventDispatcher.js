/**
	 * EventDispatcher
	 * 
	 * @author Horacio J. Peña
	 * @license MIT/X11
	 * @link https://bitbucket.org/horape/eventdispatcher
	 */

define([],function(){function e(){this.eventListeners={}}return e.prototype.addEventListener=function(e,t,n){return typeof this.eventListeners[e]=="undefined"&&(this.eventListeners[e]=[]),typeof n=="undefined"?this.eventListeners[e].push(t):this.eventListeners[e][n]=t,this},e.prototype.removeEventListener=function(e,t){delete this.eventListeners[e][t]},e.prototype.removeAllEventListeners=function(e){this.eventListeners[e]=[]},e.prototype.trigger=function(e,t){for(var n in this.eventListeners[e])this.eventListeners[e][n](t)},e})