(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(147);t.default=function(){return l.a.createElement(r.a,null,l.a.createElement("h1",null,"NOT FOUND"),l.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},147:function(e,t,a){"use strict";var n=a(7),l=a.n(n),r=a(0),o=a.n(r),c=(a(148),a(149)),i=a.n(c),u=(a(146),a(150)),s=a.n(u),m=(a(151),a(152)),p=a.n(m),h=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={email:""},t.handleInputChange=function(e){var a,n=e.target,l=n.value,r=n.name;t.setState(((a={})[r]=l,a))},t._handleSubmit=function(){var e=s()(i.a.mark(function e(a){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.state.email),a.preventDefault(),e.next=4,p()(t.state.email);case 4:e.sent;case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),t}return l()(t,e),t.prototype.render=function(){return o.a.createElement("section",{id:"header"},o.a.createElement("div",{className:"inner"},o.a.createElement("span",{className:"icon major fa-cloud"}),o.a.createElement("h1",null,"Do you want ",o.a.createElement("strong",null,"us "),"to keep",o.a.createElement("strong",null," you ")," ","posted?",o.a.createElement("br",null),"Sign up below!",o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement("form",{onSubmit:this._handleSubmit},o.a.createElement("div",null,o.a.createElement("input",{id:"id01",type:"text",name:"email",placeholder:"example@mail.com ",value:this.state.email,onChange:this.handleInputChange})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"Submit")))))},t}(o.a.Component),f=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=(new Date).getFullYear();return o.a.createElement("section",{id:"footer"},o.a.createElement("ul",{className:"icons"},o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/techcarefo/",className:"icon alt fa-facebook"},o.a.createElement("span",{className:"label"},"Facebook"))),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/techcare-fo",className:"icon alt fa-github"},o.a.createElement("span",{className:"label"},"GitHub"))),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:info@techcare.fo",className:"icon alt fa-envelope"},o.a.createElement("span",{className:"label"},"Email")))),o.a.createElement("ul",{className:"copyright"},o.a.createElement("li",null," TechCare.fo")," ",e,o.a.createElement("li",null,"Tel: ",o.a.createElement("a",{href:"tel:+298 522244"},"+298 522244")),o.a.createElement("li",null,"Vestara Bryggja 15"),o.a.createElement("li",null,"V-tal: 612952")))},t}(o.a.Component),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={loading:"is-loading"},a}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},10)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},a.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"body "+this.state.loading},o.a.createElement(h,null),e,o.a.createElement(f,null))},t}(o.a.Component);t.a=E}}]);
//# sourceMappingURL=component---src-pages-404-js-af178b8a79b7a5e70706.js.map