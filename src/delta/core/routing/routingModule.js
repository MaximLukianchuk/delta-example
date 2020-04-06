import { router } from './router'
import { renderComponent } from '../component/render-component';

class RoutingModule {
  constructor(routes) {
    this.routes = routes
  }

  init() {
    window.addEventListener('hashchange', () => renderRoutes(this.routes))
    renderRoutes(this.routes)
  }
}

function renderRoutes(routes) {
  let url = router.getUrl()
  let route = routes.find(route => route.path === url)

  if (!route) {
    route = routes.find(route => route.path === '**')
  }

  document.querySelector('#router').innerHTML = `<div id="${route.component.selector.slice(1)}" />`
  renderComponent(route.component)
}

export default RoutingModule
