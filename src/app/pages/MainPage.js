import Δ from 'delta'

class MainPage extends Δ.Component {
  constructor(config) {
    super(config)
  }
}

export const mainPage = new MainPage({
  selector: '#main-page',
  template: `
    <h1>Main page!</h1>
  `
})
