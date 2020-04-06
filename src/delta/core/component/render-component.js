export function renderComponent(component) {
  console.log('I AM HERE')
  if (component.willRender) {
    component.willRender()
  }

  component.render()

  if (component.didRender) {
    component.didRender()
  }
}
