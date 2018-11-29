const FormValidation = {
  // 检验不能为空
  validateRequired (title) {
    return { required: true, message: `${title}不能为空` }
  },

  // 检验不能为空
  validateSelect (title) {
    return { required: true, message: `${title}至少选择其中一个` }
  },

  // 检验为整数: 第二参数为最大整数位数（例：2 => 0 - 99之间）
  validateInteger (title, digit) {
    if (arguments[1]) {
      return [
        { required: true, message: `${title}不能为空` },
        { pattern: new RegExp(`^[0-9]{1,${digit}}$`), message: `${title}必须 0 - ${generateHighestInteger(digit)} 为之间整数` }
      ]
    }

    return [
      { required: true, message: `${title}不能为空` },
      { pattern: /^[0-9]+$/, message: `${title}必须为整数` }
    ]
  }
}

// 根据位数生产对应位置对应最大的整数（9数字拼接）
function generateHighestInteger (digit) {
  let result = ''

  for (let i = 0; i < digit; i++) {
    result += '9'
  }

  return result
}

export default FormValidation
