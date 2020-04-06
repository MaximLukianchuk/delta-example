import RoutingModule from './routingModule'

export function initRouting(routes) {
  if (routes) {
    const routing = new RoutingModule(routes)
    routing.init()
  }
}
