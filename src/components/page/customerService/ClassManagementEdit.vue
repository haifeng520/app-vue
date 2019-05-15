<template>
  <el-card style="overflow: auto;">
    <!-- 表头 -->
    <el-row style="margin: 15px 0;">
      <el-col :span="22"
        ><div class="grid-content bg-purple">编辑班级</div></el-col
      >
      <el-col :span="2"
        ><div class="grid-content bg-purple-light">
          <router-link to="/classmanagement">返回</router-link>
        </div></el-col
      >
    </el-row>
    <!-- 表单 -->
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="展示名称：" prop="name">
        <el-input
          v-model="ruleForm.showClassName"
          style="width: 400px"
        ></el-input>
      </el-form-item>
      <el-form-item label="试用学员：" prop="name">
        <el-input
          type="textarea"
          v-model="ruleForm.webUseStudent"
          style="width: 400px"
        ></el-input>
      </el-form-item>
      <el-form-item label="课程介绍：" prop="name">
        <el-input
          type="textarea"
          v-model="ruleForm.webCourseIntro"
          style="width: 400px"
        ></el-input>
      </el-form-item>
      <el-form-item label="课程目录：" prop="name">
        <el-input
          type="textarea"
          v-model="ruleForm.webCourseIntro"
          style="width: 400px"
        ></el-input>
      </el-form-item>
      <el-form-item label="班级缩略图" prop="name">
        <el-upload
          class="upload-demo"
          style="width: 400px"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList2"
          accept=".jpg, .png, .gif, .bmp"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="班级图片" prop="name">
        <el-upload
          class="upload-demo"
          style="width: 400px"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList2"
          accept=".jpg, .png, .gif, .bmp"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="班级视频" prop="name">
        <el-upload
          class="upload-demo"
          style="width: 400px"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList2"
          accept=".mp4, .avi, .rmvb, .rm, .3GP, .mov, .FLV"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: "editClass",
  data() {
    return {
      id: this.$route.params.id,
      /* 编辑班级 */
      ruleForm: {
        showClassName: "",
        webUseStudent: "",
        webCourseIntro: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      },
      fileList2: [
        {
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>

<style></style>
