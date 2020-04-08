import { cn, map } from 'delta'

import Hr from '../Hr'

import './Card.css'

const CardSection = ({ property, value }) => `
    <div class='card-item'>
        <span class='card-property'>${property}</span>
        <span class='card-value'>${value}</span>
    </div>
`

const Card = ({ useEffect, className, title, subTitle, items, ...props }) => `
    <div class='${cn(className, 'card')}'>
        <div class='card-header'>
            <h1 class='card-title'>${title}</h1>
            <h3 class='card-subtitle'>${subTitle}</h3>
        </div>
        ${Hr(props)}
        <div class='card-content'>
            ${map(items, el => CardSection(el))}
        </div>
    </div>
`

export default Card
