<template>
  <!--  待维修设备-->
  <el-table
      :data="tableData"
      height="600"
      border
      style="width: 100%">
    <el-table-column
        prop="name"
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
        prop="status"
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
</template>


<script>

export default {
  name: "NeedRepaired",
  data() {
    return {
      tableData: [{
        name: '张伟',
        student_name: '17320101',
        equipment_name: '示波器',
        experiment_context: '',
        experiment_purpose: '',
        startTime: '2021-05-06 12:00:00',
        endTime: '2021-05-06 14:00:00',
        tutor: '刘伟',
        state: "未审核",
      }, {
        name: '张伟',
        student_name: '17320101',
        equipment_name: '示波器',
        experiment_context: '',
        experiment_purpose: '',
        startTime: '2021-05-06 12:00:00',
        endTime: '2021-05-06 14:00:00',
        tutor: '刘伟',
        state: "未审核",
      }, ]
    }
  }
}
</script>

<style scoped>

</style>