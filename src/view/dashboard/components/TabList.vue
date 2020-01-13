<template>
	<div class="tabs">
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
			<el-tab-pane label="全部事项" name="first">
				<div class="all-matters">
					<div class="zent-tabs-panel">
						<div class="data-list">
							<div>
								<a href="#">
									<span>待发货订单</span>
									<span>0</span>
								</a>
							</div>
							<div>
								<a href="#">
									<span>待回复客户数</span>
									<span>0</span>
								</a>
							</div>
							<div>
								<a href="#">
									<span>近期滞销商品</span>
									<span>0</span>
								</a>
							</div>
							<div>
								<a href="#">
									<span>待退款订单</span>
									<span>0</span>
								</a>
							</div>
							<div>
								<a href="#">
									<span>排队中客户数</span>
									<span>0</span>
								</a>
							</div>
							<div>
								<a href="#">
									<span>库存过少商品</span>
									<span>0</span>
								</a>
							</div>
						</div>
						<div class="news-list">
							<div class="news-list-col">
								<span class="desc desc--1">
									未创建客户分群
									&nbsp;&nbsp;
									<span class="subdesc">通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
								</span>
								<a href="#" class="link">
									立即创建
								</a>
							</div>
							<div class="news-list-col">
								<span class="desc desc--1">
									未开启会员储值
									&nbsp;&nbsp;
									<span class="subdesc">帮助您提升会员忠诚度、增强粘性，持续营销会员，牢牢锁住会员</span>
								</span>
								<a href="#" class="link">
									立即开启
								</a>
							</div>
							<div class="news-list-col">
								<span class="desc desc--1">
									未填写客服电话
									&nbsp;&nbsp;
									<span class="subdesc">填写后，可以帮助买家快速联系到您</span>
								</span>
								<a href="#" class="link">
									立即优化
								</a>
							</div>
							<div class="news-list-col">
								<span class="desc desc--1">
									未填写店铺地图定位
									&nbsp;&nbsp;
									<span class="subdesc">填写后，买家可以通过地图直观了解到您的店铺位置</span>
								</span>
								<a href="#" class="link">
									立即优化
								</a>
							</div>
							<div class="news-list-col">
								<span class="desc desc--1">
									未完成店铺认证
									&nbsp;&nbsp;
									<span class="subdesc">完成认证后可使用转账、提现等功能</span>
								</span>
								<a href="#" class="link">
									立即认证
								</a>
							</div>
							<div class="news-list-col">
								<span class="desc desc--1">
									未完成微信支付实名认证
									&nbsp;&nbsp;
									<span class="subdesc">微信支付实名认证后可正常使用微信支付能力</span>
								</span>
								<a href="#" class="link">
									立即认证
								</a>
							</div>
							<div class="news-list-col">
								<span class="desc desc--1">
									未加入有赞担保
									&nbsp;&nbsp;
									<span class="subdesc">加入后，以有赞平台信用担保背书为核心，解决社交电商信任问题</span>
								</span>
								<a href="#" class="link">
									立即优化
								</a>
							</div>
							<div class="news-list-col">
								<span class="desc desc--1">
									未开通快速回款
									&nbsp;&nbsp;
									<span class="subdesc">开通后，发货当日即可回款，让生意转的更快</span>
								</span>
								<a href="#" class="link">
									立即开通
								</a>
							</div>
							<div class="news-list-col">
								<span class="desc desc--1">
									未授权绑定微信小程序
									&nbsp;&nbsp;
									<span class="subdesc"></span>
								</span>
								<a href="#" class="link">
									立即处理
								</a>
							</div>
							<div class="news-list-col">
								<span class="desc desc--1 desc--2">
									跳失率100.00% ，行业标准22.9%，改善空间大
									&nbsp;&nbsp;
									<span class="subdesc"></span>
								</span>
								<a href="#" class="link">
									快速提升
								</a>
							</div>
							<div class="news-list-col">
								<span class="desc desc--1 desc--2">
									未订购三方应用
									&nbsp;&nbsp;
									<span class="subdesc">您可在应用市场获取丰富的营销工具</span>
								</span>
								<a href="#" class="link">
									立即前往
								</a>
							</div>
							<div class="news-list-col">
								<span class="desc desc--1 desc--2">
									未入驻有赞精选
									&nbsp;&nbsp;
									<span class="subdesc">入驻后，将免费为你的商品带来曝光和流量</span>
								</span>
								<a href="#" class="link">
									立即入驻
								</a>
							</div>
							<div class="news-list-col">
								<span class="desc desc--1 desc--2">
									未绑定微信公众号
									&nbsp;&nbsp;
									<span class="subdesc">绑定后，在这管理你的公众号，有赞提供比微信后台更强大的功能</span>
								</span>
								<a href="#" class="link">
									立即绑定
								</a>
							</div>
							<div class="news-list-col">
								<span class="desc desc--1 desc--2">
									未入驻有赞供货商
									&nbsp;&nbsp;
									<span class="subdesc">入驻后，让更多人帮你卖货，快速获取订单，建立分销网络</span>
								</span>
								<a href="#" class="link">
									立即入驻
								</a>
							</div>
							<div class="news-list-col">
								<span class="desc desc--1 desc--2">
									分销市场补充货源
									&nbsp;&nbsp;
									<span class="subdesc">丰富商品品类可更好的拓展获客渠道</span>
								</span>
								<a href="#" class="link">
									立即选货
								</a>
							</div>
						</div>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="店铺基础" name="second">
				<div class="shop">
					<div class="news-list">
						<div class="news-list-col">
							<span class="desc desc--1">
								未填写客服电话
								&nbsp;&nbsp;
								<span class="subdesc">填写后，可以帮助买家快速联系到您</span>
							</span>
							<a href="#" class="link">
								立即优化
							</a>
						</div>
						<div class="news-list-col">
							<span class="desc desc--1">
								未填写店铺地图定位
								&nbsp;&nbsp;
								<span class="subdesc">填写后，买家可以通过地图直观了解到您的店铺位置</span>
							</span>
							<a href="#" class="link">
								立即优化
							</a>
						</div>
						<div class="news-list-col">
							<span class="desc desc--1">
								未完成店铺认证
								&nbsp;&nbsp;
								<span class="subdesc">完成认证后可使用转账、提现等功能</span>
							</span>
							<a href="#" class="link">
								立即认证
							</a>
						</div>
						<div class="news-list-col">
							<span class="desc desc--1">
								未完成微信支付实名认证
								&nbsp;&nbsp;
								<span class="subdesc">微信支付实名认证后可正常使用微信支付能力</span>
							</span>
							<a href="#" class="link">
								立即认证
							</a>
						</div>
						<div class="news-list-col">
							<span class="desc desc--1">
								未加入有赞担保
								&nbsp;&nbsp;
								<span class="subdesc">加入后，以有赞平台信用担保背书为核心，解决社交电商信任问题</span>
							</span>
							<a href="#" class="link">
								立即优化
							</a>
						</div>
						<div class="news-list-col">
							<span class="desc desc--1">
								未开通快速回款
								&nbsp;&nbsp;
								<span class="subdesc">开通后，发货当日即可回款，让生意转的更快</span>
							</span>
							<a href="#" class="link">
								立即开通
							</a>
						</div>
						<div class="news-list-col">
							<span class="desc desc--1">
								未授权绑定微信小程序
								&nbsp;&nbsp;
								<span class="subdesc"></span>
							</span>
							<a href="#" class="link">
								立即处理
							</a>
						</div>
					</div>
					<span class="border"></span>
					<div class="news-list">
						<div class="news-list-col">
							<span class="desc desc--1 desc--2">
								未订购三方应用
								&nbsp;&nbsp;
								<span class="subdesc">您可在应用市场获取丰富的营销工具</span>
							</span>
							<a href="#" class="link">
								立即前往
							</a>
						</div>
						<div class="news-list-col">
							<span class="desc desc--1 desc--2">
								未入驻有赞精选
								&nbsp;&nbsp;
								<span class="subdesc">入驻后，将免费为你的商品带来曝光和流量</span>
							</span>
							<a href="#" class="link">
								立即入驻
							</a>
						</div>
						<div class="news-list-col">
							<span class="desc desc--1 desc--2">
								未绑定微信公众号
								&nbsp;&nbsp;
								<span class="subdesc">绑定后，在这管理你的公众号，有赞提供比微信后台更强大的功能</span>
							</span>
							<a href="#" class="link">
								立即绑定
							</a>
						</div>
						<div class="news-list-col">
							<span class="desc desc--1 desc--2">
								未入驻有赞供货商
								&nbsp;&nbsp;
								<span class="subdesc">入驻后，让更多人帮你卖货，快速获取订单，建立分销网络</span>
							</span>
							<a href="#" class="link">
								立即入驻
							</a>
						</div>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="商品体验" name="third">
				<div class="commodity">
					<div class="news-list">
						<div class="news-list-col">
							<span class="desc desc--1 desc--2">
								分销市场补充货源
								&nbsp;&nbsp;
								<span class="subdesc">丰富商品品类可更好的拓展获客渠道</span>
							</span>
							<a href="#" class="link">
								立即选货
							</a>
						</div>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="物流体验" name="fourth">定时任务补偿</el-tab-pane>
			<el-tab-pane label="售后体验" name="fifth">定时任务补偿</el-tab-pane>
			<el-tab-pane label="服务体验" name="sixth">定时任务补偿</el-tab-pane>
			<el-tab-pane label="流量表现" name="seventh">
				<div class="hots">
					<div class="news-list">
						<div class="news-list-col">
							<span class="desc desc--1">
								未创建客户分群
								&nbsp;&nbsp;
								<span class="subdesc">通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
							</span>
							<a href="#" class="link">
								立即创建
							</a>
						</div>
						<div class="news-list-col">
							<span class="desc desc--1">
								未开启会员储值
								&nbsp;&nbsp;
								<span class="subdesc">帮助您提升会员忠诚度、增强粘性，持续营销会员，牢牢锁住会员</span>
							</span>
							<a href="#" class="link">
								立即开启
							</a>
						</div>
					</div>
					<span class="border"></span>
					<div class="news-list">
						<div class="news-list-col">
							<span class="desc desc--1 desc--2">
								跳失率100.00% ，行业标准22.9%，改善空间大
								&nbsp;&nbsp;
								<span class="subdesc"></span>
							</span>
							<a href="#" class="link">
								快速提升
							</a>
						</div>
					</div>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
export default {
	data() {
		return {
			activeName: 'first'
		};
	},
	methods: {
	handleClick(tab, event) {
			console.log(tab, event);
		}
	}
};
</script>

<style lang="scss" scoped>

@mixin news-list {
	.news-list{
		padding-bottom: 12px;
		margin-left: 25px;
		margin-top: 16px;
		.news-list-col{
			display: flex;
			align-items: center;
			margin-top: 16px;
			.desc{
				font-size: 14px;
				flex: 1;
				margin-left: 4px;
				position: relative;
				.subdesc{
					color: #969799;
				}
			}
			.desc--1:before{
				content: "";
				position: absolute;
				left: -25px;
				top: 1px;
				height: 16px;
				width: 16px;
				background-size: 16px;
				background-repeat: no-repeat;
				background-image: url(//img.yzcdn.cn/wsc-pc-v4/icon/red-flag.png);
			}
			.link{
				font-size: 14px;
				margin-left: 38px;
				text-decoration: none;
				color: blue;
			}
			.desc--2:before{
				background-image: url(//img.yzcdn.cn/wsc-pc-v4/icon/blue-flag.png);
			}
		}
	}
}

.tabs{
	margin-left: 100px;
	.all-matters{
		width: 680px;
		.zent-tabs-panel{
			height: 250px;
			overflow-y: auto;
			.data-list{
				display: flex;
				flex-wrap: wrap;
				padding: 16px 16px 16px 0;
				background-color: #f7f8fa;
				&>div{
					flex-basis: 33%;
					display: -ms-flexbox;
					display: flex;
					align-items: baseline;
					&>a{
						width: 100%;
						font-family: "arial narrow";
						text-decoration: none;
						&>span:nth-child(1){
							margin-right: 10px;
							display: inline-block;
							min-width: 120px;
							width: 50%;
							text-align: right;
							font-size: 14px;
							color: #323233;
						}
						&>span:nth-child(2){
							font-size: 18px;
							font-weight: 700;
							color: #df4545;
						}
					}
					&>a:hover{
						&>span:nth-child(1){
							font-weight: bold;
						}
					}
				}
			}
			@include news-list;
		}
	}
	.shop{
		height: 250px;
		overflow-y: auto;
		@include news-list;
		.border{
			border-bottom: 1px solid #e5e5e5;
			display: inline-block;
			width: 100%;
		}
	}
	.commodity{
		@include news-list;
	}
	
	
	.hots{
		@include news-list;
		.border{
			border-bottom: 1px solid #e5e5e5;
			display: inline-block;
			width: 100%;
		}
	}
}
</style>
