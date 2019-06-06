<template>
  <el-card style='overflow: auto; background: #f5f5f5'>
    <h1>新增优惠券</h1>
    <el-form :model="form" label-width="140px" :rules="rules" ref="ruleForm">
      <div style="background: #fff;padding: 20px; margin-bottom: 30px">
        <el-row :gutter="20" style="border-bottom: 1px solid #ccc; padding-bottom: 15px;">
          <el-col :span="4"><div class="grid-content bg-purple"><h3><span class="shu"></span>基本信息</h3></div></el-col>
          <el-col :span="2" :offset="18"><div class="grid-content bg-purple" style="cursor: pointer;"><router-link to="/coupon">返回</router-link></div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="13" :offset="2">
            <div class="grid-content bg-purple">
              <el-form-item label="优惠券标题" prop="couponName"> 
                <el-input v-model="form.couponName" style="width: 200px; display: inline-block;" maxlength="9" placeholder="请输入优惠券标题" onkeyup="this.value=this.value.replace(/\s+/g,'')"></el-input>
                <span style="color: red">（标题限制为9个字）</span>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="13" :offset="2">
            <div class="grid-content bg-purple">
              <el-form-item label="优惠券类型" prop="couponType"> 
                <el-select v-model="form.couponType" placeholder="请选择">
                  <el-option
                    v-for="item in couponTypeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="13" :offset="2">
            <div class="grid-content bg-purple">
              <el-form-item label="领取时间限制" prop="start_timer"> 
                <el-date-picker
                  v-model="form.start_timer"
                  type="datetimerange"
                  @change="changeTimer"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
                <span>&nbsp;&nbsp;内发放/领取</span>
                {{ form.start_timer }}
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="13" :offset="2">
            <div class="grid-content bg-purple">
              <el-form-item label="满减规则" prop="leastFee"> 
                <span>满&nbsp;&nbsp;</span><el-input style="display: inline-block; width: 100px;" v-model="form.leastFee"></el-input>
                <span>&nbsp;&nbsp;减&nbsp;&nbsp;</span><el-input style="display: inline-block; width: 100px;" v-model="form.discountFee" ref="discountFee"></el-input><span>&nbsp;&nbsp;元</span>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="13" :offset="2">
            <div class="grid-content bg-purple">
              <el-form-item label="获取规则" prop="collectType"> 
                <el-select v-model="form.collectType" placeholder="请选择">
                  <el-option
                    v-for="item in collectTypeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </div>
      <div style="background: #fff;padding: 20px; margin-bottom: 30px">
        <el-row :gutter="20" style="border-bottom: 1px solid #ccc; padding-bottom: 15px;">
          <el-col :span="4"><div class="grid-content bg-purple"><h3><span class="shu"></span>基本规则</h3></div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="13" :offset="2">
            <div class="grid-content bg-purple">
              <el-form-item label="发放总量"> 
                <el-input v-model="form.stock" style="display: inline-block; width: 100px;"></el-input><span>&nbsp;张</span>
                <span style="color: red">（不输入代表不限数量）</span>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="13" :offset="2">
            <div class="grid-content bg-purple">
              <el-form-item label="用户领取数量"> 
                <el-input :disabled="true" v-model="form.userLimit" style="display: inline-block; width: 100px;"></el-input><span>&nbsp;张</span>
                <span style="color: red">（暂不支持修改）</span>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="13" :offset="2">
            <div class="grid-content bg-purple">
              <el-form-item label="使用有效期"> 
                <template>
                  <el-row :gutter="20">
                    <el-radio v-model="radio" label="1" @change="radioChange">固定有效期</el-radio>
                    <el-date-picker
                      v-model="form.beginTime"
                      type="datetimerange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
                    </el-date-picker>
                  </el-row>
                  <el-row :gutter="20">
                    <el-radio v-model="radio" label="2" @change="radioChange" style="padding-left: 12px;">领取后当天生效，有效天数</el-radio>
                    <el-input v-model="form.dateCount" style="display: inline-block; width: 100px;"></el-input><span>&nbsp;天</span>
                  </el-row>
                </template>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
         <el-row :gutter="20">
          <el-col :span="13" :offset="2">
            <div class="grid-content bg-purple">
              <el-form-item label="用户群体" prop="userType"> 
                <el-select v-model="form.userType" placeholder="请选择">
                  <el-option
                    v-for="item in userTypeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </div>
      <div style="background: #fff;padding: 20px; margin-bottom: 30px">
        <el-row :gutter="20" style="border-bottom: 1px solid #ccc; padding-bottom: 15px;">
          <el-col :span="4"><div class="grid-content bg-purple"><h3><span class="shu"></span>课程使用规则</h3></div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="13" :offset="2">
            <div class="grid-content bg-purple">
              <el-form-item label="城市范围" style="border-bottom: 1px solid #ccc;"> 
                <template>
                  <el-row :gutter="20">
                    <el-radio v-model="city" label="1" @change="cityChange">全部城市可用：所有城市均可使用此优惠券</el-radio>
                  </el-row>
                  <el-row :gutter="20">
                    <el-radio v-model="city" label="2" @change="cityChange" style="padding-left: 12px;">部分城市可用：选中的城市可使用此优惠券</el-radio>
                    <div style="margin: 15px 0;"></div>
                    <el-checkbox-group :style="dsn" v-model="checkedCities" @change="handleCheckedCitiesChange">
                      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>
                  </el-row>
                </template>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="13" :offset="2">
            <div class="grid-content bg-purple">
              <el-form-item label="班级使用说明"> 
                 <template>
                  <el-row :gutter="20">
                    <p style="white-space: nowrap">使用说明请涵盖以上使用范围，使用有效期系统自动填写，无需在此编辑。为了得到更好的体验，请您确保使用说明准确、言简意赅。</p>
                    <p style="white-space: nowrap; padding-left: 12px">建议您可以用多条内容编辑，如 “仅限青岛地区集训班使用 ; 幼儿阶段不可用 ; 仅限寒假班可用 ; ”,每条不要超过12个字符。</p>
                  </el-row>
                  <el-row :gutter="20">
                    <el-input
                      type="textarea"
                      :rows="3"
                      placeholder="请输入内容"
                      style="padding-left: 12px"
                      v-model="form.classRuleRemark">
                    </el-input>
                  </el-row>
                </template>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="13" :offset="2">
            <div class="grid-content bg-purple">
              <el-form-item label="备注"> 
                 <template>
                  <el-row :gutter="20">
                    <p style="white-space: nowrap">用于区分不同优惠券</p>
                  </el-row>
                  <el-row :gutter="20">
                    <el-input
                      type="textarea"
                      :rows="3"
                      placeholder="请输入内容"
                      style="padding-left: 12px"
                      v-model="form.couponRemark">
                    </el-input>
                  </el-row>
                </template>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="13" :offset="2">
            <div class="grid-content bg-purple">
              <el-form-item label="界面预览"> 
                <el-row :gutter="20">
                  <el-button type="primary" plain @click="clickPreview">生成预览</el-button>
                  <span style="color: red; margin-left: 15px;">(此样式与app最终生成优惠券样式一致)</span>
                  <div id="preview" :style="previewDis">
                    <div class="price"><p><span>￥</span><span style="font-size: 28px;">99</span></p><p>满999元可用</p></div>
                    <div style="width: 250px;" class="con">
                      <div class="pro_title">fdsd</div>
                      <p>仅限APP内购买课程使用</p>
                      <p>每个课程仅限使用1张优惠券</p>
                      <p>体验课不可使用</p>
                      <p>仅限青岛地区集训班使用 </p>
                      <p>幼儿阶段不可用</p>
                      <p>仅限寒假班可用</p>
                      <div class="pro_timer">有效期至：自领取后10日内可用</div>
                    </div>
                    <div style="text-align: center;"><span class="to_use">去使用</span></div>
                  </div>
                </el-row>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8" :offset="6">
            <el-form-item>
              <el-button type="primary" @click="onSubmit('ruleForm')">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </div>
    </el-form>
  </el-card>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  name: '',
  data() {
    // 满减规则
    let limitFull=(rule,value,callback)=>{
      let discountFee = this.$refs.discountFee.value;
      if(!value && !discountFee) {
        callback();
      };
      if( value <= discountFee) {
        callback(new Error('满减规则不合法'));
      } else {
        callback();
      }
    };
    return {
      form: {
        couponName: '',
        couponType: '',
        start_timer: [],
        leastFee: 100,
        discountFee: 99,
        collectType: '',
        stock: '',
        userLimit: 1,
        userType: '',
        beginTime: [],
        dateCount: '',
        cityIdStr: '',
        classRuleRemark: '',
        couponRemark: ''
      },
      city: '1',
      checkedCities: [],
      radio: '1',
      timer: [],
      // 优惠券类型
      couponTypeOptions: [{
        value: '1',
        label: '满减优惠'
      }],
      collectTypeOptions: [{
        value: '1',
        label: '新人注册'
      },
      {
        value: '2',
        label: '活动内赠'
      }],
      userTypeOptions: [{
        value: '1',
        label: '所有用户'
      }],
      cities: cityOptions,
      // 验证规则
      rules: {
        couponName: [
          { required: true, message: '请输入优惠券名称', trigger: 'blur' },
          { min: 1, max: 9, message: '长度在 1 到 9 个字符', trigger: 'blur' }
        ],
        couponType: [
          { required: true, message: '请选择优惠券类型', trigger: 'change' }
        ],
        start_timer: [
          { type: 'array', required: true, message: '请选择领取时间规则', trigger: 'change' }
        ],
        leastFee: [
          { validator: limitFull, trigger: 'blur' },
        ],
        collectType: [
          { required: true, message: '请选择获取类型', trigger: 'change' }
        ],
        userType: [
          { required: true, message: '请选择用户群体', trigger: 'change' }
        ]
      },
      dsn: {
        display: 'none'
      },
      // 生成预览 样式
      previewDis: {display: 'none'}
    }
  },
  methods: {
    onSubmit(formName) {
       this.$refs[formName].validate((valid) => {
        if (valid) {
          // 验证一下有效期规则
          if(this.radio === '1' && this.form.beginTime.length <= 0) {
            this.$message.warning('请输入固定有效期规则！');return;
          }
          if(this.radio === '2' && this.form.dateCount === '') {
            this.$message.warning('请输入有效天数！');return;
          }
          alert('tijiao')
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    cityChange(val) {
      if(val == '1') {
        this.dsn = {display: 'none'};
        this.cityIdStr = '';
        this.checkedCities =  [];
      } else {
        this.dsn = {display: 'block'}
      }
    },
    handleCheckedCitiesChange(val) {
      let str = this.library.arrayJoin(val);
      this.cityIdStr = str;
    },
    // 点击生成预览
    clickPreview() {
      this.previewDis = {display: '-webkit-flex'};
      if(this.library.isIE()) {
        this.previewDis = {display: '-ms-flexbox'};
      }
    },
    // 点击领取时间规则
    changeTimer(val) {
      // console.log(val);
    },
    // 有效期规则发生改变
    radioChange(val) {
      if(val === '1') {
        this.form.dateCount = '';
      } else {
        this.form.beginTime = [];
      }
    }
  }
}
</script>

<style lang='less' scoped>
#preview>div {
  float: left;
}
#preview {
  align-items:center;
  display: -webkit-flex;
  width: 550px;
  padding: 20px 0;
  border-radius: 5px;
  box-shadow:0 0 5px #ccc;
  overflow: auto;
  zoom: 1;
  margin: 12px;
}
.price { 
  width: 150px;
}
.price p {
  font-weight: 700;
  color: #ccc;
  font-size: 14px;
  text-align: center;
  margin: 0;
}
.price p span {
  color: #ff5757;
}
#preview .pro_title {
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 10px;
}
#preview .con p {
  margin-bottom: 2px;
  line-height: 18px;
}
#preview .con .pro_timer {
  margin-top: 7px;
}
#preview .to_use {
  font-size: 20px;
  background: #ff5757;
  color: #fff;
  padding: 10px 23px;
  border-radius: 22px;
  margin-left: 15px;
}

.shu {
  display: inline-block;
  width: 5px;
  background: #000;
  height: 25px;
  vertical-align: bottom;
  margin-right: 5px;
}
.el-row {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-checkbox-group {
  font-size: 0;
  margin-left: 35px;
}
.el-form-item__label {
  font-size: 18px !important;
  font-weight: 700 !important;
}
</style>
