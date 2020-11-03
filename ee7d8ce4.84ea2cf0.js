(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{226:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(7),c=(r(0),r(239)),o={id:"search_path",title:"Config Search Path"},i={unversionedId:"advanced/search_path",id:"advanced/search_path",isDocsHomePage:!1,title:"Config Search Path",description:"The Config Search Path is a list of paths that are searched in order to find configs. It is similar to",source:"@site/docs/advanced/search_path.md",slug:"/advanced/search_path",permalink:"/docs/next/advanced/search_path",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/search_path.md",version:"current",lastUpdatedBy:"Sven",lastUpdatedAt:1604440615,sidebar:"docs",previous:{title:"Overriding packages",permalink:"/docs/next/advanced/overriding_packages"},next:{title:"Hydra plugins types",permalink:"/docs/next/advanced/plugins"}},p=[],s={rightToc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The Config Search Path is a list of paths that are searched in order to find configs. It is similar to\nthe Python PYTHONPATH."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"When a config is requested, The first matching config in the search path is used."),Object(c.b)("li",{parentName:"ul"},"Each search path element has a schema prefix such as file:// or pkg:// that is corresponding to a ConfigSourcePlugin."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"SearchPathPlugin")," can manipulate the search path.")),Object(c.b)("p",null,"You can inspect the search path and the configurations loaded by Hydra by turning on verbose logging for the ",Object(c.b)("inlineCode",{parentName:"p"},"hydra")," logger:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py hydra.verbose=hydra\n")))}l.isMDXComponent=!0},239:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),h=n,f=u["".concat(o,".").concat(h)]||u[h]||d[h]||c;return r?a.a.createElement(f,i(i({ref:t},s),{},{components:r})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);