const FormValidation = {
  // 检验不能为空
  validateRequired (title) {
    return { required: true, message: `${title}不能为空` }
  },

  // 检验不能为空
  validateSelect (title) {
    return { required: true, message: `${title}至少选择其中一个` }
  },

  // 验证手机号码
  validatePhone (title) {
    return [
      { required: true, message: `${title}不能为空` },
      { pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/, message: '请输入有效的11位手机号码' }
    ]
  },

  // 验证手机号码
  validateStringLength (title, min, max) {
    return [
      { required: true, message: `${title}不能为空` },
      { min, max, message: `${title}长度在 ${min} - ${max} 字符之间` }
    ]
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
