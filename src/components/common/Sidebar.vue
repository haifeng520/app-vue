<template>
  <div class="sidebar">
    <!-- 浅绿色主题 -->
    <!-- <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#fff"
      text-color="#000" active-text-color="#20a0ff" unique-opened router> -->
    <!-- 深色主题 -->
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="'/' + item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i
              ><span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu
                v-if="subItem.subs"
                :index="'/' + subItem.index"
                :key="subItem.index"
              >
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="'/' + threeItem.index"
                >
                  {{ threeItem.title }}
                </el-menu-item>
              </el-submenu>
              <el-menu-item
                v-else
                :index="'/' + subItem.index"
                :key="subItem.index"
              >
                <i :class="subItem.icon"></i
                ><span slot="title">{{ subItem.title }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="'/' + item.index" :key="item.index">
            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "../commonjs/bus.js";
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: "el-icon-menu",
          title: "系统管理",
          index: "1",
          subs: [
            { icon: "el-icon-document", title: "角色管理", index: "rows" },
            { icon: "el-icon-document", title: "用户管理", index: "user" },
            { icon: "el-icon-document", title: "资源管理", index: "zs" },
            { icon: "el-icon-document", title: "优惠券管理", index: "coupon" }
          ]
        },
        {
          icon: "el-icon-service",
          title: "客服",
          index: "2",
          subs: [
            {
              icon: "el-icon-document",
              title: "班级管理",
              index: "classmanagement"
            },
            { icon: "el-icon-lx-notification", title: "测试", index: "test" },
            { icon: "el-icon-document", title: "富文本", index: "editor" }
          ]
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      // return this.$route.path;
      return "/" + this.$route.path.split("/")[1];
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
/* li.el-menu-item:hover {
  background: #dff0ef !important;
  color: #00D1B2 !important;
}
li.el-menu-item:hover i {
  color: inherit;
} */
</style>
