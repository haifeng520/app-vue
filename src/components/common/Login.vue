<template>
  <div class="login-wrap" :style="bg">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="username">
            <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="password"
            v-model="ruleForm.password"
          >
            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="indentify">
          <el-input
            placeholder="indentify"
            v-model="ruleForm.indentify"
            @keyup.enter.native="submitForm('ruleForm')"
            style="width: 70%;"
          >
            <el-button slot="prepend" icon="el-icon-lx-warn"></el-button>
          </el-input>
          <!-- 放验证码 -->
          <span
            id="v_container"
            style="display: inline-block; border: 1px solid #ccc; width: 28%; vertical-align: middle;"
            >1</span
          >
        </el-form-item>
          <router-link to="/forgot">忘记密码？</router-link>
        <div class="login-btn" style="margin-top: 10px;">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { log } from "util";
// import './indentify.js';
export default {
  data() {
    return {
      bg: {},
      ruleForm: {
        username: "admin",
        password: "123123",
        indentify: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        indentify: [
          { required: true, message: "请输入验证码", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    // this.bg.backgroundImage = "url(" +require("../../assets/img/bg0" + new Date().getDay() + ".jpg") +")";
    this.bg.backgroundImage = "url(" +require("../../assets/img/bg02.jpg") +")";
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.library.setSessionStorage("token", "123");
          this.$message.success("登录成功！");
          this.$router.push("/welcome");
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/img/bg02.jpg);
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  transform: translate(-50%, -50%);
  margin: auto;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>
