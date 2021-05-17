<template>
  <!--  设备列表-->
  <el-table
      :data="tableData"
      height="600"
      border
      style="width: 100%">
    <el-table-column
        prop="name"
        label="设备名称"
        width="105">
    </el-table-column>
    <el-table-column
        prop="purpose"
        label="设备用途"
        width="105">
    </el-table-column>
    <el-table-column
        prop="quantity"
        label="数量"
        width="105">
    </el-table-column>
    <el-table-column
        prop="location"
        label="存储位置"
        width="180">
    </el-table-column>
    <el-table-column
        prop="remarks"
        label="备注"
        width="180">
    </el-table-column>
    <el-table-column
        prop="status"
        label="设备状态"
        width="105">
    </el-table-column>
    <el-table-column label="操作">
      <template v-slot="scope">
        <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>


<script>

import {listEquipment} from "@/api/equipment";

export default {
  name: "Equipment",
  data() {
    return {
      tableData: [{
        name: '示波器',
        purpose: '示波',
        quantity: '20',
        location: '扬实一 1402',
        remarks: '这是备注',
        status: '0',

      }, {
        name: '示波器',
        purpose: '示波',
        quantity: '20',
        location: '扬实一 1402',
        remarks: '这是备注',
        status: '0',
      }, ]
    }
  },
  methods: {
    loadEquipmentData(){
      listEquipment().then(response => {
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