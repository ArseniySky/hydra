(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(7),o=(n(0),n(239)),i={id:"config_file",title:"Specifying a config file"},c={unversionedId:"tutorials/basic/your_first_app/config_file",id:"version-1.0/tutorials/basic/your_first_app/config_file",isDocsHomePage:!1,title:"Specifying a config file",description:"Example",source:"@site/versioned_docs/version-1.0/tutorials/basic/your_first_app/2_config_file.md",slug:"/tutorials/basic/your_first_app/config_file",permalink:"/docs/tutorials/basic/your_first_app/config_file",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/tutorials/basic/your_first_app/2_config_file.md",version:"1.0",lastUpdatedBy:"Sven",lastUpdatedAt:1604440615,sidebar:"version-1.0/docs",previous:{title:"A simple command-line application",permalink:"/docs/tutorials/basic/your_first_app/simple_cli"},next:{title:"Using the config object",permalink:"/docs/tutorials/basic/your_first_app/using_config"}},p=[],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/examples/tutorials/basic/your_first_hydra_app/2_config_file"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example-informational",alt:"Example"})))),Object(o.b)("p",null,"It can get tedious to type all those command line arguments.\nOne solution is to create a configuration file in YAML format and place it next to ",Object(o.b)("inlineCode",{parentName:"p"},"my_app.py"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"db: \n  driver: mysql\n  user: omry\n  password: secret\n")),Object(o.b)("p",null,"Specify the config name by passing a ",Object(o.b)("inlineCode",{parentName:"p"},"config_name")," parameter to the ",Object(o.b)("inlineCode",{parentName:"p"},"@hydra.main()")," decorator.\nNote that you should omit the ",Object(o.b)("inlineCode",{parentName:"p"},".yaml")," extension."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="my_app.py" {1}',title:'"my_app.py"',"{1}":!0}),"@hydra.main(config_name='config')\ndef my_app(cfg):\n    print(OmegaConf.to_yaml(cfg))\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"config.yaml")," is loaded automatically when you run your application."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py\ndb:\n  driver: mysql\n  user: omry\n  password: secret\n")),Object(o.b)("p",null,"You can override values in the loaded config from the command line.",Object(o.b)("br",{parentName:"p"}),"\n","Note the lack of the ",Object(o.b)("inlineCode",{parentName:"p"},"+")," prefix."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:"{4-5}","{4-5}":!0}),"$ python my_app.py db.user=root db.password=1234\ndb:\n  driver: mysql\n  user: root\n  password: 1234\n")),Object(o.b)("p",null,"You can enable ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/tutorials/basic/running_your_app/tab_completion"}),"tab completion")," for your Hydra applications."))}s.isMDXComponent=!0},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);