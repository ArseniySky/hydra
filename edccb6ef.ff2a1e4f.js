(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{225:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var a=r(2),n=r(7),i=(r(0),r(239)),o={id:"simple_cli",title:"A simple command-line application"},c={unversionedId:"tutorials/basic/your_first_app/simple_cli",id:"version-1.0/tutorials/basic/your_first_app/simple_cli",isDocsHomePage:!1,title:"A simple command-line application",description:"Example",source:"@site/versioned_docs/version-1.0/tutorials/basic/your_first_app/1_simple_cli.md",slug:"/tutorials/basic/your_first_app/simple_cli",permalink:"/docs/tutorials/basic/your_first_app/simple_cli",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/tutorials/basic/your_first_app/1_simple_cli.md",version:"1.0",lastUpdatedBy:"Sven",lastUpdatedAt:1604440615,sidebar:"version-1.0/docs",previous:{title:"Tutorials intro",permalink:"/docs/tutorials/intro"},next:{title:"Specifying a config file",permalink:"/docs/tutorials/basic/your_first_app/config_file"}},p=[],l={rightToc:p};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/blob/master/examples/tutorials/basic/your_first_hydra_app/1_simple_cli/my_app.py"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example-informational",alt:"Example"})))),Object(i.b)("p",null,"This is a simple Hydra application that prints your configuration.\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"my_app")," function is a place holder for your code.\nWe will slowly evolve this example to showcase more Hydra features."),Object(i.b)("p",null,"The examples in this tutorial are available ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/examples/tutorials/basic"}),"here"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'}),'from omegaconf import DictConfig, OmegaConf\nimport hydra\n\n@hydra.main()\ndef my_app(cfg: DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n')),Object(i.b)("p",null,"In this example, Hydra creates an empty ",Object(i.b)("inlineCode",{parentName:"p"},"cfg")," object and pass it to the function annotated with ",Object(i.b)("inlineCode",{parentName:"p"},"@hydra.main"),"."),Object(i.b)("p",null,"You can add config values via the command line. The ",Object(i.b)("inlineCode",{parentName:"p"},"+")," indicates that the field is new."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py +db.driver=mysql +db.user=omry +db.password=secret\ndb:\n  driver: mysql\n  user: omry\n  password: secret\n")),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced/hydra-command-line-flags"}),"Hydra's command line flags")," and\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced/override_grammar/basic"}),"Basic Override Syntax")," for more information about the command line."))}s.isMDXComponent=!0},239:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(r),b=a,d=m["".concat(o,".").concat(b)]||m[b]||u[b]||i;return r?n.a.createElement(d,c(c({ref:t},l),{},{components:r})):n.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);