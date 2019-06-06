<template>
  <el-card style='overflow: auto;'>
    <el-row :gutter="20" style="margin-bottom: 20px">
      <el-col :span="4"><div class="grid-content bg-purple"><h3>新增校区</h3></div></el-col>
      <el-col :span="2" :offset="18"><div class="grid-content bg-purple" style="cursor: pointer;"><router-link to="/school">返回</router-link></div></el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    }
  },
  methods: {}
}
</script>

<style lang='less' scoped>

</style>
