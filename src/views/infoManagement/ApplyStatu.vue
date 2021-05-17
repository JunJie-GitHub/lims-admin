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
        width="110">
    </el-table-column>
    <el-table-column
        prop="address"
        label="地址"
        width="110">
    </el-table-column>
    <el-table-column
        prop="department"
        label="院系"
        width="110">
    </el-table-column>
<!--    <el-table-column-->
<!--        prop="capacity"-->
<!--        label="容纳人数"-->
<!--        width="100">-->
<!--    </el-table-column>-->
    <el-table-column
        prop="instructor"
        label="指导老师"
        width="110">
    </el-table-column>
    <el-table-column
        prop="reason"
        label="申请理由"
        width="180">
    </el-table-column>
    <el-table-column
        prop="state"
        label="申请状态"
        width="110">
    </el-table-column>
    <el-table-column
        prop="date"
        label="使用日期"
        width="110">
    </el-table-column>
    <el-table-column
        prop="classTime"
        label="使用课时"
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
import { listLaboratoryApply } from '@/api/laboratory'
export default {
  name: "applyStatu",
  data() {
    return {
      tableData: [{
        name: '光电实验室',
        address: '扬实二 2405',
        department: '电子工程学院',
        instructor: '扬娜拉',
        reason: '做毕设',
        state: '审核中',
        date: '2021-05-06',
        classTime: "1, 2, 3",
      }]
    }
  },
  methods: {
    laboratoryApply(){
      listLaboratoryApply().then(response => {
        this.tableData = response.data
      })
    }
  },
  mounted() {
    this.laboratoryApply()
  }
}
</script>

<style scoped>

</style>