<template>
  <el-card style='overflow: auto;'>
    <el-button @click="handleAddTeacher" type="primary" style="margin: 0 0 15px 0;"><i class="el-icon-circle-plus"></i> 新增教师</el-button>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="检索功能" name="1">
        <el-form
          :model="formData"
          label-width="140px"
          class="demo-ruleForm"
          ref="formData">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="教师姓名" prop="teacherName">
                <el-input v-model="formData.teacherName" style="width: 230px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="科目" prop="subId">
                <el-select v-model="formData.subId" placeholder="请选择">
                  <el-option label="语文" value="1"></el-option>
                  <el-option label="数学" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="教师标签" prop="tlId">
                <el-select v-model="formData.tlId" placeholder="请选择">
                  <el-option label="否" value="0"></el-option>
                  <el-option label="是" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="校区" prop="provinceId">
                <el-select v-model="formData.provinceId" placeholder="请选择">
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
        teacherName: '',
        subId: '',
        tlId: '',
        provinceId: ''
      }
    }
  },
  methods: {
    handleAddTeacher() {
      this.$router.push('/teacher/add');
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
