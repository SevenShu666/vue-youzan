<template>
  <div class="app" @click="hidden" >
	<!-- login登陆页面 -->
	<router-view name="login" v-if="$route.path==='/login'"></router-view>
	
	<div v-else class="view-all">
		<el-container class="app-container">
			<!-- 左侧导航菜单 -->
			<el-aside style="width: 92px;" class="app-aside">
				<MyAside></MyAside>
			</el-aside>
			
			<el-container>
				<!-- 顶部banner区域 -->
				<el-header class="app-header">
					<MyHeader></MyHeader>
				</el-header>
				<!-- 主体内容区域 -->
				<el-main class="app-main">
					<MyMain></MyMain>
				</el-main>
			</el-container>
		</el-container>
		
		<!-- search的弹框 -->
		<div class="search" :class="{'on':PopUp==true}" v-show="PopUp">
			<div class="pop-up">
				<input type="text" placeholder="请输入你要使用的功能，或遇到的问题" @click.stop="" >
				<div class="wsc-search-btn" @click.stop=""></div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>

const MyAside = ()=>import("@/components/layout/MyAside.vue");
const MyHeader = ()=>import("@/components/layout/MyHeader.vue");
const MyMain = ()=>import("@/components/layout/MyMain.vue");
import {mapState,mapMutations} from "vuex"

export default {
	computed:{
		...mapState("searchStore",['PopUp'])
	},
	methods:{
		...mapMutations('searchStore',['updataPopUp']),
		hidden(){
			this.updataPopUp(false)
		}
	},
	components:{
		MyAside,
		MyHeader,
		MyMain
	}
}
</script>

<style lang="scss">

@import '@/assets/common.scss';
.app {
	width: 100%;
	height: 100%;
	background: rgb(247,248,250);
	.view-all{
		height: 100%;
	}
	.app-container{
		height: 100%;
	}
	.app-aside{
		height: 100%;
		background: #444;
		width: 92px;
		overflow: hidden;
	}
	.app-header{
		padding: 0;
	}
	.app-main{
		padding: 10px 10px 0px 10px;
	}
}
.search{
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	.pop-up{
		width: 600px;
		height: 50px;
		position: fixed;
		top: 200px;
		left: 50%;
		margin-left: -300px;
		background: #fff;
		height: 50px;
		-webkit-border-radius: 3px;
		border-radius: 3px;
		z-index: 999;
		input{
			width: 546px;
			height: 50px;
			line-height: 50px;
			font-size: 16px;
			padding: 0 40px 0 15px;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			-webkit-border-radius: 3px 0 0 3px;
			border-radius: 3px 0 0 3px;
			outline: none;
			border: none;
		}
		.wsc-search-btn {
			position: absolute;
			top: 0;
			right: 0;
			width: 54px;
			height: 50px;
			-webkit-border-radius: 0 3px 3px 0;
			border-radius: 0 3px 3px 0;
			text-align: center;
			color: #fff;
			background: url(./assets/search2.png) no-repeat 50% #155bd4;
			background-size: 16px;
			cursor: pointer;
		}
	}
}
.on{
	background: rgba(0,0,0,.6) !important;
}
</style>
