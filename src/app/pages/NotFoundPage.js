import Δ from 'delta'

class NotFoundPage extends Δ.Component {
  constructor(config) {
    super(config)
  }
}

export const notFoundPage = new NotFoundPage({
  selector: '#pokemon-page',
  template: `
    <h1>PAGE NOT FOUND</h1>
  `
})
