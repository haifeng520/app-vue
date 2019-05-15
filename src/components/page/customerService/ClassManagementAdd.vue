<template>
  <el-card style="overflow: auto;">
    <!-- 检索功能 -->
    <router-link class="back" to="/classmanagement">返回</router-link>
    <el-collapse v-model="activeNames" style="margin: 15px 0;">
      <el-collapse-item title="检索功能" name="1">
        <el-form
          :model="formData"
          label-width="100px"
          class="demo-ruleForm"
          ref="formData"
        >
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="课程" prop="courseId">
                <el-select v-model="formData.courseId" placeholder="请选择">
                  <el-option label="区域一" value="1"></el-option>
                  <el-option label="区域二" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="班级名称" prop="showClassName">
                <el-input v-model="formData.showClassName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="班级状态" prop="classStatus">
                <el-select v-model="formData.classStatus" placeholder="请选择">
                  <el-option label="无" value="0"></el-option>
                  <el-option label="进行中" value="1"></el-option>
                  <el-option label="已取消" value="2"></el-option>
                  <el-option label="以结束" value="3"></el-option>
                  <el-option label="已删除" value="4"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="开课时段" required>
                <el-col :span="11">
                  <el-form-item prop="beginDate">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="formData.beginDate"
                      style="width: 100%;"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-form-item prop="endDate">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="formData.endDate"
                      style="width: 100%;"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="科目" prop="subId">
                <el-select v-model="formData.subId" placeholder="请选择">
                  <el-option label="区域一" value="1"></el-option>
                  <el-option label="区域二" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="年级" prop="gradeId">
                <el-select v-model="formData.gradeId" placeholder="请选择">
                  <el-option label="区域一" value="1"></el-option>
                  <el-option label="区域二" value="3"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="开课年份" prop="isPromotion">
                <el-date-picker
                  v-model="formData.isPromotion"
                  type="year"
                  placeholder="选择年"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="当前班主任" prop="isRecommend">
                <el-input v-model="formData.isRecommend"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="课程类型" prop="classType">
                <el-select v-model="formData.classType" placeholder="请选择">
                  <el-option label="V课" value="0"></el-option>
                  <el-option label="拼课" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="是否满班" prop="showTeacherName">
                <el-select
                  v-model="formData.showTeacherName"
                  placeholder="请选择"
                >
                  <el-option label="是" value="1"></el-option>
                  <el-option label="否" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8" style="color: red; padding-top: 7px;"
              >(若班级招生人数上限未设置是0，选择"否")</el-col
            >
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-row>
                <el-form-item label="校区：">
                  <el-col :span="5">
                    <el-form-item prop="provinceId">
                      <el-select
                        v-model="formData.provinceId"
                        placeholder="请选择"
                      >
                        <el-option
                          v-for="item in options_1"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col class="line" :span="1">-</el-col>
                  <el-col :span="5">
                    <el-form-item prop="cityId">
                      <el-select v-model="formData.cityId" placeholder="请选择">
                        <el-option
                          v-for="item in options_2"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col class="line" :span="1">-</el-col>
                  <el-col :span="5">
                    <el-form-item prop="districtId">
                      <el-select
                        v-model="formData.districtId"
                        placeholder="请选择"
                      >
                        <el-option
                          v-for="item in options_3"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col class="line" :span="1">-</el-col>
                  <el-col :span="5">
                    <el-form-item prop="camId">
                      <el-select v-model="formData.camId" placeholder="请选择">
                        <el-option
                          v-for="item in options_4"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-form-item>
              </el-row>
            </el-col>
            <el-col :span="8">
              <el-form-item>
                <el-button type="primary">搜索</el-button>
                <el-button @click="handleFormData('formData')">重置</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="8"> </el-col>
          </el-row>
        </el-form>
      </el-collapse-item>
    </el-collapse>
    <!-- 表头 -->
    <h3>OA班级列表</h3>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      activeNames: "1",
      formData: {
        courseId: "",
        showClassName: "",
        classStatus: "",
        beginDate: "",
        endDate: "",
        subId: "",
        gradeId: "",
        classType: "",
        isRecommend: "",
        isPromotion: "",
        showTeacherName: "",
        provinceId: "",
        cityId: "",
        districtId: "",
        camId: ""
      },
      options_1: [{ value: "选项1", label: "黄金糕" }],
      options_2: [{ value: "选项1", label: "黄金糕" }],
      options_3: [{ value: "选项1", label: "黄金糕" }],
      options_4: [{ value: "选项1", label: "黄金糕" }]
    };
  },
  methods: {
    // 表单重置
    handleFormData(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.el-select {
  width: 100%;
}
.back {
  position: fixed;
  top: 100px;
  right: 100px;
}
</style>
