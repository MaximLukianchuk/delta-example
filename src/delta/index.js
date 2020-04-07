const ref = () => {
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

const render = (component, props) => {
  const rectangleRef = ref()

  let state = null
  let didMount = null
  let willUnmount = null

  const setState = (newState) => {
    state = { ...state, ...newState }

    if (willUnmount) {
      willUnmount()
    }

    rectangleRef().innerHTML = component({ ...props, state, setState })

    if (didMount) {
      willUnmount = didMount()
    }
  }

  const useState = (initialState) => {
    if (!state) {
      state = initialState
    }

    return [state, setState]
  }

  const useEffect = (c) => {
    didMount = c
  }

  return `
    <div id=${rectangleRef()}>
        ${component({ ...props, state, setState })}
    </div>
  `
}

export {
  ref,
  render,
  bootstrap
}
