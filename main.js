!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const o=["chrome-extension://manlhohdnggdocclckddhnojeiipgjbc","chrome-extension://ffcmikbhfbjcioofacoggoppaccmeiko"],i=t=>e=>n=>({method:"POST",headers:{Authorization:`Bearer ${t}`,"content-type":"application/json"},credentials:"include",body:JSON.stringify({data:{type:"io.cozy.intents",attributes:{action:e,type:n,data:{},permissions:[]}}})}),s=t=>{if(t.ok)return t.json();throw new Error("Network response was not ok.")},r=t=>{const{attributes:e,links:n,id:o,meta:{rev:i},type:s}=t.data;return{_id:o,_rev:i,_type:s,attributes:e,links:n,relations:function(t){}}},a=t=>{for(;t.firstChild;)t.removeChild(t.firstChild)},c=t=>{"https://cortest-qwanttest.mycozy.cloud/"===t.origin?console.log("internal message received"):"https://cortest-drive.mycozy.cloud"===t.origin&&(t.data.type.includes(":ready")?console.log("intents is ready"):t.data.type.includes(":data")&&(console.log("here are the results",t.data),(t=>{console.log("RESULTS TO WEBEXT:",t),o.forEach(function(e){window.parent.postMessage(t,e)});var e=document.getElementById("results");a(e),t.forEach(t=>{const n=document.createElement("li");n.innerText=t.title,e.appendChild(n)})})(t.data.suggestions)))},d=t=>{console.error((t=>`There has been a problem with your fetch operation: ${t.message}`)(t))},u=t=>({query:t,id:(new Date).getTime()}),l=t=>{const e=(t=>({url:`//${t.cozyDomain}`,token:t.cozyToken}))(t);return((t,e,n,o)=>window.fetch(`${t}/intents`,i(e)(n)(o)).then(s).then(r))(e.url,e.token,"OPEN","io.cozy.suggestions")};({start:function(){this.bindEvents(),console.log("Application is starting…")},bindEvents:function(){document.addEventListener("DOMContentLoaded",this.onDOMContentLoaded.bind(this),!1),window.addEventListener("message",c),window.addEventListener("message",function(t){if(o.includes(t.origin)){console.log("WEBEXT MESSAGE: "+t.data+" FROM: "+t.origin);const e=this.targetWindows,n=u(t.data);e.forEach(t=>{t.postMessage(n,"https://cortest-drive.mycozy.cloud")})}}.bind(this)),document.getElementById("message").addEventListener("input",this.onInput.bind(this))},onInput:function(t){const e=this.targetWindows,n=(t=>t.target.value)(t),o=u(n);e.forEach(t=>{t.postMessage(o,"https://cortest-drive.mycozy.cloud")})},onDOMContentLoaded:function(){const{dataset:t}=document.getElementById("cozy");l(t).then(t=>{const{attributes:{services:e},_id:n}=t;this.targetWindows=e.map(t=>{const{href:e,slug:n}=t;return((t,e)=>{const n=document.createElement("iframe");return n.setAttribute("src",t),n.setAttribute("style","display: none"),n.onload=function(t){console.log(`iframe ${e} is loaded`)},document.getElementById("iframes").appendChild(n),n.contentWindow})(e,n)})}).catch(d)}}).start()}]);