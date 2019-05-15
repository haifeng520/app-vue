<template>
  <el-card>
    <div style="font-weight:700;">
      你努力，不一定成功。但你不努力，一定很轻松
    </div>
    <input type="text" v-model="asd" />
    <hr />
    <el-button @click="handleClick">set</el-button>
    <hr />
    <el-button @click="handleClickGet">get</el-button>
    <hr />
    {{ asd | toDecimal }}
    <hr />
    <el-button @click="handleClickMe">click me</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      asd: "2"
    };
  },
  methods: {
    handleClick() {
      // console.log(this.asd.trim());
      /* let obj = {
        name: 'zs',
        age: 18,
        aggent: '男'
      } */
      let obj = "abc";
      this.library.setSessionStorage("user", obj);
      this.library.setLocalStorage("user", obj);
    },
    handleClickGet() {
      console.log(this.library.getSessionStorage("user"));
      console.log(this.library.getLocalStorage("user"));
    },
    handleClickMe() {
      alert(1)
    }
  }
};
</script>

<style></style>
