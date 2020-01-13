import moment from "moment"

const dashboardStore = {
	namespaced:true,
	state:{
		show:false,
		timeHandle:"更新时间:"+moment().format('YYYY:MM:DD HH:mm:ss'),
		dataList:{
			payOrder:0,
			payNum:0.00,
			pageView:0,
			customers:0,
			targetNum:"--",
			completed:"--",
			remainNum:0.00,
			waitClose:0.00
		},
		dataList2:{
			payOrder:"***",
			payNum:"***",
			pageView:"***",
			customers:"***",
			targetNum:"***",
			completed:"***",
			remainNum:"***",
			waitClose:"***"
		},
		dataList3:{
			payOrder:0,
			payNum:0.00,
			pageView:0,
			customers:0,
			targetNum:"--",
			completed:"--",
			remainNum:0.00,
			waitClose:0.00
		},
	},
	mutations:{
		changeStatus(state,payload){
			state.show = payload
			if(payload){
				state.dataList = state.dataList2
			}else{
				state.dataList = state.dataList3
			}
			
		},
	}
}

export default dashboardStore