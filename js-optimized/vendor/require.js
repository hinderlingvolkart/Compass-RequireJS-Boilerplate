/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.0 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */

var requirejs,require,define;(function(global){function isFunction(e){return ostring.call(e)==="[object Function]"}function isArray(e){return ostring.call(e)==="[object Array]"}function each(e,t){if(e){var n;for(n=0;n<e.length;n+=1)if(e[n]&&t(e[n],n,e))break}}function eachReverse(e,t){if(e){var n;for(n=e.length-1;n>-1;n-=1)if(e[n]&&t(e[n],n,e))break}}function hasProp(e,t){return hasOwn.call(e,t)}function eachProp(e,t){var n;for(n in e)if(e.hasOwnProperty(n)&&t(e[n],n))break}function mixin(e,t,n,r){return t&&eachProp(t,function(t,i){if(n||!hasProp(e,i))r&&typeof t!="string"?(e[i]||(e[i]={}),mixin(e[i],t,n,r)):e[i]=t}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),function(e){t=t[e]}),t}function makeError(e,t,n,r){var i=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);return i.requireType=e,i.requireModules=r,n&&(i.originalError=n),i}function newContext(e){function d(e){var t,n;for(t=0;e[t];t+=1){n=e[t];if(n===".")e.splice(t,1),t-=1;else if(n===".."){if(t===1&&(e[2]===".."||e[0]===".."))break;t>0&&(e.splice(t-1,2),t-=2)}}}function v(e,t,n){var r,i,s,u,a,f,l,c,h,p,v,m=t&&t.split("/"),g=m,y=o.map,b=y&&y["*"];e&&e.charAt(0)==="."&&(t?(o.pkgs[t]?g=m=[t]:g=m.slice(0,m.length-1),e=g.concat(e.split("/")),d(e),i=o.pkgs[r=e[0]],e=e.join("/"),i&&e===r+"/"+i.main&&(e=r)):e.indexOf("./")===0&&(e=e.substring(2)));if(n&&(m||b)&&y){u=e.split("/");for(a=u.length;a>0;a-=1){l=u.slice(0,a).join("/");if(m)for(f=m.length;f>0;f-=1){s=y[m.slice(0,f).join("/")];if(s){s=s[l];if(s){c=s,h=a;break}}}if(c)break;!p&&b&&b[l]&&(p=b[l],v=a)}!c&&p&&(c=p,h=v),c&&(u.splice(0,h,c),e=u.join("/"))}return e}function m(e){isBrowser&&each(scripts(),function(t){if(t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===r.contextName)return t.parentNode.removeChild(t),!0})}function g(e){var t=o.paths[e];if(t&&isArray(t)&&t.length>1)return m(e),t.shift(),r.require.undef(e),r.require([e]),!0}function y(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function b(e,t,n,i){var s,o,u,a,f=null,c=t?t.name:null,d=e,m=!0,g="";return e||(m=!1,e="_@r"+(h+=1)),a=y(e),f=a[0],e=a[1],f&&(f=v(f,c,i),o=l[f]),e&&(f?o&&o.normalize?g=o.normalize(e,function(e){return v(e,c,i)}):g=v(e,c,i):(g=v(e,c,i),a=y(g),f=a[0],g=a[1],n=!0,s=r.nameToUrl(g))),u=f&&!o&&!n?"_unnormalized"+(p+=1):"",{prefix:f,name:g,parentMap:t,unnormalized:!!u,url:s,originalName:d,isDefine:m,id:(f?f+"!"+g:g)+u}}function w(e){var t=e.id,n=u[t];return n||(n=u[t]=new r.Module(e)),n}function E(e,t,n){var r=e.id,i=u[r];hasProp(l,r)&&(!i||i.defineEmitComplete)?t==="defined"&&n(l[r]):w(e).on(t,n)}function S(e,t){var n=e.requireModules,r=!1;t?t(e):(each(n,function(t){var n=u[t];n&&(n.error=e,n.events.error&&(r=!0,n.emit("error",e)))}),r||req.onError(e))}function x(){globalDefQueue.length&&(apsp.apply(f,[f.length-1,0].concat(globalDefQueue)),globalDefQueue=[])}function T(e){delete u[e]}function N(e,t,n){var r=e.map.id;e.error?e.emit("error",e.error):(t[r]=!0,each(e.depMaps,function(r,i){var s=r.id,o=u[s];o&&!e.depMatched[i]&&!n[s]&&(t[s]?(e.defineDep(i,l[s]),e.check()):N(o,t,n))}),n[r]=!0)}function C(){var e,n,i,a,f=o.waitSeconds*1e3,l=f&&r.startTime+f<(new Date).getTime(),c=[],h=[],p=!1,d=!0;if(t)return;t=!0,eachProp(u,function(t){e=t.map,n=e.id;if(!t.enabled)return;e.isDefine||h.push(t);if(!t.error)if(!t.inited&&l)g(n)?(a=!0,p=!0):(c.push(n),m(n));else if(!t.inited&&t.fetched&&e.isDefine){p=!0;if(!e.prefix)return d=!1}});if(l&&c.length)return i=makeError("timeout","Load timeout for modules: "+c,null,c),i.contextName=r.contextName,S(i);d&&each(h,function(e){N(e,{},{})}),(!l||a)&&p&&(isBrowser||isWebWorker)&&!s&&(s=setTimeout(function(){s=0,C()},50)),t=!1}function k(e){w(b(e[0],null,!0)).init(e[1],e[2])}function L(e,t,n,r){e.detachEvent&&!isOpera?r&&e.detachEvent(r,t):e.removeEventListener(n,t,!1)}function A(e){var t=e.currentTarget||e.srcElement;return L(t,r.onScriptLoad,"load","onreadystatechange"),L(t,r.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}var t,n,r,i,s,o={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{}},u={},a={},f=[],l={},c={},h=1,p=1;return i={require:function(e){return e.require?e.require:e.require=r.makeRequire(e.map)},exports:function(e){e.usingExports=!0;if(e.map.isDefine)return e.exports?e.exports:e.exports=l[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return o.config&&o.config[e.map.id]||{}},exports:l[e.map.id]}}},n=function(e){this.events=a[e.id]||{},this.map=e,this.shim=o.shim[e.id],this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},n.prototype={init:function(e,t,n,r){r=r||{};if(this.inited)return;this.factory=t,n?this.on("error",n):this.events.error&&(n=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=n,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check()},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(this.fetched)return;this.fetched=!0,r.startTime=(new Date).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();r.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()}))},load:function(){var e=this.map.url;c[e]||(c[e]=!0,r.load(this.map.id,e))},check:function(){if(!this.enabled||this.enabling)return;var e,t,n=this.map.id,i=this.depExports,s=this.exports,o=this.factory;if(!this.inited)this.fetch();else if(this.error)this.emit("error",this.error);else if(!this.defining){this.defining=!0;if(this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error)try{s=r.execCb(n,o,i,s)}catch(a){e=a}else s=r.execCb(n,o,i,s);this.map.isDefine&&(t=this.module,t&&t.exports!==undefined&&t.exports!==this.exports?s=t.exports:s===undefined&&this.usingExports&&(s=this.exports));if(e)return e.requireMap=this.map,e.requireModules=[this.map.id],e.requireType="define",S(this.error=e)}else s=o;this.exports=s,this.map.isDefine&&!this.ignore&&(l[n]=s,req.onResourceLoad&&req.onResourceLoad(r,this.map,this.depMaps)),delete u[n],this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}},callPlugin:function(){var e=this.map,t=e.id,n=b(e.prefix);this.depMaps.push(n),E(n,"defined",bind(this,function(n){var i,s,a,f=this.map.name,l=this.map.parentMap?this.map.parentMap.name:null,c=r.makeRequire(e.parentMap,{enableBuildCallback:!0,skipMap:!0});if(this.map.unnormalized){n.normalize&&(f=n.normalize(f,function(e){return v(e,l,!0)})||""),s=b(e.prefix+"!"+f,this.map.parentMap),E(s,"defined",bind(this,function(e){this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),a=u[s.id],a&&(this.depMaps.push(s),this.events.error&&a.on("error",bind(this,function(e){this.emit("error",e)})),a.enable());return}i=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),i.error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(u,function(e){e.map.id.indexOf(t+"_unnormalized")===0&&T(e.map.id)}),S(e)}),i.fromText=bind(this,function(t,n){var s=e.name,o=b(s),u=useInteractive;n&&(t=n),u&&(useInteractive=!1),w(o);try{req.exec(t)}catch(a){throw new Error("fromText eval for "+s+" failed: "+a)}u&&(useInteractive=!0),this.depMaps.push(o),r.completeLoad(s),c([s],i)}),n.load(e.name,c,i,o)})),r.enable(n,this),this.pluginMaps[n.id]=n},enable:function(){this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var n,s,o;if(typeof e=="string"){e=b(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,o=i[e.id];if(o){this.depExports[t]=o(this);return}this.depCount+=1,E(e,"defined",bind(this,function(e){this.defineDep(t,e),this.check()})),this.errback&&E(e,"error",this.errback)}n=e.id,s=u[n],!i[n]&&s&&!s.enabled&&r.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=u[e.id];t&&!t.enabled&&r.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var n=this.events[e];n||(n=this.events[e]=[]),n.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),e==="error"&&delete this.events[e]}},r={config:o,contextName:e,registry:u,defined:l,urlFetched:c,defQueue:f,Module:n,makeModuleMap:b,nextTick:req.nextTick,configure:function(e){e.baseUrl&&e.baseUrl.charAt(e.baseUrl.length-1)!=="/"&&(e.baseUrl+="/");var t=o.pkgs,n=o.shim,i=o.paths,s=o.map;mixin(o,e,!0),o.paths=mixin(i,e.paths,!0),e.map&&(o.map=mixin(s||{},e.map,!0,!0)),e.shim&&(eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e}),e.exports&&!e.exportsFn&&(e.exportsFn=r.makeShimExports(e)),n[t]=e}),o.shim=n),e.packages&&(each(e.packages,function(e){var n;e=typeof e=="string"?{name:e}:e,n=e.location,t[e.name]={name:e.name,location:n||e.name,main:(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}}),o.pkgs=t),eachProp(u,function(e,t){!e.inited&&!e.map.unnormalized&&(e.map=b(t))}),(e.deps||e.callback)&&r.require(e.deps||[],e.callback)},makeShimExports:function(e){function t(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||getGlobal(e.exports)}return t},makeRequire:function(t,n){function s(o,a,c){var h,p,d,v;n.enableBuildCallback&&a&&isFunction(a)&&(a.__requireJsBuild=!0);if(typeof o=="string")return isFunction(a)?S(makeError("requireargs","Invalid require call"),c):t&&i[o]?i[o](u[t.id]):req.get?req.get(r,o,t):(p=b(o,t,!1,!0),h=p.id,hasProp(l,h)?l[h]:S(makeError("notloaded",'Module name "'+h+'" has not been loaded yet for context: '+e+(t?"":". Use require([])"))));x();while(f.length){v=f.shift();if(v[0]===null)return S(makeError("mismatch","Mismatched anonymous define() module: "+v[v.length-1]));k(v)}return r.nextTick(function(){d=w(b(null,t)),d.skipMap=n.skipMap,d.init(o,a,c,{enabled:!0}),C()}),s}return n=n||{},mixin(s,{isBrowser:isBrowser,toUrl:function(e){var n=e.lastIndexOf("."),i=null;return n!==-1&&(i=e.substring(n,e.length),e=e.substring(0,n)),r.nameToUrl(v(e,t&&t.id,!0),i)},defined:function(e){return hasProp(l,b(e,t,!1,!0).id)},specified:function(e){return e=b(e,t,!1,!0).id,hasProp(l,e)||hasProp(u,e)}}),t||(s.undef=function(e){x();var n=b(e,t,!0),r=u[e];delete l[e],delete c[n.url],delete a[e],r&&(r.events.defined&&(a[e]=r.events),T(e))}),s},enable:function(e,t){var n=u[e.id];n&&w(e).enable()},completeLoad:function(e){var t,n,r,i=o.shim[e]||{},s=i.exports;x();while(f.length){n=f.shift();if(n[0]===null){n[0]=e;if(t)break;t=!0}else n[0]===e&&(t=!0);k(n)}r=u[e];if(!t&&!l[e]&&r&&!r.inited){if(o.enforceDefine&&(!s||!getGlobal(s))){if(g(e))return;return S(makeError("nodefine","No define call for "+e,null,[e]))}k([e,i.deps||[],i.exportsFn])}C()},nameToUrl:function(e,t){var n,r,i,s,u,a,f,l,c;if(req.jsExtRegExp.test(e))l=e+(t||"");else{n=o.paths,r=o.pkgs,u=e.split("/");for(a=u.length;a>0;a-=1){f=u.slice(0,a).join("/"),i=r[f],c=n[f];if(c){isArray(c)&&(c=c[0]),u.splice(0,a,c);break}if(i){e===i.name?s=i.location+"/"+i.main:s=i.location,u.splice(0,a,s);break}}l=u.join("/"),l+=t||(/\?/.test(l)?"":".js"),l=(l.charAt(0)==="/"||l.match(/^[\w\+\.\-]+:/)?"":o.baseUrl)+l}return o.urlArgs?l+((l.indexOf("?")===-1?"?":"&")+o.urlArgs):l},load:function(e,t){req.load(r,e,t)},execCb:function(e,t,n,r){return t.apply(r,n)},onScriptLoad:function(e){if(e.type==="load"||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=A(e);r.completeLoad(t.id)}},onScriptError:function(e){var t=A(e);if(!g(t.id))return S(makeError("scripterror","Script error",e,[t.id]))}},r.require=r.makeRequire(),r}function getInteractiveScript(){return interactiveScript&&interactiveScript.readyState==="interactive"?interactiveScript:(eachReverse(scripts(),function(e){if(e.readyState==="interactive")return interactiveScript=e}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.0",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,aps=ap.slice,apsp=ap.splice,isBrowser=typeof window!="undefined"&&!!navigator&&!!document,isWebWorker=!isBrowser&&typeof importScripts!="undefined",readyRegExp=isBrowser&&navigator.platform==="PLAYSTATION 3"?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera=typeof opera!="undefined"&&opera.toString()==="[object Opera]",contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if(typeof define!="undefined")return;if(typeof requirejs!="undefined"){if(isFunction(requirejs))return;cfg=requirejs,requirejs=undefined}typeof require!="undefined"&&!isFunction(require)&&(cfg=require,require=undefined),req=requirejs=function(e,t,n,r){var i,s,o=defContextName;return!isArray(e)&&typeof e!="string"&&(s=e,isArray(t)?(e=t,t=n,n=r):e=[]),s&&s.context&&(o=s.context),i=contexts[o],i||(i=contexts[o]=req.s.newContext(o)),s&&i.configure(s),i.require(e,t,n)},req.config=function(e){return req(e)},req.nextTick=typeof setTimeout!="undefined"?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=function(e){throw e},req.load=function(e,t,n){var r=e&&e.config||{},i;if(isBrowser)return i=r.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),i.type=r.scriptType||"text/javascript",i.charset="utf-8",i.async=!0,i.setAttribute("data-requirecontext",e.contextName),i.setAttribute("data-requiremodule",t),i.attachEvent&&!(i.attachEvent.toString&&i.attachEvent.toString().indexOf("[native code")<0)&&!isOpera?(useInteractive=!0,i.attachEvent("onreadystatechange",e.onScriptLoad)):(i.addEventListener("load",e.onScriptLoad,!1),i.addEventListener("error",e.onScriptError,!1)),i.src=n,currentlyAddingScript=i,baseElement?head.insertBefore(i,baseElement):head.appendChild(i),currentlyAddingScript=null,i;isWebWorker&&(importScripts(n),e.completeLoad(t))},isBrowser&&eachReverse(scripts(),function(e){head||(head=e.parentNode),dataMain=e.getAttribute("data-main");if(dataMain)return cfg.baseUrl||(src=dataMain.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath,dataMain=mainScript),dataMain=dataMain.replace(jsSuffixRegExp,""),cfg.deps=cfg.deps?cfg.deps.concat(dataMain):[dataMain],!0}),define=function(e,t,n){var r,i;typeof e!="string"&&(n=t,t=e,e=null),isArray(t)||(n=t,t=[]),!t.length&&isFunction(n)&&n.length&&(n.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(e,n){t.push(n)}),t=(n.length===1?["require"]:["require","exports","module"]).concat(t)),useInteractive&&(r=currentlyAddingScript||getInteractiveScript(),r&&(e||(e=r.getAttribute("data-requiremodule")),i=contexts[r.getAttribute("data-requirecontext")])),(i?i.defQueue:globalDefQueue).push([e,t,n])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)})(this)