(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],[,,,,,,,,,function(e,t,r){},function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),s=r(4),a=r.n(s),u=(r(9),r(2)),o=[{name:"euro",short:"EUR",rate:4.57},{name:"dolar amerykanski",short:"USD",rate:3.84},{name:"frank szwajcarski",short:"CHF",rate:4.24}],l=(r(10),r(0)),i=function(e){var t=e.result;return Object(l.jsx)("p",{className:"result",children:void 0!==t&&Object(l.jsxs)(l.Fragment,{children:[t.sourceAmount.toFixed(2),"\xa0PLN\xa0=\xa0",Object(l.jsxs)("strong",{children:[t.targetAmount.toFixed(2),"\xa0",t.currency]})]})})},j=(r(12),function(e){var t=e.setCurrency,r=e.currency;return Object(l.jsx)("ul",{value:r,onChange:function(e){var r=e.target;return t(r.value)},children:o.map((function(e){return Object(l.jsx)("li",{className:"radio__item",children:Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",name:"currency",value:e.short,required:!0})," ",e.short]})},e.short)}))})}),b=(r(13),function(e){var t=e.calculateResult,r=e.result,c=e.resetResult,s=Object(n.useState)(),a=Object(u.a)(s,2),o=a[0],b=a[1],d=Object(n.useState)(""),m=Object(u.a)(d,2),f=m[0],h=m[1];return Object(l.jsx)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(o,f)},children:Object(l.jsxs)("fieldset",{className:"form__fieldset",children:[Object(l.jsx)("legend",{className:"form__legend",children:"Przelicz jedn\u0105 walut\u0119"}),Object(l.jsx)("p",{children:Object(l.jsxs)("label",{className:"form__label",children:["Podaj kwot\u0119 w PLN: ",Object(l.jsx)("input",{type:"number",step:"0.01",min:"0.01",value:f,onChange:function(e){var t=e.target;return h(t.value)},placeholder:"Wprowad\u017a warto\u015b\u0107"})]})}),Object(l.jsx)(j,{setCurrency:b,currency:o}),Object(l.jsx)(i,{result:r}),Object(l.jsx)("button",{className:"form__button",children:"Przelicz!"}),Object(l.jsx)("button",{type:"reset",className:"form__button",onClick:function(){h(),c()},children:"Wyczy\u015b\u0107"})]})})});var d=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),r=t[0],c=t[1];return Object(l.jsx)("div",{className:"converter",children:Object(l.jsx)(b,{result:r,calculateResult:function(e,t){var r=o.find((function(t){return t.short===e})).rate;c({sourceAmount:+t,targetAmount:+t/r,currency:e})},resetResult:function(){c()}})})},m=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,15)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),m()}],[[14,1,2]]]);
//# sourceMappingURL=main.7c5fe2d6.chunk.js.map