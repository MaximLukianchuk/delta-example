import { cn, ref, get, strToHTML } from 'delta'

import Input from '../Input'
import SearchList from '../SearchList'
import withLocalStorage from '../../hocs/withLocalStorage'

import './SmartSearch.css'

const SmartSearch = ({ className, useEffect, ls, ...props }) => {
  const searchPanelRef = ref()
  const inputRef = ref()
  
  let items = ls.get('poke-items')
  
  const search = () => {
    const possibleChild = searchPanelRef().children[1]
    const resultItems = items.filter(({ name }) => name.toLowerCase().indexOf(inputRef().value.toLowerCase()) > -1)
    
    possibleChild && searchPanelRef().removeChild(possibleChild)
    searchPanelRef().appendChild(strToHTML(SearchList({
      items: resultItems,
      className: resultItems.length >= items.length ? 'hidden' : ''
    })))
  }
  
  useEffect(() => {
    inputRef().addEventListener('input', search)
    
    if (!items) {
      get('https://pokeapi.co/api/v2/pokemon/?limit=811')
        .then(({ results }) => {
          inputRef().removeAttribute('disabled')
          items = results.map(({ name, url }) => ({ name, id: url.split('/').slice(-2)[0], favourite: false }))
          ls.set('poke-items', items)
        })
    } else {
      inputRef().removeAttribute('disabled')
    }
    
    return () => {
      inputRef().removeEventListener('input', search)
    }
  })
  
  return `
    <div id='${searchPanelRef()}' class='${cn('search', className)}'>
        ${Input({
          placeholder: 'pokemon name',
          type: 'text',
          className: 'search-input',
          ref: inputRef,
          disabled: true,
        })}
    </div>
`
}

export default withLocalStorage(SmartSearch)
