<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 系统设置
        </el-breadcrumb-item>
        <el-breadcrumb-item>修改登录密码</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="form-box">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="原密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="新密码">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="确认新密码">
            <el-input type="password" v-model="form.newPassword"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">确定</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResetPassword',
  data() {
    return {
      form: {
        password: '',
        newPassword: '',
        newPasswordConfirm: ''
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