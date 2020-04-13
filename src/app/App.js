import Main from './components/Main'
import Pokemon from './components/Pokemon'
import FavouritePokemons from './components/FavouritePokemons'
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
    
    case 'favourite-pokemons':
      return `
        ${FavouritePokemons(props)}
      `

    default:
      return `
        ${NotFound(props)}
      `
  }
}
