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
            <el-input v-model="form.name"></el-input>
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
export default {
  name: 'RepairReport',
  data() {
    return {
      options: [
        {
          value: 'guangdong',
          label: '广东省',
          children: [
            {
              value: 'guangzhou',
              label: '广州市',
              children: [
                {
                  value: 'tianhe',
                  label: '天河区'
                },
                {
                  value: 'haizhu',
                  label: '海珠区'
                }
              ]
            },
            {
              value: 'dongguan',
              label: '东莞市',
              children: [
                {
                  value: 'changan',
                  label: '长安镇'
                },
                {
                  value: 'humen',
                  label: '虎门镇'
                }
              ]
            }
          ]
        },
        {
          value: 'hunan',
          label: '湖南省',
          children: [
            {
              value: 'changsha',
              label: '长沙市',
              children: [
                {
                  value: 'yuelu',
                  label: '岳麓区'
                }
              ]
            }
          ]
        }
      ],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: true,
        type: ['步步高'],
        resource: '小天才',
        desc: '',
        options: []
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