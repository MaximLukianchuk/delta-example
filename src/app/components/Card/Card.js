import { cn, map, ref, get } from 'delta'

import Hr from '../Hr'

import './Card.css'

const CardSection = ({ property, value }) => `
    <div class='card-item'>
        <span class='card-property'>${property}</span>
        <span class='card-value'>${value}</span>
    </div>
`

const Card = ({ useEffect, className, title, subTitle, getItems, items, ...props }) => {
  const cardContentRef = ref()
  
  useEffect(async () => {
    if (!getItems) return
    
    const { abilities } = await getItems
    for (const { ability: { url } } of abilities) {
      await get(url)
        .then(({ name, effect_entries: [{short_effect}] }) => {
          cardContentRef().insertAdjacentHTML('beforeend', CardSection({ property: name, value: short_effect }))
        })
    }
  })
  
  return `
    <div class='${cn(className, 'card')}'>
        <div class='card-header'>
            <h1 class='card-title'>${title}</h1>
            <h3 class='card-subtitle'>${subTitle}</h3>
        </div>
        ${Hr(props)}
        <div id='${cardContentRef()}' class='card-content'>
            ${items ? map(items, el => CardSection(el)) : ''}
        </div>
    </div>
`
}

export default Card
