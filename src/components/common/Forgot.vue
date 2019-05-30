<template>
  <div class="login-wrap" :style="bg">
    <div class="ms-login">
      <div class="ms-title">FORGOT PASSWORD</div>
      <el-form
        :model="ruleForm"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="username">
          <el-input placeholder="PHONENUM" v-model="ruleForm.phonenum" class="input-with-select">
            <el-button slot="append" @click="sendPhoneValidate" id="get_valid">发送验证码</el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.validata" placeholder="VALIDATA"></el-input>
        </el-form-item>
        <div class="login-btn" style="margin-top: 10px;">
          <el-button type="primary" @click="submitForm"
            >确定</el-button
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
        validata: '',
        phonenum: ''
      },
      validataFlag: true
    };
  },
  created() {
    this.bg.backgroundImage =
      "url(" +
      require("../../assets/img/bg0" + new Date().getDay() + ".jpg") +
      ")";
  },
  methods: {
    submitForm() {

    },
    sendPhoneValidate() {
      if (this.validataFlag) {
        this.validataFlag = false;
        let count = 60;
        let countdown = setInterval(() => {
          document.getElementById('get_valid').innerText = "重新发送(" + count + "s)";
          if (count == 0) {
            document.getElementById('get_valid').innerText = '发送验证码';
            clearInterval(countdown);
            this.validataFlag = true;
          }
          count--;
        }, 1000);
      }
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
