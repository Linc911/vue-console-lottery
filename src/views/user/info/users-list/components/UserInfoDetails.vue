<template lang="html">
  <div class="user-info">
    <BaseMore @on-click="handleViewUserInfo" />
    <!-- 会员信息详情弹框 -->
    <el-dialog
      title="会员信息详情"
      :visible.sync="dialogVisible"
      width="320px"
      center
    >
      <ul class="dialog-user-info">
        <li>用户ID：{{user.id}}</li>
        <li>会员账号：{{user.username}}</li>
        <li>会员昵称：{{user.nickname}}</li>
        <li>账号状态：{{user.enable ? '正常' : '异常'}}</li>
      </ul>
    </el-dialog>
  </div>
</template>

<script>
import BaseMore from '@/components/base/BaseMore'
export default {
  name: 'UserInfoDetails',
  components: {
    BaseMore
  },
  props: {
    userId: {
      type: [ Number, String ],
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      user: { id: '', username: '', nickname: '', enable: false }
    }
  },
  methods: {
    handleViewUserInfo () {
      this.dialogVisible = true
      this.fetchUserInfo()
    },
    fetchUserInfo () {
      if (!this.user.id) {
        this.$httpAPI.getUserInfo({ params: { userId: this.userId } }).then(response => {
          response.data.data && (this.user = response.data.data)
        }).catch(error => console.log(error))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.user-info {
  display: inline-block;
}
</style>
