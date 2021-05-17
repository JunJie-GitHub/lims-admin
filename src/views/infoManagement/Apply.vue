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
<!--          <el-form-item label="实验室名称">-->
<!--            <el-input v-model="form.name"></el-input>-->
<!--          </el-form-item>-->
          <el-form-item label="实验室名称">
            <el-autocomplete
                v-model="form.name"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入内容"
                @select="handleSelect"
            ></el-autocomplete>
          </el-form-item>
          <el-form-item label="申请日期(5个工作日内)">
            <el-col :span="11">
              <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form.date"
                  style="width: 100%;"
              ></el-date-picker>
            </el-col>

          </el-form-item>
          <el-form-item label="申请课时">
            <el-checkbox-group v-model="form.classTime">
              <el-checkbox label="1" name="type"></el-checkbox>
              <el-checkbox label="2" name="type"></el-checkbox>
              <el-checkbox label="3" name="type"></el-checkbox>
              <el-checkbox label="4" name="type"></el-checkbox>
              <el-checkbox label="5" name="type"></el-checkbox>
              <el-checkbox label="6" name="type"></el-checkbox>
              <el-checkbox label="7" name="type"></el-checkbox>
              <el-checkbox label="8" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="申请理由">
            <el-input type="textarea" rows="5" v-model="form.reason"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button @click="onCancel">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {getLaboratorys, insertLaboratoryApplication} from "@/api/laboratory";

export default {
  name: 'Apply',
  data() {
    return {
      //提交的申请表单数据
      form: {
        date: '',
        name: '',
        classTime: [],
        reson: '',
      },
      //实验室输入框相关
      restaurants: [],
      state: '',
      timeout:  null,

      //实验室列表
      tableData: [
      //     {
      //   name: '光电实验室',
      //   address: '扬实二 2405',
      //   department: '电子工程学院',
      //   capacity: '30',
      //   instructor: '扬娜拉',
      // }
      ],
    };
  },
  methods: {
    onSubmit: function () {
      console.log(this.form);
      var param = this.form;
      insertLaboratoryApplication(param).then(response => {
        if (response.success == true){
          this.$message.success('提交成功！');
        }else if (response.success == false){
          this.$message.error(response.message);
        }
      })

    },
    onCancel() {
      this.form = {};
    },
    //实验室输入框相关
    loadAll() {
      var result = [];
      //获取实验室列表
      getLaboratorys().then(response => {
        if (response.success == true){
          var data = response.data
          this.tableData = data
          for(var i=0; i < data.length; i++){
            result.push({value: data[i].name});
          }
        }
      });

      // console.log(result);
      return result;
      // [{ "value": "光电实验室"},
      //   { "value": "物理实验室"},]
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 1000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item) {
      console.log("handleSelectitem"+item);
    }
  },
  // beforeMounted(){
  //   this.getTableData();
  // },
  mounted() {
    this.restaurants = this.loadAll();  //实验室输入框相关
  },
};
</script>