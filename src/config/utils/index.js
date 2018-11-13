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
  invokeRefResetMothod (refs) {
    const refsArray = Object.keys(refs).filter(item => !item.includes('form'))

    refsArray.forEach(ref => refs[ref].reset())
  },
  // 判断两个对象是否相等（只对比自有属性是否相等）
  isEquivalentObjects (a, b) {
    const aProps = Object.getOwnPropertyNames(a)
    const bProps = Object.getOwnPropertyNames(b)

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
    const aProps = Object.getOwnPropertyNames(a)

    for (let i = 0; i < aProps.length; i++) {
      let propName = aProps[i]
      if (a[propName] !== b[propName]) {
        result[propName] = b[propName]
      }
    }

    return result
  }
}
