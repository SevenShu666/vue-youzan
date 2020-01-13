<template>
	<div class="cute-hand">
		<div class="header">
			<div>
				<h2>智能助手</h2>
			</div>
			<div class="progress-block">
				<div class="dongtu">
					<svg class="zent-progress-inner">
						<circle class="zent-progress-inner-path" cx="72" cy="72" r="63.5" style="stroke-width: 17; stroke-dasharray: 398.982; stroke-dashoffset: 161.747;"></circle>
					</svg>
					<div class="pending">
						<p><span>15</span>项</p>
						<p>待处理</p>
					</div>
					<div class="to-deal-with">
						<a href="#">去处理</a>
					</div>
				</div>
			</div>
		</div>
		<div class="tab-list">
			<TabList></TabList>
		</div>
	</div>
</template>

<script>
	
const TabList = ()=>import("./TabList.vue")

export default{
	components:{
		TabList
	}
}
</script>

<style lang="scss" scoped>
.cute-hand{
	overflow: hidden;
	padding: 10px 0;
	.header{
		width: 232px;
		height: 296px;
		margin-right: 30px;
		border-right: 1px solid #e5e5e5;
		float: left;
		.progress-block{
			text-align: center;
			padding: 0 44px;
			position: relative;
			.dongtu{
				position: relative;
				top: 30px;
				width: 144px;
				height: 144px;
				.zent-progress-inner{
					display: inline-block;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					.zent-progress-inner-path {
						transform: rotate(-90deg);
						transition: stroke-dashoffset .16s cubic-bezier(.17,.84,.44,.1);
						stroke: var(--theme-primary-4,#155bd4);
						stroke-linecap: round;
						fill: none;
						transform-origin: center;
					}
				}
				.pending{
					position: absolute;
					top: 38px;
					left: 40px;
					color: #969799;
					font-family: "arial narrow";
					&>p:nth-child(1){
						span{
							color: #df4545;
							font-size: 40px;
						}
					}
				}
				.to-deal-with{
					position: absolute;
					top: 168px;
					left: 29px;
					&>a{
						background-color: #155bd4;
						display: inline-block;
						height: 32px;
						width:88px;
						line-height:32px;
						color: white;
						font-size: 14px;
						border-radius: 2px;
						text-decoration: none;
					}
				}
			}
		}
	}
	.tab-list{
		float: left;
	}
}
</style>
