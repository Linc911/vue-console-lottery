import Vue from 'vue'
import moment from 'moment'

// 时间格式化
Vue.filter('time', value => {
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
})

// 货币数值格式化
Vue.filter('RMB', value => {
  return '￥ ' + parseInt(value).toLocaleString()
})

/* 投注相关 */
// 投注主类型
Vue.filter('betType', value => {
  switch (value) {
    case 1:
      return '主盘势'
    case 2:
      return '单选'
    case 3:
      return '选号-任选'
    case 4:
      return '选号-组选'
    case 5:
      return '选号-直选'
    default:
      return '主盘势'
  }
})
// 投注子类型
Vue.filter('betSubtype', value => {
  switch (value) {
    case 1:
      return '总和大'
    case 2:
      return '总和小'
    case 3:
      return '总和单'
    case 4:
      return '总和双'
    case 5:
      return '总和尾大'
    case 6:
      return '总和尾小'
    case 7:
      return '龙'
    case 8:
      return '虎'
    case 9:
      return '1中1'
    case 10:
      return '2中2'
    case 11:
      return '3中3'
    case 12:
      return '4中4'
    case 13:
      return '5中5'
    case 14:
      return '6中5'
    case 15:
      return '7中5'
    case 16:
      return '8中5'
    case 17:
      return '前2'
    case 18:
      return '前3'
    case 19:
      return '单号大'
    case 20:
      return '单号小'
    case 21:
      return '单号单'
    case 22:
      return '单号双'
    default:
      return '总和大'
  }
})
// 投注处理状态
Vue.filter('betStatus', value => {
  switch (value) {
    case 0:
      return '未处理'
    case 1:
      return '已处理'
    default:
      return '未处理'
  }
})
// 投注处理状态
Vue.filter('betResult', value => {
  switch (value) {
    case null:
      return '未处理'
    case 'LOSE':
      return '输'
    case 'WIN':
      return '赢'
    default:
      return '未处理'
  }
})

/* 充值相关 */
// 充值支付类型
Vue.filter('changedType', value => {
  switch (value) {
    case 1:
      return '微信'
    default:
      return '其他'
  }
})
// 充值订单状态
Vue.filter('changedStatus', value => {
  switch (value) {
    case 0:
      return '未支付'
    case 1:
      return '未确认'
    case 2:
      return '支付成功'
    case 3:
      return '失败'
    default:
      return '未支付'
  }
})
