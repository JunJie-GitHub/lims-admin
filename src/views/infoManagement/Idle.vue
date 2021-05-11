<template>
<!--  空闲实验室查询-->
  <el-table
      :data="tableData"
      height="600"
      border
      style="width: 100%">
    <el-table-column
        prop="name"
        label="实验室"
        width="220">
    </el-table-column>
    <el-table-column
        prop="address"
        label="地址"
        width="220">
    </el-table-column>
    <el-table-column
        prop="department"
        label="院系"
        width="220">
    </el-table-column>
    <el-table-column
        prop="capacity"
        label="容纳人数"
        width="220">
    </el-table-column>
    <el-table-column
        prop="instructor"
        label="指导老师"
        width="220">
    </el-table-column>
  </el-table>
</template>


<script>

export default {
  name: "idle",
  data() {
    return {
      tableData: [{
        name: '光电实验室',
        address: '扬实二 2405',
        department: '电子工程学院',
        capacity: '30',
        instructor: '扬娜拉',
      }, {
        name: '光电实验室',
        address: '扬实二 2405',
        department: '电子工程学院',
        capacity: '30',
        instructor: '扬娜拉',
      }, {
        name: '光电实验室',
        address: '扬实二 2405',
        department: '电子工程学院',
        capacity: '30',
        instructor: '扬娜拉',
      }, {
        name: '光电实验室',
        address: '扬实二 2405',
        department: '电子工程学院',
        capacity: '30',
        instructor: '扬娜拉',
      }, {
        name: '光电实验室',
        address: '扬实二 2405',
        department: '电子工程学院',
        capacity: '30',
        instructor: '扬娜拉',
      }, {
        name: '光电实验室',
        address: '扬实二 2405',
        department: '电子工程学院',
        capacity: '30',
        instructor: '扬娜拉',
      }, {
        name: '光电实验室',
        address: '扬实二 2405',
        department: '电子工程学院',
        capacity: '30',
        instructor: '扬娜拉',
      }]
    }
  }
}
</script>

<style scoped>

</style>