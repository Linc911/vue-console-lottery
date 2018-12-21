<template lang="html">
    <el-dialog
      :visible.sync="dialogVisible"
      title="直属下级列表"
      width="80%"
      style="min-width: 760px"
    >
    <el-table :data="tableData" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="username" label="代理账号" />

      <el-table-column prop="agentAmount" label="下级代理数量" :min-width="60" />

      <el-table-column prop="userAmount" label="下级会员数量" :min-width="60"  />

      <el-table-column prop="totalAmount" label="投注笔数" :min-width="45"  />

      <el-table-column prop="totalBets" label="投注金额">
        <template slot-scope="scope">
          <span>{{ scope.row.totalBets | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="banlance" label="账号余额">
        <template slot-scope="scope">
          <span>{{ scope.row.banlance | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="depositMoney" label="账号存款">
        <template slot-scope="scope">
          <span>{{ scope.row.depositMoney | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="type0Money" label="账号取款">
        <template slot-scope="scope">
          <span>{{ scope.row.type0Money | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="depositMoney" label="账号存款">
        <template slot-scope="scope">
          <span>{{ scope.row.depositMoney | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="type4Money" label="账号返水">
        <template slot-scope="scope">
          <span>{{ scope.row.type4Money | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="type12Money" label="账号分润">
        <template slot-scope="scope">
          <span>{{ scope.row.type12Money | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="type8Money" label="代理分润">
        <template slot-scope="scope">
          <span>{{ scope.row.type8Money | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="win" label="账号输赢">
        <template slot-scope="scope">
          <span>{{ scope.row.win | RMB }}</span>
        </template>
      </el-table-column>
    </el-table>
  </el-dialog>
</template>

<script>
export default {
  name: 'DialogSublevelList',
  props: {
    id: {
      type: [ Number, String ],
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      tableData: []
    }
  },
  watch: {
    id () {
      if (this.id && this.dialogVisible) {
        this.fetchSublevelList()
      }
    }
  },
  methods: {
    // 显示与隐藏弹框（外部调用）
    toggleDialogVisible (status) {
      this.dialogVisible = status
    },
    // 获取直属下级列表
    fetchSublevelList () {
      this.$httpAPI.fetchAgentPerformanceList({
        params: { parentUserId: this.id, pageNo: 1, pageSize: 1000 }
      }).then((response) => {
        response.data.data ? (this.tableData = response.data.data) : (this.tableData = [])

        // 如果没有数据，提示该代理账号暂时没有直属下级
        if (!this.tableData.length) {
          this.$message.info('该代理账号暂时没有直属下级')
        }
      }).catch((error) => console.log(error))
    }
  }
}
</script>
