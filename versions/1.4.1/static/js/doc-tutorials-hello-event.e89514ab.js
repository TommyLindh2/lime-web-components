(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./doc/tutorials/hello-event.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),o=a.n(t),m=a("./node_modules/@mdx-js/tag/dist/index.js");function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},m=Object.keys(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}n.default=function(e){var n=e.components;i(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:n},o.a.createElement(m.MDXTag,{name:"h1",components:n,props:{id:"hello-event"}},"Hello, Event!"),o.a.createElement(m.MDXTag,{name:"p",components:n},"This guide illustrates how to replace the dialog when creating a new Limeobject with a custom one."),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"generate-a-new-component"}},"Generate a new component"),o.a.createElement(m.MDXTag,{name:"p",components:n},"First, we need to generate a new web component with ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lime-project")," that will hold the new dialog we want to be\ndisplayed instead of the original one."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash",metaString:""}},"lime-project generate web-component custom-dialog\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"The custom dialog will require some new functionality to replace the one in the default dialog. However, this is out of\nscope for this guide and we will only render a message. Feel free to add something more interesting!"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript",metaString:""}},"@Component({\n    tag: 'lwc-my-plugin-custom-dialog',\n    shadow: true,\n})\nexport class CustomDialog implements LimeWebComponent {\n    public render() {\n        return (\n            <limel-dialog open={true} onClose={this.handleClose}>\n                <h1>My custom dialog!</h1>\n            </limel-dialog>\n        );\n    }\n\n    private handleClose = () => {}\n}\n")),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"listen-for-command-events"}},"Listen for command events"),o.a.createElement(m.MDXTag,{name:"p",components:n},"To prevent the default dialog from appearing when a new Limeobject is created, we need to listen for the\n",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"command.received")," event and check if it is a ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"CreateLimeobjectDialogCommand")," that is being handled. This should be\ndone in the loader component that is generated automatically."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript",metaString:""}},"export class Loader implements LimePluginLoader {\n    public constructor() {\n        this.handleCommandReceived = this.handleCommandReceived.bind(this);\n    }\n\n    public componentWillLoad() {\n        this.platform.eventDispatcher.addListener(\n            CommandEvent.Received,\n            this.handleCommandReceived\n        );\n    }\n\n    private handleCommandReceived(event: CustomEvent) {}\n}\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Now, ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"handleCommandReceived")," will be invoked each time a command is being handled by the commandbus. We should now\ncheck for the command we are interested in, prevent the default action from happening and instead display the custom\ndialog. We can also add other checks, maybe we only want to handle a specific limetype."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript",metaString:""}},"private handleCommandReceived(event: CustomEvent) {\n    const command = event.detail.command;\n    if (getCommandId(command) !== getCommandId(CreateLimeobjectDialogCommand)) {\n        return;\n    }\n\n    if (command.limetype.name !== 'deal') {\n        return;\n    }\n\n    event.preventDefault();\n    this.platform.dialog.create('lwc-my-plugin-custom-dialog');\n}\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Now we have successfully added a custom dialog that will be displayed instead of the default one every time a new deal\nis created!"),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"trigger-the-original-command"}},"Trigger the original command"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Another use case might be to display our custom dialog, and after that display the original populated with some data\ngathered from our first one. To do this, we need to dispatch the original command again but also add a flag to it so we\nknow not to interrupt it once it reaches our event handler."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript",metaString:""}},"private handleCommandReceived(event: CustomEvent) {\n    ...\n    // Check if our custom flag has been set, if so don't do anything\n    if (command['_useOriginalHandler']) {\n        return;\n    }\n\n    // Set our custom flag so we don't handle this command again\n    command['_useOriginalHandler'] = true;\n\n    event.preventDefault();\n    this.platform.dialog.create('lwc-my-plugin-custom-dialog', { command });\n}\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"And in our dialog component, we can dispatch it once again"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript",metaString:""}},"export class CustomDialog implements LimeWebComponent {\n    @Prop()\n    public command: CreateLimeobjectDialogCommand;\n\n    private handleClose = () => {\n        // Add custom data to display in the original dialog\n        this.command.limeobject = {\n            name: 'The one big deal!'\n        };\n\n        // Handle the original command again\n        this.platform.commandBus.handle(this.command);\n    }\n}\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Now the custom dialog will be displayed everytime a new deal is created, and when the dialog closes it will open the\noriginal one instead, but populated with our custom data!"))}}}]);