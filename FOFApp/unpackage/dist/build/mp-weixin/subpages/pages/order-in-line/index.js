(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpages/pages/order-in-line/index"],{"2b11":function(e,t,r){"use strict";var n=r("de70"),a=r.n(n);a.a},"2edd":function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return n}));var n={uniSection:function(){return r.e("uni_modules/uni-section/components/uni-section/uni-section").then(r.bind(null,"1592"))},weituo:function(){return r.e("components/weituo/weituo").then(r.bind(null,"e88b"))},myTab:function(){return r.e("components/my-tab/my-tab").then(r.bind(null,"e5e2"))},myCouponid:function(){return r.e("components/my-couponid/my-couponid").then(r.bind(null,"5b5f"))},uniFilePicker:function(){return Promise.all([r.e("common/vendor"),r.e("uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker")]).then(r.bind(null,"230b"))},menuDetail:function(){return Promise.all([r.e("common/vendor"),r.e("components/menu-detail/menu-detail")]).then(r.bind(null,"0afe"))},myPay:function(){return Promise.all([r.e("common/vendor"),r.e("components/my-pay/my-pay")]).then(r.bind(null,"f85a"))},myPopup:function(){return r.e("components/my-popup/my-popup").then(r.bind(null,"768b"))}},a=function(){var e=this,t=e.$createElement,r=(e._self._c,e.renderSampleArr.length),n=e.__map(e.renderSampleArr,(function(t,r){var n=e.__get_orig(t),a=e.__map(e.productDetail.skus||[],(function(t,n){var a=e.__get_orig(t),i=e.skusComputed(t,r);return{$orig:a,m0:i}})),i=e.isUrgent(r);return{$orig:n,l0:a,m1:i}})),a=e.renderSampleArr.length,i=e.__map(e.productDetail.urgents||[],(function(t,r){var n=e.__get_orig(t),a=e.urgentComputed(t);return{$orig:n,m2:a}})),s=e.__map(e.skus_item.List||[],(function(t,r){var n=e.__get_orig(t),a=e.skusItemComputed(t);return{$orig:n,m3:a}}));e._isMounted||(e.e0=function(t,r){var n=[],a=arguments.length-2;while(a-- >0)n[a]=arguments[a+2];var i=n[n.length-1].currentTarget.dataset,s=i.eventParams||i["event-params"];t=s.item,r=s.i;return e.delProd(t,r)},e.e1=function(t,r){var n=[],a=arguments.length-2;while(a-- >0)n[a]=arguments[a+2];var i=n[n.length-1].currentTarget.dataset,s=i.eventParams||i["event-params"];r=s.i;return e.inputChange(t,r,"sample_name")},e.e2=function(t,r){var n=[],a=arguments.length-2;while(a-- >0)n[a]=arguments[a+2];var i=n[n.length-1].currentTarget.dataset,s=i.eventParams||i["event-params"];r=s.i;return e.inputChange(t,r,"sample_component")},e.e3=function(t,r){var n=[],a=arguments.length-2;while(a-- >0)n[a]=arguments[a+2];var i=n[n.length-1].currentTarget.dataset,s=i.eventParams||i["event-params"];r=s.i;return e.sampleArrChange(t,r,"sample_form")},e.e4=function(t,r){var n=[],a=arguments.length-2;while(a-- >0)n[a]=arguments[a+2];var i=n[n.length-1].currentTarget.dataset,s=i.eventParams||i["event-params"];r=s.i;return e.sampleArrChange(t,r,"sample_nature")},e.e5=function(t,r){var n=[],a=arguments.length-2;while(a-- >0)n[a]=arguments[a+2];var i=n[n.length-1].currentTarget.dataset,s=i.eventParams||i["event-params"];r=s.i;return e.sampleArrChange(t,r,"sample_storage_condition")},e.e6=function(t,r){var n=[],a=arguments.length-2;while(a-- >0)n[a]=arguments[a+2];var i=n[n.length-1].currentTarget.dataset,s=i.eventParams||i["event-params"];t=s.item,r=s.i;return e.skustabChange(t,r)},e.e7=function(t,r){var n=[],a=arguments.length-2;while(a-- >0)n[a]=arguments[a+2];var i=n[n.length-1].currentTarget.dataset,s=i.eventParams||i["event-params"];r=s.i;return e.inputChange(t,r,"sample_recycle")},e.e8=function(t,r){var n=[],a=arguments.length-2;while(a-- >0)n[a]=arguments[a+2];var i=n[n.length-1].currentTarget.dataset,s=i.eventParams||i["event-params"];r=s.i;return e.inputChange(t,r,"sample_number")},e.e9=function(t,r){var n=[],a=arguments.length-2;while(a-- >0)n[a]=arguments[a+2];var i=n[n.length-1].currentTarget.dataset,s=i.eventParams||i["event-params"];r=s.i;return e.inputChange(t,r,"sample_sort")},e.e10=function(t,r){var n=[],a=arguments.length-2;while(a-- >0)n[a]=arguments[a+2];var i=n[n.length-1].currentTarget.dataset,s=i.eventParams||i["event-params"];r=s.i;return e.inputChange(t,r,"test_purpose")},e.e11=function(t){return e.changeCouponID(t)},e.e12=function(t){var r=[],n=arguments.length-1;while(n-- >0)r[n]=arguments[n+1];var a=r[r.length-1].currentTarget.dataset,i=a.eventParams||a["event-params"];t=i.urgentItem;return e.urgent_listtabChange(t)},e.e13=function(t){var r=[],n=arguments.length-1;while(n-- >0)r[n]=arguments[n+1];var a=r[r.length-1].currentTarget.dataset,i=a.eventParams||a["event-params"];t=i.skusList;return e.skus_listtabChange(t)}),e.$mp.data=Object.assign({},{$root:{g0:r,l1:n,g1:a,l2:i,l3:s}})},i=[]},5539:function(e,t,r){"use strict";r.r(t);var n=r("2edd"),a=r("a3fa");for(var i in a)["default"].indexOf(i)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(i);r("2b11");var s=r("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"ff15a8fc",null,!1,n["a"],void 0);t["default"]=u.exports},a3fa:function(e,t,r){"use strict";r.r(t);var n=r("b704"),a=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(i);t["default"]=a.a},b704:function(e,t,r){"use strict";(function(e){var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("2eee")),i=n(r("448a")),s=n(r("c973")),u=n(r("9523")),o=r("26cb"),l=r("40e9"),p=r("4af6"),c=r("2ef0");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,u.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={data:function(){return{NumberToFormat:l.NumberToFormat,content:"",productDetail:{},disable:!1,showConfirm:!1,payState:!1,errTip:{sample_name:"请输入样品名称",sample_component:"请输入成分",sample_number:"请输入检测样品数",test_purpose:"请输入实验要求及目的",sample_sku:"请选择测试明细"},clickTime:0,clickCountPrice:!1,imageValue:[],Orderno:"",CouponID:0,File:"",skus_index:0,skus_item:{},select_skus:[],obj_index:0,defaultValA:{sampleNum:"A",sample_name:"",sample_component:"",sample_recycle:"否",urgent_name:"",urgent_price_per:"",sample_number:"",sample_sort:"",test_purpose:""},defaultVal:{},renderSampleArr:[{}],SampleArr:[{sampleNum:"A",sample_name:"",sample_component:"",sample_recycle:"否",urgent_name:"",urgent_price_per:"",sample_number:"",sample_sort:"",test_purpose:"",sample_sku:[]}],sample_recycle_list:[{key:"是"},{key:"否"}],totalPrice:0}},watch:{renderSampleArr:function(e,t){var r=this;e.map((function(e,t){r.SampleArr[t].sampleNum=r.NumberToFormat[t],r.$forceUpdate()}))}},computed:f(f(f({},(0,o.mapState)("m_client",["teamList"])),(0,o.mapState)("m_purchase",["purchaseInfo"])),{},{skusComputed:function(){var e=this;return function(t,r){var n=t.Name,a=e.NumberToFormat[r],i=!1,s=e.SampleArr.filter((function(e){return e.sampleNum==a}));if(!(0,c.isEmpty)(s)){var u=s[0].sample_sku.filter((function(e){return e.name==n}));i=!(0,c.isEmpty)(u)}return i}},skusItemComputed:function(){var e=this;return function(t){var r=!1;if(e.skus_item.List){var n=e.skus_item.Name,a=e.isCurrentItem(e.skus_index);if(!(0,c.isEmpty)(a)){var i=a[0].sample_sku.filter((function(e){return e.name==n}));if(!(0,c.isEmpty)(i)){var s=i[0].list[0]||{};(0,c.isEmpty)(s)||(r=s.item_id==t.ID)}}}return r}},isUrgent:function(){var e=this;return function(t){var r=e.isCurrentItem(t);if(!(0,c.isEmpty)(r)){var n=r[0];return!(!n.urgent_name||!n.urgent_price_per)}}},urgentComputed:function(){var e=this;return function(t){var r=e.isCurrentItem(e.obj_index);if(!(0,c.isEmpty)(r))return r[0].urgent_name==t.Name&&r[0].urgent_price_per==t.PricePer}}}),onLoad:function(t){var r=this;return(0,s.default)(a.default.mark((function n(){var i,s,u,o,p,c,m,f,d,h,_;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.showLoading({title:"数据加载中..."}),i={ID:parseInt(t.ID)},n.next=4,e.$http.post("user/order/view",i);case 4:if(s=n.sent,u=s.data,e.hideLoading(),!(0,l.isSuccess)(u.code)){n.next=21;break}r.productDetail=u.data,r.content=u.data.product.Content2||"",h=u.data.coupons||[],h.length>0||(h=[{ID:0,Price:"无优惠券可用"}]),r.CouponID=h[0].ID,_={sample_form:null!==u&&void 0!==u&&null!==(o=u.data)&&void 0!==o&&o.sample_form?u.data.sample_form[0]:"",sample_nature:null!==u&&void 0!==u&&null!==(p=u.data)&&void 0!==p&&p.sample_nature?u.data.sample_nature[0]:"",sample_storage_condition:null!==u&&void 0!==u&&null!==(c=u.data)&&void 0!==c&&c.sample_storage_condition?u.data.sample_storage_condition[0]:""},r.defaultVal=_,r.SampleArr[0].sample_form=null!==u&&void 0!==u&&null!==(m=u.data)&&void 0!==m&&m.sample_form?u.data.sample_form[0]:"",r.SampleArr[0].sample_nature=null!==u&&void 0!==u&&null!==(f=u.data)&&void 0!==f&&f.sample_nature?u.data.sample_nature[0]:"",r.SampleArr[0].sample_storage_condition=null!==u&&void 0!==u&&null!==(d=u.data)&&void 0!==d&&d.sample_storage_condition?u.data.sample_storage_condition[0]:"",r.productDetail.coupons=h,r.$refs.parentRef.$refs.popup.open(),n.next=22;break;case 21:return n.abrupt("return",e.$showMsg(u.message,1500));case 22:case"end":return n.stop()}}),n)})))()},methods:f(f({},(0,o.mapMutations)("m_purchase",["updatePurchaseInfo"])),{},{isCurrentItem:function(e){var t=this.NumberToFormat[e],r=this.SampleArr.filter((function(e){return e.sampleNum==t}));return r},closePopUp:function(){this.$refs.parentRef.$refs.popup.close()},changeCouponID:function(e){this.disable||(this.CouponID=e)},handleUrgent:function(e){this.disable||(this.obj_index=e,this.$refs.urgentRef.$refs.popup.open())},urgent_listtabChange:function(e){var t=this.isCurrentItem(this.obj_index);if(!(0,c.isEmpty)(t)){var r=t[0].urgent_name,n=t[0].urgent_price_per;r==e.Name&&n==e.PricePer?(t[0].urgent_name="",t[0].urgent_price_per=""):(t[0].urgent_name=e.Name,t[0].urgent_price_per=e.PricePer+""),this.$forceUpdate()}},urgentclosePopUp:function(){this.$refs.urgentRef.$refs.popup.close()},skustabChange:function(e,t){this.disable||(this.skus_item=e,this.skus_index=t,this.$refs.skusRef.$refs.popup.open())},addSkus:function(e,t){e[0].sample_sku.push({name:this.skus_item.Name,price:this.skus_item.Price+"",list:{0:{item_id:t.ID+"",item_price:t.Price+"",item_name:t.Name}}})},skus_listtabChange:function(e){var t=this;if(!this.disable){var r=this.isCurrentItem(this.skus_index);if(!(0,c.isEmpty)(r))if((0,c.isEmpty)(r[0].sample_sku))this.addSkus(r,e),this.$forceUpdate();else{var n=r[0].sample_sku.filter((function(t){return t.list[0].item_id==e.ID}));if((0,c.isEmpty)(n)){var a=r[0].sample_sku.filter((function(e){return e.name===t.skus_item.Name}));(0,c.isEmpty)(a)?this.addSkus(r,e):a[0].list={0:{item_id:e.ID+"",item_price:e.Price+"",item_name:e.Name}}}else r[0].sample_sku=r[0].sample_sku.filter((function(e){return e.name!==t.skus_item.Name}));this.$forceUpdate()}}},skusclosePopUp:function(){this.$refs.skusRef.$refs.popup.close()},sampleArrChange:function(e,t,r){this.disable||(this.SampleArr[t][r]=e,this.$forceUpdate())},inputChange:function(e,t,r){var n=this.isCurrentItem(t);(0,c.isEmpty)(n)||(n[0][r]=e.detail.value),this.$forceUpdate()},changeInfo:function(){this.clickCountPrice=!1,this.disable=!1,this.showConfirm=!1,this.clickTime=0},countPrice:function(){var t=this;return(0,s.default)(a.default.mark((function r(){var n,i,s,u,o,l;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=t.errTip,i=(0,c.find)(t.SampleArr,{sample_name:""}),(0,c.isEmpty)(i)){r.next=4;break}return r.abrupt("return",e.$showMsg(n["sample_name"],1500));case 4:if(s=(0,c.find)(t.SampleArr,{sample_component:""}),(0,c.isEmpty)(s)){r.next=7;break}return r.abrupt("return",e.$showMsg(n["sample_component"],1500));case 7:if(u=(0,c.find)(t.SampleArr,{sample_number:""}),(0,c.isEmpty)(u)){r.next=10;break}return r.abrupt("return",e.$showMsg(n["sample_number"],1500));case 10:if(o=(0,c.find)(t.SampleArr,{test_purpose:""}),(0,c.isEmpty)(o)){r.next=13;break}return r.abrupt("return",e.$showMsg(n["test_purpose"],1500));case 13:if(l=t.SampleArr.filter((function(e){return 0==e.sample_sku.length})),(0,c.isEmpty)(l)){r.next=16;break}return r.abrupt("return",e.$showMsg(n["sample_sku"],1500));case 16:return r.next=18,(0,p.orderPrice)(t.orderParam());case 18:if(t.totalPrice=r.sent,"--"!=t.totalPrice){r.next=21;break}return r.abrupt("return");case 21:t.clickCountPrice=!0,t.showConfirm=!0,t.disable=!0;case 24:case"end":return r.stop()}}),r)})))()},orderParam:function(){var e=this.productDetail.product.Code,t=(0,i.default)(this.SampleArr),r=t.map((function(e){return f(f({},e),{},{sample_sku:Object.assign({},e.sample_sku)})}));r=Object.assign({},r);var n={Item:{ProductCode:e,File:this.File,SampleArr:r},TotalPrice:"--"==this.totalPrice?0:this.totalPrice,CouponID:this.CouponID};return n},submit:function(){var t=this;return(0,s.default)(a.default.mark((function r(){var n,i;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.clickTime=t.clickTime+1,r.next=3,e.$http.post("user/order/add",t.orderParam());case 3:if(n=r.sent,i=n.data,!(0,l.isSuccess)(i.code)){r.next=11;break}t.Orderno=i.data.Orderno||"",t.showConfirm=!1,!t.showConfirm&&t.disable?t.payState=!0:t.payState=!1,r.next=12;break;case 11:return r.abrupt("return",e.$showMsg(i.message,1500));case 12:case"end":return r.stop()}}),r)})))()},clickPay:function(e,t){"open"===t?this.$refs.payRef.$refs.popup.open():this.$refs.payRef.$refs.popup.close()},comfirmPay:function(){this.$refs.payRef.$refs.popup.close(),e.redirectTo({url:"/subpages/pages/order/index"})},addProd:function(){this.renderSampleArr.push({}),this.SampleArr.push(f(f(f({},this.defaultValA),this.defaultVal),{},{sample_sku:[]}))},delProd:function(e,t){var r=this.isCurrentItem(t);this.SampleArr=(0,c.difference)(this.SampleArr,r),this.renderSampleArr.shift(),this.$forceUpdate()},selectFile:function(t){var r=this;return(0,s.default)(a.default.mark((function n(){var i,s,u;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("选择文件：",t),i=t.tempFilePaths,s=t.tempFiles,u=i[0],console.log(u),console.log(s),e.request({url:"http://www.foftest.com/admin/api.upload/state.html",data:{key:s[0].name,uptype:"",safe:0,name:s[0].name},header:{"Content-Type":"multipart/form-data"},success:function(e){console.log(e.data,"------");var t=e.data.data,n=t.key,a=t.safe,i=t.uptype;if(404==e.data.code){var o={key:n,uptype:i,safe:a,imgUrl:u,file:s[0].file};r.uploadFile(o)}}});case 7:case"end":return n.stop()}}),n)})))()},uploadFile:function(t){var r=this;return(0,s.default)(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log(t),e.uploadFile({url:"http://www.foftest.com/admin/api.upload/file.html",filePath:t.imgUrl,name:"file",formData:{file:t.file,key:t.imgUrl,uptype:t.uptype,safe:t.safe},header:{"Content-Type":"multipart/form-data"},success:function(t){var n=JSON.parse(t.data);return 1==n.code?(r.File=n.data.url,console.log(r.File),e.$showMsg("文件上传成功",1500)):e.$showMsg("文件上传失败",1500)}});case 2:case"end":return n.stop()}}),n)})))()},success:function(e){console.log("上传成功")},fail:function(e){console.log("上传失败：",e)}})};t.default=d}).call(this,r("543d")["default"])},de70:function(e,t,r){},ec44:function(e,t,r){"use strict";(function(e,t){var n=r("4ea4");r("a117");n(r("66fd"));var a=n(r("5539"));e.__webpack_require_UNI_MP_PLUGIN__=r,t(a.default)}).call(this,r("bc2e")["default"],r("543d")["createPage"])}},[["ec44","common/runtime","common/vendor"]]]);