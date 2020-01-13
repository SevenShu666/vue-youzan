const searchStore = {
	namespaced:true,
	state:{
		PopUp:false
	},
	mutations:{
		updataPopUp(state,payload){
			state.PopUp = payload;
		}
	}
}

export default searchStore;