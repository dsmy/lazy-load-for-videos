!function(){"use strict";var t,e={236:function(t,e,r){var n=r(71),o=r(345),i=r(525),a=r(580),l=r(76);function u(t,e){return p(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,l=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(t,e)||s(t,e)||d()}function c(t){return p(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||s(t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function p(t){if(Array.isArray(t))return t}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h,m={colour:"red",controls:!0,loadpolicy:!0,buttonstyle:"",preroll:"",postroll:"",thumbnailquality:"0",loadthumbnail:!0,cookies:!1};function g(t){var e=t.pluginOptions,r=t.videoId,n=t.urlOptions,o=r,i={autoplay:1,modestbranding:1,rel:0};!1===e.controls&&(i.controls=0),e.loadpolicy&&(i.iv_load_policy=3),e.colour&&(i.color=e.colour);var a=e.preroll!==r&&e.preroll,u=e.postroll!==r&&e.postroll,c=[];a&&(o=a,c.push(r)),u&&c.push(u),c.length>0&&(i.playlist=c.join(","));var d=y(y({},i),n);d.t&&(d.start=function(t){if(Number(t))return Number(t);var e=0,r=[3600,60,1],n=t.match(/(?:(\d+)(?:h))?(?:(\d+)(?:m))?(?:(\d+)(?:s))?/);if(n)for(var o=1;o<n.length;o+=1)void 0!==n[o]&&(e+=Number(n[o])*r[o-1]);return e}(d.t));var s="www.youtube".concat(e.cookies?"":"-nocookie",".com");return"https://".concat(s,"/embed/").concat(o,"?").concat((0,l.Z)(d))}function O(t){var e=c(function(t){var e=new RegExp(["v=","/embed/","://youtu.be/"].join("|"),"i");return t.split(e)[1]}(t).split(/[&#?]/));return{videoId:e[0],queryParams:e.slice(1).reduce((function(t,e){var r=u(e.split("="),2),n=r[0],o=r[1];return t[n]=o,t}),{})}}function w(t){var e=O(t.getAttribute("href")).videoId,r="https://i2.ytimg.com/vi/".concat(e,"/").concat(h.thumbnailquality,".jpg"),n=(0,i.Z)('<img style="display:none" src="'.concat(r,'">')).firstChild;n.addEventListener("load",(function(){120===n.clientWidth&&(r=r.replace("maxresdefault","0")),t.style.backgroundImage||(0,o.X9)(t,r),n.parentNode.removeChild(n)})),document.body.appendChild(n)}function j(t){var e=t,r=O(e.getAttribute("href")),n=r.videoId,a=r.queryParams;var l=void 0!==e.getAttribute("data-video-title")?e.getAttribute("data-video-title"):e.innerHTML?e.innerHTML:"";e.innerHTML=l.length>0?'\n    <div aria-hidden="true" class="lazy-load-info">\n      <div class="titletext youtube">'.concat(l,"</div>\n    </div>"):"";var u=(0,i.Z)('<div aria-hidden="true" class="lazy-load-div"></div>');e.insertBefore(u,e.firstChild),h.buttonstyle&&e.classList.add(h.buttonstyle);var c=(0,i.Z)('<div aria-hidden="true" class="lazy-load-info-extra">\n      <div class="overlaytext">'.concat(h.overlaytext,"</div>\n    </div>"));h.overlaytext.length>0&&e.parentNode.insertBefore(c,null),(0,o.Ph)(e.parentNode),e.addEventListener("click",(function(t){var r=t.currentTarget;if(t.preventDefault(),"a"===r.tagName.toLowerCase()){r.classList.remove("preview-youtube");var o=g({pluginOptions:h,videoId:n,urlOptions:a}),l=Number(e.clientHeight),u=Number(e.clientWidth),c=(0,i.Z)('<iframe width="'.concat(u,'px" height="').concat(l,'px" style="vertical-align:top; height: ').concat(l,"px; width: ").concat(u,'px" src="').concat(o,'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')),d=r.parentNode;d&&d.replaceChild(c,r)}}),!0)}function x(t){var e=t.rootNode,r=t.loadthumbnail,n=(0,a.Z)("a.lazy-load-youtube",e);n.forEach(j),r&&(0,o.bE)(n,(function(t){return w(t)}))}var P=function(t){h=y(y({},m),t),(0,o.S1)({load:x,pluginOptions:h})};(0,n.Z)((function(){P(window.llvConfig.youtube)}))}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,t=[],n.O=function(e,r,o,i){if(!r){var a=1/0;for(c=0;c<t.length;c++){r=t[c][0],o=t[c][1],i=t[c][2];for(var l=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(l=!1,i<a&&(a=i));l&&(t.splice(c--,1),e=o())}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[r,o,i]},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={108:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],l=r[1],u=r[2],c=0;for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(u)var d=u(n);for(e&&e(r);c<a.length;c++)i=a[c],n.o(t,i)&&t[i]&&t[i][0](),t[a[c]]=0;return n.O(d)},r=self.webpackChunklazy_load_for_videos=self.webpackChunklazy_load_for_videos||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var o=n.O(void 0,[358],(function(){return n(236)}));o=n.O(o)}();