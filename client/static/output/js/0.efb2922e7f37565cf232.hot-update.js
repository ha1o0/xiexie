webpackHotUpdate(0,{270:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),s=r(u),f=n(177),p=n(166),b=n(271),d=o(b),h=n(274),y=r(h);n(275);var m=function(e){function t(e){l(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={hello:"yes"},n}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.helloActions;return s.default.createElement("div",{className:(0,y.default)("container-fluid",{hidden:!t}),id:"hello"},s.default.createElement("p",{className:"title"},"写写"),s.default.createElement("p",{className:"sub-title"},"xie xie"),s.default.createElement("div",{className:"btn-group"},s.default.createElement("button",{className:"btn btn-info",onClick:n.showLogin},"登录"),s.default.createElement("button",{className:"btn btn-info",onClick:n.showRegister},"注册")),s.default.createElement("p",{className:"look-look"},"不注册,随便看看"))}}]),t}(u.Component);m.propTypes={isActive:u.PropTypes.bool.isRequired};var v=function(e){return{isActive:e.hello.hello.helloIsActive}},_=function(e){return{helloActions:(0,f.bindActionCreators)(d,e)}};t.default=(0,p.connect)(v,_)(m)}});