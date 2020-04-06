import { renderComponent } from './render-component'

export function initComponents(bootstrap, components) {
  if (!bootstrap) {
    throw new Error('Bootstrap component is not defined')
  }

  [bootstrap, ...components].forEach(renderComponent)
}
