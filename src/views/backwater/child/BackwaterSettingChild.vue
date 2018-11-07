<template>
  <div>
    <el-input v-model="level" placeholder="返水等级名称" style="width: 160px;margin-bottom: 15px"></el-input>
    <el-button type="primary" icon="el-icon-search" style="margin-left: 10px" @click="sumbit"></el-button>
    <el-button type="primary" icon="el-icon-plus" style="float: right" @click="dialogVisible = true">会员返佣设置</el-button>
    <el-table
      :data="tableData"
      size="small"
      highlight-current-row
      border
    >
      <el-table-column type="index" :min-width="30" />
      <el-table-column prop="name" label="返水等级名称">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
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
    <el-dialog title="添加会员返佣设置" :visible.sync="dialogVisible" width="500px">
      <el-form :model="formData" label-width="120px" ref="limitForm" :rules="rule">
        <el-form-item prop="name" label="返水等级名称">
          <el-input v-model="formData.name" placeholder="请输入名称" />
        </el-form-item>

        <el-form-item prop="rebateUserGroups" label="会员分组">
          <el-select v-model="formData.rebateUserGroups" placeholder="请选择会员分组" style="width: 100%" multiple>
            <el-option v-for="item in groupOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item prop="gameConfigId" label="游戏类型">
          <el-select v-model="formData.gameConfigId" placeholder="请选择游戏类型" style="width: 100%">
            <el-option v-for="item in gameType" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item prop="ratio" label="返佣比率">
          <el-input v-model="formData.ratio" min="0" placeholder="有请输入返佣比率" />
        </el-form-item>
        <el-form-item prop="upperLimit" label="有效投注上限">
          <el-input v-model="formData.upperLimit" type="number" min="0" placeholder="有请输入效投注上限" />
        </el-form-item>

        <el-form-item prop="lowerLimit" label="有效投注下限">
          <el-input v-model="formData.lowerLimit" type="number" placeholder="请输入有效投注下限" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('limitForm')" style="margin-left: 94px">确认</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[20,40,60,80,100]"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    <div class="statistics">
      返水概况：总投注笔数[{{statistic.bettingAmount |
      zero}}]，总投注金额:[￥{{statistic.totalBetting |
      zero}}],有效投注金额：[￥{{statistic.validBetting |
      zero}}]，网站盈利：[￥{{statistic.gainMoney |
      zero}}]，返水总额：[￥{{statistic.rebateMoney |
      zero}}]
    </div>
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
      type: Number
    },
    gameType: {
      type: Array
    }
  },
  data () {
    return {
      level: '',
      tableData: [],
      pageSize: 20,
      currentPage: 1,
      total: 0,
      dialogVisible: false,
      formData: {
        name: '', upperLimit: '', ratio: '', lowerLimit: '', gameConfigId: '', rebateUserGroups: []
      },
      groupOptions: [],
      rule: {
        name: [{ required: true, message: '返水等级名称不能为空' }],
        rebateUserGroups: [{ required: true, message: '会员分组不能为空' }],
        gameConfigId: [{ required: true, message: '游戏类型不能为空' }],
        ratio: [{ required: true, message: '返佣比率不能为空' }],
        upperLimit: [{ required: true, message: '投注上限不能为空' }],
        lowerLimit: [{ required: true, message: '投注下限不能为空' }]
      },
      statistic: []
    }
  },
  created () {
    this.fetchRebateList()
    this.fetchUserGroup()
    this.fetchStatistic()
  },
  methods: {
    sumbit () {
      this.fetchRebateList()
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.fetchRebateList()
    },
    handleCurrentChange (val) {
      console.log(val)
      this.currentPage = val
      this.fetchRebateList()
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$httpAPI.rebateSave(this.formData).then((response) => {
            if (response.data.status === 200) {
              this.$router.push({ name: 'BackwaterSetting' })
              this.$message.success('添加成功！')
              this.dialogVisible = false
            } else {
              this.$message.error(response.data.msg)
            }
          }).catch(error => console.log(error))
        } else {
          this.$message.warning('表单填写不正确，请根据提示填写！')
        }
      })
    },
    // 数据变动修改是否启用
    syncGroupData (payload) {
      this.$_.forEach(this.tableData, item => {
        if (String(item.id) === payload.userId) {
          item.status = Number(payload.value)
        }
      })
    },
    // 获取返水列表
    fetchRebateList () {
      this.$httpAPI.rebateList({
        params: {
          name: this.level,
          gameConfigId: this.gameConfigId,
          pageNo: this.currentPage,
          pageSize: this.pageSize
        }
      }).then(response => {
        this.tableData = response.data.data
        this.total = response.data.amount
      }).catch(error => console.log(error))
    },
    // 获取用户分组
    fetchUserGroup () {
      const length = this.$store.state.user.usersGroup.length
      // 如果在vuex中已经有选择项数据，直接用现有数据；否则发起请求
      if (!length) {
        this.$httpAPI.getSystemGroup({ params: { pageNo: 1, pageSize: 100 } })
          .then(response => {
            // 把数据处理UI组件要求的格式
            this.$_.forEach(response.data.data, item => {
              this.groupOptions.push({
                value: String(item.groupId),
                label: item.name
              })
            })
            this.$store.dispatch('addUsersGoup', this.groupOptions) // 将数据存入vuex中，减少http请求
          })
          .catch(error => console.log(error))
      } else {
        this.groupOptions = this.$store.state.user.usersGroup
      }
    },
    // 获取会员返水信息统计
    fetchStatistic () {
      this.$httpAPI.statistic({
        params: {
          gameConfigId: this.gameConfigId
        }
      }).then(response => {
        this.statistic = response.data.data
      }).catch(error => console.log(error))
    }
  }
}
</script>
<style type="text/css">
  .statistics {
    width: 1000px;
    position: relative;
    top: -26px;
    color: #666666;
    font-size: 14px;
    font-weight: bold;
  }
</style>
