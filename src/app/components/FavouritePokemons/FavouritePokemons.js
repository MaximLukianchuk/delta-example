import { get, ref, compose, strToHTML, map } from 'delta'

import ResumeCard from '../ResumeCard'
import withHeader from '../../hocs/withHeader'
import withLocalStorage from '../../hocs/withLocalStorage';

import './FavouritePokemons.css'

const PokemonsList = ({ items }) => `
  <div class='pokemon-list'>
    ${map(items, ({ items, images, name, id }) => ResumeCard({
        className: 'poke-resume',
        items,
        images,
        name,
        id,
        favourite: true
      }))}
  </div>
`

const FavouritePokemons = ({ useEffect, ls, ...props }) => {
  const favouritePokemonsRef = ref()
  
  useEffect(async () => {
    const resData = []
    const items = ls.get('poke-items').filter(({ favourite }) => favourite)
  
    for (const { id } of items) {
      await get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(async ({ name, abilities, sprites: { front_default, front_shiny } }) => {
          const fetchedAbilities = []
  
          for (const { ability: { url } } of abilities) {
            await get(url)
              .then(({ name, effect_entries: [{ short_effect }] }) => {
                fetchedAbilities.push({ property: name, value: short_effect })
              })
          }
          
          resData.push({
            name: { title: name, subTitle: '' },
            id,
            items: fetchedAbilities,
            images: [
              { src: front_default, className: 'card-image', size: 'medium', alt: 'Это что за покемон?' },
              { src: front_shiny, className: 'hidden-card-image', size: 'medium', alt: 'Это что за покемон?' }
            ],
          })
        })
    }
  
    resData.length > 0 && favouritePokemonsRef().appendChild(strToHTML(PokemonsList({ items: resData })))
  })
  
  return `
    <div id='${favouritePokemonsRef()}' class='favourite-pokemons'>
        <h1 class='title'>Избранные покемоны</h1>
    </div>
`
}

export default compose(
  withHeader,
  withLocalStorage
)(FavouritePokemons)
