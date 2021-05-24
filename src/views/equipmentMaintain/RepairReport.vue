<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 表单
        </el-breadcrumb-item>
        <el-breadcrumb-item>设备使用申请</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="form-box">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="设备名">
            <el-input v-model="form.equipmentName"></el-input>
          </el-form-item>
          <el-form-item label="设备位置">
            <el-input v-model="form.location"></el-input>
          </el-form-item>
          <el-form-item label="设备编号">
            <el-input v-model="form.equipmentId"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea" rows="5" v-model="form.remarks"></el-input>
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
import { saveEquipmentRepair} from "@/api/equipment";

export default {
  name: 'RepairReport',
  data() {
    return {
      form: {}
    };
  },
  methods: {

    onSubmit() {
      console.log(this.form);
      var param = this.form;
      saveEquipmentRepair(param).then(response => {
        if (response.success == true){
          this.$message.success('提交成功！');
        }else if (response.success == false){
          this.$message.error(response.message);
        }
      });
    }
  }
};
</script>