import Header from './components/Header'
import Main from './components/Main'
import Pokemon from './components/Pokemon'
import Counter from './components/Counter'
import NotFound from './components/NotFound'

import './App.css'

export default (props) => {
  switch (props.path) {
    case '':
      return `
        ${Header(props)}
        ${Main(props)}
      `

    case 'pokemon':
      return `
        ${Header(props)}
        ${Pokemon(props)}
        <h3>Pokemon 2</h3>
        ${render(Counter, props)}
      `

    default:
      return `
        ${Header(props)}
        ${NotFound(props)}
      `
  }
}
