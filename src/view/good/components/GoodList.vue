<template>
	<div class="goodlist">
     <el-table
         :data="list"
         style="width: 100%"
         :default-sort = "{prop: 'date', order: 'descending'}"
         >
         <el-table-column
			type="selection"
			width="55"
			header-align="center"
			align="center"
			>
         </el-table-column>
         <el-table-column
			prop="name"
			label="商品名"
			width="110"
			header-align="center"
			align="center">
			<template slot-scope="scope">
				<div class="good_item">
					<img :src="scope.row.src" alt="商品">
					<div v-text='scope.row.name'></div>
				</div>
			</template>
         </el-table-column>
         <el-table-column
			prop="price"
			label="价格"
			sortable
			width="110"
			header-align="center"
			align="center"
			>
         </el-table-column>
         <el-table-column
			prop="visit_num"
			label="访问量"
			header-align="center"
			width="110"
			align="center"
			>
         </el-table-column>
		<el-table-column
			prop="inventory_num"
			label="库存"
			header-align="center"
			width="110"
			align="center"
			sortable
			>
		</el-table-column>
		<el-table-column
			prop="sale_num"
			label="销量"
			header-align="center"
			width="110"
			align="center"
			sortable
			>
		</el-table-column>
		<el-table-column
			prop="order"
			label="序号"
			header-align="center"
			width="110"
			align="center"
			sortable
			>
		</el-table-column>
		<el-table-column
			prop="create_time"
			label="创建时间"
			header-align="center"
			width="180"
			align="center"
			:formatter="timeHandle"
			sortable
			>
		</el-table-column>
		<el-table-column
			prop="status_no"
			label="商品状态"
			header-align="center"
			width="180"
			align="center"
			>
		</el-table-column>
		<el-table-column
			label="操作"
			width="190"
			header-align="center"
			align="center"
			>
			<template>
			<el-button type="text" size="small">编辑</el-button>
			<el-button type="text" size="small">会员价</el-button>
			<el-button type="text" size="small">推广</el-button>
			<el-button type="text" size="small">复制</el-button>
			</template>
		</el-table-column>
       </el-table>
	</div>
</template>

<script>
	
import moment from "moment"

export default {
	props:{
		list:{
			type:Array,
			required:true
		}
	},
    methods: {
		formatter(row) {
			return row.address;
		},
		timeHandle(row){
			return moment(row.create_time).format('YYYY:MM:DD HH:mm:ss')
		}
	}
  }
</script>

<style lang="scss" scoped>
.good_item{
	&>img{
		display: inline-block;
		width: 30px;
		height: 40px;
		cursor: pointer;
	}
}
</style>
