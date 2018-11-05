<template>
  <div>
    <el-input v-model="level" placeholder="返水等级名称" style="width: 160px;margin-bottom: 15px"></el-input>
    <el-button type="primary" icon="el-icon-search" style="margin-left: 10px"></el-button>
    <el-button type="primary" icon="el-icon-refresh" style="float: right">✚ 会员返佣设置</el-button>
    <el-table
      :data="tableData"
      size="small"
      highlight-current-row
      border
    >
      <el-table-column type="index" :min-width="30" />
      <el-table-column prop="name" label="返水等级">
        <template slot-scope="scope">
          <span>{{scope.row.name | returnLevel}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="upperLimit" label="有效投注上限">
        <template slot-scope="scope">
          <span>{{scope.row.upperLimit | zero}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="lowerLimit" label="有效投注下限">
        <template slot-scope="scope">
          <span>{{scope.row.lowerLimit | zero}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="ratio" label="返佣比例">
        <template slot-scope="scope">
          <span>{{scope.row.ratio | percentage}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="是否启用">
        <template slot-scope="scope">
          <span>{{scope.row.status | isEnabled}}</span>
          <UserStatusSetting
            @on-change="syncGroupData"
            :userId="String(scope.row.id)"
            :groupId="String(scope.row.status)"
            class="pull-right"
          />
        </template>
      </el-table-column>
      <el-table-column prop="sysGroupNames" label="会员分组">
      </el-table-column>
      <el-table-column prop="updateTime" label="修改时间" sortable>
        <template slot-scope="scope">
          <span>{{scope.row.updateTime | time}}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="fetchRebateList"
      @current-change="fetchRebateList"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script type="text/javascript">
import UserStatusSetting from './UserStatusSetting'

export default {
  components: {
    UserStatusSetting
  },
  props: {
    gameConfigId: {
      Number
    }
  },
  data () {
    return {
      level: '',
      tableData: [],
      pageSize: 100,
      currentPage: 1,
      total: 1
    }
  },
  created () {
    this.fetchRebateList()
  },
  methods: {
    // 数据变动修改是否启用
    syncGroupData (payload) {
      this.$_.forEach(this.tableData, item => {
        if (String(item.id) === payload.userId) {
          item.status = Number(payload.value)
        }
      })
    },
    // 获取游戏列表
    fetchRebateList () {
      this.$httpAPI.rebateList({
        params: {
          gameConfigId: this.gameConfigId,
          pageNo: this.currentPage,
          pageSize: this.pageSize
        }
      }).then(response => {
        this.tableData = response.data.data
        this.total = response.data.amount
        // console.log(this.tableData)
      }).catch(error => console.log(error))
    }
  }
}
</script>
