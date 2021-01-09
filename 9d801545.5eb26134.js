(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{86:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return c})),o.d(e,"metadata",(function(){return l})),o.d(e,"toc",(function(){return i})),o.d(e,"default",(function(){return d}));var r=o(3),n=o(7),a=(o(0),o(100)),c={id:"start",title:"\u5feb\u901f\u5f00\u59cb"},l={unversionedId:"getting-started/start",id:"getting-started/start",isDocsHomePage:!1,title:"\u5feb\u901f\u5f00\u59cb",description:"\u7248\u672c\u9700\u6c42",source:"@site/docs/getting-started/start.md",slug:"/getting-started/start",permalink:"/docs/getting-started/start",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/getting-started/start.md",version:"current",sidebar:"docs",previous:{title:"Kratos \u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/changelog"},next:{title:"\u5de5\u5177\u4f7f\u7528",permalink:"/docs/getting-started/usage"}},i=[{value:"\u7248\u672c\u9700\u6c42",id:"\u7248\u672c\u9700\u6c42",children:[]},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",children:[]},{value:"\u9879\u76ee\u7f16\u8bd1\u548c\u8fd0\u884c",id:"\u9879\u76ee\u7f16\u8bd1\u548c\u8fd0\u884c",children:[]},{value:"\u9879\u76ee\u6a21\u677f",id:"\u9879\u76ee\u6a21\u677f",children:[]}],b={toc:i};function d(t){var e=t.components,o=Object(n.a)(t,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,o,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u7248\u672c\u9700\u6c42"},"\u7248\u672c\u9700\u6c42"),Object(a.b)("p",null,"\u9700\u8981\u4f7f\u7528 kratos v2.0.0 \u4ee5\u4e0a\u7248\u672c\uff1b"),Object(a.b)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),Object(a.b)("p",null,"\u9700\u8981\u5b89\u88c5\u597d\u5bf9\u5e94\u7684\u4f9d\u8d56\u73af\u5883\uff0c\u4ee5\u53ca\u5de5\u5177\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://golang.org/dl/"}),"go")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/protocolbuffers/protobuf"}),"protoc")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/protocolbuffers/protobuf-go"}),"protoc-gen-go"))),Object(a.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"# \u5b89\u88c5 kratos \u547d\u4ee4\u5de5\u5177\ngo get github.com/go-kratos/kratos/cmd/kratos\ngo get github.com/go-kratos/kratos/cmd/protoc-gen-go-http\ngo get github.com/go-kratos/kratos/cmd/protoc-gen-go-errors\n\n# \u6216\u8005\u901a\u8fc7 Source \u5b89\u88c5\ncd cmd/kratos && go install\ncd cmd/protoc-gen-go-http && go install\ncd cmd/protoc-gen-go-errors && go install\n")),Object(a.b)("h2",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"# \u521b\u5efa\u9879\u76ee\u6a21\u677f\nkratos new helloworld\n\ncd helloworld\n# \u751f\u6210proto\u6a21\u677f\nkratos proto add api/helloworld/helloworld.proto\n# \u751f\u6210service\u6a21\u677f\nkratos proto service api/helloworld/helloworld.proto -t internal/service\n")),Object(a.b)("h2",{id:"\u9879\u76ee\u7f16\u8bd1\u548c\u8fd0\u884c"},"\u9879\u76ee\u7f16\u8bd1\u548c\u8fd0\u884c"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"# \u751f\u6210api\u4e0b\u6240\u6709proto\u6587\u4ef6\nmake proto\n# \u7f16\u7801cmd\u4e0b\u6240\u6709main\u6587\u4ef6\nmake build\n# \u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\nmake test\n\n# \u8fd0\u884c\u9879\u76ee\n./bin/helloworld\n")),Object(a.b)("h2",{id:"\u9879\u76ee\u6a21\u677f"},"\u9879\u76ee\u6a21\u677f"),Object(a.b)("p",null,"Kratos \u662f\u901a\u8fc7\u5728\u7ebf github \u6a21\u677f\uff0c\u8fdb\u884c\u521b\u5efa\u9879\u76ee\u6a21\u677f\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/go-kratos/service-layout"}),"Service Layout"))))}d.isMDXComponent=!0}}]);