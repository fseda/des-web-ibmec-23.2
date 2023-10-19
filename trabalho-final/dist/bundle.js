(()=>{"use strict";var e,t,n={745:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(e){a(e)}}function c(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.loadInitialData=t.loadData=t.fetchPlayers=t.getPlayers=void 0;var a=n(622),i=n(315);function c(e){return r(this,void 0,void 0,(function(){var t,n;return o(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,l(e)];case 1:if(!(t=r.sent()).ok)throw new Error("HTTP error. Status ".concat(t.status));return[4,t.json()];case 2:return[2,r.sent()];case 3:return n=r.sent(),console.error(n),[2,[]];case 4:return[2]}}))}))}function l(e){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,fetch("".concat("https://botafogo-atletas.mange.li","/").concat(e))];case 1:return[2,t.sent()]}}))}))}function u(e){document.querySelector(".grid-container").innerHTML="",e.forEach((function(e){return(0,i.fill)(e)}))}t.getPlayers=c,t.fetchPlayers=l,t.loadData=u,t.loadInitialData=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,c("all")];case 1:return u(e.sent()),(0,a.bindHoverEvents)(),[2]}}))}))}},622:function(e,t,n){var r,o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(e){a(e)}}function c(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.bindHoverEvents=void 0;var i=n(745);t.bindHoverEvents=function(){document.querySelectorAll(".player-card").forEach((function(e){var t=e.querySelector(".player-description");e.addEventListener("mouseenter",(function(){t.style.maxHeight="".concat(t.scrollHeight,"px")})),e.addEventListener("mouseleave",(function(){t.style.maxHeight="60px"}))}))},null===(r=document.getElementById("playertype-selector"))||void 0===r||r.addEventListener("change",(function(){return o(void 0,void 0,void 0,(function(){var e,n;return a(this,(function(r){switch(r.label){case 0:return e=document.getElementById("playertype-selector").value,[4,(0,i.getPlayers)(e)];case 1:return n=r.sent(),console.log(n),(0,i.loadData)(n),(0,t.bindHoverEvents)(),[2]}}))}))}))},315:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.fill=void 0,t.fill=function(e){var t=document.createElement("div");t.className="player-card";var n=document.createElement("h3");n.innerText=e.nome,n.className="player-name";var r=document.createElement("img");r.src=e.imagem,r.className="player-image";var o=document.createElement("p");o.innerText=e.descricao,o.className="player-description",t.appendChild(n),t.appendChild(r),t.appendChild(o);var a=document.querySelector(".grid-container");a||((a=document.createElement("div")).className="grid-container",document.body.appendChild(a)),a.appendChild(t)}}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return n[e].call(a.exports,a,a.exports,o),a.exports}e=o(745),t=o(622),(0,e.loadInitialData)().then((function(){(0,t.bindHoverEvents)(),console.log("Initial data loaded")})).catch((function(e){console.error(e)}))})();