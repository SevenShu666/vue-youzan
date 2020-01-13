<template>
	<div class="dashboard">
		<RealTimeStatus></RealTimeStatus>
		<CuteHand></CuteHand>
	</div>
</template>

<script>

const RealTimeStatus = ()=>import("./components/RealTimeStatus.vue");
const CuteHand = ()=>import("./components/CuteHand.vue");

export default{
	components:{
		RealTimeStatus,
		CuteHand
	}
}

</script>

<style lang="scss" scoped>
.dashboard{
	margin-left: 10px;
}
</style>
