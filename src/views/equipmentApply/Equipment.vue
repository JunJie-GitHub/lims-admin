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
  <!-- 编辑弹出框 -->
  <el-dialog title="编辑" v-model="editVisible" width="30%">
    <el-form ref="form" :model="form" label-width="70px">
      <el-form-item label="设备名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="设备用途">
        <el-input v-model="form.purpose"></el-input>
      </el-form-item>
      <el-form-item label="数量">
        <el-input v-model="form.quantity"></el-input>
      </el-form-item>
      <el-form-item label="存储位置">
        <el-input v-model="form.location"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.remarks"></el-input>
      </el-form-item>
      <el-form-item label="设备状态">
        <el-input v-model="form.status"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
                <span class="dialog-footer">
                    <el-button @click="editVisible = false">取 消</el-button>
                    <el-button type="primary" @click="saveEdit">确 定</el-button>
                </span>
    </template>
  </el-dialog>
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
      }, ],
      editVisible: false,
      form: {},
      idx: -1,
    }
  },
  methods: {
    loadEquipmentData(){
      listEquipment().then(response => {
        if (response.success == true){
          this.tableData = response.data;
        }
      })
    },
    handleDelete(index, row){
      console.log(index+ " "+ row.name)
      // this.tableData.splice(index,1)
      // 二次确认删除
      this.$confirm("确定要删除吗？", "提示", {
        type: "warning"
      })
          .then(() => {
            //调用删除数据库的数据接口
            this.$message.success("删除成功");
            this.tableData.splice(index, 1);
          })
          .catch(() => {});
    },
    handleEdit(index, row){
      console.log(index+ " "+ row.name)
      this.idx = index;
      this.form = row;
      this.editVisible = true;
      //调用删除数据库的数据接口
    },
    // 保存编辑
    saveEdit() {
      this.editVisible = false;
      this.$message.success(`修改第 ${this.idx + 1} 行成功`);
      this.$set(this.tableData, this.idx, this.form);
    },
  },
  mounted() {
    this.loadEquipmentData()
  }
}

</script>

<style scoped>

</style>