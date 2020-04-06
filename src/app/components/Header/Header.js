import Δ from 'delta'

import logo from './logo.svg'
import './Header.css'

class Header extends Δ.Component {
  constructor(config) {
    super(config)
  }
}

export const header = new Header({
  selector: '#header',
  template: `
    <header class="header">
        <div class="header-content">
            <a href="#"><img class="content-logo" src=${logo} alt="логотип"></a>
            <nav class="content-menu">
                <ul class="menu-items">
                    <li class="menu-item"><a href="#">Главная</a></li>
                    <li class="menu-item"><a href="#pokemon">Покемон</a></li>
                </ul>
            </nav>
        </div>
    </header>
  `
})
