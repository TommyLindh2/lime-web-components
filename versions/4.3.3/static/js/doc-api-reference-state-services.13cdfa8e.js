(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./doc/api-reference/state-services.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),m=a.n(t),o=a("./node_modules/@mdx-js/tag/dist/index.js");function r(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}var p=function(e){var n=e.components;r(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"p",components:n},"Service for letting a Lime web component subscribe to state changes"),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"methods"}},"Methods"),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"subscribe"}},"subscribe"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"subscribe"),"(",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"callback"),": function, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"options?"),": StateOptions): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"function")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Subscribe to state changes"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25aa ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"callback"),": ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"function")),m.a.createElement(o.MDXTag,{name:"p",components:n},"function to call when subscription updates"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 (): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"void")),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25aa",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Optional"),"  ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"options"),": ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"StateOptions")),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"function")),m.a.createElement(o.MDXTag,{name:"p",components:n},"unsubscribe callback"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 (): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"void")),m.a.createElement(o.MDXTag,{name:"hr",components:n}))};function c(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}var s=function(e){var n=e.components;c(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"p",components:n},"Options for the state selector"),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"optional-filter"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"Optional")," filter"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u2022 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"filter"),"? : ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Array\u2039function\u203a")),m.a.createElement(o.MDXTag,{name:"p",components:n},"List of functions that will be used to filter any changes to the state.\nThe functions will be bound to the web component instance"),m.a.createElement(o.MDXTag,{name:"hr",components:n}),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"optional-map"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"Optional")," map"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u2022 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"map"),"? : ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Array\u2039function\u203a")),m.a.createElement(o.MDXTag,{name:"p",components:n},"List of functions that will be used to map the state.\nThe functions will be bound to the web component instance"),m.a.createElement(o.MDXTag,{name:"hr",components:n}))};function l(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}var g=function(e){var n=e.components;l(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"methods"}},"Methods"),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"loadobject"}},"loadObject"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"loadObject"),"(",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"limetype"),": string, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"id"),": number): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"void")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Load the specified limeobject into the state"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"limetype")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"-")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"id")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})))),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"void")),m.a.createElement(o.MDXTag,{name:"hr",components:n}),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"loadrelations"}},"loadRelations"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"loadRelations"),"(",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"limetype"),": string, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"id"),": number, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"property"),": string, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"options?"),": LoadOptions): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Promise\u2039ObjectResponse\u203a")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Load related objects into the state"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"limetype")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"name of the limetype of the owning limeobject")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"id")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"the id of the owning limeobject")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"property")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"name of the property that contain the relations")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"options?")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"LoadOptions"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"options about the objects to load")))),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Promise\u2039ObjectResponse\u203a")),m.a.createElement(o.MDXTag,{name:"p",components:n},"list of related objects together with total count of objects"),m.a.createElement(o.MDXTag,{name:"hr",components:n}),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"optional-reloadobject"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"Optional")," reloadObject"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"reloadObject"),"(",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"limetype"),": string, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"id"),": number): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"void")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Reload the specified limeobject and update corresponding views in the webclient"),m.a.createElement(o.MDXTag,{name:"p",components:n},"NOTE: This is just a temporary method that can be used to get around some quirks in the current version of the\nwebclient. It is deprecated and code should not rely on its existance. Check if the method exists before using\nit to make code backwards compatible, e.g. ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"limeobjects.reload && limeobjects.reload('company', 1001)")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Once the quirks in the webclient have been fixed, there should be no need for this method and objects should\nupdate themselves automatically."),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"deprecated"))," "),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"limetype")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"id")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number")))),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"void")),m.a.createElement(o.MDXTag,{name:"hr",components:n}),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"subscribe"}},"subscribe"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"subscribe"),"(",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"callback"),": function, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"options?"),": StateOptions): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"function")),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Inherited from LimeobjectsStateService.subscribe")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Subscribe to state changes"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25aa ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"callback"),": ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"function")),m.a.createElement(o.MDXTag,{name:"p",components:n},"function to call when subscription updates"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 (): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"void")),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25aa",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Optional"),"  ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"options"),": ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"StateOptions")),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"function")),m.a.createElement(o.MDXTag,{name:"p",components:n},"unsubscribe callback"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 (): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"void")),m.a.createElement(o.MDXTag,{name:"hr",components:n}))};function i(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}var T=function(e){var n=e.components;i(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"p",components:n},"Service for creating background tasks"),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"methods"}},"Methods"),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"create"}},"create"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"create"),"(",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"url"),": string, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"data"),": any, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"cancelAction?"),": boolean, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"message?"),": string): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Promise\u2039string | void\u203a")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Create a new background task"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"url")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"url to the resource that will create the task")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"data")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"any"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"task specific data")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"cancelAction?")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"boolean"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"true to allow task creation to be cancelled")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"message?")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"notification message to display before the task is created instead of the default one")))),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Promise\u2039string | void\u203a")),m.a.createElement(o.MDXTag,{name:"p",components:n},"a promise that resolves to the id of the task if it was created successfully"),m.a.createElement(o.MDXTag,{name:"hr",components:n}),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"getstatus"}},"getStatus"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"getStatus"),"(",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ids"),": string]): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Promise\u2039[TaskStatus[]\u203a")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Get status about specific tasks"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"ids")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string[]"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"the ids of the tasks to check")))),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Promise\u2039TaskStatus[]\u203a")),m.a.createElement(o.MDXTag,{name:"p",components:n},"a promise that resolves to the status about the tasks"),m.a.createElement(o.MDXTag,{name:"hr",components:n}),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"subscribe"}},"subscribe"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"subscribe"),"(",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"callback"),": function, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"options?"),": StateOptions): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"function")),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Inherited from LimeobjectsStateService.subscribe")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Subscribe to state changes"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25aa ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"callback"),": ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"function")),m.a.createElement(o.MDXTag,{name:"p",components:n},"function to call when subscription updates"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 (): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"void")),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25aa",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Optional"),"  ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"options"),": ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"StateOptions")),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"function")),m.a.createElement(o.MDXTag,{name:"p",components:n},"unsubscribe callback"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 (): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"void")),m.a.createElement(o.MDXTag,{name:"hr",components:n}))};function E(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}n.default=function(e){var n=e.components;E(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"stateservices"}},"StateServices"),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"stateservice"}},"StateService"),m.a.createElement(p,null),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"limeobjectsstateservice"}},"LimeobjectsStateService"),m.a.createElement(g,null),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"taskservice"}},"TaskService"),m.a.createElement(T,null),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"stateoptions"}},"StateOptions"),m.a.createElement(s,null))}}}]);