(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/index"],{"048a":function(e,n,t){},"1ac2":function(e,n,t){"use strict";var o=t("048a"),i=t.n(o);i.a},a3f7:function(e,n,t){"use strict";t.r(n);var o=t("ae64"),i=t("b2af");for(var a in i)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("1ac2");var r=t("f0c5"),u=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"641de076",null,!1,o["a"],void 0);n["default"]=u.exports},ae64:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return o}));var o={logo:function(){return t.e("components/logo/logo").then(t.bind(null,"b893"))},uniIcons:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(t.bind(null,"7f84"))}},i=function(){var e=this.$createElement,n=(this._self._c,this.isLogin()),t=this.isLogin();this.$mp.data=Object.assign({},{$root:{m0:n,m1:t}})},a=[]},b072:function(e,n,t){"use strict";(function(e,n){var o=t("4ea4");t("a117");o(t("66fd"));var i=o(t("a3f7"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(i.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},b2af:function(e,n,t){"use strict";t.r(n);var o=t("ff6d"),i=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=i.a},ff6d:function(e,n,t){"use strict";(function(e){var o=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(t("9523")),a=t("26cb"),r=t("4af6");function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,i.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var c={data:function(){return{toLogin:r.toLogin,isLogin:r.isLogin,infoList:[{name:"我的订单",icon:"list",needLogin:!0,url:"/subpages/pages/order/index"},{name:"个人资产",icon:"wallet-filled",needLogin:!0,url:"/subpages/pages/wallet/index"},{name:"商品收藏",icon:"star",needLogin:!0,url:"/subpages/pages/collect/index"},{name:"关于我们",icon:"contact-filled",url:"/subpages/pages/aboutUs/index"},{name:"联系我们",icon:"phone",url:"/subpages/pages/contactUs/index"},{name:"联系客服",icon:"headphones"}]}},computed:s({},(0,a.mapState)("m_users",["userinfo"])),methods:s(s({},(0,a.mapMutations)("m_users",["updateUserInfo","updateToken"])),{},{goPage:function(n){return n.needLogin&&!this.isLogin()?e.navigateTo({url:"/subpages/pages/login/index"}):e.navigateTo({url:n.url})},loginOut:function(){return this.updateUserInfo({}),this.updateToken(""),e.navigateTo({url:"/subpages/pages/login/index"})}})};n.default=c}).call(this,t("543d")["default"])}},[["b072","common/runtime","common/vendor"]]]);