(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/register/register"],{2025:function(e,t,n){},"350f":function(e,t,n){"use strict";var r=n("2025"),a=n.n(r);a.a},"657d":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var r={myRadio:function(){return n.e("components/my-radio/my-radio").then(n.bind(null,"e7c0"))}},a=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){return e.inputChange(t,"phone")},e.e1=function(t){return e.inputChange(t,"username")},e.e2=function(t){return e.inputChange(t,"email")},e.e3=function(t){return e.inputChange(t,"companyAddr")},e.e4=function(t){return e.inputChange(t,"password")},e.e5=function(t){return e.inputChange(t,"confirmpassword")},e.e6=function(t){return e.radioChange(t)})},u=[]},aab7:function(e,t,n){"use strict";n.r(t);var r=n("b914"),a=n.n(r);for(var u in r)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},ac72:function(e,t,n){"use strict";n.r(t);var r=n("657d"),a=n("aab7");for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("350f");var o=n("f0c5"),s=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"ce842828",null,!1,r["a"],void 0);t["default"]=s.exports},b914:function(e,t,n){"use strict";(function(e){var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("2eee")),u=r(n("c973")),o=r(n("9523")),s=n("26cb"),i=n("40e9");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={name:"register",data:function(){return{companyType:"0",showPassword:!0,typeList:[{value:"0",name:"高校",checked:!0},{value:"1",name:"企业"},{value:"2",name:"科研"}],baseFrom:{phone:"",password:"",confirmpassword:"",username:"",email:"",companyAddr:"",checked:!0},map:{phone:"请输入手机号",username:"请输入姓名",email:"请输入邮箱",password:"请输入密码",confirmpassword:"请输入确认密码",checked:"请勾选用户注册协议"}}},methods:p(p({},(0,s.mapMutations)("m_users",["updateIsLogin","updateUserInfo","updateToken"])),{},{page1:function(){e.navigateTo({url:"/subpages/pages/userAgreement/index"})},page2:function(){e.navigateTo({url:"/subpages/pages/privacyAgreement/index"})},goLogin:function(){this.updateIsLogin(!0)},tabChange:function(e){this.active!==e&&(this.active=e,this.password="",this.code="")},showPass:function(){this.showPassword=!this.showPassword},inputChange:function(e,t){this.baseFrom[t]=e.detail.value},groupRadioChange:function(e){this.companyType=e.detail.value},radioChange:function(){this.checked=!this.checked},submit:function(){var t=this;return(0,u.default)(a.default.mark((function n(){var r,u,o,s,c,f,d,h,l,b;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t.baseFrom,u=r.phone,o=r.confirmpassword,s=r.password,c=1500,n.t0=a.default.keys(t.baseFrom);case 3:if((n.t1=n.t0()).done){n.next=9;break}if(f=n.t1.value,""!==t.baseFrom[f]){n.next=7;break}return n.abrupt("return",e.$showMsg(t.map[f],c));case 7:n.next=3;break;case 9:if(!(u.length<11)){n.next=11;break}return n.abrupt("return",e.$showMsg("请输入正确的手机号",c));case 11:if(!(s.length<8)){n.next=13;break}return n.abrupt("return",e.$showMsg("请设置不少于八位的密码",c));case 13:if(s==o){n.next=15;break}return n.abrupt("return",e.$showMsg("两次密码不一致",c));case 15:return d=t.typeList.filter((function(e){return e.value===t.companyType})),h=p(p({},t.baseFrom),{},{companyType:d&&d[0].name,pid1:0}),n.next=19,e.$http.post("user/register",h);case 19:if(l=n.sent,b=l.data,!(0,i.isSuccess)(b.code)){n.next=27;break}t.updateToken(b.data.token),t.updateUserInfo(b.data.user),e.switchTab({url:"/pages/my/index"}),n.next=28;break;case 27:return n.abrupt("return",e.$showMsg(b.message,1500));case 28:case"end":return n.stop()}}),n)})))()}})};t.default=f}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/register/register-create-component',
    {
        'components/register/register-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ac72"))
        })
    },
    [['components/register/register-create-component']]
]);