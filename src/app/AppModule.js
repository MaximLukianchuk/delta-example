import Δ from 'delta'

import { app } from './App';
import { header } from './components/Header/Header';
import { routes } from './Routes'

class AppModule extends Δ.Module {
  constructor(config) {
    super(config)
  }
}

export const appModule = new AppModule({
  components: [
    header
  ],
  bootstrap: app,
  routes
})
