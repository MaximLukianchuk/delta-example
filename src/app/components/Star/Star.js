import { cn } from 'delta'

import withLocalStorage from '../../hocs/withLocalStorage'

import './Star.css'

const Star = ({ className, selected, pokeId, ls }) => {
    // ужасный костыль: из-за встраивания верхнего компонента через innerHtml (для асинхронных данных) не вызывается useEffect при рендере
    setTimeout(() => {
        const node = document.getElementById(pokeId)

        node.addEventListener('click', () => {
            const pokeItems = ls.get('poke-items')
            const prevState = pokeItems[pokeId - 1].favourite
            pokeItems[pokeId - 1].favourite = !prevState
            ls.set('poke-items', pokeItems)
            node.classList.toggle('selected')
        })
    }, 0)
    
    return `
      <div
          class='${cn('star', className, { selected })}'
          id=${pokeId}
      >
      </div>
`
}

export default withLocalStorage(Star)
