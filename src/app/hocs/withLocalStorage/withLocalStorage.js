const withLocalStorage = baseComponent => props => {
  const ls = {
    set: (key, value) => {
      localStorage.setItem(key, JSON.stringify(value))
    },
    get: key => JSON.parse(localStorage.getItem(key)),
    remove: key => localStorage.removeItem(key),
    length: () => localStorage.length
  }
  
  
  return baseComponent({...props, ls})
}

export default withLocalStorage
