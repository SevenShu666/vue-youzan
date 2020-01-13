import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const MyLogo = ()=>import("@/components/MyLogo.vue");
const dashboard = ()=>import("@/view/dashboard/dashboard.vue");
const shop = ()=>import("@/view/shop/shop.vue");
const good = ()=>import("@/view/good/good.vue");
const order = ()=>import("@/view/order/order.vue");
const fans = ()=>import("@/view/fans/fans.vue");
const stat = ()=>import("@/view/stat/stat.vue");
const asset = ()=>import("@/view/asset/asset.vue");
const app = ()=>import("@/view/app/app.vue");
const set = ()=>import("@/view/set/set.vue");
const home = ()=>import("@/view/Home/home.vue");
const login = ()=>import("@/view/login/login.vue");
const publish = ()=>import("@/view/good/components/PublishGood.vue");

const router = new VueRouter({
	mode:"hash",
	routes :[
		{path:"/MyLogo",component:MyLogo},
		{path:"/dashboard",component:dashboard},
		{path:"/shop",component:shop},
		{path:"/good",component:good},
		{path:"/order",component:order},
		{path:"/fans",component:fans},
		{path:"/stat",component:stat},
		{path:"/asset",component:asset},
		{path:"/app",component:app},
		{path:"/set",component:set},
		{path:"/publish",component:publish},
		{path:"/",component:home},
		{
			path:"/login",
			components:{
				login:login
			}
		},
		{path:"/*",redirect:"/"}
	]
})

router.beforeEach((to, from ,next) => {
	const isLogin = localStorage.getItem("isLogin")
	if(to.path === "/login"){
		next()
	}else{
		if(isLogin==1){
			next()
		}else{
			next("/login")
		}
	}
})

export default router;