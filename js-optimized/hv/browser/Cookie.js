/**
 * Small Cookies JavaScript Helper
 *
 * Source code available at http://github.com/tdd/cookies-js-helper
 *
 * Copyright (c) 2010 Christophe Porteneuve <tdd@tddsworld.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

define([],function(){function t(t){return"[object Date]"==e.call(t)}function n(t){return"[object RegExp]"==e.call(t)}var e=Object.prototype.toString,r={get:function(t){return r.has(t)?r.list()[t]:null},has:function(t){return(new RegExp("(?:;\\s*|^)"+encodeURIComponent(t)+"=")).test(document.cookie)},list:function(t){var r=document.cookie.split(";"),i,s={};for(var o=0,u=r.length;o<u;++o){i=r[o].split("="),i[0]=i[0].replace(/^\s+|\s+$/,"");if(!n(t)||t.test(i[0]))s[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return s},remove:function(t,n){var i={};for(var s in n||{})i[s]=n[s];return i.expires=new Date(0),i.maxAge=-1,r.set(t,null,i)},set:function(n,r,i){i=i||{};var s=[encodeURIComponent(n)+"="+encodeURIComponent(r)];i.path&&s.push("path="+i.path),i.domain&&s.push("domain="+i.domain);var o="maxAge"in i?i.maxAge:"max_age"in i?i.max_age:i["max-age"],u;"undefined"!=typeof o&&"null"!=typeof o&&!isNaN(u=parseFloat(o))&&s.push("max-age="+u);var a=t(i.expires)?i.expires.toUTCString():i.expires;return a&&s.push("expires="+a),i.secure&&s.push("secure"),s=s.join(";"),document.cookie=s,s},test:function(){var t="70ab3d396b85e670f25b93be05e027e4eb655b71",n="Élodie Jaubert";r.remove(t),r.set(t,n);var i=n==r.get(t);return r.remove(t),i}};return r})