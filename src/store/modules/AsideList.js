const AsideListStore = {
	namespaced:true,
	state:{
		AsideList:[
			{path:"/dashboard",name:"概况",icon:"sidebar-icon sidebar-icon-dashboard"},
			{path:"/shop",name:"店铺",icon:"sidebar-icon sidebar-icon-shop"},
			{path:"/good",name:"商品",icon:"sidebar-icon sidebar-icon-goods"},
			{path:"/order",name:"订单",icon:"sidebar-icon sidebar-icon-order"},
			{path:"/fans",name:"客户",icon:"sidebar-icon sidebar-icon-fans"},
			{path:"/stat",name:"数据",icon:"sidebar-icon sidebar-icon-stat"},
			{path:"/asset",name:"资产",icon:"sidebar-icon sidebar-icon-asset"},
			{path:"/app",name:"应用",icon:"sidebar-icon sidebar-icon-app"},
			{path:"/set",name:"设置",icon:"sidebar-icon sidebar-icon-setting"}
		],
		AsideBg:"/dashboard"
	},
	mutations:{
		getAsideList(state,payload){
			state.AsideBg = payload;
		}
	}
}

export default AsideListStore;