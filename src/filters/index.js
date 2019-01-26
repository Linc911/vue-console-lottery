import Vue from 'vue'
import moment from 'moment'

function addZeroPrefix (n) {
  if (n >= 10) {
    return n
  } else {
    return '0' + n
  }
}

/* ======================================= 公共过滤器 =============================================== */
// 时间格式化
Vue.filter('date', value => {
  if (value) {
    return moment(value).format('YYYY-MM-DD')
  }
  return ''
})
Vue.filter('time', value => {
  if (value) {
    return moment(value).format('YYYY-MM-DD HH:mm:ss')
  }
  return ''
})
Vue.filter('sortTime', second => {
  const s = addZeroPrefix(second % 60)
  const m = addZeroPrefix(Math.floor(second / 60) % 60)
  const h = addZeroPrefix(Math.floor(second / 3600))

  return `${h}:${m}:${s}`
})

// 货币数值格式化
Vue.filter('RMB', value => {
  if (value === null || value === undefined) {
    return ''
  }

  if (value === 0) {
    return '￥ ' + value
  }

  const arr = Number(value).toFixed(2).split('.')

  return '￥ ' + Number(arr[0]).toLocaleString() + '.' + arr[1]
})

// 数值格式化
Vue.filter('number', value => {
  if (value === null || value === undefined) {
    return ''
  }

  return Number(value).toLocaleString()
})

// 百分比
Vue.filter('percent', value => {
  return Number(value).toFixed(2) + '%'
})

// 性别
Vue.filter('gender', value => {
  if (value !== null) {
    switch (value) {
      case 0:
        return '女'
      case 1:
        return '男'
      default:
        return '其他'
    }
  }
  return ''
})

// 手机号码格式为 188 8888 8888
Vue.filter('phoneFormat', value => {
  if (!value) {
    return ''
  }

  const strVal = String(value)
  return `${strVal.substr(0, 3)} ${strVal.slice(3, 7)} ${strVal.slice(7)}`
})

// 按传入的连接符，连接数组为字符串
Vue.filter('separator', (value, separator) => {
  if (value) {
    return value.join(separator || ' ')
  }
  return ''
})

// 将数字转换为中文数字
Vue.filter('capitalizeNumber', value => {
  switch (value) {
    case 1:
      return '一'
    case 2:
      return '二'
    case 3:
      return '三'
    case 4:
      return '四'
    case 5:
      return '五'
    default:
      return '其他'
  }
})

/* ======================================= 用户相关 =============================================== */
// 将数字转换为中文数字
Vue.filter('userType', value => {
  switch (value) {
    case 'APP':
      return '前端app用户'
    case 'BACKEND':
      return '后端管理用户'
    case 'TEST':
      return '游客'
    default:
      return '其他'
  }
})

/* ======================================= 充值相关 =============================================== */
// 充值支付类型
Vue.filter('paymentType', value => {
  switch (value) {
    case -1:
      return '客服填单'
    case 0:
      return '其他'
    case 1:
      return '微信'
    case 2:
      return '支付宝'
    case 3:
      return '银联'
    case 4:
      return 'QQ钱包'
    default:
      return '其他'
  }
})

// 充值订单状态
Vue.filter('paymentStatus', value => {
  switch (value) {
    case 0:
      return '未支付'
    case 1:
      return '未确认'
    case 2:
      return '审批成功'
    case 3:
      return '支付成功'
    case 4:
      return '失败'
    default:
      return '其他'
  }
})

/* ======================================= 状态相关 =============================================== */
// 审核状态
Vue.filter('statusTrible', value => {
  switch (value) {
    case 0:
      return '启用'
    case 1:
      return '禁用'
    case 2:
      return '发布'
    default:
      return '其他'
  }
})

/* ======================================= 审核相关 =============================================== */
// 审核状态
Vue.filter('auditStatus', value => {
  switch (value) {
    case 0:
      return '待审批'
    case 1:
      return '已查阅，待确认'
    case 2:
      return '审批通过'
    case 3:
      return '审批拒绝'
    default:
      return '其他'
  }
})

// 审核状态
Vue.filter('auditTransfer', value => {
  switch (value) {
    case 0:
      return '审批'
    case 1:
      return '审批'
    case 2:
      return '详情'
    case 3:
      return '详情'
    default:
      return '其他'
  }
})

/* ======================================= 彩票相关 =============================================== */
// 开奖结算状态
Vue.filter('lotteryStatus', value => {
  switch (value) {
    case 0:
      return '未开奖'
    case 1:
      return '未结算'
    case 2:
      return '已结算'
    case 3:
      return '已撤单'
    default:
      return '其他'
  }
})
// 开奖结算状态
Vue.filter('lotteryOrderStatus', value => {
  switch (value) {
    case 0:
      return '未结算'
    case 1:
      return '中奖'
    case 2:
      return '未中奖'
    default:
      return '其他'
  }
})
// 彩票球
Vue.filter('lotteryBall', value => {
  if (value === 11) {
    return '和 和'
  } else if (value < 6) {
    return value % 2 ? '小 单' : '小 双'
  } else {
    return value % 2 ? '大 单' : '大 双'
  }
})
// 骰子围骰
Vue.filter('diceRepeat', value => {
  switch (value) {
    case 0:
      return '无围骰'
    case 1:
      return '围骰1'
    case 2:
      return '围骰2'
    case 3:
      return '围骰3'
    case 4:
      return '围骰4'
    case 5:
      return '围骰5'
    case 6:
      return '围骰6'
    default:
      return '其他'
  }
})
// 开奖结果：总和大小
Vue.filter('sumBigSmall', (value) => {
  switch (value) {
    case 0:
      return '小'
    case 1:
      return '大'
    case 2:
      return '和'
    default:
      return '其他'
  }
})
// 开奖结果：总和单双
Vue.filter('sumOddEven', (value) => {
  switch (value) {
    case 0:
      return '单'
    case 1:
      return '双'
    case 2:
      return '和'
    default:
      return '其他'
  }
})
// 开奖结果：总和尾大尾小
Vue.filter('sumLastBigSmall', (value) => {
  switch (value) {
    case 0:
      return '尾小'
    case 1:
      return '尾大'
    case 2:
      return '和'
    default:
      return '其他'
  }
})
// 开奖结果：总和龙虎
Vue.filter('sumDragonTiger', (value) => {
  switch (value) {
    case 0:
      return '龙'
    case 1:
      return '虎'
    default:
      return '其他'
  }
})
// 开奖结果：总和龙虎对比
Vue.filter('sumDragonTigerCompare', (value) => {
  switch (value) {
    case 0:
      return '龙虎相等'
    case 1:
      return '龙多'
    case 2:
      return '虎多'
    case 3:
      return '全龙'
    case 4:
      return '全虎'
    default:
      return '其他'
  }
})

/* 赔率相关 */
// 11选5 赔率第二类类型
Vue.filter('rateEleventSType', value => {
  switch (value) {
    case 1:
      return '第一球'
    case 2:
      return '第二球'
    case 3:
      return '第三球'
    case 4:
      return '第四球'
    case 5:
      return '第五球'
    case 6:
      return '总和'
    default:
      return '其他'
  }
})
// 11选5 赔率第三类类型
Vue.filter('rateEleventTType', value => {
  switch (value) {
    case 1:
      return '大'
    case 2:
      return '小'
    case 3:
      return '单'
    case 4:
      return '双'
    case 5:
      return '尾大'
    case 6:
      return '尾小'
    case 7:
      return '龙'
    case 8:
      return '虎'
    case 9:
      return '一中一'
    case 10:
      return '二中二'
    case 11:
      return '三中三'
    case 12:
      return '四中四'
    case 13:
      return '五中五'
    case 14:
      return '六中五'
    case 15:
      return '七中五'
    case 16:
      return '八中五'
    case 17:
      return '前二'
    case 18:
      return '前三'
    case 19:
      return '1号球'
    case 20:
      return '2号球'
    case 21:
      return '3号球'
    case 22:
      return '4号球'
    case 23:
      return '5号球'
    case 24:
      return '6号球'
    case 25:
      return '7号球'
    case 26:
      return '8号球'
    case 27:
      return '9号球'
    case 28:
      return '10号球'
    case 29:
      return '11号球'
    default:
      return '其他'
  }
})

// 快3 赔率第一类类型
Vue.filter('rateFast3FType', value => {
  switch (value) {
    case 1:
      return '总和'
    case 2:
      return '三军'
    case 3:
      return '围骰/全骰'
    case 4:
      return '点数'
    case 5:
      return '长牌'
    case 6:
      return '短牌'
    default:
      return '其他'
  }
})
// 快3 赔率第二类类型
Vue.filter('rateFast3SType', value => {
  switch (value) {
    case 1:
      return '大'
    case 2:
      return '小'
    case 3:
      return '单'
    case 4:
      return '双'
    case 5:
      return '1'
    case 6:
      return '2'
    case 7:
      return '3'
    case 8:
      return '4'
    case 9:
      return '5'
    case 10:
      return '6'
    case 11:
      return '111'
    case 12:
      return '222'
    case 13:
      return '333'
    case 14:
      return '444'
    case 15:
      return '555'
    case 16:
      return '666'
    case 17:
      return '全骰'
    case 18:
      return '4'
    case 19:
      return '5'
    case 20:
      return '6'
    case 21:
      return '7'
    case 22:
      return '8'
    case 23:
      return '9'
    case 24:
      return '10'
    case 25:
      return '11'
    case 26:
      return '12'
    case 27:
      return '13'
    case 28:
      return '14'
    case 29:
      return '15'
    case 32:
      return '1'
    default:
      return '其他'
  }
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
      return '其他'
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
      return '一中一'
    case 10:
      return '二中二'
    case 11:
      return '三中三'
    case 12:
      return '四中四'
    case 13:
      return '五中五'
    case 14:
      return '六中五'
    case 15:
      return '七中五'
    case 16:
      return '八中五'
    case 17:
      return '前二'
    case 18:
      return '前三'
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
    case -1:
      return '输'
    case 1:
      return '赢'
    case 0:
      return '和'
    default:
      return '未处理'
  }
})

/* 财务管理 */
// 存取款调整方向
Vue.filter('depositDircetion', value => {
  switch (value) {
    case 0:
      return '增加'
    case 1:
      return '减少'
    default:
      return '其他'
  }
})
// 存取款调整审核状态
Vue.filter('depositStatus', value => {
  switch (value) {
    case 0:
      return '待审批'
    case 1:
      return '已查阅，待审批'
    case 2:
      return '审批通过'
    case 3:
      return '审批拒绝'
    default:
      return '其他'
  }
})

/* 返水相关 */
// 返水状态
Vue.filter('rebateStatus', value => {
  switch (value) {
    case 0:
      return '未开始'
    case 1:
      return '成功'
    default:
      return '失败'
  }
})

/* ======================================= 港彩相关 =============================================== */
Vue.filter('markSixColor', (value) => {
  switch (value) {
    case 0:
      return '红'
    case 1:
      return '绿'
    case 2:
      return '蓝'
    default:
      return '异常'
  }
})

Vue.filter('markSixRGB', (value) => {
  switch (value) {
    case 0:
      return '#F56C6C'
    case 1:
      return '#67C23A'
    case 2:
      return '#409EFF'
    default:
      return '#909399'
  }
})

Vue.filter('markSixBeast', (value) => {
  return value ? '家禽' : '野兽'
})

Vue.filter('zodiac', (value) => {
  if (typeof value !== 'number') {
    throw new Error('生肖参数必须是数字')
  }

  const arr = [ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪' ]
  return arr[value]
})
