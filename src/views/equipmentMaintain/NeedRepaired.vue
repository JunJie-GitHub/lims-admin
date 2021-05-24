<template>
  <!--  待维修设备-->
  <el-table
      :data="tableData"
      height="600"
      border
      style="width: 100%">
    <el-table-column
        prop="equipmentName"
        label="设备名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="location"
        label="存储位置"
        width="180">
    </el-table-column>
    <el-table-column
        prop="equipmentId"
        label="设备编号"
        width="180">
    </el-table-column>
    <el-table-column
        prop="remarks"
        label="备注"
        width="180">
    </el-table-column>
    <el-table-column
        prop="state"
        label="设备状态"
        width="110">
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
      <el-form-item label="设备名">
        <el-input v-model="form.equipmentName"></el-input>
      </el-form-item>
      <el-form-item label="存储位置">
        <el-input v-model="form.location"></el-input>
      </el-form-item>
      <el-form-item label="设备编号">
        <el-input v-model="form.equipmentId"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.remarks"></el-input>
      </el-form-item>
      <el-form-item label="设备状态">
        <el-input v-model="form.state"></el-input>
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
import {listEquipmentRepair} from "@/api/equipment";

export default {
  name: "NeedRepaired",
  data() {
    return {
      tableData: [],
      editVisible: false,
      form: {},
      idx: -1,
    }
  },
  methods: {
    getData() {
      listEquipmentRepair().then(res => {
        this.tableData = res.data;
      });
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
    this.getData();
  }
}
</script>

<style scoped>

</style>