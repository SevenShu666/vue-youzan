<template>
	<div class="login">
		<div class="login-input">
			<div class="txt">
				<span>用户名:</span>
				<input type="text" v-model="userInfo.username" placeholder="请输入用户名">
			</div>
			<div class="pw">
				<span>密&nbsp;&nbsp;码:</span>
				<input type="password" v-model="userInfo.password" placeholder="请输入密码">
			</div>
			<button @click="login" class="btn">登陆</button>
		</div>
	</div>
</template>

<script>

// import { fetchLogin } from "@/utils/api"
import { mapMutations} from "vuex"

export default{
	data:function(){
		return{
			userInfo:{
				username:'',
				password:''
			}
		}
	},
	methods:{
		...mapMutations('loginStore',['updateUserInfo','getUserInfo']),
		login(){
			this.getUserInfo(this.userInfo)
			const data = {
				username : this.userInfo.usrename,
				password : this.userInfo.password
			}
			this.$http.fetchLogin(data).then(res=>{
				this.updateUserInfo(res)
				localStorage.setItem("token",res.token)
				localStorage.setItem("isLogin",1)
				this.$router.replace("/")
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.login{
	width: 100%;
	height: 100%;
	background: url(../../assets/happy.jpg);
	background-size: 100% 100%;
	.login-input{
		width: 400px;
		height: 300px;
		background: url(../../assets/login2.jpg);
		background-size: 100% 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		position: absolute;
		left: 50%;
		top: 50%;
		margin: -200px 0 0 -200px;
		opacity: .8;
		border-radius: 20px;
		&>div{
			span{
				font-size: 20px;
				color: white;
			}
			::-webkit-input-placeholder{
				padding-left: 10px;
			}
			input{
				display: inline-block;
				height: 24px;
				border: 0;
				border-radius: 10px;
			}
		}
		.btn{
			width: 80px;
			height: 30px;
			border: 0;
			border-radius: 30px;
			cursor: pointer;
			background: rgba(0,0,0,.8);
			font-size: 14px;
			color: white;
			text-align: center;
			line-height: 30px;
		}
		.btn:hover{
			background: red;
			color: white;
		}
		.txt{
			margin-top: 40px;
		}
	}
}
</style>
