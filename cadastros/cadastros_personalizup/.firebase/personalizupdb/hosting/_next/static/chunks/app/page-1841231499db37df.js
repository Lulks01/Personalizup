(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1087:function(e,t,n){Promise.resolve().then(n.bind(n,5894))},5894:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var l,s,a=n(7437),i=n(2265),o=n(9222);function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}n(8155);var c=function(e){return i.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",viewBox:"0 -960 960 960"},e),l||(l=i.createElement("path",{d:"M794-666 666-794l42-42q17-17 42.5-16.5T793-835l43 43q17 17 17 42t-17 42l-42 42Zm-42 42L248-120H120v-128l504-504 128 128Z"})))};function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var h=function(e){return i.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",viewBox:"0 -960 960 960"},e),s||(s=i.createElement("path",{d:"M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"})))};function u(e){let t=e.clients,n=t=>{e.setOnEdit(t)},l=async n=>{await o.Z.delete("http://191.217.195.236:3030/"+n);let l=t.filter(e=>e.id!==n);e.setClients(l),e.setOnEdit(null)};return(0,a.jsx)("div",{className:"grid",children:(0,a.jsxs)("table",{className:"table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"ID"}),(0,a.jsx)("th",{children:"Nome"}),(0,a.jsx)("th",{children:"Telefone"}),(0,a.jsx)("th",{id:"onlyweb",children:"Email"}),(0,a.jsx)("th",{children:"Valor Gasto"}),(0,a.jsx)("th",{}),(0,a.jsx)("th",{})]})}),(0,a.jsx)("tbody",{children:t.map((e,t)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:e.id}),(0,a.jsx)("td",{children:e.nome}),(0,a.jsx)("td",{children:e.telefone}),(0,a.jsx)("td",{id:"onlyweb",children:e.email}),(0,a.jsx)("td",{children:e.gastos}),(0,a.jsx)("td",{children:(0,a.jsx)("span",{onClick:()=>n(e),children:(0,a.jsx)(c,{className:"icon"})})}),(0,a.jsx)("td",{children:(0,a.jsx)("span",{onClick:()=>l(e.id),children:(0,a.jsx)(h,{className:"icon"})})})]},t))})]})})}function m(e){(0,i.useEffect)(()=>{if(e.onEdit){let n=t.current;n.nome.value=e.onEdit.nome,n.telefone.value=e.onEdit.telefone,n.email.value=e.onEdit.email,n.gastos.value=e.onEdit.gastos}},[e.onEdit]);let t=(0,i.useRef)(),n=async n=>{n.preventDefault();let l=t.current;if(!l.nome.value||!l.telefone.value||!l.gastos.value)return console.log("Preencha todos os campos");e.onEdit?await o.Z.put("http://191.217.195.236:3030/"+e.onEdit.id,{nome:l.nome.value,telefone:l.telefone.value,email:l.email.value,gastos:l.gastos.value}).then(()=>console.log("Usuario editado com sucesso!"),e.getClients()).catch(()=>console.log("Erro")):await o.Z.post("http://191.217.195.236:3030",{nome:l.nome.value,telefone:l.telefone.value,email:l.email.value,gastos:l.gastos.value}),e.setOnEdit(null),e.getClients(),n.target.reset()};return(0,a.jsxs)("div",{className:"cadastrarcliente",children:[(0,a.jsx)("h1",{children:"Cadastrar Cliente"}),(0,a.jsxs)("form",{className:"form",ref:t,onSubmit:n,children:[(0,a.jsx)("input",{type:"text",name:"nome",id:"nome",placeholder:"Nome"}),(0,a.jsx)("input",{type:"tel",name:"telefone",id:"telefone",placeholder:"Telefone"}),(0,a.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"E-mail"}),(0,a.jsx)("input",{type:"number",name:"gastos",id:"gastos",placeholder:"Valor gasto"}),(0,a.jsx)("button",{type:"submit",className:"botaoenviar",children:"Salvar"})]})]})}function f(){let[e,t]=(0,i.useState)([]),[n,l]=(0,i.useState)(null),s=async()=>{try{let e=await o.Z.get("http://191.217.195.236:3030/");t(e.data)}catch(e){console.log("Essa porra \xe9 um erro =>",e)}};return(0,i.useEffect)(()=>{s()},[t]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m,{onEdit:n,setClients:t,getClients:s,setOnEdit:l}),(0,a.jsx)(u,{clients:e,getClients:s,setClients:t,setOnEdit:l})]})}n(4874),n(2471)},4874:function(){},8155:function(){},2471:function(){}},function(e){e.O(0,[750,971,596,744],function(){return e(e.s=1087)}),_N_E=e.O()}]);