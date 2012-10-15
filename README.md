Compass-RequireJS-Boilerplate
=============================

A boilerplate based on HTML5 Boilerplate with Compass support added and additional RequireJS sugar.

jQuery-RequireJS merged library is from https://github.com/jrburke/require-jquery/tree/master/jquery-require-sample/webapp/scripts

This boilerplate is based on 3 main libraries: SASS, RequireJS and jQuery.

RequireJS
---------
RequireJS is a Javascript loader: you tell it to load some scripts and then execute your stuff. Basically. But why would you do this? Because you __want__ to split your huge Javascript into many sweet small junks. People will love you for that. You will love yourself for that!

Now usually you'll go with one main script and many additions.

In HTML:

	<script data-main="../js/main.js" src="../js/vendor/require.js"></script>

This will load require.js, then RequireJS takes over, loads "../js/main.js" and executes it. In main. js we will say what we need for our main app to start:

	require(['jquery','app/FirstModule'], function($,FirstModule){
		$(function(){
			FirstModule.init();
		});
	});

So we load jQuery and FirstModule.js (in js/app) and then execute the script. If you ever had to deal with any C++-like language, just think of imports, and you'll get the idea.

Modules will always return an object. That's the main difference to the main script. And therefore we won't use "require", but "define":

	define(['app/SecondModule'], function(SecondModule){
		var helper;
		var Me = { init: function() {
			helper = SecondModule.createHelper();
		};
		return Me;
	});

You can return __any__ object (function, singleton, class, data etc.), but singletons or classes make most sense usually.

* * *

Probably the most beneficiary of all libraries we've met for a while. It'll help you get rid of the Javascript mess – this library has become a __must__ for us.



SASS
----

SASS adds a lot of power to CSS. If you want to use cutting-edge CSS to style your website, you'll end up with quite a lot of rules and styles. Just think of all the prefixes you'll have to write over and over again!

Nested rules, variables, mixins (kind of templates) help you to better organize your CSS, to write less and to end up with better maintainability.

Please read more about SASS here: [http://sass-lang.com/](http://sass-lang.com/)

The downside of SASS is that it's not a standard, and that you'll need something to convert it to CSS. Gladly that's an easy task (see [here](#tools)). Still, to be future proof we __always__ commit the resulting CSS to our repository.

jQuery
------

Well, if we have to tell you anything about jQuery, then you're really at the wrong place ;-) One thing only: If you don't need it, don't use it.


<a id="tools"/>
Tools
-----
There are many great tools out there that will help you with tedious tasks. The one most important might be: [Install node.js and the node package manager](http://nodejs.org/download/).

Anyway, there's a GUIy thing that helps us a lot: [LiveReload](http://livereload.com/) – download, install and you're good to go. Don't forget the browser plugins which are especially helpful for CSS styling (live preview!).

Our editor of choice is [Sublime Text](http://www.sublimetext.com/). It might seem a bit confusing (where's my UI??!), but it's worth the little digging. Just don't forget to install [Sublime Package Control](http://wbond.net/sublime_packages/package_control)
