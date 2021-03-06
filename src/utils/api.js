import fetch from './fetch';

// 用于获取周杰伦音乐
export function getZjlMusic() {
  var url = '/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=61204160201852987&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%91%A8%E6%9D%B0%E4%BC%A6&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
  return fetch({ url: url, method: 'GET'})
}

// 用于获取商品列表
export function getGoodList(params){
	return fetch({
		method:"GET",
		params:params,
		url:"/youzan/getGoodList"
	})
}

// 用于用户登陆
export function fetchLogin(data){
	return fetch({
		method:"POST",
		data:data,
		url:"/youzan/login"
	})
}

export default{
	fetchLogin,
	getGoodList
}