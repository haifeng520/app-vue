import Vue from "vue";
import Router from "vue-router";
import { Message } from "element-ui";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/login",
      component: () => import("../components/common/Login.vue")
    },
    {
      path: "/forgot",
      component: () => import("../components/common/Forgot.vue")
    },
    {
      path: "/",
      component: resolve => require(["../components/common/Home.vue"], resolve),
      meta: { title: "自述文件" },
      children: [
        {
          path: "/welcome",
          component: () => import("../components/common/welcome.vue"),
          meta: { title: "欢迎页" }
        },
        {
          path: "/classmanagement",
          component: () =>
            import("../components/page/customerService/ClassManagement.vue"),
          meta: { title: "班级管理" }
        },
        {
          path: "/classmanagement/add",
          component: () =>
            import("../components/page/customerService/ClassManagementAdd.vue")
        },
        {
          path: "/classmanagement/edit",
          name: "editClass", // 组件传值 路由名称
          component: () =>
            import("../components/page/customerService/ClassManagementEdit.vue")
        },
        {
          path: "/test",
          component: () => import("../components/page/test/test.vue"),
          meta: { title: "测试" }
        },
        {
          path: "/editor",
          component: () =>
            import("../components/page/test/vue-quill-editor.vue"),
          meta: { title: "富文本" }
        },
        {
          path: "/coupon",
          component: () =>
            import("../components/page/coupon/List.vue"),
          meta: { title: "优惠券管理" }
        },
        {
          path: "/coupon/add",
          component: () =>
            import("../components/page/coupon/Add.vue")
        },
        {
          path: "/article",
          component: () =>
            import("../components/page/article/List.vue"),
          meta: { title: "文章管理" }
        },
        {
          path: "/article/add",
          component: () =>
            import("../components/page/article/Add.vue")
        },
        {
          path: "/teacher",
          component: () =>
            import("../components/page/teacher/List.vue"),
          meta: { title: "教师管理" }
        },
        {
          path: "/teacher/add",
          component: () =>
            import("../components/page/teacher/Add.vue")
        },
        {
          path: "/school",
          component: () =>
            import("../components/page/school/List.vue"),
          meta: { title: "校区管理" }
        },
        {
          path: "/school/add",
          component: () =>
            import("../components/page/school/Add.vue")
        }
      ]
    }
  ]
});

// 设置全局的前置路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === "/login" || to.path === "/forgot") {
    next();
  } else {
    // 判断有没有 token
    const token = sessionStorage.getItem("token");
    if (token) {
      next();
    } else {
      router.push("login");
      // 提示一下
      Message.warning("请先登录");
    }
  }
});

export default router;
