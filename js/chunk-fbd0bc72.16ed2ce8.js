(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fbd0bc72"],{"019e":function(e,t,c){"use strict";c("72b1")},"72b1":function(e,t,c){},fa37:function(e,t,c){"use strict";c.r(t);var n=c("7a23");const s={class:"edit-form mt-5"},l={class:"d-flex justify-content-center"},b=Object(n["e"])("div",null,[Object(n["e"])("div",{class:"mt-5"},[Object(n["e"])("h5",null,"A pagar:")])],-1);function a(e,t,c,a,i,o){return Object(n["r"])(),Object(n["d"])("div",s,[Object(n["e"])("h1",l,Object(n["A"])(a.cliente.nombre),1),b,Object(n["e"])("div",null,[Object(n["e"])("div",null,[Object(n["e"])("h3",null,"$"+Object(n["A"])(a.cliente.saldo),1)])]),Object(n["e"])("div",null,[Object(n["e"])("button",{onClick:t[0]||(t[0]=e=>o.push(a.clienteId)),class:"btn btn-success my-4 w-50"}," Realizar pago ")])])}var i=c("dc59"),o=c("6c02"),u={setup(){const e=Object(o["c"])(),t=Object(n["b"])(()=>e.params.id),c=Object(n["v"])({nombre:"",saldo:null});return Object(n["p"])(async()=>{const e=await Object(i["e"])(t.value);c.nombre=e.nombre,c.saldo=e.saldo}),{clienteId:t,cliente:c}},methods:{push(e){this.$router.push("/clientes/"+e+"/pago/")}}};c("019e");u.render=a;t["default"]=u}}]);
//# sourceMappingURL=chunk-fbd0bc72.16ed2ce8.js.map