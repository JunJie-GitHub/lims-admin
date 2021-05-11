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
        prop="student_name"
        label="学号"
        width="105">
    </el-table-column>
    <el-table-column
        prop="equipment_name"
        label="设备名"
        width="105">
    </el-table-column>
    <el-table-column
        prop="experiment_context"
        label="实验内容"
        width="180">
    </el-table-column>
    <el-table-column
        prop="experiment_purpose"
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
</template>


<script>

export default {
  name: "EquipmentApply",
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