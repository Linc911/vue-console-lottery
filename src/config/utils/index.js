export default {
  initializeObjectProperties (obj) {
    for (let k in obj) {
      switch (typeof obj[k]) {
        case 'string':
          obj[k] = ''
          break
        case 'number':
          obj[k] = ''
          break
        case 'boolean':
          obj[k] = false
          break
      }
    }
  },

  // 重置form相关组件的fields，调用组件提供的reset方法
  invokeRefResetMothod (refs) {
    const refsArray = Object.keys(refs).filter(item => !item.includes('form'))

    refsArray.forEach(ref => refs[ref].reset())
  },

  // 判断两个对象是否相等（只对比自有属性是否相等）
  isEquivalentObjects (a, b) {
    const aProps = Object.keys(a)
    const bProps = Object.keys(b)

    if (aProps.length !== bProps.length) {
      return false
    }

    for (let i = 0; i < aProps.length; i++) {
      let propName = aProps[i]
      if (a[propName] !== b[propName]) {
        return false
      }
    }

    return true
  },
  // 对面两个对象，将改变的属性组合成新对象;(已 a 对象为参考对象, 顺序要对)
  generateObjectWithChangedProperties (a, b) {
    let result = {}
    const aProps = Object.keys(a)

    for (let i = 0; i < aProps.length; i++) {
      let propName = aProps[i]
      if (a[propName] !== b[propName]) {
        result[propName] = b[propName]
      }
    }

    return result
  },
  /* Form Validator */
  // 整数检验
  generateFormValidatorInteger (title) {
    return [
      { required: true, message: `${title}不能为空` },
      { pattern: /^[0-9]+$/, message: `${title}必须为整数` }
    ]
  }
}
