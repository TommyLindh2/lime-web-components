(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./doc/concepts/slots.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),o=t.n(a),m=t("./node_modules/@mdx-js/tag/dist/index.js");function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},m=Object.keys(e);for(a=0;a<m.length;a++)t=m[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)t=m[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.default=function(e){var n=e.components;r(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:n},o.a.createElement(m.MDXTag,{name:"h1",components:n,props:{id:"slots"}},"Slots"),o.a.createElement(m.MDXTag,{name:"p",components:n},"The Lime CRM webclient defines a set of slots where Lime Web Components can be injected. To specify where a web component should live, edit the file ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lwc.config.json")," in the root directory for the web components."),o.a.createElement(m.MDXTag,{name:"p",components:n},"The format should be:"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json",metaString:""}},'[\n    {\n        "name": "<component-name>",\n        "slot": "<slot-name>"\n    }\n]\n')),o.a.createElement(m.MDXTag,{name:"p",components:n},"where ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<component-name>")," is the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"tag")," name of the web component specified in the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"@Component")," decorator, and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<slot-name>")," is the name of the slot."),o.a.createElement(m.MDXTag,{name:"p",components:n},"Only root components should be listed in ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lwc.config.json"),", i.e. components that are created and injected by the webclient. Other components, e.g. components that are nested or reused between many components, do not belong in any slot and should not be listed."),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"list-of-slots"}},"List of slots"),o.a.createElement(m.MDXTag,{name:"p",components:n},"The following slots are defined for Lime CRM webclient:"),o.a.createElement(m.MDXTag,{name:"table",components:n},o.a.createElement(m.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Slot"),o.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Location"))),o.a.createElement(m.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"object.card.head.panels")),o.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"In the header of the limeobject card")))))}}}]);