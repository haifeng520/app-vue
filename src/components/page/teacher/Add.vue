<template>
  <el-card style='overflow: auto;'>
    <el-row :gutter="20" style="margin-bottom: 20px">
      <el-col :span="4"><div class="grid-content bg-purple"><h3>新增教师</h3></div></el-col>
      <el-col :span="2" :offset="18"><div class="grid-content bg-purple" style="cursor: pointer;"><router-link to="/teacher">返回</router-link></div></el-col>
    </el-row>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="300px" class="demo-ruleForm">
      <el-form-item label="搜索OA教师">
        <el-button type="primary" @click="dialogFormVisible = true">选择教师</el-button><el-button type="danger">移除</el-button>
      </el-form-item>
      <el-form-item label="教师姓名" prop="teacherName">
        <el-input v-model="ruleForm.teacherName" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="身份证号" prop="teacherIdEntity">
        <el-input v-model="ruleForm.teacherIdEntity" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="教师昵称" prop="displayTeacherName">
        <el-input v-model="ruleForm.displayTeacherName" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="上传头像" prop="headImage">
        <el-upload
          class="avatar-uploader"
          action=""
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <div style="border: 1px dashed #d9d9d9;">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="科目" prop="subId">
         <el-checkbox-group v-model="checkedCities1">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="教师标签" prop="subId">
         <el-checkbox-group v-model="checkedCities1">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="执教类型" prop="subId">
         <el-checkbox-group v-model="checkedCities1">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="所属校区" prop="subId">
         <el-checkbox-group v-model="checkedCities1">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="教师介绍图片" prop="headImage">
        <el-upload
          class="upload-demo"
          action=""
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList2"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="教师视频" prop="headImage">
        <el-upload
          class="upload-demo"
          action=""
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList2"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="教师介绍" prop="teacherInfo">
        <el-input
          type="textarea"
          :rows="3"
          style="width: 300px"
          placeholder="请输入内容"
          v-model="ruleForm.teacherInfo">
        </el-input>
      </el-form-item>
      <el-form-item label="教学特点" prop="teacherFeature">
        <el-input
          type="textarea"
          :rows="3"
          style="width: 300px"
          placeholder="请输入内容"
          v-model="ruleForm.teacherFeature">
        </el-input>
      </el-form-item>
      <el-form-item label="教师格言" prop="teacherMotto">
        <el-input
          type="textarea"
          :rows="3"
          style="width: 300px"
          placeholder="请输入内容"
          v-model="ruleForm.teacherMotto">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 选择教师弹窗 -->
    <el-dialog title="教师树" :visible.sync="dialogFormVisible">
      <el-form :model="dialogForm">
        <el-form-item label="校区" label-width="130px">
          <el-select v-model="dialogForm.cityIdForTeacherTree" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="教师名称" label-width="130px">
          <el-input v-model="dialogForm.autocompleteTeacher" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  name: '',
  data() {
    return {
      ruleForm: {
        teacherName: '',
        teacherIdEntity: '',
        displayTeacherName: '',
        teacherInfo: '',
        teacherMotto: '',
        teacherFeature: ''
      },
      rules: {

      },
      imageUrl: '',
      checkedCities1: [],
      cities: cityOptions,
      fileList2: [],
      // 教师树对话框
      dialogFormVisible: false,
      dialogForm: {
        cityIdForTeacherTree: '',
        autocompleteTeacher: ''
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
}
</script>

<style lang='less' scoped>
.avatar-uploader .el-upload {
  
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.el-upload {
  border: 1px dashed #d9d9d9;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
