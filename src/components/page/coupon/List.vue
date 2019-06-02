<template>
  <el-card style='overflow: auto;'>
    <el-row>
      <el-button
        @click="handleAddCoupon"
        type="primary"
        style="margin: 0 0 15px 0;"
        ><i class="el-icon-circle-plus"></i> 新增优惠券</el-button
      >
    </el-row>
    <!-- 检索功能 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item title="检索功能" name="1">
        <el-form
          :model="formData"
          label-width="140px"
          class="demo-ruleForm"
          ref="formData">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="优惠券名称" prop="couponName">
                <el-input v-model="formData.couponName" style="width: 230px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="优惠券类型" prop="collectType">
                <el-select v-model="formData.collectType" placeholder="请选择">
                  <el-option label="满减" value="1"></el-option>
                  <el-option label="无线自" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="审核状态" prop="auditFlag">
                <el-select v-model="formData.auditFlag" placeholder="请选择">
                  <el-option label="未通过" value="1"></el-option>
                  <el-option label="已通过" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="领取开始时间" prop="releaseBeginTime">
                <el-date-picker
                  v-model="formData.releaseBeginTime"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="领取结束时间" prop="releaseEndTime">
                <el-date-picker
                  v-model="formData.releaseEndTime"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="优惠券备注" prop="couponRemark">
                <el-input v-model="formData.couponRemark" style="width: 230px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item>
                <el-button type="primary" @click="handleSearch">搜索</el-button>
                <el-button @click="handleFormData('formData')">重置</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      activeNames: ["1"],
      formData: {
        couponName: '',
        collectType: '',
        auditFlag: '',
        releaseBeginTime: '',
        releaseEndTime:'',
        couponRemark: '',
        pageSize: 10,
        pageNumber: 1
      }
    }
  },
  mounted() {
    // this.loadData();
  },
  methods: {
    // 获取列表数据
    async loadData() {
      // const res = await this.$axios.post('http://localhost:8020/coupon/selectByProperty', JSON.stringify(this.formData));
      // console.log(res);
    },
    handleFormData(formName) {
      // this.formData = {};
      this.$refs[formName].resetFields();
    },
    handleSearch() {
      console.log(this.formData)
    },
    handleAddCoupon() {
      this.$router.push('/coupon/add');
    }
  }
}
</script>

<style lang='less' scoped>

</style>
