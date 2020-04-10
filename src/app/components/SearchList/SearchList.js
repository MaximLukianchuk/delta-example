import { cn, map, } from 'delta'

import './SearchList.css'

const ListItem = ({ name, id }) => `
    <div class='list-item'>
        <a class='item-link' href='#pokemon/${id}'></a>
        <span class='item-name'>${name}</span>
    </div>
`

const NoResults = () => `
  <span class='no-items'>no search results</span>
`

const SearchList = ({ className, items }) => `
    <div class='${cn(className, 'search-list')}'>
        ${items.length > 0 ? map(items, el => ListItem(el)) : NoResults()}
    </div>
 `


export default SearchList
