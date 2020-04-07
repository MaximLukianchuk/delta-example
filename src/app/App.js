import Main from './components/Main'
import Pokemon from './components/Pokemon'
import NotFound from './components/NotFound'

import './reset.css'
import './palette.css'
import './App.css'

export const App = props => {
  
  switch (props.path) {
    case '':
      return `
        ${Main(props)}
      `

    case 'pokemon':
      return `
        ${Pokemon(props)}
      `

    default:
      return `
        ${NotFound(props)}
      `
  }
}
