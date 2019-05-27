<template>
  <el-card>
    <el-button @click="handleClick">click me</el-button>
    <el-table
      :data="tableData"
      :stripe="true"
      border
      style="width: 100%">
      <el-table-column fixed type="index" width="50"> </el-table-column>
      <el-table-column fixed type="selection" width="50"> </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[2, 4, 6]"
      :page-size="2"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    <!-- ------------------- -->
    <br>
    <el-button type="danger" @click="handleClick1">click me</el-button>
    <el-input v-model="obj.a" placeholder="请输入内容"></el-input><br>
    {{ obj.a }}
    <el-input v-model="obj.b" placeholder="请输入内容"></el-input><br>
    {{ obj.b }}
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      total: 10,
      obj: {
        a: '1'
      }
    };
  },
  methods: {
    async handleClick() {
      const res = await this.$axios.get('http://localhost:3000/list');
      
      const status = res.status;
      if(status === 200) {
        this.tableData = res.data;
        console.log(res);
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick1() {
      this.obj.b = '2';
      // this.$set(this.obj,'b','2');
    }
  }
};
</script>

<style></style>
