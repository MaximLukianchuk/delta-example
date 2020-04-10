// import {cn, ref, map, get} from 'delta'
//
// import withAsync from '../../hocs/withAsync'
//
// import './SmartSearch.css'
//
// const ResultSection = ({ name, id }) => `
//     <div class='result-section'>
//         <a class='result-link' href='#pokemon/${id}'></a>
//         <span class='result-name'>${name}</span>
//     </div>
//   `
//
// const ResultsContent = ({ items, useEffect }) => {
//   useEffect(() => {
//     console.log('df')
//   })
//
//   return `
//   ${map(items, el => ResultSection({ ...el }))}
// `
// }
//
// const ResultsContentAsync = withAsync(ResultsContent)
//
// const SmartSearch = ({ className, useEffect, ...props }) => {
//   const inputRef = ref()
//   const resultsRef = ref()
//
//   const asyncProps = get('https://pokeapi.co/api/v2/pokemon/?limit=811')
//
//   const patch = async ({ results }) => {
//     return {
//       items: results.map(({ name, url }) => ({ name, id: url.split('/').slice(-2)[0] }))
//     }
//   }
//
//   const showResults = () => {
//     resultsRef().classList.remove('hidden')
//   }
//
//   const hideResults = ({ target: { classList } }) => {
//     if (classList.contains('search-input') || classList.contains('result-link')) {
//       return
//     }
//     resultsRef().classList.add('hidden')
//   }
//
//   // const search = () => {
//   //   console.log(inputRef().value)
//   //   resultsRef().innerHTML = ResultsContent({ ...props, items: [{name: 'hui', id: 25}] })
//   // }
//
//   useEffect(() => {
//     inputRef().addEventListener('focus', showResults)
//     // inputRef().addEventListener('input', search)
//     document.addEventListener('click', hideResults)
//
//     return () => {
//       inputRef().removeEventListener('focus', showResults)
//       // inputRef().removeEventListener('input', search)
//       document.removeEventListener('click', hideResults)
//     }
//   })
//
//   return `
//     <div class='${cn('search', className)}'>
//         <input id='${inputRef()}' class='search-input' type='text' placeholder='pokemon name'>
//         <div id='${resultsRef()}' class='${cn('hidden', 'search-results')}'>
//             ${ResultsContentAsync({ ...props, asyncProps, patch, useEffect, spinnerType: 'dual-ring' })}
//         </div>
//     </div>
// `
// }
//
// export default SmartSearch




import { cn, ref, get, strToHTML } from 'delta'

import Input from '../Input'
import SearchList from '../SearchList'

import './SmartSearch.css'

const SmartSearch = ({ className, useEffect, ...props }) => {
  const searchPanelRef = ref()
  const inputRef = ref()
  
  let items = []
  
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
  
    get('https://pokeapi.co/api/v2/pokemon/?limit=811')
      .then(({ results }) => {
        inputRef().removeAttribute('disabled')
        items = results.map(({ name, url }) => ({ name, id: url.split('/').slice(-2)[0] }))
      })
    
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

export default SmartSearch
