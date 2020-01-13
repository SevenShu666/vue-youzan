<template>
  <div class="header">
    <!-- 当渲染首页显示 -->
    <div v-if="$route.path === '/'">
      <div class="header-left">
        <span v-text="userInfo1.username"></span>
        <span class="blue">试用期</span>
        <span>SVIP</span>
        <span>有赞担保</span>
      </div>
      <div class="header-right">
		<i class="el-icon-s-custom" @click="logout"></i>
        <span v-text="userInfo1.username"></span>
      </div>
    </div>
    <div v-else>
      面包屑导航
    </div>
  </div></template>
<script>

import { mapState } from "vuex"

export default{
	computed:{
		...mapState('loginStore',['userInfo1'])
	},
	methods:{
		logout(){
			this.$confirm('江湖一别,余生难见!', '英雄帖', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				localStorage.removeItem("isLogin")
				localStorage.removeItem("token")
				this.$router.replace('/login')
				this.$message({
				type: 'success',
				message: '后会有期!'
				});
			}).catch(() => {
				
			});
		}
	}
}
	
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  overflow: hidden;
  line-height: 60px;
  font-size: 12px;
  box-sizing: border-box;
  padding: 0 10px;
  .header-left {
    float: left;
    cursor: pointer;
    >span:nth-child(1) {
      color: #323232;
      font-size: 16px;
      font-weight: bold;
    }
    >span:nth-child(2), span:nth-child(3), span:nth-child(4) {
      // color: #155bd4;
      display: inline-block;
      border: 1px solid #999;
      height: 20px;
      vertical-align: middle;
      line-height: 20px;
      margin-left: 10px;
      padding: 0 3px;
      border-radius: 3px;
    }
    span.blue {
      color: #155bd4;
      border: 1px solid  #155bd4;
    }
  }
  .header-right {
    float: right;
    cursor: pointer;
    i {
      font-size: 20px;
      color: #999999;
    }
    span {
      padding: 0 10px;
      font-size: 14px;
      color:  #999999;
      font-weight: bold;
    }
  }
}
</style>
