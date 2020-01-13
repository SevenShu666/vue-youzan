<template>
	<div class="good">
		
		<!-- 发布商品按钮 -->
		<el-button type="primary" size="small" class="post-trade" @click="skip">发布商品</el-button>
		
		<!-- 商品筛选表单 -->
		<GoodFilter v-model="formParams" @filter="filterHandle"></GoodFilter>
		
		<!-- 全部商品列表 -->
		<div class="good-list">
			<el-tabs v-model="tabIdx" type="card" @tab-click="handleClick">
				<el-tab-pane label="全部" name="-1">
					<!-- <GoodList></GoodList> -->
				</el-tab-pane>
				<el-tab-pane label="销售中" name="1">
					<!-- <GoodList></GoodList> -->
				</el-tab-pane>
				<el-tab-pane label="已售罄" name="2">
					<!-- <GoodList></GoodList> -->
				</el-tab-pane>
				<el-tab-pane label="仓库中" name="3">
					
				</el-tab-pane>
				<GoodList :list="list"></GoodList>
			</el-tabs>
		</div>
		
		<!-- 分页 -->
		<div class="good-page">
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="currentPage"
				:page-sizes="[5, 10, 15, 20]"
				:page-size="currentSize"
				layout="total, sizes, prev, pager, next, jumper"
				:total="total">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	
import {getGoodList} from "@/utils/api"
const GoodFilter = ()=>import("./components/GoodFilter.vue");
const GoodList = ()=>import("./components/GoodList.vue");

export default{
	components:{
		GoodFilter,
		GoodList
	},
	data:function(){
		return{
			tabIdx:'-1',
			currentPage:1,
			currentSize:5,
			list:[],
			total:0,
			formParams:{
				name:'',
				group_no:0,
				type_no:0,
				sale_min:0,
				sale_max:0,
				price_min:0,
				price_max:0,
				deduction_no:'0'
			}
		}
	},
	watch:{
		// tabIdx(){
		// 	this.changeList()
		// }
	},
	mounted(){
		//入参
		this.changeList()
	},
	methods: {
		//调接口
		changeList(){
			const params = {
				// 1、销售中 2、已售罄 3、仓库中
				status_no : this.tabIdx,
				page : this.currentPage,
				size : this.currentSize,
				// name: this.formParams.name,
				// group_no : this.formParams.group_no,
				// type_no : this.formParams.type_no,
				// sale_min : this.formParams.sale_min,
				// sale_max : this.formParams.sale_max,
				// price_min : this.formParams.price_min,
				// price_max : this.formParams.price_max,
				// deduction_no : this.formParams.deduction_no
				...this.formParams
			}
			//入参校验
			if(params.sale_max === 0) delete params.sale_max
			if(params.price_max === 0) delete params.price_max
			getGoodList(params).then(res=>{
				this.list = res.list
				this.total = res.total
			})
		},
		handleClick() {
			this.currentPage = 1;
			this.changeList()
		},
		handleSizeChange(val) {
			this.currentSize = val;
			this.changeList()
		},
		handleCurrentChange(val) {
			this.currentPage = val;
			this.changeList()
		},
		// 发布商品
		skip(){
			this.$router.push("/publish")
		},
		//筛选商品
		filterHandle(){
			this.changeList()
		}
	}
}
</script>

<style lang="scss" scoped>
.good{
	.post-trade{
		margin: 16px 0;
	}
	.good-list{
		margin-top: 15px;
	}
	.good-page{
		text-align: right;
		padding:15px 0;
	}
}
</style>
