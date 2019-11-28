(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"./doc/tutorials/hello-crm.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),o=t.n(a),m=t("./node_modules/@mdx-js/tag/dist/index.js");function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},m=Object.keys(e);for(a=0;a<m.length;a++)t=m[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)t=m[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.default=function(e){var n=e.components;r(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:n},o.a.createElement(m.MDXTag,{name:"h1",components:n,props:{id:"hello-crm"}},"Hello, CRM!"),o.a.createElement(m.MDXTag,{name:"p",components:n},"While our hello-world component might be great, it does not do much to interact with the webclient. This tutorial is a continuation of the first tutorial, and aims to create a more advanced component than hello-world."),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"a-new-component"}},"A new component"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Create a new component with ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lime-project")),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"lime-project generate web-component hello-crm\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Just as with our first component, we can remove most of the code in ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"")," and add more as needed. To get started, our component should look like this."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx",metaString:""}},"import { Component, Element, Prop } from '@stencil/core';\nimport { LimeWebComponent, LimeWebComponentContext, LimeWebComponentPlatform } from '@limetech/lime-web-components-interfaces';\n\n@Component({\n    tag: 'lwc-my-plugin-hello-crm',\n    shadow: true\n})\nexport class HelloCrm implements LimeWebComponent {\n    @Prop()\n    public platform: LimeWebComponentPlatform;\n\n    @Prop()\n    public context: LimeWebComponentContext;\n\n    @Element()\n    public element: HTMLElement;\n\n    public render() {\n        return 'Hello, CRM!';\n    }\n}\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Let's also add it to the same slot as hello-world so we can view it in the webclient."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json",metaString:""}},'[\n    ...\n    {\n        "name": "lwc-my-plugin-hello-crm",\n        "slot": "object.card.head.panels"\n    }\n]\n')),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"conditional-rendering"}},"Conditional rendering"),o.a.createElement(m.MDXTag,{name:"p",components:n},"At the moment, our component is more or less the same as the hello-world component. To make it a bit more interesting, lets add some conditional rendering and only render our component on the company card."),o.a.createElement(m.MDXTag,{name:"p",components:n},"To do this, lets modify our ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"render")," method to check if the current context is ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"company"),"."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx",metaString:""}},"public render() {\n    if (this.context.limetype !== 'company') {\n        return;\n    }\n\n    return 'Hello, CRM!';\n}\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},'Now, if we visit a company card we should se both "Hello, world!" and "Hello, CRM!" printed, but on all other cards, only "Hello, world!" is printed.'),o.a.createElement(m.MDXTag,{name:"p",components:n},"Let's make the component do something a bit more interesting than just rendering a string. Let's add a label displaying the name of the company, and a button that changes the name once it's been pressed."),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"connecting-to-the-state"}},"Connecting to the state"),o.a.createElement(m.MDXTag,{name:"p",components:n},"To get the name of the company we need to define a property on our component and connect it to the state."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx",metaString:""}},"import { CurrentLimeobject } from '@limetech/lime-web-components-decorators';\n\nexport class HelloCrm implements LimeWebComponent {\n    @CurrentLimeobject()\n    @State()\n    private company: object = {};\n\n    ...\n}\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"This will make the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"company")," property contain the current company from the context. To render the name, we simply have to modify our ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"render")," method like so:"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx",metaString:""}},"public render() {\n    ...\n    return (\n        <h2>Hello, {this.company['name']}!</h2>\n    );\n}\n")),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"using-the-core-api"}},"Using the Core API"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Let's also add a button to the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"render")," method that changes the name of the company once it has been pressed. To change the name, we are going to use the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"http")," service from the platform to call the Core API and change the name."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx",metaString:""}},"public render() {\n    ...\n    return [\n        <h2>Hello, {this.company['name']}!</h2>,\n        <limel-button primary label=\"Click me!\" onClick={this.handleClick.bind(this)} />\n    ];\n}\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"The ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"handleClick")," method should look something like this"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx",metaString:""}},"private async handleClick() {\n    await this.platform.http.put(`api/v1/limeobject/company/${this.context.id}/`, {\n        name: `Super ${this.company['name']}!`\n    });\n    console.log('Company name has been updated!');\n}\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Try it out and press the button. The name of the company is updated automatically!"))}}}]);