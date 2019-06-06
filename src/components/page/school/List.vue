<template>
  <el-card style='overflow: auto;'>
    <el-button @click="handleAdd" type="primary" size="mini" style="margin: 0 0 15px 0;"><i class="el-icon-circle-plus"></i> 新增校区</el-button>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="检索功能" name="1">
        <el-form
          :model="formData"
          label-width="140px"
          class="demo-ruleForm"
          ref="formData">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="校区名称" prop="title">
                <el-input v-model="formData.title" style="width: 230px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="校区" prop="isRecommend">
                <el-select v-model="formData.isRecommend" placeholder="请选择">
                  <el-option label="显示" value="0"></el-option>
                  <el-option label="隐藏" value="1"></el-option>
                </el-select>
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
      activeNames: ['1'],
      formData: {

      }
    }
  },
  methods: {
    handleAdd() {
      this.$router.push('/school/add');
    },
    // 重置表单
    handleFormData(formName) {
      this.$refs[formName].resetFields();
    },
    handleSearch() {

    }
  }
}
</script>

<style lang='less' scoped>

</style>
