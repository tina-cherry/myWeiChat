<template>
	<view class="buy-wrap">
		<uni-section>
			<view class="buy-box">
				<weituo :disabled="disable"/>
				<view style="margin-bottom: 10px;">邮寄地址：{{productDetail.product.MailingAddress || '--'}}</view>
			</view>
		</uni-section>
		<view class="subscribe-wrap">
			<view class="title">
			  检测样品 <text class="tip"><text class="color-red">*</text>以下均为必填选项，请认真填写</text>
			</view>
			<view class="content">
				<view class="item">
					<view class="label">主要成分：</view>
					<input class="uni-input" placeholder="请输入主要成分" :value="baseFrom.chenfeng" :disabled="disable" @input="(e)=>inputChange(e,'chenfeng')"/>
				</view>
				<view class="item">
					<view class="label">预约时长（小时）：</view>
					<input class="uni-input" type="digit" :value="baseFrom.time" :disabled="disable" @input="(e)=>inputChange(e,'time')"/>
				</view>
				<view class="item">
					<view class="label" style="width: 80px;">开始时间：</view>
					<uni-datetime-picker v-model="startTime" :disabled="disable" @change="(e)=>inputChange(e,'startTime')" />
				</view>
			<view class="item">
				<view class="label" style="width: 80px;">结束时间：</view>
				<uni-datetime-picker v-model="endTime" :disabled="disable" @change="(e)=>inputChange(e,'endTime')" />
			</view>
			</view>
			<view>
				<view class="title">预约须知</view>
				<view class="content" v-html="productDetail.product.Content3"></view>
			</view>
			
			<view>
				<view class="title">使用优惠券</view>
				<view class="content">
					<my-couponid :List="productDetail.coupons" :CouponID="CouponID" @changeCouponID="(ID)=>changeCouponID(ID)"/>
				</view>
			</view>
			
			<view>
				<view class="title">明细菜单</view>
				<view class="content">
					<text>预约费用：</text><text class="price">￥{{totalPrice}}</text>
				</view>
				<view class="content" style="font-size: 16px;">
					<text>费用总计：</text><text class="countPrice">{{totalPrice}}元</text>
				</view>
			</view>
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
		<!-- 弹窗 -->
		<my-popup ref="parentRef" :content="content" 
		@closePopUp="closePopUp" @clickBtnItem="closePopUp"  btnText="预约下单"></my-popup>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	import {checkMap,isSuccess} from '../../../util/index.js'
	import {orderPrice} from '../../../util/user.js'
	export default {
		data() {
			return {
				content:'',
				productDetail:{},
				checkMap,
				disable:false,
				showConfirm:false,
				payState:false,
				CouponID:0,
				baseFrom:{
					chenfeng:'',
					time:'',
					startTime:'',
					endTime:''
				},
				tip:{
					chenfeng:'请输入成分',
					time:'请输入预约时长',
					startTime:'请选择开始时间',
					endTime:'请选择结束时间'
				},
				clickTime:0,
				couponList:[
					{name:'无可用优惠券',id:0},
					{name:'优惠券',id:2},
					{name:'优惠券',id:3},
				],
				clickCountPrice:false,
				totalPrice:0,  //总价
				Orderno:'',
			}
		},
		computed:{
		...mapState('m_client',['teamList']),
		...mapState('m_purchase',['purchaseInfo','disable'])	
		},

		async onLoad(option){
				uni.showLoading({
				  title: '数据加载中...',
				})
				let param={
					ID:parseInt(option.ID)
				}
				const { data: res }= await uni.$http.post('user/order/view',param);
				uni.hideLoading()
				if(isSuccess(res.code)){
					this.productDetail = res.data
					this.content  = res.data.product.Content3 || ''
					let coupons = res.data.coupons || []
					if (coupons.length > 0) {
						this.CouponID = coupons[0].ID
					} else {
						coupons = [{ID:0,Price:'无优惠券可用'}]
						this.productDetail.coupons = coupons
						this.CouponID = coupons[0].ID
						this.$forceUpdate()
					}
					this.$refs.parentRef.$refs.popup.open() 
					
				}else{
					return uni.$showMsg(res.message,1500) 
				}
				
		},
		methods: {
			...mapMutations('m_purchase',['updatePurchaseInfo','updateDisable']),
			closePopUp() {
				this.$refs.parentRef.$refs.popup.close()
			},
			changeCouponID(ID){
				if(this.disable) return 
				this.CouponID = ID
			},
			inputChange(e,type){
				if(type === 'startTime' || type === 'endTime'){
					this.baseFrom[type] = e
				}else{
					this.baseFrom[type] = e.detail.value
				}
			},
			changeInfo(){
				//重置按钮状态
				this.clickCountPrice=false
				this.disable = false
				this.showConfirm = false
				this.clickTime = 0
			},
			
			//计算价格
			async countPrice(){
				let result = this.checkMap(this.baseFrom,this.tip)
				if(!result) return
				this.totalPrice  = await orderPrice(this.orderParam())   //计算价格
				if(this.totalPrice == '--') return
				//先走计算价格的接口
				this.clickCountPrice=true
				this.showConfirm = true //修改信息按钮
				this.disable = true   //确认信息
			},
			orderParam(){
				let {Code} = this.productDetail.product
				let {chenfeng,time,startTime,endTime} = this.baseFrom
				let param={
					Item:{
						ProductCode:Code,
						SampleComponent:chenfeng,
						SampleNumber:Number(time),  //预约时长
						StartTime:startTime,
						EndTime:endTime
					},
					MailingAddress:this.productDetail.product.MailingAddress, 
					TotalPrice:this.totalPrice == '--' ? 0 : this.totalPrice,  //这里后期需要计算
					CouponID: this.CouponID, //优惠券id  如果没有优惠券传 0
					
				}
				return param
			},
			async submit(){
				this.clickTime = this.clickTime + 1 //点击次数
				// this.showConfirm = true  //修改信息按钮
				//this.disable = true   //确认信息
				const { data: res }= await uni.$http.post('user/order/book',this.orderParam());
				if(isSuccess(res.code)){
					this.Orderno = res.data.Orderno || ''
					this.showConfirm = false
					if(!this.showConfirm && this.disable){
						this.payState = true
					}else{
						this.payState = false
					}
				}else{
					return uni.$showMsg(res.message,1500) 
				}
			},
			//完成支付
			clickPay(item,type){
				if(type === 'open'){
					this.$refs.payRef.$refs.popup.open()
				}else{
					this.$refs.payRef.$refs.popup.close()
				}
			},
			comfirmPay() {
				this.$refs.payRef.$refs.popup.close()
				uni.redirectTo({
					url: '/subpages/pages/order/index'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.subscribe-wrap{
		background-color: #fff;
	}
	.content{
		padding:10px;
		font-size: 14px;
	}
	.title{
		color: $uni-color-primary;
		font-weight: bold;
		background-color:$uni-bg-primary;
		padding:10px;
	}
	.item{
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}
	.tip{
		font-size: 12px;
		margin-left: 40rpx;
	}
	.color-red{
		color: $uni-color-price;
	}
	.label{
		width: 126px;
	}
	.uni-input{
		border-bottom: 1px solid $uni-border-color;
		line-height: 30px;
		height: 30px;
		flex:1;
	}
	
	.btn-group{
		display: flex;
		justify-content: center;
		width: 50%;
		margin: 0 auto;
	}
	.submit{
		background-color: $uni-color-primary;
		color: #fff;
		font-size: 14px;
	}
	.default{
		background-color: $uni-border-color;
		color: #333;
	}
	.price{
		background-color: $uni-color-price;
		color: #fff;
		border-radius: 50px;
		padding:2px 10px;
	}
	.countPrice{
		color: $uni-color-price;
	}
	.buy-wrap{
		background-color: #fff;
		min-height: 100vh;
	}
	.buy-box{
		padding:0px 10px;
	}
	.radio-item{
		display: flex;
		align-items: center;
	}
	.weituo{
		color: $uni-color-primary;
	}
	.row-item{
		display: flex;
		align-items: center;
		margin-bottom: 10px;
		font-size: $uni-font-14;
	}
	.label{
		width: 80px;
	}
	.color{
		color: $uni-color-primary;
	}
	.service-box{
		display: flex;
		flex:1;
		flex-wrap: wrap;
	}
	.service-base{
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
  .service-act{
		border: 1px solid $uni-color-primary;
		color: $uni-color-primary;
	}
</style>
