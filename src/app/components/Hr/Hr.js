import { cn } from 'delta'

import './Hr.css'

const Hr = ({ className }) => `
    <div class='${cn(className, 'horizontal-line')}'></div>
`

export default Hr
