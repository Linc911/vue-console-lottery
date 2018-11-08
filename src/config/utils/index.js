export default {
  initializeObjectProperties: obj => {
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
  }
}
