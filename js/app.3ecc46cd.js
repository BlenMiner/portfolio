(function(t){function e(e){for(var i,n,s=e[0],l=e[1],c=e[2],p=0,m=[];p<s.length;p++)n=s[p],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&m.push(a[n][0]),a[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],i=!0,s=1;s<o.length;s++){var l=o[s];0!==a[l]&&(i=!1)}i&&(r.splice(e--,1),t=n(n.s=o[0]))}return t}var i={},a={app:0},r=[];function n(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=i,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("div",{staticStyle:{height:"35px","padding-top":"20px","padding-right":"20px","background-color":"#EEE"}},[o("div",{staticStyle:{position:"absolute",transform:"translate(10px, -15px)"}},[o("v-icon",{attrs:{color:"#555"}},[t._v("mdi-application")]),o("span",{staticStyle:{color:"#555"}},[t._v(" portfolio.exe - Valentin BORDEIANU ")])],1),o("v-row",{staticStyle:{float:"right"}},[o("v-icon",{attrs:{color:"#aae091"}},[t._v("mdi-triangle")]),o("v-icon",{attrs:{color:"#ffabab"}},[t._v("mdi-square")]),o("v-icon",{attrs:{color:"#ffd984"}},[t._v("mdi-circle")])],1)],1),o("div",{staticStyle:{"padding-top":"30px","margin-left":"auto","margin-right":"auto","text-align":"center"}},[o("v-card",{staticClass:"rounded-circle",staticStyle:{position:"absolute",transform:"translate(-90px, 0px)"},attrs:{width:"80px",height:"80px",elevation:"10"}},[o("v-img",{attrs:{"max-width":"80px","max-height":"80px",src:"https://i.ibb.co/ZVtf6CQ/new-photo.png"}})],1),o("h1",{staticStyle:{"align-self":"center"}},[t._v(" Valentin Bordeianu ")]),o("div",[o("v-icon",[t._v("mdi-email")]),t._v(" valentin.bordeianu@protonmail.com ")],1)],1),o("br"),o("br"),o("v-card",{staticStyle:{"margin-left":"auto","margin-right":"auto"},attrs:{dark:"",width:"495px",height:"230px"}},[o("div",{staticClass:"ma-2"},[o("span",{staticStyle:{color:"#cda869"}},[t._v("valentin")]),o("span",{staticStyle:{color:"#a5c261"}},[t._v("~$")]),o("span",{staticStyle:{color:"#bbb"}},[t._v(" "+t._s(t.console_input))]),o("br"),o("pre",{attrs:{width:"100%"}},[t._v(t._s(t.console_output))])])]),o("br"),o("h1",{staticStyle:{"margin-left":"auto","margin-right":"auto"}},[t._v("Personal Solo Projects")]),o("br"),o("v-container",{staticClass:"grey lighten-5"},[o("v-row",{attrs:{"no-gutters":""}},t._l(t.projects,(function(e,i){return o("v-col",{key:i,staticStyle:{padding:"2px"},attrs:{cols:"auto",sm:e.collumns}},[o("v-card",{attrs:{outlined:"",tile:"",dark:"",elevation:"24"},on:{click:function(o){return t.open_project(e)}}},[o("v-img",{attrs:{src:e.thumbnail,width:"100%",height:"200px",gradient:e.color?"to top right, "+e.color+", rgba(0, 0, 0 ,0)":""}},[o("v-card-title",[t._v(t._s(e.name))])],1)],1)],1)})),1)],1),o("br"),o("br"),o("v-dialog",{attrs:{width:"60%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[null!=t.project?o("v-card",{attrs:{width:"100%",tile:"",elevation:"12"}},[o("v-card-title",[t._v(" "+t._s(t.project.name)+" ")]),o("v-card-subtitle",[t._v(" "+t._s(t.project.short)+" ")]),t.dialog?o("v-carousel",{staticClass:"px-5",attrs:{height:"400","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.project.slides,(function(t,e){return o("v-carousel-item",{key:e},[o("v-sheet",{attrs:{height:"100%"}},[o("v-row",{staticClass:"fill-height",attrs:{justify:"center"}},[t.includes("www.youtube.com")?o("iframe",{staticStyle:{height:"calc(100% - 40px)"},attrs:{width:"100%",src:t,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media;",allowfullscreen:""}}):o("v-img",{attrs:{src:t,width:"100%",height:"100%"}})],1)],1)],1)})),1):t._e()],1):t._e()],1)],1)},r=[],n={name:"App",components:{},mounted:function(){this.project=this.projects[0],this.console_simulator("./startup.sh","================    Listing Skills    ================\n  Gamedev............... ✓  Ok Web Dev............✓\n  Mobile Applications... ✓  Shaders...............✓\n  Networking............ ✓  Compute Buffers.......✓\n  Optimizations......... ✓  Threading.............✓\n  Efficient............. ✓  Bug Solving...........✓\n================ All systems online ✓ ================")},data:function(){return{dialog:!1,project:null,console_input:"",console_output:"",skills:[{name:"Unity 3D",image:"https://unity3d.com/profiles/unity3d/themes/unity/images/pages/branding_trademarks/unity-tab-square-black.png"},{name:"C#",image:"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/131633729/original/7dd1af11d0c947b49b002eee795f24b3403cc0e6/code-in-c-sharp-for-your-project.png"},{name:"C++",image:"https://i.redd.it/31b2ii8hchi31.jpg"},{name:"C",image:"https://cdn.iconscout.com/icon/free/png-512/c-programming-569564.png"},{name:".NET",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png"}],projects:[{name:"Blencraft",short:"Voxel Engine Inspired by Minecraft",slides:["https://www.youtube.com/embed/Jcqen8CPa14","https://www.youtube.com/embed/SvUm-UMofEc","https://www.youtube.com/embed/ZxR_UdB-vIk","https://www.youtube.com/embed/f0iWS5Ijfjo","https://i.redd.it/80y85hzwynx41.png","https://external-preview.redd.it/klUUvS8ITY8XQqYCzfhOcHyYGPLzffk-s0IMLOCxGoI.png?auto=webp&s=4eb32f2b406a6be4c4f5b42ca4fe36cf961618fa","https://external-preview.redd.it/NrrJr9OF82SYlKxZvtN-S_PIX8EH0sEfN-SXUKJ1Ecg.jpg?auto=webp&s=0172ea3ca1d19fafee0e40ad1d5433711ab7a36a","https://external-preview.redd.it/izkcRWgQQ4IPw7hagpDllb8owOkcjlMgTIAglis4_30.png?auto=webp&s=cddc7f17b69538775f76e31a05bc65daa3fc5aa6"],thumbnail:"https://media.giphy.com/media/EQgsUgOPc3lfvtB8W3/giphy.gif",collumns:8,color:"#0026ff50"},{name:"Vandalise To The Rythm",short:"Quick Project For Fun That Plays To The Music's Rythm",slides:["https://www.youtube.com/embed/SWutv7RFH8Y"],thumbnail:"https://media.giphy.com/media/ueZPFD2lV98itP2Xz8/source.gif",collumns:4,color:"#50000078"},{name:"Bug Wars",short:"Chess Like Game But With Dragons And Spells",slides:["https://www.youtube.com/embed/olcP4WwLGrg","https://www.youtube.com/embed/toe_TSX1law"],thumbnail:"https://media.giphy.com/media/uxVLniGKb0QoGSIBsZ/giphy.gif",collumns:4,color:"#50290078"},{name:"AI Project - CrossFire",short:"External AI That Plays The Game Using Mouse & Keyboard Inputs",slides:["https://www.youtube.com/embed/oHdrI_9wyjY"],thumbnail:"https://media.giphy.com/media/BjlUaMsIgcs59CWdXX/giphy.gif",collumns:4,color:"#ffe0002e"},{name:"Home Cinema",short:"Contrained To The Console Environment, I Made A Home Cinema!",slides:["https://www.youtube.com/embed/6IN5pdUqNOI"],thumbnail:"https://media.giphy.com/media/ApfjktfaHoyvPy5BCO/giphy.gif",collumns:4,color:"#50290078"},{name:"Bullet Diary",short:"Mobile Application To Organize Your Life.",slides:["https://www.youtube.com/embed/99B_O-kD3iU"],thumbnail:"https://media.giphy.com/media/RGGOTXGNxWfnGWMdl9/giphy.gif",collumns:2,color:"#50290078"},{name:"Procedural Hardcore Parkour",short:"Prototype Of A Procedural Parkour System.",slides:["https://www.youtube.com/embed/24b5LuLXqiQ","https://www.youtube.com/embed/bEg1abaieTY"],thumbnail:"https://media.giphy.com/media/frDfwx2Q7wPBLdHaBj/giphy.gif",collumns:4,color:"#50290078"},{name:"Hyper-Casual Game",short:"Hyper-Casual Game Prototype",slides:["https://www.youtube.com/embed/k5iA6I3khRo"],thumbnail:"https://media.giphy.com/media/xYC3SRcVwOiPvIkme0/giphy.gif",collumns:2,color:"#50290078"},{name:"Agario Movement Prototype",short:"Trying To Replicate The Movement & Splitting Of The Famouse Agar.io Game",slides:["https://www.youtube.com/embed/4Siky6oWBHw"],thumbnail:"https://media.giphy.com/media/pcpuXatwTH0DkN7wfy/source.gif",collumns:4,color:"#50290078"},{name:"Unity3D Import Stick Figures",short:"Pivot Stick Figures Animator Importer",slides:["https://www.youtube.com/embed/KDJot86h0RQ"],thumbnail:"https://media.giphy.com/media/1C7GQzMvku3FhiVfzh/source.gif",collumns:4,color:"#2e500057"},{name:"Lithtech .DAT & .LTB Importer",short:"Lithtech is an old game engine, this tool imports maps & models from it! This map you see is from CrossFire.",slides:["https://external-preview.redd.it/gTZsr0D5VuaAMTmEpCYVWBrVlSWjPuPlokiLJe13qw4.png?width=960&crop=smart&auto=webp&s=36c1be0b5bcceed910df78c41a2ecf27d6a48b13"],thumbnail:"https://media.giphy.com/media/zt0VJO9Ntq6hrdtAH3/source.gif",collumns:8,color:"#4000502e"},{name:"Breadboard Prototype",short:"Prototype of a Breadboard system, where you can place cables & microcontrollers.",slides:["https://www.youtube.com/embed/llt_5SpIGOE"],thumbnail:"https://media.giphy.com/media/yHsegkTVSSfe2uc9M8/source.gif",collumns:5,color:"#50290078"},{name:"Procedural Island Generator",short:"Generates Procedural Islands From One Button Click & One Radius Parameter.",slides:["https://i.ibb.co/XCX0wWH/6a9ql8wvhxb31.png"],thumbnail:"https://i.ibb.co/XCX0wWH/6a9ql8wvhxb31.png",collumns:7,color:"#50290078"}]}},methods:{open_project:function(t){this.dialog=!0,this.project=t},console_simulator:function(t,e){var o=this;o.console_input="",o.console_output="";var i=0,a=function e(){i<t.length?(o.console_input+=t[i++],setTimeout(e,50)):(i=0,setTimeout(r,500))},r=function t(){i<e.length&&(o.console_output+=e[i++],setTimeout(t,5))};setTimeout(a,1e3)}}},s=n,l=o("2877"),c=o("6544"),u=o.n(c),p=o("7496"),m=o("b0af"),d=o("99d9"),h=o("5e66"),g=o("3e35"),b=o("62ad"),f=o("a523"),w=o("169a"),y=o("132d"),v=o("adda"),_=o("0fd9"),x=o("8dd9"),S=Object(l["a"])(s,a,r,!1,null,null,null),k=S.exports;u()(S,{VApp:p["a"],VCard:m["a"],VCardSubtitle:d["a"],VCardTitle:d["b"],VCarousel:h["a"],VCarouselItem:g["a"],VCol:b["a"],VContainer:f["a"],VDialog:w["a"],VIcon:y["a"],VImg:v["a"],VRow:_["a"],VSheet:x["a"]});var P=o("f309");i["a"].use(P["a"]);var T=new P["a"]({});i["a"].config.productionTip=!1,new i["a"]({vuetify:T,render:function(t){return t(k)}}).$mount("#app")}});
//# sourceMappingURL=app.3ecc46cd.js.map