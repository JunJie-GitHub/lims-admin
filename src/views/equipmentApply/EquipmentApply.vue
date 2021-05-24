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
        width="105">
    </el-table-column>
    <el-table-column
        prop="studentName"
        label="学号"
        width="105">
    </el-table-column>
    <el-table-column
        prop="equipmentName"
        label="设备名"
        width="105">
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
        width="105">
    </el-table-column>
    <el-table-column
        prop="endTime"
        label="结束使用时间"
        width="105">
    </el-table-column>
    <el-table-column
        prop="tutor"
        label="指导老师"
        width="105">
    </el-table-column>
    <el-table-column
        prop="state"
        label="审核状态"
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
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="设备名">
        <el-input v-model="form.equipmentName"></el-input>
      </el-form-item>
      <el-form-item label="实验内容">
        <el-input v-model="form.experimentContext"></el-input>
      </el-form-item>
      <el-form-item label="实验目的">
        <el-input v-model="form.experimentPurpose"></el-input>
      </el-form-item>
      <el-form-item label="开始使用时间">
        <el-input v-model="form.startTime"></el-input>
      </el-form-item>
      <el-form-item label="结束使用时间">
        <el-input v-model="form.endTime"></el-input>
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

import {listEquipmentApplication} from "@/api/equipment";

export default {
  name: "EquipmentApply",
  data() {
    return {
      tableData: [],
      editVisible: false,
      form: {},
      idx: -1,
    }
  },
  methods: {
    loadEquipmentData(){
      listEquipmentApplication().then(response => {
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