(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./doc/api-reference/http-service.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),m=a.n(t),o=a("./node_modules/@mdx-js/tag/dist/index.js");function r(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}var p=function(e){var n=e.components;r(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"p",components:n},"HTTP service for sending requests to a given URL"),m.a.createElement(o.MDXTag,{name:"p",components:n},"By default, the service will work with the JSON data format. If anything but JSON is returned from the endpoint,\nthe ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"responseType")," property in the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"options")," parameter needs to be set."),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"methods"}},"Methods"),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"delete"}},"delete"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"delete"),"(",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"url"),": string, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"options?"),": HttpOptions): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Promise\u2039any\u203a")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Sends a delete request."),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"url")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Url to resource (for instance my_addon/endpoint).")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"options?")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"HttpOptions"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The HTTP options to send with the request.")))),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Promise\u2039any\u203a")),m.a.createElement(o.MDXTag,{name:"hr",components:n}),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"get"}},"get"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"get"),"(",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"url"),": string, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"options?"),": HttpOptions): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Promise\u2039any\u203a")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Sends a get request."),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"url")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Url to resource (for instance my_addon/endpoint).")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"options?")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"HttpOptions"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The HTTP options to send with the request.")))),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Promise\u2039any\u203a")),m.a.createElement(o.MDXTag,{name:"hr",components:n}),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"patch"}},"patch"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"patch"),"(",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"url"),": string, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"data?"),": object, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"options?"),": HttpOptions): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Promise\u2039any\u203a")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Sends a patch request."),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"url")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Url to resource (for instance my_addon/endpoint).")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"data?")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"object"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Payload to send to the server.")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"options?")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"HttpOptions"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The HTTP options to send with the request.")))),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Promise\u2039any\u203a")),m.a.createElement(o.MDXTag,{name:"hr",components:n}),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"post"}},"post"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"post"),"(",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"url"),": string, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"data?"),": object, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"options?"),": HttpOptions): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Promise\u2039any\u203a")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Sends a post request."),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"url")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Url to resource (for instance my_addon/endpoint).")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"data?")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"object"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Payload to send to the server.")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"options?")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"HttpOptions"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The HTTP options to send with the request.")))),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Promise\u2039any\u203a")),m.a.createElement(o.MDXTag,{name:"hr",components:n}),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"put"}},"put"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"put"),"(",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"url"),": string, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"data?"),": object, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"options?"),": HttpOptions): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Promise\u2039any\u203a")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Sends a put request."),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"url")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Url to resource (for instance my_addon/endpoint).")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"data?")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"object"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Payload to send to the server.")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"options?")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"HttpOptions"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The HTTP options to send with the request.")))),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Promise\u2039any\u203a")),m.a.createElement(o.MDXTag,{name:"hr",components:n}))};function l(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}var c=function(e){var n=e.components;l(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"optional-headers"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"Optional")," headers"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u2022 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"headers"),"? : ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"HttpHeaders")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Additional HTTP-headers to send in the request"),m.a.createElement(o.MDXTag,{name:"hr",components:n}),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"optional-params"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"Optional")," params"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u2022 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"params"),"? : ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"HttpParams")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Query parameters to include in the request"),m.a.createElement(o.MDXTag,{name:"hr",components:n}),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"optional-responsetype"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"Optional")," responseType"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u2022 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"responseType"),"? : ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"HttpResponseType")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Type of the response that is returned. Defaults to ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"json")),m.a.createElement(o.MDXTag,{name:"hr",components:n}))};function s(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}n.default=function(e){var n=e.components;s(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"httpservice"}},"HttpService"),m.a.createElement(p,null),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"httpoptions"}},"HttpOptions"),m.a.createElement(c,null))}}}]);