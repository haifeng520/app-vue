<template>
  <el-card style='overflow: auto;'>
    <el-button @click="handleAddArticle" type="primary" style="margin: 0 0 15px 0;"><i class="el-icon-circle-plus"></i> 新增文章</el-button>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="检索功能" name="1">
        <el-form
          :model="formData"
          label-width="140px"
          class="demo-ruleForm"
          ref="formData">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="文章名称" prop="title">
                <el-input v-model="formData.title" style="width: 230px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="文章类型" prop="articleType">
                <el-select v-model="formData.articleType" placeholder="请选择">
                  <el-option label="教育资讯" value="1"></el-option>
                  <el-option label="高考" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="是否推荐" prop="isRecommend">
                <el-select v-model="formData.isRecommend" placeholder="请选择">
                  <el-option label="否" value="0"></el-option>
                  <el-option label="是" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="文章状态" prop="isRecommend">
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
        title: '',
        articleType: '',
        isRecommend: '',
        articleStatus: ''
      }
    }
  },
  methods: {
    handleAddArticle() {
      this.$router.push('/article/add');
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
