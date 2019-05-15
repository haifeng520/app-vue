<template>
  <el-card style="overflow: auto;">
    <el-button @click="handleClick">click me</el-button>
  </el-card>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    handleClick() {
      alert(1);
    }
  }
};
</script>

<style lang="less" scoped></style>
