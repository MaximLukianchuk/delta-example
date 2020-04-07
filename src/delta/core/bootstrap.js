const render = (rootComponent, selector, state, setState) => {
  let node = document.querySelector(selector)

  if (!node) {
    throw new Error(`No nodes were found for ${selector} selector!`)
  }

  let path = window.location.hash.slice(1)

  let onMountCallbacks = []

  let props = {
    path,
    state,
    setState,
    onMount: (callback) => {
      onMountCallbacks.push(callback)
    }
  }

  node.innerHTML = rootComponent(props)

  for (let callback of onMountCallbacks) {
    callback()
  }
}

export default (rootComponent, selector, initialState = {}) => {
  let state = initialState

  const setState = (newState) => {
    state = { ...state, ...newState }
    render(rootComponent, selector, state, setState)
  }

  window.addEventListener('hashchange', () => render(rootComponent, selector, state, setState))
  render(rootComponent, selector, state, setState)
}
