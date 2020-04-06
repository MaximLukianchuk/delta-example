import {mainPage, pokemonPage, notFoundPage} from './pages';


export const routes = [
  {
    path: '',
    component: mainPage
  },
  {
    path: 'pokemon',
    component: pokemonPage
  },
  {
    path: '**',
    component: notFoundPage
  }
]
