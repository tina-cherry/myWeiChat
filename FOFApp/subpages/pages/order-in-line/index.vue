<template>
	<view class="buy-wrap">
		<uni-section>
			<view class="buy-box">
				<weituo :disabled="disable"/>
				<view style="margin-bottom: 10px;">邮寄地址：{{productDetail.product.MailingAddress || '--'}}</view>
			</view>
		</uni-section>
		<!-- 普通下单 -->
		<view class="subscribe-wrap">
			<view v-for="(item,i) in renderSampleArr" :key="i">
				<view class="title flex-between">
					<view>{{NumberToFormat[i]}}检测样品 <text class="tip"><text class="color-red">*</text>以下均为必填选项，请认真填写</text></view>
					<view v-if="renderSampleArr.length > 1" class="delText" @click="()=>delProd(item,i)">删除</view>
				</view>
				<view class="content">
					<view class="item">
						<view class="label">1.样品名称：</view>
						<input class="uni-input" placeholder="请输入样品名称" :value="SampleArr[i].sample_name" :disabled="disable" @input="(e)=>inputChange(e,i,'sample_name')" />
					</view>
					<view class="item">
						<view class="label">2.主要成分：</view>
						<input class="uni-input" placeholder="请输入主要成分" :value="SampleArr[i].sample_component" :disabled="disable" @input="(e)=>inputChange(e,i,'sample_component')" />
					</view>
					<view class="item">
						<view class="label">3.样品形态：</view>
						<view class="flex flex1 flex-column">
							<view>
								<my-tab :List="productDetail.sample_form || []" :select="SampleArr[i].sample_form" @tabChange="(sampleFormItem)=>sampleArrChange(sampleFormItem,i,'sample_form')"/>
							</view>
						</view>
					</view>
					<view class="item">
						<view class="label">4.样品性质：</view>
						<view class="flex flex1 flex-column">
							<view><my-tab :List="productDetail.sample_nature || [] " :select="SampleArr[i].sample_nature" @tabChange="(sampleFormItem)=>sampleArrChange(sampleFormItem,i,'sample_nature')"/></view>
							<view class="sample_nature_tip"><span style="color: red;">*</span>如因隐瞒样品属性对检测仪器或人员造成危害，后果由委托方承担</view>
						</view>
					</view>
					<view class="item">
						<view class="label">5.保存条件：</view>
						<view class="flex flex1 flex-column">
							<view><my-tab :List="productDetail.sample_storage_condition || [] " :select="SampleArr[i].sample_storage_condition" @tabChange="(sampleFormItem)=>sampleArrChange(sampleFormItem,i,'sample_storage_condition')"/></view>
						</view>
					</view>
					<view class="item">
						<view class="label">6.测试明细：</view>
						<view class="flex flex1 flex-column">
							<view>
								<view class="flex flex-wrap wrap">
									<view v-for="(item,skus_list_index) in productDetail.skus || [] " :key="skus_list_index" :class="['row', skusComputed(item,i) ? 'select' :'']" @click="()=>skustabChange(item,i)">
										{{item.Name}}
									</view>
								</view>

							</view>
						</view>
					</view>
					<view class="item">
						<view class="label">7.样品是否回收：</view>
							<radio-group @change="(e)=>inputChange(e,i,'sample_recycle')" class="flex">
								<label v-for="(sample_recycle) in sample_recycle_list" :key="sample_recycle.key" class="flex" style="margin-right: 8px;">
									<view>
										<radio :value="sample_recycle.key" :disabled="disable" color="#0e67a9" :checked="sample_recycle.key === SampleArr[i].sample_recycle" style="transform:scale(0.7)"/>
									</view>
									<view>{{sample_recycle.key}}</view>
								</label>
							</radio-group>
					</view>
					<view class="item">
						<view class="label">8.是否加急：</view>
						<view :class="['row', isUrgent(i) ? 'select' :'']" @click="handleUrgent(i)">加急</view>
					</view>
					<view class="item">
						<view class="label">9.检测样品数：</view>
						<input class="uni-input" type="digit" :value="SampleArr[i].sample_number" :disabled="disable" @input="(e)=>inputChange(e,i,'sample_number')"/>
					</view>
					<view class="item">
						<view class="label" style="width:102px">请为样品排序：</view>
						<view>
							<input class="uni-input" :value="SampleArr[i].sample_sort" :disabled="disable" @input="(e)=>inputChange(e,i,'sample_sort')"/>
							<view class="sample_nature_tip"><span style="color: red;">*</span>如“ 1, 2…”，便于标记，以防混乱。</view>
						</view>
					</view>
					<view class="item">
						<view class="label">10.实验要求及目的：</view>
						<textarea class="textarea" placeholder-style="color:#ccc" v-model="SampleArr[i].test_purpose" :disabled="disable" @input="(e)=>inputChange(e,i,'test_purpose')" placeholder="请填写具体的测试要求，如果有参考图或者参考文献，请上传附件以备参考，如果您对此实验不太了解，请与客服沟通后再下单。"></textarea>
					</view>
				</view>
			</view>
			<view class="item content flex-column" v-if="renderSampleArr.length < 9">
				<button @click="addProd" class="submit" style="width:130px;margin:0px;font-size: 12px;">增加一个样品组</button>
				<view class="sample_nature_tip"><span style="color: red;">*</span>当您的检测要求或样品类型不一样时，可以再增加一组样品。</view>
			</view>
			<view>
				<view class="title">使用优惠券</view>
				<view class="content">
					<my-couponid :List="productDetail.coupons" :CouponID="CouponID" @changeCouponID="(ID)=>changeCouponID(ID)"/>
				</view>
			</view>

			<view class="content">
				<uni-file-picker limit="1" file-mediatype="all" title="上传附件" @select="selectFile"
					:value="imageValue"
					@progress="progress" 
					@success="success" @fail="fail"></uni-file-picker>
				<view class="sample_nature_tip"><span style="color: red;">*</span>上传的文件格式只能是office不同版本文件和txt！建议附件大小不大于20M</view>
			</view>

			<!-- 菜单明细 -->
			<menu-detail :SampleArr="SampleArr" :totalPrice="totalPrice"/>

			<view class="btn-group" v-if="!clickCountPrice">
				<button @click="countPrice" class="submit">计算价格</button>
			</view>
			<view class="btn-group" v-else>
				<button @click="changeInfo" class="submit default" v-show="showConfirm">修改信息</button>
				<button @click="submit" class="submit" v-show="!payState">确认下单</button>
				<button @click="clickPay('','open')" class="submit" v-show="payState">完成支付</button>
			</view>
			<my-pay @closePopUp="clickPay('close')" ref="payRef" @comfirmPay="comfirmPay" :Orderno="Orderno"/>
		</view>

		<view style="height: 20px;"></view>
		
		<!-- 是否加急弹窗 -->
		<my-popup ref="urgentRef" @closePopUp="urgentclosePopUp" @clickBtnItem="urgentclosePopUp" btnText="确定">
			<view class="flex flex-wrap wrap">
				<view v-for="(urgentItem,urgent_list_i) in productDetail.urgents || [] " :key="urgent_list_i" :class="['row', urgentComputed(urgentItem) ? 'select' :'']" style="width: 244rpx;" @click="()=>urgent_listtabChange(urgentItem)">
					{{urgentItem.Name}}
				</view>
			</view>
		</my-popup>
		
		<!-- 明细弹窗 -->
		<my-popup ref="skusRef" @closePopUp="skusclosePopUp" @clickBtnItem="skusclosePopUp" btnText="确定">
			<view class="flex flex-wrap">
				<view v-for="(skusList,skus_list_i) in skus_item.List || [] " :key="skus_list_i" :class="['row', skusItemComputed(skusList) ? 'select' :'']" style="width: 244rpx;" @click="()=>skus_listtabChange(skusList)">
					{{skusList.Name}}
				</view>
			</view>
		</my-popup>
		
		<!-- 弹窗 -->
		<my-popup ref="parentRef" :content="content" @closePopUp="closePopUp" @clickBtnItem="closePopUp" btnText="立即下单"></my-popup>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	import {isSuccess,NumberToFormat} from '../../../util/index.js'
	import {orderPrice} from '../../../util/user.js'
	import { isEmpty,difference,find} from 'lodash';
	export default {
		data() {
			return {
				NumberToFormat,
				content: '',
				productDetail: {},
				disable: false,
				showConfirm: false,
				payState: false,
				errTip: {
					'sample_name': '请输入样品名称',
					'sample_component': '请输入成分',
					'sample_number':'请输入检测样品数',
					'test_purpose':'请输入实验要求及目的',
					'sample_sku':'请选择测试明细'
				},
				clickTime: 0,
				clickCountPrice: false,
				imageValue: [],
				Orderno:'',
				CouponID:0,
				File:"",    //文件上传路径
				skus_index:0,
				skus_item:{},
				select_skus:[],
				obj_index:0,
				defaultValA:{
					"sampleNum": "A",  //序列👌
					"sample_name": "", //样品名称
					"sample_component": "", //主要成分
					"sample_recycle": "否",  //是否回收
					"urgent_name": "", //加急项目
					"urgent_price_per": "", //加急价格
					"sample_number":'',   // 检测样品数
					"sample_sort":'',    //样品排序
					"test_purpose":'',   //实验要求及目的
				},
				defaultVal:{},
				renderSampleArr:[
					{},
				],
				SampleArr:[
					{
						"sampleNum": "A",  //序列👌
						"sample_name": "", //样品名称
						"sample_component": "", //主要成分
						"sample_recycle": "否",  //是否回收
						"urgent_name": "", //加急项目
						"urgent_price_per": "", //加急价格
						"sample_number":'',   // 检测样品数
						"sample_sort":'',    //样品排序
						"test_purpose":'',   //实验要求及目的
						sample_sku:[
							// {
							// 	name: "XAFS硬线中能",
							// 	price: '0',
							// 	list:{
							// 		'0':{
							// 			item_id: '999',
							// 			item_name: "含量大于5%",
							// 			item_price: '4000',
							// 		}
							// 	}		
							// }
						]
					},
				],
				sample_recycle_list:[
					{key:'是'},
					{key:'否'}
				],
				totalPrice:0,  //总价

			}
		},
		watch:{
			renderSampleArr:function(val,newVal){
				val.map((item,i)=>{
					this.SampleArr[i].sampleNum = this.NumberToFormat[i]
					this.$forceUpdate()
				})
			}
		},
		computed: {
			...mapState('m_client', ['teamList']),
			...mapState('m_purchase', ['purchaseInfo']),

			//计算明细是否选中--大项
			skusComputed: function () {
				return (item,i)=>{
					let Name = item.Name
					let sampleNum = this.NumberToFormat[i]
					let isActive = false
					let res = this.SampleArr.filter((item)=>{
						return item.sampleNum == sampleNum
					})
					if(!isEmpty(res)){
						let sample_sku_item = res[0].sample_sku.filter((item)=>{
						return item.name == Name
						})
						if(!isEmpty(sample_sku_item)){
							isActive = true
						}else{
							isActive = false
						}

					}
					return isActive
				} 
			},
			//计算明细项列表样式
			skusItemComputed: function () {
				return (item)=>{
					let isActive = false
					if(this.skus_item.List){
						let Name = this.skus_item.Name
						let res = this.isCurrentItem(this.skus_index)
						if(!isEmpty(res)){
							let sample_sku_item = res[0].sample_sku.filter((item)=>{
							return item.name == Name
							})

							if(!isEmpty(sample_sku_item)){
								let sample_sku_item_child = sample_sku_item[0].list[0] || {}
								if(!isEmpty(sample_sku_item_child)){
									isActive = sample_sku_item_child.item_id == item.ID ? true : false
								}

							}
						}
					}
					return isActive
				} 
			},
			//是否加急
			isUrgent:function(){
				return (i)=>{
					let isCurrentItem_res = this.isCurrentItem(i)
					if(!isEmpty(isCurrentItem_res)){
						let  row_item= isCurrentItem_res[0]
						if(row_item.urgent_name && row_item.urgent_price_per){
							return true
						}else{
							return false
						}
					}
				}
			},
			urgentComputed:function(){
				return (item)=>{
					let fil_sample = this.isCurrentItem(this.obj_index)
					if(!isEmpty(fil_sample)){
						if(fil_sample[0].urgent_name == item.Name && fil_sample[0].urgent_price_per == item.PricePer){
							return true
						}else{
							return false
						}
					}
				}
			}
		},

		async onLoad(option) {
			uni.showLoading({title: '数据加载中...',})
			let param = {
				ID: parseInt(option.ID)
			}
			const {data: res} = await uni.$http.post('user/order/view', param);
			uni.hideLoading()
			if (isSuccess(res.code)) {
				this.productDetail = res.data
				this.content  = res.data.product.Content2 || ''
				let coupons = res.data.coupons || []
				if (coupons.length > 0) {
					this.CouponID = coupons[0].ID
				} else {
					coupons = [{ID:0,Price:'无优惠券可用'}]
					
					this.CouponID = coupons[0].ID
				}

				let _defaultVal = {
					sample_form:res?.data?.sample_form ? res.data.sample_form[0] : '',  //提交 样品形态
					sample_nature:res?.data?.sample_nature ? res.data.sample_nature[0] : '',  //提交 样品性质
					sample_storage_condition:res?.data?.sample_storage_condition ? res.data.sample_storage_condition[0] : ''  //提交 保存条件
				}
				this.defaultVal=_defaultVal

				this.SampleArr[0].sample_form = res?.data?.sample_form ? res.data.sample_form[0] : ''  //提交 样品形态

				this.SampleArr[0].sample_nature = res?.data?.sample_nature ? res.data.sample_nature[0] : ''  //提交 样品性质

				this.SampleArr[0].sample_storage_condition = res?.data?.sample_storage_condition ? res.data.sample_storage_condition[0] : ''  //提交 保存条件

				//let sample_sku = res.data?.skus || []  //提交 保存条件

				// if(sample_sku.length > 0){
				// 	let fist_sample_sku =  sample_sku[0]
				// 	let fist_list = fist_sample_sku.List[0]
				// 	this.SampleArr[0].sample_sku[0] ={
				// 		name:fist_sample_sku.Name,
				// 		price:fist_sample_sku.Price,
				// 		list:{
				// 			'0':{
				// 				item_id:fist_list.ID,
				// 				item_price:fist_list.Price,
				// 				item_name:fist_list.Name,
				// 			}
				// 		}
				// 	}
				// }
				
				this.productDetail.coupons = coupons
				this.$refs.parentRef.$refs.popup.open()   //-----后期放开

			} else {
				return uni.$showMsg(res.message, 1500)
			}

		},
		methods: {
			...mapMutations('m_purchase', ['updatePurchaseInfo',]),
			//是否操作的当前项 ---明细
			isCurrentItem(i){
				let sampleNum = this.NumberToFormat[i]
				let res = this.SampleArr.filter((item)=>{
					return item.sampleNum == sampleNum
				})
				return res
			},
			closePopUp() {
				this.$refs.parentRef.$refs.popup.close()
			},
			changeCouponID(ID){
				if(this.disable) return 
				this.CouponID = ID
			},
			//点击加急
			handleUrgent(i){
				if(this.disable) return 
				this.obj_index = i
				this.$refs.urgentRef.$refs.popup.open()
			},
			//操作加急
			urgent_listtabChange(item){
				let fil_sample = this.isCurrentItem(this.obj_index)
				if(!isEmpty(fil_sample)){
					let urgent_name = fil_sample[0].urgent_name
					let urgent_price_per = fil_sample[0].urgent_price_per
					if(urgent_name == item.Name && urgent_price_per == item.PricePer){
						//删除
						fil_sample[0].urgent_name = '',
						fil_sample[0].urgent_price_per = ''
					}else{
						//添加/修改
						fil_sample[0].urgent_name = item.Name
						fil_sample[0].urgent_price_per = item.PricePer + ''
					}
					this.$forceUpdate()
				}
			},
			urgentclosePopUp(){
				this.$refs.urgentRef.$refs.popup.close()
			},
			//检测明细
			skustabChange(item,i){
				if(this.disable) return 
				this.skus_item = item
				this.skus_index = i
				this.$refs.skusRef.$refs.popup.open()
			},
			//添加明细
			addSkus(is_cur_opt,item){
				is_cur_opt[0].sample_sku.push({
					name:this.skus_item.Name,
					price:this.skus_item.Price +'',
					list:{
						"0":{
							item_id:item.ID +'',
							item_price:item.Price +'',
							item_name:item.Name,
							}
					}
				})
			},
			skus_listtabChange(item){
				if(this.disable) return 
				//第一 先判断点击的当前项之前知否选中
				let is_cur_opt = this.isCurrentItem(this.skus_index)
				// 如果 明细选项不为空
				if(!isEmpty(is_cur_opt)){
					if(!isEmpty(is_cur_opt[0].sample_sku)){
						//如果当前操作的和已有的一样则删除
						let is_cur_id_list = is_cur_opt[0].sample_sku.filter((list_item)=>{
							return list_item.list[0].item_id == item.ID
						})
						if(!isEmpty(is_cur_id_list)){
							is_cur_opt[0].sample_sku = is_cur_opt[0].sample_sku.filter((item)=>{
								return item.name !== this.skus_item.Name
							})
						}else{
							let is_cur_opt_item = is_cur_opt[0].sample_sku.filter((item)=>{
								return item.name === this.skus_item.Name
							})
							//修改
							if(!isEmpty(is_cur_opt_item)){
								is_cur_opt_item[0].list={
									"0":{
										item_id:item.ID + '',
										item_price:item.Price +'',
										item_name:item.Name,
									}
								}
							}else{
								//添加
								this.addSkus(is_cur_opt,item)
							}
						}
						this.$forceUpdate()
					}else{
						//添加
						this.addSkus(is_cur_opt,item)
						this.$forceUpdate()
					}
				}
			},
			skusclosePopUp(){
				this.$refs.skusRef.$refs.popup.close()
			},
			//tab 区域选择
			sampleArrChange(sampleFormItem,i,type){
				if(this.disable) return 
				this.SampleArr[i][type] = sampleFormItem
				this.$forceUpdate()
			},
			inputChange(e,i,type) {
				let _is_CurrentItem = this.isCurrentItem(i)
				if(!isEmpty(_is_CurrentItem)){
					_is_CurrentItem[0][type] = e.detail.value
				}
				this.$forceUpdate()
			},

			changeInfo() {
				//重置按钮状态
				this.clickCountPrice = false
				this.disable = false
				this.showConfirm = false
				this.clickTime = 0
			},

			//计算价格
			async countPrice() {
				let errTip = this.errTip
				
				//判断必填的是否为空
				let no_sample_name = find(this.SampleArr,{sample_name:''}) //样品名称
				if(!isEmpty(no_sample_name)){
					return uni.$showMsg(errTip['sample_name'], 1500)
				}
				let no_sample_component = find(this.SampleArr,{sample_component:''})  //样品成分
				if(!isEmpty(no_sample_component)){
					return uni.$showMsg(errTip['sample_component'], 1500)
				}
				let no_sample_number = find(this.SampleArr,{sample_number:''})  //样品数量
				if(!isEmpty(no_sample_number)){
					return uni.$showMsg(errTip['sample_number'], 1500)
				}
				let no_test_purpose = find(this.SampleArr,{test_purpose:''})  //检测目的
				if(!isEmpty(no_test_purpose)){
					return uni.$showMsg(errTip['test_purpose'], 1500)
				}

				let no_sample_sku = this.SampleArr.filter((item)=>item.sample_sku.length == 0)
				if(!isEmpty(no_sample_sku)){
					return uni.$showMsg(errTip['sample_sku'], 1500)
				}
				this.totalPrice  = await orderPrice(this.orderParam())

				if(this.totalPrice == '--') return
				// //先走计算价格的接口
				this.clickCountPrice = true
				this.showConfirm = true //修改信息按钮
				this.disable = true //确认信息
			},
			orderParam(){
				let {Code} = this.productDetail.product

				// ----转换数据格式start----
				let _SampleArr = [...this.SampleArr]
				let _val_SampleArr = _SampleArr.map(item=>{
					return {
						...item,
						sample_sku:Object.assign({},item.sample_sku)
					}
				})
				_val_SampleArr = Object.assign({},_val_SampleArr)
				// ----转换数据格式end----

				let param = {
					Item: {
						ProductCode: Code,
						File: this.File, //上传的附件路径，可选
						SampleArr: _val_SampleArr,
					},
					TotalPrice: this.totalPrice == '--' ? 0 : this.totalPrice, //这里后期需要计算
					CouponID: this.CouponID, //优惠券id  如果没有优惠券传 0

				}
				return param
			},
			async submit() {
				this.clickTime = this.clickTime + 1 //点击次数
				// this.showConfirm = true //修改信息按钮
				//this.disable = true //确认信息
				const {data: res} = await uni.$http.post('user/order/add', this.orderParam());
				if (isSuccess(res.code)) {
					this.Orderno = res.data.Orderno || ''
					this.showConfirm = false
					if (!this.showConfirm && this.disable) {
						this.payState = true
					} else {
						this.payState = false
					}
				} else {
					return uni.$showMsg(res.message, 1500)
				}
			},
			//完成支付
			clickPay(item, type) {
				if (type === 'open') {
					this.$refs.payRef.$refs.popup.open()
				} else {
					this.$refs.payRef.$refs.popup.close()
				}

			},
			comfirmPay() {
				this.$refs.payRef.$refs.popup.close()
				uni.redirectTo({
					url: '/subpages/pages/order/index'
				})
			},
			//增加一个样品组
			addProd(){
				this.renderSampleArr.push({})
				this.SampleArr.push(
					{
						...this.defaultValA,
						...this.defaultVal,
						sample_sku:[]
					},
				)
			},
			delProd(item,i){
				let _isCurrentItem = this.isCurrentItem(i)
				this.SampleArr = difference(this.SampleArr,_isCurrentItem) //删除指定项
				this.renderSampleArr.shift()
				this.$forceUpdate()
			},
			// 获取上传状态
			async selectFile(e) {
				console.log('选择文件：', e)
				const tempFilePaths = e.tempFilePaths;
				const tempFiles = e.tempFiles
				//获取图片临时路径
				const imgUrl = tempFilePaths[0]
					console.log(imgUrl)
					console.log(tempFiles)
				uni.request({
				    url: 'http://www.foftest.com/admin/api.upload/state.html', //仅为示例，并非真实接口地址。
				    data: {
				       key: tempFiles[0].name,
				       uptype:'',
				       safe:0,
				       name:tempFiles[0].name,
				    },
				    header: {
				        "Content-Type": "multipart/form-data",
				    },
				    success: (res) => {
				        console.log(res.data,'------');
						let {key,safe,uptype} = res.data.data
						if(res.data.code == 404){
							let param ={
								key:key ,
								uptype:uptype,
								safe:safe,
								imgUrl:imgUrl,
								file:tempFiles[0].file
							}
							this.uploadFile(param)
						}
				    }
				});

			},
			
			 async uploadFile(param){
			 	console.log(param)
				uni.uploadFile({
					url: 'http://www.foftest.com/admin/api.upload/file.html', //仅为示例，非真实的接口地址
					filePath: param.imgUrl,
					name: 'file',
					formData: {
						file:param.file,
						key: param.imgUrl,
						uptype:param.uptype,
						safe:param.safe,
					},
					header:{ "Content-Type": "multipart/form-data",},
					success: (uploadFileRes) => {
						let result = JSON.parse(uploadFileRes.data)
						if(result.code == 1){
							this.File = result.data.url
							console.log(this.File)
							return uni.$showMsg('文件上传成功', 1500)
						}
						return uni.$showMsg('文件上传失败', 1500)
					}
				});
			},
			// 上传成功
			success(e) {
				console.log('上传成功')
			},

			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.buy-wrap {
		background-color: #fff;
		min-height: 100vh;
	}
	.buy-box {
		padding: 0px 10px;
	}

	.radio-item {
		display: flex;
		align-items: center;
	}
	.label {
		width: 90px;
	}

	.color {
		color: $uni-color-primary;
	}

	.service-box {
		display: flex;
		flex: 1;
		flex-wrap: wrap;
	}

	.service-base {
		width: 60px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border: 1px solid $uni-border-color;
		box-sizing: border-box;
		border-radius: 6px;
		margin-bottom: 10px;
		font-size: 12px;
		margin-right: 6px;
	}

	.service-act {
		border: 1px solid $uni-color-primary;
		color: $uni-color-primary;
	}
	.subscribe-wrap {
		background-color: #fff;
	}
	
	.content {
		padding: 10px;
		font-size: 14px;
	}
	
	.title {
		color: $uni-color-primary;
		font-weight: bold;
		background-color: $uni-bg-primary;
		padding: 10px;
	}
	
	.item {
		display: flex;
		// align-items: baseline;
		margin-bottom: 10px;
	}
	.tip {
		font-size: 12px;
		margin-left: 40rpx;
	}
	
	.color-red {
		color: $uni-color-price;
	}
	
	.uni-input {
		border-bottom: 1px solid $uni-border-color;
		line-height: 30px;
		height: 30px;
		flex: 1;
	}
	
	.btn-group {
		display: flex;
		justify-content: center;
		width: 50%;
		margin: 0 auto;
	}
	
	.submit {
		background-color: $uni-color-primary;
		color: #fff;
		font-size: 12px;
	}
	
	.default {
		background-color: $uni-border-color;
		color: #333;
	}
	
	.price {
		background-color: $uni-color-price;
		color: #fff;
		border-radius: 50px;
		padding: 2px 10px;
	}
	.sample_nature_tip{
		font-size: 12px;
		color:#ccc;
		margin-top:4px;
	}
	.row{
		border:1px solid #ccc;
		padding:6px 6px;
		width: 27%;
		text-align: center;
		margin-bottom: 4px;
		font-size: 12px;
		margin-right: 8rpx;
		// width: 142rpx;
	}
	.wrap .row:nth-child(3n+3) {
        margin-right: 0;
    }
	.select{
		border:1px solid #0e67a9;
		color:#0e67a9
	}
	.textarea{
		color:#333;
		font-size: 12px;
		background-color: #f4f4f4;
		padding:4px;
		height: 60px;
	}
	// .wrap::after{
	// 	content: '';
    //     flex: auto; // 或者1
	// }
	.delText{
		font-size: 14px;
		padding: 4px;
	}
</style>