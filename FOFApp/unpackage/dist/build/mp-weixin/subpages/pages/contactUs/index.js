(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpages/pages/contactUs/index"],{2297:function(n,e,t){"use strict";t.r(e);var a=t("836a"),u=t.n(a);for(var c in a)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return a[n]}))}(c);e["default"]=u.a},"836a":function(n,e,t){"use strict";(function(n){var a=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=a(t("2eee")),c=a(t("c973")),r=t("40e9"),o={data:function(){return{contactus:[],company:{}}},onLoad:function(){var e=this;return(0,c.default)(u.default.mark((function t(){var a,c;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.showLoading({title:"数据加载中..."}),t.next=3,n.$http.post("company");case 3:if(a=t.sent,c=a.data,n.hideLoading(),!(0,r.isSuccess)(c.code)){t.next=11;break}e.contactus=c.data.contactus||[],e.company=c.data.company||[],t.next=12;break;case 11:return t.abrupt("return",n.$showMsg(c.message,1500));case 12:case"end":return t.stop()}}),t)})))()}};e.default=o}).call(this,t("543d")["default"])},8983:function(n,e,t){},8988:function(n,e,t){"use strict";(function(n,e){var a=t("4ea4");t("a117");a(t("66fd"));var u=a(t("c124"));n.__webpack_require_UNI_MP_PLUGIN__=t,e(u.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},aee5:function(n,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return a}));var a={uniCard:function(){return t.e("uni_modules/uni-card/components/uni-card/uni-card").then(t.bind(null,"2f6b"))},uniIcons:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(t.bind(null,"7f84"))}},u=function(){var n=this.$createElement;this._self._c},c=[]},c124:function(n,e,t){"use strict";t.r(e);var a=t("aee5"),u=t("2297");for(var c in u)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return u[n]}))}(c);t("e714");var r=t("f0c5"),o=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,"09d07d4a",null,!1,a["a"],void 0);e["default"]=o.exports},e714:function(n,e,t){"use strict";var a=t("8983"),u=t.n(a);u.a}},[["8988","common/runtime","common/vendor"]]]);