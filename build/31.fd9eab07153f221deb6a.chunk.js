webpackJsonp([31],{"./app/containers/NotificationsContainer/index.js":function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function a(e){return{dispatch:e}}var c=t("./node_modules/react/react.js"),u=t.n(c),f=t("./node_modules/react-redux/lib/index.js"),s=(t.n(f),t("./app/containers/NotificationsContainer/selectors.js"));t.d(n,"NotificationsContainer",function(){return y});var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var i=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var c in i)void 0===t[c]&&(t[c]=i[c]);else t||(t=i||{});if(1===a)t.children=r;else if(a>1){for(var u=Array(a),f=0;f<a;f++)u[f]=arguments[f+3];t.children=u}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),p=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),d=l("aside",{className:"notifications"},void 0,l("ul",{},void 0)),y=function(e){function n(){return o(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),p(n,[{key:"render",value:function(){return console.log("notifications"),d}}]),n}(u.a.Component),b=t.i(s.a)();n.default=t.i(f.connect)(b,a)(y)},"./app/containers/NotificationsContainer/selectors.js":function(e,n,t){"use strict";var o=t("./node_modules/reselect/es/index.js"),r=function(){return function(e){return e.get("notificationsContainer")}},i=function(){return t.i(o.a)(r(),function(e){return e.toJS()})};n.a=i}});