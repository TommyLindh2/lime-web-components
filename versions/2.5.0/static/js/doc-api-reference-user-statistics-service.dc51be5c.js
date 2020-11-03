(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./doc/api-reference/user-statistics-service.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),r=a.n(t),m=a("./node_modules/@mdx-js/tag/dist/index.js");function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},m=Object.keys(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=function(e){var n=e.components;o(e,["components"]);return r.a.createElement(m.MDXTag,{name:"wrapper",components:n},r.a.createElement(m.MDXTag,{name:"p",components:n},"Service for tracking user statistics to ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Segment"),": ",r.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://segment.com/"}},"https://segment.com/")),r.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"methods"}},"Methods"),r.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"sendidentifyevent"}},"sendIdentifyEvent"),r.a.createElement(m.MDXTag,{name:"p",components:n},"\u25b8 ",r.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"sendIdentifyEvent"),"(",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"userId"),": number): ",r.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"any")),r.a.createElement(m.MDXTag,{name:"p",components:n},"Tie a user to their actions and record traits about them."),r.a.createElement(m.MDXTag,{name:"p",components:n},"Could be user for example when a user logs in."),r.a.createElement(m.MDXTag,{name:"p",components:n},r.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),r.a.createElement(m.MDXTag,{name:"table",components:n},r.a.createElement(m.MDXTag,{name:"thead",components:n,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),r.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),r.a.createElement(m.MDXTag,{name:"tbody",components:n,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"userId")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"the ID for the user.")))),r.a.createElement(m.MDXTag,{name:"p",components:n},r.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",r.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"any")),r.a.createElement(m.MDXTag,{name:"hr",components:n}),r.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"sendtrackevent"}},"sendTrackEvent"),r.a.createElement(m.MDXTag,{name:"p",components:n},"\u25b8 ",r.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"sendTrackEvent"),"(",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"trackName"),": TrackEventType | string, ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"properties?"),": any): ",r.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"any")),r.a.createElement(m.MDXTag,{name:"p",components:n},"Record the actions your users perform."),r.a.createElement(m.MDXTag,{name:"p",components:n},"The user will be recognized based on server name, database name and user id from current application."),r.a.createElement(m.MDXTag,{name:"p",components:n},r.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),r.a.createElement(m.MDXTag,{name:"table",components:n},r.a.createElement(m.MDXTag,{name:"thead",components:n,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),r.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),r.a.createElement(m.MDXTag,{name:"tbody",components:n,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"trackName")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"TrackEventType ","|"," string"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"the name of the event you are tracking.")),r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"properties?")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"any"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},'optional. Dictionary of properties, for example if the event was "Deal Created", it might have a property "price".')))),r.a.createElement(m.MDXTag,{name:"p",components:n},r.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",r.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"any")),r.a.createElement(m.MDXTag,{name:"hr",components:n}))};function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},m=Object.keys(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=function(e){var n=e.components;c(e,["components"]);return r.a.createElement(m.MDXTag,{name:"wrapper",components:n},r.a.createElement(m.MDXTag,{name:"p",components:n},"These are the track events that are being used by default in the web client."),r.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"enumeration-members"}},"Enumeration members"),r.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"globalsearchclicked"}},"GlobalSearchClicked"),r.a.createElement(m.MDXTag,{name:"p",components:n},"\u2022 ",r.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"GlobalSearchClicked"),': = "GLOBAL_SEARCH_CLICKED"'),r.a.createElement(m.MDXTag,{name:"p",components:n},"Tracks when a user clicks on the global search."),r.a.createElement(m.MDXTag,{name:"p",components:n},"Properties that are sent together with this track event in the web client:"),r.a.createElement(m.MDXTag,{name:"pre",components:n},r.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json",metaString:""}},"None\n")),r.a.createElement(m.MDXTag,{name:"hr",components:n}),r.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"globalsearchused"}},"GlobalSearchUsed"),r.a.createElement(m.MDXTag,{name:"p",components:n},"\u2022 ",r.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"GlobalSearchUsed"),': = "GLOBAL_SEARCH_USED"'),r.a.createElement(m.MDXTag,{name:"p",components:n},"Tracks when a user uses the global search."),r.a.createElement(m.MDXTag,{name:"p",components:n},"Properties that are sent together with this track event in the web client:"),r.a.createElement(m.MDXTag,{name:"pre",components:n},r.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json",metaString:""}},"properties: {\n     limetype: string,  (limetype of the chosen object)\n     character_count: number, (number of characters in the search)\n     top_10: boolean, (if the object was on top 10 in the search)\n     origin: string (where the event was triggered from, e.g. header or related)\n}\n")),r.a.createElement(m.MDXTag,{name:"hr",components:n}),r.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"objectcreated"}},"ObjectCreated"),r.a.createElement(m.MDXTag,{name:"p",components:n},"\u2022 ",r.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"ObjectCreated"),': = "OBJECT_CREATED"'),r.a.createElement(m.MDXTag,{name:"p",components:n},"Tracks when a user creates an object."),r.a.createElement(m.MDXTag,{name:"p",components:n},"Properties that are sent together with this track event in the web client:"),r.a.createElement(m.MDXTag,{name:"pre",components:n},r.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json",metaString:""}},"properties: {\n     limetype: string, (limetype of the created object)\n     origin: string (where the event was triggered from, e.g. header or related)\n}\n")),r.a.createElement(m.MDXTag,{name:"hr",components:n}),r.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"tableviewclicked"}},"TableViewClicked"),r.a.createElement(m.MDXTag,{name:"p",components:n},"\u2022 ",r.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"TableViewClicked"),': = "TABLE_VIEW_CLICKED"'),r.a.createElement(m.MDXTag,{name:"p",components:n},"Tracks when an table a user clicks on a table view."),r.a.createElement(m.MDXTag,{name:"p",components:n},"Properties that are sent together with this track event in the web client:"),r.a.createElement(m.MDXTag,{name:"pre",components:n},r.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json",metaString:""}},"properties: {\n     limetype: string, (which table view that is clicked)\n     origin: string (where the event was triggered from, e.g. header or related)\n}\n")),r.a.createElement(m.MDXTag,{name:"hr",components:n}))};function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},m=Object.keys(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}n.default=function(e){var n=e.components;l(e,["components"]);return r.a.createElement(m.MDXTag,{name:"wrapper",components:n},r.a.createElement(m.MDXTag,{name:"h1",components:n,props:{id:"userstatisticsservice"}},"UserStatisticsService"),r.a.createElement(p,null),r.a.createElement(m.MDXTag,{name:"h1",components:n,props:{id:"trackeventtype"}},"TrackEventType"),r.a.createElement(s,null))}}}]);