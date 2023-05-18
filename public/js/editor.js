!function(){var e={991:function(e,t){var r;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n=function(){function e(){}function t(e,t){for(var r=t.length,n=0;n<r;++n)o(e,t[n])}e.prototype=Object.create(null);var r={}.hasOwnProperty;var n=/\s+/;function o(e,o){if(o){var a=typeof o;"string"===a?function(e,t){for(var r=t.split(n),o=r.length,a=0;a<o;++a)e[r[a]]=!0}(e,o):Array.isArray(o)?t(e,o):"object"===a?function(e,t){if(t.toString===Object.prototype.toString||t.toString.toString().includes("[native code]"))for(var n in t)r.call(t,n)&&(e[n]=!!t[n]);else e[t.toString()]=!0}(e,o):"number"===a&&function(e,t){e[t]=!0}(e,o)}}return function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var a=new e;t(a,n);var i=[];for(var l in a)a[l]&&i.push(l);return i.join(" ")}}();e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},184:function(e,t){var r;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},588:function(e){e.exports=function(e,t){var r,n,o=0;function a(){var a,i,l=r,c=arguments.length;e:for(;l;){if(l.args.length===arguments.length){for(i=0;i<c;i++)if(l.args[i]!==arguments[i]){l=l.next;continue e}return l!==r&&(l===n&&(n=l.prev),l.prev.next=l.next,l.next&&(l.next.prev=l.prev),l.next=r,l.prev=null,r.prev=l,r=l),l.val}l=l.next}for(a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return l={args:a,val:e.apply(null,a)},r?(r.prev=l,l.next=r):n=l,o===t.maxSize?(n=n.prev).next=null:o++,r=l,l.val}return t=t||{},a.clear=function(){r=null,n=null,o=0},a}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=wp.hooks,t=wp.compose,n=r(184),o=r.n(n),a=wp.element;const i=[{ratio:"2.33",className:"wp-embed-aspect-21-9"},{ratio:"2.00",className:"wp-embed-aspect-18-9"},{ratio:"1.78",className:"wp-embed-aspect-16-9"},{ratio:"1.33",className:"wp-embed-aspect-4-3"},{ratio:"1.00",className:"wp-embed-aspect-1-1"},{ratio:"0.56",className:"wp-embed-aspect-9-16"},{ratio:"0.50",className:"wp-embed-aspect-1-2"}],l="wp-embed";var c=lodash,s=r(991),u=r.n(s),d=r(588),p=r.n(d),v=wp.blocks;const{name:m}={$schema:"https://schemas.wp.org/trunk/block.json",apiVersion:2,name:"core/embed",title:"Embed",category:"embed",description:"Add a block that displays content pulled from other sites, like Twitter or YouTube.",textdomain:"default",attributes:{url:{type:"string",__experimentalRole:"content"},caption:{type:"string",source:"html",selector:"figcaption",__experimentalRole:"content"},type:{type:"string",__experimentalRole:"content"},providerNameSlug:{type:"string",__experimentalRole:"content"},allowResponsive:{type:"boolean",default:!0},responsive:{type:"boolean",default:!1,__experimentalRole:"content"},previewable:{type:"boolean",default:!0,__experimentalRole:"content"}},supports:{align:!0},editorStyle:"wp-block-embed-editor",style:"wp-block-embed"},f=e=>{var t;return null===(t=(0,v.getBlockVariations)(m))||void 0===t?void 0:t.find((t=>{let{patterns:r}=t;return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).some((t=>e.match(t)))}(e,r)}))},b=e=>e&&e.includes('class="wp-embedded-content"'),h=e=>{if(!e)return e;const t=i.reduce(((e,t)=>{let{className:r}=t;return e[r]=!1,e}),{"wp-has-aspect-ratio":!1});return u()(e,t)};function y(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!r)return h(t);const n=document.implementation.createHTMLDocument("");n.body.innerHTML=e;const o=n.body.querySelector("iframe");if(o&&o.height&&o.width){const e=(o.width/o.height).toFixed(2);for(let r=0;r<i.length;r++){const n=i[r];if(e>=n.ratio){return e-n.ratio>.1?h(t):u()(h(t),n.className,"wp-has-aspect-ratio")}}}return t}const g=p()((function(e,t,r,n){let o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(!e)return{};const a={};let{type:i="rich"}=e;const{html:s,provider_name:u}=e,d=(0,c.kebabCase)((u||t).toLowerCase());return b(s)&&(i=l),(s||"photo"===i)&&(a.type=i,a.providerNameSlug=d),a.className=y(s,r,n&&o),a}));var w=wp.i18n,E=wp.components,_=wp.blockEditor;var O=(0,a.createElement)((e=>{let{className:t,isPressed:r,...n}=e;const i={...n,className:o()(t,{"is-pressed":r})||void 0,"aria-hidden":!0,focusable:!1};return(0,a.createElement)("svg",i)}),{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)((e=>(0,a.createElement)("path",e)),{d:"M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"}));function S(e){return e?(0,w.__)("This embed will preserve its aspect ratio when the browser is resized."):(0,w.__)("This embed may not preserve its aspect ratio when the browser is resized.")}var N=e=>{let{blockSupportsResponsive:t,showEditButton:r,themeSupportsResponsive:n,allowResponsive:o,toggleResponsive:i,switchBackToURLInput:l}=e;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(_.BlockControls,null,(0,a.createElement)(E.ToolbarGroup,null,r&&(0,a.createElement)(E.ToolbarButton,{className:"components-toolbar__control",label:(0,w.__)("Edit URL"),icon:O,onClick:l}))),n&&t&&(0,a.createElement)(_.InspectorControls,null,(0,a.createElement)(E.PanelBody,{title:(0,w.__)("Media settings"),className:"blocks-responsive"},(0,a.createElement)(E.ToggleControl,{label:(0,w.__)("Resize for smaller devices"),checked:o,help:S,onChange:i}))))};var x=()=>(0,a.createElement)("div",{className:"wp-block-embed is-loading"},(0,a.createElement)(E.Spinner,null));var k=e=>{let{icon:t,label:r,value:n,onSubmit:o,onChange:i,cannotEmbed:l,fallback:c,tryAgain:s}=e;return(0,a.createElement)(E.Placeholder,{icon:(0,a.createElement)(_.BlockIcon,{icon:t,showColors:!0}),label:r,className:"wp-block-embed",instructions:(0,w.__)("Paste a link to the content you want to display on your site.")},(0,a.createElement)("form",{onSubmit:o},(0,a.createElement)("input",{type:"url",value:n||"",className:"components-placeholder__input","aria-label":r,placeholder:(0,w.__)("Enter URL to embed here…"),onChange:i}),(0,a.createElement)(E.Button,{variant:"primary",type:"submit"},(0,w._x)("Embed","button label"))),(0,a.createElement)("div",{className:"components-placeholder__learn-more"},(0,a.createElement)(E.ExternalLink,{href:(0,w.__)("https://wordpress.org/support/article/embeds/")},(0,w.__)("Learn more about embeds"))),l&&(0,a.createElement)("div",{className:"components-placeholder__error"},(0,a.createElement)("div",{className:"components-placeholder__instructions"},(0,w.__)("Sorry, this content could not be embedded.")),(0,a.createElement)(E.Button,{variant:"secondary",onClick:s},(0,w._x)("Try again","button label"))," ",(0,a.createElement)(E.Button,{variant:"secondary",onClick:c},(0,w._x)("Convert to link","button label"))))},R=wp.data,j={class:"className",frameborder:"frameBorder",marginheight:"marginHeight",marginwidth:"marginWidth"};function C(e){var r=e.html,n=(0,a.useRef)(),o=(0,a.useMemo)((function(){var e=(new window.DOMParser).parseFromString(r,"text/html").querySelector("iframe"),t={};return e?(Array.from(e.attributes).forEach((function(e){var r=e.name,n=e.value;"style"!==r&&(t[j[r]||r]=n)})),t):t}),[r]);(0,a.useEffect)((function(){var e=n.current.ownerDocument.defaultView;function t(e){var t=e.data,r=void 0===t?{}:t,a=r.secret,i=r.message,l=r.value;"height"===i&&a===o["data-secret"]&&(n.current.height=l)}return e.addEventListener("message",t),function(){e.removeEventListener("message",t)}}),[]);var i=(new DOMParser).parseFromString(r,"text/html"),l=i.querySelector("iframe");l&&l.removeAttribute("style");var c=i.querySelector("blockquote");return c&&(c.style.display="none"),React.createElement("div",{ref:(0,t.useMergeRefs)([n,(0,t.useFocusableIframe)()]),className:"wp-block-embed__wrapper",dangerouslySetInnerHTML:{__html:i.body.innerHTML}})}var P,A=(P=function(e,t){return P=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},P(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}P(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),L=function(e){function t(){var t=e.apply(this,arguments)||this;return t.hideOverlay=t.hideOverlay.bind(t),t.state={interactive:!1},t}return A(t,e),t.getDerivedStateFromProps=function(e,t){return!e.isSelected&&t.interactive?{interactive:!1}:null},t.prototype.hideOverlay=function(){this.setState({interactive:!0})},t.prototype.render=function(){var e=this.props,t=e.preview,r=e.previewable,n=e.url,o=e.type,a=e.caption,i=e.onCaptionChange,l=e.isSelected,c=e.className,s=e.icon,d=e.label,p=e.insertBlocksAfter,m=t.scripts,f=this.state.interactive,b=t.html,h=new URL(n).host.split("."),y=h.splice(h.length-2,h.length-1).join("."),g=(0,w.sprintf)((0,w.__)("Embedded content from %s"),y),O=u()(o,c,"wp-block-embed__wrapper"),S="wp-embed"===o?React.createElement(C,{html:b}):React.createElement("div",{className:"wp-block-embed__wrapper"},React.createElement(E.SandBox,{html:b,scripts:m,title:g,type:O,onFocus:this.hideOverlay}),!f&&React.createElement("div",{className:"block-library-embed__interactive-overlay",onMouseUp:this.hideOverlay}));return React.createElement("figure",{className:u()(c,"wp-block-embed",{"is-type-video":"video"===o})},r?S:React.createElement(E.Placeholder,{icon:React.createElement(_.BlockIcon,{icon:s,showColors:!0}),label:d},React.createElement("p",{className:"components-placeholder__error"},React.createElement("a",{href:n},n)),React.createElement("p",{className:"components-placeholder__error"},(0,w.sprintf)((0,w.__)("Embedded content from %s can't be previewed in the editor."),y))),(!_.RichText.isEmpty(a)||l)&&React.createElement(_.RichText,{tagName:"figcaption",className:"caption",placeholder:(0,w.__)("Add caption"),value:a,onChange:i,inlineToolbar:!0,__unstableOnSplitAtEnd:function(){return p((0,v.createBlock)((0,v.getDefaultBlockName)()))}}))},t}(a.Component),B=L,T=React.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zm-6-9.5L16 12l-2.5 2.8 1.1 1L18 12l-3.5-3.5-1 1zm-3 0l-1-1L6 12l3.5 3.8 1.1-1L8 12l2.5-2.5z"})),M={foreground:"#ff0000",src:React.createElement("svg",{viewBox:"0 0 24 24"},React.createElement("path",{d:"M21.8 8s-.195-1.377-.795-1.984c-.76-.797-1.613-.8-2.004-.847-2.798-.203-6.996-.203-6.996-.203h-.01s-4.197 0-6.996.202c-.39.046-1.242.05-2.003.846C2.395 6.623 2.2 8 2.2 8S2 9.62 2 11.24v1.517c0 1.618.2 3.237.2 3.237s.195 1.378.795 1.985c.76.797 1.76.77 2.205.855 1.6.153 6.8.2 6.8.2s4.203-.005 7-.208c.392-.047 1.244-.05 2.005-.847.6-.607.795-1.985.795-1.985s.2-1.618.2-3.237v-1.517C22 9.62 21.8 8 21.8 8zM9.935 14.595v-5.62l5.403 2.82-5.403 2.8z"}))},z={foreground:"#1ab7ea",src:React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},React.createElement("g",null,React.createElement("path",{d:"M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.323 19.16 12.93 21 10.97 21c-1.214 0-2.24-1.12-3.08-3.36-.56-2.052-1.118-4.105-1.68-6.158-.622-2.24-1.29-3.36-2.004-3.36-.156 0-.7.328-1.634.98l-.978-1.26c1.027-.903 2.04-1.806 3.037-2.71C6 3.95 7.03 3.328 7.716 3.265c1.62-.156 2.616.95 2.99 3.32.404 2.558.685 4.148.84 4.77.468 2.12.982 3.18 1.543 3.18.435 0 1.09-.687 1.963-2.064.872-1.376 1.34-2.422 1.402-3.142.125-1.187-.343-1.782-1.4-1.782-.5 0-1.013.115-1.542.34 1.023-3.35 2.977-4.976 5.862-4.883 2.14.063 3.148 1.45 3.024 4.16z"})))};function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return[].slice.call(t.querySelectorAll(e))}function q(e,t){var r=e;r.style.backgroundImage="url(".concat(t,")"),r.style.backgroundColor="#000",r.style.backgroundPosition="center center",r.style.backgroundRepeat="no-repeat"}function D(e){var t=function(e){var t,r,n=String(null==e||null===(t=e.parentNode)||void 0===t||null===(r=t.parentNode)||void 0===r?void 0:r.classList).match(/wp-embed-aspect-\d+-\d+/);if(n){var o=n[0].replace("wp-embed-aspect-","").split("-"),a=Number(o[1])/Number(o[0]);return a.toString().split(".")[1].length>4?Math.round(1e4*a)/1e4:a}return.5625}(e);I("object, embed, iframe, .preview-lazyload, .lazy-load-div",e).forEach((function(e){var r=e,n=r.parentNode.clientWidth,o=Math.round(n*t);r.setAttribute("height","".concat(o,"px")),r.setAttribute("width","".concat(n,"px")),r.style.height="".concat(o,"px"),r.style.width="".concat(n,"px")}))}function H(e){requestAnimationFrame((function(){I(".container-lazyload",e).forEach(D)}))}function F(e){var t,r,n=e.load,o=e.pluginOptions,a=o.rootNode,i=function(){return H(a)};n(o),t=function(){n(o),H(a)},(r=window.jQuery||window.$)&&r(document).ajaxStop((function(){t()})),window.addEventListener("resize",i),window.addEventListener("load",i),"function"==typeof o.callback&&o.callback()}function U(e,t){var r;function n(e){t(e),e.parentNode.classList.remove("js-lazyload--not-loaded"),D(e.parentNode)}if("IntersectionObserver"in window||"IntersectionObserverEntry"in window||"intersectionRatio"in window.IntersectionObserverEntry.prototype){r=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(r.unobserve(e.target),n(e.target))}))}),{root:null,rootMargin:"100px"}),e.forEach((function(e){r.observe(e)}))}else e.forEach(n)}function V(e){var t=document.createDocumentFragment(),r=document.createElement("div");for(r.innerHTML=e;r.childNodes[0];)t.appendChild(r.childNodes[0]);return t}function $(e){return Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")}function W(e,t){return K(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||Q(e,t)||G()}function Y(e){return K(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Q(e)||G()}function G(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Q(e,t){if(e){if("string"==typeof e)return J(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?J(e,t):void 0}}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function K(e){if(Array.isArray(e))return e}function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){ee(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var te,re={colour:"red",controls:!0,loadpolicy:!0,buttonstyle:"",preroll:"",postroll:"",thumbnailquality:"0",loadthumbnail:!0,cookies:!1};function ne(e){var t=e.pluginOptions,r=e.videoId,n=e.urlOptions,o=r,a={autoplay:1,modestbranding:1,rel:0};!1===t.controls&&(a.controls=0),t.loadpolicy&&(a.iv_load_policy=3),t.colour&&(a.color=t.colour);var i=t.preroll!==r&&t.preroll,l=t.postroll!==r&&t.postroll,c=[];i&&(o=i,c.push(r)),l&&c.push(l),c.length>0&&(a.playlist=c.join(","));var s=Z(Z({},a),n);s.t&&(s.start=function(e){if(Number(e))return Number(e);var t=0,r=[3600,60,1],n=e.match(/(?:(\d+)(?:h))?(?:(\d+)(?:m))?(?:(\d+)(?:s))?/);if(n)for(var o=1;o<n.length;o+=1)void 0!==n[o]&&(t+=Number(n[o])*r[o-1]);return t}(s.t));var u="www.youtube".concat(t.cookies?"":"-nocookie",".com");return"https://".concat(u,"/embed/").concat(o,"?").concat($(s))}function oe(e){var t=function(e){var t=new RegExp(["v=","/embed/","://youtu.be/"].join("|"),"i");return e.split(t)[1]}(e),r=Y(t.split(/[&#?]/));return{videoId:r[0],queryParams:r.slice(1).reduce((function(e,t){var r=W(t.split("="),2),n=r[0],o=r[1];return e[n]=o,e}),{})}}function ae(e){var t=oe(e.getAttribute("href")).videoId,r="https://i2.ytimg.com/vi/".concat(t,"/").concat(te.thumbnailquality,".jpg"),n=V('<img style="display:none" src="'.concat(r,'">')).firstChild;n.addEventListener("load",(function(){120===n.clientWidth&&(r=r.replace("maxresdefault","0")),e.style.backgroundImage||q(e,r),n.parentNode.removeChild(n)})),document.body.appendChild(n)}function ie(e){var t=e,r=oe(t.getAttribute("href")),n=r.videoId,o=r.queryParams;var a=void 0!==t.getAttribute("data-video-title")?t.getAttribute("data-video-title"):t.innerHTML?t.innerHTML:"";t.innerHTML=a.length>0?'\n    <div aria-hidden="true" class="lazy-load-info">\n      <div class="titletext youtube">'.concat(a,"</div>\n    </div>"):"";var i=V('<div aria-hidden="true" class="lazy-load-div"></div>');t.insertBefore(i,t.firstChild),te.buttonstyle&&t.classList.add(te.buttonstyle);var l=V('<div aria-hidden="true" class="lazy-load-info-extra">\n      <div class="overlaytext">'.concat(te.overlaytext,"</div>\n    </div>"));te.overlaytext.length>0&&t.parentNode.insertBefore(l,null),D(t.parentNode),t.addEventListener("click",(function(e){var r=e.currentTarget;if(e.preventDefault(),"a"===r.tagName.toLowerCase()){r.classList.remove("preview-youtube");var a=ne({pluginOptions:te,videoId:n,urlOptions:o}),i=Number(t.clientHeight),l=Number(t.clientWidth),c=V('<iframe width="'.concat(l,'px" height="').concat(i,'px" style="vertical-align:top; height: ').concat(i,"px; width: ").concat(l,'px" src="').concat(a,'" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; accelerometer; clipboard-write; encrypted-media; gyroscope" allowfullscreen></iframe>')),s=r.parentNode;s&&s.replaceChild(c,r)}}),!0)}function le(e){var t=e.rootNode,r=e.loadthumbnail,n=I("a.lazy-load-youtube",t);n.forEach(ie),r&&U(n,(function(e){return ae(e)}))}var ce=function(e){F({load:le,pluginOptions:te=Z(Z({},re),e)})};function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){de(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function de(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function pe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ve(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ve(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ve(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var me,fe="preview-vimeo",be={buttonstyle:"",playercolour:"",loadthumbnail:!0,thumbnailquality:!1,cookies:!1};function he(e,t){var r=V('<div aria-hidden="true" class="lazy-load-div"></div>');if(e.appendChild(r),window.llvConfig.vimeo.loadthumbnail){var n=function(e){if(!e)return"";var t=e.match(/_\d+x\d+/);if(t){var r=pe(t[0].match(/\d+/g),2),n=r[0],o=r[1],a={basic:e.replace(t,"_".concat(640,"x",Math.round(o*(640/n)))),medium:e.replace(t,"_".concat(1280,"x",Math.round(o*(1280/n)))),max:e.replace(t,"")};return a[me.thumbnailquality]||a.basic}return e}(e.getAttribute("data-video-thumbnail"));n&&U(I('[id="'.concat(t,'"]')),(function(e){return q(e,n)}))}if(window.llvConfig.vimeo.show_title){var o=e.getAttribute("data-video-title"),a=window.llvConfig.vimeo.show_title&&o.length>0,i=V('<div aria-hidden="true" class="lazy-load-info">\n        <div class="titletext vimeo">'.concat(o,"</div>\n      </div>"));a&&e.appendChild(i)}me.buttonstyle&&e.classList.add(me.buttonstyle)}function ye(e){e.addEventListener("click",(function(e){var t=e.currentTarget;if(e.preventDefault(),"a"===t.tagName.toLowerCase()){var r,n=t.getAttribute("id"),o=t.getAttribute("href"),a=((r=new URL(o).search)?{queryParams:r.replace("?","").split("&").reduce((function(e,t){var r=pe(t.split("="),2),n=r[0],o=r[1];return e[n]=o,e}),{})}:{queryParams:{}}).queryParams;t.classList.remove(fe),me.playercolour=me.playercolour.toString().replace(/[.#]/g,"");var i=function(e){var t=e.queryParams,r=e.pluginOptions,n=void 0===r?{}:r,o=ue(ue({},t),{},{autoplay:1,dnt:n.cookies?0:1});return n.playercolour&&(o.color=n.playercolour),o}({queryParams:a,pluginOptions:me}),l=V('<iframe src="'.concat(function(e){var t=e.videoId,r=e.queryParams;return"".concat(function(e){return"https://player.vimeo.com/video/".concat(e)}(t),"?").concat($(r))}({videoId:n,queryParams:i}),'" style="height:').concat(Number(t.clientHeight),'px;width:100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>')),c=t.parentNode;c&&c.replaceChild(l,t)}}),!0)}function ge(e){var t=e.rootNode;I(".".concat(fe),t).forEach((function(e){!function(e){var t=e,r=t.getAttribute("id");t.innerHTML="",he(t,r);var n=me.overlaytext.length>0,o=V('<div aria-hidden="true" class="lazy-load-info-extra">\n      <div class="overlaytext">'.concat(me.overlaytext,"</div>\n    </div>"));n&&t.parentNode.insertBefore(o,null)}(e),D(e.parentNode),ye(e)}))}var we=function(e){F({load:ge,pluginOptions:me=ue(ue({},be),e)})},Ee=function(){return Ee=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Ee.apply(this,arguments)},_e={youtube:{title:"YouTube",icon:M,keywords:[(0,w.__)("music"),(0,w.__)("video")],description:(0,w.__)("Embed a YouTube video."),patterns:[/^https?:\/\/((m|www)\.)?youtube\.com\/.+/i,/^https?:\/\/youtu\.be\/.+/i],attributes:{providerNameSlug:"youtube",responsive:!0},init:function(e){var t;(null===(t=null===window||void 0===window?void 0:window.llvConfig)||void 0===t?void 0:t.youtube)&&ce(Ee(Ee({},window.llvConfig.youtube),{rootNode:e}))}},vimeo:{title:"Vimeo",icon:z,keywords:[(0,w.__)("video")],description:(0,w.__)("Embed a Vimeo video."),patterns:[/^https?:\/\/(www\.)?vimeo\.com\/.+/i],attributes:{providerNameSlug:"vimeo",responsive:!0},init:function(e){var t;(null===(t=null===window||void 0===window?void 0:window.llvConfig)||void 0===t?void 0:t.vimeo)&&we(Ee(Ee({},window.llvConfig.vimeo),{rootNode:e}))}},default:{title:(0,w._x)("Embed","block title"),icon:T,init:function(){}}};var Oe=function(){return Oe=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Oe.apply(this,arguments)};function Se(e){var t=e.attributes,r=e.isSelected,n=e.onReplace,i=e.setAttributes,c=e.insertBlocksAfter,s=t.providerNameSlug,u=t.responsive,d=t.url,p=t.allowResponsive,h=t.className;t.className=t.className||void 0;var E=_e[s]||_e.default,O=E.icon,S=E.title,j=E.init,C=(0,a.useState)(d),P=C[0],A=C[1],L=(0,a.useState)(!1),T=L[0],M=L[1],z=(0,R.useDispatch)("core/data").invalidateResolution,I=(0,a.useState)(null),q=I[0],D=I[1];(0,a.useEffect)((function(){q&&j(q)}),[q,j]);var H=(0,R.useSelect)((function(e){var t,r=e("core"),n=r.getEmbedPreview,o=r.isPreviewEmbedFallback,a=r.isRequestingEmbedPreview,i=r.getThemeSupports;if(!d)return{fetching:!1,cannotEmbed:!1};var l=n(d),c=o(d),s=404===(null===(t=null==l?void 0:l.data)||void 0===t?void 0:t.status),u=!!l&&!s;return{preview:u?l:void 0,fetching:a(d),themeSupportsResponsive:i()["responsive-embeds"],cannotEmbed:!u||c}}),[d]),F=H.preview,U=H.fetching,V=H.themeSupportsResponsive,$=H.cannotEmbed,W=(0,a.useCallback)((function(){return Oe(Oe({},t),g(F,S,h,u,p))}),[p,t,h,F,u,S]);(0,a.useEffect)((function(){if((null==F?void 0:F.html)&&$&&!U){var e=d.replace(/\/$/,"");A(e),M(!1),i({url:e})}}),[null==F?void 0:F.html,d,$,U,i]),(0,a.useEffect)((function(){if(F&&!T&&(lodash.isEqual(t,W())||i(W()),n)){var r=function(e){var t;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{preview:n,attributes:o={}}=e,{url:a,providerNameSlug:i,type:c,...s}=o;if(!a||!(0,v.getBlockType)(m))return;const u=f(a),d="wordpress"===i||c===l;if(!d&&u&&(u.attributes.providerNameSlug!==i||!i))return(0,v.createBlock)(m,{url:a,...s,...u.attributes});const p=null===(t=(0,v.getBlockVariations)(m))||void 0===t?void 0:t.find((e=>{let{name:t}=e;return"wordpress"===t}));return p&&n&&b(n.html)&&!d?(0,v.createBlock)(m,{url:a,...p.attributes,...r}):void 0}(e,W());r&&n(r)}}),[F,T,W,n,e,t,i]);var Y=(0,_.useBlockProps)();if(U)return React.createElement("div",Y,React.createElement(x,null));var G=(0,w.sprintf)((0,w.__)("%s URL"),S);if(!F||$||T)return React.createElement("div",Y,React.createElement(k,{icon:O,label:G,onSubmit:function(e){e&&e.preventDefault(),M(!1),i({url:P})},value:P,cannotEmbed:$,onChange:function(e){return A(e.target.value)},fallback:function(){return function(e,t){const r=(0,a.createElement)("a",{href:e},e);t((0,v.createBlock)("core/paragraph",{content:(0,a.renderToString)(r)}))}(P,n)},tryAgain:function(){z("core","getEmbedPreview",[P])}}));var Q=W(),J=Q.caption,K=Q.allowResponsive,X=Q.className,Z=o()(X,e.className,!r&&"lazy-load-block-play");return React.createElement("div",Y,React.createElement("div",{ref:function(e){return D(e)}},React.createElement(N,{showEditButton:F&&!$,themeSupportsResponsive:V,blockSupportsResponsive:u,allowResponsive:K,toggleResponsive:function(){var e=F.html,t=!p;i({allowResponsive:t,className:y(e,h,u&&t)})},switchBackToURLInput:function(){return M(!0)}}),React.createElement(B,{preview:F,type:"wp-embed",previewable:!0,className:Z,url:P,caption:J,onCaptionChange:function(e){return i({caption:e})},isSelected:r,icon:O,label:G,insertBlocksAfter:c})))}function Ne(e){var t=e.attributes,r=e.setAttributes;return React.createElement(_.InspectorAdvancedControls,null,React.createElement(E.TextControl,{autoComplete:"off",label:(0,w.__)("Additional CSS class(es)"),value:t.className||"",onChange:function(e){r({className:""!==e?e:void 0})},help:(0,w.__)("Separate multiple classes with spaces.")}))}function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},xe.apply(this,arguments)}var ke=(0,t.createHigherOrderComponent)((function(e){return function(t){var r,n,o=t.attributes,a=t.name,i="youtube"===(null==o?void 0:o.providerNameSlug)&&(null===(r=window.llvConfig)||void 0===r?void 0:r.youtube),l="vimeo"===(null==o?void 0:o.providerNameSlug)&&(null===(n=window.llvConfig)||void 0===n?void 0:n.vimeo);return"core/embed"===a&&(i||l)?[React.createElement(Se,xe({key:"edit"},t)),t.isSelected&&React.createElement(Ne,xe({key:"edit-controls"},t))]:React.createElement(e,t)}}),"lazyLoadVideos");(0,e.addFilter)("editor.BlockEdit","kw/lazy-load-videos",ke,5)}()}();