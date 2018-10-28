<template lang="html">
  <section class="odds-fast3">
    <el-table
      :data="tableData"
      height="665"
      size="small"
      highlight-current-row
      border
    >
      <el-table-column type="index" />

      <el-table-column
        prop="parentType"
        label="第一类类型"
        :filters="[
          { text: '总和', value: 1 },
          { text: '三军', value: 2 },
          { text: '围骰/全骰', value: 3 },
          { text: '点数', value: 4 },
          { text: '长牌', value: 5 },
          { text: '短牌', value: 6 }
        ]"
        :filter-method="filterHandler"
      >
        <template slot-scope="scope">
          <span>{{scope.row.parentType | rateFast3FType}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="childType" label="第二类类型" sortable>
        <template slot-scope="scope">
          <span>{{scope.row.childType | rateFast3SType}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="odds" label="赔率" :min-width="100">
        <template slot-scope="scope">
          <span>{{scope.row.odds}}</span>
          <span class="pull-right">
            <BaseSetting @on-click="handleSettingRate(scope.row)"/>
          </span>
        </template>
      </el-table-column>

      <el-table-column prop="remark" label="备注" />
    </el-table>

    <!-- 设置赔率弹框 -->
    <DialogInput
      @on-confirm="handleRateUpdate"
      :value="rateForm.odds"
      title="设置赔率"
      ref="dialogRateSetting"
    />
  </section>
</template>

<script>
import BaseSetting from '@/components/base/BaseSetting'
import DialogInput from '@/components/dialog/DialogInput'

export default {
  name: 'LotterOddsFast3',
  components: {
    BaseSetting,
    DialogInput
  },
  data () {
    return {
      tableData: [],
      rateForm: { odds: '' }
    }
  },
  created () {
    this.getOddsList()
  },
  watch: {
    $route () {
      this.getOddsList()
    }
  },
  methods: {
    // 打开赔率设置对话框
    handleSettingRate (obj) {
      Object.assign(this.rateForm, obj)
      this.$refs.dialogRateSetting.toggleDialogStatus(true)
    },
    // 修改赔率
    handleRateUpdate (value) {
      this.rateForm.odds = Number(value).toFixed(2)

      this.$httpAPI.postLotteryOddsFast3([ this.rateForm ]).then(() => {
        // 在表格中找到对应的数据做修改，不再请求新的数据更新组件
        this.$_.forEach(this.tableData, item => {
          if (item.oddsid === this.rateForm.oddsid) {
            item.odds = this.rateForm.odds
          }
        })

        this.$refs.dialogRateSetting.toggleDialogStatus(false)
        this.$message.success('修改赔率成功！')
      }).catch(error => console.log(error))
    },
    // 表格过滤方法
    filterHandler (value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    // 获取赔率
    getOddsList (type) {
      this.$httpAPI.fetchLotteryOddsFast3({
        params: { type: this.$route.params.gameId }
      }).then(response => {
        this.tableData = response.data.data
      }).catch(error => console.log(error))
    }
  }
}
</script>
