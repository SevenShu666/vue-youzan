<template>
	<div class="MyAside">
		<div class='aside'>
			<div class="my-logo">
				<router-link to="/MyLogo" class="my-logo-wrap">
					<div></div>
				</router-link>
			</div>
			<div class="nav-list">
				<div v-for="(item,idx) in AsideList" :key="idx" @click="getIdx(item.path)">
					<router-link :to="item.path" class="nav-list-a" exact-active-class="bg1">
						<i :class="item.icon"></i>
						<span v-text="item.name"></span>
					</router-link>
				</div>
			</div>
			<div class="shared-corner">
				<div class="search-wrap">
					<a href="#" class="search bottom-icon search-icon" @click.stop="change"></a>
				</div>
				<div class="notice-center"></div>
			</div>
		</div>
	</div>
</template>

<script>
	
	import {mapState,mapMutations} from "vuex"
	
export default{
	computed:{
		...mapState("AsideListStore",["AsideList","AsideBg"]),
		...mapState("searchStore",['PopUp'])
	},
	methods:{
		...mapMutations("AsideListStore",["getAsideList"]),
		...mapMutations('searchStore',['updataPopUp']),
		getIdx(path){
			this.getAsideList(path)
		},
		change(){
			this.updataPopUp(true)
		}
	}
}
</script>

<style lang="scss" scoped>
.MyAside{
	height: 100%;
	.aside{
		background: #444;
		display: flex;
		height: 100%;
		flex-direction: column;
		.my-logo{
			position: fixed;
			top: 0;
			bottom: 0;
			height: 56px;
			width: 92px;
			word-break: break-word;
			background-color: #444;
			z-index: 1002;
			.my-logo-wrap{
				display: block;
				margin: 0 16px;
				height: 56px;
				overflow: hidden;
				div{
					background-image: url("https://img.yzcdn.cn/public_files/2016/05/13/8f9c442de8666f82abaf7dd71574e997.png!60x60.jpg");
					margin: 12px auto 0;
					width: 30px;
					height: 30px;
					-webkit-border-radius: 50%;
					border-radius: 50%;
					background-size: cover;
					background-position: 50% 50%;
					background-color: #fff;
					border: 1px solid #fff;
				}
			}
		}
		.nav-list{
			padding-top: 56px;
			width: 112px;
			overflow-x: hidden;
			overflow-y: auto;
			box-sizing: border-box;
			flex: 1 1 100%;
			&>div{
				width: 92px;
				font-size: 14px;
				height: 40px;
				line-height: 40px;
				cursor: pointer;
				text-align: center;
				.nav-list-a{
					color: #c8c9cc;
					display:inline-block;
					text-decoration: none;
					width:100%;
					.sidebar-icon {
						background: url(https://img.yzcdn.cn/v2/image/www/sidebar/sidebar-icon-20190428.png) no-repeat;
						position: relative;
						top: -1px;
						display: inline-block;
						margin-right: 4px;
						width: 18px;
						height: 18px;
						vertical-align: middle;
						color: #c8c9cc;
					}
					.sidebar-icon-dashboard {
						background-position: 0 0;
					}
					.sidebar-icon-shop {
						background-position: 0 -18px;
					}
					.sidebar-icon-goods {
						background-position: 0 -36px;
					}
					.sidebar-icon-order {
						background-position: 0 -54px;
					}
					.sidebar-icon-fans {
						background-position: 0 -72px;
					}
					.sidebar-icon-stat {
						background-position: 0 -90px;
					}
					.sidebar-icon-asset {
						background-position: 0 -108px;
					}
					.sidebar-icon-app {
						background-position: 0 -126px;
					}
					.sidebar-icon-setting {
						background-position: 0 -144px;
					}
				}
				
			}
			&>div:nth-last-child(2){
				margin-top: 80px;
			}
			&>div:hover{
				background: #666;
				.nav-list-a>span{
					color: #fff;
				}
				.sidebar-icon-shop {
					background-position: -54px -18px;
				}
				.sidebar-icon-goods {
					background-position: -54px -36px;
				}
				.sidebar-icon-order {
					background-position: -54px -54px;
				}
				.sidebar-icon-fans {
					background-position: -54px -72px;
				}
				.sidebar-icon-stat {
					background-position: -54px -90px;
				}
				.sidebar-icon-asset {
					background-position: -54px -108px;
				}
				.sidebar-icon-setting {
					background-position: -54px -144px;
				}
			}
			&>div:nth-child(1):hover{
				background: #444;
				.nav-list-a>span{
					color: #c8c9cc;
				}
			}
			.bg1{
				background: white;
				&>span{
					color: #333 !important;
				}
				.sidebar-icon-dashboard {
					background-position: -18px 0 !important;
				}
				.sidebar-icon-shop {
					background-position: -18px -18px !important;
				}
				.sidebar-icon-goods {
					background-position: -18px -36px !important;
				}                                   
				.sidebar-icon-order {             
					background-position: -18px -54px !important;
				}                                   
				.sidebar-icon-fans {                
					background-position: -18px -72px !important;
				}                                    
				.sidebar-icon-stat {                 
					background-position: -18px -90px !important;
				}
				.sidebar-icon-asset {
					background-position: -18px -108px !important;
				}
				.sidebar-icon-setting {
					background-position: -18px -144px !important;
				}
			}
		}
		.shared-corner{
			display: flex;
			background-color: #535353;
			flex: 1 1 42px;
			.search-wrap{
				position: relative;
				flex: 1 1 50%;
				justify-content: center;
				align-items: center;
				.search-icon {
					position: absolute;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					margin: auto;
					background-image: url(../../assets/search.png);
				}
				.bottom-icon {
					cursor: pointer;
					display: block;
					width: 20px;
					height: 20px;
					background-size: cover;
				}
			}
			.search-wrap:after{
				content: "";
				position: absolute;
				top: 0;
				bottom: 0;
				right: 0;
				margin: auto 0;
				width: 1px;
				height: 16px;
				background-color: #fff;
				opacity: .2;
			}
			.notice-center{
				flex: 1 1 50%;
				padding: 10px;
				cursor: pointer;
				box-sizing: border-box;
				font-size: 18px;
				position: relative;
				background-image: url(../../assets/news.png);
				background-position: 50%;
				background-repeat: no-repeat;
				background-size: 20px;
			}
		}
	}
}
</style>
