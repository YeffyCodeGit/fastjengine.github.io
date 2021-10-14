"use strict";(self.webpackChunkfastj_docs=self.webpackChunkfastj_docs||[]).push([[498],{1231:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return g},contentTitle:function(){return r},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],g={sidebar_position:3,keywords:["fastj tutorial","how to use fastj","tutorial for fastj","how to fastj","fastj how to","fastj in 5 minutes","how do I use fastj","fastj guide","fastj how to use logging","fastj how to log messages","log messages in fastj","fastj how to make a game"],description:"Debug your application using the logging capabilities of FastJ!"},r="Logging in FastJ",l={unversionedId:"tutorials/logging-in-fastj",id:"tutorials/logging-in-fastj",isDocsHomePage:!1,title:"Logging in FastJ",description:"Debug your application using the logging capabilities of FastJ!",source:"@site/wiki/tutorials/logging-in-fastj.md",sourceDirName:"tutorials",slug:"/tutorials/logging-in-fastj",permalink:"/wiki/tutorials/logging-in-fastj",editUrl:"https://github.com/fastjengine/fastjengine.github.io/edit/main/wiki/tutorials/logging-in-fastj.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,keywords:["fastj tutorial","how to use fastj","tutorial for fastj","how to fastj","fastj how to","fastj in 5 minutes","how do I use fastj","fastj guide","fastj how to use logging","fastj how to log messages","log messages in fastj","fastj how to make a game"],description:"Debug your application using the logging capabilities of FastJ!"},sidebar:"defaultSidebar",previous:{title:"Configuring FastJ",permalink:"/wiki/tutorials/fastj-configuration"}},u=[{value:"Standard logging messages",id:"standard-logging-messages",children:[]},{value:"Warning logging",id:"warning-logging",children:[]},{value:"Error logging",id:"error-logging",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],c={toc:u};function h(t){var e=t.components,n=(0,a.Z)(t,s);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logging-in-fastj"},"Logging in FastJ"),(0,o.kt)("p",null,"After the last tutorial, you should have a basic FastJ project which runs successfully.\nIf you don't, be sure to check the last tutorial which can be found ",(0,o.kt)("a",{parentName:"p",href:"/wiki/fastj-basics/fastj-quick-start",title:"Hit the ground running by creating your first FastJ program!"},"here")," and follow through or at least read it through thoroughly."),(0,o.kt)("p",null,"So, what even is logging? Well, when your application is running, many things are happening in your application. Even for a simple app, many things are going on\nin the backend. It would be quite helpful to see exactly what's happening right? For example, let's say your game crashes because of some variable having a incorrect value.\nOne option, would be to spend a minute to walk through the code and figure out what the variable value is. The easier way? Print out the variable and look at the value.\nLogging is basically exactly that, but better. It lets you print detailed messages about everything happening in your game, so you can debug with ease."),(0,o.kt)("p",null,"FastJ has an inbuilt system for handling logging, which is the main topic of this article."),(0,o.kt)("h2",{id:"standard-logging-messages"},"Standard logging messages"),(0,o.kt)("p",null,"This is the most basic type of log. Nothing special, just standard info being logged to the console. Usually just used for sending messages\nwhich just give debugging data. The way to do it is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import tech.fastj.engine.FastJEngine;\n\npublic class Main {\n    public static void main(String[] args) {\n        FastJEngine.log("Hello! This is an informational logging statement.");\n    }\n}\n')),(0,o.kt)("p",null,"Pretty simple, not much to it."),(0,o.kt)("h2",{id:"warning-logging"},"Warning logging"),(0,o.kt)("p",null,"This is used when you want to send warn messages. Basically, something has a chance of going wrong, but it's not an\nactual problem yet. You can send warn messages like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import tech.fastj.engine.FastJEngine;\n\npublic class Main {\n    public static void main(String[] args) {\n        FastJEngine.warning("Be careful now! This is a warning.");\n    }\n}\n')),(0,o.kt)("h2",{id:"error-logging"},"Error logging"),(0,o.kt)("p",null,"This one is pretty self-explanatory. Your code has broken, and your logging exactly how it broke.\nThe error function is slightly different from the other functions we've seen so far however, as it requires a ",(0,o.kt)("inlineCode",{parentName:"p"},"Exception")," parameter, which it uses to print out the problem in the code, then throw that error.\nHere's an example where we're creating our own exception and using it in the function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import tech.fastj.engine.FastJEngine;\n\npublic class Main {\n    public static void main(String[] args) {\n        IllegalStateException exampleException = new IllegalStateException("This is an example exception.");\n        FastJEngine.error("Oh dear, looks like something went wrong. This is an error message.", exampleException);\n    }\n}\n')),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Basically, logging is a powerful tool you can use to make your life debugging your games much, much easier, and FastJ provides a very simple API for logging."))}h.isMDXComponent=!0}}]);