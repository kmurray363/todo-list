(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"* {\r\n    box-sizing: border-box;\r\n    margin: 0px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nh1{\r\n    margin-left: 15px;\r\n}\r\n\r\nh2{\r\n    margin-bottom: 15px;\r\n\r\n}\r\n\r\nlabel{\r\n    font-weight: bold;\r\n}\r\n\r\n.flex-column{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    text-align: center;\r\n}\r\n\r\n.header{\r\n    display: flex;\r\n    align-items: center;\r\n    height: 5vh;\r\n    width: 100vw;\r\n    background-color: #5D5C61;\r\n    color: white;\r\n}\r\n\r\n.footer{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 3vh;\r\n    width: 100vw;\r\n    background-color: #5D5C61;\r\n    color: white;\r\n}\r\n\r\n.main{\r\n    display: flex;\r\n}\r\n\r\n.sidebar{\r\n    display: flex;\r\n    min-width: 150px;\r\n    min-height: 92vh;\r\n    background-color: #938e94;\r\n    border-top: 1px solid #5D5C61;\r\n    border-bottom: 1px solid #5D5C61;\r\n}\r\n\r\n.sidebar > * {\r\n    height: 35px;\r\n    min-width: 125px;\r\n    max-width: 125px;\r\n    background-color: #557A95;\r\n    color: white;\r\n    border: 1px solid #5D5C61;\r\n    border-radius: 5px;\r\n    margin-top: 10px\r\n}\r\n\r\n.todo-card {\r\n    display: flex;\r\n    margin: 10px 25px 10px 25px;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: calc(92vw - 125px);\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    text-align: center;\r\n    background-color:antiquewhite;\r\n}\r\n\r\n/* The Modal (background) */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n  \r\n  /* Modal Content/Box */\r\n  .modal-content {\r\n    background-color: #fefefe;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 15% auto; /* 15% from the top and centered */\r\n    padding: 15px;\r\n    border: 1px solid #888;\r\n    border-radius: 15px;\r\n    width: 375px; /* Could be more or less, depending on screen size */\r\n  }\r\n\r\n  /* Formatting Individual Modal Elements */\r\n  .modal-content > span {\r\n      padding: 0px;\r\n  }\r\n\r\n  .modal-content > input {\r\n      margin-bottom: 10px;\r\n  }\r\n  .modal-content > button{\r\n      margin-top: 10px;\r\n      width: 200px;\r\n      align-self: center;\r\n  }\r\n\r\n  .modal-content > textarea{\r\n      resize: none;\r\n      width: 345px;\r\n      height: 100px;\r\n      margin-bottom: 10px;\r\n  }\r\n  \r\n  /* The Close Button */\r\n  .close {\r\n    color: #aaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .close:hover,\r\n  .close:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n\r\n/*\r\n.to-dos{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-content: flex-start;\r\n    flex: 1;\r\n    margin: 0px;\r\n    background-color: #659DBD;\r\n    max-width: 95vw;\r\n    padding:10px;\r\n    border: 1px solid #557A95;\r\n}\r\n\r\n.todo-card{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-height: 500px;\r\n    margin: 10px;\r\n    width: 250px;\r\n    padding: 10px;\r\n    background-color: #B1A296;\r\n    border: 2px solid #557A95;\r\n    border-radius: 5px;\r\n}\r\n\r\n.todo-card > * {\r\n    width: 200px;\r\n    margin: 5px;\r\n}\r\n\r\n.todo-desc {\r\n    height: 100px;\r\n    resize: none;\r\n    text-align: start;\r\n    vertical-align: text-top;\r\n}\r\n*/\r\n",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var l=e[c],d=r.base?l[0]+r.base:l[0],s=i[d]||0,u="".concat(d," ").concat(s);i[d]=s+1;var p=t(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var l=r(e,o),d=0;d<i.length;d++){var s=t(i[d]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),l=t.n(c),d=t(216),s=t.n(d),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=function(){const e=document.querySelector(".to-dos"),n=document.querySelectorAll(".to-dos > .todo-card");for(const t in n){if("entries"===t)return;if(n.length<1)return;e.removeChild(n[`${t}`])}},h=document.querySelector(".to-dos"),x={storage:[],store:function(e){this.storage.push(e),this.save()},show:function(){console.log(this.storage)},populate:function(){g(),this.storage.forEach((e=>{!function(e,n){const t=document.createElement("div");t.classList.add("todo-card"),t.classList.add(`index-${e.index}`);const r=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("button");a.classList.add("remove-btn"),r.innerHTML=e.title,o.innerHTML=e.dueDate,i.innerHTML=e.priority,a.innerHTML="REMOVE ITEM",t.appendChild(r),t.appendChild(o),t.appendChild(i),t.appendChild(a),a.onclick=function(){x.delete(e.index),x.populate()},t.onclick=function(e){const n=e.path[0].classList[1];if("index"!==n.slice(0,5))return;const t=n.slice(6),r=x.getObj(t),o=document.getElementById("editToDo"),i=document.getElementById("editTitle"),a=document.getElementById("editDesc"),c=document.getElementById("editDate"),l=document.getElementById("editPrio"),d=document.getElementById("submitEditBtn"),s=document.getElementsByClassName("close")[1];o.style.display="block",i.value=r.title,a.value=r.description,c.value=r.dueDate,l.value=r.priority,s.onclick=function(){o.style.display="none"},window.onclick=function(e){e.target==newToDo&&(o.style.display="none")},d.onclick=function(){r.title=i.value,r.description=a.value,r.dueDate=c.value,r.priority=l.value,x.delete(t),x.store(r),x.populate(),o.style.display="none"}},n.prepend(t)}(e,h)}))},save:function(){localStorage.setItem("storage",JSON.stringify(this.storage))},load:function(){this.storage=JSON.parse(localStorage.getItem("storage")||"[]")},delete:function(e){e=parseInt(e);const n=this.storage.length;for(let t=0;t<n;t++)if(this.storage[t].index===e)return this.storage.splice(t,1),void this.save()},getObj:function(e){e=parseInt(e);const n=this.storage.length;for(let t=0;t<n;t++)if(this.storage[t].index===e)return this.storage[t]}};!function(){const e=function(e,n,t){const r=document.createElement("div");r.setAttribute("id","newToDo"),r.classList.add("modal"),n.appendChild(r);const o=document.createElement("div");o.classList.add("modal-content"),r.appendChild(o);const i=document.createElement("span");return i.classList.add("close"),i.innerHTML="&times;",i.onclick=function(){r.style.display="none"},o.appendChild(i),window.onclick=function(e){e.target==r&&(r.style.display="none")},t.onclick=function(){r.style.display="block"},o}(0,document.querySelector(".to-dos"),document.getElementById("createToDoBtn")),n=document.getElementById("newToDo"),t=document.createElement("button");t.setAttribute("id","submitBtn"),t.innerHTML="SUBMIT";const r=document.createElement("h2");r.innerHTML="New To-Do Item";const o=document.createElement("label");o.innerHTML="Title";const i=document.createElement("input");i.setAttribute("id","toDoTitle"),i.value="Title";const a=document.createElement("label");a.innerHTML="Description";const c=document.createElement("textarea");c.setAttribute("id","toDoDesc"),c.value="Description";const l=document.createElement("label");l.innerHTML="Due Date";const d=document.createElement("input");d.setAttribute("id","toDoDate"),d.type="date",d.value="2022-01-01";const s=document.createElement("label");s.innerHTML="Priority";const u=document.createElement("select");u.setAttribute("id","toDoPrio");const p=document.createElement("option");p.value="Low",p.innerHTML="Low";const m=document.createElement("option");m.value="Medium",m.innerHTML="Medium";const f=document.createElement("option");f.value="High",f.innerHTML="High";const g=[r,o,i,a,c,l,d,s,u,t];for(let n in g)e.appendChild(g[n]);t.onclick=function(){const e=document.getElementById("toDoTitle"),t=document.getElementById("toDoDesc"),r=document.getElementById("toDoDate"),o=document.getElementById("toDoPrio"),i=((e,n,t,r,o)=>({title:e,description:n,dueDate:t,priority:r,completed:!1,project:o,index:x.storage.length}))(e.value,t.value,r.value,o.value);x.store(i),x.populate(),e.value="",t.value="",r.value="",o.value="",n.style.display="none"}}(),x.load(),x.populate()})()})();