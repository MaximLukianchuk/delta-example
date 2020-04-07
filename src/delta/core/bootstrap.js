const willUnmountCallbacks = []

const render = (rootComponent, node) => {
  const path = window.location.hash.slice(1)

  const didMountCallbacks = []

  const props = {
    path,
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

  node.innerHTML = rootComponent(props)

  while (willUnmountCallbacks.length) {
    const cb = willUnmountCallbacks.shift()
    typeof cb === 'function' && cb()
  }

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
