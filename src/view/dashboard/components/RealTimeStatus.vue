<template>
	<div class="real-time-status">
		<div class="header">
			<h2 class="header-title">
				实时概况
				<div>
					<span class="update-time" v-text="timeHandle"></span>
					<div class="switch" @click="change" :class="{'switch-hide':show}"></div>
				</div>
			</h2>
		</div>
		<div class="box">
			<div class="zent-col zent-col-12 box-col1">
				<div class="zent-col zent-col-12">
					<div class="main-overview-data-item">
						<div class="title">支付订单数</div>
						<a class="amount amount-cursor" href="#">
							<span></span>
							<span class="amount-today" v-text="dataList.payOrder"></span>
						</a>
						<div class="amount-yesterday">
							昨日:<span v-text="dataList.payOrder"></span>
						</div>
					</div>
				</div>
				<div class="zent-col zent-col-12">
					<div class="main-overview-data-item">
						<div class="title">支付金额（元）</div>
						<a class="amount amount-cursor" href="#">
							<span></span>
							<span class="amount-today" v-text="dataList.payNum"></span>
						</a>
						<div class="amount-yesterday">
							昨日:<span v-text="dataList.payNum"></span>
						</div>
					</div>
				</div>
				<div class="zent-col zent-col-12">
					<div class="main-overview-data-item">
						<div class="title">浏览量</div>
						<a class="amount amount-cursor" href="#">
							<span></span>
							<span class="amount-today" v-text="dataList.pageView"></span>
						</a>
						<div class="amount-yesterday">
							昨日:<span v-text="dataList.pageView"></span>
						</div>
					</div>
				</div>
				<div class="zent-col zent-col-12">
					<div class="main-overview-data-item">
						<div class="title">积累客户</div>
						<a class="amount amount-cursor" href="#">
							<span></span>
							<span class="amount-today" v-text="dataList.customers"></span>
						</a>
					</div>
				</div>
			</div>
			<div class="zent-col zent-col-12 box-col1">
				<div class="zent-col zent-col-12">
					<div class="main-overview-data-item">
						<div class="title">本月目标（元）</div>
						<a class="amount amount-cursor" href="#">
							<span></span>
							<span class="amount-today" v-text="dataList.targetNum"></span>
						</a>
					</div>
				</div>
				<div class="zent-col zent-col-12">
					<div class="main-overview-data-item">
						<div class="title">完成进度（%）</div>
						<a class="amount amount-cursor" href="#">
							<span></span>
							<span class="amount-today" v-text="dataList.completed"></span>
						</a>
					</div>
				</div>
				<div class="zent-col zent-col-12">
					<div class="main-overview-data-item">
						<div class="title">可用店铺余额（元）</div>
						<a class="amount amount-cursor" href="#">
							<span></span>
							<span class="amount-today" v-text="dataList.remainNum"></span>
						</a>
					</div>
				</div>
				<div class="zent-col zent-col-12">
					<div class="main-overview-data-item">
						<div class="title">待结算（元）</div>
						<a class="amount amount-cursor" href="#">
							<span></span>
							<span class="amount-today" v-text="dataList.waitClose"></span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import { mapState , mapMutations } from "vuex"

export default{
	computed:{
		...mapState('dashboardStore',['show','timeHandle','dataList'])
	},
	methods:{
		...mapMutations('dashboardStore',['changeStatus']),
		change(){
			this.changeStatus(!this.show)
		}
	}
}
</script>

<style lang="scss" scoped>
.real-time-status{
	margin-top:10px;
	.header {
		display: flex;
		justify-content: space-between;
		.header-title {
			font-size: 16px;
			font-weight: 900;
			color: #323233;
			display: inline-flex;
			align-items: center;
			div{
				.update-time {
					font-size: 14px;
					color: #969799;
					margin-left: 7px;
					font-weight: 500;
				}
				.switch {
					cursor: pointer;
					display: inline-block;
					margin-left: 10px;
					height: 16px;
					width: 16px;
					vertical-align: middle;
					background-size: cover;
					background-image: url(https://img.yzcdn.cn/v4/imgs/dashboard/eye-on.png);
					margin-top: -2px;
				}
				.switch-hide {
					background-image: url(https://img.yzcdn.cn/v4/imgs/dashboard/eye-off.png);
				}
			}
		}
	
	}
	.box{
		padding:0 20px;
		font-family: "arial narrow";
		.box_col1{
			padding-right: 56px;
			border-right: 1px solid #efefef;
		}
		.zent-col-12 {
			width: 50%;
			margin:20px 0;
			.main-overview-data-item {
				color: #323233;
				font-size: 12px;
				text-align: left;
				height: 94px;
				display: flex;
				flex-direction: column;
				.title {
					font-size: 14px;
					line-height: 14px;
					color: blue;
				}
				.amount {
					position: relative;
					display: inline-block;
					margin: 15px 0 13px;
					color: #333;
					font-size: 16px;
					cursor:pointer;
					text-decoration: none;
					.amount-today {
						font-size: 28px;
						font-weight: bold;
					}
				}
				.amount-yesterday {
					font-family: "arial narrow";
					line-height: 14px;
				}
			}
		}
		.zent-col {
			box-sizing: border-box;
			display: inline-block;
		}
	}
}
</style>
