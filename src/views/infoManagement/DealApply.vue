<template>
  <!--  申请查询-->
  <el-table
      :data="tableData"
      height="600"
      border
      style="width: 100%">
    <el-table-column
        prop="name"
        label="实验室"
        width="130">
    </el-table-column>
    <el-table-column
        prop="student"
        label="申请人"
        width="130">
    </el-table-column>
    <el-table-column
        prop="studentName"
        label="学号"
        width="130">
    </el-table-column>

    <el-table-column
        prop="reason"
        label="申请理由"
        width="250">
    </el-table-column>
    <el-table-column
        prop="date"
        label="使用日期"
        width="130">
    </el-table-column>
    <el-table-column
        prop="classTime"
        label="使用课时"
        width="130">
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
import { listLaboratoryApplyToDealWith } from "@/api/laboratory"
export default {
  name: "dealApply",
  data() {
    return {
      tableData: [{
        name: '光电实验室',
        address: '扬实二 2405',
        student: '黎俊杰',
        studentName: '17320110',
        reason: '做毕设',
        date: '2021-05-06',
        classTime: "1, 2, 3",
      }, {
        name: '光电实验室',
        address: '扬实二 2405',
        student: '黎俊杰',
        studentName: '17320110',
        reason: '做毕设',
        date: '2021-05-06',
        classTime: "1, 2, 3",
      },]
    }
  },
  methods: {
    loadLaboratoryApplyData(){
      listLaboratoryApplyToDealWith().then(response => {
        if (response.success == true){
          this.tableData = response.data;
        }
      })
    }
  },
  mounted() {
    this.loadLaboratoryApplyData()
  }
}
</script>


<style scoped>

</style>