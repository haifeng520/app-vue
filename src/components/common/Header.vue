<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChage">
      <!-- <i class="el-icon-menu"></i> -->
      <div class="logo_img"></div>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">
      <div class="header-user-con">
        <span @click="loginout" class="gout">退出</span>
      </div>
    </div>
  </div>
</template>
<script>
import bus from "../commonjs/bus.js";
export default {
  data() {
    return {
      collapse: false,
      fullscreen: false,
      name: "linxin",
      message: 2
    };
  },
  methods: {
    loginout() {
      this.$router.push("/login");
    },
    // 侧边栏折叠
    collapseChage() {
      this.collapse = !this.collapse;
      bus.$emit("collapse", this.collapse);
    },
    mounted() {
      if (document.body.clientWidth < 1500) {
        this.collapseChage();
      }
    }
  }
}
</script>
<style scoped>
.logo_img {
  width: 50px;
  height: 70px;
  background: url(../../assets/home-logo.jpg) no-repeat center;
  background-size: 50px 50px;
}
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}

.gout {
  font-size: 18px;
  color: orange;
  cursor: pointer;
}
</style>
