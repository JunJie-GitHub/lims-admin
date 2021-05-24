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
  <!-- 编辑弹出框 -->
  <el-dialog title="编辑" v-model="editVisible" width="30%">
    <el-form ref="form" :model="form" label-width="70px">
      <el-form-item label="实验室">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="院系">
        <el-input v-model="form.department"></el-input>
      </el-form-item>
      <el-form-item label="申请理由">
        <el-input v-model="form.reason"></el-input>
      </el-form-item>
      <el-form-item label="使用日期">
        <el-input v-model="form.date"></el-input>
      </el-form-item>
      <el-form-item label="使用课时">
        <el-input v-model="form.classTime"></el-input>
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
      }],

      editVisible: false,
      form: {},
      idx: -1,
    }
  },
  methods: {
    laboratoryApply(){
      listLaboratoryApply().then(response => {
        this.tableData = response.data
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
    this.laboratoryApply()
  }
}
</script>

<style scoped>

</style>