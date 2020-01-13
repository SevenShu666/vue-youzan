<template>
	<div class="shop">
		
		<!-- tab模块 -->
		<div class="tabs">
			<div class="tab_tip">移动店铺服务已到期，如需继续使用请订购微商城</div>
			<el-tabs v-model="tabName" @tab-click="handleClick">
				<el-tab-pane label="店铺主页" name="first">
					<TabContent1></TabContent1>
				</el-tab-pane>
				<el-tab-pane label="店铺导航" name="second">
					<TabContent2></TabContent2>
				</el-tab-pane>
				<el-tab-pane label="个人中心" name="third">
					<TabContent3></TabContent3>
				</el-tab-pane>
			</el-tabs>
		</div>
		
	</div>
</template>

<script>
	
	// import {mapState} from "vuex"
	
	//三个tab内容块
	const TabContent1 = ()=>import("./components/TabContent1");
	const TabContent2 = ()=>import("./components/TabContent2");
	const TabContent3 = ()=>import("./components/TabContent3");
	
export default{
	// computed:{
	// 	...mapState("ShopContent",["tabName"])
	// }
	data() {
		return {
			tabName: 'first'
		}
	},
	methods: {
		handleClick(tab, event) {
			console.log(tab, event);
		}
	},
	components:{
		TabContent1,
		TabContent2,
		TabContent3
	}
}
</script>

<style lang="scss" scoped>
.shop{
	.tabs{
		position: relative;
		.tab_tip {
			position: absolute;
			right: 0;
			top:0;
			font-size: 12px;
			color: #aaa;
			line-height: 40px;
			&>i {
				font-size: 30px;
				width: 30px;
				height: 30px;
				display: inline-block;
			}
		}
	}
}
</style>