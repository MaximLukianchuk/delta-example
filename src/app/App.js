import Δ from 'delta'

import './App.css'

class App extends Δ.Component {
  constructor(config) {
    super(config);
  }
}

export const app = new App({
  selector: '#root',
  template: `
    <div id="header"></div>
    <div id="router"></div>
  `
})
