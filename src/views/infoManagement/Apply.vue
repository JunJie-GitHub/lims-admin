<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 表单
        </el-breadcrumb-item>
        <el-breadcrumb-item>实验室申请</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="form-box">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="实验室名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="申请日期(5个工作日内)">
            <el-col :span="11">
              <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form.date1"
                  style="width: 100%;"
              ></el-date-picker>
            </el-col>

          </el-form-item>
          <el-form-item label="申请课时">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="第一节课" name="type"></el-checkbox>
              <el-checkbox label="第二节课" name="type"></el-checkbox>
              <el-checkbox label="第三节课" name="type"></el-checkbox>
              <el-checkbox label="第四节课" name="type"></el-checkbox>
              <el-checkbox label="第五节课" name="type"></el-checkbox>
              <el-checkbox label="第六节课" name="type"></el-checkbox>
              <el-checkbox label="第七节课" name="type"></el-checkbox>
              <el-checkbox label="第八节课" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="申请理由">
            <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Apply',
  data() {
    return {
      form: {
        name: '',
        date: '',
        type: ['步步高'],
        reson: '',
        desc: []
      }
    };
  },
  methods: {
    onSubmit() {
      this.$message.success('提交成功！');
    }
  }
};
</script>