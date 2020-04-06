import { renderComponent } from './render-component'

class Component {
  constructor({ template, selector }) {
    this.template = template
    this.selector = selector
    this.node = null
  }

  render() {
    this.node = document.querySelector(this.selector)
    if (!this.node) {
      throw new Error(`No nodes were found for ${this.selector} selector!`)
    }
    this.node.innerHTML = compileTemplate(this.template, this.state)

    initEvents.call(this)
  }

  setState(newState) {
    this.state = newState
    renderComponent(this)
  }
}

function initEvents() {
  if (!this.events) {
    return
  }

  const events = this.events()

  Object.keys(events).forEach(key => {
    const [type, selector] = key.split(' ')

    this.node
      .querySelector(selector)
      .addEventListener(type, this[events[key]].bind(this))
  })
}

function compileTemplate(template, state) {
  if (!state) {
    return template
  }

  const regex = /{{(.*?)}}/g

  template = template.replace(regex, (str, d) => {
    const key = d.trim()

    return state[key]
  })

  return template
}

export default Component
