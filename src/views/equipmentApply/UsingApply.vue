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
            <el-autocomplete
                v-model="form.equipmentName"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入内容"
                @select="handleSelect"
            ></el-autocomplete>
<!--            <el-input v-model="form.equipmentName"></el-input>-->
          </el-form-item>
          <el-form-item label="实验内容">
            <el-input type="textarea" rows="5" v-model="form.experimentContext"></el-input>
          </el-form-item>
          <el-form-item label="实验目的">
            <el-input type="textarea" rows="5" v-model="form.experimentPurpose"></el-input>
          </el-form-item>

          <el-form-item label="开始时间">
            <el-date-picker
                v-model="form.startTime"
                type="datetime"
                placeholder="选择日期时间">
            </el-date-picker>

          </el-form-item>
          <el-form-item label="结束时间">
            <el-date-picker
                v-model="form.endTime"
                type="datetime"
                placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="指导老师">
            <el-autocomplete
                v-model="form.tutor"
                :fetch-suggestions="querySearchAsyncTutors"
                placeholder="请输入内容"
                @select="handleSelect"
            ></el-autocomplete>
<!--            <el-input v-model="form.tutor"></el-input>-->
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
import {listEquipmentName, insertEquipmentApplication} from "@/api/equipment"
import {listTutors} from "@/api/account"
export default {
  name: 'UseApply',
  data() {
    return {
      form: {
        name: '测试', //学生姓名
        studentName: '17320110',  //学号
        equipmentName: '',
        experimentContext: '',
        experimentPurpose: '',
        startTime: null,
        endTime: null,
        tutor: ''
      },

      //带输入建议的输入框相关
      equipmentNames: [],
      tutors: [],
      state: '',
      timeout:  null,
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      var param = this.form;
      insertEquipmentApplication(param).then(response => {
        if (response.success == true){
          this.$message.success('提交成功！');
        }else if (response.success == false){
          this.$message.error(response.message);
        }
      });
    },

    loadEquipmentName(){
      var equipments = [];
      //设备名列表
      listEquipmentName().then(response => {
        if (response.success == true){
          var data = response.data;
          this.equipmentNames = data;
          for(var i=0; i < data.length; i++){
            console.log(data[i]);
            equipments.push({value: data[i]});
          }
        }
      })
      console.log(equipments);
      return equipments;
    },
    loadTutors(){
      var tutors = []
      //老师列表
      listTutors().then(response => {
        if (response.success == true){
          // this.tutors = response.data;
          var data = response.data;
          this.tutors = data;
          for(var i=0; i < data.length; i++){
            console.log(data[i]);
            tutors.push({value: data[i]});
          }
        }
      });
      return tutors;
    },
    //带输入建议的输入框相关
    querySearchAsync(queryString, cb) {
      // var equipmentNames = this.equipmentNames;
      var results = this.equipmentNames//queryString ? equipmentNames.filter(this.createStateFilter(queryString)) : equipmentNames;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 1000 * Math.random());
    },
    querySearchAsyncTutors(queryString, cb) {
      // var tutors = this.tutors;
      var results = this.tutors;

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

  mounted() {
    this.equipmentNames = this.loadEquipmentName();
    this.tutors = this.loadTutors();
  }

};
</script>