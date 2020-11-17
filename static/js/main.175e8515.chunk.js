(this.webpackJsonpcalculator_react=this.webpackJsonpcalculator_react||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),s=n(9),o=n.n(s),a=n(1),l=n(2),c=n(4),u=n(3),d=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={sizeModifier:"xxl"},e}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"parent d-flex flex-column justify-content-end pr-3 py-1 ml-3 mr-3 viewport rounded"},i.a.createElement("span",{className:"d-inline-block text-wrap d-flex flex-row justify-content-end fs-".concat(this.props.sizeModifier),id:"solution"},i.a.createElement("strong",null,this.props.solution||0)),i.a.createElement("div",{className:"equation d-flex flex-row justify-content-end text-black-50 font-weight-bold ls-1",id:"problem"},this.props.problem||""))}}]),n}(i.a.Component),p=n(7),f=n(5),m=function(e){switch(e){case"^":return 5;case"*":case"/":case"~":return 4;case"+":case"-":return 3;case"(":return 2;case"=":return 1;default:return}},b=function(e,t,n){var r,i=[0,0],s=Object(f.a)(n);try{for(s.s();!(r=s.n()).done;){var o=r.value;o===e?i[0]++:o===t&&i[1]++}}catch(a){s.e(a)}finally{s.f()}return i[0]===i[1]},h=function(e){return["+","-","/","*","^","~","%"].includes(e)},v=function(e){var t="",n=[],r=e.replace(/\s/g,"").split(""),i=function(){return n[n.length-1]};if(!["+","-",".","("].includes(r[0])&&isNaN(r[0])||!b("(",")",r))return"invalid entry";var s,o=Object(f.a)(r.entries());try{for(o.s();!(s=o.n()).done;){var a=Object(p.a)(s.value,2),l=a[0],c=a[1];if(h(c)||["(",")","."].includes(c)){n.push(c);for(var u=n.join("");n.length>0;)n.pop();if(u.includes(".."))return"invalid entry"}if(h(c)&&h(r[l+1]))return"invalid entry";if([".","%"].includes(c)&&h(r[l-1])&&h(r[l+1]))return"invalid entry";if("%"===c&&isNaN(r[l-1]))return"invalid entry"}}catch(x){o.e(x)}finally{o.f()}for(var d=0;d<=r.length-1;)"."!==r[0]||isNaN(r[1])?(h(r[d])||["(",")"].includes(r[d]))&&"."===r[d+1]?r.splice(d+1,1,"0."):"."!==r[d+1]||r[d].includes(".")?["+","-"].includes(r[d])&&["("].includes(r[d-1])&&!isNaN(r[d+1])?r.splice(d,2,r[d]+r[d+1]):["+","-"].includes(r[0])&&!isNaN(r[1])?r.splice(d,2,r[0]+r[1]):isNaN(r[d])||isNaN(r[d+1])?"("===r[d]&&")"===r[d+1]?2===r.length?r.splice(d,2,"0"):r.splice(d,2):d++:r.splice(d,2,r[d]+r[d+1]):r.splice(d,2,r[d]+r[d+1]):r.splice(d,2,"0".concat(r[d]+r[d+1]));if(e.includes("(")){var v,N=Object(f.a)(r.entries());try{for(N.s();!(v=N.n()).done;){var y=Object(p.a)(v.value,2),j=y[0],g=y[1];"("!==g||!/\w/.test(r[j-1])&&")"!==r[j-1]||void 0===r[j-1]||r.splice(j,0,"*"),")"===g&&/\w/.test(r[j+1])&&void 0!==r[j+1]&&r.splice(j+1,0,"*")}}catch(x){N.e(x)}finally{N.f()}}for(var w=0;w<=r.length-1;){var E=r[w];if(isNaN(E)||"%"!==r[w+1])if(/\w/.test(E))t+="".concat(E," ");else if("("===E)n.push(E);else if(")"===E){for(;"("!==i();)t+="".concat(n.pop()," ");n.pop()}else m(E)<=m(i())&&(t+="".concat(n.pop()," ")),n.push(E);else isNaN(r[w+2])?r.splice(w,2,"".concat(Number(r[w])/100," ")):r.splice(w,3,"".concat(Number(r[w])/100*Number(r[w+2])," ")),t+=r[w];w++}for(;n.length>0;)t+="".concat(n.pop()," ");return t.trimEnd()},N=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).defaultStyle="font-weight-bold btn-keypad border-grey rounded p-2 m-2 text-center btn unselectable",r.renderBtn=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"2",s=arguments.length>3?arguments[3]:void 0;return e.map((function(e){return i.a.createElement("input",{key:e,type:"button",className:"".concat(r.defaultStyle," col-").concat(n," ").concat(t),value:e,onClick:s||function(){var t=r.props.problem,n=r.props.solution,i=r.props.isProblemHidden,s=r.props.hClick,o=r.props.init,a=r.props.hideProblem,l=t+e,c=Array.from(t);switch(e){case"CE":return o(t);case"C":return a(),o();case"mc":case"mr":case"m+":case"m-":case"ms":return;case"+/-":return"-"===c[0]?(c.shift(),c.unshift("+"),s(c.join(""))):"+"===c[0]?(c.shift(),c.unshift("-"),s(c.join(""))):isNaN(c[0])?void 0:(c.unshift("+"),s(c.join("")));case")":if(l.includes("()"))return s(t);if(1===l.length)return c.pop(),s(c.join(""));break;case"DEL":return c.pop(),0===c.length?(a(),o()):1===c.length&&h(c[0])||["(",")"].includes(c[0])?(c.pop(),a(),o()):s(c.join(""));case"=":return o(0,n);case".":(h(t.slice(-1))||"."===t.slice(-1))&&(c.pop(),t=c.join(""),console.log(c));var u=c.filter((function(e){return h(e)||["(",")","."].includes(e)}));u.push(e);var d=u.join("");if(console.log(u),d.includes(".."))return s(c.join(""));l=i?n+e:t+e;break;case"x":h(c.pop())&&(t=c.join("")),l=i?n+"*":t+"*";break;default:h(e)&&(h(t.slice(-1))&&(c.pop(),t=c.join(""),console.log(c)),l=i?n+e:t+e)}console.log("newProblem: "+l),r.props.showProblem(),r.props.hClick(l)}})}))},r}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"container m-2 mb-4"},i.a.createElement("div",{className:"row justify-content-center"},this.renderBtn(["mc","mr","m+","m-","ms"],"btn-outline-secondary disabled","1")),i.a.createElement("div",{className:"row  justify-content-center"},this.renderBtn(["%"],"btn-outline-secondary"),this.renderBtn(["CE"],"btn-outline-primary font-weight-bold"),this.renderBtn(["C"],"btn-outline-primary font-weight-bold"),this.renderBtn(["DEL"],"btn-outline-danger font-weight-bold")),i.a.createElement("div",{className:"row  justify-content-center"},this.renderBtn(["^","(",")","/"],"btn-outline-secondary")),i.a.createElement("div",{className:"row  justify-content-center"},this.renderBtn(["7","8","9"],"btn-light"),this.renderBtn(["x"],"btn-outline-secondary")),i.a.createElement("div",{className:"row  justify-content-center"},this.renderBtn(["4","5","6"],"btn-light"),this.renderBtn(["-"],"btn-outline-secondary")),i.a.createElement("div",{className:"row  justify-content-center"},this.renderBtn(["1","2","3"],"btn-light"),this.renderBtn(["+"],"btn-outline-secondary")),i.a.createElement("div",{className:"row  justify-content-center"},this.renderBtn(["+/-"],"btn-outline-secondary")," ",this.renderBtn(["0"],"btn-light"),this.renderBtn([".","="],"btn-outline-secondary")))}}]),n}(i.a.Component),y=function(e){var t=e.split(" ");if("invalid entry"!==e){for(var n=0;n<=t.length-1;)if("+"!==t[n]||isNaN(t[n-2]))if("-"!==t[n]||isNaN(t[n-2]))if("*"!==t[n]||isNaN(t[n-2]))if("/"!==t[n]||isNaN(t[n-2]))if("^"!==t[n]||isNaN(t[n-2])){if(/\w/.test(t[n]))n++;else if(isNaN(t[n])&&isNaN(t[n-2]))return"invalid entry"}else t.splice(n-2,3,Math.pow(Number(t[n-2]),Number(t[n-1]))),n=0;else t.splice(n-2,3,Number(t[n-2])/Number(t[n-1])),n=0;else t.splice(n-2,3,Number(t[n-2])*Number(t[n-1])),n=0;else t.splice(n-2,3,Number(t[n-2])-Number(t[n-1])),n=0;else t.splice(n-2,3,Number(t[n-2])+Number(t[n-1])),n=0;return console.log("end of calculation"),t.join("")}return"invalid entry"},j=(n(15),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={problem:"",problemDisplay:"",isProblemHidden:!0,sizeModifier:"xxl",solution:"0"},e.hideProblem=function(){e.setState({isProblemHidden:!0}),e.setState({sizeModifier:"xxl"})},e.showProblem=function(){e.setState({isProblemHidden:!1}),e.setState({sizeModifier:"xl"})},e.closeBracket=function(e,t,n){for(;!b(e,t,n);)n.push(t)},e.solve=function(t){arguments.length>1&&void 0!==arguments[1]||e.state.solution;e.setState({problem:t}),e.setState({problemDisplay:t.replace(/\*/g,"x")});var n=Array.from(t);"invalid entry"!==y(v(t))?e.setState({solution:y(v(t))}):h(t.slice(-1))?(n.pop(),b("(",")",n)||e.closeBracket("(",")",n),e.setState({solution:y(v(n.join("")))})):b("(",")",n)||isNaN(t.slice(-1))||(e.closeBracket("(",")",n),e.setState({solution:y(v(n.join("")))}))},e.init=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e.setState({problem:t||""}),e.setState({problemDisplay:t?t.replace(/\*/g,"x"):""}),e.setState({solution:n}),t?e.showProblem():e.hideProblem(),console.log(t),console.log(e.state.problem)},e}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"container border border-dark mt-2"},i.a.createElement("h5",{className:"pt-2"},"Calculator - Aren I."),i.a.createElement(d,{problem:this.state.problemDisplay,solution:this.state.solution,isProblemHidden:this.state.problemHidden,sizeModifier:this.state.sizeModifier}),i.a.createElement("br",null),i.a.createElement(N,{problem:this.state.problem,hClick:this.solve,deleteLastChar:this.deleteChar,init:this.init,solution:this.state.solution,hideProblem:this.hideProblem,showProblem:this.showProblem,isProblemHidden:this.state.isProblemHidden}))}}]),n}(i.a.Component));o.a.render(i.a.createElement(j,null),document.querySelector("#root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.175e8515.chunk.js.map