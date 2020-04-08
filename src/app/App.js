import Main from './components/Main'
import Pokemon from './components/Pokemon'
import NotFound from './components/NotFound'

import './reset.css'
import './palette.css'
import './App.css'

export const App = ({ location: { path, id }, ...props }) => {
  
  switch (path) {
    case '':
      return `
        ${Main(props)}
      `
  
    case 'pokemon':
      return `
        ${Pokemon({ ...props, id })}
      `

    default:
      return `
        ${NotFound(props)}
      `
  }
}
