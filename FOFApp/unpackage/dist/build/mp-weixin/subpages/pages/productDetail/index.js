(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpages/pages/productDetail/index"],{7070:function(e,t,n){"use strict";n.r(t);var r=n("af03"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},"7ca4":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}));var r={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,"7f84"))}},a=function(){var e=this.$createElement;this._self._c},o=[]},a22a:function(e,t,n){"use strict";var r=n("e11e"),a=n.n(r);a.a},af03:function(e,t,n){"use strict";(function(e){var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("2eee")),o=r(n("9523")),u=r(n("c973")),i=n("40e9"),c=n("4af6"),s=n("26cb");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={data:function(){return{ID:null,productDetail:{},options:[{icon:"home",text:"首页"},{icon:"heart",text:"收藏"}],route:""}},onLoad:function(t){var n=this;return(0,u.default)(a.default.mark((function r(){var o,u,c,s,f;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o=(0,i.getCurrentPage)(),u=o.$page,n.route=u.fullPath?u.fullPath:"/pages/home/type",console.log(n.route),n.ID=t.id,e.showLoading({title:"数据加载中..."}),c={ID:parseInt(n.ID)},r.next=9,e.$http.post("product/detail",c);case 9:if(s=r.sent,f=s.data,e.hideLoading(),!(0,i.isSuccess)(f.code)){r.next=17;break}n.productDetail=f.data,n.handCollect(f.data.Fav),r.next=18;break;case 17:return r.abrupt("return",e.$showMsg(f.message,1500));case 18:case"end":return r.stop()}}),r)})))()},onShareAppMessage:function(){return{title:"FOF实验室",path:this.route}},onShareTimeline:function(){return{title:"FOF实验室",type:0,path:this.route}},methods:l(l({},(0,s.mapMutations)("m_purchase",["updateProductDetail"])),{},{openBuy:function(){if(!(0,c.isLogin)())return(0,c.toLogin)();3==this.productDetail.OrderType?e.navigateTo({url:"/subpages/pages/order-in-line/index?ID=".concat(this.productDetail.ID)}):e.navigateTo({url:"/subpages/pages/buy/index?ID=".concat(this.productDetail.ID)})},handCollect:function(e){e?(this.options[1].icon="heart-filled",this.options[1].color="#d42f2f",this.options[1].text="已收藏"):(this.options[1].icon="heart",this.options[1].text="收藏")},onClick:function(t){var n=this;return(0,u.default)(a.default.mark((function r(){var o,u,c,s,f,l,d;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(o=t.text,"首页"!==o){r.next=3;break}return r.abrupt("return",e.switchTab({url:"/pages/home/index"}));case 3:if("收藏"!==o){r.next=16;break}return u={ProductId:parseInt(n.ID)},r.next=7,e.$http.post("user/mark/add",u);case 7:if(c=r.sent,s=c.data,!(0,i.isSuccess)(s.code)){r.next=13;break}n.handCollect(1),r.next=14;break;case 13:return r.abrupt("return",e.$showMsg(s.message,1500));case 14:r.next=26;break;case 16:return f={ProductId:parseInt(n.ID)},r.next=19,e.$http.post("user/mark/del",f);case 19:if(l=r.sent,d=l.data,!(0,i.isSuccess)(d.code)){r.next=25;break}n.handCollect(0),r.next=26;break;case 25:return r.abrupt("return",e.$showMsg(d.message,1500));case 26:case"end":return r.stop()}}),r)})))()},buttonClick:function(e){this.options[2].info++}})};t.default=d}).call(this,n("543d")["default"])},b9ef:function(e,t,n){"use strict";(function(e,t){var r=n("4ea4");n("a117");r(n("66fd"));var a=r(n("c2f1"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},c2f1:function(e,t,n){"use strict";n.r(t);var r=n("7ca4"),a=n("7070");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("a22a");var u=n("f0c5"),i=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"593ad6e1",null,!1,r["a"],void 0);t["default"]=i.exports},e11e:function(e,t,n){}},[["b9ef","common/runtime","common/vendor"]]]);