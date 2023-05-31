(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/my-pay/my-pay"],{2109:function(e,t,n){"use strict";(function(e){var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("2eee")),o=r(n("c973")),s=r(n("9523")),a=n("40e9"),u=n("4af6"),c=n("26cb");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,s.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={name:"my-pay",data:function(){return{sendCodeFn:u.sendCodeFn,code:"",time:60,sendCodeState:!1,timer:null,loading:!1,payType:"",sendCodeType:"",payStyle:[{name:"余额支付",icon:"wallet",sendCodeType:3,payType:"acount"},{name:"信用支付",icon:"shop",sendCodeType:4,payType:"credit"},{name:"微信支付",icon:"weixin",sendCodeType:11,payType:"weixin"}],disable:!0}},watch:{code:function(e){this.disable=!e}},props:{Orderno:{type:String,default:""}},computed:p({},(0,c.mapState)("m_users",["userinfo"])),methods:{sendCode:function(){var e=this;this.timer&&clearInterval(this.timer),this.sendCodeFn(this.userinfo.Phone,this.sendCodeType),this.sendCodeState=!0,this.timer=setInterval((function(){if(e.time<=0)return clearInterval(e.timer),e.time=60,void(e.sendCodeState=!1);e.time=e.time-1}),1e3)},close:function(){this.$emit("closePopUp")},choosePay:function(t){if(this.sendCodeType=t.sendCodeType,this.payType=t.payType,"weixin"!=t.payType)this.$refs.vertiyRef.$refs.popup.open();else{console.log("-----微信支付------");var n=this;e.login({provider:"weixin",success:function(e){n.payFn(e.code)}})}},payFn:function(t){var n=this;return(0,o.default)(i.default.mark((function r(){var o,s;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o=n.payType,r.next=3,(0,u.weixinPay)(t,o,n.Orderno);case 3:if(s=r.sent,!(0,a.isSuccess)(s.code)){r.next=8;break}n.weixinRequest(s.data,n.Orderno),r.next=9;break;case 8:return r.abrupt("return",e.$showMsg(s.message,1500));case 9:case"end":return r.stop()}}),r)})))()},weixinRequest:function(t,n){var r=this;e.requestPayment(p(p({},t),{},{success:function(e){console.log("success:"+JSON.stringify(e)),r.getPayState(n)},fail:function(e){console.log("fail:"+JSON.stringify(e))}}))},getPayState:function(t){var n=this;return(0,o.default)(i.default.mark((function r(){var o,s;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$http.post("user/order/pay/status",{extra:t});case 2:o=r.sent,s=o.data,(0,a.isSuccess)(s.code)?(n.clickVertiy(),n.$emit("comfirmPay"),e.redirectTo({url:"/subpages/pages/order/index"}),1==s.data?e.$showMsg("支付成功",1500):e.$showMsg("支付失败",1500)):e.$showMsg(s.message,1500);case 5:case"end":return r.stop()}}),r)})))()},clickVertiy:function(e){this.$refs.vertiyRef.$refs.popup.close(),this.code="",this.timer&&clearInterval(this.timer),this.time=60,this.sendCodeState=!1},comfirmPay:function(){var t=this;return(0,o.default)(i.default.mark((function n(){var r,o,s,u,c;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.loading){n.next=2;break}return n.abrupt("return");case 2:return r=t.payType,o=t.code,s={payType:r,orderNo:t.Orderno,code:"weixin"!==r&&o},t.loading=!0,n.next=7,e.$http.post("user/pay",s);case 7:if(u=n.sent,c=u.data,t.loading=!1,e.hideLoading(),!(0,a.isSuccess)(c.code)){n.next=17;break}e.$showMsg(c.message,1500),t.clickVertiy(),t.$emit("comfirmPay"),n.next=18;break;case 17:return n.abrupt("return",e.$showMsg(c.message,1500));case 18:case"end":return n.stop()}}),n)})))()}}};t.default=f}).call(this,n("543d")["default"])},"8ad2":function(e,t,n){"use strict";var r=n("a77f"),i=n.n(r);i.a},a77f:function(e,t,n){},ad4b:function(e,t,n){"use strict";n.r(t);var r=n("2109"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},f82d:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}));var r={uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,"3e9a"))},uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,"7f84"))},myPopup:function(){return n.e("components/my-popup/my-popup").then(n.bind(null,"768b"))}},i=function(){var e=this,t=this.$createElement;this._self._c;this._isMounted||(this.e0=function(t){e.code=t.detail.value})},o=[]},f85a:function(e,t,n){"use strict";n.r(t);var r=n("f82d"),i=n("ad4b");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("8ad2");var s=n("f0c5"),a=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"6c294eda",null,!1,r["a"],void 0);t["default"]=a.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/my-pay/my-pay-create-component',
    {
        'components/my-pay/my-pay-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f85a"))
        })
    },
    [['components/my-pay/my-pay-create-component']]
]);
