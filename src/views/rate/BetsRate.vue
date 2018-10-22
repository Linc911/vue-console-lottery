<template lang="html">
  <section class="bets-rate">
    <!-- 表格数据 -->
    <el-table
      :data="tableData"
      height="665"
      size="small"
      highlight-current-row
      border
    >
      <el-table-column type="index"></el-table-column>

      <el-table-column
        prop="parentType"
        label="第一类类型"
        :filters="[
          { text: '主盘势', value: 1 },
          { text: '单码', value: 2 },
          { text: '选号-任选', value: 3 },
          { text: '选号-组选', value: 4 },
          { text: '选号-直选', value: 5 }
        ]"
        :filter-method="filterHandler"
      >
        <template slot-scope="scope">
          <span>{{scope.row.parentType | betType}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="childType" label="第二类类型" sortable>
        <template slot-scope="scope">
          <span>{{scope.row.childType | rateSecondType}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="betting" label="第三类类型" sortable>
        <template slot-scope="scope">
          <span>{{scope.row.betting | rateThirdType}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="odds" label="赔率" :width="100">
        <template slot-scope="scope">
          <span>{{scope.row.odds}}</span>
          <span class="pull-right">
            <BaseSetting @on-click="handleSettingRate(scope.row)"/>
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
    </el-table>

    <!-- 赔率设置弹框 -->
    <el-dialog
      :visible.sync="dialogRateVisible"
      title="修改赔率"
      width="300px"
    >
      <el-form :model="rateForm">
        <el-form-item>
          <el-input v-model="rateForm.odds" placeholder="请输入有效的赔率"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button type="primary" @click="updateRate">确定</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
import BaseSetting from '@/components/base/BaseSetting'

export default {
  components: {
    BaseSetting
  },
  data () {
    return {
      tableData: [],
      dialogRateVisible: false,
      rateForm: { odds: '' }
    }
  },
  created () {
    this.fetchBetsRateList()
  },
  methods: {
    // 打开赔率设置对话框
    handleSettingRate (obj) {
      Object.assign(this.rateForm, obj)
      this.dialogRateVisible = true
    },
    // 更新赔率
    updateRate () {
      this.$axios.post('/api-g/oddsset/11xuan5/save', [ this.rateForm ]).then((response) => {
        this.$_.forEach(this.tableData, item => {
          if (item.oddsid === this.rateForm.oddsid) {
            item.odds = this.rateForm.odds
          }
        })
        this.dialogRateVisible = false
        this.$message.success('修改赔率成功！')
      })
    },
    // 表格过滤方法
    filterHandler (value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    fetchBetsRateList (page) {
      this.$axios.get('/api-g/oddsset/11xuan5').then(response => {
        this.tableData = response.data.data
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
