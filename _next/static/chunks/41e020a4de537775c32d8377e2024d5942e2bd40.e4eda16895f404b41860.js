(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"7A6N":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI");function o(){return Object(a.useState)(null)}},BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("a3WO");function o(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},RjgW:function(e,t,n){"use strict";function a(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}n.d(t,"a",(function(){return a}))},XcHJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI");function o(){var e=Object(a.useRef)(!0),t=Object(a.useRef)((function(){return e.current}));return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},a3WO:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},i52p:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI");function o(e){var t=function(e){var t=Object(a.useRef)(e);return t.current=e,t}(e);Object(a.useEffect)((function(){return function(){return t.current()}}),[])}},knGs:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("dZvc"),o=n("q1tI"),r=function(e){var t;return"undefined"===typeof document?null:null==e?Object(a.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),(null==(t=e)?void 0:t.nodeType)&&e||null)};function i(e,t){var n=Object(o.useState)((function(){return r(e)})),a=n[0],i=n[1];if(!a){var c=r(e);c&&i(c)}return Object(o.useEffect)((function(){t&&a&&t(a)}),[t,a]),Object(o.useEffect)((function(){var t=r(e);t!==a&&i(t)}),[e,a]),a}},qvwu:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI");function o(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){t.current=e})),t.current}},usMS:function(e,t,n){"use strict";var a=n("BsWD");function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,o=!1,r=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(s){o=!0,r=s}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r,i=n("wx14"),c=n("q1tI"),s=n.n(c),l=n("+qdC"),u=n("zLVn"),d=n("TSYQ"),f=n.n(d),b=n("2fXS"),m=n("SJxq"),v=n("dZvc"),p=n("Q7zl");function h(e){if((!r&&0!==r||e)&&m.a){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),r=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return r}var g=n("7A6N"),O=n("ZCiN"),y=n("i52p"),j=n("YECM");function E(e){void 0===e&&(e=Object(v.a)());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(n){return e.body}}var w=n("RjgW"),N=n("GEtZ"),k=n("17x9"),x=n.n(k),C=n("i8i4"),S=n.n(C),R=n("XcHJ"),F=n("qvwu");function T(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function A(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function D(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=A(e.className,t):e.setAttribute("class",A(e.className&&e.className.baseVal||"",t))}var I=n("7j6X");function H(e){return"window"in e&&e.window===e?e:"nodeType"in(t=e)&&t.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var t}function M(e){var t;return H(e)||(t=e)&&"body"===t.tagName.toLowerCase()?function(e){var t=H(e)?Object(v.a)():Object(v.a)(e),n=H(e)||t.defaultView;return t.body.clientWidth<n.innerWidth}(e):e.scrollHeight>e.clientHeight}var B=["template","script","style"],P=function(e,t,n){[].forEach.call(e.children,(function(e){-1===t.indexOf(e)&&function(e){var t=e.nodeType,n=e.tagName;return 1===t&&-1===B.indexOf(n.toLowerCase())}(e)&&n(e)}))};function L(e,t){t&&(e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden"))}var q,z=function(){function e(e){var t=void 0===e?{}:e,n=t.hideSiblingNodes,a=void 0===n||n,o=t.handleContainerOverflow,r=void 0===o||o;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=a,this.handleContainerOverflow=r,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=h()}var t=e.prototype;return t.isContainerOverflowing=function(e){var t=this.data[this.containerIndexFromModal(e)];return t&&t.overflowing},t.containerIndexFromModal=function(e){return function(e,t){var n=-1;return e.some((function(e,a){return!!t(e,a)&&(n=a,!0)})),n}(this.data,(function(t){return-1!==t.modals.indexOf(e)}))},t.setContainerStyle=function(e,t){var n={overflow:"hidden"};e.style={overflow:t.style.overflow,paddingRight:t.style.paddingRight},e.overflowing&&(n.paddingRight=parseInt(Object(I.a)(t,"paddingRight")||"0",10)+this.scrollbarSize+"px"),Object(I.a)(t,n)},t.removeContainerStyle=function(e,t){Object.assign(t.style,e.style)},t.add=function(e,t,n){var a=this.modals.indexOf(e),o=this.containers.indexOf(t);if(-1!==a)return a;if(a=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,t){var n=t.dialog,a=t.backdrop;P(e,[n,a],(function(e){return L(!0,e)}))}(t,e),-1!==o)return this.data[o].modals.push(e),a;var r={modals:[e],classes:n?n.split(/\s+/):[],overflowing:M(t)};return this.handleContainerOverflow&&this.setContainerStyle(r,t),r.classes.forEach(T.bind(null,t)),this.containers.push(t),this.data.push(r),a},t.remove=function(e){var t=this.modals.indexOf(e);if(-1!==t){var n=this.containerIndexFromModal(e),a=this.data[n],o=this.containers[n];if(a.modals.splice(a.modals.indexOf(e),1),this.modals.splice(t,1),0===a.modals.length)a.classes.forEach(D.bind(null,o)),this.handleContainerOverflow&&this.removeContainerStyle(a,o),this.hideSiblingNodes&&function(e,t){var n=t.dialog,a=t.backdrop;P(e,[n,a],(function(e){return L(!1,e)}))}(o,e),this.containers.splice(n,1),this.data.splice(n,1);else if(this.hideSiblingNodes){var r=a.modals[a.modals.length-1],i=r.backdrop;L(!1,r.dialog),L(!1,i)}}},t.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),W=n("knGs");function _(e){var t=e||(q||(q=new z),q),n=Object(c.useRef)({dialog:null,backdrop:null});return Object.assign(n.current,{add:function(e,a){return t.add(n.current,e,a)},remove:function(){return t.remove(n.current)},isTopModal:function(){return t.isTopModal(n.current)},setDialogRef:Object(c.useCallback)((function(e){n.current.dialog=e}),[]),setBackdropRef:Object(c.useCallback)((function(e){n.current.backdrop=e}),[])})}var U=Object(c.forwardRef)((function(e,t){var n=e.show,a=void 0!==n&&n,o=e.role,r=void 0===o?"dialog":o,l=e.className,d=e.style,f=e.children,b=e.backdrop,v=void 0===b||b,p=e.keyboard,h=void 0===p||p,g=e.onBackdropClick,j=e.onEscapeKeyDown,k=e.transition,x=e.backdropTransition,C=e.autoFocus,T=void 0===C||C,A=e.enforceFocus,D=void 0===A||A,I=e.restoreFocus,H=void 0===I||I,M=e.restoreFocusOptions,B=e.renderDialog,P=e.renderBackdrop,L=void 0===P?function(e){return s.a.createElement("div",e)}:P,q=e.manager,z=e.container,U=e.containerClassName,K=e.onShow,V=e.onHide,J=void 0===V?function(){}:V,Z=e.onExit,G=e.onExited,X=e.onExiting,$=e.onEnter,Q=e.onEntering,Y=e.onEntered,ee=Object(u.a)(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),te=Object(W.a)(z),ne=_(q),ae=Object(R.a)(),oe=Object(F.a)(a),re=Object(c.useState)(!a),ie=re[0],ce=re[1],se=Object(c.useRef)(null);Object(c.useImperativeHandle)(t,(function(){return ne}),[ne]),m.a&&!oe&&a&&(se.current=E()),k||a||ie?a&&ie&&ce(!1):ce(!0);var le=Object(O.a)((function(){if(ne.add(te,U),ve.current=Object(N.a)(document,"keydown",be),me.current=Object(N.a)(document,"focus",(function(){return setTimeout(de)}),!0),K&&K(),T){var e=E(document);ne.dialog&&e&&!Object(w.a)(ne.dialog,e)&&(se.current=e,ne.dialog.focus())}})),ue=Object(O.a)((function(){var e;(ne.remove(),null==ve.current||ve.current(),null==me.current||me.current(),H)&&(null==(e=se.current)||null==e.focus||e.focus(M),se.current=null)}));Object(c.useEffect)((function(){a&&te&&le()}),[a,te,le]),Object(c.useEffect)((function(){ie&&ue()}),[ie,ue]),Object(y.a)((function(){ue()}));var de=Object(O.a)((function(){if(D&&ae()&&ne.isTopModal()){var e=E();ne.dialog&&e&&!Object(w.a)(ne.dialog,e)&&ne.dialog.focus()}})),fe=Object(O.a)((function(e){e.target===e.currentTarget&&(null==g||g(e),!0===v&&J())})),be=Object(O.a)((function(e){h&&27===e.keyCode&&ne.isTopModal()&&(null==j||j(e),e.defaultPrevented||J())})),me=Object(c.useRef)(),ve=Object(c.useRef)(),pe=k;if(!te||!(a||pe&&!ie))return null;var he=Object(i.a)({role:r,ref:ne.setDialogRef,"aria-modal":"dialog"===r||void 0},ee,{style:d,className:l,tabIndex:-1}),ge=B?B(he):s.a.createElement("div",he,s.a.cloneElement(f,{role:"document"}));pe&&(ge=s.a.createElement(pe,{appear:!0,unmountOnExit:!0,in:!!a,onExit:Z,onExiting:X,onExited:function(){ce(!0);for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==G||G.apply(void 0,t)},onEnter:$,onEntering:Q,onEntered:Y},ge));var Oe=null;if(v){var ye=x;Oe=L({ref:ne.setBackdropRef,onClick:fe}),ye&&(Oe=s.a.createElement(ye,{appear:!0,in:!!a},Oe))}return s.a.createElement(s.a.Fragment,null,S.a.createPortal(s.a.createElement(s.a.Fragment,null,Oe,ge),te))})),K={show:x.a.bool,container:x.a.any,onShow:x.a.func,onHide:x.a.func,backdrop:x.a.oneOfType([x.a.bool,x.a.oneOf(["static"])]),renderDialog:x.a.func,renderBackdrop:x.a.func,onEscapeKeyDown:x.a.func,onBackdropClick:x.a.func,containerClassName:x.a.string,keyboard:x.a.bool,transition:x.a.elementType,backdropTransition:x.a.elementType,autoFocus:x.a.bool,enforceFocus:x.a.bool,restoreFocus:x.a.bool,restoreFocusOptions:x.a.shape({preventScroll:x.a.bool}),onEnter:x.a.func,onEntering:x.a.func,onEntered:x.a.func,onExit:x.a.func,onExiting:x.a.func,onExited:x.a.func,manager:x.a.instanceOf(z)};U.displayName="Modal",U.propTypes=K;var V=Object.assign(U,{Manager:z}),J=(n("2W6z"),n("dI71")),Z=n("Zeqi"),G=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",X=".sticky-top",$=".navbar-toggler",Q=function(e){function t(){return e.apply(this,arguments)||this}Object(J.a)(t,e);var n=t.prototype;return n.adjustAndStore=function(e,t,n){var a,o=t.style[e];t.dataset[e]=o,Object(I.a)(t,((a={})[e]=parseFloat(Object(I.a)(t,e))+n+"px",a))},n.restore=function(e,t){var n,a=t.dataset[e];void 0!==a&&(delete t.dataset[e],Object(I.a)(t,((n={})[e]=a,n)))},n.setContainerStyle=function(t,n){var a=this;if(e.prototype.setContainerStyle.call(this,t,n),t.overflowing){var o=h();Object(Z.a)(n,G).forEach((function(e){return a.adjustAndStore("paddingRight",e,o)})),Object(Z.a)(n,X).forEach((function(e){return a.adjustAndStore("marginRight",e,-o)})),Object(Z.a)(n,$).forEach((function(e){return a.adjustAndStore("marginRight",e,o)}))}},n.removeContainerStyle=function(t,n){var a=this;e.prototype.removeContainerStyle.call(this,t,n),Object(Z.a)(n,G).forEach((function(e){return a.restore("paddingRight",e)})),Object(Z.a)(n,X).forEach((function(e){return a.restore("marginRight",e)})),Object(Z.a)(n,$).forEach((function(e){return a.restore("marginRight",e)}))},t}(z),Y=n("7xGa"),ee=/-(.)/g;var te=n("vUet"),ne=function(e){return e[0].toUpperCase()+(t=e,t.replace(ee,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function ae(e,t){var n=void 0===t?{}:t,a=n.displayName,o=void 0===a?ne(e):a,r=n.Component,c=n.defaultProps,l=s.a.forwardRef((function(t,n){var a=t.className,o=t.bsPrefix,c=t.as,l=void 0===c?r||"div":c,d=Object(u.a)(t,["className","bsPrefix","as"]),b=Object(te.a)(o,e);return s.a.createElement(l,Object(i.a)({ref:n,className:f()(a,b)},d))}));return l.defaultProps=c,l.displayName=o,l}var oe=ae("modal-body"),re=s.a.createContext({onHide:function(){}}),ie=s.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,o=e.centered,r=e.size,c=e.children,l=e.scrollable,d=Object(u.a)(e,["bsPrefix","className","centered","size","children","scrollable"]),b=(n=Object(te.a)(n,"modal"))+"-dialog";return s.a.createElement("div",Object(i.a)({},d,{ref:t,className:f()(b,a,r&&n+"-"+r,o&&b+"-centered",l&&b+"-scrollable")}),s.a.createElement("div",{className:n+"-content"},c))}));ie.displayName="ModalDialog";var ce=ie,se=ae("modal-footer"),le={label:x.a.string.isRequired,onClick:x.a.func},ue=s.a.forwardRef((function(e,t){var n=e.label,a=e.onClick,o=e.className,r=Object(u.a)(e,["label","onClick","className"]);return s.a.createElement("button",Object(i.a)({ref:t,type:"button",className:f()("close",o),onClick:a},r),s.a.createElement("span",{"aria-hidden":"true"},"\xd7"),s.a.createElement("span",{className:"sr-only"},n))}));ue.displayName="CloseButton",ue.propTypes=le,ue.defaultProps={label:"Close"};var de=ue,fe=s.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.closeLabel,o=e.closeButton,r=e.onHide,l=e.className,d=e.children,b=Object(u.a)(e,["bsPrefix","closeLabel","closeButton","onHide","className","children"]);n=Object(te.a)(n,"modal-header");var m=Object(c.useContext)(re),v=Object(O.a)((function(){m&&m.onHide(),r&&r()}));return s.a.createElement("div",Object(i.a)({ref:t},b,{className:f()(l,n)}),d,o&&s.a.createElement(de,{label:a,onClick:v}))}));fe.displayName="ModalHeader",fe.defaultProps={closeLabel:"Close",closeButton:!1};var be,me,ve=fe,pe=ae("modal-title",{Component:(be="h4",s.a.forwardRef((function(e,t){return s.a.createElement("div",Object(i.a)({},e,{ref:t,className:f()(e.className,be)}))})))}),he={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:ce};function ge(e){return s.a.createElement(Y.a,e)}function Oe(e){return s.a.createElement(Y.a,e)}var ye=s.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,o=e.style,r=e.dialogClassName,l=e.children,d=e.dialogAs,E=e["aria-labelledby"],w=e.show,N=e.animation,k=e.backdrop,x=e.keyboard,C=e.onEscapeKeyDown,S=e.onShow,R=e.onHide,F=e.container,T=e.autoFocus,A=e.enforceFocus,D=e.restoreFocus,I=e.restoreFocusOptions,H=e.onEntered,M=e.onExit,B=e.onExiting,P=e.onEnter,L=e.onEntering,q=e.onExited,z=e.backdropClassName,W=e.manager,_=Object(u.a)(e,["bsPrefix","className","style","dialogClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"]),U=Object(c.useState)({}),K=U[0],J=U[1],Z=Object(c.useState)(!1),G=Z[0],X=Z[1],$=Object(c.useRef)(!1),Y=Object(c.useRef)(!1),ee=Object(c.useRef)(null),ne=Object(g.a)(),ae=ne[0],oe=ne[1],ie=Object(O.a)(R);n=Object(te.a)(n,"modal"),Object(c.useImperativeHandle)(t,(function(){return{get _modal(){return ae}}}),[ae]);var ce=Object(c.useMemo)((function(){return{onHide:ie}}),[ie]);function se(){return W||(me||(me=new Q),me)}function le(e){if(m.a){var t=se().isContainerOverflowing(ae),n=e.scrollHeight>Object(v.a)(e).documentElement.clientHeight;J({paddingRight:t&&!n?h():void 0,paddingLeft:!t&&n?h():void 0})}}var ue=Object(O.a)((function(){ae&&le(ae.dialog)}));Object(y.a)((function(){Object(p.a)(window,"resize",ue),ee.current&&ee.current()}));var de=function(){$.current=!0},fe=function(e){$.current&&ae&&e.target===ae.dialog&&(Y.current=!0),$.current=!1},be=function(){X(!0),ee.current=Object(j.a)(ae.dialog,(function(){X(!1)}))},ve=function(e){"static"!==k?Y.current||e.target!==e.currentTarget?Y.current=!1:R():function(e){e.target===e.currentTarget&&be()}(e)},pe=Object(c.useCallback)((function(e){return s.a.createElement("div",Object(i.a)({},e,{className:f()(n+"-backdrop",z,!N&&"show")}))}),[N,z,n]),he=Object(i.a)({},o,{},K);N||(he.display="block");return s.a.createElement(re.Provider,{value:ce},s.a.createElement(V,{show:w,ref:oe,backdrop:k,container:F,keyboard:!0,autoFocus:T,enforceFocus:A,restoreFocus:D,restoreFocusOptions:I,onEscapeKeyDown:function(e){x||"static"!==k?x&&C&&C(e):(e.preventDefault(),be())},onShow:S,onHide:R,onEnter:function(e){e&&(e.style.display="block",le(e));for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];P&&P.apply(void 0,[e].concat(n))},onEntering:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];L&&L.apply(void 0,[e].concat(n)),Object(b.a)(window,"resize",ue)},onEntered:H,onExit:function(e){ee.current&&ee.current();for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];M&&M.apply(void 0,[e].concat(n))},onExiting:B,onExited:function(e){e&&(e.style.display="");for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];q&&q.apply(void 0,n),Object(p.a)(window,"resize",ue)},manager:se(),containerClassName:n+"-open",transition:N?ge:void 0,backdropTransition:N?Oe:void 0,renderBackdrop:pe,renderDialog:function(e){return s.a.createElement("div",Object(i.a)({role:"dialog"},e,{style:he,className:f()(a,n,G&&n+"-static"),onClick:k?ve:void 0,onMouseUp:fe,"aria-labelledby":E}),s.a.createElement(d,Object(i.a)({},_,{role:"document",onMouseDown:de,className:r}),l))}}))}));ye.displayName="Modal",ye.defaultProps=he,ye.Body=oe,ye.Header=ve,ye.Title=pe,ye.Footer=se,ye.Dialog=ce,ye.TRANSITION_DURATION=300,ye.BACKDROP_TRANSITION_DURATION=150;var je=ye,Ee=n("cWnB"),we=s.a.createElement;function Ne(e){return we(je,Object(i.a)({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),we(je.Header,{closeButton:!0,className:" modal-title"},we(je.Title,{id:"contained-modal-title-vcenter"},"Explicaci\xf3n")),we(je.Body,{className:"modal-body"},we("p",null,e.explication,we("a",{href:e.link,target:"_blank"}," ","Mas Informaci\xf3n"," ")),e.controls.length>0?we("h4",null,"Controles"):"",we("ul",{className:"ilusion-explanation"},e.controls.map((function(e){return we("li",null,e)})))),we(je.Footer,{className:" modal-title"},we(Ee.a,{variant:"light",onClick:e.onHide},"Close")))}t.a=function(e){var t=e.ilusion,n=e.ilusion2,a=e.explication,r=e.link,i=e.controls,c=e.title,u=o(s.a.useState(!1),2),d=u[0],f=u[1];return we("div",{className:"main-projects-container"},we("div",{className:"title"},we("h1",{className:"title-text"},c)),we("div",{className:"ilusion-wrap ilusion-wrap-overflow"},we("div",{className:"ilusion-canvas"},we(l.a,{sketch:t}),n?we("div",{className:"ilusion-canvas"},we(l.a,{sketch:n})," "):"")),we(Ee.a,{variant:"light",onClick:function(){return f(!0)}},"Informaci\xf3n"),we(Ne,{show:d,onHide:function(){return f(!1)},explication:a,controls:i,link:r}))}}}]);