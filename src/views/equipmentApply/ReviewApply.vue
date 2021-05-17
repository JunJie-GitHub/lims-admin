<template>
  <!--  申请查询-->
  <el-table
      :data="tableData"
      height="600"
      border
      style="width: 100%">
    <el-table-column
        prop="name"
        label="姓名"
        width="110">
    </el-table-column>
    <el-table-column
        prop="studentName"
        label="学号"
        width="110">
    </el-table-column>
    <el-table-column
        prop="equipmentName"
        label="设备名"
        width="110">
    </el-table-column>
    <el-table-column
        prop="experimentContext"
        label="实验内容"
        width="180">
    </el-table-column>
    <el-table-column
        prop="experimentPurpose"
        label="实验目的"
        width="180">
    </el-table-column>
    <el-table-column
        prop="startTime"
        label="开始使用时间"
        width="150">
    </el-table-column>
    <el-table-column
        prop="endTime"
        label="结束使用时间"
        width="150">
    </el-table-column>
    <el-table-column
        prop="state"
        label="审核状态"
        width="110">
    </el-table-column>
    <el-table-column label="操作">
      <template v-slot="scope">
        <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">同意</el-button>
        <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">驳回</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>


<script>

import {listEquipmentApplication} from "@/api/equipment";

export default {
  name: "ReviesApply",
  data() {
    return {
      tableData: [{
        name: '张伟',
        studentName: '17320101',
        equipmentName: '示波器',
        experimentContext: '',
        experimentPurpose: '',
        startTime: '2021-05-06 12:00:00',
        endTime: '2021-05-06 14:00:00',
        tutor: '刘伟',
        state: "未审核",
      }, ]
    }
  },
  methods: {
    loadEquipmentData(){
      listEquipmentApplication().then(response => {
        if (response.success == true){
          this.tableData = response.data;
        }
      })
    }
  },
  mounted() {
    this.loadEquipmentData()
  }
}
</script>

<style scoped>

</style>