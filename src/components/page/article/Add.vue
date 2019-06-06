<template>
  <el-card style='overflow: auto;'>
    <el-row :gutter="20" style="margin-bottom: 20px">
      <el-col :span="4"><div class="grid-content bg-purple"><h3>新增文章</h3></div></el-col>
      <el-col :span="2" :offset="18"><div class="grid-content bg-purple" style="cursor: pointer;"><router-link to="/article">返回</router-link></div></el-col>
    </el-row>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="280px" class="demo-ruleForm" size="mini">
      <el-form-item label="文章名称" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="文章类型" prop="articleType">
        <el-select v-model="ruleForm.articleType" placeholder="请选择">
          <el-option label="学习类" value="0"></el-option>
          <el-option label="活动类" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="年级" prop="grade">
        <el-select v-model="ruleForm.grade" placeholder="请选择">
          <el-option label="小学" value="0"></el-option>
          <el-option label="初中" value="1"></el-option>
          <el-option label="高中" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="来源" prop="articleFrom">
        <el-input v-model="ruleForm.articleFrom"></el-input>
      </el-form-item>
      <el-form-item label="是否原创" prop="isOriginal">
        <el-select v-model="ruleForm.isOriginal" placeholder="请选择">
          <el-option label="否" value="0"></el-option>
          <el-option label="是" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="关键词" prop="keyWords">
        <el-input v-model="ruleForm.keyWords"></el-input>
      </el-form-item>
      <!-- <el-form-item label="活动类型" prop="activityType">
        <el-select v-model="ruleForm.activityType" placeholder="请选择">
          <el-option label="活动资讯" value="0"></el-option>
          <el-option label="提分快车" value="1"></el-option>
          <el-option label="微信聚焦" value="2"></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item label="文章状态" prop="articleStatus">
        <el-select v-model="ruleForm.articleStatus" placeholder="请选择">
          <el-option label="显示" value="0"></el-option>
          <el-option label="隐藏" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否推荐" prop="isRecommend">
        <el-select v-model="ruleForm.isRecommend" placeholder="请选择">
          <el-option label="否" value="0"></el-option>
          <el-option label="是" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否置顶" prop="isStick">
        <el-select v-model="ruleForm.isStick" placeholder="请选择">
          <el-option label="否" value="0"></el-option>
          <el-option label="是" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章内容" prop="articleContent">
        <!-- 图片上传组件辅助-->
        <el-upload
          class="avatar-uploader"
          :action="serverUrl"
          name="img"
          :headers="header"
          style="display: none"
          accept=".jpg, .png, .gif, .bmp"
          :show-file-list="false"
          :on-success="uploadSuccess"
          :on-error="uploadError"
          :before-upload="beforeUpload">
        </el-upload>
        <!-- 富文本编辑器 -->
        <quill-editor
          v-model="ruleForm.articleContent"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event)">
        </quill-editor>
      </el-form-item>
      <el-form-item label="文章缩略图预览">
        <input type="text">
      </el-form-item>
      <el-form-item label="文章缩略图">
        
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
// 引入工具条
import toolbarOptions from "../../commonjs/quill-editor-toolbar.js";
/* const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ["link", "image", "video"],
  ["clean"] // remove formatting button
] */
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";

export default {
  name: '',
  components: {
    quillEditor
  },
  data() {
    return {
      ruleForm: {
        title: '',
        articleType: '',
        grade: '',
        // activityType: '',
        articleStatus: '',
        isRecommend: '',
        articleFrom: '',
        isOriginal: '',
        keyWords: '',
        isStick: '',
        articleContent: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入文章标题', trigger: 'blur' },
          { max: 20, message: '长度在20个字符内', trigger: 'blur' }
        ]
      },
      // quillUpdateImg: false, // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
      serverUrl: this.baseUrl + "/abc", // 这里写你要上传的图片服务器地址
      header: { token: sessionStorage.token }, // 有的图片服务器要求请求头需要有token
      content: null,
      editorOption: {
        placeholder: "",
        theme: "snow", // or 'bubble'
        modules: {
          toolbar: {
            container: toolbarOptions, // 工具栏
            handlers: {
              image: function(value) {
                if (value) {
                  // 触发input框选择图片文件
                  document.querySelector(".avatar-uploader input").click();
                } else {
                  this.quill.format("image", false);
                }
              }
            }
          }
        }
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
    /* 富文本 */
    // 上传图片前
    beforeUpload(res, file) {},
    // 上传图片成功
    uploadSuccess(res, file) {
      // res为图片服务器返回的数据
      // 获取富文本组件实例
      let quill = this.$refs.myQuillEditor.quill;
      // 如果上传成功
      if (res.code === "200" && res.info !== null) {
        // 获取光标所在位置
        let length = quill.getSelection().index;
        // 插入图片  res.info为服务器返回的图片地址
        quill.insertEmbed(length, "image", res.info);
        // 调整光标到最后
        quill.setSelection(length + 1);
      } else {
        this.$message.error("图片插入失败");
      }
    },
    // 上传图片失败
    uploadError(res, file) {
      this.$message.error("图片插入失败");
    },
    // 富文本方法
    onEditorBlur() {
      //失去焦点事件
    },
    onEditorFocus() {
      //获得焦点事件
    },
    onEditorChange() {
      //内容改变事件
    }
  }
}
</script>

<style lang='less' scoped>
.el-input, .el-select {
  width: 300px;
}
</style>
