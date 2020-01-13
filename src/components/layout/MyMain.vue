<template>
	<div class="MyMain">
		<div class='main'>
			<router-view></router-view>
		</div>
		<div id="app-footer">
			<a href="/" class="logo" target="_blank"></a>
		</div>
	</div>
</template>

<script>
	

export default {
	
}
</script>

<style lang="scss" scoped>
.MyMain{
	.main{
		background: white;
		padding: 10px 15px 0 15px;
		box-sizing: border-box;
	}
	#app-footer {
		margin: 20px 0;
		a {
			width: 76px;
			height: 27px;
			display: block;
			margin: 0 auto;
			background: url(https://img.yzcdn.cn/v2/image/www/footer/logov2.png) no-repeat;
		}
	}
}
</style>
