(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/index"],{"1f3a":function(t,e,n){"use strict";(function(t,e){var a=n("4ea4");n("a117");a(n("66fd"));var o=a(n("c933"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(o.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"705c":function(t,e,n){},ab48:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={myPopup:function(){return n.e("components/my-popup/my-popup").then(n.bind(null,"768b"))}},o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.imgList,(function(e,n){var a=t.__get_orig(e),o=e.Img.indexOf(".mp4");return{$orig:a,g0:o}}))),a=t.notice.CreateAt&&t.dayjs(t.notice.CreateAt).format("YYYY-MM-DD HH:mm:ss");t.$mp.data=Object.assign({},{$root:{l0:n,g1:a}})},r=[]},abe1:function(t,e,n){"use strict";(function(t){var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("2eee")),r=a(n("c973")),i=a(n("0f86")),c=n("40e9"),u={data:function(){return{imgList:[],products:[],notice:{},content:"",dayjs:i.default}},onReady:function(e){this.videoContext=t.createVideoContext("myVideo")},onLoad:function(){var e=this;return(0,r.default)(o.default.mark((function n(){var a,r,i,u;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.showLoading({title:"数据加载中..."}),n.next=3,t.$http.post("");case 3:if(a=n.sent,r=a.data,t.hideLoading(),!(0,c.isSuccess)(r.code)){n.next=14;break}e.imgList=r.data.banner||[],e.products=r.data.products||[],e.notice=r.data.notice||"",u=(null===(i=r.data.notice)||void 0===i?void 0:i.Content)||"",u&&(u=u.replace(/pt/g,"px"),e.notice.Content=u.toString(),e.$refs.parentRef.$refs.popup.open()),n.next=15;break;case 14:return n.abrupt("return",t.$showMsg(r.message,1500));case 15:case"end":return n.stop()}}),n)})))()},methods:{closePopUp:function(){this.$refs.parentRef.$refs.popup.close()}}};e.default=u}).call(this,n("543d")["default"])},c933:function(t,e,n){"use strict";n.r(e);var a=n("ab48"),o=n("f5ab");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("e7a3");var i=n("f0c5"),c=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,"133f6ad7",null,!1,a["a"],void 0);e["default"]=c.exports},e7a3:function(t,e,n){"use strict";var a=n("705c"),o=n.n(a);o.a},f5ab:function(t,e,n){"use strict";n.r(e);var a=n("abe1"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a}},[["1f3a","common/runtime","common/vendor"]]]);