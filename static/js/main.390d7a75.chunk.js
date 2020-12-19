(this.webpackJsonpcalculator_react=this.webpackJsonpcalculator_react||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),i=n.n(c),l=n(1),s=function(e){var t=e.solution,n=e.problem,a=e.sizeModifier;return r.a.createElement("div",{className:"parent d-flex flex-column justify-content-end pr-3 py-1 ml-3 mr-3 viewport rounded"},r.a.createElement("span",{className:"d-inline-block text-wrap d-flex flex-row justify-content-end fs-".concat(a),id:"solution"},r.a.createElement("strong",null,t||0)),r.a.createElement("div",{className:"equation d-flex flex-row justify-content-end text-black-50 font-weight-bold ls-1",id:"problem"},n||""))},o=n(2),u=function(e,t,n){var a,r=[0,0],c=Object(o.a)(n);try{for(c.s();!(a=c.n()).done;){var i=a.value;i===e?r[0]++:i===t&&r[1]++}}catch(l){c.e(l)}finally{c.f()}return r[0]>r[1]},d=function(e){return["+","-","/","*","^","~","%"].includes(e)},f=function(e){var t=e.showProblem,n=e.hClick,a=e.problem,c=e.solution,i=e.isProblemHidden,l=e.init,s=e.hideProblem,o="font-weight-bold btn-keypad border-grey rounded p-2 m-2 text-center btn unselectable",f=function(e,f){var m=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"2",p=arguments.length>3?arguments[3]:void 0;return e.map((function(e){var b=function(r){var o=a,f=c,m=i,p=Array.from(o),b=p[p.length-1],N=l,v=s;switch(r.key&&(["Backspace","Delete","c","C","."].includes(r.key)||d(r.key)||!isNaN(r.key))&&(e=r.key,console.log("key pressed "+r.key)),e){case"CE":return N(p.join(""));case"c":case"C":return v(),N();case"=":return N(0,f);case"mc":case"mr":case"m+":case"m-":case"ms":return;case"+/-":"-"===p[0]?(p.shift(),p.unshift("+")):"+"===p[0]&&(p.shift(),p.unshift("-")),isNaN(p[0])||p.unshift("+");break;case")":"("!==b&&(p.push(")"),(1===p.length||u(")","(",p))&&p.pop());break;case"Backspace":case"Delete":case"DEL":if(p.pop(),(1===p.length&&d(p[0])||["(",")"].includes(p[0]))&&p.pop(),0===p.length)return v(),N();break;case".":(d(b)||"."===b)&&p.pop();var h=p.filter((function(e){return d(e)||["(",")","."].includes(e)}));h.push(e),h.join("").includes("..")||(m?p=[f,e]:p.push(e));break;case"X":case"x":d(b)&&p.pop(),p.push("*"),m&&"0"!==f&&(p=[f,"*"]);break;default:d(e)&&(d(b)&&p.pop(),m&&(p=[f])),p.push(e)}console.log("newProblemArr: "+p.join("")),t(),n(p.join(""))};return document.addEventListener("keydown",b),r.a.createElement("input",{key:e,type:"button",className:"".concat(o," col-").concat(m," ").concat(f),value:e,onClick:p||b,onKeyDown:b})}))};return r.a.createElement("div",{className:"container m-2 mb-4"},r.a.createElement("div",{className:"row justify-content-center"},f(["mc","mr","m+","m-","ms"],"btn-outline-secondary disabled","1")),r.a.createElement("div",{className:"row  justify-content-center"},f(["%"],"btn-outline-secondary"),f(["CE"],"btn-outline-primary font-weight-bold"),f(["C"],"btn-outline-primary font-weight-bold"),f(["DEL"],"btn-outline-danger font-weight-bold")),r.a.createElement("div",{className:"row  justify-content-center"},f(["^","(",")","/"],"btn-outline-secondary")),r.a.createElement("div",{className:"row  justify-content-center"},f(["7","8","9"],"btn-light"),f(["x"],"btn-outline-secondary")),r.a.createElement("div",{className:"row  justify-content-center"},f(["4","5","6"],"btn-light"),f(["-"],"btn-outline-secondary")),r.a.createElement("div",{className:"row  justify-content-center"},f(["1","2","3"],"btn-light"),f(["+"],"btn-outline-secondary")),r.a.createElement("div",{className:"row  justify-content-center"},f(["+/-"],"btn-outline-secondary")," ",f(["0"],"btn-light"),f([".","="],"btn-outline-secondary")))},m=function(e){var t=e.split(" ");if("invalid entry"!==e){for(var n=0;n<=t.length-1;)if("+"!==t[n]||isNaN(t[n-2]))if("-"!==t[n]||isNaN(t[n-2]))if("*"!==t[n]||isNaN(t[n-2]))if("/"!==t[n]||isNaN(t[n-2]))if("^"!==t[n]||isNaN(t[n-2])){if(/\w/.test(t[n]))n++;else if(isNaN(t[n])&&isNaN(t[n-2]))return"invalid entry"}else t.splice(n-2,3,Math.pow(Number(t[n-2]),Number(t[n-1]))),n=0;else t.splice(n-2,3,Number(t[n-2])/Number(t[n-1])),n=0;else t.splice(n-2,3,Number(t[n-2])*Number(t[n-1])),n=0;else t.splice(n-2,3,Number(t[n-2])-Number(t[n-1])),n=0;else t.splice(n-2,3,Number(t[n-2])+Number(t[n-1])),n=0;return console.log("end of calculation"),t.join("")}return"invalid entry"},p=function(e){switch(e){case"^":return 5;case"*":case"/":case"~":return 4;case"+":case"-":return 3;case"(":return 2;case"=":return 1;default:return}},b=function(e,t,n){var a,r=[0,0],c=Object(o.a)(n);try{for(c.s();!(a=c.n()).done;){var i=a.value;i===e?r[0]++:i===t&&r[1]++}}catch(l){c.e(l)}finally{c.f()}return r[0]===r[1]},N=function(e){var t="",n=[],a=e.replace(/\s/g,"").split(""),r=function(){return n[n.length-1]};if(!["+","-",".","("].includes(a[0])&&isNaN(a[0])||!b("(",")",a))return"invalid entry";var c,i=Object(o.a)(a.entries());try{for(i.s();!(c=i.n()).done;){var s=Object(l.a)(c.value,2),u=s[0],f=s[1];if(d(f)||["(",")","."].includes(f)){n.push(f);for(var m=n.join("");n.length>0;)n.pop();if(m.includes(".."))return"invalid entry"}if(d(f)&&d(a[u+1]))return"invalid entry";if([".","%"].includes(f)&&d(a[u-1])&&d(a[u+1]))return"invalid entry";if("%"===f&&isNaN(a[u-1]))return"invalid entry"}}catch(k){i.e(k)}finally{i.f()}for(var N=0;N<=a.length-1;)"."!==a[0]||isNaN(a[1])?(d(a[N])||["(",")"].includes(a[N]))&&"."===a[N+1]?a.splice(N+1,1,"0."):"."!==a[N+1]||a[N].includes(".")?["+","-"].includes(a[N])&&["("].includes(a[N-1])&&!isNaN(a[N+1])?a.splice(N,2,a[N]+a[N+1]):["+","-"].includes(a[0])&&!isNaN(a[1])?a.splice(N,2,a[0]+a[1]):isNaN(a[N])||isNaN(a[N+1])?"("===a[N]&&")"===a[N+1]?2===a.length?a.splice(N,2,"0"):a.splice(N,2):N++:a.splice(N,2,a[N]+a[N+1]):a.splice(N,2,a[N]+a[N+1]):a.splice(N,2,"0".concat(a[N]+a[N+1]));if(e.includes("(")){var v,h=Object(o.a)(a.entries());try{for(h.s();!(v=h.n()).done;){var y=Object(l.a)(v.value,2),g=y[0],j=y[1];"("!==j||!/\w/.test(a[g-1])&&")"!==a[g-1]||void 0===a[g-1]||a.splice(g,0,"*"),")"===j&&/\w/.test(a[g+1])&&void 0!==a[g+1]&&a.splice(g+1,0,"*")}}catch(k){h.e(k)}finally{h.f()}}for(var w=0;w<=a.length-1;){var E=a[w];if(isNaN(E)||"%"!==a[w+1])if(/\w/.test(E))t+="".concat(E," ");else if("("===E)n.push(E);else if(")"===E){for(;"("!==r();)t+="".concat(n.pop()," ");n.pop()}else p(E)<=p(r())&&(t+="".concat(n.pop()," ")),n.push(E);else isNaN(a[w+2])?a.splice(w,2,"".concat(Number(a[w])/100," ")):a.splice(w,3,"".concat(Number(a[w])/100*Number(a[w+2])," ")),t+=a[w];w++}for(;n.length>0;)t+="".concat(n.pop()," ");return t.trimEnd()};n(11);var v=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),o=Object(l.a)(i,2),u=o[0],p=o[1],v=Object(a.useState)(!0),h=Object(l.a)(v,2),y=h[0],g=h[1],j=Object(a.useState)("xxl"),w=Object(l.a)(j,2),E=w[0],k=w[1],x=Object(a.useState)("0"),O=Object(l.a)(x,2),C=O[0],P=O[1],S=function(){g(!0),k("xxl")},D=function(){g(!1),k("xl")},A=function(e,t,n){for(;!b(e,t,n);)n.push(t)};return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"container border border-dark mt-2"},r.a.createElement("h2",{className:"pt-2 text-center"},"Scientific Calculator"),r.a.createElement(s,{problem:u,solution:C,isProblemHidden:y,sizeModifier:E}),r.a.createElement("br",null),r.a.createElement(f,{problem:n,hClick:function(e){c(e),p(e.replace(/\*/g,"x"));var t=Array.from(e);"invalid entry"!==m(N(e))?P(m(N(e))):d(e.slice(-1))?(t.pop(),b("(",")",t)||A("(",")",t),P(m(N(t.join(""))))):b("(",")",t)||isNaN(e.slice(-1))||(A("(",")",t),P(m(N(t.join("")))))},init:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;c(e||""),p(e?e.replace(/\*/g,"x"):""),P(t),e?D():S(),console.log(e)},solution:C,hideProblem:S,showProblem:D,isProblemHidden:y})),r.a.createElement("p",{className:"container text-right"},"\xa9Aren Ignacio"))};i.a.render(r.a.createElement(v,null),document.querySelector("#root"))},6:function(e,t,n){e.exports=n(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.390d7a75.chunk.js.map