import { initComponents } from '../component/init-components'
import { initRouting } from '../routing/init-routing'

class Module {
  constructor({ components, bootstrap, routes }) {
    this.components = components
    this.bootstrap = bootstrap
    this.routes = routes
  }

  start() {
    initComponents(this.bootstrap, this.components)
    initRouting(this.routes)
  }
}

export default Module
