const willUnmountCallbacks = []

const render = (rootComponent, node) => {
  const [path, id] = window.location.hash.slice(1).split('/')

  const didMountCallbacks = []

  const props = {
    location: { path, id },
    useEffect: callback => {
      didMountCallbacks.push(callback)
    },
    useTheme: () => {
      return () => {
        const isThemed = localStorage.getItem('themed')
        node.classList.toggle('themed')
        localStorage.setItem('themed', isThemed === 'true' ? 'false' : 'true')
      }
    }
  }
  
  while (willUnmountCallbacks.length) {
    const cb = willUnmountCallbacks.shift()
    typeof cb === 'function' && cb()
  }

  node.innerHTML = rootComponent(props)

  for (let callback of didMountCallbacks) {
    let cb = callback()
    cb && willUnmountCallbacks.push(cb)
  }
}

export const bootstrap = (rootComponent, selector) => {
  const node = document.querySelector(selector)
  const isThemed = localStorage.getItem('themed')
  
  if (!node) {
    throw new Error(`No nodes were found for ${selector} selector!`)
  }
  
  if (isThemed === 'true') {
    node.classList.add('themed')
  }
  
  window.addEventListener('hashchange', () => render(rootComponent, node))
  render(rootComponent, node)
}
