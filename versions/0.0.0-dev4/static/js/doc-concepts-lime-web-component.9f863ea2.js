(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./doc/concepts/lime-web-component.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js");function m(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}n.default=function(e){var n=e.components;m(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"lime-web-component"}},"Lime Web Component"),r.a.createElement(a.MDXTag,{name:"p",components:n},"A root component is a component that lives directly within the webclient and is not nested within any other component. All root components have to implement the ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"LimeWebComponent")," interface in order to work properly and the webclient will pass down the required properties when the web component is created."),r.a.createElement(a.MDXTag,{name:"p",components:n},"Components that are not root components are not required to implement the ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"LimeWebComponent")," interface. However, if they make use of the context or any of the platform services, these have to be passed down explicity by the consumer. Components that make use of the state decorators are required to fully implement ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"LimeWebComponent"),"."))}}}]);