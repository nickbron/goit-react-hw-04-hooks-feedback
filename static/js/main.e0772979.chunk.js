(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c,r=n(1),a=n.n(r),i=n(6),o=n.n(i),s=(n(13),n(4)),d=n(2),b=n(3),j=b.a.div(c||(c=Object(d.a)(["\n  width: 400px;\n  padding: 20px;\n  margin: 20px;\n  border: 1px solid black;\n"]))),l=n(0),u=function(e){var t=e.title,n=e.children;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:t}),n]})};var O,x=function(e){var t=e.message;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{children:t})})},h=function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.positivePercentage;return Object(l.jsx)(l.Fragment,{children:r?Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:["Good: ",t]}),Object(l.jsxs)("li",{children:["Neutral: ",n]}),Object(l.jsxs)("li",{children:["Bad: ",c]}),Object(l.jsxs)("li",{children:["Total: ",r]}),Object(l.jsxs)("li",{children:["Positive feedback: ",a,"%"]})]}):Object(l.jsx)(x,{message:"No feedback given"})})},f=b.a.button(O||(O=Object(d.a)(["\n  padding: 10px 10px;\n  margin: 5px;\n  background-color: #d3cccc;\n  color: green;\n  font-weight: bold;\n  font-style: italic;\n  cursor: pointer;\n  border-radius: 10px;\n"]))),g=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(l.jsx)(l.Fragment,{children:Object.keys(t).map((function(e){return Object(l.jsx)(f,{type:"button",onClick:function(){return n(e)},children:e},e)}))})};function p(e){var t=Object(r.useState)(0),n=Object(s.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(0),o=Object(s.a)(i,2),d=o[0],b=o[1],O=Object(r.useState)(0),x=Object(s.a)(O,2),f=x[0],p=x[1],v=function(){return c+d+f},k=Math.round(100*c/v());return Object(l.jsxs)(j,{children:[Object(l.jsx)(u,{title:"Please leave feedback",children:Object(l.jsx)(g,{options:{good:c,neutral:d,bad:f},onLeaveFeedback:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":p((function(e){return e+1}));break;default:return}}})}),Object(l.jsx)(u,{title:"Statistics",children:Object(l.jsx)(h,{good:c,neutral:d,bad:f,total:v(),positivePercentage:k})})]})}var v=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(p,{})})};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e0772979.chunk.js.map