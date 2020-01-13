<template>
	<div class="good-filter">
		<!-- 第一行 -->
		<el-row type="flex" align="middle" class="form-row">
			<!-- 第一列 -->
			<el-col :span="2">
				<span>商品名称:</span>
			</el-col>
			<el-col :span="4">
				<el-input v-model="value.name" placeholder="输入商品名称、编/条码" size="small"></el-input>
			</el-col>
			<!-- 第二列 -->
			<el-col :span="2">
				<span>商品分组:</span>
			</el-col>
			<el-col :span="4">
				<el-select v-model="value.group_no" size="small">
					<el-option
						v-for="item in goodGroupList"
						:key="item.id"
						:label="item.label"
						:value="item.id">
					</el-option>
				</el-select>
			</el-col>
			<!-- 第三列 -->
			<el-col :span="3">
				<span>商品类型:</span>
			</el-col>
			<el-col :span="4">
				<el-select v-model="value.type_no" size="small">
					<el-option
						v-for="item in goodTypeList"
						:key="item.id"
						:label="item.label"
						:value="item.id">
					</el-option>
				</el-select>
			</el-col>
		</el-row>
		<!-- 第二行 -->
		<el-row type="flex" align="middle" class="form-row">
			<!-- 第一列 -->
			<el-col :span="2">
				<span>销量:</span>
			</el-col>
			<el-col :span="4">
				<div class="price_num">
					<el-input v-model.number="value.sale_min" size="small" class="price-input"></el-input>
					<span>-</span>
					<el-input v-model.number="value.sale_max" size="small" class="price-input"></el-input>
				</div>
			</el-col>
			<!-- 第二列 -->
			<el-col :span="2">
				<span>价格（元）:</span>
			</el-col>
			<el-col :span="4">
				<div class="price_num">
					<el-input v-model.number="value.price_min" size="small" class="price-input"></el-input>
					<span>-</span>
					<el-input v-model.number="value.price_max" size="small" class="price-input"></el-input>
				</div>
			</el-col>
			<!-- 第三列 -->
			<el-col :span="3">
				<span>库存扣减方式:</span>
			</el-col>
			<el-col :span="4">
				<el-select v-model="value.deduction_no" size="small">
					<el-option
						v-for="item in options3"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
			</el-col>
		</el-row>
		<!-- 第三行 -->
		<el-row class="filter-three">
			<el-button type="primary" size="mini" @click="filterHandle">筛选</el-button>
			<el-button size="mini">导出</el-button>
			<a href="#">查看已导出列表</a>
			<a href="#">重置筛选条件</a>
		</el-row>
	</div>
</template>

<script>
	
import { goodGroupList, goodTypeList } from "@/utils/FormFilterList"
	
export default {
	props:{
		value:{
			type:Object,
			required:true
		}
	},
	data() {
		return {
			goodGroupList,
			goodTypeList,
			options3: [{
				value: '0',
				label: '全部'
			}, {
				value: '1',
				label: '拍下扣减库存'
			}, {
				value: '2',
				label: '付款扣减库存'
			}],
			input: ''
		}
	},
	methods:{
		filterHandle(){
			this.$emit("filter")
		}
	}
}
</script>

<style lang="scss" scoped>
.good-filter{
	background: rgb(242,243,245);
	box-sizing: border-box;
	padding: 20px;
	font-size: 14px;
	span{
		display: block;
		text-align: right;
		padding-right: 5px;
	}
	i{
		display: block;
		text-align: center;
		font-size: 6px;
	}
	.form-row{
		margin-bottom: 20px;
		.price_num{
			display: flex;
			width: 100%;
			span{
				display: block;
				width: 10%;
				text-align: center;
				padding:0;
				line-height:32px;
			}
			.price-input{
				display: block;
				width: 45%;
			}
		}
	}
	.filter-three{
		margin-left: 106px;
		a{
			display: inline-block;
			margin-left: 10px;
			text-decoration: none;
			font-size: 12px;
			color: #155bd4;
		}
	}
}
</style>
