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
  }
}
