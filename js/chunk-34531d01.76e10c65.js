(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34531d01"],{"0196":function(e,t,c){"use strict";c.r(t);var s=c("7a23");const r={class:"list-row"},i=Object(s["e"])("div",{class:"list-row d-flex justify-content-center"},[Object(s["e"])("h1",{class:"my-4"},"Lista de Productos")],-1),n={class:"col-md-14"},o={class:"input-group my-4"},l={key:0,class:"col-md-12"},a=["onClick"],d={class:"my-4"},u={class:"my-4"},b={key:1,class:"col-md-12"},j=["onClick"],O={class:"my-4"},m={class:"my-4"};function p(e,t,c,p,h,f){return Object(s["r"])(),Object(s["d"])("div",r,[i,Object(s["e"])("div",n,[Object(s["e"])("div",o,[Object(s["G"])(Object(s["e"])("input",{type:"text",class:"form-control p-3",placeholder:"Buscar por nombre","onUpdate:modelValue":t[0]||(t[0]=e=>h.search=e)},null,512),[[s["D"],h.search]])])]),h.search?(Object(s["r"])(),Object(s["d"])("div",l,[(Object(s["r"])(!0),Object(s["d"])(s["a"],null,Object(s["x"])(f.filtroBusqueda,(e,t)=>(Object(s["r"])(),Object(s["d"])("a",{class:Object(s["m"])(["list-group-item list-group-item-action list-group-item-light d-flex justify-content-between",{active:t==h.currentIndex}]),key:t,onClick:t=>f.push(e.id)},[Object(s["e"])("span",d,Object(s["A"])(e.nombre),1),Object(s["e"])("span",u,"$"+Object(s["A"])(e.precio),1)],10,a))),128))])):(Object(s["r"])(),Object(s["d"])("div",b,[(Object(s["r"])(!0),Object(s["d"])(s["a"],null,Object(s["x"])(p.items,(e,t)=>(Object(s["r"])(),Object(s["d"])("a",{class:Object(s["m"])(["list-group-item list-group-item-action list-group-item-light d-flex justify-content-between",{active:t==h.currentIndex}]),key:t,onClick:t=>f.push(e.id)},[Object(s["e"])("span",O,Object(s["A"])(e.nombre),1),Object(s["e"])("span",m,"$"+Object(s["A"])(e.precio),1)],10,j))),128))]))])}var h=c("dc59"),f={setup(){const e=Object(h["k"])();return{items:e,deleteItem:h["d"]}},data(){return{search:"",currentIndex:-1}},computed:{filtroBusqueda:function(){return this.items.filter(e=>e.nombre.toLowerCase().match(this.search.toLowerCase()))}},methods:{push(e){this.$router.push("/item/"+e)}}};c("9b11");f.render=p;t["default"]=f},"9b11":function(e,t,c){"use strict";c("d01d")},d01d:function(e,t,c){}}]);
//# sourceMappingURL=chunk-34531d01.76e10c65.js.map