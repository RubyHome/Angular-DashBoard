webpackJsonp([34],{"./app/containers/DashboardPage/constants.js":function(a,e,t){"use strict";t.d(e,"c",function(){return r}),t.d(e,"a",function(){return s}),t.d(e,"b",function(){return n});var r="app/DashboardPage/UPDATE_CHART_ACTION",s="app/DashboardPage/LOADING_CHART_ACTION",n="app/DashboardPage/LOADED_CHART_ACTION"},"./app/containers/DashboardPage/reducer.js":function(a,e,t){"use strict";function r(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments[1];switch(e.type){case n.a:return a.set("chart_loading",!0);case n.b:return a.merge({chart_loading:!1,chart:t.i(s.fromJS)({labels:e.data.labels,views:e.data.views,paid_views:e.data.paid_views})});default:return a}}var s=t("./node_modules/immutable/dist/immutable.js"),n=(t.n(s),t("./app/containers/DashboardPage/constants.js")),i=t.i(s.fromJS)({balance:"99.528",storage_current:"3gb",storage_total:"4gb",chart_loading:!0,chart:{labels:[],paid_views:[],views:[]},username:""});e.default=r}});