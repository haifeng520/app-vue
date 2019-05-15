<template>
  <el-card shadow="always">
    <!-- 图片上传组件辅助-->
    <el-upload
      class="avatar-uploader"
      :action="serverUrl"
      name="img"
      :headers="header"
      accept=".jpg, .png, .gif, .bmp"
      :show-file-list="false"
      :on-success="uploadSuccess"
      :on-error="uploadError"
      :before-upload="beforeUpload"
    >
    </el-upload>
    <!-- 富文本编辑器 -->
    <!-- <el-row v-loading="uillUpdateImg"> -->
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    >
    </quill-editor>
    <div style="margin-top: 50px;">{{ content }}</div>
  </el-card>
</template>

<script>
// 引入工具条
import toolbarOptions from "../../commonjs/quill-editor-toolbar.js";

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";
export default {
  components: {
    quillEditor
  },
  data() {
    return {
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
    };
  },
  methods: {
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
};
</script>

<style>
.quill-editor {
  height: 500px;
}
</style>
