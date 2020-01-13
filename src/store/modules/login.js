const loginStore = {
	namespaced:true,
	state:{
		userInfo1:{
			username:"公子世无双",
			password:"666666"
		},
		userInfo2:{
			
		}
	},
	mutations:{
		getUserInfo(state,payload){
			state.userInfo1 = payload;
		},
		updateUserInfo(state,payload){
			state.userInfo2 = payload;
		}
	}
}

export default loginStore;