/*





DO NOT UPDATE



This version is required for detectizr/Revealizr







*/



/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-audio-cookies-cors-cssanimations-es6array-es6collections-es6math-es6number-es6object-es6string-forcetouch-generators-geolocation-hashchange-hiddenscroll-history-hsla-input-inputtypes-intl-json-localstorage-matchmedia-picture-postmessage-promises-queryselector-requestanimationframe-search-sessionstorage-svg-touchevents-video-videoautoplay-videopreload-webgl-websockets-websqldatabase-webworkers-domprefixes-hasevent-mq-prefixes-printshiv-setclasses-testallprops-testprop-teststyles !*/
!function(e,t,A){function n(e,t){return typeof e===t}function o(){var e,t,A,o,r,a,i;for(var s in T)if(T.hasOwnProperty(s)){if(e=[],t=T[s],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(A=0;A<t.options.aliases.length;A++)e.push(t.options.aliases[A].toLowerCase());for(o=n(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)a=e[r],i=a.split("."),1===i.length?Modernizr[i[0]]=o:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=o),v.push((o?"":"no-")+i.join("-"))}}function r(e){var t=b.className,A=Modernizr._config.classPrefix||"";if(R&&(t=t.baseVal),Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");t=t.replace(n,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(t+=" "+A+e.join(" "+A),R?b.className.baseVal=t:b.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):R?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function i(e,t){return!!~(""+e).indexOf(t)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,A){return t+A.toUpperCase()}).replace(/^-/,"")}function l(){var e=t.body;return e||(e=a(R?"svg":"body"),e.fake=!0),e}function c(e,A,n,o){var r,i,s,c,u="modernizr",d=a("div"),p=l();if(parseInt(n,10))for(;n--;)s=a("div"),s.id=o?o[n]:u+(n+1),d.appendChild(s);return r=a("style"),r.type="text/css",r.id="s"+u,(p.fake?p:d).appendChild(r),p.appendChild(d),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(t.createTextNode(e)),d.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",c=b.style.overflow,b.style.overflow="hidden",b.appendChild(p)),i=A(d,e),p.fake?(p.parentNode.removeChild(p),b.style.overflow=c,b.offsetHeight):d.parentNode.removeChild(d),!!i}function u(e,t){if("object"==typeof e)for(var A in e)Z(e,A)&&u(A,e[A]);else{e=e.toLowerCase();var n=e.split("."),o=Modernizr[n[0]];if(2==n.length&&(o=o[n[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==n.length?Modernizr[n[0]]=t:(!Modernizr[n[0]]||Modernizr[n[0]]instanceof Boolean||(Modernizr[n[0]]=new Boolean(Modernizr[n[0]])),Modernizr[n[0]][n[1]]=t),r([(t&&0!=t?"":"no-")+n.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function d(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,A){var o;for(var r in e)if(e[r]in t)return A===!1?e[r]:(o=t[e[r]],n(o,"function")?d(o,A||t):o);return!1}function h(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(t,n){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(h(t[o]),n))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];o--;)r.push("("+h(t[o])+":"+n+")");return r=r.join(" or "),c("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return A}function m(e,t,o,r){function l(){u&&(delete U.style,delete U.modElem)}if(r=n(r,"undefined")?!1:r,!n(o,"undefined")){var c=f(e,o);if(!n(c,"undefined"))return c}for(var u,d,p,h,m,g=["modernizr","tspan"];!U.style;)u=!0,U.modElem=a(g.shift()),U.style=U.modElem.style;for(p=e.length,d=0;p>d;d++)if(h=e[d],m=U.style[h],i(h,"-")&&(h=s(h)),U.style[h]!==A){if(r||n(o,"undefined"))return l(),"pfx"==t?h:!0;try{U.style[h]=o}catch(y){}if(U.style[h]!=m)return l(),"pfx"==t?h:!0}return l(),!1}function g(e,t,A,o,r){var a=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+P.join(a+" ")+a).split(" ");return n(t,"string")||n(t,"undefined")?m(i,t,o,r):(i=(e+" "+F.join(a+" ")+a).split(" "),p(i,t,A))}function y(e,t,n){return g(e,A,A,t,n)}var v=[],T=[],E={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var A=this;setTimeout(function(){t(A[e])},0)},addTest:function(e,t,A){T.push({name:e,fn:t,options:A})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=E,Modernizr=new Modernizr,Modernizr.addTest("cookies",function(){try{t.cookie="cookietest=1";var e=-1!=t.cookie.indexOf("cookietest=");return t.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(A){return!1}}),Modernizr.addTest("cors","XMLHttpRequest"in e&&"withCredentials"in new XMLHttpRequest),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("json","JSON"in e&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("postmessage","postMessage"in e),Modernizr.addTest("queryselector","querySelector"in t&&"querySelectorAll"in t),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("websockets","WebSocket"in e&&2===e.WebSocket.CLOSING),Modernizr.addTest("picture","HTMLPictureElement"in e),Modernizr.addTest("es6array",!!(Array.prototype&&Array.prototype.copyWithin&&Array.prototype.fill&&Array.prototype.find&&Array.prototype.findIndex&&Array.prototype.keys&&Array.prototype.entries&&Array.prototype.values&&Array.from&&Array.of)),Modernizr.addTest("es6collections",!!(e.Map&&e.Set&&e.WeakMap&&e.WeakSet)),Modernizr.addTest("generators",function(){try{new Function("function* test() {}")()}catch(e){return!1}return!0}),Modernizr.addTest("es6math",!!(Math&&Math.clz32&&Math.cbrt&&Math.imul&&Math.sign&&Math.log10&&Math.log2&&Math.log1p&&Math.expm1&&Math.cosh&&Math.sinh&&Math.tanh&&Math.acosh&&Math.asinh&&Math.atanh&&Math.hypot&&Math.trunc&&Math.fround)),Modernizr.addTest("es6number",!!(Number.isFinite&&Number.isInteger&&Number.isSafeInteger&&Number.isNaN&&Number.parseInt&&Number.parseFloat&&Number.isInteger(Number.MAX_SAFE_INTEGER)&&Number.isInteger(Number.MIN_SAFE_INTEGER)&&Number.isFinite(Number.EPSILON))),Modernizr.addTest("es6object",!!(Object.assign&&Object.is&&Object.setPrototypeOf)),Modernizr.addTest("promises",function(){return"Promise"in e&&"resolve"in e.Promise&&"reject"in e.Promise&&"all"in e.Promise&&"race"in e.Promise&&function(){var t;return new e.Promise(function(e){t=e}),"function"==typeof t}()}),Modernizr.addTest("es6string",!!(String.fromCodePoint&&String.raw&&String.prototype.codePointAt&&String.prototype.repeat&&String.prototype.startsWith&&String.prototype.endsWith&&String.prototype.contains)),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("websqldatabase","openDatabase"in e),Modernizr.addTest("webworkers","Worker"in e);var w=E._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];E._prefixes=w;var b=t.documentElement,R="svg"===b.nodeName.toLowerCase();R||!function(e,t){function A(e,t){var A=e.createElement("p"),n=e.getElementsByTagName("head")[0]||e.documentElement;return A.innerHTML="x<style>"+t+"</style>",n.insertBefore(A.lastChild,n.firstChild)}function n(){var e=R.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var A=R.elements;"string"!=typeof A&&(A=A.join(" ")),"string"!=typeof e&&(e=e.join(" ")),R.elements=A+" "+e,l(t)}function r(e){var t=b[e[E]];return t||(t={},w++,e[E]=w,b[w]=t),t}function a(e,A,n){if(A||(A=t),m)return A.createElement(e);n||(n=r(A));var o;return o=n.cache[e]?n.cache[e].cloneNode():T.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e),!o.canHaveChildren||v.test(e)||o.tagUrn?o:n.frag.appendChild(o)}function i(e,A){if(e||(e=t),m)return e.createDocumentFragment();A=A||r(e);for(var o=A.frag.cloneNode(),a=0,i=n(),s=i.length;s>a;a++)o.createElement(i[a]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(A){return R.shivMethods?a(A,e,t):t.createElem(A)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(R,t.frag)}function l(e){e||(e=t);var n=r(e);return!R.shivCSS||f||n.hasCSS||(n.hasCSS=!!A(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),m||s(e,n),e}function c(e){for(var t,A=e.getElementsByTagName("*"),o=A.length,r=RegExp("^(?:"+n().join("|")+")$","i"),a=[];o--;)t=A[o],r.test(t.nodeName)&&a.push(t.applyElement(u(t)));return a}function u(e){for(var t,A=e.attributes,n=A.length,o=e.ownerDocument.createElement(F+":"+e.nodeName);n--;)t=A[n],t.specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function d(e){for(var t,A=e.split("{"),o=A.length,r=RegExp("(^|[\\s,>+~])("+n().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+F+"\\:$2";o--;)t=A[o]=A[o].split("}"),t[t.length-1]=t[t.length-1].replace(r,a),A[o]=t.join("}");return A.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function h(e){function t(){clearTimeout(a._removeSheetTimer),n&&n.removeNode(!0),n=null}var n,o,a=r(e),i=e.namespaces,s=e.parentWindow;return!M||e.printShived?e:("undefined"==typeof i[F]&&i.add(F),s.attachEvent("onbeforeprint",function(){t();for(var r,a,i,s=e.styleSheets,l=[],u=s.length,p=Array(u);u--;)p[u]=s[u];for(;i=p.pop();)if(!i.disabled&&S.test(i.media)){try{r=i.imports,a=r.length}catch(h){a=0}for(u=0;a>u;u++)p.push(r[u]);try{l.push(i.cssText)}catch(h){}}l=d(l.reverse().join("")),o=c(e),n=A(e,l)}),s.attachEvent("onafterprint",function(){p(o),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var f,m,g="3.7.3",y=e.html5||{},v=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,T=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,E="_html5shiv",w=0,b={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",f="hidden"in e,m=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(A){f=!0,m=!0}}();var R={elements:y.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:g,shivCSS:y.shivCSS!==!1,supportsUnknownElements:m,shivMethods:y.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:i,addElements:o};e.html5=R,l(t);var S=/^$|\b(?:all|print)\b/,F="html5shiv",M=!m&&function(){var A=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof A.applyElement||"undefined"==typeof A.removeNode||"undefined"==typeof e.attachEvent)}();R.type+=" print",R.shivPrint=h,h(t),"object"==typeof module&&module.exports&&(module.exports=R)}("undefined"!=typeof e?e:this,t);var S="Moz O ms Webkit",F=E._config.usePrefixes?S.toLowerCase().split(" "):[];E._domPrefixes=F;var M=function(){function e(e,t){var o;return e?(t&&"string"!=typeof t||(t=a(t||"div")),e="on"+e,o=e in t,!o&&n&&(t.setAttribute||(t=a("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==A&&(t[e]=A),t.removeAttribute(e)),o):!1}var n=!("onblur"in t.documentElement);return e}();E.hasEvent=M,Modernizr.addTest("hashchange",function(){return M("hashchange",e)===!1?!1:t.documentMode===A||t.documentMode>7}),Modernizr.addTest("inputsearchevent",M("search")),Modernizr.addTest("audio",function(){var e=a("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(A){}return t}),Modernizr.addTest("video",function(){var e=a("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(A){}return t}),Modernizr.addTest("webgl",function(){var t=a("canvas"),A="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return A in t?t[A]("webgl")||t[A]("experimental-webgl"):"WebGLRenderingContext"in e}),Modernizr.addTest("videopreload","preload"in a("video"));var C=a("input"),x="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),B={};Modernizr.input=function(t){for(var A=0,n=t.length;n>A;A++)B[t[A]]=!!(t[A]in C);return B.list&&(B.list=!(!a("datalist")||!e.HTMLDataListElement)),B}(x);var N="search tel url email datetime date month week time datetime-local number range color".split(" "),G={};Modernizr.inputtypes=function(e){for(var n,o,r,a=e.length,i="1)",s=0;a>s;s++)C.setAttribute("type",n=e[s]),r="text"!==C.type&&"style"in C,r&&(C.value=i,C.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(n)&&C.style.WebkitAppearance!==A?(b.appendChild(C),o=t.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle(C,null).WebkitAppearance&&0!==C.offsetHeight,b.removeChild(C)):/^(search|tel)$/.test(n)||(r=/^(url|email)$/.test(n)?C.checkValidity&&C.checkValidity()===!1:C.value!=i)),G[e[s]]=!!r;return G}(N),Modernizr.addTest("hsla",function(){var e=a("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",i(e.backgroundColor,"rgba")||i(e.backgroundColor,"hsla")});var P=E._config.usePrefixes?S.split(" "):[];E._cssomPrefixes=P;var k=E.testStyles=c;Modernizr.addTest("hiddenscroll",function(){return k("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})}),Modernizr.addTest("touchevents",function(){var A;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)A=!0;else{var n=["@media (",w.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");k(n,function(e){A=9===e.offsetTop})}return A});var I=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var A=t(e);return A&&A.matches||!1}:function(t){var A=!1;return c("@media "+t+" { #modernizr { position: absolute; } }",function(t){A="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),A}}();E.mq=I;var Q=function(t){var n,o=w.length,r=e.CSSRule;if("undefined"==typeof r)return A;if(!t)return!1;if(t=t.replace(/^@/,""),n=t.replace(/-/g,"_").toUpperCase()+"_RULE",n in r)return"@"+t;for(var a=0;o>a;a++){var i=w[a],s=i.toUpperCase()+"_"+n;if(s in r)return"@-"+i.toLowerCase()+"-"+t}return!1};E.atRule=Q;var Z;!function(){var e={}.hasOwnProperty;Z=n(e,"undefined")||n(e.call,"undefined")?function(e,t){return t in e&&n(e.constructor.prototype[t],"undefined")}:function(t,A){return e.call(t,A)}}(),E._l={},E.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},E._trigger=function(e,t){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,n;for(e=0;e<A.length;e++)(n=A[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){E.addTest=u}),Modernizr.addAsyncTest(function(){function e(A){clearTimeout(t),n.removeEventListener("playing",e,!1),u("videoautoplay",A&&"playing"===A.type||0!==n.currentTime),n.parentNode.removeChild(n)}var t,A=300,n=a("video"),o=n.style;if(!(Modernizr.video&&"autoplay"in n))return void u("videoautoplay",!1);o.position="absolute",o.height=0,o.width=0;try{if(Modernizr.video.ogg)n.src="data:video/ogg;base64,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";else{if(!Modernizr.video.h264)return void u("videoautoplay",!1);n.src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="}}catch(r){return void u("videoautoplay",!1)}n.setAttribute("autoplay",""),n.style.cssText="display:none",b.appendChild(n),setTimeout(function(){n.addEventListener("playing",e,!1),t=setTimeout(e,A)},0)});var Y={elem:a("modernizr")};Modernizr._q.push(function(){delete Y.elem});var U={style:Y.elem.style};Modernizr._q.unshift(function(){delete U.style});E.testProp=function(e,t,n){return m([e],A,t,n)};E.testAllProps=g,E.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0));var V=E.prefixed=function(e,t,A){return 0===e.indexOf("@")?Q(e):(-1!=e.indexOf("-")&&(e=s(e)),t?g(e,t,A):g(e,"pfx"))};Modernizr.addTest("forcetouch",function(){return M(V("mouseforcewillbegin",e,!1),e)?MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN:!1}),Modernizr.addTest("intl",!!V("Intl",e)),Modernizr.addTest("requestanimationframe",!!V("requestAnimationFrame",e),{aliases:["raf"]}),Modernizr.addTest("matchmedia",!!V("matchMedia",e)),o(),r(v),delete E.addTest,delete E.addAsyncTest;for(var D=0;D<Modernizr._q.length;D++)Modernizr._q[D]();e.Modernizr=Modernizr}(window,document);