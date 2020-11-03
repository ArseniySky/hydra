(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{223:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(7),c=(n(0),n(239)),o={id:"static_schema",title:"Static schema with many configs"},i={unversionedId:"tutorials/structured_config/static_schema",id:"tutorials/structured_config/static_schema",isDocsHomePage:!1,title:"Static schema with many configs",description:"Example",source:"@site/docs/tutorials/structured_config/6_static_schema_many_configs.md",slug:"/tutorials/structured_config/static_schema",permalink:"/docs/next/tutorials/structured_config/static_schema",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/structured_config/6_static_schema_many_configs.md",version:"current",lastUpdatedBy:"Sven",lastUpdatedAt:1604440615,sidebar:"docs",previous:{title:"Structured config schema",permalink:"/docs/next/tutorials/structured_config/schema"},next:{title:"Dynamic schema with many configs",permalink:"/docs/next/tutorials/structured_config/dynamic_schema"}},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/examples/tutorials/structured_configs/6_static_schema_many_configs/"}),Object(c.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example-informational",alt:"Example"})))),Object(c.b)("p",null,"We have seen that if the name of the config file matches the name of a configs stored in the ",Object(c.b)("inlineCode",{parentName:"p"},"ConfigStore")," it will be used to validate the config file automatically.\nThis is useful if there is a one-to-one mapping between the Structured Configs and the YAML files.\nSuch convenient mapping does not exist when we have many config files and just one schema."),Object(c.b)("p",null,"If the config has a static structure, You can define it using Structured Configs.\nAny config merged into this config structure will be validated against the schema you define."),Object(c.b)("div",{className:"row"},Object(c.b)("div",{className:"col col--6"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'@dataclass\nclass DBConfig:\n    driver: str = MISSING\n    host: str = MISSING\n    user: str = MISSING\n    password: str = MISSING\n\n@dataclass\nclass Config:\n    db: DBConfig = MISSING\n\ncs = ConfigStore.instance()\ncs.store(name="config", node=Config)\n\n@hydra.main(config_path="conf", \n            config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n\n\n\n'))),Object(c.b)("div",{className:"col  col--6"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="Config directory"',title:'"Config','directory"':!0}),"\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 prod.yaml\n    \u251c\u2500\u2500 qa.yaml\n    \u2514\u2500\u2500 staging.yaml\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"defaults:\n  - db: staging\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/staging.yaml"',title:'"db/staging.yaml"'}),"# @package _group_\ndriver: mysql\nhost: mysql001.staging\nuser: root\npassword: root\n")))),Object(c.b)("p",null,"In the above example, the 3 yaml files has the structure compatible with the ",Object(c.b)("inlineCode",{parentName:"p"},"Config")," dataclass.\nYou can have as many such configs as you want."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Output"',title:'"Output"'}),"$ python my_app.py db=prod\ndb:\n  driver: mysql\n  host: mysql001.prod\n  user: root\n  password: '1234'\n")))}u.isMDXComponent=!0},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(o,".").concat(f)]||m[f]||p[f]||c;return n?r.a.createElement(d,i(i({ref:t},l),{},{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);