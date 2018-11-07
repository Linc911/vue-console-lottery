<template>
  <div>
    <el-table
      :data="tableData"
      size="small"
      highlight-current-row
      border
    >
      <el-table-column type="index" :min-width="30" />
      <el-table-column prop="userName" label="会员账号">
      </el-table-column>
      <el-table-column prop="rebateDate" label="返水日期">
        <template slot-scope="scope">
          <span>{{scope.row.rebateDate | time}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="gameTypeDesc" label="游戏类型">
      </el-table-column>
      <el-table-column prop="totalBetting" label="总投注">
      </el-table-column>
      <el-table-column prop="validBetting" label="有效投注">
      </el-table-column>
      <el-table-column prop="rebateBegin" label="返水开始时间">
        <template slot-scope="scope">
          <span>{{scope.row.rebateBegin | time}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="rebateEnd" label="返水结束时间" sortable>
        <template slot-scope="scope">
          <span>{{scope.row.rebateEnd | time}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="bettingAmount" label="投注笔数">
      </el-table-column>
      <el-table-column prop="gainStatus" label="会员输赢">
        <template slot-scope="scope">
          <span>{{scope.row.gainStatus | winOrLost}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="rebateMoney" label="返水金额">
      </el-table-column>
      <el-table-column prop="rebateTypeDesc" label="返水类型">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Describe',
  created (){

  },
  methods: {

  }
}
</script>

<style scoped>

</style>
