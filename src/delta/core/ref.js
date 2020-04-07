export const ref = () => {
  let id = null
  let node = null

  return () => {
    if (!id) {
      id = Math.floor(Math.random() * 10000000).toString()
      return id
    }

    if (!node) {
      node = document.getElementById(id)
    }
    return node
  }
}
