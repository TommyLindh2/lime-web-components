(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./doc/tutorials/hello-grid.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js");function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.default=function(e){var n=e.components;l(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"hello-grid"}},"Hello, grid!"),o.a.createElement(r.MDXTag,{name:"p",components:n},"This guide will help you create a grid-component. The grid-component is used to control which widgets to show on the dashboard, and how they are displayed at different screen sizes."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"creating-a-plugin"}},"Creating a plugin"),o.a.createElement(r.MDXTag,{name:"p",components:n},"While you can create a grid-component in an existing plugin, you will most likely want to separate your widgets and your grid. So we'll start by creating a new plugin."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Run ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lime-project")," to create a new plugin"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"lime-project new plugin\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"It can be named anything, but in this guide we'll name it ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"My Grid"),"."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"generating-a-web-component"}},"Generating a web component"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Enter the plugin directory and generate a new web component, using the command line flag ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"--grid=True"),":"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"cd my-grid\nlime-project generate web-component hello-grid --grid=True\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"When the first component is created, some project setup is needed which might take a while to complete."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"configuring-the-grid"}},"Configuring the grid"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Once the setup is complete, we can change directory to the root directory of the web components, and start our favorite editor."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"cd my_grid/web_components/lwc-components\ncode .\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Our hello-grid component is located in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/components/lwc-my-grid-hello-grid/lwc-my-grid-hello-grid.tsx"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"The component should look like this:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx",metaString:""}},"import { Component, Element, Prop } from '@stencil/core';\nimport {\n    LimeWebComponent,\n    LimeWebComponentContext,\n    LimeWebComponentPlatform,\n} from 'lime-web-component-interfaces';\n\n@Component({\n    tag: 'lwc-my-grid-hello-grid',\n    shadow: false,\n    styleUrl: 'lwc-my-grid-hello-grid.scss',\n})\nexport class HelloGrid implements LimeWebComponent {\n    /*\n     * The following properties are required by the `LimeWebComponent`\n     * interface.\n     */\n    @Prop()\n    public platform: LimeWebComponentPlatform;\n\n    @Prop()\n    public context: LimeWebComponentContext;\n\n    @Element()\n    public element: HTMLElement;\n\n    public render() {\n        return (\n            <div class=\"lwc-my-grid-hello-grid--grid-container\">\n                {/*\n                 * Add your widgets here.\n                 * You can use components from other plugins. There's no need to\n                 * install those other plugins in this one in any way. Just install\n                 * all of the plugins, including this one, in the webclient, as you\n                 * would any other plugin.\n                 */}\n                <lwc-my-todo-widget\n                    platform={this.platform}\n                    context={this.context}\n                />\n                <lwc-my-salespipe-widget\n                    platform={this.platform}\n                    context={this.context}\n                />\n            </div>\n        );\n    }\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"As you can see, there are two example-widgets listed in the grid. They are not real widgets, and won't actually render anything, but are there only to show how to use the grid. Replace them with the widgets you wish to actually use."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Note that you need to pass the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"LimeWebComponentPlatform")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"LimeWebComponentContext")," to the widgets you use."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Most of the configuration is actually done in CSS. The stylesheet is located in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/components/lwc-my-grid-hello-grid/lwc-my-grid-hello-grid.scss"),"."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-scss",metaString:""}},'@import "lime-elements/dist/mixins";\n\n.lwc-my-grid-hello-grid--grid-container {\n    // Give each widget a name using the `grid-area` property.\n    lwc-my-todo-widget { grid-area: todo; }\n    lwc-my-salespipe-widget { grid-area: sale; }\n\n    // Use these variables to design your grid for small, medium, and large screens.\n    $small:\n        "todo todo"\n        "todo todo"\n        "sale sale"\n        "sale sale";\n    $medium:\n        "todo todo sale sale"\n        "todo todo sale sale"\n        "todo todo sale sale";\n    $large:\n        "todo todo todo todo sale sale sale sale"\n        "todo todo todo todo sale sale sale sale"\n        "todo todo todo todo sale sale sale sale"\n        "todo todo todo todo sale sale sale sale";\n\n    @include grid-fullpage($large, $medium, $small);\n}\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"Configuring the grid involves two steps:"),o.a.createElement(r.MDXTag,{name:"ol",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Naming each widget"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Defining the grid layout")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Let's remove the two example widgets, and add the hello-world widget from the previous tutorial instead."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Update the render-function in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/components/lwc-my-grid-hello-grid/lwc-my-grid-hello-grid.tsx")," to look like this:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx",metaString:""}},'public render() {\n    return (\n        <div class="lwc-my-grid-hello-grid--grid-container">\n            <lwc-my-plugin-hello-world\n                platform={this.platform}\n                context={this.context}\n            />\n        </div>\n    );\n}\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"Then update ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/components/lwc-my-grid-hello-grid/lwc-my-grid-hello-grid.scss")," like this:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-scss",metaString:""}},'@import "lime-elements/dist/mixins";\n\n.lwc-my-grid-hello-grid--grid-container {\n    // Give each widget a name using the `grid-area` property.\n    lwc-my-plugin-hello-world { grid-area: hw; }\n\n    // Use these variables to design your grid for small, medium, and large screens.\n    $small:\n        "hw hw"\n        "hw hw"\n        "hw hw";\n    $medium:\n        "hw hw hw hw"\n        "hw hw hw hw"\n        "hw hw hw hw";\n    $large:\n        "hw hw hw hw . . . ."\n        "hw hw hw hw . . . ."\n        "hw hw hw hw . . . .";\n\n    @include grid-fullpage($large, $medium, $small);\n}\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"Note how we are using ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".")," to signify empty cells of the grid."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"configuring-a-slot"}},"Configuring a slot"),o.a.createElement(r.MDXTag,{name:"p",components:n},"To add this component to the dashboard, all we need to do is edit ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lwc.config.json")," and add our desired slot."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json",metaString:""}},'[\n    {\n        "name": "lwc-my-plugin-hello-world",\n        "slot": "dashboard"\n    }\n]\n')),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"installing-the-plugin"}},"Installing the plugin"),o.a.createElement(r.MDXTag,{name:"p",components:n},"We are now ready to install our plugin in the webclient. Change directory to the root directory of the plugin, and install both plugins with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"limeplug")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"cd my-grid\nlimeplug install .\ncd ..\ncd my-plugin\nlimeplug install .\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Once the webserver has been restarted, we should see our hello-world component render itself on the dashboard."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"further-reading"}},"Further reading"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The grid layout is further explained in the Grid section of the ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"lime-elements")," ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://lundalogik.github.io/lime-elements/"}},"documentation"),"."))}}}]);