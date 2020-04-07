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

export default ({ useEffect, useState }) => {
  //let counter = 0
  let [state, setState] = useState({ counter: 23 })

  let eventListener
  let buttonRef = ref()
  let spanRef = ref()

  let increment = () => {
    // counter ++
    // spanRef().innerText = counter.toString()
    console.log('increment')

    setState({ counter: state.counter + 1 })
  }

  useEffect(() => {
    eventListener = buttonRef().addEventListener('click', increment)

    return () => {
      eventListener.remove()
    }
  })

  return `
    <button id=${buttonRef()}>Increment</button>
    <span id=${spanRef()}>${state.counter}</span>
  `
}
