<template lang="html">
  <div class="group-setting">
    <BaseSetting @on-click="handleGroupSetting" />
    <!-- 会员分组修改弹框 -->
    <el-dialog :visible.sync="dialogVisible" title="会员分组修改" width="320px" center>
      <div>
        <el-select v-model="innerGroupId" placeholder="选择分组" size="small">
          <el-option
            v-for="item in groupOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <span slot="footer">
          <el-button @click="handleGroupChange" type="primary" size="small">确认</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import BaseSetting from '@/components/base/BaseSetting'
export default {
  name: 'UserGroupSetting',
  components: {
    BaseSetting
  },
  props: {
    // 必须要传入字符串，id 数字已经超过JavaScript最大整数值
    userId: {
      type: String,
      required: true
    },
    groupId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      groupOptions: [],
      innerGroupId: this.groupId
    }
  },
  methods: {
    // 显示修改分组弹框；获取分组数据
    handleGroupSetting () {
      this.dialogVisible = true
      this.fetchUserGroup()
    },
    // 找到修改后的分组id和name，传递到父组件；同步修改分组的id和groudNames
    handleGroupChange () {
      if (this.groupId !== this.innerGroupId) {
        this.$httpAPI.postUserGroupSetting({
          params: { userId: this.userId, groupId: this.innerGroupId }
        }).then(() => {
          const groupObject = this.$_.find(this.groupOptions, item => item.value === this.innerGroupId)

          this.$emit('on-change', Object.assign({ userId: this.userId }, groupObject))
        }).catch(error => console.log(error))
      }
      this.dialogVisible = false
    },
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
    }
  }
}
</script>

<style lang="scss" scoped>
.el-button {
  margin-left: 10px;
}
</style>
